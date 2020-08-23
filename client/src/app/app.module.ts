import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import { UserEffects } from './store/user/user.effects';
import { ProductEffects } from './store/product/product.effects';
import { OrderEffects } from './store/order/order.effects';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CartComponent } from './cart/cart.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavbarComponent,
    LoginFormComponent,
    CartComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production, name: 'online Store'}),
        EffectsModule.forRoot([UserEffects, ProductEffects, OrderEffects]),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
