import { Pipe, PipeTransform } from '@angular/core';
import {Item} from "../model/item";

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {
  transform(items: Item[], searchText: string): Item[] {
    if (!items)
      return [];
    if(searchText === '')
      return items;
    searchText.toLowerCase();
    return items.filter(item => item.name.toLowerCase().startsWith(searchText));
  }
}
