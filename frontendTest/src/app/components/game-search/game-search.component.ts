import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Games } from '../../interfaces';
import { ApiGamesService } from '../../services/api-games.service';
import { GameCardComponent } from '../game-card/game-card.component';

@Component({
  selector: 'app-game-search',
  standalone: true,
  imports: [FormsModule, GameCardComponent],
  templateUrl: './game-search.component.html',
  styleUrl: './game-search.component.css'
})

export class GameSearchComponent {
  data: Games[] = [];
  dataSearched: Games[] = [];
  title: String = '';
  genre: String = '';
  platform: String = '';
  genreList: String[] = [];
  platformList: String[] = [];
  
  constructor(private apiGamesService: ApiGamesService) { }
  
  ngOnInit(): void {
    this.getGames();
  }

  /** Obtiene el listado de juegos provenientes del servicio. **/
  getGames() {
    this.apiGamesService.getGames().subscribe(games => {
      this.data = games.sort((a, b) => { return a.title.localeCompare(b.title)});;
      this.dataSearched = this.data;
      this.platformList = Array.from(new Set(this.data.map((game) => game.platform.trim()))).sort((a, b) => { return a.localeCompare(b)});
      this.genreList = Array.from(new Set(this.data.map((game) => game.genre.trim()))).sort((a, b) => { return a.localeCompare(b)});
    });
  }

  /** Filtra el listado de juegos, según los campos ingresados. **/
  searchGame() {
    this.dataSearched = this.data.filter((game) => {
      let allow = true;
      if(this.title) {
        allow = allow && game.title.toLowerCase().trim().includes(this.title.toLowerCase().trim());
      }
      if (this.platform != '') {
        allow = allow && game.platform.toLowerCase().trim() === this.platform.toLowerCase().trim();
      }
      if (this.genre) {
        allow = allow && game.genre.toLowerCase().trim() === this.genre.toLowerCase().trim();
      }

      return allow;
    }).sort((a, b) => { return a.title.localeCompare(b.title)});
  }

  /** Limpia los campos de búsqueda. **/
  cleanFilter() {
    this.title = '';
    this.genre = '';
    this.platform = '';

    this.dataSearched = this.data;
  }
}
