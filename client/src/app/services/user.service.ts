import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IUserState} from '../store/reducers/user.reducer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  userAuthentication(): Observable<IUserState> {
    return this.http.get<IUserState>('http://localhost:4000/api/authentication');
  }

  login(email: string, password: string): Observable<IUserState> {
    return this.http.post<IUserState>('http://localhost:4000/api/login', {email, password});
  }
}
