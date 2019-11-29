import { Formulario } from './../../models/formulario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.scss'],
})
export class DatosPersonalesComponent implements OnInit {
  @Input() public cliente: Formulario;
  constructor() { }

  ngOnInit() {
    debugger
    this.cliente;
    console.log(this.cliente)
  }

}
