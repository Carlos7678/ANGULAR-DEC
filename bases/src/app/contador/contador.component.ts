import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
  title : string = 'Contador App';
  numero1 : number = 0;
  numero2 : number = 0;
  numero3 : number = 5;
  ejer1 : string = 'Ejercicio 1';
  ejer2 : string = 'Ejercicio 2';
  ejer3 : string = 'Ejercicio 3';
  constructor() { }
  suma(){
    this.numero2++;
  }
  resta(){
    this.numero2--;
  }
  suma5(){
    this.numero3+=5;
  }
  resta5(){
    this.numero3-=5;
  }
}
