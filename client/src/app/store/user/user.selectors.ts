import {createSelector} from '@ngrx/store';
import {IState} from '../reducers';

export const User = createSelector(
  (state: IState) => state.user,
  user => user
);

export const UserLoading = createSelector(
  (state: IState) => state.user,
  user => user.userLoading
);

export const UserCart = createSelector(
  (state: IState) => state.user,
  user => user.cart
);
