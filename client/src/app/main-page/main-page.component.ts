import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {User} from '../store/user/user.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  user$: Observable<IUserState>;

  constructor(private userStore: Store<IState>) {
    this.user$ = userStore.select(User);
  }


  ngOnInit(): void {

  }

}
