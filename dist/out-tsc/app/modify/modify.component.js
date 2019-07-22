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
var dark_mode_service_1 = require("../dark-mode.service");
var ModifyComponent = /** @class */ (function () {
    function ModifyComponent(heroList, darkMode) {
        this.heroList = heroList;
        this.darkMode = darkMode;
    }
    ModifyComponent.prototype.ngOnInit = function () {
    };
    ModifyComponent.prototype.onFinish = function () {
        this.hero = undefined;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ModifyComponent.prototype, "hero", void 0);
    ModifyComponent = __decorate([
        core_1.Component({
            selector: 'app-modify',
            templateUrl: './modify.component.html',
            styleUrls: ['./modify.component.css']
        }),
        __metadata("design:paramtypes", [hero_list_service_1.HeroListService,
            dark_mode_service_1.DarkModeService])
    ], ModifyComponent);
    return ModifyComponent;
}());
exports.ModifyComponent = ModifyComponent;
