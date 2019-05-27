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
  value: string;
  cuentaMesa: AngularFirestoreCollection<any>;




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

  borrarMesa(mesa){

    switch(mesa){
      case "mesa1": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa1);break;
      case "mesa2": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa2);break;
      case "mesa3": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa3);break;
      case "mesa3": this.mesa = this.fireStore.collection<any>(environment.firebaseConfig.mesa4);break;

    }

    this.leerMesa(this.mesa).subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });

      for(let producto of this.listado){
        this.mesa.doc(producto.id).delete();
      }

    });

    

  }

  //MESA

  //CUENTA

  getCuentaMesa(mesa){

    switch(mesa){
      case "mesa1": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa1);break;
      case "mesa2": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa2);break;
      case "mesa3": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa3);break;
      case "mesa3": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa4);break;

    }

    this.cuentaMesa.get().subscribe((querySnapshot) => {
      this.listado = [];
      querySnapshot.forEach((doc) => {
        this.listado.push({ id: doc.id, ...doc.data() });
      });
      return this.listado[0].cuenta;

    });
  }


  resetCuentaMesa(mesa){

    let cuenta = {
      cuenta: false,
    }

    switch(mesa){
      case "mesa1": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa1);break;
      case "mesa2": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa2);break;
      case "mesa3": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa3);break;
      case "mesa3": this.cuentaMesa = this.fireStore.collection<any>(environment.firebaseConfig.cuentaMesa4);break;

    }

    this.cuentaMesa.get().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        
        this.mesa.doc(doc.id).update(cuenta);
      
      });

    });
  }

  //CUENTA


}