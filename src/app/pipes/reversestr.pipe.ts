import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversestr'
})
export class ReversestrPipe implements PipeTransform {

  transform(value: string, param1: string): string {
    let newstr = '';

    for(let i = value.length - 1; i >= 0; i--){
      newstr += value.charAt(i); //estrae carattere alla posizione i
    }

    return param1 + newstr;
  }

}
