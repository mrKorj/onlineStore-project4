import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {loadProducts, searchProduct} from '../store/product/product.actions';

@Component({
  selector: 'app-product-navbar',
  templateUrl: './product-navbar.component.html',
  styleUrls: ['./product-navbar.component.css']
})
export class ProductNavbarComponent implements OnInit {

  link = 'Milk & Eggs';
  searchValue = '';

  constructor(private productStore: Store<IState>) {
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
