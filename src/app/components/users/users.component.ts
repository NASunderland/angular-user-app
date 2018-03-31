import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  };
  users: User[];
  showExtended = true;
  loaded = false;
  enableAdd = false;
  showUserForm = false;
  @ViewChild('userForm')form: any;

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Nick',
          lastName: 'Doe',
          email: 'nick@yahoo.com',
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Peters',
        email: 'kevin@gmail.com',
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: 'Jane',
        lastName: 'Williams',
        email: 'test@test.com',
        isActive: true,
        registered: new Date('02/22/2016 10:30:00'),
        hide: true
      }];
  
      this.loaded = true;

  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();

  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: ''
  //   };
  // }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }
}
