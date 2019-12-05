import { Formulario } from './../../models/formulario';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent implements OnInit {

  @ViewChild('ngValidadorInicial', { static: false }) public ngValidadorInicial: NgForm;
  @Input() public cliente: Formulario;
  constructor() { }

  ngOnInit() {
    debugger
    this.cliente;
    console.log(this.cliente)
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
