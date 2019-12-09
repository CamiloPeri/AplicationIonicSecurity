import { Formulario } from './../../models/formulario';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent implements OnInit {

  @ViewChild('ngValidadorInicial', { static: false }) public ngValidadorInicial: NgForm;
  @Input() public cliente: Formulario;
  constructor(private toastr: ToastrService,) { }

  ngOnInit() {
    debugger
    this.cliente;
    console.log(this.cliente)

   
  }



  envio(){
    if (!this.isFormularioValido(this.ngValidadorInicial)) {
      this.toastr.error('Faltan campos por diligenciar !', 'Error de credenciales');
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    
  }

  isFormularioValido(nombreValidador: NgForm): boolean {
    Object.keys(nombreValidador.controls).forEach(controlKey => {
      const control = nombreValidador.form.controls[controlKey] as AbstractControl;
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    });
    this.ngValidadorInicial.form.updateValueAndValidity();
    const formularioValido: boolean = nombreValidador.form.valid;
    return formularioValido;
  }

}
