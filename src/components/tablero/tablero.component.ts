import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {  } from '../../components/tablero/tablero.component';

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

  constructor(public modalController: ModalController) { }

  ngOnInit() {}


  async modalConoce() {

    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      type: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

}
