import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'characterCounter',
  standalone: true
})
export class CharacterCounterPipe implements PipeTransform {

  transform(value: string | undefined, ...args: unknown[]): number {
    if (!value)
      return 255;
    if(value.length <= 255)
      return 255 - value.length;
    return 0;
  }

}
