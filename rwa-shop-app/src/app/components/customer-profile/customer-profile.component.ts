import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  allProducts: Product[]=[];
  customer: Customer = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    address: ''
  };

  // customer$=this.store.pipe(
  //   select(selectCustomerInfo),
  //   filter(val => val!=undefined)
  // )

  // products$=this.store.pipe(
  //   select(selectAllProducts),
  //   filter(val => val !== undefined)
  // )

  constructor(//private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    // this.customer$.subscribe((customer: Customer) => {
    //   this.customer={...customer} 
    // });
    // this.products$.subscribe(
    //   (events) => events.forEach(prod =>  this.allProducts.push(prod))
    // )
  }

  orderClicked(product: Product){

    // var order = new Order();
    // order.productId = product.id;
    // order.customerId = this.customer.id;
    // console.log(order)
    // this.store.dispatch(CreateOrder({order: order}));
  }

}
