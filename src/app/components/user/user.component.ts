import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';
@Component ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
    // template: '<h2>Nick</h2>'
})


export class UserComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}

