function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pagenotfound-pagenotfound-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagenotfoundPagenotfoundtextPagenotfoundtextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"pageNotFoundWrapper\">\n  <div class=\"content\">\n    <span>404 Page Not Found</span>\n    <span>\n      <a [routerLink]=\"['']\" routerLinkActive=\"router-link-active\"\n        >YOU CAN TRY HOME</a\n      ></span\n    >\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: PagenotfoundRoutingModule */

  /***/
  function srcAppPagenotfoundPagenotfoundRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundRoutingModule", function () {
      return PagenotfoundRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pagenotfound_pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../pagenotfound/pagenotfoundtext/pagenotfoundtext.component */
    "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts");

    var routes = [{
      path: "",
      component: _pagenotfound_pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundtextComponent"]
    }];

    var PagenotfoundRoutingModule = function PagenotfoundRoutingModule() {
      _classCallCheck(this, PagenotfoundRoutingModule);
    };

    PagenotfoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagenotfoundRoutingModule);
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfound.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.module.ts ***!
    \*****************************************************/

  /*! exports provided: PagenotfoundModule */

  /***/
  function srcAppPagenotfoundPagenotfoundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundModule", function () {
      return PagenotfoundModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pagenotfound-routing.module */
    "./src/app/pagenotfound/pagenotfound-routing.module.ts");
    /* harmony import */


    var _pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pagenotfoundtext/pagenotfoundtext.component */
    "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts");

    var PagenotfoundModule = function PagenotfoundModule() {
      _classCallCheck(this, PagenotfoundModule);
    };

    PagenotfoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pagenotfoundtext_pagenotfoundtext_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundtextComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pagenotfound_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundRoutingModule"]]
    })], PagenotfoundModule);
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagenotfoundPagenotfoundtextPagenotfoundtextComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#pageNotFoundWrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#pageNotFoundWrapper .content {\n  font-size: 2em;\n  font-weight: 600;\n  color: #333;\n  padding: 1em;\n  border: 1px solid lightgray;\n  box-shadow: 1px 2px 2px 1px lightgray;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmR0ZXh0L3BhZ2Vub3Rmb3VuZHRleHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmR0ZXh0L3BhZ2Vub3Rmb3VuZHRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGO0FEQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZHRleHQvcGFnZW5vdGZvdW5kdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwYWdlTm90Rm91bmRXcmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5jb250ZW50IHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMXB4IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4iLCIjcGFnZU5vdEZvdW5kV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiNwYWdlTm90Rm91bmRXcmFwcGVyIC5jb250ZW50IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMXB4IGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: PagenotfoundtextComponent */

  /***/
  function srcAppPagenotfoundPagenotfoundtextPagenotfoundtextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundtextComponent", function () {
      return PagenotfoundtextComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PagenotfoundtextComponent = /*#__PURE__*/function () {
      function PagenotfoundtextComponent() {
        _classCallCheck(this, PagenotfoundtextComponent);
      }

      _createClass(PagenotfoundtextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundtextComponent;
    }();

    PagenotfoundtextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-pagenotfoundtext",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pagenotfoundtext.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pagenotfoundtext.component.scss */
      "./src/app/pagenotfound/pagenotfoundtext/pagenotfoundtext.component.scss"))["default"]]
    })], PagenotfoundtextComponent);
    /***/
  }
}]);
//# sourceMappingURL=app-pagenotfound-pagenotfound-module-es5.js.map