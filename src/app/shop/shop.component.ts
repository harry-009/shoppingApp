import { Component, OnInit } from '@angular/core';
import { Product } from '../modals/product';
import { ProductService } from '../services/product.service';



@Component({
    selector: 'app-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {

    isLoading: Boolean = true;
    products: Product[] = [];

    constructor(private productService: ProductService) { }

    ngOnInit(): void {

        this.getAllProducts();
    }

    getAllProducts(){
        this.isLoading = true;
        this.productService.getAllProducts().subscribe((data: Product[]) => {
            this.products = data;
            this.isLoading = false;
        });
    }

    addProduct() {
        this.productService.postproduct();
    }

    deleteProduct(id:number){
        console.log(`Item to be delete ${id}`);

        this.productService.deleteProduct(id).subscribe(data => {
            console.log(data);
            alert(`Product deleted successfully.`);
            this.getAllProducts();
        });
    }
}


