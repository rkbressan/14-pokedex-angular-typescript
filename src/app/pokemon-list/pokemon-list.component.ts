import { Component } from '@angular/core';
import { PokemonService } from '../_services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent {
  //Criei uma var pública chamada pokemons
  public pokemons: Pokemon[] = [
    {
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png',
        number: 1,
        name: 'Bulbasaur',
        types: [
          Type.Grass,
          Type.Poison,
        ],
      },
      {
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png',
        number: 2,
        name: 'Ivysaur',
        types: [
          Type.Grass,
          Type.Poison,
        ],
      },
      {
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png',
        number: 3,
        name: 'Venosaur',
        types: [
          Type.Grass,
          Type.Poison,
        ],
      },
      {
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png',
        number: 4,
        name: 'Charmander',
        types: [
          Type.Fire,
        ],
      },
    ];
  
  constructor(
    public pokemonService: PokemonService
    ) {
    }
}

//Criei uma interface para o tipo
export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

//Criei o enum para os tipos
//É recomendado repetir o nome
export enum Type {
    Bug = 'Bug',
    Dark = 'Dark',
    Dragon = 'Dragon',
    Electric = 'Electric',
    Fairy = 'Fairy',
    Fighting = 'Fighting',
    Fire = 'Fire',
    Flying = 'Flying',
    Ghost = 'Ghost',
    Grass = 'Grass',
    Ground = 'Ground',
    Ice = 'Ice',
    Normal = 'Normal',
    Poison = 'Poison',
    Psychic = 'Psychic',
    Rock = 'Rock',
    Steel = 'Steel',
    Water = 'Water'
}