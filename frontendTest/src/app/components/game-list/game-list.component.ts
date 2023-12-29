import { Component } from '@angular/core';
import { ApiGamesService } from '../../services/api-games.service';
import { Games } from '../../interfaces';
import { NgOptimizedImage } from '@angular/common'
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgOptimizedImage, GameCardComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {

  data: Games[] = [];
  iconWindows: string = 'windows.svg';
  iconBrowser: string = 'browser.svg';

  constructor(private apiGamesService: ApiGamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  /** Obtiene el listado de juegos provenientes del servicio. **/
  getGames() {
    this.apiGamesService.getGames().subscribe(games => {
      this.data = games.sort((a, b) => { return a.title.localeCompare(b.title)});
    });
  }

  /** Muestra el icono correspondiente a la plataforma. **/
  public getIconPlataform(plataform : String) {
    let response = ''
    switch(plataform) {
      case ('PC (Windows)'):
        response = this.iconWindows;
      break;
      case ('PC (Windows), Web Browser'):
        response = this.iconWindows;
      break;
      case ('Web Browser'):
        response = this.iconBrowser;
      break;
    }

    return response;
  }
}
