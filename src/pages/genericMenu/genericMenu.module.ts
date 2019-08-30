import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { GenericMenuComponent } from './genericMenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomePage} from '../home/home.page'
import {ListPage} from '../list/list.page'


import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
      path:'',component:GenericMenuComponent, children:[
        {path:'', component:HomePage },
        {path:'list',component: ListPage}
    ]
    }])
  ],
  declarations: [
    GenericMenuComponent,
    HomePage, 
    ListPage
  ]
})
export class GenericMenuModule { }
