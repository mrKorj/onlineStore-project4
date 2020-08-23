import {Action, createReducer} from '@ngrx/store';

export interface IProduct {
  name: string;
  price: number;
  category: string;
  picUrl: string;
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
);

export const productReducer = (state: IProductState, action: Action) => {
  return reducer(state, action);
};
