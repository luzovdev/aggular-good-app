import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.css']
})
export class TypesComponent implements OnInit {

  title: string = "Категории";
  isLoading: boolean = true;
  types: string[] = [];

  constructor(private data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.data.getProducts().subscribe(data => {
      this.types = data.map(p => p.category!).filter((el, ind, arr) => arr.indexOf(el) == ind).sort();
      this.isLoading = false; 
    })
  }

  filtr(index: number) {
    this.data.Type = this.types[index];
    this.router.navigate(['']);
  }

  clearFiltr() {
    this.data.Type = "";
    this.router.navigate(['']);
  }
}
