import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../modals/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productId: number = 0;
  
  product:Product = {id:0, title:"", description:"", price:0, image:"", category:""};

  constructor(
    private activatedRoute: ActivatedRoute,
    private ps: ProductService
    ) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      console.log(id); // Print the parameter to the console.
      this.productId =  id;

      this.ps.getProductById(id).subscribe(data => {
        console.log(data);
        this.product = data;
      });
    });

    console.log("this is a test.");
  
  }

}
