(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pagenotfound-pagenotfound-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"pageNotFoundWrapper\">\n  <div class=\"content\">\n    <span>404 Page Not Found</span>\n    <span>\n      <a [routerLink]=\"['']\" routerLinkActive=\"router-link-active\"\n        >YOU CAN TRY HOME</a\n      ></span\n    >\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: PagenotfoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundRoutingModule", function() { return PagenotfoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pagenotfound_pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pagenotfound/pagenotfoundtext/pagenotfoundtext.component */ "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts");




const routes = [{ path: "", component: _pagenotfound_pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundtextComponent"] }];
let PagenotfoundRoutingModule = class PagenotfoundRoutingModule {
};
PagenotfoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagenotfoundRoutingModule);



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.module.ts ***!
  \*****************************************************/
/*! exports provided: PagenotfoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundModule", function() { return PagenotfoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagenotfound-routing.module */ "./src/app/pagenotfound/pagenotfound-routing.module.ts");
/* harmony import */ var _pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pagenotfoundtext/pagenotfoundtext.component */ "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts");





let PagenotfoundModule = class PagenotfoundModule {
};
PagenotfoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundtextComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundRoutingModule"]]
    })
], PagenotfoundModule);



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#pageNotFoundWrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#pageNotFoundWrapper .content {\n  font-size: 2em;\n  font-weight: 600;\n  color: #333;\n  padding: 1em;\n  border: 1px solid lightgray;\n  box-shadow: 1px 2px 2px 1px lightgray;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZHRleHQvcGFnZW5vdGZvdW5kdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZHRleHQvcGFnZW5vdGZvdW5kdGV4dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlbm90Zm91bmQvcGFnZW5vdGZvdW5kdGV4dC9wYWdlbm90Zm91bmR0ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2VOb3RGb3VuZFdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAxcHggbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbiIsIiNwYWdlTm90Rm91bmRXcmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuI3BhZ2VOb3RGb3VuZFdyYXBwZXIgLmNvbnRlbnQge1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAxcHggbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */");

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PagenotfoundtextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundtextComponent", function() { return PagenotfoundtextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagenotfoundtextComponent = class PagenotfoundtextComponent {
    constructor() { }
};
PagenotfoundtextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-pagenotfoundtext",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pagenotfoundtext.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pagenotfoundtext.component.scss */ "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.scss")).default]
    })
], PagenotfoundtextComponent);



/***/ })

}]);
//# sourceMappingURL=app-pagenotfound-pagenotfound-module-es2015.js.map