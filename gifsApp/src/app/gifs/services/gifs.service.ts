import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGIFResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'G2x7VI6Vx20eS2PbIfA3Df3XWSKf1gZr';
  private _historial: string[] = [];

  public resultados: Gif[] = [];
  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) { //Con este http ya puedo hacer peticiones

  }



  buscarGifs(query: string) {
    query = query.trim().toLowerCase();

   if( query.trim().length === 0) {
    return;
   }

    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial)); //Guardamos en el localstorage
    }

    this.http
      .get<SearchGIFResponse>(
        `https://api.giphy.com/v1/gifs/search?api_key=yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I&q=${query}&limit=10`
      )
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.resultados = resp.data;
      });

    /*
    fetch("https://api.giphy.com/v1/gifs/search?api_key=yjGnI6lLOf3jlz2EP6aiMulk5q4r3A2I&q=dragon ball z&limit=10")
    .then(resp =>{
      resp.json().then(data => {
        console.log(data); //lo pasamos a JSON
      })
    })*/
  }
}
