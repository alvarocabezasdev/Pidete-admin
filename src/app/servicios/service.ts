import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service {

  productos: AngularFirestoreCollection<any>;
  mesa: AngularFirestoreCollection<any>;
  cuentaMesa: AngularFirestoreCollection<any>;
  value: string;

  cuenta: any;


  comanda = [];
  listado = [];

 

  constructor(private fireStore: AngularFirestore,    
    ) {

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


  leerMesa(mesa){
   
    switch(mesa){
      case "mesa1": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa1);break;
      case "mesa2": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa2);break;
      case "mesa3": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa3);break;
      case "mesa4": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa4);break;

    }

    return this.mesa.get();

  }

  borrarMesa(mesa,id){

    switch(mesa){
      case "mesa1": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa1);break;
      case "mesa2": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa2);break;
      case "mesa3": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa3);break;
      case "mesa4": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa4);break;

    }



    this.mesa.doc(id).delete();

 
}


  productoServido(mesa, item){

    switch(mesa){
      case "mesa1": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa1);break;
      case "mesa2": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa2);break;
      case "mesa3": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa3);break;
      case "mesa4": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa4);break;

    }

    if(item.estado==true){

      let producto = {
        producto: item.producto,
        cantidad: item.cantidad,
        precio: item.precio,
        estado: false,
  
      }
      this.mesa.doc(item.id).update(producto);


    }else{
      let producto = {
        producto: item.producto,
        cantidad: item.cantidad,
        precio: item.precio,
        estado: true,
  
      }
      this.mesa.doc(item.id).update(producto);

    }

    

  }

  //MESA

  //CUENTA


  getCuentaMesa(mesa){

    switch(mesa){
      case "mesa1": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa1);break;
      case "mesa2": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa2);break;
      case "mesa3": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa3);break;
      case "mesa4": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa4);break;

    }    
    
    return this.cuentaMesa.get();

}




resetCuentaMesa(mesa,idMesa){

  console.log("Resetmesa: "+mesa);

  let cuenta = {
    cuenta: false,
  }

  switch(mesa){
    case "mesa1": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa1);break;
    case "mesa2": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa2);break;
    case "mesa3": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa3);break;
    case "mesa4": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa4);break;

  }    

  this.cuentaMesa.doc(idMesa).update(cuenta);
  

}

  //CUENTA


}