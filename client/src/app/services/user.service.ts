import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';
import {IProduct} from '../store/reducers/product.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  userAuthentication(): Observable<IUserState> {
    return this.http.get<IUserState>('http://localhost:4000/api/authentication',
      {withCredentials: true});
  }

  login(email: string, password: string): Observable<IUserState> {
    return this.http.post<IUserState>('http://localhost:4000/api/login',
      {email, password}, {withCredentials: true});
  }

  logout(): any {
    this.http.get('http://localhost:4000/api/login', {withCredentials: true}).subscribe();
  }

  registerPing(idNumber: number, email: string): Observable<any> {
    return this.http.post<any>('http://localhost:4000/api/register/ping', {idNumber, email});
  }

  register(registerData): Observable<IUserState> {
    return this.http.post<IUserState>('http://localhost:4000/api/register',
      {...registerData}, {withCredentials: true});
  }

  addToCart(productId, count): Observable<IProduct[]> {
    return this.http.post<IProduct[]>('http://localhost:4000/api/cart/add', {productId, count}, {withCredentials: true});
  }

  removeFromCart(productId): Observable<IProduct[]> {
    return this.http.post<IProduct[]>('http://localhost:4000/api/cart/delete', {productId}, {withCredentials: true});
  }

  clearCart(): Observable<[]> {
    return this.http.delete<[]>('http://localhost:4000/api/cart/clear_cart', {withCredentials: true});
  }
}
