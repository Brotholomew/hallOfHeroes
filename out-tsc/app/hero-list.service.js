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
var HeroListService = /** @class */ (function () {
    function HeroListService() {
        this.heroes = [
            {
                id: 0,
                name: 'Nxiur',
                type: 'God',
                details: 'God of nothing',
                wisdom: 7,
                might: 10,
                magic: 8,
                bonus: 5,
            },
            {
                id: 1,
                name: 'Havana',
                type: 'Human',
                details: 'Masturbator',
                wisdom: 4,
                might: 5,
                magic: 2,
                bonus: 0,
            },
        ];
        this.userArmy = [];
        this.pcArmy = [];
    }
    HeroListService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeroListService);
    return HeroListService;
}());
exports.HeroListService = HeroListService;
