import { Injectable } from '@angular/core';
import { Customer } from '../customer';

@Injectable()
export class GenericService<T>{

  constructor() {

  }
  
  create(entity: T) {
    console.log(entity);
  }
}
