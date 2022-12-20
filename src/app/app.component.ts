import { Component, OnInit } from '@angular/core';
import { ProductList } from './model/repository';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goods-store';
  

  constructor (private repository:ProductList) {
  }

  
  
}
