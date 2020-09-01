import {Action, createReducer, on} from '@ngrx/store';
import {loadProducts, loadProductsFail, loadProductsSuccess} from '../product/product.actions';

export interface IProduct {
  name: string;
  price: number;
  category: string;
  picUrl: string;
  count?: number;
}

export interface IProductState {
  products: IProduct[];
  productLoading: boolean;
}

export const initialState: IProductState = {
  products: [],
  productLoading: false
};


const reducer = createReducer(
  initialState,
  on(loadProducts, state => ({...state, productLoading: true})),
  on(loadProductsSuccess, (state, payload) => ({...state, productLoading: false, products: payload.products})),
  on(loadProductsFail, state => ({...state, productLoading: false}))
);

export const productReducer = (state: IProductState, action: Action) => {
  return reducer(state, action);
};
