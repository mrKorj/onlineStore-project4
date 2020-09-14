import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {Observable} from 'rxjs';
import {IOrder} from '../store/reducers/order.reducer';
import {Order} from '../store/order/order.selectors';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  orders$: Observable<IOrder[]>;
  orderDetails: IOrder;
  index = 0;

  constructor(private orderState: Store<IState>) {
    this.orders$ = orderState.select(Order);
  }

  orderDetailsHandler(orderId, i): void {
    this.index = i;
    this.orders$.subscribe(orders => {
      orders.forEach(order => {
        if (order._id === orderId) {
          this.orderDetails = order;
        }
      });
    });
  }

  ngOnInit(): void {
    this.orders$.subscribe(orders => {
      this.orderDetails = orders[0];
    });
  }

}
