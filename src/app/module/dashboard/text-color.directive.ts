import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
  selectedName:any;
  constructor(private el: ElementRef) { }

  @HostListener('mouseover') onMouseOver() {
    this.el.nativeElement.style.backgroundColor = "lightpink";
}

@HostListener('mouseleave') onMouseLeave() {
  this.el.nativeElement.style.backgroundColor = "White";
}
}