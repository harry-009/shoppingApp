import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MensComponent } from './mens/mens.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:"", component: HomeComponent},

  {path:"shop", 
  component: ShopComponent },

  {path:"mens", 
  component: MensComponent },

  {path:"productdetails/:id", 
  component: ProductdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
