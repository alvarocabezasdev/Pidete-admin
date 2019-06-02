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

  cuentaMesa1: any;
  cuentaMesa2: any;
  cuentaMesa3: any;
  cuentaMesa4: any;

  mesa1ocupada: any;
  mesa2ocupada: any;
  mesa3ocupada: any;
  mesa4ocupada: any;


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
   ) { 

    this.initMesas();
  }

  ionViewDidEnter(){
    this.initMesas();
  }

  leerMesa(param){    
    this.navCtrl.navigateRoot((["tabs/tab2",{mesa:param}]));
  }

  initMesas(){

    //GET CUENTA MESA
    this.servicio.getCuentaMesa(this.mesa.mesa1).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });
      this.cuentaMesa1 = this.listado[0].cuenta;

    });   


    this.servicio.getCuentaMesa(this.mesa.mesa2).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.cuentaMesa2 = this.listado[0].cuenta;

    });   

    this.servicio.getCuentaMesa(this.mesa.mesa3).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.cuentaMesa3 = this.listado[0].cuenta;

    });   

    this.servicio.getCuentaMesa(this.mesa.mesa4).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.cuentaMesa4 = this.listado[0].cuenta;

    });
    
    //LeerMesas
    this.servicio.leerMesa(this.mesa.mesa1).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.mesa1ocupada = this.listado.length;

    });

    this.servicio.leerMesa(this.mesa.mesa2).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.mesa2ocupada = this.listado.length;

    });

    this.servicio.leerMesa(this.mesa.mesa3).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.mesa3ocupada = this.listado.length;

    });

    this.servicio.leerMesa(this.mesa.mesa4).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.mesa4ocupada = this.listado.length;

    });





  }
  
     /**
   * @param refresher
   * 
   */  
  doRefresh(refresher) {
    this.initMesas();
    refresher.target.complete();
      
}







}

   

