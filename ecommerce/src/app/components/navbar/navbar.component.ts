import { Component, NgModule, OnInit } from '@angular/core';
//import {MatToolbarModule} from '../../material.module'
import { NgbdDropdownBasic } from '../ngbd-dropdown-basic/ngbd-dropdown-basic.component';

NgModule({
  imports: [NgbdDropdownBasic] ,
})
@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
