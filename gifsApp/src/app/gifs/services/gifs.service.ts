import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'G2x7VI6Vx20eS2PbIfA3Df3XWSKf1gZr';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];
  private _gifsLocalStorageKey: string = 'gifsGuardados'; // Clave para el Local Storage

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    this.obtenerHistorialDesdeLocalStorage();
    this.obtenerGifsGuardados(); // Llamar a una función para obtener los GIFs guardados al inicializar el servicio
  }

  private obtenerHistorialDesdeLocalStorage() {
    if(typeof localStorage !== 'undefined'&&localStorage.getItem('historial')){
    const historialGuardado = localStorage.getItem('historial');
    if (historialGuardado) {
      this._historial = JSON.parse(historialGuardado);
    }
  }
}

  private obtenerGifsGuardados() {
    if(typeof localStorage !== 'undefined'&&localStorage.getItem('historial')){
    const gifsGuardados = localStorage.getItem(this._gifsLocalStorageKey);
    if (gifsGuardados) {
      this.resultados = JSON.parse(gifsGuardados);
    }
  }
}

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

    if (query.length === 0) {
      return;
    }
    if(this._historial.includes(query)){
      return;
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query);

    console.log(params.toString());


        this.http.get<SearchGIFResponse>(`$ {this.servicioUrl}/search`,{params})

      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;

        // Agregar la búsqueda actual al historial y guardar en el Local Storage
        this._historial.unshift(query);
        this._historial = this._historial.slice(0, 10); // Limitar el historial a 10 elementos
        localStorage.setItem('historial', JSON.stringify(this._historial));

        // Guardar los GIFs obtenidos en el Local Storage
        localStorage.setItem(this._gifsLocalStorageKey, JSON.stringify(this.resultados));
      });
  }

  buscarGifs2(query: string) {
    query = query.trim().toLowerCase();

    if (query.length === 0) {
      return;
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

      console.log(params.toString());

    this.http
      .get<SearchGIFResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
  }
}


