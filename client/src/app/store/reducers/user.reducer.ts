import { Action, createReducer, on } from '@ngrx/store';


export const userFeatureKey = 'user';

export interface IUserState {

}

export const initialState: IUserState = {

};


export const reducer = createReducer(
  initialState,

);

