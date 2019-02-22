import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
   @Input() set appUnless(condition: boolean) {
     if(condition) {
        this.vRef.createEmbeddedView(this.tRef);
     } else {
        this.vRef.clear();
     }
   }

  constructor(private tRef: TemplateRef<any>, private vRef: ViewContainerRef) { }

}
