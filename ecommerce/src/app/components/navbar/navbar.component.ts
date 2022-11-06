import { Component, NgModule, OnInit } from '@angular/core';
//import {MatToolbarModule} from '../../material.module'
import { NgbdDropdownBasic } from '../ngbd-dropdown-basic/ngbd-dropdown-basic.component';
import {SearchComponent} from "../pages/search/search/search.component"
import {DataService} from "../../../_services/data.service"
import { Router } from '@angular/router';
NgModule({
  imports: [NgbdDropdownBasic,SearchComponent] ,
})
@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  constructor(private Dataservice:DataService, private router : Router) { }

  ngOnInit(): void {
  }
logout(){
this.Dataservice.logout()
}
check(){
  document.cookie.length > 0 ? this.router.navigate(["profile"]) : this.router.navigate(["login"])
}
}
