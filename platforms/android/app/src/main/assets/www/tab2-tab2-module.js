(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Comanda \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-list>\n\n  <ion-item (click)=\"borrarUnidad(item)\" *ngFor=\"let item of listadoPanel;let i = index\">\n\n  <div class=\"producto\" col-6>\n        <p>{{item.producto}}</p>\n  </div>\n\n  <div class=\"cantidad\" col-3>\n        <p>x<strong>{{item.cantidad}}</strong></p>\n  </div>\n\n  <div class=\"precio\" col-3>\n        <p>{{item.precio}}€</p>\n  </div>\n  </ion-item>\n\n</ion-list>\n\n\n</ion-content>\n\n\n  <ion-footer>\n    <ion-toolbar>\n    <div class=\"pie\" >\n       <div class=\"total\">\n      <h2><strong>{{totalComanda()}}€</strong></h2>\n    </div>\n    <ion-button class=\"boton\" (click)=\"cerrarMesa()\" >Cerrar mesa</ion-button>\n \n    </div>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagen {\n  width: 15%;\n  margin: 2px 20px 4px 5px; }\n\n.imagen img {\n  width: 100%; }\n\n.cantidad {\n  margin-left: 4%;\n  width: 16%; }\n\n.precio {\n  width: 15%; }\n\n.producto {\n  width: 44%; }\n\n.boton {\n  width: 69%; }\n\n.total {\n  margin-left: 75%;\n  margin-bottom: -13%;\n  margin-top: -3%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FhY2FiZXphcy9Eb2N1bWVudG9zL1BpZGV0ZS1hZG1pbi9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1Ysd0JBQXdCLEVBQUE7O0FBSTVCO0VBQ0ksV0FBVyxFQUFBOztBQUdmO0VBQ0ksZUFBZTtFQUNmLFVBRUosRUFBQTs7QUFFQTtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZW57XG4gICAgd2lkdGg6IDE1JTtcbiAgICBtYXJnaW46IDJweCAyMHB4IDRweCA1cHg7XG5cbn1cblxuLmltYWdlbiBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYW50aWRhZHtcbiAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgd2lkdGg6IDE2JVxuXG59XG5cbi5wcmVjaW97XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuLnByb2R1Y3Rve1xuICAgIHdpZHRoOiA0NCU7XG59XG5cbi5ib3RvbntcbiAgICB3aWR0aDogNjklO1xufVxuXG4udG90YWx7XG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTMlO1xuICAgIG1hcmdpbi10b3A6IC0zJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/service */ "./src/app/servicios/service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Tab2Page = /** @class */ (function () {
    function Tab2Page(servicio, loadingController, modalController, toastController, param, route) {
        var _this = this;
        this.servicio = servicio;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.param = param;
        this.route = route;
        this.listado = [];
        this.listadoPanel = [];
        this.cantidad = 0;
        console.log(this.route.snapshot.paramMap.get('mesa'));
        this.mesa = this.route.snapshot.paramMap.get('mesa');
        this.servicio.leerMesa(this.mesa).subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.id }, doc.data()));
            });
            _this.listadoPanel = _this.listado;
        });
    }
    Tab2Page.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.mesa = this.route.snapshot.paramMap.get('mesa');
        this.servicio.leerMesa(this.mesa).subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.id }, doc.data()));
            });
            _this.listadoPanel = _this.listado;
        });
    };
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.mesa = this.route.snapshot.paramMap.get('mesa');
        this.servicio.leerMesa(this.mesa).subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: doc.id }, doc.data()));
            });
            _this.listadoPanel = _this.listado;
        });
    };
    Tab2Page.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Producto añadido',
                            duration: 2000,
                            position: 'bottom',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab2Page.prototype.totalComanda = function () {
        var total = 0;
        for (var _i = 0, _a = this.listadoPanel; _i < _a.length; _i++) {
            var producto = _a[_i];
            total = total + producto.precio;
        }
        return total;
    };
    Tab2Page.prototype.getCantidad = function () {
        return this.cantidad;
    };
    Tab2Page.prototype.cerrarMesa = function () {
        this.servicio.resetCuentaMesa(this.mesa);
        this.listadoPanel = [];
        this.servicio.borrarMesa(this.mesa);
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_service__WEBPACK_IMPORTED_MODULE_2__["Service"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map