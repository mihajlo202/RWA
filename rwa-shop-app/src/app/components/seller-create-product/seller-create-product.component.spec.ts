import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerCreateProductComponent } from './seller-create-product.component';

describe('SellerCreateProductComponent', () => {
  let component: SellerCreateProductComponent;
  let fixture: ComponentFixture<SellerCreateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerCreateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerCreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
