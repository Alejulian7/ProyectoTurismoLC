import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriaComponent } from './historia/historia.component';
import { RegionesComponent } from './regiones/regiones.component';
import { ContactanosComponent } from './contactanos/contactanos.component';



@NgModule({
  declarations: [
    HistoriaComponent,
    RegionesComponent,
    ContactanosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HistoriaComponent,
    RegionesComponent,
    ContactanosComponent
  ]
})
export class PagesModule { }
