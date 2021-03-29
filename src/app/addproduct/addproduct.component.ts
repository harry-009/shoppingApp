import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../modals/product';
import { ProductService } from '../services/product.service';


@Component({
    selector: 'app-addproduct',
    templateUrl: './addproduct.component.html',
    styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

    addproductForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private productService: ProductService,
        private router: Router
    ) {


        this.addproductForm = this.formBuilder.group({
            title: ['', Validators.required],
            category: ['', Validators.required],
            price: ['', Validators.required],
            image: ['', Validators.required],
            description: ['', Validators.required],
        });
        this.returnUrl = "/shop";

    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log("In add product component");
        this.submitted = true;

        //CHECK If form is valid.
        if (!this.addproductForm.valid) {
            return;
        }

        console.log(this.addproductForm.controls.title.value);
        //return;
        // addNewProduct
        let newproduct: Product = {
            id: 0,
            title: this.addproductForm.controls.title.value,
            description: this.addproductForm.controls.description.value,
            price: this.addproductForm.controls.price.value,
            image: this.addproductForm.controls.image.value,
            category: this.addproductForm.controls.category.value
        };

        this.productService.addNewProduct(newproduct).subscribe(data => {
            console.log(data);
            
            //redirect to shop page.
            this.router.navigateByUrl(this.returnUrl);
        });
        console.log("after call to service.");

    }

}



