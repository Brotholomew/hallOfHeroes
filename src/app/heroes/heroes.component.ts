import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { TitleServiceService } from '../title-service.service';
import { HeroListService } from '../hero-list.service';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  state = 'off';
  modifierTogglerText = 'Modify the list!';
  selectedHero: number;

  constructor(
    public titleService: TitleServiceService,
    public heroList: HeroListService,
    public darkMode: DarkModeService,
  ) {}

  heroes = this.heroList.heroes;
  newHero: Hero = {
    id: undefined,
    name: undefined,
    type: undefined,
    details: undefined,
    wisdom: undefined,
    might: undefined,
    magic: undefined,
    health: undefined,
  }

  onModify() {
    if (this.state === 'off') {
      this.state = 'on';
      this.modifierTogglerText = 'Finish!';
    } else {
      this.state = 'off';
      this.modifierTogglerText = 'Modify the list!';
    }
  }

  onAdd() {
    if (this.newHero.name === undefined || this.newHero.type === undefined || this.newHero.details === undefined || this.newHero.name === '' || this.newHero.type === '' || this.newHero.details === '')
      {window.alert('Do not leave anything empty!')} 
    else {
      let send = {
        id: this.heroList.heroes.length,
        name:this.newHero.name,
        type: this.newHero.type,
        details: this.newHero.details,
        wisdom: Math.floor(Math.random() * 10) + 1,
        might: Math.floor(Math.random() * 10) + 1,
        magic: Math.floor(Math.random() * 10) + 1,
        health: Math.floor(Math.random() * 10) + 1,
      }
      this.heroList.onHeroesListAppend(send);
      this.newHero.name = '';
      this.newHero.details = '';
      this.newHero.type = '';
    }
  }

  ngOnInit() {
    this.titleService.title = 'Heroes list';
  }

  onDelete(i: number) {
    this.heroList.onHeroesListDelete(i);
    if(this.heroList.heroes.toString() === '') {
      this.onModify();
    }
  }

  onSelect(i: number) {
    this.selectedHero = i;
  }

}
