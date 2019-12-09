import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {
public check1 =false;
public check2 = false;
public check3 = false;
public check4 = false;
public check5 = false;
public check6 = false;

checkA= false;
checkC= false;
checki= false;
checkN= false;
public textArea= false;
public textArea2=false;
public textArea3=false;
public textArea4=false;
  constructor() { }

  ngOnInit() {
  }

  presion1(){

    
    this.textArea=true;
  }  
  presion3(){
    this.textArea2=true;
  }
  presion4(){
    this.textArea3=true;
  }
  presion5(){
    this.textArea4=true;
  }
  presion6(){
    this.check6=true;
    
  }



  

}
