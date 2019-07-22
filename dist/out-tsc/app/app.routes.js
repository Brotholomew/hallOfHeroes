"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./home/home.component");
var heroes_component_1 = require("./heroes/heroes.component");
var modify_component_1 = require("./modify/modify.component");
var arena_component_1 = require("./arena/arena.component");
var army_selector_component_1 = require("./army-selector/army-selector.component");
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent,
    },
    {
        path: 'modify',
        component: modify_component_1.ModifyComponent,
    },
    {
        path: 'arena',
        component: arena_component_1.ArenaComponent,
    },
    {
        path: 'armySelection',
        component: army_selector_component_1.ArmySelectorComponent,
    },
];
