import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {loadProducts, searchProduct} from '../store/product/product.actions';
import {IUserState} from '../store/reducers/user.reducer';
import {Observable} from 'rxjs';
import {User} from '../store/user/user.selectors';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {

  link = 'Milk & Eggs';
  searchValue = '';
  user$: Observable<IUserState>;

  constructor(private productStore: Store<IState>, private userStore: Store<IState>) {
    this.user$ = this.userStore.select(User);
  }

  categoryHandler(category: string): void {
    this.link = category;
    this.productStore.dispatch(loadProducts({category}));
  }

  searchHandler(): void {
    if (this.searchValue.trim()) {
      this.productStore.dispatch(searchProduct({value: this.searchValue}));
      this.link = '';
    }
  }

  ngOnInit(): void {
    M.Sidenav.init(document.querySelector('#mobile-product-category'), {edge: 'left'});
    M.Modal.init(document.querySelectorAll('.modal'), {dismissible: false});
    this.productStore.dispatch(loadProducts({category: 'Milk & Eggs'}));
  }

}
