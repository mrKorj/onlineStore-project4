import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  addNewOrder,
  addNewOrderFail,
  addNewOrderSuccess,
  loadOrders,
  loadOrdersFail,
  loadOrdersSuccess
} from './order.actions';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {OrderService} from '../../services/order.service';
import * as M from 'materialize-css';
import {of} from 'rxjs';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
import {SERVER_URL} from '../../../../serverURL';


@Injectable()
export class OrderEffects {

  constructor(private actions$: Actions, private orderService: OrderService, private router: Router) {
  }

  userOrders$ = createEffect(() => this.actions$.pipe(
    ofType(loadOrders),
    exhaustMap(() => this.orderService.getUserOrders().pipe(
      map(orders => loadOrdersSuccess({orders})),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 5000,
          classes: 'rounded pink darken-2'
        });
        return of(loadOrdersFail());
      })
    ))
  ));

  newOrder$ = createEffect(() => this.actions$.pipe(
    ofType(addNewOrder),
    exhaustMap(action => this.orderService.newOrder({...action}).pipe(
      map(response => {
        Swal.fire({
          title: 'Order successfully accepted!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Ok',
          allowOutsideClick: false,
          html:
            `You can download the invoice from this <a href="${SERVER_URL}/api/order/invoice">link</a>`,
        }).then(() => {
          this.router.navigateByUrl('/main');
        });
        return addNewOrderSuccess({order: response.order});
      }),
      catchError(({error}) => {
        M.toast({
          html: `<span class="flow-text">${error}</span>`,
          displayLength: 5000,
          classes: 'rounded pink darken-2'
        });
        return of(addNewOrderFail());
      })
    ))
  ));

}
