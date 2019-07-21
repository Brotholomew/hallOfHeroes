import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AddHeroesComponent } from './add-heroes/add-heroes.component';
import { ModifyComponent } from './modify/modify.component';
import { ArenaComponent } from './arena/arena.component';
import { ArmySelectorComponent } from './army-selector/army-selector.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroesComponent,
    TopBarComponent,
    AddHeroesComponent,
    ModifyComponent,
    ArenaComponent,
    ArmySelectorComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
