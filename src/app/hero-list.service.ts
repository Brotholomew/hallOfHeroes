import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class HeroListService {
  heroes = [
    {
      id: 0,
      name: 'Nxiur',
      type: 'God',
      details: 'God of nothing',
      wisdom: 7,
      might: 10,
      magic: 8,
      health: 5,
    },
    {
      id: 1,
      name: 'Havana',
      type: 'Human',
      details: 'Masturbator',
      wisdom: 4,
      might: 5,
      magic: 2,
      health: 3,
    },
  ];
  userArmy = [];
  pcArmy = [];
  constructor() { }

  onUserArmyAppend(newInstance: Hero) {
    this.userArmy.push(newInstance);
  }

  onPcArmyAppend(newInstance: Hero) {
    this.pcArmy.push(newInstance);
  }

  onHeroesListAppend(newInstance: Hero) {
    this.heroes.push(newInstance);
  }

  onUserArmyDelete(i: number) {
    this.userArmy.splice(i, 1);
  }

  onPcArmyDelete(i: number) {
    this.pcArmy.splice(i, 1);
  }

  onHeroesListDelete(i: number) {
    this.heroes.splice(i, 1);
  }
  
}
