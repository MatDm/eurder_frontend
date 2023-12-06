import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter',
  standalone: true
})
export class NameFilterPipe implements PipeTransform {
  transform(any: any[], searchText: string, property: string): any[] {
    if (!any)
      return [];
    if(searchText === '')
      return any;
    searchText.toLowerCase();
    if (property === 'lastname')
      return any.filter((any: { lastname: string; }) => any.lastname.toLowerCase().startsWith(searchText));
    return any.filter((any: { name: string; }) => any.name.toLowerCase().startsWith(searchText));
  }
}
