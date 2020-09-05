import {createSelector} from '@ngrx/store';
import {IState} from '../reducers';

export const Products = createSelector(
  (state: IState) => state.products,
  productState => productState.products
);

export const ProductLoading = createSelector(
  (state: IState) => state.products,
  products => products.productLoading
);

