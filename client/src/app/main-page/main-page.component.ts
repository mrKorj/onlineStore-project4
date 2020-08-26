import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {User} from '../store/user/user.selectors';
import {ProductService} from '../services/product.service';
import {OrderService} from '../services/order.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user$: Observable<IUserState>;
  totalProducts: number;
  totalOrders: number;

  constructor(private userStore: Store<IState>, private productService: ProductService, private orderService: OrderService) {
    this.user$ = userStore.select(User);
  }


  ngOnInit(): void {
    this.productService.getTotalProducts().subscribe(res => this.totalProducts = res.total);
    this.orderService.getTotalOrders().subscribe(res => this.totalOrders = res.total);
  }

}
