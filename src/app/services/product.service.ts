import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

    productApi:string = "https://fakestoreapi.com/products?limit=15";
  constructor( private httpclient:HttpClient) { }

  getAllProducts(){
      return this.httpclient.get<Product[]>(this.productApi);
  }

  postproduct(){
    console.log("test")
    this.httpclient.post('https://fakestoreapi.com/products', {
      title: 'test product',
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic'
      });
  }

}

