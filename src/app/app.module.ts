import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ModifyComponent } from './modify/modify.component';
import { ArenaComponent } from './arena/arena.component';
import { ArmySelectorComponent } from './army-selector/army-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    TopBarComponent,
    ModifyComponent,
    ArenaComponent,
    ArmySelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
