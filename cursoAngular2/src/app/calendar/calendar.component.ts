import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements AfterViewInit {

  @ViewChild('myDateTime')
  element!: ElementRef;

  @Output() fechaSelectEvent: EventEmitter<Date> = new EventEmitter<Date>();

  ngAfterViewInit(): void {
    $(this.element.nativeElement).datepicker({
      weekStart: 1,
      daysOfWeekHighlighted: "6,0",
      autoclose: true,
      todayHighlight: true,
    });
    $(this.element.nativeElement).datepicker("setDate", new Date());
    $(this.element.nativeElement).on('changeDate', (ev: any) => {
      const { date } = ev;
      this.fechaSelectEvent.emit(date)
    });
  }

  cambioFecha(event: Event) {
    console.log(event);

  }

}
