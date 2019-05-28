import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
var Service = /** @class */ (function () {
    function Service(fireStore) {
        this.fireStore = fireStore;
        this.comanda = [];
        this.listado = [];
        this.productos = fireStore.collection(environment.firebaseConfig.productos);
    }
    //PRODUCTOS
    Service.prototype.leerListadoProductos = function () {
        console.log(this.productos.get());
        return this.productos.get();
    };
    Service.prototype.agregarRegistro = function (datos) {
        return this.productos.add(datos);
    };
    Service.prototype.borrarRegistro = function (id) {
        return this.productos.doc(id).delete();
    };
    //PRODUCTOS
    //MESA
    Service.prototype.leerMesa = function (mesa) {
        switch (mesa) {
            case "mesa1":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa1);
                break;
            case "mesa2":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa2);
                break;
            case "mesa3":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa3);
                break;
            case "mesa3":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa4);
                break;
        }
        console.log(this.mesa.get());
        return this.mesa.get();
    };
    Service.prototype.borrarMesa = function (mesa) {
        var _this = this;
        switch (mesa) {
            case "mesa1":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa1);
                break;
            case "mesa2":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa2);
                break;
            case "mesa3":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa3);
                break;
            case "mesa3":
                this.mesa = this.fireStore.collection(environment.firebaseConfig.mesa4);
                break;
        }
        this.leerMesa(this.mesa).subscribe(function (querySnapshot) {
            _this.listado = [];
            querySnapshot.forEach(function (doc) {
                _this.listado.push(tslib_1.__assign({ id: doc.id }, doc.data()));
            });
            for (var _i = 0, _a = _this.listado; _i < _a.length; _i++) {
                var producto = _a[_i];
                _this.mesa.doc(producto.id).delete();
            }
        });
    };
    //MESA
    //CUENTA
    Service.prototype.getCuentaMesa = function (mesa) {
        switch (mesa) {
            case "mesa1":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa1);
                break;
            case "mesa2":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa2);
                break;
            case "mesa3":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa3);
                break;
            case "mesa3":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa4);
                break;
        }
        return this.cuentaMesa;
    };
    Service.prototype.resetCuentaMesa = function (mesa) {
        var _this = this;
        switch (mesa) {
            case "mesa1":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa1);
                break;
            case "mesa2":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa2);
                break;
            case "mesa3":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa3);
                break;
            case "mesa4":
                this.cuentaMesa = this.fireStore.collection(environment.firebaseConfig.cuentaMesa4);
                break;
        }
        var cuenta = {
            cuenta: false,
        };
        this.cuentaMesa.get().subscribe(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                _this.cuentaMesa.doc(doc.id).update(cuenta);
            });
        });
    };
    Service = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], Service);
    return Service;
}());
export { Service };
//# sourceMappingURL=service.js.map