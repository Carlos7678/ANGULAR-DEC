import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {
  nombre: string = 'Fernando';
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Fernando', 'Carlos'];
  indice: number = 0;
  gender: string = 'male';

  get cantidad(): number {
    return this.clientes.length;
  }

  cambiarPersona() {
    this.indice = (this.indice + 1) % this.clientes.length;
    this.nombre = this.clientes[this.indice]; // Actualizamos el nombre según el índice actual
    this.gender = this.indice % 2 === 0 ? 'male' : 'female'; // Actualizamos el género alternadamente
  }

  borrarCliente() {
    if (this.clientes.length > 0) {
      this.clientes.splice(this.indice, 1); // Eliminamos el cliente en el índice actual

      // Ajustamos el índice si es mayor o igual al nuevo tamaño de la lista
      if (this.indice >= this.clientes.length) {
        this.indice = this.clientes.length - 1;
      }

      // Actualizamos el nombre y el género al siguiente cliente después de borrar uno
      this.nombre = this.clientes[this.indice];
      this.gender = this.indice % 2 === 0 ? 'male' : 'female';
    }
  }

  personas: { nombre: string; edad: number; direccion: string; }[] = [
    { nombre: 'Juan', edad: 30, direccion: 'Calle A' },
    { nombre: 'María', edad: 25, direccion: 'Calle B' },
    { nombre: 'Pedro', edad: 35, direccion: 'Calle C' }
  ];

  persona = {
    nombre:"Carlos",
    edad:21,
    direccion:"Calle purisima"
    };

    heroes=[
      {
        nombre:"Superman",
        vuela:true
      },
   {
    nombre:"El hombre araña",
    vuela:false
   },
   {
    nombre:"Ibai Llanos",
    vuela:false
   }
    ];
    miObservable = interval(1000);
    valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
    });
  }
