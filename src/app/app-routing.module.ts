import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { ListviewComponent } from './listview/listview.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [
  { path: 'listview', component: ListviewComponent, canActivate: [AuthGuard] },
  { path: 'window', component: WindowComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponent, canActivate: [AuthGuard] },
  {
    path: '',
    loadChildren: () => import('./log-reg/log-reg.module').then(m => m.LogRegModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
