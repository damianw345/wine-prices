import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {WinesRoot} from "./model/wines/wines-root";

@Injectable({
  providedIn: 'root'
})
export class WinesService {

  private winesUrl = 'http://localhost:8080/wines';

  constructor(private http: HttpClient) {
  }

  public getWines(page = 0): Observable<WinesRoot> {
    return this.http.get<WinesRoot>(`${this.winesUrl}?page=${page}`);
  }
}
