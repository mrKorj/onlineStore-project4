import {createSelector} from '@ngrx/store';
import {IState} from '../reducers';

export const Order = createSelector(
  (state: IState) => state.order,
  orderState => orderState.orders
);

export const OrderLoading = createSelector(
  (state: IState) => state.order,
  orderState => orderState.orderLoading
);

