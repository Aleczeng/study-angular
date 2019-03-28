import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'textUpper'
})
export class TextUpperPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return null;
    } else {
      const words = value.split(' ');
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();
        if (words[i].indexOf('the') < 0 && words[i].indexOf('of') < 0) {
          words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
        } else if (i === 0) {
          words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
        }
      }
      return words.join(' ');
    }
  }
}
