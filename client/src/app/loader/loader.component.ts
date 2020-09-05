import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {UserLoading} from '../store/user/user.selectors';
import {Observable} from 'rxjs';
import {ProductLoading} from '../store/product/product.selectors';
import {OrderLoading} from '../store/order/order.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  userLoading$: Observable<boolean>;
  productLoading$: Observable<boolean>;
  orderLoading$: Observable<boolean>;

  constructor(private userState: Store<IState>, private productState: Store<IState>, private orderState: Store<IState>) {
    this.userLoading$ = userState.select(UserLoading);
    this.productLoading$ = productState.select(ProductLoading);
    this.orderLoading$ = orderState.select(OrderLoading);
  }
}
