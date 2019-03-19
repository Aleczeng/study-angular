import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limitedCount?: number): string {
    if (!value) {
      return null;
    } else {
      const actualCount = (limitedCount) ? limitedCount : 0;
      return value.substring(0, actualCount) + ' ...';
    }
  }
}
