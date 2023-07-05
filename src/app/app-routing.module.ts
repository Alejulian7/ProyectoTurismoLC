import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoriaComponent } from './pages/historia/historia.component';
import { RegionesComponent } from './pages/regiones/regiones.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';

const routes: Routes = [
  {path: "historia", component: HistoriaComponent},
  {path: "regiones", component: RegionesComponent},
  {path: "contactanos", component: ContactanosComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
