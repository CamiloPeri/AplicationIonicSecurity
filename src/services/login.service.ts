import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Login} from '../models/login'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private httpClient:HttpClient) { }

 // guardar personas
 guardarPersonas(personas:Login[]){
   this.httpClient.post('https://login-personas.firebaseio.com/datos.json',personas)
   .subscribe(
     res =>{
       console.log('resultado bien' + res)
     },
     error => {
       console.log('error al guardar' + error);
     }
   );
 }
  
}
