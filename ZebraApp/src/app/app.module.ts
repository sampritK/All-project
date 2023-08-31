import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ChartModule } from 'angular-highcharts';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ProgressModule } from '@coreui/angular';


// import { NgChartsModule } from 'ng2-charts/lib/ng-charts.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ChartModule,
    // MatProgressBarModule,
    // ProgressModule
    // NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
