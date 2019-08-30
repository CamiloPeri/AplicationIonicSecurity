import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
})
export class SquareComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}


  pagesHome(){
    this.router.navigate(['/home'])
  }

}
