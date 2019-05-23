import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service {

  productos: AngularFirestoreCollection<any>;
  mesa: AngularFirestoreCollection<any>;
  mesaLocalStorage: string;
  value: string;

  comanda = [];
  listado = [];

 

  constructor(private fireStore: AngularFirestore,    
    ) {

    this.productos = fireStore.collection<any>(environment.firebaseConfig.productos);

  }

  //PRODUCTOS

  leerListadoProductos(): Observable<firebase.firestore.QuerySnapshot> {
    console.log(this.productos.get());
    return this.productos.get();
  }

  agregarRegistro(datos): Promise<firebase.firestore.DocumentReference> {
    return this.productos.add(datos);
  }

  borrarRegistro(id): Promise<void>{
    
  return this.productos.doc(id).delete();
    
}

  //PRODUCTOS


  //MESA


  leerMesa(mesa):  Observable<firebase.firestore.QuerySnapshot> {
   
    switch(mesa){
      case "mesa1": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa1);break;
      case "mesa2": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa2);break;
      case "mesa3": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa3);break;
      case "mesa3": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa4);break;

    }

    console.log(this.mesa.get());

    return this.mesa.get();

  }



  //MESA


}