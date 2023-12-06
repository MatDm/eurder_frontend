import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable, Subscription} from "rxjs";
import {environment} from "../../../environments/environment";
import {Item} from "../../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly _backendUrlItems: string;
  private readonly _httpOptions: object;
  constructor(private http: HttpClient) {
    this._backendUrlItems = `${environment.backendUrl}/items`;
    this._httpOptions = environment.httpOptions;
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
  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this._backendUrlItems, item, this._httpOptions);
  }

  getItem(itemId: number) {
    return this.http.get<Item>(this._backendUrlItems + '/' + itemId);
  }

  updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(`${this._backendUrlItems}/${item.id}`, item, this._httpOptions);
  }
}
