import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/components/services/search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'hello'
searchText:any = '';
data :any
  constructor(private  searchService:SearchService) { }
 
  ngOnInit(): void {
   this.getAll()    
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
  }