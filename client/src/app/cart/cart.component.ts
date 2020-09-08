import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {Observable} from 'rxjs';
import {IProduct} from '../store/reducers/product.reducer';
import {UserCart} from '../store/user/user.selectors';
import {RemoveFromCart} from '../store/user/user.actions';
import {IUserState} from '../store/reducers/user.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() user: IUserState;
  cart$: Observable<IProduct[]>;
  cartTotalPrice = 0;

  constructor(private userState: Store<IState>) {
    this.cart$ = userState.select(UserCart);
  }

  deleteFromCart(productId): void {
    this.userState.dispatch(RemoveFromCart({productId}));
  }

  ngOnInit(): void {
    this.cart$.subscribe(cart => {
        let price = 0;
        cart.forEach(item => {
          price += item.price * item.count;
          this.cartTotalPrice = price;
        });
      }
    );
  }

}
