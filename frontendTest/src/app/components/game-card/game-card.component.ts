import { Component, Input } from '@angular/core';
import { Games } from '../../interfaces';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css'
})


export class GameCardComponent {
  @Input({ required: true }) id: String = '';
  @Input({ required: true }) title: String = '';
  @Input({ required: true }) thumbnail: String = '';
  @Input({ required: true }) platform: String = '';
  @Input({ required: true }) short_description: String = '';
  @Input({ required: true }) genre: String = '';
  @Input({ required: true }) lazyLoad: String = '';

  iconWindows: string = 'windows.svg';
  iconBrowser: string = 'browser.svg';
  iconWindowsBrowser: string = 'window&browser.svg';

  /* Muestra el icono correspondiente a la plataforma. */
  public getIconPlataform(plataform : String) {
    let response = ''
    switch(plataform) {
      case ('PC (Windows)'):
        response = this.iconWindows;
      break;
      case ('PC (Windows), Web Browser'):
        response = this.iconWindowsBrowser;
      break;
      case ('Web Browser'):
        response = this.iconBrowser;
      break;
    }

    return response;
  }
}