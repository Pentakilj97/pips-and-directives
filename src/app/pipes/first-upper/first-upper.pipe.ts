import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUpper'
})
export class FirstUpperPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {

    const firstChar=value[0];
    const FirstUpper=firstChar.toUpperCase();
    const restOftheString=value.slice(1);
    const result=FirstUpper+restOftheString

    return result;
  }

}
