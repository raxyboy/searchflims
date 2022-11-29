import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmSearchComponent } from './film-search/film-search.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const routes: Routes = [
  {path:'login', component: LoginFormComponent},
  {path:'search', component: FilmSearchComponent, canActivate: [AuthenticationGuard]},
  {path: 'register', component: RegisterFormComponent},
  {path:'**', redirectTo:'/login'},
  {path:'', pathMatch:'full', component: NotFoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
