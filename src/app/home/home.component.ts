import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

products:Product[] = [];

  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: Product[]) => this.products = data)
    console.log(this.products);

  this.addProduct();

  }

  addProduct(){
    this.productService.postproduct();
  }

}
