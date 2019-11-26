(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-drivers-drivers-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin/drivers/add/add.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin/drivers/add/add.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>add works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin/drivers/drivers/drivers.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin/drivers/drivers/drivers.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n<div class=\"inner-pages\">\n        <div class=\"main-title-heading\">\n            <h1>Manage Drivers</h1>\n            <a routerLink=\"/howd-admin/stores/add\">\n                <span class=\"add-icon\"><mat-icon>add_circle_outline</mat-icon></span>\n                <span class=\"add-title\">Add Driver</span> </a>\n        </div>\n        <div class=\"spinner-container\">\n                <mat-progress-bar   *ngIf=\"isLoading\"\n                    [mode]=\"'indeterminate'\">\n                </mat-progress-bar>\n        </div> \n    \n        <div class=\"common-card common-table-outer\">\n            <div class=\"tab-content table-responsive custom-table-desgin\">\n                <table mat-table [dataSource]=\"templateData\" matSort class=\"width100 table email-template-table\">\n                        <mat-spinner></mat-spinner>\n                   <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>NAME</h6>  </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"address\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>ADDRESS</h6>  </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.address}} </td>\n                    </ng-container> \n                    <ng-container matColumnDef=\"phone_no\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>PHONE NO</h6>  </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.phone_no}} </td>\n                    </ng-container>           \n                    <ng-container matColumnDef=\"email\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>EMAIL</h6> </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"imei_no\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>IMEI NO</h6> </th>\n                        <td mat-cell *matCellDef=\"let row\"> {{row.imei_no}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"action\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\"> <h6>Action </h6> </th>\n                        <td mat-cell *matCellDef=\"let row\" class=\"email-action text-center\">\n                            <mat-icon class=\"edit-icons\" matTooltip=\"Update Store\" routerLink=\"/howd-admin/stores/edit/{{row._id}}\">border_color</mat-icon>&nbsp;&nbsp;\n                            <mat-icon class=\"delete-icons\" matTooltip=\"Delete Store\" (click)=\"openDialog(row._id)\">delete</mat-icon>\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> \n                </table>\n                <mat-paginator *ngIf=\"totalCount > limit\" [length]=\"totalCount\" \n                                [pageSize]=\"count\" \n                                (page)=\"pageChange($event)\" \n                                [pageSizeOptions]=\"[5, 8, 10, 20]\"\n                                showFirstLastButtons></mat-paginator>\n                                \n            </div>\n        </div>\n    </div>\n\n "

/***/ }),

/***/ "./src/app/admin/admin/drivers/add/add.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/admin/drivers/add/add.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2RyaXZlcnMvYWRkL2FkZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/admin/drivers/add/add.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin/drivers/add/add.component.ts ***!
  \**********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddComponent = class AddComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin/drivers/add/add.component.html"),
        styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/admin/admin/drivers/add/add.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AddComponent);



/***/ }),

/***/ "./src/app/admin/admin/drivers/drivers-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/admin/drivers/drivers-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DriversRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversRoutingModule", function() { return DriversRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers/drivers.component */ "./src/app/admin/admin/drivers/drivers/drivers.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/admin/admin/drivers/add/add.component.ts");





const routes = [
    {
        path: '', component: _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_3__["DriversComponent"]
    },
    {
        path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    }
];
let DriversRoutingModule = class DriversRoutingModule {
};
DriversRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DriversRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin/drivers/drivers.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/admin/drivers/drivers.module.ts ***!
  \*******************************************************/
/*! exports provided: DriversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversModule", function() { return DriversModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drivers-routing.module */ "./src/app/admin/admin/drivers/drivers-routing.module.ts");
/* harmony import */ var _drivers_drivers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drivers/drivers.component */ "./src/app/admin/admin/drivers/drivers/drivers.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add/add.component */ "./src/app/admin/admin/drivers/add/add.component.ts");






let DriversModule = class DriversModule {
};
DriversModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_drivers_drivers_component__WEBPACK_IMPORTED_MODULE_4__["DriversComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _drivers_routing_module__WEBPACK_IMPORTED_MODULE_3__["DriversRoutingModule"]
        ]
    })
], DriversModule);



/***/ }),

/***/ "./src/app/admin/admin/drivers/drivers/drivers.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin/drivers/drivers/drivers.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2RyaXZlcnMvZHJpdmVycy9kcml2ZXJzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin/drivers/drivers/drivers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin/drivers/drivers/drivers.component.ts ***!
  \******************************************************************/
/*! exports provided: DriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversComponent", function() { return DriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DriversComponent = class DriversComponent {
    constructor() { }
    ngOnInit() {
    }
};
DriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-drivers',
        template: __webpack_require__(/*! raw-loader!./drivers.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin/drivers/drivers/drivers.component.html"),
        styles: [__webpack_require__(/*! ./drivers.component.scss */ "./src/app/admin/admin/drivers/drivers/drivers.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DriversComponent);



/***/ })

}]);
//# sourceMappingURL=admin-drivers-drivers-module-es2015.js.map