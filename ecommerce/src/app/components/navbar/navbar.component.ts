import { Component, NgModule, OnInit } from '@angular/core';
//import {MatToolbarModule} from '../../material.module'
import { NgbdDropdownBasic } from '../ngbd-dropdown-basic/ngbd-dropdown-basic.component';
import {SearchComponent} from "../pages/search/search/search.component"
import {DataService} from "../../../_services/data.service"
NgModule({
  imports: [NgbdDropdownBasic,SearchComponent] ,
})
@Component({

  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})

export class NavbarComponent implements OnInit {

  constructor(private Dataservice:DataService) { }

  ngOnInit(): void {
  }
logout(){
this.Dataservice.logout()
}
}
