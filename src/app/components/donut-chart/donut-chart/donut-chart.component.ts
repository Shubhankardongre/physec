import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

declare let d3: any;

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss', '../../../../../node_modules/nvd3/build/nv.d3.css']
})
export class DonutChartComponent implements OnInit {

  @Input() chartTitle: any;
  @Input() incidentTypeList: any[] = [];
  @Output() legendClickCallBack = new EventEmitter<string>();
  @Output() clearClickCallBack = new EventEmitter();

  private options: any;
  private clearText = environment.incConstants.CLEAR;;
  private legendColors = environment.incConstants.LEGENDCOLORS;

  constructor() { }

  legendClick(selectedIncidentType: string) {
    this.legendClickCallBack.emit(selectedIncidentType);
  }

  clearFunction() {
    this.clearClickCallBack.emit();
  }

  ngOnInit() {
    console.log(this.chartTitle);
    let chartTitle = this.chartTitle;
    this.options = {
      chart: {
        type: environment.incConstants.CHARTPROPERTIES.TYPE,
        height: environment.incConstants.CHARTPROPERTIES.HEIGHT,
        color: this.legendColors,
        x: function (d) { return d.key; },
        y: function (d) { return d.y; },
        showLabels: environment.incConstants.CHARTPROPERTIES.SHOWLABELS,
        donut: environment.incConstants.CHARTPROPERTIES.DONUT,
        donutRatio: environment.incConstants.CHARTPROPERTIES.DONMUTRATIO,
        labelThreshold: environment.incConstants.CHARTPROPERTIES.LABELTHRESHHOLD,
        labelSunbeamLayout: environment.incConstants.CHARTPROPERTIES.LABELSUNBEAMLAYOUT,
        growOnHover: environment.incConstants.CHARTPROPERTIES.GROWONHOVER,
        showLegend: environment.incConstants.CHARTPROPERTIES.SHOWLEGEND,
        dispatch: {
          renderEnd: function (a, b, c) {
            var svgChartEle = d3.select("#incidentdata svg");
            var initSlice = svgChartEle.selectAll("g.nv-slice").filter(
              function (ele, indx) {
                return indx == 0;
              }
            );
            //removing all the dynamic title elements to update with the new data
            var incElems = document.querySelectorAll(".incEle");
            Array.prototype.forEach.call(incElems, function (incNode) {
              incNode.parentNode.removeChild(incNode);
            });
            // Insert first line of text into middle of donut pie chart
            initSlice.insert("text", "g")
              .text(chartTitle.count)
              .attr("class", "nv-pie-title noofinc incEle")
              .attr("text-anchor", "middle")
              .attr("dy", "-.55em")
              .style("fill", "#000")
              .style("font-size", "30px")
              .style("font-weight", "500")
              .style("color", "#737373");
            // Insert second line of text into middle of donut pie chart
            initSlice.insert("text", "g")
              .text(chartTitle.title)
              .attr("class", "nv-pie-title incDesc incEle")
              .attr("text-anchor", "middle")
              .attr("dy", ".85em")
              .style("fill", "#000")
              .style("font-size", "14px")
              .style("color", "#777777");
          }
        }
      }
    }
    console.log(this.incidentTypeList)
  }

}
