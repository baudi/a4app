import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  hobbies: string[];
  address: Address;
  hello: any;

  constructor() {
    console.log('contructor ran ...');
  }

  ngOnInit() {
    console.log('ngOnInit ran ...');
    this.name = 'John Doe';
    this.age = 34;
    this.email = 'kl@gmail.com';
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
    this.hello = 'hello';
  }

  onClick() {
    this.name = 'Baudi';
    this.hobbies.push('new hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    console.log(hobby);
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}
