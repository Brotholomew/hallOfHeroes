import { Component, OnInit } from '@angular/core';
import { HeroListService } from '../hero-list.service';
import { DarkModeService } from '../dark-mode.service';
import { TitleServiceService } from '../title-service.service';
import { Hero } from '../hero';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-army-selector',
  templateUrl: './army-selector.component.html',
  styleUrls: ['./army-selector.component.css']
})
export class ArmySelectorComponent implements OnInit {

  constructor(
    public titleService: TitleServiceService,
    public heroList: HeroListService,
    public darkMode: DarkModeService,
    public router: Router,
  ) { }

  heroSearch: undefined;
  heroChoice = new FormControl('');
  randomNumber : number;
  userState = false;
  pcState = false;

  ngOnInit() {
    this.titleService.title = 'Choose your army!'
    //window.alert('this is a beta wersion of the arena site, the whole Hall of heroes app will grow, however now it is still in maitencance :p');
    //window.alert(Math.round(Math.random() * 10) % this.heroList.heroes.length);
  }

  onSelect() {
    if (this.heroChoice.value === '')
    { 
      window.alert('Please select a hero!');
    } else {
      this.heroList.userArmy.push(this.heroList.heroes[this.heroChoice.value]);
    }
  }

  onRandomize() {
    this.heroList.userArmy = [];
    this.heroList.pcArmy = [];
    for (let j = 0; j < this.randomNumber; j++) {
      this.heroList.userArmy.push(this.heroList.heroes[Math.round(Math.random() * 10) % this.heroList.heroes.length]);
      this.heroList.pcArmy.push(this.heroList.heroes[Math.round(Math.random() * 10) % this.heroList.heroes.length]);
    }
  }

  onDelete(i: number) {
    this.heroList.onUserArmyDelete(i);
  }

  onFight() {
    if (this.heroList.pcArmy.length === 0 || this.heroList.userArmy.length === 0)
    {
      window.alert('You cannot leave the armies blank! Use the randomize option if you don\'t care about your army');
    } else {
      this.router.navigate(['/arena']);
    }
  }
}

