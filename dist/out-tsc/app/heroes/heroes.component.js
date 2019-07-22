"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var title_service_service_1 = require("../title-service.service");
var hero_list_service_1 = require("../hero-list.service");
var dark_mode_service_1 = require("../dark-mode.service");
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(titleService, heroList, darkMode) {
        this.titleService = titleService;
        this.heroList = heroList;
        this.darkMode = darkMode;
        this.state = 'off';
        this.modifierTogglerText = 'Modify the list!';
        this.heroes = this.heroList.heroes;
        this.newHero = {
            id: undefined,
            name: undefined,
            type: undefined,
            details: undefined,
            wisdom: undefined,
            might: undefined,
            magic: undefined,
            health: undefined,
        };
    }
    HeroesComponent.prototype.onModify = function () {
        if (this.state === 'off') {
            this.state = 'on';
            this.modifierTogglerText = 'Finish!';
        }
        else {
            this.state = 'off';
            this.modifierTogglerText = 'Modify the list!';
        }
    };
    HeroesComponent.prototype.onAdd = function () {
        if (this.newHero.name === undefined || this.newHero.type === undefined || this.newHero.details === undefined) {
            window.alert('Do not leave anything empty!');
        }
        else {
            var send = {
                id: this.heroList.heroes.length,
                name: this.newHero.name,
                type: this.newHero.type,
                details: this.newHero.details,
                wisdom: Math.floor(Math.random() * 10) + 1,
                might: Math.floor(Math.random() * 10) + 1,
                magic: Math.floor(Math.random() * 10) + 1,
                health: Math.floor(Math.random() * 10) + 1,
            };
            this.heroList.heroes.push(send);
            this.newHero.name = '';
            this.newHero.details = '';
            this.newHero.type = '';
        }
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.titleService.title = 'Heroes list';
    };
    HeroesComponent.prototype.onDelete = function (i) {
        this.heroList.heroes.splice(i, 1);
        if (this.heroList.heroes.toString() === '') {
            this.onModify();
        }
    };
    HeroesComponent.prototype.onSelect = function (i) {
        this.selectedHero = i;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'app-heroes',
            templateUrl: './heroes.component.html',
            styleUrls: ['./heroes.component.css']
        }),
        __metadata("design:paramtypes", [title_service_service_1.TitleServiceService,
            hero_list_service_1.HeroListService,
            dark_mode_service_1.DarkModeService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
