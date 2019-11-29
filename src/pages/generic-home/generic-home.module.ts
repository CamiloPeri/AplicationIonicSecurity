import { SaludComponent } from './../../components/salud/salud.component';
import { DatosPersonalesComponent } from './../../components/datos-personales/datos-personales.component';
import { RequerimientosComponent } from './../../components/requerimientos/requerimientos.component';
import { PagoComponent } from './../../components/pago/pago.component';



import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

//component
import { TableroComponent } from "../../components/tablero/tablero.component";
import { GenericHomeComponent } from "./generic-home.component";
import { HomePage } from "../home/home.page";
import { ListPage } from "../list/list.page";
import { ConocePage } from "../conoce/conoce.page";
import {DatosPage} from '../datos/datos.page'
import { ExclusionPage } from '../exclusion/exclusion.page';
import { CoberturaPage } from '../cobertura/cobertura.page';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import {DataTableModule} from "angular-6-datatable";

@NgModule({
  imports: [
    // ,
    CommonModule,
    IonicModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component:GenericHomeComponent,children:[
          { path: '', component: HomePage },
          { path: 'list', component: ListPage },
          { path: 'conoce', component: ConocePage },
          { path: 'datos', component: DatosPage },
          { path: 'cobertura', component: CoberturaPage },
          { path: 'exclusion', component: ExclusionPage },
          { path: 'Datospersonales', component: DatosPersonalesComponent },
          { path: 'requerimientos', component: RequerimientosComponent },
          { path: 'pago', component: PagoComponent },
          { path: 'salud', component: SaludComponent },    
          

        ]
      }
    ])
  ],
  declarations: 
  [
    GenericHomeComponent, 
    TableroComponent, 
    HomePage,
    ListPage,
    ConocePage,
    DatosPage,
    ExclusionPage,
    CoberturaPage,
    PagoComponent,
    SaludComponent,
    RequerimientosComponent,
    DatosPersonalesComponent
  ]
})
export class GenericHomeModule {}
