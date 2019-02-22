import { Directive, Input, HostBinding, HostListener, ElementRef, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[appBtndropdown]'
})
export class BtndropdownDirective{
  constructor(private elRef4: ElementRef) {}
  // @HostBinding('class.show') show = false;
  // @HostListener('click') showPopup() {
  //   this.show = !this.show;
  //   this.triggered = true;
  // }
  @HostListener('click') showPopup() {
    // if(this.elRef4.nativeElement.lastElementChild.classList.contains('show')) {
    //   this.elRef4.nativeElement.lastElementChild.classList.remove('show');
    // } else {
    //   this.elRef4.nativeElement.lastElementChild.classList.add('show');
    // }
    if(this.elRef4.nativeElement.getElementsByClassName("dropdown-menu")[0].classList.contains('show')) {
      this.elRef4.nativeElement.getElementsByClassName("dropdown-menu")[0].classList.remove('show');
    } else {
      this.elRef4.nativeElement.getElementsByClassName("dropdown-menu")[0].classList.add('show');
    }
    
  }
}
