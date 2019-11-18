

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
          { path: 'exclusion', component: ExclusionPage },
          { path: 'cobertura', component: CoberturaPage }
          

        ]
      }
    ])
  ],
  declarations: 
  [GenericHomeComponent, 
    TableroComponent, 
    HomePage,
    ListPage,
    ConocePage,
    DatosPage,
    ExclusionPage,
    CoberturaPage
  ]
})
export class GenericHomeModule {}
