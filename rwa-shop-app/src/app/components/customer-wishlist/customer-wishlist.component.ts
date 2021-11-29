import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { WishList } from 'src/app/models/wishlist';

@Component({
  selector: 'app-customer-wishlist',
  templateUrl: './customer-wishlist.component.html',
  styleUrls: ['./customer-wishlist.component.css']
})
export class CustomerWishlistComponent implements OnInit {

  allWishes: WishList[]=[];
  allProducts: Product[]=[];
  myOrderProduct: Product[] = [];
  customer: Customer = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    address: ''
  };

  // user$=this.store.pipe(
  //   select(selectCustomerInfo),
  //   filter(val => val !== undefined)
  // );

  // order$=this.store.pipe(
  //   select(selectAllOrders),
  //   filter(val => val !== undefined)
  // )

  // products$=this.store.pipe(
  //   select(selectAllProducts),
  //   filter(val => val !== undefined)
  // );

  constructor(//private store: Store<AppState>, private orderSerice: OrderService
    ) { }

  ngOnInit(): void {

    // this.order$.subscribe(
    //   (events) => events.forEach(u => { this.allOrders.push(u); }))
    // this.products$.subscribe(
    //   (events) => events.forEach(u => { this.allProducts.push(u); }))
    
    // this.user$.subscribe((user) => this.customer={...user} );
   
    // if(this.allProducts.length!=0) {
    //   this.allOrders.forEach((order, indexOf ) => {
    //     this.allProducts.forEach(prod => {
    //       if(prod.id===order.productId)
    //         this.myOrderProduct.push(prod);
    //     })
    //   })
    // }

  }

  cancelOrder(pro: Product){
  //   var idOrder: number;
  //   this.allOrders.forEach((order, indexOf ) => {
  //     this.allProducts.forEach(prod => {
  //       if(prod.id===order.productId)
  //         idOrder = order.id
  //     })
  //   })
  //   this.store.dispatch(DeleteOrder({id:idOrder}))
  //   this.allOrders = [];
  //   this.allProducts = [];
  //   this.order$.subscribe(
  //     (events) => events.forEach(u => { this.allOrders.push(u); }))
  //   this.products$.subscribe(
  //     (events) => events.forEach(u => { this.allProducts.push(u); }))
  //   this.myOrderProduct = [];
  //   if(this.allProducts.length!=0) {
  //     this.allOrders.forEach((order, indexOf ) => {
  //       this.allProducts.forEach(prod => {
  //         if(prod.id===order.productId)
  //           this.myOrderProduct.push(prod);
  //       })
  //     })
  //   }
  }
  
}
