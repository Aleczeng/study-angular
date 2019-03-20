import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format: string;

  constructor(public el: ElementRef) {

  }

  @HostListener('blur') onBlur() {
    if (this.format === 'lowerCase') {
      this.el.nativeElement.value = this.el.nativeElement.value.toLowerCase();
    } else {
      this.el.nativeElement.value = this.el.nativeElement.value.toUpperCase();
    }
  }


}
