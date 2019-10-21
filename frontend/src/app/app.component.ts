import {Component, OnInit} from '@angular/core';
import {ExchangeRatesService} from "./exchange-rates.service";
import {WinesService} from "./wines.service";
import {Observable} from "rxjs";
import {ExchangeRates} from "./model/exchange-rates";
import {WinesRoot} from "./model/wines/wines-root";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private exchangeRatesService: ExchangeRatesService, private winesService: WinesService) {
  }

  exchangeRates$: Observable<ExchangeRates>;
  wines$: Observable<WinesRoot>;

  ngOnInit(): void {

    this.exchangeRates$ = this.exchangeRatesService.getLatestRatesWithBase("USD");
    this.wines$ = this.winesService.getWines(0);
  }

}
