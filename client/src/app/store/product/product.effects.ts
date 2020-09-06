import {Injectable} from '@angular/core';
import {act, Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from '../../services/product.service';
import {
  addProduct,
  addProductFail,
  addProductSuccess,
  deleteProduct,
  deleteProductSuccess, editProduct, editProductFail, editProductSuccess,
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
  searchProduct
} from './product.actions';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import * as M from 'materialize-css';
import {of} from 'rxjs';


@Injectable()
export class ProductEffects {


  constructor(private actions$: Actions, private productService: ProductService) {
  }

  getProducts$ = createEffect(() => this.actions$.pipe(
    ofType(loadProducts),
    mergeMap(action => this.productService.getCategoryProducts(action.category).pipe(
      map(products => loadProductsSuccess({products})),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 9000,
          classes: 'rounded pink darken-2'
        });
        return of(loadProductsFail());
      })
    ))
  ));

  searchProduct$ = createEffect(() => this.actions$.pipe(
    ofType(searchProduct),
    mergeMap(action => this.productService.searchProduct(action.value).pipe(
      map(products => loadProductsSuccess({products})),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 9000,
          classes: 'rounded pink darken-2'
        });
        return of(loadProductsFail());
      })
    ))
  ));

  addProduct$ = createEffect(() => this.actions$.pipe(
    ofType(addProduct),
    exhaustMap(action => this.productService.addProduct(action.product).pipe(
      map(product => {
        M.toast({
          html: `<span class="flow-text">Product added successfully.</span>`,
          displayLength: 6000,
          classes: 'rounded green'
        });
        return addProductSuccess({product});
      }),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 9000,
          classes: 'rounded pink darken-2'
        });
        return of(addProductFail());
      })
    ))
  ));

  deleteProduct$ = createEffect(() => this.actions$.pipe(
    ofType(deleteProduct),
    mergeMap(action => this.productService.deleteProduct(action.productId).pipe(
      map(({message}) => {
        M.toast({
          html: `<span class="flow-text">${message}</span>`,
          displayLength: 6000,
          classes: 'rounded green'
        });
        return deleteProductSuccess({productId: action.productId});
      }),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 9000,
          classes: 'rounded pink darken-2'
        });
        return of(addProductFail());
      })
    ))
  ));

  editProduct$ = createEffect(() => this.actions$.pipe(
    ofType(editProduct),
    mergeMap(action => this.productService.editProduct({...action}).pipe(
      map((product) => {
        M.toast({
          html: `<span class="flow-text">Product updated successfully.</span>`,
          displayLength: 6000,
          classes: 'rounded green'
        });
        return editProductSuccess({product});
      }),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 9000,
          classes: 'rounded pink darken-2'
        });
        return of(editProductFail());
      })
    ))
  ));
}
