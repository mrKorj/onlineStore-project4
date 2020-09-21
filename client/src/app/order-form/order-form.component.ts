import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ShippingDateValidator} from '../services/shippingDateValidator';
import {Store} from '@ngrx/store';
import {IState} from '../store/reducers';
import {ClearCart} from '../store/user/user.actions';
import {addNewOrder} from '../store/order/order.actions';
import {Router} from '@angular/router';

const regxCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  allCity: any = ['Jerusalem', 'Tel Aviv', 'Rishon Le Zion', 'Petah Tikva', 'Ashdod', 'Rehovot', 'Haifa', 'Carmiel', 'Eilat'];

  minDate = new Date().toISOString().split('T')[0];

  constructor(private fb: FormBuilder, private shippingDateValidator: ShippingDateValidator,
              private userState: Store<IState>, private orderState: Store<IState>, private router: Router) {}

  orderForm = this.fb.group({
    creditCard: this.fb.control('', [Validators.required, Validators.pattern(regxCard)]),
    shippingDate: this.fb.control('', [Validators.required], [this.shippingDateValidator.validate.bind(this.shippingDateValidator)]),
    city: this.fb.control('', [Validators.required]),
    street: this.fb.control('', [Validators.required]),
  });

  changeCity(e): void {
    this.city.setValue(e.target.value);
  }

  get city(): any {
    return this.orderForm.get('city');
  }

  order(): void {
    const order = this.orderForm.value;
    this.orderState.dispatch(addNewOrder({...order}));
    this.userState.dispatch(ClearCart());
  }

}
