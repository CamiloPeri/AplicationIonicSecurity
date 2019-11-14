import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

   public Seguro : string= 'vida'
   public nombre: string = '';
   public edad : number;
   public envioNombre: string;
   public envioEdad: number;
   public valorAsegurado: any = 0;
   public primaA :any = 0;
   public primaM :any = 0;

  constructor() {
    
  }
   

  ngOnInit() {}



envio(){


  if(this.nombre == '' && this.edad <= 17){
    alert('error')

  }
this.envioEdad = this.edad;
this.envioNombre = this.nombre;

if (this.envioEdad == 18){

 this.valorAsegurado ='$ 20.000.000';
 this.primaA = '$ 167.130';
 this.primaM = '$ 15.460';
 
 
 }
 else if  (this.envioEdad == 30){

  this.valorAsegurado ='$ 27.200.000';
  this.primaA = '$ 268.442';
  this.primaM = '$ 24.831';
  
  
  }
  else if  (this.envioEdad == 50){

    this.valorAsegurado ='$ 39.200.000';
    this.primaA = '$ 830.864';
    this.primaM = '$ 76.855';
    
    
    }
}


}



