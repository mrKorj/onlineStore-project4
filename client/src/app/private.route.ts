import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from './store/reducers';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PrivateRoute implements CanActivate {

  isLogged$: Observable<boolean>;

  constructor(private store: Store<IState>, private router: Router) {
    this.isLogged$ = store.select(state => state.user.logged);
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isLogged$.pipe(map(isLogged => {
      if (isLogged) {
        return true;
      }

      this.router.navigateByUrl('/');
      return false;
    }));
  }

}
