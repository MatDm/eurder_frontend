import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocation} from "../housinglocation";
import {RouterLink} from "@angular/router";
import {Item} from "../model/item";
import {StockLevelIndicator} from "../model/StockLevelIndicator";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item!: Item;

  protected readonly StockLevelIndicator = StockLevelIndicator;
}
