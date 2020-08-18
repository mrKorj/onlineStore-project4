import { Action, createReducer, on } from '@ngrx/store';


export const productFeatureKey = 'product';

export interface IProductState {

}

export const initialState: IProductState = {

};


export const reducer = createReducer(
  initialState,

);

