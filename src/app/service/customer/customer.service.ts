import { Injectable } from '@angular/core';
import {map} from "rxjs";
import {Customer} from "../../model/customer";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly _backendUrlCustomers: string;
  private readonly _httpOptions: object;

  constructor(private http: HttpClient) {
    this._backendUrlCustomers = `${environment.backendUrl}/customers`;
    this._httpOptions = environment.httpOptions;
  }

  getCustomers() {
    return this.http.get<Customer[]>(this._backendUrlCustomers, this._httpOptions).pipe(
      map(p => p.sort(
        (a: Customer, b: Customer) => {
          return a.lastname.localeCompare(b.lastname);
        }
      ))
    );
  }
}
