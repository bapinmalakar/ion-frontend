import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { CommonStorageService } from './commond_storage.service';

@Injectable()

export class HttpService {
    basicHeader: HttpHeaders;
    constructor(private _http: HttpClient, private _commonStorageService: CommonStorageService) {
        this.basicHeader = new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getAllThermometer() {
        return this._http.get(`${this._commonStorageService.api}all_thermo`, { headers: this.basicHeader })
            .pipe(
                map((res: HttpResponse<any>) => res['data']),
                catchError((err: HttpErrorResponse) => throwError(err))
            )
    }

    fetchDetailsOfAThermometer(name: string) {
        return this._http.get(`${this._commonStorageService.api}thermo_detail/${name}`, { headers: this.basicHeader }).pipe(
            map(res => res['data']),
            catchError(err => throwError(err))
        )
    }
}