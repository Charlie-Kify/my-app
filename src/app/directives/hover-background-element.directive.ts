import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverBackgroundElement]'
})
export class HoverBackgroundElementDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') mouseenter(){
    this.renderer.setStyle (this.elementRef.nativeElement,'background-color', 'blue');
    this.renderer.setStyle (this.elementRef.nativeElement,'color', 'white');
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle (this.elementRef.nativeElement,'background-color', 'transparent');
    this.renderer.setStyle (this.elementRef.nativeElement,'color', 'black');
  }

}
