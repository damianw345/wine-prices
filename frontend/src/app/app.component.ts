import {Component, OnInit} from '@angular/core';
import {ExchangeRatesService} from "./exchange-rates.service";
import {WinesService} from "./wines.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private exchangeRatesService: ExchangeRatesService, private winesService: WinesService) {
  }

  ngOnInit(): void {

    this.exchangeRatesService.getLatestRatesWithBase("USD").subscribe(value => {
      console.log(value.rates);
    });

    this.winesService.getWines(0).subscribe(value => {
      console.log(value)
    });

  }

}
