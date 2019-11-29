import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConocePage } from './conoce.page';
import { GenericHomeComponent } from "../generic-home/generic-home.component";



const routes: Routes = [
  {
    path: '',
    component: ConocePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConocePage
      }
    ])
  ],
  declarations: [
    // ConocePage,

    
  ]
})
export class ConocePageModule {}
