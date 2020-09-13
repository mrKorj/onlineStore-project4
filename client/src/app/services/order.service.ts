import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IOrder} from '../store/reducers/order.reducer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getTotalOrders(): Observable<any> {
    return this.http.get('http://localhost:4000/api/order/total_orders');
  }

  getUserOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('http://localhost:4000/api/order/user_orders', {withCredentials: true});
  }

  checkShippingDate(shippingDate: Date): Observable<{ status: boolean }> {
    return this.http.post<{ status: boolean }>('http://localhost:4000/api/order/shipping', {shippingDate}, {withCredentials: true});
  }

  newOrder(orderForm): Observable<{ order: IOrder, cart: [] }> {
    return this.http.post<{ order: IOrder, cart: [] }>('http://localhost:4000/api/order', orderForm, {withCredentials: true});
  }
}
