import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from '../item/item.component';
import {HousingLocation} from '../housinglocation';
import {HousingService} from "../housing.service";
import {Item} from "../model/item";
import {Observable} from "rxjs";
import {ItemService} from "../service/item.service";
import {NameFilterPipe} from "../pipe/name-filter.pipe";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemComponent, NameFilterPipe, FormsModule, RouterLink],
  templateUrl: 'home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  // readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  public items$: Observable<Item[]> | undefined;
  // housingService: HousingService = inject(HousingService);
  // private itemService: ItemService = inject(ItemService);
  // filteredLocationList: HousingLocation[] = [];
  public filter: string = '';
constructor(private itemService: ItemService) {
}

  filterResults(text: string) {
    // if (!text) {
    //   this.filteredLocationList = this.housingLocationList;
    // }
    // this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
    //   housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    // );
  }

  ngOnInit(): void {
    this.items$ = this.getItems();
  }

  private getItems(): Observable<Item[]> {
    return this.itemService.getItems();
  }

  onAdd() {

  }
}
