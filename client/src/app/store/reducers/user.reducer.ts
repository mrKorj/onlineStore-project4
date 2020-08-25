import {Action, createReducer, on} from '@ngrx/store';
import {IProduct} from './product.reducer';
import {
  LoginFail,
  LoginStart,
  LoginSuccess, RegisterFail, RegisterStart, RegisterSuccess,
  UserAuthentication,
  UserAuthenticationFail,
  UserAuthenticationSuccess, UserLogout
} from '../user/user.actions';

export interface IUserState {
  name: string;
  lastName: string;
  role: string;
  cart: IProduct[];
  logged: boolean;
}

export const initialState: IUserState = {
  name: null,
  lastName: null,
  role: null,
  cart: [],
  logged: false
};


const reducer = createReducer(initialState,
  on(UserAuthentication, state => ({...state})),
  on(UserAuthenticationSuccess, (state, {name, lastName, cart, role}) => ({...state, logged: true, name, lastName, role, cart})),
  on(UserAuthenticationFail, state => ({...state})),

  on(LoginStart, state => ({...state})),
  on(LoginSuccess, (state, {name, lastName, cart, role}) => ({...state, logged: true, name, lastName, role, cart})),
  on(LoginFail, state => ({...state, logged: false})),

  on(RegisterStart, state => ({...state})),
  on(RegisterSuccess, (state, {name, lastName, cart, role}) => ({...state, logged: true, name, lastName, role, cart})),
  on(RegisterFail, state => ({...state, logged: false})),

  on(UserLogout, () => initialState)
);

export const userReducer = (state: IUserState, action: Action) => {
  return reducer(state, action);
};
