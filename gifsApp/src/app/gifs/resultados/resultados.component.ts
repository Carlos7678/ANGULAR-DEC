import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {


  get resultados(){
    return this.gifsService.resultados;// creamos la propiiedad en la clase mediante un get
  }

  constructor(private gifsService: GifsService){}
}
