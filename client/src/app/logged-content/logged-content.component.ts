import {Component, OnChanges, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {User} from '../store/user/user.selectors';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {IOrder} from '../store/reducers/order.reducer';
import {Order} from '../store/order/order.selectors';
import {loadOrders} from '../store/order/order.actions';

@Component({
  selector: 'app-logged-content',
  templateUrl: './logged-content.component.html',
  styleUrls: ['./logged-content.component.css']
})
export class LoggedContentComponent implements OnInit, OnChanges {

  user$: Observable<IUserState>;
  userOrders$: Observable<IOrder[]>;
  lastOrder: IOrder;
  totalPrice = 0;

  constructor(private userStore: Store<IState>, private orderStore: Store<IState>) {
    this.user$ = userStore.select(User);
    this.userOrders$ = orderStore.select(Order);
  }

  ngOnChanges(): void {
    this.totalPrice = 0;
  }

  ngOnInit(): void {
    this.orderStore.dispatch(loadOrders());
    this.userOrders$.subscribe(orders => this.lastOrder = orders[orders.length - 1]);
    this.user$.subscribe(user => {
      let price = 0;
      user.cart.forEach(item => {
        price += item.price * item.count;
        this.totalPrice = price;
      });
    });
  }
}
