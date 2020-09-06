import {Action, createReducer, on} from '@ngrx/store';
import {
  addProduct,
  addProductFail,
  addProductSuccess,
  deleteProduct,
  deleteProductFail,
  deleteProductSuccess,
  editProduct, editProductFail,
  editProductSuccess,
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
  on(addProductSuccess, (state, payload) => {
    if (state.products[0].category === payload.product.category) {
      return {
        ...state,
        products: [...state.products, payload.product],
        productLoading: false
      };
    }
    return {...state, productLoading: false};
  }),
  on(addProductFail, state => ({...state, productLoading: false})),

  on(deleteProduct, state => ({...state, productLoading: true})),
  on(deleteProductSuccess, (state, payload) => ({
    ...state,
    productLoading: false,
    products: state.products.filter(p => p._id !== payload.productId)
  })),
  on(deleteProductFail, state => ({...state, productLoading: false})),

  on(editProduct, state => ({...state, productLoading: true})),
  on(editProductSuccess, (state, payload) => ({
    ...state,
    productLoading: false,
    products: state.products.map(product => {
      if (product._id === payload.product._id) {
        product = payload.product;
      }
      return product;
    })
  })),
  on(editProductFail, state => ({...state, productLoading: false}))
);

export const productReducer = (state: IProductState, action: Action) => {
  return reducer(state, action);
};
