import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>
    Hello: {{name}} </h1>
    <br/>
  <p>
    <strong> Email: </strong> {{email}}
  </p>
    <p><strong> Address: </strong> {{address.street}} {{address.city}} {{address.state}}</p>
  `,
})
export class AppComponent  {
  name = 'Srini';
  email = 'Srini@gmail.com';
  address = {
    street: 'Taylor',
    city: 'chicago',
    state: 'IL'
  }
}
