import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genericMenu',
  templateUrl: './genericMenu.component.html',
  styleUrls: ['./genericMenu.component.css']
})
export class GenericMenuComponent implements OnInit {

  // public appPages = [
  //   {
  //     title: 'Home',
  //     url: '/home',
  //     icon: 'home'
  //   },
  //   {
  //     title: 'List',
  //     url: '/list',
  //     icon: 'list'
  //   },
  //   {
  //     title: 'Conoce',
  //     url: '/conoce',
  //     icon: 'list'
  //   }
  // ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pagesLogin(){
    this.router.navigate(['/login'])
  }

}
