import { Routes } from '@angular/router';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameSearchComponent } from './components/game-search/game-search.component';

export const routes: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: GameListComponent },
    { path: 'list/:id', component: GameDetailsComponent },
    { path: 'search', component: GameSearchComponent },
    { path: '**', redirectTo: '/' }
];
    