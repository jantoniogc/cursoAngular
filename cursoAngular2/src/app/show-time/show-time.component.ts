import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrl: './show-time.component.scss'
})
export class ShowTimeComponent implements OnInit {
  
  time = signal(new Date());
  hora: Date | undefined;

  constructor() {
    effect(() => {
      console.log(`Full Name: ${this.time()}`);
      this.hora = this.time();
    });
    setInterval(() => {
      this.time.set(new Date())
    }, 1000);

  }

  ngOnInit(): void {

  }

}
