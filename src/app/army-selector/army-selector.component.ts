import { Component, OnInit } from '@angular/core';
import { HeroListService } from '../hero-list.service';
import { DarkModeService } from '../dark-mode.service';
import { TitleServiceService } from '../title-service.service';
import { Hero } from '../hero';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

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
  ) { }

  heroForm = new FormControl('');

  ngOnInit() {
    this.titleService.title = 'Choose your army!'
    window.alert('this is a beta wersion of the arena site, the whole Hall of heroes app will grow, however now it is still in maitencance :p');
  }

  onSelect(i: number) {
    window.alert(i);
    this.heroList.userArmy.push(this.heroList.heroes[i]);
  }
}

