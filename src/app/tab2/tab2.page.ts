import { Component } from '@angular/core';
import { Service } from '../servicios/service';
import { LoadingController, ModalController, ToastController, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {


  listado = [];
  listadoPanel = [];
  cantidad = 0; 
  mesa: any;


  constructor(public servicio: Service,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    public param: NavController,
    public route: ActivatedRoute,
    public navController: NavController
   
    
   ) {

    console.log(this.route.snapshot.paramMap.get('mesa'));

    this.mesa = this.route.snapshot.paramMap.get('mesa');


    this.servicio.leerMesa(this.mesa).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.listadoPanel = this.listado;

    });

   
   }

   ionViewWillEnter() {

    this.mesa = this.route.snapshot.paramMap.get('mesa');

    this.servicio.leerMesa(this.mesa).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.listadoPanel = this.listado;

    });
        

  }

  ionViewDidEnter(){

    this.mesa = this.route.snapshot.paramMap.get('mesa');


    this.servicio.leerMesa(this.mesa).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.listadoPanel = this.listado;

    });

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Mesa cerrada',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

  totalComanda(){

    let total:number = 0;

    for (let producto of this.listadoPanel) {
      total = total + producto.precio;
  }
    return total;
    

}

  getCantidad(){
    return this.cantidad;
  }

  cerrarMesa(){
    console.log(this.mesa);
    this.servicio.resetCuentaMesa(this.mesa);
    this.listadoPanel = [];
    this.servicio.borrarMesa(this.mesa);
    this.presentToast();
    this.navController.navigateRoot("tabs/tab1");

  }


}