import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello world from app component</h1>
              <my-user></my-user>
              <h2>Style from app components</h2>`,
  styles: [`h2 {
    color: red;
  }`]
})
export class AppComponent { }
