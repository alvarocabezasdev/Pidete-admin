(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8cDG":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=function(){return function(){}}(),i=t("pMnS"),a=t("oBZk"),e=t("ZZ/e"),r=t("Ip0R"),s=t("mrSG"),c=t("CpCe"),b=function(){function l(l,n,t,u,o,i,a){var e=this;this.servicio=l,this.loadingController=n,this.modalController=t,this.toastController=u,this.param=o,this.navController=i,this.route=a,this.listado=[],this.listadoPanel=[],this.cantidad=0,console.log(this.route.snapshot.paramMap.get("mesa")),this.mesa=this.route.snapshot.paramMap.get("mesa"),this.servicio.leerMesa(this.mesa).subscribe(function(l){e.listado=[],l.forEach(function(l){e.listado.push(s.__assign({id:l.id},l.data()))}),e.listadoPanel=e.listado})}return l.prototype.ionViewWillEnter=function(){var l=this;this.mesa=this.route.snapshot.paramMap.get("mesa"),this.servicio.leerMesa(this.mesa).subscribe(function(n){l.listado=[],n.forEach(function(n){l.listado.push(s.__assign({id:n.id},n.data()))}),l.listadoPanel=l.listado})},l.prototype.presentToast=function(){return s.__awaiter(this,void 0,void 0,function(){return s.__generator(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:"Producto a\xf1adido",duration:2e3,position:"bottom"})];case 1:return l.sent().present(),[2]}})})},l.prototype.totalComanda=function(){for(var l=0,n=0,t=this.listadoPanel;n<t.length;n++)l+=t[n].precio;return l},l.prototype.getCantidad=function(){return this.cantidad},l.prototype.cerrarMesa=function(){this.servicio.resetCuentaMesa(this.mesa),this.listadoPanel=[],this.servicio.borrarMesa(this.mesa),this.navController.navigateRoot("tabs/tab1")},l}(),p=t("ZYCi"),d=u.nb({encapsulation:0,styles:[[".imagen[_ngcontent-%COMP%]{width:15%;margin:2px 20px 4px 5px}.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.cantidad[_ngcontent-%COMP%]{margin-left:4%;width:16%}.precio[_ngcontent-%COMP%]{width:15%}.producto[_ngcontent-%COMP%]{width:44%}.boton[_ngcontent-%COMP%]{width:69%}.total[_ngcontent-%COMP%]{margin-left:75%;margin-bottom:-13%;margin-top:-3%}"]],data:{}});function h(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,12,"ion-item",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.borrarUnidad(l.context.$implicit)&&u),u},a.C,a.j)),u.ob(1,49152,null,0,e.E,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,2,"div",[["class","producto"],["col-6",""]],null,null,null,null,null)),(l()(),u.pb(3,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Cb(4,null,["",""])),(l()(),u.pb(5,0,null,0,4,"div",[["class","cantidad"],["col-3",""]],null,null,null,null,null)),(l()(),u.pb(6,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Cb(-1,null,["x"])),(l()(),u.pb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Cb(9,null,["",""])),(l()(),u.pb(10,0,null,0,2,"div",[["class","precio"],["col-3",""]],null,null,null,null,null)),(l()(),u.pb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Cb(12,null,["","\u20ac"]))],null,function(l,n){l(n,4,0,n.context.$implicit.producto),l(n,9,0,n.context.$implicit.cantidad),l(n,12,0,n.context.$implicit.precio)})}function m(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,a.z,a.g)),u.ob(1,49152,null,0,e.y,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,a.L,a.s)),u.ob(3,49152,null,0,e.yb,[u.h,u.k],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,a.K,a.r)),u.ob(5,49152,null,0,e.wb,[u.h,u.k],null,null),(l()(),u.Cb(-1,0,[" Comanda "])),(l()(),u.pb(7,0,null,null,5,"ion-content",[],null,null,null,a.x,a.e)),u.ob(8,49152,null,0,e.r,[u.h,u.k],null,null),(l()(),u.pb(9,0,null,0,3,"ion-list",[],null,null,null,a.E,a.l)),u.ob(10,49152,null,0,e.L,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,h)),u.ob(12,278528,null,0,r.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(13,0,null,null,11,"ion-footer",[],null,null,null,a.y,a.f)),u.ob(14,49152,null,0,e.w,[u.h,u.k],null,null),(l()(),u.pb(15,0,null,0,9,"ion-toolbar",[],null,null,null,a.L,a.s)),u.ob(16,49152,null,0,e.yb,[u.h,u.k],null,null),(l()(),u.pb(17,0,null,0,7,"div",[["class","pie"]],null,null,null,null,null)),(l()(),u.pb(18,0,null,null,3,"div",[["class","total"]],null,null,null,null,null)),(l()(),u.pb(19,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),u.pb(20,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Cb(21,null,["","\u20ac"])),(l()(),u.pb(22,0,null,null,2,"ion-button",[["class","boton"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.cerrarMesa()&&u),u},a.u,a.b)),u.ob(23,49152,null,0,e.h,[u.h,u.k],{disabled:[0,"disabled"]},null),(l()(),u.Cb(-1,0,["Cerrar mesa"]))],function(l,n){var t=n.component;l(n,12,0,t.listadoPanel),l(n,23,0,!t.listadoPanel.length)},function(l,n){l(n,21,0,n.component.totalComanda())})}function g(l){return u.Db(0,[(l()(),u.pb(0,0,null,null,1,"app-tab2",[],null,null,null,m,d)),u.ob(1,49152,null,0,b,[c.a,e.Cb,e.Db,e.Hb,e.Eb,e.Eb,p.a],null,null)],null,null)}var f=u.lb("app-tab2",b,g,{},{},[]),C=t("gIcY");t.d(n,"Tab2PageModuleNgFactory",function(){return w});var w=u.mb(o,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[i.a,f]],[3,u.j],u.x]),u.wb(4608,r.l,r.k,[u.u,[2,r.r]]),u.wb(4608,e.a,e.a,[u.z,u.g]),u.wb(4608,e.Db,e.Db,[e.a,u.j,u.q,r.c]),u.wb(4608,e.Gb,e.Gb,[e.a,u.j,u.q,r.c]),u.wb(4608,C.c,C.c,[]),u.wb(1073742336,r.b,r.b,[]),u.wb(1073742336,e.Ab,e.Ab,[]),u.wb(1073742336,C.b,C.b,[]),u.wb(1073742336,C.a,C.a,[]),u.wb(1073742336,p.n,p.n,[[2,p.t],[2,p.m]]),u.wb(1073742336,o,o,[]),u.wb(1024,p.k,function(){return[[{path:"",component:b}]]},[])])})}}]);