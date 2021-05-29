import { OnChanges, Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import DataDrivenRangeSlider from "data-driven-range-slider";
import * as d3 from 'd3';

@Component({
  selector: "app-data-driven-range-slider",
  templateUrl: "./data-driven-range-slider.component.html",
  styleUrls: ["./data-driven-range-slider.component.scss"]
})
export class DataDrivenRangeSliderComponent implements OnInit, OnChanges {
  @ViewChild("chartContainer") chartContainer: ElementRef;
  @Input() data: any[];
  chart;
  selectedRange = [];
  selectedData = [];

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    if (!this.chart) {
      this.chart = new DataDrivenRangeSlider();
    }
    console.log(this.data);
    this.updateChart();

  }

  ngOnChanges() {
    if (!this.data) {
      return;
    }
    if (!this.chart) {
      return;
    }
    this.updateChart();
  }
  updateChart() {
    this.chart
      .container(this.chartContainer.nativeElement)
      .data(this.data)
      .svgWidth(window.innerWidth - 50)
      .svgHeight(100)
      .accessor(d => new Date(d))
      .onBrush(d => {
        this.selectedRange = d.range;
        this.selectedData = d.data;
      })
      .render();
  }
}
