import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from './store/reducers';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminRoute implements CanActivate {

  role$: Observable<string>;

  constructor(private store: Store<IState>, private router: Router) {
    this.role$ = store.select(state => state.user.role);
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.role$.pipe(map(role => {
      if (role === 'admin') {
        return true;
      }

      this.router.navigateByUrl('/');
      return false;
    }));
  }

}
