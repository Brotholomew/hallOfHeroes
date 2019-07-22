(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\r\n    padding: 0px;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    color: white;\r\n    display: block;\r\n    font-size: 55px;\r\n    margin-right: 10px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.title-container {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    height:20%;\r\n    margin: 1%;\r\n}\r\n\r\n.title-container:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n.main-container {\r\n    margin: 0;\r\n    padding: 0;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFjO0lBQWQsY0FBYztJQUNkLHlCQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDU1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGl0bGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OjIwJTtcclxuICAgIG1hcmdpbjogMSU7XHJcbn0gIFxyXG5cclxuLnRpdGxlLWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <a class=\"title-container\" [routerLink]=\"['/home']\">\r\n        <div style=\"margin: 0; padding: 0; text-align: right;\">\r\n            <h3 class=\"title\">Hall of</h3>\r\n            <h3 class=\"title\">Heroes</h3>\r\n        </div>\r\n        <img src=\"../assets/pathenon.png\" style=\"height: 90%; width: auto; object-fit: contain; margin: 0; flex-basis: 0; display: flexbox\"/>\r\n    </a>\r\n    <div class=\"center\" [style.background-color]=\"color.darkState ? '#000000' : '#7d9eae'\">\r\n        <app-top-bar></app-top-bar>\r\n        <div class=\"container\" style=\"margin:0; padding-top:0;\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dark_mode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dark-mode.service */ "./src/app/dark-mode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(color) {
        this.color = color;
        this.darkState = this.color.darkState;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_dark_mode_service__WEBPACK_IMPORTED_MODULE_1__["DarkModeService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-bar/top-bar.component */ "./src/app/top-bar/top-bar.component.ts");
/* harmony import */ var _modify_modify_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modify/modify.component */ "./src/app/modify/modify.component.ts");
/* harmony import */ var _arena_arena_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./arena/arena.component */ "./src/app/arena/arena.component.ts");
/* harmony import */ var _army_selector_army_selector_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./army-selector/army-selector.component */ "./src/app/army-selector/army-selector.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_6__["HeroesComponent"],
                _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_7__["TopBarComponent"],
                _modify_modify_component__WEBPACK_IMPORTED_MODULE_8__["ModifyComponent"],
                _arena_arena_component__WEBPACK_IMPORTED_MODULE_9__["ArenaComponent"],
                _army_selector_army_selector_component__WEBPACK_IMPORTED_MODULE_10__["ArmySelectorComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _modify_modify_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modify/modify.component */ "./src/app/modify/modify.component.ts");
/* harmony import */ var _arena_arena_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./arena/arena.component */ "./src/app/arena/arena.component.ts");
/* harmony import */ var _army_selector_army_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./army-selector/army-selector.component */ "./src/app/army-selector/army-selector.component.ts");





var routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"],
    },
    {
        path: 'heroes',
        component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_1__["HeroesComponent"],
    },
    {
        path: 'modify',
        component: _modify_modify_component__WEBPACK_IMPORTED_MODULE_2__["ModifyComponent"],
    },
    {
        path: 'arena',
        component: _arena_arena_component__WEBPACK_IMPORTED_MODULE_3__["ArenaComponent"],
    },
    {
        path: 'armySelection',
        component: _army_selector_army_selector_component__WEBPACK_IMPORTED_MODULE_4__["ArmySelectorComponent"],
    },
];


/***/ }),

/***/ "./src/app/arena/arena.component.css":
/*!*******************************************!*\
  !*** ./src/app/arena/arena.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FyZW5hL2FyZW5hLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/arena/arena.component.html":
/*!********************************************!*\
  !*** ./src/app/arena/arena.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  arena works!\n</p>\n"

/***/ }),

/***/ "./src/app/arena/arena.component.ts":
/*!******************************************!*\
  !*** ./src/app/arena/arena.component.ts ***!
  \******************************************/
/*! exports provided: ArenaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArenaComponent", function() { return ArenaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArenaComponent = /** @class */ (function () {
    function ArenaComponent() {
    }
    ArenaComponent.prototype.ngOnInit = function () {
    };
    ArenaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-arena',
            template: __webpack_require__(/*! ./arena.component.html */ "./src/app/arena/arena.component.html"),
            styles: [__webpack_require__(/*! ./arena.component.css */ "./src/app/arena/arena.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArenaComponent);
    return ArenaComponent;
}());



/***/ }),

/***/ "./src/app/army-selector/army-selector.component.css":
/*!***********************************************************!*\
  !*** ./src/app/army-selector/army-selector.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FybXktc2VsZWN0b3IvYXJteS1zZWxlY3Rvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/army-selector/army-selector.component.html":
/*!************************************************************!*\
  !*** ./src/app/army-selector/army-selector.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top:7px\">\n  <div class=\"vertical-container\" style=\"margin-top:0\">\n    <div class=\"container\">\n      <select>\n        <option value=\"\" disabled>please select a hero!</option>\n        <option *ngFor=\"let hero of heroList.heroes, index as i\">{{ hero.name }}</option>\n      </select>\n      <input type=\"text\" [formControl]=\"heroForm\"/>\n    </div>\n    <table>\n      <tr *ngFor=\"let hero of heroList.userArmy, index as i\">\n        <td class=\"id-td\">selected</td>\n        <td>{{ hero.name }}</td>\n      </tr>\n    </table>\n  </div>\n</div>\n  "

/***/ }),

/***/ "./src/app/army-selector/army-selector.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/army-selector/army-selector.component.ts ***!
  \**********************************************************/
/*! exports provided: ArmySelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmySelectorComponent", function() { return ArmySelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero-list.service */ "./src/app/hero-list.service.ts");
/* harmony import */ var _dark_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dark-mode.service */ "./src/app/dark-mode.service.ts");
/* harmony import */ var _title_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../title-service.service */ "./src/app/title-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArmySelectorComponent = /** @class */ (function () {
    function ArmySelectorComponent(titleService, heroList, darkMode) {
        this.titleService = titleService;
        this.heroList = heroList;
        this.darkMode = darkMode;
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
    }
    ArmySelectorComponent.prototype.ngOnInit = function () {
        this.titleService.title = 'Choose your army!';
        window.alert('this is a beta wersion of the arena site, the whole Hall of heroes app will grow, however now it is still in maitencance :p');
    };
    ArmySelectorComponent.prototype.onSelect = function (i) {
        window.alert(i);
        this.heroList.userArmy.push(this.heroList.heroes[i]);
    };
    ArmySelectorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-army-selector',
            template: __webpack_require__(/*! ./army-selector.component.html */ "./src/app/army-selector/army-selector.component.html"),
            styles: [__webpack_require__(/*! ./army-selector.component.css */ "./src/app/army-selector/army-selector.component.css")]
        }),
        __metadata("design:paramtypes", [_title_service_service__WEBPACK_IMPORTED_MODULE_3__["TitleServiceService"],
            _hero_list_service__WEBPACK_IMPORTED_MODULE_1__["HeroListService"],
            _dark_mode_service__WEBPACK_IMPORTED_MODULE_2__["DarkModeService"]])
    ], ArmySelectorComponent);
    return ArmySelectorComponent;
}());



/***/ }),

/***/ "./src/app/dark-mode.service.ts":
/*!**************************************!*\
  !*** ./src/app/dark-mode.service.ts ***!
  \**************************************/
/*! exports provided: DarkModeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeService", function() { return DarkModeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DarkModeService = /** @class */ (function () {
    function DarkModeService() {
        this.darkState = false;
    }
    DarkModeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DarkModeService);
    return DarkModeService;
}());



/***/ }),

/***/ "./src/app/hero-list.service.ts":
/*!**************************************!*\
  !*** ./src/app/hero-list.service.ts ***!
  \**************************************/
/*! exports provided: HeroListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroListService", function() { return HeroListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

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
                health: 5,
            },
            {
                id: 1,
                name: 'Havana',
                type: 'Human',
                details: 'Masturbator',
                wisdom: 4,
                might: 5,
                magic: 2,
                health: 3,
            },
        ];
        this.userArmy = [];
        this.pcArmy = [];
    }
    HeroListService.prototype.onUserArmyAppend = function (newInstance) {
        this.userArmy.push(newInstance);
    };
    HeroListService.prototype.onPcArmyAppend = function (newInstance) {
        this.pcArmy.push(newInstance);
    };
    HeroListService.prototype.onHeroesListAppend = function (newInstance) {
        this.heroes.push(newInstance);
    };
    HeroListService.prototype.onUserArmyDelete = function (i) {
        this.userArmy.splice(i, 1);
    };
    HeroListService.prototype.onPcArmyDelete = function (i) {
        this.pcArmy.splice(i, 1);
    };
    HeroListService.prototype.onHeroesListDelete = function (i) {
        this.heroes.splice(i, 1);
    };
    HeroListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HeroListService);
    return HeroListService;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.css":
/*!*********************************************!*\
  !*** ./src/app/heroes/heroes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".holder {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin-top: 0px;\r\n}\r\n\r\ntr {\r\n    cursor: pointer;\r\n}\r\n\r\ninput {\r\n    font-family: Stylish;\r\n    font-size: 20px;\r\n    border: 0;\r\n    background-color: transparent;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVyb2VzL2hlcm9lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQWM7SUFBZCxjQUFjO0lBQ2QsMEJBQStCO1lBQS9CLCtCQUErQjtJQUMvQiwrQkFBb0I7SUFBcEIsOEJBQW9CO1lBQXBCLG9CQUFvQjtJQUNwQiwwQkFBb0I7WUFBcEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLDhCQUE4QjtDQUNqQyIsImZpbGUiOiJzcmMvYXBwL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcblxyXG50ciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBTdHlsaXNoO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/heroes/heroes.component.html":
/*!**********************************************!*\
  !*** ./src/app/heroes/heroes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"padding: 0; justify-content: space-between; align-items: baseline\">\n  <div class=\"vertical-container\">\n    <div class=\"holder\">\n      <h3 style=\"margin: 0;\">Available heroes:</h3>\n      <button class=\"state-button\" [style.color]=\"darkMode.darkState ? 'white' : 'black'\" style=\"background-color: transparent; font-size: 20px; padding: 0; height: 30px; margin-top:7px; text-align: center;\" (click)=\"onModify()\" *ngIf=\"heroes.toString() !== ''\"><i class=\"fas fa-cog\"></i></button>\n    </div>\n    <div *ngIf=\"heroes.toString() === ''\">\n      There are no heroes here! Click below to add some!\n    </div>\n    <table style=\"border-color:black; border: 10px\">\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th>type</th>\n        <th>Details</th>\n      </tr>\n      <tr *ngFor=\"let hero of heroList.heroes; index as i\" (click)=\"onSelect(i)\">\n        <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">{{ hero.id }}</td>\n        <td [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\">{{ hero.name }}</td>\n        <td [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\">{{ hero.type }}</td>\n        <td [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\">{{ hero.details }}</td>\n        <Button class=\"state-button\" (click)=\"onDelete(i)\" *ngIf=\"state === 'on'\"><i class=\"fas fa-times\"></i></Button>\n      </tr>\n      <tr>\n        <td style=\"border-top-left-radius: 5px; border-bottom-left-radius: 5px;\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#3e5560'\"></td>\n        <td [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input [(ngModel)]=\"newHero.name\" placeholder=\"name\" (keyup.enter)=\"onAdd()\"/></td>\n        <td [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input [(ngModel)]=\"newHero.type\" placeholder=\"type\" (keyup.enter)=\"onAdd()\"></td>\n        <td [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input [(ngModel)]=\"newHero.details\" placeholder=\"details\" (keyup.enter)=\"onAdd()\"/></td>\n        <Button class=\"state-button\" (click)=\"onAdd()\"><i class=\"fas fa-plus\"></i></Button>\n      </tr>\n    </table>\n    <app-modify style=\"margin-top:10px;\" [hero]=\"selectedHero\"></app-modify>\n  </div>\n  <div class=\"vertical-container\" style=\"margin-left: 40px\">\n    <h3 style=\"margin-top: 0; margin-bottom: 3px;\">How this works?</h3>\n    <h2 style=\"margin-top: 0; margin-left: 10px; text-align: justify;\">This is a platform where you can create various heroes and then put them through a skirmish. To generate a new character just fill in the last empty cells of the hero table and click the plus button next to it. Heroes' skills are generated automatically, hovewer you can alter them by clicking at the rescpective hero.</h2>\n    <h2 style=\"margin-top: 3px; margin-left: 10px; margin-bottom: 3px; text-align: justify;\">Finished? Let's fight!</h2>\n    <Button style=\"margin-left: 10px\" [routerLink]=\"['/armySelection']\">Click here to enter the arena!</Button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _title_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../title-service.service */ "./src/app/title-service.service.ts");
/* harmony import */ var _hero_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hero-list.service */ "./src/app/hero-list.service.ts");
/* harmony import */ var _dark_mode_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dark-mode.service */ "./src/app/dark-mode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        if (this.newHero.name === undefined || this.newHero.type === undefined || this.newHero.details === undefined || this.newHero.name === '' || this.newHero.type === '' || this.newHero.details === '') {
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
            this.heroList.onHeroesListAppend(send);
            this.newHero.name = '';
            this.newHero.details = '';
            this.newHero.type = '';
        }
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.titleService.title = 'Heroes list';
    };
    HeroesComponent.prototype.onDelete = function (i) {
        this.heroList.onHeroesListDelete(i);
        if (this.heroList.heroes.toString() === '') {
            this.onModify();
        }
    };
    HeroesComponent.prototype.onSelect = function (i) {
        this.selectedHero = i;
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [_title_service_service__WEBPACK_IMPORTED_MODULE_1__["TitleServiceService"],
            _hero_list_service__WEBPACK_IMPORTED_MODULE_2__["HeroListService"],
            _dark_mode_service__WEBPACK_IMPORTED_MODULE_3__["DarkModeService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-heroes>\r\n  \r\n</app-heroes>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'Hall of Heroes';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modify/modify.component.css":
/*!*********************************************!*\
  !*** ./src/app/modify/modify.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\r\n    font-family: Stylish;\r\n    font-size: 20px;\r\n    border: 0;\r\n    background-color: transparent;\r\n}\r\n\r\n.end-td {\r\n    border-bottom-right-radius: 10px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.horizontal-container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kaWZ5L21vZGlmeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsOEJBQThCO0NBQ2pDOztBQUVEO0lBQ0ksaUNBQWlDO0lBQ2pDLDhCQUE4QjtDQUNqQzs7QUFFRDtJQUNJLHFCQUFjO0lBQWQsY0FBYztJQUNkLDBCQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsMEJBQW9CO1lBQXBCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL21vZGlmeS9tb2RpZnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBTdHlsaXNoO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5lbmQtdGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmhvcml6b250YWwtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/modify/modify.component.html":
/*!**********************************************!*\
  !*** ./src/app/modify/modify.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero != undefined\">\n  <div class=\"horizontal-container\">\n    <h3>Editing {{ heroList.heroes[hero].name | uppercase }}</h3>\n    <button (click)=\"onFinish()\" class=\"state-button\" style=\"padding: 0; background-color: transparent; font-size: 20px; color: #008000\"><i class=\"fas fa-check\"></i></button>\n  </div>\n  <table>\n    <tr>\n      <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">name: </td>\n      <td class=\"end-td\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input class=\"end-td\" [(ngModel)]=\"heroList.heroes[hero].name\"/> </td>\n    </tr>\n    <tr>\n      <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">type:</td>\n      <td class=\"end-td\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input class=\"end-td\" [(ngModel)]=\"heroList.heroes[hero].type\"/> </td>\n    </tr>\n    <tr>\n        <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">details:</td>\n        <td class=\"end-td\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input class=\"end-td\" [(ngModel)]=\"heroList.heroes[hero].details\"/> </td>\n    </tr>\n    <tr>\n          <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">wisdom:</td>\n          <td class=\"end-td\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input class=\"end-td\" [(ngModel)]=\"heroList.heroes[hero].wisdom\"/> </td>\n    </tr>\n    <tr>\n        <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">might:</td>\n        <td class=\"end-td\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input class=\"end-td\" [(ngModel)]=\"heroList.heroes[hero].might\"/> </td>\n    </tr>\n    <tr>\n        <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">magic:</td>\n        <td class=\"end-td\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input class=\"end-td\" [(ngModel)]=\"heroList.heroes[hero].magic\"/> </td>\n    </tr>\n    <tr>\n        <td class=\"id-td\" [style.background-color]=\"darkMode.darkState ? '#cc6200' : '#3e5560'\">health:</td>\n        <td class=\"end-td\" [style.background-color]=\"darkMode.darkState ? '#b5b5b5' : '#e3e9ec'\"><input class=\"end-td\" [(ngModel)]=\"heroList.heroes[hero].health\"/> </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/modify/modify.component.ts":
/*!********************************************!*\
  !*** ./src/app/modify/modify.component.ts ***!
  \********************************************/
/*! exports provided: ModifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyComponent", function() { return ModifyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero-list.service */ "./src/app/hero-list.service.ts");
/* harmony import */ var _dark_mode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dark-mode.service */ "./src/app/dark-mode.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ModifyComponent.prototype, "hero", void 0);
    ModifyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify',
            template: __webpack_require__(/*! ./modify.component.html */ "./src/app/modify/modify.component.html"),
            styles: [__webpack_require__(/*! ./modify.component.css */ "./src/app/modify/modify.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_list_service__WEBPACK_IMPORTED_MODULE_1__["HeroListService"],
            _dark_mode_service__WEBPACK_IMPORTED_MODULE_2__["DarkModeService"]])
    ], ModifyComponent);
    return ModifyComponent;
}());



/***/ }),

/***/ "./src/app/title-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/title-service.service.ts ***!
  \******************************************/
/*! exports provided: TitleServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleServiceService", function() { return TitleServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleServiceService = /** @class */ (function () {
    function TitleServiceService() {
        this.title = "";
    }
    TitleServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TitleServiceService);
    return TitleServiceService;
}());



/***/ }),

/***/ "./src/app/top-bar/top-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    font-family: TravelingTypewriter;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    color: beige;\r\n}\r\n\r\n.container {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: row;\r\n    height: 0%;\r\n    background-color: transparent;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    margin: 0;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    position: -webkit-sticky;\r\n    border-radius: 20px;\r\n}\r\n\r\nbutton {\r\n    background-color: transparent;\r\n    border: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCOztBQUVEO0lBQ0kscUJBQWM7SUFBZCxjQUFjO0lBQ2QsK0JBQW9CO0lBQXBCLDhCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QiwwQkFBK0I7WUFBL0IsK0JBQStCO0lBQy9CLDBCQUFvQjtZQUFwQixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDhCQUE4QjtJQUM5QixVQUFVO0NBQ2IiLCJmaWxlIjoic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgZm9udC1mYW1pbHk6IFRyYXZlbGluZ1R5cGV3cml0ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiBiZWlnZTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGhlaWdodDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gICAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/top-bar/top-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [style.background-color]=\"service.darkState ? '#cc6200' : '#5c8193'\">\n    <a>{{ titleService.title }}</a>\n    <Button [style.color]=\"service.darkState ? 'white' : 'black'\" (click)=\"onDarkMode()\"><i class=\"fas fa-moon\"></i></Button>\n</div>\n"

/***/ }),

/***/ "./src/app/top-bar/top-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-bar/top-bar.component.ts ***!
  \**********************************************/
/*! exports provided: TopBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopBarComponent", function() { return TopBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dark_mode_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dark-mode.service */ "./src/app/dark-mode.service.ts");
/* harmony import */ var _title_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../title-service.service */ "./src/app/title-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__(/*! ./top-bar.component.html */ "./src/app/top-bar/top-bar.component.html"),
            styles: [__webpack_require__(/*! ./top-bar.component.css */ "./src/app/top-bar/top-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_dark_mode_service__WEBPACK_IMPORTED_MODULE_1__["DarkModeService"],
            _title_service_service__WEBPACK_IMPORTED_MODULE_2__["TitleServiceService"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Qsync\Synced\Programy\_WebDev\Angular with Nativescript\hallOfHeroes\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map