import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user.service';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  LoginFail,
  LoginStart,
  LoginSuccess,
  UserAuthentication,
  UserAuthenticationFail,
  UserAuthenticationSuccess
} from './user.actions';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService) {
  }

  userAuthentication$ = createEffect(() => this.actions$.pipe(
    ofType(UserAuthentication),
    mergeMap(() => this.userService.userAuthentication().pipe(
      map(user => UserAuthenticationSuccess({user})),
      catchError(() => of(UserAuthenticationFail()))
    ))
  ));

  login$ = createEffect(() => this.actions$.pipe(
    ofType(LoginStart),
    exhaustMap(action => this.userService.login(action.email, action.password).pipe(
      map(user => LoginSuccess({...user})),
      catchError(() => of(LoginFail()))
    ))
  ));

}
