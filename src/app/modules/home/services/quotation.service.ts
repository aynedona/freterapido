import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getQuotation(quotation: string): Observable<any> {
    // return this.httpClient.get(`https://economia.awesomeapi.com.br/json/last/CAD-BRL,ARS-BRL,GBP-BRL`);
    return this.httpClient.get(`https://economia.awesomeapi.com.br/json/last/${quotation}`);
  }
}
