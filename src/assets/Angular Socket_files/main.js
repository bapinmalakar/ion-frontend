(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'views', component: _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_4__["ViewDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_commond_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/commond_storage.service */ "./src/app/services/commond_storage.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(_commonStorage) {
        this._commonStorage = _commonStorage;
        this.title = 'ion-frontend';
        this.socket = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('Socket connection calle');
        this.connectToSocket();
    };
    AppComponent.prototype.connectToSocket = function () {
        this._commonStorage.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this._commonStorage.api);
        ;
        // this._commonStorage.socket.on('my-socket-id', this.setSocketId.bind(this))
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commond_storage_service__WEBPACK_IMPORTED_MODULE_3__["CommonStorageService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-page/home-page.component */ "./src/app/home-page/home-page.component.ts");
/* harmony import */ var _services_commond_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/commond_storage.service */ "./src/app/services/commond_storage.service.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-details/view-details.component */ "./src/app/view-details/view-details.component.ts");
/* harmony import */ var _highchart_highchart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highchart/highchart.component */ "./src/app/highchart/highchart.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_6__["HomePageComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileSelectDirective"],
                _view_details_view_details_component__WEBPACK_IMPORTED_MODULE_9__["ViewDetailsComponent"],
                _highchart_highchart_component__WEBPACK_IMPORTED_MODULE_10__["HighchartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ],
            providers: [_services_commond_storage_service__WEBPACK_IMPORTED_MODULE_7__["CommonStorageService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highchart/highchart.component.css":
/*!***************************************************!*\
  !*** ./src/app/highchart/highchart.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hpZ2hjaGFydC9oaWdoY2hhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/highchart/highchart.component.html":
/*!****************************************************!*\
  !*** ./src/app/highchart/highchart.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"highchart_component\">\n  <div id=\"day_spent_chart\" style=\"height: 150px;overflow: auto;\"></div>\n  <div id=\"month_spent_chart\" style=\"margin-top: 20px;height: 150px;overflow: auto;\"></div>\n</div>"

/***/ }),

/***/ "./src/app/highchart/highchart.component.ts":
/*!**************************************************!*\
  !*** ./src/app/highchart/highchart.component.ts ***!
  \**************************************************/
/*! exports provided: HighchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighchartComponent", function() { return HighchartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighchartComponent = /** @class */ (function () {
    function HighchartComponent() {
    }
    HighchartComponent.prototype.ngAfterViewInit = function () {
        Highcharts.chart('day_spent_chart', this.day_spent_data);
        Highcharts.chart('month_spent_chart', this.mont_spent_data);
    };
    HighchartComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['options'].isFirstChange()) {
            Highcharts.chart('day_spent_chart', this.day_spent_data);
            Highcharts.chart('month_spent_chart', this.mont_spent_data);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HighchartComponent.prototype, "day_spent_data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HighchartComponent.prototype, "mont_spent_data", void 0);
    HighchartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'highchart-component',
            template: __webpack_require__(/*! ./highchart.component.html */ "./src/app/highchart/highchart.component.html"),
            styles: [__webpack_require__(/*! ./highchart.component.css */ "./src/app/highchart/highchart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HighchartComponent);
    return HighchartComponent;
}());



/***/ }),

/***/ "./src/app/home-page/home-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-page/home-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n    text-align: center;\n    font-size: 18px;\n    font-weight: bold;\n    font-family: monospace;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home-page/home-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-page/home-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-div\" [style.height.px]=\"windowHeight\"\n  style=\"width: 100%;display: flex;justify-content: center;align-items: center;\">\n  <div class=\"content\" *ngIf=\"!uploading\">\n    <h1>Upload your JSON file which have your data</h1>\n    <div style=\"display: flex;align-items: center;justify-content: center;\">\n      <input type=\"file\" name=\"temp_file\" accept=\".json\" ng2FileSelect [uploader]=\"uploader\" />\n    </div>\n    <div style=\"margin-top: 3%;\">\n      <button class=\"submit-btn\" style=\"margin-left: 27%;\" (click)=\"uploading=true;uploader.uploadAll()\"\n        [disabled]=\"!uploader.getNotUploadedItems().length\">Send File</button>\n    </div>\n  </div>\n  <div *ngIf=\"uploading\">\n    <img src=\"./../../assets/uploading_gif.gif\" alt=\"uploading-images\" />\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home-page/home-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_commond_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/commond_storage.service */ "./src/app/services/commond_storage.service.ts");




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(commomStorage) {
        this.commomStorage = commomStorage;
        this.windowHeight = 770;
        this.uploading = false;
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: this.commomStorage.api + '/upload_file', itemAlias: 'temp_file' });
    }
    HomePageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.windowHeight = window.innerHeight;
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are 
        //able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log("ImageUpload:uploaded:", item, status, response);
            _this.uploading = false;
            location.replace(_this.commomStorage.app + "/views");
        };
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commond_storage_service__WEBPACK_IMPORTED_MODULE_3__["CommonStorageService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/services/commond_storage.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/commond_storage.service.ts ***!
  \*****************************************************/
/*! exports provided: CommonStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonStorageService", function() { return CommonStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonStorageService = /** @class */ (function () {
    function CommonStorageService() {
        this.api = 'http://localhost:5555';
        this.app = 'http://localhost:4200';
        this.socket = null;
    }
    CommonStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonStorageService);
    return CommonStorageService;
}());



/***/ }),

/***/ "./src/app/view-details/view-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-details/view-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-of-year{\n    width: 100%;\n    height: 40px;\n    display: block;\n    width: 20%;\n    height: 40px;\n    font-size: 10px;\n    background: #989879;\n    border-radius: 10px;\n    float: right;\n    margin-right: 7px;\n}\n\nselect{\n    float: right;\n    margin-right: 8px;\n    margin-top: 5px;\n    height: 30px;\n    width: 149px;\n    text-align: center;\n    outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1kZXRhaWxzL3ZpZXctZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctZGV0YWlscy92aWV3LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LW9mLXllYXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTg5ODc5O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG5zZWxlY3R7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDE0OXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/view-details/view-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-details/view-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view-component\">\n  <div class=\"processing\" *ngIf=\"processing_files\" style=\"display: flex;justify-content: center;\">\n    <img src=\"./../../assets/processing.gif\" alt=\"processing-image\" />\n  </div>\n  \n  <div *ngIf=\"!processing && !readingFinish\" class=\"still-process-message\"\n    style=\"width: 100%; height: 40px;    display: block;width: 100%;height: 40px;text-align: center;font-size: 10px;background: #989879;\">\n    <h1 style=\"line-height: 40px;\">YOUR FILE STILL IN PROCESSING</h1>\n  </div>\n  <div *ngIf=\"!processing && readingFinish\" class=\"list-of-year\">\n    <select (change)=\"setSelectedYear($event.target.value)\">\n      <option value=\"2015\">2015</option>\n      <option value=\"2016\">2016</option>\n    </select>\n  </div>\n  <div style=\"margin-top: 20px;\" *ngIf=\"!processing && selectedYear && daySpentChart && monthSpentChart\">\n    <highchart-component [day_spent_data]=\"daySpentChart\" [mont_spent_data]=\"monthSpentChart\"></highchart-component>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/view-details/view-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-details/view-details.component.ts ***!
  \********************************************************/
/*! exports provided: ViewDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDetailsComponent", function() { return ViewDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_commond_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/commond_storage.service */ "./src/app/services/commond_storage.service.ts");



var ViewDetailsComponent = /** @class */ (function () {
    function ViewDetailsComponent(_commonStorage) {
        this._commonStorage = _commonStorage;
        this.selectedYear = null;
        this.readingFinish = true;
        this.processing = false;
        this.analyticsData = null;
        this.monthSpentChart = null;
        this.daySpentChart = null;
        this.selectYear = '';
    }
    ViewDetailsComponent.prototype.ngOnInit = function () {
        // setTimeout(() => this.socketFunctions(), 1000);
    };
    ViewDetailsComponent.prototype.socketFunctions = function () {
        this.readingFinish = false;
        this.processing = true;
        this._commonStorage.socket.emit('process-my-file', this._commonStorage.socket.id);
        this._commonStorage.socket.on('file-analytics', this.getFileData.bind(this));
        this._commonStorage.socket.on('file-read-finish', this.fileReadingFinish.bind(this));
    };
    ViewDetailsComponent.prototype.getFileData = function (analyticsData) {
        this.processing = false;
        console.log('Analytics is: ', analyticsData);
        this.analyticsData = analyticsData;
        this.setSelectedYear(this.analyticsData.years[0]);
        if (!this.readingFinish) {
            console.log('Inside readinggggg');
            this._commonStorage.socket.emit('process-next-data', this._commonStorage.socket.id);
        }
    };
    ViewDetailsComponent.prototype.fileReadingFinish = function (flag) {
        console.log('Flag is: ', flag);
        this.readingFinish = true;
    };
    ViewDetailsComponent.prototype.setSelectedYear = function (yearIs) {
        if (yearIs === void 0) { yearIs = ''; }
        console.log('Year is: ', yearIs);
        // this.selectedYear = this.analyticsData[yearIs];
        // this.selectYear = yearIs;
        // this.prepareDaySpentChart();
        // this.prepareMonthSpent();
    };
    ViewDetailsComponent.prototype.prepareDaySpentChart = function () {
        var _this = this;
        var obj = {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: "Day wise usages of year " + this.selectYear
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
                    text: 'Usages'
                }
            },
            series: [
                {
                    name: 'Thermometer',
                    data: this.selectedYear.days(function (d) { return [d, _this.selectedYear['day_spent'][d]]; })
                }
            ]
        };
        this.daySpentChart = obj;
    };
    ViewDetailsComponent.prototype.prepareMonthSpent = function () {
        var _this = this;
        var obj = {
            chart: {
                type: 'column'
            },
            title: {
                text: "Month wise spent of year " + this.selectYear
            },
            xAxis: {
                type: 'category',
                title: { text: 'Months' }
            },
            yAxis: {
                title: {
                    text: 'Total percent market share'
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
                    data: this.selectedYear['months'].map(function (d) { return { name: d, y: _this.selectedYear['month_spent'][d] }; })
                }]
        };
        this.monthSpentChart = obj;
    };
    ViewDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-details',
            template: __webpack_require__(/*! ./view-details.component.html */ "./src/app/view-details/view-details.component.html"),
            styles: [__webpack_require__(/*! ./view-details.component.css */ "./src/app/view-details/view-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_commond_storage_service__WEBPACK_IMPORTED_MODULE_2__["CommonStorageService"]])
    ], ViewDetailsComponent);
    return ViewDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:0/sockjs-node ./src/main.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/biplab/Desktop/practise/ion-frontend/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:0/sockjs-node");
module.exports = __webpack_require__(/*! /Users/biplab/Desktop/practise/ion-frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map