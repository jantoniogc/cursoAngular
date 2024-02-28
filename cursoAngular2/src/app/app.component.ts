import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  name = 'undefined';
  array = [1, 2, 3, 4, 5]
  public fecha!: Date;


  public show(e: Event) {
    e.stopPropagation();
    this.array.push(this.array.length + 1)
    console.log('Hola mundo');
  }

  getFecha(e: Date) {
    this.fecha = e
  }
}
