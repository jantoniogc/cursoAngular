import { Injectable } from '@angular/core';
import { Prueba2Service } from './prueba2.service';

@Injectable()
export class PruebaService {

  constructor(private prueba2: Prueba2Service) {
    console.log('Servicio Prueba')
   }

  getMensaje(mensaje: String): String {
    return "Este es tu mensaje: " + mensaje;
  }
}
