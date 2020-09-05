import {createAction, props} from '@ngrx/store';
import {IProduct} from '../reducers/product.reducer';

export const loadProducts = createAction('[Product] Load Products', props<{category: string}>());
export const loadProductsSuccess = createAction('[Product] Load Products Success', props<{products: IProduct[]}>());
export const loadProductsFail = createAction('[Product] Load Products Fail');

export const searchProduct = createAction('[Product] Search Product', props<{value: string}>());

export const addProduct = createAction('[Product] Add Product', props<{product: IProduct}>());
export const addProductSuccess = createAction('[Product] Add Product Success', props<{product: IProduct}>());
export const addProductsFail = createAction('[Product] Add Product Fail');

export const deleteProduct = createAction('[Product] Delete Product', props<{productId: string}>());
export const deleteProductSuccess = createAction('[Product] Delete Product Success', props<{productId: string}>());
export const deleteProductsFail = createAction('[Product] Delete Product Fail');





