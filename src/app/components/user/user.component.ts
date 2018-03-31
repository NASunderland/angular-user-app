import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    // template: '<h2>Nick</h2>'
})


export class UserComponent implements OnInit {
    user: User;

    constructor() { }

    ngOnInit() {
        this.user = {
            firstName: 'Nick',
            lastName: 'Doe',
            age: 30,
            address: {
                street: 'Baker Lane',
                city: 'Boston',
                state: 'MA'
            }
        };
    }
}

