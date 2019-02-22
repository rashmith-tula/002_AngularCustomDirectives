import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customDirectives';
  flag: boolean = true;
  value: number = 2;

  onClick() {
    this.flag = !this.flag;
  }
}
