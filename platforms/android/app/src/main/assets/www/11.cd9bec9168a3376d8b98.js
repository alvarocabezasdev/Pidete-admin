(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8cDG":function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=function(){return function(){}}(),i=t("pMnS"),e=t("oBZk"),a=t("ZZ/e"),s=t("gIcY"),r=t("Ip0R"),c=t("mrSG"),b=t("CpCe"),p=function(){function l(l,n,t,u,o,i,e){var a=this;this.servicio=l,this.loadingController=n,this.modalController=t,this.toastController=u,this.param=o,this.route=i,this.navController=e,this.listado=[],this.listadoPanel=[],this.cantidad=0,console.log(this.route.snapshot.paramMap.get("mesa")),this.mesa=this.route.snapshot.paramMap.get("mesa"),this.servicio.leerMesa(this.mesa).subscribe(function(l){a.listado=[],l.forEach(function(l){a.listado.push(c.__assign({id:l.id},l.data()))}),a.listadoPanel=a.listado})}return l.prototype.ionViewWillEnter=function(){var l=this;this.mesa=this.route.snapshot.paramMap.get("mesa"),this.servicio.leerMesa(this.mesa).subscribe(function(n){l.listado=[],n.forEach(function(n){l.listado.push(c.__assign({id:n.id},n.data()))}),l.listadoPanel=l.listado})},l.prototype.ionViewDidEnter=function(){var l=this;this.mesa=this.route.snapshot.paramMap.get("mesa"),this.servicio.leerMesa(this.mesa).subscribe(function(n){l.listado=[],n.forEach(function(n){l.listado.push(c.__assign({id:n.id},n.data()))}),l.listadoPanel=l.listado})},l.prototype.presentToast=function(){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(l){switch(l.label){case 0:return[4,this.toastController.create({message:"Mesa cerrada",duration:1e3,position:"top"})];case 1:return l.sent().present(),[2]}})})},l.prototype.totalComanda=function(){for(var l=0,n=0,t=this.listadoPanel;n<t.length;n++)l+=t[n].precio;return l},l.prototype.getCantidad=function(){return this.cantidad},l.prototype.cerrarMesa=function(){console.log(this.mesa),this.servicio.resetCuentaMesa(this.mesa),this.listadoPanel=[],this.servicio.borrarMesa(this.mesa),this.presentToast(),this.navController.navigateRoot("tabs/tab1")},l.prototype.productoServido=function(l){this.servicio.productoServido(this.mesa,l)},l}(),d=t("ZYCi"),h=u.nb({encapsulation:0,styles:[[".imagen[_ngcontent-%COMP%]{width:15%;margin:2px 20px 4px 5px}.imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.cantidad[_ngcontent-%COMP%]{margin-left:4%;width:16%}.precio[_ngcontent-%COMP%]{width:15%}.producto[_ngcontent-%COMP%]{width:44%}.boton[_ngcontent-%COMP%]{width:69%}.total[_ngcontent-%COMP%]{margin-left:75%;margin-bottom:-13%;margin-top:-3%}"]],data:{}});function m(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,2,"ion-title",[],null,null,null,e.M,e.s)),u.ob(1,49152,null,0,a.xb,[u.h,u.k],null,null),(l()(),u.Db(2,0,[" "," "]))],null,function(l,n){l(n,2,0,n.component.mesa)})}function g(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,2,"ion-title",[],null,null,null,e.M,e.s)),u.ob(1,49152,null,0,a.xb,[u.h,u.k],null,null),(l()(),u.Db(-1,0,[" Mesa vacia "]))],null,null)}function f(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,16,"ion-item",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.borrarUnidad(l.context.$implicit)&&u),u},e.E,e.k)),u.ob(1,49152,null,0,a.F,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,3,"ion-checkbox",[["checked","item.estado"],["slot","end"]],null,[[null,"click"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.yb(l,5)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==u.yb(l,5)._handleIonChange(t.target.checked)&&o),"click"===n&&(o=!1!==i.productoServido(l.context.$implicit)&&o),o},e.y,e.e)),u.Ab(5120,null,s.b,function(l){return[l]},[a.b]),u.ob(4,49152,null,0,a.p,[u.h,u.k],{checked:[0,"checked"]},null),u.ob(5,16384,null,0,a.b,[u.k],null,null),(l()(),u.pb(6,0,null,0,2,"div",[["class","producto"],["col-6",""]],null,null,null,null,null)),(l()(),u.pb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Db(8,null,["",""])),(l()(),u.pb(9,0,null,0,4,"div",[["class","cantidad"],["col-3",""]],null,null,null,null,null)),(l()(),u.pb(10,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Db(-1,null,["x"])),(l()(),u.pb(12,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Db(13,null,["",""])),(l()(),u.pb(14,0,null,0,2,"div",[["class","precio"],["col-3",""]],null,null,null,null,null)),(l()(),u.pb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.Db(16,null,["","\u20ac"]))],function(l,n){l(n,4,0,"item.estado")},function(l,n){l(n,8,0,n.context.$implicit.producto),l(n,13,0,n.context.$implicit.cantidad),l(n,16,0,n.context.$implicit.precio)})}function v(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,7,"ion-header",[],null,null,null,e.B,e.h)),u.ob(1,49152,null,0,a.z,[u.h,u.k],null,null),(l()(),u.pb(2,0,null,0,5,"ion-toolbar",[],null,null,null,e.N,e.t)),u.ob(3,49152,null,0,a.zb,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,m)),u.ob(5,16384,null,0,r.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.gb(16777216,null,0,1,null,g)),u.ob(7,16384,null,0,r.j,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(8,0,null,null,5,"ion-content",[],null,null,null,e.z,e.f)),u.ob(9,49152,null,0,a.s,[u.h,u.k],null,null),(l()(),u.pb(10,0,null,0,3,"ion-list",[],null,null,null,e.G,e.m)),u.ob(11,49152,null,0,a.M,[u.h,u.k],null,null),(l()(),u.gb(16777216,null,0,1,null,f)),u.ob(13,278528,null,0,r.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.pb(14,0,null,null,11,"ion-footer",[],null,null,null,e.A,e.g)),u.ob(15,49152,null,0,a.x,[u.h,u.k],null,null),(l()(),u.pb(16,0,null,0,9,"ion-toolbar",[],null,null,null,e.N,e.t)),u.ob(17,49152,null,0,a.zb,[u.h,u.k],null,null),(l()(),u.pb(18,0,null,0,7,"div",[["class","pie"]],null,null,null,null,null)),(l()(),u.pb(19,0,null,null,3,"div",[["class","total"]],null,null,null,null,null)),(l()(),u.pb(20,0,null,null,2,"h2",[],null,null,null,null,null)),(l()(),u.pb(21,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),u.Db(22,null,["","\u20ac"])),(l()(),u.pb(23,0,null,null,2,"ion-button",[["class","boton"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.cerrarMesa()&&u),u},e.v,e.b)),u.ob(24,49152,null,0,a.i,[u.h,u.k],{disabled:[0,"disabled"]},null),(l()(),u.Db(-1,0,["Cerrar mesa"]))],function(l,n){var t=n.component;l(n,5,0,t.mesa),l(n,7,0,!t.mesa),l(n,13,0,t.listadoPanel),l(n,24,0,!t.listadoPanel.length)},function(l,n){l(n,22,0,n.component.totalComanda())})}function k(l){return u.Eb(0,[(l()(),u.pb(0,0,null,null,1,"app-tab2",[],null,null,null,v,h)),u.ob(1,49152,null,0,p,[b.a,a.Db,a.Eb,a.Ib,a.Fb,d.a,a.Fb],null,null)],null,null)}var w=u.lb("app-tab2",p,k,{},{},[]);t.d(n,"Tab2PageModuleNgFactory",function(){return C});var C=u.mb(o,[],function(l){return u.vb([u.wb(512,u.j,u.bb,[[8,[i.a,w]],[3,u.j],u.x]),u.wb(4608,r.l,r.k,[u.u,[2,r.r]]),u.wb(4608,a.a,a.a,[u.z,u.g]),u.wb(4608,a.Eb,a.Eb,[a.a,u.j,u.q,r.c]),u.wb(4608,a.Hb,a.Hb,[a.a,u.j,u.q,r.c]),u.wb(4608,s.d,s.d,[]),u.wb(1073742336,r.b,r.b,[]),u.wb(1073742336,a.Bb,a.Bb,[]),u.wb(1073742336,s.c,s.c,[]),u.wb(1073742336,s.a,s.a,[]),u.wb(1073742336,d.n,d.n,[[2,d.t],[2,d.m]]),u.wb(1073742336,o,o,[]),u.wb(1024,d.k,function(){return[[{path:"",component:p}]]},[])])})}}]);