import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, todas: boolean = true): string {
    value = value.toLocaleLowerCase()
    let name = value.split(' ');

    if(todas){
      name = name.map((n)=>{
        return n[0].toLocaleUpperCase() + n.substr(1);
      })
      return name.join(' ')
    }
  }

}
