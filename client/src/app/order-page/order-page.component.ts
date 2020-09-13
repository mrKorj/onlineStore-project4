import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {User} from '../store/user/user.selectors';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit {
  cartTotalPrice = 0;

  user$: Observable<IUserState>;
  constructor(private userStore: Store<IState>) {
    this.user$ = userStore.select(User);
  }

  ngOnInit(): void {
    this.user$.subscribe(user => {
        let price = 0;
        user.cart.forEach(item => {
          price += item.price * item.count;
          this.cartTotalPrice = price;
        });
      }
    );
  }

}
