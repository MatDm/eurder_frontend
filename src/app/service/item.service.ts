import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../model/item";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // private http: HttpClient = inject(HttpClient);
  private readonly _backendUrlItems: string;

  constructor(private http: HttpClient) {
    this._backendUrlItems = `${environment.backendUrl}/items`
  }

  getItems() {
    return this.http.get<Item[]>(this._backendUrlItems).pipe(
      map(p => p.sort(
        (a: Item, b: Item) => {
          return a.name.localeCompare(b.name);
        }
      ))
    );
  }
}
