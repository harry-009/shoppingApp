import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../modals/product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    productApi: string = "https://fakestoreapi.com/products?limit=9";
    constructor(private httpclient: HttpClient) { }

    getAllProducts() {
        return this.httpclient.get<Product[]>(this.productApi);
    }

    postproduct() {
        console.log("test")
        this.httpclient.post('https://fakestoreapi.com/products', {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic'
        });
    }

    getProductById(id: number) {
        let apiUrl = `https://fakestoreapi.com/products/${id}`;
        return this.httpclient.get<Product>(apiUrl);

    }

    addNewProduct(product: Product) {
        let apiPostUrl = `https://fakestoreapi.com/products/`;

        console.log("In Add Product service.");
        return this.httpclient.post(apiPostUrl, JSON.stringify(product));   
    }

    deleteProduct(id:number){
        let deleteAPIurl = `https://fakestoreapi.com/products/${id}`;

        return this.httpclient.delete(deleteAPIurl);
    }

}

