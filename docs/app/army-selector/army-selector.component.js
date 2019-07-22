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
var hero_list_service_1 = require("../hero-list.service");
var title_service_service_1 = require("../title-service.service");
var ArmySelectorComponent = /** @class */ (function () {
    function ArmySelectorComponent(titleService, heroList) {
        this.titleService = titleService;
        this.heroList = heroList;
    }
    ArmySelectorComponent.prototype.ngOnInit = function () {
        this.titleService.title = 'Choose your army!';
    };
    ArmySelectorComponent = __decorate([
        core_1.Component({
            selector: 'app-army-selector',
            templateUrl: './army-selector.component.html',
            styleUrls: ['./army-selector.component.css']
        }),
        __metadata("design:paramtypes", [title_service_service_1.TitleServiceService,
            hero_list_service_1.HeroListService])
    ], ArmySelectorComponent);
    return ArmySelectorComponent;
}());
exports.ArmySelectorComponent = ArmySelectorComponent;
