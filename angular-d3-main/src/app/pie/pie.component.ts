import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

// Adopted from Basic pie chart example on D3 Graph Gallery:
// https://www.d3-graph-gallery.com/graph/pie_basic.html
@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  private data = [
    {"Framework": "Vue", "Stars": "166443", "Released": "2014"},
    {"Framework": "React", "Stars": "150793", "Released": "2013"},
    {"Framework": "Angular", "Stars": "62342", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "27647", "Released": "2010"},
    {"Framework": "Ember", "Stars": "21471", "Released": "2011"},
  ];
  private svg;
  private legendHolder;
  private margin = 50;
  private width = 600;
  private height = 600;
  private legendPadding = 30;
  // The radius of the pie chart is half the smallest side
  private radius = (Math.min(this.width, this.height) * 0.3) - this.margin;
  private colors;

  ngOnInit(): void {
    console.log(this.radius)
    this.createSvg(); 
    this.createColors();
    this.drawChart();
    this.createLengend();
    this.createLegends();
  }
 

  private createSvg(): void {
    
    this.svg = d3.select("figure#pie")
    .append("svg")
    .attr("width", this.width)
    .attr("height", this.height)
    .append("g")
    .attr('class','g-pie')
    .attr(
      "transform",
      "translate(" + (this.radius + this.margin) + "," + (this.height *0.5) + ")"
    );    
  }

  private createLengend():void{
        
    this.legendHolder = d3.select("figure#pie svg")
      .append("g")
      .attr("width", this.width/2)
      .attr("height", this.height)
      .attr(
        "transform",
        "translate(" + ((this.radius * 2) + this.margin + this.legendPadding) + "," + (this.height * 0.2) + ")"
      );
  }

  private createColors(): void {
    this.colors = d3.scaleOrdinal()
    .domain(this.data.map(d => d.Stars.toString()))
    .range(["#c7d3ec", "#a5b8db", "#879cc4", "#677795", "#5a6782"]);
  }

  private drawChart(): void {
    // Compute the position of each group on the pie:
    const pie = d3.pie<any>().value((d: any) => Number(d.Stars));

    // Build the pie chart
    this.svg
    .selectAll('pieces')
    .data(pie(this.data))
    .enter()
    .append('path')
    .attr('d', d3.arc()
      .innerRadius((this.radius*60)/100)
      .outerRadius(this.radius)
    )
    .attr('fill', (d, i) => (this.colors(i)))
    .attr("stroke", "#121926")
    .style("stroke-width", "0px");

    // Add labels
    const labelLocation = d3.arc()
    .innerRadius(100)
    .outerRadius(this.radius);

  }

  private createLegends() : void {
    this.data.forEach((d,i)=> {
      console.log(d);      
      this.legendHolder.append("rect")
      .attr('class', 'bar')
      .attr('y', (d) => (i+1) * 30)
      .attr('width', 10)
      .attr('fill', this.colors(i))
      .attr('height', 10);

       this.legendHolder.append("text").text(d.Framework)
      // .value(d.Framework)
      // .text('class', 'text')
       .attr('y', (d) => ((i+1) * 30) + 10)
       .attr('x', 15)
       .attr('width', 10)
       .attr('fill', '#498bfc')
       .attr('height', 10);
    });
  }

}
