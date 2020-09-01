import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {User} from '../store/user/user.selectors';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {OrderService} from '../services/order.service';
import {IOrderState} from '../store/reducers/order.reducer';

@Component({
  selector: 'app-logged-content',
  templateUrl: './logged-content.component.html',
  styleUrls: ['./logged-content.component.css']
})
export class LoggedContentComponent implements OnInit {

  user$: Observable<IUserState>;
  totalPrice = 0;
  userOrders: IOrderState;

  constructor(private userStore: Store<IState>, private orderService: OrderService) {
    this.user$ = userStore.select(User);
  }


  ngOnInit(): void {
    this.orderService.getUserOrders().subscribe(orders => this.userOrders = orders[orders.length - 1]);
    this.user$.subscribe(user => user.cart.forEach(item => this.totalPrice += item.price * item.count));
  }

}
