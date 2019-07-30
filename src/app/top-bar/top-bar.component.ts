import { Component, OnInit } from '@angular/core';
import { DarkModeService } from '../dark-mode.service';
import { TitleServiceService } from '../title-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(
    public service: DarkModeService,
    public titleService: TitleServiceService) { }
  ngOnInit() {
  }

  onDarkMode() {
    if (this.service.darkState === false) {
      document.querySelector('body').style.cssText = 'background-image: linear-gradient(to bottom, #485563, #29323c)';
      this.service.darkState = true;
    } else {
      document.querySelector('body').style.cssText = 'background-image: linear-gradient(to bottom, #b0c4de, #e4b7b5)';
      this.service.darkState = false;
    }
    document.fgColor = this.service.darkState ? 'white' : 'black';
  }
}
