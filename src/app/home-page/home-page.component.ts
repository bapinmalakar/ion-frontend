import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { CommonStorageService } from '../services/commond_storage.service';
import { HttpService } from '../services/http.service';

declare var bootbox: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  windowHeight: number = 770;
  thermometers: any = [];
  public uploader: FileUploader;
  uploading: boolean = false;
  fileName: string = '';

  constructor(public commomStorage: CommonStorageService, private _httpService: HttpService) {
    this.uploader = new FileUploader({ url: this.commomStorage.api + '/upload_file', itemAlias: 'temp_file' });
  }

  ngOnInit() {
    this.getAllThermometer();
    this.windowHeight = window.innerHeight;
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are 
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.uploading = false;
      location.replace(`${this.commomStorage.app}/views/${this.fileName}`);
    };
  }

  uploadFile() {
    this.uploading = true;
    this.fileName = this.uploader.queue[0].file.name.split('.')[0];
    if (!this.thermometers.length) {
      this.uploader.uploadAll();
    } else {
      const indexIs = this.thermometers.findIndex(d => d.name == this.fileName);
      if (indexIs !=-1) {
        bootbox.confirm({
          message: `${this.fileName} already present. Are you want to update again?`,
          buttons: {
            confirm: {
              label: 'Yes, update',
              className: 'btn-success'
            },
            cancel: {
              label: 'No, cancel',
              className: 'btn-danger'
            }
          },
          callback: this.submitFile.bind(this)
        })
      } else {
        this.uploader.uploadAll();
      }
    }
  }

  submitFile(result: any) {
    if (result) {
      this.uploader.uploadAll();
    } else {
      this.uploading = false;
    }
  }

  selectThermometer(index: number) {
    if (!Number(index)) {
      return;
    } else {
      window.location.replace(`${this.commomStorage.app}/all_view/${this.thermometers[index].name}`)
    }
  }

  getAllThermometer() {
    this._httpService.getAllThermometer().subscribe(data => {
      if (data.length) {
        this.thermometers.push({ _id: -1, name: "Select a thermometer" });
        this.thermometers.push(...data);
      }
    }, err => {
      console.log('Error is: ', err);
    })
  }

}
