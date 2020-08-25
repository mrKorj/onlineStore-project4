import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user.service';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  LoginFail,
  LoginStart,
  LoginSuccess,
  RegisterFail,
  RegisterStart,
  RegisterSuccess,
  UserAuthentication,
  UserAuthenticationFail,
  UserAuthenticationSuccess
} from './user.actions';
import {Router} from '@angular/router';
import * as M from 'materialize-css';


@Injectable()
export class UserEffects {

  constructor(private actions$: Actions, private userService: UserService, private router: Router) {
  }

  userAuthentication$ = createEffect(() => this.actions$.pipe(
    ofType(UserAuthentication),
    mergeMap(() => this.userService.userAuthentication().pipe(
      map(user => UserAuthenticationSuccess({...user})),
      catchError(() => of(UserAuthenticationFail()))
    ))
  ));

  login$ = createEffect(() => this.actions$.pipe(
    ofType(LoginStart),
    exhaustMap(action => this.userService.login(action.email, action.password).pipe(
      map((user) => {
        this.router.navigateByUrl('/main');
        return LoginSuccess({...user});
      }),
      catchError(({error}) => {
        M.toast({html: `<span class="flow-text">${error}</span>`, displayLength: 9000, classes: 'rounded pink darken-2'});
        return of(LoginFail());
      })
    ))
  ));

  register$ = createEffect(() => this.actions$.pipe(
    ofType(RegisterStart),
    exhaustMap(action => this.userService.register({...action.registerData}).pipe(
      map(user => {
        this.router.navigateByUrl('/main');
        return RegisterSuccess({...user});
      }),
      catchError(() => of(RegisterFail()))
    ))
  ));

}
