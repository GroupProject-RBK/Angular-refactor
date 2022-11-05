import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from '../app/components/pages/register/register.component'
import { AccountComponent } from './components/pages/account/account.component';
const routes: Routes = [ 
  {path:"register",component:RegisterComponent},
  {path:'login',component:LoginComponent},
{path:'profile',component:AccountComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
