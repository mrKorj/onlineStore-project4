import { Action, createReducer, on } from '@ngrx/store';


export const orderFeatureKey = 'order';

export interface IOrderState {

}

export const initialState: IOrderState = {

};


export const reducer = createReducer(
  initialState,

);

