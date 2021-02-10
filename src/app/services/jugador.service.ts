import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JugadorResponse, Datum } from '../models/jugador.models';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  private JugadorUrl = 'https://www.balldontlie.io/api/v1';
  jugadores: Datum[]= [];

  constructor(private http: HttpClient) {}

    getJugadores() {
      const url = `${ this.JugadorUrl}/players`;
      return  this.http.get<JugadorResponse>(url, {}).
      pipe(
        map( res=>{
          this.jugadores = res.data;
          return this.jugadores;
    }))
  }

  getJugador(idx:any){
    return this.jugadores[idx];
  }
}
