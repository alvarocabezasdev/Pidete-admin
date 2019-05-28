(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Mesas</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content>\n\n     \n<div class=\"cuadricula\">\n<ion-card (click)=\"leerMesa(this.mesa.mesa1)\">\n<div class=\"card\">\n\n  <div class=\"imagen\">\n    <ion-img src=\"./assets/imagenes/mesa1.png\"></ion-img>\n  </div>\n\n  <div class=\"descripcion\">\n\n  <div class=\"producto\">\n    <strong><h2>Mesa 1</h2></strong>\n  </div>\n\n</div>\n</div>\n</ion-card>\n\n<ion-card (click)=\"leerMesa(this.mesa.mesa2)\">\n<div class=\"card\">\n\n  <div class=\"imagen\">\n    <ion-img src=\"./assets/imagenes/mesa2.png\"></ion-img>\n  </div>\n\n  <div class=\"descripcion\">\n\n  <div class=\"producto\">\n    <strong><h2>Mesa 2</h2></strong>\n  </div>\n\n</div>\n</div>\n</ion-card>\n\n<ion-card (click)=\"leerMesa(this.mesa.mesa3)\">\n<div class=\"card\">\n\n  <div class=\"imagen\">\n    <ion-img src=\"./assets/imagenes/mesa3.png\"></ion-img>\n  </div>\n\n  <div class=\"descripcion\">\n\n  <div class=\"producto\">\n    <strong><h2>Mesa 3</h2></strong>\n  </div>\n\n</div>\n</div>\n</ion-card>\n\n<ion-card (click)=\"leerMesa(this.mesa.mesa4)\">\n<div class=\"card\">\n\n  <div class=\"imagen\">\n    <ion-img src=\"./assets/imagenes/mesa4.png\"></ion-img>\n  </div>\n\n  <div class=\"descripcion\">\n\n  <div class=\"producto\">\n    <strong><h2>Mesa 4</h2></strong>\n  </div>\n\n</div>\n</div>\n</ion-card>\n\n\n</div>\n\n\n  \n\n\n\n      \n      \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-width: 100%;\n  max-height: 50%; }\n\n.cuadricula {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 10px;\n  margin-top: 4%; }\n\n.imagen {\n  width: 88%;\n  max-width: 88%;\n  height: 50%;\n  margin: 5%;\n  margin-top: 13%; }\n\n.descripcion {\n  width: 100%;\n  height: 50%;\n  margin: 5%;\n  margin-top: 8%; }\n\n.producto {\n  height: 30%;\n  font-size: 110%; }\n\nh3 {\n  font-size: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2FiZXphcy9Eb2N1bWVudG9zL1BpZGV0ZS1hZG1pbi9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUVJLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxVQUFVO0VBQ1YsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZSxFQUFBOztBQUluQjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUluQjtFQUNJLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNhcmR7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbn1cblxuLmN1YWRyaWN1bGF7XG5cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogNCU7XG59XG5cbi5pbWFnZW57XG4gICAgd2lkdGg6IDg4JTtcbiAgICBtYXgtd2lkdGg6IDg4JTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBtYXJnaW46IDUlO1xuICAgIG1hcmdpbi10b3A6IDEzJTtcbn1cblxuXG4uZGVzY3JpcGNpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luOiA1JTtcbiAgICBtYXJnaW4tdG9wOiA4JTtcbn1cblxuLnByb2R1Y3Rve1xuICAgIGhlaWdodDogMzAlO1xuICAgIGZvbnQtc2l6ZTogMTEwJTsgXG59XG5cblxuaDN7XG4gICAgZm9udC1zaXplOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/service */ "./src/app/servicios/service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(servicio, loadingController, modalController, toastController, navCtrl) {
        this.servicio = servicio;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.listado = [];
        this.listadoPanel = [];
        this.mesa = {
            mesa1: "mesa1",
            mesa2: "mesa2",
            mesa3: "mesa3",
            mesa4: "mesa4",
        };
    }
    Tab1Page.prototype.leerMesa = function (param) {
        console.log(param);
        //(["tab2",{mesa:param}])
        this.navCtrl.navigateRoot((["tab2", { mesa: param }]));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dynamicList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Tab1Page.prototype, "dynamicList", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_service__WEBPACK_IMPORTED_MODULE_2__["Service"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map