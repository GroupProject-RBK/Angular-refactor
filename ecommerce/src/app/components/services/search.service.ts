import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
productsUrl =  'http://localhost:3002/products/getAll'

  constructor(private http : HttpClient,private router : Router) { }

  getAll() {
    return this.http.get<any>(this.productsUrl)
  }
  
  goplace(path:string) : void{
    this.router.navigate([path])
  }

}
