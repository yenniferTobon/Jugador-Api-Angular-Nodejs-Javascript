import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JugadorComponent } from './pages/jugador/jugador.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'jugador/:id', component: JugadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,  { useHash: true });
