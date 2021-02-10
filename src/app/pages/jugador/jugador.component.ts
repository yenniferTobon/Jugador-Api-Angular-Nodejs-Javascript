import { Component } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Datum } from '../../models/jugador.models'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styles: [
  ]
})
export class JugadorComponent {
  jugador:any = {};

  constructor(private activatedRoute: ActivatedRoute,
              private jugadorService: JugadorService) {
    this.activatedRoute.params.subscribe(params => {
      this.jugador = this.jugadorService.getJugador(params['id']);
    })
   }



}
