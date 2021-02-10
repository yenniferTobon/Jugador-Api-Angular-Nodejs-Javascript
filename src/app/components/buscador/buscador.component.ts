import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  jugadores:any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
              private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.jugadores = this.jugadorService.buscarJugadores(params['termino']);
      console.log(this.jugadores);
    })
  }

}
