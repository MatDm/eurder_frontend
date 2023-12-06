import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemComponent} from '../item/item.component';
import {Item} from "../model/item";
import {Observable} from "rxjs";
import {NameFilterPipe} from "../pipe/name-filter.pipe";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {ItemService} from "../service/item/item.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ItemComponent, NameFilterPipe, FormsModule, RouterLink],
  templateUrl: 'home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  public items$: Observable<Item[]> | undefined;
  public filter: string = '';

  constructor(private itemService: ItemService) {
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
