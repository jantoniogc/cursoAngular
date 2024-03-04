import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ShowTimeComponent } from './show-time/show-time.component';
import { InjeccionServiciosComponent } from './injeccion-servicios/injeccion-servicios.component';
import { Prueba2Service } from './service/prueba2.service';
import { PruebaService } from './service/prueba.service';
import { Customer } from './customer';
import { GenericService } from './service/create.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ShowTimeComponent,
    InjeccionServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Prueba2Service, PruebaService,
    { provide: 'CreateService', useFactory: (c: Customer) => new GenericService<Customer>() },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
