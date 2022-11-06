import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''})
  constructor() { }
  ngOnInit(): void {
    this.slides[0] = {
      src: 'https://www.china-briefing.com/news/wp-content/uploads/2021/12/China-Vape-Industry.jpg',
    };
    this.slides[1] = {
      src: 'https://www.shutterstock.com/image-photo/stylish-girl-city-lady-use-600w-1914239215.jpg',
    }
    this.slides[2] = {
      src: 'https://www.china-briefing.com/news/wp-content/uploads/2021/12/China-Vape-Industry.jpg',
    }
  }
}
