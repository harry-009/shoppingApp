import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators } from '@angular/forms';
import { Product } from '../modals/product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

 addproductForm : FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor( private formBuilder: FormBuilder,
    private productService: ProductService
    ) { 


    this.addproductForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
  });
  this.returnUrl= "/shop";

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("In add product component");
    this.submitted = true;
    // return;
		// addNewProduct
		let product: Product = {id:0, title: "my new product", description: "demo", price:10, image:"", category:""};

		this.productService.addNewProduct(product).subscribe(data => {
			console.log(data);
		});
	}

}
	


