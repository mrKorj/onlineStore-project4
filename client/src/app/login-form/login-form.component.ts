import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {LoginStart} from '../store/user/user.actions';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private userStore: Store<IState>) {
  }

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required])
  });

  login(): void {
    const {email, password} = this.loginForm.value;
    this.userStore.dispatch(LoginStart({email, password}));
    this.loginForm.reset();
  }

  ngOnInit(): void {
  }

}
