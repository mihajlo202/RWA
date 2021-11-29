import { Component, OnInit } from '@angular/core';
import { LoggedUser } from 'src/app/models/loggeduser';
import { Seller } from 'src/app/models/seller';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  // user$=this.store.pipe(
  //   select(selectLoggedUser),
  //   filter(val => val !== undefined)
  // );

  // seller$=this.store.pipe(
  //   select(selectSellerInfo),
  //   filter(val => val !== undefined)
  // );
  
  constructor(//private store: Store<AppState>
    ) { }

  ngOnInit(): void {
  //   var user: LoggedUser;
  //   this.user$.subscribe((u:LoggedUser) => user = u)
  //   this.store.dispatch(GetSellerInfo({email: user.email}))
  //   this.seller$.subscribe( (seller:Seller) =>{
  //     this.store.dispatch(LoadSellerProducts({sellerId:seller.id}))
  //   })
  //   this.store.dispatch(LoadOrderForSeller({id:user.id}));
  }

}
