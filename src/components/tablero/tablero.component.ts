import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  } from '../../components/tablero/tablero.component';

import {Router} from "@angular/router";

import { ConocePage } from 'src/pages/conoce/conoce.page';
import { HomePage } from 'src/pages/home/home.page';
import {SquareComponent} from 'src/components/square/square.component';
import Swal from 'sweetalert2'
import { ListPage } from 'src/pages/list/list.page';


@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss'],
})
export class TableroComponent implements OnInit {
 
  constructor(
    public modalController: ModalController,
    private router: Router
    ) { }

  ngOnInit() {}


  async modalConoce() {

    this.router.navigate(['/home/conoce']); 
}

modalAdquirir(){

  this.router.navigate(['/home/datos']); 
  
}

}


