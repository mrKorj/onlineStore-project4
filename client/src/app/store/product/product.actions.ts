import { createAction, props } from '@ngrx/store';
import {IProduct} from '../reducers/product.reducer';

export const loadProducts = createAction('[Product] Load Products', props<{category: string}>());
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{products: IProduct[]}>());
export const loadProductsFail = createAction('[Product] Load Products Fail');

export const searchProduct = createAction('[Product] Search Product', props<{value: string}>());





