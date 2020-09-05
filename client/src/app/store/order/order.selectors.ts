import {createSelector} from '@ngrx/store';
import {IState} from '../reducers';
import {orderFeatureKey} from '../reducers/order.reducer';

export const Order = createSelector(
  (state: IState) => state[orderFeatureKey],
  order => order
);

export const OrderLoading = createSelector(
  (state: IState) => state.order,
  order => order.orderLoading
);

