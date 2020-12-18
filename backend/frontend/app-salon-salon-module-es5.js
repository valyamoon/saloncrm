function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-salon-salon-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/booking/booking.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/booking/booking.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardBookingBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-tab-group (selectedIndexChange)=\"selectedIndexChange($event)\">\n  <mat-tab label=\"Ucoming Bookings\"\n    ><div class=\"check-spa-outer m-t-40\">\n      <div class=\"create-availabillity\">\n        <div class=\"mat-elevation-z8\">\n          <!-- \f<Modal Popup for add categories end here> -->\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"bookingid\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>\n                Order Id\n              </th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.orderId }}</td>\n            </ng-container>\n            <!-- Name Column -->\n\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.firstName }}<span class=\"space\"></span\n                >{{ element.lastName }}\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n              <td mat-cell *matCellDef=\"let element\">\n                <span class=\"completed\" *ngIf=\"element.isCompleted === true\"\n                  >Completed</span\n                >\n                <span class=\"completed\" *ngIf=\"element.isActive === true\"\n                  >Active</span\n                >\n                <span class=\"completed\" *ngIf=\"element.isCancelled === true\">\n                  Cancelled\n                </span>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"service\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header>Service</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.servicename }}\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n              <th mat-header-cell *matHeaderCellDef>Action</th>\n              <td mat-cell *matCellDef=\"let element\" class=\"action-btns \">\n                <a\n                  title=\"Detaisl\"\n                  (click)=\"getDetails(element)\"\n                  class=\"delete-info\"\n                >\n                  <img\n                    title=\"Details\"\n                    src=\"../../../../assets/images/view.svg\"\n                    width=\"20px\"\n                  />\n                </a>\n                <button\n                  (click)=\"completeAppointment(element)\"\n                  class=\"btn btn-sign-in bts\"\n                >\n                  Complete\n                </button>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n          </table>\n\n          <mat-paginator\n            [length]=\"bookingCount\"\n            [pageSize]=\"count\"\n            (page)=\"paginate($event)\"\n            [pageSizeOptions]=\"[5, 10, 15, 20]\"\n            showFirstLastButtons\n          ></mat-paginator>\n          <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n            <div class=\"noRec\">No Records Found</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Completed Bookings\">\n    <div class=\"check-spa-outer m-t-40\">\n      <div class=\"create-availabillity\">\n        <div class=\"mat-elevation-z8\">\n          <!-- \f<Modal Popup for add categories end here> -->\n          <table mat-table [dataSource]=\"dataSource\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"bookingid\">\n              <th mat-header-cell *matHeaderCellDef>Order Id</th>\n              <td mat-cell *matCellDef=\"let element\">{{ element.orderId }}</td>\n            </ng-container>\n            <!-- Name Column -->\n\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef>Name</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.firstName }}{{ element.lastName }}\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"status\">\n              <th mat-header-cell *matHeaderCellDef>Status</th>\n              <td mat-cell *matCellDef=\"let element\">\n                <span class=\"completed\" *ngIf=\"element.isCompleted === true\"\n                  >Completed</span\n                >\n                <span class=\"completed\" *ngIf=\"element.isActive === true\"\n                  >Active</span\n                >\n                <span class=\"completed\" *ngIf=\"element.isCancelled === true\">\n                  Cancelled\n                </span>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"service\">\n              <th mat-header-cell *matHeaderCellDef>Service</th>\n              <td mat-cell *matCellDef=\"let element\">\n                {{ element.servicename }}\n              </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"action\">\n              <th mat-header-cell *matHeaderCellDef>Action</th>\n              <td mat-cell *matCellDef=\"let element\" class=\"action-btns \">\n                <a\n                  title=\"Detaisl\"\n                  (click)=\"getDetails(element)\"\n                  class=\"delete-info\"\n                >\n                  <img\n                    title=\"Details\"\n                    src=\"../../../../assets/images/view.svg\"\n                    width=\"20px\"\n                  />\n                </a>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n          </table>\n\n          <mat-paginator\n            [length]=\"bookingCount\"\n            [pageSize]=\"count\"\n            (page)=\"paginate($event)\"\n            [pageSizeOptions]=\"[5, 10, 15, 20]\"\n            showFirstLastButtons\n          ></mat-paginator>\n          <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n            <div class=\"noRec\">No Records Found</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n\n<div class=\"overlay\" *ngIf=\"isModal\">\n  <div class=\"mainSection col-lg-6 col-md-6 col-sm-12\">\n    <div class=\"fields\">\n      <label>Name:</label>\n      <div class=\"field\">\n        {{ appointmentDetails.firstName }} {{ appointmentDetails.lastName }}\n      </div>\n    </div>\n    <div class=\"fields\">\n      <label>Attended By:</label>\n      <div class=\"field\">\n        {{ appointmentDetails.empname }}\n      </div>\n    </div>\n    <div class=\"fields\">\n      <label>Duration:</label>\n      <div class=\"field\">\n        {{ appointmentDetails.duration }}\n      </div>\n    </div>\n    <div class=\"fields\">\n      <label>OrderId:</label>\n      <div class=\"field\">\n        {{ appointmentDetails.orderId }}\n      </div>\n    </div>\n    <div class=\"fields\">\n      <label>Payment Type:</label>\n      <div class=\"field\">{{ appointmentDetails.paymentType }}</div>\n    </div>\n    <div class=\"fields\">\n      <label>Start Time:</label>\n      <div class=\"field\">{{ appointmentDetails.starttime }}</div>\n    </div>\n    <div class=\"fields\">\n      <label>End Time:</label>\n      <div class=\"field\">{{ appointmentDetails.endtime }}</div>\n    </div>\n    <div class=\"fields\">\n      <label>Amount:</label>\n      <div class=\"field\">{{ appointmentDetails.totalamount }}</div>\n    </div>\n\n    <div class=\"btnArea\">\n      <button class=\"btn btn-sign-in bts\" (click)=\"dismissModal()\">\n        Close\n      </button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardConfirmationDialogConfirmationDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-content\">\n    <div class=\"modal-header\">\n        <h4>{{ title || \"Confirm\" }}</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>{{ message || \"Are you sure?\" }}</p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancel()\">\n            Cancel\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">\n            OK\n        </button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/connect-account/connect-account.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/connect-account/connect-account.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardConnectAccountConnectAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"connectAccountWrapper\">\n  <div class=\"content\">\n    <div class=\"stripeStatus\">\n      Your Stripe Account is\n      <span *ngIf=\"!isStripeConnected\" class=\"disconnected\">Disconnected.</span>\n      <span *ngIf=\"isStripeConnected\" class=\"connected\">Connected.</span>.\n    </div>\n    <p>Please ensure your stripe account is connected to recieve payments.</p>\n  </div>\n  <div class=\"stripeBtn\">\n    <button class=\" stripeButton\" (click)=\"createStripeConnection()\">\n      <img src=\"../../../../assets/images/stripe.png\" />\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/dashboard.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/dashboard.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-salon-header></app-salon-header>\n<div class=\"check-spa-outer\">\n  <div class=\"container check-timing-sec\">\n    <div class=\"row\">\n      <div class=\"col-lg-3\">\n        <div class=\"check-spa\">\n          <div class=\"edit-info\">\n            <a\n              [routerLink]=\"'edit-salon'\"\n              routerLinkActive=\"router-link-active\"\n            >\n              <img src=\"../../../assets/images/edit.svg\"\n            /></a>\n          </div>\n\n          <div class=\"check-spa-image-outer\">\n            <div class=\"check-spa-image\">\n              <img src=\"{{ salonData?.image }}\" class=\"profileImage\" />\n            </div>\n            <h4>\n              {{ salonData?.name }}\n            </h4>\n          </div>\n          <div class=\"salon-info\">\n            <!-- <div class=\"salon-info-inner\">\n                            <img src=\"../../../assets/images/mail.svg\">\n                            <h5>checkers_spa_salon@gmail.com</h5>\n                        </div> -->\n            <div class=\"salon-info-inner\">\n              <img src=\"../../../assets/images/telephone.svg\" />\n              <h5>+{{ salonData?.code }} {{ salonData?.contact }}</h5>\n            </div>\n            <div class=\"salon-info-inner\">\n              <img src=\"../../../assets/images/address.svg\" />\n              <h5>{{ salonData?.salonaddress }}</h5>\n            </div>\n          </div>\n          <!-- <div class=\"about-salon\">\n            <h2>\n              About\n            </h2>\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n              enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            </p>\n          </div> -->\n          <div class=\"about-salon\">\n            <h2>\n              <a\n                [routerLink]=\"'subscription'\"\n                routerLinkActive=\"router-link-active\"\n              >\n                Subscription Details\n              </a>\n            </h2>\n            <h2>\n              <a\n                [routerLink]=\"'promocode'\"\n                routerLinkActive=\"router-link-active\"\n              >\n                Manage Promocode\n              </a>\n            </h2>\n            <h2>\n              <a [routerLink]=\"'connect'\" routerLinkActive=\"router-link-active\">\n                Connect Account\n              </a>\n            </h2>\n            <!-- <div class=\"subscription-box\">\n              <div class=\"subscriptionWrapper\">\n                <div class=\"mainSection\">\n                  <div class=\"field\">\n                    Name:\n                    <div class=\"value\">\n                      hfghdfhg {{ subscriptionDetails.planDetails.id }}\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    Amount:\n                    <div class=\"value\">\n                      {{\n                      1250  subscriptionDetails.planDetails.amount | currency: \"USD\"\n                      }}\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    Billed:\n                    <div class=\"value\">\n                      1213132 {{ subscriptionDetails.planDetails.interval }}ly\n                    </div>\n                  </div>\n                  <div class=\"field\">\n                    Subscribed On: 152251\n                    <div class=\"value\">{{ subscriptionDate }}</div>\n                  </div>\n                  <div class=\"field\">\n                    Expiry Date: 116321651\n                    <div class=\"value\">{{ expirationDate }}</div>\n                  </div>\n                </div>\n              </div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-9\">\n        <router-outlet></router-outlet>\n        <app-footer></app-footer>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <app-subscribe></app-subscribe> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/editsalon/editsalon.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/editsalon/editsalon.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardEditsalonEditsalonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profileOverlay\">\n  <div id=\"profileArea\">\n    <h2>Update Salon Details</h2>\n    <form [formGroup]=\"submitSalonDetails\" class=\"salonDetailSave\">\n      <div class=\"field\">\n        <label class=\"label\">Name:</label>\n        <input\n          type=\"text\"\n          class=\"form-control fields\"\n          placeholder=\"Name\"\n          formControlName=\"name\"\n        />\n      </div>\n\n      <div class=\"field\">\n        <label class=\"label\">Image:</label>\n        <input\n          style=\"display: none\"\n          type=\"file\"\n          accept=\"image/*\"\n          (change)=\"uploadImage($event)\"\n          #fileInput\n        />\n        <button\n          class=\"btn btn-primary btn-sign-in btn-select-img\"\n          (click)=\"fileInput.click()\"\n        >\n          Select Image\n        </button>\n      </div>\n      <div class=\"field\">\n        <label class=\"label\">Open Time:</label>\n        <input\n          [min]=\"min\"\n          class=\"setTime form-control fields\"\n          (ngModelChange)=\"onOpenTimeSelect($event)\"\n          formControlName=\"opentime\"\n          [owlDateTime]=\"dtPicker2\"\n          [owlDateTimeTrigger]=\"dtPicker2\"\n          placeholder=\"Open time\"\n        />\n        <owl-date-time [pickerType]=\"'timer'\" #dtPicker2></owl-date-time>\n\n        <!-- <input type=\"time\" formControlName=\"opentime\" /> -->\n        <!-- <div class=\"ngx-timepicker-field-example\">\n            <ngx-timepicker-field\n              (timeSet)=\"openTime($event)\"\n              formControlName=\"opentime\"\n            ></ngx-timepicker-field>\n          </div> -->\n      </div>\n      <div class=\"field\">\n        <label class=\"label\">Close Time:</label>\n        <input\n          [min]=\"min\"\n          class=\"setTime form-control fields\"\n          (ngModelChange)=\"onCloseTimeSelect($event)\"\n          formControlName=\"closetime\"\n          [owlDateTime]=\"dtPicker1\"\n          [owlDateTimeTrigger]=\"dtPicker1\"\n          placeholder=\"Close time\"\n        />\n        <owl-date-time [pickerType]=\"'timer'\" #dtPicker1></owl-date-time>\n        <!-- <input type=\"time\" formControlName=\"closetime\" /> -->\n        <!-- <owl-date-time\n            [(ngModel)]=\"closetime\"\n            #dt1\n            pickerType=\"timer\"\n          ></owl-date-time> -->\n        <!-- <div class=\"ngx-timepicker-field-example\">\n            <ngx-timepicker-field\n              (timeSet)=\"closeTime($event)\"\n              formControlName=\"closetime\"\n            ></ngx-timepicker-field>\n          </div> -->\n      </div>\n      <!-- <div class=\"field\">\n          <label>Close Time:</label>\n          <input\n            type=\"time\"\n            placeholder=\"closetime\"\n            formControlName=\"closetime\"\n          />\n        </div> -->\n      <div class=\"field\">\n        <label class=\"label\">Country Code:</label>\n        <select class=\"select-css\" style=\"width: 60%;\" formControlName=\"code\">\n          <option *ngFor=\"let item of countriesData\" [ngValue]=\"item.code\"\n            >{{ item.name }} {{ item.code }}</option\n          >\n        </select>\n      </div>\n\n      <div class=\"field\">\n        <label class=\"label\">Location:</label>\n        <app-google-searc\n          class=\"geoLoc searchBlock\"\n          (setAddress)=\"getAddress($event)\"\n          adressType=\"geocode\"\n        >\n        </app-google-searc>\n      </div>\n\n      <div class=\"field\">\n        <label class=\"label\">Contact:</label>\n        <div class=\"phoneArea\">\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Contact\"\n            formControlName=\"contact\"\n          />\n          <div\n            *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\"\n            class=\"erroralert\"\n          >\n            <div *ngIf=\"contact.invalid\">\n              Invalid Contact Number\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label class=\"label\">Address:</label>\n        <input\n          type=\"text\"\n          class=\"form-control fields\"\n          placeholder=\"Address\"\n          formControlName=\"salonaddress\"\n        />\n      </div>\n\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"submitSalonDetails.invalid\"\n        (click)=\"updatetSalon(submitSalonDetails.value)\"\n      >\n        Update\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"cancelSalonUpdate()\">\n        Cancel\n      </button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/employee/add-employee/add-employee.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/employee/add-employee/add-employee.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardEmployeeAddEmployeeAddEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"check-spa-outer\">\n  <div class=\"employee-tabs\"></div>\n  <div class=\"create-availabillity\">\n    <div class=\"create-availabillity\">\n      <div class=\"create-availabillity-inner\">\n        <div class=\"employee-sec\">\n          <h2>Add Employees</h2>\n        </div>\n      </div>\n\n      <div class=\"inner-tab-section\">\n        <div class=\"add-employees-sec\">\n          <form [formGroup]=\"employeeForm\">\n            <div class=\"add-employees-detail\">\n              <div class=\"add-employees-inner\">\n                <div class=\"add-employees2\">\n                  <div class=\"row\">\n                    <label\n                      class=\"custom-label col-md-4 text-md-right align-middle\"\n                      >Name</label\n                    >\n                    <div class=\"select-employee col-md-5 \">\n                      <input\n                        type=\"text\"\n                        formControlName=\"name\"\n                        class=\"form-control\"\n                        placeholder=\"Enter Employee Name\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"btn-sec text-md-center\">\n                <input\n                  type=\"button\"\n                  class=\"btn  btn-save btn-cancel\"\n                  value=\"CANCEL\"\n                  (click)=\"resetForm()\"\n                />\n\n                <input\n                  type=\"submit\"\n                  class=\"btn btn-save\"\n                  value=\"SAVE\"\n                  [disabled]=\"employeeForm.invalid\"\n                  (click)=\"saveEmployee(employeeForm.value)\"\n                />\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/employee/employee.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/employee/employee.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardEmployeeEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"check-spa-outer\">\n  <div class=\"employee-tabs\"></div>\n  <div class=\"create-availabillity\">\n    <div class=\"create-availabillity-inner\">\n      <div class=\"employee-sec\">\n        <!-- <h2>Employees</h2> -->\n      </div>\n      <div class=\"add-employee\">\n        <a routerLink=\"/salon/home/add-employee\">\n          <div class=\"add-employee-inner\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </div>\n          <h2>Add Employee</h2>\n        </a>\n      </div>\n    </div>\n\n    <input\n      class=\"from-control search\"\n      (keyup)=\"applyFilter($event)\"\n      placeholder=\"Search\"\n    />\n    <div class=\"example-container mat-elevation-z8\" *ngIf=\"!noRecordsFound\">\n      <!-- \f<Modal Popup for add categories end here> -->\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Name:</span>\n            {{ element.name }}\n          </td>\n        </ng-container>\n        <!-- Name Column -->\n\n        <ng-container matColumnDef=\"servicename\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Services</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Services:</span>\n            {{ element.servicename ? element.servicename : \"\" }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"action-btns \">\n            <span class=\"mobile-label\">Action:</span>\n            <a\n              href=\"javascript:void(0);\"\n              (click)=\"openAssignServieModal(element)\"\n              class=\"asign-primary\"\n            >\n              <img src=\"../../../../assets/images/assign.svg\" />\n            </a>\n\n            <a\n              href=\"javascript:void(0);\"\n              (click)=\"openEditServiceModal(element)\"\n            >\n              <img src=\"../../../../assets/images/edit-ico.svg\" />\n            </a>\n            <a\n              href=\"javascript:void(0);\"\n              (click)=\"deleteEmployee(element)\"\n              class=\"delete-info\"\n            >\n              <img src=\"../../../../assets/images/delete-icon.svg\" />\n            </a>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"employeeCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n\n    <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n      <div class=\"noRec\">No Records Found</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"userDetailsOverlay\" *ngIf=\"isAddModal\">\n  <div class=\"main-section-area modal-md\">\n    <div class=\"header\">\n      <h4>Assign Service</h4>\n    </div>\n    <form [formGroup]=\"assignServiceForm\">\n      <div class=\"main-section\">\n        <div class=\"row add-employee\">\n          <div class=\"col-md-12\">\n            <label>Select Service:</label>\n            <mat-select-autocomplete\n              class=\"custom-ddl\"\n              [placeholder]=\"'Options Selection'\"\n              [errorMsg]=\"errorMessage\"\n              [showErrorMsg]=\"showError\"\n              [options]=\"serviceList\"\n              [display]=\"'name'\"\n              [value]=\"'id'\"\n              [multiple]=\"true\"\n              [labelCount]=\"2\"\n              [selectedOptions]=\"selectedOptions\"\n              (selectionChange)=\"getSelectedOptions($event)\"\n            >\n            </mat-select-autocomplete>\n          </div>\n        </div>\n      </div>\n      <div class=\"btn-Area\">\n        <button\n          class=\"btn btn-primary btn-sign-in\"\n          (click)=\"updateEmpService()\"\n        >\n          Assign\n        </button>\n        <button class=\" btn btn-sign-in btn-primary\" (click)=\"dismissModal()\">\n          Close\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<div class=\"userDetailsOverlay\" *ngIf=\"isEMployeeModal\">\n  <div class=\"main-section-area modal-md\">\n    <div class=\"header\">\n      <h4>Edit Employee</h4>\n    </div>\n    <div class=\"main-section\">\n      <div class=\"row add-employee\">\n        <div class=\"col-md-12\">\n          <label>Employee Name:</label>\n\n          <input\n            type=\"text\"\n            [(ngModel)]=\"editEmployeeData.name\"\n            class=\"form-control\"\n            placeholder=\"Enter Employee Name\"\n          />\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-Area\">\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        (click)=\"updateEmpployee(editEmployeeData)\"\n      >\n        Update\n      </button>\n      <button class=\" btn btn-sign-in btn-primary\" (click)=\"dismissEmpModal()\">\n        Close\n      </button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/footer/footer.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/footer/footer.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer-sec\">\n  2019 @, Bookapp. All rights reserved\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/google-searc/google-searc.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/google-searc/google-searc.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardGoogleSearcGoogleSearcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input\n  class=\"input form-control\"\n  type=\"text\"\n  [(ngModel)]=\"autocompleteInput\"\n  #addresstext\n/>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/profile/profile.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/profile/profile.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"check-spa-outer\">\n  <div class=\"employee-tabs \">\n    <mat-tab-group class=\"tabsArea\">\n      <mat-tab label=\"Service\">\n        <app-services></app-services>\n      </mat-tab>\n      <mat-tab label=\"Employee\">\n        <app-employee></app-employee>\n      </mat-tab>\n      <mat-tab label=\"Timing\">\n        <app-timing></app-timing>\n      </mat-tab>\n    </mat-tab-group>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/promcode/promcode.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/promcode/promcode.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardPromcodePromcodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"promcodeWrapper\">\n  <div class=\"header\">\n    <button\n      class=\"addPromoCode btn btn-primary btn-sign-in\"\n      (click)=\"showAddModal()\"\n    >\n      Add Promocode\n    </button>\n  </div>\n  <div class=\"mainSection\">\n    <mat-accordion>\n      <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Promocodes\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <div class=\"promocodesArea\" *ngFor=\"let item of promocodesListing\">\n          <div class=\"promocode\">{{ item.name }}</div>\n          <div class=\"promocode\">{{ item.value | currency: \"USD\" }}</div>\n          <div class=\"promocode\" (click)=\"deletePromocode(item)\">\n            <img src=\"../../../../assets/images/delete.svg\" class=\"delete\" />\n          </div>\n        </div>\n        <div class=\"noRecords\" *ngIf=\"noRecordsFound\">\n          No Promocodes Yet!!!\n        </div>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  <div class=\"modelOverlay\" *ngIf=\"showAddPromocode\">\n    <div class=\"headerText\"><h3>Add Promocode</h3></div>\n    <div class=\"main-content\">\n      <form [formGroup]=\"addPromocodeForm\">\n        <div class=\"fields\">\n          <label class=\"labels\">Name</label>\n          <input\n            type=\"text\"\n            placeholder=\"Name\"\n            class=\"form-control inp\"\n            formControlName=\"name\"\n          />\n        </div>\n        <div class=\"fields\">\n          <label class=\"labels\">Value</label>\n          <input\n            type=\"number\"\n            placeholder=\"$\"\n            class=\"form-control inp\"\n            formControlName=\"value\"\n          />\n        </div>\n        <div class=\"fields\">\n          <label class=\"labels\">Description</label>\n          <input\n            type=\"text\"\n            placeholder=\"Description\"\n            class=\"form-control inp\"\n            formControlName=\"description\"\n          />\n        </div>\n        <div class=\"fields\">\n          <label class=\"labels\">Terms & Condition</label>\n          <input\n            type=\"text\"\n            placeholder=\"Terms & Condition\"\n            class=\"form-control inp\"\n            formControlName=\"termsAndCondition\"\n          />\n        </div>\n        <button\n          class=\"btn btn-primary btn-sign-in add\"\n          [disabled]=\"addPromocodeForm.invalid\"\n          (click)=\"addPromocodes(addPromocodeForm.value)\"\n        >\n          Add\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/salon-header/salon-header.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/salon-header/salon-header.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardSalonHeaderSalonHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header-sec\">\n  <nav class=\"navbar navbar-expand-lg\">\n    <a class=\"navbar-brand\" href=\"#\">\n      <img src=\"../../../assets/images/logo_white.png\" />\n    </a>\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      (click)=\"toggleHeader()\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <i class=\"material-icons text-white\">\n        menu\n      </i>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"profile\"\n            >PROFILE <span class=\"sr-only\">(current)</span></a\n          >\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"add-employee\"> EMPLOYEES</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"add-service\"> SERVICES</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"booking\">BOOKINGS</a>\n        </li>\n        <li class=\"nav-item\" routerLinkActive=\"active\">\n          <a class=\"nav-link\" routerLink=\"transactions\">TRANSACTIONS</a>\n        </li>\n        <!-- <li class=\"nav-item notification-img\">\n          <a class=\"nav-link\" href=\"#\">\n            <img src=\"../../../assets/images/Notification .svg\" />\n          </a>\n        </li> -->\n\n        <button\n          mat-button\n          [matMenuTriggerFor]=\"menu\"\n          class=\"logout-section-btn\"\n        >\n          {{ salonData?.name }}\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item (click)=\"logout()\">Log out</button>\n        </mat-menu>\n      </ul>\n    </div>\n  </nav>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/salondetails/salondetails.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/salondetails/salondetails.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardSalondetailsSalondetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profileOverlay\" *ngIf=\"!checkIsApproved\">\n  <div id=\"profileArea\">\n    <div *ngIf=\"showPendingApproval\" class=\"pendingApprovalArea\">\n      <span class=\"pendingText\">Pending Approval</span>\n      <img\n        src=\"../../../../assets/images/Infinity-1s-200px.gif\"\n        class=\"pendingGIF\"\n      />\n      <p class=\"pendingText\">\n        You will recieve an Email confirmation of successful approval\n      </p>\n\n      <p class=\"pendingText\">Please login once you are approved</p>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"logout()\">\n        Logout\n      </button>\n    </div>\n    <div *ngIf=\"!showPendingApproval\">\n      <h2>Add Salon Details</h2>\n      <form [formGroup]=\"submitSalonDetails\" class=\"salonDetailSave\">\n        <div class=\"field\">\n          <label class=\"label\">Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control fields\"\n            placeholder=\"Name\"\n            formControlName=\"name\"\n          />\n        </div>\n\n        <div class=\"field\">\n          <label class=\"label\">Image:</label>\n          <input\n            style=\"display: none\"\n            type=\"file\"\n            accept=\"image/*\"\n            (change)=\"uploadImage($event)\"\n            #fileInput\n          />\n          <button\n            class=\"btn btn-primary btn-sign-in btn-select-img\"\n            (click)=\"fileInput.click()\"\n          >\n            Select Image\n          </button>\n        </div>\n        <div class=\"field\">\n          <label class=\"label\">Open Time:</label>\n          <input\n            [min]=\"min\"\n            class=\"setTime form-control fields\"\n            (ngModelChange)=\"onOpenTimeSelect($event)\"\n            formControlName=\"opentime\"\n            [owlDateTime]=\"dtPicker2\"\n            [owlDateTimeTrigger]=\"dtPicker2\"\n            placeholder=\"Open time\"\n          />\n          <owl-date-time [pickerType]=\"'timer'\" #dtPicker2></owl-date-time>\n\n          <!-- <input type=\"time\" formControlName=\"opentime\" /> -->\n          <!-- <div class=\"ngx-timepicker-field-example\">\n            <ngx-timepicker-field\n              (timeSet)=\"openTime($event)\"\n              formControlName=\"opentime\"\n            ></ngx-timepicker-field>\n          </div> -->\n        </div>\n        <div class=\"field\">\n          <label class=\"label\">Close Time:</label>\n          <input\n            [min]=\"min\"\n            class=\"setTime form-control fields\"\n            (ngModelChange)=\"onCloseTimeSelect($event)\"\n            formControlName=\"closetime\"\n            [owlDateTime]=\"dtPicker1\"\n            [owlDateTimeTrigger]=\"dtPicker1\"\n            placeholder=\"Close time\"\n          />\n          <owl-date-time [pickerType]=\"'timer'\" #dtPicker1></owl-date-time>\n          <!-- <input type=\"time\" formControlName=\"closetime\" /> -->\n          <!-- <owl-date-time\n            [(ngModel)]=\"closetime\"\n            #dt1\n            pickerType=\"timer\"\n          ></owl-date-time> -->\n          <!-- <div class=\"ngx-timepicker-field-example\">\n            <ngx-timepicker-field\n              (timeSet)=\"closeTime($event)\"\n              formControlName=\"closetime\"\n            ></ngx-timepicker-field>\n          </div> -->\n        </div>\n        <!-- <div class=\"field\">\n          <label>Close Time:</label>\n          <input\n            type=\"time\"\n            placeholder=\"closetime\"\n            formControlName=\"closetime\"\n          />\n        </div> -->\n        <div class=\"field\">\n          <label class=\"label\">Country Code:</label>\n          <div class=\"phoneArea\">\n            <select class=\"select-css\" formControlName=\"code\">\n              <option *ngFor=\"let item of countriesData\"\n                >{{ item.name }} {{ item.code }}</option\n              >\n            </select>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label class=\"label\">Contact:</label>\n          <div class=\"phoneArea\">\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              placeholder=\"Contact\"\n              formControlName=\"contact\"\n            />\n            <div\n              *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\"\n              class=\"erroralert\"\n            >\n              <div *ngIf=\"contact.invalid\">\n                Invalid Contact Number\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"field\">\n          <label class=\"label\">Get Current Location:</label>\n          <img\n            src=\"../../../../assets/images/current-location.png\"\n            (click)=\"getCurrentLocation()\"\n            alt=\"\"\n            title=\"Get current location\"\n          />\n        </div>\n\n        <div class=\"field\">\n          <label class=\"label\">Address:</label>\n          <input\n            type=\"text\"\n            class=\"form-control fields\"\n            placeholder=\"Address\"\n            formControlName=\"salonaddress\"\n          />\n        </div>\n\n        <button\n          class=\"btn btn-primary btn-sign-in\"\n          [disabled]=\"submitSalonDetails.invalid\"\n          (click)=\"submitSalon(submitSalonDetails.value)\"\n        >\n          Submit\n        </button>\n\n        <!-- <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n          <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"> </agm-marker>\n        </agm-map> -->\n      </form>\n    </div>\n  </div>\n</div>\n<div class=\"profileOverlay\" *ngIf=\"editSalonDetails\">\n  <div *ngIf=\"editSalonDetails\" id=\"profileArea\">\n    <h2>Update Salon Details</h2>\n    <form [formGroup]=\"submitSalonDetails\" class=\"salonDetailSave\">\n      <div class=\"field\">\n        <label class=\"label\">Name:</label>\n        <input\n          type=\"text\"\n          class=\"form-control fields\"\n          placeholder=\"Name\"\n          formControlName=\"name\"\n        />\n      </div>\n\n      <div class=\"field\">\n        <label class=\"label\">Image:</label>\n        <input\n          style=\"display: none\"\n          type=\"file\"\n          accept=\"image/*\"\n          (change)=\"uploadImage($event)\"\n          #fileInput\n        />\n        <button\n          class=\"btn btn-primary btn-sign-in btn-select-img\"\n          (click)=\"fileInput.click()\"\n        >\n          Select Image\n        </button>\n      </div>\n      <div class=\"field\">\n        <label class=\"label\">Open Time:</label>\n        <input\n          [min]=\"min\"\n          class=\"setTime form-control fields\"\n          (ngModelChange)=\"onOpenTimeSelect($event)\"\n          formControlName=\"opentime\"\n          [owlDateTime]=\"dtPicker2\"\n          [owlDateTimeTrigger]=\"dtPicker2\"\n          placeholder=\"Open time\"\n        />\n        <owl-date-time [pickerType]=\"'timer'\" #dtPicker2></owl-date-time>\n\n        <!-- <input type=\"time\" formControlName=\"opentime\" /> -->\n        <!-- <div class=\"ngx-timepicker-field-example\">\n            <ngx-timepicker-field\n              (timeSet)=\"openTime($event)\"\n              formControlName=\"opentime\"\n            ></ngx-timepicker-field>\n          </div> -->\n      </div>\n      <div class=\"field\">\n        <label class=\"label\">Close Time:</label>\n        <input\n          [min]=\"min\"\n          class=\"setTime form-control fields\"\n          (ngModelChange)=\"onCloseTimeSelect($event)\"\n          formControlName=\"closetime\"\n          [owlDateTime]=\"dtPicker1\"\n          [owlDateTimeTrigger]=\"dtPicker1\"\n          placeholder=\"Close time\"\n        />\n        <owl-date-time [pickerType]=\"'timer'\" #dtPicker1></owl-date-time>\n        <!-- <input type=\"time\" formControlName=\"closetime\" /> -->\n        <!-- <owl-date-time\n            [(ngModel)]=\"closetime\"\n            #dt1\n            pickerType=\"timer\"\n          ></owl-date-time> -->\n        <!-- <div class=\"ngx-timepicker-field-example\">\n            <ngx-timepicker-field\n              (timeSet)=\"closeTime($event)\"\n              formControlName=\"closetime\"\n            ></ngx-timepicker-field>\n          </div> -->\n      </div>\n      <!-- <div class=\"field\">\n          <label>Close Time:</label>\n          <input\n            type=\"time\"\n            placeholder=\"closetime\"\n            formControlName=\"closetime\"\n          />\n        </div> -->\n      <div class=\"field\">\n        <label class=\"label\">Contact:</label>\n        <div class=\"phoneArea\">\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Contact\"\n            formControlName=\"contact\"\n          />\n          <div\n            *ngIf=\"contact.invalid && (contact.dirty || contact.touched)\"\n            class=\"erroralert\"\n          >\n            <div *ngIf=\"contact.invalid\">\n              Invalid Contact Number\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"field\">\n        <label class=\"label\">Address:</label>\n        <input\n          type=\"text\"\n          class=\"form-control fields\"\n          placeholder=\"Address\"\n          formControlName=\"salonaddress\"\n        />\n      </div>\n\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"submitSalonDetails.invalid\"\n        (click)=\"updatetSalon(submitSalonDetails.value)\"\n      >\n        Update\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"cancelSalonUpdate()\">\n        Cancel\n      </button>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/services/add-service/add-service.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/services/add-service/add-service.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardServicesAddServiceAddServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"check-spa-outer add-service\">\n    <div class=\"employee-tabs\">\n    </div>\n    <div class=\"create-availabillity\">\n        <div class=\"create-availabillity-inner\">\n            <div class=\"employee-sec\">\n                <h2>Add Service</h2>\n            </div>\n        </div>\n        <div class=\"inner-tab-section\">\n            <div class=\"add-employees-sec\">\n                <form [formGroup]=\"serviceForm\">\n                    <div class=\"add-employees-detail\">\n                        <div class=\"add-employees-inner\">\n                            <div class=\"row\">\n                                <div class=\"col-md-4\">\n                                    <mat-form-field class=\"select-employee mat-ddl\">\n                                        <mat-label>Select Category</mat-label>\n                                        <mat-select formControlName=\"category_id\"\n                                            (selectionChange)='getServiceList($event)'>\n                                            <mat-option *ngFor=\"let category of categoryList\" [value]=\"category._id\">\n                                                {{category.catname}}\n                                            </mat-option>\n                                        </mat-select>\n                                    </mat-form-field>\n                                    <!-- <button type=\"button\" class=\"btn btn-link\">Add New</button> -->\n\n                                </div>\n                                <div class=\"col-md-4\">\n                                    <div class=\"add-btn \">\n                                        <a (click)=\"addNewService()\">\n                                            <div class=\"add-employee-inner\">\n                                                <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n                                            </div>\n                                            <span> Add New</span>\n                                        </a>\n                                    </div>\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"\" formArrayName=\"services\">\n                            <div *ngFor=\"let service of serviceArray.controls; let i = index\" [formGroupName]=\"i\">\n                                <div class=\"service-block row\">\n                                    <div class=\"col-md-4\">\n                                        <!-- <label class=\"custom-label\">Services</label> -->\n                                        <mat-form-field class=\"select-employee  mat-ddl\">\n                                            <mat-label>Select Service</mat-label>\n                                            <mat-select formControlName=\"service_id\" class=\"\">\n                                                <mat-option *ngFor=\"let service of servicesList\" [value]=\"service.id\">\n                                                    {{service.name}}\n                                                </mat-option>\n                                            </mat-select>\n                                        </mat-form-field>\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <label class=\"custom-label\">Price</label>\n                                        <input type=\"text\" formControlName=\"price\"\n                                            onkeypress=\"var key = window.event ? event.keyCode : event.which;if (event.keyCode == 8 || event.keyCode == 127)  return true; else if ( key < 48 || key > 57 ) return false; else return true;\" />\n                                    </div>\n                                    <div class=\"col-md-4\">\n                                        <label class=\"custom-label\">Duration</label>\n                                        <input type=\"text\" formControlName=\"duration\"\n                                            onkeypress=\"var key = window.event ? event.keyCode : event.which;if (event.keyCode == 8 || event.keyCode == 127)  return true; else if ( key < 48 || key > 57 ) return false; else return true;\" />\n                                    </div>\n                                    <a href=\"javascript:void(0);\" (click)=\"removeField(i)\">\n                                        <img _ngcontent-siu-c13=\"\" class=\"close-icons\"\n                                            src=\"../../../../assets/images/delete-icon.svg\">\n                                    </a>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"btn-sec\">\n                            <input type=\"button\" class=\"btn btn-save btn-cancel\" value=\"CANCEL\" (click)=\"resetForm()\">\n                            <input type=\"submit\" class=\"btn btn-save\" value=\"SAVE\"\n                                (click)=\"saveService(serviceForm.value)\">\n                        </div>\n                    </div>\n                </form>\n\n            </div>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/services/services.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/services/services.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"check-spa-outer\">\n  <div class=\"employee-tabs\"></div>\n  <div class=\"create-availabillity\">\n    <div class=\"create-availabillity-inner\">\n      <div class=\"employee-sec\"></div>\n      <div class=\"add-btn\">\n        <a routerLink=\"/salon/home/add-service\">\n          <div class=\"add-employee-inner\">\n            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          </div>\n          <span>Add Service</span>\n        </a>\n      </div>\n    </div>\n    <input\n      class=\"from-control search\"\n      (keyup)=\"applyFilter($event)\"\n      placeholder=\"Search\"\n    />\n    <div class=\"example-container mat-elevation-z8\" *ngIf=\"!noRecordsFound\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"categoryname\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Category</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Category:</span>\n            {{ element.categoryname }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"servicename\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Services</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Services:</span>\n            {{ element.servicename }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"price\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Price</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Price:</span>\n            {{ element.price }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"duration\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Duration</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Duration:</span>\n            {{ element.duration }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"is_active\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Status</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Status:</span>\n            <span *ngIf=\"element.is_active === true\" class=\"badge badge-success\"\n              >Active</span\n            >\n            <span *ngIf=\"element.is_active === false\" class=\"badge badge-danger\"\n              >Deleted</span\n            >\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"action-btns\">\n            <span class=\"mobile-label\">Action:</span>\n            <a\n              href=\"javascript:void(0);\"\n              (click)=\"openEditServiceModal(element)\"\n            >\n              <img src=\"../../../../assets/images/edit-ico.svg\" />\n            </a>\n            <a\n              href=\"javascript:void(0);\"\n              (click)=\"deleteService(element, 'delete')\"\n              class=\"delete-info\"\n            >\n              <img src=\"../../../../assets/images/delete-icon.svg\" />\n            </a>\n            <!-- <a (click)=\"deleteService(element, 'restore')\" class=\"resotre-info\">\n                            <img src=\"../../../../assets/images/delete-icon.svg\">\n                        </a> -->\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"salonServicesCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n\n    <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n      <div class=\"noRec\">No Records Found</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"userDetailsOverlay\" *ngIf=\"isAddModal\">\n  <div class=\"main-section-area modal-md\">\n    <div class=\"header\">\n      <h4>Edit Service</h4>\n    </div>\n    <div class=\"main-section\">\n      <form [formGroup]=\"editServiceForm\">\n        <div class=\"row add-employee\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label class=\"custom-label\">Price</label>\n              <input\n                type=\"text\"\n                formControlName=\"price\"\n                class=\"form-control\"\n                onkeypress=\"var key = window.event ? event.keyCode : event.which;if (event.keyCode == 8 || event.keyCode == 127)  return true; else if ( key < 48 || key > 57 ) return false; else return true;\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label class=\"custom-label\">Duration</label>\n              <input\n                type=\"text\"\n                formControlName=\"duration\"\n                class=\"form-control\"\n                onkeypress=\"var key = window.event ? event.keyCode : event.which;if (event.keyCode == 8 || event.keyCode == 127)  return true; else if ( key < 48 || key > 57 ) return false; else return true;\"\n              />\n            </div>\n          </div>\n        </div>\n        <div class=\"btn-Area\">\n          <button\n            class=\"btn btn-primary btn-sign-in\"\n            (click)=\"updateEmpService(editServiceForm.value)\"\n          >\n            Update\n          </button>\n          <button class=\" btn btn-sign-in btn-primary\" (click)=\"dismissModal()\">\n            Close\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/subscribe/subscribe.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/subscribe/subscribe.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardSubscribeSubscribeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"subscribeWrapper\">\n  <div *ngIf=\"!showEnterCardForm\" class=\"col-lg-4\">\n    <div class=\"col-lg-12\" *ngFor=\"let item of planListArray\">\n      <div class=\"card\">\n        <h4>\n          {{ item.id }}\n        </h4>\n        <h3 class=\"rate\">\n          {{ item.amount | currency: \"USD\" }}\n        </h3>\n        <p>Enjoy the benefits of this package for a {{ item.interval }}</p>\n\n        <button\n          class=\"btn-primary btn btn-sign-in edit delete-btn\"\n          (click)=\"buy(item)\"\n        >\n          BUY SUBSCRIPTION\n        </button>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-details card\" *ngIf=\"showEnterCardForm\">\n    <form class=\"card-form\" [formGroup]=\"cardSave\">\n      <div class=\"large\">\n        <label>Card Number</label>\n        <input\n          required\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"cardnumber\"\n          placeholder=\"xxxx xxxx xxxx xxxx\"\n          mask=\"0000 0000 0000 0000\"\n        />\n      </div>\n      <div class=\"small\">\n        <div>\n          <label>Expiry</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"MM/YYYY\"\n            formControlName=\"expiry\"\n            mask=\"00/0000\"\n          />\n        </div>\n        <div>\n          <label>CVC</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"cvv\"\n            placeholder=\"***\"\n            mask=\"000\"\n          />\n        </div>\n      </div>\n      <div class=\"large\">\n        <label>Card Holder Name</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"name\"\n          placeholder=\"Name On Card\"\n        />\n      </div>\n      <button\n        [disabled]=\"cardSave.invalid\"\n        (click)=\"pay(cardSave.value)\"\n        class=\"btn btn-primary btn-sign-in\"\n      >\n        Pay\n      </button>\n    </form>\n  </div>\n  <div class=\"loader\" *ngIf=\"loader\">\n    <img\n      src=\"../../../../assets/images/Infinity-1s-200px.gif\"\n      class=\"loaderImage\"\n    />\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/subscription/subscription.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/subscription/subscription.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardSubscriptionSubscriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"subscriptionWrapper\">\n  <div class=\"mainSection\">\n    <div class=\"field\">\n      Name:\n      <div class=\"value\">{{ subscriptionDetails.planDetails.id }}</div>\n    </div>\n    <div class=\"field\">\n      Amount:\n      <div class=\"value\">\n        {{ subscriptionDetails.planDetails.amount | currency: \"USD\" }}\n      </div>\n    </div>\n    <div class=\"field\">\n      Billed:\n      <div class=\"value\">{{ subscriptionDetails.planDetails.interval }}ly</div>\n    </div>\n    <div class=\"field\">\n      Subscribed On:\n      <div class=\"value\">{{ subscriptionDate }}</div>\n    </div>\n    <div class=\"field\">\n      Expiry Date:\n      <div class=\"value\">{{ expirationDate }}</div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/timing/timing.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/timing/timing.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardTimingTimingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"check-spa-outer\">\n    <div class=\"employee-tabs\">\n    </div>\n    <div class=\"create-availabillity\">\n        <div class=\"create-availabillity-inner\">\n            <div class=\"employee-sec\">\n                <h4>Create Availability </h4>\n\n            </div>\n        </div>\n        <div class=\"add-employees-inner\">\n\n            <div class=\"col-md-12 table-responsive\">\n\n                <table class=\"table table-custom \">\n                    <tr>\n                        <td></td>\n                        <td>Days </td>\n                        <td>Morning </td>\n                        <td>Evening</td>\n                    </tr>\n                    <tr *ngFor=\"let data of allDaysData; let i = index\">\n                        <td>\n                            <div class=\"custom-control custom-checkbox chk-custom \">\n                                <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"data.status\"\n                                    id=\"customControlInline{{i}}\">\n                                <label class=\"custom-control-label\" for=\"customControlInline{{i}}\"></label>\n                            </div>\n                        </td>\n                        <td>\n                            <input type=\"hidden\" class=\"form-control\" [(ngModel)]=\"data.days\">\n                            <strong> {{data.days}} </strong>\n                        </td>\n                        <td>\n                            <input [min]=\"min\" class=\"setTime form-control fields\"\n                                (ngModelChange)=\"onOpenTimeSelect($event)\" [(ngModel)]=\"data.opentime\"\n                                [owlDateTime]=\"dtPicker2\" [owlDateTimeTrigger]=\"dtPicker2\" placeholder=\"Open time\" />\n                            <owl-date-time [pickerType]=\"'timer'\" #dtPicker2></owl-date-time>\n                        </td>\n                        <td>\n                            <input [min]=\"min\" class=\"setTime form-control fields\"\n                                (ngModelChange)=\"onCloseTimeSelect($event)\" [(ngModel)]=\"data.closetime\"\n                                [owlDateTime]=\"dtPicker1\" [owlDateTimeTrigger]=\"dtPicker1\" placeholder=\"Close time\" />\n                            <owl-date-time [pickerType]=\"'timer'\" #dtPicker1></owl-date-time>\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <div class=\"btn-sec\">\n                <input type=\"button\" class=\"btn btn-save\" value=\"SAVE\" (click)=\"saveTimingForm()\">\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/transactions/transactions.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/transactions/transactions.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonDashboardTransactionsTransactionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"table-responsive tablecustom\">\n  <div class=\"mat-elevation-z8\">\n    <table mat-table [dataSource]=\"dataSource\" matSort>\n      <!-- Position Column -->\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"onDate\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n        <td mat-cell *matCellDef=\"let element\">\n          {{ element.onDate | date: \"medium\" }}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span *ngIf=\"element.isTransferred === true\">Completed</span>\n          <span *ngIf=\"element.isTransferred === false\">Pending</span>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <mat-paginator\n      [length]=\"totalCount\"\n      [pageSize]=\"count\"\n      (page)=\"paginate($event)\"\n      [pageSizeOptions]=\"[5, 10, 15, 20]\"\n      showFirstLastButtons\n    ></mat-paginator>\n    <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n      <div class=\"noRec\">No Records Found</div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/salon/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSalonLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-section\">\n  <div class=\"login-section-inner\">\n    <div class=\"login-left\">\n      <img src=\"../../../assets/images/logo.svg\" />\n    </div>\n\n    <div class=\"login-right\">\n      <div class=\"headerText\">{{ headerText }}</div>\n      <form [formGroup]=\"salonLoginForm\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"InputEmail\">Email address</label>\n              <input\n                type=\"email\"\n                formControlName=\"email\"\n                class=\"form-control\"\n                id=\"InputEmail\"\n                aria-describedby=\"emailHelp\"\n                placeholder=\"Enter email\"\n              />\n              <div\n                *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                class=\"error-show\"\n              >\n                <div *ngIf=\"email.errors.required\">\n                  Name is required.\n                </div>\n                <div *ngIf=\"email.errors.pattern\">\n                  Invalid Email\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"InputPassword\">Password</label>\n              <input\n                type=\"password\"\n                formControlName=\"password\"\n                class=\"form-control\"\n                id=\"exampleInputPassword1\"\n                placeholder=\"Password\"\n              />\n              <div\n                *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                class=\"error-show\"\n              >\n                <div *ngIf=\"password.errors.required\">\n                  Password is required.\n                </div>\n                <div *ngIf=\"password.errors\">\n                  Password must be minimum 3 letters\n                </div>\n                <div *ngIf=\"password.errors.pattern\">\n                  Password cannot contain space\n                </div>\n                <div *ngIf=\"password.errors.maxlength\">\n                  Maximum allowed letters are 10\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <button\n              type=\"submit\"\n              [disabled]=\"salonLoginForm.invalid\"\n              (click)=\"salonLogin(salonLoginForm.value)\"\n              *ngIf=\"isLogin\"\n              class=\"btn btn-primary btn-sign-in\"\n            >\n              LOGIN\n            </button>\n            <button\n              type=\"submit\"\n              [disabled]=\"salonLoginForm.invalid\"\n              (click)=\"salonRegister(salonLoginForm.value)\"\n              *ngIf=\"!isLogin\"\n              class=\"btn btn-primary btn-sign-in\"\n            >\n              REGISTER\n            </button>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"isLogin\">\n            <div class=\"sign-up\">\n              Don't have an account ?\n              <button class=\"resetPassword\" (click)=\"goToSignUp()\">\n                SIGN UP\n              </button>\n            </div>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"!isLogin\">\n            <div class=\"sign-up\">\n              Already have an account ?\n              <button class=\"resetPassword\" (click)=\"goToLogin()\">LOGIN</button>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"sign-up\">\n              Forgot password ?\n              <!-- <a\n                [routerLink]=\"forget - password\"\n                routerLinkActive=\"router-link-active\"\n                >Reset Password</a\n              > -->\n              <button class=\"resetPassword\" (click)=\"resetPassword()\">\n                Reset Password\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/salon/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/salon/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppSalonAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, myRoute) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.myRoute = myRoute;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (this.auth.isLoggedIn()) {
            return true;
          } else {
            this.myRoute.navigate(["salon"]);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/booking/booking.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/salon/dashboard/booking/booking.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardBookingBookingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.header-sec .navbar {\n  background: transparent linear-gradient(267deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  opacity: 1;\n}\n\n.header-sec .navbar-brand {\n  margin-left: 12px;\n}\n\n.header-sec .navbar-nav {\n  margin-right: 12px;\n}\n\n.header-sec .navbar-collapse {\n  justify-content: flex-end;\n}\n\n.header-sec ul li:nth-child(2) {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.header-sec .navbar ul li.active {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li.notification-img {\n  border-right: 1px solid #fff;\n  margin-left: 60px;\n  height: 25px;\n  margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img {\n  margin-right: 15px;\n  margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after {\n  display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle {\n  margin-right: 50px;\n  margin-left: 15px;\n  letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #333;\n  opacity: 1;\n  font-size: 12px;\n  line-height: 1;\n  color: #454f60;\n}\n\n.header-sec .navbar ul li a .salon-icon {\n  height: 45px;\n  width: 45px;\n  border: 1px solid #ff7d7d;\n  border-radius: 28px;\n  opacity: 1;\n  line-height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -4px;\n  right: 0;\n  background: #fff;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer .check-spa-image {\n  border: 2px solid #813882;\n  border-radius: 90px;\n  opacity: 1;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer {\n  border-bottom: 1px solid #e1e1e1;\n  padding: 25px 40px;\n  padding-top: 40px;\n}\n\n.check-spa-outer .check-spa h4 {\n  /* \n    text-align: left; */\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  text-align: center;\n  font-size: 18px;\n  padding-top: 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .salon-info {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .about-salon p {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.check-spa-outer .check-spa .about-salon h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\n.check-spa-outer .check-spa {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  position: relative;\n  /* padding: 30px; */\n}\n\n.check-spa-outer {\n  background: #ffffff;\n}\n\n.edit-info {\n  position: absolute;\n  right: 25px;\n  top: 15px;\n}\n\n.edit-info img {\n  cursor: pointer;\n}\n\n.employee-tabs {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  opacity: 1;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  min-height: 0;\n  align-items: center;\n}\n\n.employee-tabs .nav-tabs .nav-link {\n  border: none;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n\n.employee-tabs .nav-tabs {\n  border-bottom: none;\n}\n\n.create-availabillity .check-timing {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-timing-inner {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-day h3 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-left: 25px;\n}\n\n.create-availabillity ul {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.create-availabillity ul li h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.create-availabillity ul li h4.days {\n  padding-left: 48px;\n}\n\n.create-availabillity-inner {\n  min-height: 85px;\n  border-bottom: 1px solid #e1e1e1;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n\n.create-availabillity .employee-sec h2 {\n  font-size: 16px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n}\n\n.add-employee-inner {\n  height: 25px;\n  width: 25px;\n  line-height: 25px;\n  border: 1px solid #4ad991;\n  border-radius: 50%;\n  line-height: 25px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-employee-inner i {\n  color: #4ad991;\n}\n\n.add-employee {\n  display: flex;\n}\n\n.add-employee h2 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n\n.check-spa-outer .tab-content {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 0;\n}\n\n.create-availabillity .btn-sec .btn-save {\n  background: transparent linear-gradient(101deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n  min-width: 152px;\n}\n\n.create-availabillity .btn-sec .btn-cancel {\n  background: #454f60 0% 0% no-repeat padding-box;\n  margin-right: 5px;\n}\n\n.create-availabillity .btn-sec {\n  text-align: right;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-right: 25px;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #9c3ee8;\n}\n\n.check-timing-sec {\n  max-width: 1320px;\n}\n\n.employee-tabs ul li:nth-child(2) {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.create-availabillity .table thead th {\n  border-bottom: none;\n  border-top: none;\n  font-size: 12px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td {\n  border-top: none;\n  border-bottom: 1px solid #f1f1f3;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-bottom: 30px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td .delete-info {\n  margin-left: 35px;\n}\n\n.footer-sec {\n  text-align: left;\n  letter-spacing: 0;\n  color: #bcbccb;\n  opacity: 1;\n  font-size: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 150px;\n}\n\n.header-sec .navbar-expand-lg .navbar-nav .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n  top: 40px;\n}\n\ntable {\n  width: 100%;\n}\n\n.action-btns a img {\n  margin-right: 10px;\n}\n\n.space {\n  width: 5px;\n  margin-right: 5px;\n}\n\n.bts {\n  margin: 0 !important;\n}\n\n.mat-tab-group {\n  padding-top: 2.3em;\n}\n\n@media (max-width: 1200px) {\n  .create-availabillity .table tbody tr td {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .create-availabillity .table thead tr th {\n    padding-left: 20px;\n    padding-right: 45px;\n  }\n\n  .create-availabillity .table tbody tr td .delete-info {\n    margin-left: 25px;\n  }\n\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: break-word;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 15px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 15px;\n  }\n}\n\n@media (max-width: 991px) {\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: unset;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 40px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 40px;\n  }\n}\n\n@media (max-width: 767px) {\n  .employee-tabs ul li:nth-child(2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .create-availabillity .table tbody tr td {\n    padding-top: 30px;\n    padding-left: 15px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n  }\n\n  .create-availabillity .btn-sec {\n    margin-right: 10px;\n  }\n\n  .create-availabillity .btn-sec .btn-save {\n    height: 40px;\n    min-width: 120px;\n  }\n\n  .create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n    padding: 5px;\n  }\n\n  .create-availabillity-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n.bts {\n  margin: 0;\n}\n\n.noRec {\n  padding: 1em;\n  margin: 1em !important;\n  width: 100% !important;\n}\n\n.overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 99999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.overlay .mainSection {\n  border: 1px solid lightgray;\n  background: white;\n  padding: 1em;\n  margin: 10px;\n}\n\n.overlay .mainSection .fields {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.overlay .mainSection .fields label {\n  width: 20%;\n  margin: 0px;\n}\n\n.overlay .mainSection .fields .field {\n  padding: 5px;\n  padding-left: 15px;\n  font-size: 15px;\n  width: 75%;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9ib29raW5nL2Jvb2tpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9ib29raW5nL2Jvb2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFHQUFBO0VBRUEsaUNBQUE7RUFDQSxVQUFBO0FDQUY7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ09GOztBREpBO0VBQ0UsYUFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUUY7O0FETEE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNRRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFB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Sjs7QUR6REk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQzJETjs7QUQxRE07RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQzREUjs7QUQxRE07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDNERSIiwiZmlsZSI6InNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL2Jvb2tpbmcvYm9va2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2N2RlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJVxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBvcGFjaXR5OiAxO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1uYXYge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXItY29sbGFwc2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlci1zZWMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkuYWN0aXZlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM0NTRmNjA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSAuc2Fsb24taWNvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjdkN2Q7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIgLmNoZWNrLXNwYS1pbWFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MTM4ODI7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSBoNCB7XG4gIC8qIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xufVxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uZWRpdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiAxNXB4O1xufVxuLmVkaXQtaW5mbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay10aW1pbmctaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLWRheSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQuZGF5cyB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5lbXBsb3llZS1zZWMgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cbi5hZGQtZW1wbG95ZWUtaW5uZXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhZDk5MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWVtcGxveWVlLWlubmVyIGkge1xuICBjb2xvcjogIzRhZDk5MTtcbn1cbi5hZGQtZW1wbG95ZWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWVtcGxveWVlIGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLnRhYi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEwMWRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJVxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICM0NTRmNjAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICM5YzNlZTg7XG59XG4uY2hlY2stdGltaW5nLXNlYyB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xufVxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuLmZvb3Rlci1zZWMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNiY2JjY2I7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDQwcHg7XG59XG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbi1idG5zIGEgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNwYWNlIHtcbiAgd2lkdGg6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uYnRzIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LXRhYi1ncm91cCB7XG4gIHBhZGRpbmctdG9wOiAyLjNlbTtcbn1cbi5tLXQtNDAge1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gICAgd29yZC1icmVhazogdW5zZXQ7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuICAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uYnRzIHtcbiAgbWFyZ2luOiAwO1xufVxuLm5vUmVjIHtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDFlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA5OTk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5tYWluU2VjdGlvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLmZpZWxkcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGxhYmVsIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICB9XG4gICAgICAuZmllbGQge1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2N2RlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwYTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5oZWFkZXItc2VjIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkuYWN0aXZlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLm5vdGlmaWNhdGlvbi1pbWcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzQ1NGY2MDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIC5zYWxvbi1pY29uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2Q3ZDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgb3BhY2l0eTogMTtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIC5jaGVjay1zcGEtaW1hZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODEzODgyO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIGg0IHtcbiAgLyogXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBoMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMzBweDsgKi9cbn1cblxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5lZGl0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5lZGl0LWluZm8gaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZW1wbG95ZWUtdGFicyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHVuc2V0O1xufVxuXG4uZW1wbG95ZWUtdGFicyAubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay10aW1pbmctaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyAuY2hlY2stZGF5IGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQuZGF5cyB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmVtcGxveWVlLXNlYyBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWRkLWVtcGxveWVlLWlubmVyIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YWQ5OTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLWVtcGxveWVlLWlubmVyIGkge1xuICBjb2xvcjogIzRhZDk5MTtcbn1cblxuLmFkZC1lbXBsb3llZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGQtZW1wbG95ZWUgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC50YWItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxMDFkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDI5O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtaW4td2lkdGg6IDE1MnB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiAjNDU0ZjYwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzljM2VlODtcbn1cblxuLmNoZWNrLXRpbWluZy1zZWMge1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbn1cblxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLmZvb3Rlci1zZWMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNiY2JjY2I7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogNDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFjdGlvbi1idG5zIGEgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3BhY2Uge1xuICB3aWR0aDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmJ0cyB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXRhYi1ncm91cCB7XG4gIHBhZGRpbmctdG9wOiAyLjNlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdHIgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiB1bnNldDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4uYnRzIHtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubm9SZWMge1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMWVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTk5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm92ZXJsYXkgLm1haW5TZWN0aW9uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDEwcHg7XG59XG4ub3ZlcmxheSAubWFpblNlY3Rpb24gLmZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5vdmVybGF5IC5tYWluU2VjdGlvbiAuZmllbGRzIGxhYmVsIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ub3ZlcmxheSAubWFpblNlY3Rpb24gLmZpZWxkcyAuZmllbGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB3aWR0aDogNzUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/booking/booking.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/salon/dashboard/booking/booking.component.ts ***!
    \**************************************************************/

  /*! exports provided: BookingComponent */

  /***/
  function srcAppSalonDashboardBookingBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingComponent", function () {
      return BookingComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var BookingComponent = /*#__PURE__*/function () {
      function BookingComponent(authServ, fb, commServ, toastrServ, dialog) {
        _classCallCheck(this, BookingComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.dialog = dialog;
        this.bokingList = [];
        this.ascend = 1;
        this.pageSize = 5;
        this.count = 5;
        this.isModal = false;
        this.page = 1;
        this.displayedColumns = ["bookingid", "name", "status", "service", "action"];
      }

      _createClass(BookingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.user_id = sessionStorage.getItem("userId");
          this.commServ.getSalon_id().subscribe(function (data) {
            _this.salonId = data; // console.log("HTIS>", this.salonId);

            _this.ascend = 1;
            _this.type = "upcoming";
            _this.dataTp = {
              ascend: _this.ascend,
              type: _this.type,
              salon_id: _this.salonId,
              pageSize: _this.count,
              page: _this.page
            };

            _this.getUpcomingBookingData(_this.dataTp);

            _this.salonId = data;
          });
        }
      }, {
        key: "selectedIndexChange",
        value: function selectedIndexChange(data) {
          if (data === 0) {
            this.ascend = 1;
            this.type = "upcoming";
            var dataToPass = {
              ascend: this.ascend,
              type: this.type,
              salon_id: this.salonId,
              pageSize: this.count,
              page: this.page
            }; //console.log(dataToPass);

            this.getUpcomingBookingData(dataToPass);
          } else if (data === 1) {
            this.ascend = -1;
            this.type = "completed";
            var _dataToPass = {
              ascend: this.ascend,
              type: this.type,
              salon_id: this.salonId,
              pageSize: this.count,
              page: this.page
            }; //   console.log("here", dataToPass);

            this.getUpcomingBookingData(_dataToPass);
          }
        }
      }, {
        key: "getDetails",
        value: function getDetails(data) {
          this.isModal = true; // console.log(data);

          this.appointmentDetails = data;
        }
      }, {
        key: "completeAppointment",
        value: function completeAppointment(data) {
          var _this2 = this;

          console.log("DATA", data);
          var dataToPass = {
            booking_id: data._id
          };
          this.commServ.completeAppointment(dataToPass).subscribe(function (data) {
            console.log("data", data);

            if (data["code"] === 200) {
              console.log("datassss");

              _this2.toastrServ.success("Appointment Completed", "", {
                timeOut: 1000
              });

              _this2.getUpcomingBookingData(_this2.dataTp);
            } else if (data["code"] === 400) {
              _this2.toastrServ.error("Failed to Complete", data["message"], {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this2.toastrServ.error("Server-Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isModal = false;
          this.appointmentDetails = [];
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.page = event.pageIndex + 1; // console.log(this.page);

          this.count = event.pageSize; // console.log(this.count);

          var dataToPass = {
            ascend: this.ascend,
            type: this.type,
            salon_id: this.salonId,
            pageSize: this.count,
            page: this.page
          };
          this.getUpcomingBookingData(dataToPass);
        }
      }, {
        key: "getUpcomingBookingData",
        value: function getUpcomingBookingData(data) {
          var _this3 = this;

          this.isLoader = true; //  console.log("IN", data);

          this.commServ.getAppointmentList(data).subscribe(function (data) {
            //   console.log(data);
            _this3.dataSource = data["data"]["data"];
            _this3.dataSource.sort = _this3.sort;
            _this3.isLoader = false; // console.log(this.dataSource);

            _this3.bookingCount = data["data"]["count"]; // console.log(this.bookingCount);
          });
        }
      }, {
        key: "changeBooking",
        value: function changeBooking(element) {// console.log("element", element)
        }
      }]);

      return BookingComponent;
    }();

    BookingComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      "static": false
    })], BookingComponent.prototype, "sort", void 0);
    BookingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-booking",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/booking/booking.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking.component.scss */
      "./src/app/salon/dashboard/booking/booking.component.scss"))["default"]]
    })], BookingComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardConfirmationDialogConfirmationDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n#infowindow-content .title {\n  font-weight: bold;\n}\n\n#infowindow-content {\n  display: none;\n}\n\n#map #infowindow-content {\n  display: inline;\n}\n\n.pac-card {\n  margin: 10px 10px 0 0;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto;\n}\n\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px;\n}\n\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px;\n}\n\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300;\n}\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n#pac-input:focus {\n  border-color: #4d90fe;\n}\n\n#title {\n  color: #fff;\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n#target {\n  width: 345px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NJO0VBQ0ksWUFBQTtBQ2pDUjs7QURtQ00scURBQUE7O0FBQ0E7O0VBRUUsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDaENSOztBRGtDTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDL0JSOztBRGtDTTtFQUNFLGlCQUFBO0FDL0JSOztBRGtDTTtFQUNFLGFBQUE7QUMvQlI7O0FEa0NNO0VBQ0UsZUFBQTtBQy9CUjs7QURrQ007RUFDRSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUMvQlI7O0FEa0NNO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQy9CUjs7QURrQ007RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDL0JSOztBRGtDTTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDL0JSOztBRGtDTTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDL0JSOztBRGtDTTtFQUNFLHFCQUFBO0FDL0JSOztBRGtDTTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDL0JSOztBRGlDTTtFQUNFLFlBQUE7QUM5QlIiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm92ZXJsYXl7XG5cbiAgICAvLyAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICAvLyAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICAvLyAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIC8vICAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICAvLyAgICAgdG9wOiAwO1xuICAgIC8vICAgICBsZWZ0OiAwO1xuICAgIC8vICAgICByaWdodDogMDtcbiAgICAvLyAgICAgYm90dG9tOiAwO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgLy8gICAgIHotaW5kZXg6IDI7XG4gICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxuICAgIC8vICAgICAuY29uZmlybURpYWxvZ3tcbiAgICAvLyAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgIC8vICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAvLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG4gICAgLy8gICAgICAgICAuZmllbGR7XG4gICAgXG4gICAgLy8gICAgICAgICAgICAgc3BhbntcbiAgICBcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgXG4gICAgLy8gICAgICAgICB9XG4gICAgXG4gICAgLy8gICAgIH1cbiAgICBcbiAgICAvLyB9XG4gICAgI21hcCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC8qIE9wdGlvbmFsOiBNYWtlcyB0aGUgc2FtcGxlIHBhZ2UgZmlsbCB0aGUgd2luZG93LiAqL1xuICAgICAgaHRtbCxcbiAgICAgIGJvZHkge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICAgICNkZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2luZm93aW5kb3ctY29udGVudCAudGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI2luZm93aW5kb3ctY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNtYXAgI2luZm93aW5kb3ctY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLnBhYy1jYXJkIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjcGFjLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wYWMtY29udHJvbHMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMXB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAucGFjLWNvbnRyb2xzIGxhYmVsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgfVxuICAgICAgXG4gICAgICAjcGFjLWlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI3BhYy1pbnB1dDpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzRkOTBmZTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgI3RpdGxlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICB9XG4gICAgICAjdGFyZ2V0IHtcbiAgICAgICAgd2lkdGg6IDM0NXB4O1xuICAgICAgfVxuICAgICAgIiwiI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiNpbmZvd2luZG93LWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNpbmZvd2luZG93LWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwICNpbmZvd2luZG93LWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wYWMtY2FyZCB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuI3BhYy1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4ucGFjLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTFweDtcbn1cblxuLnBhYy1jb250cm9scyBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI3BhYy1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmc6IDAgMTFweCAwIDEzcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiNwYWMtaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM0ZDkwZmU7XG59XG5cbiN0aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xufVxuXG4jdGFyZ2V0IHtcbiAgd2lkdGg6IDM0NXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ConfirmationDialogComponent */

  /***/
  function srcAppSalonDashboardConfirmationDialogConfirmationDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function () {
      return ConfirmationDialogComponent;
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


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");

    var ConfirmationDialogComponent = /*#__PURE__*/function (_ngx_simple_modal__WE) {
      _inherits(ConfirmationDialogComponent, _ngx_simple_modal__WE);

      var _super = _createSuper(ConfirmationDialogComponent);

      function ConfirmationDialogComponent() {
        _classCallCheck(this, ConfirmationDialogComponent);

        return _super.call(this);
      }

      _createClass(ConfirmationDialogComponent, [{
        key: "confirm",
        value: function confirm() {
          // on click on confirm button we set dialog result as true,
          // ten we can get dialog result from caller code
          this.result = true;
          console.log(this.result);
          this.close();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.result = false;
          console.log(this.result);
          this.close();
        }
      }]);

      return ConfirmationDialogComponent;
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"]);

    ConfirmationDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-confirmation-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation-dialog.component.scss */
      "./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.scss"))["default"]]
    })], ConfirmationDialogComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/connect-account/connect-account.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/salon/dashboard/connect-account/connect-account.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardConnectAccountConnectAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".connectAccountWrapper {\n  margin-top: 2.5em;\n  background: white;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  min-height: 300px;\n  /* align-items: center; */\n  justify-content: space-between;\n  /* position: absolute; */\n  /* top: 0; */\n  display: flex;\n  padding: 1em;\n}\n.connectAccountWrapper .content {\n  font-size: 15px;\n  font-family: Impact, Haettenschweiler, \"Arial Narrow Bold\", sans-serif;\n  word-break: break-all;\n}\n.connectAccountWrapper .content .stripeStatus {\n  margin-bottom: 5px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.connectAccountWrapper .content .stripeStatus .disconnected {\n  border: 1px solid red;\n  background: red;\n  color: white;\n  padding: 3px;\n  border-radius: 11px;\n  width: auto;\n  margin-left: 10px;\n  font-weight: 600;\n}\n.connectAccountWrapper .content .stripeStatus .connected {\n  border: 1px solid green;\n  background: green;\n  color: white;\n  padding: 3px;\n  margin-left: 10px;\n  border-radius: 11px;\n  width: auto;\n  font-weight: 600;\n}\n.connectAccountWrapper .stripeBtn .stripeButton {\n  padding: 0;\n  border: 0;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9jb25uZWN0LWFjY291bnQvY29ubmVjdC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvY29ubmVjdC1hY2NvdW50L2Nvbm5lY3QtYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNKRjtBREtFO0VBQ0UsZUFBQTtFQUNBLHNFQUFBO0VBQ0EscUJBQUE7QUNISjtBREtJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hOO0FESU07RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRElNO0VBQ0UsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FEUUk7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDTk4iLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvY29ubmVjdC1hY2NvdW50L2Nvbm5lY3QtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5zdHJpcGVCdG57XG4vLyAgICAgcGFkZGluZzogMDtcbi8vICAgICBib3JkZXI6IDA7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbi8vIH1cbi5jb25uZWN0QWNjb3VudFdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAvKiB0b3A6IDA7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFlbTtcbiAgLmNvbnRlbnQge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogSW1wYWN0LCBIYWV0dGVuc2Nod2VpbGVyLCAnQXJpYWwgTmFycm93IEJvbGQnLCBzYW5zLXNlcmlmO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcblxuICAgIC5zdHJpcGVTdGF0dXMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIC5kaXNjb25uZWN0ZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICAgIC5jb25uZWN0ZWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICAgICAgYmFja2dyb3VuZDogZ3JlZW47XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnN0cmlwZUJ0biB7XG4gICAgLnN0cmlwZUJ1dHRvbiB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gIH1cbn1cbiIsIi5jb25uZWN0QWNjb3VudFdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xuICAvKiB0b3A6IDA7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDFlbTtcbn1cbi5jb25uZWN0QWNjb3VudFdyYXBwZXIgLmNvbnRlbnQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsIFwiQXJpYWwgTmFycm93IEJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLmNvbm5lY3RBY2NvdW50V3JhcHBlciAuY29udGVudCAuc3RyaXBlU3RhdHVzIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uY29ubmVjdEFjY291bnRXcmFwcGVyIC5jb250ZW50IC5zdHJpcGVTdGF0dXMgLmRpc2Nvbm5lY3RlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbm5lY3RBY2NvdW50V3JhcHBlciAuY29udGVudCAuc3RyaXBlU3RhdHVzIC5jb25uZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogM3B4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTFweDtcbiAgd2lkdGg6IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29ubmVjdEFjY291bnRXcmFwcGVyIC5zdHJpcGVCdG4gLnN0cmlwZUJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/connect-account/connect-account.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/salon/dashboard/connect-account/connect-account.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ConnectAccountComponent */

  /***/
  function srcAppSalonDashboardConnectAccountConnectAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectAccountComponent", function () {
      return ConnectAccountComponent;
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


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ConnectAccountComponent = /*#__PURE__*/function () {
      function ConnectAccountComponent(activatedRoutes, commServ, toastServ) {
        _classCallCheck(this, ConnectAccountComponent);

        this.activatedRoutes = activatedRoutes;
        this.commServ = commServ;
        this.toastServ = toastServ;
        this.isStripeConnected = false;
      }

      _createClass(ConnectAccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          sessionStorage.setItem("isReload", JSON.stringify(true));
          this.stripeCode = this.activatedRoutes.snapshot.queryParams["code"];

          if (this.stripeCode) {
            this.connectAccount();
          }

          this.checkISStripeConnected();
        }
      }, {
        key: "checkISStripeConnected",
        value: function checkISStripeConnected() {
          var _this4 = this;

          this.commServ.getStripeConnectedStatus().subscribe(function (data) {
            _this4.isStripeConnected = data;
          });
        }
      }, {
        key: "createStripeConnection",
        value: function createStripeConnection() {
          window.open("https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_GfIPk4k1EueVxsjqVIoutWNdiSSW8DbT&scope=read_write", "_self");
        }
      }, {
        key: "connectAccount",
        value: function connectAccount() {
          var _this5 = this;

          this.commServ.getSalon_id().subscribe(function (data) {
            _this5.salon_id = data;

            if (_this5.salon_id) {
              var dataToPass = {
                salon_id: _this5.salon_id,
                code: _this5.stripeCode
              };

              _this5.commServ.connectStripeAccount(dataToPass).subscribe(function (data) {
                if (data["code"] === 200) {
                  _this5.toastServ.success(data["message"], "Success", {
                    timeOut: 1000
                  });

                  _this5.checkISStripeConnected();

                  if (JSON.parse(sessionStorage.getItem("isReload"))) {
                    window.location.reload();
                    sessionStorage.setItem("isReload", JSON.stringify(false));
                  }
                } else if (data["code"] === 400) {
                  _this5.toastServ.error(data["message"], "Error", {
                    timeOut: 1000
                  });
                }
              }, function (error) {
                _this5.toastServ.error("Server Error", error.error["message"], {
                  timeOut: 1000
                });
              });
            }
          });
        }
      }]);

      return ConnectAccountComponent;
    }();

    ConnectAccountComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    ConnectAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-connect-account",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./connect-account.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/connect-account/connect-account.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./connect-account.component.scss */
      "./src/app/salon/dashboard/connect-account/connect-account.component.scss"))["default"]]
    })], ConnectAccountComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/dashboard.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/salon/dashboard/dashboard.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\nbody{\n    font-family: 'Roboto', sans-serif;\n}\n\nhtml, body {\n    height: 100%;\n}\n\n.header-sec .navbar{\n    background: transparent linear-gradient(267deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n    box-shadow: 0px 2px 6px #0000000A;\n    opacity: 1;\n}\n\n.header-sec .navbar-brand{\n    margin-left: 12px;\n}\n\n.header-sec .navbar-nav{\n    margin-right: 12px;\n}\n\n.header-sec  .navbar-collapse{\n    justify-content: flex-end;\n}\n\n.header-sec ul li:nth-child(2){\n    margin-left: 25px;\n    margin-right: 25px;\n}\n\n.header-sec .navbar ul li.active{\n    text-align: left;\n    letter-spacing: 1.4px;\n    color: #FFFFFF;\n    opacity: 1;\n    font-weight: bold;\n    font-size: 14px;\n}\n\n.header-sec .navbar ul li a{\n    text-align: left;\n    letter-spacing: 1.4px;\n    color: #FFFFFF;\n    opacity: 1;\n    font-size: 14px;\n\n}\n\n.header-sec .navbar ul li.notification-img{\n    border-right: 1px solid #fff;\n    margin-left: 60px;\n    height: 25px;\n    margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img{\n\n    margin-right: 15px;\n    margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after{\n    display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle{\n    margin-right: 50px;\n    margin-left: 15px;\n    letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item{\n    text-align: left;\n    letter-spacing: 1.4px;\n    color: #333;\n    opacity: 1;\n    font-size: 12px;\n    line-height: 1;\n    color: #454F60;\n}\n\n.header-sec .navbar ul li a .salon-icon{\n    height: 45px;\n    width: 45px;\n    border: 1px solid #FF7D7D;\n    border-radius: 28px;\n    opacity: 1;\n    line-height: 45px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: -4px;\n    right: 0;\n    background: #fff;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer .check-spa-image{\n    border: 2px solid #813882;\n    border-radius: 90px;\n    opacity: 1;\n    height: 180px;\n    width: 180px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer {\n    border-bottom: 1px solid #e1e1e1;\n    padding: 25px 40px;\n    padding-top: 40px;\n}\n\n.profileImage{\n    max-width: 100%;\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    background-size: contain;\n}\n\n.check-spa-outer .check-spa h4{\n/* \n    text-align: left; */\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-weight: 500;\n    text-align: center;\n    font-size: 18px;\n    padding-top: 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner h5{\n    text-align: left;\n    letter-spacing: 0;\n    color: #9C3EE8;\n    opacity: 1;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-top: 10px;\n    font-weight: 500;\n    \n}\n\n.check-spa-outer .check-spa .salon-info{\n    border-bottom: 1px solid #e1e1e1;\n    /* padding: 25px 40px; */\n    padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner{\n    display: flex;\n    margin-bottom: 5px;\n}\n\n.check-spa-outer .check-spa .about-salon{\n    text-align: left;\n    letter-spacing: 0;\n    color: #9C3EE8;\n    opacity: 1;\n    font-size: 14px;\n    font-weight: 500;\n}\n\n.check-spa-outer .check-spa .about-salon{\n    border-bottom: 1px solid #e1e1e1;\n    /* padding: 25px 40px; */\n    padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .about-salon p{\n\n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-size: 14px;\n}\n\n.check-spa-outer .check-spa .about-salon h2{\n    text-align: left;\n    letter-spacing: 0;\n    color: #9C3EE8;\n    opacity: 1;\n    font-size: 14px;\n    font-weight: 500;\n    padding-bottom: 5px;\n}\n\n.check-spa-outer .check-spa {\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 6px;\n    opacity: 1;\n    margin-top: 40px;\n    margin-bottom: 40px;\n    position: relative;\n    /* padding: 30px; */\n}\n\n.check-spa-outer{\n    background: #F0F0F7;\n}\n\n.edit-info{\n\n    position: absolute;\n    right: 25px;\n    top: 15px;\n}\n\n.edit-info img{\n    cursor:pointer;\n}\n\n.employee-tabs{\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    border-radius: 6px;\n    opacity: 1;\n    margin-top: 40px;\n    margin-bottom: 30px;\n    display: flex;\n    justify-content: center;\n    min-height: 75px;\n    align-items: center;\n    \n}\n\n.employee-tabs .nav-tabs .nav-link {\n    border: none;\n    border-top-left-radius: unset;\n    border-top-right-radius: unset;\n}\n\n.employee-tabs  .nav-tabs {\n    border-bottom: none;\n}\n\n.create-availabillity .check-timing{\n    display: flex;\n}\n\n.create-availabillity .check-timing .check-timing-inner {\n    display: flex;\n}\n\n.create-availabillity .check-timing .check-day h3{\n    font-size: 14px;\n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-weight: bold;\n    padding-top: 5px;\n    padding-left: 25px;\n}\n\n.create-availabillity ul{\n    list-style-type: none;\n    display: flex;\n    justify-content: space-between;\n    margin-top: 35px;\n    margin-left: 25px;\n    margin-right: 25px;\n}\n\n.create-availabillity ul li h4{\n    \n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-size: 14px;\n    padding-left: 10px;\n    padding-bottom: 5px;\n    \n}\n\n.create-availabillity ul li h4.days{\n    \npadding-left: 48px;\n}\n\n.create-availabillity-inner{\n    min-height: 85px;\n    border-bottom: 1px solid #e1e1e1;\n    display: flex;\n    align-items: center;\n    padding-left: 40px;\n    display: flex;\n    justify-content: space-between;\n    padding-right: 40px;\n}\n\n.create-availabillity .employee-sec h2{\n    font-size: 16px;\n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-weight: bold;\n    margin: 0;\n    \n}\n\n.add-employee-inner{\n    height: 25px;\n    width: 25px;\n    line-height: 25px;\n    border: 1px solid #4ad991;\n    border-radius: 50%;\n    line-height: 25px;\n    text-align: center;\n    cursor: pointer;\n}\n\n.add-employee-inner i{\ncolor: #4ad991;\n}\n\n.add-employee {\n    display: flex;\n}\n\n.add-employee h2{\n    font-size: 14px;\n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-weight: bold;\n    margin: 0;\n    padding-top: 5px;\n    padding-left: 10px;\n}\n\n.check-spa-outer .tab-content{\n    background: #FFFFFF 0% 0% no-repeat padding-box;\n    box-shadow: 0px 2px 6px #0000000A;\n    border-radius: 6px;\n    opacity: 1;\n    margin-top: 0;\n}\n\n.create-availabillity .btn-sec .btn-save{\n    background: transparent linear-gradient(101deg, #CC2B5E 0%, #753A88 100%) 0% 0% no-repeat padding-box;\n    box-shadow: 0px 3px 12px #00000029;\n    border-radius: 25px;\n    opacity: 1;\n    height: 50px;\n    text-align: center;\n    letter-spacing: 1.4px;\n    color: #FFFFFF;\n    opacity: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    min-width: 152px;\n\n}\n\n.create-availabillity .btn-sec .btn-cancel{\n  \n    background: #454F60 0% 0% no-repeat padding-box;\n    margin-right: 5px;\n\n}\n\n.create-availabillity .btn-sec{\n\n    text-align: right;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    margin-right: 25px;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link{\n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{\n\n    color: #9C3EE8;\n\n}\n\n.check-timing-sec{\n    max-width: 1320px;\n}\n\n.employee-tabs ul li:nth-child(2){\n    margin-left: 80px;\n    margin-right: 80px;\n}\n\n.create-availabillity  .table thead th{\n    border-bottom: none;\n    border-top: none;\n    font-size: 12px;\n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-weight: 500;\n    padding-top: 30px;\n    padding-left: 40px;\n    padding-right: 40px;\n}\n\n.create-availabillity  .table tbody tr td{\n    \nborder-top: none;\nborder-bottom: 1px solid #f1f1f3;\ntext-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-size: 14px;\n    padding-top: 30px;\n    padding-left: 40px;\n    padding-bottom: 30px;\n    padding-right: 40px;\n\n}\n\n.create-availabillity  .table tbody tr td .delete-info{\n\n    margin-left: 35px;\n}\n\n/* .footer-sec{\n    text-align: left;\n    letter-spacing: 0;\n    color: #BCBCCB;\n    opacity: 1;\n    font-size: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    margin-left: 150px;\n} */\n\n.header-sec .navbar-expand-lg .navbar-nav .dropdown-menu {\n    position: absolute;\n    right: 0;\n    left: auto;\n    top: 40px;\n}\n\n@media(max-width: 1200px){\n    .create-availabillity .table tbody tr td{\n        padding-left: 20px;\n        padding-right: 20px;\n      \n        \n    }\n    .create-availabillity .table thead tr th{\n        padding-left: 20px;\n        padding-right: 45px;\n    }\n    .create-availabillity .table tbody tr td .delete-info {\n        margin-left: 25px;\n    }\n    .check-spa-outer .check-spa .salon-info .salon-info-inner h5{\n        word-break: break-word;\n    }\n    .check-spa-outer .check-spa .check-spa-image-outer{\n        padding: 25px 15px;\n    }\n    .check-spa-outer .check-spa .salon-info{\n        padding: 25px 15px;\n    }\n}\n\n@media(max-width:991px){\n    .check-spa-outer .check-spa .salon-info .salon-info-inner h5{\n        word-break: unset;\n    }\n    .check-spa-outer .check-spa .check-spa-image-outer{\n        padding: 25px 40px;\n    }\n    .check-spa-outer .check-spa .salon-info{\n        padding: 25px 40px;\n    }\n\n}\n\n@media(max-width:767px){\n    .employee-tabs ul li:nth-child(2) {\n        margin-left: 10px;\n        margin-right: 10px;\n    }\n    .create-availabillity .table tbody tr td{\n        padding-top: 30px;\n        padding-left: 15px;\n        padding-bottom: 30px;\n        padding-right: 15px;\n        \n    }\n    .create-availabillity .btn-sec{\n        margin-right: 10px;\n    }\n    .create-availabillity .btn-sec .btn-save{\n        height: 40px;\n        min-width: 120px;\n    }\n    .create-availabillity .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link{\n        padding: 5px;\n    }\n    .create-availabillity-inner{\n        padding-left: 20px;\n     \n        padding-right: 20px;\n    }\n  \n    \n    \n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUdBQXFHO0lBQ3JHLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7O0FBRW5COztBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFDQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7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QjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7O0FBRXZCOztBQUNBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFDQTs7Ozs7Ozs7O0dBU0c7O0FBQ0g7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBQ0E7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixtQkFBbUI7OztJQUd2QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBR0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7O0FBRUo7O0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG1CQUFtQjs7SUFFdkI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksa0JBQWtCOztRQUVsQixtQkFBbUI7SUFDdkI7Ozs7QUFJSiIsImZpbGUiOiJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5ib2R5e1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCwgYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFye1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgyNjdkZWcsICM3ODNBODcgMCUsICNCQzJFNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwQTtcbiAgICBvcGFjaXR5OiAxO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZHtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXItbmF2e1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1zZWMgIC5uYXZiYXItY29sbGFwc2V7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5oZWFkZXItc2VjIHVsIGxpOm50aC1jaGlsZCgyKXtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLmFjdGl2ZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1ne1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWd7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xle1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24taXRlbXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbn1cblxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEgLnNhbG9uLWljb257XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjdEN0Q7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciAuY2hlY2stc3BhLWltYWdle1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM4MTM4ODI7XG4gICAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4ucHJvZmlsZUltYWdle1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIGg0e1xuLyogXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjOUMzRUU4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIFxufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZve1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM5QzNFRTg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb257XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICAgIHBhZGRpbmc6IDI1cHggMjVweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24gcHtcblxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM0NTRGNjA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIGgye1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM5QzNFRTg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwQTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHBhZGRpbmc6IDMwcHg7ICovXG59XG4uY2hlY2stc3BhLW91dGVye1xuICAgIGJhY2tncm91bmQ6ICNGMEYwRjc7XG59XG4uZWRpdC1pbmZve1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIHRvcDogMTVweDtcbn1cbi5lZGl0LWluZm8gaW1ne1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuLmVtcGxveWVlLXRhYnN7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNzVweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxufVxuXG5cbi5lbXBsb3llZS10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdW5zZXQ7XG59XG5cbi5lbXBsb3llZS10YWJzICAubmF2LXRhYnMge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLXRpbWluZy1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay1kYXkgaDN7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM0NTRGNjA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNHtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNDU0RjYwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIFxufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIGxpIGg0LmRheXN7XG4gICAgXG5wYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG5cblxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXJ7XG4gICAgbWluLWhlaWdodDogODVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmVtcGxveWVlLXNlYyBoMntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBcbn1cbi5hZGQtZW1wbG95ZWUtaW5uZXJ7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YWQ5OTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWVtcGxveWVlLWlubmVyIGl7XG5jb2xvcjogIzRhZDk5MTtcbn1cbi5hZGQtZW1wbG95ZWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cblxuLmFkZC1lbXBsb3llZSBoMntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLnRhYi1jb250ZW50e1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwQTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxMDFkZWcsICNDQzJCNUUgMCUsICM3NTNBODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWluLXdpZHRoOiAxNTJweDtcblxufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2Vse1xuICBcbiAgICBiYWNrZ3JvdW5kOiAjNDU0RjYwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcblxufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2Vje1xuXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5re1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM0NTRGNjA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcblxuICAgIGNvbG9yOiAjOUMzRUU4O1xuXG59XG4uY2hlY2stdGltaW5nLXNlY3tcbiAgICBtYXgtd2lkdGg6IDEzMjBweDtcbn1cbi5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKXtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5ICAudGFibGUgdGhlYWQgdGh7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNDU0RjYwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAgLnRhYmxlIHRib2R5IHRyIHRke1xuICAgIFxuYm9yZGVyLXRvcDogbm9uZTtcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xudGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcblxufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5ICAudGFibGUgdGJvZHkgdHIgdGQgLmRlbGV0ZS1pbmZve1xuXG4gICAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG4vKiAuZm9vdGVyLXNlY3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjQkNCQ0NCO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XG59ICovXG4uaGVhZGVyLXNlYyAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdG9wOiA0MHB4O1xufVxuQG1lZGlhKG1heC13aWR0aDogMTIwMHB4KXtcbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRke1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdHIgdGh7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgICB9XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB9XG4gICAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1e1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIH1cbiAgICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlcntcbiAgICAgICAgcGFkZGluZzogMjVweCAxNXB4O1xuICAgIH1cbiAgICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm97XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgICB9XG59XG5cblxuQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XG4gICAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1e1xuICAgICAgICB3b3JkLWJyZWFrOiB1bnNldDtcbiAgICB9XG4gICAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXJ7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgICB9XG4gICAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZve1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gICAgfVxuXG59XG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcbiAgICAuZW1wbG95ZWUtdGFicyB1bCBsaTpudGgtY2hpbGQoMikge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRke1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlY3tcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZle1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgfVxuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLCAubmF2LXRhYnMgLm5hdi1saW5re1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eS1pbm5lcntcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICBcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB9XG4gIFxuICAgIFxuICAgIFxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/salon/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppSalonDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _dashboard_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../dashboard/common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashboardComponent = /*#__PURE__*/function () {
      //isSubscribeShow: boolean = false;
      function DashboardComponent(commServ, toastrServ, router) {
        _classCallCheck(this, DashboardComponent);

        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.router = router;
        this.dropdownVisible = false;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user_id = sessionStorage.getItem("userId");
          this.getSalonData(this.user_id); // this.checkChanges(this.user_id);
        } // checkChanges(data) {
        //   setInterval(() => {
        //     this.getSalonData(data);
        //   }, 3000);
        // }

      }, {
        key: "toggleSidebar",
        value: function toggleSidebar() {
          document.getElementsByTagName("body")[0].classList.toggle("sidenav-toggled");
        }
      }, {
        key: "toggleDropdown",
        value: function toggleDropdown() {
          this.dropdownVisible = !this.dropdownVisible;
        }
      }, {
        key: "getSalonData",
        value: function getSalonData(userId) {
          var _this6 = this;

          var data = {
            user_id: userId
          };
          this.commServ.getSalonData(data).subscribe(function (response) {
            //temporarily mark all salon users subscribed
            response["data"]["isSubscribed"] = true;

            if (response["data"]["isSubscribed"] === false && response["data"]["isApproved"] === true) {// this.router.navigate(["/salon/home/subscribe"]);
            } else if (response["data"]["isSubscribed"] === true) {
              _this6.router.navigate(["/salon/home/profile"]);
            }

            if (response.code === 200) {
              _this6.salonData = response.data;

              _this6.commServ.setCustomer_id(response.data["customer_id"]);

              _this6.commServ.setSalon_id(response.data["_id"]);

              _this6.commServ.setStripeConnectedStatus(response.data["isStripeCreated"]);
            } else {
              _this6.toastrServ.error("Invalid salon details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this6.toastrServ.error("Failed to get salon data", error, {
              timeOut: 3000
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _dashboard_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/salon/dashboard/dashboard.component.css"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/editsalon/editsalon.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/salon/dashboard/editsalon/editsalon.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardEditsalonEditsalonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profileOverlay {\n  margin-top: 4.5%;\n}\n.profileOverlay #profileArea {\n  padding: 10px;\n  background-color: white;\n  opacity: 1;\n  z-index: 11;\n  border-radius: 10px;\n}\n.profileOverlay #profileArea .salonDetailSave .field {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.profileOverlay #profileArea .salonDetailSave .field .label {\n  width: 25%;\n  margin: 0;\n}\n.profileOverlay #profileArea .salonDetailSave .fields {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 60%;\n}\n.profileOverlay #profileArea .salonDetailSave .image {\n  display: none;\n}\n.profileOverlay #profileArea .pendingApprovalArea {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.profileOverlay #profileArea .pendingApprovalArea .pendingText {\n  text-align: center;\n  border-color: transparent;\n  margin: 0;\n}\n.profileOverlay #profileArea .pendingApprovalArea .pendingGIF {\n  height: 85px;\n  width: 85px;\n}\n.profileOverlay #profileArea h2 {\n  font-size: 25px;\n}\n.profileOverlay #profileArea .btn-select-img {\n  margin: 0;\n}\n.searchBlock {\n  width: 60%;\n  border: 1px solid lightgray;\n  border-radius: 25px;\n}\n.searchBlock .input {\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9lZGl0c2Fsb24vZWRpdHNhbG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvZWRpdHNhbG9uL2VkaXRzYWxvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7QUNDSjtBRENNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREFRO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNFVjtBRENNO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NSO0FEQ007RUFDRSxhQUFBO0FDQ1I7QURHSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNETjtBREVNO0VBQ0Usa0JBQUE7RUFJQSx5QkFBQTtFQUNBLFNBQUE7QUNIUjtBREtNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNIUjtBRE1JO0VBQ0UsZUFBQTtBQ0pOO0FETUk7RUFDRSxTQUFBO0FDSk47QURRQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDTEY7QURNRTtFQUNFLFlBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9lZGl0c2Fsb24vZWRpdHNhbG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVPdmVybGF5IHtcbiAgbWFyZ2luLXRvcDogNC41JTtcbiAgI3Byb2ZpbGVBcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG5cbiAgICB6LWluZGV4OiAxMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5zYWxvbkRldGFpbFNhdmUge1xuICAgICAgLmZpZWxkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmllbGRzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgICAuaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wZW5kaW5nQXBwcm92YWxBcmVhIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLnBlbmRpbmdUZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAvLyBjb2xvcjogd2hpdGU7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKVxuICAgICAgICAvLyAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLnBlbmRpbmdHSUYge1xuICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgIHdpZHRoOiA4NXB4O1xuICAgICAgfVxuICAgIH1cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuICAgIC5idG4tc2VsZWN0LWltZyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG4uc2VhcmNoQmxvY2sge1xuICB3aWR0aDogNjAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIC5pbnB1dCB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG59XG4iLCIucHJvZmlsZU92ZXJsYXkge1xuICBtYXJnaW4tdG9wOiA0LjUlO1xufVxuLnByb2ZpbGVPdmVybGF5ICNwcm9maWxlQXJlYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5wcm9maWxlT3ZlcmxheSAjcHJvZmlsZUFyZWEgLnNhbG9uRGV0YWlsU2F2ZSAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5zYWxvbkRldGFpbFNhdmUgLmZpZWxkIC5sYWJlbCB7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMDtcbn1cbi5wcm9maWxlT3ZlcmxheSAjcHJvZmlsZUFyZWEgLnNhbG9uRGV0YWlsU2F2ZSAuZmllbGRzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiA2MCU7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5zYWxvbkRldGFpbFNhdmUgLmltYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5wcm9maWxlT3ZlcmxheSAjcHJvZmlsZUFyZWEgLnBlbmRpbmdBcHByb3ZhbEFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5wZW5kaW5nQXBwcm92YWxBcmVhIC5wZW5kaW5nVGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwO1xufVxuLnByb2ZpbGVPdmVybGF5ICNwcm9maWxlQXJlYSAucGVuZGluZ0FwcHJvdmFsQXJlYSAucGVuZGluZ0dJRiB7XG4gIGhlaWdodDogODVweDtcbiAgd2lkdGg6IDg1cHg7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIGgyIHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuLnByb2ZpbGVPdmVybGF5ICNwcm9maWxlQXJlYSAuYnRuLXNlbGVjdC1pbWcge1xuICBtYXJnaW46IDA7XG59XG5cbi5zZWFyY2hCbG9jayB7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn1cbi5zZWFyY2hCbG9jayAuaW5wdXQge1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/editsalon/editsalon.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/salon/dashboard/editsalon/editsalon.component.ts ***!
    \******************************************************************/

  /*! exports provided: EditsalonComponent */

  /***/
  function srcAppSalonDashboardEditsalonEditsalonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditsalonComponent", function () {
      return EditsalonComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../admin/country */
    "./src/app/admin/country.ts");

    var EditsalonComponent = /*#__PURE__*/function () {
      function EditsalonComponent(authServ, fb, commServ, toastrServ, router) {
        var _this7 = this;

        _classCallCheck(this, EditsalonComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.router = router;
        this.countriesData = _admin_country__WEBPACK_IMPORTED_MODULE_7__["countries"];
        this.showNow = false;
        this.numberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        this.checkIsApproved = false;
        this.url = "";
        this.showPendingApproval = false;

        if (navigator) {
          navigator.geolocation.getCurrentPosition(function (pos) {
            _this7.lng = +pos.coords.longitude;
            _this7.lat = +pos.coords.latitude;
          });
        }
      }

      _createClass(EditsalonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          sessionStorage.setItem("isReload", JSON.stringify(true));
          this.user_id = sessionStorage.getItem("userId");
          this.userid = this.user_id;
          this.getsalonsData(this.userid);
          this.submitSalonDetails = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberPattern)]],
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salonaddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: null,
            opentime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            closetime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lat: [""],
            "long": [""]
          }); //this.editSalonDetailsShow();
        }
      }, {
        key: "openTime",
        value: function openTime(data) {}
      }, {
        key: "closeTime",
        value: function closeTime(data) {}
      }, {
        key: "timeChanged",
        value: function timeChanged(data) {}
      }, {
        key: "onOpenTimeSelect",
        value: function onOpenTimeSelect(event) {}
      }, {
        key: "onCloseTimeSelect",
        value: function onCloseTimeSelect(event) {}
      }, {
        key: "cancelSalonUpdate",
        value: function cancelSalonUpdate() {
          this.submitSalonDetails.reset();
          this.router.navigate(["/salon/home/profile"]);
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(event) {
          var file = event.target.files[0];
          this.submitSalonDetails.patchValue({
            image: file
          });
          this.submitSalonDetails.get("image").updateValueAndValidity();
        }
      }, {
        key: "getsalonsData",
        value: function getsalonsData(data) {
          var _this8 = this;

          var dataToPass = {
            user_id: data
          };
          this.commServ.getSalonDetailsData(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this8.salonDetailsData = data["data"];
              _this8.salonid = data["data"]._id;

              _this8.submitSalonDetails.get("name").setValue(_this8.salonDetailsData.name);

              _this8.submitSalonDetails.get("code").setValue(_this8.salonDetailsData.code);

              _this8.submitSalonDetails.get("contact").setValue(_this8.salonDetailsData.contact);

              _this8.submitSalonDetails.get("salonaddress").setValue(_this8.salonDetailsData.salonaddress);

              _this8.submitSalonDetails.get("opentime").setValue(_this8.salonDetailsData.opentime);

              _this8.submitSalonDetails.get("closetime").setValue(_this8.salonDetailsData.closetime);
            } else {
              _this8.toastrServ.error("Failed to fetch salon details", "error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this8.toastrServ.error("Server Error", error, {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress(place) {
          var address = place; //console.log(address);

          this.lat = place["geometry"].location.lat();
          this.lng = place["geometry"].location.lng();
          this.submitSalonDetails.get("lat").setValue(this.lat);
          this.submitSalonDetails.updateValueAndValidity();
          this.submitSalonDetails.get("long").setValue(this.lng);
          this.submitSalonDetails.updateValueAndValidity();
        } // editSalonDetailsShow() {
        //   this.submitSalonDetails.get("name").setValue(this.salonDetailsData.name);
        //   this.submitSalonDetails
        //     .get("contact")
        //     .setValue(this.salonDetailsData.contact);
        //   this.submitSalonDetails
        //     .get("salonaddress")
        //     .setValue(this.salonDetailsData.salonaddress);
        //   this.submitSalonDetails
        //     .get("opentime")
        //     .setValue(this.salonDetailsData.opentime);
        //   this.submitSalonDetails
        //     .get("closetime")
        //     .setValue(this.salonDetailsData.closetime);
        // }

      }, {
        key: "updatetSalon",
        value: function updatetSalon(data) {
          var _this9 = this;

          var dataToPass = {
            salon_id: this.salonid,
            name: data.name,
            salonaddress: data.salonaddress,
            contact: data.contact,
            code: data.code,
            image: data.image,
            opentime: data.opentime,
            closetime: data.closetime,
            lat: this.lat,
            "long": this.lng
          };
          var postData = new FormData();
          postData.append("name", dataToPass.name);
          postData.append("image", dataToPass.image);
          postData.append("salonaddress", dataToPass.salonaddress);
          postData.append("opentime", dataToPass.opentime);
          postData.append("closetime", dataToPass.closetime);
          postData.append("contact", dataToPass.contact);
          postData.append("code", dataToPass.code);
          postData.append("salon_id", dataToPass.salon_id);
          postData.append("lat", dataToPass.lat);
          postData.append("long", dataToPass["long"]);
          var options = {
            content: postData
          };
          this.commServ.updateSalonDetails(postData).subscribe(function (data) {
            if (data["code"] === 200) {
              _this9.router.navigate(["/salon/home/profile"]);

              _this9.toastrServ.success("Salon Details Updated Successfully", "Success", {
                timeOut: 2000
              });

              if (JSON.parse(sessionStorage.getItem("isReload"))) {
                window.location.reload();
                sessionStorage.setItem("isReload", JSON.stringify(false));
              }
            } else {
              _this9.showPendingApproval = false;

              _this9.toastrServ.error("Failed To Update Salon Details", "", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this9.toastrServ.error("Server Error", error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "contact",
        get: function get() {
          return this.submitSalonDetails.get("contact");
        }
      }]);

      return EditsalonComponent;
    }();

    EditsalonComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    EditsalonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-editsalon",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editsalon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/editsalon/editsalon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editsalon.component.scss */
      "./src/app/salon/dashboard/editsalon/editsalon.component.scss"))["default"]]
    })], EditsalonComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/employee/add-employee/add-employee.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/salon/dashboard/employee/add-employee/add-employee.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardEmployeeAddEmployeeAddEmployeeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.header-sec .navbar {\n  background: transparent linear-gradient(267deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000A;\n  opacity: 1;\n}\n\n.header-sec .navbar-brand {\n  margin-left: 12px;\n}\n\n.header-sec .navbar-nav {\n  margin-right: 12px;\n}\n\n.header-sec .navbar-collapse {\n  justify-content: flex-end;\n}\n\n.header-sec ul li:nth-child(2) {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.header-sec .navbar ul li.active {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #FFFFFF;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #FFFFFF;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li.notification-img {\n  border-right: 1px solid #fff;\n  margin-left: 60px;\n  height: 25px;\n  margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img {\n  margin-right: 15px;\n  margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after {\n  display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle {\n  margin-right: 50px;\n  margin-left: 15px;\n  letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #333;\n  opacity: 1;\n  font-size: 12px;\n  line-height: 1;\n  color: #454F60;\n}\n\n.header-sec .navbar ul li a .salon-icon {\n  height: 45px;\n  width: 45px;\n  border: 1px solid #FF7D7D;\n  border-radius: 28px;\n  opacity: 1;\n  line-height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -4px;\n  right: 0;\n  background: #fff;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer .check-spa-image {\n  border: 2px solid #813882;\n  border-radius: 90px;\n  opacity: 1;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer {\n  border-bottom: 1px solid #e1e1e1;\n  padding: 25px 40px;\n  padding-top: 40px;\n}\n\n.check-spa-outer .check-spa h4 {\n  /* \n      text-align: left; */\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-weight: 500;\n  text-align: center;\n  font-size: 18px;\n  padding-top: 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9C3EE8;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .salon-info {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9C3EE8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .about-salon p {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.check-spa-outer .check-spa .about-salon h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9C3EE8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\n.check-spa-outer .check-spa {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000A;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  position: relative;\n  /* padding: 30px; */\n}\n\n.check-spa-outer {\n  background: #FFFFFF;\n}\n\n.edit-info {\n  position: absolute;\n  right: 25px;\n  top: 15px;\n}\n\n.edit-info img {\n  cursor: pointer;\n}\n\n.employee-tabs {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  min-height: 0;\n  align-items: center;\n}\n\n.employee-tabs .nav-tabs .nav-link {\n  border: none;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n\n.employee-tabs .nav-tabs {\n  border-bottom: none;\n}\n\n.create-availabillity .check-timing {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-timing-inner {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-day h3 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-left: 25px;\n}\n\n.create-availabillity ul {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.create-availabillity ul li h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.create-availabillity ul li h4.days {\n  padding-left: 48px;\n}\n\n.create-availabillity-inner {\n  min-height: 85px;\n  border-bottom: 1px solid #e1e1e1;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n\n.create-availabillity .employee-sec h2 {\n  font-size: 16px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n}\n\n.add-employee-inner {\n  height: 25px;\n  width: 25px;\n  line-height: 25px;\n  border: 1px solid #4ad991;\n  border-radius: 50%;\n  line-height: 25px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-employee-inner i {\n  color: #4ad991;\n}\n\n.add-employee {\n  display: flex;\n}\n\n.add-employee h2 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n\n.check-spa-outer .tab-content {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000A;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 0;\n  min-height: 800px;\n}\n\n.create-availabillity .btn-sec .btn-cancel:hover {\n  color: #454F60;\n  background: #FFFFFF;\n}\n\n.create-availabillity .btn-sec .btn-save:hover {\n  color: #753A88;\n  background: #FFFFFF;\n}\n\n.create-availabillity .btn-sec .btn-save {\n  background: transparent linear-gradient(101deg, #CC2B5E 0%, #753A88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #FFFFFF;\n  opacity: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n  min-width: 152px;\n}\n\n.create-availabillity .btn-sec .btn-cancel {\n  background: #454F60 0% 0% no-repeat padding-box;\n  margin-right: 5px;\n}\n\n.create-availabillity .btn-sec {\n  text-align: right;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-right: 25px;\n  background: #FFFFFF;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {\n  color: #9C3EE8;\n}\n\n.check-timing-sec {\n  max-width: 1320px;\n}\n\n.employee-tabs ul li:nth-child(2) {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.create-availabillity .table thead th {\n  border-bottom: none;\n  border-top: none;\n  font-size: 12px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-weight: 500;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td {\n  border-top: none;\n  border-bottom: 1px solid #f1f1f3;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-size: 14px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-bottom: 30px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td .delete-info {\n  margin-left: 35px;\n}\n\n.footer-sec {\n  text-align: left;\n  letter-spacing: 0;\n  color: #BCBCCB;\n  opacity: 1;\n  font-size: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 150px;\n}\n\n.header-sec .navbar-expand-lg .navbar-nav .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n  top: 40px;\n}\n\n@media (max-width: 1200px) {\n  .create-availabillity .table tbody tr td {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .create-availabillity .table thead tr th {\n    padding-left: 20px;\n    padding-right: 45px;\n  }\n\n  .create-availabillity .table tbody tr td .delete-info {\n    margin-left: 25px;\n  }\n\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: break-word;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 15px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 15px;\n  }\n}\n\n@media (max-width: 991px) {\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: unset;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 40px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 40px;\n  }\n}\n\n@media (max-width: 767px) {\n  .employee-tabs ul li:nth-child(2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .create-availabillity .table tbody tr td {\n    padding-top: 30px;\n    padding-left: 15px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n  }\n\n  .create-availabillity .btn-sec {\n    margin-right: 10px;\n  }\n\n  .create-availabillity .btn-sec .btn-save {\n    height: 40px;\n    min-width: 120px;\n  }\n\n  .create-availabillity .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {\n    padding: 5px;\n  }\n\n  .create-availabillity-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n/* add employee css */\n\n.add-employees-sec .add-employees .add-employees-inner .select-employee select {\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border: 1px solid #DFDFDF;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  width: 100%;\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 0.9;\n  padding-left: 20px;\n  -webkit-appearance: none;\n}\n\n.add-employees-sec .add-employees .add-employees-inner .select-employee img {\n  position: absolute;\n  right: 23px;\n  top: 23px;\n}\n\n.add-employees-sec .add-employees .add-employees-inner .select-employee {\n  position: relative;\n}\n\n.add-employees-sec .add-employees .add-employees-inner label {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-size: 14px;\n  /* padding-left: 15px; */\n}\n\n.add-employees-sec .add-employees {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.add-employees-sec .add-employees .add-employees-inner {\n  /* flex: 1;\n  margin: 0 5px; */\n  margin-right: 10px;\n  width: 100%;\n  max-width: 210px;\n}\n\n.add-employees-sec .add-employees .add-employee-icon {\n  flex: none;\n  margin-top: 26px;\n  margin-left: auto;\n  width: auto;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner {\n  position: relative;\n  margin: 0 5px;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services {\n  background: #813882 0% 0% no-repeat padding-box;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services img {\n  margin-right: 15px;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services h5 {\n  font-size: 14px;\n  letter-spacing: 0;\n  color: #FFFFFF;\n  opacity: 0.9;\n  font-weight: 100;\n  padding: 0px 18px;\n  margin: 0px;\n}\n\n.add-employees-sec .add-employee-services .services-sec h4 {\n  font-size: 14px;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  padding-left: 15px;\n}\n\n.add-employees-sec {\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.add-employees-sec .add-employee-services {\n  margin-top: 25px;\n  border-bottom: 1px solid #e1e1e1;\n  padding-bottom: 30px;\n}\n\n.add-employees-sec .add-employee-services .services-sec {\n  display: flex;\n}\n\n.add-employees-sec .add-employee-services h4 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  /* padding-left: 15px; */\n  font-weight: 400;\n}\n\n.inner-tab-section {\n  height: 100%;\n  min-height: 550px;\n}\n\n@media (max-width: 1200px) {\n  .add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services h5 {\n    padding: 0px 13px;\n  }\n}\n\n@media (max-width: 767px) {\n  .add-employees-sec .add-employee-services .services-sec {\n    display: block;\n  }\n\n  .add-employees-sec .add-employee-services .services-sec .add-employee-services-inner {\n    margin-bottom: 5px;\n  }\n\n  .add-employees-sec .add-employees {\n    display: block;\n  }\n\n  .add-employees-sec .add-employees .add-employees-inner {\n    max-width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .add-employee-inner {\n    margin: 0 auto;\n  }\n\n  .add-employees-sec {\n    /* padding-top: 30px; */\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .inner-tab-section {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9lbXBsb3llZS9hZGQtZW1wbG95ZWUvYWRkLWVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvZW1wbG95ZWUvYWRkLWVtcGxveWVlL2FkZC1lbXBsb3llZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlDQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxxR0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQ0RKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDSUo7O0FEREE7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0lKOztBRERBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDSUo7O0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFD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bG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYm9keXtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMEE7XG4gICAgb3BhY2l0eTogMTtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXItYnJhbmR7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdntcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjICAubmF2YmFyLWNvbGxhcHNle1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uaGVhZGVyLXNlYyB1bCBsaTpudGgtY2hpbGQoMil7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5hY3RpdmV7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGF7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG5cbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZ3tcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLm5vdGlmaWNhdGlvbi1pbWcgaW1ne1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXJ7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZXtcbiAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW17XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgY29sb3I6ICM0NTRGNjA7XG59XG5cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIC5zYWxvbi1pY29ue1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY3RDdEO1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTRweDtcbiAgICByaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIgLmNoZWNrLXNwYS1pbWFnZXtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjODEzODgyO1xuICAgIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIGg0e1xuLyogXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjOUMzRUU4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIFxufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZve1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM5QzNFRTg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb257XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gICAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICAgIHBhZGRpbmc6IDI1cHggMjVweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24gcHtcblxuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM0NTRGNjA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIGgye1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM5QzNFRTg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwQTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHBhZGRpbmc6IDMwcHg7ICovXG59XG4uY2hlY2stc3BhLW91dGVye1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG4uZWRpdC1pbmZve1xuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyNXB4O1xuICAgIHRvcDogMTVweDtcbn1cbi5lZGl0LWluZm8gaW1ne1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuLmVtcGxveWVlLXRhYnN7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxufVxuXG5cbi5lbXBsb3llZS10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdW5zZXQ7XG59XG5cbi5lbXBsb3llZS10YWJzICAubmF2LXRhYnMge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZ3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLXRpbWluZy1pbm5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay1kYXkgaDN7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM0NTRGNjA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVse1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNHtcbiAgICBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNDU0RjYwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIFxufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIGxpIGg0LmRheXN7XG4gICAgXG5wYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG5cblxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXJ7XG4gICAgbWluLWhlaWdodDogODVweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmVtcGxveWVlLXNlYyBoMntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBcbn1cbi5hZGQtZW1wbG95ZWUtaW5uZXJ7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0YWQ5OTE7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWVtcGxveWVlLWlubmVyIGl7XG5jb2xvcjogIzRhZDk5MTtcbn1cbi5hZGQtZW1wbG95ZWUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cblxuLmFkZC1lbXBsb3llZSBoMntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLnRhYi1jb250ZW50e1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwQTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2VsOmhvdmVyIHtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZTpob3ZlciB7XG4gICAgY29sb3I6ICM3NTNBODg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbiAgXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxMDFkZWcsICNDQzJCNUUgMCUsICM3NTNBODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMjk7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWluLXdpZHRoOiAxNTJweDtcblxufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2Vse1xuICBcbiAgICBiYWNrZ3JvdW5kOiAjNDU0RjYwIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcblxufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2Vje1xuXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG59XG5cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZle1xuXG4gICAgY29sb3I6ICM5QzNFRTg7XG5cbn1cbi5jaGVjay10aW1pbmctc2Vje1xuICAgIG1heC13aWR0aDogMTMyMHB4O1xufVxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpe1xuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICAgIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgIC50YWJsZSB0aGVhZCB0aHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM0NTRGNjA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5ICAudGFibGUgdGJvZHkgdHIgdGR7XG4gICAgXG5ib3JkZXItdG9wOiBub25lO1xuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjM7XG50ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNDU0RjYwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xuXG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgIC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm97XG5cbiAgICBtYXJnaW4tbGVmdDogMzVweDtcbn1cbi5mb290ZXItc2Vje1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICNCQ0JDQ0I7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogYXV0bztcbiAgICB0b3A6IDQwcHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOiAxMjAwcHgpe1xuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGR7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0ciB0aHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICAgIH1cbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIH1cbiAgICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDV7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgfVxuICAgIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVye1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gICAgfVxuICAgIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mb3tcbiAgICAgICAgcGFkZGluZzogMjVweCAxNXB4O1xuICAgIH1cbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KXtcbiAgICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDV7XG4gICAgICAgIHdvcmQtYnJlYWs6IHVuc2V0O1xuICAgIH1cbiAgICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlcntcbiAgICAgICAgcGFkZGluZzogMjVweCA0MHB4O1xuICAgIH1cbiAgICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm97XG4gICAgICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgICB9XG5cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICBcbiAgICB9XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2Vje1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmV7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICB9XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmt7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVye1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgIFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgXG4gICAgXG4gICAgXG59XG5cblxuXG5cblxuXG5cblxuXG4vKiBhZGQgZW1wbG95ZWUgY3NzICovXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIgLnNlbGVjdC1lbXBsb3llZSBzZWxlY3R7XG5cblxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5hZGQtZW1wbG95ZWVzLXNlYyAgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIgLnNlbGVjdC1lbXBsb3llZSBpbWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyM3B4O1xuICAgIHRvcDogMjNweDtcblxufVxuLmFkZC1lbXBsb3llZXMtc2VjICAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciAuc2VsZWN0LWVtcGxveWVle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjICAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciBsYWJlbHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNDU0RjYwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIC8qIHBhZGRpbmctbGVmdDogMTVweDsgKi9cbiAgICBcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjICAuYWRkLWVtcGxveWVlc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZC1lbXBsb3llZXMtc2VjICAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciB7XG5cbiAgICAvKiBmbGV4OiAxO1xuICAgIG1hcmdpbjogMCA1cHg7ICovXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMjEwcHg7XG59XG4uYWRkLWVtcGxveWVlcy1zZWMgIC5hZGQtZW1wbG95ZWVzIC5hZGQtZW1wbG95ZWUtaWNvbntcblxuICAgIGZsZXg6IG5vbmU7XG4gICAgbWFyZ2luLXRvcDogMjZweDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB3aWR0aDogYXV0bztcbn1cblxuXG4uYWRkLWVtcGxveWVlcy1zZWMgIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzLWlubmVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgNXB4O1xufSBcbi5hZGQtZW1wbG95ZWVzLXNlYyAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIgLmhhaXItc2VydmljZXN7XG4gICAgYmFja2dyb3VuZDogIzgxMzg4MiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG59XG4uYWRkLWVtcGxveWVlcy1zZWMgIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzLWlubmVyIC5oYWlyLXNlcnZpY2VzIGltZ3tcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4uYWRkLWVtcGxveWVlcy1zZWMgIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzLWlubmVyIC5oYWlyLXNlcnZpY2VzIGg1e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5hZGQtZW1wbG95ZWVzLXNlYyAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIGg0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcblxufVxuLmFkZC1lbXBsb3llZXMtc2Vje1xuXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgXG59XG4uYWRkLWVtcGxveWVlcy1zZWMgIC5hZGQtZW1wbG95ZWUtc2VydmljZXN7XG5cbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuXG59XG4uYWRkLWVtcGxveWVlcy1zZWMgIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlY3tcbmRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyBoNHtcblxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIGNvbG9yOiAjNDU0RjYwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAxNXB4OyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbn1cbi5pbm5lci10YWItc2VjdGlvbntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNTUwcHg7XG59XG5ib2R5e1xuIFxufVxuXG5AbWVkaWEobWF4LXdpZHRoOjEyMDBweCl7XG4gICAgLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzLWlubmVyIC5oYWlyLXNlcnZpY2VzIGg1e1xuICAgICAgICBwYWRkaW5nOiAwcHggMTNweDtcbiAgICB9XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xuXG5cbiAgICAuYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lciB7XG4gICAgICBcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAuYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIC5hZGQtZW1wbG95ZWVzLWlubmVye1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC5hZGQtZW1wbG95ZWUtaW5uZXJ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICAuYWRkLWVtcGxveWVlcy1zZWMge1xuICAgICAgICAvKiBwYWRkaW5nLXRvcDogMzBweDsgKi9cbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAuaW5uZXItdGFiLXNlY3Rpb257XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICBcbiAgICB9XG4gICAgXG59XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBBO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWNvbGxhcHNlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmhlYWRlci1zZWMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5hY3RpdmUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24taXRlbSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjNDU0RjYwO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEgLnNhbG9uLWljb24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkY3RDdEO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBvcGFjaXR5OiAxO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIgLmNoZWNrLXNwYS1pbWFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MTM4ODI7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgaDQge1xuICAvKiBcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NEY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5QzNFRTg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5QzNFRTg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICAvKiBwYWRkaW5nOiAyNXB4IDQwcHg7ICovXG4gIHBhZGRpbmc6IDI1cHggMjVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0RjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24gaDIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5QzNFRTg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwQTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHBhZGRpbmc6IDMwcHg7ICovXG59XG5cbi5jaGVjay1zcGEtb3V0ZXIge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG4uZWRpdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiAxNXB4O1xufVxuXG4uZWRpdC1pbmZvIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVtcGxveWVlLXRhYnMge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyAuY2hlY2stdGltaW5nLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLWRheSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0RjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIGxpIGg0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0RjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIGxpIGg0LmRheXMge1xuICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eS1pbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDg1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5lbXBsb3llZS1zZWMgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NEY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFkZC1lbXBsb3llZS1pbm5lciB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGFkOTkxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1lbXBsb3llZS1pbm5lciBpIHtcbiAgY29sb3I6ICM0YWQ5OTE7XG59XG5cbi5hZGQtZW1wbG95ZWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWVtcGxveWVlIGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRGNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAudGFiLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBBO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBjb2xvcjogIzQ1NEY2MDtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZTpob3ZlciB7XG4gIGNvbG9yOiAjNzUzQTg4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEwMWRlZywgI0NDMkI1RSAwJSwgIzc1M0E4OCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMjk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1pbi13aWR0aDogMTUycHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICM0NTRGNjAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NEY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzlDM0VFODtcbn1cblxuLmNoZWNrLXRpbWluZy1zZWMge1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbn1cblxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0RjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NEY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLmZvb3Rlci1zZWMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNCQ0JDQ0I7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdHIgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiB1bnNldDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eS1pbm5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi8qIGFkZCBlbXBsb3llZSBjc3MgKi9cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciAuc2VsZWN0LWVtcGxveWVlIHNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NEY2MDtcbiAgb3BhY2l0eTogMC45O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIC5hZGQtZW1wbG95ZWVzLWlubmVyIC5zZWxlY3QtZW1wbG95ZWUgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjNweDtcbiAgdG9wOiAyM3B4O1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIgLnNlbGVjdC1lbXBsb3llZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIC5hZGQtZW1wbG95ZWVzLWlubmVyIGxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0RjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIC8qIHBhZGRpbmctbGVmdDogMTVweDsgKi9cbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIge1xuICAvKiBmbGV4OiAxO1xuICBtYXJnaW46IDAgNXB4OyAqL1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDIxMHB4O1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZS1pY29uIHtcbiAgZmxleDogbm9uZTtcbiAgbWFyZ2luLXRvcDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lciAuaGFpci1zZXJ2aWNlcyB7XG4gIGJhY2tncm91bmQ6ICM4MTM4ODIgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lciAuaGFpci1zZXJ2aWNlcyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lciAuaGFpci1zZXJ2aWNlcyBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyBoNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0RjYwO1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NEY2MDtcbiAgb3BhY2l0eTogMTtcbiAgLyogcGFkZGluZy1sZWZ0OiAxNXB4OyAqL1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW5uZXItdGFiLXNlY3Rpb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDU1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lciAuaGFpci1zZXJ2aWNlcyBoNSB7XG4gICAgcGFkZGluZzogMHB4IDEzcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG5cbiAgLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIH1cblxuICAuYWRkLWVtcGxveWVlLWlubmVyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuXG4gIC5hZGQtZW1wbG95ZWVzLXNlYyB7XG4gICAgLyogcGFkZGluZy10b3A6IDMwcHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuaW5uZXItdGFiLXNlY3Rpb24ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/employee/add-employee/add-employee.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/salon/dashboard/employee/add-employee/add-employee.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: AddEmployeeComponent */

  /***/
  function srcAppSalonDashboardEmployeeAddEmployeeAddEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddEmployeeComponent", function () {
      return AddEmployeeComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddEmployeeComponent = /*#__PURE__*/function () {
      function AddEmployeeComponent(authServ, fb, commServ, toastrServ, router, dialog) {
        _classCallCheck(this, AddEmployeeComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.router = router;
        this.dialog = dialog;
        this.categoryList = [];
        this.serviceList = [];
      }

      _createClass(AddEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user_id = sessionStorage.getItem("userId");
          this.getSalonData(this.user_id);
          this.employeeForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
        }
      }, {
        key: "getSalonData",
        value: function getSalonData(userId) {
          var _this10 = this;

          // console.log("GetUser ID ", userId);
          var data = {
            user_id: userId
          };
          this.commServ.getSalonData(data).subscribe(function (responce) {
            if (responce.code === 200) {
              _this10.salonData = responce.data; // console.log("sss", this.salonData);
            } else {
              _this10.toastrServ.error("Invalid salon details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this10.toastrServ.error("Failed to get salon data", error, {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.router.navigate(["salon/home/profile"]);
        }
      }, {
        key: "saveEmployee",
        value: function saveEmployee(data) {
          var _this11 = this;

          var dataToPass = {
            name: data.name,
            salon_id: this.salonData._id
          };
          console.log("DATA", data);
          this.commServ.addEmployee(dataToPass).subscribe(function (data) {
            console.log("DATA", data);

            if (data["code"] === 200) {
              _this11.toastrServ.success("Employee Added", "Success", {
                timeOut: 2000
              });

              _this11.employeeForm.reset();

              _this11.router.navigate(["salon/home/profile"]);
            } else {
              // this.isAddModal = true;
              _this11.toastrServ.error("Failed To Add", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this11.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "name",
        get: function get() {
          return this.employeeForm.get("name");
        }
      }]);

      return AddEmployeeComponent;
    }();

    AddEmployeeComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    AddEmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-employee",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-employee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/employee/add-employee/add-employee.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-employee.component.scss */
      "./src/app/salon/dashboard/employee/add-employee/add-employee.component.scss"))["default"]]
    })], AddEmployeeComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/employee/employee.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/salon/dashboard/employee/employee.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardEmployeeEmployeeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.header-sec .navbar {\n  background: transparent linear-gradient(267deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  opacity: 1;\n}\n\n.header-sec .navbar-brand {\n  margin-left: 12px;\n}\n\n.header-sec .navbar-nav {\n  margin-right: 12px;\n}\n\n.header-sec .navbar-collapse {\n  justify-content: flex-end;\n}\n\n.header-sec ul li:nth-child(2) {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.header-sec .navbar ul li.active {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li.notification-img {\n  border-right: 1px solid #fff;\n  margin-left: 60px;\n  height: 25px;\n  margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img {\n  margin-right: 15px;\n  margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after {\n  display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle {\n  margin-right: 50px;\n  margin-left: 15px;\n  letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #333;\n  opacity: 1;\n  font-size: 12px;\n  line-height: 1;\n  color: #454f60;\n}\n\n.header-sec .navbar ul li a .salon-icon {\n  height: 45px;\n  width: 45px;\n  border: 1px solid #ff7d7d;\n  border-radius: 28px;\n  opacity: 1;\n  line-height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -4px;\n  right: 0;\n  background: #fff;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer .check-spa-image {\n  border: 2px solid #813882;\n  border-radius: 90px;\n  opacity: 1;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer {\n  border-bottom: 1px solid #e1e1e1;\n  padding: 25px 40px;\n  padding-top: 40px;\n}\n\n.check-spa-outer .check-spa h4 {\n  /* \n    text-align: left; */\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  text-align: center;\n  font-size: 18px;\n  padding-top: 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .salon-info {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .about-salon p {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.check-spa-outer .check-spa .about-salon h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\n.check-spa-outer .check-spa {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  position: relative;\n  /* padding: 30px; */\n}\n\n.check-spa-outer {\n  background: #ffffff;\n}\n\n.edit-info {\n  position: absolute;\n  right: 25px;\n  top: 15px;\n}\n\n.edit-info img {\n  cursor: pointer;\n}\n\n.employee-tabs {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  opacity: 1;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  min-height: 0;\n  align-items: center;\n}\n\n.employee-tabs .nav-tabs .nav-link {\n  border: none;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n\n.employee-tabs .nav-tabs {\n  border-bottom: none;\n}\n\n.create-availabillity .check-timing {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-timing-inner {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-day h3 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-left: 25px;\n}\n\n.create-availabillity ul {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.create-availabillity ul li h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.create-availabillity ul li h4.days {\n  padding-left: 48px;\n}\n\n.create-availabillity-inner {\n  min-height: 85px;\n  border-bottom: 1px solid #e1e1e1;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n\n.create-availabillity .employee-sec h2 {\n  font-size: 16px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n}\n\n.add-employee-inner {\n  height: 25px;\n  width: 25px;\n  line-height: 25px;\n  border: 1px solid #4ad991;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 25px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-employee-inner i {\n  color: #4ad991;\n}\n\n.add-employee {\n  display: flex;\n}\n\n.add-employee h2 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n\n.check-spa-outer .tab-content {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 0;\n}\n\n.create-availabillity .btn-sec .btn-save {\n  background: transparent linear-gradient(101deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n  min-width: 152px;\n}\n\n.create-availabillity .btn-sec .btn-cancel {\n  background: #454f60 0% 0% no-repeat padding-box;\n  margin-right: 5px;\n}\n\n.create-availabillity .btn-sec {\n  text-align: right;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-right: 25px;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #9c3ee8;\n}\n\n.check-timing-sec {\n  max-width: 1320px;\n}\n\n.employee-tabs ul li:nth-child(2) {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.create-availabillity .table thead th {\n  border-bottom: none;\n  border-top: none;\n  font-size: 12px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td {\n  border-top: none;\n  border-bottom: 1px solid #f1f1f3;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-bottom: 30px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td .delete-info {\n  margin-left: 35px;\n}\n\n.footer-sec {\n  text-align: left;\n  letter-spacing: 0;\n  color: #bcbccb;\n  opacity: 1;\n  font-size: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 150px;\n}\n\n.header-sec .navbar-expand-lg .navbar-nav .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n  top: 40px;\n}\n\ntable {\n  width: 100%;\n}\n\n.action-btns a img {\n  margin-right: 10px;\n}\n\n@media (max-width: 1200px) {\n  .create-availabillity .table tbody tr td {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .create-availabillity .table thead tr th {\n    padding-left: 20px;\n    padding-right: 45px;\n  }\n\n  .create-availabillity .table tbody tr td .delete-info {\n    margin-left: 25px;\n  }\n\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: break-word;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 15px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 15px;\n  }\n}\n\n@media (max-width: 991px) {\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: unset;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 40px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 40px;\n  }\n}\n\n@media (max-width: 767px) {\n  .employee-tabs ul li:nth-child(2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .create-availabillity .table tbody tr td {\n    padding-top: 30px;\n    padding-left: 15px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n  }\n\n  .create-availabillity .btn-sec {\n    margin-right: 10px;\n  }\n\n  .create-availabillity .btn-sec .btn-save {\n    height: 40px;\n    min-width: 120px;\n  }\n\n  .create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n    padding: 5px;\n  }\n\n  .create-availabillity-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n.noRec {\n  padding: 1em;\n  margin: 1em !important;\n  width: 100% !important;\n}\n\n.add-employee a {\n  display: flex;\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  width: 35%;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.main-section-area.modal-md {\n  width: 38%;\n  padding: 16px;\n}\n\n.btn-Area {\n  text-align: right;\n}\n\n.header {\n  border-bottom: 1px solid lightgray;\n}\n\n.header h4 {\n  font-size: 17px;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 0px 0px 10px;\n}\n\n.main-section {\n  margin-top: 10px;\n}\n\n.field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\nlabel {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  .mat-tab-body-content {\n    padding: 0px !important;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.can {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxR0FBQTtFQUVBLGlDQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURKQTtFQUNFLGFBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1FGOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUUY7O0FETEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNB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O0FEdENBO0VBQ0UsaUJBQUE7QUN5Q0Y7O0FEdkNBO0VBQ0Usa0NBQUE7QUMwQ0Y7O0FEekNFO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUMyQ0o7O0FEeENBO0VBQ0UsZ0JBQUE7QUMyQ0Y7O0FEekNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUM0Q0Y7O0FEMUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDNkNGOztBRDNDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUM4Q0Y7O0FENUNBO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMrQ0Y7O0FEN0NBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQ2dERjs7QUQ5Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDaURGOztBRDlDQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ2lERjs7QUQ5Q0E7RUFDRSxhQUFBO0FDaURGOztBRDlDQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDaURGOztFRC9DQTtJQUNFLHVCQUFBO0VDa0RGOztFRGhEQTtJQUNFLGtCQUFBO0VDbURGOztFRGpEQTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ29ERjs7RURsREE7SUFDRSxXQUFBO0VDcURGOztFRG5EQTtJQUNFLGFBQUE7RUNzREY7O0VEbkRBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDc0RGO0FBQ0Y7O0FEcERBO0VBQ0UsV0FBQTtBQ3NERiIsImZpbGUiOiJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2N2RlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJVxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBvcGFjaXR5OiAxO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1uYXYge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXItY29sbGFwc2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlci1zZWMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkuYWN0aXZlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM0NTRmNjA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSAuc2Fsb24taWNvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjdkN2Q7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIgLmNoZWNrLXNwYS1pbWFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MTM4ODI7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSBoNCB7XG4gIC8qIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xufVxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uZWRpdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiAxNXB4O1xufVxuLmVkaXQtaW5mbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay10aW1pbmctaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLWRheSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQuZGF5cyB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5lbXBsb3llZS1zZWMgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cbi5hZGQtZW1wbG95ZWUtaW5uZXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhZDk5MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZC1lbXBsb3llZS1pbm5lciBpIHtcbiAgY29sb3I6ICM0YWQ5OTE7XG59XG4uYWRkLWVtcGxveWVlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmFkZC1lbXBsb3llZSBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC50YWItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi8vIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAgaW5wdXR7XG4vLyAgICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGhlaWdodDogMzVweDtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMDtcbi8vICAgICBjb2xvcjogIzk1OTVBMTtcbi8vICAgICBvcGFjaXR5OiAwLjk7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4vLyB9XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEwMWRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJVxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICM0NTRmNjAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICM5YzNlZTg7XG59XG4uY2hlY2stdGltaW5nLXNlYyB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xufVxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuLmZvb3Rlci1zZWMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNiY2JjY2I7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDQwcHg7XG59XG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFjdGlvbi1idG5zIGEgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gICAgd29yZC1icmVhazogdW5zZXQ7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuICAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubm9SZWMge1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMWVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uYWRkLWVtcGxveWVlIHtcbiAgYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuXG4udXNlckRldGFpbHNPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyAvLyBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgL1xuICAvL2Rpc3BsYXk6IG5vbmU7IC8gSGlkZGVuIGJ5IGRlZmF1bHQgL1xuICB3aWR0aDogMTAwJTsgLy8gRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpIC9cbiAgaGVpZ2h0OiAxMDAlOyAvLyBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpIC9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8vIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5IC9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFpbi1zZWN0aW9uLWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDM1JTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAmLm1vZGFsLW1kIHtcbiAgICB3aWR0aDogMzglO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbn1cblxuLmJ0bi1BcmVhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgaDQge1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBtYXJnaW46IDBweCAwcHggMTBweDtcbiAgfVxufVxuLm1haW4tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnByb2ZpbGVQaWMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbmxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGV0YWlscyB7XG4gIHdpZHRoOiA3NSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5pbWcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW9iaWxlLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtbGFiZWwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG4gIC5tYXQtdGFiLWJvZHktY29udGVudCB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN1c3BlbmQtc2VjIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG4uY2FuIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2N2RlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwYTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5oZWFkZXItc2VjIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkuYWN0aXZlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLm5vdGlmaWNhdGlvbi1pbWcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzQ1NGY2MDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIC5zYWxvbi1pY29uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2Q3ZDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgb3BhY2l0eTogMTtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIC5jaGVjay1zcGEtaW1hZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODEzODgyO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIGg0IHtcbiAgLyogXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBoMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMzBweDsgKi9cbn1cblxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5lZGl0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5lZGl0LWluZm8gaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZW1wbG95ZWUtdGFicyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHVuc2V0O1xufVxuXG4uZW1wbG95ZWUtdGFicyAubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay10aW1pbmctaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyAuY2hlY2stZGF5IGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQuZGF5cyB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmVtcGxveWVlLXNlYyBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWRkLWVtcGxveWVlLWlubmVyIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YWQ5OTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1lbXBsb3llZS1pbm5lciBpIHtcbiAgY29sb3I6ICM0YWQ5OTE7XG59XG5cbi5hZGQtZW1wbG95ZWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWVtcGxveWVlIGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAudGFiLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTAxZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogIzQ1NGY2MCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICM5YzNlZTg7XG59XG5cbi5jaGVjay10aW1pbmctc2VjIHtcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XG59XG5cbi5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQgLmRlbGV0ZS1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5mb290ZXItc2VjIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjYmNiY2NiO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDQwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hY3Rpb24tYnRucyBhIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdHIgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiB1bnNldDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4ubm9SZWMge1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMWVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtZW1wbG95ZWUgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51c2VyRGV0YWlsc092ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuLm1haW4tc2VjdGlvbi1hcmVhLm1vZGFsLW1kIHtcbiAgd2lkdGg6IDM4JTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmJ0bi1BcmVhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLmhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG4ubWFpbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZpZWxkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2ZpbGVQaWMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxubGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRldGFpbHMge1xuICB3aWR0aDogNzUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5pbWcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cblxuICAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG4uY2FuIHtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/employee/employee.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/salon/dashboard/employee/employee.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppSalonDashboardEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../confirmation-dialog/confirmation-dialog.component */
    "./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");

    var EmployeeComponent = /*#__PURE__*/function () {
      function EmployeeComponent(authServ, fb, commServ, toastrServ, dialog, SimpleModalService) {
        _classCallCheck(this, EmployeeComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.dialog = dialog;
        this.SimpleModalService = SimpleModalService;
        this.employeeList = [];
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["name", "servicename", "action"];
        this.isAddModal = false;
        this.isDeleteDialog = false;
        this.popoverTitle = "Popover title";
        this.popoverMessage = "Popover description";
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.isEMployeeModal = false;
        this.options = this.serviceList;
        this.selectedOptions = [];
        this.selected = this.selectedOptions;
        this.showError = false;
        this.errorMessage = "";
        this.assignServiceForm = this.fb.group({
          service_id: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user_id = sessionStorage.getItem("userId");
          this.getSalonData(this.user_id);
          this.getEmployeeService();
        }
      }, {
        key: "getSalonData",
        value: function getSalonData(userId) {
          var _this12 = this;

          var data = {
            user_id: userId
          };
          this.commServ.getSalonData(data).subscribe(function (responce) {
            if (responce.code === 200) {
              _this12.salonData = responce.data;

              _this12.getServiceList();
            } else {
              _this12.toastrServ.error("Invalid salon details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this12.toastrServ.error("Failed to get salon data", error, {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.getEmployeeService();
        }
      }, {
        key: "confirm",
        value: function confirm(data) {
          this.isConfirm = data;
        }
      }, {
        key: "reject",
        value: function reject(data) {
          this.isConfirm = data;
          this.isDeleteDialog = false;
        }
      }, {
        key: "getEmployeeService",
        value: function getEmployeeService() {
          var _this13 = this;

          var dataToPass = {
            user_id: this.user_id,
            pageSize: this.count,
            page: this.page
          };
          console.log("dataToPass", dataToPass);
          this.commServ.getEmployeeServList(dataToPass).subscribe(function (data) {
            if (data["code"] == 200) {
              // console.log("data[data]", data["data"]); //return;
              _this13.employeeList = data["data"].employeeData;
              _this13.employeeCount = data["data"].employeeCount;
              _this13.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this13.employeeList);
              _this13.dataSource.sort = _this13.sort;

              if (_this13.employeeList.length == 0) {
                _this13.noRecordsFound = true;
              }
            } else {
              _this13.noRecordsFound = false;

              _this13.toastrServ.error("Failed To Fetch Employee", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this13.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "openEditEmployeeModal",
        value: function openEditEmployeeModal(element) {
          // console.log("Edit element", element);
          this.isEMployeeModal = true;
          this.editEmployeeData = element;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getServiceList",
        value: function getServiceList() {
          var _this14 = this;

          var postData = {
            user_id: this.user_id,
            salon_id: this.salonData._id
          };
          this.commServ.getSalonServicesList(postData).subscribe(function (data) {
            // console.log("serviceList element --------->", data["data"].serviceList);
            if (data["code"] == 200) {
              var serviceArr = [];
              data["data"].serviceList.forEach(function (element) {
                var serviceData = {
                  id: element._id,
                  name: element.servicename
                };
                serviceArr.push(serviceData);
              });
              _this14.serviceList = serviceArr; // this.dataSource = new MatTableDataSource(this.serviceList);
              // this.dataSource.sort = this.sort;
              //console.log("serviceList", this.serviceList);
            } else {
              _this14.noRecordsFound = false;

              _this14.toastrServ.error("Failed To Fetch Services List", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this14.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "onToggleDropdown",
        value: function onToggleDropdown() {
          this.multiSelect.toggleDropdown();
        }
      }, {
        key: "getSelectedOptions",
        value: function getSelectedOptions(selected) {
          this.selected = selected;
        }
      }, {
        key: "onResetSelection",
        value: function onResetSelection(salon_service_id) {
          this.selectedOptions = salon_service_id;
        }
      }, {
        key: "openAssignServieModal",
        value: function openAssignServieModal(data) {
          this.onResetSelection(data.salon_service_id);
          this.isAddModal = true;
          this.employeeData = data;
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isAddModal = false;
          this.assignServiceForm.reset();
        }
      }, {
        key: "updateEmpService",
        value: function updateEmpService() {
          var _this15 = this;

          var dataToPass = {
            employee_id: this.employeeData._id,
            salonservices_id: this.selected
          }; // console.log("dataToPass", dataToPass); //return;

          this.commServ.assignEmpService(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this15.isAddModal = false;

              _this15.toastrServ.success("Service Assigned", "Success", {
                timeOut: 2000
              });

              _this15.assignServiceForm.reset();

              _this15.dismissModal();

              _this15.getEmployeeService();
            } else {
              _this15.isAddModal = true;

              _this15.toastrServ.error("Failed To Add", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this15.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(dataToPass) {
          var _this16 = this;

          // this.SimpleModalService.addModal(ConfirmationDialogComponent, {
          //   title: 'Warning',
          //   message: 'Are you sure you want to delete?'
          // }).subscribe(isConfirmed => {
          //   console.log(isConfirmed);
          // })
          this.SimpleModalService.addModal(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
          }).subscribe(function (isConfirmed) {
            if (isConfirmed === true) {
              dataToPass.salon_id = _this16.salonData._id; // console.log("dataToPass", dataToPass)

              _this16.commServ.removeEmpService(dataToPass).subscribe(function (data) {
                if (data["code"] === 200) {
                  _this16.isAddModal = false;

                  _this16.toastrServ.success("Employee Removed", "Success", {
                    timeOut: 2000
                  });

                  _this16.assignServiceForm.reset();

                  _this16.dismissModal();

                  _this16.getEmployeeService();
                } else {
                  _this16.isAddModal = true;

                  _this16.toastrServ.error("Failed To Add", "Error", {
                    timeOut: 2000
                  });
                }
              }, function (error) {
                _this16.toastrServ.error("Server Error", error.error, {
                  timeOut: 2000
                });
              });
            }
          });
        }
      }, {
        key: "updateEmpployee",
        value: function updateEmpployee(updateData) {
          var _this17 = this;

          var dataToPass = {
            id: updateData._id,
            name: updateData.name
          };
          console.log("dataToPass", dataToPass);
          this.commServ.updateEployee(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this17.isEMployeeModal = false;

              _this17.toastrServ.success("Employee Updated", "Success", {
                timeOut: 2000
              });

              _this17.assignServiceForm.reset();

              _this17.dismissModal();

              _this17.getEmployeeService();
            } else {
              _this17.isEMployeeModal = true;

              _this17.toastrServ.error("Failed To update", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this17.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "dismissEmpModal",
        value: function dismissEmpModal() {
          this.isEMployeeModal = false;
        }
      }, {
        key: "openEditServiceModal",
        value: function openEditServiceModal(element) {
          // console.log("element", element);
          this.isEMployeeModal = true;
          this.editEmployeeData = element;
        }
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_8__["SimpleModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      "static": false
    })], EmployeeComponent.prototype, "sort", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-employee",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/employee/employee.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee.component.scss */
      "./src/app/salon/dashboard/employee/employee.component.scss"))["default"]]
    })], EmployeeComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/footer/footer.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/salon/dashboard/footer/footer.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer-sec{\n    text-align: left;\n    letter-spacing: 0;\n    color: #BCBCCB;\n    opacity: 1;\n    font-size: 15px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    margin-left: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLFVBQVU7SUFDVixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3Rlci1zZWN7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogI0JDQkNDQjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/footer/footer.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/salon/dashboard/footer/footer.component.ts ***!
    \************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSalonDashboardFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/salon/dashboard/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/google-searc/google-searc.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/salon/dashboard/google-searc/google-searc.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardGoogleSearcGoogleSearcComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input {\n  padding: 5px;\n  border-radius: 25px;\n  outline: none;\n  width: 100%;\n  padding-left: 20px;\n  border: 1px solid white;\n}\napp-googlesearch {\n  width: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL2dvb2dsZS1zZWFyYy9nb29nbGUtc2VhcmMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvZ29vZ2xlLXNlYXJjL2dvb2dsZS1zZWFyYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn1cbmFwcC1nb29nbGVzZWFyY2gge1xuICB3aWR0aDogYXV0bztcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/google-searc/google-searc.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/salon/dashboard/google-searc/google-searc.component.ts ***!
    \************************************************************************/

  /*! exports provided: GoogleSearcComponent */

  /***/
  function srcAppSalonDashboardGoogleSearcGoogleSearcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GoogleSearcComponent", function () {
      return GoogleSearcComponent;
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


    var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");

    var GoogleSearcComponent = /*#__PURE__*/function () {
      function GoogleSearcComponent(mapsAPILoader) {
        _classCallCheck(this, GoogleSearcComponent);

        this.mapsAPILoader = mapsAPILoader;
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GoogleSearcComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.getPlaceAutocomplete();
        }
      }, {
        key: "getPlaceAutocomplete",
        value: function getPlaceAutocomplete() {
          var _this18 = this;

          this.mapsAPILoader.load().then(function (res) {
            console.log("RES", res);
            var autocomplete = new google.maps.places.Autocomplete(_this18.addresstext.nativeElement, {
              types: [_this18.adressType] // 'establishment' / 'address' / 'geocode'

            });
            google.maps.event.addListener(autocomplete, "place_changed", function () {
              var place = autocomplete.getPlace();

              _this18.invokeEvent(place);
            });
          });
        }
      }, {
        key: "invokeEvent",
        value: function invokeEvent(place) {
          this.setAddress.emit(place);
        }
      }]);

      return GoogleSearcComponent;
    }();

    GoogleSearcComponent.ctorParameters = function () {
      return [{
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GoogleSearcComponent.prototype, "adressType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GoogleSearcComponent.prototype, "setAddress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("addresstext", {
      "static": false
    })], GoogleSearcComponent.prototype, "addresstext", void 0);
    GoogleSearcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-google-searc",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-searc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/google-searc/google-searc.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-searc.component.css */
      "./src/app/salon/dashboard/google-searc/google-searc.component.css"))["default"]]
    })], GoogleSearcComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/profile/profile.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/salon/dashboard/profile/profile.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.header-sec .navbar {\n  background: transparent linear-gradient(267deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  opacity: 1;\n}\n\n.header-sec .navbar-brand {\n  margin-left: 12px;\n}\n\n.header-sec .navbar-nav {\n  margin-right: 12px;\n}\n\n.header-sec .navbar-collapse {\n  justify-content: flex-end;\n}\n\n.header-sec ul li:nth-child(2) {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.header-sec .navbar ul li.active {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li.notification-img {\n  border-right: 1px solid #fff;\n  margin-left: 60px;\n  height: 25px;\n  margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img {\n  margin-right: 15px;\n  margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after {\n  display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle {\n  margin-right: 50px;\n  margin-left: 15px;\n  letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #333;\n  opacity: 1;\n  font-size: 12px;\n  line-height: 1;\n  color: #454f60;\n}\n\n.header-sec .navbar ul li a .salon-icon {\n  height: 45px;\n  width: 45px;\n  border: 1px solid #ff7d7d;\n  border-radius: 28px;\n  opacity: 1;\n  line-height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -4px;\n  right: 0;\n  background: #fff;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer .check-spa-image {\n  border: 2px solid #813882;\n  border-radius: 90px;\n  opacity: 1;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer {\n  border-bottom: 1px solid #e1e1e1;\n  padding: 25px 40px;\n  padding-top: 40px;\n}\n\n.check-spa-outer .check-spa h4 {\n  /* \n  text-align: left; */\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  text-align: center;\n  font-size: 18px;\n  padding-top: 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .salon-info {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .about-salon p {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.check-spa-outer .check-spa .about-salon h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\n.check-spa-outer .check-spa {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  position: relative;\n  /* padding: 30px; */\n}\n\n.check-spa-outer {\n  background: #f0f0f7;\n}\n\n.edit-info {\n  position: absolute;\n  right: 25px;\n  top: 15px;\n}\n\n.edit-info img {\n  cursor: pointer;\n}\n\n.employee-tabs {\n  background: 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: center;\n  min-height: 75px;\n  align-items: center;\n}\n\n.employee-tabs .nav-tabs .nav-link {\n  border: none;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n\n.employee-tabs .nav-tabs {\n  border-bottom: none;\n}\n\n.create-availabillity .check-timing {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-timing-inner {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-day h3 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-left: 25px;\n}\n\n.create-availabillity ul {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.create-availabillity ul li h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.create-availabillity ul li h4.days {\n  padding-left: 48px;\n}\n\n.create-availabillity-inner {\n  min-height: 85px;\n  border-bottom: 1px solid #e1e1e1;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n\n.create-availabillity .employee-sec h2 {\n  font-size: 16px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n}\n\n.add-employee-inner {\n  height: 25px;\n  width: 25px;\n  line-height: 25px;\n  border: 1px solid #4ad991;\n  border-radius: 50%;\n  line-height: 25px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-employee-inner i {\n  color: #4ad991;\n}\n\n.add-employee {\n  display: flex;\n}\n\n.add-employee h2 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n\n.check-spa-outer .tab-content {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 0;\n}\n\n.create-availabillity .btn-sec .btn-save {\n  background: transparent linear-gradient(101deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n  min-width: 152px;\n}\n\n.create-availabillity .btn-sec .btn-cancel {\n  background: #454f60 0% 0% no-repeat padding-box;\n  margin-right: 5px;\n}\n\n.create-availabillity .btn-sec {\n  text-align: right;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-right: 25px;\n}\n\n.create-availabillity .btn-sec .btn-save {\n  margin: 0;\n  margin-right: 10px;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #9c3ee8;\n}\n\n.check-timing-sec {\n  max-width: 1320px;\n}\n\n.employee-tabs ul li:nth-child(2) {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.create-availabillity .table thead th {\n  border-bottom: none;\n  border-top: none;\n  font-size: 12px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td {\n  border-top: none;\n  border-bottom: 1px solid #f1f1f3;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-bottom: 30px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td .delete-info {\n  margin-left: 35px;\n}\n\n.footer-sec {\n  text-align: left;\n  letter-spacing: 0;\n  color: #bcbccb;\n  opacity: 1;\n  font-size: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 150px;\n}\n\n.header-sec .navbar-expand-lg .navbar-nav .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n  top: 40px;\n}\n\n@media (max-width: 1200px) {\n  .create-availabillity .table tbody tr td {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .create-availabillity .table thead tr th {\n    padding-left: 20px;\n    padding-right: 45px;\n  }\n\n  .create-availabillity .table tbody tr td .delete-info {\n    margin-left: 25px;\n  }\n\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: break-word;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 15px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 15px;\n  }\n}\n\n@media (max-width: 991px) {\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: unset;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 40px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 40px;\n  }\n}\n\n@media (max-width: 767px) {\n  .employee-tabs ul li:nth-child(2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .create-availabillity .table tbody tr td {\n    padding-top: 30px;\n    padding-left: 15px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n  }\n\n  .create-availabillity .btn-sec {\n    margin-right: 10px;\n  }\n\n  .create-availabillity .btn-sec .btn-save {\n    height: 40px;\n    min-width: 120px;\n  }\n\n  .create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n    padding: 5px;\n  }\n\n  .create-availabillity-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n.tabsArea {\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtBQ0NGOztBREVBOztFQUVFLFlBQUE7QUNDRjs7QURFQTtFQUNFLHFHQUFBO0VBRUEsaUNBQUE7RUFDQSxVQUFBO0FDQUY7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDR0Y7O0FEREE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNLRjs7QURIQTtFQUNFLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ01GOztBREpBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ09GOztBREpBO0VBQ0UsYUFBQTtBQ09GOztBRExBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDUUY7O0FETEE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNRRjs7QURMQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFB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QTtFQUNBLGtCQUFBO0FDNEJGOztBRDFCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDNkJGOztBRDNCQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQzhCRjs7RUQ1QkE7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VDK0JGOztFRDdCQTtJQUNFLGlCQUFBO0VDZ0NGOztFRDlCQTtJQUNFLHNCQUFBO0VDaUNGOztFRC9CQTtJQUNFLGtCQUFBO0VDa0NGOztFRGhDQTtJQUNFLGtCQUFBO0VDbUNGO0FBQ0Y7O0FEaENBO0VBQ0U7SUFDRSxpQkFBQTtFQ2tDRjs7RURoQ0E7SUFDRSxrQkFBQTtFQ21DRjs7RURqQ0E7SUFDRSxrQkFBQTtFQ29DRjtBQUNGOztBRGxDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFQ29DRjs7RURsQ0E7SUFDRSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtFQ3FDRjs7RURuQ0E7SUFDRSxrQkFBQTtFQ3NDRjs7RURwQ0E7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUN1Q0Y7O0VEckNBOztJQUVFLFlBQUE7RUN3Q0Y7O0VEdENBO0lBQ0Usa0JBQUE7SUFFQSxtQkFBQTtFQ3dDRjtBQUNGOztBRHJDQTtFQUNFLFVBQUE7QUN1Q0YiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIG9wYWNpdHk6IDE7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uaGVhZGVyLXNlYyB1bCBsaTpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5hY3RpdmUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzQ1NGY2MDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIC5zYWxvbi1pY29uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2Q3ZDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgb3BhY2l0eTogMTtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciAuY2hlY2stc3BhLWltYWdlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzgxMzg4MjtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIGg0IHtcbiAgLyogXG4gIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xufVxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjc7XG59XG4uZWRpdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiAxNXB4O1xufVxuLmVkaXQtaW5mbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNzVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay10aW1pbmctaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLWRheSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQuZGF5cyB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5lbXBsb3llZS1zZWMgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cbi5hZGQtZW1wbG95ZWUtaW5uZXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhZDk5MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWVtcGxveWVlLWlubmVyIGkge1xuICBjb2xvcjogIzRhZDk5MTtcbn1cbi5hZGQtZW1wbG95ZWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWVtcGxveWVlIGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLnRhYi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLy8gLmNyZWF0ZS1hdmFpbGFiaWxsaXR5ICBpbnB1dHtcbi8vICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNERkRGREY7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgIG9wYWNpdHk6IDE7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgaGVpZ2h0OiAzNXB4O1xuLy8gICBsZXR0ZXItc3BhY2luZzogMDtcbi8vICAgY29sb3I6ICM5NTk1QTE7XG4vLyAgIG9wYWNpdHk6IDAuOTtcbi8vICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4vLyB9XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEwMWRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJVxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICM0NTRmNjAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICM5YzNlZTg7XG59XG4uY2hlY2stdGltaW5nLXNlYyB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xufVxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuLmZvb3Rlci1zZWMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNiY2JjY2I7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdHIgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQgLmRlbGV0ZS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiB1bnNldDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICB9XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4gIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLnRhYnNBcmVhIHtcbiAgd2lkdGg6IDk1JTtcbn1cbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWNvbGxhcHNlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmhlYWRlci1zZWMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5hY3RpdmUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24taXRlbSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjNDU0ZjYwO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEgLnNhbG9uLWljb24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY3ZDdkO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBvcGFjaXR5OiAxO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIgLmNoZWNrLXNwYS1pbWFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MTM4ODI7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgaDQge1xuICAvKiBcbiAgdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBoMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMzBweDsgKi9cbn1cblxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjc7XG59XG5cbi5lZGl0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5lZGl0LWluZm8gaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNzVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyAuY2hlY2stdGltaW5nLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLWRheSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIGxpIGg0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIGxpIGg0LmRheXMge1xuICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eS1pbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDg1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5lbXBsb3llZS1zZWMgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFkZC1lbXBsb3llZS1pbm5lciB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGFkOTkxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1lbXBsb3llZS1pbm5lciBpIHtcbiAgY29sb3I6ICM0YWQ5OTE7XG59XG5cbi5hZGQtZW1wbG95ZWUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWRkLWVtcGxveWVlIGgyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAudGFiLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTAxZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogIzQ1NGY2MCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzljM2VlODtcbn1cblxuLmNoZWNrLXRpbWluZy1zZWMge1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbn1cblxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWYxZjM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cblxuLmZvb3Rlci1zZWMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNiY2JjY2I7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWV4cGFuZC1sZyAubmF2YmFyLW5hdiAuZHJvcGRvd24tbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87XG4gIHRvcDogNDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdHIgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiB1bnNldDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4udGFic0FyZWEge1xuICB3aWR0aDogOTUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/profile/profile.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/salon/dashboard/profile/profile.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppSalonDashboardProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(authServ, fb, commServ, toastrServ) {
        var _this19 = this;

        _classCallCheck(this, ProfileComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.showNow = false;
        this.numberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        this.isSubmitted = false;
        this.checkIsApproved = true;
        this.url = "";
        this.showPendingApproval = false;

        if (navigator) {
          navigator.geolocation.getCurrentPosition(function (pos) {
            _this19.lng = +pos.coords.longitude;
            _this19.lat = +pos.coords.latitude;
          });
        }
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.submitSalonDetails = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberPattern)]],
            salonaddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: null,
            opentime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            closetime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.checkIsApprovedProfile();
          this.user_id = sessionStorage.getItem("userId");
          this.checkInitialApprovalStatus = JSON.parse(sessionStorage.getItem("isSubmitted"));

          if (this.checkInitialApprovalStatus == true) {
            this.showPendingApproval = true;
          } else {
            this.showPendingApproval = false;
          }
        }
      }, {
        key: "onOpenTimeSelect",
        value: function onOpenTimeSelect(event) {}
      }, {
        key: "onCloseTimeSelect",
        value: function onCloseTimeSelect(event) {}
      }, {
        key: "uploadImage",
        value: function uploadImage(event) {
          var file = event.target.files[0];
          this.submitSalonDetails.patchValue({
            image: file
          });
          this.submitSalonDetails.get("image").updateValueAndValidity();
        }
      }, {
        key: "checkIsApprovedProfile",
        value: function checkIsApprovedProfile() {
          this.checkIsApproved = JSON.parse(sessionStorage.getItem("isApproved"));
        }
      }, {
        key: "submitSalon",
        value: function submitSalon(data) {
          var _this20 = this;

          var dataToPass = {
            name: data.name,
            salonaddress: data.salonaddress,
            contact: data.contact,
            lat: this.lat,
            "long": this.lng,
            image: data.image,
            user_id: this.user_id,
            opentime: data.opentime,
            closetime: data.closetime
          };
          var postData = new FormData();
          postData.append("name", dataToPass.name);
          postData.append("image", dataToPass.image);
          postData.append("lat", dataToPass.lat);
          postData.append("long", dataToPass["long"]);
          postData.append("salonaddress", dataToPass.salonaddress);
          postData.append("opentime", dataToPass.opentime);
          postData.append("closetime", dataToPass.closetime);
          postData.append("contact", dataToPass.contact);
          postData.append("user_id", dataToPass.user_id);
          var options = {
            content: postData
          };
          this.commServ.saveSalonDetails(postData).subscribe(function (data) {
            if (data["code"] === 200) {
              _this20.showPendingApproval = true;
              _this20.isSubmitted = true;
              sessionStorage.setItem("isSubmitted", JSON.stringify(_this20.isSubmitted));

              _this20.toastrServ.success("Salon Details Submitted Successfully", "Waiting For Admin Approval", {
                timeOut: 2000
              });
            } else {
              _this20.showPendingApproval = false;

              _this20.toastrServ.error("Failed To Submit Salon Details", "", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this20.toastrServ.error("Server Error", error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "contact",
        get: function get() {
          return this.submitSalonDetails.get("contact");
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/salon/dashboard/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/promcode/promcode.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/salon/dashboard/promcode/promcode.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardPromcodePromcodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".promcodeWrapper .header {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 5px;\n}\n.promcodeWrapper .header .addPromoCode {\n  margin: 0;\n}\n.promcodeWrapper .mainSection .promocodesArea {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  border: 1px solid lightgray;\n  padding: 10px;\n  border-radius: 20px;\n  margin-bottom: 5px;\n}\n.promcodeWrapper .modelOverlay {\n  background: white;\n  padding: 1em;\n  border-radius: 20px;\n  margin-top: 10px;\n}\n.promcodeWrapper .modelOverlay .headerText {\n  border-bottom: 1px solid lightgray;\n  margin-bottom: 5px;\n}\n.promcodeWrapper .modelOverlay .main-content {\n  padding: 15px;\n}\n.promcodeWrapper .modelOverlay .main-content form .fields {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n}\n.promcodeWrapper .modelOverlay .main-content form .fields .labels {\n  width: 20%;\n  margin: 0;\n  min-width: 150px;\n}\n.promcodeWrapper .modelOverlay .main-content form .fields .inp {\n  width: 75%;\n}\n.promcodeWrapper .modelOverlay .main-content form .add {\n  margin: 0;\n  width: 100px;\n}\n.delete {\n  cursor: pointer;\n}\n.noRecords {\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  text-align: center;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9wcm9tY29kZS9wcm9tY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL3Byb21jb2RlL3Byb21jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRENJO0VBQ0UsU0FBQTtBQ0NOO0FER0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUVBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNGTjtBREtFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0hKO0FESUk7RUFDRSxrQ0FBQTtFQUNBLGtCQUFBO0FDRk47QURJSTtFQUNFLGFBQUE7QUNGTjtBRElRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRlY7QURHVTtFQUNFLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNEWjtBREdVO0VBQ0UsVUFBQTtBQ0RaO0FESVE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQ0ZWO0FEUUE7RUFDRSxlQUFBO0FDTEY7QURPQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvcHJvbWNvZGUvcHJvbWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvbWNvZGVXcmFwcGVyIHtcbiAgLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAuYWRkUHJvbW9Db2RlIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cbiAgLm1haW5TZWN0aW9uIHtcbiAgICAucHJvbW9jb2Rlc0FyZWEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblxuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICB9XG4gIC5tb2RlbE92ZXJsYXkge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLmhlYWRlclRleHQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLm1haW4tY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgZm9ybSB7XG4gICAgICAgIC5maWVsZHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIC5sYWJlbHMge1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnAge1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmFkZCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ub1JlY29yZHMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbn1cbiIsIi5wcm9tY29kZVdyYXBwZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5wcm9tY29kZVdyYXBwZXIgLmhlYWRlciAuYWRkUHJvbW9Db2RlIHtcbiAgbWFyZ2luOiAwO1xufVxuLnByb21jb2RlV3JhcHBlciAubWFpblNlY3Rpb24gLnByb21vY29kZXNBcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb21jb2RlV3JhcHBlciAubW9kZWxPdmVybGF5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5wcm9tY29kZVdyYXBwZXIgLm1vZGVsT3ZlcmxheSAuaGVhZGVyVGV4dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5wcm9tY29kZVdyYXBwZXIgLm1vZGVsT3ZlcmxheSAubWFpbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5wcm9tY29kZVdyYXBwZXIgLm1vZGVsT3ZlcmxheSAubWFpbi1jb250ZW50IGZvcm0gLmZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb21jb2RlV3JhcHBlciAubW9kZWxPdmVybGF5IC5tYWluLWNvbnRlbnQgZm9ybSAuZmllbGRzIC5sYWJlbHMge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDA7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG4ucHJvbWNvZGVXcmFwcGVyIC5tb2RlbE92ZXJsYXkgLm1haW4tY29udGVudCBmb3JtIC5maWVsZHMgLmlucCB7XG4gIHdpZHRoOiA3NSU7XG59XG4ucHJvbWNvZGVXcmFwcGVyIC5tb2RlbE92ZXJsYXkgLm1haW4tY29udGVudCBmb3JtIC5hZGQge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vUmVjb3JkcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/promcode/promcode.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/salon/dashboard/promcode/promcode.component.ts ***!
    \****************************************************************/

  /*! exports provided: PromcodeComponent */

  /***/
  function srcAppSalonDashboardPromcodePromcodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PromcodeComponent", function () {
      return PromcodeComponent;
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


    var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var PromcodeComponent = /*#__PURE__*/function () {
      function PromcodeComponent(commonServ, toastServ, fb) {
        _classCallCheck(this, PromcodeComponent);

        this.commonServ = commonServ;
        this.toastServ = toastServ;
        this.fb = fb;
      }

      _createClass(PromcodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.commonServ.getSalon_id().subscribe(function (data) {
            _this21.salon_id = data;
          });
          this.getPromocodes(this.salon_id);
          this.addPromocodeForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            termsAndCondition: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            value: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "showAddModal",
        value: function showAddModal() {
          this.showAddPromocode = true;
        }
      }, {
        key: "addPromocodes",
        value: function addPromocodes(data) {
          var _this22 = this;

          var dataToPass = {
            name: data.name,
            value: data.value,
            description: data.description,
            termsAndCondition: data.termsAndCondition,
            salon_id: this.salon_id
          };
          this.commonServ.addPromocodes(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this22.showAddPromocode = false;

              _this22.addPromocodeForm.reset();

              _this22.getPromocodes(_this22.salon_id);

              _this22.toastServ.success("Added Promocode", "Success", {
                timeOut: 1000
              });
            } else if (data["code"] === 400) {
              _this22.toastServ.error("Failed to Add", data["message"], {
                timeOut: 1000
              });
            } else {}
          });
        }
      }, {
        key: "getPromocodes",
        value: function getPromocodes(data) {
          var _this23 = this;

          var dataToPass = {
            salon_id: data
          };
          this.commonServ.getPromocode(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this23.promocodesListing = data["data"];

              if (_this23.promocodesListing.length === 0) {
                _this23.noRecordsFound = true;
              } else {
                _this23.noRecordsFound = false;
              }
            } else if (data["code"] === 400) {
              _this23.toastServ.error("Failed to fetch", data["message"], {
                timeOut: 1000
              });
            } else {}
          }, function (error) {
            _this23.toastServ.error("Server - Error", "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "deletePromocode",
        value: function deletePromocode(data) {
          var _this24 = this;

          var dataToPass = {
            promocode_id: data["_id"]
          };
          this.commonServ.deletePromocodes(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this24.toastServ.success("Promocode Deleted", "Success", {
                timeOut: 1000
              });

              _this24.getPromocodes(_this24.salon_id);
            } else if (data["code"] === 400) {
              _this24.toastServ.error("Failed to Delete", data["message"], {
                timeOut: 1000
              });
            } else {}
          }, function (error) {
            _this24.toastServ.error("Server - Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }]);

      return PromcodeComponent;
    }();

    PromcodeComponent.ctorParameters = function () {
      return [{
        type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    PromcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-promcode",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./promcode.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/promcode/promcode.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./promcode.component.scss */
      "./src/app/salon/dashboard/promcode/promcode.component.scss"))["default"]]
    })], PromcodeComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/salon-header/salon-header.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/salon/dashboard/salon-header/salon-header.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardSalonHeaderSalonHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml, body {\n  height: 100%;\n}\n\n.header-sec .navbar {\n  background: transparent linear-gradient(267deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000A;\n  opacity: 1;\n  position: relative !important;\n  padding-left: 8px;\n  padding-right: 8px;\n  min-height: 60px;\n}\n\n.header-sec .navbar-brand {\n  margin-left: 12px;\n}\n\n.header-sec .navbar-nav {\n  margin-right: 12px;\n}\n\n.header-sec .navbar-collapse {\n  justify-content: flex-end;\n  height: 0;\n}\n\n.header-sec ul li {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.header-sec .navbar ul li.active {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #FFFFFF;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #FFFFFF;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li.notification-img {\n  border-right: 1px solid #fff;\n  margin-left: 60px;\n  height: 25px;\n  margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img {\n  margin-right: 15px;\n  margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after {\n  display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle {\n  margin-right: 50px;\n  margin-left: 15px;\n  letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #333;\n  opacity: 1;\n  font-size: 12px;\n  line-height: 1;\n  color: #454F60;\n}\n\n.header-sec .navbar ul li a .salon-icon {\n  height: 45px;\n  width: 45px;\n  border: 1px solid #FF7D7D;\n  border-radius: 28px;\n  opacity: 1;\n  line-height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -4px;\n  right: 0;\n  background: #fff;\n}\n\n@media (max-width: 1200px) {\n  .create-availabillity .table tbody tr td {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .create-availabillity .table thead tr th {\n    padding-left: 20px;\n    padding-right: 45px;\n  }\n\n  .create-availabillity .table tbody tr td .delete-info {\n    margin-left: 25px;\n  }\n\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: break-word;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 15px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 15px;\n  }\n}\n\n@media (max-width: 991px) {\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: unset;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 40px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 40px;\n  }\n}\n\n@media (max-width: 767px) {\n  .employee-tabs ul li:nth-child(2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .create-availabillity .table tbody tr td {\n    padding-top: 30px;\n    padding-left: 15px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n  }\n\n  .create-availabillity .btn-sec {\n    margin-right: 10px;\n  }\n\n  .create-availabillity .btn-sec .btn-save {\n    height: 40px;\n    min-width: 120px;\n  }\n\n  .create-availabillity .nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link {\n    padding: 5px;\n  }\n\n  .create-availabillity-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .expanded {\n    display: block !important;\n  }\n\n  .header-sec .navbar-nav {\n    background: transparent linear-gradient(267deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n    color: black;\n  }\n}\n\n.mat-tab-group {\n  width: 95% !important;\n}\n\n/*          \n.logoutItem{\n    position: absolute;\n    height: 20px;\n    cursor: pointer;\n    right: 2px;\n    text-align: center;\n    align-items: center;\n    padding: 15px;\n    box-shadow: 1px 2px 2px 1px lightgrey;\n    background: white;\n    border-radius: 5px;\n    display: flex;\n\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zYWxvbi1oZWFkZXIvc2Fsb24taGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvc2Fsb24taGVhZGVyL3NhbG9uLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlDQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0FDREo7O0FESUE7RUFDSSxxR0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQUE7RUFDSSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNHSjs7QUREQTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURDQTtFQUNJLGFBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0dKOztBREFBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDR0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtBQ0VKOztBRENBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VDRU47O0VERUU7SUFDSSxrQkFBQTtJQUNBLG1CQUFBO0VDQ047O0VEQ0U7SUFDSSxpQkFBQTtFQ0VOOztFREFFO0lBQ0ksc0JBQUE7RUNHTjs7RURERTtJQUNJLGtCQUFBO0VDSU47O0VERkU7SUFDSSxrQkFBQTtFQ0tOO0FBQ0Y7O0FEREE7RUFDSTtJQUNJLGlCQUFBO0VDR047O0VEREU7SUFDSSxrQkFBQTtFQ0lOOztFREZFO0lBQ0ksa0JBQUE7RUNLTjtBQUNGOztBREZBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0VDSU47O0VERkU7SUFDSSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtFQ0tOOztFREZFO0lBQ0ksa0JBQUE7RUNLTjs7RURIRTtJQUNJLFlBQUE7SUFDQSxnQkFBQTtFQ01OOztFREpFO0lBQ0ksWUFBQTtFQ09OOztFRExFO0lBQ0ksa0JBQUE7SUFFQSxtQkFBQTtFQ09OOztFRExFO0lBQ0EseUJBQUE7RUNRRjs7RURQRTtJQUNBLHFHQUFBO0lBQ0ksWUFBQTtFQ1VOO0FBQ0Y7O0FEUEE7RUFDSSxxQkFBQTtBQ1NKOztBREZBOzs7Ozs7Ozs7Ozs7OztHQUFBIiwiZmlsZSI6InNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL3NhbG9uLWhlYWRlci9zYWxvbi1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYm9keXtcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhcntcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMEE7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgbWluLWhlaWdodDogNjBweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXItYnJhbmR7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdntcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjICAubmF2YmFyLWNvbGxhcHNle1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgaGVpZ2h0OiAwO1xufVxuXG4uaGVhZGVyLXNlYyB1bCBsaXtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLmFjdGl2ZXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcblxufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1ne1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWd7XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24tdG9nZ2xlOjphZnRlcntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xle1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24taXRlbXtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbn1cblxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEgLnNhbG9uLWljb257XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjdEN0Q7XG4gICAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtNHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDEyMDBweCl7XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRoZWFkIHRyIHRoe1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gICAgfVxuICAgIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQgLmRlbGV0ZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgfVxuICAgIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNXtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgICB9XG4gICAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXJ7XG4gICAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgICB9XG4gICAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZve1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gICAgfVxufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xuICAgIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNXtcbiAgICAgICAgd29yZC1icmVhazogdW5zZXQ7XG4gICAgfVxuICAgIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVye1xuICAgICAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gICAgfVxuICAgIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mb3tcbiAgICAgICAgcGFkZGluZzogMjVweCA0MHB4O1xuICAgIH1cblxufVxuQG1lZGlhKG1heC13aWR0aDo3NjdweCl7XG4gICAgLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZHtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgIFxuICAgIH1cbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWN7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG4gICAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZXtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIH1cbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cbiAgICAuY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXJ7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgfSAgIFxuICAgIC5leHBhbmRlZHtcbiAgICBkaXNwbGF5OmJsb2NrICFpbXBvcnRhbnR9XG4gICAgLmhlYWRlci1zZWMgLm5hdmJhci1uYXZ7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2N2RlZywgIzc4M0E4NyAwJSwgI0JDMkU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGNvbG9yOmJsYWNrO1xuICAgIH1cblxufVxuLm1hdC10YWItZ3JvdXAge1xuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDtcbn1cblxuICAgIFxuICAgIFxuXG5cbi8qICAgICAgICAgIFxuLmxvZ291dEl0ZW17XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcmlnaHQ6IDJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAycHggMnB4IDFweCBsaWdodGdyZXk7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbn0gKi8iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBBO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgbWluLWhlaWdodDogNjBweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGhlaWdodDogMDtcbn1cblxuLmhlYWRlci1zZWMgdWwgbGkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLmFjdGl2ZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLm5vdGlmaWNhdGlvbi1pbWcgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM0NTRGNjA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSAuc2Fsb24taWNvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRjdEN0Q7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0ciB0aCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICAgIHdvcmQtYnJlYWs6IHVuc2V0O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluaywgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuXG4gIC5leHBhbmRlZCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5oZWFkZXItc2VjIC5uYXZiYXItbmF2IHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbi5tYXQtdGFiLWdyb3VwIHtcbiAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xufVxuXG4vKiAgICAgICAgICBcbi5sb2dvdXRJdGVte1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHJpZ2h0OiAycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAxcHggbGlnaHRncmV5O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/salon-header/salon-header.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/salon/dashboard/salon-header/salon-header.component.ts ***!
    \************************************************************************/

  /*! exports provided: SalonHeaderComponent */

  /***/
  function srcAppSalonDashboardSalonHeaderSalonHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalonHeaderComponent", function () {
      return SalonHeaderComponent;
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var _dashboard_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../dashboard/common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var SalonHeaderComponent = /*#__PURE__*/function () {
      function SalonHeaderComponent(toastServ, authServ, comService) {
        _classCallCheck(this, SalonHeaderComponent);

        this.toastServ = toastServ;
        this.authServ = authServ;
        this.comService = comService;
      }

      _createClass(SalonHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userId = sessionStorage.getItem("userId");
          this.getSalonData(this.userId);
        }
      }, {
        key: "showLogoutButton",
        value: function showLogoutButton() {
          this.showLogout = true;
        }
      }, {
        key: "toggleHeader",
        value: function toggleHeader() {
          document.getElementById("navbarSupportedContent").classList.toggle("expanded");
        }
      }, {
        key: "getSalonData",
        value: function getSalonData(userId) {
          var _this25 = this;

          var data = {
            user_id: userId
          };
          this.comService.getSalonData(data).subscribe(function (responce) {
            if (responce.code === 200) {
              _this25.salonData = responce.data;
            } else {
              _this25.toastServ.error("Invalid salon details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this25.toastServ.error("Failed to get salon data", error, {
              timeOut: 3000
            });
          });
        }
        /**
         * Function is use to Pay to logout Salon
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "logout",
        value: function logout() {
          this.authServ.logout();
          sessionStorage.clear();
        }
      }]);

      return SalonHeaderComponent;
    }();

    SalonHeaderComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _dashboard_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    SalonHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-salon-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salon-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/salon-header/salon-header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salon-header.component.scss */
      "./src/app/salon/dashboard/salon-header/salon-header.component.scss"))["default"]]
    })], SalonHeaderComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/salondetails/salondetails.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/salon/dashboard/salondetails/salondetails.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardSalondetailsSalondetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profileOverlay {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 10;\n  background-color: #333;\n  opacity: 0.9;\n  height: 100%;\n  display: flex;\n  width: 100%;\n  z-index: 999;\n  align-items: center;\n  justify-content: center;\n}\n.profileOverlay #profileArea {\n  padding: 10px;\n  background-color: white;\n  opacity: 1;\n  width: 35%;\n  z-index: 11;\n  border-radius: 10px;\n}\n.profileOverlay #profileArea .salonDetailSave .field {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.profileOverlay #profileArea .salonDetailSave .field .label {\n  width: 40%;\n  margin: 0;\n}\n.profileOverlay #profileArea .salonDetailSave .fields {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  width: 50%;\n}\n.profileOverlay #profileArea .salonDetailSave .image {\n  display: none;\n}\n.profileOverlay #profileArea .select-css {\n  width: 50% !important;\n}\n.profileOverlay #profileArea .pendingApprovalArea {\n  position: relative;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n.profileOverlay #profileArea .pendingApprovalArea .pendingText {\n  text-align: center;\n  border-color: transparent;\n  margin: 0;\n}\n.profileOverlay #profileArea .pendingApprovalArea .pendingGIF {\n  height: 85px;\n  width: 85px;\n}\n.profileOverlay #profileArea h2 {\n  font-size: 25px;\n}\n.profileOverlay #profileArea .btn-select-img {\n  margin: 0;\n}\n.erroralert {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n  position: relative;\n  padding: 5px 2px;\n  text-align: center;\n  margin-bottom: 10px;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.phoneArea {\n  width: 60%;\n}\n.editBtn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  z-index: 1000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zYWxvbmRldGFpbHMvc2Fsb25kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvc2Fsb25kZXRhaWxzL3NhbG9uZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURBUTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FDRVY7QURDTTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDUjtBRENNO0VBQ0UsYUFBQTtBQ0NSO0FER0k7RUFDRSxxQkFBQTtBQ0ROO0FESUk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDRk47QURHTTtFQUNFLGtCQUFBO0VBSUEseUJBQUE7RUFDQSxTQUFBO0FDSlI7QURNTTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDSlI7QURPSTtFQUNFLGVBQUE7QUNMTjtBRE9JO0VBQ0UsU0FBQTtBQ0xOO0FEU0E7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQ05GO0FEUUE7RUFDRSxVQUFBO0FDTEY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNKRiIsImZpbGUiOiJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zYWxvbmRldGFpbHMvc2Fsb25kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAwLjk7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgI3Byb2ZpbGVBcmVhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDM1JTtcbiAgICB6LWluZGV4OiAxMTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5zYWxvbkRldGFpbFNhdmUge1xuICAgICAgLmZpZWxkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAubGFiZWwge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZmllbGRzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICB9XG4gICAgICAuaW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWxlY3QtY3NzIHtcbiAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAucGVuZGluZ0FwcHJvdmFsQXJlYSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC5wZW5kaW5nVGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLy8gY29sb3I6IHdoaXRlO1xuICAgICAgICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSlcbiAgICAgICAgLy8gICAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5wZW5kaW5nR0lGIHtcbiAgICAgICAgaGVpZ2h0OiA4NXB4O1xuICAgICAgICB3aWR0aDogODVweDtcbiAgICAgIH1cbiAgICB9XG4gICAgaDIge1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICAuYnRuLXNlbGVjdC1pbWcge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuLmVycm9yYWxlcnQge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG4ucGhvbmVBcmVhIHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5lZGl0QnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4iLCIucHJvZmlsZU92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDAuOTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogOTk5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcm9maWxlT3ZlcmxheSAjcHJvZmlsZUFyZWEge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDM1JTtcbiAgei1pbmRleDogMTE7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5zYWxvbkRldGFpbFNhdmUgLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnByb2ZpbGVPdmVybGF5ICNwcm9maWxlQXJlYSAuc2Fsb25EZXRhaWxTYXZlIC5maWVsZCAubGFiZWwge1xuICB3aWR0aDogNDAlO1xuICBtYXJnaW46IDA7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5zYWxvbkRldGFpbFNhdmUgLmZpZWxkcyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB3aWR0aDogNTAlO1xufVxuLnByb2ZpbGVPdmVybGF5ICNwcm9maWxlQXJlYSAuc2Fsb25EZXRhaWxTYXZlIC5pbWFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5zZWxlY3QtY3NzIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuLnByb2ZpbGVPdmVybGF5ICNwcm9maWxlQXJlYSAucGVuZGluZ0FwcHJvdmFsQXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wcm9maWxlT3ZlcmxheSAjcHJvZmlsZUFyZWEgLnBlbmRpbmdBcHByb3ZhbEFyZWEgLnBlbmRpbmdUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDA7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5wZW5kaW5nQXBwcm92YWxBcmVhIC5wZW5kaW5nR0lGIHtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogODVweDtcbn1cbi5wcm9maWxlT3ZlcmxheSAjcHJvZmlsZUFyZWEgaDIge1xuICBmb250LXNpemU6IDI1cHg7XG59XG4ucHJvZmlsZU92ZXJsYXkgI3Byb2ZpbGVBcmVhIC5idG4tc2VsZWN0LWltZyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVycm9yYWxlcnQge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbi5waG9uZUFyZWEge1xuICB3aWR0aDogNjAlO1xufVxuXG4uZWRpdEJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiAxMDAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/salondetails/salondetails.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/salon/dashboard/salondetails/salondetails.component.ts ***!
    \************************************************************************/

  /*! exports provided: SalondetailsComponent */

  /***/
  function srcAppSalonDashboardSalondetailsSalondetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalondetailsComponent", function () {
      return SalondetailsComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_country__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../admin/country */
    "./src/app/admin/country.ts");

    var SalondetailsComponent = /*#__PURE__*/function () {
      function SalondetailsComponent(authServ, fb, commServ, toastrServ, router) {
        var _this26 = this;

        _classCallCheck(this, SalondetailsComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.router = router;
        this.countriesData = _admin_country__WEBPACK_IMPORTED_MODULE_7__["countries"];
        this.showNow = false;
        this.numberPattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        this.checkIsApproved = false;
        this.url = "";
        this.editSalonDetails = false;
        this.showPendingApproval = false;

        if (navigator) {
          navigator.geolocation.getCurrentPosition(function (pos) {
            _this26.lng = +pos.coords.longitude;
            _this26.lat = +pos.coords.latitude;
          });
        }

        navigator.geolocation.getCurrentPosition(function (pos) {});
      }

      _createClass(SalondetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          navigator.geolocation.getCurrentPosition(function (pos) {});
          this.salonEmail = sessionStorage.getItem("email");
          this.user_id = sessionStorage.getItem("userId");
          this.userid = this.user_id;
          this.isApprovedStatus = JSON.parse(sessionStorage.getItem("isApproved"));
          this.chechIsApprovedStatus(this.isApprovedStatus);
          this.submitSalonDetails = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberPattern)]],
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            salonaddress: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            image: null,
            opentime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            closetime: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timezonestring: [""],
            lat: [""],
            "long": [""]
          });
          this.checkIsApprovedProfile();
          this.user_id = sessionStorage.getItem("userId");
          this.checkInitialApprovalStatus = JSON.parse(sessionStorage.getItem("isSubmitted"));

          if (this.checkInitialApprovalStatus == true) {
            this.showPendingApproval = true;
          } else {
            this.showPendingApproval = false;
          }
        }
      }, {
        key: "getCurrentLocation",
        value: function getCurrentLocation() {
          var _this27 = this;

          navigator.geolocation.getCurrentPosition(function (pos) {
            _this27.lng = +pos.coords.longitude;
            _this27.lat = +pos.coords.latitude;

            if (_this27.lng && _this27.lat) {
              _this27.toastrServ.success("Got your location", "", {
                timeOut: 1000
              });
            }
          });
        }
      }, {
        key: "chechIsApprovedStatus",
        value: function chechIsApprovedStatus(data) {
          if (data === true) {
            this.router.navigate(["/salon/home/profile"]);
          } else {}
        }
      }, {
        key: "onOpenTimeSelect",
        value: function onOpenTimeSelect(event) {}
      }, {
        key: "onCloseTimeSelect",
        value: function onCloseTimeSelect(event) {}
      }, {
        key: "logout",
        value: function logout() {
          this.authServ.logout();
          sessionStorage.clear();
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(event) {
          var file = event.target.files[0];
          this.submitSalonDetails.patchValue({
            image: file
          });
          this.submitSalonDetails.get("image").updateValueAndValidity();
        }
      }, {
        key: "checkIsApprovedProfile",
        value: function checkIsApprovedProfile() {
          this.checkIsApproved = JSON.parse(sessionStorage.getItem("isApproved"));
        }
      }, {
        key: "submitSalon",
        value: function submitSalon(data) {
          var _this28 = this;

          var dataToPass = {
            name: data.name,
            salonaddress: data.salonaddress,
            contact: data.contact,
            lat: this.lat,
            "long": this.lng,
            image: data.image,
            timezonestring: Intl.DateTimeFormat().resolvedOptions().timeZone,
            user_id: this.user_id,
            opentime: data.opentime,
            closetime: data.closetime
          };
          var postData = new FormData();
          postData.append("name", dataToPass.name);
          postData.append("image", dataToPass.image);
          postData.append("lat", dataToPass.lat);
          postData.append("long", dataToPass["long"]);
          postData.append("salonaddress", dataToPass.salonaddress);
          postData.append("opentime", dataToPass.opentime);
          postData.append("closetime", dataToPass.closetime);
          postData.append("timezonestring", dataToPass.timezonestring);
          postData.append("contact", dataToPass.contact);
          postData.append("user_id", dataToPass.user_id);
          postData.append("email", this.salonEmail);
          var options = {
            content: postData
          };
          this.commServ.saveSalonDetails(postData).subscribe(function (data) {
            if (data["code"] === 200) {
              _this28.showPendingApproval = true;

              _this28.toastrServ.success("Salon Details Submitted Successfully", "Waiting For Admin Approval", {
                timeOut: 2000
              });
            } else {
              _this28.showPendingApproval = false;

              _this28.toastrServ.error("Failed To Submit Salon Details", "", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this28.toastrServ.error("Server Error", error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "openTime",
        value: function openTime(data) {}
      }, {
        key: "closeTime",
        value: function closeTime(data) {}
      }, {
        key: "timeChanged",
        value: function timeChanged(data) {}
      }, {
        key: "cancelSalonUpdate",
        value: function cancelSalonUpdate() {
          this.editSalonDetails = false;
        }
      }, {
        key: "getsalonsData",
        value: function getsalonsData(data) {
          var _this29 = this;

          var dataToPass = {
            user_id: data
          };
          this.commServ.getSalonDetailsData(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this29.salonDetailsData = data["data"];
              _this29.salonid = data["data"]._id;
            } else {
              _this29.toastrServ.error("Failed to fetch salon details", "error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this29.toastrServ.error("Server Error", error, {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "editSalonDetailsShow",
        value: function editSalonDetailsShow() {
          this.editSalonDetails = true;
          this.submitSalonDetails.get("name").setValue(this.salonDetailsData.name);
          this.submitSalonDetails.get("contact").setValue(this.salonDetailsData.contact);
          this.submitSalonDetails.get("salonaddress").setValue(this.salonDetailsData.salonaddress);
          this.submitSalonDetails.get("opentime").setValue(this.salonDetailsData.opentime);
          this.submitSalonDetails.get("closetime").setValue(this.salonDetailsData.closetime);
        }
      }, {
        key: "updatetSalon",
        value: function updatetSalon(data) {
          var _this30 = this;

          var dataToPass = {
            salon_id: this.salonid,
            name: data.name,
            salonaddress: data.salonaddress,
            contact: data.contact,
            image: data.image,
            opentime: data.opentime,
            closetime: data.closetime
          };
          var postData = new FormData();
          postData.append("name", dataToPass.name);
          postData.append("image", dataToPass.image);
          postData.append("salonaddress", dataToPass.salonaddress);
          postData.append("opentime", dataToPass.opentime);
          postData.append("closetime", dataToPass.closetime);
          postData.append("contact", dataToPass.contact);
          postData.append("salon_id", dataToPass.salon_id);
          var options = {
            content: postData
          };
          this.commServ.updateSalonDetails(postData).subscribe(function (data) {
            if (data["code"] === 200) {
              _this30.editSalonDetails = false;

              _this30.toastrServ.success("Salon Details Updated Successfully", "Success", {
                timeOut: 2000
              });
            } else {
              _this30.showPendingApproval = false;

              _this30.toastrServ.error("Failed To Update Salon Details", "", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this30.toastrServ.error("Server Error", error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "contact",
        get: function get() {
          return this.submitSalonDetails.get("contact");
        }
      }]);

      return SalondetailsComponent;
    }();

    SalondetailsComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    SalondetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-salondetails",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salondetails.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/salondetails/salondetails.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salondetails.component.scss */
      "./src/app/salon/dashboard/salondetails/salondetails.component.scss"))["default"]]
    })], SalondetailsComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/services/add-service/add-service.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/salon/dashboard/services/add-service/add-service.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardServicesAddServiceAddServiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n.header-sec .navbar {\n  background: transparent linear-gradient(267deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  opacity: 1;\n}\n\n.header-sec .navbar-brand {\n  margin-left: 12px;\n}\n\n.header-sec .navbar-nav {\n  margin-right: 12px;\n}\n\n.header-sec .navbar-collapse {\n  justify-content: flex-end;\n}\n\n.header-sec ul li:nth-child(2) {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.header-sec .navbar ul li.active {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li.notification-img {\n  border-right: 1px solid #fff;\n  margin-left: 60px;\n  height: 25px;\n  margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img {\n  margin-right: 15px;\n  margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after {\n  display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle {\n  margin-right: 50px;\n  margin-left: 15px;\n  letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #333;\n  opacity: 1;\n  font-size: 12px;\n  line-height: 1;\n  color: #454f60;\n}\n\n.header-sec .navbar ul li a .salon-icon {\n  height: 45px;\n  width: 45px;\n  border: 1px solid #ff7d7d;\n  border-radius: 28px;\n  opacity: 1;\n  line-height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -4px;\n  right: 0;\n  background: #fff;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer .check-spa-image {\n  border: 2px solid #813882;\n  border-radius: 90px;\n  opacity: 1;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer {\n  border-bottom: 1px solid #e1e1e1;\n  padding: 25px 40px;\n  padding-top: 40px;\n}\n\n.check-spa-outer .check-spa h4 {\n  /* \n    text-align: left; */\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  text-align: center;\n  font-size: 18px;\n  padding-top: 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .salon-info {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .about-salon p {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.check-spa-outer .check-spa .about-salon h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\n.check-spa-outer .check-spa {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  position: relative;\n  /* padding: 30px; */\n}\n\n.check-spa-outer {\n  background: #ffffff;\n}\n\n.edit-info {\n  position: absolute;\n  right: 25px;\n  top: 15px;\n}\n\n.edit-info img {\n  cursor: pointer;\n}\n\n.employee-tabs {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  min-height: 0;\n  align-items: center;\n}\n\n.employee-tabs .nav-tabs .nav-link {\n  border: none;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n\n.employee-tabs .nav-tabs {\n  border-bottom: none;\n}\n\n.create-availabillity .check-timing {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-timing-inner {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-day h3 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-left: 25px;\n}\n\n.create-availabillity ul {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.create-availabillity ul li h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.create-availabillity ul li h4.days {\n  padding-left: 48px;\n}\n\n.create-availabillity-inner {\n  min-height: 85px;\n  border-bottom: 1px solid #e1e1e1;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n\n.create-availabillity .employee-sec h2 {\n  font-size: 16px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n}\n\n.add-employee-inner {\n  height: 25px;\n  width: 25px;\n  line-height: 25px;\n  border: 1px solid #4ad991;\n  border-radius: 50%;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-employee-inner i {\n  color: #4ad991;\n}\n\n.add-employee {\n  display: flex;\n}\n\n.add-employee h2 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n\n.check-spa-outer .tab-content {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 0;\n  min-height: 800px;\n}\n\n.create-availabillity .btn-sec .btn-save {\n  background: transparent linear-gradient(101deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n  min-width: 152px;\n}\n\n.create-availabillity .btn-sec .btn-cancel {\n  background: #454f60 0% 0% no-repeat padding-box;\n  margin-right: 5px;\n}\n\n.create-availabillity .btn-sec .btn-cancel:hover {\n  color: #454f60;\n  background: #ffffff;\n}\n\n.create-availabillity .btn-sec .btn-save:hover {\n  color: #753a88;\n  background: #ffffff;\n}\n\n.create-availabillity .btn-sec {\n  text-align: right;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-right: 25px;\n  background: #ffffff;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #9c3ee8;\n}\n\n.check-timing-sec {\n  max-width: 1320px;\n}\n\n.employee-tabs ul li:nth-child(2) {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.create-availabillity .table thead th {\n  border-bottom: none;\n  border-top: none;\n  font-size: 12px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td {\n  border-top: none;\n  border-bottom: 1px solid #f1f1f3;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-bottom: 30px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td .delete-info {\n  margin-left: 35px;\n}\n\n.footer-sec {\n  text-align: left;\n  letter-spacing: 0;\n  color: #bcbccb;\n  opacity: 1;\n  font-size: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 150px;\n}\n\n.header-sec .navbar-expand-lg .navbar-nav .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n  top: 40px;\n}\n\n@media (max-width: 1200px) {\n  .create-availabillity .table tbody tr td {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .create-availabillity .table thead tr th {\n    padding-left: 20px;\n    padding-right: 45px;\n  }\n\n  .create-availabillity .table tbody tr td .delete-info {\n    margin-left: 25px;\n  }\n\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: break-word;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 15px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 15px;\n  }\n}\n\n@media (max-width: 991px) {\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: unset;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 40px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 40px;\n  }\n}\n\n@media (max-width: 767px) {\n  .employee-tabs ul li:nth-child(2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .create-availabillity .table tbody tr td {\n    padding-top: 30px;\n    padding-left: 15px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n  }\n\n  .create-availabillity .btn-sec {\n    margin-right: 10px;\n  }\n\n  .create-availabillity .btn-sec .btn-save {\n    height: 40px;\n    min-width: 120px;\n  }\n\n  .create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n    padding: 5px;\n  }\n\n  .create-availabillity-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n/* add employee css */\n\n.add-employees-sec .add-employees .add-employees-inner .select-employee select {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #dfdfdf;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  width: 100%;\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 0.9;\n  padding-left: 20px;\n  -webkit-appearance: none;\n}\n\n.add-employees-sec .add-employees .add-employees-inner .select-employee img {\n  position: absolute;\n  right: 23px;\n  top: 23px;\n}\n\n.add-employees-sec .add-employees .add-employees-inner .select-employee {\n  position: relative;\n}\n\n.add-employees-sec .add-employees .add-employees-inner label {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  /* padding-left: 15px; */\n}\n\n.add-employees-sec .add-employees {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.add-employees-sec .add-employees .add-employees-inner {\n  /* flex: 1;\n    margin: 0 5px; */\n  margin-right: 10px;\n  width: 100%;\n  max-width: 210px;\n}\n\n.add-employees-sec .add-employees .add-employee-icon {\n  flex: none;\n  margin-top: 26px;\n  margin-left: auto;\n  width: auto;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner {\n  position: relative;\n  margin: 0 5px;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services {\n  background: #813882 0% 0% no-repeat padding-box;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services img {\n  margin-right: 15px;\n}\n\n.add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services h5 {\n  font-size: 14px;\n  letter-spacing: 0;\n  color: #ffffff;\n  opacity: 0.9;\n  font-weight: 100;\n  padding: 0px 18px;\n  margin: 0px;\n}\n\n.add-employees-sec .add-employee-services .services-sec h4 {\n  font-size: 14px;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  padding-left: 15px;\n}\n\n.add-employees-sec {\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.add-employees-sec .add-employee-services {\n  margin-top: 25px;\n  border-bottom: 1px solid #e1e1e1;\n  padding-bottom: 30px;\n}\n\n.add-employees-sec .add-employee-services .services-sec {\n  display: flex;\n}\n\n.add-employees-sec .add-employee-services h4 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  /* padding-left: 15px; */\n  font-weight: 400;\n}\n\n.inner-tab-section {\n  height: 100%;\n  min-height: 550px;\n}\n\n@media (max-width: 1200px) {\n  .add-employees-sec .add-employee-services .services-sec .add-employee-services-inner .hair-services h5 {\n    padding: 0px 13px;\n  }\n}\n\n@media (max-width: 767px) {\n  .add-employees-sec .add-employee-services .services-sec {\n    display: block;\n  }\n\n  .add-employees-sec .add-employee-services .services-sec .add-employee-services-inner {\n    margin-bottom: 5px;\n  }\n\n  .add-employees-sec .add-employees {\n    display: block;\n  }\n\n  .add-employees-sec .add-employees .add-employees-inner {\n    max-width: 100%;\n    margin-bottom: 15px;\n  }\n\n  .add-employee-inner {\n    margin: 0 auto;\n  }\n\n  .add-employees-sec {\n    /* padding-top: 30px; */\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .inner-tab-section {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zZXJ2aWNlcy9hZGQtc2VydmljZS9hZGQtc2VydmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL3NlcnZpY2VzL2FkZC1zZXJ2aWNlL2FkZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxR0FBQTtFQUVBLGlDQUFBO0VBQ0EsVUFBQTtBQ0FGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUY7O0FEQ0E7RUFDRSx5QkFBQTtBQ0VGOztBREFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURKQTtFQUNFLGFBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1FGOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDUUY7O0FETEE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxt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MUJBO0lBQ0UsY0FBQTtFQzZCRjs7RUQzQkE7SUFDRSx1QkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUM4QkY7O0VENUJBO0lBQ0UsWUFBQTtFQytCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL3NlcnZpY2VzL2FkZC1zZXJ2aWNlL2FkZC1zZXJ2aWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIG9wYWNpdHk6IDE7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uaGVhZGVyLXNlYyB1bCBsaTpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5hY3RpdmUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhciAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzQ1NGY2MDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIC5zYWxvbi1pY29uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2Q3ZDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgb3BhY2l0eTogMTtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciAuY2hlY2stc3BhLWltYWdlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzgxMzg4MjtcbiAgYm9yZGVyLXJhZGl1czogOTBweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiAxODBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIGg0IHtcbiAgLyogXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5YzNlZTg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICAvKiBwYWRkaW5nOiAyNXB4IDQwcHg7ICovXG4gIHBhZGRpbmc6IDI1cHggMjVweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5YzNlZTg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24gaDIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5YzNlZTg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHBhZGRpbmc6IDMwcHg7ICovXG59XG4uY2hlY2stc3BhLW91dGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5lZGl0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDE1cHg7XG59XG4uZWRpdC1pbmZvIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5lbXBsb3llZS10YWJzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbXBsb3llZS10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHVuc2V0O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdW5zZXQ7XG59XG5cbi5lbXBsb3llZS10YWJzIC5uYXYtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyAuY2hlY2stdGltaW5nLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay1kYXkgaDMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIGxpIGg0LmRheXMge1xuICBwYWRkaW5nLWxlZnQ6IDQ4cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eS1pbm5lciB7XG4gIG1pbi1oZWlnaHQ6IDg1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuZW1wbG95ZWUtc2VjIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG4uYWRkLWVtcGxveWVlLWlubmVyIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YWQ5OTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtZW1wbG95ZWUtaW5uZXIgaSB7XG4gIGNvbG9yOiAjNGFkOTkxO1xufVxuLmFkZC1lbXBsb3llZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGQtZW1wbG95ZWUgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAudGFiLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1pbi1oZWlnaHQ6IDgwMHB4O1xufVxuLy8gLmNyZWF0ZS1hdmFpbGFiaWxsaXR5ICBpbnB1dHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjREZERkRGO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgaGVpZ2h0OiAzNXB4O1xuLy8gICAgIGxldHRlci1zcGFjaW5nOiAwO1xuLy8gICAgIGNvbG9yOiAjOTU5NUExO1xuLy8gICAgIG9wYWNpdHk6IDAuOTtcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbi8vIH1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTAxZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlXG4gICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDI5O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtaW4td2lkdGg6IDE1MnB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogIzQ1NGY2MCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlOmhvdmVyIHtcbiAgY29sb3I6ICM3NTNhODg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjOWMzZWU4O1xufVxuLmNoZWNrLXRpbWluZy1zZWMge1xuICBtYXgtd2lkdGg6IDEzMjBweDtcbn1cbi5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCAuZGVsZXRlLWluZm8ge1xuICBtYXJnaW4tbGVmdDogMzVweDtcbn1cbi5mb290ZXItc2VjIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjYmNiY2NiO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbiAgdG9wOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICB9XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gICAgd29yZC1icmVhazogdW5zZXQ7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuICAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG59XG5cbi8qIGFkZCBlbXBsb3llZSBjc3MgKi9cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciAuc2VsZWN0LWVtcGxveWVlIHNlbGVjdCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGZkZmRmO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMC45O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciAuc2VsZWN0LWVtcGxveWVlIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIzcHg7XG4gIHRvcDogMjNweDtcbn1cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciAuc2VsZWN0LWVtcGxveWVlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIgbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxNXB4OyAqL1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIge1xuICAvKiBmbGV4OiAxO1xuICAgIG1hcmdpbjogMCA1cHg7ICovXG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjEwcHg7XG59XG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZS1pY29uIHtcbiAgZmxleDogbm9uZTtcbiAgbWFyZ2luLXRvcDogMjZweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWNcbiAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlc1xuICAuc2VydmljZXMtc2VjXG4gIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCA1cHg7XG59XG4uYWRkLWVtcGxveWVlcy1zZWNcbiAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlc1xuICAuc2VydmljZXMtc2VjXG4gIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXJcbiAgLmhhaXItc2VydmljZXMge1xuICBiYWNrZ3JvdW5kOiAjODEzODgyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkZC1lbXBsb3llZXMtc2VjXG4gIC5hZGQtZW1wbG95ZWUtc2VydmljZXNcbiAgLnNlcnZpY2VzLXNlY1xuICAuYWRkLWVtcGxveWVlLXNlcnZpY2VzLWlubmVyXG4gIC5oYWlyLXNlcnZpY2VzXG4gIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi5hZGQtZW1wbG95ZWVzLXNlY1xuICAuYWRkLWVtcGxveWVlLXNlcnZpY2VzXG4gIC5zZXJ2aWNlcy1zZWNcbiAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lclxuICAuaGFpci1zZXJ2aWNlc1xuICBoNSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjk7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICBtYXJnaW46IDBweDtcbn1cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuLmFkZC1lbXBsb3llZXMtc2VjIHtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIHBhZGRpbmctbGVmdDogMTVweDsgKi9cbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5pbm5lci10YWItc2VjdGlvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogNTUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmFkZC1lbXBsb3llZXMtc2VjXG4gICAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlc1xuICAgIC5zZXJ2aWNlcy1zZWNcbiAgICAuYWRkLWVtcGxveWVlLXNlcnZpY2VzLWlubmVyXG4gICAgLmhhaXItc2VydmljZXNcbiAgICBoNSB7XG4gICAgcGFkZGluZzogMHB4IDEzcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5hZGQtZW1wbG95ZWVzLXNlY1xuICAgIC5hZGQtZW1wbG95ZWUtc2VydmljZXNcbiAgICAuc2VydmljZXMtc2VjXG4gICAgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcy1pbm5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIC5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIC5hZGQtZW1wbG95ZWVzLWlubmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5hZGQtZW1wbG95ZWUtaW5uZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5hZGQtZW1wbG95ZWVzLXNlYyB7XG4gICAgLyogcGFkZGluZy10b3A6IDMwcHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLmlubmVyLXRhYi1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbiIsImJvZHkge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMjY3ZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWJyYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLWNvbGxhcHNlIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmhlYWRlci1zZWMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5hY3RpdmUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaS5ub3RpZmljYXRpb24taW1nIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5uYXYtbGluay5kcm9wZG93bi10b2dnbGUge1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAuZHJvcGRvd24taXRlbSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICMzMzM7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAjNDU0ZjYwO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpIGEgLnNhbG9uLWljb24ge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY3ZDdkO1xuICBib3JkZXItcmFkaXVzOiAyOHB4O1xuICBvcGFjaXR5OiAxO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIgLmNoZWNrLXNwYS1pbWFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MTM4ODI7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgaDQge1xuICAvKiBcbiAgICB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICAvKiBwYWRkaW5nOiAyNXB4IDQwcHg7ICovXG4gIHBhZGRpbmc6IDI1cHggMjVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuYWJvdXQtc2Fsb24gcCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xufVxuXG4uY2hlY2stc3BhLW91dGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmVkaXQtaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI1cHg7XG4gIHRvcDogMTVweDtcbn1cblxuLmVkaXQtaW5mbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lbXBsb3llZS10YWJzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lbXBsb3llZS10YWJzIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHVuc2V0O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdW5zZXQ7XG59XG5cbi5lbXBsb3llZS10YWJzIC5uYXYtdGFicyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLXRpbWluZy1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay1kYXkgaDMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNC5kYXlzIHtcbiAgcGFkZGluZy1sZWZ0OiA0OHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXIge1xuICBtaW4taGVpZ2h0OiA4NXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuZW1wbG95ZWUtc2VjIGgyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG5cbi5hZGQtZW1wbG95ZWUtaW5uZXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhZDk5MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWRkLWVtcGxveWVlLWlubmVyIGkge1xuICBjb2xvcjogIzRhZDk5MTtcbn1cblxuLmFkZC1lbXBsb3llZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGQtZW1wbG95ZWUgaDIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC50YWItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWluLWhlaWdodDogODAwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLXNhdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTAxZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogIzQ1NGY2MCAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZTpob3ZlciB7XG4gIGNvbG9yOiAjNzUzYTg4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICM5YzNlZTg7XG59XG5cbi5jaGVjay10aW1pbmctc2VjIHtcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XG59XG5cbi5lbXBsb3llZS10YWJzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDgwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdGgge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQgLmRlbGV0ZS1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDM1cHg7XG59XG5cbi5mb290ZXItc2VjIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjYmNiY2NiO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogNDVweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQgLmRlbGV0ZS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gICAgd29yZC1icmVhazogdW5zZXQ7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIHtcbiAgICBwYWRkaW5nOiAyNXB4IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZW1wbG95ZWUtdGFicyB1bCBsaTpudGgtY2hpbGQoMikge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAubmF2LXRhYnMgLm5hdi1pdGVtLnNob3cgLm5hdi1saW5rLFxuLm5hdi10YWJzIC5uYXYtbGluayB7XG4gICAgcGFkZGluZzogNXB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgfVxufVxuLyogYWRkIGVtcGxveWVlIGNzcyAqL1xuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIC5hZGQtZW1wbG95ZWVzLWlubmVyIC5zZWxlY3QtZW1wbG95ZWUgc2VsZWN0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZmRmZGY7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAwLjk7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIgLnNlbGVjdC1lbXBsb3llZSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyM3B4O1xuICB0b3A6IDIzcHg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciAuc2VsZWN0LWVtcGxveWVlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIgbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgLyogcGFkZGluZy1sZWZ0OiAxNXB4OyAqL1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyAuYWRkLWVtcGxveWVlcy1pbm5lciB7XG4gIC8qIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAwIDVweDsgKi9cbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAyMTBweDtcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWVzIC5hZGQtZW1wbG95ZWUtaWNvbiB7XG4gIGZsZXg6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB3aWR0aDogYXV0bztcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzLWlubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgNXB4O1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIgLmhhaXItc2VydmljZXMge1xuICBiYWNrZ3JvdW5kOiAjODEzODgyIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIgLmhhaXItc2VydmljZXMgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIgLmhhaXItc2VydmljZXMgaDUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC45O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAwcHggMThweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIC5zZXJ2aWNlcy1zZWMgaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMge1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTFlMWUxO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlLXNlcnZpY2VzIGg0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIHBhZGRpbmctbGVmdDogMTVweDsgKi9cbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmlubmVyLXRhYi1zZWN0aW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiA1NTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIgLmhhaXItc2VydmljZXMgaDUge1xuICAgIHBhZGRpbmc6IDBweCAxM3B4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmFkZC1lbXBsb3llZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMgLnNlcnZpY2VzLXNlYyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZS1zZXJ2aWNlcyAuc2VydmljZXMtc2VjIC5hZGQtZW1wbG95ZWUtc2VydmljZXMtaW5uZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxuXG4gIC5hZGQtZW1wbG95ZWVzLXNlYyAuYWRkLWVtcGxveWVlcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuYWRkLWVtcGxveWVlcy1zZWMgLmFkZC1lbXBsb3llZXMgLmFkZC1lbXBsb3llZXMtaW5uZXIge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG5cbiAgLmFkZC1lbXBsb3llZS1pbm5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gIH1cblxuICAuYWRkLWVtcGxveWVlcy1zZWMge1xuICAgIC8qIHBhZGRpbmctdG9wOiAzMHB4OyAqL1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICB9XG5cbiAgLmlubmVyLXRhYi1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/services/add-service/add-service.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/salon/dashboard/services/add-service/add-service.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AddServiceComponent */

  /***/
  function srcAppSalonDashboardServicesAddServiceAddServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddServiceComponent", function () {
      return AddServiceComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddServiceComponent = /*#__PURE__*/function () {
      function AddServiceComponent(authServ, fb, commServ, toastrServ, router, dialog) {
        _classCallCheck(this, AddServiceComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.router = router;
        this.dialog = dialog;
        this.categoryList = [];
        this.service_id = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.serviceForm = this.fb.group({
          category_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          services: this.fb.array([this.createService()])
        });
      }

      _createClass(AddServiceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user_id = sessionStorage.getItem("userId");
          this.getSalonData();
          this.getCategotyList();
        }
      }, {
        key: "addNewService",
        value: function addNewService() {
          this.serviceArray.push(this.createService());
        }
      }, {
        key: "createService",
        value: function createService() {
          return this.fb.group({
            service_id: [],
            price: [],
            duration: []
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.router.navigate(["salon/home/profile"]);
        }
      }, {
        key: "getSalonData",
        value: function getSalonData() {
          var _this31 = this;

          var data = {
            user_id: this.user_id
          };
          this.commServ.getSalonData(data).subscribe(function (responce) {
            if (responce.code === 200) {
              _this31.salonData = responce.data;
            } else {
              _this31.toastrServ.error("Invalid salon details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this31.toastrServ.error("Failed to get salon data", error, {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "getCategotyList",
        value: function getCategotyList() {
          var _this32 = this;

          var postData = {
            type: "categories"
          };
          this.commServ.getCategories(postData).subscribe(function (data) {
            if (data["code"] == 200) {
              _this32.categoryList = data["data"];
            } else {
              _this32.noRecordsFound = false;

              _this32.toastrServ.error("Failed To Fetch Categories", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this32.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "getServiceList",
        value: function getServiceList($event) {
          var _this33 = this;

          var postData = {
            category_id: $event.value
          };
          this.commServ.getServices(postData).subscribe(function (data) {
            if (data["code"] == 200) {
              var serviceArr = [];
              data["data"].forEach(function (element) {
                var serviceData = {
                  id: element._id,
                  name: element.name
                };
                serviceArr.push(serviceData);
              });
              _this33.servicesList = serviceArr;
            } else {
              _this33.noRecordsFound = false;

              _this33.toastrServ.error("Failed To Fetch Services", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this33.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "saveService",
        value: function saveService(dataToPass) {
          var _this34 = this;

          dataToPass.salon_id = this.salonData._id;
          this.commServ.addEmpService(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this34.toastrServ.success("Service Added", "Success", {
                timeOut: 2000
              });

              _this34.router.navigate(["salon/home/profile"]);
            } else {
              // this.isAddModal = true;
              _this34.toastrServ.error("Failed To Add", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this34.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "removeField",
        value: function removeField(index) {
          if (this.serviceArray.length == 1) return false;else this.serviceArray.removeAt(index);
        }
      }, {
        key: "serviceArray",
        get: function get() {
          return this.serviceForm.get("services");
        }
      }]);

      return AddServiceComponent;
    }();

    AddServiceComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    AddServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-add-service",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/services/add-service/add-service.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-service.component.scss */
      "./src/app/salon/dashboard/services/add-service/add-service.component.scss"))["default"]]
    })], AddServiceComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/services/services.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/salon/dashboard/services/services.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardServicesServicesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "body {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\ntable {\n  width: 100%;\n}\n\n.noRec {\n  padding: 1em;\n  margin: 1em !important;\n  width: 100% !important;\n}\n\n.header-sec .navbar {\n  background: transparent linear-gradient(267deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  opacity: 1;\n}\n\n.header-sec .navbar-brand {\n  margin-left: 12px;\n}\n\n.header-sec .navbar-nav {\n  margin-right: 12px;\n}\n\n.header-sec .navbar-collapse {\n  justify-content: flex-end;\n}\n\n.header-sec ul li:nth-child(2) {\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.header-sec .navbar ul li.active {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.header-sec .navbar ul li.notification-img {\n  border-right: 1px solid #fff;\n  margin-left: 60px;\n  height: 25px;\n  margin-top: 5px;\n}\n\n.header-sec .navbar ul li.notification-img img {\n  margin-right: 15px;\n  margin-top: -15px;\n}\n\n.header-sec .navbar .dropdown-toggle::after {\n  display: none;\n}\n\n.header-sec .navbar .nav-link.dropdown-toggle {\n  margin-right: 50px;\n  margin-left: 15px;\n  letter-spacing: 0;\n}\n\n.header-sec .navbar .dropdown-item {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #333;\n  opacity: 1;\n  font-size: 12px;\n  line-height: 1;\n  color: #454f60;\n}\n\n.header-sec .navbar ul li a .salon-icon {\n  height: 45px;\n  width: 45px;\n  border: 1px solid #ff7d7d;\n  border-radius: 28px;\n  opacity: 1;\n  line-height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: -4px;\n  right: 0;\n  background: #fff;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer .check-spa-image {\n  border: 2px solid #813882;\n  border-radius: 90px;\n  opacity: 1;\n  height: 180px;\n  width: 180px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n\n.check-spa-outer .check-spa .check-spa-image-outer {\n  border-bottom: 1px solid #e1e1e1;\n  padding: 25px 40px;\n  padding-top: 40px;\n}\n\n.check-spa-outer .check-spa h4 {\n  /* \n    text-align: left; */\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  text-align: center;\n  font-size: 18px;\n  padding-top: 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-top: 10px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .salon-info {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .salon-info .salon-info-inner {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.check-spa-outer .check-spa .about-salon {\n  border-bottom: 1px solid #e1e1e1;\n  /* padding: 25px 40px; */\n  padding: 25px 25px;\n}\n\n.check-spa-outer .check-spa .about-salon p {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.check-spa-outer .check-spa .about-salon h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9c3ee8;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding-bottom: 5px;\n}\n\n.check-spa-outer .check-spa {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 40px;\n  margin-bottom: 40px;\n  position: relative;\n  /* padding: 30px; */\n}\n\n.check-spa-outer {\n  background: #ffffff;\n}\n\n.edit-info {\n  position: absolute;\n  right: 25px;\n  top: 15px;\n}\n\n.edit-info img {\n  cursor: pointer;\n}\n\n.employee-tabs {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 6px;\n  opacity: 1;\n  margin-bottom: 0;\n  display: flex;\n  justify-content: center;\n  min-height: 0;\n  align-items: center;\n}\n\n.employee-tabs .nav-tabs .nav-link {\n  border: none;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n\n.employee-tabs .nav-tabs {\n  border-bottom: none;\n}\n\n.create-availabillity .check-timing {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-timing-inner {\n  display: flex;\n}\n\n.create-availabillity .check-timing .check-day h3 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  padding-top: 5px;\n  padding-left: 25px;\n}\n\n.create-availabillity ul {\n  list-style-type: none;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 35px;\n  margin-left: 25px;\n  margin-right: 25px;\n}\n\n.create-availabillity ul li h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-left: 10px;\n  padding-bottom: 5px;\n}\n\n.create-availabillity ul li h4.days {\n  padding-left: 48px;\n}\n\n.create-availabillity-inner {\n  min-height: 85px;\n  border-bottom: 1px solid #e1e1e1;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n\n.create-availabillity .employee-sec h2 {\n  font-size: 16px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n}\n\n.add-employee-inner {\n  height: 25px;\n  width: 25px;\n  line-height: 25px;\n  border: 1px solid #4ad991;\n  border-radius: 50%;\n  line-height: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  cursor: pointer;\n}\n\n.add-employee-inner i {\n  color: #4ad991;\n}\n\n.add-btn a {\n  display: flex;\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n\n.add-btn a span {\n  margin-top: 2px;\n  margin-left: 10px;\n}\n\n.add-employee h2 {\n  font-size: 14px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n  padding-top: 5px;\n  padding-left: 10px;\n}\n\n.check-spa-outer .tab-content {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #0000000a;\n  border-radius: 6px;\n  opacity: 1;\n  margin-top: 0;\n}\n\n.create-availabillity .btn-sec .btn-save {\n  background: transparent linear-gradient(101deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n  min-width: 152px;\n}\n\n.create-availabillity .btn-sec .btn-cancel {\n  background: #454f60 0% 0% no-repeat padding-box;\n  margin-right: 5px;\n}\n\n.create-availabillity .btn-sec {\n  text-align: right;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin-right: 25px;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link.active {\n  color: #9c3ee8;\n}\n\n.check-timing-sec {\n  max-width: 1320px;\n}\n\n.employee-tabs ul li:nth-child(2) {\n  margin-left: 80px;\n  margin-right: 80px;\n}\n\n.create-availabillity .table thead th {\n  border-bottom: none;\n  border-top: none;\n  font-size: 12px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-weight: 500;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td {\n  border-top: none;\n  border-bottom: 1px solid #f1f1f3;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n  padding-top: 30px;\n  padding-left: 40px;\n  padding-bottom: 30px;\n  padding-right: 40px;\n}\n\n.create-availabillity .table tbody tr td .delete-info {\n  margin-left: 35px;\n}\n\n.footer-sec {\n  text-align: left;\n  letter-spacing: 0;\n  color: #bcbccb;\n  opacity: 1;\n  font-size: 15px;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  margin-left: 150px;\n}\n\n.header-sec .navbar-expand-lg .navbar-nav .dropdown-menu {\n  position: absolute;\n  right: 0;\n  left: auto;\n  top: 40px;\n}\n\n@media (max-width: 1200px) {\n  .create-availabillity .table tbody tr td {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n\n  .create-availabillity .table thead tr th {\n    padding-left: 20px;\n    padding-right: 45px;\n  }\n\n  .create-availabillity .table tbody tr td .delete-info {\n    margin-left: 25px;\n  }\n\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: break-word;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 15px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 15px;\n  }\n}\n\n@media (max-width: 991px) {\n  .check-spa-outer .check-spa .salon-info .salon-info-inner h5 {\n    word-break: unset;\n  }\n\n  .check-spa-outer .check-spa .check-spa-image-outer {\n    padding: 25px 40px;\n  }\n\n  .check-spa-outer .check-spa .salon-info {\n    padding: 25px 40px;\n  }\n}\n\n@media (max-width: 767px) {\n  .employee-tabs ul li:nth-child(2) {\n    margin-left: 10px;\n    margin-right: 10px;\n  }\n\n  .create-availabillity .table tbody tr td {\n    padding-top: 30px;\n    padding-left: 15px;\n    padding-bottom: 30px;\n    padding-right: 15px;\n  }\n\n  .create-availabillity .btn-sec {\n    margin-right: 10px;\n  }\n\n  .create-availabillity .btn-sec .btn-save {\n    height: 40px;\n    min-width: 120px;\n  }\n\n  .create-availabillity .nav-tabs .nav-item.show .nav-link,\n.nav-tabs .nav-link {\n    padding: 5px;\n  }\n\n  .create-availabillity-inner {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  width: 45%;\n  font-family: \"Roboto\", sans-serif;\n}\n\n.main-section-area.modal-md {\n  width: 35%;\n  padding: 16px;\n}\n\n.btn-Area {\n  text-align: right;\n}\n\n.header {\n  border-bottom: 1px solid lightgray;\n}\n\n.header h4 {\n  font-size: 17px;\n  color: rgba(0, 0, 0, 0.87);\n  margin: 0px 0px 10px;\n}\n\n.main-section {\n  margin-top: 10px;\n}\n\n.field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\nlabel {\n  text-align: left;\n  letter-spacing: 0;\n  color: #454f60;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  .mat-tab-body-content {\n    padding: 0px !important;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.can {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQ0dGOztBRERBO0VBQ0UscUdBQUE7RUFFQSxpQ0FBQTtFQUNBLFVBQUE7QUNHRjs7QUREQTtFQUNFLGlCQUFBO0FDSUY7O0FERkE7RUFDRSxrQkFBQTtBQ0tGOztBREZBO0VBQ0UseUJBQUE7QUNLRjs7QURIQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ09GOztBRExBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1FGOztBRE5BO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDVUY7O0FEUEE7RUFDRSxhQUFBO0FDVUY7O0FEUkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNXRjs7QURSQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ1dGOztBRFJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNB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Ijoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubm9SZWMge1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbjogMWVtICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyLXNlYyAubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2N2RlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJVxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBvcGFjaXR5OiAxO1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1uYXYge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXItY29sbGFwc2Uge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmhlYWRlci1zZWMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkuYWN0aXZlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmY7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5oZWFkZXItc2VjIC5uYXZiYXIgLm5hdi1saW5rLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi1pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogIzMzMztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgY29sb3I6ICM0NTRmNjA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkgYSAuc2Fsb24taWNvbiB7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQ1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjdkN2Q7XG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00cHg7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIgLmNoZWNrLXNwYS1pbWFnZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM4MTM4ODI7XG4gIGJvcmRlci1yYWRpdXM6IDkwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogMTgwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSBoNCB7XG4gIC8qIFxuICAgIHRleHQtYWxpZ246IGxlZnQ7ICovXG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOWMzZWU4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAzMHB4OyAqL1xufVxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uZWRpdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjVweDtcbiAgdG9wOiAxNXB4O1xufVxuLmVkaXQtaW5mbyBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIC5uYXYtbGluayB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdW5zZXQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB1bnNldDtcbn1cblxuLmVtcGxveWVlLXRhYnMgLm5hdi10YWJzIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay10aW1pbmctaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5jaGVjay10aW1pbmcgLmNoZWNrLWRheSBoMyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCBsaSBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQuZGF5cyB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5lbXBsb3llZS1zZWMgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbn1cbi5hZGQtZW1wbG95ZWUtaW5uZXIge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRhZDk5MTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZC1lbXBsb3llZS1pbm5lciBpIHtcbiAgY29sb3I6ICM0YWQ5OTE7XG59XG4uYWRkLWJ0biB7XG4gIGEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgY29sb3I6ICM0NTRmNjA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmFkZC1lbXBsb3llZSBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY2hlY2stc3BhLW91dGVyIC50YWItY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjMDAwMDAwMGE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi8vIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAgaW5wdXR7XG4vLyAgICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI0RGREZERjtcbi8vICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuLy8gICAgIG9wYWNpdHk6IDE7XG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgIGhlaWdodDogMzVweDtcbi8vICAgICBsZXR0ZXItc3BhY2luZzogMDtcbi8vICAgICBjb2xvcjogIzk1OTVBMTtcbi8vICAgICBvcGFjaXR5OiAwLjk7XG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4vLyB9XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEwMWRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJVxuICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWluLXdpZHRoOiAxNTJweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICM0NTRmNjAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMjVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICM5YzNlZTg7XG59XG4uY2hlY2stdGltaW5nLXNlYyB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xufVxuLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogODBweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0aCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmMWYzO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuLmZvb3Rlci1zZWMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNiY2JjY2I7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xufVxuLmhlYWRlci1zZWMgLm5hdmJhci1leHBhbmQtbGcgLm5hdmJhci1uYXYgLmRyb3Bkb3duLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB0b3A6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGhlYWQgdHIgdGgge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xuICB9XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQgLmRlbGV0ZS1pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIC5zYWxvbi1pbmZvLWlubmVyIGg1IHtcbiAgICB3b3JkLWJyZWFrOiB1bnNldDtcbiAgfVxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICB9XG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0Ym9keSB0ciB0ZCB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gIH1cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4gIC5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHktaW5uZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcblxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxuLnVzZXJEZXRhaWxzT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLy8gU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50IC9cbiAgLy9kaXNwbGF5OiBub25lOyAvIEhpZGRlbiBieSBkZWZhdWx0IC9cbiAgd2lkdGg6IDEwMCU7IC8vIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAvXG4gIGhlaWdodDogMTAwJTsgLy8gRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAvXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvLyBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAvXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA0NSU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgJi5tb2RhbC1tZCB7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG59XG5cbi5idG4tQXJlYSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGg0IHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG4gIH1cbn1cbi5tYWluLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmZpZWxkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5wcm9maWxlUGljIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5sYWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRldGFpbHMge1xuICB3aWR0aDogNzUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4uaW1nIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuICAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmNhbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuIiwiYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vUmVjIHtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IDFlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDI2N2RlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwYTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1icmFuZCB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhci1jb2xsYXBzZSB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5oZWFkZXItc2VjIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkuYWN0aXZlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIHVsIGxpLm5vdGlmaWNhdGlvbi1pbWcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZmZmO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgdWwgbGkubm90aWZpY2F0aW9uLWltZyBpbWcge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uaGVhZGVyLXNlYyAubmF2YmFyIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciAubmF2LWxpbmsuZHJvcGRvd24tdG9nZ2xlIHtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXIgLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogIzQ1NGY2MDtcbn1cblxuLmhlYWRlci1zZWMgLm5hdmJhciB1bCBsaSBhIC5zYWxvbi1pY29uIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICB3aWR0aDogNDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2Q3ZDtcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcbiAgb3BhY2l0eTogMTtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTRweDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuY2hlY2stc3BhLWltYWdlLW91dGVyIC5jaGVjay1zcGEtaW1hZ2Uge1xuICBib3JkZXI6IDJweCBzb2xpZCAjODEzODgyO1xuICBib3JkZXItcmFkaXVzOiA5MHB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDE4MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIGg0IHtcbiAgLyogXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciBoNSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBwYWRkaW5nOiAyNXB4IDI1cHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyAuc2Fsb24taW5mby1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgcGFkZGluZzogMjVweCAyNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmFib3V0LXNhbG9uIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5hYm91dC1zYWxvbiBoMiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzljM2VlODtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggIzAwMDAwMDBhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMzBweDsgKi9cbn1cblxuLmNoZWNrLXNwYS1vdXRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5lZGl0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICB0b3A6IDE1cHg7XG59XG5cbi5lZGl0LWluZm8gaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW1wbG95ZWUtdGFicyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZW1wbG95ZWUtdGFicyAubmF2LXRhYnMgLm5hdi1saW5rIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB1bnNldDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHVuc2V0O1xufVxuXG4uZW1wbG95ZWUtdGFicyAubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuY2hlY2stdGltaW5nIC5jaGVjay10aW1pbmctaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmNoZWNrLXRpbWluZyAuY2hlY2stZGF5IGgzIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgdWwgbGkgaDQuZGF5cyB7XG4gIHBhZGRpbmctbGVmdDogNDhweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVyIHtcbiAgbWluLWhlaWdodDogODVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMWUxZTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmVtcGxveWVlLXNlYyBoMiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYWRkLWVtcGxveWVlLWlubmVyIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0YWQ5OTE7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZC1lbXBsb3llZS1pbm5lciBpIHtcbiAgY29sb3I6ICM0YWQ5OTE7XG59XG5cbi5hZGQtYnRuIGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzQ1NGY2MDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmFkZC1idG4gYSBzcGFuIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFkZC1lbXBsb3llZSBoMiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jaGVjay1zcGEtb3V0ZXIgLnRhYi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4ICMwMDAwMDAwYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAxO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLmJ0bi1zZWMgLmJ0bi1zYXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEwMWRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMjk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIG1pbi13aWR0aDogMTUycHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyAuYnRuLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICM0NTRmNjAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5uYXYtdGFicyAubmF2LWl0ZW0uc2hvdyAubmF2LWxpbmssXG4ubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjOWMzZWU4O1xufVxuXG4uY2hlY2stdGltaW5nLXNlYyB7XG4gIG1heC13aWR0aDogMTMyMHB4O1xufVxuXG4uZW1wbG95ZWUtdGFicyB1bCBsaTpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA4MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRoZWFkIHRoIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG59XG5cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjFmMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjNDU0ZjYwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xufVxuXG4uY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzNXB4O1xufVxuXG4uZm9vdGVyLXNlYyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogI2JjYmNjYjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG5cbi5oZWFkZXItc2VjIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogYXV0bztcbiAgdG9wOiA0MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAudGFibGUgdGJvZHkgdHIgdGQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC50YWJsZSB0aGVhZCB0ciB0aCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDQ1cHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIC5kZWxldGUtaW5mbyB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIH1cblxuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLmNoZWNrLXNwYS1pbWFnZS1vdXRlciB7XG4gICAgcGFkZGluZzogMjVweCAxNXB4O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5zYWxvbi1pbmZvIHtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY2hlY2stc3BhLW91dGVyIC5jaGVjay1zcGEgLnNhbG9uLWluZm8gLnNhbG9uLWluZm8taW5uZXIgaDUge1xuICAgIHdvcmQtYnJlYWs6IHVuc2V0O1xuICB9XG5cbiAgLmNoZWNrLXNwYS1vdXRlciAuY2hlY2stc3BhIC5jaGVjay1zcGEtaW1hZ2Utb3V0ZXIge1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgfVxuXG4gIC5jaGVjay1zcGEtb3V0ZXIgLmNoZWNrLXNwYSAuc2Fsb24taW5mbyB7XG4gICAgcGFkZGluZzogMjVweCA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmVtcGxveWVlLXRhYnMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlIHRib2R5IHRyIHRkIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eSAuYnRuLXNlYyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmNyZWF0ZS1hdmFpbGFiaWxsaXR5IC5idG4tc2VjIC5idG4tc2F2ZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gIH1cblxuICAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLm5hdi10YWJzIC5uYXYtaXRlbS5zaG93IC5uYXYtbGluayxcbi5uYXYtdGFicyAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuXG4gIC5jcmVhdGUtYXZhaWxhYmlsbGl0eS1pbm5lciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIH1cbn1cbi51c2VyRGV0YWlsc092ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA0NSU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuLm1haW4tc2VjdGlvbi1hcmVhLm1vZGFsLW1kIHtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmJ0bi1BcmVhIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLmhlYWRlciBoNCB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIG1hcmdpbjogMHB4IDBweCAxMHB4O1xufVxuXG4ubWFpbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmZpZWxkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByb2ZpbGVQaWMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxubGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRmNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRldGFpbHMge1xuICB3aWR0aDogNzUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5pbWcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cblxuICAubWF0LXRhYi1ib2R5LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG4uY2FuIHtcbiAgbWFyZ2luOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/services/services.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/salon/dashboard/services/services.component.ts ***!
    \****************************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppSalonDashboardServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../confirmation-dialog/confirmation-dialog.component */
    "./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent(authServ, fb, commServ, toastrServ, dialog, SimpleModalService) {
        _classCallCheck(this, ServicesComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.dialog = dialog;
        this.SimpleModalService = SimpleModalService;
        this.salonServicesList = [];
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["categoryname", "servicename", "price", "duration", "is_active", "action"];
        this.popoverTitle = "Popover title";
        this.popoverMessage = "Popover description";
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.isDeleteDialog = false;
        this.isAddModal = false;
        this.editServiceForm = this.fb.group({
          price: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          duration: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user_id = sessionStorage.getItem("userId");
          this.getSalonService();
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.getSalonService();
        }
      }, {
        key: "confirm",
        value: function confirm(data) {
          this.isConfirm = data;
        }
      }, {
        key: "reject",
        value: function reject(data) {
          this.isConfirm = data;
          this.isDeleteDialog = false;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getSalonService",
        value: function getSalonService() {
          var _this35 = this;

          var dataToPass = {
            user_id: this.user_id,
            pageSize: this.count,
            page: this.page
          };
          this.commServ.getSalonServicesList(dataToPass).subscribe(function (data) {
            if (data["code"] == 200) {
              _this35.salonServicesList = data["data"].serviceList;
              _this35.salonServicesCount = data["data"].serviceCount;
              _this35.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this35.salonServicesList);
              _this35.dataSource.sort = _this35.sort;

              if (_this35.salonServicesList.length == 0) {
                _this35.noRecordsFound = true;
              }
            } else {
              _this35.noRecordsFound = false;

              _this35.toastrServ.error("Failed To Fetch Roles", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this35.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "deleteService",
        value: function deleteService(element, type) {
          var _this36 = this;

          this.SimpleModalService.addModal(_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmationDialogComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
          }).subscribe(function (isConfirmed) {
            if (isConfirmed === true) {
              var deletedData = {
                type: type,
                salonService: element
              };

              _this36.commServ.removeSalonService(deletedData).subscribe(function (data) {
                if (data["code"] == 200) {
                  _this36.getSalonService();

                  if (type == "restore") {
                    _this36.toastrServ.success("One Service restore successfully", "Success", {
                      timeOut: 2000
                    });
                  } else {
                    _this36.toastrServ.success("One Service remove successfully", "Success", {
                      timeOut: 2000
                    });
                  }
                } else {
                  _this36.noRecordsFound = false;

                  _this36.toastrServ.error("Failed To remove service", "Error", {
                    timeOut: 2000
                  });
                }
              }, function (error) {
                _this36.toastrServ.error("Server Error", error.error, {
                  timeOut: 2000
                });
              });
            }
          }); // this.getSalonService(this.user_id);
        }
      }, {
        key: "openEditServiceModal",
        value: function openEditServiceModal(element) {
          this.edit_servie_id = element._id;
          this.editServiceForm.get("price").setValue(element.price);
          this.editServiceForm.get("duration").setValue(element.duration);
          this.isAddModal = true;
          this.servcieData = element;
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isAddModal = false;
          this.editServiceForm.reset();
        }
      }, {
        key: "updateEmpService",
        value: function updateEmpService(data) {
          var _this37 = this;

          data.id = this.edit_servie_id;
          this.commServ.updateSalonService(data).subscribe(function (result) {
            if (result["code"] == 200) {
              _this37.getSalonService();

              _this37.isAddModal = false;

              _this37.toastrServ.success("One Service updated successfully", "Success", {
                timeOut: 2000
              });
            } else {
              _this37.noRecordsFound = false;

              _this37.toastrServ.error("Failed To update service", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this37.toastrServ.error("Server Error", error, {
              timeOut: 2000
            });
          });
        }
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_8__["SimpleModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSort"], {
      "static": false
    })], ServicesComponent.prototype, "sort", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-services",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/services/services.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.scss */
      "./src/app/salon/dashboard/services/services.component.scss"))["default"]]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/subscribe/subscribe.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/salon/dashboard/subscribe/subscribe.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardSubscribeSubscribeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subscribeWrapper {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.subscribeWrapper .card {\n  margin: 5px;\n  border: 1px solid lightgray;\n  box-shadow: 3px 4px 11px 1px lightgrey;\n  border-radius: 5px;\n  padding: 15px;\n  background: #fff;\n  border-color: transparent;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  height: auto;\n}\n.subscribeWrapper .card h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  float: left;\n}\n.subscribeWrapper .card h3 {\n  color: #783a87;\n  margin-top: 10px;\n}\n.subscribeWrapper .card p {\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n.subscribeWrapper .card .delete-btn {\n  position: absolute;\n  top: 11px;\n  right: 12px;\n}\n.subscribeWrapper .card-details .form {\n  display: flex;\n  flex-direction: column;\n}\n.card-details {\n  width: 35%;\n}\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.loader .loaderImage {\n  z-index: 9999;\n  width: 200px;\n  height: 200px;\n  background: transparent;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zdWJzY3JpYmUvc3Vic2NyaWJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ01GO0FETEU7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDTUo7QURMSTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNPTjtBRExJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDT047QURGSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSU47QURGSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNJTjtBREFJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDRU47QURFQTtFQUNFLFVBQUE7QUNDRjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFRjtBRERFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvc3Vic2NyaWJlL3N1YnNjcmliZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzY3JpYmVXcmFwcGVyIHtcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5jYXJkIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgYm94LXNoYWRvdzogM3B4IDRweCAxMXB4IDFweCBsaWdodGdyZXk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBoNCB7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICB9XG4gICAgaDMge1xuICAgICAgY29sb3I6ICM3ODNhODc7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgLy8gcmlnaHQ6IDE1cHg7XG4gICAgICAvLyB0b3A6IDEwcHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5kZWxldGUtYnRuIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTFweDtcbiAgICAgIHJpZ2h0OiAxMnB4O1xuICAgIH1cbiAgfVxuICAuY2FyZC1kZXRhaWxzIHtcbiAgICAuZm9ybSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gIH1cbn1cbi5jYXJkLWRldGFpbHMge1xuICB3aWR0aDogMzUlO1xufVxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLmxvYWRlckltYWdlIHtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxufVxuIiwiLnN1YnNjcmliZVdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zdWJzY3JpYmVXcmFwcGVyIC5jYXJkIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogM3B4IDRweCAxMXB4IDFweCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uc3Vic2NyaWJlV3JhcHBlciAuY2FyZCBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLnN1YnNjcmliZVdyYXBwZXIgLmNhcmQgaDMge1xuICBjb2xvcjogIzc4M2E4NztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zdWJzY3JpYmVXcmFwcGVyIC5jYXJkIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uc3Vic2NyaWJlV3JhcHBlciAuY2FyZCAuZGVsZXRlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogMTJweDtcbn1cbi5zdWJzY3JpYmVXcmFwcGVyIC5jYXJkLWRldGFpbHMgLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC1kZXRhaWxzIHtcbiAgd2lkdGg6IDM1JTtcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5sb2FkZXIgLmxvYWRlckltYWdlIHtcbiAgei1pbmRleDogOTk5OTtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/subscribe/subscribe.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/salon/dashboard/subscribe/subscribe.component.ts ***!
    \******************************************************************/

  /*! exports provided: SubscribeComponent */

  /***/
  function srcAppSalonDashboardSubscribeSubscribeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function () {
      return SubscribeComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _admin_admin_dashboard_admin_serv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../admin/admin-dashboard/admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js"); // import * as stripe from "stripe";
    // import * as elements from "elements";


    var SubscribeComponent = /*#__PURE__*/function () {
      function SubscribeComponent(adminServ, fb, commonServ, toastServ, router) {
        _classCallCheck(this, SubscribeComponent);

        this.adminServ = adminServ;
        this.fb = fb;
        this.commonServ = commonServ;
        this.toastServ = toastServ;
        this.router = router;
        this.loader = false;
        this.expiryPattern = "^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$";
        this.cardPattern = "/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35d{3})d{11}|62[0-9]{14})$/";
      }

      _createClass(SubscribeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.commonServ.getCustomer_id().subscribe(function (data) {
            _this38.customer_id = data;
          });
          this.commonServ.getSalon_id().subscribe(function (data) {
            _this38.salon_id = data;
          });
          this.getplanDetails();
          this.cardSave = this.fb.group({
            cardnumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            expiry: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.expiryPattern)]],
            cvv: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)])]
          });
        }
      }, {
        key: "buy",
        value: function buy(data) {
          this.plan_id = data["plan_id"];
          this.showEnterCardForm = true;
        }
      }, {
        key: "pay",
        value: function pay(data) {
          var _this39 = this;

          this.loader = true;
          this.month = data.expiry.slice(0, 2);
          this.year = data["expiry"].slice(2);
          var dataToPass = {
            number: data.cardnumber,
            exp_month: this.month,
            exp_year: this.year,
            cvc: data.cvv,
            customer_id: this.customer_id,
            plan_id: this.plan_id,
            salon_id: this.salon_id
          };
          this.commonServ.createToken(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this39.loader = false;

              _this39.toastServ.success("Subscribed Successfully", "Success", {
                timeOut: 1000
              });

              _this39.router.navigate(["/salon/home/profile"]);
            } else if (data["code"] === 400) {
              _this39.loader = false;

              _this39.toastServ.error("Failed To Subscribe", data["message"], {
                timeOut: 1000
              });
            } else {
              _this39.loader = false;

              _this39.toastServ.error("Failed To Subscribe", data["message"], {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this39.loader = false;

            _this39.toastServ.error("Server -Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "getplanDetails",
        value: function getplanDetails() {
          var _this40 = this;

          var dataToPass = {
            type: "plans"
          };
          this.adminServ.getPlans(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this40.planListArray = data["data"];

              if (_this40.planListArray.length === 0) {
                _this40.noRecordsFound = true;
              } else {
                _this40.noRecordsFound = false;
              }
            }
          });
        }
      }, {
        key: "cardnumber",
        get: function get() {
          return this.cardSave.get("cardnumber");
        }
      }, {
        key: "expiry",
        get: function get() {
          return this.cardSave.get("expiry");
        }
      }, {
        key: "cvv",
        get: function get() {
          return this.cardSave.get("cvv");
        }
      }, {
        key: "name",
        get: function get() {
          return this.cardSave.get("name");
        }
      }]);

      return SubscribeComponent;
    }();

    SubscribeComponent.ctorParameters = function () {
      return [{
        type: _admin_admin_dashboard_admin_serv_service__WEBPACK_IMPORTED_MODULE_3__["AdminServService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    SubscribeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-subscribe",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subscribe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/subscribe/subscribe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subscribe.component.scss */
      "./src/app/salon/dashboard/subscribe/subscribe.component.scss"))["default"]]
    })], SubscribeComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/subscription/subscription.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/salon/dashboard/subscription/subscription.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardSubscriptionSubscriptionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".subscriptionWrapper {\n  margin-top: 2.5em;\n}\n.subscriptionWrapper .mainSection .field {\n  display: flex;\n  align-items: center;\n  border: 1px solid lightgray;\n  padding: 10px;\n  border-radius: 10px;\n  background: white;\n}\n.subscriptionWrapper .mainSection .field .value {\n  margin-left: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvc3Vic2NyaXB0aW9uL3N1YnNjcmlwdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7QURDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNDTjtBRENNO0VBQ0UsZ0JBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN1YnNjcmlwdGlvbldyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbiAgLm1haW5TZWN0aW9uIHtcbiAgICAuZmllbGQge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICAgICAudmFsdWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLnN1YnNjcmlwdGlvbldyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAyLjVlbTtcbn1cbi5zdWJzY3JpcHRpb25XcmFwcGVyIC5tYWluU2VjdGlvbiAuZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuLnN1YnNjcmlwdGlvbldyYXBwZXIgLm1haW5TZWN0aW9uIC5maWVsZCAudmFsdWUge1xuICBtYXJnaW4tbGVmdDogMmVtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/subscription/subscription.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/salon/dashboard/subscription/subscription.component.ts ***!
    \************************************************************************/

  /*! exports provided: SubscriptionComponent */

  /***/
  function srcAppSalonDashboardSubscriptionSubscriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function () {
      return SubscriptionComponent;
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


    var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var SubscriptionComponent = /*#__PURE__*/function () {
      function SubscriptionComponent(commnServ, toastServ) {
        _classCallCheck(this, SubscriptionComponent);

        this.commnServ = commnServ;
        this.toastServ = toastServ;
      }

      _createClass(SubscriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.commnServ.getSalon_id().subscribe(function (data) {
            _this41.salon_id = data;

            _this41.getSalonSubscriptionDetails(_this41.salon_id);
          });
        }
      }, {
        key: "getSalonSubscriptionDetails",
        value: function getSalonSubscriptionDetails(data) {
          var _this42 = this;

          var dataToPass = {
            salon_id: data
          };
          this.commnServ.getSalonSubscriptionDetail(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this42.subscriptionDetails = data["data"][0];
              var months_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
              var expiryDate = new Date(_this42.subscriptionDetails.expiry_date * 1000);
              var expiry_year = expiryDate.getFullYear();
              var expiry_month = months_arr[expiryDate.getMonth()];
              var expiry_date = expiryDate.getDate();
              _this42.expirationDate = expiry_date + "-" + expiry_month + "-" + expiry_year;
              var susbcribedDate = new Date(_this42.subscriptionDetails.created_on * 1000);
              var subscribe_year = susbcribedDate.getFullYear();
              var subscribe_month = months_arr[susbcribedDate.getMonth()];
              var subscribe_date = susbcribedDate.getDate();
              _this42.subscriptionDate = subscribe_date + "-" + subscribe_month + "-" + subscribe_year;
            } else if (data["code"] === 400) {
              _this42.toastServ.error("Failed to fetch", data["message"], {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this42.toastServ.error("Server-Error", error.error, {
              timeOut: 1000
            });
          });
        }
      }]);

      return SubscriptionComponent;
    }();

    SubscriptionComponent.ctorParameters = function () {
      return [{
        type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-subscription",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subscription.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/subscription/subscription.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subscription.component.scss */
      "./src/app/salon/dashboard/subscription/subscription.component.scss"))["default"]]
    })], SubscriptionComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/timing/timing.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/salon/dashboard/timing/timing.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardTimingTimingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n \n  .chk-custom .custom-control-label:before {\n    background-color: transparent;\n    border: 2px solid;\n    border-radius: 2px;\n    border-style: solid;\n    -o-border-image: url('check-mark.svg');\n       border-image: url('check-box-empty.svg');\n    border-image-slice: 3;\n  }\n  \n  .chk-custom .custom-control-input:checked ~ .custom-control-label:after {\n    background-image: url('check-mark.svg');\n  }\n  \n  .chk-custom .custom-control-input:checked ~ .custom-control-label:before {\n    background-color: #fff;\n  }\n  \n  .chk-custom .text-darkblue {\n    color: #454F60;\n  }\n  \n  body .create-availabillity .table.table-custom tbody tr td {\n    border-top: none;\n    border-bottom: 1px solid transparent;\n    text-align: left;\n    letter-spacing: 0;\n    color: #454F60;\n    opacity: 1;\n    font-size: 14px;\n    padding-top: 15px;\n    padding-left: 40px;\n    padding-bottom: 15px;\n    padding-right: 40px;\n    vertical-align: middle;\n  }\n  \n  .check-spa-outer{\n    background: #FFFFFF;\n}\n  \n  .create-availabillity-inner{\n  min-height: 85px;\n  border-bottom: 1px solid #e1e1e1;\n  display: flex;\n  align-items: center;\n  padding-left: 40px;\n  display: flex;\n  justify-content: space-between;\n  padding-right: 40px;\n}\n  \n  .create-availabillity-inner h4{\n  font-size: 16px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #454F60;\n  opacity: 1;\n  font-weight: bold;\n  margin: 0;\n}\n  \n  /*# sourceMappingURL=style.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Fsb24vZGFzaGJvYXJkL3RpbWluZy90aW1pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUVFO0lBQ0UsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNDQUFnRTtPQUM3RCx3Q0FBa0U7SUFDckUscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsdUNBQWlFO0VBQ25FOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsc0JBQXNCO0VBQ3hCOztFQUNEO0lBQ0csbUJBQW1CO0FBQ3ZCOztFQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUdoQyxhQUFhO0VBR0wsbUJBQW1CO0VBQzNCLGtCQUFrQjtFQUNsQixhQUFhO0VBR0wsOEJBQThCO0VBQ3RDLG1CQUFtQjtBQUNyQjs7RUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7RUFDRSxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvdGltaW5nL3RpbWluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gXG4gIC5jaGstY3VzdG9tIC5jdXN0b20tY29udHJvbC1sYWJlbDpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIC1vLWJvcmRlci1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGVjay1tYXJrLnN2Z1wiKTtcbiAgICAgICBib3JkZXItaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hlY2stYm94LWVtcHR5LnN2Z1wiKTtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDM7XG4gIH1cbiAgXG4gIC5jaGstY3VzdG9tIC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2NoZWNrLW1hcmsuc3ZnXCIpO1xuICB9XG4gIFxuICAuY2hrLWN1c3RvbSAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIH1cbiAgXG4gIC5jaGstY3VzdG9tIC50ZXh0LWRhcmtibHVlIHtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgfVxuICBcbiAgYm9keSAuY3JlYXRlLWF2YWlsYWJpbGxpdHkgLnRhYmxlLnRhYmxlLWN1c3RvbSB0Ym9keSB0ciB0ZCB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICBjb2xvcjogIzQ1NEY2MDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG4gLmNoZWNrLXNwYS1vdXRlcntcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xufVxuLmNyZWF0ZS1hdmFpbGFiaWxsaXR5LWlubmVye1xuICBtaW4taGVpZ2h0OiA4NXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UxZTFlMTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiBmbGV4O1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGp1c3RpZnk7XG4gICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogNDBweDtcbn1cbi5jcmVhdGUtYXZhaWxhYmlsbGl0eS1pbm5lciBoNHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM0NTRGNjA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDA7XG59XG4gIC8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/timing/timing.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/salon/dashboard/timing/timing.component.ts ***!
    \************************************************************/

  /*! exports provided: TimingComponent */

  /***/
  function srcAppSalonDashboardTimingTimingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimingComponent", function () {
      return TimingComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TimingComponent = /*#__PURE__*/function () {
      function TimingComponent(authServ, fb, commServ, toastrServ, router, dialog) {
        _classCallCheck(this, TimingComponent);

        this.authServ = authServ;
        this.fb = fb;
        this.commServ = commServ;
        this.toastrServ = toastrServ;
        this.router = router;
        this.dialog = dialog;
        this.salonTiming = [];
        this.ishowTable = false;
        this.allDaysData = [{
          days: "Monday",
          opentime: "",
          closetime: "",
          status: false,
          order_sort: 1
        }, {
          days: "Tuesday",
          opentime: "",
          closetime: "",
          status: false,
          order_sort: 2
        }, {
          days: "Wednesday",
          opentime: "",
          closetime: "",
          status: false,
          order_sort: 3
        }, {
          days: "Thursday",
          opentime: "",
          closetime: "",
          status: false,
          order_sort: 4
        }, {
          days: "Friday",
          opentime: "",
          closetime: "",
          status: false,
          order_sort: 5
        }, {
          days: "Saturday",
          opentime: "",
          closetime: "",
          status: false,
          order_sort: 6
        }, {
          days: "Sunday",
          opentime: "",
          closetime: "",
          status: false,
          order_sort: 7
        }]; // this.timingForm = this.fb.group({
        //   daysData: this.fb.array([this.AllDays()])
        // });
      }

      _createClass(TimingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.user_id = sessionStorage.getItem("userId");
          this.getSalonData();
        }
      }, {
        key: "onOpenTimeSelect",
        value: function onOpenTimeSelect(event) {}
      }, {
        key: "onCloseTimeSelect",
        value: function onCloseTimeSelect(event) {}
      }, {
        key: "getSalonData",
        value: function getSalonData() {
          var _this43 = this;

          var data = {
            user_id: this.user_id
          };
          this.commServ.getSalonData(data).subscribe(function (responce) {
            if (responce.code === 200) {
              _this43.salonData = responce.data;

              _this43.getSalonTiming();
            } else {
              _this43.toastrServ.error("Invalid salon details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this43.toastrServ.error("Failed to get salon data", error, {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "saveTimingForm",
        value: function saveTimingForm() {
          var _this44 = this;

          // debugger;
          var dataToPass = {
            salon_id: this.salonData._id,
            user_id: this.user_id,
            daysData: this.allDaysData
          }; // dataToPass.salon_id =

          this.commServ.addSalonTIming(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this44.toastrServ.success("Salon timing Added", "Success", {
                timeOut: 2000
              });

              _this44.router.navigate(["salon/home/profile"]);
            } else {
              // this.isAddModal = true;
              _this44.toastrServ.error("Failed To Add", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this44.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "getSalonTiming",
        value: function getSalonTiming() {
          var _this45 = this;

          var dataToPass = {
            salon_id: this.salonData._id,
            user_id: this.user_id
          };
          this.commServ.getSalonTiming(dataToPass).subscribe(function (data) {
            if (data["code"] == 200) {
              if (data["data"].length === 0) {
                _this45.allDaysData;
              } else {
                var slotsArr = [];
                data["data"].forEach(function (element) {
                  var slots = {
                    days: element.days,
                    opentime: element.starttime,
                    closetime: element.endtime,
                    status: element.status,
                    order_sort: element.order_sort
                  };
                  slotsArr.push(slots);
                });
                _this45.allDaysData = slotsArr;
              }
            } else {
              _this45.toastrServ.error("Failed To Fetch Services", "Error", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this45.toastrServ.error("Server Error", error.error, {
              timeOut: 2000
            });
          });
        }
      }]);

      return TimingComponent;
    }();

    TimingComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }];
    };

    TimingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-timing",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/timing/timing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timing.component.css */
      "./src/app/salon/dashboard/timing/timing.component.css"))["default"]]
    })], TimingComponent);
    /***/
  },

  /***/
  "./src/app/salon/dashboard/transactions/transactions.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/salon/dashboard/transactions/transactions.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonDashboardTransactionsTransactionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.tablecustom {\n  padding-top: 2.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2Rhc2hib2FyZC90cmFuc2FjdGlvbnMvdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zYWxvbi9kYXNoYm9hcmQvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udGFibGVjdXN0b20ge1xuICBwYWRkaW5nLXRvcDogMi4zZW07XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udGFibGVjdXN0b20ge1xuICBwYWRkaW5nLXRvcDogMi4zZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/salon/dashboard/transactions/transactions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/salon/dashboard/transactions/transactions.component.ts ***!
    \************************************************************************/

  /*! exports provided: TransactionsComponent */

  /***/
  function srcAppSalonDashboardTransactionsTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
      return TransactionsComponent;
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


    var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../common.service */
    "./src/app/salon/dashboard/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var TransactionsComponent = /*#__PURE__*/function () {
      function TransactionsComponent(commnServ, toastServ) {
        _classCallCheck(this, TransactionsComponent);

        this.commnServ = commnServ;
        this.toastServ = toastServ;
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["onDate", "status"];
      }

      _createClass(TransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.commnServ.getSalon_id().subscribe(function (data) {
            sessionStorage.setItem("SalonID", data);
            _this46.salon_ID = sessionStorage.getItem("SalonID");

            _this46.getTransactionLists();
          });
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.getTransactionLists();
        }
      }, {
        key: "getTransactionLists",
        value: function getTransactionLists() {
          var _this47 = this;

          var dataToPass = {
            salon_id: this.salon_ID
          };
          this.commnServ.getTransactionsList(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this47.dataSource = data["data"]["data"];
              _this47.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this47.dataSource);
              _this47.dataSource.sort = _this47.sort;
              _this47.totalCount = data["data"]["count"];

              if (_this47.dataSource.length == 0) {
                _this47.noRecordsFound = true;
              } else {
                _this47.noRecordsFound = false;
              }
            } else if (data["code"] === 400) {
              _this47.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this47.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }]);

      return TransactionsComponent;
    }();

    TransactionsComponent.ctorParameters = function () {
      return [{
        type: _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": false
    })], TransactionsComponent.prototype, "sort", void 0);
    TransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-transactions",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./transactions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/dashboard/transactions/transactions.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./transactions.component.scss */
      "./src/app/salon/dashboard/transactions/transactions.component.scss"))["default"]]
    })], TransactionsComponent);
    /***/
  },

  /***/
  "./src/app/salon/login/login.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/salon/login/login.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSalonLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n\n.login-section-inner {\n  width: 595px;\n  min-height: 400px;\n  margin: 0 auto;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  position: relative;\n  /* padding: 25px 40px; */\n  display: flex;\n}\n\n.resetPassword {\n  background: white;\n  outline: none;\n  border: 0;\n  color: red;\n}\n\n.login-section-inner .login-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background: url('bg-left.png');\n  flex-direction: column;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.login-section-inner .login-left img {\n  width: 50%;\n}\n\n.login-right {\n  flex: 1;\n  padding: 0 0 20px 0;\n  padding: 25px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.headerText {\n  width: 100%;\n  color: #bc2e65;\n  font-size: 24px;\n  font-weight: 700;\n  height: 1em;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.login-section-inner label {\n  font-size: 15px;\n  color: #4d4d55;\n  font-family: \"Roboto\";\n}\n\n.login-section-inner input {\n  font-size: 13px;\n  border: 1px solid #d2d4df;\n  border-radius: 8px;\n  color: #9595a1;\n  height: 35px;\n  font-family: \"Roboto\";\n}\n\n.login-section-inner .btn-sign-in {\n  width: 100%;\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n\n.login-section-inner .btn-sign-in:hover {\n  /* background-position: right center; */\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n\n.login-section-inner .form-control:focus {\n  border-color: #9c3ee8;\n  outline: 0;\n  box-shadow: 0 0 0 0 #9c3ee8;\n}\n\n.login-section-inner .form-group {\n  margin-bottom: 10px;\n}\n\n.login-section-inner .btn-primary:not(:disabled):not(.disabled):active {\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n\n.sign-up {\n  font-size: 12px;\n  color: #4d4d55;\n  width: 100%;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  text-align: center;\n  padding-top: 10px;\n}\n\n.sign-up a {\n  color: #c92c5f;\n  text-decoration: none;\n  padding-left: 10px;\n}\n\n@media (max-width: 991px) {\n  .login-section-inner {\n    display: block;\n  }\n\n  .login-section-inner .login-left {\n    min-height: 225px;\n  }\n\n  .login-section-inner .login-left img {\n    width: 35%;\n  }\n}\n\n@media (max-width: 767px) {\n  .login-section {\n    align-items: inherit;\n  }\n}\n\n.erroralert {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n  position: relative;\n  padding: 5px 2px;\n  text-align: center;\n  margin-bottom: 10px;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL3NhbG9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zYWxvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNHRjs7QUREQTtFQUNFLFVBQUE7QUNJRjs7QURGQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNLRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ0tGOztBREhBO0VBQ0UsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0dBQUE7QUNLRjs7QURGQTtFQUNFLHVDQUFBO0VBQ0Esb0dBQUE7QUNLRjs7QURGQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FDS0Y7O0FESEE7RUFDRSxtQkFBQTtBQ01GOztBREhBO0VBQ0Usb0dBQUE7QUNNRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FESkE7RUFDRTtJQUNFLGNBQUE7RUNPRjs7RURMQTtJQUNFLGlCQUFBO0VDUUY7O0VETkE7SUFDRSxVQUFBO0VDU0Y7QUFDRjs7QURQQTtFQUNFO0lBQ0Usb0JBQUE7RUNTRjtBQUNGOztBRFBBO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUNTRiIsImZpbGUiOiJzcmMvYXBwL3NhbG9uL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luLXNlY3Rpb24taW5uZXIge1xyXG4gIHdpZHRoOiA1OTVweDtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5yZXNldFBhc3N3b3JkIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4ubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctbGVmdC5wbmcpO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4ubG9naW4tcmlnaHQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcclxuICBwYWRkaW5nOiAyNXB4IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJUZXh0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogI2JjMmU2NTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgaGVpZ2h0OiAxZW07XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tc2VjdGlvbi1pbm5lciBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjNGQ0ZDU1O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxufVxyXG4ubG9naW4tc2VjdGlvbi1pbm5lciBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ0ZGY7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGNvbG9yOiAjOTU5NWExO1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbn1cclxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWluIHtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJVxyXG4gICAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tc2lnbi1pbjpob3ZlciB7XHJcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyAqL1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJVxyXG4gICAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG59XHJcbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzljM2VlODtcclxuICBvdXRsaW5lOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIzljM2VlODtcclxufVxyXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuZm9ybS1ncm91cCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlXHJcbiAgICBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuLnNpZ24tdXAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzRkNGQ1NTtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4uc2lnbi11cCBhIHtcclxuICBjb2xvcjogcmdiKDIwMSwgNDQsIDk1KTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubG9naW4tc2VjdGlvbi1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQge1xyXG4gICAgbWluLWhlaWdodDogMjI1cHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAubG9naW4tc2VjdGlvbiB7XHJcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuLmVycm9yYWxlcnQge1xyXG4gIGNvbG9yOiAjNzIxYzI0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuIiwiLmxvZ2luLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gIHdpZHRoOiA1OTVweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnJlc2V0UGFzc3dvcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1sZWZ0LnBuZyk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5sb2dpbi1yaWdodCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhlYWRlclRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNiYzJlNjU7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzRkNGQ1NTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNGRmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjOTU5NWExO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXNpZ24taW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXNpZ24taW46aG92ZXIge1xuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7ICovXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM5YzNlZTg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIzljM2VlODtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuLnNpZ24tdXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGQ0ZDU1O1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNpZ24tdXAgYSB7XG4gIGNvbG9yOiAjYzkyYzVmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IHtcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcbiAgfVxuXG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5sb2dpbi1zZWN0aW9uIHtcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgfVxufVxuLmVycm9yYWxlcnQge1xuICBjb2xvcjogIzcyMWMyNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgYm9yZGVyLWNvbG9yOiAjZjVjNmNiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/salon/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/salon/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppSalonLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.service */
    "./src/app/salon/login/login.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _allserv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../allserv.service */
    "./src/app/allserv.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(toastServ, authServ, router, logServ, fb, allServ) {
        _classCallCheck(this, LoginComponent);

        this.toastServ = toastServ;
        this.authServ = authServ;
        this.router = router;
        this.logServ = logServ;
        this.fb = fb;
        this.allServ = allServ;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
        this.inputPattern = /^\S*$/;
        this.headerText = "Login";
        this.isLogin = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].env === "prod") {
            console.log(location.protocol);

            window.console.log = function () {};

            if (window) {
              window.console.log = function () {};
            }

            if (location.protocol === "http:") {
              console.log(":");
              window.location.href = location.href.replace("http", "https");
              console.log(window.location);
            }
          }

          this.salonLoginForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.inputPattern)])]
          });
          this.allServ.setRoute(this.router.url);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          this.router.navigate(["forget-password"]);
        }
        /**
         * Function is use to go to signup page
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "goToSignUp",
        value: function goToSignUp() {
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

      }, {
        key: "goToLogin",
        value: function goToLogin() {
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

      }, {
        key: "salonLogin",
        value: function salonLogin(data) {
          var _this48 = this;

          var dataToPass = {
            email: data.email,
            password: data.password,
            role: "salon"
          };
          this.logServ.loginSalon(dataToPass).subscribe(function (data) {
            if (data.code === 200) {
              _this48.toastServ.success("Logged In Successfully", "", {
                timeOut: 3000
              });

              _this48.userData = data.data;
              sessionStorage.setItem("isApproved", _this48.userData["userInfo"].isApproved);
              sessionStorage.setItem("email", _this48.userData["userInfo"]["email"]);
              sessionStorage.setItem("userId", data.data["userInfo"]["_id"]);
              sessionStorage.setItem("isSubmitted", _this48.userData["userInfo"].isSubmitted);

              _this48.authServ.sendIdS(data.data["userInfo"]["_id"]); //(data.data['userInfo']['_id']);


              _this48.authServ.sendToken(data.data.token);

              _this48.router.navigate(["salon/home"]);
            } else {
              _this48.toastServ.error("Invalid Login details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this48.toastServ.error("Failed to login", error.error, {
              timeOut: 3000
            });
          });
        }
        /**
         * Function is use to register salon
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "salonRegister",
        value: function salonRegister(data) {
          var _this49 = this;

          var dataToPass = {
            role: "salon",
            email: data.email,
            password: data.password
          };
          this.logServ.signUpSalon(dataToPass).subscribe(function (res) {
            if (res.code === 200) {
              _this49.toastServ.success("Registered Successfully", "Please Login", {
                timeOut: 3000
              });

              _this49.authServ.sendToken(res.data.token);
            } else if (res.code === 201) {
              _this49.toastServ.warning("User Already Exist", "Please Login", {
                timeOut: 3000
              });
            } else {
              _this49.toastServ.error("Failed to register", "Please try again", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this49.toastServ.error("Server - Error", error.error, {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "password",
        get: function get() {
          return this.salonLoginForm.get("password");
        }
      }, {
        key: "email",
        get: function get() {
          return this.salonLoginForm.get("email");
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _allserv_service__WEBPACK_IMPORTED_MODULE_7__["AllservService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/salon/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/salon/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/salon/salon-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/salon/salon-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: SalonRoutingModule */

  /***/
  function srcAppSalonSalonRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalonRoutingModule", function () {
      return SalonRoutingModule;
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


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/salon/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/salon/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/profile/profile.component */
    "./src/app/salon/dashboard/profile/profile.component.ts");
    /* harmony import */


    var _salon_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../salon/auth.guard */
    "./src/app/salon/auth.guard.ts");
    /* harmony import */


    var _salon_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../salon/auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard/booking/booking.component */
    "./src/app/salon/dashboard/booking/booking.component.ts");
    /* harmony import */


    var _dashboard_employee_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/employee/add-employee/add-employee.component */
    "./src/app/salon/dashboard/employee/add-employee/add-employee.component.ts");
    /* harmony import */


    var _dashboard_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboard/services/add-service/add-service.component */
    "./src/app/salon/dashboard/services/add-service/add-service.component.ts");
    /* harmony import */


    var _dashboard_timing_timing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dashboard/timing/timing.component */
    "./src/app/salon/dashboard/timing/timing.component.ts");
    /* harmony import */


    var _dashboard_salondetails_salondetails_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard/salondetails/salondetails.component */
    "./src/app/salon/dashboard/salondetails/salondetails.component.ts");
    /* harmony import */


    var _dashboard_editsalon_editsalon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboard/editsalon/editsalon.component */
    "./src/app/salon/dashboard/editsalon/editsalon.component.ts");
    /* harmony import */


    var _dashboard_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./dashboard/subscribe/subscribe.component */
    "./src/app/salon/dashboard/subscribe/subscribe.component.ts");
    /* harmony import */


    var _dashboard_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard/subscription/subscription.component */
    "./src/app/salon/dashboard/subscription/subscription.component.ts");
    /* harmony import */


    var _dashboard_promcode_promcode_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dashboard/promcode/promcode.component */
    "./src/app/salon/dashboard/promcode/promcode.component.ts");
    /* harmony import */


    var _dashboard_connect_account_connect_account_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./dashboard/connect-account/connect-account.component */
    "./src/app/salon/dashboard/connect-account/connect-account.component.ts");
    /* harmony import */


    var _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./dashboard/transactions/transactions.component */
    "./src/app/salon/dashboard/transactions/transactions.component.ts");

    var routes = [{
      path: "",
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "home",
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
      canActivate: [_salon_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      children: [{
        path: "profile",
        component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
      }, {
        path: "booking",
        component: _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_8__["BookingComponent"]
      }, {
        path: "details",
        component: _dashboard_salondetails_salondetails_component__WEBPACK_IMPORTED_MODULE_12__["SalondetailsComponent"]
      }, {
        path: "edit-salon",
        component: _dashboard_editsalon_editsalon_component__WEBPACK_IMPORTED_MODULE_13__["EditsalonComponent"]
      }, {
        path: "",
        redirectTo: "details",
        pathMatch: "full"
      }, {
        path: "add-employee",
        component: _dashboard_employee_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_9__["AddEmployeeComponent"]
      }, {
        path: "subscription",
        component: _dashboard_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__["SubscriptionComponent"]
      }, {
        path: "add-service",
        component: _dashboard_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_10__["AddServiceComponent"]
      }, {
        path: "timing",
        component: _dashboard_timing_timing_component__WEBPACK_IMPORTED_MODULE_11__["TimingComponent"]
      }, {
        path: "promocode",
        component: _dashboard_promcode_promcode_component__WEBPACK_IMPORTED_MODULE_16__["PromcodeComponent"]
      }, {
        path: "subscribe",
        component: _dashboard_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_14__["SubscribeComponent"]
      }, {
        path: "connect",
        component: _dashboard_connect_account_connect_account_component__WEBPACK_IMPORTED_MODULE_17__["ConnectAccountComponent"]
      }, {
        path: "transactions",
        component: _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_18__["TransactionsComponent"]
      }]
    }];

    var SalonRoutingModule = function SalonRoutingModule() {
      _classCallCheck(this, SalonRoutingModule);
    };

    SalonRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: [_salon_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _salon_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]]
    })], SalonRoutingModule);
    /***/
  },

  /***/
  "./src/app/salon/salon.module.ts":
  /*!***************************************!*\
    !*** ./src/app/salon/salon.module.ts ***!
    \***************************************/

  /*! exports provided: SalonModule */

  /***/
  function srcAppSalonSalonModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalonModule", function () {
      return SalonModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _salon_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./salon-routing.module */
    "./src/app/salon/salon-routing.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/salon/login/login.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/salon/dashboard/dashboard.component.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboard/profile/profile.component */
    "./src/app/salon/dashboard/profile/profile.component.ts");
    /* harmony import */


    var _dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dashboard/services/services.component */
    "./src/app/salon/dashboard/services/services.component.ts");
    /* harmony import */


    var _dashboard_employee_employee_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./dashboard/employee/employee.component */
    "./src/app/salon/dashboard/employee/employee.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! mat-select-autocomplete */
    "./node_modules/mat-select-autocomplete/fesm2015/mat-select-autocomplete.js");
    /* harmony import */


    var _dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./dashboard/footer/footer.component */
    "./src/app/salon/dashboard/footer/footer.component.ts");
    /* harmony import */


    var _dashboard_salon_header_salon_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./dashboard/salon-header/salon-header.component */
    "./src/app/salon/dashboard/salon-header/salon-header.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./dashboard/booking/booking.component */
    "./src/app/salon/dashboard/booking/booking.component.ts");
    /* harmony import */


    var _dashboard_employee_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./dashboard/employee/add-employee/add-employee.component */
    "./src/app/salon/dashboard/employee/add-employee/add-employee.component.ts");
    /* harmony import */


    var _dashboard_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./dashboard/services/add-service/add-service.component */
    "./src/app/salon/dashboard/services/add-service/add-service.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dashboard_timing_timing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./dashboard/timing/timing.component */
    "./src/app/salon/dashboard/timing/timing.component.ts");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ng-pick-datetime */
    "./node_modules/ng-pick-datetime/picker.js");
    /* harmony import */


    var _dashboard_salondetails_salondetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./dashboard/salondetails/salondetails.component */
    "./src/app/salon/dashboard/salondetails/salondetails.component.ts");
    /* harmony import */


    var _dashboard_editsalon_editsalon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./dashboard/editsalon/editsalon.component */
    "./src/app/salon/dashboard/editsalon/editsalon.component.ts");
    /* harmony import */


    var _dashboard_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./dashboard/subscribe/subscribe.component */
    "./src/app/salon/dashboard/subscribe/subscribe.component.ts");
    /* harmony import */


    var _dashboard_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./dashboard/subscription/subscription.component */
    "./src/app/salon/dashboard/subscription/subscription.component.ts");
    /* harmony import */


    var _dashboard_promcode_promcode_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./dashboard/promcode/promcode.component */
    "./src/app/salon/dashboard/promcode/promcode.component.ts");
    /* harmony import */


    var _dashboard_connect_account_connect_account_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./dashboard/connect-account/connect-account.component */
    "./src/app/salon/dashboard/connect-account/connect-account.component.ts");
    /* harmony import */


    var _dashboard_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./dashboard/confirmation-dialog/confirmation-dialog.component */
    "./src/app/salon/dashboard/confirmation-dialog/confirmation-dialog.component.ts");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */


    var _dashboard_google_searc_google_searc_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./dashboard/google-searc/google-searc.component */
    "./src/app/salon/dashboard/google-searc/google-searc.component.ts");
    /* harmony import */


    var _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./dashboard/transactions/transactions.component */
    "./src/app/salon/dashboard/transactions/transactions.component.ts"); // import { ManageServiceComponent } from './dashboard/manage-service/manage-service.component';
    // import { ManageEmployeeComponent } from './dashboard/manage-employee/manage-employee.component';


    var SalonModule = function SalonModule() {
      _classCallCheck(this, SalonModule);
    };

    SalonModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"], _dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"], _dashboard_employee_employee_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeComponent"], _dashboard_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _dashboard_salon_header_salon_header_component__WEBPACK_IMPORTED_MODULE_16__["SalonHeaderComponent"], _dashboard_booking_booking_component__WEBPACK_IMPORTED_MODULE_19__["BookingComponent"], _dashboard_employee_add_employee_add_employee_component__WEBPACK_IMPORTED_MODULE_20__["AddEmployeeComponent"], _dashboard_services_add_service_add_service_component__WEBPACK_IMPORTED_MODULE_21__["AddServiceComponent"], _dashboard_timing_timing_component__WEBPACK_IMPORTED_MODULE_23__["TimingComponent"], _dashboard_salondetails_salondetails_component__WEBPACK_IMPORTED_MODULE_26__["SalondetailsComponent"], _dashboard_editsalon_editsalon_component__WEBPACK_IMPORTED_MODULE_27__["EditsalonComponent"], _dashboard_subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_28__["SubscribeComponent"], _dashboard_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_29__["SubscriptionComponent"], _dashboard_promcode_promcode_component__WEBPACK_IMPORTED_MODULE_30__["PromcodeComponent"], _dashboard_connect_account_connect_account_component__WEBPACK_IMPORTED_MODULE_31__["ConnectAccountComponent"], _dashboard_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmationDialogComponent"], _dashboard_google_searc_google_searc_component__WEBPACK_IMPORTED_MODULE_34__["GoogleSearcComponent"], _dashboard_transactions_transactions_component__WEBPACK_IMPORTED_MODULE_35__["TransactionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _salon_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalonRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"], mat_select_autocomplete__WEBPACK_IMPORTED_MODULE_14__["SelectAutocompleteModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
        apiKey: "AIzaSyBtFviJz4HltgeXLEnK8p-sbztqf7fVfFg"
      }), ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_24__["NgxMaterialTimepickerModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__["OwlDateTimeModule"], ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__["OwlNativeDateTimeModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"].forRoot(), _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], ngx_simple_modal__WEBPACK_IMPORTED_MODULE_33__["SimpleModalModule"].forRoot({
        container: "modal-container"
      }), _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]],
      entryComponents: [_dashboard_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_32__["ConfirmationDialogComponent"]]
    })], SalonModule);
    /***/
  }
}]);
//# sourceMappingURL=app-salon-salon-module-es5.js.map