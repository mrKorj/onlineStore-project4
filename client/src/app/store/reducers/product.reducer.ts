import {Action, createReducer, on} from '@ngrx/store';
import {
  addProduct, addProductsFail, addProductSuccess, deleteProduct, deleteProductsFail, deleteProductSuccess,
  loadProducts,
  loadProductsFail,
  loadProductsSuccess,
  searchProduct
} from '../product/product.actions';

export interface IProduct {
  _id?: string;
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
  on(loadProductsFail, state => ({...state, productLoading: false})),

  on(searchProduct, state => ({...state, productLoading: true})),

  on(addProduct, state => ({...state, productLoading: true})),
  on(addProductSuccess, (state, payload) => ({
    ...state,
    products: [...state.products, payload.product],
    productLoading: false
  })),
  on(addProductsFail, state => ({...state, productLoading: false})),

  on(deleteProduct, state => ({...state, productLoading: true})),
  on(deleteProductSuccess, (state, payload) => ({
    ...state,
    productLoading: false,
    products: state.products.filter(p => p._id !== payload.productId)
  })),
  on(deleteProductsFail, state => ({...state, productLoading: false})),
);

export const productReducer = (state: IProductState, action: Action) => {
  return reducer(state, action);
};
