import {Directive, ElementRef, Input, OnChanges, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCorrectIncorrect]'
})
export class CorrectIncorrectDirective implements OnChanges {
  @Input('appCorrectIncorrect') highlightColor!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.renderer.setStyle(this.el.nativeElement, 'border-color', this.highlightColor);
  }
}
