import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.pug',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent implements OnInit {
  name   : string;
  data   : any[];
  PI     : number;
  percent: number;
  salary : number;
  yo     : object;
  prom   : any;
  fecha   : Date;

  constructor() { 
    this.name    = 'Eleazar Ortega';
    this.PI      = Math.PI;
    this.percent = 0.1235
    this.salary  = 1234.5
    this.yo      = {
      name: "Eleazar",
      edad: 27,
      ciudad: 'Ocumare'

    }

    this.prom = new Promise<string>((res)=>{
      setTimeout(()=>{
        res('Recibe data')
      },1000)
    })

    this.fecha = new Date();
  }

  ngOnInit(): void {
  }

}
