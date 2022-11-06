import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/_services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any
  array : any
  constructor(private service : DataService, private route : Router) { }
  getAllProduct(){
    this.service.getAllProduct().subscribe((res : any) =>{
      console.log(res);
      
      this.array = res
      console.log(this.array)
    })
  }
  goToSingleProductById(id:any,i:any){
    this.route.navigate(['products/'+id])
  }
  ngOnInit(): void {
   this.getAllProduct()
  }
}
