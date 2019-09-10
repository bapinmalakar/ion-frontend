import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonStorageService } from '../services/commond_storage.service';
import { ThrowStmt } from '@angular/compiler';

declare var bootbox: any;

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  selectedYear: any = null;
  readingFinish: boolean = false;
  processing: boolean = true;
  analyticsData: any = null;
  monthSpentChart: any = null;
  daySpentChart: any = null;
  selectYear: string = '';
  fileName: string = ''

  constructor(private _commonStorage: CommonStorageService, private _activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activateRoute.params.subscribe(params => {
      console.log('Param is: ', params)
      this.fileName = params['name'];
      setTimeout(() => this.socketFunctions(), 1000);
    });
  }

  socketFunctions() {
    console.log('Socket function called', this._commonStorage.socket);
    this.readingFinish = false;
    this.processing = true;
    this._commonStorage.socket.emit('process-my-file', { fileName: this.fileName, socketId: this._commonStorage.socket.id });
    this._commonStorage.socket.on('file-analytics', this.getFileData.bind(this));
    this._commonStorage.socket.on('file-read-finish', this.fileReadingFinish.bind(this));
    this._commonStorage.socket.on('file-error', this.fileGettingError.bind(this));
  }

  fileGettingError(data) {
    let self = this;
    bootbox.alert({
      message: 'File is not present, kindly upload', size: 'small', callback: () => {
        location.replace(`${self._commonStorage.app}/home`);
      }
    });
  }

  getFileData(analyticsData) {
    this.processing = false;
    this.analyticsData = analyticsData;
    this.setSelectedYear(this.analyticsData.years[0]);

    if (!this.readingFinish) {
      this._commonStorage.socket.emit('process-next-data', { fileName: this.fileName, socketId: this._commonStorage.socket.id });
    }
  }

  fileReadingFinish(flag) {
    console.log('Flag is: ', flag);
    this.readingFinish = true;
  }

  setSelectedYear(yearIs: string = '') {
    console.log('Year is: ', yearIs);
    this.selectedYear = this.analyticsData[yearIs];
    console.log('Select year is::: ', this.selectedYear);
    this.selectYear = yearIs;
    this.prepareDaySpentChart();
    this.prepareMonthSpent();
  }

  prepareDaySpentChart() {
    const obj = {
      chart: {
        zoomType: 'x'
      },
      title: {
        text: `Day wise usages of year ${this.selectYear}`
      },
      xAxis: {
        title: {
          text: 'Day'
        },
        labels: {
          enabled: false
        }
      },
      yAxis: {
        title: {
          text: 'Daily Usages values'
        },
        labels: {
          formatter: function () {
            return (Math.abs(this.value / 10));
          }
        }
      },
      series: [
        {
          name: 'Thermometer',
          data: this.selectedYear.days.map((d) => [d, this.selectedYear['day_spent'][d]])
        }
      ]
    };
    this.daySpentChart = obj;
  }

  prepareMonthSpent() {
    const obj = {
      chart: {
        type: 'column'
      },
      title: {
        text: `Month wise usages of year ${this.selectYear}`
      },
      tooltip: {
        outside: true
      },
      xAxis: {
        type: 'category',
        title: { text: 'Months' }
      },
      yAxis: {
        title: {
          text: 'Monthly usages values'
        }

      },

      plotOptions: {
        series: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y:.1f}'
          }
        }
      },
      series: [{
        name: "Usages",
        colorByPoint: true,
        data: this.selectedYear['months'].map((d) => { return { name: d, y: this.selectedYear['month_spent'][d] } })
      }]
    };
    console.log('Now object is: ', obj);
    this.monthSpentChart = obj;
  }

  navigateToAllView(path: string) {
    window.location.replace(`${this._commonStorage.app}/${path}`);
  }


}
