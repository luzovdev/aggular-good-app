import { Component, OnInit } from '@angular/core';
import { Product } from '../model/model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading: boolean = true;

  products: Product[] = [];

  constructor(private data: DataService) { 
        
  }

  ngOnInit(): void {
    this.data.getProducts().subscribe( data => {
      this.products = data;
      this.isLoading = false;
    });
  }

  filtr() {
    let type = this.data.Type;
    return this.products.filter(p => type == "" || p.category == type);
  }
}
