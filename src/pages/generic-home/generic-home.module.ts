import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//component
import {TableroComponent} from '../../components/tablero/tablero.component'
import { GenericHomeComponent } from './generic-home.component';
import {HomePage} from '../home/home.page'
import {ListPage} from '../list/list.page'

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path:'',component:GenericHomeComponent, children:[
        {path:'', component:HomePage },
        {path:'List',component: ListPage}
    ]
    }])
  ],
  declarations: 
  [
    GenericHomeComponent,
    TableroComponent,
   
    HomePage, 
    
    ListPage
  ]
})
export class GenericHomeModule { }
