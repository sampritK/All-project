import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChartType, ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Chart } from 'angular-highcharts';
import { ProgressBarMode } from '@angular/material/progress-bar';

import { ILoadedEventArgs, ChartComponent, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
 
// chart = new Chart({
//   chart: {
//     type: 'line'
//   },
//   title: {
//     text: 'Month wise sales'
//   },
//   xAxis: {
//    categories: [
//     'Jan',
//     'Feb',
//     'Mar',
//     'Apr',
//     'May',
//     'Jun',
//     'Jul',
//     'Aug',
//     'Sep',
//     'Oct',
//     'Nov',
//     'Dec',
    
    
//    ]
//   },
//   yAxis: {
//     title: {
//       text: 'Revenue in $'
//     } 
//   },
//   series: [
//     {
//       name: "Arizona",
//       type: "line",
//       data: [70, 77, 85, 98, 94, 46, 123, 543, 183, 234, 128, 234]
//     }
//   ]
// } as any)


// Declaration Part
// Lable Part
// public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
// public barChartLabels: BaseChartDirective["labels"] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
// public barChartType : ChartType = 'bar';
// public barChartLegand = true;
// public barChartPlugins =  [pluginDataLabels];

// public barChartData: ChartDataset [] = [
//   { data: [65, 55, 77, 78, 18, 88, 40], label: 'Series A '},
//   { data: [26, 40, 18, 86, 77, 99], label: 'Series A '}
// ];
// public barChartOptions: ChartOptions = {
//   responsive: true,
//   scales: { xAxes: [{}], yAxes: [{}] },
//   datalabels:{
//     anchor: 'end',
//     align: 'end',
//   }
// };



//Initializing Primary X Axis
public primaryXAxis: Object = {
  labelIntersectAction: Browser.isDevice ? 'None' : 'Trim', labelRotation: Browser.isDevice ? -45 : 0 ,valueType: 'Category', interval: 1, majorGridLines: { width: 0 }, majorTickLines: { width: 0 }
};
//Initializing Primary Y Axis
public primaryYAxis: Object = {
  title: 'Medal Count',
  maximum: 50,
  interval: 10,
  majorTickLines: { width: 0 }, lineStyle: { width: 0 }, 
};
public marker: Object = { dataLabel: { visible: false, position: 'Top', font: { fontWeight: '600', color: '#ffffff' } } }
public title: string = 'Olympic Medal Counts - RIO';
public tooltip: Object = {
  enable: true,
  header: '<b>${point.tooltip}</b>',
  shared: true
};
public legend: Object = {
  visible: true,
  enableHighlight : true
}
// custom code start
// 
// custom code end
public chartArea: Object = {
  border: {
      width: 0
  }
};
public width: string = Browser.isDevice ? '100%' : '75%';


  ngOnInit(): void {
    
  }




}
