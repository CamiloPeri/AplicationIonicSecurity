import { SaludComponent } from './../../components/salud/salud.component';
import { DatosPersonalesComponent } from './../../components/datos-personales/datos-personales.component';
import { RequerimientosComponent } from './../../components/requerimientos/requerimientos.component';
import { PagoComponent } from './../../components/pago/pago.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';
import {DataTableModule} from "angular-6-datatable";
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,    
    FormsModule,
    IonicModule,
    DataTableModule,
    FormsModule,                     
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ])
  ],
  declarations: [
    // RequerimientosComponent,
    // PagoComponent,
    // DatosPersonalesComponent,
    // SaludComponent,
    // PagoComponent,
   
  ]
})
export class ListPageModule {}
