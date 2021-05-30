import { Component, OnInit } from '@angular/core';
declare var MyRangeSlider: Function;

@Component({
  selector: 'app-myrangeslider',
  templateUrl: './myrangeslider.component.html',
  styleUrls: ['./myrangeslider.component.css']
})
export class MyrangesliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    MyRangeSlider("this is a test message");
  }

}
