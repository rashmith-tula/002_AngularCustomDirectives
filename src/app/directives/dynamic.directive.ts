import { Directive, HostBinding, ElementRef, Renderer2, OnInit, HostListener, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appDynamic]'
})
export class DynamicDirective implements OnInit{
  @Input() defaultColor: string = 'yellow';
  @Input() highlightColor: string = 'orange';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef3: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef3.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elRef3.nativeElement, 'backgroundColor', 'orange'); 
    this.backgroundColor = this.highlightColor;
  } 

  @HostListener('mouseout') mouseOut(eventData: Event) {
    // this.renderer.setStyle(this.elRef3.nativeElement, 'backgroundColor', 'yellow'); 
    this.backgroundColor = this.defaultColor;
  }

}
