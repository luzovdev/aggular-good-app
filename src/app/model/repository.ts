
import { Injectable } from '@angular/core';
import { Product } from './model';
import { DataService } from '../data.service';


@Injectable({
  providedIn: 'root',
})

export class ProductList {
  products: Product[] = [];
  categories: string[] = [];

  constructor(private datasource: DataService) {
      this.datasource.getProducts().subscribe(data => {
        this.products = data;
        this.categories = data.map(p => p.category!)
        .filter((c, index, array) => array.indexOf(c) == index).sort();
      })
      
  }

  getProducts(category: string = ""): Product[] {
    return this.products
      .filter(p => category == "" || category == p.category);
    }

  getProduct(id: number): Product {
    return this.products.find(p => p.id == id)!;
  }

  addProduct(item: Product): void {
    this.products.push(item);
  }

  removeProduct(item: Product): void {
    this.products.splice(
      this.products.findIndex(p => item == p),
    );
  }

  getCategories(): string[] {
    return this.categories;
  }



}
