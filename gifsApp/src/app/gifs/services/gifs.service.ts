import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'G2x7VI6Vx20eS2PbIfA3Df3XWSKf1gZr';
  private _historial: string[] = [];

  public resultados: any[] = [];

  get historial() {
    //this._historial = this._historial.splice(0, 10);
    return [...this._historial];
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string) {
    if (query.trim().length === 0) {
      return;
    }

    // Convertir el texto de búsqueda a minúsculas
    query = query.toLowerCase();

    // Verificar si el elemento ya está en el historial
    if (this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
    }

    this.http
      .get(
        'https://api.giphy.com/v1/gifs/search?api_key=G2x7VI6Vx20eS2PbIfA3Df3XWSKf1gZr&q=${ query }&limit=10'
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });
    /* fetch(
      'https://api.giphy.com/v1/gifs/search?api_key=G2x7VI6Vx20eS2PbIfA3Df3XWSKf1gZr&q=pokemon&limit=10'
    )
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      }); */
  }
}
