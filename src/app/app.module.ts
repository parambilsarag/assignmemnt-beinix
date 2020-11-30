import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { FormComponent } from './form/form.component';
import { ListviewComponent } from './listview/listview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-angular-charts';
import { AccumulationDataLabelService } from '@syncfusion/ej2-angular-charts';
import { DataserviceService } from './dataservice.service';
import { CommonModule } from '@angular/common';
import { SortPipe } from './shared/pipes/sort.pipe';
import { LogRegModule } from './log-reg/log-reg.module';
import { AuthGuard } from './auth.guard';
import {RegistartionserviceService} from './registartionservice.service';
import {HttpClientModule} from '@angular/common/http';
import { Ng2OrderModule } from 'ng2-order-pipe';



@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    FormComponent,
    ListviewComponent,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccumulationChartModule,
    CommonModule,
    LogRegModule,
    HttpClientModule,
    Ng2OrderModule

  ],
  providers: [PieSeriesService, AccumulationDataLabelService, DataserviceService, AuthGuard,RegistartionserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
