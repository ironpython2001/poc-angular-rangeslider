import { Component, OnInit } from '@angular/core';
import { geoNaturalEarth1, geoPath, geoGraticule } from 'd3';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.scss']
})
export class WorldmapComponent implements OnInit {

  private projection;
  private path;
  private graticule;

  constructor() { }

  ngOnInit(): void {
    this.projection = geoNaturalEarth1();
    this.path = geoPath(this.projection);
    this.graticule  = geoGraticule();
  }

}
