import {Component, OnInit} from '@angular/core';
import {ExchangeRatesService} from "./exchange-rates.service";
import {WinesService} from "./wines.service";
import {Observable} from "rxjs";
import {WinesRoot} from "./model/wines/wines-root";
import {Wine} from "./model/wines/wine";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private wines$: Observable<WinesRoot>;
  private defaultCurrency = "USD";
  private currency = this.defaultCurrency;
  private currencies: string[] = [this.defaultCurrency];
  private currenciesOfRates: Map<string, number> = new Map<string, number>();
  private lastPage = 0;
  private wines: Wine[] = [];

  constructor(private exchangeRatesService: ExchangeRatesService,
              private winesService: WinesService) {
  }

  ngOnInit(): void {
    this.exchangeRatesService.getLatestRatesWithBase(this.defaultCurrency)
      .subscribe(root => {
        this.currencies = Object.keys(root.rates);
        for (let [key, value] of Object.entries(root.rates)) {
          this.currenciesOfRates.set(key, value);
        }
      });
    this.appendWines()
  }

  onScroll() {
    this.appendWines()
  }

  private appendWines(): void {
    this.winesService.getWines(this.lastPage++).subscribe(winesRoot => {
      this.wines.push(...winesRoot._embedded.wines);
    });
  }

}
