import { Component, Directive, HostListener, Signal, WritableSignal, computed, signal } from '@angular/core';

@Directive({selector: 'button[counting]'})
class CountClicks {
  numberOfClicks = 0;

  @HostListener('click', ['$event.target'])
  onClick(btn: any) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
 }
}

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
}
