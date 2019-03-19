import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'text-filter'
})
export class TextFilterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return null;
    } else {
      const words = value.split('');
      words.map(word => {
        word = word.toLowerCase();
        if(!(word.indexOf('the')||word.indexOf('of'))){
          word = word.slice(0,1).toUpperCase() + word.slice(1);
          return word;
        }
      });
    }
  }
}
