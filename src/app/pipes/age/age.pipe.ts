import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: number, ...args: any[]): number {

    const now=new Date();
    const year=now.getFullYear()
    const age=year-value
    return age;


}
}
