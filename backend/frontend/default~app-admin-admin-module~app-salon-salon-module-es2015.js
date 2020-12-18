(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-admin-admin-module~app-salon-salon-module"],{

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
    })
};
// const httpOpt = {
//   headers: new HttpHeaders({
//     "Content-Type": "multipart/form-data\n"
//   })
// };
let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
        this.customer_id = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        this.salon_id = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        this.stripeConnected = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    setCustomer_id(data) {
        // Fire the update event with the new data
        this.customer_id.next(data);
    }
    getCustomer_id() {
        return this.customer_id.asObservable();
    }
    setStripeConnectedStatus(data) {
        // Fire the update event with the new data
        this.stripeConnected.next(data);
    }
    getStripeConnectedStatus() {
        return this.stripeConnected.asObservable();
    }
    setSalon_id(data) {
        // Fire the update event with the new data
        this.salon_id.next(data);
    }
    getSalon_id() {
        return this.salon_id.asObservable();
    }
    saveSalonDetails(data) {
        return this.http.post(this.baseUrl + "/addsalon", data);
    }
    serviceList(data) {
        return this.http.post(this.baseUrl + "/servicelist", data, httpOptions);
    }
    addSalonService(data) {
        return this.http.post(this.baseUrl + "/addsalonservices", data, httpOptions);
    }
    removeSalonService(data) {
        return this.http.post(this.baseUrl + "/removesalonservice", data, httpOptions);
    }
    connectStripeAccount(data) {
        return this.http.post(this.baseUrl + "/connect-account", data);
    }
    getAppointmentList(data) {
        return this.http.post(this.baseUrl + "/upcoming-appointment", data);
    }
    completeAppointment(data) {
        return this.http.post(this.baseUrl + "/appointment-complete", data);
    }
    getSalonData(data) {
        return this.http.post(this.baseUrl + "/salondatabyuser", data, httpOptions);
    }
    createToken(data) {
        return this.http.post(this.baseUrl + "/create-token", data);
    }
    getSalonServicesList(data) {
        return this.http.post(this.baseUrl + "/salonservicelist", data, httpOptions);
    }
    getEmployeeServList(data) {
        return this.http.post(this.baseUrl + "/employeeservicelist", data, httpOptions);
    }
    getCategories(data) {
        return this.http.post(this.baseUrl + "/categories", data, httpOptions);
    }
    getServices(data) {
        return this.http.post(this.baseUrl + "/services", data, httpOptions);
    }
    addEmployee(data) {
        return this.http.post(this.baseUrl + "/addemployee", data, httpOptions);
    }
    assignEmpService(data) {
        return this.http.post(this.baseUrl + "/assignservice", data, httpOptions);
    }
    addEmpService(data) {
        return this.http.post(this.baseUrl + "/addsalonservices", data, httpOptions);
    }
    updateSalonService(data) {
        return this.http.post(this.baseUrl + "/updatesalonservices", data, httpOptions);
    }
    removeEmpService(data) {
        return this.http.post(this.baseUrl + "/removeemployee", data, httpOptions);
    }
    updateEployee(data) {
        return this.http.post(this.baseUrl + "/updateemployee", data, httpOptions);
    }
    addPromocodes(data) {
        return this.http.post(this.baseUrl + "/add-promocode", data);
    }
    getPromocode(data) {
        return this.http.post(this.baseUrl + "/promocodes", data);
    }
    deletePromocodes(data) {
        return this.http.post(this.baseUrl + "/delete-promocode", data);
    }
    updateSalonDetails(data) {
        return this.http.post(this.baseUrl + "/update-salon", data);
    }
    getTransactionsList(data) {
        console.log("dataaaa", data);
        return this.http.post(this.baseUrl + "/get-transactions", data);
    }
    getSalonDetailsData(data) {
        return this.http.post(this.baseUrl + "/get-salon", data);
    }
    addSalonTIming(data) {
        return this.http.post(this.baseUrl + "/addsalonweeklyslot", data, httpOptions);
    }
    getSalonTiming(data) {
        return this.http.post(this.baseUrl + "/salonweeklyslot", data, httpOptions);
    }
    getSalonSubscriptionDetail(data) {
        return this.http.post(this.baseUrl + "/salon-subscribe-detail", data);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CommonService);



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
        return this.http.post(this.baseUrl + "/login", data);
    }
    signUpSalon(data) {
        return this.http.post(this.baseUrl + "/register", data);
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



/***/ })

}]);
//# sourceMappingURL=default~app-admin-admin-module~app-salon-salon-module-es2015.js.map