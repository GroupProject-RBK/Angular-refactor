import { Component, OnInit } from '@angular/core';
import {SingleProductService} from "../../services/single-product.service"
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {
  newdata: any;
  id : any
  product:any
    constructor(private  SingleProductService: SingleProductService , private Activ : ActivatedRoute) {
      this.id = this.Activ.snapshot.paramMap.get('id')
     }
    ngOnInit(): void {    
  this.SingleProductService.getOneP(this.id).subscribe((res)=>{
    console.log(res)
    this.newdata = res

    
  })
  
    }


}
