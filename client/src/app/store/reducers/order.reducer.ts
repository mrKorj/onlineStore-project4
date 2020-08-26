import {Action, createReducer, on} from '@ngrx/store';
import {IProduct} from './product.reducer';


export const orderFeatureKey = 'order';

export interface IOrderState {
  userId: string;
  city: string;
  street: string;
  shippingDate: Date;
  orderDate?: Date;
  creditCard: number;
  totalPrice: number;
  items: IProduct[];
}

export const initialState: IOrderState = {
  userId: null,
  city: null,
  street: null,
  shippingDate: null,
  creditCard: null,
  totalPrice: null,
  items: []
};


const reducer = createReducer(
  initialState,
);

export const orderReducer = (state: IOrderState, action: Action) => {
  return reducer(state, action);
};
