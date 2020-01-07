(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-salon-salon-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app sidebar-mini rtl\">\n  <nav class=\"navbar navbar-expand-lg navbar-dark  logo-left\">\n    <div class=\"mobile-logo\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item d-lg-block\">\n          <button class=\"header-post-btn\">\n            <div class=\"masthead-search-indicator\"></div>\n          </button>\n        </li>\n        <li class=\"nav-item dropdown d-lg-block\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            href=\"#\"\n            id=\"navbardrop\"\n            data-toggle=\"dropdown\"\n          >\n            <span class=\"badge badge-light\">\n              <img src=\"../../../assets/images/prof-img.jpg\" />\n            </span>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\">Edit Profile</a>\n            <a class=\"dropdown-item\" href=\"#\">Change Password</a>\n            <a class=\"dropdown-item\" href=\"#\">Logout</a>\n          </div>\n        </li>\n      </ul>\n\n      <button class=\"navbar-toggler\" type=\"button\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </div>\n    <button\n      type=\"button\"\n      class=\"hamburger-menu app-sidebar__toggle\"\n      data-toggle=\"sidebar\"\n      aria-label=\"Hide Sidebar\"\n      (click)=\"toggleSidebar()\"\n      href=\"javascript:void(0)\"\n    >\n  \n      <img src=\"../../../assets/images/menu-arrow.png\" />\n    </button>\n\n    <a class=\"navbar-brand abs-center-x d-xl-block\" href=\"#\"\n      ><img src=\"../../../assets/images/logo.svg\" alt=\"\"\n    /></a>\n\n    <div\n      class=\"header-menu transition right-sidebar navbar-collapse\"\n      id=\"rightSidebar\"\n    >\n      <ul class=\"navbar-nav left-nav d-none-menu\">\n      \n      </ul>\n\n      <ul class=\"navbar-nav d-none-menu\">\n       \n\n        <li class=\"nav-item dropdown d-lg-block\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            href=\"#\"\n            id=\"navbardrop\"\n            data-toggle=\"dropdown\"\n          >\n            <span class=\"badge badge-light\">\n              <img src=\"../../../assets/images/prof-img.jpg\" />\n            </span>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"#\">Edit Profile</a>\n            <a class=\"dropdown-item\" href=\"#\">Change Password</a>\n            <a class=\"dropdown-item\" href=\"#\">Logout</a>\n          </div>\n        </li>\n      </ul>\n      <ul class=\"search-notif-mob\">\n        <li>\n          <input\n            type=\"search\"\n            placeholder=\"type here to search..\"\n            id=\"masthead-search-search\"\n          />\n          <button type=\"submit\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              width=\"20\"\n              height=\"20\"\n              viewBox=\"0 0 20 20\"\n            >\n              <image\n                id=\"magnifying-glass\"\n                width=\"20\"\n                height=\"20\"\n                xlink:href=\"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABgUlEQVQ4ja2UPUscYRhFj2YxrIigW+U/mDpJaSsSAxFJJaTRbCAhjSCKCFpErNKElCFVKhvxL0SsLE0hglhYKZtA0LAQT3jx2WV33BndxQuXGWbe58z7cZ/pU8loEJgFpoDHQAWoAQfANvAN+J0taigLnAE+AQ+BLWAXOAdGgCfANPAAWAC+diQmYHjRa22qQy3PW11WV9V/Me7GmMbNTMBmc0BZvwjofCfgoHqa98UCL6m/1EoW+EY9K1hmngfUE3W59X1/nGY6gD95J5ejOvA96pvqj2j86BLWUKobywIrEY1elOrKkd0msBY560UjsfSLVmDqgKc9AlPYf2aXnNrpZUy9G5WAV8BOW406HLFZ6TI279RL9VGnTnkdyX9+R9i4Wlc/5LVe8kZAFyO0nUClmFk9WvVtETB5LtrpWP2oTqrP1Al1TT2MZb4P2JVaLQImj0af7qkXMZO/6r66ntmzBGuD3mW/0i+r6H0bNB39bbq8ZcCXuH5uxOa+XFWP/gOTjt3QTnqGnQAAAABJRU5ErkJggg==\"\n              />\n            </svg>\n          </button>\n        </li>\n        <li>\n          <a class=\"nav-link\" href=\"#\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n              width=\"17\"\n              height=\"21\"\n              viewBox=\"0 0 17 21\"\n            >\n              <image\n                id=\"notification\"\n                width=\"17\"\n                height=\"21\"\n                xlink:href=\"data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAYAAACg/AXsAAAA50lEQVQ4jaWUPwrCMBTGP/9MgiKI6OKoSweVTg5CLyA4eAG9krdw9QZeQHsPhQ7FoYOfFBKN7Us09Qcl5L2PHyEvFCRd357kVa3WnEsQ8JPAlq3DTr/QKe5f2CQjALtCbavqZYTjbUimlElV33knS5KZRaDJVM4qib8INLFNEv4o0ITSdGaOSUlMpem0PSUdSVIZU9L0lDSkkww8JUNJsvCUvPNqTBOSD88R5/mx+U4OngLNQUuiigJNVCN5rvDQTC65ZA2g+4ckySVSowXgCKBn1G4AVgDupbTj9zgneSKZqDXfl3MknlUYZ6hvlXpUAAAAAElFTkSuQmCC\"\n              />\n            </svg>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <div class=\"app-sidebar__overlay\" data-toggle=\"sidebar\"></div>\n  <aside class=\"app-sidebar\">\n    <ul class=\"app-menu\">\n      <li>\n        <a class=\"app-menu__item active\" href=\"#\">\n          <span class=\"app-menu__label\">Dashboard</span>\n         \n        </a>\n      </li>\n\n      <li>\n        <a class=\"app-menu__item\" href=\"#\">\n          <span class=\"app-menu__label\">Business profile</span>\n        </a>\n      </li>\n      <li>\n        <a class=\"app-menu__item\" href=\"#\">\n          <span class=\"app-menu__label\">Manage Services</span>\n        </a>\n      </li>\n      <li>\n        <a class=\"app-menu__item\" href=\"#\">\n          <span class=\"app-menu__label\">Manage Time Slots</span>\n        </a>\n      </li>\n      <li>\n        <a class=\"app-menu__item\" href=\"#\">\n          <span class=\"app-menu__label\">New Bookings</span>\n        </a>\n      </li>\n      <li>\n        <a class=\"app-menu__item\" href=\"#\">\n          <span class=\"app-menu__label\">Payments History</span>\n        </a>\n      </li>\n      <li>\n        <a class=\"app-menu__item\" href=\"#\">\n          <span class=\"app-menu__label\">Account Info</span>\n        </a>\n      </li>\n      <li>\n        <a class=\"app-menu__item\" href=\"#\">\n          <span class=\"app-menu__label\">Cancelled Bookings</span>\n        </a>\n      </li>\n    </ul>\n  </aside>\n\n  <router-outlet></router-outlet>\n\n \n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/profile/profile.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/profile/profile.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"main-wraper app-content\">\n        <div class=\"project-detail-wraper\">\n          <div class=\"project-name-header\">\n            <div class=\"project-heading\">\n              PROFILE\n            </div>\n          </div>\n    \n          <div class=\"box\">\n            <div class=\"dash-box-content\">\n              <div class=\"dash-graph-large\">\n                <div class=\"box-header with-border\">\n                  <h2 class=\"box-title\">Business Profile</h2>\n                </div>\n                <div class=\"box-body table-sec\">\n                  <div class=\"table-responsive   dashboard-table\">\n                    <table class=\"table mb-0\">\n                      <thead>\n                        <th></th>\n                        <th>Name</th>\n                        <th>Address</th>\n                        <th>Action</th>\n                      </thead>\n                      <tbody>\n                        <tr>\n                          <td>\n                            <a href=\"\">\n                              <img src=\"../../../assets/images/salon.svg\" />\n                            </a>\n                          </td>\n                          <td>\n                            <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              placeholder=\"Enter Name\"\n                            />\n                          </td>\n                          <td>\n                            <input\n                              type=\"text\"\n                              class=\"form-control\"\n                              placeholder=\"Enter Address\"\n                            />\n                          </td>\n                          <td>\n                            <i\n                              class=\"fa fa-pencil edit-icon\"\n                              aria-hidden=\"true\"\n                            ></i>\n                            <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div> -->\n\n<div class=\"profileOverlay\">\n\n    <div id=\"profileArea\">\n        <h2> Add Salon Details</h2>\n        <form [formGroup]=\"submitSalonDetails\" class=\"salonDetailSave\">\n            <input type=\"text\" class=\"form-control fields\" placeholder=\"Name\" formControlName=\"name\">\n            <input type=\"file\" class=\"image\" placeholder=\"image\" #file>\n            <button class=\"btn btn-primary btn-sign-in \" (click)=\"uploadImage($event)\">Upload</button>\n\n            <input type=\"text\" class=\"form-control fields\" placeholder=\"Contact\" formControlName=\"contact\">\n            <input type=\"text\" class=\"form-control fields\" placeholder=\"Address\" formControlName=\"salonaddress\">\n            <button class=\"btn btn-primary btn-sign-in\" [disabled]=\"submitSalonDetails.invalid\" (click)=\"submitSalon(submitSalonDetails.value)\">Submit</button>\n\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\"> \n                    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n                     </agm-marker> \n            </agm-map>\n        </form>\n    </div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"login-section\">\n\n    <div class=\"login-section-inner\">\n<div class=\"login-left\">\n<img src=\"../../../assets/images/logo.svg\">\n</div>\n\n<div class=\"login-right\">\n    <div class=\"headerText\">{{headerText}}</div>\n    <form [formGroup]=\"salonLoginForm\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label for=\"InputEmail\">Email address</label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"InputEmail\" aria-describedby=\"emailHelp\"\n                            placeholder=\"Enter email\">\n\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label for=\"InputPassword\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\n                            placeholder=\"Password\">\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                        <button type=\"submit\" [disabled]=\"salonLoginForm.invalid\" (click)=\"salonLogin(salonLoginForm.value)\" *ngIf=\"isLogin\" class=\"btn btn-primary btn-sign-in\">LOGIN</button>\n                        <button type=\"submit\" [disabled]=\"salonLoginForm.invalid\" (click)=\"salonRegister(salonLoginForm.value)\" *ngIf=\"!isLogin\" class=\"btn btn-primary btn-sign-in\">REGISTER</button>\n                    </div>\n                <div class=\"col-md-12\" *ngIf=\"isLogin\">\n                    <div class=\"sign-up\">\n                       Don't have an account ?  <a (click)=\"goToSignUp()\" >SIGN UP</a>\n                    </div>\n                </div>\n                <div class=\"col-md-12\" *ngIf=\"!isLogin\">\n                        <div class=\"sign-up\">\n                           Already have an account ?  <a (click)=\"goToLogin()\" >LOGIN</a>\n                        </div>\n                    </div>\n              \n            </div>\n        </form>\n</div>\n     \n\n\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/salon/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/salon/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/salon/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
    }
    canActivate(next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.myRoute.navigate(["salon"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/salon/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/salon/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthService = class AuthService {
    constructor(myRoute) {
        this.myRoute = myRoute;
        this.idSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentIds = this.idSource.asObservable();
    }
    sendToken(token) {
        localStorage.setItem("LoggedInUser", token);
    }
    getToken() {
        return localStorage.getItem("LoggedInUser");
    }
    isLoggedIn() {
        return this.getToken() !== null;
    }
    logout() {
        localStorage.removeItem("LoggedInUser");
        this.myRoute.navigate(['salon']);
    }
    sendIdS(data) {
        this.idSource.next(data);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/salon/dashboard/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/salon/dashboard/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
        Authorization: ""
    })
};
let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
    }
    saveSalonDetails(data) {
        return this.http.post(this.baseUrl + '/addsalon', data, httpOptions);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/salon/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/salon/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/salon/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/salon/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() {
        this.dropdownVisible = false;
    }
    ngOnInit() {
    }
    toggleSidebar() {
        document.getElementsByTagName('body')[0].classList.toggle('sidenav-toggled');
    }
    toggleDropdown() {
        this.dropdownVisible = !this.dropdownVisible;
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/salon/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/salon/dashboard/profile/profile.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/salon/dashboard/profile/profile.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profileOverlay {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  background-color: #333;\n  opacity: 0.9;\n  height: 100%;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n.profileOverlay #profileArea {\n  padding: 10px;\n  background-color: white;\n  opacity: 1;\n  z-index: 11;\n  border-radius: 10px;\n}\n.profileOverlay #profileArea .salonDetailSave .fields {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.profileOverlay #profileArea .salonDetailSave .image {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGltc2hhaC9EZXNrdG9wL05FV1NBTE9OR0lUL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvc3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0NSO0FER1k7RUFDUSxlQUFBO0VBQ0Esa0JBQUE7QUNEcEI7QURHWTtFQUNJLGFBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVPdmVybGF5e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6MDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgI3Byb2ZpbGVBcmVhe1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgei1pbmRleDogMTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIC5zYWxvbkRldGFpbFNhdmV7XG5cblxuICAgICAgICAgICAgLmZpZWxkc3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1hZ2V7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxufSIsIi5wcm9maWxlT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMC45O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcm9maWxlT3ZlcmxheSAjcHJvZmlsZUFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5zYWxvbkRldGFpbFNhdmUgLmZpZWxkcyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb2ZpbGVPdmVybGF5ICNwcm9maWxlQXJlYSAuc2Fsb25EZXRhaWxTYXZlIC5pbWFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/salon/dashboard/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/salon/dashboard/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.service */ "./src/app/salon/dashboard/common.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth.service */ "./src/app/salon/auth.service.ts");





let ProfileComponent = class ProfileComponent {
    constructor(authServ, fb, commServ) {
        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        if (navigator) {
            navigator.geolocation.getCurrentPosition(pos => {
                this.lng = +pos.coords.longitude;
                this.lat = +pos.coords.latitude;
            });
        }
    }
    ngOnInit() {
        this.submitSalonDetails = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salonaddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.authServ.currentIds.subscribe(data => {
            localStorage.setItem("userId", JSON.stringify(data));
        });
    }
    uploadImage(event) {
        console.log("event", event);
    }
    submitSalon(data) {
        this.user_id = localStorage.getItem("userId");
        let dataToPass = {
            name: data.name,
            salonaddress: data.salonaddress,
            contact: data.contact,
            lat: this.lat,
            long: this.lng,
            user_id: this.user_id
        };
        this.commServ.saveSalonDetails(dataToPass).subscribe(data => {
            console.log("USERSAVED", data);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/salon/dashboard/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/salon/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/salon/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.login-section-inner {\n  width: 595px;\n  min-height: 400px;\n  margin: 0 auto;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  position: relative;\n  /* padding: 25px 40px; */\n  display: flex;\n}\n\n.login-section-inner .login-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background: url('bg-left.png');\n  flex-direction: column;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.login-section-inner .login-left img {\n  width: 50%;\n}\n\n.login-right {\n  flex: 1;\n  padding: 0 0 20px 0;\n  padding: 25px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.headerText {\n  width: 100%;\n  color: #BC2E65;\n  font-size: 24px;\n  font-weight: 700;\n  height: 1em;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.login-section-inner label {\n  font-size: 15px;\n  color: #4D4D55;\n  font-family: \"Roboto\";\n}\n\n.login-section-inner input {\n  font-size: 13px;\n  border: 1px solid #D2D4DF;\n  border-radius: 8px;\n  color: #9595A1;\n  height: 35px;\n  font-family: \"Roboto\";\n}\n\n.login-section-inner .btn-sign-in {\n  width: 100%;\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n}\n\n.login-section-inner .btn-sign-in:hover {\n  /* background-position: right center; */\n  background: transparent linear-gradient(90deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n}\n\n.login-section-inner .form-control:focus {\n  border-color: #9C3EE8;\n  outline: 0;\n  box-shadow: 0 0 0 0 #9C3EE8;\n}\n\n.login-section-inner .form-group {\n  margin-bottom: 10px;\n}\n\n.login-section-inner .btn-primary:not(:disabled):not(.disabled):active {\n  background: transparent linear-gradient(90deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n}\n\n.sign-up {\n  font-size: 12px;\n  color: #4D4D55;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  text-align: center;\n  padding-top: 10px;\n}\n\n.sign-up a {\n  color: #c92c5f;\n  text-decoration: none;\n  padding-left: 10px;\n}\n\n@media (max-width: 991px) {\n  .login-section-inner {\n    display: block;\n  }\n\n  .login-section-inner .login-left {\n    min-height: 225px;\n  }\n\n  .login-section-inner .login-left img {\n    width: 35%;\n  }\n}\n\n@media (max-width: 767px) {\n  .login-section {\n    align-items: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGltc2hhaC9EZXNrdG9wL05FV1NBTE9OR0lUL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvc3JjL2FwcC9zYWxvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Fsb24vbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURDQTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURFQTtFQUVJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREVBO0VBQ0EsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0dBQUE7QUNBQTs7QURFQTtFQUNJLHVDQUFBO0VBQ0Esb0dBQUE7QUNDSjs7QURDQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FDRUo7O0FEQUE7RUFFSSxtQkFBQTtBQ0VKOztBRENBO0VBQ0ksb0dBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERBO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QUREQTtFQUNJO0lBQ0ksY0FBQTtFQ0lOOztFREZFO0lBQ0ksaUJBQUE7RUNLTjs7RURIRTtJQUNJLFVBQUE7RUNNTjtBQUNGOztBREpBO0VBQ0k7SUFDSSxvQkFBQTtFQ01OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbi5sb2dpbi1zZWN0aW9ue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ubG9naW4tc2VjdGlvbi1pbm5lcntcclxuICAgIHdpZHRoOiA1OTVweDtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWxlZnQucG5nKTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBcclxufVxyXG4ubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWd7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5sb2dpbi1yaWdodHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xyXG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyVGV4dHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6ICNCQzJFNjU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGhlaWdodDogMWVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIGxhYmVse1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjNEQ0RDU1O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIGlucHV0e1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMkQ0REY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBjb2xvcjogIzk1OTVBMTtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxufVxyXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXNpZ24taW57XHJcbndpZHRoOiAxMDAlO1xyXG5cclxuYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxudHJhbnNpdGlvbjogMC41cztcclxuYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbmZvbnQtc2l6ZTogMTNweDtcclxuYm9yZGVyLXJhZGl1czogOHB4O1xyXG5oZWlnaHQ6IDM1cHg7XHJcbmZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxubWFyZ2luLXRvcDogMTBweDtcclxuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXNpZ24taW46aG92ZXJ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNBODcgMCUsICNCQzJFNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XHJcbiAgICBib3JkZXItY29sb3I6ICM5QzNFRTg7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAjOUMzRUU4O1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWdyb3Vwe1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNBODcgMCUsICNCQzJFNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbi5zaWduLXVwe1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICM0RDRENTU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uc2lnbi11cCBhe1xyXG4gICAgY29sb3I6IHJnYigyMDEsNDQsOTUpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgIC5sb2dpbi1zZWN0aW9uLWlubmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnR7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjI1cHg7XHJcbiAgICB9XHJcbiAgICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XHJcbiAgICAubG9naW4tc2VjdGlvbntcclxuICAgICAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcclxuICAgIH1cclxufSIsIi5sb2dpbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIge1xuICB3aWR0aDogNTk1cHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAyNXB4IDQwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWxlZnQucG5nKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxvZ2luLXJpZ2h0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyVGV4dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogI0JDMkU2NTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBoZWlnaHQ6IDFlbTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNEQ0RDU1O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNEMkQ0REY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICM5NTk1QTE7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tc2lnbi1pbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M0E4NyAwJSwgI0JDMkU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tc2lnbi1pbjpob3ZlciB7XG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjsgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzlDM0VFODtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAjOUMzRUU4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNBODcgMCUsICNCQzJFNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4uc2lnbi11cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0RDRENTU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zaWduLXVwIGEge1xuICBjb2xvcjogI2M5MmM1ZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCB7XG4gICAgbWluLWhlaWdodDogMjI1cHg7XG4gIH1cblxuICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWcge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubG9naW4tc2VjdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/salon/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/salon/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/salon/login/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/salon/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");







let LoginComponent = class LoginComponent {
    constructor(toastServ, authServ, router, logServ, fb) {
        this.toastServ = toastServ;
        this.authServ = authServ;
        this.router = router;
        this.logServ = logServ;
        this.fb = fb;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
        this.headerText = "Login";
        this.isLogin = true;
    }
    ngOnInit() {
        this.salonLoginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    /**
     * Function is use to go to signup page
     * @access private
     * @return json
     * Created by SmartData
     * @smartData Enterprises (I) Ltd
     */
    goToSignUp() {
        this.isLogin = false;
        this.headerText = "Sign up";
    }
    /**
     * Function is use go to login page
     * @access private
     * @return json
     * Created by SmartData
     * @smartData Enterprises (I) Ltd
     */
    goToLogin() {
        this.isLogin = true;
        this.headerText = "Login";
    }
    /**
     * Function is use to login salon
     * @access private
     * @return json
     * Created by SmartData
     * @smartData Enterprises (I) Ltd
     */
    salonLogin(data) {
        this.logServ.loginSalon(data).subscribe((data) => {
            if (data.code === 200) {
                this.toastServ.success("Logged In Successfully", "", {
                    timeOut: 3000
                });
                this.userData = data.data;
                this.authServ.sendIdS(data.data["userInfo"]["_id"]);
                //(data.data['userInfo']['_id']);
                this.authServ.sendToken(data.data.token);
                this.router.navigate(["salon/home"]);
            }
            else {
                this.toastServ.error("Invalid Login details", "", {
                    timeOut: 3000
                });
            }
        });
    }
    /**
     * Function is use to register salon
     * @access private
     * @return json
     * Created by SmartData
     * @smartData Enterprises (I) Ltd
     */
    salonRegister(data) {
        let dataToPass = {
            role: "salon",
            email: data.email,
            password: data.password
        };
        this.logServ.signUpSalon(dataToPass).subscribe((res) => {
            if (res.code === 200) {
                this.toastServ.success("Registered Successfully", "Please Login", {
                    timeOut: 3000
                });
                this.authServ.sendToken(res.data.token);
            }
            else if (res.code === 201) {
                this.toastServ.warning("User Already Exist", "Please Login", {
                    timeOut: 3000
                });
            }
            else {
                this.toastServ.error("Failed to register", "Please try again", {
                    timeOut: 3000
                });
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/salon/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/salon/login/login.service.ts":
/*!**********************************************!*\
  !*** ./src/app/salon/login/login.service.ts ***!
  \**********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
        Authorization: ""
    })
};
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
    }
    loginSalon(data) {
        return this.http.post(this.baseUrl + "/login", data, httpOptions);
    }
    signUpSalon(data) {
        return this.http.post(this.baseUrl + "/register", data, httpOptions);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], LoginService);



/***/ }),

/***/ "./src/app/salon/salon-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/salon/salon-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SalonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonRoutingModule", function() { return SalonRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/salon/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/salon/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/salon/dashboard/profile/profile.component.ts");
/* harmony import */ var _salon_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../salon/auth.guard */ "./src/app/salon/auth.guard.ts");
/* harmony import */ var _salon_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../salon/auth.service */ "./src/app/salon/auth.service.ts");








const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_salon_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
        ] },
];
let SalonRoutingModule = class SalonRoutingModule {
};
SalonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: [_salon_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _salon_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]]
    })
], SalonRoutingModule);



/***/ }),

/***/ "./src/app/salon/salon.module.ts":
/*!***************************************!*\
  !*** ./src/app/salon/salon.module.ts ***!
  \***************************************/
/*! exports provided: SalonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonModule", function() { return SalonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _salon_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salon-routing.module */ "./src/app/salon/salon-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/salon/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/salon/dashboard/dashboard.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/salon/dashboard/profile/profile.component.ts");









let SalonModule = class SalonModule {
};
SalonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _salon_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalonRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg'
            })
        ]
    })
], SalonModule);



/***/ })

}]);
//# sourceMappingURL=app-salon-salon-module-es2015.js.map