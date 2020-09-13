import {Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {OrderService} from './order.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShippingDateValidator implements AsyncValidator {

  constructor(private orderService: OrderService) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const date = control.value;

    return this.orderService.checkShippingDate(date).pipe(
      map(({status}) => status ? null : {message: 'Shipping to this date unavailable!'})
    );
  }
}
