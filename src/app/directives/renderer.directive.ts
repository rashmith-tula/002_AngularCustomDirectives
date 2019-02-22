import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appRenderer]'
})
export class RendererDirective implements OnInit {

  constructor(private elRef2: ElementRef, private rendererRef: Renderer2) { }

  ngOnInit() {
    this.rendererRef.setStyle(this.elRef2.nativeElement, 'backgroundColor', 'green');
  }

}
