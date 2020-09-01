import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IProduct} from '../store/reducers/product.reducer';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getTotalProducts(): Observable<any> {
    return this.http.get('http://localhost:4000/api/product/total');
  }

  getCategoryProducts(category: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:4000/api/product/${category.toLowerCase()}`, {withCredentials: true});
  }

  searchProduct(value: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:4000/api/product/search/${value.toLowerCase()}`, {withCredentials: true});
  }
}
