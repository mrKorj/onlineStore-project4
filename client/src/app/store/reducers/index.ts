import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromUser from './user.reducer';
import * as fromProduct from './product.reducer';
import * as fromOrder from './order.reducer';

export interface IState {

  [fromUser.userFeatureKey]: fromUser.IUserState;
  [fromProduct.productFeatureKey]: fromProduct.IProductState;
  [fromOrder.orderFeatureKey]: fromOrder.IOrderState;
}

export const reducers: ActionReducerMap<IState> = {

  [fromUser.userFeatureKey]: fromUser.reducer,
  [fromProduct.productFeatureKey]: fromProduct.reducer,
  [fromOrder.orderFeatureKey]: fromOrder.reducer,
};


export const metaReducers: MetaReducer<IState>[] = !environment.production ? [] : [];
