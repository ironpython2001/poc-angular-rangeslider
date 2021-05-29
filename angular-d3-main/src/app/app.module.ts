import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ScatterComponent } from './scatter/scatter.component';
import { TreemapComponent } from './treemap/treemap.component';
import { WorldmapComponent } from './worldmap/worldmap.component';
import { DataDrivenRangeSliderComponent } from './data-driven-range-slider/data-driven-range-slider.component';
import { MyrangesliderComponent } from './myrangeslider/myrangeslider.component';
//import * as d3 from "d3";


@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    PieComponent,
    ScatterComponent,
    TreemapComponent,
    WorldmapComponent,
    DataDrivenRangeSliderComponent,
    MyrangesliderComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
