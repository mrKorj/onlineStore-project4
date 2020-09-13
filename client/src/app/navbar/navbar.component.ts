import {Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';
import {Store} from '@ngrx/store';
import {IUserState} from '../store/reducers/user.reducer';
import {User} from '../store/user/user.selectors';
import {Observable} from 'rxjs';
import {IState} from '../store/reducers';
import {UserLogout} from '../store/user/user.actions';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user$: Observable<IUserState>;

  constructor(private userStore: Store<IState>, private userService: UserService) {
    this.user$ = userStore.select(User);
  }

  ngOnInit(): void {
    M.Sidenav.init(document.querySelector('#dropdown'), {edge: 'left'});
    M.Sidenav.init(document.querySelector('#slide-out'), {edge: 'right'});
    M.Dropdown.init(document.querySelector('#user_drop'));
  }

  logOut(): void {
    this.userStore.dispatch(UserLogout());
    this.userService.logout();
  }

}
