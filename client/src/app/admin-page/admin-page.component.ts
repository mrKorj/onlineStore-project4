import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../store/reducers/product.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {ProductLoading, Products} from '../store/product/product.selectors';
import {deleteProduct} from '../store/product/product.actions';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  products$: Observable<IProduct[]>;
  productLoading: Observable<boolean>;

  constructor(private productState: Store<IState>) {
    this.products$ = productState.select(Products);
    this.productLoading = productState.select(ProductLoading);
  }

  deleteHandler(productId: string): void {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.productState.dispatch(deleteProduct({productId}));
      }
    });
  }

  ngOnInit(): void {
  }

}
