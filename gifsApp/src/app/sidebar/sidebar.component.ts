import { Component, Inject } from '@angular/core';
import { GifsService } from '../gifs/services/gifs.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  constructor(@Inject(GifsService) private gifsService: GifsService) { }

  getHistorial(){
    return this.gifsService.historial;
  }
}
