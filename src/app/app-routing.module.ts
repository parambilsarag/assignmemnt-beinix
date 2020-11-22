import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListviewComponent } from './listview/listview.component';
import { WindowComponent } from './window/window.component';

const routes: Routes = [
  {path: 'listview', component: ListviewComponent},
  {path: '', component: WindowComponent},
  {path: 'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
