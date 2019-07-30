import { Component, OnInit } from '@angular/core';
import { HeroListService } from '../hero-list.service';
import { DarkModeService } from '../dark-mode.service';
import { TitleServiceService } from '../title-service.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Hero } from '../hero';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(
    public heroList: HeroListService,
    public darkMode: DarkModeService,
    public titleService: TitleServiceService,
  ) { }

  queue: Hero[] = [];

  ngOnInit() {
    window.alert('arena still in maintenance!');
    this.titleService.title = 'Arena';
    for (let hero of this.heroList.userArmy) {
      this.queue.push(hero);
    }
    for (let hero of this.heroList.pcArmy) {
      this.queue.push(hero);
    }
    if (this.queue.length !== 0){
      this.sort(this.queue);
    }
    
  }

  sort(array: Hero[]):void {
    let swap = true;
    while (swap) {
      swap = false;
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i].wisdom < array[i + 1].wisdom) {
          let temp:Hero = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;   
          swap = true; 
        }
      }
    }
  }

}
