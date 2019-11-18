import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public tabla: boolean = false;
  public Seguro: string = 'vida'
  public nombre: string = '';
  public apellido : string ='';
  public edad: number;
  public envioNombre: string;
  public envioEdad: number;
  public valorAsegurado: any = 0;
  public primaA: any = 0;
  public primaM: any = 0;

  constructor(
    private toastr: ToastrService,
  ) {}
  ngOnInit() { }

  envio() {
    this.tabla = true;
    this.edad = Number(this.edad);
    switch (this.edad) {
      case 18:
        debugger
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 167.130';
        this.primaM = '$ 15.460';

        break;
      case 19:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 20:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 21:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 22:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 23:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 24:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 25:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 26:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 27:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 28:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 29:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 30:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 31:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 32:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 33:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 34:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;

      case 35:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 36:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 37:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 38:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 39:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 40:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 41:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 42:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 43:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 44:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 45:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 46:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 47:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 48:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 49:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 50:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 51:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 52:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 53:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 54:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 55:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 56:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 57:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 58:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 59:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 60:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 61:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 62:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 63:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;
      case 64:
        this.valorAsegurado = '$ 21.000.000';
        this.primaA = '$ 168.170';
        this.primaM = '$ 17.460';

        break;



      default:
        this.toastr.warning('Rango de edad no valido', 'Error de credenciales');
        this.tabla = false;
        break;
    }


    this.envioEdad = this.edad;
    this.envioNombre = this.nombre;

  }





}