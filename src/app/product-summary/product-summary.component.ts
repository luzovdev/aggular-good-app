import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-summary',
  templateUrl: './product-summary.component.html',
  styleUrls: ['./product-summary.component.css']
})
export class ProductSummaryComponent implements OnInit {

  @Input() product!:Product;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetail() {
    this.router.navigate(["product", this.product.id]);
  }

}
