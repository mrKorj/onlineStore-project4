import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../store/reducers/product.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {Products} from '../store/product/product.selectors';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  products$: Observable<IProduct[]>;

  constructor(private productState: Store<IState>) {
    this.products$ = productState.select(Products);
  }

  ngOnInit(): void {
  }

}
