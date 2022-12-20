import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: number;
  products: Product[] = [];
  product!: Product;
  isLoading: boolean = true;

  constructor(private data: DataService, private activateRoute: ActivatedRoute, private router: Router) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.data.getProducts().subscribe(data => {
      this.product = data.find(p => p.id == this.id)!;
    })
  }

  deleteProduct(): void {
    this.data.deleteProduct(this.product.id!).subscribe(() => {
      this.router.navigate(['']);
    })
  } 
    
}


