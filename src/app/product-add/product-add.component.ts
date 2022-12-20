import { Component, OnInit } from '@angular/core';
import { Product } from '../model/model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = {
    id: 0,
    name: "",
    category: "",
    description: "",
    img: "",
    price: 0
  };
  
  constructor(private data:DataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addProduct(): void {
    this.data.getProducts().subscribe( data => {
      let id  = data.map(p => p.id).sort((a, b) => b! - a!)[0];
      this.product.id = id! + 1;
      this.data.addProduct(this.product).subscribe(() => {
        this.router.navigate([""]);
      });
          
    });
  }

}
