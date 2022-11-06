import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from '../../../../_services/data.service';
import { AuthcheckService } from '../../../../_services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-mybuys',
  templateUrl: './mybuys.component.html',
  styleUrls: ['./mybuys.component.css']
})
export class  MybuysComponent implements OnInit {
  user:any
  userInfo:any
  data:any
 
  message:any
  sidenavWidth = 15;
  ngStyle: string = '';
  constructor(private dataservices:DataService ,private http:HttpClient,private route:Router,private tokenservices:AuthcheckService ) { }

  ngOnInit(): void {
    this.dataservices.getOne().subscribe((result)=>{this.user=result, 
      this.userInfo={id:this.user.data.id},
      this.dataservices.getallBuys(this.userInfo).subscribe((res)=>{this.data=res,console.log(this.data)},(error)=>{console.log(error)})
      
    })
    
  }
  log=()=>{
    console.log(this.data)
  }

}
50619699