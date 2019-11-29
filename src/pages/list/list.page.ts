import { Formulario } from './../../models/formulario';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ToastrService } from 'ngx-toastr';
import { ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
import {
  NgForm,
  AbstractControl,
  FormControl,
  NgControl,
  FormGroup
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  @ViewChild('ngValidadorInicial', { static: false }) public ngValidadorInicial: NgForm;
  public cliente: Formulario;
  public tabla: boolean = false;
  public Seguro: string = 'vida';
  public envioNombre: string;
  public envioEdad: number;
  public valorAsegurado: any = 0;
  public primaA: any = 0;
  public primaM: any = 0;
  public femenino = false;
  public masculino = false;
  public datosP = false; 
  public Saludp = false; 
  public doc = false;
  public formas = false;
  public formaP = false; public documentP = false; public consultaPoliza = true; public tab = false; public botonS = false; public botonDatos = false; public botonSalud = false; public botonDocumentos = false; public boton1 =true;
  public boton2= false; public boton3 = false;
  contacto: FormGroup;
  submitted = false;


  constructor(
    private toastr: ToastrService,
    private router: Router,
    public toastController: ToastController
  ) {
    this.cliente = {
      nombre: '',
      apellido: '',
      edad: '',
      telefono: '',
      femenino: true,
      masculino: false,
      correo: '',
    }
  }


  async presentToast() {
    const toast = await this.toastController.create({
      
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  ngOnInit() {
    this.tab = false;
    
  }

  datosPersonales() {
    this.datosP = true;
    this.consultaPoliza = false;
    this.router.navigate(['home/list/Datospersonales']);
  }
  salud() {
    this.boton1= false;
    this.boton2 = true;
    this.botonDatos = true;
    this.Saludp = true;
    this.doc = false;
    this.formas = false;
    this.datosP = false;
    this.consultaPoliza = false;
    this.router.navigate(['home/list/salud']);

  }

  Documentos() {
    this.boton2= false;
    this.boton3 = true;
    this.doc = true;
    this.formas= false; 
    this.botonSalud = true;
    this.documentP = true;
    this.Saludp = false;
    this.router.navigate(['home/list/requerimientos']);
  }


  formaPago() {
    this.boton3=false;
    this.formas= true;
    this.doc = false;
    this.botonDocumentos = true;
    this.formaP = true;
    this.router.navigate(['home/list/pago']);

  }



  adquirir() {
    this.consultaPoliza = false;
    this.tab = true;
    this.datosP = true;
  }


  envio() {
    if (!this.isFormularioValido(this.ngValidadorInicial)) {
      this.toastr.error('Faltan campos por diligenciar !', 'Error de credenciales');
      event.preventDefault();
      event.stopPropagation();
      return;
    }


    this.tabla = true;
    this.cliente.edad = Number(this.cliente.edad);
    switch (this.cliente.edad) {
      case 18:
        debugger
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 398.620';
        this.primaM = '$ 36.872';

        break;
      case 19:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 402.400';
        this.primaM = '$ 37.222';

        break;
      case 20:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 406.180';
        this.primaM = '$ 37.572';

        break;
      case 21:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 411.893';
        this.primaM = '$ 38.100';

        break;
      case 22:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 418.250';
        this.primaM = '$ 38.688';

        break;
      case 23:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 473.774';
        this.primaM = '$ 43.824';

        break;
      case 24:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 481.484';
        this.primaM = '$ 44.537';

        break;
      case 25:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 489.876';
        this.primaM = '$ 45.314';

        break;
      case 26:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 496.959';
        this.primaM = '$ 45.969';

        break;
      case 27:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 505.271';
        this.primaM = '$ 46.738';

        break;
      case 28:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 511.800';
        this.primaM = '$ 47.342';

        break;
      case 29:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 518.329';
        this.primaM = '$ 447.945';

        break;
      case 30:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 526.184';
        this.primaM = '$ 48.672';

        break;
      case 31:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 534.603';
        this.primaM = '$ 49.451';

        break;
      case 32:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 546.712';
        this.primaM = '$ 50.571';

        break;
      case 33:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 558.267';
        this.primaM = '$ 51.640';

        break;
      case 34:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 573.027';
        this.primaM = '$ 53.005';

        break;

      case 35:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 590.913';
        this.primaM = '$ 54.659';

        break;
      case 36:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 610.028';
        this.primaM = '$ 56.428';

        break;
      case 37:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 633.504';
        this.primaM = '$ 58.599';

        break;
      case 38:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 659.040';
        this.primaM = '$ 60.961';

        break;
      case 39:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 688.189';
        this.primaM = '$ 63.657';

        break;
      case 40:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 721.783';
        this.primaM = '$ 66.765';

        break;
      case 41:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 759.160';
        this.primaM = '$ 70.222';

        break;
      case 42:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$802.314';
        this.primaM = '$ 74.214';

        break;
      case 43:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 849.168';
        this.primaM = '$ 78.548';

        break;
      case 44:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 902.443';
        this.primaM = '$ 83.476';

        break;
      case 45:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.009.864';
        this.primaM = '$ 93.412';

        break;
      case 46:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.076.396';
        this.primaM = '$ 99.567';

        break;
      case 47:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.150.318';
        this.primaM = '$ 106.404';

        break;
      case 48:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.283.635';
        this.primaM = '$ 118.736';

        break;
      case 49:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.378.514';
        this.primaM = '$ 127.513';

        break;
      case 50:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.532.400';
        this.primaM = '$ 141.747';

        break;
      case 51:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.698.261';
        this.primaM = '$ 157.089';

        break;
      case 52:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.834.343';
        this.primaM = '$ 169.677';

        break;
      case 53:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 2.030.669';
        this.primaM = '$ 187.837';

        break;
      case 54:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 2.196.739';
        this.primaM = '$ 203.198';

        break;
      case 55:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 2.426.032';
        this.primaM = '$ 224.408';

        break;
      case 56:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 2.624.864';
        this.primaM = '$ 242.800';

        break;
      case 57:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 2.842.930';
        this.primaM = '$ 262.971';

        break;
      case 58:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 3.125.060';
        this.primaM = '$ 289.068';

        break;
      case 59:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 3.379.120';
        this.primaM = '$ 312.569';

        break;
      case 60:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 3.3696.769';
        this.primaM = '$ 341.951';

        break;
      case 61:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 4.016.694';
        this.primaM = '$ 371.544';

        break;
      case 62:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 4.362.510';
        this.primaM = '$ 403.532';

        break;
      case 63:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 4.724.665';
        this.primaM = '$ 437.032';

        break;
      case 64:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 5.142.153';
        this.primaM = '$ 475.649';

        break;
      case 65:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 5.524.048';
        this.primaM = '$ 510.974';

        break;
      case 66:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 5.920.123';
        this.primaM = '$ 547.611';

        break;
      case 67:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 6.330.300';
        this.primaM = '$ 585.553';

        break;
      case 68:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 6.781..458';
        this.primaM = '$ 627.285';

        break;
      case 69:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 7.282.698';
        this.primaM = '$ 673.650';

        break;
      case 70:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 651.537';
        this.primaM = '$ 60.267';

        break;
      case 71:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 701.595';
        this.primaM = '$ 64.898';

        break;
      case 72:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 762.480';
        this.primaM = '$ 70.529';

        break;
      case 73:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 844.344';
        this.primaM = '$ 78.102';

        break;
      case 74:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 948.186';
        this.primaM = '$ 87.707';

        break;
      case 75:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.078.569';
        this.primaM = '$ 99.768';

        break;
      case 76:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.238.760';
        this.primaM = '$ 114.585';

        break;
      case 77:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.433.376';
        this.primaM = '$ 132.587';

        break;
      case 78:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.672.434';
        this.primaM = '$ 154.700';

        break;
      case 79:
        this.valorAsegurado = '$ 20.000.000';
        this.primaA = '$ 1.995.354';
        this.primaM = '$ 184.570';
        break;

      default:
        this.toastr.warning('Rango de edad no valido', 'Error de credenciales');
        this.tabla = false;
        break;
    }




    this.envioEdad = this.cliente.edad;
    this.envioNombre = this.cliente.nombre;

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