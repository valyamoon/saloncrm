(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-stores-stores-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin/stores/add/add.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin/stores/add/add.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages role-permissions Edit-role-permissions\">\n    <div class=\"main-title-heading\">\n      {{title}}\n    </div>\n    <div class=\"user-common-box custom-button-design\">        \n        <form [formGroup]=\"storsForm\" novalidate >                \n            <div class=\"form-group permission-name\">              \n                <mat-form-field class=\"col-md-12\">\n                  <input matInput formControlName=\"name\" placeholder=\"Store Name\">\n                </mat-form-field>    \n                <mat-form-field class=\"col-md-12\">\n                    <input matInput formControlName=\"address\" placeholder=\"Store Address\">\n                  </mat-form-field>  \n                  <mat-form-field class=\"col-md-12\">\n                    <input matInput formControlName=\"phone_no\" placeholder=\"Store Phone No\">\n                  </mat-form-field>                  \n            </div>\n            <div class=\"form-group permission-name\">              \n              <mat-form-field class=\"col-md-12\">\n                <input matInput formControlName=\"email\"  placeholder=\"Store Email\">\n              </mat-form-field>    \n              <mat-form-field class=\"col-md-12\">\n                  <input matInput formControlName=\"imei_no\" placeholder=\"Store IMEI NO\">\n                  \n                </mat-form-field>  \n                <button class=\"cancel-btn\" mat-raised-button type=\"button\"  routerLink=\"/howd-admin/stores\">+</button>\n                                \n          </div>\n            <div class=\"custom-footer-buttons\">\n                <button class=\"save-btn\" mat-raised-button type=\"submit\" (click) =\"addStore()\">{{button}}</button>\n                <button class=\"cancel-btn\" mat-raised-button type=\"reset\" [routerLink]=\"['/howd-admin/stores']\">Cancel</button>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/admin/admin/stores/stores.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/admin/admin/stores/stores.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner-pages\">\n    <div class=\"main-title-heading\">\n        <h1>Manage Stores</h1>\n        <a routerLink=\"/howd-admin/stores/add\">\n            <span class=\"add-icon\"><mat-icon>add_circle_outline</mat-icon></span>\n            <span class=\"add-title\">Add Store</span> </a>\n    </div>\n    <div class=\"spinner-container\">\n            <mat-progress-bar   *ngIf=\"isLoading\"\n                [mode]=\"'indeterminate'\">\n            </mat-progress-bar>\n    </div> \n\n    <div class=\"common-card common-table-outer\">\n        <div class=\"tab-content table-responsive custom-table-desgin\">\n            <table mat-table [dataSource]=\"templateData\" matSort class=\"width100 table email-template-table\">\n                    <mat-spinner></mat-spinner>\n               <ng-container matColumnDef=\"name\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>NAME</h6>  </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"address\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>ADDRESS</h6>  </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.address}} </td>\n                </ng-container> \n                <ng-container matColumnDef=\"phone_no\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>PHONE NO</h6>  </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.phone_no}} </td>\n                </ng-container>           \n                <ng-container matColumnDef=\"email\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>EMAIL</h6> </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.email}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"imei_no\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> <h6>IMEI NO</h6> </th>\n                    <td mat-cell *matCellDef=\"let row\"> {{row.imei_no}} </td>\n                </ng-container>\n                <ng-container matColumnDef=\"action\">\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header class=\"text-center\"> <h6>Action </h6> </th>\n                    <td mat-cell *matCellDef=\"let row\" class=\"email-action text-center\">\n                        <mat-icon class=\"edit-icons\" matTooltip=\"Update Store\" routerLink=\"/howd-admin/stores/edit/{{row._id}}\">border_color</mat-icon>&nbsp;&nbsp;\n                        <mat-icon class=\"delete-icons\" matTooltip=\"Delete Store\" (click)=\"openDialog(row._id)\">delete</mat-icon>\n                    </td>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> \n            </table>\n            <mat-paginator *ngIf=\"totalCount > limit\" [length]=\"totalCount\" \n                            [pageSize]=\"count\" \n                            (page)=\"pageChange($event)\" \n                            [pageSizeOptions]=\"[5, 8, 10, 20]\"\n                            showFirstLastButtons></mat-paginator>\n                            \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin/stores/add/add.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/admin/stores/add/add.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL3N0b3Jlcy9hZGQvYWRkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin/stores/add/add.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/admin/stores/add/add.component.ts ***!
  \*********************************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_sotre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sotre.service */ "./src/app/services/sotre.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@core/services/notification.service */ "./src/app/@core/services/notification.service.ts");
/* harmony import */ var src_app_core_utils_validationMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@core/utils/validationMessage */ "./src/app/@core/utils/validationMessage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AddComponent = class AddComponent {
    constructor(storeService, fb, notificationService, activatedRoute, router) {
        this.storeService = storeService;
        this.fb = fb;
        this.notificationService = notificationService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.title = 'Add New Store';
        this.button = 'Add';
        this.storsForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), src_app_core_utils_validationMessage__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].nameValidator]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, src_app_core_utils_validationMessage__WEBPACK_IMPORTED_MODULE_5__["ValidationService"].emailValidator]],
            imei_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    ngOnInit() {
        if (this._id = this.activatedRoute.snapshot.params['id']) {
            this._id = this.activatedRoute.snapshot.params['id'];
            this.title = 'Update Store';
            this.button = 'Update';
            this.getStoreById(this._id);
        }
    }
    getStoreById(id) {
        if (id) {
            const obj = { id: id };
            this.storeService.getOneStore(obj).subscribe((res) => {
                this.storsForm.get('name').setValue(res['data'].name);
                console.log(res['data']);
                if (res['data'].length > 0) {
                    var data = res['data'][0];
                    this.storsForm.patchValue({
                        name: data.name || '',
                        address: data.address,
                        phone_no: data.phone_no,
                        email: data.email,
                        imei_no: data.imei_no
                        // startDate: new Date(res['data'].startDate),
                        // endDate: new Date(res['data'].endDate),
                        // country: res['data'].country,
                        // state: res['data'].state,
                        // event_info: res['data'].event_info,
                        // city: res['data'].city,
                        // image: res['data'].images
                    });
                }
            });
            // this.storeService(id).subscribe((res) => {
            //   if (res['code'] === 200) {
            //     this.permission = res.data.permission.split(',').map((v: any) =>  Number(v));
            //       this.roleTypeForm.patchValue({name: res['data'].name || '' });
            //     } else {
            //       this.router.navigate(['/lafiya-admin/role-permissions']);
            //     }
            //   }, (err) => {
            //     console.log('error ', err);
            //   });
        }
    }
    addStore() {
        if (this.storsForm.valid) {
            const data = this.storsForm.value;
            let serv;
            if (this._id) {
                // serv = this.storeService.updateStore(this._id, data);
            }
            else {
                serv = this.storeService.addStore(data);
            }
            serv.subscribe(res => {
                this.router.navigate(['/howd-admin/stores']);
                console.log('response ', res);
            });
        }
    }
};
AddComponent.ctorParameters = () => [
    { type: src_app_services_sotre_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: __webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin/stores/add/add.component.html"),
        styles: [__webpack_require__(/*! ./add.component.scss */ "./src/app/admin/admin/stores/add/add.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_sotre_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], AddComponent);



/***/ }),

/***/ "./src/app/admin/admin/stores/stores.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin/stores/stores.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL3N0b3Jlcy9zdG9yZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin/stores/stores.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/admin/stores/stores.component.ts ***!
  \********************************************************/
/*! exports provided: StoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresComponent", function() { return StoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_services_sotre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/sotre.service */ "./src/app/services/sotre.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@core/services/notification.service */ "./src/app/@core/services/notification.service.ts");
/* harmony import */ var src_app_core_utils_string_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@core/utils/string-constants */ "./src/app/@core/utils/string-constants.ts");






let StoresComponent = class StoresComponent {
    constructor(storeService, notificationService) {
        this.storeService = storeService;
        this.notificationService = notificationService;
        this.totalCount = 0;
        this.limit = 5;
        this.page = 0;
        this.displayedColumns = ['name', 'address', 'phone_no', 'email', 'imei_no', 'action'];
        this.isLoading = true;
        this.checked = true;
    }
    ngOnInit() {
        this.getStoreList();
    }
    getStoreList() {
        const request_obj = {
            page: 0,
            limit: 10,
            search_string: ''
        };
        this.storeService.listStore(request_obj).subscribe((res) => {
            console.log(res);
            this.isLoading = false;
            this.templateData = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](res['data']);
            this.totalCount = res.total;
        }, () => {
            this.notificationService.infoToast(src_app_core_utils_string_constants__WEBPACK_IMPORTED_MODULE_5__["StringConst"].SOMETHING_WENT_WRONG + ' ' + src_app_core_utils_string_constants__WEBPACK_IMPORTED_MODULE_5__["StringConst"].PLEASE_TRY_AGAIN_LATER);
        });
    }
    pageChange(event) {
        console.log("pagination", event);
        this.page = event.pageIndex;
        this.limit = event.pageSize;
        this.isLoading = true;
        this.getStoreList();
    }
};
StoresComponent.ctorParameters = () => [
    { type: src_app_services_sotre_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"] },
    { type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
StoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stores',
        template: __webpack_require__(/*! raw-loader!./stores.component.html */ "./node_modules/raw-loader/index.js!./src/app/admin/admin/stores/stores.component.html"),
        styles: [__webpack_require__(/*! ./stores.component.scss */ "./src/app/admin/admin/stores/stores.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_sotre_service__WEBPACK_IMPORTED_MODULE_3__["StoreService"], src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"]])
], StoresComponent);



/***/ }),

/***/ "./src/app/admin/admin/stores/stores.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin/admin/stores/stores.module.ts ***!
  \*****************************************************/
/*! exports provided: StoresModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresModule", function() { return StoresModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@core/core.module */ "./src/app/@core/core.module.ts");
/* harmony import */ var _core_module_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core-module/material.module */ "./src/app/core-module/material.module.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add/add.component */ "./src/app/admin/admin/stores/add/add.component.ts");
/* harmony import */ var _stores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stores.component */ "./src/app/admin/admin/stores/stores.component.ts");
/* harmony import */ var _stores_router_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./stores.router.module */ "./src/app/admin/admin/stores/stores.router.module.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");











let StoresModule = class StoresModule {
};
StoresModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _core_module_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _stores_router_module__WEBPACK_IMPORTED_MODULE_9__["StoresRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatProgressSpinnerModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]
        ],
        declarations: [
            _stores_component__WEBPACK_IMPORTED_MODULE_8__["StoresComponent"],
            _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
        ]
    })
], StoresModule);



/***/ }),

/***/ "./src/app/admin/admin/stores/stores.router.module.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/admin/stores/stores.router.module.ts ***!
  \************************************************************/
/*! exports provided: StoresRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresRoutingModule", function() { return StoresRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _stores_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stores.component */ "./src/app/admin/admin/stores/stores.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/admin/admin/stores/add/add.component.ts");





const routes = [
    {
        path: '', component: _stores_component__WEBPACK_IMPORTED_MODULE_3__["StoresComponent"]
    },
    {
        path: 'add', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'edit/:id', component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    }
];
let StoresRoutingModule = class StoresRoutingModule {
};
StoresRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], StoresRoutingModule);



/***/ })

}]);
//# sourceMappingURL=admin-stores-stores-module-es2015.js.map