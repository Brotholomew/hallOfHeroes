import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ModifyComponent } from './modify/modify.component';
import { ArenaComponent } from './arena/arena.component';
import { ArmySelectorComponent } from './army-selector/army-selector.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full',
  },
  {
      path: 'home',
      component: HomeComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },
  {
    path: 'modify',
    component: ModifyComponent,
  },
  {
    path: 'arena',
    component: ArenaComponent,
  },
  {
    path: 'armySelection',
    component: ArmySelectorComponent,
  },
];
