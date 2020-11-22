import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WindowComponent } from './window/window.component';
import { FormComponent } from './form/form.component';
import { ListviewComponent } from './listview/listview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-angular-charts';
import { AccumulationDataLabelService} from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    WindowComponent,
    FormComponent,
    ListviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccumulationChartModule
  ],
  providers: [PieSeriesService,AccumulationDataLabelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
