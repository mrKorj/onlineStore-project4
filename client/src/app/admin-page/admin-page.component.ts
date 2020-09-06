import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IProduct} from '../store/reducers/product.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {ProductLoading, Products} from '../store/product/product.selectors';
import {deleteProduct, editProduct} from '../store/product/product.actions';
import Swal from 'sweetalert2';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  products$: Observable<IProduct[]>;
  productLoading: Observable<boolean>;
  editProd: IProduct;

  constructor(private productState: Store<IState>, private fb: FormBuilder) {
    this.products$ = productState.select(Products);
    this.productLoading = productState.select(ProductLoading);
  }

  editProductForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required]),
    picUrl: this.fb.control('', [Validators.required])
  });

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

  editModal(productId: string): void {
    this.products$.subscribe(product => [this.editProd] = product.filter(p => p._id === productId));
    this.editProductForm.get('name').setValue(this.editProd.name);
    this.editProductForm.get('price').setValue(this.editProd.price);
    this.editProductForm.get('picUrl').setValue(this.editProd.picUrl);
  }


  editProduct(): void {
    const {name, price, picUrl} = this.editProductForm.value;
    this.productState.dispatch(editProduct({name, productId: this.editProd._id, price, picUrl}));
  }
  ngOnInit(): void {
  }

}
