import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = true;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Nick',
          lastName: 'Doe',
          age: 30,
          address: {
              street: 'Baker Lane',
              city: 'Boston',
              state: 'MA'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00')
      },
      {
        firstName: 'Kevin',
        lastName: 'Peters',
        age: 43,
        address: {
            street: 'Dray Lane',
            city: 'Houston',
            state: 'WS'
        },
        isActive: false,
        registered: new Date('03/11/2017 06:20:00')
      },
      {
        firstName: 'Jane',
        lastName: 'Williams',
        age: 23,
        address: {
            street: 'Stred St',
            city: 'Chill',
            state: 'FL'
        },
        isActive: true,
        registered: new Date('02/22/2016 10:30:00')
      }];
  
      this.loaded = true;

  }

  addUser(user: User) {
    this.users.push(user);
  }
}
