import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[attributeDir]'
})

export class attrDirective implements OnInit{
    constructor(private elRef1: ElementRef) {}

    ngOnInit() {
      this.elRef1.nativeElement.style.backgroundColor = 'green';
    }

}