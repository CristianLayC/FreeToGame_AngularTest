import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Games } from '../interfaces';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiGamesService {
  private urlGames = environment.apiUrl;
  private urlGameDetail = environment.apiDetailUrl;

  constructor(private http: HttpClient) { }

  /* Obtiene el listado de juegos. */
  getGames(): Observable<Games[]> {
    return this.http.get<Games[]>( this.urlGames );
  }

  /* Obtiene el detalle del juego indicado. */
  getGamesById(id: number): Observable<Games> {
    return this.http.get<Games>( `${this.urlGameDetail}${id}` );
  }
} 
