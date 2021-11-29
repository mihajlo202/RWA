import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/app/models/loggeduser';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // user$=this.store.pipe(
  //   select(selectLoggedUser),
  //   filter(val => val !== undefined)
  // );

  // customer$=this.store.pipe(
  //   select(selectCustomerInfo),
  //   filter(val => val !== undefined)
  // );

  constructor(//private store: Store<AppState>
    ) { }

  ngOnInit(): void {
    var user: LoggedUser = {
      id: 0,
      email: '',
      password: '',
      role: ''
    };
    // this.user$.subscribe(
    //   u => user = u
    // )
    // this.store.dispatch(GetCustomerInfo({email: user.email}))
    // this.store.dispatch(LoadOrderForCustomer({id: user.id}));
    // this.store.dispatch(LoadAllProducts());
  }

}
