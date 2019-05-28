import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Service } from '../servicios/service';
import { LoadingController, ModalController, ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(servicio, loadingController, modalController, toastController, param, navController, route) {
        var _this = this;
        this.servicio = servicio;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.toastController = toastController;
        this.param = param;
        this.navController = navController;
        this.route = route;
        this.listado = [];
        this.listadoPanel = [];
        this.cantidad = 0;
        console.log(this.route.snapshot.paramMap.get('mesa'));
        this.mesa = this.route.snapshot.paramMap.get('mesa');
        this.servicio.leerMesa(this.mesa).subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib_1.__assign({ id: doc.id }, doc.data()));
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
                _this.listado.push(tslib_1.__assign({ id: doc.id }, doc.data()));
            });
            _this.listadoPanel = _this.listado;
        });
    };
    Tab2Page.prototype.presentToast = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
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
        this.navController.navigateRoot("tabs/tab1");
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Service,
            LoadingController,
            ModalController,
            ToastController,
            NavController,
            NavController,
            ActivatedRoute])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map