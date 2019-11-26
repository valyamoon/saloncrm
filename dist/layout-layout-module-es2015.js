(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n\n        <a routerLink=\"/lafiya/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Dashboard' }}</span>\n        </a>     \n\n        <a routerLink=\"/lafiya/calendar\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>calendar_today</mat-icon>\n            <span>{{ 'My Calendar' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/doctor-list\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>person</mat-icon>\n            <span>{{ 'Doctor List' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/appointments\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>today</mat-icon>\n            <span>{{ 'My Appointments' }}</span>\n        </a>\n\n        <a class=\"list-group-item side-panel\">            \n            <mat-icon>supervisor_account</mat-icon>\n            <span>{{ 'My Patients' }}</span>\n        </a>\n\n        <a routerLink=\"/lafiya/prescription\" class=\"list-group-item side-panel\">            \n            <mat-icon>supervised_user_circle</mat-icon>\n            <span>{{ 'Prescription Request' }}</span>\n        </a>\n\n        <a class=\"list-group-item side-panel\" *ngIf=\"menus?.soap_main_menu\">          \n            <mat-icon>note_add</mat-icon>\n            <span>{{ 'SOAP' }}</span>\n        </a>\n        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/reports-stats\" [routerLinkActive]=\"['router-link-active']\">\n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Stats' }}</span>\n        </a>\n                 \n         <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"SettingMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                    <mat-icon>settings</mat-icon>\n                    <span>{{ 'Settings' }}</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showSettingMenu === 'pages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/notification\" [routerLinkActive]=\"['router-link-active']\">\n                                <mat-icon>notifications</mat-icon>\n                                <span>{{ 'Notifications' }}</span>\n                            </a>\n                        </li>\n                       \n                        <li>\n                            <a routerLink=\"/lafiya/document\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">\n                                <mat-icon>assignment</mat-icon>\n                                <span>{{ 'My Documents' }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        \n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/header/header.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/header/header.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-header\">\n\n    <div class=\"admin-logo\">\n        <img src=\"../../../../assets/images/admin-logo.png\" alt=\"\">\n    </div>\n    <div class=\"admin-logo mobile-logo\">\n        <img src=\"../../../../assets/images/mobile-admin-logo.png\" alt=\"\">\n    </div>\n\n    <div class=\"user-options\">\n        <div class=\"toggle_buttons\">\n\n            <button class=\"btn toggle-button\">\n                <i class=\"material-icons\">\n                    menu\n                </i>\n            </button>\n        </div>\n\n        <ul class=\"user-profile\">\n            <li>\n                <div class=\"chat-area\">\n                    <img src=\"../../../../assets/images/ChatIcon.svg\" alt=\"\">\n                </div>\n            </li>\n            <li>\n                <div class=\"current-notificaiton\">\n                    <img src=\"../../../../assets/images/Notification.svg\" alt=\"\">\n                </div>\n            </li>\n            <li>\n                <div class=\"user-profile-setting\">\n                    <div class=\"dropdown\">\n                        <button *ngIf=\"doctor\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <span class=\"user-name\">Dr. David James</span>\n                            <span class=\"down-arrow fa fa-angle-down\"></span>\n                            <img src=\"../../../../assets/images/bg.png\" alt=\"\">\n                        </button>\n                        <button *ngIf=\"pharmacy\" class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <span class=\"user-name\">Dr. David James</span>\n                            <span class=\"down-arrow fa fa-angle-down\"></span>\n                            <img src=\"../../../../assets/images/pharmacy-icon.png\" alt=\"\">\n                        </button>\n                        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n                            <a class=\"dropdown-item\" routerLink=\"/lafiya/common-profile\">\n                                <mat-icon>perm_identity</mat-icon>\n                                <span>Profile Setting</span>\n                            </a>\n\n                            <a class=\"dropdown-item\" (click)=\"logoutProvider()\">\n                                <mat-icon>lock_open</mat-icon>\n                                <span>Log Out</span>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n\n        <a routerLink=\"/lafiya/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Dashboard' }}</span>\n        </a>     \n\n        <a routerLink=\"/lafiya/calendar\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>calendar_today</mat-icon>\n            <span>{{ 'My Calendar' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/doctor-list\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>person</mat-icon>\n            <span>{{ 'Doctor List' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/appointments\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>today</mat-icon>\n            <span>{{ 'My Appointments' }}</span>\n        </a>\n\n        <a class=\"list-group-item side-panel\">            \n            <mat-icon>supervisor_account</mat-icon>\n            <span>{{ 'My Patients' }}</span>\n        </a>\n\n        <a routerLink=\"/lafiya/prescription\" class=\"list-group-item side-panel\">            \n            <mat-icon>supervised_user_circle</mat-icon>\n            <span>{{ 'Prescription Request' }}</span>\n        </a>\n\n        <a class=\"list-group-item side-panel\" *ngIf=\"menus?.soap_main_menu\">          \n            <mat-icon>note_add</mat-icon>\n            <span>{{ 'SOAP' }}</span>\n        </a>\n        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/reports-stats\" [routerLinkActive]=\"['router-link-active']\">\n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Stats' }}</span>\n        </a>\n                 \n         <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"SettingMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                    <mat-icon>settings</mat-icon>\n                    <span>{{ 'Settings' }}</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showSettingMenu === 'pages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/notification\" [routerLinkActive]=\"['router-link-active']\">\n                                <mat-icon>notifications</mat-icon>\n                                <span>{{ 'Notifications' }}</span>\n                            </a>\n                        </li>\n                       \n                        <li>\n                            <a routerLink=\"/lafiya/document\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">\n                                <mat-icon>assignment</mat-icon>\n                                <span>{{ 'My Documents' }}</span>\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        \n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n\n        <a routerLink=\"/lafiya/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Dashboard' }}</span>\n        </a>     \n\n        <a routerLink=\"/lafiya/doctor-list\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>person</mat-icon>\n            <span>{{ 'Doctor List' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/appointments\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>today</mat-icon>\n            <span>{{ 'My Appointments' }}</span>\n        </a>\n                 \n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"SettingMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                <mat-icon>settings</mat-icon>\n                <span>{{ 'Settings' }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showSettingMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/notification\" [routerLinkActive]=\"['router-link-active']\">\n                            <mat-icon>notifications</mat-icon>\n                            <span>{{ 'Notifications' }}</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        \n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/patient-sidebar/patient-sidebar.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/patient-sidebar/patient-sidebar.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n\n        <a routerLink=\"/lafiya/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Dashboard' }}</span>\n        </a>     \n\n        <a routerLink=\"/lafiya/doctor-list\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>person</mat-icon>\n            <span>{{ 'Doctor List' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/my-appointments\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>today</mat-icon>\n            <span>{{ 'My Appointments' }}</span>\n        </a>\n                 \n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"SettingMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                <mat-icon>settings</mat-icon>\n                <span>{{ 'Settings' }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showSettingMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/notification\" [routerLinkActive]=\"['router-link-active']\">\n                            <mat-icon>notifications</mat-icon>\n                            <span>{{ 'Notifications' }}</span>\n                        </a>\n                    </li>\n                </ul>\n            </li>\n        </div>\n        \n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n\n        <a routerLink=\"/lafiya/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Dashboard' }}</span>\n        </a>\n\n        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/medicines-catalogue\" [routerLinkActive]=\"['router-link-active']\"> \n            <mat-icon>ballot</mat-icon>\n            <span>{{ 'Medicines Catalogue' }}</span>\n        </a>\n        <div class=\"nested-menu\">\n            <a class=\"list-group-item\" (click)=\"orderMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                <mat-icon>storage</mat-icon>\n                <span>{{ 'Orders' }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showOrderMenu === 'pages'\">\n                <ul class=\"submenu\">\n                    <li>\n                        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/view-prescription\" [routerLinkActive]=\"['router-link-active']\">\n                            <mat-icon>library_add</mat-icon>\n                            <span>{{ 'View Order Prescription' }}</span>\n                        </a>\n                    </li>\n                   \n                    <li>\n                            <a routerLink=\"/lafiya/request\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">\n                                <mat-icon>storefront</mat-icon>\n                                <span>{{ 'Refill Request' }}</span>\n                            </a>\n                    </li>\n\n                    <li>\n                        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/order-list\" [routerLinkActive]=\"['router-link-active']\">\n                            <mat-icon>storage</mat-icon>\n                            <span>{{ 'All Prescription Orders' }}</span>\n                        </a>\n                    </li>\n\n                    <li>\n                        <a routerLink=\"/lafiya/disputes\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\" >\n                            <mat-icon>shuffle</mat-icon>\n                            <span>{{ 'Disputes' }}</span>\n                        </a>\n                    </li>\n                </ul>\n        </div>\n        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/track-order\" [routerLinkActive]=\"['router-link-active']\">\n                <mat-icon>today</mat-icon>\n                <span class=\"wordbreak\">{{ 'Track Prescription order Calendar' }}</span>\n         </a>\n\n         <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/reports-stats\" [routerLinkActive]=\"['router-link-active']\">\n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Reports/Stats' }}</span>\n        </a>\n         <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"SettingMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                    <mat-icon>settings</mat-icon>\n                    <span>{{ 'Settings' }}</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showSettingMenu === 'pages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/notification\" [routerLinkActive]=\"['router-link-active']\">\n                                <mat-icon>notifications</mat-icon>\n                                <span>{{ 'Notifications' }}</span>\n                            </a>\n                        </li>\n                       \n                        <li>\n                                <a routerLink=\"/lafiya/document\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">\n                                    <mat-icon>assignment</mat-icon>\n                                    <span>{{ 'My Documents' }}</span>\n                                </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        \n    </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/components/sidebar/sidebar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/components/sidebar/sidebar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\"> -->\n    <template #sidebarcontainer>\n    </template>\n<!-- </nav> -->\n\n\n<!-- <nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive, collapsed: collapsed}\">\n    <div class=\"list-group\">\n\n        <a routerLink=\"/lafiya/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Dashboard' }}</span>\n        </a>\n\n        <a routerLink=\"/lafiya/common-profile\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">            \n            <mat-icon>person</mat-icon>\n            <span>{{ 'My Profile' }}</span>\n        </a> -->\n\n       \n<!-- \n        <a routerLink=\"/lafiya/calendar\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\" *ngIf=\"menus?.my_calendar_main_menu\">            \n            <mat-icon>calendar_today</mat-icon>\n            <span>{{ 'My Calendar' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/doctor-list\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\" *ngIf=\"menus?.doctor_list_main_menu\">            \n            <mat-icon>person</mat-icon>\n            <span>{{ 'Doctor List' }}</span>\n        </a>\n\n\n        <a routerLink=\"/lafiya/appointments\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\" *ngIf=\"menus?.my_appointments_main_menu\">            \n            <mat-icon>today</mat-icon>\n            <span>{{ 'My Appointments' }}</span>\n        </a> -->\n\n        <!-- <a routerLink=\"/lafiya/calendar\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\">\n            <mat-icon>today</mat-icon>\n            <span>{{ 'My Test' }}</span>\n        </a> -->\n\n        <!-- <a class=\"list-group-item side-panel\" *ngIf=\"menus?.my_patients_main_menu\">            \n            <mat-icon>supervisor_account</mat-icon>\n            <span>{{ 'My Patients' }}</span>\n        </a>\n\n        <a routerLink=\"/lafiya/prescription\" class=\"list-group-item side-panel\" *ngIf=\"menus?.prescription_request_main_menu\">            \n            <mat-icon>supervised_user_circle</mat-icon>\n            <span>{{ 'Prescription Request' }}</span>\n        </a>\n\n        <a class=\"list-group-item side-panel\" *ngIf=\"menus?.soap_main_menu\">          \n            <mat-icon>note_add</mat-icon>\n            <span>{{ 'SOAP' }}</span>\n        </a> -->\n        <!-- <a class=\"list-group-item side-panel\" *ngIf=\"menus?.stats_main_menu\"></a> -->\n        <!-- <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/reports-stats\" [routerLinkActive]=\"['router-link-active']\">\n            \n            <mat-icon>bar_chart</mat-icon>\n            <span>{{ 'Stats' }}</span>\n        </a> -->\n\n        <!-- <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/medicines-catalogue\" [routerLinkActive]=\"['router-link-active']\" *ngIf=\"menus?.medicines_catalogue_main_menu\"> \n            <mat-icon>ballot</mat-icon>\n            <span>{{ 'Medicines Catalogue' }}</span>\n        </a> -->\n        <!-- <div class=\"nested-menu\" *ngIf=\"menus?.orders_main_menu\">\n            <a class=\"list-group-item\" (click)=\"orderMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                <mat-icon>storage</mat-icon>\n                <span>{{ 'Orders' }}</span>\n            </a>\n            <li class=\"nested\" [class.expand]=\"showOrderMenu === 'pages'\">\n                <ul class=\"submenu\">\n\n                     <li>\n                        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/prescription\" [routerLinkActive]=\"['router-link-active']\">\n                            <mat-icon>library_add</mat-icon>\n                            <span>{{ 'Prescriptions' }}</span>\n                        </a>\n                    </li> \n\n                    <li>\n                        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/view-prescription\" [routerLinkActive]=\"['router-link-active']\">\n                            <mat-icon>library_add</mat-icon>\n                            <span>{{ 'View Order Prescription' }}</span>\n                        </a>\n                    </li>\n                   \n                    <li>\n                            <a routerLink=\"/lafiya/request\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\" *ngIf=\"menus?.my_document_main_menu\">\n                                <mat-icon>storefront</mat-icon>\n                                <span>{{ 'Refill Request' }}</span>\n                            </a>\n                    </li>\n\n                    <li>\n                        <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/order-list\" [routerLinkActive]=\"['router-link-active']\">\n                            <mat-icon>storage</mat-icon>\n                            <span>{{ 'All Prescription Orders' }}</span>\n                        </a>\n                    </li>\n\n                    <li>\n                            <a routerLink=\"/lafiya/disputes\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\" *ngIf=\"menus?.my_document_main_menu\">\n                                <mat-icon>shuffle</mat-icon>\n                                <span>{{ 'Disputes' }}</span>\n                            </a>\n                    </li>\n                </ul>\n            </li>\n        </div> -->\n        <!-- <a class=\"list-group-item side-panel\" *ngIf=\"menus?.track_prescription_order_calendar_main_menu\">\n                \n                <mat-icon>today</mat-icon>\n                <span class=\"wordbreak\">{{ 'Track Prescription order Calendar' }}</span>\n         </a>\n         <a class=\"list-group-item side-panel\" *ngIf=\"menus?.appointment_main_menu\">\n                <mat-icon>perm_contact_calendar</mat-icon>\n                <span>{{ 'Appointment' }}</span>\n         </a>         \n         <div class=\"nested-menu\">\n                <a class=\"list-group-item\" (click)=\"SettingMenu('pages')\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n                    <mat-icon class=\"down-arrow\">keyboard_arrow_down</mat-icon>\n                    <mat-icon>settings</mat-icon>\n                    <span>{{ 'Settings' }}</span>\n                </a>\n                <li class=\"nested\" [class.expand]=\"showSettingMenu === 'pages'\">\n                    <ul class=\"submenu\">\n                        <li>\n                            <a class=\"list-group-item side-panel\" routerLink=\"/lafiya/notification\" [routerLinkActive]=\"['router-link-active']\">\n                                <mat-icon>notifications</mat-icon>\n                                <span>{{ 'Notifications' }}</span>\n                            </a>\n                        </li>\n                       \n                        <li>\n                                <a routerLink=\"/lafiya/document\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item side-panel\" *ngIf=\"menus?.my_document_main_menu\">\n                                    <mat-icon>assignment</mat-icon>\n                                    <span>{{ 'My Documents' }}</span>\n                                </a>\n                        </li>\n                    </ul>\n                </li>\n            </div>\n        \n    </div> -->\n<!-- </nav>  -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/layout/layout.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar (collapsedEvent)=\"receiveCollapsed($event)\"></app-sidebar>\n<section class=\"main-container super-admin-layout\" [ngClass]=\"{collapsed: collapedSideBar}\">\n    <router-outlet></router-outlet>\n</section>\n"

/***/ }),

/***/ "./src/app/@core/guards/general.auth.guard.ts":
/*!****************************************************!*\
  !*** ./src/app/@core/guards/general.auth.guard.ts ***!
  \****************************************************/
/*! exports provided: AuthUserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthUserGuard", function() { return AuthUserGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _utils_string_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/string-constants */ "./src/app/@core/utils/string-constants.ts");




let AuthUserGuard = class AuthUserGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        // return this.checkLogin();
        if (localStorage.getItem(_utils_string_constants__WEBPACK_IMPORTED_MODULE_3__["StringConst"].CONSUMER_LOCAL_STORAGE_NAME)) {
            return true;
        }
        if (state.url.indexOf('/lafiya') !== -1) {
            this.router.navigate(['/']);
        }
        else {
            this.router.navigate(['/']);
        }
        return false;
    }
};
AuthUserGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthUserGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthUserGuard);



/***/ }),

/***/ "./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2RvY3Rvci1zaWRlYmFyL2RvY3Rvci1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.ts ***!
  \******************************************************************************/
/*! exports provided: DoctorSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorSidebarComponent", function() { return DoctorSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");




let DoctorSidebarComponent = class DoctorSidebarComponent {
    constructor(router, helperService, changeDetector) {
        this.router = router;
        this.helperService = helperService;
        this.changeDetector = changeDetector;
        this.sidebarhide = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngAfterContentChecked() {
        this.changeDetector.detectChanges();
    }
    SettingMenu(element) {
        if (element === this.showSettingMenu) {
            this.showSettingMenu = '0';
        }
        else {
            this.showSettingMenu = element;
        }
    }
    ngOnInit() {
        // this.helperService.getUserPermission().subscribe(permission => {
        //     const obj_menu: any = {};
        //     const list_controller: any = permission['data'].controller || [];
        //     const controller_actions: any = permission['data'].action_map || [];
        //     this.helperService.setChildPermission(controller_actions);
        //     if (_.contains(list_controller, 'my documents')) {
        //         obj_menu.my_document_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my appointments')) {
        //         obj_menu.my_appointments_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my calendar')) {
        //         obj_menu.my_calendar_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'doctor list')) {
        //         obj_menu.doctor_list_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my patients')) {
        //         obj_menu.my_patients_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'prescription request')) {
        //         obj_menu.prescription_request_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'soap')) {
        //         obj_menu.soap_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'stats')) {
        //         obj_menu.stats_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'user management')) {
        //         obj_menu.user_management_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'medicines catalogue')) {
        //         obj_menu.medicines_catalogue_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'orders')) {
        //         obj_menu.orders_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'track prescription order calendar')) {
        //         obj_menu.track_prescription_order_calendar_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'appointment')) {
        //         obj_menu.appointment_main_menu = true;
        //     }
        //     this.menus = obj_menu;
        // });
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    // changeLang(language: string) {
    //     this.translate.use(language);
    // }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
};
DoctorSidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DoctorSidebarComponent.prototype, "collapsedEvent", void 0);
DoctorSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-doctor-sidebar',
        template: __webpack_require__(/*! raw-loader!./doctor-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./doctor-sidebar.component.scss */ "./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], DoctorSidebarComponent);



/***/ }),

/***/ "./src/app/layout/components/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .navbar {\n  background-color: #006496;\n}\n:host .navbar .navbar-brand {\n  color: #fff;\n}\n:host .navbar .nav-item > a {\n  color: #999;\n}\n:host .navbar .nav-item > a:hover {\n  color: #fff;\n}\n:host .messages {\n  width: 300px;\n}\n:host .messages .media {\n  border-bottom: 1px solid #ddd;\n  padding: 5px 10px;\n}\n:host .messages .media:last-child {\n  border-bottom: none;\n}\n:host .messages .media-body h5 {\n  font-size: 13px;\n  font-weight: 600;\n}\n:host .messages .media-body .small {\n  margin: 0;\n}\n:host .messages .media-body .last {\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jham1vaGFuL0RheVVzZXIvc21hcnRkYXRhL01FQU4taG93ZGtpb3NrL1VJL3NyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHlCQUhrQjtBQ0UxQjtBREVRO0VBQ0ksV0FBQTtBQ0FaO0FERVE7RUFDSSxXQUFBO0FDQVo7QURDWTtFQUNJLFdBQUE7QUNDaEI7QURHSTtFQUNJLFlBQUE7QUNEUjtBREVRO0VBQ0ksNkJBQUE7RUFDQSxpQkFBQTtBQ0FaO0FEQ1k7RUFDSSxtQkFBQTtBQ0NoQjtBREdZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRGhCO0FER1k7RUFDSSxTQUFBO0FDRGhCO0FER1k7RUFDSSxlQUFBO0VBQ0EsU0FBQTtBQ0RoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkdG9wbmF2LWJhY2tncm91bmQtY29sb3I6ICMwMDY0OTY7XG46aG9zdCB7XG4gICAgLm5hdmJhciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BuYXYtYmFja2dyb3VuZC1jb2xvcjtcbiAgICAgICAgLm5hdmJhci1icmFuZCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAubmF2LWl0ZW0gPiBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1lc3NhZ2VzIHtcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAubWVkaWEge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWVkaWEtYm9keSB7XG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGwge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sYXN0IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4iLCI6aG9zdCAubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjQ5Njtcbn1cbjpob3N0IC5uYXZiYXIgLm5hdmJhci1icmFuZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgLm5hdmJhciAubmF2LWl0ZW0gPiBhIHtcbiAgY29sb3I6ICM5OTk7XG59XG46aG9zdCAubmF2YmFyIC5uYXYtaXRlbSA+IGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IC5tZXNzYWdlcyB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG46aG9zdCAubWVzc2FnZXMgLm1lZGlhOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IGg1IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuOmhvc3QgLm1lc3NhZ2VzIC5tZWRpYS1ib2R5IC5zbWFsbCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5tZXNzYWdlcyAubWVkaWEtYm9keSAubGFzdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/components/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/components/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
        this.doctor = false;
        this.pharmacy = false;
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    logoutProvider() {
    }
    ngOnInit() {
        this.pushRightClass = 'push-right';
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    ngAfterViewInit() {
        jquery__WEBPACK_IMPORTED_MODULE_2__('.toggle-button').click(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.sidebar').toggleClass('custom-sidebar');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.main-container').toggleClass('custom-main-container');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.admin-header').toggleClass('custom-admin-header');
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).resize(function () {
            const windowWidth = jquery__WEBPACK_IMPORTED_MODULE_2__(window).width();
            if (windowWidth < 993) {
                // console.log("widnow is resizing and current window width is " + windowWidth);
                jquery__WEBPACK_IMPORTED_MODULE_2__('.sidebar').toggleClass('custom-sidebar');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.main-container').toggleClass('custom-main-container');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.admin-header').toggleClass('custom-admin-header');
            }
            else {
                // console.log('no match');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.sidebar').removeClass('custom-sidebar');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.main-container').removeClass('custom-main-container');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.admin-header').removeClass('custom-admin-header');
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(window).on('load', function () {
            const windowWidth = jquery__WEBPACK_IMPORTED_MODULE_2__(window).width();
            if (windowWidth < 993) {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.sidebar').toggleClass('custom-sidebar');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.main-container').toggleClass('custom-main-container');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.admin-header').toggleClass('custom-admin-header');
            }
            else {
                // console.log('no match');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.sidebar').removeClass('custom-sidebar');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.main-container').removeClass('custom-main-container');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.admin-header').removeClass('custom-admin-header');
            }
        });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/components/header/header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL2hvc3BpdGFsLXNpZGViYXIvaG9zcGl0YWwtc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HospitalSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalSidebarComponent", function() { return HospitalSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HospitalSidebarComponent = class HospitalSidebarComponent {
    constructor(router, changeDetector) {
        this.router = router;
        this.changeDetector = changeDetector;
        this.sidebarhide = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngAfterContentChecked() {
        this.changeDetector.detectChanges();
    }
    SettingMenu(element) {
        if (element === this.showSettingMenu) {
            this.showSettingMenu = '0';
        }
        else {
            this.showSettingMenu = element;
        }
    }
    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    // changeLang(language: string) {
    //     this.translate.use(language);
    // }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
};
HospitalSidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HospitalSidebarComponent.prototype, "collapsedEvent", void 0);
HospitalSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hospital-sidebar',
        template: __webpack_require__(/*! raw-loader!./hospital-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./hospital-sidebar.component.scss */ "./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], HospitalSidebarComponent);



/***/ }),

/***/ "./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL25nby1zaWRlYmFyL25nby1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.ts ***!
  \************************************************************************/
/*! exports provided: NgoSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgoSidebarComponent", function() { return NgoSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let NgoSidebarComponent = class NgoSidebarComponent {
    constructor(router, changeDetector) {
        this.router = router;
        this.changeDetector = changeDetector;
        this.sidebarhide = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngAfterContentChecked() {
        this.changeDetector.detectChanges();
    }
    SettingMenu(element) {
        if (element === this.showSettingMenu) {
            this.showSettingMenu = '0';
        }
        else {
            this.showSettingMenu = element;
        }
    }
    ngOnInit() {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    // changeLang(language: string) {
    //     this.translate.use(language);
    // }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
};
NgoSidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NgoSidebarComponent.prototype, "collapsedEvent", void 0);
NgoSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ngo-sidebar',
        template: __webpack_require__(/*! raw-loader!./ngo-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./ngo-sidebar.component.scss */ "./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], NgoSidebarComponent);



/***/ }),

/***/ "./src/app/layout/components/patient-sidebar/patient-sidebar.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/patient-sidebar/patient-sidebar.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".timesline-seciton ul {\n  list-style: none;\n  padding: 0 0 0 50px;\n  margin: 0;\n  position: relative;\n}\n.timesline-seciton ul::before {\n  content: \"\";\n  left: 10px;\n  border: solid 1px #efefef;\n  height: 100%;\n  top: 10px;\n}\n.timesline-seciton ul li {\n  margin: 20px 0;\n  position: relative;\n}\n.timesline-seciton ul li::before {\n  position: absolute;\n  left: 0;\n  content: \"\";\n}\n.timeline {\n  list-style: none;\n  padding: 0px;\n  position: relative;\n}\n.timeline:before {\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 1px;\n  background-color: #E9E9F0;\n  left: 25px;\n  margin-right: -1.5px;\n  height: 285px;\n}\n.timeline > li {\n  margin-bottom: 30px;\n  position: relative;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li:before,\n.timeline > li:after {\n  content: \" \";\n  display: table;\n}\n.timeline > li:after {\n  clear: both;\n}\n.timeline > li > .timeline-panel {\n  width: calc( 100% - 75px);\n  float: right;\n  padding: 0px;\n  position: relative;\n}\n.timeline > li > .timeline-panel:after {\n  position: absolute;\n  top: 27px;\n  left: -14px;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-right: 14px solid #fff;\n  border-left: 0 solid #fff;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n.timeline > li > .timeline-badge {\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: -9px;\n  left: 25px;\n  margin-right: -25px;\n  z-index: 100;\n}\n.timeline > li.timeline-inverted > .timeline-panel {\n  float: left;\n}\n.timeline > li.timeline-inverted > .timeline-panel:before {\n  border-right-width: 0;\n  border-left-width: 15px;\n  right: -15px;\n  left: auto;\n}\n.timeline > li.timeline-inverted > .timeline-panel:after {\n  border-right-width: 0;\n  border-left-width: 14px;\n  right: -14px;\n  left: auto;\n}\n.timeline-badge.primary {\n  background-color: #2e6da4 !important;\n}\n.timeline-badge.success {\n  background-color: #3f903f !important;\n}\n.timeline-badge.warning {\n  background-color: #f0ad4e !important;\n}\n.timeline-badge.danger {\n  background-color: #d9534f !important;\n}\n.timeline-badge.info {\n  background-color: #5bc0de !important;\n}\n.timeline-title {\n  margin-top: 0;\n  color: inherit;\n  font-size: 13px;\n  color: #4D4F5C;\n  margin-bottom: 5px !important;\n}\n.boldText {\n  font-weight: bold !important;\n  color: #4D4F5C !important;\n  font-family: Source Sans Pro;\n}\n.textmuted {\n  color: rgba(77, 79, 92, 0.5);\n  font-size: 13px;\n}\n.timeline-body > p,\n.timeline-body > ul {\n  margin-bottom: 0;\n}\n.timeline-body > p + p {\n  margin-top: 5px;\n}\n.timeline-body {\n  display: none;\n}\n.timeline > li:not(.timeline-inverted) {\n  padding-right: 0px !important;\n}\n.copyright {\n  color: #BCBCCB;\n  font-size: 15px;\n  font-family: Open Sans;\n}\n.mtzero {\n  margin-top: 0 !important;\n  position: relative;\n  bottom: 20px;\n  margin-bottom: 55px !important;\n}\n.mb0 {\n  margin-bottom: 0 !important;\n}\n.ordered-position {\n  position: relative;\n  bottom: 20px;\n}\n.foot-chart {\n  position: relative;\n  top: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jham1vaGFuL0RheVVzZXIvc21hcnRkYXRhL01FQU4taG93ZGtpb3NrL1VJL3NyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvcGF0aWVudC1zaWRlYmFyL3BhdGllbnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2NvbXBvbmVudHMvcGF0aWVudC1zaWRlYmFyL3BhdGllbnQtc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQ1o7QURDUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FDRWhCO0FESUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7QUNESjtBRElBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUE7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FESUE7O0VBRUksWUFBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FESUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0FDREo7QURJQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtBQ0RKO0FESUE7RUFDSSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNESjtBRElBO0VBQ0kscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FDREo7QURJQTtFQUNJLG9DQUFBO0FDREo7QURJQTtFQUNJLG9DQUFBO0FDREo7QURJQTtFQUNJLG9DQUFBO0FDREo7QURJQTtFQUNJLG9DQUFBO0FDREo7QURJQTtFQUNJLG9DQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0RKO0FESUE7RUFDSSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7QUNESjtBRElBO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FDREo7QURJQTs7RUFFSSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7QUNESjtBRElBO0VBQ0ksNkJBQUE7QUNESjtBRElBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0RKO0FER0E7RUFBUSx3QkFBQTtFQUF3QixrQkFBQTtFQUM1QixZQUFBO0VBQ0EsOEJBQUE7QUNFSjtBRERBO0VBQUssMkJBQUE7QUNLTDtBREpBO0VBQWtCLGtCQUFBO0VBQW1CLFlBQUE7QUNTckM7QURSQTtFQUFZLGtCQUFBO0VBQW1CLFNBQUE7QUNhL0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29tcG9uZW50cy9wYXRpZW50LXNpZGViYXIvcGF0aWVudC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbWVzbGluZS1zZWNpdG9uIHtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIDUwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZWZlZmVmO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnRpbWVsaW5lIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aW1lbGluZTpiZWZvcmUge1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RTlGMDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTEuNXB4O1xuICAgIGhlaWdodDogMjg1cHg7XG59XG5cbi50aW1lbGluZT5saSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aW1lbGluZT5saTpiZWZvcmUsXG4udGltZWxpbmU+bGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmU+bGk6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmU+bGk6YmVmb3JlLFxuLnRpbWVsaW5lPmxpOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lPmxpOmFmdGVyIHtcbiAgICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lPmxpPi50aW1lbGluZS1wYW5lbCB7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA3NXB4KTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVsaW5lPmxpPi50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjdweDtcbiAgICBsZWZ0OiAtMTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDE0cHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItbGVmdDogMCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG59XG5cbi50aW1lbGluZT5saT4udGltZWxpbmUtYmFkZ2Uge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOXB4O1xuICAgIGxlZnQ6IDI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMjVweDtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi50aW1lbGluZT5saS50aW1lbGluZS1pbnZlcnRlZD4udGltZWxpbmUtcGFuZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG4udGltZWxpbmU+bGkudGltZWxpbmUtaW52ZXJ0ZWQ+LnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxNXB4O1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgICBsZWZ0OiBhdXRvO1xufVxuXG4udGltZWxpbmU+bGkudGltZWxpbmUtaW52ZXJ0ZWQ+LnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDE0cHg7XG4gICAgcmlnaHQ6IC0xNHB4O1xuICAgIGxlZnQ6IGF1dG87XG59XG5cbi50aW1lbGluZS1iYWRnZS5wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2ZGE0ICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBhZDRlICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS5kYW5nZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGYgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLmluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBjb2xvcjogIzRENEY1QztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmJvbGRUZXh0IHtcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNEQ0RjVDICFpbXBvcnRhbnQ7XG4gICAgZm9udC1mYW1pbHk6IFNvdXJjZSBTYW5zIFBybztcbn1cblxuLnRleHRtdXRlZCB7XG4gICAgY29sb3I6IHJnYmEoNzcsIDc5LCA5MiwgMC41KTtcbiAgICBmb250LXNpemU6IDEzcHg7XG59XG5cbi50aW1lbGluZS1ib2R5PnAsXG4udGltZWxpbmUtYm9keT51bCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRpbWVsaW5lLWJvZHk+cCtwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50aW1lbGluZS1ib2R5IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udGltZWxpbmU+bGk6bm90KC50aW1lbGluZS1pbnZlcnRlZCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgICBjb2xvcjogI0JDQkNDQjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucztcbn1cbi5tdHplcm97bWFyZ2luLXRvcDogMCFpbXBvcnRhbnQ7cG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1NXB4IWltcG9ydGFudDt9XG4ubWIwe21hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O31cbi5vcmRlcmVkLXBvc2l0aW9ue3Bvc2l0aW9uOiByZWxhdGl2ZTtib3R0b206IDIwcHg7fVxuLmZvb3QtY2hhcnR7cG9zaXRpb246IHJlbGF0aXZlO3RvcDogMTNweDt9XG4iLCIudGltZXNsaW5lLXNlY2l0b24gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwIDAgMCA1MHB4O1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50aW1lc2xpbmUtc2VjaXRvbiB1bDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgbGVmdDogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2VmZWZlZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDEwcHg7XG59XG4udGltZXNsaW5lLXNlY2l0b24gdWwgbGkge1xuICBtYXJnaW46IDIwcHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRpbWVzbGluZS1zZWNpdG9uIHVsIGxpOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi50aW1lbGluZSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGltZWxpbmU6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUU5RjA7XG4gIGxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1yaWdodDogLTEuNXB4O1xuICBoZWlnaHQ6IDI4NXB4O1xufVxuXG4udGltZWxpbmUgPiBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRpbWVsaW5lID4gbGk6YmVmb3JlLFxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbCB7XG4gIHdpZHRoOiBjYWxjKCAxMDAlIC0gNzVweCk7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI3cHg7XG4gIGxlZnQ6IC0xNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci10b3A6IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogMTRweCBzb2xpZCAjZmZmO1xuICBib3JkZXItbGVmdDogMCBzb2xpZCAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb250ZW50OiBcIiBcIjtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtYmFkZ2Uge1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTlweDtcbiAgbGVmdDogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjVweDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAxNXB4O1xuICByaWdodDogLTE1cHg7XG4gIGxlZnQ6IGF1dG87XG59XG5cbi50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLXBhbmVsOmFmdGVyIHtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICBib3JkZXItbGVmdC13aWR0aDogMTRweDtcbiAgcmlnaHQ6IC0xNHB4O1xuICBsZWZ0OiBhdXRvO1xufVxuXG4udGltZWxpbmUtYmFkZ2UucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTZkYTQgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLWJhZGdlLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y5MDNmICFpbXBvcnRhbnQ7XG59XG5cbi50aW1lbGluZS1iYWRnZS53YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwYWQ0ZSAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2UuZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZiAhaW1wb3J0YW50O1xufVxuXG4udGltZWxpbmUtYmFkZ2UuaW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1YmMwZGUgIWltcG9ydGFudDtcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM0RDRGNUM7XG4gIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYm9sZFRleHQge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRENEY1QyAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogU291cmNlIFNhbnMgUHJvO1xufVxuXG4udGV4dG11dGVkIHtcbiAgY29sb3I6IHJnYmEoNzcsIDc5LCA5MiwgMC41KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAsXG4udGltZWxpbmUtYm9keSA+IHVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRpbWVsaW5lLWJvZHkgPiBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRpbWVsaW5lLWJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udGltZWxpbmUgPiBsaTpub3QoLnRpbWVsaW5lLWludmVydGVkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY29weXJpZ2h0IHtcbiAgY29sb3I6ICNCQ0JDQ0I7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2Fucztcbn1cblxuLm10emVybyB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDU1cHggIWltcG9ydGFudDtcbn1cblxuLm1iMCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cblxuLm9yZGVyZWQtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogMjBweDtcbn1cblxuLmZvb3QtY2hhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/components/patient-sidebar/patient-sidebar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/components/patient-sidebar/patient-sidebar.component.ts ***!
  \********************************************************************************/
/*! exports provided: PatientSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientSidebarComponent", function() { return PatientSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");




let PatientSidebarComponent = class PatientSidebarComponent {
    constructor(router, helperService, changeDetector) {
        this.router = router;
        this.helperService = helperService;
        this.changeDetector = changeDetector;
        this.sidebarhide = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngAfterContentChecked() {
        this.changeDetector.detectChanges();
    }
    SettingMenu(element) {
        if (element === this.showSettingMenu) {
            this.showSettingMenu = '0';
        }
        else {
            this.showSettingMenu = element;
        }
    }
    ngOnInit() {
        // this.helperService.getUserPermission().subscribe(permission => {
        //     const obj_menu: any = {};
        //     const list_controller: any = permission['data'].controller || [];
        //     const controller_actions: any = permission['data'].action_map || [];
        //     this.helperService.setChildPermission(controller_actions);
        //     if (_.contains(list_controller, 'my documents')) {
        //         obj_menu.my_document_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my appointments')) {
        //         obj_menu.my_appointments_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my calendar')) {
        //         obj_menu.my_calendar_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'doctor list')) {
        //         obj_menu.doctor_list_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my patients')) {
        //         obj_menu.my_patients_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'prescription request')) {
        //         obj_menu.prescription_request_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'soap')) {
        //         obj_menu.soap_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'stats')) {
        //         obj_menu.stats_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'user management')) {
        //         obj_menu.user_management_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'medicines catalogue')) {
        //         obj_menu.medicines_catalogue_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'orders')) {
        //         obj_menu.orders_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'track prescription order calendar')) {
        //         obj_menu.track_prescription_order_calendar_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'appointment')) {
        //         obj_menu.appointment_main_menu = true;
        //     }
        //     this.menus = obj_menu;
        // });
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
};
PatientSidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PatientSidebarComponent.prototype, "collapsedEvent", void 0);
PatientSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patient-sidebar',
        template: __webpack_require__(/*! raw-loader!./patient-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/patient-sidebar/patient-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./patient-sidebar.component.scss */ "./src/app/layout/components/patient-sidebar/patient-sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], PatientSidebarComponent);



/***/ }),

/***/ "./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3BoYXJtYWN5LXNpZGViYXIvcGhhcm1hY3ktc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PharmacySidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PharmacySidebarComponent", function() { return PharmacySidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PharmacySidebarComponent = class PharmacySidebarComponent {
    constructor(router, helperService, changeDetector) {
        this.router = router;
        this.helperService = helperService;
        this.changeDetector = changeDetector;
        this.sidebarhide = false;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.router.events.subscribe(val => {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    ngAfterContentChecked() {
        this.changeDetector.detectChanges();
    }
    SettingMenu(element) {
        if (element === this.showSettingMenu) {
            this.showSettingMenu = '0';
        }
        else {
            this.showSettingMenu = element;
        }
    }
    orderMenu(element) {
        if (element === this.showOrderMenu) {
            this.showOrderMenu = '0';
        }
        else {
            this.showOrderMenu = element;
        }
    }
    ngOnInit() {
        // this.helperService.getUserPermission().subscribe(permission => {
        //     const obj_menu: any = {};
        //     const list_controller: any = permission['data'].controller || [];
        //     const controller_actions: any = permission['data'].action_map || [];
        //     this.helperService.setChildPermission(controller_actions);
        //     if (_.contains(list_controller, 'my documents')) {
        //         obj_menu.my_document_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my appointments')) {
        //         obj_menu.my_appointments_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my calendar')) {
        //         obj_menu.my_calendar_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'doctor list')) {
        //         obj_menu.doctor_list_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'my patients')) {
        //         obj_menu.my_patients_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'prescription request')) {
        //         obj_menu.prescription_request_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'soap')) {
        //         obj_menu.soap_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'stats')) {
        //         obj_menu.stats_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'user management')) {
        //         obj_menu.user_management_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'medicines catalogue')) {
        //         obj_menu.medicines_catalogue_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'orders')) {
        //         obj_menu.orders_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'track prescription order calendar')) {
        //         obj_menu.track_prescription_order_calendar_main_menu = true;
        //     }
        //     if (_.contains(list_controller, 'appointment')) {
        //         obj_menu.appointment_main_menu = true;
        //     }
        //     this.menus = obj_menu;
        // });
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    }
    toggleCollapsed() {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    }
    isToggled() {
        const dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }
    rltAndLtr() {
        const dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    }
    // changeLang(language: string) {
    //     this.translate.use(language);
    // }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
};
PharmacySidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PharmacySidebarComponent.prototype, "collapsedEvent", void 0);
PharmacySidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pharmacy-sidebar',
        template: __webpack_require__(/*! raw-loader!./pharmacy-sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.html"),
        styles: [__webpack_require__(/*! ./pharmacy-sidebar.component.scss */ "./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], PharmacySidebarComponent);



/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/components/sidebar/sidebar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _doctor_sidebar_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../doctor-sidebar/doctor-sidebar.component */ "./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.ts");
/* harmony import */ var _pharmacy_sidebar_pharmacy_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pharmacy-sidebar/pharmacy-sidebar.component */ "./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.ts");
/* harmony import */ var _patient_sidebar_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../patient-sidebar/patient-sidebar.component */ "./src/app/layout/components/patient-sidebar/patient-sidebar.component.ts");
/* harmony import */ var src_app_core_services_shared_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@core/services/shared.config */ "./src/app/@core/services/shared.config.ts");
/* harmony import */ var _hospital_sidebar_hospital_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hospital-sidebar/hospital-sidebar.component */ "./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.ts");
/* harmony import */ var _ngo_sidebar_ngo_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ngo-sidebar/ngo-sidebar.component */ "./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.ts");









let SidebarComponent = class SidebarComponent {
    constructor(helperService, resolver) {
        this.helperService = helperService;
        this.resolver = resolver;
        this.isLoading = false;
        this.config = new src_app_core_services_shared_config__WEBPACK_IMPORTED_MODULE_6__["SharedData"]();
    }
    ngOnInit() {
        this.helperService.getUserPermission().subscribe(response => {
            this.isLoading = true;
            this.roleType = response['data'].role_type ? response['data'].role_type : '';
            this.createComponent(this.config.decriptData(this.roleType));
        });
    }
    createComponent(role_type) {
        if (role_type === 'doctor') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(_doctor_sidebar_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["DoctorSidebarComponent"]);
            this.componentRef = this.entry.createComponent(factory);
            this.isLoading = false;
        }
        else if (role_type === 'pharmacy') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(_pharmacy_sidebar_pharmacy_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["PharmacySidebarComponent"]);
            this.componentRef = this.entry.createComponent(factory);
            this.isLoading = false;
        }
        else if (role_type === 'patient') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(_patient_sidebar_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["PatientSidebarComponent"]);
            this.componentRef = this.entry.createComponent(factory);
            this.isLoading = false;
        }
        else if (role_type === 'NGO') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(_ngo_sidebar_ngo_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["NgoSidebarComponent"]);
            this.componentRef = this.entry.createComponent(factory);
            this.isLoading = false;
        }
        else if (role_type === 'Hospital') {
            this.entry.clear();
            const factory = this.resolver.resolveComponentFactory(_hospital_sidebar_hospital_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["HospitalSidebarComponent"]);
            this.componentRef = this.entry.createComponent(factory);
            this.isLoading = false;
        }
    }
};
SidebarComponent.ctorParameters = () => [
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidebarcontainer', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
], SidebarComponent.prototype, "entry", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/layout/components/sidebar/sidebar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");




const routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/layout/dashboard/dashboard.module.ts")).then(m => m.DashboardModule) }
        ]
    }
];
let LayoutRoutingModule = class LayoutRoutingModule {
};
LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LayoutRoutingModule);



/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  -webkit-transition: margin-left 0.2s ease-in-out;\n  transition: margin-left 0.2s ease-in-out;\n}\n\n.main-container {\n  margin-top: 0px;\n  margin-left: 260px;\n  padding: 15px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: auto;\n  position: relative;\n  background: #F0F0F7;\n  height: 100%;\n}\n\n.collapsed {\n  margin-left: 100px;\n}\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 50px !important;\n  }\n}\n\n@media print {\n  .main-container {\n    margin-top: 0px !important;\n    margin-left: 0px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Jham1vaGFuL0RheVVzZXIvc21hcnRkYXRhL01FQU4taG93ZGtpb3NrL1VJL3NyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdEQUFBO0VBSUEsd0NBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJO0lBQ0ksNEJBQUE7RUNBTjtBQUNGOztBREdBO0VBQ0k7SUFDSSwwQkFBQTtJQUNBLDJCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgLW1vei10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1tcy10cmFuc2l0aW9uOiBtYXJnaW4tbGVmdCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI2MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLW1zLW92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kOiAjRjBGMEY3O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbGxhcHNlZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgcHJpbnQge1xuICAgIC5tYWluLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIioge1xuICAtd2Via2l0LXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luLWxlZnQgMC4ycyBlYXNlLWluLW91dDtcbiAgLW1zLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zaXRpb246IG1hcmdpbi1sZWZ0IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDI2MHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICAtbXMtb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI0YwRjBGNztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29sbGFwc2VkIHtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubWFpbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBwcmludCB7XG4gIC5tYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutComponent = class LayoutComponent {
    constructor() { }
    ngOnInit() {
    }
    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
};
LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/index.js!./src/app/layout/layout.component.html"),
        styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LayoutComponent);



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/layout/components/sidebar/sidebar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/layout/components/header/header.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _core_guards_general_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../@core/guards/general.auth.guard */ "./src/app/@core/guards/general.auth.guard.ts");
/* harmony import */ var _components_doctor_sidebar_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/doctor-sidebar/doctor-sidebar.component */ "./src/app/layout/components/doctor-sidebar/doctor-sidebar.component.ts");
/* harmony import */ var _components_pharmacy_sidebar_pharmacy_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pharmacy-sidebar/pharmacy-sidebar.component */ "./src/app/layout/components/pharmacy-sidebar/pharmacy-sidebar.component.ts");
/* harmony import */ var _components_patient_sidebar_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/patient-sidebar/patient-sidebar.component */ "./src/app/layout/components/patient-sidebar/patient-sidebar.component.ts");
/* harmony import */ var _components_ngo_sidebar_ngo_sidebar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/ngo-sidebar/ngo-sidebar.component */ "./src/app/layout/components/ngo-sidebar/ngo-sidebar.component.ts");
/* harmony import */ var _components_hospital_sidebar_hospital_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/hospital-sidebar/hospital-sidebar.component */ "./src/app/layout/components/hospital-sidebar/hospital-sidebar.component.ts");



















let LayoutModule = class LayoutModule {
};
LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"]
        ],
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_doctor_sidebar_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["DoctorSidebarComponent"],
            _components_pharmacy_sidebar_pharmacy_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["PharmacySidebarComponent"], _components_patient_sidebar_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["PatientSidebarComponent"], _components_ngo_sidebar_ngo_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["NgoSidebarComponent"], _components_hospital_sidebar_hospital_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["HospitalSidebarComponent"]],
        entryComponents: [
            _components_doctor_sidebar_doctor_sidebar_component__WEBPACK_IMPORTED_MODULE_14__["DoctorSidebarComponent"],
            _components_pharmacy_sidebar_pharmacy_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["PharmacySidebarComponent"],
            _components_patient_sidebar_patient_sidebar_component__WEBPACK_IMPORTED_MODULE_16__["PatientSidebarComponent"],
            _components_ngo_sidebar_ngo_sidebar_component__WEBPACK_IMPORTED_MODULE_17__["NgoSidebarComponent"],
            _components_hospital_sidebar_hospital_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["HospitalSidebarComponent"]
        ],
        providers: [
            _core_guards_general_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthUserGuard"]
        ]
    })
], LayoutModule);



/***/ })

}]);
//# sourceMappingURL=layout-layout-module-es2015.js.map