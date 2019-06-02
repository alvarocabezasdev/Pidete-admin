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
  cuentaMesa: any;
  idMesa: any;


  constructor(public servicio: Service,
    public loadingController: LoadingController,
    public modalController: ModalController,
    public toastController: ToastController,
    public param: NavController,
    public route: ActivatedRoute,
    public navController: NavController
   
    
   ) {

    this.initMesa();

   
   }


  ionViewDidEnter(){
    this.initMesa();
 
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Mesa cerrada',
      duration: 1000,
      position: 'top',
    });
    toast.present();
  }

  /**
   * @return Number con el valor total de la mesa
   * 
   */  
  totalComanda(){

    let total:number = 0;

    for (let producto of this.listadoPanel) {
      total = total + producto.precio;
  }
    return total;
    

}

  /**
   * 
   * @return Cantidad
   * 
   */  
  getCantidad(){
    return this.cantidad;
  }

  cerrarMesa(){
    console.log(this.mesa);
    
    this.borrarMesa();
    this.servicio.resetCuentaMesa(this.mesa, this.idMesa);
    this.presentToast();
    this.navController.navigateRoot("tabs/tab1");

  }

  
  borrarMesa(){

    this.listadoPanel.forEach((doc) => {
      this.servicio.borrarMesa(this.mesa, doc.id);
    });

  }

     /**
   * @param item
   * 
   */  
  productoServido(item){
    this.servicio.productoServido(this.mesa, item);
    this.initMesa();
  }


  initMesa(){
    this.mesa = this.route.snapshot.paramMap.get('mesa');


    this.servicio.leerMesa(this.mesa).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.listadoPanel = this.listado;

    });

  
    this.servicio.getCuentaMesa(this.mesa).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      this.cuentaMesa = this.listado[0].cuenta;
      this.idMesa = this.listado[0].id;

    });   
  }

}