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
var dark_mode_service_1 = require("../dark-mode.service");
var title_service_service_1 = require("../title-service.service");
var TopBarComponent = /** @class */ (function () {
    function TopBarComponent(service, titleService) {
        this.service = service;
        this.titleService = titleService;
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent.prototype.onDarkMode = function () {
        if (this.service.darkState === false) {
            document.querySelector('body').style.cssText = 'background-image: linear-gradient(to top, #808080, #000000)';
            this.service.darkState = true;
        }
        else {
            document.querySelector('body').style.cssText = 'background-image: linear-gradient(to bottom, #b0c4de, #e4b7b5)';
            this.service.darkState = false;
        }
        document.fgColor = this.service.darkState ? 'white' : 'black';
    };
    TopBarComponent = __decorate([
        core_1.Component({
            selector: 'app-top-bar',
            templateUrl: './top-bar.component.html',
            styleUrls: ['./top-bar.component.css']
        }),
        __metadata("design:paramtypes", [dark_mode_service_1.DarkModeService,
            title_service_service_1.TitleServiceService])
    ], TopBarComponent);
    return TopBarComponent;
}());
exports.TopBarComponent = TopBarComponent;
