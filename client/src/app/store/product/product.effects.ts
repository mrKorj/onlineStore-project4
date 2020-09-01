import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {ProductService} from '../../services/product.service';
import {loadProducts, loadProductsFail, loadProductsSuccess, searchProduct} from './product.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import * as M from 'materialize-css';
import {of} from 'rxjs';
import {LoginFail} from '../user/user.actions';


@Injectable()
export class ProductEffects {


  constructor(private actions$: Actions, private productService: ProductService) {
  }

  products$ = createEffect(() => this.actions$.pipe(
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

}
