import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../../../_services/data.service';
import { AuthcheckService } from '../../../../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
user:any
userInfo:any
messageobj:any
message:any
sidenavWidth = 15;
ngStyle: string = '';

  constructor(private dataservices:DataService ,private http:HttpClient,private route:Router,private tokenservices:AuthcheckService ) { }
  

  ngOnInit(): void {
    this.dataservices.getOne().subscribe((result)=>{this.user=result,this.userInfo=this.user.data})
   
  }
  
  log=()=>{
    console.log(this.userInfo)
  }
  updateU=()=>{
    var t=this.userInfo

    this.dataservices.updateU(this.userInfo).subscribe((result)=>{this.dataservices.login(this.userInfo).subscribe((result)=>{console.log(result)}); this.messageobj="your info have been updated suceccfuly"},
    
    (error)=>{
      if(error.error.sqlState===23000){this.message="this user name alredy exists"}
      else if(error){this.message="an error has occured"}
    })
  }
}
