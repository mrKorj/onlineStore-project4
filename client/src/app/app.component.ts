import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from './store/reducers';
import {Observable} from 'rxjs';
import {IUserState} from './store/reducers/user.reducer';
import {User} from './store/user/user.selectors';
import {UserAuthentication} from './store/user/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user$: Observable<IUserState>;

  constructor(private userStore: Store<IState>) {
    this.user$ = userStore.select(User);
  }

  ngOnInit(): void {
    this.userStore.dispatch(UserAuthentication());
  }

}
