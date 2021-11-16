import { SignuppageComponent } from './signuppage/signuppage.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';


//Componentes
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'loginPage', component : LoginpageComponent},
  {path: 'signUpPage', component: SignuppageComponent},
  // {path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
