import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SingleProductService } from '../../services/single-product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {
  newdata: any;
  id : any
  product:any
    constructor(private DataService:DataService , private Activ : ActivatedRoute,private route : Router) {
      this.id = this.Activ.snapshot.paramMap.get('id')
     }
    ngOnInit(): void {    
      console.log(this.id);
      
  this.DataService.getOneP(this.id).subscribe((res)=>{
    console.log(res)
    this.newdata = res
  })
    }

    check(){
      document.cookie.length > 0 ? this.route.navigate(["cart"]) : this.route.navigate(["login"])  
    }

  back(){
    this.route.navigate(["home"])
  }

prod(){
  this.route.navigate(["products"])
}
buy(){
  if(!document.cookie){this.route.navigate(['/login'])}
  else{
    this.DataService.addToCart(this.newdata)
  }
}



}
