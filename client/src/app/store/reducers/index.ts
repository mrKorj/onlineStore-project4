import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import {IUserState, userReducer} from './user.reducer';
import {IProductState, productReducer} from './product.reducer';
import {IOrderState, orderReducer} from './order.reducer';

export interface IState {
  user: IUserState;
  products: IProductState;
  order: IOrderState;
}

export const reducers: ActionReducerMap<IState> = {
  user: userReducer,
  products: productReducer,
  order: orderReducer,
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
