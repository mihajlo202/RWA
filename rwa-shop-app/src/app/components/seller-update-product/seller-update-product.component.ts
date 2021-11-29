import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    sellerId: 0
  };

  // seller$=this.store.select(selectSellerInfo);

  @Output() cancelClicked: EventEmitter<any> =
  new EventEmitter();
  @Input() isUpdating: boolean;

  constructor( //private store: Store<AppState>
    ) { 
      this.isUpdating = false;
    }

  ngOnInit(): void {
    // this.store.select(selectProductUpdate).subscribe((prod:Product) => {
    //   this.product={...prod}});
  }
  
  cancelModal(): void {
    this.cancelClicked.emit(null);
  }

  handleClick(): void {
    // if(this.isUpdating)
    //   this.store.dispatch(UpdateProduct({product: this.product}))
    // else
    // {
    //   this.seller$.subscribe(seller =>{
    //     this.product.sellerId=seller.id;
    //     this.store.dispatch(NewProduct({product: this.product}))
    //   })
    // }
    this.cancelModal();
  } 

}
