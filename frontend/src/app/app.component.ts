import {Component, OnInit} from '@angular/core';
import {ExchangeRatesService} from "./exchange-rates.service";
import {WinesService} from "./wines.service";
import {Wine} from "./model/wines/wine";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private baseCurrency = "USD";
  private currency = this.baseCurrency;
  private currencies: string[] = [this.baseCurrency];
  private currenciesOfRates: Map<string, number> = new Map<string, number>();
  private lastPage = 0;
  private wines: Wine[] = [];

  constructor(private exchangeRatesService: ExchangeRatesService,
              private winesService: WinesService) {
  }

  ngOnInit(): void {
    this.recalculatePrices();
    this.appendWines();
  }

  private onScroll() {
    this.appendWines();
  }

  private appendWines(): void {
    this.winesService.getWines(this.lastPage++).subscribe(winesRoot => {
      this.wines.push(...winesRoot._embedded.wines);
    });
  }

  private recalculatePrices(event = null) {
    if (event != null) {
      this.currency = event.target.value;
    }
    this.exchangeRatesService.getLatestRatesWithBase(this.baseCurrency)
      .subscribe(root => {
        this.currencies = Object.keys(root.rates);
        for (let [currency, rate] of Object.entries(root.rates)) {
          this.currenciesOfRates.set(currency, rate);
        }
      });
  }

}
