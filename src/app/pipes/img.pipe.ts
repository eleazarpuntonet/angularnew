import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {

  transform(images: any[]): unknown {
    if(!images){
      return 'assets/img/noimg.png'
    }
    
    if(images.length > 0){
      return images[0].url
    } else {
      return 'assets/img/noimg.png'
    }
  }

}
