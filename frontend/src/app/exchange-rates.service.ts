import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ExchangeRates} from "./model/exchange-rates";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRatesService {

  private exchangeRatesUrl = 'https://api.exchangeratesapi.io';

  constructor(private http: HttpClient) {
  }

  public getLatestRatesWithBase(base: string): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(`${this.exchangeRatesUrl}/latest?base=${base}`);
  }
}
