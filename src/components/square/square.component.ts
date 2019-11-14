import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import {Login} from '../../models/login'
// import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  
})
export class SquareComponent implements OnInit {

 public username = '';
 public password = '';

  constructor(private router: Router,
    private toastr: ToastrService,
    // private loginService:LoginService
    
    ) { }
    

  ngOnInit() {}


  pagesHome(){
    this.router.navigate(['/home'])
  }

// agregarPersonas(persona :Login){
//   this.loginService.guardarPersonas(this.persona);
// }

signUp(){
if(this.username == 'wendy' && this.password == '1234567'){

  this.toastr.success('Operación Exitosa!', 'Bienvenido!');
  this.router.navigate(['/home'])

}else{

  this.toastr.warning('Error de Credenciales', 'Intente Nuevamente!');
}
}

}
