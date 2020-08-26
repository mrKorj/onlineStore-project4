import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterFormComponent} from './register-form/register-form.component';
import {MainPageComponent} from './main-page/main-page.component';
import {PrivateRoute} from './private.route';
import {AdminRoute} from './admin.route';
import {AdminPageComponent} from './admin-page/admin-page.component';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'register', component: RegisterFormComponent},
  {path: 'main', component: MainPageComponent, canActivate: [PrivateRoute]},
  {path: 'admin', component: AdminPageComponent, canActivate: [AdminRoute]},
  {path: '**', redirectTo: '/main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
