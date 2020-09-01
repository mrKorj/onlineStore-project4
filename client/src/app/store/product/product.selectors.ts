import {createSelector} from '@ngrx/store';
import {IState} from '../reducers';

export const Products = createSelector(
  (state: IState) => state.products,
  productState => productState.products
);


