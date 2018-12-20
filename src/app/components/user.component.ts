import {Component} from '@angular/core';

@Component({
  selector: 'my-user',
  template: `<h1 style="color: red"> {{name}} </h1>
  <h2>Style from user components</h2>
  <p><strong> Email: </strong> {{email}}</p>
  <p><strong> Address: </strong> {{address.street}} {{address.city}} {{address.state}}</p>
  <button (click)="toggleHobbies()">{{ showHobbies ? "Hide Hobbies" : "Show Hobbies"}}</button>
  <div *ngIf="showHobbies">
    <h3>Hobbies </h3>
    <ol>
      <li *ngFor="let hobby of hobbies">
        {{hobby}}
      </li>
    </ol>
  </div>
  <hr/>
  <form>
    <label>Name:</label>
    <input type="text" name="name" [(ngModel)]="name"/>
  </form>
  `,
  styles: [`h2 {
    color: blue;
  }`]
})
export class UserComponent {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;

  constructor() {
    this.name = 'Srini';
    this.email = 'Srini@gmail.com';
    this.address = {
      street: 'Taylor',
      city: 'chicago',
      state: 'IL'
    };
    this.hobbies = ['music', 'sports', 'cooking'];
    this.showHobbies = false;
  }

  toggleHobbies() {
    if (this.showHobbies == true) {
      this.showHobbies = false;
    }
    else {
      this.showHobbies = true;
    }
  }
}

interface address {
  street: string;
  city: string;
  state: string;
}
