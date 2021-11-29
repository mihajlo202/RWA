import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerComponent } from './components/seller/seller.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { SellerCreateProductComponent } from './components/seller-create-product/seller-create-product.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerWishlistComponent } from './components/customer-wishlist/customer-wishlist.component';
import { SellerUpdateProductComponent } from './components/seller-update-product/seller-update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainpageComponent,
    SellerComponent,
    SellerProfileComponent,
    SellerCreateProductComponent,
    CustomerComponent,
    CustomerProfileComponent,
    CustomerWishlistComponent,
    SellerUpdateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
