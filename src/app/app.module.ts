import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { attrDirective } from './directives/attribute.directive';
import { RendererDirective } from './directives/renderer.directive';
import { DynamicDirective } from './directives/dynamic.directive'

@NgModule({
  declarations: [
    AppComponent,
    attrDirective,
    RendererDirective,
    DynamicDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
