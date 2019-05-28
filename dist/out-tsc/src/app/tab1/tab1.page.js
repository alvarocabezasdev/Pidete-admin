import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Service } from '../servicios/service';
import { LoadingController, ModalController, ToastController, NavController } from '@ionic/angular';
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
    Tab1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.servicio.getCuentaMesa(this.mesa.mesa1).get().subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib_1.__assign({ id: doc.id }, doc.data()));
            });
            _this.cuentaMesa1 = _this.listado[0].cuenta;
        });
        console.log(this.cuentaMesa1);
        this.servicio.getCuentaMesa(this.mesa.mesa2).get().subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib_1.__assign({ id: doc.id }, doc.data()));
            });
            _this.cuentaMesa2 = _this.listado[0].cuenta;
        });
        this.servicio.getCuentaMesa(this.mesa.mesa3).get().subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib_1.__assign({ id: doc.id }, doc.data()));
            });
            _this.cuentaMesa3 = _this.listado[0].cuenta;
        });
        this.servicio.getCuentaMesa(this.mesa.mesa4).get().subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib_1.__assign({ id: doc.id }, doc.data()));
            });
            _this.cuentaMesa4 = _this.listado[0].cuenta;
        });
    };
    Tab1Page.prototype.leerMesa = function (param) {
        console.log(param);
        //(["tab2",{mesa:param}])
        this.navCtrl.navigateRoot((["tabs/tab2", { mesa: param }]));
    };
    tslib_1.__decorate([
        ViewChild('dynamicList'),
        tslib_1.__metadata("design:type", Object)
    ], Tab1Page.prototype, "dynamicList", void 0);
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [Service,
            LoadingController,
            ModalController,
            ToastController,
            NavController])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map