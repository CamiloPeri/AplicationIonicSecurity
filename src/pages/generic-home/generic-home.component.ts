import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-generic-home',
  templateUrl: './generic-home.component.html',
  styleUrls: ['./generic-home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class GenericHomeComponent implements OnInit {
  acordeonAbierto = false;
  navigatorHide: string = "menu-container";
  constructor() { }

  ngOnInit() {
  }

  /**
   *@author Raphael Martinez
   *@description hide Navigator, cambia la clase  para mostrar los estilos del menu, especialmente en dispositivos
   * @memberof GenericHomeComponent
   */
  hideNavigator(){
      this.navigatorHide = this.navigatorHide === "menu-container" ? "show-container" :"menu-container"
  }


  toggleExpanded(){
  this.acordeonAbierto = true;

  }
  
}
