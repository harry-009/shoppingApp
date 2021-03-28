import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {

    this.productService.getAllProducts().subscribe((data: Product[]) => this.products = data)
      console.log(this.products);
  
    this.addProduct();
  }

  addProduct(){
    this.productService.postproduct();
  }
}


