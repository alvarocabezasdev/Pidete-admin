(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8cDG":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=function(){return function(){}}(),i=t("pMnS"),e=t("oBZk"),a=t("ZZ/e"),r=t("Ip0R"),s=t("mrSG"),c=t("CpCe"),b=function(){function l(l,n,t,u,o,i,e){this.servicio=l,this.loadingController=n,this.modalController=t,this.toastController=u,this.param=o,this.route=i,this.navController=e,this.listado=[],this.listadoPanel=[],this.cantidad=0,console.log(this.route.snapshot.paramMap.get("mesa")),this.initMesa()}return l.prototype.ionViewDidEnter=function(){this.initMesa()},l.prototype.presentToast=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:"Mesa cerrada",duration:1e3,position:"top"})];case 1:return l.sent().present(),[2]}})})},l.prototype.totalComanda=function(){for(var l=0,n=0,t=this.listadoPanel;n<t.length;n++)l+=t[n].precio;return l},l.prototype.getCantidad=function(){return this.cantidad},l.prototype.cerrarMesa=function(){console.log(this.mesa),this.servicio.resetCuentaMesa(this.mesa),this.listadoPanel=[],this.servicio.borrarMesa(this.mesa),this.presentToast(),this.navController.navigateRoot("tabs/tab1")},l.prototype.productoServido=function(l){this.servicio.productoServido(this.mesa,l),this.initMesa()},l.prototype.initMesa=function(){var l=this;this.mesa=this.route.snapshot.paramMap.get("mesa"),this.servicio.leerMesa(this.mesa).subscribe(function(n){l.listado=[],n.forEach(function(n){l.listado.push(s.__assign({id:n.id},n.data()))}),l.listadoPanel=l.listado})},l}(),p=t("ZYCi"),d=u.nb({encapsulation:0,styles:[[".imagen[_ngcontent-%COMP%]{width:15%;margin:2px 20px 4px 5px}.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.cantidad[_ngcontent-%COMP%]{margin-left:4%;width:16%}.precio[_ngcontent-%COMP%]{width:15%}.producto[_ngcontent-%COMP%]{width:44%}.boton[_ngcontent-%COMP%]{width:69%}.total[_ngcontent-%COMP%]{margin-left:75%;margin-bottom:-13%;margin-top:-3%}.verde[_ngcontent-%COMP%]{border-color:#7d7!important;border-width:1px}"]],data:{}});function h(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,2,"ion-title",[],null,null,null,e.K,e.r)),u.ob(1,49152,null,0,a.wb,[u.h,u.k],null,null),(l()(),u.Cb(2,0,[" "," "]))],null,function(l,n){l(n,2,0,n.component.mesa)})}function g(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,2,"ion-title",[],null,null,null,e.K,e.r)),u.ob(1,49152,null,0,a.wb,[u.h,u.k],null,null),(l()(),u.Cb(-1,0,[" Mesa vacia "]))],null,null)}function m(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,13,"ion-item",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.productoServido(l.context.$implicit)&&u),u},e.C,e.j)),u.ob(1,49152,null,0,a.E,[u.h,u.k],{color:[0,"color"]},null),u.zb(2,{success:0}),(l()(),u.pb(3,0,null,0,2,"div",[["class","producto"],["col-6",""]],null,null,null,null,null)),(l()(),u.pb(4,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Cb(5,null,["",""])),(l()(),u.pb(6,0,null,0,4,"div",[["class","cantidad"],["col-3",""]],null,null,null,null,null)),(l()(),u.pb(7,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Cb(-1,null,["x"])),(l()(),u.pb(9,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Cb(10,null,["",""])),(l()(),u.pb(11,0,null,0,2,"div",[["class","precio"],["col-3",""]],null,null,null,null,null)),(l()(),u.pb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Cb(13,null,["","\u20ac"]))],function(l,n){var t=l(n,2,0,n.context.$implicit.estado);l(n,1,0,t)},function(l,n){l(n,5,0,n.context.$implicit.producto),l(n,10,0,n.context.$implicit.cantidad),l(n,13,0,n.context.$implicit.precio)})}function f(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,7,"ion-header",[],null,null,null,e.z,e.g)),u.ob(1,49152,null,0,a.y,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,5,"ion-toolbar",[],null,null,null,e.L,e.s)),u.ob(3,49152,null,0,a.yb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,h)),u.ob(5,16384,null,0,r.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,g)),u.ob(7,16384,null,0,r.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(8,0,null,null,5,"ion-content",[],null,null,null,e.x,e.e)),u.ob(9,49152,null,0,a.r,[u.h,u.k],null,null),(l()(),u.pb(10,0,null,0,3,"ion-list",[],null,null,null,e.E,e.l)),u.ob(11,49152,null,0,a.L,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,m)),u.ob(13,278528,null,0,r.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(14,0,null,null,11,"ion-footer",[],null,null,null,e.y,e.f)),u.ob(15,49152,null,0,a.w,[u.h,u.k],null,null),(l()(),u.pb(16,0,null,0,9,"ion-toolbar",[],null,null,null,e.L,e.s)),u.ob(17,49152,null,0,a.yb,[u.h,u.k],null,null),(l()(),u.pb(18,0,null,0,7,"div",[["class","pie"]],null,null,null,null,null)),(l()(),u.pb(19,0,null,null,3,"div",[["class","total"]],null,null,null,null,null)),(l()(),u.pb(20,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),u.pb(21,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Cb(22,null,["","\u20ac"])),(l()(),u.pb(23,0,null,null,2,"ion-button",[["class","boton"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.cerrarMesa()&&u),u},e.u,e.b)),u.ob(24,49152,null,0,a.h,[u.h,u.k],{disabled:[0,"disabled"]},null),(l()(),u.Cb(-1,0,["Cerrar mesa"]))],function(l,n){var t=n.component;l(n,5,0,t.mesa),l(n,7,0,!t.mesa),l(n,13,0,t.listadoPanel),l(n,24,0,!t.listadoPanel.length)},function(l,n){l(n,22,0,n.component.totalComanda())})}function C(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"app-tab2",[],null,null,null,f,d)),u.ob(1,49152,null,0,b,[c.a,a.Cb,a.Db,a.Hb,a.Eb,p.a,a.Eb],null,null)],null,null)}var w=u.lb("app-tab2",b,C,{},{},[]),v=t("gIcY");t.d(n,"Tab2PageModuleNgFactory",function(){return M});var M=u.mb(o,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[i.a,w]],[3,u.j],u.x]),u.wb(4608,r.l,r.k,[u.u,[2,r.r]]),u.wb(4608,a.a,a.a,[u.z,u.g]),u.wb(4608,a.Db,a.Db,[a.a,u.j,u.q,r.c]),u.wb(4608,a.Gb,a.Gb,[a.a,u.j,u.q,r.c]),u.wb(4608,v.c,v.c,[]),u.wb(1073742336,r.b,r.b,[]),u.wb(1073742336,a.Ab,a.Ab,[]),u.wb(1073742336,v.b,v.b,[]),u.wb(1073742336,v.a,v.a,[]),u.wb(1073742336,p.n,p.n,[[2,p.t],[2,p.m]]),u.wb(1073742336,o,o,[]),u.wb(1024,p.k,function(){return[[{path:"",component:b}]]},[])])})}}]);