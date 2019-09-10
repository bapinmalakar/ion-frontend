import { Component, OnInit } from '@angular/core';
import { CommonStorageService } from '../services/commond_storage.service';
import { HttpService } from '../services/http.service';
import { TouchSequence } from 'selenium-webdriver';

declare var bootbox: any;

@Component({
  selector: 'app-all-thermo-view',
  templateUrl: './all-thermo-view.component.html',
  styleUrls: ['./all-thermo-view.component.css']
})
export class AllThermoViewComponent implements OnInit {
  loading: boolean = true;
  thermometers: any[] = [];
  fetchingData: boolean = false;
  thermoDetails: any = null;
  selectedName: string = '';
  daySpentChart: any = null;
  monthSpentChart: any = null;

  constructor(private _commonStorageService: CommonStorageService, private _httpService: HttpService) { }

  ngOnInit() {
    const urlParse = window.location.href.split('/');
    if (urlParse[urlParse.length - 1] !== 'all_view') {
      console.log('Inside if case');
      this.selectedName = urlParse[urlParse.length - 1];
      this.getDataOfThermometer();
    }
    this.getAllTherometer();
  }

  getAllTherometer() {
    this._httpService.getAllThermometer().subscribe(data => {
      console.log('data is: ', data);
      if (!data.length) {
        const self = this;
        bootbox.alert({
          message: 'Upload a thermometer', size: 'small', callback: () => {
            location.replace(`${self._commonStorageService.app}/home`);
          }
        });
      } else {
        this.loading = false;
        this.thermometers.push({ _id: -1, name: "Select a thermometer" });
        this.thermometers.push(...data);
      }
    }, err => bootbox.alert({ message: 'Something went wrong. Reload the page', size: 'small' }));
  }

  onChangeSelection(index: number) {
    if (!Number(index)) return;
    this.daySpentChart = null;
    this.monthSpentChart = null;
    this.selectedName = this.thermometers[index].name;
    this.getDataOfThermometer();
  }

  getDataOfThermometer() {
    this.fetchingData = true;
    this._httpService.fetchDetailsOfAThermometer(this.selectedName).subscribe(
      data => {
        console.log('Data is: ', data);
        if (!data) {
          bootbox.alert({ message: "We didn't found any thermometer with this name", size: 'small' });
          this.fetchingData = false;
        } else {
          this.thermoDetails = data;
          this.onChangeYear(0);
          this.fetchingData = false;
        }
      }
    )
  }

  onChangeYear(index: any) {
    console.log('indes ix: ', index);
    const data = this.thermoDetails['year_details'][index];
    [this.daySpentChart, this.monthSpentChart] = [this.prepareChartDateForAYear('day', data, this.thermoDetails['years'][index]), this.prepareChartDateForAYear('month', data, this.thermoDetails['years'][index])]
  }

  prepareChartDateForAYear(type: string, data: any, year: string) {
    const obj = {
      chart: {
        type: 'column'
      },
      title: {
        text: `${type == 'day' ? 'Day' : 'Month'} wise usages of year ${year}`
      },
      tooltip: {
        outside: true
      },
      xAxis: {
        type: 'category',
        title: { text: `${type =='day'? 'Days' : 'Months'}` }
      },
      yAxis: {
        title: {
          text: `${type == 'day' ? 'Daily' : 'Monthly'} usages values`
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
        data: data[type == 'day' ? 'days' : 'months'].map((d) => { return { name: d, y: data[`${type == 'day' ? 'day_spent' : 'month_spent'}`][d] } })
      }]
    };
    console.log('Now object is: ', obj);
    return obj;
  }


}
