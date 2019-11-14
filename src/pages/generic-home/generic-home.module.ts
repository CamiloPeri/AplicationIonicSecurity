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

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component:GenericHomeComponent,children:[
          { path: '', component: HomePage },
          { path: 'list', component: ListPage },
          { path: 'conoce', component: ConocePage },
          { path: 'datos', component: DatosPage }
          

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
    DatosPage
  ]
})
export class GenericHomeModule {}
