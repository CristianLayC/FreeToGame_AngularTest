import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";
import { ActivatedRoute } from '@angular/router';
import { ApiGamesService } from '../../services/api-games.service';
import { Games } from '../../interfaces';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [],
  templateUrl: './game-details.component.html',
  styleUrl: './game-details.component.css'
})
export class GameDetailsComponent {
  id: any = '';
  data?: Games;
  pipe = new DatePipe('en-US');
  
  constructor(public route: ActivatedRoute, private apiGamesService: ApiGamesService){}
  
  ngOnInit() : void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getDetails();
  }

  /** Obtiene el detalle del juego seleccionado. **/
  getDetails() {
    this.apiGamesService.getGamesById( this.id ).subscribe(games => {
      this.data = games;
    });
  }
}
