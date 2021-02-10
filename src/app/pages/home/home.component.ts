import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Datum } from '../../models/jugador.models'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jugadores: Datum[]= [];
  constructor(private jugadorService: JugadorService,
             private router: Router) { }

  ngOnInit() {
    this.jugadorService.getJugadores()
    .subscribe(resp => {
      this.jugadores = resp;
      console.log(resp);
    });
  }
  verJugador(idx:number){
    this.router.navigate(['/jugador', idx])
    console.log(idx);
  }
}
