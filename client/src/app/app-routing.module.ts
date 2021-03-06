import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterFormComponent} from './register-form/register-form.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PrivateRoute} from './private.route';
import {AdminRoute} from './admin.route';
import {AdminPageComponent} from './admin-page/admin-page.component';
import {ProductsPageComponent} from './products-page/products-page.component';
import {OrderPageComponent} from './order-page/order-page.component';
import {OrdersHistoryComponent} from './orders-history/orders-history.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'main', component: MainPageComponent, canActivate: [PrivateRoute]},
  {path: 'products', component: ProductsPageComponent, canActivate: [PrivateRoute]},
  {path: 'order', component: OrderPageComponent, canActivate: [PrivateRoute]},
  {path: 'order/history', component: OrdersHistoryComponent, canActivate: [PrivateRoute]},
  {path: 'admin', component: AdminPageComponent, canActivate: [AdminRoute]},
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
