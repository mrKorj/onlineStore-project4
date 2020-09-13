import {Action, createReducer, on} from '@ngrx/store';
import {IProduct} from './product.reducer';
import {
  addNewOrder,
  addNewOrderFail,
  addNewOrderSuccess,
  loadOrders,
  loadOrdersFail,
  loadOrdersSuccess
} from '../order/order.actions';

export interface IOrderState {
  orders: IOrder[];
  orderLoading: boolean;
}

export interface IOrder {
  userId: string;
  city: string;
  street: string;
  shippingDate: Date;
  orderDate?: Date;
  creditCard: number;
  totalPrice: number;
  items: IProduct[];
  orderLoading: boolean;
}

export const initialState: IOrderState = {
  orders: [],
  orderLoading: false
};


const reducer = createReducer(
  initialState,
  on(loadOrders, state => ({...state, orderLoading: true})),
  on(loadOrdersSuccess, (state, {orders}) => ({...state, orders, orderLoading: false})),
  on(loadOrdersFail, state => ({...state, orderLoading: false})),

  on(addNewOrder, state => ({...state, orderLoading: true})),
  on(addNewOrderSuccess, ((state, {order}) => ({...state, orders: [...state.orders, order], orderLoading: false}))),
  on(addNewOrderFail, state => ({...state, orderLoading: false})),

);

export const orderReducer = (state: IOrderState, action: Action) => {
  return reducer(state, action);
};
