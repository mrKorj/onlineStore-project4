import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {User} from '../store/user/user.selectors';
import {UserService} from '../services/user.service';
import {RegisterStart} from '../store/user/user.actions';
import {RegisterValidator} from '../services/registerValidator';
import {OrderService} from '../services/order.service';

export interface IRegisterData {
  email: string;
  password: string;
  idNumber: number;
  name: string;
  lastName: string;
  city: string;
  street: string;
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  user$: Observable<IUserState>;
  isExist: boolean;
  registerData: IRegisterData = {
    email: null,
    password: null,
    idNumber: null,
    name: null,
    lastName: null,
    city: null,
    street: null
  };
  allCity: any = ['Jerusalem', 'Tel Aviv', 'Rishon Le Zion', 'Petah Tikva', 'Ashdod', 'Rehovot', 'Haifa', 'Carmiel', 'Eilat'];
  totalOrders: number;

  constructor(private fb: FormBuilder, private userStore: Store<IState>, private userService: UserService,
              private registerValidator: RegisterValidator, private orderService: OrderService) {
    this.user$ = userStore.select(User);
  }

  registerForm = this.fb.group({
      email: this.fb.control('', {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.registerValidator.validate.bind(this.registerValidator)]
        }
      ),
      password: this.fb.control('', [Validators.required]),
      password2: this.fb.control('', [Validators.required]),
      id: this.fb.control('', [Validators.required, Validators.min(9999999), Validators.max(999999999)]),
    },
    {validator: this.passwordMatchValidator}
  );

  registerForm2 = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    city: this.fb.control('', [Validators.required]),
    street: this.fb.control('', [Validators.required]),
  });

  passwordMatchValidator(form: FormGroup): {} | null {
    return form.get('password').value === form.get('password2').value ? null : {mismatch: true};
  }

  changeCity(e): void {
    this.city.setValue(e.target.value);
  }

  get city(): any {
    return this.registerForm2.get('city');
  }

  registerPing(): void {
    const {id, email, password} = this.registerForm.value;
    this.userService.registerPing(email)
      .subscribe(response => {
        this.isExist = response.status;
        if (this.isExist) {
          this.registerData = {...this.registerData, idNumber: id, email, password};
        }
      });
  }

  register(): void {
    const {name, lastName, city, street} = this.registerForm2.value;
    this.registerData = {...this.registerData, name, lastName, city, street};
    this.userStore.dispatch(RegisterStart({registerData: this.registerData}));
  }

  ngOnInit(): void {
    this.orderService.getTotalOrders().subscribe(res => this.totalOrders = res.total);
  }

}
