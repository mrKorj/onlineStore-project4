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


@Injectable()
export class OrderEffects {

  constructor(private actions$: Actions, private orderService: OrderService) {
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
      map(response => addNewOrderSuccess({order: response.order})),
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
