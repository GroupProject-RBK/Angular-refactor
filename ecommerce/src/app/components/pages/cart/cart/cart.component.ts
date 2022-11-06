import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../../_services/data.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:any
  total:any
  userInfo:any
  user:any
  constructor(private dataservices:DataService) { }

  ngOnInit(): void {
    this.data=this.dataservices.cart()
    this.total=this.dataservices.totalPrice()
    this.dataservices.getOne().subscribe((result)=>{this.user=result, 
      this.userInfo={id:this.user.data.id}})
  }
  delete(i:number){
    this.dataservices.deleteItem(i)
  }
  clearcart(){
    this.dataservices.clearCart()
  }
  buy(){
    for(var i=0;i<this.data.length;i++){
      
      this.dataservices.buyP(this.data[i].id,this.userInfo).subscribe((result)=>{console.log(result)},(error)=>{console.log(error)})
    }
    this.dataservices.clearCart()
  }
}
