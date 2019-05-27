import { Component, ViewChild } from '@angular/core';
import { Service } from '../servicios/service';
import { LoadingController, ModalController, ToastController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page {

@ViewChild('dynamicList') dynamicList;

  listado = [];
  listadoPanel = [];

  mesa = {
    mesa1: "mesa1",
    mesa2: "mesa2",
    mesa3: "mesa3",
    mesa4: "mesa4",
  }

  constructor(public servicio: Service,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    public navCtrl: NavController,
   ) { }

  leerMesa(param){
    console.log(param);
    //(["tab2",{mesa:param}])
    this.navCtrl.navigateRoot((["tab2",{mesa:param}]));
  }



}
