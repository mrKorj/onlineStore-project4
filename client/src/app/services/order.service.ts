import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IOrderState} from '../store/reducers/order.reducer';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getTotalOrders(): Observable<any> {
    return this.http.get('http://localhost:4000/api/order/total_orders');
  }

  getUserOrders(): Observable<IOrderState[]> {
    return this.http.get<IOrderState[]>('http://localhost:4000/api/order/user_orders', {withCredentials: true});
  }
}
