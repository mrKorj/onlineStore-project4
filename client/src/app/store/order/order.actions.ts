import { createAction, props } from '@ngrx/store';
import {IOrder} from '../reducers/order.reducer';

export const loadOrders = createAction('[Order] Load Orders');
export const loadOrdersSuccess = createAction('[Order] Load Orders Success', props<{orders: IOrder[]}>());
export const loadOrdersFail = createAction('[Order] Load Orders Fail');

export const addNewOrder = createAction('[Order] Add New Order',
  props<{street: string, city: string, shippingDate: Date, creditCard: number}>());
export const addNewOrderSuccess = createAction('[Order] Add New Orders Success', props<{order: IOrder}>());
export const addNewOrderFail = createAction('[Order] Add New Orders Fail');



