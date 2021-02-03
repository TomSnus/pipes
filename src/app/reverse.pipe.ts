import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse', 
  'pure': false,
})
export class ReversePipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    return value.split("").reverse().join("");
  }
}