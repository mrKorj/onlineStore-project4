import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IOrder} from '../store/reducers/order.reducer';
import {SERVER_URL} from '../../../serverURL';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getTotalOrders(): Observable<any> {
    return this.http.get(`${SERVER_URL}/api/order/total_orders`);
  }

  getUserOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${SERVER_URL}/api/order/user_orders`, {withCredentials: true});
  }

  checkShippingDate(shippingDate: Date): Observable<{ status: boolean }> {
    return this.http.post<{ status: boolean }>(`${SERVER_URL}/api/order/shipping`, {shippingDate}, {withCredentials: true});
  }

  newOrder(orderForm): Observable<{ order: IOrder, cart: [] }> {
    return this.http.post<{ order: IOrder, cart: [] }>(`${SERVER_URL}/api/order`, orderForm, {withCredentials: true});
  }
}
