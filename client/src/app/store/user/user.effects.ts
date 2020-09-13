import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user.service';
import {catchError, exhaustMap, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {
  AddToCart, AddToCartFail, AddToCartSuccess, ClearCart, ClearCartFail, ClearCartSuccess,
  LoginFail,
  LoginStart,
  LoginSuccess,
  RegisterFail,
  RegisterStart,
  RegisterSuccess, RemoveFromCart, RemoveFromCartFail, RemoveFromCartSuccess,
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
      map(user => {
        user.role === 'admin'
          ? this.router.navigateByUrl('/admin')
          : this.router.navigateByUrl('/main');
        return UserAuthenticationSuccess({...user});
      }),
      catchError(() => of(UserAuthenticationFail()))
    ))
  ));

  login$ = createEffect(() => this.actions$.pipe(
    ofType(LoginStart),
    exhaustMap(action => this.userService.login(action.email, action.password).pipe(
      map((user) => {
        user.role === 'admin'
          ? this.router.navigateByUrl('/admin')
          : this.router.navigateByUrl('/main');
        return LoginSuccess({...user});
      }),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 9000,
          classes: 'rounded pink darken-2'
        });
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
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 9000,
          classes: 'rounded pink darken-2'
        });
        return of(RegisterFail());
      })
    ))
  ));

  addToCart$ = createEffect(() => this.actions$.pipe(
    ofType(AddToCart),
    exhaustMap(action => this.userService.addToCart(action.productId, action.count).pipe(
      map(cart => {
        M.toast({
          html: `<span class="flow-text">Product added to cart.</span>`,
          displayLength: 6000,
          classes: 'rounded green'
        });
        return AddToCartSuccess({cart});
      }),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 5000,
          classes: 'rounded pink darken-2'
        });
        return of(AddToCartFail());
      })
    ))
  ));

  removeFromCart$ = createEffect(() => this.actions$.pipe(
    ofType(RemoveFromCart),
    exhaustMap(action => this.userService.removeFromCart(action.productId).pipe(
      map(cart => RemoveFromCartSuccess({cart})),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 5000,
          classes: 'rounded pink darken-2'
        });
        return of(RemoveFromCartFail());
      })
    ))
  ));

  clearCart$ = createEffect(() => this.actions$.pipe(
    ofType(ClearCart),
    exhaustMap(() => this.userService.clearCart().pipe(
      map(cart => ClearCartSuccess({cart})),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 5000,
          classes: 'rounded pink darken-2'
        });
        return of(ClearCartFail());
      })
    ))
  ));

}
