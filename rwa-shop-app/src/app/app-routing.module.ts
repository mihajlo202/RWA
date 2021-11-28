import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { CustomerWishlistComponent } from './components/customer-wishlist/customer-wishlist.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SellerCreateProductComponent } from './components/seller-create-product/seller-create-product.component';
import { SellerProfileComponent } from './components/seller-profile/seller-profile.component';
import { SellerComponent } from './components/seller/seller.component';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: 'main', component: MainpageComponent},
  {
    path: 'seller',
    component: SellerComponent,
    canActivate:[AuthGuard],
    children: [
      {path: '', component: SellerProfileComponent },
      {path: 'profil', component: SellerProfileComponent},
      {path: 'main', component: SellerCreateProductComponent}
    ],
    data: { role: 'seller'}
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate:[AuthGuard],
    children: [
      {path: '', component: CustomerProfileComponent },
      {path: 'profil', component: CustomerProfileComponent},
      {path: 'main', component: CustomerWishlistComponent}
    ],
    data: { role: 'customer'}
  },
  {path: '**', redirectTo: 'mainPage', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
