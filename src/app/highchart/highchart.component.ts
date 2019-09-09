import { Component, AfterViewInit, OnChanges, Input } from '@angular/core';

declare var Highcharts: any;

@Component({
  selector: 'highchart-component',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements AfterViewInit, OnChanges {

  @Input() day_spent_data: any;
  @Input() mont_spent_data: any;
  @Input() finish_reading: boolean;
  lastUpdate: number = 0;

  constructor() { }

  ngAfterViewInit() {
    this.lastUpdate = new Date().getTime();
    Highcharts.chart('day_spent_chart', this.day_spent_data);
    Highcharts.chart('month_spent_chart', this.mont_spent_data);
  }

  ngOnChanges(changes: any) {
    if (this.finish_reading || !changes['day_spent_data'].isFirstChange()) {
      if (this.finish_reading || new Date().getTime() - this.lastUpdate >= 1000) {
        this.lastUpdate = new Date().getTime();
        Highcharts.chart('day_spent_chart', this.day_spent_data);
        Highcharts.chart('month_spent_chart', this.mont_spent_data);
      }
    }
  }

}
