import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';
import { ProductService } from '../services/product.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	isLoading: Boolean = true;

	products: Product[] = [];

	constructor(private productService: ProductService) { }

	ngOnInit(): void {
		this.isLoading = true;
		this.productService.getAllProducts().subscribe((data: Product[]) => {
			this.products = data;
			this.isLoading = false;
		});
		console.log(this.products);

		//this.addProduct();
		this.onSubmit();

	}

	addProduct() {
		this.productService.postproduct();
	}

	onSubmit(){
		console.log("In Home component");
		// addNewProduct
		let product: Product = {id:0, title: "my new product", description: "demo", price:10, image:"", category:""};

		this.productService.addNewProduct(product).subscribe(data => {
			console.log(data);
		});
	}

}
