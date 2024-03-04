import { Component, Directive, HostListener, Inject, InjectionToken, Signal, WritableSignal, computed, signal } from '@angular/core';
import { PruebaService } from './service/prueba.service';
import { Customer } from './customer';
import { GenericService } from './service/create.service';

export const MyGenericServiceToken = new InjectionToken<GenericService<Customer>>(
  'GenericService', { factory: () => new GenericService<Customer>(), providedIn: 'root' });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'undefined';
  array = [1, 2, 3, 4, 5]

  count = signal(0);


  public fecha!: Date;


  constructor(
    private bread: PruebaService,
    @Inject('CreateService') private createService: GenericService<Customer>,
    @Inject(MyGenericServiceToken) genericService: GenericService<Customer> ) {
    const customer: Customer = {
      id: 1,
      name: 'preuba',
      phone: '786758767'
    };
    this.createService.create(customer);
    genericService.create({...customer, name:'pepito'});
  }

  public show(e: Event) {
    e.stopPropagation();
    this.array.push(this.array.length + 1)
    console.log('Hola mundo');
  }

  getFecha(e: Date) {
    this.fecha = e
  }

  @HostListener('click', ["$event"])
  onMouseEnter(ev: Event) {
    this.count.update(value => value + 1)
  }

  counter = 0;
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    console.log(event);
    this.counter++;
  }
  resetCounter() {
    this.counter = 0;
  }


  getMensaje() {
    const msg: String = this.bread.getMensaje("vamos a escribirlo");
    console.log(msg);
  }
}
