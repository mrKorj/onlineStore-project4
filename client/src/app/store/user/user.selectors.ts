import {createSelector} from '@ngrx/store';
import {IState} from '../reducers';

export const User = createSelector(
  (state: IState) => state.user,
  user => user
);

