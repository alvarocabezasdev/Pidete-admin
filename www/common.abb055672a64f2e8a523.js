(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{B5Ai:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return a});var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(e){o(e)}}function c(t){try{s(r.throw(t))}catch(e){o(e)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,c)}s((r=r.apply(t,e||[])).next())})}function a(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}}},Bs4g:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t,e){return function(t){return i(t)}(t).includes(e)},i=function(t){t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=o(t)).forEach(function(e){return t.document.documentElement.classList.add("plt-"+e)}),e},o=function(t){return Object.keys(p).filter(function(e){return p[e](t)})},a=function(t){return f(t,/iPad/i)},c=function(t){return f(t,/android|sink/i)},s=function(t){return h(t,"(any-pointer:coarse)")},u=function(t){return l(t)||d(t)},l=function(t){return!!(t.cordova||t.phonegap||t.PhoneGap)},d=function(t){var e=t.Capacitor;return!(!e||!e.isNative)},f=function(t,e){return!(!t.navigator||!t.navigator.userAgent)&&e.test(t.navigator.userAgent)},h=function(t,e){return!!t.matchMedia&&t.matchMedia(e).matches},p={ipad:a,iphone:function(t){return f(t,/iPhone/i)},ios:function(t){return f(t,/iPad|iPhone|iPod/i)},android:c,phablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return r>390&&r<520&&i>620&&i<800},tablet:function(t){var e=t.innerWidth,n=t.innerHeight,r=Math.min(e,n),i=Math.max(e,n);return a(t)||function(t){return c(t)&&!f(t,/mobile/i)}(t)||r>460&&r<820&&i>780&&i<1400},cordova:l,capacitor:d,electron:function(t){return f(t,/electron/)},pwa:function(t){return!!t.matchMedia&&(t.matchMedia("(display-mode: standalone)").matches||t.navigator.standalone)},mobile:s,mobileweb:function(t){return s(t)&&!u(t)},desktop:function(t){return!s(t)},hybrid:u}},CpCe:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("mrSG"),i=(n("CqG3"),n("AytR")),o=n("CcnG"),a=n("tct4"),c=function(){function t(t){this.fireStore=t,this.comanda=[],this.listado=[],this.productos=t.collection(i.a.firebaseConfig.productos)}return t.prototype.leerListadoProductos=function(){return console.log(this.productos.get()),this.productos.get()},t.prototype.agregarRegistro=function(t){return this.productos.add(t)},t.prototype.borrarRegistro=function(t){return this.productos.doc(t).delete()},t.prototype.leerMesa=function(t){switch(t){case"mesa1":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa1);break;case"mesa2":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa2);break;case"mesa3":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa3);break;case"mesa3":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa4)}return console.log(this.mesa.get()),this.mesa.get()},t.prototype.borrarMesa=function(t){var e=this;this.leerMesa(t).subscribe(function(t){e.listado=[],t.forEach(function(t){e.listado.push(r.__assign({id:t.id},t.data()))});for(var n=0,i=e.listado;n<i.length;n++)e.mesa.doc(i[n].id).delete()})},t.prototype.productoServido=function(t,e){switch(t){case"mesa1":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa1);break;case"mesa2":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa2);break;case"mesa3":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa3);break;case"mesa3":this.mesa=this.fireStore.collection(i.a.firebaseConfig.mesa4)}if(1==e.estado){var n={producto:e.producto,cantidad:e.cantidad,precio:e.precio,estado:!1};this.mesa.doc(e.id).update(n)}else n={producto:e.producto,cantidad:e.cantidad,precio:e.precio,estado:!0},this.mesa.doc(e.id).update(n)},t.prototype.getCuentaMesa=function(t){switch(t){case"mesa1":this.cuentaMesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa1);break;case"mesa2":this.cuentaMesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa2);break;case"mesa3":this.cuentaMesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa3);break;case"mesa3":this.cuentaMesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa4)}return this.cuentaMesa.get()},t.prototype.resetCuentaMesa=function(t){var e=this;switch(t){case"mesa1":this.mesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa1);break;case"mesa2":this.mesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa2);break;case"mesa3":this.mesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa3);break;case"mesa4":this.mesa=this.fireStore.collection(i.a.firebaseConfig.cuentaMesa4)}var n={cuenta:!1};this.mesa.get().subscribe(function(t){t.forEach(function(t){e.cuentaMesa.doc(t.id).update(n)})})},t.ngInjectableDef=o.S({factory:function(){return new t(o.W(a.AngularFirestore))},token:t,providedIn:"root"}),t}()},CqG3:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n("tct4"))},JvIM:function(t,e,n){"use strict";function r(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function i(t){return!!t.shadowRoot&&!!t.attachShadow}function o(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null}function a(t,e,n,r,o){if(t||i(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=o,a.name=n,a.value=r||""}}function c(t,e,n){return Math.max(t,Math.min(e,n))}function s(t){return t.timeStamp||Date.now()}function u(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function l(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function d(t,e){var n=t._original||t;return{_original:t,emit:f(n.emit.bind(n),e)}}function f(t,e){var n;return void 0===e&&(e=0),function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(r))}}n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return o}),n.d(e,"e",function(){return a}),n.d(e,"f",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return c}),n.d(e,"i",function(){return f}),n.d(e,"j",function(){return u})},"Wfx+":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(t){try{if("string"!=typeof t||""===t)return t;var e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,c.forEach(function(t){for(var n=e.querySelectorAll(t),r=n.length-1;r>=0;r--){var a=n[r];a.parentNode?a.parentNode.removeChild(a):e.removeChild(a);for(var c=o(a),s=0;s<c.length;s++)i(c[s])}});for(var r=o(e),a=0;a<r.length;a++)i(r[a]);var s=document.createElement("div");s.appendChild(e);var u=s.querySelector("div");return null!==u?u.innerHTML:s.innerHTML}catch(t){return console.error(t),""}},i=function(t){if(!t.nodeType||1===t.nodeType){for(var e=t.attributes.length-1;e>=0;e--){var n=t.attributes[e],r=n.name;if(a.includes(r.toLowerCase())){var c=n.value;null!=c&&c.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}else t.removeAttribute(r)}var s=o(t);for(e=0;e<s.length;e++)i(s[e])}},o=function(t){return null!=t.children?t.children:t.childNodes},a=["class","id","href","src"],c=["script","style","iframe","meta","link","object","embed"]},awvO:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return c});var r="ionViewWillEnter",i="ionViewDidEnter",o="ionViewWillLeave",a="ionViewDidLeave",c="ionViewWillUnload"},"bJz+":function(t,e,n){"use strict";n.d(e,"a",function(){return g}),n.d(e,"b",function(){return b}),n.d(e,"c",function(){return c}),n.d(e,"d",function(){return w});var r=n("B5Ai"),i=n("awvO"),o=function(){return n.e(48).then(n.bind(null,"rSHd"))},a=function(){return n.e(49).then(n.bind(null,"NJz6"))};function c(t){return new Promise(function(e,n){t.queue.write(function(){(function(t){var e=t.enteringEl,n=t.leavingEl;(function(t,e,n){void 0!==t&&(t.style.zIndex="back"===n?"99":"101"),void 0!==e&&(e.style.zIndex="100")})(e,n,t.direction),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),w(e,!1),n&&w(n,!1)})(t),function(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return[4,u(t)];case 1:return[2,(e=n.sent())?l(e,t):d(t)]}})})}(t).then(function(n){n.animation&&n.animation.destroy(),s(t),e(n)},function(e){s(t),n(e)})})})}function s(t){var e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function u(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return e=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,a()];case 3:e=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,e]}})})}function l(t,e){return r.a(this,void 0,void 0,function(){var i;return r.c(this,function(r){switch(r.label){case 0:return[4,f(e,!0)];case 1:return r.sent(),[4,n.e(1).then(n.bind(null,"OFjk")).then(function(n){return n.create(t,e.baseEl,e)})];case 2:return i=r.sent(),v(e.enteringEl,e.leavingEl),[4,p(i,e)];case 3:return r.sent(),e.progressCallback&&e.progressCallback(void 0),i.hasCompleted&&m(e.enteringEl,e.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function d(t){return r.a(this,void 0,void 0,function(){var e,n;return r.c(this,function(r){switch(r.label){case 0:return e=t.enteringEl,n=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),v(e,n),m(e,n),[2,{hasCompleted:!0}]}})})}function f(t,e){return r.a(this,void 0,void 0,function(){var n;return r.c(this,function(r){switch(r.label){case 0:return n=(void 0!==t.deepWait?t.deepWait:e)?[g(t.enteringEl),g(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)],[4,Promise.all(n)];case 1:return r.sent(),[4,h(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function h(t,e){return r.a(this,void 0,void 0,function(){return r.c(this,function(n){switch(n.label){case 0:return t?[4,t(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}function p(t,e){var n=e.progressCallback,r=new Promise(function(e){return t.onFinish(e)});return n?(t.progressStart(),n(t)):t.play(),r}function v(t,e){b(e,i.a),b(t,i.b)}function m(t,e){b(t,i.c),b(e,i.d)}function b(t,e){if(t){var n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function y(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function g(t){return r.a(this,void 0,void 0,function(){var e;return r.c(this,function(n){switch(n.label){case 0:return(e=t)?null==e.componentOnReady?[3,2]:[4,e.componentOnReady()]:[3,4];case 1:if(null!=n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(e.children).map(g))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}function w(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}},d6Vy:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"d",function(){return i});var r=n("B5Ai");function i(t,e){return null!==e.closest(t)}function o(t){var e;return"string"==typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0}function a(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e}var c=/^[a-z][a-z0-9+\-.]*:/;function s(t,e,n,i){return r.a(this,void 0,void 0,function(){var o;return r.c(this,function(r){switch(r.label){case 0:return null==e||"#"===e[0]||c.test(e)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return r.sent(),[2,o.push(e,i)];case 2:return[2,!1]}})})}},dnAA:function(t,e,n){"use strict";n.d(e,"a",function(){return p}),n.d(e,"b",function(){return h}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return u}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return o}),n.d(e,"g",function(){return a}),n.d(e,"h",function(){return c});var r=n("B5Ai"),i=0;function o(t,e){var n=t.ownerDocument;(function(t){0===i&&(i=1,t.addEventListener("focusin",function(e){var n=c(t);if(n&&n.backdropDismiss&&!function(t,e){for(;e;){if(e===t)return!0;e=e.parentElement}return!1}(n,e.target)){var r=n.querySelector("input,button");r&&r.focus()}}),t.addEventListener("ionBackButton",function(e){var n=c(t);n&&n.backdropDismiss&&e.detail.register(100,function(){return n.dismiss(void 0,p)})}),t.addEventListener("keyup",function(e){if("Escape"===e.key){var n=c(t);n&&n.backdropDismiss&&n.dismiss(void 0,p)}}))})(n),Object.assign(t,e),t.classList.add("overlay-hidden");var r=i++;return t.overlayIndex=r,t.hasAttribute("id")||(t.id="ion-overlay-"+r),l(n).appendChild(t),t.componentOnReady()}function a(t,e,n,r,i){var o=c(t,r,i);return o?o.dismiss(e,n):Promise.reject("overlay does not exist")}function c(t,e,n){var r=function(t,e){var n=Array.from(l(t).children).filter(function(t){return t.overlayIndex>0});return void 0===e?n:(e=e.toUpperCase(),n.filter(function(t){return t.tagName===e}))}(t,e);return void 0===n?r[r.length-1]:r.find(function(t){return t.id===n})}function s(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:return t.presented?[2]:(t.presented=!0,t.willPresent.emit(),a=t.enterAnimation?t.enterAnimation:t.config.get(e,"ios"===t.mode?n:i),[4,d(t,a,t.el,o)]);case 1:return r.sent()&&t.didPresent.emit(),[2]}})})}function u(t,e,n,i,o,a,c){return r.a(this,void 0,void 0,function(){var s,u;return r.c(this,function(r){switch(r.label){case 0:if(!t.presented)return[2,!1];t.presented=!1,r.label=1;case 1:return r.trys.push([1,3,,4]),t.willDismiss.emit({data:e,role:n}),s=t.leaveAnimation?t.leaveAnimation:t.config.get(i,"ios"===t.mode?o:a),[4,d(t,s,t.el,c)];case 2:return r.sent(),t.didDismiss.emit({data:e,role:n}),[3,4];case 3:return u=r.sent(),console.error(u),[3,4];case 4:return t.el.remove(),[2,!0]}})})}function l(t){return t.querySelector("ion-app")||t.body}function d(t,e,i,o){return r.a(this,void 0,void 0,function(){var a,c,s,u;return r.c(this,function(r){switch(r.label){case 0:return t.animation?(t.animation.destroy(),t.animation=void 0,[2,!1]):(i.classList.remove("overlay-hidden"),a=i.shadowRoot||t.el,s=t,[4,n.e(1).then(n.bind(null,"OFjk")).then(function(t){return t.create(e,a,o)})]);case 1:return c=s.animation=r.sent(),t.animation=c,t.animated&&t.config.getBoolean("animated",!0)||c.duration(0),t.keyboardClose&&c.beforeAddWrite(function(){var t=i.ownerDocument.activeElement;t&&t.matches("input, ion-input, ion-textarea")&&t.blur()}),[4,c.playAsync()];case 2:return r.sent(),u=c.hasCompleted,c.destroy(),t.animation=void 0,[2,u]}})})}function f(t,e){var n,r=new Promise(function(t){return n=t});return function(t,e,n){var r=function(i){t.removeEventListener(e,r),n(i)};t.addEventListener(e,r)}(t,e,function(t){n(t.detail)}),r}function h(t){return"cancel"===t||t===p}var p="backdrop"},jT1R:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var r=n("B5Ai");function i(t,e,n,i,o){return r.a(this,void 0,void 0,function(){var a;return r.c(this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,i)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,i&&i.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,a]}})})}function o(t,e){if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},k6lV:function(t,e,n){"use strict";n.r(e),n.d(e,"createGesture",function(){return f}),n.d(e,"GESTURE_CONTROLLER",function(){return s});var r,i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new o(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new a(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var r=this.requestedStart,i=-1e4;if(r.forEach(function(t){i=Math.max(i,t)}),i===n){this.capturedId=e,r.clear();var o=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return this.doc.dispatchEvent(o),!0}return r.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(c)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(c)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),o=function(){function t(t,e,n,r,i){this.id=e,this.name=n,this.disableScroll=i,this.priority=1e6*r+e,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),a=function(){function t(t,e,n,r){this.id=e,this.disable=n,this.disableScroll=r,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.disableGesture(e[t],this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++)this.ctrl.enableGesture(e[t],this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),c="backdrop-no-scroll",s=new i(document);function u(t,e,n,i){var o,a,c=function(t){if(void 0===r)try{var e=Object.defineProperty({},"passive",{get:function(){r=!0}});t.addEventListener("optsTest",function(){},e)}catch(t){r=!1}return!!r}(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t.__zone_symbol__addEventListener?(o="__zone_symbol__addEventListener",a="__zone_symbol__removeEventListener"):(o="addEventListener",a="removeEventListener"),t[o](e,n,c),function(){t[a](e,n,c)}}var l=2e3;function d(t){return t instanceof Document?t:t.ownerDocument}function f(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=e.canStart,r=e.onWillStart,i=e.onStart,o=e.onEnd,a=e.notCaptured,c=e.onMove,f=e.threshold,m=e.queue,b={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=function(t,e,n,r,i){var o,a,c,s,f,h,p,v=0;function m(r){v=Date.now()+l,e(r)&&(!a&&n&&(a=u(t,"touchmove",n,i)),c||(c=u(t,"touchend",y,i)),s||(s=u(t,"touchcancel",y,i)))}function b(r){v>Date.now()||e(r)&&(!h&&n&&(h=u(d(t),"mousemove",n,i)),p||(p=u(d(t),"mouseup",g,i)))}function y(t){w(),r&&r(t)}function g(t){S(),r&&r(t)}function w(){a&&a(),c&&c(),s&&s(),a=c=s=void 0}function S(){h&&h(),p&&p(),h=p=void 0}function E(){w(),S()}function C(e){e?(o&&o(),f&&f(),o=f=void 0,E()):(o||(o=u(t,"touchstart",m,i)),f||(f=u(t,"mousedown",b,i)))}return{setDisabled:C,stop:E,destroy:function(){C(!0),r=n=e=void 0}}}(e.el,function(t){var e=v(t);return!(E||!C)&&(p(t,b),b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp=e,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=t,(!n||!1!==n(b))&&(w.release(),!!w.start()&&(E=!0,0===f?L():(g.start(b.startX,b.startY),!0))))},function(t){S?!k&&C&&(k=!0,h(b,t),m.write(M)):(h(b,t),g.detect(b.currentX,b.currentY)&&(g.isGesture()&&L()||(A(),y.stop(),a&&a(b))))},_,{capture:!1}),g=function(t,e,n){var r=n*(Math.PI/180),i="x"===t,o=Math.cos(r),a=e*e,c=0,s=0,u=!1,l=0;return{start:function(t,e){c=t,s=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var n=t-c,r=e-s,d=n*n+r*r;if(d<a)return!1;var f=Math.sqrt(d),h=(i?n:r)/f;return l=h>o?1:h<-o?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}(e.direction,e.threshold,e.maxAngle),w=s.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),S=!1,E=!1,C=!0,k=!1;function M(){S&&(k=!1,c&&c(b))}function L(){return!(w&&!w.capture()||(S=!0,C=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp,r?r(b).then(D):D(),0))}function D(){i&&i(b),C=!0}function A(){S=!1,E=!1,k=!1,C=!0,w.release()}function _(t){var e=S,n=C;A(),n&&(h(b,t),e?o&&o(b):a&&a(b))}return{setDisabled:function(t){t&&S&&_(void 0),y.setDisabled(t)},destroy:function(){w.destroy(),y.destroy()}}}function h(t,e){if(e){var n=t.currentX,r=t.currentY,i=t.timeStamp;p(e,t);var o=t.currentX,a=t.currentY,c=(t.timeStamp=v(e))-i;if(c>0&&c<100){var s=(a-r)/c;t.velocityX=(o-n)/c*.7+.3*t.velocityX,t.velocityY=.7*s+.3*t.velocityY}t.deltaX=o-t.startX,t.deltaY=a-t.startY,t.event=e}}function p(t,e){var n=0,r=0;if(t){var i=t.changedTouches;if(i&&i.length>0){var o=i[0];n=o.clientX,r=o.clientY}else void 0!==t.pageX&&(n=t.pageX,r=t.pageY)}e.currentX=n,e.currentY=r}function v(t){return t.timeStamp||Date.now()}},ySCp:function(t,e,n){"use strict";function r(){var t=window.TapticEngine;t&&t.selection()}function i(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function o(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r})}}]);