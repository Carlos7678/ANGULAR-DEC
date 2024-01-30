import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
  imports: [CommonModule],
})
export class ListaComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];


  heroeBorrado="";
  
  borrarHeroe(): void { 
    this.heroeBorrado=this.heroes[0];
    this.heroes.shift();
   
  }
}
