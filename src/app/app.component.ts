import { Component, Input } from '@angular/core';
import { enableBindings } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  enable: boolean = false;
  title = 'customDirectives';
  flag: boolean = true;
  value: number = 2;

  onClick() {
    this.flag = !this.flag;
  }

  onDropDown() {
    this.enable = !this.enable;
  }
}
