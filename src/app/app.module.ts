import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NvD3Module } from 'ng2-nvd3';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


import 'd3';
import 'nvd3';

import { IncidentsService } from './services/incidents.service';
import { DonutChartComponent } from './components/donut-chart/donut-chart/donut-chart.component';
import { CustomLegendComponent } from './components/donut-chart/custom-legend/custom-legend.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DashboardComponent,
    DonutChartComponent,
    CustomLegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    NvD3Module,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    IncidentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
