import { Component, OnInit, computed, effect, signal } from '@angular/core';
import { Prueba2Service } from '../service/prueba2.service';
import { PruebaService } from '../service/prueba.service';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrl: './show-time.component.scss'
})
export class ShowTimeComponent implements OnInit {
  
  time = signal(new Date());
  hora: Date | undefined;

  constructor(private prueba: Prueba2Service,
    private prueba2:PruebaService) {
    effect(() => {
      //console.log(`Hora: ${this.time()}`);
      this.hora = this.time();
    });
    setInterval(() => {
      this.time.set(new Date())
    }, 1000);

  }

  ngOnInit(): void {

  }

}
