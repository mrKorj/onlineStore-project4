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

  on(UserLogout, () => initialState)
);

export const userReducer = (state: IUserState, action: Action) => {
  return reducer(state, action);
};
