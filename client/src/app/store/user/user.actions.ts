import {createAction, props} from '@ngrx/store';
import {IUserState} from '../reducers/user.reducer';
import {IProduct} from '../reducers/product.reducer';
import {IRegisterData} from '../../register-form/register-form.component';

export const UserLogout = createAction('[User] LogOut');

export const UserAuthentication = createAction('[User] Authentication');
export const UserAuthenticationSuccess = createAction('[User] Authentication success',
  props<{ name: string, lastName: string, role: string, cart: IProduct[] }>());
export const UserAuthenticationFail = createAction('[User] Authentication fail');

export const LoginStart = createAction('[User] start login', props<{ email: string, password: string }>());
export const LoginSuccess = createAction('[User] login success',
  props<{ name: string, lastName: string, role: string, cart: IProduct[] }>());
export const LoginFail = createAction('[User] login fail');

export const RegisterStart = createAction('[User] start register', props<{ registerData: IRegisterData }>());
export const RegisterSuccess = createAction('[User] register success',
  props<{ name: string, lastName: string, role: string, cart: IProduct[] }>());
export const RegisterFail = createAction('[User] register fail');

export const AddToCart = createAction('[User] Add to cart', props<{ productId: string, count: number }>());
export const AddToCartSuccess = createAction('[User] Add to cart success', props<{ cart: IProduct[] }>());
export const AddToCartFail = createAction('[User] Add to cart fail');

export const RemoveFromCart = createAction('[User] Remove from cart', props<{ productId: string }>());
export const RemoveFromCartSuccess = createAction('[User] Remove from cart success', props<{ cart: IProduct[] }>());
export const RemoveFromCartFail = createAction('[User] Remove from cart fail');

export const ClearCart = createAction('[User] Clear cart');
export const ClearCartSuccess = createAction('[User] Clear cart success', props<{ cart: [] }>());
export const ClearCartFail = createAction('[User] Clear cart fail');
