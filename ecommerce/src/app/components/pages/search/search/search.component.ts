import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/components/services/search.service';
import { FormsModule } from '@angular/forms';
import { DataService } from 'src/_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'hello'
searchText:any = '';
data :any
product : any
array : any
i:any
  constructor(private  searchService:SearchService,private service : DataService, private route : Router) { }
 
  ngOnInit(): void {
   this.getAll()  
   this.getAllProduct()  
    }
   getAll(){ this.searchService.getAll().subscribe((res)=>{
      console.log(res)
      this.data = res 
      console.log(this.data[0],"hello")
      
    })
  }
    goplace(){
    this.searchService.goplace
    } 
    getAllProduct(){
      this.service.getAllProduct().subscribe((res : any) =>{
        console.log(res);
        
        this.array = res
        console.log(this.array)
      })
    }
    goToSingleProductById(id:any,i:any){
      this.route.navigate([`products/${id}`])
    }
    
  }

