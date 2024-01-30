import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ListaComponent } from './heroes/lista/lista.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponent, HeroeComponent, ListaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title : string = 'app-heroe';
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
