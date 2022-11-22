import { Component } from '@angular/core';

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
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/005.png',
      number: 5,
      name: 'Charmeleon',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png',
      number: 6,
      name: 'Charizard',
      types: [
        Type.Fire,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png',
      number: 7,
      name: 'Squirtle',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png',
      number: 8,
      name: 'Wartortle',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png',
      number: 9,
      name: 'Blastoise',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/010.png',
      number: 10,
      name: 'Caterpie',
      types: [
        Type.Bug,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/011.png',
      number: 11,
      name: 'Metapod',
      types: [
        Type.Bug,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/012.png',
      number: 12,
      name: 'Butterfree',
      types: [
        Type.Bug,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/013.png',
      number: 13,
      name: 'Weedle',
      types: [
        Type.Bug,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/014.png',
      number: 14,
      name: 'Kakuna',
      types: [
        Type.Bug,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/015.png',
      number: 15,
      name: 'Beedrill',
      types: [
        Type.Bug,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/016.png',
      number: 16,
      name: 'Pidgey',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/017.png',
      number: 17,
      name: 'Pidgeotto',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/018.png',
      number: 18,
      name: 'Pidgeot',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/019.png',
      number: 19,
      name: 'Rattata',
      types: [
        Type.Normal,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/020.png',
      number: 20,
      name: 'Raticate',
      types: [
        Type.Normal,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/021.png',
      number: 21,
      name: 'Spearow',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/022.png',
      number: 22,
      name: 'Fearow',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png',
      number: 23,
      name: 'Ekans',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/024.png',
      number: 24,
      name: 'Arbok',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png',
      number: 25,
      name: 'Pikachu',
      types: [
        Type.Electric,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/026.png',
      number: 26,
      name: 'Raichu',
      types: [
        Type.Electric,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/027.png',
      number: 27,
      name: 'Sandshrew',
      types: [
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/028.png',
      number: 28,
      name: 'Sandslash',
      types: [
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/029.png',
      number: 29,
      name: 'Nidoran ♀',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/030.png',
      number: 30,
      name: 'Nidorina',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/031.png',
      number: 31,
      name: 'Nidoqueen',
      types: [
        Type.Poison,
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/032.png',
      number: 32,
      name: 'Nidoran ♂',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/033.png',
      number: 33,
      name: 'Nidorino',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/034.png',
      number: 34,
      name: 'Nidoking',
      types: [
        Type.Poison,
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/035.png',
      number: 35,
      name: 'Clefairy',
      types: [
        Type.Fairy,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/036.png',
      number: 36,
      name: 'Clefable',
      types: [
        Type.Fairy,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/037.png',
      number: 37,
      name: 'Vulpix',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/038.png',
      number: 38,
      name: 'Ninetales',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/039.png',
      number: 39,
      name: 'Jigglypuff',
      types: [
        Type.Normal,
        Type.Fairy,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/040.png',
      number: 40,
      name: 'Wigglytuff',
      types: [
        Type.Normal,
        Type.Fairy,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/041.png',
      number: 41,
      name: 'Zubat',
      types: [
        Type.Poison,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/042.png',
      number: 42,
      name: 'Golbat',
      types: [
        Type.Poison,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/043.png',
      number: 43,
      name: 'Oddish',
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/044.png',
      number: 44,
      name: 'Gloom',
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/045.png',
      number: 45,
      name: 'Vileplume',
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/046.png',
      number: 46,
      name: 'Paras',
      types: [
        Type.Bug,
        Type.Grass,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/047.png',
      number: 47,
      name: 'Parasect',
      types: [
        Type.Bug,
        Type.Grass,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/048.png',
      number: 48,
      name: 'Venonat',
      types: [
        Type.Bug,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/049.png',
      number: 49,
      name: 'Venomoth',
      types: [
        Type.Bug,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/050.png',
      number: 50,
      name: 'Diglett',
      types: [
        Type.Ground,
      ],
    },
  ];
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