function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-admin-admin-module~app-salon-salon-module"], {
  /***/
  "./src/app/admin/admin-dashboard/admin-serv.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-serv.service.ts ***!
    \*************************************************************/

  /*! exports provided: AdminServService */

  /***/
  function srcAppAdminAdminDashboardAdminServServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminServService", function () {
      return AdminServService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js"); // import { Observable } from 'rxjs';
    // import 'rxjs/add/operator/catch';
    // import 'rxjs/add/observable/throw';


    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("LoggedInUser")
      })
    };

    var AdminServService = /*#__PURE__*/function () {
      function AdminServService(http) {
        _classCallCheck(this, AdminServService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
        this.headerText = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](""); // Initialize with emtpy string

        this.headerResponse = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
      }

      _createClass(AdminServService, [{
        key: "setHeaderResponse",
        value: function setHeaderResponse(data) {
          // Fire the update event with the new data
          this.headerResponse.next(data);
        }
      }, {
        key: "getHeaderResponse",
        value: function getHeaderResponse() {
          return this.headerResponse.asObservable();
        }
      }, {
        key: "setHeaderText",
        value: function setHeaderText(data) {
          // Fire the update event with the new data
          this.headerText.next(data);
        }
      }, {
        key: "getHeaderText",
        value: function getHeaderText() {
          return this.headerText.asObservable();
        }
      }, {
        key: "getSalonsList",
        value: function getSalonsList(data) {
          return this.http.post(this.baseUrl + "/activesalons", data);
        }
      }, {
        key: "getSalonsRequest",
        value: function getSalonsRequest(data) {
          return this.http.post(this.baseUrl + "/salonsrequest", data, httpOptions);
        }
      }, {
        key: "approveSalonRequests",
        value: function approveSalonRequests(data) {
          return this.http.post(this.baseUrl + "/acceptrequest", data);
        }
      }, {
        key: "getActiveSalonsCount",
        value: function getActiveSalonsCount(data) {
          return this.http.post(this.baseUrl + "/salonscount", data, httpOptions);
        }
      }, {
        key: "getActiveUsersCount",
        value: function getActiveUsersCount(data) {
          return this.http.post(this.baseUrl + "/userscount", data, httpOptions);
        }
      }, {
        key: "declineSalonRequest",
        value: function declineSalonRequest(data) {
          return this.http.post(this.baseUrl + "/suspendsalon", data);
        }
      }, {
        key: "getActiveUsersList",
        value: function getActiveUsersList(data) {
          return this.http.post(this.baseUrl + "/userslist", data);
        }
      }, {
        key: "getAdmincategoriesList",
        value: function getAdmincategoriesList(data) {
          return this.http.post(this.baseUrl + "/admin-categories", data, httpOptions);
        }
      }, {
        key: "getCategories",
        value: function getCategories(data) {
          return this.http.post(this.baseUrl + "/categories", data, httpOptions);
        }
      }, {
        key: "addCategories",
        value: function addCategories(data) {
          return this.http.post(this.baseUrl + "/add-categories", data, httpOptions);
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(data) {
          return this.http.post(this.baseUrl + "/update-category", data, httpOptions);
        }
      }, {
        key: "updateService",
        value: function updateService(data) {
          return this.http.post(this.baseUrl + "/update-service", data, httpOptions);
        }
      }, {
        key: "deleteCategories",
        value: function deleteCategories(data) {
          return this.http.post(this.baseUrl + "/remove-categories", data, httpOptions);
        }
      }, {
        key: "getArchivedCategories",
        value: function getArchivedCategories(data) {
          return this.http.post(this.baseUrl + "/archive-categories", data, httpOptions);
        }
      }, {
        key: "getRolesList",
        value: function getRolesList(data) {
          return this.http.post(this.baseUrl + "/roles", data, httpOptions);
        }
      }, {
        key: "addRoles",
        value: function addRoles(data) {
          return this.http.post(this.baseUrl + "/add-role", data, httpOptions);
        }
      }, {
        key: "deleteRoles",
        value: function deleteRoles(data) {
          return this.http.post(this.baseUrl + "/remove-role", data, httpOptions);
        }
      }, {
        key: "updateRoles",
        value: function updateRoles(data) {
          return this.http.post(this.baseUrl + "/edit-role", data, httpOptions);
        }
      }, {
        key: "awakeCategories",
        value: function awakeCategories(data) {
          return this.http.post(this.baseUrl + "/awake-category", data, httpOptions);
        }
      }, {
        key: "addServices",
        value: function addServices(data) {
          return this.http.post(this.baseUrl + "/add-service", data, httpOptions);
        }
      }, {
        key: "removeServices",
        value: function removeServices(data) {
          return this.http.post(this.baseUrl + "/remove-service", data, httpOptions);
        }
      }, {
        key: "getServices",
        value: function getServices(data) {
          return this.http.post(this.baseUrl + "/active-services", data, httpOptions);
        }
      }, {
        key: "fetchAllUsersCommon",
        value: function fetchAllUsersCommon(data) {
          return this.http.post(this.baseUrl + "/all-users", data, httpOptions);
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(data) {
          return this.http.post(this.baseUrl + "/user-detail", data, httpOptions);
        }
      }, {
        key: "getAdminDetails",
        value: function getAdminDetails(data) {
          return this.http.post(this.baseUrl + "/get-admin-detail", data, httpOptions);
        }
      }, {
        key: "addAdminDetails",
        value: function addAdminDetails(data) {
          return this.http.post(this.baseUrl + "/admin-detail", data, httpOptions);
        }
      }, {
        key: "getMonthlyUsersCount",
        value: function getMonthlyUsersCount(data) {
          return this.http.post(this.baseUrl + "/get-analysis", data, httpOptions);
        }
      }, {
        key: "updateAdminDetails",
        value: function updateAdminDetails(data) {
          return this.http.post(this.baseUrl + "/update-admin", data, httpOptions);
        }
      }, {
        key: "getSalonDetails",
        value: function getSalonDetails(data) {
          return this.http.post(this.baseUrl + "/view-salon", data, httpOptions);
        }
      }, {
        key: "addPlans",
        value: function addPlans(data) {
          return this.http.post(this.baseUrl + "/create-plan", data);
        }
      }, {
        key: "getPlans",
        value: function getPlans(data) {
          return this.http.post(this.baseUrl + "/get-plan", data);
        }
      }, {
        key: "editPlans",
        value: function editPlans(data) {
          return this.http.post(this.baseUrl + "/update-plan", data);
        }
      }, {
        key: "deletePlans",
        value: function deletePlans(data) {
          return this.http.post(this.baseUrl + "/delete-plan", data);
        }
      }, {
        key: "activeUser",
        value: function activeUser(data) {
          return this.http.post(this.baseUrl + "/active-user-check", data, httpOptions);
        }
      }, {
        key: "deactiveUser",
        value: function deactiveUser(data) {
          return this.http.post(this.baseUrl + "/deactive-user-check", data, httpOptions);
        }
      }, {
        key: "getSalonSubscriptionList",
        value: function getSalonSubscriptionList(data) {
          return this.http.post(this.baseUrl + "/get-subscriptions", data);
        }
      }, {
        key: "resetNewPassword",
        value: function resetNewPassword(data) {
          return this.http.post(this.baseUrl + "/reset-password", data);
        }
      }, {
        key: "getUpcomingBookings",
        value: function getUpcomingBookings(data) {
          return this.http.post(this.baseUrl + "/get-bookings-admin", data);
        }
      }, {
        key: "cancelBookings",
        value: function cancelBookings(data) {
          return this.http.post(this.baseUrl + "/cancel-booking", data);
        }
      }]);

      return AdminServService;
    }();

    AdminServService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminServService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AdminServService);
    /***/
  },

  /***/
  "./src/app/salon/auth.service.ts":
  /*!***************************************!*\
    !*** ./src/app/salon/auth.service.ts ***!
    \***************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppSalonAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(myRoute) {
        _classCallCheck(this, AuthService);

        this.myRoute = myRoute;
        this.idSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
        this.currentIds = this.idSource.asObservable();
      }

      _createClass(AuthService, [{
        key: "sendToken",
        value: function sendToken(token) {
          localStorage.setItem("LoggedInUser", token);
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("LoggedInUser");
        }
      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          return this.getToken() !== null;
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("LoggedInUser");
          this.myRoute.navigate(['salon']);
        }
      }, {
        key: "sendIdS",
        value: function sendIdS(data) {
          this.idSource.next(data);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/common.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/salon/dashboard/common.service.ts ***!
    \***************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSalonDashboardCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json"
      })
    }; // const httpOpt = {
    //   headers: new HttpHeaders({
    //     "Content-Type": "multipart/form-data\n"
    //   })
    // };

    var CommonService = /*#__PURE__*/function () {
      function CommonService(http) {
        _classCallCheck(this, CommonService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
        this.customer_id = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        this.salon_id = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]("");
        this.stripeConnected = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
      }

      _createClass(CommonService, [{
        key: "setCustomer_id",
        value: function setCustomer_id(data) {
          // Fire the update event with the new data
          this.customer_id.next(data);
        }
      }, {
        key: "getCustomer_id",
        value: function getCustomer_id() {
          return this.customer_id.asObservable();
        }
      }, {
        key: "setStripeConnectedStatus",
        value: function setStripeConnectedStatus(data) {
          // Fire the update event with the new data
          this.stripeConnected.next(data);
        }
      }, {
        key: "getStripeConnectedStatus",
        value: function getStripeConnectedStatus() {
          return this.stripeConnected.asObservable();
        }
      }, {
        key: "setSalon_id",
        value: function setSalon_id(data) {
          // Fire the update event with the new data
          this.salon_id.next(data);
        }
      }, {
        key: "getSalon_id",
        value: function getSalon_id() {
          return this.salon_id.asObservable();
        }
      }, {
        key: "saveSalonDetails",
        value: function saveSalonDetails(data) {
          return this.http.post(this.baseUrl + "/addsalon", data);
        }
      }, {
        key: "serviceList",
        value: function serviceList(data) {
          return this.http.post(this.baseUrl + "/servicelist", data, httpOptions);
        }
      }, {
        key: "addSalonService",
        value: function addSalonService(data) {
          return this.http.post(this.baseUrl + "/addsalonservices", data, httpOptions);
        }
      }, {
        key: "removeSalonService",
        value: function removeSalonService(data) {
          return this.http.post(this.baseUrl + "/removesalonservice", data, httpOptions);
        }
      }, {
        key: "connectStripeAccount",
        value: function connectStripeAccount(data) {
          return this.http.post(this.baseUrl + "/connect-account", data);
        }
      }, {
        key: "getAppointmentList",
        value: function getAppointmentList(data) {
          return this.http.post(this.baseUrl + "/upcoming-appointment", data);
        }
      }, {
        key: "completeAppointment",
        value: function completeAppointment(data) {
          return this.http.post(this.baseUrl + "/appointment-complete", data);
        }
      }, {
        key: "getSalonData",
        value: function getSalonData(data) {
          return this.http.post(this.baseUrl + "/salondatabyuser", data, httpOptions);
        }
      }, {
        key: "createToken",
        value: function createToken(data) {
          return this.http.post(this.baseUrl + "/create-token", data);
        }
      }, {
        key: "getSalonServicesList",
        value: function getSalonServicesList(data) {
          return this.http.post(this.baseUrl + "/salonservicelist", data, httpOptions);
        }
      }, {
        key: "getEmployeeServList",
        value: function getEmployeeServList(data) {
          return this.http.post(this.baseUrl + "/employeeservicelist", data, httpOptions);
        }
      }, {
        key: "getCategories",
        value: function getCategories(data) {
          return this.http.post(this.baseUrl + "/categories", data, httpOptions);
        }
      }, {
        key: "getServices",
        value: function getServices(data) {
          return this.http.post(this.baseUrl + "/services", data, httpOptions);
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(data) {
          return this.http.post(this.baseUrl + "/addemployee", data, httpOptions);
        }
      }, {
        key: "assignEmpService",
        value: function assignEmpService(data) {
          return this.http.post(this.baseUrl + "/assignservice", data, httpOptions);
        }
      }, {
        key: "addEmpService",
        value: function addEmpService(data) {
          return this.http.post(this.baseUrl + "/addsalonservices", data, httpOptions);
        }
      }, {
        key: "updateSalonService",
        value: function updateSalonService(data) {
          return this.http.post(this.baseUrl + "/updatesalonservices", data, httpOptions);
        }
      }, {
        key: "removeEmpService",
        value: function removeEmpService(data) {
          return this.http.post(this.baseUrl + "/removeemployee", data, httpOptions);
        }
      }, {
        key: "updateEployee",
        value: function updateEployee(data) {
          return this.http.post(this.baseUrl + "/updateemployee", data, httpOptions);
        }
      }, {
        key: "addPromocodes",
        value: function addPromocodes(data) {
          return this.http.post(this.baseUrl + "/add-promocode", data);
        }
      }, {
        key: "getPromocode",
        value: function getPromocode(data) {
          return this.http.post(this.baseUrl + "/promocodes", data);
        }
      }, {
        key: "deletePromocodes",
        value: function deletePromocodes(data) {
          return this.http.post(this.baseUrl + "/delete-promocode", data);
        }
      }, {
        key: "updateSalonDetails",
        value: function updateSalonDetails(data) {
          return this.http.post(this.baseUrl + "/update-salon", data);
        }
      }, {
        key: "getTransactionsList",
        value: function getTransactionsList(data) {
          console.log("dataaaa", data);
          return this.http.post(this.baseUrl + "/get-transactions", data);
        }
      }, {
        key: "getSalonDetailsData",
        value: function getSalonDetailsData(data) {
          return this.http.post(this.baseUrl + "/get-salon", data);
        }
      }, {
        key: "addSalonTIming",
        value: function addSalonTIming(data) {
          return this.http.post(this.baseUrl + "/addsalonweeklyslot", data, httpOptions);
        }
      }, {
        key: "getSalonTiming",
        value: function getSalonTiming(data) {
          return this.http.post(this.baseUrl + "/salonweeklyslot", data, httpOptions);
        }
      }, {
        key: "getSalonSubscriptionDetail",
        value: function getSalonSubscriptionDetail(data) {
          return this.http.post(this.baseUrl + "/salon-subscribe-detail", data);
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/salon/login/login.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/salon/login/login.service.ts ***!
    \**********************************************/

  /*! exports provided: LoginService */

  /***/
  function srcAppSalonLoginLoginServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginService", function () {
      return LoginService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
        Authorization: ""
      })
    };

    var LoginService = /*#__PURE__*/function () {
      function LoginService(http) {
        _classCallCheck(this, LoginService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
      }

      _createClass(LoginService, [{
        key: "loginSalon",
        value: function loginSalon(data) {
          return this.http.post(this.baseUrl + "/login", data);
        }
      }, {
        key: "signUpSalon",
        value: function signUpSalon(data) {
          return this.http.post(this.baseUrl + "/register", data);
        }
      }]);

      return LoginService;
    }();

    LoginService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], LoginService);
    /***/
  }
}]);
//# sourceMappingURL=default~app-admin-admin-module~app-salon-salon-module-es5.js.map