import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Prueba2Service {

  constructor() {
    console.log('Servicio Prueba2');
  }
  getMensaje(mensaje: String): String {
    return "Este es tu mensaje: " + mensaje;
  }
}
