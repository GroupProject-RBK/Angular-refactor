import { Component, OnInit, NgModule } from '@angular/core';
import { CardComponent } from '../../card/card.component';


NgModule({
  imports: [CardComponent],
})
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
