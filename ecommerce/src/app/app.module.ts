import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { SingleProductComponent } from './components/pages/single-product/single-product.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AccountComponent } from './components/pages/account/account.component';
import { DropdownComponent } from './components/pages/dropdown/dropdown.component';
import { MainLayoutComponent } from './components/pages/main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './components/pages/cart/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/pages/search/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { SearchFilterPipe } from './search-filter.pipe';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbdDropdownBasic } from './components/ngbd-dropdown-basic/ngbd-dropdown-basic.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    SingleProductComponent,
    AddProductComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    DropdownComponent,
    MainLayoutComponent,
    CartComponent,
    SearchComponent,
    SearchFilterPipe,
    NavbarComponent,
    NgbdDropdownBasic,
    AddComponent
  ],
  imports: [
    [NgbModule],
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
     MatIconModule,
     MatSidenavModule,
     MatListModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'products/:id',
        component: SingleProductComponent,
      },
      {
        path: 'cart',
        component: CartComponent ,
      },
      {
         path: 'about',
       component: AboutComponent
      },

       {
         path: 'products',
       component: ProductsComponent
      },

       {
         path: 'login',
       component: LoginComponent
      },

       {
         path: 'register',
       component: RegisterComponent
      },
      {path:'profile',component:AccountComponent},
      {
        path: 'add',
      component: AddComponent
     },
     {
      path: 'search',
    component: SearchComponent
   },
  ]),
    BrowserAnimationsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
