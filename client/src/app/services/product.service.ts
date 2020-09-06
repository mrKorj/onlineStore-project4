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

  addProduct(formVal: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:4000/api/product/add', formVal, {withCredentials: true});
  }

  deleteProduct(productId: string): Observable<{ message: string }> {
    return this.http.post<{ message: string }>('http://localhost:4000/api/product/delete', {productId}, {withCredentials: true});
  }

  editProduct(formVal: Omit<IProduct, 'category'>): Observable<IProduct> {
    return this.http.post<IProduct>('http://localhost:4000/api/product/edit', formVal, {withCredentials: true});
  }
}
