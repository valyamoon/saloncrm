(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-createpassword-createpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createpassword/cp/cp.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createpassword/cp/cp.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"createPasswordWrapper\">\n  <div class=\"main-content col-lg-6 col-md-6 col-sm-12\">\n    <form [formGroup]=\"setNewPasswordForm\">\n      <label>Enter New Password</label>\n      <input\n        type=\"text\"\n        placeholder=\" New Password\"\n        formControlName=\"newpassword\"\n        class=\"form-control\"\n      />\n\n      <button\n        class=\"btn btn-sign-in btnSbt\"\n        [disabled]=\"setNewPasswordForm.invalid\"\n        (click)=\"submitNewPassword(setNewPasswordForm.value)\"\n      >\n        Submit\n      </button>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/createpassword/createpassword.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/createpassword/createpassword.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-serv.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-serv.service.ts ***!
  \*************************************************************/
/*! exports provided: AdminServService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminServService", function() { return AdminServService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("LoggedInUser")
    })
};
let AdminServService = class AdminServService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
        this.headerText = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        // Initialize with emtpy string
        this.headerResponse = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
    }
    setHeaderResponse(data) {
        // Fire the update event with the new data
        this.headerResponse.next(data);
    }
    getHeaderResponse() {
        return this.headerResponse.asObservable();
    }
    setHeaderText(data) {
        // Fire the update event with the new data
        this.headerText.next(data);
    }
    getHeaderText() {
        return this.headerText.asObservable();
    }
    getSalonsList(data) {
        return this.http.post(this.baseUrl + "/activesalons", data);
    }
    getSalonsRequest(data) {
        return this.http.post(this.baseUrl + "/salonsrequest", data, httpOptions);
    }
    approveSalonRequests(data) {
        return this.http.post(this.baseUrl + "/acceptrequest", data);
    }
    getActiveSalonsCount(data) {
        return this.http.post(this.baseUrl + "/salonscount", data, httpOptions);
    }
    getActiveUsersCount(data) {
        return this.http.post(this.baseUrl + "/userscount", data, httpOptions);
    }
    declineSalonRequest(data) {
        return this.http.post(this.baseUrl + "/suspendsalon", data);
    }
    getActiveUsersList(data) {
        return this.http.post(this.baseUrl + "/userslist", data);
    }
    getAdmincategoriesList(data) {
        return this.http.post(this.baseUrl + "/admin-categories", data, httpOptions);
    }
    getCategories(data) {
        return this.http.post(this.baseUrl + "/categories", data, httpOptions);
    }
    addCategories(data) {
        return this.http.post(this.baseUrl + "/add-categories", data, httpOptions);
    }
    updateCategory(data) {
        return this.http.post(this.baseUrl + "/update-category", data, httpOptions);
    }
    updateService(data) {
        return this.http.post(this.baseUrl + "/update-service", data, httpOptions);
    }
    deleteCategories(data) {
        return this.http.post(this.baseUrl + "/remove-categories", data, httpOptions);
    }
    getArchivedCategories(data) {
        return this.http.post(this.baseUrl + "/archive-categories", data, httpOptions);
    }
    getRolesList(data) {
        return this.http.post(this.baseUrl + "/roles", data, httpOptions);
    }
    addRoles(data) {
        return this.http.post(this.baseUrl + "/add-role", data, httpOptions);
    }
    deleteRoles(data) {
        return this.http.post(this.baseUrl + "/remove-role", data, httpOptions);
    }
    updateRoles(data) {
        return this.http.post(this.baseUrl + "/edit-role", data, httpOptions);
    }
    awakeCategories(data) {
        return this.http.post(this.baseUrl + "/awake-category", data, httpOptions);
    }
    addServices(data) {
        return this.http.post(this.baseUrl + "/add-service", data, httpOptions);
    }
    removeServices(data) {
        return this.http.post(this.baseUrl + "/remove-service", data, httpOptions);
    }
    getServices(data) {
        return this.http.post(this.baseUrl + "/active-services", data, httpOptions);
    }
    fetchAllUsersCommon(data) {
        return this.http.post(this.baseUrl + "/all-users", data, httpOptions);
    }
    getUserDetails(data) {
        return this.http.post(this.baseUrl + "/user-detail", data, httpOptions);
    }
    getAdminDetails(data) {
        return this.http.post(this.baseUrl + "/get-admin-detail", data, httpOptions);
    }
    addAdminDetails(data) {
        return this.http.post(this.baseUrl + "/admin-detail", data, httpOptions);
    }
    getMonthlyUsersCount(data) {
        return this.http.post(this.baseUrl + "/get-analysis", data, httpOptions);
    }
    updateAdminDetails(data) {
        return this.http.post(this.baseUrl + "/update-admin", data, httpOptions);
    }
    getSalonDetails(data) {
        return this.http.post(this.baseUrl + "/view-salon", data, httpOptions);
    }
    addPlans(data) {
        return this.http.post(this.baseUrl + "/create-plan", data);
    }
    getPlans(data) {
        return this.http.post(this.baseUrl + "/get-plan", data);
    }
    editPlans(data) {
        return this.http.post(this.baseUrl + "/update-plan", data);
    }
    deletePlans(data) {
        return this.http.post(this.baseUrl + "/delete-plan", data);
    }
    activeUser(data) {
        return this.http.post(this.baseUrl + "/active-user-check", data, httpOptions);
    }
    deactiveUser(data) {
        return this.http.post(this.baseUrl + "/deactive-user-check", data, httpOptions);
    }
    getSalonSubscriptionList(data) {
        return this.http.post(this.baseUrl + "/get-subscriptions", data);
    }
    resetNewPassword(data) {
        return this.http.post(this.baseUrl + "/reset-password", data);
    }
    getUpcomingBookings(data) {
        return this.http.post(this.baseUrl + "/get-bookings-admin", data);
    }
    cancelBookings(data) {
        return this.http.post(this.baseUrl + "/cancel-booking", data);
    }
};
AdminServService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminServService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AdminServService);



/***/ }),

/***/ "./src/app/allserv.service.ts":
/*!************************************!*\
  !*** ./src/app/allserv.service.ts ***!
  \************************************/
/*! exports provided: AllservService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllservService", function() { return AllservService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let AllservService = class AllservService {
    constructor() {
        this.currentRoute = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.previousRoute = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
    }
    setRoute(data) {
        // Fire the update event with the new data
        this.currentRoute.next(data);
    }
    getRoute() {
        return this.currentRoute.asObservable();
    }
    setPrevRoute(data) {
        // Fire the update event with the new data
        this.previousRoute.next(data);
    }
    getPrevRoute() {
        return this.previousRoute.asObservable();
    }
};
AllservService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AllservService);



/***/ }),

/***/ "./src/app/createpassword/cp/cp.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/createpassword/cp/cp.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".createPasswordWrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.createPasswordWrapper .main-content {\n  padding: 1em;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  margin: 5px;\n}\n.createPasswordWrapper .main-content form {\n  display: flex;\n  flex-direction: column;\n}\n.createPasswordWrapper .main-content form .btnSbt {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2NyZWF0ZXBhc3N3b3JkL2NwL2NwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jcmVhdGVwYXNzd29yZC9jcC9jcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NKO0FEQUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNFTjtBRENNO0VBQ0UsWUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlcGFzc3dvcmQvY3AvY3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlUGFzc3dvcmRXcmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5tYWluLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICBmb3JtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgbGFiZWwge1xuICAgICAgfVxuICAgICAgLmJ0blNidCB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5jcmVhdGVQYXNzd29yZFdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY3JlYXRlUGFzc3dvcmRXcmFwcGVyIC5tYWluLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uY3JlYXRlUGFzc3dvcmRXcmFwcGVyIC5tYWluLWNvbnRlbnQgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY3JlYXRlUGFzc3dvcmRXcmFwcGVyIC5tYWluLWNvbnRlbnQgZm9ybSAuYnRuU2J0IHtcbiAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/createpassword/cp/cp.component.ts":
/*!***************************************************!*\
  !*** ./src/app/createpassword/cp/cp.component.ts ***!
  \***************************************************/
/*! exports provided: CpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpComponent", function() { return CpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_admin_dashboard_admin_serv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin/admin-dashboard/admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _allserv_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../allserv.service */ "./src/app/allserv.service.ts");







let CpComponent = class CpComponent {
    constructor(activatedRoute, fb, adminServ, toastServ, router, allServ) {
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.adminServ = adminServ;
        this.toastServ = toastServ;
        this.router = router;
        this.allServ = allServ;
    }
    ngOnInit() {
        this.resetkeyId = this.activatedRoute.snapshot.params["id"];
        this.setNewPasswordForm = this.fb.group({
            newpassword: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)])
            ]
        });
        this.currentRoute = localStorage.getItem("route");
    }
    submitNewPassword(data) {
        let dataToPass = {
            resetkey: this.resetkeyId,
            password: data.newpassword
        };
        this.adminServ.resetNewPassword(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.toastServ.success(data["message"], "", {
                    timeOut: 1000
                });
                this.router.navigate([this.currentRoute]);
            }
            else if (data["code"] === 400) {
                this.toastServ.error("Failed to reset password", data["message"], {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error("Server - Error", error["error"]["message"], {
                timeOut: 1000
            });
        });
    }
};
CpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _admin_admin_dashboard_admin_serv_service__WEBPACK_IMPORTED_MODULE_4__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _allserv_service__WEBPACK_IMPORTED_MODULE_6__["AllservService"] }
];
CpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-cp",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createpassword/cp/cp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cp.component.scss */ "./src/app/createpassword/cp/cp.component.scss")).default]
    })
], CpComponent);



/***/ }),

/***/ "./src/app/createpassword/createpassword-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/createpassword/createpassword-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CreatepasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepasswordRoutingModule", function() { return CreatepasswordRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cp_cp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cp/cp.component */ "./src/app/createpassword/cp/cp.component.ts");




const routes = [
    {
        path: "",
        children: [{ path: "", component: _cp_cp_component__WEBPACK_IMPORTED_MODULE_3__["CpComponent"] }]
    }
];
let CreatepasswordRoutingModule = class CreatepasswordRoutingModule {
};
CreatepasswordRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CreatepasswordRoutingModule);



/***/ }),

/***/ "./src/app/createpassword/createpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/createpassword/createpassword.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXBhc3N3b3JkL2NyZWF0ZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/createpassword/createpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/createpassword/createpassword.component.ts ***!
  \************************************************************/
/*! exports provided: CreatepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepasswordComponent", function() { return CreatepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CreatepasswordComponent = class CreatepasswordComponent {
    constructor() { }
    ngOnInit() { }
};
CreatepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-createpassword",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./createpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/createpassword/createpassword.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./createpassword.component.css */ "./src/app/createpassword/createpassword.component.css")).default]
    })
], CreatepasswordComponent);



/***/ }),

/***/ "./src/app/createpassword/createpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/createpassword/createpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: CreatepasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatepasswordModule", function() { return CreatepasswordModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _createpassword_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createpassword-routing.module */ "./src/app/createpassword/createpassword-routing.module.ts");
/* harmony import */ var _createpassword_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createpassword.component */ "./src/app/createpassword/createpassword.component.ts");
/* harmony import */ var _cp_cp_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cp/cp.component */ "./src/app/createpassword/cp/cp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let CreatepasswordModule = class CreatepasswordModule {
};
CreatepasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_createpassword_component__WEBPACK_IMPORTED_MODULE_5__["CreatepasswordComponent"], _cp_cp_component__WEBPACK_IMPORTED_MODULE_6__["CpComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _createpassword_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreatepasswordRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], CreatepasswordModule);



/***/ })

}]);
//# sourceMappingURL=app-createpassword-createpassword-module-es2015.js.map