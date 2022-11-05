import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
title='cards';
products:any;
  constructor(private service:DataService) {
   }

  ngOnInit(): void {
  
 this.service.getAllProduct().subscribe(res=>{this.products=res})
  }
}

