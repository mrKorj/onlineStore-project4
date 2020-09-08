import {Action, createReducer, on} from '@ngrx/store';
import {IProduct} from './product.reducer';
import {
  AddToCart, AddToCartFail, AddToCartSuccess,
  LoginFail,
  LoginStart,
  LoginSuccess, RegisterFail, RegisterStart, RegisterSuccess, RemoveFromCart, RemoveFromCartFail, RemoveFromCartSuccess,
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
  userLoading: boolean;
}

export const initialState: IUserState = {
  name: null,
  lastName: null,
  role: null,
  cart: [],
  logged: false,
  userLoading: false
};


const reducer = createReducer(initialState,
  on(UserAuthentication, state => ({...state, userLoading: true})),
  on(UserAuthenticationSuccess, (state, {name, lastName, cart, role}) =>
    ({...state, name, lastName, role, cart, logged: true, userLoading: false})),
  on(UserAuthenticationFail, state => ({...state, userLoading: false})),

  on(LoginStart, state => ({...state, userLoading: true})),
  on(LoginSuccess, (state, {name, lastName, cart, role}) =>
    ({...state, name, lastName, role, cart, logged: true, userLoading: false})),
  on(LoginFail, state => ({...state, logged: false, userLoading: false})),

  on(RegisterStart, state => ({...state, userLoading: true})),
  on(RegisterSuccess, (state, {name, lastName, cart, role}) =>
    ({...state, logged: true, name, lastName, role, cart, userLoading: false})),
  on(RegisterFail, state => ({...state, logged: false, userLoading: false})),

  on(UserLogout, () => initialState),

  on(AddToCart, state => ({...state, userLoading: true})),
  on(AddToCartSuccess, (state, {cart}) => ({...state, cart, userLoading: false})),
  on(AddToCartFail, state => ({...state, userLoading: false})),

  on(RemoveFromCart, state => ({...state, userLoading: true})),
  on(RemoveFromCartSuccess, (state, {cart}) => ({...state, cart, userLoading: false})),
  on(RemoveFromCartFail, state => ({...state, userLoading: false})),

);

export const userReducer = (state: IUserState, action: Action) => {
  return reducer(state, action);
};
