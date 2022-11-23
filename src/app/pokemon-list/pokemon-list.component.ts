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
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/051.png',
      number: 51,
      name: 'Dugtrio',
      types: [
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/052.png',
      number: 52,
      name: 'Meowth',
      types: [
        Type.Normal,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/053.png',
      number: 53,
      name: 'Persian',
      types: [
        Type.Normal,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/054.png',
      number: 54,
      name: 'Psyduck',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/055.png',
      number: 55,
      name: 'Golduck',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/056.png',
      number: 56,
      name: 'Mankey',
      types: [
        Type.Fighting,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/057.png',
      number: 57,
      name: 'Primeape',
      types: [
        Type.Fighting,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/058.png',
      number: 58,
      name: 'Growlithe',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/059.png',
      number: 59,
      name: 'Arcanine',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/060.png',
      number: 60,
      name: 'Poliwag',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/061.png',
      number: 61,
      name: 'Poliwhirl',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/062.png',
      number: 62,
      name: 'Poliwrath',
      types: [
        Type.Water,
        Type.Fighting,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/063.png',
      number: 63,
      name: 'Abra',
      types: [
        Type.Psychic,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/064.png',
      number: 64,
      name: 'Kadabra',
      types: [
        Type.Psychic,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png',
      number: 65,
      name: 'Alakazam',
      types: [
        Type.Psychic,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/066.png',
      number: 66,
      name: 'Machop',
      types: [
        Type.Fighting,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/067.png',
      number: 67,
      name: 'Machoke',
      types: [
        Type.Fighting,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/068.png',
      number: 68,
      name: 'Machamp',
      types: [
        Type.Fighting,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/069.png',
      number: 69,
      name: 'Bellsprout',
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/070.png',
      number: 70,
      name: 'Weepinbell',
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/071.png',
      number: 71,
      name: 'Victreebel',
      types: [
        Type.Grass,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/072.png',
      number: 72,
      name: 'Tentacool',
      types: [
        Type.Water,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/073.png',
      number: 73,
      name: 'Tentacruel',
      types: [
        Type.Water,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/074.png',
      number: 74,
      name: 'Geodude',
      types: [
        Type.Rock,
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/075.png',
      number: 75,
      name: 'Graveler',
      types: [
        Type.Rock,
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png',
      number: 76,
      name: 'Golem',
      types: [
        Type.Rock,
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/077.png',
      number: 77,
      name: 'Ponyta',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/078.png',
      number: 78,
      name: 'Rapidash',
      types: [
        Type.Fire,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/079.png',
      number: 79,
      name: 'Slowpoke',
      types: [
        Type.Water,
        Type.Psychic,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/080.png',
      number: 80,
      name: 'Slowbro',
      types: [
        Type.Water,
        Type.Psychic,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/081.png',
      number: 81,
      name: 'Magnemite',
      types: [
        Type.Electric,
        Type.Steel,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/082.png',
      number: 82,
      name: 'Magneton',
      types: [
        Type.Electric,
        Type.Steel,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png',
      number: 83,
      name: 'Farfetch´d',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/084.png',
      number: 84,
      name: 'Doduo',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/085.png',
      number: 85,
      name: 'Dodrio',
      types: [
        Type.Normal,
        Type.Flying,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/086.png',
      number: 86,
      name: 'Seel',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png',
      number: 87,
      name: 'Dewgong',
      types: [
        Type.Water,
        Type.Ice,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/088.png',
      number: 88,
      name: 'Grimer',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/089.png',
      number: 89,
      name: 'Muk',
      types: [
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/090.png',
      number: 90,
      name: 'Shellder',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/091.png',
      number: 91,
      name: 'Cloyster',
      types: [
        Type.Water,
        Type.Ice,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/092.png',
      number: 92,
      name: 'Gastly',
      types: [
        Type.Ghost,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/093.png',
      number: 93,
      name: 'Haunter',
      types: [
        Type.Ghost,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/094.png',
      number: 94,
      name: 'Gengar',
      types: [
        Type.Ghost,
        Type.Poison,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/095.png',
      number: 95,
      name: 'Onix',
      types: [
        Type.Rock,
        Type.Ground,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/096.png',
      number: 96,
      name: 'Drowzee',
      types: [
        Type.Psychic,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/097.png',
      number: 97,
      name: 'Hypno',
      types: [
        Type.Psychic,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/098.png',
      number: 98,
      name: 'Krabby',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/099.png',
      number: 99,
      name: 'Kingler',
      types: [
        Type.Water,
      ],
    },
    {
      image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/100.png',
      number: 100,
      name: 'Voltorb',
      types: [
        Type.Electric,
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