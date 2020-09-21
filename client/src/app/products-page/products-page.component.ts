import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../store/reducers/product.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductLoading, Products} from '../store/product/product.selectors';
import {AddToCart} from '../store/user/user.actions';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  products$: Observable<IProduct[]>;
  productLoading: Observable<boolean>;
  tempCount = 1;

  constructor(private productState: Store<IState>, private fb: FormBuilder, private userState: Store<IState>) {
    this.products$ = productState.select(Products);
    this.productLoading = productState.select(ProductLoading);
  }

  addToCartForm = this.fb.group({
    count: this.fb.control('', [Validators.min(1)])
  });

  countChange(value): void {
    this.tempCount += value;
    if (this.tempCount === 0) {
      this.tempCount += 1;
      return;
    }
    this.addToCartForm.get('count').setValue(this.tempCount);
  }

  addToCart(productId: string): void {
    this.tempCount = 1;
    const {count} = this.addToCartForm.value;
    this.userState.dispatch(AddToCart({productId, count}));
    this.addToCartForm.get('count').setValue(1);
  }

  ngOnInit(): void {
    this.addToCartForm.get('count').setValue(this.tempCount);
  }

}
