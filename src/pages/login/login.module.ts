import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { LoginPage } from './login.page';


import { SquareComponent } from 'src/components/square/square.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LoginPage,
    SquareComponent,
  
  ]
})
export class LoginPageModule {}
