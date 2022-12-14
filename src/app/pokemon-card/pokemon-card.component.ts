import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  //Abaixo é uma var que muda o número 1 para 001
  public leadingZero(str: string | number, size :number = 3): string {
    let s = String(str);

    while (s.length < (size || 2)) {
      s = '0' + s;
    }    

    return s;
  }
}