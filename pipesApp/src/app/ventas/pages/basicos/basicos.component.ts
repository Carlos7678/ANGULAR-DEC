import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'carlos';
  nombreUpper: string = 'Carlos';
  nombreCompleto: string = 'CarLOS SorIANo GArCIA';

  fecha: Date = new Date(); // el día de hoy
}

