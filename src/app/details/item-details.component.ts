import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HousingLocation} from "../housinglocation";
import {HousingService} from "../housing.service";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ItemService} from "../service/item/item.service";
import {Observable} from "rxjs";
import {Item} from "../model/item";

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.css'
})
export class ItemDetailsComponent implements OnInit{
  item$: Observable<Item> | undefined;
  constructor(private _activatedRoute: ActivatedRoute, private itemService: ItemService) {
  }
  ngOnInit(): void {
    let itemId = this._activatedRoute.snapshot.params['id'];
    this.item$ = this.itemService.getItem(itemId);
  }
}
