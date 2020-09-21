import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {IProduct} from '../store/reducers/product.reducer';
import {SERVER_URL} from '../../../serverURL';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  userAuthentication(): Observable<IUserState> {
    return this.http.get<IUserState>(`${SERVER_URL}/api/authentication`,
      {withCredentials: true});
  }

  login(email: string, password: string): Observable<IUserState> {
    return this.http.post<IUserState>(`${SERVER_URL}/api/login`,
      {email, password}, {withCredentials: true});
  }

  logout(): any {
    this.http.get(`${SERVER_URL}/api/login`, {withCredentials: true}).subscribe();
  }

  registerPing(email: string): Observable<{status: boolean}> {
    return this.http.post<{status: boolean}>(`${SERVER_URL}/api/register/ping`, {email});
  }

  register(registerData): Observable<IUserState> {
    return this.http.post<IUserState>(`${SERVER_URL}/api/register`,
      {...registerData}, {withCredentials: true});
  }

  addToCart(productId, count): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`${SERVER_URL}/api/cart/add`, {productId, count}, {withCredentials: true});
  }

  removeFromCart(productId): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(`${SERVER_URL}/api/cart/delete`, {productId}, {withCredentials: true});
  }

  clearCart(): Observable<[]> {
    return this.http.delete<[]>(`${SERVER_URL}/api/cart/clear_cart`, {withCredentials: true});
  }
}
