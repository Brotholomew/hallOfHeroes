import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { HeroListService } from '../hero-list.service';
import { DarkModeService } from '../dark-mode.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {
  @Input() hero: number
  constructor(
     public heroList: HeroListService,
     public darkMode: DarkModeService,
  ) { }

  ngOnInit() {
  }

  onFinish() {
    this.hero = undefined;
  }
}
