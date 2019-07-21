import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    public color: DarkModeService,
  ) {}
  darkState = this.color.darkState;
  ngOnInit() {
  }
}
