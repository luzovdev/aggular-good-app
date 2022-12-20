import { Injectable } from '@angular/core';
// описание модели
import { Product } from './model/model';
// для выполнения запросов
import { HttpClient, HttpHeaders } from '@angular/common/http';
// поддержка асинхронных запросов
import { Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "http://localhost:3000/products";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  type: string = "";

  
  
  constructor(private http: HttpClient) {
    
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}/${id}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product, this.httpOptions);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${id}`, this.httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(this.url, product, this.httpOptions);
  }

  // для работы с категориями
  get Type() {
    return this.type;
  }

  set Type(value: string) {
    this.type = value;
  }




}
