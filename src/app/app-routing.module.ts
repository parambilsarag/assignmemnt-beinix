import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListviewComponent } from './listview/listview.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  // {path: 'register', component: RegisterComponent},
  {path: 'listview', component: ListviewComponent},
  {path: 'window', component: WindowComponent},
  {path: 'form', component: FormComponent},
  {path: '',
  loadChildren: () => import('./log-reg/log-reg.module').then(m => m.LogRegModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
