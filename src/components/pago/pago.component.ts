import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import {
  NgForm,
  AbstractControl,
  FormControl,
  NgControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.scss'],
})
export class PagoComponent implements OnInit {
  @ViewChild('ngValidadorInicial', { static: false }) public ngValidadorInicial: NgForm;
  constructor(  private router: Router,) { }

  ngOnInit() {}



  confirmar(){
    this.router.navigate(['home']);

    Swal.fire(
      'Enhorabuena!',
      'Tu seguro se ha adquirido con exito!',
      'success'
    )

    setTimeout(()=>{  
      Swal.fire(
        'Información',
        'Se enviara un resumen de tu seguro a tu correo!',
        'info'
      )
 }, 3000);
  
  }
}
