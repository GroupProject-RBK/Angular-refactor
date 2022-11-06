import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any
  constructor(private service:SearchService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res=>{this.products=res})
  }

}
