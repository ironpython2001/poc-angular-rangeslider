import { Component, OnInit } from '@angular/core';
import { get } from 'scriptjs';
declare var MyRangeSlider: Function;

@Component({
  selector: 'app-myrangeslider',
  templateUrl: './myrangeslider.component.html',
  styleUrls: ['./myrangeslider.component.css']
})
export class MyrangesliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    get("https://d3js.org/d3.v5.min.js", () => {
      console.log("d3js loaded");
      get("https://unpkg.com/data-driven-range-slider@1.0.1/index.js", () => {
        console.log("data-driven-range-slider has been loaded...");
        MyRangeSlider("this is a test message");
      });
    });
  }

}
