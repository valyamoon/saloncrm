(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-admin-admin-module~app-salon-salon-module~app-user-user-module"],{

/***/ "./src/app/admin/country.ts":
/*!**********************************!*\
  !*** ./src/app/admin/country.ts ***!
  \**********************************/
/*! exports provided: countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const countries = [
    { "name": "Afghanistan", "code": "93", "char": "AF" },
    { "name": "Albania", "code": "355", "char": "AL" },
    { "name": "Algeria", "code": "213", "char": "DZ" },
    { "name": "American Samoa", "code": "1684", "char": "AS" },
    { "name": "Andorra", "code": "376", "char": "AD" },
    { "name": "Angola", "code": "244", "char": "AO" },
    { "name": "Anguilla", "code": "1264", "char": "AI" },
    { "name": "Antigua and Barbuda", "code": "1268", "char": "AG" },
    { "name": "Argentina", "code": "54", "char": "AR" },
    { "name": "Armenia", "code": "374", "char": "AM" },
    { "name": "Aruba", "code": "297", "char": "AW" },
    { "name": "Australia", "code": "61", "char": "AU" },
    { "name": "Austria", "code": "43", "char": "AT" },
    { "name": "Azerbaijan", "code": "994", "char": "AZ" },
    { "name": "Bahrain", "code": "973", "char": "BH" },
    { "name": "Bangladesh", "code": "880", "char": "BD" },
    { "name": "Barbados", "code": "1246", "char": "BB" },
    { "name": "Belarus", "code": "375", "char": "BY" },
    { "name": "Belgium", "code": "32", "char": "BE" },
    { "name": "Belize", "code": "501", "char": "BZ" },
    { "name": "Benin", "code": "229", "char": "BJ" },
    { "name": "Bermuda", "code": "1441", "char": "BM" },
    { "name": "Bhutan", "code": "975", "char": "BT" },
    { "name": "Bolivia", "code": "591", "char": "BO" },
    { "name": "Bonaire", "code": "5997", "char": "BQ" },
    { "name": "Bosnia and Herzegovina", "code": "387", "char": "BA" },
    { "name": "Botswana", "code": "267", "char": "BW" },
    { "name": "Brazil", "code": "55", "char": "BR" },
    { "name": "British Indian Ocean Territory", "code": "246", "char": "IO" },
    { "name": "Brunei", "code": "673", "char": "BN" },
    { "name": "Bulgaria", "code": "359", "char": "BG" },
    { "name": "Burkina Faso", "code": "226", "char": "BF" },
    { "name": "Burundi", "code": "257", "char": "BI" },
    { "name": "Cambodia", "code": "855", "char": "KH" },
    { "name": "Cameroon", "code": "237", "char": "CM" },
    { "name": "Canada", "code": "1", "char": "CA" },
    { "name": "Cape Verde", "code": "238", "char": "CV" },
    { "name": "Cayman Islands", "code": "1345", "char": "KY" },
    { "name": "Central African Republic", "code": "236", "char": "CF" },
    { "name": "Chad", "code": "235", "char": "TD" },
    { "name": "Chile", "code": "56", "char": "CL" },
    { "name": "China", "code": "86", "char": "CN" },
    { "name": "Christmas Island", "code": "61", "char": "CX" },
    { "name": "Cocos (Keeling) Islands", "code": "61", "char": "CC" },
    { "name": "Colombia", "code": "57", "char": "CO" },
    { "name": "Comoros", "code": "269", "char": "KM" },
    { "name": "Cook Islands", "code": "682", "char": "CK" },
    { "name": "Costa Rica", "code": "506", "char": "CR" },
    { "name": "Croatia", "code": "385", "char": "HR" },
    { "name": "Cuba", "code": "53", "char": "CU" },
    { "name": "Curaçao", "code": "599", "char": "CW" },
    { "name": "Cyprus", "code": "357", "char": "CY" },
    { "name": "Czech Republic", "code": "420", "char": "CZ" },
    { "name": "Democratic Republic of the Congo", "code": "243", "char": "CD" },
    { "name": "Denmark", "code": "45", "char": "DK" },
    { "name": "Djibouti", "code": "253", "char": "DJ" },
    { "name": "Dominica", "code": "1767", "char": "DM" },
    { "name": "Dominican Republic", "code": "1809", "char": "DO" },
    { "name": "Ecuador", "code": "593", "char": "EC" },
    { "name": "Egypt", "code": "20", "char": "EG" },
    { "name": "El Salvador", "code": "503", "char": "SV" },
    { "name": "Equatorial Guinea", "code": "240", "char": "GQ" },
    { "name": "Eritrea", "code": "291", "char": "ER" },
    { "name": "Estonia", "code": "372", "char": "EE" },
    { "name": "Ethiopia", "code": "251", "char": "ET" },
    { "name": "East Timor", "code": "670", "char": "TL" },
    { "name": "Falkland Islands", "code": "500", "char": "FK" },
    { "name": "Faroe Islands", "code": "298", "char": "FO" },
    { "name": "Fiji", "code": "679", "char": "FJ" },
    { "name": "Finland", "code": "358", "char": "FI" },
    { "name": "France", "code": "33", "char": "FR" },
    { "name": "French Guiana", "code": "594", "char": "GF" },
    { "name": "French Polynesia", "code": "689", "char": "PF" },
    { "name": "Federated States of Micronesia", "code": "691", "char": "FM" },
    { "name": "Gabon", "code": "241", "char": "GA" },
    { "name": "Georgia", "code": "995", "char": "GE" },
    { "name": "Germany", "code": "49", "char": "DE" },
    { "name": "Ghana", "code": "233", "char": "GH" },
    { "name": "Gibraltar", "code": "350", "char": "GI" },
    { "name": "Greece", "code": "30", "char": "GR" },
    { "name": "Greenland", "code": "299", "char": "GL" },
    { "name": "Grenada", "code": "1473", "char": "GD" },
    { "name": "Guadeloupe", "code": "590", "char": "GP" },
    { "name": "Guam", "code": "1671", "char": "GU" },
    { "name": "Guatemala", "code": "502", "char": "GT" },
    { "name": "Guernsey", "code": "44", "char": "GG" },
    { "name": "Guinea", "code": "224", "char": "GN" },
    { "name": "Guinea-Bissau", "code": "245", "char": "GW" },
    { "name": "Guyana", "code": "592", "char": "GY" },
    { "name": "Haiti", "code": "509", "char": "HT" },
    { "name": "Holy See", "code": "379", "char": "VA" },
    { "name": "Honduras", "code": "504", "char": "HN" },
    { "name": "Hong Kong", "code": "852", "char": "HK" },
    { "name": "Hungary", "code": "36", "char": "HU" },
    { "name": "Iceland", "code": "354", "char": "IS" },
    { "name": "India", "code": "91", "char": "IN" },
    { "name": "Indonesia", "code": "62", "char": "ID" },
    { "name": "Ivory Coast", "code": "225", "char": "CI" },
    { "name": "Iran", "code": "98", "char": "IR" },
    { "name": "Iraq", "code": "964", "char": "IQ" },
    { "name": "Isle of Man", "code": "44", "char": "IM" },
    { "name": "Israel", "code": "972", "char": "IL" },
    { "name": "Italy", "code": "39", "char": "IT" },
    { "name": "Jamaica", "code": "1876", "char": "JM" },
    { "name": "Japan", "code": "81", "char": "JP" },
    { "name": "Jersey", "code": "44", "char": "JE" },
    { "name": "Jordan", "code": "962", "char": "JO" },
    { "name": "Kazakhstan", "code": "76", "char": "KZ" },
    { "name": "Kenya", "code": "254", "char": "KE" },
    { "name": "Kiribati", "code": "686", "char": "KI" },
    { "name": "Kuwait", "code": "965", "char": "KW" },
    { "name": "Kyrgyzstan", "code": "996", "char": "KG" },
    { "name": "Laos", "code": "856", "char": "LA" },
    { "name": "Latvia", "code": "371", "char": "LV" },
    { "name": "Lebanon", "code": "961", "char": "LB" },
    { "name": "Lesotho", "code": "266", "char": "LS" },
    { "name": "Liberia", "code": "231", "char": "LR" },
    { "name": "Libya", "code": "218", "char": "LY" },
    { "name": "Liechtenstein", "code": "423", "char": "LI" },
    { "name": "Lithuania", "code": "370", "char": "LT" },
    { "name": "Luxembourg", "code": "352", "char": "LU" },
    { "name": "Macau", "code": "853", "char": "MO" },
    { "name": "Madagascar", "code": "261", "char": "MG" },
    { "name": "Malawi", "code": "265", "char": "MW" },
    { "name": "Malaysia", "code": "60", "char": "MY" },
    { "name": "Maldives", "code": "960", "char": "MV" },
    { "name": "Mali", "code": "223", "char": "ML" },
    { "name": "Malta", "code": "356", "char": "MT" },
    { "name": "Marshall Islands", "code": "692", "char": "MH" },
    { "name": "Martinique", "code": "596", "char": "MQ" },
    { "name": "Mauritania", "code": "222", "char": "MR" },
    { "name": "Mauritius", "code": "230", "char": "MU" },
    { "name": "Mayotte", "code": "262", "char": "YT" },
    { "name": "Mexico", "code": "52", "char": "MX" },
    { "name": "Moldova", "code": "373", "char": "MD" },
    { "name": "Monaco", "code": "377", "char": "MC" },
    { "name": "Mongolia", "code": "976", "char": "MN" },
    { "name": "Montenegro", "code": "382", "char": "ME" },
    { "name": "Montserrat", "code": "1664", "char": "MS" },
    { "name": "Morocco", "code": "212", "char": "MA" },
    { "name": "Mozambique", "code": "258", "char": "MZ" },
    { "name": "Myanmar", "code": "95", "char": "MM" },
    { "name": "Namibia", "code": "264", "char": "NA" },
    { "name": "Nauru", "code": "674", "char": "NR" },
    { "name": "Nepal", "code": "977", "char": "NP" },
    { "name": "Netherlands", "code": "31", "char": "NL" },
    { "name": "New Caledonia", "code": "687", "char": "NC" },
    { "name": "New Zealand", "code": "64", "char": "NZ" },
    { "name": "Nicaragua", "code": "505", "char": "NI" },
    { "name": "Niger", "code": "227", "char": "NE" },
    { "name": "Nigeria", "code": "234", "char": "NG" },
    { "name": "Niue", "code": "683", "char": "NU" },
    { "name": "Norfolk Island", "code": "672", "char": "NF" },
    { "name": "North Korea", "code": "850", "char": "KP" },
    { "name": "Northern Mariana Islands", "code": "1670", "char": "MP" },
    { "name": "Norway", "code": "47", "char": "NO" },
    { "name": "Oman", "code": "968", "char": "OM" },
    { "name": "Pakistan", "code": "92", "char": "PK" },
    { "name": "Palau", "code": "680", "char": "PW" },
    { "name": "Palestine", "code": "970", "char": "PS" },
    { "name": "Panama", "code": "507", "char": "PA" },
    { "name": "Papua New Guinea", "code": "675", "char": "PG" },
    { "name": "Paraguay", "code": "595", "char": "PY" },
    { "name": "Peru", "code": "51", "char": "PE" },
    { "name": "Philippines", "code": "63", "char": "PH" },
    { "name": "Pitcairn Islands", "code": "64", "char": "PN" },
    { "name": "Poland", "code": "48", "char": "PL" },
    { "name": "Portugal", "code": "351", "char": "PT" },
    { "name": "Puerto Rico", "code": "1787", "char": "PR" },
    { "name": "Qatar", "code": "974", "char": "QA" },
    { "name": "Republic of the Congo", "code": "242", "char": "CG" },
    { "name": "Republic of Ireland", "code": "353", "char": "IE" },
    { "name": "Republic of Macedonia", "code": "389", "char": "MK" },
    { "name": "Republic of Kosovo", "code": "383", "char": "XK" },
    { "name": "Réunion", "code": "262", "char": "RE" },
    { "name": "Romania", "code": "40", "char": "RO" },
    { "name": "Russia", "code": "7", "char": "RU" },
    { "name": "Rwanda", "code": "250", "char": "RW" },
    { "name": "Saint Barthélemy", "code": "590", "char": "BL" },
    { "name": "Saint Helena", "code": "290", "char": "SH" },
    { "name": "Saint Kitts and Nevis", "code": "1869", "char": "KN" },
    { "name": "Saint Lucia", "code": "1758", "char": "LC" },
    { "name": "Saint Martin", "code": "590", "char": "MF" },
    { "name": "Saint Pierre and Miquelon", "code": "508", "char": "PM" },
    { "name": "Saint Vincent and the Grenadines", "code": "1784", "char": "VC" },
    { "name": "Samoa", "code": "685", "char": "WS" },
    { "name": "San Marino", "code": "378", "char": "SM" },
    { "name": "São Tomé and Príncipe", "code": "239", "char": "ST" },
    { "name": "Saudi Arabia", "code": "966", "char": "SA" },
    { "name": "Senegal", "code": "221", "char": "SN" },
    { "name": "Serbia", "code": "381", "char": "RS" },
    { "name": "Seychelles", "code": "248", "char": "SC" },
    { "name": "Sierra Leone", "code": "232", "char": "SL" },
    { "name": "Singapore", "code": "65", "char": "SG" },
    { "name": "Sint Maarten", "code": "1721", "char": "SX" },
    { "name": "Slovakia", "code": "421", "char": "SK" },
    { "name": "Slovenia", "code": "386", "char": "SI" },
    { "name": "Solomon Islands", "code": "677", "char": "SB" },
    { "name": "Somalia", "code": "252", "char": "SO" },
    { "name": "South Africa", "code": "27", "char": "ZA" },
    { "name": "South Georgia", "code": "500", "char": "GS" },
    { "name": "South Korea", "code": "82", "char": "KR" },
    { "name": "South Sudan", "code": "211", "char": "SS" },
    { "name": "Spain", "code": "34", "char": "ES" },
    { "name": "Sri Lanka", "code": "94", "char": "LK" },
    { "name": "Sudan", "code": "249", "char": "SD" },
    { "name": "Suriname", "code": "597", "char": "SR" },
    { "name": "Svalbard and Jan Mayen", "code": "4779", "char": "SJ" },
    { "name": "Swaziland", "code": "268", "char": "SZ" },
    { "name": "Sweden", "code": "46", "char": "SE" },
    { "name": "Switzerland", "code": "41", "char": "CH" },
    { "name": "Syria", "code": "963", "char": "SY" },
    { "name": "The Bahamas", "code": "1242", "char": "BS" },
    { "name": "The Gambia", "code": "220", "char": "GM" },
    { "name": "Taiwan", "code": "886", "char": "TW" },
    { "name": "Tajikistan", "code": "992", "char": "TJ" },
    { "name": "Tanzania", "code": "255", "char": "TZ" },
    { "name": "Thailand", "code": "66", "char": "TH" },
    { "name": "Togo", "code": "228", "char": "TG" },
    { "name": "Tokelau", "code": "690", "char": "TK" },
    { "name": "Tonga", "code": "676", "char": "TO" },
    { "name": "Trinidad and Tobago", "code": "1868", "char": "TT" },
    { "name": "Tunisia", "code": "216", "char": "TN" },
    { "name": "Turkey", "code": "90", "char": "TR" },
    { "name": "Turkmenistan", "code": "993", "char": "TM" },
    { "name": "Turks and Caicos Islands", "code": "1649", "char": "TC" },
    { "name": "Tuvalu", "code": "688", "char": "TV" },
    { "name": "Uganda", "code": "256", "char": "UG" },
    { "name": "Ukraine", "code": "380", "char": "UA" },
    { "name": "United Arab Emirates", "code": "971", "char": "AE" },
    { "name": "United Kingdom", "code": "44", "char": "GB" },
    { "name": "United States", "code": "1", "char": "US" },
    { "name": "Uruguay", "code": "598", "char": "UY" },
    { "name": "Uzbekistan", "code": "998", "char": "UZ" },
    { "name": "Virgin Islands (British)", "code": "1284", "char": "VG" },
    { "name": "Virgin Islands (U.S.)", "code": "1 340", "char": "VI" },
    { "name": "Vanuatu", "code": "678", "char": "VU" },
    { "name": "Venezuela", "code": "58", "char": "VE" },
    { "name": "Vietnam", "code": "84", "char": "VN" },
    { "name": "Wallis and Futuna", "code": "681", "char": "WF" },
    { "name": "Western Sahara", "code": "212", "char": "EH" },
    { "name": "Yemen", "code": "967", "char": "YE" },
    { "name": "Zambia", "code": "260", "char": "ZM" },
    { "name": "Zimbabwe", "code": "263", "char": "ZW" },
    { "name": "Åland Islands", "code": "358", "char": "AX" }
];


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



/***/ })

}]);
//# sourceMappingURL=default~app-admin-admin-module~app-salon-salon-module~app-user-user-module-es2015.js.map