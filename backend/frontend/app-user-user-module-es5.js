function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-user-user-module"], {
  /***/
  "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js ***!
    \**********************************************************************************/

  /*! exports provided: AutocompleteComponent, AutocompleteLibComponent, AutocompleteLibModule, HighlightPipe */

  /***/
  function node_modulesAngularNgAutocompleteFesm2015AngularNgAutocompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteComponent", function () {
      return AutocompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteLibComponent", function () {
      return AutocompleteLibComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteLibModule", function () {
      return AutocompleteLibModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HighlightPipe", function () {
      return HighlightPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete-lib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var AutocompleteLibComponent = /*#__PURE__*/function () {
      function AutocompleteLibComponent() {
        _classCallCheck(this, AutocompleteLibComponent);
      }
      /**
       * @return {?}
       */


      _createClass(AutocompleteLibComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AutocompleteLibComponent;
    }();

    AutocompleteLibComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ng-autocomplete-lib',
        template: "\n    <p>\n      autocomplete-lib works!\n    </p>\n  "
      }]
    }];
    /** @nocollapse */

    AutocompleteLibComponent.ctorParameters = function () {
      return [];
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete/autocomplete.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Keyboard events
     * @type {?}
     */


    var isArrowUp =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isArrowUp(keyCode) {
      return keyCode === 38;
    };

    var ɵ0 = isArrowUp;
    /** @type {?} */

    var isArrowDown =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isArrowDown(keyCode) {
      return keyCode === 40;
    };

    var ɵ1 = isArrowDown;
    /** @type {?} */

    var isArrowUpDown =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isArrowUpDown(keyCode) {
      return isArrowUp(keyCode) || isArrowDown(keyCode);
    };

    var ɵ2 = isArrowUpDown;
    /** @type {?} */

    var isEnter =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isEnter(keyCode) {
      return keyCode === 13;
    };

    var ɵ3 = isEnter;
    /** @type {?} */

    var isBackspace =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isBackspace(keyCode) {
      return keyCode === 8;
    };

    var ɵ4 = isBackspace;
    /** @type {?} */

    var isDelete =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isDelete(keyCode) {
      return keyCode === 46;
    };

    var ɵ5 = isDelete;
    /** @type {?} */

    var isESC =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isESC(keyCode) {
      return keyCode === 27;
    };

    var ɵ6 = isESC;
    /** @type {?} */

    var isTab =
    /**
    * @param {?} keyCode
    * @return {?}
    */
    function isTab(keyCode) {
      return keyCode === 9;
    };

    var ɵ7 = isTab;

    var AutocompleteComponent = /*#__PURE__*/function () {
      /**
       * @param {?} elementRef
       * @param {?} renderer
       */
      function AutocompleteComponent(elementRef, renderer) {
        _classCallCheck(this, AutocompleteComponent);

        this.renderer = renderer; // input events

        this.query = ''; // search query
        // search query

        this.filteredList = []; // list of items
        // list of items

        this.historyList = []; // list of history items
        // list of history items

        this.isHistoryListVisible = true;
        this.selectedIdx = -1;
        this.toHighlight = '';
        this.notFound = false;
        this.isFocused = false;
        this.isOpen = false;
        this.isScrollToEnd = false;
        this.overlay = false;
        this.manualOpen = undefined;
        this.manualClose = undefined; // @Inputs

        /**
         * Data of items list.
         * It can be array of strings or array of objects.
         */

        this.data = []; // keyword to filter the list

        this.placeHolder = ''; // input placeholder
        // input placeholder

        this.heading = '';
        /**
         * Heading text of history list.
         * If it is null then history heading is hidden.
         */

        this.historyHeading = 'Recently selected';
        this.historyListMaxNumber = 15; // maximum number of items in the history list.
        // maximum number of items in the history list.

        this.notFoundText = 'Not found'; // set custom text when filter returns empty result
        // input disable/enable

        /**
         * The minimum number of characters the user must type before a search is performed.
         */

        this.minQueryLength = 1; // @Output events

        /**
         * Event that is emitted whenever an item from the list is selected.
         */

        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is changed.
         */

        this.inputChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is focused.
         */

        this.inputFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted whenever an input is cleared.
         */

        this.inputCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is opened.
         */

        this.opened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when the autocomplete panel is closed.
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event that is emitted when scrolled to the end of items.
         */

        this.scrolledToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Propagates new value when model changes
         */

        this.propagateChange =
        /**
        * @return {?}
        */
        function () {};

        this.elementRef = elementRef;
      }
      /**
       * Writes a new value from the form model into the view,
       * Updates model
       * @param {?} value
       * @return {?}
       */


      _createClass(AutocompleteComponent, [{
        key: "writeValue",
        value: function writeValue(value) {
          this.query = value;
        }
        /**
         * Registers a handler that is called when something in the view has changed
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.propagateChange = fn;
        }
        /**
         * Registers a handler specifically for when a control receives a touch event
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {}
        /**
         * Event that is called when the value of an input element is changed
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange(event) {
          this.propagateChange(event.target.value);
        }
        /**
         * Event that is called when the control status changes to or from DISABLED
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setInitialValue(this.initialValue);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.initEventStream();
          this.handleScroll();
        }
        /**
         * Set initial value
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setInitialValue",
        value: function setInitialValue(value) {
          if (this.initialValue) {
            this.select(value);
          }
        }
        /**
         * Update search results
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes && changes.data && Array.isArray(changes.data.currentValue)) {
            this.handleItemsChange();

            if (!changes.data.firstChange && this.isFocused) {
              this.handleOpen();
            }
          }
        }
        /**
         * Items change
         * @return {?}
         */

      }, {
        key: "handleItemsChange",
        value: function handleItemsChange() {
          this.isScrollToEnd = false;

          if (!this.isOpen) {
            return;
          }

          this.filteredList = this.data;
          this.notFound = !this.filteredList || this.filteredList.length === 0;
        }
        /**
         * Filter data
         * @return {?}
         */

      }, {
        key: "filterList",
        value: function filterList() {
          var _this = this;

          this.selectedIdx = -1;
          this.initSearchHistory();

          if (this.query != null && this.data) {
            this.toHighlight = this.query;
            this.filteredList = this.data.filter(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              if (typeof item === 'string') {
                // string logic, check equality of strings
                return item.toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
              } else if (typeof item === 'object' && item.constructor === Object) {
                // object logic, check property equality
                return item[_this.searchKeyword].toLowerCase().indexOf(_this.query.toLowerCase()) > -1;
              }
            });
          } else {
            this.notFound = false;
          }
        }
        /**
         * Check type of item in the list.
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "isType",
        value: function isType(item) {
          return typeof item === 'string';
        }
        /**
         * Select item in the list.
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          var _this2 = this;

          this.query = !this.isType(item) ? item[this.searchKeyword] : item;
          this.isOpen = true;
          this.overlay = false;
          this.selected.emit(item);
          this.propagateChange(item);

          if (this.initialValue) {
            // check if history already exists in localStorage and then update

            /** @type {?} */
            var history = window.localStorage.getItem("".concat(this.historyIdentifier));

            if (history) {
              /** @type {?} */
              var existingHistory = JSON.parse(localStorage["".concat(this.historyIdentifier)]);
              if (!(existingHistory instanceof Array)) existingHistory = []; // check if selected item exists in existingHistory

              if (!existingHistory.some(
              /**
              * @param {?} existingItem
              * @return {?}
              */
              function (existingItem) {
                return !_this2.isType(existingItem) ? existingItem[_this2.searchKeyword] == item[_this2.searchKeyword] : existingItem == item;
              })) {
                existingHistory.unshift(item);
                localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory)); // check if items don't exceed max allowed number

                if (existingHistory.length >= this.historyListMaxNumber) {
                  existingHistory.splice(existingHistory.length - 1, 1);
                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(existingHistory));
                }
              } else {
                // if selected item exists in existingHistory swap to top in array
                if (!this.isType(item)) {
                  // object logic

                  /** @type {?} */
                  var copiedExistingHistory = existingHistory.slice(); // copy original existingHistory array

                  /** @type {?} */

                  var selectedIndex = copiedExistingHistory.map(
                  /**
                  * @param {?} el
                  * @return {?}
                  */
                  function (el) {
                    return el[_this2.searchKeyword];
                  }).indexOf(item[this.searchKeyword]);
                  copiedExistingHistory.splice(selectedIndex, 1);
                  copiedExistingHistory.splice(0, 0, item);
                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(copiedExistingHistory));
                } else {
                  // string logic

                  /** @type {?} */
                  var _copiedExistingHistory = existingHistory.slice();

                  _copiedExistingHistory.splice(_copiedExistingHistory.indexOf(item), 1);

                  _copiedExistingHistory.splice(0, 0, item);

                  localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(_copiedExistingHistory));
                }
              }
            } else {
              this.saveHistory(item);
            }
          } else {
            this.saveHistory(item);
          }

          this.handleClose();
        }
        /**
         * Document click
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "handleClick",
        value: function handleClick(e) {
          /** @type {?} */
          var clickedComponent = e.target;
          /** @type {?} */

          var inside = false;

          do {
            if (clickedComponent === this.elementRef.nativeElement) {
              inside = true;

              if (this.filteredList.length) {
                this.handleOpen();
              }
            }

            clickedComponent = clickedComponent.parentNode;
          } while (clickedComponent);

          if (!inside) {
            this.handleClose();
          }
        }
        /**
         * Handle body overlay
         * @return {?}
         */

      }, {
        key: "handleOverlay",
        value: function handleOverlay() {
          this.overlay = false;
        }
        /**
         * Scroll items
         * @return {?}
         */

      }, {
        key: "handleScroll",
        value: function handleScroll() {
          var _this3 = this;

          this.renderer.listen(this.filteredListElement.nativeElement, 'scroll',
          /**
          * @return {?}
          */
          function () {
            _this3.scrollToEnd();
          });
        }
        /**
         * Define panel state
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "setPanelState",
        value: function setPanelState(event) {
          if (event) {
            event.stopPropagation();
          } // If controls are untouched


          if (typeof this.manualOpen === 'undefined' && typeof this.manualClose === 'undefined') {
            this.isOpen = false;
            this.handleOpen();
          } // If one of the controls is untouched and other is deactivated


          if (typeof this.manualOpen === 'undefined' && this.manualClose === false || typeof this.manualClose === 'undefined' && this.manualOpen === false) {
            this.isOpen = false;
            this.handleOpen();
          } // if controls are touched but both are deactivated


          if (this.manualOpen === false && this.manualClose === false) {
            this.isOpen = false;
            this.handleOpen();
          } // if open control is touched and activated


          if (this.manualOpen) {
            this.isOpen = false;
            this.handleOpen();
            this.manualOpen = false;
          } // if close control is touched and activated


          if (this.manualClose) {
            this.isOpen = true;
            this.handleClose();
            this.manualClose = false;
          }
        }
        /**
         * Manual controls
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          this.manualOpen = true;
          this.isOpen = false;
          this.handleOpen();
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          this.manualClose = true;
          this.isOpen = true;
          this.handleClose();
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          this.handleFocus(event);
        }
        /**
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this.remove(event);
        }
        /**
         * Remove search query
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove(e) {
          e.stopPropagation();
          this.query = '';
          this.inputCleared.emit();
          this.propagateChange(this.query);
          this.setPanelState(e);
        }
        /**
         * Initialize historyList search
         * @return {?}
         */

      }, {
        key: "initSearchHistory",
        value: function initSearchHistory() {
          this.isHistoryListVisible = false;

          if (this.historyIdentifier && !this.query) {
            /** @type {?} */
            var history = window.localStorage.getItem("".concat(this.historyIdentifier));

            if (history) {
              this.isHistoryListVisible = true;
              this.filteredList = [];
              this.historyList = history ? JSON.parse(history) : [];
            } else {
              this.isHistoryListVisible = false;
            }
          } else {
            this.isHistoryListVisible = false;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleOpen",
        value: function handleOpen() {
          if (this.isOpen || this.isOpen && !this.isLoading) {
            return;
          } // If data exists


          if (this.data && this.data.length) {
            this.isOpen = true;
            this.overlay = true;
            this.filterList();
            this.opened.emit();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleClose",
        value: function handleClose() {
          if (!this.isOpen) {
            this.isFocused = false;
            return;
          }

          this.isOpen = false;
          this.overlay = false;
          this.filteredList = [];
          this.selectedIdx = -1;
          this.notFound = false;
          this.isHistoryListVisible = false;
          this.isFocused = false;
          this.closed.emit();
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleFocus",
        value: function handleFocus(e) {
          this.searchInput.nativeElement.focus();

          if (this.isFocused) {
            return;
          }

          this.inputFocused.emit(e); // if data exists then open

          if (this.data && this.data.length) {
            this.setPanelState(event);
          }

          this.isFocused = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "scrollToEnd",
        value: function scrollToEnd() {
          if (this.isScrollToEnd) {
            return;
          }
          /** @type {?} */


          var scrollTop = this.filteredListElement.nativeElement.scrollTop;
          /** @type {?} */

          var scrollHeight = this.filteredListElement.nativeElement.scrollHeight;
          /** @type {?} */

          var elementHeight = this.filteredListElement.nativeElement.clientHeight;
          /** @type {?} */

          var atBottom = scrollHeight === scrollTop + elementHeight;

          if (atBottom) {
            this.scrolledToEnd.emit();
            this.isScrollToEnd = true;
          }
        }
        /**
         * Initialize keyboard events
         * @return {?}
         */

      }, {
        key: "initEventStream",
        value: function initEventStream() {
          this.inputKeyUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e;
          }));
          this.inputKeyDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.searchInput.nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e;
          }));
          this.listenEventStream();
        }
        /**
         * Listen keyboard events
         * @return {?}
         */

      }, {
        key: "listenEventStream",
        value: function listenEventStream() {
          var _this4 = this;

          // key up event
          this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return !isArrowUpDown(e.keyCode) && !isEnter(e.keyCode) && !isESC(e.keyCode) && !isTab(e.keyCode);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(this.debounceTime)).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this4.onKeyUp(e);
          }); // cursor up & down

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isArrowUpDown(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            e.preventDefault();

            _this4.onFocusItem(e);
          }); // enter keyup

          this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isEnter(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {//this.onHandleEnter();
          }); // enter keydown

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isEnter(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this4.onHandleEnter();
          }); // ESC

          this.inputKeyUp$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isESC(e.keyCode);
          }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100))).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this4.onEsc();
          }); // TAB

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isTab(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this4.onTab();
          }); // delete

          this.inputKeyDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return isBackspace(e.keyCode) || isDelete(e.keyCode);
          })).subscribe(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            _this4.onDelete();
          });
        }
        /**
         * on keyup == when input changed
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "onKeyUp",
        value: function onKeyUp(e) {
          this.notFound = false; // search results are unknown while typing
          // if input is empty

          if (!this.query) {
            this.notFound = false;
            this.inputChanged.emit(e.target.value);
            this.inputCleared.emit(); //this.filterList();

            this.setPanelState(e);
          } // note that '' can be a valid query


          if (!this.query && this.query !== '') {
            return;
          } // if query >= to minQueryLength


          if (this.query.length >= this.minQueryLength) {
            this.inputChanged.emit(e.target.value);
            this.filterList(); // If no results found

            if (!this.filteredList.length && !this.isLoading) {
              this.notFoundText ? this.notFound = true : this.notFound = false;
            }
          }
        }
        /**
         * Keyboard arrow top and arrow bottom
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "onFocusItem",
        value: function onFocusItem(e) {
          // move arrow up and down on filteredList or historyList
          if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList

            /** @type {?} */
            var totalNumItem = this.filteredList.length;

            if (e.key === 'ArrowDown') {
              /** @type {?} */
              var sum = this.selectedIdx;
              sum = this.selectedIdx === null ? 0 : sum + 1;
              this.selectedIdx = (totalNumItem + sum) % totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            } else if (e.key === 'ArrowUp') {
              if (this.selectedIdx == -1) {
                this.selectedIdx = 0;
              }

              this.selectedIdx = (totalNumItem + this.selectedIdx - 1) % totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            }
          } else {
            // historyList

            /** @type {?} */
            var _totalNumItem = this.historyList.length;

            if (e.key === 'ArrowDown') {
              /** @type {?} */
              var _sum = this.selectedIdx;
              _sum = this.selectedIdx === null ? 0 : _sum + 1;
              this.selectedIdx = (_totalNumItem + _sum) % _totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            } else if (e.key === 'ArrowUp') {
              if (this.selectedIdx == -1) {
                this.selectedIdx = 0;
              }

              this.selectedIdx = (_totalNumItem + this.selectedIdx - 1) % _totalNumItem;
              this.scrollToFocusedItem(this.selectedIdx);
            }
          }
        }
        /**
         * Scroll to focused item
         * * \@param index
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "scrollToFocusedItem",
        value: function scrollToFocusedItem(index) {
          /** @type {?} */
          var listElement = null; // Define list element

          if (!this.historyList.length || !this.isHistoryListVisible) {
            // filteredList element
            listElement = this.filteredListElement.nativeElement;
          } else {
            // historyList element
            listElement = this.historyListElement.nativeElement;
          }
          /** @type {?} */


          var items = Array.prototype.slice.call(listElement.childNodes).filter(
          /**
          * @param {?} node
          * @return {?}
          */
          function (node) {
            if (node.nodeType === 1) {
              // if node is element
              return node.className.includes('item');
            } else {
              return false;
            }
          });

          if (!items.length) {
            return;
          }
          /** @type {?} */


          var listHeight = listElement.offsetHeight;
          /** @type {?} */

          var itemHeight = items[index].offsetHeight;
          /** @type {?} */

          var visibleTop = listElement.scrollTop;
          /** @type {?} */

          var visibleBottom = listElement.scrollTop + listHeight - itemHeight;
          /** @type {?} */

          var targetPosition = items[index].offsetTop;

          if (targetPosition < visibleTop) {
            listElement.scrollTop = targetPosition;
          }

          if (targetPosition > visibleBottom) {
            listElement.scrollTop = targetPosition - listHeight + itemHeight;
          }
        }
        /**
         * Select item on enter click
         * @return {?}
         */

      }, {
        key: "onHandleEnter",
        value: function onHandleEnter() {
          // click enter to choose item from filteredList or historyList
          if (this.selectedIdx > -1) {
            if (!this.historyList.length || !this.isHistoryListVisible) {
              // filteredList
              this.query = !this.isType(this.filteredList[this.selectedIdx]) ? this.filteredList[this.selectedIdx][this.searchKeyword] : this.filteredList[this.selectedIdx];
              this.saveHistory(this.filteredList[this.selectedIdx]);
              this.select(this.filteredList[this.selectedIdx]);
            } else {
              // historyList
              this.query = !this.isType(this.historyList[this.selectedIdx]) ? this.historyList[this.selectedIdx][this.searchKeyword] : this.historyList[this.selectedIdx];
              this.saveHistory(this.historyList[this.selectedIdx]);
              this.select(this.historyList[this.selectedIdx]);
            }
          }

          this.isHistoryListVisible = false;
          this.handleClose();
        }
        /**
         * Esc click
         * @return {?}
         */

      }, {
        key: "onEsc",
        value: function onEsc() {
          this.searchInput.nativeElement.blur();
          this.handleClose();
        }
        /**
         * Tab click
         * @return {?}
         */

      }, {
        key: "onTab",
        value: function onTab() {
          this.searchInput.nativeElement.blur();
          this.handleClose();
        }
        /**
         * Delete click
         * @return {?}
         */

      }, {
        key: "onDelete",
        value: function onDelete() {
          // panel is open on delete
          this.isOpen = true;
        }
        /**
         * Select item to save in localStorage
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "saveHistory",
        value: function saveHistory(selected) {
          var _this5 = this;

          if (this.historyIdentifier) {
            // check if selected item exists in historyList
            if (!this.historyList.some(
            /**
            * @param {?} item
            * @return {?}
            */
            function (item) {
              return !_this5.isType(item) ? item[_this5.searchKeyword] == selected[_this5.searchKeyword] : item == selected;
            })) {
              this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList))); // check if items don't exceed max allowed number

              if (this.historyList.length >= this.historyListMaxNumber) {
                this.historyList.splice(this.historyList.length - 1, 1);
                this.saveHistoryToLocalStorage([selected].concat(_toConsumableArray(this.historyList)));
              }
            } else {
              // if selected item exists in historyList swap to top in array
              if (!this.isType(selected)) {
                // object logic

                /** @type {?} */
                var copiedHistoryList = this.historyList.slice(); // copy original historyList array

                /** @type {?} */

                var selectedIndex = copiedHistoryList.map(
                /**
                * @param {?} item
                * @return {?}
                */
                function (item) {
                  return item[_this5.searchKeyword];
                }).indexOf(selected[this.searchKeyword]);
                copiedHistoryList.splice(selectedIndex, 1);
                copiedHistoryList.splice(0, 0, selected);
                this.saveHistoryToLocalStorage(_toConsumableArray(copiedHistoryList));
              } else {
                // string logic

                /** @type {?} */
                var _copiedHistoryList = this.historyList.slice();

                _copiedHistoryList.splice(this.historyList.indexOf(selected), 1);

                _copiedHistoryList.splice(0, 0, selected);

                this.saveHistoryToLocalStorage(_toConsumableArray(_copiedHistoryList));
              }
            }
          }
        }
        /**
         * Save item in localStorage
         * @param {?} selected
         * @return {?}
         */

      }, {
        key: "saveHistoryToLocalStorage",
        value: function saveHistoryToLocalStorage(selected) {
          window.localStorage.setItem("".concat(this.historyIdentifier), JSON.stringify(selected));
        }
        /**
         * Remove item from localStorage
         * @param {?} index
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "removeHistoryItem",
        value: function removeHistoryItem(index, e) {
          e.stopPropagation();
          this.historyList = this.historyList.filter(
          /**
          * @param {?} v
          * @param {?} i
          * @return {?}
          */
          function (v, i) {
            return i !== index;
          });
          this.saveHistoryToLocalStorage(this.historyList);

          if (this.historyList.length == 0) {
            window.localStorage.removeItem("".concat(this.historyIdentifier));
            this.filterList();
          }
        }
        /**
         * Reset localStorage
         * @param {?} e event
         * @return {?}
         */

      }, {
        key: "resetHistoryList",
        value: function resetHistoryList(e) {
          e.stopPropagation();
          this.historyList = [];
          window.localStorage.removeItem("".concat(this.historyIdentifier));
          this.filterList();
        }
      }]);

      return AutocompleteComponent;
    }();

    AutocompleteComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ng-autocomplete',
        template: "<div class=\"autocomplete-container\"\n     [ngClass]=\"{ 'active': isOpen}\">\n  <div class=\"input-container\">\n    <input #searchInput type=\"text\" placeholder={{placeHolder}}\n           [(ngModel)]=query\n           (input)=\"onChange($event)\"\n           (focus)=handleFocus($event)\n           [disabled]=\"disabled\">\n    <div class=\"x\" *ngIf=\"query && !isLoading && !disabled\" (click)=\"remove($event)\">\n      <i class=\"material-icons\">close</i>\n    </div>\n    <!--Loading mask-->\n    <div class=\"sk-fading-circle\" *ngIf=\"isLoading\">\n      <div class=\"sk-circle1 sk-circle\"></div>\n      <div class=\"sk-circle2 sk-circle\"></div>\n      <div class=\"sk-circle3 sk-circle\"></div>\n      <div class=\"sk-circle4 sk-circle\"></div>\n      <div class=\"sk-circle5 sk-circle\"></div>\n      <div class=\"sk-circle6 sk-circle\"></div>\n      <div class=\"sk-circle7 sk-circle\"></div>\n      <div class=\"sk-circle8 sk-circle\"></div>\n      <div class=\"sk-circle9 sk-circle\"></div>\n      <div class=\"sk-circle10 sk-circle\"></div>\n      <div class=\"sk-circle11 sk-circle\"></div>\n      <div class=\"sk-circle12 sk-circle\"></div>\n    </div>\n  </div>\n\n  <!--FilteredList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': isHistoryListVisible, 'is-visible': !isHistoryListVisible}\">\n    <!--FilteredList heading-->\n    <div class=\"heading\" *ngIf=\"filteredList.length > 0 && heading\">\n      <div class=\"text\">{{heading}}</div>\n    </div>\n\n    <ul #filteredListElement>\n      <li *ngFor=\"let item of filteredList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item | highlight: toHighlight }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)'\n             (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item | highlight: toHighlight : searchKeyword }\">\n          </ng-container>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--HistoryList items-->\n  <div class=\"suggestions-container\"\n       [ngClass]=\"{ 'is-hidden': !isHistoryListVisible, 'is-visible': isHistoryListVisible}\">\n    <!--HistoryList heading-->\n    <div class=\"heading\" *ngIf=\"historyList.length > 0 && historyHeading\">\n      <div class=\"text\">{{historyHeading}}</div>\n      <div class=\"x\" (click)=\"resetHistoryList($event)\">\n        <i class=\"material-icons\">delete</i>\n      </div>\n    </div>\n\n    <ul #historyListElement>\n      <li *ngFor=\"let item of historyList; let idx = index\" class=\"item\">\n        <!--string logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate;  context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <!--object logic-->\n        <div [class.complete-selected]=\"idx === selectedIdx\" *ngIf='!isType(item)' (click)=\"select(item)\">\n          <ng-container\n            *ngTemplateOutlet=\"itemTemplate; context: { $implicit: item }\">\n          </ng-container>\n        </div>\n        <div class=\"x\" (click)=\"removeHistoryItem(idx, $event)\">\n          <i class=\"material-icons\">close</i>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <!--Not found-->\n  <div class=\"not-found\" *ngIf=\"isLoading ? !isLoading && notFound : notFound\">\n    <ng-container\n      *ngTemplateOutlet=\"notFoundTemplate;  context: { $implicit: notFoundText  }\">\n    </ng-container>\n  </div>\n</div>\n<div class=\"overlay\" *ngIf=\"overlay\" (click)=\"handleOverlay()\"></div>\n",
        providers: [{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return AutocompleteComponent;
          }),
          multi: true
        }],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          '(document:click)': 'handleClick($event)',
          'class': 'ng-autocomplete'
        },
        styles: ["@import url(https://fonts.googleapis.com/icon?family=Material+Icons);.ng-autocomplete{width:600px}.autocomplete-container{box-shadow:0 1px 3px 0 rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);position:relative;overflow:visible;height:40px}.autocomplete-container .input-container input{font-size:14px;box-sizing:border-box;border:none;box-shadow:none;outline:0;background-color:#fff;color:rgba(0,0,0,.87);width:100%;padding:0 15px;line-height:40px;height:40px}.autocomplete-container .input-container input:disabled{background-color:#eee;color:#666}.autocomplete-container .input-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .input-container .x i{color:rgba(0,0,0,.54);font-size:22px;vertical-align:middle}.autocomplete-container .suggestions-container{position:absolute;width:100%;background:#fff;height:auto;box-shadow:0 2px 5px rgba(0,0,0,.25);box-sizing:border-box}.autocomplete-container .suggestions-container ul{padding:0;margin:0;max-height:240px;overflow-y:auto}.autocomplete-container .suggestions-container ul li{position:relative;list-style:none;padding:0;margin:0;cursor:pointer}.autocomplete-container .suggestions-container ul li a{padding:14px 15px;display:block;text-decoration:none;cursor:pointer;color:rgba(0,0,0,.87);font-size:15px}.autocomplete-container .suggestions-container .complete-selected,.autocomplete-container .suggestions-container ul li:hover{background-color:rgba(158,158,158,.18)}.autocomplete-container .suggestions-container .heading{position:relative;padding:10px 15px;border:1px solid #f1f1f1}.autocomplete-container .suggestions-container .heading .text{font-size:.85em}.autocomplete-container .suggestions-container .x{position:absolute;right:10px;margin:auto;cursor:pointer;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.autocomplete-container .suggestions-container .x i{color:rgba(0,0,0,.54);font-size:18px;vertical-align:middle}.autocomplete-container .suggestions-container.is-hidden{visibility:hidden}.autocomplete-container .suggestions-container.is-visible{visibility:visible}.autocomplete-container .not-found{padding:0 .75em;border:1px solid #f1f1f1;background:#fff}.autocomplete-container .not-found div{padding:.4em 0;font-size:.95em;line-height:1.4;border-bottom:1px solid rgba(230,230,230,.7)}.autocomplete-container.active{z-index:999}.highlight{font-weight:700}.overlay{position:absolute;background-color:transparent;width:100%;height:100%;top:0;right:0;bottom:0;left:0;z-index:50}input[type=text]::-ms-clear{display:none}.sk-fading-circle{width:20px;height:20px;position:absolute;right:10px;top:0;bottom:0;margin:auto}.sk-fading-circle .sk-circle{width:100%;height:100%;position:absolute;left:0;top:0}.sk-fading-circle .sk-circle:before{content:\"\";display:block;margin:0 auto;width:15%;height:15%;background-color:#333;border-radius:100%;-webkit-animation:1.2s ease-in-out infinite both sk-circleFadeDelay;animation:1.2s ease-in-out infinite both sk-circleFadeDelay}.sk-fading-circle .sk-circle2{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.sk-fading-circle .sk-circle3{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.sk-fading-circle .sk-circle4{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.sk-fading-circle .sk-circle5{-webkit-transform:rotate(120deg);transform:rotate(120deg)}.sk-fading-circle .sk-circle6{-webkit-transform:rotate(150deg);transform:rotate(150deg)}.sk-fading-circle .sk-circle7{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.sk-fading-circle .sk-circle8{-webkit-transform:rotate(210deg);transform:rotate(210deg)}.sk-fading-circle .sk-circle9{-webkit-transform:rotate(240deg);transform:rotate(240deg)}.sk-fading-circle .sk-circle10{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.sk-fading-circle .sk-circle11{-webkit-transform:rotate(300deg);transform:rotate(300deg)}.sk-fading-circle .sk-circle12{-webkit-transform:rotate(330deg);transform:rotate(330deg)}.sk-fading-circle .sk-circle2:before{-webkit-animation-delay:-1.1s;animation-delay:-1.1s}.sk-fading-circle .sk-circle3:before{-webkit-animation-delay:-1s;animation-delay:-1s}.sk-fading-circle .sk-circle4:before{-webkit-animation-delay:-.9s;animation-delay:-.9s}.sk-fading-circle .sk-circle5:before{-webkit-animation-delay:-.8s;animation-delay:-.8s}.sk-fading-circle .sk-circle6:before{-webkit-animation-delay:-.7s;animation-delay:-.7s}.sk-fading-circle .sk-circle7:before{-webkit-animation-delay:-.6s;animation-delay:-.6s}.sk-fading-circle .sk-circle8:before{-webkit-animation-delay:-.5s;animation-delay:-.5s}.sk-fading-circle .sk-circle9:before{-webkit-animation-delay:-.4s;animation-delay:-.4s}.sk-fading-circle .sk-circle10:before{-webkit-animation-delay:-.3s;animation-delay:-.3s}.sk-fading-circle .sk-circle11:before{-webkit-animation-delay:-.2s;animation-delay:-.2s}.sk-fading-circle .sk-circle12:before{-webkit-animation-delay:-.1s;animation-delay:-.1s}@-webkit-keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}@keyframes sk-circleFadeDelay{0%,100%,39%{opacity:0}40%{opacity:1}}"]
      }]
    }];
    /** @nocollapse */

    AutocompleteComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    AutocompleteComponent.propDecorators = {
      searchInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['searchInput']
      }],
      filteredListElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['filteredListElement']
      }],
      historyListElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['historyListElement']
      }],
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      searchKeyword: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placeHolder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      heading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      historyIdentifier: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      historyHeading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      historyListMaxNumber: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      notFoundText: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isLoading: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      debounceTime: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minQueryLength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputFocused: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      inputCleared: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      scrolledToEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      itemTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      notFoundTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete/highlight.pipe.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HighlightPipe = /*#__PURE__*/function () {
      function HighlightPipe() {
        _classCallCheck(this, HighlightPipe);
      }

      _createClass(HighlightPipe, [{
        key: "transform",

        /**
         * @param {?} text
         * @param {?} search
         * @param {?=} searchKeyword
         * @return {?}
         */
        value: function transform(text, search, searchKeyword) {
          /** @type {?} */
          var pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
          pattern = pattern.split(' ').filter(
          /**
          * @param {?} t
          * @return {?}
          */
          function (t) {
            return t.length > 0;
          }).join('|');
          /** @type {?} */

          var regex = new RegExp(pattern, 'gi');

          if (!search) {
            return text;
          }

          if (searchKeyword) {
            /** @type {?} */
            var name = text[searchKeyword].replace(regex,
            /**
            * @param {?} match
            * @return {?}
            */
            function (match) {
              return "<b>".concat(match, "</b>");
            }); // copy original object

            /** @type {?} */

            var text2 = Object.assign({}, text); // set bold value into searchKeyword of copied object

            text2[searchKeyword] = name;
            return text2;
          } else {
            return search ? text.replace(regex,
            /**
            * @param {?} match
            * @return {?}
            */
            function (match) {
              return "<b>".concat(match, "</b>");
            }) : text;
          }
        }
      }]);

      return HighlightPipe;
    }();

    HighlightPipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'highlight'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: lib/autocomplete-lib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AutocompleteLibModule = function AutocompleteLibModule() {
      _classCallCheck(this, AutocompleteLibModule);
    };

    AutocompleteLibModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
        declarations: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe],
        exports: [AutocompleteLibComponent, AutocompleteComponent, HighlightPipe]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: public_api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: angular-ng-autocomplete.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-ng-autocomplete.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-search-filter/ng2-search-filter.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-search-filter/ng2-search-filter.js ***!
    \*************************************************************/

  /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

  /***/
  function node_modulesNg2SearchFilterNg2SearchFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
      return Ng2SearchPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
      return Ng2SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Ng2SearchPipe = /*#__PURE__*/function () {
      function Ng2SearchPipe() {
        _classCallCheck(this, Ng2SearchPipe);
      }

      _createClass(Ng2SearchPipe, [{
        key: "transform",

        /**
         * @param {?} items object from array
         * @param {?} term term's search
         * @return {?}
         */
        value: function transform(items, term) {
          if (!term || !items) return items;
          return Ng2SearchPipe.filter(items, term);
        }
        /**
         *
         * @param {?} items List of items to filter
         * @param {?} term  a string term to compare with every property of the list
         *
         * @return {?}
         */

      }], [{
        key: "filter",
        value: function filter(items, term) {
          var
          /** @type {?} */
          toCompare = term.toLowerCase();
          /**
           * @param {?} item
           * @param {?} term
           * @return {?}
           */

          function checkInside(item, term) {
            for (var
            /** @type {?} */
            property in item) {
              if (item[property] === null || item[property] == undefined) {
                continue;
              }

              if (typeof item[property] === 'object') {
                if (checkInside(item[property], term)) {
                  return true;
                }
              }

              if (item[property].toString().toLowerCase().includes(toCompare)) {
                return true;
              }
            }

            return false;
          }

          return items.filter(function (item) {
            return checkInside(item, term);
          });
        }
      }]);

      return Ng2SearchPipe;
    }();

    Ng2SearchPipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'filter',
        pure: false
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @nocollapse
     */

    Ng2SearchPipe.ctorParameters = function () {
      return [];
    };

    var Ng2SearchPipeModule = function Ng2SearchPipeModule() {
      _classCallCheck(this, Ng2SearchPipeModule);
    };

    Ng2SearchPipeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [Ng2SearchPipe],
        exports: [Ng2SearchPipe]
      }]
    }];
    /**
     * @nocollapse
     */

    Ng2SearchPipeModule.ctorParameters = function () {
      return [];
    };
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-search-filter.js.map

    /***/

  },

  /***/
  "./node_modules/ngx-stars/fesm2015/ngx-stars.js":
  /*!******************************************************!*\
    !*** ./node_modules/ngx-stars/fesm2015/ngx-stars.js ***!
    \******************************************************/

  /*! exports provided: NgxStarsComponent, EditableStar, NgxStarsModule */

  /***/
  function node_modulesNgxStarsFesm2015NgxStarsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxStarsComponent", function () {
      return NgxStarsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditableStar", function () {
      return EditableStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgxStarsModule", function () {
      return NgxStarsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var NgxStarsComponent = /*#__PURE__*/function () {
      function NgxStarsComponent() {
        var _this6 = this;

        _classCallCheck(this, NgxStarsComponent);

        this.maxStars = 5;
        this.initialStars = 0;
        this.animationSpeed = 100;
        this.wholeStars = false;
        this.ratingOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customClassIdentifier = Math.random().toString(36).substring(2);

        this.safeSize = function () {
          return Number.isInteger(_this6.size) && _this6.size > 0 && _this6.size < 6 ? _this6.size : 1;
        };
      }
      /**
       * @return {?}
       */


      _createClass(NgxStarsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupStarImages();
          this.editableStars = Array.from(new Array(this.maxStars)).map(function (elem, index) {
            return new EditableStar(index);
          });
          this.setRating(this.initialStars);

          if (this.animation) {
            this.animationInterval = setInterval(this.starAnimation.bind(this), this.animationSpeed);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // remove the three custom classes we created if custom image urls were provided
          if (this.customCssClasses) {
            this.customCssClasses.forEach(function (style) {
              if (style && style.parentNode) {
                style.parentNode.removeChild(style);
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "setupStarImages",
        value: function setupStarImages() {
          var _this7 = this;

          if (this.customStarIcons) {
            this.customCssClasses = [];
            Object.keys(this.customStarIcons).map(function (key) {
              return (
                /** @type {?} */
                key
              );
            }).forEach(function (starType) {
              /** @type {?} */
              var classname = _this7.getStarClass(starType);

              _this7.createCssClass(classname, starType);
            });
          }
        }
        /**
         * @param {?} classname
         * @param {?} starType
         * @return {?}
         */

      }, {
        key: "createCssClass",
        value: function createCssClass(classname, starType) {
          /** @type {?} */
          var clazz = document.createElement('style');
          clazz.type = 'text/css';
          clazz.innerHTML = ".".concat(classname, " {\n      -webkit-mask-image: url(").concat(this.customStarIcons[starType], ");\n      mask-image: url(").concat(this.customStarIcons[starType], ");\n    }");
          document.getElementsByTagName('head')[0].appendChild(clazz);
          this.customCssClasses.push(clazz);
        }
        /**
         * @return {?}
         */

      }, {
        key: "starPadding",
        value: function starPadding() {
          return {
            'margin-right': this.customPadding || "0.".concat(this.safeSize(), "rem")
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "starColorAndSize",
        value: function starColorAndSize() {
          return Object.assign({}, this.starColor(), this.starSize());
        }
        /**
         * @return {?}
         */

      }, {
        key: "starColor",
        value: function starColor() {
          return {
            'background-color': this.color || 'crimson'
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "starSize",
        value: function starSize() {
          return {
            height: "".concat(15 * this.safeSize(), "px"),
            width: "".concat(16 * this.safeSize(), "px")
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "starAnimation",
        value: function starAnimation() {
          this.animationRunning = true;

          if (this.rating < this.maxStars) {
            this.setRating(this.rating += 0.5);
          } else {
            this.setRating(0);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "cancelStarAnimation",
        value: function cancelStarAnimation() {
          if (this.animationRunning) {
            clearInterval(this.animationInterval);
            this.rating = 0;
            this.animationRunning = false;
          }
        }
        /**
         * @param {?} rating
         * @return {?}
         */

      }, {
        key: "setRating",
        value: function setRating(rating) {
          this.rating = Math.round(rating * 2) / 2;
          this.onStarsUnhover();
        }
        /**
         * @param {?} event
         * @param {?} clickedStar
         * @return {?}
         */

      }, {
        key: "onStarHover",
        value: function onStarHover(event, clickedStar) {
          var _this8 = this;

          this.cancelStarAnimation();
          /** @type {?} */

          var clickedInFirstHalf = this.clickedInFirstHalf(event); // fill in either a half or whole star depending on where user clicked

          clickedStar.classname = !this.wholeStars && clickedInFirstHalf ? this.getStarClass('half') : this.getStarClass('full'); // fill in all stars in previous positions and clear all in later ones

          this.editableStars.forEach(function (star) {
            if (star.position > clickedStar.position) {
              star.classname = _this8.getStarClass('empty');
            } else if (star.position < clickedStar.position) {
              star.classname = _this8.getStarClass('full');
            }
          });
        }
        /**
         * @param {?} event
         * @param {?} clickedStar
         * @return {?}
         */

      }, {
        key: "onStarClick",
        value: function onStarClick(event, clickedStar) {
          this.cancelStarAnimation();
          /** @type {?} */

          var clickedInFirstHalf = this.clickedInFirstHalf(event);
          this.rating = clickedStar.position + (!this.wholeStars && clickedInFirstHalf ? 0.5 : 1);
          this.ratingOutput.emit(this.rating);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onZeroStarClick",
        value: function onZeroStarClick() {
          this.setRating(0);
          this.ratingOutput.emit(this.rating);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onZeroStarHover",
        value: function onZeroStarHover() {
          var _this9 = this;

          // clear all stars
          this.editableStars.forEach(function (star) {
            return star.classname = _this9.getStarClass('empty');
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "onStarsUnhover",
        value: function onStarsUnhover() {
          var _this10 = this;

          // when user stops hovering we want to make stars reflect the last rating applied by clicking
          this.editableStars.forEach(function (star) {
            /** @type {?} */
            var starNumber = star.position + 1;

            if (_this10.rating >= starNumber) {
              star.classname = _this10.getStarClass('full');
            } else if (_this10.rating > starNumber - 1 && _this10.rating < starNumber) {
              star.classname = _this10.getStarClass('half');
            } else {
              star.classname = _this10.getStarClass('empty');
            }
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "clickedInFirstHalf",
        value: function clickedInFirstHalf(event) {
          /** @type {?} */
          var starIcon =
          /** @type {?} */
          event.target;
          return event.pageX < starIcon.getBoundingClientRect().left + starIcon.offsetWidth / 2;
        }
        /**
         * @return {?}
         */

      }, {
        key: "noop",
        value: function noop() {}
        /**
         * @param {?} starType
         * @return {?}
         */

      }, {
        key: "getStarClass",
        value: function getStarClass(starType) {
          if (this.customCssClasses) {
            return "ngx-stars-star-".concat(starType, "-").concat(this.customClassIdentifier);
          }

          return "star-".concat(starType);
        }
      }]);

      return NgxStarsComponent;
    }();

    NgxStarsComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngx-stars',
        template: "<div class=\"stars-line\" (mouseleave)=\"readonly ? noop() : onStarsUnhover()\">\n  <span class=\"star zero-star\" [ngStyle]=\"starSize()\" aria-hidden=\"true\" (click)=\"onZeroStarClick()\" (mousemove)=\"readonly ? noop() : onZeroStarHover()\"></span>\n  <div *ngFor=\"let star of editableStars;\" [ngStyle]=\"starPadding()\" (click)=\"readonly ? noop() : onStarClick($event, star)\" (mousemove)=\"readonly ? noop() : onStarHover($event, star)\">\n    <span class=\"star\" [ngClass]=\"star.classname\" [ngStyle]=\"starColorAndSize()\" aria-hidden=\"true\"></span>\n  </div>\n</div>\n",
        styles: [".stars-line{display:flex;align-items:center;position:relative}.stars-line>div{z-index:999}.zero-star{color:transparent;position:absolute;left:-16px}.star{display:inline-block;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.star-empty{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'%3E%3C/path%3E%3C/svg%3E%0A\");mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='far' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'%3E%3C/path%3E%3C/svg%3E%0A\")}.star-half{-webkit-mask-image:url(\"data:image/svg+xml,%3C!-- had to hack this one's viewbox otherwise it didn't line up with the other two --%3E%3C!-- changed viewbox from '0 0 536 512' to '-20 0 576 512' --%3E%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star-half-alt' class='svg-inline--fa fa-star-half-alt fa-w-17' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='-20 0 576 512'%3E%3Cpath fill='currentColor' d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'%3E%3C/path%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3C!-- had to hack this one's viewbox otherwise it didn't line up with the other two --%3E%3C!-- changed viewbox from '0 0 536 512' to '-20 0 576 512' --%3E%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star-half-alt' class='svg-inline--fa fa-star-half-alt fa-w-17' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='-20 0 576 512'%3E%3Cpath fill='currentColor' d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'%3E%3C/path%3E%3C/svg%3E\")}.star-full{-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'%3E%3C/path%3E%3C/svg%3E\");mask-image:url(\"data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='star' class='svg-inline--fa fa-star fa-w-18' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3Cpath fill='currentColor' d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'%3E%3C/path%3E%3C/svg%3E\")}"]
      }]
    }];
    NgxStarsComponent.propDecorators = {
      maxStars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      initialStars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animationSpeed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customPadding: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      wholeStars: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      customStarIcons: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ratingOutput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    var EditableStar =
    /**
     * @param {?} position
     */
    function EditableStar(position) {
      _classCallCheck(this, EditableStar);

      this.position = position;
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */


    var NgxStarsModule = function NgxStarsModule() {
      _classCallCheck(this, NgxStarsModule);
    };

    NgxStarsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [NgxStarsComponent],
        exports: [NgxStarsComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXN0YXJzLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtc3RhcnMvbGliL25neC1zdGFycy5jb21wb25lbnQudHMiLCJuZzovL25neC1zdGFycy9saWIvbmd4LXN0YXJzLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXN0YXJzJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwic3RhcnMtbGluZVwiIChtb3VzZWxlYXZlKT1cInJlYWRvbmx5ID8gbm9vcCgpIDogb25TdGFyc1VuaG92ZXIoKVwiPlxuICA8c3BhbiBjbGFzcz1cInN0YXIgemVyby1zdGFyXCIgW25nU3R5bGVdPVwic3RhclNpemUoKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIChjbGljayk9XCJvblplcm9TdGFyQ2xpY2soKVwiIChtb3VzZW1vdmUpPVwicmVhZG9ubHkgPyBub29wKCkgOiBvblplcm9TdGFySG92ZXIoKVwiPjwvc3Bhbj5cbiAgPGRpdiAqbmdGb3I9XCJsZXQgc3RhciBvZiBlZGl0YWJsZVN0YXJzO1wiIFtuZ1N0eWxlXT1cInN0YXJQYWRkaW5nKClcIiAoY2xpY2spPVwicmVhZG9ubHkgPyBub29wKCkgOiBvblN0YXJDbGljaygkZXZlbnQsIHN0YXIpXCIgKG1vdXNlbW92ZSk9XCJyZWFkb25seSA/IG5vb3AoKSA6IG9uU3RhckhvdmVyKCRldmVudCwgc3RhcilcIj5cbiAgICA8c3BhbiBjbGFzcz1cInN0YXJcIiBbbmdDbGFzc109XCJzdGFyLmNsYXNzbmFtZVwiIFtuZ1N0eWxlXT1cInN0YXJDb2xvckFuZFNpemUoKVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW2Auc3RhcnMtbGluZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO3Bvc2l0aW9uOnJlbGF0aXZlfS5zdGFycy1saW5lPmRpdnt6LWluZGV4Ojk5OX0uemVyby1zdGFye2NvbG9yOnRyYW5zcGFyZW50O3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6LTE2cHh9LnN0YXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7LXdlYmtpdC1tYXNrLXJlcGVhdDpuby1yZXBlYXQ7bWFzay1yZXBlYXQ6bm8tcmVwZWF0fS5zdGFyLWVtcHR5ey13ZWJraXQtbWFzay1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBmb2N1c2FibGU9J2ZhbHNlJyBkYXRhLXByZWZpeD0nZmFyJyBkYXRhLWljb249J3N0YXInIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1zdGFyIGZhLXctMTgnIHJvbGU9J2ltZycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMiclM0UlM0NwYXRoIGZpbGw9J2N1cnJlbnRDb2xvcicgZD0nTTUyOC4xIDE3MS41TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMEwxOTQgMTUwLjIgNDcuOSAxNzEuNWMtMjYuMiAzLjgtMzYuNyAzNi4xLTE3LjcgNTQuNmwxMDUuNyAxMDMtMjUgMTQ1LjVjLTQuNSAyNi4zIDIzLjIgNDYgNDYuNCAzMy43TDI4OCA0MzkuNmwxMzAuNyA2OC43YzIzLjIgMTIuMiA1MC45LTcuNCA0Ni40LTMzLjdsLTI1LTE0NS41IDEwNS43LTEwM2MxOS0xOC41IDguNS01MC44LTE3LjctNTQuNnpNMzg4LjYgMzEyLjNsMjMuNyAxMzguNEwyODggMzg1LjRsLTEyNC4zIDY1LjMgMjMuNy0xMzguNC0xMDAuNi05OCAxMzktMjAuMiA2Mi4yLTEyNiA2Mi4yIDEyNiAxMzkgMjAuMi0xMDAuNiA5OHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFJTBBXCIpO21hc2staW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZm9jdXNhYmxlPSdmYWxzZScgZGF0YS1wcmVmaXg9J2ZhcicgZGF0YS1pY29uPSdzdGFyJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtc3RhciBmYS13LTE4JyByb2xlPSdpbWcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J001MjguMSAxNzEuNUwzODIgMTUwLjIgMzE2LjcgMTcuOGMtMTEuNy0yMy42LTQ1LjYtMjMuOS01Ny40IDBMMTk0IDE1MC4yIDQ3LjkgMTcxLjVjLTI2LjIgMy44LTM2LjcgMzYuMS0xNy43IDU0LjZsMTA1LjcgMTAzLTI1IDE0NS41Yy00LjUgMjYuMyAyMy4yIDQ2IDQ2LjQgMzMuN0wyODggNDM5LjZsMTMwLjcgNjguN2MyMy4yIDEyLjIgNTAuOS03LjQgNDYuNC0zMy43bC0yNS0xNDUuNSAxMDUuNy0xMDNjMTktMTguNSA4LjUtNTAuOC0xNy43LTU0LjZ6TTM4OC42IDMxMi4zbDIzLjcgMTM4LjRMMjg4IDM4NS40bC0xMjQuMyA2NS4zIDIzLjctMTM4LjQtMTAwLjYtOTggMTM5LTIwLjIgNjIuMi0xMjYgNjIuMiAxMjYgMTM5IDIwLjItMTAwLjYgOTh6JyUzRSUzQy9wYXRoJTNFJTNDL3N2ZyUzRSUwQVwiKX0uc3Rhci1oYWxmey13ZWJraXQtbWFzay1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDIS0tIGhhZCB0byBoYWNrIHRoaXMgb25lJ3Mgdmlld2JveCBvdGhlcndpc2UgaXQgZGlkbid0IGxpbmUgdXAgd2l0aCB0aGUgb3RoZXIgdHdvIC0tJTNFJTNDIS0tIGNoYW5nZWQgdmlld2JveCBmcm9tICcwIDAgNTM2IDUxMicgdG8gJy0yMCAwIDU3NiA1MTInIC0tJTNFJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBmb2N1c2FibGU9J2ZhbHNlJyBkYXRhLXByZWZpeD0nZmFzJyBkYXRhLWljb249J3N0YXItaGFsZi1hbHQnIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1zdGFyLWhhbGYtYWx0IGZhLXctMTcnIHJvbGU9J2ltZycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctMjAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNNTA4LjU1IDE3MS41MUwzNjIuMTggMTUwLjIgMjk2Ljc3IDE3LjgxQzI5MC44OSA1Ljk4IDI3OS40MiAwIDI2Ny45NSAwYy0xMS40IDAtMjIuNzkgNS45LTI4LjY5IDE3LjgxbC02NS40MyAxMzIuMzgtMTQ2LjM4IDIxLjI5Yy0yNi4yNSAzLjgtMzYuNzcgMzYuMDktMTcuNzQgNTQuNTlsMTA1Ljg5IDEwMy0yNS4wNiAxNDUuNDhDODYuOTggNDk1LjMzIDEwMy41NyA1MTIgMTIyLjE1IDUxMmM0LjkzIDAgMTAtMS4xNyAxNC44Ny0zLjc1bDEzMC45NS02OC42OCAxMzAuOTQgNjguN2M0Ljg2IDIuNTUgOS45MiAzLjcxIDE0LjgzIDMuNzEgMTguNiAwIDM1LjIyLTE2LjYxIDMxLjY2LTM3LjRsLTI1LjAzLTE0NS40OSAxMDUuOTEtMTAyLjk4YzE5LjA0LTE4LjUgOC41Mi01MC44LTE3LjczLTU0LjZ6bS0xMjEuNzQgMTIzLjJsLTE4LjEyIDE3LjYyIDQuMjggMjQuODggMTkuNTIgMTEzLjQ1LTEwMi4xMy01My41OS0yMi4zOC0xMS43NC4wMy0zMTcuMTkgNTEuMDMgMTAzLjI5IDExLjE4IDIyLjYzIDI1LjAxIDMuNjQgMTE0LjIzIDE2LjYzLTgyLjY1IDgwLjM4eiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIik7bWFzay1pbWFnZTp1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDIS0tIGhhZCB0byBoYWNrIHRoaXMgb25lJ3Mgdmlld2JveCBvdGhlcndpc2UgaXQgZGlkbid0IGxpbmUgdXAgd2l0aCB0aGUgb3RoZXIgdHdvIC0tJTNFJTNDIS0tIGNoYW5nZWQgdmlld2JveCBmcm9tICcwIDAgNTM2IDUxMicgdG8gJy0yMCAwIDU3NiA1MTInIC0tJTNFJTNDc3ZnIGFyaWEtaGlkZGVuPSd0cnVlJyBmb2N1c2FibGU9J2ZhbHNlJyBkYXRhLXByZWZpeD0nZmFzJyBkYXRhLWljb249J3N0YXItaGFsZi1hbHQnIGNsYXNzPSdzdmctaW5saW5lLS1mYSBmYS1zdGFyLWhhbGYtYWx0IGZhLXctMTcnIHJvbGU9J2ltZycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctMjAgMCA1NzYgNTEyJyUzRSUzQ3BhdGggZmlsbD0nY3VycmVudENvbG9yJyBkPSdNNTA4LjU1IDE3MS41MUwzNjIuMTggMTUwLjIgMjk2Ljc3IDE3LjgxQzI5MC44OSA1Ljk4IDI3OS40MiAwIDI2Ny45NSAwYy0xMS40IDAtMjIuNzkgNS45LTI4LjY5IDE3LjgxbC02NS40MyAxMzIuMzgtMTQ2LjM4IDIxLjI5Yy0yNi4yNSAzLjgtMzYuNzcgMzYuMDktMTcuNzQgNTQuNTlsMTA1Ljg5IDEwMy0yNS4wNiAxNDUuNDhDODYuOTggNDk1LjMzIDEwMy41NyA1MTIgMTIyLjE1IDUxMmM0LjkzIDAgMTAtMS4xNyAxNC44Ny0zLjc1bDEzMC45NS02OC42OCAxMzAuOTQgNjguN2M0Ljg2IDIuNTUgOS45MiAzLjcxIDE0LjgzIDMuNzEgMTguNiAwIDM1LjIyLTE2LjYxIDMxLjY2LTM3LjRsLTI1LjAzLTE0NS40OSAxMDUuOTEtMTAyLjk4YzE5LjA0LTE4LjUgOC41Mi01MC44LTE3LjczLTU0LjZ6bS0xMjEuNzQgMTIzLjJsLTE4LjEyIDE3LjYyIDQuMjggMjQuODggMTkuNTIgMTEzLjQ1LTEwMi4xMy01My41OS0yMi4zOC0xMS43NC4wMy0zMTcuMTkgNTEuMDMgMTAzLjI5IDExLjE4IDIyLjYzIDI1LjAxIDMuNjQgMTE0LjIzIDE2LjYzLTgyLjY1IDgwLjM4eiclM0UlM0MvcGF0aCUzRSUzQy9zdmclM0VcIil9LnN0YXItZnVsbHstd2Via2l0LW1hc2staW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZm9jdXNhYmxlPSdmYWxzZScgZGF0YS1wcmVmaXg9J2ZhcycgZGF0YS1pY29uPSdzdGFyJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtc3RhciBmYS13LTE4JyByb2xlPSdpbWcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpO21hc2staW1hZ2U6dXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyBhcmlhLWhpZGRlbj0ndHJ1ZScgZm9jdXNhYmxlPSdmYWxzZScgZGF0YS1wcmVmaXg9J2ZhcycgZGF0YS1pY29uPSdzdGFyJyBjbGFzcz0nc3ZnLWlubGluZS0tZmEgZmEtc3RhciBmYS13LTE4JyByb2xlPSdpbWcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInJTNFJTNDcGF0aCBmaWxsPSdjdXJyZW50Q29sb3InIGQ9J00yNTkuMyAxNy44TDE5NCAxNTAuMiA0Ny45IDE3MS41Yy0yNi4yIDMuOC0zNi43IDM2LjEtMTcuNyA1NC42bDEwNS43IDEwMy0yNSAxNDUuNWMtNC41IDI2LjMgMjMuMiA0NiA0Ni40IDMzLjdMMjg4IDQzOS42bDEzMC43IDY4LjdjMjMuMiAxMi4yIDUwLjktNy40IDQ2LjQtMzMuN2wtMjUtMTQ1LjUgMTA1LjctMTAzYzE5LTE4LjUgOC41LTUwLjgtMTcuNy01NC42TDM4MiAxNTAuMiAzMTYuNyAxNy44Yy0xMS43LTIzLjYtNDUuNi0yMy45LTU3LjQgMHonJTNFJTNDL3BhdGglM0UlM0Mvc3ZnJTNFXCIpfWBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTdGFyc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBtYXhTdGFyczogbnVtYmVyID0gNTtcblxuICBASW5wdXQoKVxuICBpbml0aWFsU3RhcnM6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgcmVhZG9ubHk6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgc2l6ZTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpXG4gIGFuaW1hdGlvblNwZWVkOiBudW1iZXIgPSAxMDA7XG5cbiAgQElucHV0KClcbiAgY3VzdG9tUGFkZGluZzogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHdob2xlU3RhcnM6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBjdXN0b21TdGFySWNvbnM6IHsgZW1wdHk6IHN0cmluZywgaGFsZjogc3RyaW5nLCBmdWxsOiBzdHJpbmcgfTtcblxuICBAT3V0cHV0KClcbiAgcmF0aW5nT3V0cHV0OiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICByYXRpbmc6IG51bWJlcjtcbiAgZWRpdGFibGVTdGFyczogRWRpdGFibGVTdGFyW107XG4gIGFuaW1hdGlvbkludGVydmFsOiBhbnk7XG4gIGFuaW1hdGlvblJ1bm5pbmc6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBjdXN0b21Dc3NDbGFzc2VzOiBIVE1MU3R5bGVFbGVtZW50W107XG4gIHByaXZhdGUgY3VzdG9tQ2xhc3NJZGVudGlmaWVyID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0dXBTdGFySW1hZ2VzKCk7XG4gICAgdGhpcy5lZGl0YWJsZVN0YXJzID0gQXJyYXkuZnJvbShuZXcgQXJyYXkodGhpcy5tYXhTdGFycykpLm1hcCgoZWxlbSwgaW5kZXgpID0+IG5ldyBFZGl0YWJsZVN0YXIoaW5kZXgpKTtcbiAgICB0aGlzLnNldFJhdGluZyh0aGlzLmluaXRpYWxTdGFycyk7XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCh0aGlzLnN0YXJBbmltYXRpb24uYmluZCh0aGlzKSwgdGhpcy5hbmltYXRpb25TcGVlZCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gcmVtb3ZlIHRoZSB0aHJlZSBjdXN0b20gY2xhc3NlcyB3ZSBjcmVhdGVkIGlmIGN1c3RvbSBpbWFnZSB1cmxzIHdlcmUgcHJvdmlkZWRcbiAgICBpZiAodGhpcy5jdXN0b21Dc3NDbGFzc2VzKSB7XG4gICAgICB0aGlzLmN1c3RvbUNzc0NsYXNzZXMuZm9yRWFjaChzdHlsZSA9PiB7XG4gICAgICAgIGlmIChzdHlsZSAmJiBzdHlsZS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0dXBTdGFySW1hZ2VzKCkge1xuICAgIGlmICh0aGlzLmN1c3RvbVN0YXJJY29ucykge1xuICAgICAgdGhpcy5jdXN0b21Dc3NDbGFzc2VzID0gW107XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmN1c3RvbVN0YXJJY29ucykubWFwKGtleSA9PiBrZXkgYXMgU3RhclR5cGUpLmZvckVhY2goc3RhclR5cGUgPT4ge1xuICAgICAgICBjb25zdCBjbGFzc25hbWUgPSB0aGlzLmdldFN0YXJDbGFzcyhzdGFyVHlwZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlQ3NzQ2xhc3MoY2xhc3NuYW1lLCBzdGFyVHlwZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNzc0NsYXNzKGNsYXNzbmFtZTogc3RyaW5nLCBzdGFyVHlwZTogU3RhclR5cGUpIHtcbiAgICBjb25zdCBjbGF6eiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgY2xhenoudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgY2xhenouaW5uZXJIVE1MID0gYC4ke2NsYXNzbmFtZX0ge1xuICAgICAgLXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoJHt0aGlzLmN1c3RvbVN0YXJJY29uc1tzdGFyVHlwZV19KTtcbiAgICAgIG1hc2staW1hZ2U6IHVybCgke3RoaXMuY3VzdG9tU3Rhckljb25zW3N0YXJUeXBlXX0pO1xuICAgIH1gO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoY2xhenopO1xuICAgIHRoaXMuY3VzdG9tQ3NzQ2xhc3Nlcy5wdXNoKGNsYXp6KTtcbiAgfVxuXG4gIHN0YXJQYWRkaW5nKCk6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4geyAnbWFyZ2luLXJpZ2h0JzogdGhpcy5jdXN0b21QYWRkaW5nIHx8IGAwLiR7dGhpcy5zYWZlU2l6ZSgpfXJlbWAgfTtcbiAgfVxuXG4gIHN0YXJDb2xvckFuZFNpemUoKTogeyBbcDogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXJDb2xvcigpLCB0aGlzLnN0YXJTaXplKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFyQ29sb3IoKTogeyBbcDogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7ICdiYWNrZ3JvdW5kLWNvbG9yJzogdGhpcy5jb2xvciB8fCAnY3JpbXNvbicgfTtcbiAgfVxuXG4gIHN0YXJTaXplKCk6IHsgW3A6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBgJHsxNSAqIHRoaXMuc2FmZVNpemUoKX1weGAsXG4gICAgICB3aWR0aDogYCR7MTYgKiB0aGlzLnNhZmVTaXplKCl9cHhgLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHNhZmVTaXplID0gKCkgPT4gKE51bWJlci5pc0ludGVnZXIodGhpcy5zaXplKSAmJiB0aGlzLnNpemUgPiAwICYmIHRoaXMuc2l6ZSA8IDYpID8gdGhpcy5zaXplIDogMTtcblxuICBzdGFyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uUnVubmluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMucmF0aW5nIDwgdGhpcy5tYXhTdGFycykge1xuICAgICAgdGhpcy5zZXRSYXRpbmcodGhpcy5yYXRpbmcgKz0gMC41KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLnNldFJhdGluZygwKTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWxTdGFyQW5pbWF0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvblJ1bm5pbmcpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5hbmltYXRpb25JbnRlcnZhbCk7XG4gICAgICB0aGlzLnJhdGluZyA9IDA7XG4gICAgICB0aGlzLmFuaW1hdGlvblJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzZXRSYXRpbmcocmF0aW5nOiBudW1iZXIpIHtcbiAgICB0aGlzLnJhdGluZyA9IE1hdGgucm91bmQocmF0aW5nICogMikgLyAyO1xuICAgIHRoaXMub25TdGFyc1VuaG92ZXIoKTtcbiAgfVxuXG4gIG9uU3RhckhvdmVyKGV2ZW50OiBNb3VzZUV2ZW50LCBjbGlja2VkU3RhcjogRWRpdGFibGVTdGFyKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxTdGFyQW5pbWF0aW9uKCk7XG5cbiAgICBjb25zdCBjbGlja2VkSW5GaXJzdEhhbGYgPSB0aGlzLmNsaWNrZWRJbkZpcnN0SGFsZihldmVudCk7XG5cbiAgICAvLyBmaWxsIGluIGVpdGhlciBhIGhhbGYgb3Igd2hvbGUgc3RhciBkZXBlbmRpbmcgb24gd2hlcmUgdXNlciBjbGlja2VkXG4gICAgY2xpY2tlZFN0YXIuY2xhc3NuYW1lID0gKCF0aGlzLndob2xlU3RhcnMgJiYgY2xpY2tlZEluRmlyc3RIYWxmKSA/IHRoaXMuZ2V0U3RhckNsYXNzKCdoYWxmJykgOiB0aGlzLmdldFN0YXJDbGFzcygnZnVsbCcpO1xuXG4gICAgLy8gZmlsbCBpbiBhbGwgc3RhcnMgaW4gcHJldmlvdXMgcG9zaXRpb25zIGFuZCBjbGVhciBhbGwgaW4gbGF0ZXIgb25lc1xuICAgIHRoaXMuZWRpdGFibGVTdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgaWYgKHN0YXIucG9zaXRpb24gPiBjbGlja2VkU3Rhci5wb3NpdGlvbikge1xuICAgICAgICBzdGFyLmNsYXNzbmFtZSA9IHRoaXMuZ2V0U3RhckNsYXNzKCdlbXB0eScpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoc3Rhci5wb3NpdGlvbiA8IGNsaWNrZWRTdGFyLnBvc2l0aW9uKSB7XG4gICAgICAgIHN0YXIuY2xhc3NuYW1lID0gdGhpcy5nZXRTdGFyQ2xhc3MoJ2Z1bGwnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uU3RhckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50LCBjbGlja2VkU3RhcjogRWRpdGFibGVTdGFyKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxTdGFyQW5pbWF0aW9uKCk7XG5cbiAgICAvLyBsb2NrIGluIGN1cnJlbnQgcmF0aW5nXG4gICAgY29uc3QgY2xpY2tlZEluRmlyc3RIYWxmID0gdGhpcy5jbGlja2VkSW5GaXJzdEhhbGYoZXZlbnQpO1xuICAgIHRoaXMucmF0aW5nID0gY2xpY2tlZFN0YXIucG9zaXRpb24gKyAoKCF0aGlzLndob2xlU3RhcnMgJiYgY2xpY2tlZEluRmlyc3RIYWxmKSA/IDAuNSA6IDEpO1xuICAgIHRoaXMucmF0aW5nT3V0cHV0LmVtaXQodGhpcy5yYXRpbmcpO1xuICB9XG5cbiAgLy8gaGlkZGVuIHN0YXIgdG8gbGVmdCBvZiBmaXJzdCBzdGFyIGxldHMgdXNlciBjbGljayB0aGVyZSB0byBzZXQgdG8gMFxuICBvblplcm9TdGFyQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZXRSYXRpbmcoMCk7XG4gICAgdGhpcy5yYXRpbmdPdXRwdXQuZW1pdCh0aGlzLnJhdGluZyk7XG4gIH1cblxuICBvblplcm9TdGFySG92ZXIoKTogdm9pZCB7XG4gICAgLy8gY2xlYXIgYWxsIHN0YXJzXG4gICAgdGhpcy5lZGl0YWJsZVN0YXJzLmZvckVhY2goc3RhciA9PiBzdGFyLmNsYXNzbmFtZSA9IHRoaXMuZ2V0U3RhckNsYXNzKCdlbXB0eScpKTtcbiAgfVxuXG4gIG9uU3RhcnNVbmhvdmVyKCkge1xuICAgIC8vIHdoZW4gdXNlciBzdG9wcyBob3ZlcmluZyB3ZSB3YW50IHRvIG1ha2Ugc3RhcnMgcmVmbGVjdCB0aGUgbGFzdCByYXRpbmcgYXBwbGllZCBieSBjbGlja2luZ1xuICAgIHRoaXMuZWRpdGFibGVTdGFycy5mb3JFYWNoKHN0YXIgPT4ge1xuICAgICAgY29uc3Qgc3Rhck51bWJlciA9IHN0YXIucG9zaXRpb24gKyAxO1xuICAgICAgaWYgKHRoaXMucmF0aW5nID49IHN0YXJOdW1iZXIpIHtcbiAgICAgICAgc3Rhci5jbGFzc25hbWUgPSB0aGlzLmdldFN0YXJDbGFzcygnZnVsbCcpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5yYXRpbmcgPiBzdGFyTnVtYmVyIC0gMSAmJiB0aGlzLnJhdGluZyA8IHN0YXJOdW1iZXIpIHtcbiAgICAgICAgc3Rhci5jbGFzc25hbWUgPSB0aGlzLmdldFN0YXJDbGFzcygnaGFsZicpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHN0YXIuY2xhc3NuYW1lID0gdGhpcy5nZXRTdGFyQ2xhc3MoJ2VtcHR5Jyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsaWNrZWRJbkZpcnN0SGFsZihldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN0YXJJY29uID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgIHJldHVybiBldmVudC5wYWdlWCA8IHN0YXJJY29uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBzdGFySWNvbi5vZmZzZXRXaWR0aCAvIDI7XG4gIH1cblxuICBub29wKCk6IHZvaWQge31cblxuICBwcml2YXRlIGdldFN0YXJDbGFzcyhzdGFyVHlwZTogU3RhclR5cGUpIHtcbiAgICBpZiAodGhpcy5jdXN0b21Dc3NDbGFzc2VzKSB7XG4gICAgICByZXR1cm4gYG5neC1zdGFycy1zdGFyLSR7c3RhclR5cGV9LSR7dGhpcy5jdXN0b21DbGFzc0lkZW50aWZpZXJ9YDtcbiAgICB9XG4gICAgcmV0dXJuIGBzdGFyLSR7c3RhclR5cGV9YDtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBTdGFyVHlwZSA9ICdlbXB0eScgfCAnaGFsZicgfCAnZnVsbCc7XG5cbmV4cG9ydCBjbGFzcyBFZGl0YWJsZVN0YXIge1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICBjbGFzc25hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4U3RhcnNDb21wb25lbnQgfSBmcm9tICcuL25neC1zdGFycy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOZ3hTdGFyc0NvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4U3RhcnNDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hTdGFyc01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFhYSxpQkFBaUI7O1FBRTVCLGdCQUNtQixDQUFDLENBQUM7UUFFckIsb0JBQ3VCLENBQUMsQ0FBQztRQWN6QixzQkFDeUIsR0FBRyxDQUFDO1FBSzdCLGtCQUNzQixLQUFLLENBQUM7UUFLNUIsb0JBQ3FDLElBQUksWUFBWSxFQUFFLENBQUM7cUNBUXhCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQzt3QkErRHBELE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUM7Ozs7O0lBN0R4RyxRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQzFGO0tBQ0Y7Ozs7SUFFRCxXQUFXOztRQUVULElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDakMsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDN0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3JDO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsc0JBQUksR0FBZSxDQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUTs7Z0JBQzVFLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzFDLENBQUMsQ0FBQztTQUNKOzs7Ozs7O0lBR0ssY0FBYyxDQUFDLFNBQWlCLEVBQUUsUUFBa0I7O1FBQzFELE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUM7UUFDeEIsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVM7Z0NBQ0gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO01BQ2hELENBQUM7UUFDSCxRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBR3BDLFdBQVc7UUFDVCxPQUFPLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxhQUFhLElBQUksS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQzVFOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7S0FDN0Q7Ozs7SUFFTyxTQUFTO1FBQ2YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxFQUFFLENBQUM7Ozs7O0lBR3pELFFBQVE7UUFDTixPQUFPO1lBQ0wsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSTtZQUNuQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJO1NBQ25DLENBQUM7S0FDSDs7OztJQUlELGFBQWE7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNwQzthQUNJO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQjtLQUNGOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQy9CO0tBQ0Y7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3ZCOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBaUIsRUFBRSxXQUF5QjtRQUN0RCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7UUFFM0IsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7O1FBRzFELFdBQVcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksa0JBQWtCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDOztRQUd6SCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJO1lBQzdCLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0M7aUJBQ0ksSUFBSSxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1QztTQUNGLENBQUMsQ0FBQztLQUNKOzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBaUIsRUFBRSxXQUF5QjtRQUN0RCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQzs7UUFHM0IsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxXQUFXLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLGtCQUFrQixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckM7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDckM7Ozs7SUFFRCxlQUFlOztRQUViLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUNqRjs7OztJQUVELGNBQWM7O1FBRVosSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSTs7WUFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFVBQVUsRUFBRTtnQkFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzVDO2lCQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSxFQUFFO2dCQUNqRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUM7aUJBQ0k7Z0JBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzdDO1NBQ0YsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRU8sa0JBQWtCLENBQUMsS0FBaUI7O1FBQzFDLE1BQU0sUUFBUSxxQkFBRyxLQUFLLENBQUMsTUFBcUIsRUFBQztRQUM3QyxPQUFPLEtBQUssQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUd4RixJQUFJLE1BQVc7Ozs7O0lBRVAsWUFBWSxDQUFDLFFBQWtCO1FBQ3JDLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLE9BQU8sa0JBQWtCLFFBQVEsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUNuRTtRQUNELE9BQU8sUUFBUSxRQUFRLEVBQUUsQ0FBQzs7OztZQTlNN0IsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7OztDQU1YO2dCQUNDLE1BQU0sRUFBRSxDQUFDLDZqSkFBNmpKLENBQUM7YUFDeGtKOzs7dUJBR0UsS0FBSzsyQkFHTCxLQUFLO3VCQUdMLEtBQUs7bUJBR0wsS0FBSztvQkFHTCxLQUFLO3dCQUdMLEtBQUs7NkJBR0wsS0FBSzs0QkFHTCxLQUFLO3lCQUdMLEtBQUs7OEJBR0wsS0FBSzsyQkFHTCxNQUFNOztNQXlLSSxZQUFZOzs7O0lBSXZCLFlBQVksUUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Q0FDRjs7Ozs7O0FDN05ELE1BZWEsY0FBYzs7O1lBWDFCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osaUJBQWlCO2lCQUNsQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsaUJBQWlCO2lCQUNsQjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7In0=

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/about/about.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/about/about.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header> </app-header>\n  <div class=\"mainSection\"></div>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/bookings/bookings.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/bookings/bookings.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeBookingsBookingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header></app-header>\n  <section class=\"banner-section\">\n    <div class=\"container\">\n      <mat-tab-group (selectedTabChange)=\"tabChanged($event)\">\n        <mat-tab label=\"Upcoming\">\n          <div class=\"row\">\n            <div\n              class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 matcard\"\n              *ngFor=\"let item of bookingListData\"\n            >\n              <mat-card class=\"matCards\">\n                <div class=\"booking-grids\" (click)=\"getBookingDetails(item)\">\n                  <div class=\"upperSec\">\n                    <div class=\"imgArea\">\n                      <img src=\"item.image\" alt=\"\" />\n                    </div>\n                    <div class=\"detailArea\">\n                      <div class=\"date\">{{ item.date | date }}</div>\n                      <div class=\"salonName\">\n                        {{ item.name }}\n                      </div>\n                      <!-- <div class=\"rating-sec\">\n                        <app-starrating\n                          [ratings]=\"item.avgRatings\"\n                        ></app-starrating>\n                      </div> -->\n                      <div class=\"locaSec\">\n                        <img\n                          src=\"../../../../assets/images/location-pin.svg\"\n                          alt=\"\"\n                        />\n                        <span> {{ item.address }}</span>\n                      </div>\n                      <div class=\"lowerSec\">\n                        <div class=\"calendar\">\n                          <img\n                            src=\"../../../../assets/images/calendar.svg\"\n                            alt=\"\"\n                          />\n                          <span>\n                            {{ item.date | date: \"mediumDate\" }}\n                          </span>\n                        </div>\n                        <div class=\"time\">\n                          <img\n                            src=\"../../../../assets/images/clock-circular-outline.svg\"\n                            alt=\"\"\n                          />\n                          <span>{{ item.starttime }}</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </mat-card>\n            </div>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Completed\">\n          <div class=\"row\">\n            <div\n              class=\"col-lg-4 col-md-4 col-sm-12 col-xs-12 matcard\"\n              *ngFor=\"let item of bookingListData\"\n            >\n              <mat-card class=\"matCards\">\n                <div class=\"booking-grids\" (click)=\"getBookingDetails(item)\">\n                  <div class=\"upperSec\">\n                    <div class=\"imgArea\">\n                      <img src=\"item.image\" alt=\"\" />\n                    </div>\n                    <div class=\"detailArea\">\n                      <div class=\"date\">{{ item.date | date }}</div>\n                      <div class=\"salonName\">\n                        {{ item.name }}\n                      </div>\n                      <!-- <div class=\"rating-sec\">\n                        <app-starrating></app-starrating>\n                      </div> -->\n                      <div class=\"locaSec\">\n                        <img\n                          src=\"../../../../assets/images/location-pin.svg\"\n                          alt=\"\"\n                        />\n                        <span> {{ item.address }}</span>\n                      </div>\n                      <div class=\"lowerSec\">\n                        <div class=\"calendar\">\n                          <img\n                            src=\"../../../../assets/images/calendar.svg\"\n                            alt=\"\"\n                          />\n                          <span>\n                            {{ item.date | date: \"mediumDate\" }}\n                          </span>\n                        </div>\n                        <div class=\"time\">\n                          <img\n                            src=\"../../../../assets/images/clock-circular-outline.svg\"\n                            alt=\"\"\n                          />\n                          <span>{{ item.starttime }}</span>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </mat-card>\n            </div>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </div>\n\n    <div class=\"overlay\" *ngIf=\"isDetailShow\">\n      <div class=\"main-section col-lg-4 col-md-4 col-sm -6\">\n        <div class=\"closeBtn\">\n          <img\n            src=\"../../../../assets/images/close2.png\"\n            (click)=\"dismissModal()\"\n            title=\"close\"\n            alt=\"\"\n            class=\"closeImg\"\n          />\n        </div>\n        <div class=\"imgSection\">\n          <img src=\"{{ salonDetails.image }}\" class=\"image\" alt=\"\" />\n          <div class=\"salonName\">\n            {{ bookingDetails.name | translate: this.currentLanguage | async }}\n          </div>\n          <div class=\"starRatingSec\">\n            <app-starrating [ratings]=\"salonDetails.avgRatings\">\n            </app-starrating>\n          </div>\n        </div>\n        <div class=\"detailSec\">\n          <span class=\"serviceName\">{{\n            bookingDetails.servicename | translate: this.currentLanguage | async\n          }}</span>\n\n          <mat-card class=\"mat\">\n            <div class=\"dates\">\n              <span> {{ bookingDetails.date | date: \"mediumDate\" }} at </span>\n              <span>\n                {{ bookingDetails.starttime }}\n              </span>\n            </div>\n            <div class=\"fields\">\n              <span class=\"labels\">{{\n                \"Total Amount Paid:\" | translate: this.currentLanguage | async\n              }}</span>\n              <span>{{ bookingDetails.totalamount | currency: \"USD\" }}</span>\n            </div>\n            <div class=\"fields\">\n              <span class=\"labels\">{{\n                \"Payment Mode:\" | translate: this.currentLanguage | async\n              }}</span>\n              <span>{{ bookingDetails.paymentType }}</span>\n            </div>\n            <div class=\"fields\">\n              <span class=\"labels\">{{\n                \"Order Id:\" | translate: this.currentLanguage | async\n              }}</span>\n              <span>{{ bookingDetails.orderId }}</span>\n            </div>\n            <div class=\"bookingstatus\">\n              {{\n                \"Booking Confirmed\" | translate: this.currentLanguage | async\n              }}\n            </div>\n          </mat-card>\n          <mat-card *ngIf=\"!isShowAddReview\">\n            <div class=\"dates\">\n              {{\n                \"Cancellation Policy\" | translate: this.currentLanguage | async\n              }}\n            </div>\n            <div>\n              <p>\n                {{\n                  \"If you are unable to keep the schedule appointment. please give 24 hr advance notice, to ensure that you will not be charged for this appointment and your paid balance will be refunded to your wallet.\"\n                    | translate: this.currentLanguage\n                    | async\n                }}\n              </p>\n              <p>\n                {{\n                  \"To cancel the appointment please contact\"\n                    | translate: this.currentLanguage\n                    | async\n                }}\n              </p>\n              <span class=\"dates\"\n                >+ {{ adminDetails.code }} {{ adminDetails.phone }}</span\n              >\n            </div>\n          </mat-card>\n        </div>\n        <div class=\"addReview\" *ngIf=\"isShowAddReview\">\n          <button class=\"btn-primary btn-sign-in\" (click)=\"addReview()\">\n            {{ \"Add Review\" | translate: this.currentLanguage | async }}\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"overlay\" *ngIf=\"isAddReviewModal\">\n      <div class=\"main-section col-lg-4 col-md-4 col-sm -6\">\n        <div class=\"startRating\">\n          <ngx-stars\n            [readonly]=\"false\"\n            [size]=\"4\"\n            [color]=\"'gold'\"\n            [initialStars]=\"1\"\n            (ratingOutput)=\"onRatingSet($event)\"\n          ></ngx-stars>\n        </div>\n        <div class=\"comment\">\n          <textarea\n            placeholder=\"Add your comment\"\n            class=\"commentText\"\n            rows=\"4\"\n            cols=\"50\"\n            [(ngModel)]=\"comment\"\n          >\n          </textarea>\n        </div>\n        <button\n          [disabled]=\"!comment\"\n          class=\"btn-primary btn-sign-in\"\n          (click)=\"submitStarRating()\"\n        >\n          {{ \"Submit\" | translate: this.currentLanguage | async }}\n        </button>\n      </div>\n    </div>\n  </section>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/checkout/checkout.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/checkout/checkout.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeCheckoutCheckoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header> </app-header>\n  <div class=\"mainSection\">\n    <div class=\"col-lg-12 sectionsWrapper\">\n      <div class=\"col-lg-8 col-md-8 col-sm-6\">\n        <div class=\"header\">\n          <img\n            src=\"../../../../assets/images/right-arrow(3).svg\"\n            alt=\"\"\n            (click)=\"goToList()\"\n          />\n          <span>{{\n            salonData.name | translate: this.currentLanguage | async\n          }}</span>\n        </div>\n        <div class=\"mainContent row\">\n          <div class=\"subsection col-lg-6 col-md-6 col-sm-12\">\n            <div class=\"payWith\">\n              <input\n                type=\"radio\"\n                name=\"paywith\"\n                value=\"card\"\n                id=\"card\"\n                (click)=\"checkPaymentMode($event)\"\n                [disabled]=\"!isLoggedInCheck\"\n              />\n              <label class=\"paywithlabel\" for=\"card\">\n                <div>\n                  <img src=\"../../../../assets/images/pay.svg\" alt=\"\" />\n                  <span class=\"payText\">{{\n                    \"Pay with Card\" | translate: this.currentLanguage | async\n                  }}</span>\n                </div>\n              </label>\n            </div>\n\n            <div class=\"cardDetailsSection\">\n              <div class=\"cardSection\">\n                <img\n                  src=\"../../../../assets/images/Group 8057.svg\"\n                  alt=\"\"\n                  class=\"img\"\n                />\n                <div class=\"cardDetails\">\n                  <input\n                    type=\"text\"\n                    placeholder=\"xxxx xxxx xxxx xxxx\"\n                    mask=\"0000 0000 0000 0000\"\n                    [(ngModel)]=\"cardNum\"\n                    disabled\n                  />\n                  <div class=\"valid\">\n                    <span>{{\n                      \"VALID THRU\" | translate: this.currentLanguage | async\n                    }}</span\n                    ><br />\n                    <input\n                      [(ngModel)]=\"expDate\"\n                      type=\"text\"\n                      placeholder=\"MM/YYYY\"\n                      mask=\"00/0000\"\n                      disabled\n                    />\n                  </div>\n                </div>\n              </div>\n              <div class=\"cardDetailInput\">\n                <strong>\n                  {{\n                    \"Type your card details\"\n                      | translate: this.currentLanguage\n                      | async\n                  }}\n                </strong>\n                <div class=\"detBox\">\n                  <form [formGroup]=\"cardForm\">\n                    <input\n                      (ngModelChange)=\"modelChanged($event)\"\n                      type=\"text\"\n                      class=\"inpNum\"\n                      placeholder=\"XXXX XXXX XXXX XXXX\"\n                      mask=\"0000 0000 0000 0000\"\n                      [(ngModel)]=\"cardNum\"\n                      [disabled]=\"isCardDetailsRequired\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                    />\n                    <input\n                      (ngModelChange)=\"modelChanged($event)\"\n                      type=\"text\"\n                      class=\"inpExp\"\n                      placeholder=\"MM/YYYY\"\n                      mask=\"00/0000\"\n                      [(ngModel)]=\"expDate\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                      [disabled]=\"isCardDetailsRequired\"\n                    />\n                    <input\n                      class=\"inpCvv\"\n                      (ngModelChange)=\"modelChanged($event)\"\n                      type=\"password\"\n                      placeholder=\"CVC\"\n                      mask=\"000\"\n                      [(ngModel)]=\"cvc\"\n                      [ngModelOptions]=\"{ standalone: true }\"\n                      [disabled]=\"isCardDetailsRequired\"\n                    />\n                  </form>\n                </div>\n              </div>\n              <div class=\"markcard\">\n                <input type=\"checkbox\" />\n                {{\n                  \"Mark card as a default for all payments\"\n                    | translate: this.currentLanguage\n                    | async\n                }}\n              </div>\n            </div>\n          </div>\n          <div class=\"subSection cardDet col-lg-6 col-md-6 col-sm-12\">\n            <div class=\"payWith\">\n              <input\n                type=\"radio\"\n                name=\"paywith\"\n                value=\"cash\"\n                id=\"cash\"\n                (click)=\"checkPaymentMode($event)\"\n                [disabled]=\"!isLoggedInCheck\"\n              />\n              <label class=\"paywithlabel\" for=\"cash\">\n                <div>\n                  <img src=\"../../../../assets/images/cash.svg\" alt=\"\" />\n                  <span class=\"payText\">{{\n                    \"Pay with Cash\" | translate: this.currentLanguage | async\n                  }}</span>\n                </div>\n              </label>\n            </div>\n\n            <div class=\"cardDetailInput\">\n              <div class=\"text-center\">\n                <strong>{{\n                  \"Select from previously added cards\"\n                    | translate: this.currentLanguage\n                    | async\n                }}</strong>\n              </div>\n              <div class=\"cardBox\">\n                <div class=\"cards\">\n                  <input type=\"radio\" />\n                  <label for=\"\">xxxx xxxx xxxx 1234</label>\n                </div>\n                <div class=\"cards\">\n                  <input type=\"radio\" />\n                  <label for=\"\">xxxx xxxx xxxx 1234</label>\n                </div>\n                <div class=\"cards\">\n                  <input type=\"radio\" />\n                  <label for=\"\">xxxx xxxx xxxx 1234</label>\n                </div>\n                <div class=\"cards\">\n                  <input type=\"radio\" />\n                  <label for=\"\">xxxx xxxx xxxx 1234</label>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"checkoutBtnArea\">\n          <button\n            (click)=\"makeUserPayment()\"\n            class=\"btn btn-primary btnPay\"\n            [disabled]=\"enableMakePaymentButton && !cardNum && !expDate && !cvc\"\n            *ngIf=\"isLoggedInCheck\"\n          >\n            <span>{{ totalPrice | currency: \"USD\" }}</span>\n            <span\n              >{{ \"Make Payment\" | translate: this.currentLanguage | async }}\n              <img\n                src=\"../../../../assets/images/right-arrow(3) (1).svg\"\n                alt=\"\"\n              />\n            </span>\n          </button>\n          <button\n            class=\"btn btn-primary btnPay\"\n            (click)=\"goToLogin()\"\n            *ngIf=\"!isLoggedInCheck\"\n          >\n            {{ \"Login\" | translate: this.currentLanguage | async }}\n            <img\n              src=\"../../../../assets/images/right-arrow(3) (1).svg\"\n              alt=\"\"\n            />\n          </button>\n        </div>\n      </div>\n      <div class=\"serviceArea col-lg-4 col-md-4 col-sm-6\">\n        <h3>{{ \"Services\" | translate: this.currentLanguage | async }}</h3>\n        <div class=\"serviceDetailBox\">\n          <div class=\"hair-sec\">\n            <div class=\"hair-sec-inner\">\n              <div class=\"hair-services\">\n                <div class=\"serviceMeta\">\n                  <div>\n                    <img src=\"../../../../assets/images/Group 8177.svg\" />\n                  </div>\n                  <div>\n                    <h6>\n                      {{\n                        checkoutData.servicename\n                          | translate: this.currentLanguage\n                          | async\n                      }}\n                    </h6>\n                    <div class=\"dollar-req\">\n                      {{ checkoutData.price | currency: \"USD\" }}\n                    </div>\n                    <div class=\"min-req\">\n                      {{ checkoutData.duration }}\n                      {{ \"mins\" | translate: this.currentLanguage | async }}\n                    </div>\n                  </div>\n                </div>\n                <div class=\"remove\">\n                  <button class=\"btnRem\" (click)=\"goToHome()\">\n                    {{ \"Remove\" | translate: this.currentLanguage | async }}\n                  </button>\n                </div>\n              </div>\n            </div>\n            <div class=\"dateAndTime\">\n              {{\n                onDate\n                  | date: \"longDate\"\n                  | translate: this.currentLanguage\n                  | async\n              }}\n              {{ \"at\" | translate: this.currentLanguage | async }}\n              {{ startTime }}\n            </div>\n            <div class=\"amountData\">\n              <label>{{\n                \"Actual Price\" | translate: this.currentLanguage | async\n              }}</label>\n              <span> {{ checkoutData.price | currency: \"USD\" }}</span>\n            </div>\n            <div class=\"amountData\" *ngIf=\"isPromocodeApplied\">\n              <label>{{\n                \"Promocode Offer\" | translate: this.currentLanguage | async\n              }}</label>\n              <span>$5</span>\n            </div>\n            <div class=\"amountData subtotal\">\n              <label>{{\n                \"Total\" | translate: this.currentLanguage | async\n              }}</label>\n              <span>{{ totalPrice | currency: \"USD\" }}</span>\n            </div>\n            <div class=\"amountData wallet\">\n              <div>\n                <img src=\"../../../../assets/images/wallet.svg\" alt=\"\" />\n                <strong class=\"walletString\">{{\n                  \"Wallet Balance\" | translate: this.currentLanguage | async\n                }}</strong>\n              </div>\n              <span>{{ walletAmount | currency: \"USD\" }}</span>\n            </div>\n            <div class=\"amountData\">\n              <div *ngIf=\"showUseWalletCheckBox\">\n                <input\n                  [disabled]=\"isCardDetailsRequired && !isPayable\"\n                  type=\"checkbox\"\n                  [(ngModel)]=\"useWallet\"\n                  (click)=\"checkIsWallet(useWallet)\"\n                  id=\"isWallet\"\n                />\n                <label class=\"uwbString\" for=\"isWallet\">{{\n                  \"Use wallet balance\" | translate: this.currentLanguage | async\n                }}</label>\n              </div>\n            </div>\n            <div class=\"promocodeArea\">\n              <button class=\"promBtn\" (click)=\"getPromocodeList()\">\n                {{ \"Add Promocode\" | translate: this.currentLanguage | async }}\n              </button>\n            </div>\n            <div class=\"cancellingArea\">\n              <p>\n                <strong>{{\n                  \"Cancelling Description:\"\n                    | translate: this.currentLanguage\n                    | async\n                }}</strong>\n                {{\n                  \"As deposit is not refundable. User can use deposit in future bookings as a credit in any salon\"\n                    | translate: this.currentLanguage\n                    | async\n                }}\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"promocodeOverlay\" *ngIf=\"isShowPromocode\">\n    <div class=\"mainSection col-lg-3 col-md-3 col-sm-12\">\n      <h3>{{ \"Promocodes\" | translate: this.currentLanguage | async }}</h3>\n      <div class=\"promocodes\" *ngFor=\"let item of promocodesList\">\n        <div class=\"promocode\">\n          <span class=\"promotext\"\n            ><label for=\"{{ item.name }}\">{{ item.name }}</label>\n            <span class=\"terms\">{{\n              item.description | translate: this.currentLanguage | async\n            }}</span>\n            <span class=\"termsC\">\n              *T&C\n              <span class=\"termandcondition\"\n                ><p>\n                  {{\n                    item.termsAndCondition\n                      | translate: this.currentLanguage\n                      | async\n                  }}\n                </p></span\n              >\n            </span>\n          </span>\n\n          <input\n            type=\"radio\"\n            name=\"item.name\"\n            value=\"item\"\n            id=\"{{ item.name }}\"\n            (click)=\"validatePromocode(item, $event)\"\n          />\n        </div>\n      </div>\n      <div class=\"noPromocode\" *ngIf=\"noPromocode\">\n        <h5>\n          {{\n            \"No Promocodes Available\" | translate: this.currentLanguage | async\n          }}\n        </h5>\n      </div>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"dismissModal()\">\n        {{ \"Cancel\" | translate: this.currentLanguage | async }}\n      </button>\n    </div>\n  </div>\n\n  <div class=\"promocodeOverlay\" *ngIf=\"isBookingCompleted\">\n    <div class=\"mainSection col-lg-3 col-md-3 col-sm-12\">\n      <div><img src=\"../../../../assets/images/Asset 1.svg\" alt=\"\" /></div>\n      <div class=\"paymentSuccess\">\n        {{\n          \"Payment and Booking Successful\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </div>\n      <div>\n        <button class=\"btn btn-primary btn-sign-in\" (click)=\"goToBookings()\">\n          {{ \"See Bookings\" | translate: this.currentLanguage | async }}\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/download/download.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/download/download.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeDownloadDownloadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header> </app-header>\n  <div class=\"mainSection\">\n    <section class=\"app-info-section\">\n      <div class=\"app-info-inner\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-4 offset-md-2\">\n              <div class=\"app-info-img\">\n                <img src=\"../../../../assets/images/app-info.png\" />\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"app-info\">\n                <h5>\n                  {{\n                    \"THE APP IS NOW\"\n                      | translate: this.currentLanguage\n                      | async\n                      | uppercase\n                  }}\n                </h5>\n                <h4>\n                  {{\n                    \"AVAILABLE ON\"\n                      | translate: this.currentLanguage\n                      | async\n                      | uppercase\n                  }}\n                </h4>\n                <img src=\"../../../../assets/images/Appstore.png\" />\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/faq/faq.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/faq/faq.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header> </app-header>\n  <div class=\"mainSection\"></div>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/footer/footer.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/footer/footer.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeMainpageFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <p>footer works!</p> -->\n<section class=\"footer\">\n  <div class=\"footer-above\">\n    <img src=\"../../../../../assets/images/logo_white.png\" />\n    <div class=\"footer-links\">\n      <ul>\n        <li>\n          <a href=\"\">{{\n            \"HOME\" | translate: this.currentLanguage | async | uppercase\n          }}</a>\n        </li>\n        <li>\n          <a href=\"\">{{\n            \"ABOUT\" | translate: this.currentLanguage | async | uppercase\n          }}</a>\n        </li>\n        <li>\n          <a href=\"\">{{\n            \"DOWNLOAD\" | translate: this.currentLanguage | async | uppercase\n          }}</a>\n        </li>\n        <li>\n          <a href=\"\">{{\n            \"HELP\" | translate: this.currentLanguage | async | uppercase\n          }}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"social-icons\">\n      <div class=\"icon-outer\">\n        <!-- <img src=\"../../../../../assets/images/facebook.png\" /> -->\n        <i\n          class=\"fa fa-facebook\"\n          (click)=\"goTo('facebook')\"\n          aria-hidden=\"true\"\n        ></i>\n      </div>\n      <div class=\"icon-outer\">\n        <i\n          class=\"fa fa-twitter\"\n          (click)=\"goTo('twitter')\"\n          aria-hidden=\"true\"\n        ></i>\n        <!-- <img src=\"../../../../../assets/images/twitter.png\" /> -->\n      </div>\n      <div class=\"icon-outer\">\n        <i\n          class=\"fa fa-google-plus\"\n          (click)=\"goTo('google')\"\n          aria-hidden=\"true\"\n        ></i>\n        <!-- <img src=\"../../../../../assets/images/google.png\" /> -->\n      </div>\n      <div class=\"icon-outer\">\n        <i\n          class=\"fa fa-linkedin\"\n          (click)=\"goTo('linkedin')\"\n          aria-hidden=\"true\"\n        ></i>\n        <!-- <img src=\"../../../../../assets/images/indeed.png\" /> -->\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-below\">\n    <div class=\"reserved-sec\">\n      © {{ \"All rights reserved\" | translate: this.currentLanguage | async }} |\n      Bookapp, Inc.\n    </div>\n    <div class=\"terms-privacy\">\n      <a href=\"\">{{\n        \"Terms of Use\" | translate: this.currentLanguage | async\n      }}</a>\n      |\n      <a href=\"\">{{\n        \"Privacy​ Policy\" | translate: this.currentLanguage | async\n      }}</a>\n    </div>\n  </div>\n</section>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/googlesearch/googlesearch.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/googlesearch/googlesearch.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeMainpageGooglesearchGooglesearchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<input class=\"input\" type=\"text\" [(ngModel)]=\"autocompleteInput\" #addresstext />\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/header/header.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/header/header.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeMainpageHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header id=\"header\">\n  <nav class=\"navbar navbar-expand-xl navbar-ba\">\n    <a class=\"navbar-brand\" href=\"index.html\"\n      ><img\n        src=\"../../../assets/images/logo.png\"\n        alt=\"BookApp\"\n        class=\"img-fluid\"\n    /></a>\n\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarNav\"\n      aria-controls=\"navbarNav\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"fas fa-bars\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"index.html\">{{\n            \"Home\" | translate: this.currentLanguage | async\n          }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"'/about'\"\n            routerLinkActive=\"router-link-active\"\n            >{{\n              \"ABOUT\" | translate: this.currentLanguage | async | uppercase\n            }}</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">{{\n            \"Contact Us\" | translate: this.currentLanguage | async\n          }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">{{\n            \"Our Services\" | translate: this.currentLanguage | async\n          }}</a>\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"'/privacypolicy'\"\n            routerLinkActive=\"router-link-active\"\n            >{{ \"Privacy Policy\" | translate: this.currentLanguage | async }}</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a\n            class=\"nav-link\"\n            [routerLink]=\"'/termsandcondition'\"\n            routerLinkActive=\"router-link-active\"\n            >{{\n              \"Terms and conditions\" | translate: this.currentLanguage | async\n            }}</a\n          >\n        </li>\n        <li class=\"nav-item dropdown\">\n          <a\n            class=\"nav-link dropdown-toggle\"\n            id=\"navbarDropdown\"\n            [value]=\"currentLanguage\"\n            role=\"button\"\n            data-bs-toggle=\"dropdown\"\n            aria-expanded=\"false\"\n            >{{ currentLanguage }}</a\n          >\n          <ul\n            class=\"dropdown-menu langDropdown\"\n            aria-labelledby=\"navbarDropdown\"\n          >\n            <ng-container *ngFor=\"let item of langList\">\n              <li *ngIf=\"item !== currentLanguage\">\n                <a\n                  class=\"dropdown-item\"\n                  [value]=\"item\"\n                  (click)=\"handleDropDown($event.target)\"\n                  >{{ item }}</a\n                >\n              </li>\n            </ng-container>\n          </ul>\n        </li>\n        <li class=\"nav-item\">\n          <button\n            class=\"button-ba\"\n            *ngIf=\"!isUserLoggedIn\"\n            type=\"submit\"\n            (click)=\"goToLogin()\"\n          >\n            {{ \"Sign in / Sign up\" | translate: this.currentLanguage | async }}\n          </button>\n\n          <div *ngIf=\"isUserLoggedIn\" class=\"userDetail\">\n            {{ userName }}\n            <div class=\"logout\">\n              <i class=\"material-icons\" (click)=\"logout()\" title=\"Logout\">\n                exit_to_app\n              </i>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/mainpage.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/mainpage.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeMainpageMainpageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"homepage\">\n  <app-header></app-header>\n\n  <section class=\"banner-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 offset-md-6\">\n          <div class=\"book-appointement\">\n            <h2>\n              {{\n                \"Book An Appointment Now\"\n                  | translate: this.currentLanguage\n                  | async\n              }}\n            </h2>\n            <form [formGroup]=\"searchSalonForm\">\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label>{{\n                      \"My Date\" | translate: this.currentLanguage | async\n                    }}</label>\n                    <div class=\"book-appointement-inner\">\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        [minDate]=\"minDate\"\n                        [maxDate]=\"maxDate\"\n                        #dp=\"bsDatepicker\"\n                        bsDatepicker\n                        [(ngModel)]=\"myDateValue\"\n                        [ngModelOptions]=\"{ standalone: true }\"\n                        (ngModelChange)=\"onDateChange($event)\"\n                      />\n                      <img src=\"../../../../assets/images/calendar.svg\" />\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"locationLabel\"\n                      >{{\n                        \"My Location\" | translate: this.currentLanguage | async\n                      }}\n                      <div class=\"locationArea\">\n                        <img\n                          (click)=\"getCurrentLocation()\"\n                          class=\"location\"\n                          src=\"../../../../assets/images/current-location.png\"\n                        />\n                      </div>\n                    </label>\n                    <div class=\"book-appointement-inner\">\n                      <!-- <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        placeholder=\"Near Me\"\n                        id=\"\"\n                      /> -->\n\n                      <app-googlesearch\n                        class=\"geoLoc\"\n                        (setAddress)=\"getAddress($event)\"\n                        adressType=\"geocode\"\n                        [autocompleteInput]=\"searchSalonForm.value['location']\"\n                      ></app-googlesearch>\n                      <img src=\"../../../../assets/images/location-pin.svg\" />\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12\">\n                  <div class=\"form-group\">\n                    <label>{{\n                      \"My Category\" | translate: this.currentLanguage | async\n                    }}</label>\n                    <div\n                      class=\"book-appointement-inner\"\n                      (click)=\"openServiceModal()\"\n                    >\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        [(ngModel)]=\"serviceName\"\n                        [ngModelOptions]=\"{ standalone: true }\"\n                        placeholder=\"{{\n                          'Salon, Service, etc'\n                            | translate: this.currentLanguage\n                            | async\n                        }}\"\n                        id=\"\"\n                      />\n                      <img src=\"../../../../assets/images/category.svg\" />\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <span *ngIf=\"errorMsg !== null\">{{ errorMsg }}</span>\n              <div class=\"btn-submit\">\n                <button\n                  type=\"submit\"\n                  [disabled]=\"searchSalonForm.invalid\"\n                  (click)=\"searchSalons(searchSalonForm.value)\"\n                  class=\"btn btn-primary\"\n                >\n                  {{\n                    \"SEARCH\"\n                      | translate: this.currentLanguage\n                      | async\n                      | uppercase\n                  }}\n                </button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <section class=\"get-stylish-look\">\n    <h2>\n      {{\n        \"GET A STYLISH LOOK\"\n          | translate: this.currentLanguage\n          | async\n          | uppercase\n      }}\n    </h2>\n    <!-- <div class=\"style-look-details\">\n            LOREM IPSUM DOLOR SIT AMET\n        </div> -->\n  </section>\n  <div class=\"btn-book-now\">\n    <button class=\"btn btn-primary\" type=\"submit\">\n      {{ \"BOOK NOW\" | translate: this.currentLanguage | async | uppercase }}\n    </button>\n    <img src=\"../../../../assets/images/hairdresser-chair.svg\" />\n  </div>\n  <section class=\"about-us\">\n    <div class=\"about-us-inner\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"about-us-img\">\n              <img src=\"../../../../assets/images/about-us.png\" />\n            </div>\n          </div>\n          <div class=\"col-md-7\">\n            <h2>\n              {{\n                \"ABOUT US\" | translate: this.currentLanguage | async | uppercase\n              }}\n            </h2>\n            <p>\n              {{\n                \"Bookapp is an app making scheduling of the best professionals in the health, wellness, and beauty industry in Switzerland easier. Find reliable reviews and make an appointment now.\"\n                  | translate: this.currentLanguage\n                  | async\n              }}\n            </p>\n            <button class=\"btn btn-primary\" type=\"submit\">\n              {{\n                \"KNOW MORE\"\n                  | translate: this.currentLanguage\n                  | async\n                  | uppercase\n              }}\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"services-section\">\n    <h2>\n      {{\n        \"WHAT TYPE OF SERVICE ARE YOU LOOKING FOR\"\n          | translate: this.currentLanguage\n          | async\n      }}<img src=\"../../../../assets/images/question.svg\" />\n    </h2>\n    <div class=\"services-section-outer\">\n      <div class=\"services-outer\">\n        <div class=\"services-inner\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"40.243\"\n            height=\"49.127\"\n            viewBox=\"0 0 40.243 49.127\"\n          >\n            <defs>\n              <!-- <style>\n                .a {\n                  opacity: 0.4;\n                }\n                .b {\n                  fill: #ff7d7d;\n                }\n              </style> -->\n            </defs>\n            <g class=\"a\">\n              <path\n                class=\"b\"\n                d=\"M68.953,21.046A11.539,11.539,0,0,0,58.873.556H35.04c-1.944,0-1.609,10.545,0,10.545H50.881c0,.15-.022.295-.022.443a11.539,11.539,0,0,0,9.657,11.378v2.5H59.184v2.5h1.333v1.5H59.184v2.5h1.333v4.907a4.777,4.777,0,0,0-1.333,3.307,4.884,4.884,0,0,0,6.966,4.363l3.1,4.635,1.29-.865-3.109-4.641a4.764,4.764,0,0,0,1.233-5.1h.283V21.046ZM62.4,7.326a4.192,4.192,0,0,1,2.338.708H60.065A4.2,4.2,0,0,1,62.4,7.326Zm-2.828,1.1h5.658a4.242,4.242,0,0,1,.762.916h-7.18A4.232,4.232,0,0,1,59.575,8.422Zm-.974,1.3h7.6a4.27,4.27,0,0,1,.334.985H58.267A4.277,4.277,0,0,1,58.6,9.727Zm3.8,6.035a4.191,4.191,0,0,1-2.314-.693h4.631A4.2,4.2,0,0,1,62.4,15.763Zm2.815-1.082H59.59a4.193,4.193,0,0,1-.734-.86h7.1A4.316,4.316,0,0,1,65.218,14.68Zm.956-1.248H58.635a4.246,4.246,0,0,1-.329-.9h8.2A4.131,4.131,0,0,1,66.173,13.432Zm.4-1.29H58.231a4.022,4.022,0,0,1-.046-.6,4.221,4.221,0,0,1,.023-.443H66.6c.014.147.025.295.025.443A4.472,4.472,0,0,1,66.575,12.142Z\"\n                transform=\"translate(-33.704)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M68.4,172.967h-.889v-9.546h-.832v9.546h-.666v-9.546h-.832v9.546H64.3v-9.546h-.834v9.546h-.832v-9.546H61.8v9.546h-.889v-9.546h-.832v9.546H59.024v-9.546h-.832v9.546H57.3v-9.546h-.833v14.806l1.332,6.285h10.1l1.331-6.285V163.421H68.4Z\"\n                transform=\"translate(-53.471 -141.884)\"\n              />\n            </g>\n          </svg>\n        </div>\n        <h5>{{ \"Hair\" | translate: this.currentLanguage | async }}</h5>\n      </div>\n      <div class=\"services-outer\">\n        <div class=\"services-inner\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"55.929\"\n            height=\"35.299\"\n            viewBox=\"0 0 55.929 35.299\"\n          >\n            <defs>\n              <style>\n                .a {\n                  opacity: 0.4;\n                }\n\n                .b {\n                  fill: #ff7d7d;\n                }\n              </style>\n            </defs>\n            <g class=\"a\">\n              <g transform=\"translate(0 0)\">\n                <path\n                  class=\"b\"\n                  d=\"M61.024,73.067l.355-.234a1.513,1.513,0,0,0-1.731-2.482c-23.645,16.531-40.856.814-41.579.138a1.513,1.513,0,0,0-2.079,2.2c.033.031.571.524,1.554,1.253l-3.029,4.995a1.516,1.516,0,0,0,.507,2.078,1.539,1.539,0,0,0,.788.221A1.52,1.52,0,0,0,17.1,80.51l2.962-4.88a36.312,36.312,0,0,0,6.327,3.047l-1.46,4.88a1.5,1.5,0,0,0,1.009,1.88l.435.064a1.515,1.515,0,0,0,1.445-1.08l1.445-4.813a34.3,34.3,0,0,0,7.788,1.175v4.833a1.512,1.512,0,1,0,3.023,0v-4.86a35.574,35.574,0,0,0,7.811-1.338l1.861,4.907a1.516,1.516,0,0,0,1.414.975l.535-.1a1.512,1.512,0,0,0,.88-1.949l-1.812-4.781a44.871,44.871,0,0,0,7.708-3.751l2.449,3.269a1.519,1.519,0,0,0,1.209.607,1.48,1.48,0,0,0,.906-.3,1.512,1.512,0,0,0,.307-2.116Z\"\n                  transform=\"translate(-8.469 -51.83)\"\n                />\n                <path\n                  class=\"b\"\n                  d=\"M55.834,34.719a13.635,13.635,0,0,0-1.876-2.044,24.279,24.279,0,0,0-2.393-1.957,32.567,32.567,0,0,0-3.354-2.063,29.4,29.4,0,0,0-4.232-1.85A26.537,26.537,0,0,0,39,25.526a32.911,32.911,0,0,0-5.511-.181c-1.886.159-3.772.161-5.672.392a50.455,50.455,0,0,0-5.6.695c-.918.16-1.829.288-2.715.484l-2.6.717a31.273,31.273,0,0,0-4.809,1.61,29.452,29.452,0,0,0-4.117,1.85c-1.236.653-2.368,1.21-3.342,1.77C3.7,33.5,2.885,34.045,2.216,34.5L.165,35.933,0,36.45a.449.449,0,0,0,.576.285l.049-.018,2.331-.793c.727-.255,1.615-.566,2.627-.924,1.03-.294,2.222-.553,3.488-.869a26.853,26.853,0,0,1,4.136-.753c.726-.106,1.475-.22,2.242-.333.774-.083,1.572-.1,2.369-.161l2.429-.15c.825,0,1.661.011,2.5.019A43.637,43.637,0,0,1,27.8,33c3.38.237,6.658,1.349,9.737,1.863a77.925,77.925,0,0,0,8.688.8c2.632.075,4.9.125,6.56.044,1.654-.06,2.67-.163,2.67-.163l.249-.1A.527.527,0,0,0,55.834,34.719Z\"\n                  transform=\"translate(0 -25.306)\"\n                />\n              </g>\n            </g>\n          </svg>\n        </div>\n        <h5>{{ \"Threading\" | translate: this.currentLanguage | async }}</h5>\n      </div>\n      <div class=\"services-outer\">\n        <div class=\"services-inner\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"37.798\"\n            height=\"53.052\"\n            viewBox=\"0 0 37.798 53.052\"\n          >\n            <defs>\n              <style>\n                .a {\n                  opacity: 0.4;\n                }\n\n                .b {\n                  fill: #ff7d7d;\n                }\n              </style>\n            </defs>\n            <g class=\"a\">\n              <path\n                class=\"b\"\n                d=\"M159.615,283.827a2.35,2.35,0,0,1-1.433.666,1.354,1.354,0,0,1-1.1-.381.82.82,0,1,0-1.191,1.129,2.925,2.925,0,0,0,2.164.9c.08,0,.16,0,.242-.008a3.99,3.99,0,0,0,2.45-1.112.82.82,0,0,0-1.129-1.191Z\"\n                transform=\"translate(-146.264 -252.583)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M285.086,284.112a1.357,1.357,0,0,1-1.1.381,2.349,2.349,0,0,1-1.433-.666.82.82,0,0,0-1.129,1.191,3.99,3.99,0,0,0,2.45,1.112q.122.009.242.008a2.926,2.926,0,0,0,2.164-.9.82.82,0,1,0-1.191-1.129Z\"\n                transform=\"translate(-258.04 -252.584)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M80.442,85.2a17.888,17.888,0,0,1-1.417-1.814,22.841,22.841,0,0,0-4.394,3.8c-3.55,3.962-5.307,8.77-4.82,13.19a5.2,5.2,0,0,0,.62,2.433,2.459,2.459,0,0,0,.787-.4c.016-.919.286-3.449,4.944-10.855C77.875,88.83,79.605,86.369,80.442,85.2Z\"\n                transform=\"translate(-69.732 -74.266)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M196.949,61.513c-3.883-4.381-9.428-7.212-14.125-7.212a16.667,16.667,0,0,0-7.322,1.867c3.308,4.82,12.986,11.048,13.364,11.242a38.2,38.2,0,0,1,8.086,6.333c1.038.985,1.934,1.836,2.712,2.441a3.5,3.5,0,0,0,1.3.761,5.075,5.075,0,0,0,.674-2.49C202.162,70.112,200.5,65.516,196.949,61.513Z\"\n                transform=\"translate(-163.934 -48.362)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M129.935,122.169a62.2,62.2,0,0,1-5.6-4.669,87.183,87.183,0,0,0-7.4,12.072C120.269,126.448,124.679,122.509,129.935,122.169Z\"\n                transform=\"translate(-111.776 -104.649)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M147.239,8.4c-.184-4.661-5.983-8.4-13.11-8.4-7.227,0-13.088,3.847-13.114,8.6A21.526,21.526,0,0,1,134.3,3.314C138.586,3.314,143.28,5.2,147.239,8.4Z\"\n                transform=\"translate(-115.406)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M128.309,191.126c-3.361-3.192-7.544-7.164-12.32-7.164-4.793,0-9.011,3.968-12.4,7.157-1.118,1.052-2.091,1.967-2.984,2.646a18.579,18.579,0,0,0-.146,2.369c0,9.907,6.971,20.759,15.569,20.759S131.6,206.041,131.6,196.134a18.763,18.763,0,0,0-.125-2.2A36.642,36.642,0,0,1,128.309,191.126Zm-23.563,3.542c0-2.679,2.172-4.1,4.851-4.1s4.851,1.42,4.851,4.1a4.851,4.851,0,1,1-9.7,0Zm11.282,18.613c-2.064,0-3.9-1.525-3.971-2.733a3.085,3.085,0,0,1,2.4-2.627,1.829,1.829,0,0,1,1.376.5c.043.032.1.071.146.107.054-.038.112-.08.158-.113a1.861,1.861,0,0,1,1.364-.5,3.111,3.111,0,0,1,2.5,2.642C119.932,211.756,118.092,213.28,116.028,213.28Zm6.431-13.762a4.851,4.851,0,0,1-4.851-4.851c0-2.679,2.172-4.1,4.851-4.1s4.851,1.42,4.851,4.1A4.851,4.851,0,0,1,122.459,199.519Z\"\n                transform=\"translate(-97.098 -163.842)\"\n              />\n            </g>\n          </svg>\n        </div>\n        <h5>{{ \"Facial\" | translate: this.currentLanguage | async }}</h5>\n      </div>\n      <div class=\"services-outer\">\n        <div class=\"services-inner\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"50.641\"\n            height=\"54.13\"\n            viewBox=\"0 0 50.641 54.13\"\n          >\n            <defs>\n              <style>\n                .a {\n                  opacity: 0.4;\n                }\n\n                .b {\n                  fill: #ff7d7d;\n                }\n              </style>\n            </defs>\n            <g class=\"a\">\n              <path\n                class=\"b\"\n                d=\"M145.418,10.438c5.938-1.751,10.421-4.3,9.612-7.043S143.755-1.038,137.816.714s-5.1,6.286-4.3,9.025S139.476,12.192,145.418,10.438Z\"\n                transform=\"translate(-120.129 0)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M139.026,120.478c-.853,3.43,8.548,4.6,16.991,6.708s15.644,2.393,16.5-1.038,1.57-9.1-6.875-11.2S139.88,117.048,139.026,120.478Z\"\n                transform=\"translate(-125.489 -101.847)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M150.9,240.768a13.867,13.867,0,0,0-4.4.641,7,7,0,0,1,2.931,5.374,4.963,4.963,0,0,1,7.339,1.391c1.593,2.766.094,5.9-2.568,7.732a5.4,5.4,0,0,1,2.81,2.912c.342,0,.682.012,1.029.012,9.746,0,24.792-1.858,24.792-6.352S160.645,240.768,150.9,240.768Z\"\n                transform=\"translate(-132.195 -214.387)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M98.163,268.251a7.934,7.934,0,0,0,3.522-8.215c-.468-1.888-1.575-3.523-3.522-3.523a3.19,3.19,0,0,0-3.133,3.5,4.754,4.754,0,0,0,.846,2.22C96.918,264.018,98.06,265.9,98.163,268.251Z\"\n                transform=\"translate(-86.362 -228.407)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M92.216,386.88a7.579,7.579,0,0,0-3.489,5.009,7.172,7.172,0,0,0-.035,3.206c.466,1.889,1.577,3.524,3.524,3.524a3.192,3.192,0,0,0,3.133-3.5A4.758,4.758,0,0,0,94.5,392.9C93.461,391.116,92.319,389.24,92.216,386.88Z\"\n                transform=\"translate(-80.572 -344.489)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M19.653,307.361c1.786.177,4.7-.344,7.468,1.08a2.323,2.323,0,0,0-.066-.713,8,8,0,0,0-5.286-6.446c-1.858-.541-3.859-.358-4.815,1.29A3.262,3.262,0,0,0,19.653,307.361Z\"\n                transform=\"translate(-16.462 -268.028)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M138.9,382.716l-.005,0a12.37,12.37,0,0,1-6.289-1.029c-.028,3.916,4.088,8.326,8.028,7.357a3.768,3.768,0,0,0,2.137-1.488C143.908,385.577,142.793,382.716,138.9,382.716Z\"\n                transform=\"translate(-119.817 -339.866)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M26.5,373.082a7.3,7.3,0,0,0-5.368-.691,7.669,7.669,0,0,0-3.508,1.747c-2.42,2.319-2.046,4.772-.249,5.894a3.4,3.4,0,0,0,3.553-.12C22.617,378.941,23.078,375.272,26.5,373.082Z\"\n                transform=\"translate(-15.92 -331.396)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M138.326,310.838A8.055,8.055,0,0,0,142.211,309c1.7-1.638,2.406-3.766.816-5.435a3.312,3.312,0,0,0-4.125-.341c-1.683.974-2.146,4.644-5.567,6.833A7.355,7.355,0,0,0,138.326,310.838Z\"\n                transform=\"translate(-120.47 -269.51)\"\n              />\n            </g>\n          </svg>\n        </div>\n        <h5>{{ \"Spa\" | translate: this.currentLanguage | async }}</h5>\n      </div>\n      <div class=\"services-outer\">\n        <div class=\"services-inner\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"47.321\"\n            height=\"47.854\"\n            viewBox=\"0 0 47.321 47.854\"\n          >\n            <defs>\n              <style>\n                .a {\n                  opacity: 0.4;\n                }\n\n                .b {\n                  fill: #ff7d7d;\n                }\n              </style>\n            </defs>\n            <g class=\"a\">\n              <g transform=\"translate(0)\">\n                <path\n                  class=\"b\"\n                  d=\"M44.935,113.317a10.818,10.818,0,0,1-6.019-1.823A124.407,124.407,0,0,1,27.8,103.15L4.774,83.76,2.848,86.048l5.234,4.413A5.264,5.264,0,0,0,7.2,99.148c-.117-.175-2.543,3.767-2.659,3.89l-1.454,2.614,12.041,6.691-.3.449a7.075,7.075,0,0,0,5.893,10.994,17.047,17.047,0,0,0,5.407-.878,6.08,6.08,0,0,1,3.378-.13,33.75,33.75,0,0,0,8.183,1.008h7.247a5.234,5.234,0,1,0,0-10.468ZM19.829,100.905a2.829,2.829,0,0,1-2.692,1.944,2.278,2.278,0,0,1-1.46-.529l-6.565-5.47a2.278,2.278,0,0,1,.737-3.911l.843-.281,9.272,7.814Z\"\n                  transform=\"translate(-2.848 -75.931)\"\n                />\n                <path\n                  class=\"b\"\n                  d=\"M192.162,8.7V16.45a4.486,4.486,0,1,0,8.973,0,1.5,1.5,0,0,1,1.5-1.5,4.486,4.486,0,0,0,4.486-4.486v-1.5h7.477a4.486,4.486,0,1,0,0-8.973H211.6V2.991h2.991a1.5,1.5,0,1,1,0,2.991H193.657a1.5,1.5,0,0,1,0-2.991h2.991V0h-2.991a4.476,4.476,0,0,0-1.5,8.7Z\"\n                  transform=\"translate(-171.758 0)\"\n                />\n                <rect\n                  class=\"b\"\n                  width=\"2.991\"\n                  height=\"2.991\"\n                  transform=\"translate(27.881 0)\"\n                />\n                <rect\n                  class=\"b\"\n                  width=\"2.991\"\n                  height=\"2.991\"\n                  transform=\"translate(33.862 0)\"\n                />\n              </g>\n            </g>\n          </svg>\n        </div>\n        <h5>{{ \"Pedicure\" | translate: this.currentLanguage | async }}</h5>\n      </div>\n      <div class=\"services-outer\">\n        <div class=\"services-inner\">\n          <svg\n            xmlns=\"http://www.w3.org/2000/svg\"\n            width=\"44.796\"\n            height=\"45.516\"\n            viewBox=\"0 0 44.796 45.516\"\n          >\n            <defs>\n              <style>\n                .a {\n                  opacity: 0.4;\n                }\n\n                .b {\n                  fill: #ff7d7d;\n                }\n              </style>\n            </defs>\n            <g class=\"a\" transform=\"translate(-348.059 -2125.388)\">\n              <path\n                class=\"b\"\n                d=\"M53.881,137.323v-.309a1.7,1.7,0,0,0-3.219-.76l-5,9.991-1.454-.727,3.4-6.8L46.7,128h-1.1a2.445,2.445,0,0,0-2.3,1.618l-3.1,8.692a2.43,2.43,0,0,0-.142.82v12.441a.814.814,0,0,1-.052.286l-4.465,11.906H45.93l3.1-12.389,4.755-13.485A1.69,1.69,0,0,0,53.881,137.323Z\"\n                transform=\"translate(312.512 2007.142)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M309.869,151.856a.814.814,0,0,1-.052-.285V139.129a2.431,2.431,0,0,0-.142-.82l-3.1-8.691a2.445,2.445,0,0,0-2.3-1.618h-1.284l-.838,10.487,3.515,7.031-1.454.727-5-9.991a1.7,1.7,0,0,0-3.219.76v.309a1.7,1.7,0,0,0,.1.566l4.734,13.411,3.119,12.463h10.384Z\"\n                transform=\"translate(78.521 2007.142)\"\n              />\n              <path\n                class=\"b\"\n                d=\"M172.381,52.183a3.33,3.33,0,0,1-.189-1.106v-.309a3.325,3.325,0,0,1,6.3-1.487l.074.148.945-11.8,0-4a1.626,1.626,0,1,0-3.251,0v3.251H174.63V33.219a1.219,1.219,0,0,0-2.438,0v3.658h-1.626V33.219a1.219,1.219,0,1,0-2.438,0v4.47H166.5V34.845a1.219,1.219,0,1,0-2.438,0V38.5h-1.626V36.47a1.219,1.219,0,0,0-2.438,0v3.658l.815,9.556.2-.4a3.325,3.325,0,0,1,6.3,1.487v.309a3.321,3.321,0,0,1-.189,1.106L162.392,65.6l-.166.663.4,4.736a7.131,7.131,0,0,0,14.213-.037l.388-4.881-.138-.554Zm-4.281-3.84a4.169,4.169,0,0,0-4.689-2.541l-.319-1.594a5.794,5.794,0,0,1,6.517,3.53l.087.215-1.51.6Zm3.6,10.317a7.3,7.3,0,0,1-2.764-7.233l.016-.08,1.594.321-.016.079a5.664,5.664,0,0,0,2.145,5.613Z\"\n                transform=\"translate(200.704 2093.388)\"\n              />\n            </g>\n          </svg>\n        </div>\n        <h5>{{ \"Waxing\" | translate: this.currentLanguage | async }}</h5>\n      </div>\n    </div>\n  </section>\n  <section class=\"app-info-section\">\n    <div class=\"app-info-inner\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 offset-md-2\">\n            <div class=\"app-info-img\">\n              <img src=\"../../../../assets/images/app-info.png\" />\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"app-info\">\n              <h5>\n                {{ \"THE APP IS\" | translate: this.currentLanguage | async }}\n              </h5>\n              <h4>\n                {{ \"AVAILABLE ON\" | translate: this.currentLanguage | async }}\n              </h4>\n              <img src=\"../../../../assets/images/Appstore.png\" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <app-footer></app-footer>\n</div>\n\n<div class=\"modal-overlay\" *ngIf=\"isModal\">\n  <div class=\"modal-section\">\n    <h4>{{ \"Services\" | translate: this.currentLanguage | async }}</h4>\n    <div class=\"book-appointement-inner\">\n      <input\n        class=\"form-control\"\n        id=\"\"\n        placeholder=\"\"\n        type=\"text\"\n        [(ngModel)]=\"searchTerm\"\n      />\n      <!-- <img src=\"../../../../assets/images/category.svg\" /> -->\n    </div>\n\n    <form [formGroup]=\"categoriesForm\">\n      <div class=\"servicesWrapper\" id=\"style-3\">\n        <div\n          class=\"hair-section\"\n          *ngFor=\"let item of categoriesList | filter: searchTerm\"\n        >\n          <h5>{{ item.catname | translate: this.currentLanguage | async }}</h5>\n          <div class=\"hair-section-outer\">\n            <div class=\"hair-section-inner\">\n              <label *ngFor=\"let elem of item.services\">\n                <input\n                  formControlName=\"service\"\n                  type=\"radio\"\n                  name=\"service\"\n                  [value]=\"elem\"\n                />\n                {{ elem.name | translate: this.currentLanguage | async }}\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"btn-category-section\">\n        <button class=\"btn\" (click)=\"dismissModal()\">\n          {{ \"CANCEL\" | translate: this.currentLanguage | async | uppercase }}\n        </button>\n        <button\n          class=\"btn btn-done\"\n          [disabled]=\"categoriesForm.invalid\"\n          (click)=\"selectedService(categoriesForm.value)\"\n        >\n          {{ \"DONE\" | translate: this.currentLanguage | async | uppercase }}\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/salon-detail/salon-detail.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/salon-detail/salon-detail.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeSalonDetailSalonDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"banner-section\">\n  <div class=\"booking-view\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"\">\n            <h4>{{ salonData.name }}</h4>\n            <div class=\"rating-sec rating-detail\">\n              <!-- <i class=\"fa fa-star active-star \" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-star active-star \" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-star active-star \" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-star active-star \" aria-hidden=\"true\"></i>\n              <i class=\"fa fa-star inactive-star \" aria-hidden=\"true\"></i> -->\n              <!-- <star-rating-comp\n                [starType]=\"'svg'\"\n                [readOnly]=\"true\"\n                [rating]=\"salonData.avgRatings\"\n              ></star-rating-comp> -->\n            </div>\n          </div>\n          <div class=\"booking-view-left\">\n            <div class=\"booking-view-left-img\">\n              <img src=\"{{ salonData.image }}\" />\n            </div>\n\n            <div class=\"booking-view-left-info\">\n              <ul>\n                <li>\n                  <h4\n                    class=\"find\"\n                    title=\"Find direction on Google Maps\"\n                    (click)=\"findDirection()\"\n                  >\n                    {{ \"Direction\" | translate: this.currentLanguage | async }}\n                  </h4>\n                  <div class=\"\">\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    <span>{{ salonData.contact }}</span>\n                  </div>\n                </li>\n                <li>\n                  <div class=\"share\">\n                    <img src=\"../../../../assets/images/share.svg\" />\n                    <!-- <img src=\"../../../../assets/images/pin.svg\"> -->\n                    <h4>\n                      {{ \"Share\" | translate: this.currentLanguage | async }}\n                    </h4>\n                  </div>\n\n                  <div class=\"reviews\" (click)=\"getReviewRatings()\">\n                    <i class=\"fa fa-star active-star\" aria-hidden=\"true\"></i>\n                    <span>{{\n                      \"Reviews\" | translate: this.currentLanguage | async\n                    }}</span>\n                  </div>\n                </li>\n              </ul>\n              <div class=\"working-days\">\n                <h5>\n                  {{ \"Working Days\" | translate: this.currentLanguage | async }}\n                </h5>\n                <ul *ngFor=\"let item of salonAvailalbilityData\">\n                  <li>\n                    <div class=\"date-sec\">\n                      <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i>\n                      <h5>\n                        {{ item._id | translate: this.currentLanguage | async }}\n                      </h5>\n                    </div>\n                    <div class=\"time-sec\" *ngIf=\"item.status\">\n                      <span>\n                        {{\n                          \"Open\" | translate: this.currentLanguage | async\n                        }}</span\n                      >\n                    </div>\n                    <div class=\"time-sec close-sec\" *ngIf=\"!item.status\">\n                      <span style=\"color: purple\">\n                        {{\n                          \"Closed\" | translate: this.currentLanguage | async\n                        }}</span\n                      >\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"our-services\">\n            <h5>\n              {{ \"Our Services\" | translate: this.currentLanguage | async }}\n            </h5>\n            <div class=\"hair-sec\" *ngFor=\"let item of salonCategoriesData\">\n              <h6 class=\"categoryName\">\n                {{ item.name | translate: this.currentLanguage | async }}\n              </h6>\n              <div class=\"hair-sec-inner\">\n                <div\n                  class=\"hair-services\"\n                  *ngFor=\"let service of item.services\"\n                >\n                  <div>\n                    <img src=\"../../../../assets/images/Group 8177.svg\" />\n                  </div>\n                  <div>\n                    <h6>\n                      {{\n                        service.servicename\n                          | translate: this.currentLanguage\n                          | async\n                      }}\n                    </h6>\n                    <div class=\"dollar-req\">{{ service.price }}</div>\n                    <div class=\"min-req\">\n                      {{ service.duration }}\n                      {{ \"mins\" | translate: this.currentLanguage | async }}\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"overlay\" *ngIf=\"isReviewShow\">\n    <div class=\"main-section scrollbar\" id=\"style-3\">\n      <div class=\"img\">\n        <img\n          (click)=\"dismissModal()\"\n          src=\"../../../../assets/images/close2.png\"\n          alt=\"\"\n          title=\"Close\"\n          class=\"closeImage\"\n        />\n      </div>\n\n      <div class=\"reviews\" *ngFor=\"let item of salonStarRatings\">\n        <div class=\"imgSec\">\n          <img src=\"../../../../assets/images/user (1).png\" alt=\"\" />\n        </div>\n        <div class=\"commentSec\">\n          <div class=\"userName\">\n            <span>{{ item.firstName }}</span> <span>{{ item.lastName }}</span>\n          </div>\n          <div class=\"comment\">\n            {{ item.comments | translate: this.currentLanguage | async }}\n          </div>\n          <div class=\"ratings\">\n            <app-starrating [ratings]=\"item.ratings\"></app-starrating>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/salon-list/salon-list.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/salon-list/salon-list.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeSalonListSalonListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<section class=\"banner-section\">\n  <div class=\"salon-list\">\n    <div class=\"salon-list-inner\">\n      <div class=\"filterPref\">\n        <h4>{{ \"Filters\" | translate: this.currentLanguage | async }}</h4>\n        <button (click)=\"goToFilter()\" class=\"btn btn-primary regBtn\">\n          {{\n            \"RESET FILTER\" | translate: this.currentLanguage | async | uppercase\n          }}\n        </button>\n      </div>\n      <input\n        type=\"text\"\n        class=\"form-control searchInput\"\n        placeholder=\"{{ 'Search' | translate: this.currentLanguage | async }}\"\n        [(ngModel)]=\"searchTerm\"\n        (ngModelChange)=\"clearFilter()\"\n      />\n    </div>\n  </div>\n  <div class=\"salon-info-outer\">\n    <div class=\"container\">\n      <div class=\"salon-filter\">\n        <h4>{{ \"Salons\" | translate: this.currentLanguage | async }}</h4>\n        <img\n          src=\"../../../../assets/images/Hamburger.svg\"\n          (click)=\"openFilterModal()\"\n        />\n      </div>\n\n      <div class=\"row\">\n        <div class=\"noRecordsDiv\" *ngIf=\"showNoRecords\">\n          <span>{{\n            \"No Salons Found\" | translate: this.currentLanguage | async\n          }}</span>\n        </div>\n        <!-- starthere -->\n        <div class=\"col-md-12\" *ngFor=\"let item of salonListingData\">\n          <div class=\"salon-list-info\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"salon-list-info-left\">\n                  <div class=\"salon-img\">\n                    <img src=\"{{ item.image }}\" />\n                  </div>\n\n                  <div class=\"salon-info\">\n                    <h5>{{ item.name }}</h5>\n                    <div class=\"rating-sec\">\n                      <app-starrating\n                        [ratings]=\"item.avgRatings\"\n                      ></app-starrating>\n                    </div>\n                    <div class=\"location\">\n                      <img src=\"../../../../assets/images/location-pin.svg\" />\n                      <span>{{ item.location }}</span>\n                    </div>\n                    <button\n                      (click)=\"showSalonDetails(item)\"\n                      class=\"btn btn-primary detailBtn\"\n                    >\n                      {{ \"Detail\" | translate: this.currentLanguage | async }}\n                    </button>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-8\">\n                <div class=\"salon-list-info-right\">\n                  <div *ngFor=\"let slot of item.slots\">\n                    <div class=\"time-slots\" *ngIf=\"!slot.status\">\n                      <a\n                        class=\"slotBox\"\n                        title=\"Pick Slot\"\n                        (click)=\"bookSlot(slot.time, item)\"\n                      >\n                        {{ slot.time }}\n                      </a>\n                    </div>\n                  </div>\n                  <div *ngIf=\"!item.slots.length\" class=\"noSlots\">\n                    {{\n                      \"No Slots Available\"\n                        | translate: this.currentLanguage\n                        | async\n                    }}\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"book-appointement-inner book-appointement-inner-sec\">\n      <button\n        class=\"btn btn-sign-in\"\n        (click)=\"getAllSalons()\"\n        *ngIf=\"isShowCountButton\"\n      >\n        {{ \"Show More\" | translate: this.currentLanguage | async }}\n      </button>\n    </div>\n    <div class=\"bookapp-rights\">\n      2020, Bookapp.\n      {{ \"All rights reserved\" | translate: this.currentLanguage | async }}\n    </div>\n  </div>\n</section>\n\n<div class=\"FilterOverlay\" *ngIf=\"isShowFilterPopUp\">\n  <div class=\"mainSect col-lg-3 col-md-6 col-sm-12\">\n    <label class=\"sortBY\">{{\n      \"Sort By\" | translate: this.currentLanguage | async\n    }}</label>\n    <div class=\"price\" (click)=\"sortByPrice()\" title=\"Sort by price\"></div>\n    <div\n      class=\"distance\"\n      (click)=\"sortByDistance()\"\n      title=\"Sort by distance\"\n    ></div>\n  </div>\n</div>\n\n<app-footer></app-footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/starrating/starrating.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/starrating/starrating.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeStarratingStarratingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"starWrapper\">\n  <!-- <div class=\"outer\">\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n    <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n  </div> -->\n  <div class=\"inner\" id=\"innerStar\">\n    <i\n      class=\"fa fa-star rated\"\n      aria-hidden=\"true\"\n      *ngFor=\"let item of tempArray\"\n    ></i>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/termsandcondition/termsandcondition.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/termsandcondition/termsandcondition.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeTermsandconditionTermsandconditionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header> </app-header>\n  <div class=\"mainSection\"></div>\n  <app-footer></app-footer>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/userlogin/userlogin.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/userlogin/userlogin.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserHomeUserloginUserloginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- // contry = country; // \n<span matPrefix>\n  //\n  <mat-select\n    formControlName=\"countrycode\"\n    *ngIf=\"country_code.length > 1\"\n    matPrefix\n  >\n    //\n    <mat-option *ngFor=\"let code of country_code\">\n      // {{ code }} //\n    </mat-option>\n    //\n  </mat-select>\n  //\n  <h6 *ngIf=\"country_code.length == 1\">{{ country_code[0] }}</h6>\n  // &nbsp; //\n</span>\n-->\n\n<div class=\"user-login-section\">\n  <div class=\"login-section-inner\">\n    <div class=\"login-left\">\n      <div class=\"login-left-info\">\n        <img src=\"../../../../assets/images/logo.svg\" />\n        <h2>{{ \"Welcome!\" | translate: this.currentLanguage | async }}</h2>\n        <div class=\"sign-in\">\n          {{\n            \"Sign in to manage your listings and booking\"\n              | translate: this.currentLanguage\n              | async\n          }}\n        </div>\n      </div>\n      <div class=\"form-sec\">\n        <form [formGroup]=\"loginForm\" id=\"mobileNoForm\" *ngIf=\"!isOtpShow\">\n          <div class=\"max-width-sec\">\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label for=\"InputEmail\">{{\n                    \"Mobile Number\" | translate: this.currentLanguage | async\n                  }}</label>\n\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <mat-form-field>\n                        <mat-label>{{\n                          \"Country\" | translate: this.currentLanguage | async\n                        }}</mat-label>\n                        <mat-select\n                          formControlName=\"country\"\n                          (selectionChange)=\"countryCode($event.value)\"\n                        >\n                          <mat-option\n                            *ngFor=\"let sub of countriesList\"\n                            [value]=\"sub\"\n                          >\n                            {{ sub.name }}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n\n                      <input\n                        type=\" text\"\n                        class=\"form-control codesList\"\n                        placeholder=\"Country Code\"\n                        disabled\n                        formControlName=\"code\"\n                      />\n\n                      <input\n                        type=\"text\"\n                        class=\"form-control\"\n                        placeholder=\"Mobile Number\"\n                        formControlName=\"phone\"\n                      />\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-12\">\n                <button\n                  type=\"submit\"\n                  [disabled]=\"loginForm.invalid\"\n                  (click)=\"getOtp(loginForm.value)\"\n                  class=\"btn btn-primary btn-get-otp\"\n                >\n                  {{\n                    \"GET OTP\"\n                      | translate: this.currentLanguage\n                      | async\n                      | uppercase\n                  }}\n                </button>\n              </div>\n            </div>\n          </div>\n        </form>\n\n        <form [formGroup]=\"otpVerificationForm\" *ngIf=\"isOtpShow\" id=\"otpForm\">\n          <div class=\"fields input-group mb-3\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              formControlName=\"token\"\n              placeholder=\"Enter Otp\"\n              mask=\"0 0 0 0\"\n            />\n          </div>\n          <div class=\"fields\">\n            <button\n              class=\"btn btn-primary btn-get-otp\"\n              (click)=\"getOtpOnCall()\"\n            >\n              {{\n                \"GET OTP ON CALL\"\n                  | translate: this.currentLanguage\n                  | async\n                  | uppercase\n              }}\n            </button>\n          </div>\n          <div class=\"fields\">\n            <button\n              class=\"btn btn-primary btn-get-otp\"\n              (click)=\"completeOtpVerification(otpVerificationForm.value)\"\n            >\n              {{\n                \"SUBMIT OTP\"\n                  | translate: this.currentLanguage\n                  | async\n                  | uppercase\n              }}\n            </button>\n          </div>\n        </form>\n\n        <form [formGroup]=\"registerUserForm\" *ngIf=\"showRegisterForm\">\n          <div class=\"formfields\">\n            <input\n              class=\"form-control\"\n              type=\"text\"\n              placeholder=\"First Name\"\n              formControlName=\"firstName\"\n            />\n          </div>\n          <div class=\"formfields\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Last Name\"\n              formControlName=\"lastName\"\n            />\n          </div>\n          <!-- <div class=\"formfields\">\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              placeholder=\"Mobile Number\"\n              formControlName=\"phone\"\n            />\n          </div> -->\n          <div class=\"formfields\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Email\"\n              formControlName=\"email\"\n            />\n          </div>\n          <div class=\"formfields\">\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              placeholder=\"Mobile Number\"\n              formControlName=\"phone\"\n            />\n          </div>\n          <div class=\"formfields\">\n            <button\n              class=\"btn btn-primary btn-get-otp\"\n              [disabled]=\"registerUserForm.invalid\"\n              (click)=\"registerUser(registerUserForm.value)\"\n            >\n              {{\n                \"REGISTER\" | translate: this.currentLanguage | async | uppercase\n              }}\n            </button>\n          </div>\n        </form>\n\n        <div class=\"col-md-12\">\n          <h5>\n            {{\n              \"or Login using social media\"\n                | translate: this.currentLanguage\n                | async\n            }}\n          </h5>\n          <div class=\"social-info\">\n            <a class=\"socilaLogin\" (click)=\"socialSignIn('apple')\">\n              <i aria-hidden=\"true\" class=\"fa fa-apple apple-icon\"></i>\n            </a>\n            <a class=\"socilaLogin\" (click)=\"socialSignIn('facebook')\">\n              <i aria-hidden=\"true\" class=\"fa fa-facebook fb-icon\"></i>\n            </a>\n            <a class=\"socilaLogin\" (click)=\"socialSignIn('google')\">\n              <i aria-hidden=\"true\" class=\"fa fa-google-plus google-icon\"></i>\n            </a>\n          </div>\n        </div>\n        <a href=\"\" class=\"terms-privacy\">{{\n          \"Terms & Privacy Policy\" | translate: this.currentLanguage | async\n        }}</a>\n      </div>\n    </div>\n    <div class=\"login-right\">\n      <img src=\"../../../../assets/images/user-login-bg.png\" />\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/privacypolicy/privacypolicy.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/privacypolicy/privacypolicy.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserPrivacypolicyPrivacypolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header> </app-header>\n  <div class=\"mainSection\">\n    <h1>{{ \"Privacy Policy\" | translate: this.currentLanguage | async }}</h1>\n\n    <p>\n      {{\n        \"Last updated: April 01, 2020\" | translate: this.currentLanguage | async\n      }}\n    </p>\n\n    <p>\n      {{\n        \"This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <p>\n      {{\n        \"We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h1>\n      {{\n        \"Interpretation and Definitions\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h1>\n    <h2>{{ \"Interpretation\" | translate: this.currentLanguage | async }}</h2>\n    <p>\n      {{\n        \"The words of which the initial letter is capitalized have meanings defined under the following conditions.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h2>{{ \"Definitions\" | translate: this.currentLanguage | async }}</h2>\n    <p>\n      {{\n        \"For the purposes of this Privacy Policy:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <ul>\n      <li>\n        <p>\n          <strong>{{ \"You\" | translate: this.currentLanguage | async }}</strong>\n          {{\n            \"means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.\"\n              | translate: this.currentLanguage\n              | async\n          }}\n        </p>\n      </li>\n      <li>\n        <p>\n          <strong>{{\n            \"Company\" | translate: this.currentLanguage | async\n          }}</strong>\n          {{\n            '(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to IKIGAI Beauty LLC, 41 river terrace, New-York, NY.'\n              | translate: this.currentLanguage\n              | async\n          }}\n        </p>\n      </li>\n      <li>\n        <strong>{{\n          \"Affiliate\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          'means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.'\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"Account\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"means a unique account created for You to access our Service or parts of our Service.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"Website\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"refers to Bookapp, accessible from bookapp.ch\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"Service\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{ \"refers to the Website.\" | translate: this.currentLanguage | async }}\n      </li>\n      <li>\n        <strong>{{\n          \"Country\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{ \"refers to: Switzerland\" | translate: this.currentLanguage | async }}\n      </li>\n      <li>\n        <p>\n          <strong>{{\n            \"Service Provider\" | translate: this.currentLanguage | async\n          }}</strong>\n          {{\n            \"means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.\"\n              | translate: this.currentLanguage\n              | async\n          }}\n        </p>\n      </li>\n      <li>\n        <strong>{{\n          \"Third-party Social Media Service\"\n            | translate: this.currentLanguage\n            | async\n        }}</strong>\n        {{\n          \"refers to any website or any social network website through which a User can log in or create an account to use the Service.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <p>\n          <strong>{{\n            \"Personal Data\" | translate: this.currentLanguage | async\n          }}</strong>\n          {{\n            \"is any information that relates to an identified or identifiable individual.\"\n              | translate: this.currentLanguage\n              | async\n          }}\n        </p>\n      </li>\n      <li>\n        <strong>{{\n          \"Cookies\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"Usage Data\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n    </ul>\n\n    <h1>\n      {{\n        \"Collecting and Using Your Personal Data\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h1>\n    <h2>\n      {{ \"Types of Data Collected\" | translate: this.currentLanguage | async }}\n    </h2>\n\n    <h3>{{ \"Personal Data\" | translate: this.currentLanguage | async }}</h3>\n    <p>\n      {{\n        \"While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <ul>\n      <li>{{ \"Email address\" | translate: this.currentLanguage | async }}</li>\n      <li>\n        {{\n          \"First name and last name\" | translate: this.currentLanguage | async\n        }}\n      </li>\n      <li>{{ \"Phone number\" | translate: this.currentLanguage | async }}</li>\n      <li>\n        {{\n          \"Address, State, Province, ZIP/Postal code, City\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>{{ \"Usage Data\" | translate: this.currentLanguage | async }}</li>\n    </ul>\n\n    <h3>{{ \"Usage Data\" | translate: this.currentLanguage | async }}</h3>\n    <p>\n      {{\n        \"Usage Data is collected automatically when using the Service.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"Usage Data may include information such as Your Device`s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h3>\n      {{\n        \"Information from Third-Party Social Media Services\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h3>\n    <p>\n      {{\n        \"The Company allows You to create an account and log in to use the Service through the following Third-party Social Media Services:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <ul>\n      <li>{{ \"Google\" | translate: this.currentLanguage | async }}</li>\n      <li>{{ \"Facebook\" | translate: this.currentLanguage | async }}</li>\n      <li>{{ \"Twitter\" | translate: this.currentLanguage | async }}</li>\n    </ul>\n    <p>\n      {{\n        \"If You decide to register through or otherwise grant us access to a Third-Party Social Media Service, We may collect Personal data that is already associated with Your Third-Party Social Media Service`s account, such as Your name, Your email address, Your activities or Your contact list associated with that account.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"You may also have the option of sharing additional information with the Company through Your Third-Party Social Media Service`s account. If You choose to provide such information and Personal Data, during registration or otherwise, You are giving the Company permission to use, share, and store it in a manner consistent with this Privacy Policy.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h3>\n      {{\n        \"Tracking Technologies and Cookies\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h3>\n    <p>\n      {{\n        \"We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        'Cookies can be \"Persistent\" or \"Session\" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser. Learn more about cookies here:'\n          | translate: this.currentLanguage\n          | async\n      }}\n      <a href=\"https://www.freeprivacypolicy.com/blog/cookies/\">{{\n        \"Cookies: What Do They Do?\" | translate: this.currentLanguage | async\n      }}</a>\n    </p>\n    <p>\n      {{\n        \"We use both session and persistent Cookies for the purposes set out below:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <ul>\n      <li>\n        <p>\n          <strong>{{\n            \"Necessary / Essential Cookies\"\n              | translate: this.currentLanguage\n              | async\n          }}</strong>\n        </p>\n        <p>\n          {{\n            \"Type: Session Cookies\" | translate: this.currentLanguage | async\n          }}\n        </p>\n        <p>\n          {{ \"Administered by: Us\" | translate: this.currentLanguage | async }}\n        </p>\n        <p>\n          {{\n            \"Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.\"\n              | translate: this.currentLanguage\n              | async\n          }}\n        </p>\n      </li>\n      <li>\n        <p>\n          <strong>{{\n            \"Cookies Policy / Notice Acceptance Cookies\"\n              | translate: this.currentLanguage\n              | async\n          }}</strong>\n        </p>\n        <p>\n          {{\n            \"Type: Persistent Cookies\" | translate: this.currentLanguage | async\n          }}\n        </p>\n        <p>\n          {{ \"Administered by: Us\" | translate: this.currentLanguage | async }}\n        </p>\n        <p>\n          {{\n            \"Purpose: These Cookies identify if users have accepted the use of cookies on the Website.\"\n              | translate: this.currentLanguage\n              | async\n          }}\n        </p>\n      </li>\n      <li>\n        <p>\n          <strong>{{\n            \"Functionality Cookies\" | translate: this.currentLanguage | async\n          }}</strong>\n        </p>\n        <p>\n          {{\n            \"Type: Persistent Cookies\" | translate: this.currentLanguage | async\n          }}\n        </p>\n        <p>\n          {{ \"Administered by: Us\" | translate: this.currentLanguage | async }}\n        </p>\n        <p>\n          {{\n            \"Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.\"\n              | translate: this.currentLanguage\n              | async\n          }}\n        </p>\n      </li>\n    </ul>\n    <p>\n      {{\n        \"For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h2>\n      {{\n        \"Use of Your Personal Data\" | translate: this.currentLanguage | async\n      }}\n    </h2>\n    <p>\n      {{\n        \"The Company may use Personal Data for the following purposes:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <ul>\n      <li>\n        <strong>{{\n          \"To provide and maintain our Service\"\n            | translate: this.currentLanguage\n            | async\n        }}</strong\n        >,\n        {{\n          \"including to monitor the usage of our Service.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"To manage Your Account:\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"For the performance of a contract:\"\n            | translate: this.currentLanguage\n            | async\n        }}</strong>\n        {{\n          \"the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong\n          >{{\n            \"To contact You\" | translate: this.currentLanguage | async\n          }}:</strong\n        >\n        {{\n          \"To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application`s push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"To provide You\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"To manage Your requests:\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"To attend and manage Your requests to Us.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n    </ul>\n\n    <p>\n      {{\n        \"We may share your personal information in the following situations:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <ul>\n      <li>\n        <strong>{{\n          \"With Service Providers:\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to show advertisements to You to help support and maintain Our Service, to contact You, to advertise on third party websites to You after You visited our Service or for payment processing.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"For Business transfers:\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of our business to another company.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"With Affiliates:\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"With Business partners:\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"We may share Your information with Our business partners to offer You certain products, services or promotions.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        <strong>{{\n          \"With other users:\" | translate: this.currentLanguage | async\n        }}</strong>\n        {{\n          \"when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside. If You interact with other users or register through a Third-Party Social Media Service, Your contacts on the Third-Party Social Media Service may see Your name, profile, pictures and description of Your activity. Similarly, other users will be able to view descriptions of Your activity, communicate with You and view Your profile.\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n    </ul>\n\n    <h2>\n      {{\n        \"Retention of Your Personal Data\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h2>\n    <p>\n      {{\n        \"The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h2>\n      {{\n        \"Transfer of Your Personal Data\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h2>\n    <p>\n      {{\n        \"Your information, including Personal Data, is processed at the Company`s operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to \x14 and maintained on \x14 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h2>\n      {{\n        \"Disclosure of Your Personal Data\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h2>\n    <h3>\n      {{ \"Business Transactions\" | translate: this.currentLanguage | async }}\n    </h3>\n    <p>\n      {{\n        \"If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <h3>{{ \"Law enforcement\" | translate: this.currentLanguage | async }}</h3>\n    <p>\n      {{\n        \"Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <h3>\n      O{{\n        \"Other legal requirements\" | translate: this.currentLanguage | async\n      }}\n    </h3>\n    <p>\n      {{\n        \"The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <ul>\n      <li>\n        {{\n          \"Comply with a legal obligation\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        {{\n          \"Protect and defend the rights or property of the Company\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        {{\n          \"Prevent or investigate possible wrongdoing in connection with the Service\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        {{\n          \"Protect the personal safety of Users of the Service or the public\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n      <li>\n        {{\n          \"Protect against legal liability\"\n            | translate: this.currentLanguage\n            | async\n        }}\n      </li>\n    </ul>\n\n    <h2>\n      {{\n        \"Security of Your Personal Data\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h2>\n    <p>\n      {{\n        \"The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h1>\n      {{ \"Children`s Privacy\" | translate: this.currentLanguage | async }}\n    </h1>\n    <p>\n      {{\n        \"Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"We also may limit how We collect, use, and store some of the information of Users between 13 and 18 years old. In some cases, this means We will be unable to provide certain functionality of the Service to these users.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent`s consent before We collect and use that information.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h1>\n      {{ \"Links to Other Websites\" | translate: this.currentLanguage | async }}\n    </h1>\n    <p>\n      {{\n        \"Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party`s site. We strongly advise You to review the Privacy Policy of every site You visit\"\n          | translate: this.currentLanguage\n          | async\n      }}.\n    </p>\n    <p>\n      {{\n        \"We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h1>\n      {{\n        \"Changes to this Privacy Policy\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </h1>\n    <p>\n      {{\n        \"We may update our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the \"Last updated\" date at the top of this Privacy Policy.'\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <p>\n      {{\n        \"You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n\n    <h1>{{ \"Contact Us\" | translate: this.currentLanguage | async }}</h1>\n    <p>\n      {{\n        \"If you have any questions about this Privacy Policy, You can contact us:\"\n          | translate: this.currentLanguage\n          | async\n      }}\n    </p>\n    <ul>\n      <li>\n        {{\n          \"By visiting this page on our website:\"\n            | translate: this.currentLanguage\n            | async\n        }}\n        bookapp.ch/privacypolicy\n      </li>\n    </ul>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/pipes/index.ts":
  /*!********************************!*\
    !*** ./src/app/pipes/index.ts ***!
    \********************************/

  /*! exports provided: TranslationPipe, PipeModule */

  /***/
  function srcAppPipesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _translation_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./translation.pipe */
    "./src/app/pipes/translation.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TranslationPipe", function () {
      return _translation_pipe__WEBPACK_IMPORTED_MODULE_1__["TranslationPipe"];
    });
    /* harmony import */


    var _pipe_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pipe.module */
    "./src/app/pipes/pipe.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PipeModule", function () {
      return _pipe_module__WEBPACK_IMPORTED_MODULE_2__["PipeModule"];
    });
    /***/

  },

  /***/
  "./src/app/pipes/pipe.module.ts":
  /*!**************************************!*\
    !*** ./src/app/pipes/pipe.module.ts ***!
    \**************************************/

  /*! exports provided: PipeModule */

  /***/
  function srcAppPipesPipeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipeModule", function () {
      return PipeModule;
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


    var _translation_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./translation.pipe */
    "./src/app/pipes/translation.pipe.ts");

    var PipeModule = function PipeModule() {
      _classCallCheck(this, PipeModule);
    };

    PipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_translation_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslationPipe"]],
      providers: [_translation_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslationPipe"]],
      exports: [_translation_pipe__WEBPACK_IMPORTED_MODULE_2__["TranslationPipe"]]
    })], PipeModule);
    /***/
  },

  /***/
  "./src/app/pipes/translation.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/translation.pipe.ts ***!
    \*******************************************/

  /*! exports provided: TranslationPipe */

  /***/
  function srcAppPipesTranslationPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslationPipe", function () {
      return TranslationPipe;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../enums */
    "./src/app/enums/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");

    var TranslationPipe = /*#__PURE__*/function () {
      function TranslationPipe(translationService) {
        _classCallCheck(this, TranslationPipe);

        this.translationService = translationService;
      }

      _createClass(TranslationPipe, [{
        key: "transform",
        value: function transform(text, target) {
          if (target === _enums__WEBPACK_IMPORTED_MODULE_4__["AvailableLanguages"].EN) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(text);
          }

          return this.translationService.translate(text, target).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) {
            var _x$data$translations = _slicedToArray(x.data.translations, 1),
                translatedText = _x$data$translations[0].translatedText;

            return translatedText;
          }));
        }
      }]);

      return TranslationPipe;
    }();

    TranslationPipe.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_5__["TranslationService"]
      }];
    };

    TranslationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: "translate"
    })], TranslationPipe);
    /***/
  },

  /***/
  "./src/app/user/home/about/about.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/user/home/about/about.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/home/about/about.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/home/about/about.component.ts ***!
    \****************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppUserHomeAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-about",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/user/home/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/user/home/auth-serv.service.ts":
  /*!************************************************!*\
    !*** ./src/app/user/home/auth-serv.service.ts ***!
    \************************************************/

  /*! exports provided: AuthServService */

  /***/
  function srcAppUserHomeAuthServServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthServService", function () {
      return AuthServService;
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

    var AuthServService = /*#__PURE__*/function () {
      function AuthServService(myRoute) {
        _classCallCheck(this, AuthServService);

        this.myRoute = myRoute;
      }

      _createClass(AuthServService, [{
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
          sessionStorage.removeItem("emailID");
          sessionStorage.removeItem("userID");
          sessionStorage.removeItem("username");
          localStorage.clear();
          location.reload();
        }
      }]);

      return AuthServService;
    }();

    AuthServService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthServService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthServService);
    /***/
  },

  /***/
  "./src/app/user/home/bookings/bookings.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/user/home/bookings/bookings.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeBookingsBookingsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".wrapper {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.wrapper .banner-section {\n  margin-top: 6em;\n  flex-grow: 1;\n}\n.booking-grids .upperSec {\n  display: flex;\n  justify-content: space-between;\n}\n.booking-grids .upperSec .imgArea {\n  margin-right: 20px;\n}\n.booking-grids .upperSec .imgArea img {\n  border-radius: 7px;\n}\n.booking-grids .upperSec .detailArea {\n  position: relative;\n  width: 100%;\n  font-size: 14px;\n}\n.booking-grids .upperSec .detailArea img {\n  height: 15px;\n}\n.booking-grids .upperSec .detailArea .salonName {\n  font-weight: 700;\n  color: #000000;\n}\n.booking-grids .upperSec .detailArea .locaSec {\n  font-size: 12px;\n  color: #9595a1;\n  padding-bottom: 15px;\n}\n.booking-grids .upperSec .detailArea .date {\n  background: #9c3ee8;\n  box-shadow: 0px 3px 7px #00000014;\n  border-radius: 6px 0px 0px 6px;\n  position: absolute;\n  right: -16px;\n  top: 0;\n  min-width: 90px;\n  font-size: 14px;\n  color: #ffffff;\n  padding: 5px;\n}\n.booking-grids .upperSec .detailArea .rating-sec {\n  padding-bottom: 15px;\n}\n.booking-grids .upperSec .detailArea .lowerSec {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.overlay .main-section {\n  padding: 1em;\n  background: white;\n  display: flex;\n  font-size: 13px;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 10px;\n  margin: 15px;\n  max-height: 500px;\n  overflow-y: auto;\n  padding-top: 0.5em;\n}\n.overlay .main-section .imgSection {\n  display: flex;\n  align-items: center;\n}\n.overlay .main-section .imgSection .image {\n  width: 100px;\n  height: 100px;\n  border-radius: 100px;\n}\n.overlay .main-section .imgSection .salonName {\n  margin-left: 10px;\n  font-weight: 600;\n  color: purple;\n  font-size: 16px;\n}\n.overlay .main-section .imgSection .starRatingSec {\n  margin-left: 10px;\n}\n.overlay .main-section .detailSec .serviceName {\n  color: #333;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 10px;\n}\n.overlay .main-section .detailSec .dates {\n  color: purple;\n  font-size: 14px;\n  font-weight: 600;\n}\n.overlay .main-section .detailSec .fields {\n  display: flex;\n  justify-content: space-between;\n}\n.overlay .main-section .detailSec .fields .labels {\n  font-weight: 600;\n}\n.overlay .main-section .detailSec .bookingstatus {\n  color: green;\n  font-size: 14px;\n  font-weight: 600;\n}\n.mat {\n  margin-bottom: 10px;\n}\n.matcard {\n  cursor: pointer;\n}\n.closeBtn {\n  display: flex;\n  justify-content: flex-end;\n}\n.closeBtn .closeImg {\n  width: 16px;\n  height: 16px;\n}\n.checked {\n  color: gold;\n}\n.star-i:hover {\n  color: gold;\n}\n.comment {\n  height: auto;\n  padding: 10px;\n}\n.comment .commentText {\n  padding: 10px;\n}\n.startRating {\n  margin: 15px;\n}\n.matCards {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL2hvbWUvYm9va2luZ3MvYm9va2luZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NGO0FEQUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0VKO0FERUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDSjtBREFJO0VBQ0Usa0JBQUE7QUNFTjtBRERNO0VBQ0Usa0JBQUE7QUNHUjtBREFJO0VBSUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0ROO0FESk07RUFDRSxZQUFBO0FDTVI7QURETTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ0dSO0FERE07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDR1I7QURETTtFQUNFLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDR1I7QURETTtFQUNFLG9CQUFBO0FDR1I7QURETTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDR1I7QURFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRUo7QURESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0dOO0FERk07RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDSVI7QURGTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0lSO0FERk07RUFDRSxpQkFBQTtBQ0lSO0FEQU07RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0VSO0FEQU07RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURBTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0VSO0FERFE7RUFDRSxnQkFBQTtBQ0dWO0FEQU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRVI7QURHQTtFQUNFLG1CQUFBO0FDQUY7QURFQTtFQUNFLGVBQUE7QUNDRjtBRENBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRUY7QURERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDR0o7QURBQTtFQUNFLFdBQUE7QUNHRjtBRERBO0VBQ0UsV0FBQTtBQ0lGO0FERkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0tGO0FESkU7RUFDRSxhQUFBO0FDTUo7QURIQTtFQUNFLFlBQUE7QUNNRjtBREpBO0VBQ0UsV0FBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL2Jvb2tpbmdzL2Jvb2tpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICAuYmFubmVyLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDZlbTtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cbi5ib29raW5nLWdyaWRzIHtcbiAgLnVwcGVyU2VjIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuaW1nQXJlYSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5kZXRhaWxBcmVhIHtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIH1cbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgLnNhbG9uTmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuICAgICAgLmxvY2FTZWMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjOTU5NWExO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5kYXRlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzljM2VlODtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA3cHggIzAwMDAwMDE0O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggMHB4IDBweCA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC0xNnB4O1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIG1pbi13aWR0aDogOTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgfVxuICAgICAgLnJhdGluZy1zZWMge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIH1cbiAgICAgIC5sb3dlclNlYyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLm1haW4tc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xuICAgIC5pbWdTZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLmltYWdlIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICAgIH1cbiAgICAgIC5zYWxvbk5hbWUge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgICAgLnN0YXJSYXRpbmdTZWMge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmRldGFpbFNlYyB7XG4gICAgICAuc2VydmljZU5hbWUge1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuICAgICAgLmRhdGVzIHtcbiAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgLmZpZWxkcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLmxhYmVscyB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmJvb2tpbmdzdGF0dXMge1xuICAgICAgICBjb2xvcjogZ3JlZW47XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5tYXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1hdGNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2xvc2VCdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAuY2xvc2VJbWcge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgfVxufVxuLmNoZWNrZWQge1xuICBjb2xvcjogZ29sZDtcbn1cbi5zdGFyLWk6aG92ZXIge1xuICBjb2xvcjogZ29sZDtcbn1cbi5jb21tZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xuICAuY29tbWVudFRleHQge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbn1cbi5zdGFydFJhdGluZyB7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5tYXRDYXJkc3tcbiAgbWFyZ2luOiA1cHg7XG59XG4iLCIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4ud3JhcHBlciAuYmFubmVyLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2ZW07XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmJvb2tpbmctZ3JpZHMgLnVwcGVyU2VjIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJvb2tpbmctZ3JpZHMgLnVwcGVyU2VjIC5pbWdBcmVhIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmJvb2tpbmctZ3JpZHMgLnVwcGVyU2VjIC5pbWdBcmVhIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbn1cbi5ib29raW5nLWdyaWRzIC51cHBlclNlYyAuZGV0YWlsQXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5ib29raW5nLWdyaWRzIC51cHBlclNlYyAuZGV0YWlsQXJlYSBpbWcge1xuICBoZWlnaHQ6IDE1cHg7XG59XG4uYm9va2luZy1ncmlkcyAudXBwZXJTZWMgLmRldGFpbEFyZWEgLnNhbG9uTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLmJvb2tpbmctZ3JpZHMgLnVwcGVyU2VjIC5kZXRhaWxBcmVhIC5sb2NhU2VjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzk1OTVhMTtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uYm9va2luZy1ncmlkcyAudXBwZXJTZWMgLmRldGFpbEFyZWEgLmRhdGUge1xuICBiYWNrZ3JvdW5kOiAjOWMzZWU4O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDdweCAjMDAwMDAwMTQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAwcHggMHB4IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE2cHg7XG4gIHRvcDogMDtcbiAgbWluLXdpZHRoOiA5MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYm9va2luZy1ncmlkcyAudXBwZXJTZWMgLmRldGFpbEFyZWEgLnJhdGluZy1zZWMge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cbi5ib29raW5nLWdyaWRzIC51cHBlclNlYyAuZGV0YWlsQXJlYSAubG93ZXJTZWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5vdmVybGF5IC5tYWluLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxNXB4O1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xufVxuLm92ZXJsYXkgLm1haW4tc2VjdGlvbiAuaW1nU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3ZlcmxheSAubWFpbi1zZWN0aW9uIC5pbWdTZWN0aW9uIC5pbWFnZSB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4ub3ZlcmxheSAubWFpbi1zZWN0aW9uIC5pbWdTZWN0aW9uIC5zYWxvbk5hbWUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHB1cnBsZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLm92ZXJsYXkgLm1haW4tc2VjdGlvbiAuaW1nU2VjdGlvbiAuc3RhclJhdGluZ1NlYyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm92ZXJsYXkgLm1haW4tc2VjdGlvbiAuZGV0YWlsU2VjIC5zZXJ2aWNlTmFtZSB7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ub3ZlcmxheSAubWFpbi1zZWN0aW9uIC5kZXRhaWxTZWMgLmRhdGVzIHtcbiAgY29sb3I6IHB1cnBsZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm92ZXJsYXkgLm1haW4tc2VjdGlvbiAuZGV0YWlsU2VjIC5maWVsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ub3ZlcmxheSAubWFpbi1zZWN0aW9uIC5kZXRhaWxTZWMgLmZpZWxkcyAubGFiZWxzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5vdmVybGF5IC5tYWluLXNlY3Rpb24gLmRldGFpbFNlYyAuYm9va2luZ3N0YXR1cyB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWF0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1hdGNhcmQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jbG9zZUJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY2xvc2VCdG4gLmNsb3NlSW1nIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmNoZWNrZWQge1xuICBjb2xvcjogZ29sZDtcbn1cblxuLnN0YXItaTpob3ZlciB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4uY29tbWVudCB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweDtcbn1cbi5jb21tZW50IC5jb21tZW50VGV4dCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5zdGFydFJhdGluZyB7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLm1hdENhcmRzIHtcbiAgbWFyZ2luOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/home/bookings/bookings.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user/home/bookings/bookings.component.ts ***!
    \**********************************************************/

  /*! exports provided: BookingsComponent */

  /***/
  function srcAppUserHomeBookingsBookingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsComponent", function () {
      return BookingsComponent;
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


    var _usercommonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usercommonservice.service */
    "./src/app/user/home/usercommonservice.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");

    var BookingsComponent = /*#__PURE__*/function () {
      function BookingsComponent(userServ, toastServ, languagesService) {
        _classCallCheck(this, BookingsComponent);

        this.userServ = userServ;
        this.toastServ = toastServ;
        this.languagesService = languagesService;
        this.starRating = 1;
        this.selectedTab = "upcoming";
      }

      _createClass(BookingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.userID = sessionStorage.getItem("userID");
          this.getBookingList(this.selectedTab);
          this.getAdminDetail();
          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this11.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "getBookingList",
        value: function getBookingList(data) {
          var _this12 = this;

          var dataToPass = {
            user_id: this.userID,
            type: data
          };
          this.userServ.getUserBookings(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this12.bookingListData = data["data"];
            } else if (data["code"] === 400) {
              _this12.toastServ.error(data["message"], "", {
                timeOut: 100
              });
            }
          }, function (error) {
            _this12.toastServ.error(error.error["message"], "", {
              timeOut: 100
            });
          });
        }
      }, {
        key: "tabChanged",
        value: function tabChanged(event) {
          if (event.index === 0) {
            this.selectedTab = "upcoming";
            this.isShowAddReview = false;
            this.getBookingList(this.selectedTab);
          } else if (event.index === 1) {
            this.selectedTab = "completed";
            this.isShowAddReview = true;
            this.getBookingList(this.selectedTab);
          }
        }
      }, {
        key: "getBookingDetails",
        value: function getBookingDetails(data) {
          var _this13 = this;

          this.bookingDetails = data;
          var dataToPass = {
            salon_id: this.bookingDetails["salon_id"]
          };
          this.userServ.getSalonDetails(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this13.salonDetails = data["data"];
              _this13.isDetailShow = true;
            } else if (data["code"] === 400) {
              _this13.toastServ.error(data["message"], "", {
                timeOut: 100
              });
            }
          }, function (error) {
            _this13.toastServ.error(error.error["message"], "", {
              timeOut: 100
            });
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isDetailShow = false;
          this.isAddReviewModal = false;
        }
      }, {
        key: "getAdminDetail",
        value: function getAdminDetail() {
          var _this14 = this;

          var dataToPass = {
            type: "admin"
          };
          this.userServ.getAdminDetails(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this14.adminDetails = data["data"];
            } else if (data["code"] === 400) {
              _this14.toastServ.error(data["message"], "", {
                timeOut: 100
              });
            }
          }, function (error) {
            _this14.toastServ.error(error.error["message"], "", {
              timeOut: 100
            });
          });
        }
      }, {
        key: "addReview",
        value: function addReview() {
          this.isAddReviewModal = true;
        }
      }, {
        key: "onRatingSet",
        value: function onRatingSet(event) {
          this.starRating = event;
        }
      }, {
        key: "submitStarRating",
        value: function submitStarRating() {
          var _this15 = this;

          var dataToPass = {
            ratings: this.starRating,
            comments: this.comment,
            user_id: this.userID,
            salon_id: this.bookingDetails["salon_id"]
          };
          this.userServ.addReviewAndRatings(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this15.toastServ.success("Submitted Successfully", "", {
                timeOut: 500
              });

              _this15.isAddReviewModal = false;
              _this15.isDetailShow = false;
              _this15.comment = "";
            } else if (data["code"] === 400) {
              _this15.toastServ.error(data["message"], "", {
                timeOut: 100
              });
            }
          }, function (error) {
            _this15.toastServ.error(error.error["message"], "", {
              timeOut: 100
            });
          });
        }
      }]);

      return BookingsComponent;
    }();

    BookingsComponent.ctorParameters = function () {
      return [{
        type: _usercommonservice_service__WEBPACK_IMPORTED_MODULE_2__["UsercommonserviceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["LanguagesService"]
      }];
    };

    BookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-bookings",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/bookings/bookings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookings.component.scss */
      "./src/app/user/home/bookings/bookings.component.scss"))["default"]]
    })], BookingsComponent);
    /***/
  },

  /***/
  "./src/app/user/home/checkout/checkout.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/user/home/checkout/checkout.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeCheckoutCheckoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainSection {\n  background-color: #f5f6f7;\n  margin-top: 85px;\n}\n\n.mainContent .payWith {\n  align-items: center;\n  background: white;\n  padding: 1em;\n  cursor: pointer;\n  text-align: center;\n  margin-bottom: 10px;\n  position: relative;\n}\n\n.mainContent .payWith input {\n  position: absolute;\n  left: 10px;\n  top: 22px;\n}\n\n.cardSection {\n  position: relative;\n  margin-bottom: 30px;\n  display: flex;\n  justify-content: center;\n}\n\n.cardSection .cardDetails {\n  position: absolute;\n  font-size: 10px;\n  color: #ffffff;\n  top: 70px;\n  left: 32px;\n}\n\n.cardSection .cardDetails input {\n  background: none;\n  border: none;\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.cardSection .cardDetails .valid {\n  color: #ff7d7d;\n}\n\n.cardSection .cardDetails .valid input {\n  font-size: 13px;\n}\n\n.cardDetailInput {\n  font-size: 14px;\n  color: #262626;\n}\n\n.cardDetailInput .detBox {\n  background: #ffffff;\n  padding: 15px;\n  margin: 10px 0 49px 0;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 6px;\n}\n\n.cardDetailInput .detBox form {\n  margin: 0;\n}\n\n.cardDetailInput .detBox form .inpCvv {\n  width: 10%;\n}\n\n.cardDetailInput .detBox form .inpNum {\n  width: 60%;\n}\n\n.cardDetailInput .detBox form .inpExp {\n  width: 25%;\n}\n\n.cardDetailInput .detBox form input {\n  background: none;\n  border: none;\n  color: #333333;\n  font-size: 14px;\n}\n\n.cardDetailInput .cardBox {\n  background: #ffffff;\n  padding: 15px;\n  margin: 10px 0 49px 0;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 6px;\n  flex-direction: column;\n}\n\n.cardDetailInput .cardBox .cards {\n  padding: 0.5em;\n}\n\n.markcard {\n  color: #9595a1;\n  font-size: 14;\n}\n\n.cardDetailsSection {\n  max-width: 328px;\n  margin: 0 auto;\n}\n\n.checkoutBtnArea {\n  display: flex;\n  padding: 1em;\n  justify-content: center;\n}\n\n.checkoutBtnArea .btnPay {\n  max-width: 345px;\n  background: transparent linear-gradient(99deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  border: 1px solid purple;\n  width: 345px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.9em;\n  border-radius: 6px;\n}\n\n.cardDet {\n  display: flex;\n  flex-direction: column;\n}\n\n.cardDet .cardDetailInput {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.cardDet .cardDetailInput .cardBox {\n  flex-grow: 1;\n}\n\n.sectionsWrapper {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.payText {\n  margin-top: 4px;\n  margin-left: 5px;\n}\n\n.paywithlabel {\n  cursor: pointer;\n}\n\n.serviceArea {\n  background: white;\n  height: auto;\n  padding: 1em;\n  margin-top: 24px;\n  max-height: 100%;\n}\n\n.serviceArea .serviceDetailBox .hair-sec {\n  margin-top: 10px;\n}\n\n.serviceArea .serviceDetailBox .hair-sec h6 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.serviceArea .serviceDetailBox .hair-sec .hair-sec-inner {\n  display: flex;\n  flex-direction: column;\n}\n\n.serviceArea .serviceDetailBox .hair-sec .hair-sec-inner img {\n  margin-right: 10px;\n}\n\n.serviceArea .serviceDetailBox .hair-sec .hair-sec-inner .hair-services {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 5px;\n}\n\n.serviceArea .serviceDetailBox .hair-sec .hair-sec-inner .hair-services h6 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  margin: 0;\n  opacity: 1;\n  font-size: 14px;\n  margin-bottom: 3px;\n}\n\n.serviceArea .serviceDetailBox .hair-sec .hair-sec-inner .hair-services .dollar-req {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.serviceArea .serviceDetailBox .hair-sec .hair-sec-inner .hair-services .dollar-req span {\n  text-align: left;\n  text-decoration: line-through;\n  letter-spacing: 0;\n  color: #c2c2c2;\n  opacity: 1;\n  font-size: 14px;\n  margin-left: 8px;\n}\n\n.serviceArea .serviceDetailBox .hair-sec .hair-sec-inner .hair-services .min-req {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9595a1;\n  opacity: 1;\n  font-size: 14px;\n}\n\n.remove .btnRem {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 2px solid #ff7d7d;\n  opacity: 1;\n  border-radius: 6px;\n  font: 14px;\n  color: #ff7d7d;\n  font-family: Lato;\n}\n\n.serviceMeta {\n  display: flex;\n}\n\n.dateAndTime {\n  color: #813882;\n  font-size: 18px;\n  margin-top: 1em;\n}\n\n.amountData {\n  font-size: 14px;\n  font-family: Regular Lato;\n  display: flex;\n  margin-top: 0.7em;\n  justify-content: space-between;\n  padding: 10px;\n}\n\n.amountData:nth-child(1) {\n  margin-top: 1em;\n}\n\n.subtotal {\n  border-top: 1px dotted lightgray;\n  border-bottom: 1px dotted lightgray;\n}\n\n.wallet {\n  display: flex;\n  align-items: center;\n}\n\n.wallet .walletString {\n  margin-left: 5px;\n}\n\n.uwbString {\n  margin-left: 10px;\n  font-size: 14px;\n  color: #666;\n  cursor: pointer;\n}\n\n.promocodeArea .promBtn {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #ff7d7d;\n  border-radius: 26px;\n  opacity: 1;\n  padding: 1em;\n  width: 100%;\n  color: #ff7d7d;\n}\n\n.cancellingArea {\n  display: flex;\n  margin-bottom: 1em;\n  font-family: Regular Lato;\n  color: #666;\n  font-size: 14px;\n  margin-top: 1em;\n}\n\n.promocodeOverlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.promocodeOverlay .mainSection {\n  background: white;\n  padding: 1em;\n  margin: 10px;\n  border-radius: 6px;\n}\n\n.promocodeOverlay .mainSection h3 {\n  color: purple;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode {\n  padding: 10px;\n  border: 1px solid #ff7d7d;\n  padding: 10px;\n  border-radius: 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 5px;\n  padding-bottom: 0px;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode .promotext {\n  margin-right: 10px;\n  font-size: 14px;\n  display: flex;\n  flex-direction: column;\n  color: #ff7d7d;\n  font-family: Regular Lato;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode .termsC {\n  color: purple;\n  cursor: pointer;\n  font-size: 10px;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode .termandcondition {\n  color: white;\n  background: grey;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode .termandcondition p {\n  margin: 0;\n  padding-left: 4px;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode .termsC:hover .termandcondition {\n  display: block;\n  position: relative;\n  bottom: 15px;\n  left: 40px;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode .terms {\n  color: #666;\n  font-size: 12px;\n  font-family: Regular Lato;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode button {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #ff7d7d;\n  border-radius: 5px;\n  opacity: 1;\n  font-family: Regular Lato;\n  width: 55px;\n  color: #ff7d7d;\n}\n\n.promocodeOverlay .mainSection .promocodes .promocode button:hover {\n  background: #ff7d7d 0% 0% no-repeat padding-box;\n  border: 1px solid white;\n  border-radius: 5px;\n  opacity: 1;\n  font-family: Regular Lato;\n  width: 55px;\n  color: #ffffff;\n}\n\n.header span {\n  margin-left: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  color: #333333;\n}\n\n.noPromocode {\n  color: purple;\n  font-weight: 600;\n}\n\n.paymentSuccess {\n  color: purple;\n  font-size: 14px;\n  font-family: Regular Lato;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL2hvbWUvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUU7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURBSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNFTjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURBRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VKOztBRERJO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHTjs7QURESTtFQUNFLGNBQUE7QUNHTjs7QURGTTtFQUNFLGVBQUE7QUNJUjs7QURDQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRUY7O0FEREU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDR0o7O0FERkk7RUFDRSxTQUFBO0FDSU47O0FESE07RUFDRSxVQUFBO0FDS1I7O0FESE07RUFDRSxVQUFBO0FDS1I7O0FESE07RUFDRSxVQUFBO0FDS1I7O0FESE07RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0tSOztBRERFO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDR0o7O0FERkk7RUFDRSxjQUFBO0FDSU47O0FEQUE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDS0Y7O0FESkU7RUFDRSxnQkFBQTtFQUNBLG9HQUFBO0VBRUEsd0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ0tGOztBREpFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ01KOztBRExJO0VBQ0UsWUFBQTtBQ09OOztBREhBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsZUFBQTtBQ1FGOztBRE5BO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQSTtFQUNFLGdCQUFBO0FDU047O0FEUk07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNVUjs7QURSTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ1VSOztBRFJRO0VBQ0Usa0JBQUE7QUNVVjs7QURSUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1VWOztBRFRVO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1daOztBRFRVO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ1daOztBRFZZO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNZZDs7QURUVTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNXWjs7QURIRTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTUo7O0FESEE7RUFDRSxhQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNPRjs7QURMQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtBQ1NGOztBRFBBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQ1VGOztBRFJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDV0Y7O0FEVkU7RUFDRSxnQkFBQTtBQ1lKOztBRFRBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNZRjs7QURURTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNZSjs7QURUQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDWUY7O0FEVkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNhRjs7QURaRTtFQUlFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1dKOztBRGpCSTtFQUNFLGFBQUE7QUNtQk47O0FEWk07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNjUjs7QURiUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2VWOztBRGJRO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDZVY7O0FEYlE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUNlVjs7QURiVTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtBQ2VaOztBRFpRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNjVjs7QURYUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNhVjs7QURYUTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDYVY7O0FEWFE7RUFDRSwrQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ2FWOztBRE5FO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDU0o7O0FETkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQ1VGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5TZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmNztcbiAgbWFyZ2luLXRvcDogODVweDtcbn1cbi5tYWluQ29udGVudCB7XG4gIC5wYXlXaXRoIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB0b3A6IDIycHg7XG4gICAgfVxuICB9XG59XG4uY2FyZFNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuY2FyZERldGFpbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdG9wOiA3MHB4O1xuICAgIGxlZnQ6IDMycHg7XG4gICAgaW5wdXQge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAudmFsaWQge1xuICAgICAgY29sb3I6ICNmZjdkN2Q7XG4gICAgICBpbnB1dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5jYXJkRGV0YWlsSW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICAuZGV0Qm94IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDAgNDlweCAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb3JtIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIC5pbnBDdnYge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgfVxuICAgICAgLmlucE51bSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICB9XG4gICAgICAuaW5wRXhwIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIH1cbiAgICAgIGlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuY2FyZEJveCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIG1hcmdpbjogMTBweCAwIDQ5cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAuY2FyZHMge1xuICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgfVxuICB9XG59XG4ubWFya2NhcmQge1xuICBjb2xvcjogIzk1OTVhMTtcbiAgZm9udC1zaXplOiAxNDtcbn1cbi5jYXJkRGV0YWlsc1NlY3Rpb24ge1xuICBtYXgtd2lkdGg6IDMyOHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jaGVja291dEJ0bkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAuYnRuUGF5IHtcbiAgICBtYXgtd2lkdGg6IDM0NXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5OWRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJVxuICAgICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgICB3aWR0aDogMzQ1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwLjllbTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIH1cbn1cbi5jYXJkRGV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLmNhcmREZXRhaWxJbnB1dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICAuY2FyZEJveCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuICB9XG59XG4uc2VjdGlvbnNXcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBheVRleHQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ucGF5d2l0aGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNlcnZpY2VBcmVhIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAuc2VydmljZURldGFpbEJveCB7XG4gICAgLmhhaXItc2VjIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBoNiB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuICAgICAgLmhhaXItc2VjLWlubmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGFpci1zZXJ2aWNlcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgaDYge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZG9sbGFyLXJlcSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICBjb2xvcjogI2MyYzJjMjtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAubWluLXJlcSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgICBjb2xvcjogIzk1OTVhMTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4ucmVtb3ZlIHtcbiAgLmJ0blJlbSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmN2Q3ZDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBmb250OiAxNHB4O1xuICAgIGNvbG9yOiAjZmY3ZDdkO1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB9XG59XG4uc2VydmljZU1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRhdGVBbmRUaW1lIHtcbiAgY29sb3I6ICM4MTM4ODI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLmFtb3VudERhdGEge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBSZWd1bGFyIExhdG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDAuN2VtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uYW1vdW50RGF0YTpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG4uc3VidG90YWwge1xuICBib3JkZXItdG9wOiAxcHggZG90dGVkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCBsaWdodGdyYXk7XG59XG4ud2FsbGV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLndhbGxldFN0cmluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxufVxuLnV3YlN0cmluZyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvbW9jb2RlQXJlYSB7XG4gIC5wcm9tQnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3ZDdkO1xuICAgIGJvcmRlci1yYWRpdXM6IDI2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNmZjdkN2Q7XG4gIH1cbn1cbi5jYW5jZWxsaW5nQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLnByb21vY29kZU92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLm1haW5TZWN0aW9uIHtcbiAgICBoMyB7XG4gICAgICBjb2xvcjogcHVycGxlO1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAucHJvbW9jb2RlcyB7XG4gICAgICAucHJvbW9jb2RlIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2Q3ZDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgLnByb21vdGV4dCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgY29sb3I6ICNmZjdkN2Q7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbiAgICAgICAgfVxuICAgICAgICAudGVybXNDIHtcbiAgICAgICAgICBjb2xvcjogcHVycGxlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRlcm1hbmRjb25kaXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRlcm1zQzpob3ZlciAudGVybWFuZGNvbmRpdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIGJvdHRvbTogMTVweDtcbiAgICAgICAgICBsZWZ0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRlcm1zIHtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdkN2Q7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbiAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICBjb2xvcjogI2ZmN2Q3ZDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjdkN2QgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBSZWd1bGFyIExhdG87XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5oZWFkZXIge1xuICBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgfVxufVxuLm5vUHJvbW9jb2RlIHtcbiAgY29sb3I6IHB1cnBsZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5wYXltZW50U3VjY2VzcyB7XG4gIGNvbG9yOiBwdXJwbGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiIsIi5tYWluU2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjc7XG4gIG1hcmdpbi10b3A6IDg1cHg7XG59XG5cbi5tYWluQ29udGVudCAucGF5V2l0aCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbkNvbnRlbnQgLnBheVdpdGggaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMjJweDtcbn1cblxuLmNhcmRTZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXJkU2VjdGlvbiAuY2FyZERldGFpbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogMzJweDtcbn1cbi5jYXJkU2VjdGlvbiAuY2FyZERldGFpbHMgaW5wdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uY2FyZFNlY3Rpb24gLmNhcmREZXRhaWxzIC52YWxpZCB7XG4gIGNvbG9yOiAjZmY3ZDdkO1xufVxuLmNhcmRTZWN0aW9uIC5jYXJkRGV0YWlscyAudmFsaWQgaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5jYXJkRGV0YWlsSW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjYyNjI2O1xufVxuLmNhcmREZXRhaWxJbnB1dCAuZGV0Qm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxMHB4IDAgNDlweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi5jYXJkRGV0YWlsSW5wdXQgLmRldEJveCBmb3JtIHtcbiAgbWFyZ2luOiAwO1xufVxuLmNhcmREZXRhaWxJbnB1dCAuZGV0Qm94IGZvcm0gLmlucEN2diB7XG4gIHdpZHRoOiAxMCU7XG59XG4uY2FyZERldGFpbElucHV0IC5kZXRCb3ggZm9ybSAuaW5wTnVtIHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5jYXJkRGV0YWlsSW5wdXQgLmRldEJveCBmb3JtIC5pbnBFeHAge1xuICB3aWR0aDogMjUlO1xufVxuLmNhcmREZXRhaWxJbnB1dCAuZGV0Qm94IGZvcm0gaW5wdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2FyZERldGFpbElucHV0IC5jYXJkQm94IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAxMHB4IDAgNDlweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jYXJkRGV0YWlsSW5wdXQgLmNhcmRCb3ggLmNhcmRzIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5tYXJrY2FyZCB7XG4gIGNvbG9yOiAjOTU5NWExO1xuICBmb250LXNpemU6IDE0O1xufVxuXG4uY2FyZERldGFpbHNTZWN0aW9uIHtcbiAgbWF4LXdpZHRoOiAzMjhweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5jaGVja291dEJ0bkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxZW07XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNoZWNrb3V0QnRuQXJlYSAuYnRuUGF5IHtcbiAgbWF4LXdpZHRoOiAzNDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDk5ZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICB3aWR0aDogMzQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMC45ZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cblxuLmNhcmREZXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNhcmREZXQgLmNhcmREZXRhaWxJbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5jYXJkRGV0IC5jYXJkRGV0YWlsSW5wdXQgLmNhcmRCb3gge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zZWN0aW9uc1dyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wYXlUZXh0IHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ucGF5d2l0aGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VydmljZUFyZWEge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxZW07XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG4uc2VydmljZUFyZWEgLnNlcnZpY2VEZXRhaWxCb3ggLmhhaXItc2VjIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zZXJ2aWNlQXJlYSAuc2VydmljZURldGFpbEJveCAuaGFpci1zZWMgaDYge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zZXJ2aWNlQXJlYSAuc2VydmljZURldGFpbEJveCAuaGFpci1zZWMgLmhhaXItc2VjLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zZXJ2aWNlQXJlYSAuc2VydmljZURldGFpbEJveCAuaGFpci1zZWMgLmhhaXItc2VjLWlubmVyIGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXJ2aWNlQXJlYSAuc2VydmljZURldGFpbEJveCAuaGFpci1zZWMgLmhhaXItc2VjLWlubmVyIC5oYWlyLXNlcnZpY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uc2VydmljZUFyZWEgLnNlcnZpY2VEZXRhaWxCb3ggLmhhaXItc2VjIC5oYWlyLXNlYy1pbm5lciAuaGFpci1zZXJ2aWNlcyBoNiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5zZXJ2aWNlQXJlYSAuc2VydmljZURldGFpbEJveCAuaGFpci1zZWMgLmhhaXItc2VjLWlubmVyIC5oYWlyLXNlcnZpY2VzIC5kb2xsYXItcmVxIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc2VydmljZUFyZWEgLnNlcnZpY2VEZXRhaWxCb3ggLmhhaXItc2VjIC5oYWlyLXNlYy1pbm5lciAuaGFpci1zZXJ2aWNlcyAuZG9sbGFyLXJlcSBzcGFuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogI2MyYzJjMjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnNlcnZpY2VBcmVhIC5zZXJ2aWNlRGV0YWlsQm94IC5oYWlyLXNlYyAuaGFpci1zZWMtaW5uZXIgLmhhaXItc2VydmljZXMgLm1pbi1yZXEge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5NTk1YTE7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnJlbW92ZSAuYnRuUmVtIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZjdkN2Q7XG4gIG9wYWNpdHk6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udDogMTRweDtcbiAgY29sb3I6ICNmZjdkN2Q7XG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xufVxuXG4uc2VydmljZU1ldGEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGF0ZUFuZFRpbWUge1xuICBjb2xvcjogIzgxMzg4MjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5hbW91bnREYXRhIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUmVndWxhciBMYXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAwLjdlbTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYW1vdW50RGF0YTpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5zdWJ0b3RhbCB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgbGlnaHRncmF5O1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGxpZ2h0Z3JheTtcbn1cblxuLndhbGxldCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ud2FsbGV0IC53YWxsZXRTdHJpbmcge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udXdiU3RyaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb21vY29kZUFyZWEgLnByb21CdG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2Q3ZDtcbiAgYm9yZGVyLXJhZGl1czogMjZweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMWVtO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZjdkN2Q7XG59XG5cbi5jYW5jZWxsaW5nQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG4ucHJvbW9jb2RlT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB6LWluZGV4OiA5OTk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByb21vY29kZU92ZXJsYXkgLm1haW5TZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4ucHJvbW9jb2RlT3ZlcmxheSAubWFpblNlY3Rpb24gaDMge1xuICBjb2xvcjogcHVycGxlO1xufVxuLnByb21vY29kZU92ZXJsYXkgLm1haW5TZWN0aW9uIC5wcm9tb2NvZGVzIC5wcm9tb2NvZGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY3ZDdkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuLnByb21vY29kZU92ZXJsYXkgLm1haW5TZWN0aW9uIC5wcm9tb2NvZGVzIC5wcm9tb2NvZGUgLnByb21vdGV4dCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjb2xvcjogI2ZmN2Q3ZDtcbiAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbn1cbi5wcm9tb2NvZGVPdmVybGF5IC5tYWluU2VjdGlvbiAucHJvbW9jb2RlcyAucHJvbW9jb2RlIC50ZXJtc0Mge1xuICBjb2xvcjogcHVycGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5wcm9tb2NvZGVPdmVybGF5IC5tYWluU2VjdGlvbiAucHJvbW9jb2RlcyAucHJvbW9jb2RlIC50ZXJtYW5kY29uZGl0aW9uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiBncmV5O1xufVxuLnByb21vY29kZU92ZXJsYXkgLm1haW5TZWN0aW9uIC5wcm9tb2NvZGVzIC5wcm9tb2NvZGUgLnRlcm1hbmRjb25kaXRpb24gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG4ucHJvbW9jb2RlT3ZlcmxheSAubWFpblNlY3Rpb24gLnByb21vY29kZXMgLnByb21vY29kZSAudGVybXNDOmhvdmVyIC50ZXJtYW5kY29uZGl0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm90dG9tOiAxNXB4O1xuICBsZWZ0OiA0MHB4O1xufVxuLnByb21vY29kZU92ZXJsYXkgLm1haW5TZWN0aW9uIC5wcm9tb2NvZGVzIC5wcm9tb2NvZGUgLnRlcm1zIHtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFJlZ3VsYXIgTGF0bztcbn1cbi5wcm9tb2NvZGVPdmVybGF5IC5tYWluU2VjdGlvbiAucHJvbW9jb2RlcyAucHJvbW9jb2RlIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY3ZDdkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtZmFtaWx5OiBSZWd1bGFyIExhdG87XG4gIHdpZHRoOiA1NXB4O1xuICBjb2xvcjogI2ZmN2Q3ZDtcbn1cbi5wcm9tb2NvZGVPdmVybGF5IC5tYWluU2VjdGlvbiAucHJvbW9jb2RlcyAucHJvbW9jb2RlIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjdkN2QgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvcGFjaXR5OiAxO1xuICBmb250LWZhbWlseTogUmVndWxhciBMYXRvO1xuICB3aWR0aDogNTVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5oZWFkZXIgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4ubm9Qcm9tb2NvZGUge1xuICBjb2xvcjogcHVycGxlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucGF5bWVudFN1Y2Nlc3Mge1xuICBjb2xvcjogcHVycGxlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBSZWd1bGFyIExhdG87XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/home/checkout/checkout.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user/home/checkout/checkout.component.ts ***!
    \**********************************************************/

  /*! exports provided: CheckoutComponent */

  /***/
  function srcAppUserHomeCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
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


    var _allserv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../allserv.service */
    "./src/app/allserv.service.ts");
    /* harmony import */


    var _usercommonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usercommonservice.service */
    "./src/app/user/home/usercommonservice.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent(router, allserv, userServ, toastServ, fb, languagesService) {
        _classCallCheck(this, CheckoutComponent);

        this.router = router;
        this.allserv = allserv;
        this.userServ = userServ;
        this.toastServ = toastServ;
        this.fb = fb;
        this.languagesService = languagesService;
        this.isCardDetailsRequired = true;
        this.enableMakePaymentButton = true;
        this.expiryPattern = "^(0[1-9]|1[0-2])/?([0-9]{4}|[0-9]{2})$";
        this.useWallet = false;
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.userEmailID = sessionStorage.getItem("emailID");
          this.cardForm = this.fb.group({
            cardNum: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            expDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(this.expiryPattern)],
            cvc: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(3)])]
          });
          this.salonData = JSON.parse(sessionStorage.getItem("bookingData"))["data"];
          this.userID = sessionStorage.getItem("userID");
          this.currentRoute = this.router.url;

          if (localStorage.getItem("LoggedInUser") !== null) {
            this.isLoggedInCheck = true;
          } else {
            this.isLoggedInCheck = false;
          }

          this.checkoutData = JSON.parse(sessionStorage.getItem("bookingData"))["data"]["service"];
          this.onDate = JSON.parse(sessionStorage.getItem("userprefrence"))["date"];
          this.startTime = JSON.parse(sessionStorage.getItem("bookingData"))["stime"];
          this.totalPrice = this.checkoutData["price"];
          this.getWalletBalance();
          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this16.currentLanguage = x;
          });
        }
      }, {
        key: "checkPaymentMode",
        value: function checkPaymentMode(event) {
          this.paymentMode = event.target["defaultValue"];

          if (event.target["defaultValue"] === "cash") {
            this.isCardDetailsRequired = true;
            this.useWallet = false;
            this.cardNum = "";
            this.expDate = "";
            this.cvc = "";
            this.enableMakePaymentButton = false;
            this.showUseWalletCheckBox = false;
          } else if (event.target["defaultValue"] === "card") {
            this.isCardDetailsRequired = false;
            this.enableMakePaymentButton = true;

            if (this.walletAmount > 0) {
              this.showUseWalletCheckBox = true;
              this.isPayable = true;

              if (this.totalPrice > this.walletAmount) {
                this.isCardDetailsRequired = false;
              } else if (this.totalPrice < this.walletAmount) {
                this.isCardDetailsRequired = true;
                this.enableMakePaymentButton = true;
              }
            } else if (this.walletAmount <= 0) {
              this.isPayable = false;
              this.showUseWalletCheckBox = false;
            }

            this.toastServ.success("Please enter card details", "", {
              timeOut: 1000
            });
          }
        }
      }, {
        key: "keyPress",
        value: function keyPress(event) {}
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.allserv.setPrevRoute(this.currentRoute);
          this.router.navigate(["/login"]);
        }
      }, {
        key: "getPromocodeList",
        value: function getPromocodeList() {
          var _this17 = this;

          var dataToPass = {
            salon_id: this.checkoutData["salon_id"]
          };
          this.userServ.getPromocodes(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this17.isShowPromocode = true;
              _this17.promocodesList = data["data"]; // this.promocodesList = [];

              if (_this17.promocodesList.length === 0) {
                _this17.noPromocode = true;
              } else if (_this17.promocodesList.length > 0) {
                _this17.noPromocode = false;
              }
            } else if (data["code"] === 400) {
              _this17.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this17.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isShowPromocode = false;
        }
      }, {
        key: "validatePromocode",
        value: function validatePromocode(result, event) {
          var _this18 = this;

          var dataToPass = {
            promocode_id: result["_id"],
            salon_id: this.checkoutData["salon_id"],
            user_id: this.userID
          };
          this.userServ.checkPromoCodeValidity(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this18.promocodeDetails = result;
              _this18.offerCodePrice = _this18.promocodeDetails["value"];

              if (data["data"].status === true) {
                _this18.isPromocodeApplied = false;
                _this18.isShowPromocode = true;
              } else if (data["data"].status === false) {
                _this18.isPromocodeApplied = true;
                _this18.isShowPromocode = false;
              }

              if (_this18.isPromocodeApplied === true) {
                _this18.totalPrice = _this18.checkoutData["price"];
                _this18.totalPrice = _this18.totalPrice - _this18.offerCodePrice;
              } else if (_this18.isPromocodeApplied === false) {
                _this18.totalPrice = _this18.checkoutData["price"];
              }

              _this18.toastServ.success(data["message"], "", {
                timeOut: 1000
              });
            } else if (data["code"] === 400) {
              _this18.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this18.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "makeUserPayment",
        value: function makeUserPayment() {
          var _this19 = this;

          var promocodeID;

          if (this.promocodeDetails) {
            promocodeID = this.promocodeDetails["_id"];
          } else {
            promocodeID = null;
          }

          var dataToPass = {};

          if (this.paymentMode === "cash") {
            dataToPass = {
              payType: this.paymentMode,
              totalAmt: this.totalPrice,
              salon_id: this.salonData["_id"],
              user_id: this.userID,
              date: this.onDate,
              time: this.startTime,
              service_id: this.checkoutData["_id"],
              promocode_id: promocodeID,
              deviceToken: null,
              duration: this.checkoutData["duration"]
            };
            this.userServ.payForService(dataToPass).subscribe(function (data) {
              if (data["code"] === 200) {
                _this19.isBookingCompleted = true;
                sessionStorage.removeItem("userprefrence");
                sessionStorage.removeItem("bookingData");
                setTimeout(function () {
                  return _this19.router.navigate(["/home"]);
                }, 2500); // this.router.navigate(["/home"]);
              } else if (data["code"] === 400) {
                _this19.isBookingCompleted = false;

                _this19.toastServ.error(data["message"], "", {
                  timeOut: 1000
                });
              }
            }, function (error) {
              _this19.toastServ.error(error.error["message"], "", {
                timeOut: 1000
              });
            });
          } else if (this.paymentMode === "card") {
            if (this.isUseWallet === false) {
              this.month = this.expDate.slice(0, 2);
              this.year = this.expDate.slice(2);
              var cardData = {
                cardNum: this.cardNum,
                month: this.month,
                cvc: this.cvc,
                year: this.year
              };
              this.userServ.getStripeToken(cardData).subscribe(function (data) {
                if (data["code"] === 200) {
                  _this19.stripeToken = data["data"]["id"];
                  _this19.stripeEmail = _this19.userEmailID;
                  dataToPass = {
                    payType: _this19.paymentMode,
                    totalAmt: _this19.totalPrice,
                    salon_id: _this19.salonData["_id"],
                    user_id: _this19.userID,
                    date: _this19.onDate,
                    time: _this19.startTime,
                    service_id: _this19.checkoutData["_id"],
                    promocode_id: promocodeID,
                    deviceToken: null,
                    duration: _this19.checkoutData["duration"],
                    stripeToken: _this19.stripeToken,
                    stripeEmail: _this19.stripeEmail,
                    isWalletUsed: false,
                    walletAmountUsed: null
                  };

                  _this19.userServ.payForService(dataToPass).subscribe(function (data) {
                    if (data["code"] === 200) {
                      _this19.isBookingCompleted = true;
                      sessionStorage.removeItem("userprefrence");
                      sessionStorage.removeItem("bookingData");
                      setTimeout(function () {
                        return _this19.router.navigate(["/home"]);
                      }, 2500); // this.router.navigate(["/home"]);
                    } else if (data["code"] === 400) {
                      _this19.isBookingCompleted = false;

                      _this19.toastServ.error(data["message"], "", {
                        timeOut: 1000
                      });
                    }
                  }, function (error) {
                    _this19.toastServ.error(error.error["message"], "", {
                      timeOut: 1000
                    });
                  });
                } else if (data["code"] === 400) {
                  _this19.toastServ.error(data["data"]["raw"]["message"], "", {
                    timeOut: 1000
                  });
                }
              });
            } else if (this.isUseWallet === true) {
              if (this.expDate && this.cardNum && this.cvc) {
                this.month = this.expDate.slice(0, 2);
                this.year = this.expDate.slice(2);
                var _cardData = {
                  cardNum: this.cardNum,
                  month: this.month,
                  cvc: this.cvc,
                  year: this.year
                };
                this.userServ.getStripeToken(_cardData).subscribe(function (data) {
                  if (data["code"] === 200) {
                    _this19.stripeToken = data["data"]["id"];
                    _this19.stripeEmail = _this19.userEmailID;
                    dataToPass = {
                      payType: _this19.paymentMode,
                      totalAmt: _this19.totalPrice,
                      salon_id: _this19.salonData["_id"],
                      user_id: _this19.userID,
                      date: _this19.onDate,
                      time: _this19.startTime,
                      service_id: _this19.checkoutData["_id"],
                      promocode_id: promocodeID,
                      deviceToken: null,
                      duration: _this19.checkoutData["duration"],
                      stripeToken: _this19.stripeToken,
                      stripeEmail: _this19.stripeEmail,
                      isWalletUsed: true,
                      walletAmountUsed: _this19.walletAmount
                    };

                    _this19.userServ.payForService(dataToPass).subscribe(function (data) {
                      if (data["code"] === 200) {
                        _this19.isBookingCompleted = true;
                        sessionStorage.removeItem("userprefrence");
                        sessionStorage.removeItem("bookingData");
                        setTimeout(function () {
                          return _this19.router.navigate(["/home"]);
                        }, 2500); // this.router.navigate(["/home"]);
                      } else if (data["code"] === 400) {
                        _this19.isBookingCompleted = false;

                        _this19.toastServ.error(data["message"], "", {
                          timeOut: 1000
                        });
                      }
                    }, function (error) {
                      _this19.toastServ.error(error.error["message"], "", {
                        timeOut: 1000
                      });
                    });
                  } else if (data["code"] === 400) {
                    _this19.toastServ.error(data["data"]["raw"]["message"], "", {
                      timeOut: 1000
                    });
                  }
                });
              } else {
                dataToPass = {
                  payType: this.paymentMode,
                  totalAmt: this.totalPrice,
                  salon_id: this.salonData["_id"],
                  user_id: this.userID,
                  date: this.onDate,
                  time: this.startTime,
                  service_id: this.checkoutData["_id"],
                  promocode_id: promocodeID,
                  deviceToken: null,
                  duration: this.checkoutData["duration"],
                  stripeToken: null,
                  stripeEmail: null,
                  isWalletUsed: true,
                  walletAmountUsed: this.walletAmount
                };
                this.userServ.payForService(dataToPass).subscribe(function (data) {
                  if (data["code"] === 200) {
                    _this19.isBookingCompleted = true;
                    sessionStorage.removeItem("userprefrence");
                    sessionStorage.removeItem("bookingData");
                    setTimeout(function () {
                      return _this19.router.navigate(["/home"]);
                    }, 2500); // this.router.navigate(["/home"]);
                  } else if (data["code"] === 400) {
                    _this19.isBookingCompleted = false;

                    _this19.toastServ.error(data["message"], "", {
                      timeOut: 1000
                    });
                  }
                }, function (error) {
                  _this19.toastServ.error(error.error["message"], "", {
                    timeOut: 1000
                  });
                });
              }
            }
          }
        }
      }, {
        key: "goToBookings",
        value: function goToBookings() {
          this.router.navigate(["/booking"]);
        }
      }, {
        key: "goToHome",
        value: function goToHome() {
          this.router.navigate(["/home"]);
          sessionStorage.removeItem("userprefrence");
        }
      }, {
        key: "modelChanged",
        value: function modelChanged(event) {}
      }, {
        key: "getWalletBalance",
        value: function getWalletBalance() {
          var _this20 = this;

          var dataToPass = {
            user_id: this.userID
          };
          this.userServ.getWalletAmount(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this20.walletAmount = data["data"].amount;
            } else if (data["code"] === 400) {
              _this20.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this20.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "checkIsWallet",
        value: function checkIsWallet(data) {
          if (data === false) {
            this.isUseWallet = true;
            this.cardNum = "";
            this.expDate = "";
            this.cvc = "";
            this.enableMakePaymentButton = false;
          } else if (data === true) {
            this.isUseWallet = false;
          } // if (data === false) {
          //   this.isUseWallet = true;
          //   if (this.isUseWallet === true) {
          //     this.enableMakePaymentButton = false;
          //     if (this.walletAmount > this.totalPrice) {
          //       this.isCardDetailsRequired = true;
          //     } else if (this.walletAmount <= this.totalPrice) {
          //       this.isCardDetailsRequired = false;
          //     }
          //   }
          // } else if (data === true) {
          //   this.isUseWallet = false;
          //   if (this.isUseWallet === false) {
          //     this.enableMakePaymentButton = false;
          //     if (this.walletAmount > this.totalPrice) {
          //       this.isCardDetailsRequired = false;
          //     } else if (this.walletAmount <= this.totalPrice) {
          //       this.isCardDetailsRequired = false;
          //     }
          //   }
          // }

        }
      }, {
        key: "goToList",
        value: function goToList() {
          this.router.navigate(["/list  "]);
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _allserv_service__WEBPACK_IMPORTED_MODULE_3__["AllservService"]
      }, {
        type: _usercommonservice_service__WEBPACK_IMPORTED_MODULE_4__["UsercommonserviceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_7__["LanguagesService"]
      }];
    };

    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-checkout",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./checkout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/checkout/checkout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./checkout.component.scss */
      "./src/app/user/home/checkout/checkout.component.scss"))["default"]]
    })], CheckoutComponent);
    /***/
  },

  /***/
  "./src/app/user/home/download/download.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/user/home/download/download.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeDownloadDownloadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainSection {\n  margin-top: 6em;\n}\n\n.app-info-section {\n  background-image: url('bg-app-info.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #763987;\n}\n\n.app-info-section .app-info-inner {\n  padding: 70px 0;\n}\n\n.app-info-section .app-info-inner .app-info {\n  margin-top: 190px;\n  margin-left: 70px;\n}\n\n.app-info-section .app-info-inner .app-info h5 {\n  font-size: 18px;\n  text-align: left;\n  letter-spacing: 1.44px;\n  color: #ffffff;\n  font-weight: 100;\n}\n\n.app-info-section .app-info-inner .app-info h4 {\n  text-align: left;\n  letter-spacing: 2.88px;\n  color: aliceblue;\n  font-size: 36px;\n  font-weight: 600;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL2Rvd25sb2FkL2Rvd25sb2FkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL2hvbWUvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx3Q0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0VGOztBRERFO0VBR0UsZUFBQTtBQ0NKOztBREFJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQ0VOOztBRERNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURETTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC91c2VyL2hvbWUvZG93bmxvYWQvZG93bmxvYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2ZW07XG59XG4uYXBwLWluZm8tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1hcHAtaW5mby5wbmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMTgsIDU3LCAxMzUsIDEpO1xuICAuYXBwLWluZm8taW5uZXIge1xuICAgIC8vIGJhY2tncm91bmQ6ICM3NjM5ODcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIC8vIG9wYWNpdHk6IDAuODtcbiAgICBwYWRkaW5nOiA3MHB4IDA7XG4gICAgLmFwcC1pbmZvIHtcbiAgICAgIG1hcmdpbi10b3A6IDE5MHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gICAgICBoNSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNDRweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICB9XG4gICAgICBoNCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAyLjg4cHg7XG4gICAgICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIubWFpblNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2ZW07XG59XG5cbi5hcHAtaW5mby1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1hcHAtaW5mby5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NjM5ODc7XG59XG4uYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8taW5uZXIge1xuICBwYWRkaW5nOiA3MHB4IDA7XG59XG4uYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8taW5uZXIgLmFwcC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMTkwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xufVxuLmFwcC1pbmZvLXNlY3Rpb24gLmFwcC1pbmZvLWlubmVyIC5hcHAtaW5mbyBoNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNDRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8taW5uZXIgLmFwcC1pbmZvIGg0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuODhweDtcbiAgY29sb3I6IGFsaWNlYmx1ZTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/home/download/download.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user/home/download/download.component.ts ***!
    \**********************************************************/

  /*! exports provided: DownloadComponent */

  /***/
  function srcAppUserHomeDownloadDownloadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DownloadComponent", function () {
      return DownloadComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");

    var DownloadComponent = /*#__PURE__*/function () {
      function DownloadComponent(languagesService) {
        _classCallCheck(this, DownloadComponent);

        this.languagesService = languagesService;
      }

      _createClass(DownloadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this21.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }]);

      return DownloadComponent;
    }();

    DownloadComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["LanguagesService"]
      }];
    };

    DownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-download",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./download.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/download/download.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./download.component.scss */
      "./src/app/user/home/download/download.component.scss"))["default"]]
    })], DownloadComponent);
    /***/
  },

  /***/
  "./src/app/user/home/faq/faq.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/user/home/faq/faq.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeFaqFaqComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZS9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/user/home/faq/faq.component.ts":
  /*!************************************************!*\
    !*** ./src/app/user/home/faq/faq.component.ts ***!
    \************************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppUserHomeFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FaqComponent = /*#__PURE__*/function () {
      function FaqComponent() {
        _classCallCheck(this, FaqComponent);
      }

      _createClass(FaqComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-faq",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/faq/faq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.scss */
      "./src/app/user/home/faq/faq.component.scss"))["default"]]
    })], FaqComponent);
    /***/
  },

  /***/
  "./src/app/user/home/home.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/user/home/home.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".homeWrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n}\n.homeWrapper .searchBlock {\n  display: flex;\n  justify-content: space-evenly;\n  min-height: 200px;\n  box-shadow: 0px 1px 1px 2px lightgrey;\n  margin: 10px;\n  align-items: center;\n  border-radius: 5px;\n}\n.homeWrapper .searchBlock .searchService {\n  padding: 1em;\n  cursor: pointer;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n.homeWrapper .searchBlock .chooseDate {\n  cursor: pointer;\n  padding: 1em;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n.homeWrapper .searchBlock .location {\n  cursor: pointer;\n  padding: 1em;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUNFTjtBREFJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDRU47QURBSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZVdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLnNlYXJjaEJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDJweCBsaWdodGdyZXk7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuXG4gICAgLnNlYXJjaFNlcnZpY2Uge1xuICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuY2hvb3NlRGF0ZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICAgIC5sb2NhdGlvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwYWRkaW5nOiAxZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxuICB9XG59XG4iLCIuaG9tZVdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5ob21lV3JhcHBlciAuc2VhcmNoQmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMXB4IDJweCBsaWdodGdyZXk7XG4gIG1hcmdpbjogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmhvbWVXcmFwcGVyIC5zZWFyY2hCbG9jayAuc2VhcmNoU2VydmljZSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5ob21lV3JhcHBlciAuc2VhcmNoQmxvY2sgLmNob29zZURhdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uaG9tZVdyYXBwZXIgLnNlYXJjaEJsb2NrIC5sb2NhdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/home/home.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/home/home.component.ts ***!
    \*********************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppUserHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// google.maps.event.addDomListener(window, "load", this.initialize);
        } // initialize() {
        //   var autoComplete = new google.maps.places.Autocomplete(
        //     document.getElementById("textInpt")
        //   );
        //   google.maps.event.AddListener(autoComplete, "plac_changed", function() {
        //     var places = autoComplete.getPlace();
        //     var location = "<b>Location:</b>" + places.formatted_address + "<br/>";
        //     location += "<b>Latitude:</b>" + places.geometry.location.A + "<br/>";
        //     location += "<b>Longitude:</b>" + places.geometry.location.F + "<br/>";
        //   });
        //   this.locationValue = location;
        // }

      }, {
        key: "showServicesList",
        value: function showServicesList() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/user/home/home.component.scss"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/footer/footer.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/user/home/mainpage/footer/footer.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeMainpageFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer .footer-above {\n  background: #34374c;\n  opacity: 1;\n  text-align: center;\n  padding: 70px;\n}\n.footer .footer-above .footer-links ul {\n  display: flex;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.footer .footer-above .footer-links ul li {\n  margin-right: 40px;\n}\n.footer .footer-above .footer-links ul li a {\n  letter-spacing: 0;\n  color: #fffefe;\n  font-size: 13px;\n  font-weight: 500;\n}\n.footer .footer-above .footer-links ul li:last-child {\n  margin-right: 0;\n}\n.footer .footer-above .social-icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer .footer-above .social-icons .icon-outer {\n  margin-right: 5px;\n  height: 40px;\n  width: 40px;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  line-height: 40px;\n  font-size: 22px;\n  color: #34374c;\n}\n.footer .footer-below {\n  background: #2c2e3e 0% 0% no-repeat padding-box;\n  opacity: 1;\n  padding: 30px 100px;\n  display: flex;\n  justify-content: space-between;\n}\n.footer .footer-below .reserved-sec {\n  text-align: left;\n  letter-spacing: 0.14px;\n  color: #fefeff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 100;\n}\n.footer .footer-below .terms-privacy {\n  text-align: left;\n  letter-spacing: 0.14px;\n  color: #fefeff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 100;\n}\n.footer .footer-below .terms-privacy a {\n  color: #fff;\n}\n@media (max-width: 767px) {\n  .footer .footer-above {\n    padding: 25px;\n  }\n  .footer .footer-above .footer-links ul {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n  .footer .footer-above .footer-links ul li {\n    margin-right: 20px;\n  }\n  .footer .footer-below {\n    padding: 25px 10px;\n    display: block;\n  }\n  .footer .footer-below .reserved-sec {\n    margin-bottom: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL21haW5wYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvaG9tZS9tYWlucGFnZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQVI7QURFWTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNBaEI7QURDZ0I7RUFDSSxrQkFBQTtBQ0NwQjtBREFvQjtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0V4QjtBREFvQjtFQUNJLGVBQUE7QUNFeEI7QURHUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRFo7QURFWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FoQjtBRElJO0VBQ0ksK0NBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNGUjtBREdRO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRFo7QURHUTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RaO0FERVk7RUFDSSxXQUFBO0FDQWhCO0FETUE7RUFFUTtJQUNJLGFBQUE7RUNKVjtFRE1jO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtFQ0psQjtFREtrQjtJQUNJLGtCQUFBO0VDSHRCO0VEUU07SUFDSSxrQkFBQTtJQUNBLGNBQUE7RUNOVjtFRE9VO0lBQ0ksa0JBQUE7RUNMZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL21haW5wYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIC5mb290ZXItYWJvdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMzNDM3NGM7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogNzBweDtcclxuICAgICAgICAuZm9vdGVyLWxpbmtzIHtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmVmZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zb2NpYWwtaWNvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgLmljb24tb3V0ZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNDM3NGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vdGVyLWJlbG93IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMmMyZTNlIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLnJlc2VydmVkLXNlYyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmVmZWZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXJtcy1wcml2YWN5IHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZWZlZmY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICAuZm9vdGVyLWFib3ZlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgLmZvb3Rlci1saW5rcyB7XHJcbiAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyLWJlbG93IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLnJlc2VydmVkLXNlYyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuZm9vdGVyIC5mb290ZXItYWJvdmUge1xuICBiYWNrZ3JvdW5kOiAjMzQzNzRjO1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDcwcHg7XG59XG4uZm9vdGVyIC5mb290ZXItYWJvdmUgLmZvb3Rlci1saW5rcyB1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5mb290ZXIgLmZvb3Rlci1hYm92ZSAuZm9vdGVyLWxpbmtzIHVsIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuLmZvb3RlciAuZm9vdGVyLWFib3ZlIC5mb290ZXItbGlua3MgdWwgbGkgYSB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogI2ZmZmVmZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmZvb3RlciAuZm9vdGVyLWFib3ZlIC5mb290ZXItbGlua3MgdWwgbGk6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5mb290ZXIgLmZvb3Rlci1hYm92ZSAuc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZm9vdGVyIC5mb290ZXItYWJvdmUgLnNvY2lhbC1pY29ucyAuaWNvbi1vdXRlciB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjMzQzNzRjO1xufVxuLmZvb3RlciAuZm9vdGVyLWJlbG93IHtcbiAgYmFja2dyb3VuZDogIzJjMmUzZSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDMwcHggMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5mb290ZXIgLmZvb3Rlci1iZWxvdyAucmVzZXJ2ZWQtc2VjIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTRweDtcbiAgY29sb3I6ICNmZWZlZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5mb290ZXIgLmZvb3Rlci1iZWxvdyAudGVybXMtcHJpdmFjeSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE0cHg7XG4gIGNvbG9yOiAjZmVmZWZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uZm9vdGVyIC5mb290ZXItYmVsb3cgLnRlcm1zLXByaXZhY3kgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmZvb3RlciAuZm9vdGVyLWFib3ZlIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICB9XG4gIC5mb290ZXIgLmZvb3Rlci1hYm92ZSAuZm9vdGVyLWxpbmtzIHVsIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmZvb3RlciAuZm9vdGVyLWFib3ZlIC5mb290ZXItbGlua3MgdWwgbGkge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgfVxuICAuZm9vdGVyIC5mb290ZXItYmVsb3cge1xuICAgIHBhZGRpbmc6IDI1cHggMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAuZm9vdGVyIC5mb290ZXItYmVsb3cgLnJlc2VydmVkLXNlYyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/footer/footer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user/home/mainpage/footer/footer.component.ts ***!
    \***************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppUserHomeMainpageFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
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
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../services */
    "./src/app/services/index.ts");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent(router, languagesService) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        this.languagesService = languagesService;
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this22.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "goTo",
        value: function goTo(data) {
          if (data === "facebook") {
            window.open("https://www.facebook.com", "_blank");
          }

          if (data === "linkedin") {
            window.open("https://www.linkedin.com", "_blank");
          }

          if (data === "google") {
            window.open("https://www.googleplus.com", "_blank");
          }

          if (data === "twitter") {
            window.open("https://www.twitter.com", "_blank");
          }
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_3__["LanguagesService"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-footer",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/user/home/mainpage/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/googlesearch/googlesearch.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/user/home/mainpage/googlesearch/googlesearch.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeMainpageGooglesearchGooglesearchComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input {\n  padding: 10px;\n  border-radius: 25px;\n  outline: none;\n  width: 100%;\n  padding-left: 2.5em;\n  border: 1px solid white;\n}\napp-googlesearch {\n  width: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9ob21lL21haW5wYWdlL2dvb2dsZXNlYXJjaC9nb29nbGVzZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC91c2VyL2hvbWUvbWFpbnBhZ2UvZ29vZ2xlc2VhcmNoL2dvb2dsZXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0IHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogMi41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuYXBwLWdvb2dsZXNlYXJjaCB7XG4gIHdpZHRoOiBhdXRvO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/googlesearch/googlesearch.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/user/home/mainpage/googlesearch/googlesearch.component.ts ***!
    \***************************************************************************/

  /*! exports provided: GooglesearchComponent */

  /***/
  function srcAppUserHomeMainpageGooglesearchGooglesearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GooglesearchComponent", function () {
      return GooglesearchComponent;
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

    var GooglesearchComponent = /*#__PURE__*/function () {
      function GooglesearchComponent(mapsAPILoader) {
        _classCallCheck(this, GooglesearchComponent);

        this.mapsAPILoader = mapsAPILoader;
        this.setAddress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(GooglesearchComponent, [{
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
          var _this23 = this;

          this.mapsAPILoader.load().then(function (res) {
            var autocomplete = new google.maps.places.Autocomplete(_this23.addresstext.nativeElement, {
              types: [_this23.adressType]
            });
            google.maps.event.addListener(autocomplete, "place_changed", function () {
              var place = autocomplete.getPlace();

              _this23.invokeEvent(place);

              _this23.autocompleteInput = place.formatted_address;
            });
          });
        }
      }, {
        key: "invokeEvent",
        value: function invokeEvent(place) {
          this.setAddress.emit(place);
        }
      }]);

      return GooglesearchComponent;
    }();

    GooglesearchComponent.ctorParameters = function () {
      return [{
        type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GooglesearchComponent.prototype, "adressType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], GooglesearchComponent.prototype, "setAddress", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("addresstext", {
      "static": false
    })], GooglesearchComponent.prototype, "addresstext", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GooglesearchComponent.prototype, "autocompleteInput", void 0);
    GooglesearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-googlesearch",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./googlesearch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/googlesearch/googlesearch.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./googlesearch.component.css */
      "./src/app/user/home/mainpage/googlesearch/googlesearch.component.css"))["default"]]
    })], GooglesearchComponent);
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/header/header.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/user/home/mainpage/header/header.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeMainpageHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header .form-inline li {\n  list-style-type: none;\n}\n.header .form-inline li a {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #323333;\n  opacity: 1;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.header .form-inline li button {\n  background: transparent linear-gradient(99deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000012;\n  border-radius: 25px;\n  height: 50px;\n  border-color: unset;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  width: 190px;\n  margin-left: 15px;\n}\n.header .navbar {\n  background-color: #f7f7f7;\n  box-shadow: none;\n  padding: 5px 100px;\n}\n.header .navbar img {\n  width: 230px;\n}\n@media (max-width: 767px) {\n  .header .navbar {\n    padding: 10px;\n  }\n  .header .navbar img {\n    width: initial;\n  }\n  .header .form-inline li button {\n    font-size: 12px;\n    width: 165px;\n    height: 40px;\n  }\n  .header .form-inline li a {\n    padding: 5px 10px;\n  }\n\n  .expanded {\n    display: block !important;\n  }\n}\n.userDetail {\n  display: flex;\n  align-items: center;\n}\n.logout {\n  cursor: pointer;\n  margin-left: 5px;\n}\n.langDropdown {\n  min-width: 72px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL21haW5wYWdlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvaG9tZS9tYWlucGFnZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UscUJBQUE7QUNETjtBREVNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDQVI7QURFTTtFQUNFLG9HQUFBO0VBR0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FETUU7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKSjtBREtJO0VBQ0UsWUFBQTtBQ0hOO0FEUUE7RUFFSTtJQUNFLGFBQUE7RUNOSjtFRE9JO0lBQ0UsY0FBQTtFQ0xOO0VEVU07SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNSUjtFRFVNO0lBQ0UsaUJBQUE7RUNSUjs7RURhQztJQUNDLHlCQUFBO0VDVkY7QUFDRjtBRFlBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDVkY7QURZQTtFQUNFLGVBQUE7RUFFQSxnQkFBQTtBQ1ZGO0FEWUE7RUFDRSxlQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC91c2VyL2hvbWUvbWFpbnBhZ2UvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIC5mb3JtLWlubGluZSB7XHJcbiAgICBsaSB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbiAgICAgICAgY29sb3I6ICMzMjMzMzM7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgfVxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5OWRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKVxyXG4gICAgICAgICAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMjk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAxMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItY29sb3I6IHVuc2V0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMDBweDtcclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JtLWlubGluZSB7XHJcbiAgICAgIGxpIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgd2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAgLmV4cGFuZGVke1xyXG4gICAgZGlzcGxheTpibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4udXNlckRldGFpbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5sb2dvdXQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ubGFuZ0Ryb3Bkb3duIHtcclxuICBtaW4td2lkdGg6IDcycHggXHJcbn1cclxuIiwiLmhlYWRlciAuZm9ybS1pbmxpbmUgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uaGVhZGVyIC5mb3JtLWlubGluZSBsaSBhIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogIzMyMzMzMztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmhlYWRlciAuZm9ybS1pbmxpbmUgbGkgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDk5ZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAxMjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItY29sb3I6IHVuc2V0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAxLjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDE5MHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5oZWFkZXIgLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMDBweDtcbn1cbi5oZWFkZXIgLm5hdmJhciBpbWcge1xuICB3aWR0aDogMjMwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVhZGVyIC5uYXZiYXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmhlYWRlciAubmF2YmFyIGltZyB7XG4gICAgd2lkdGg6IGluaXRpYWw7XG4gIH1cbiAgLmhlYWRlciAuZm9ybS1pbmxpbmUgbGkgYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgd2lkdGg6IDE2NXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuICAuaGVhZGVyIC5mb3JtLWlubGluZSBsaSBhIHtcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgfVxuXG4gIC5leHBhbmRlZCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuLnVzZXJEZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9nb3V0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubGFuZ0Ryb3Bkb3duIHtcbiAgbWluLXdpZHRoOiA3MnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/header/header.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user/home/mainpage/header/header.component.ts ***!
    \***************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppUserHomeMainpageHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../enums */
    "./src/app/enums/index.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _auth_serv_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth-serv.service */
    "./src/app/user/home/auth-serv.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router, authServ, languagesService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.authServ = authServ;
        this.languagesService = languagesService;
        this.langList = Object.values(_enums__WEBPACK_IMPORTED_MODULE_3__["AvailableLanguages"]);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          if (localStorage.getItem("LoggedInUser")) {
            this.isUserLoggedIn = true;
            this.userName = sessionStorage.getItem("username");
          } else {
            this.isUserLoggedIn = false;
          }

          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this24.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "toggleHeader",
        value: function toggleHeader() {
          document.getElementById("navbarSupportedContent").classList.toggle("expanded");
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(["/login"]);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authServ.logout();
          this.router.navigate(["/home"]);
          localStorage.removeItem("LoggedInUser");
        }
      }, {
        key: "handleDropDown",
        value: function handleDropDown(event) {
          var value = event.value;
          this.languagesService.changeLanguage(value);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_serv_service__WEBPACK_IMPORTED_MODULE_5__["AuthServService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["LanguagesService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/user/home/mainpage/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/mainpage.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/user/home/mainpage/mainpage.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeMainpageMainpageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".locationArea {\n  margin-left: 10px;\n}\n.locationLabel {\n  display: flex;\n  align-items: center;\n}\n.geoLoc {\n  width: 100%;\n}\n.banner-section {\n  background-image: url('bg.png');\n  background-repeat: no-repeat;\n  min-height: 670px;\n  background-size: cover;\n  margin-top: 70px;\n}\n.banner-section .book-appointement {\n  background: #f5f6f7 0% 0% no-repeat padding-box;\n  box-shadow: 0px 1px 10px #00000029;\n  opacity: 1;\n  min-height: 451px;\n  width: 541px;\n  padding: 25px;\n  margin-top: 120px;\n  margin-left: -30px;\n}\n.banner-section .book-appointement h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #323333;\n  opacity: 1;\n  font-size: 46px;\n  font-weight: 400;\n  padding-bottom: 20px;\n  padding-top: 5px;\n}\n.banner-section .book-appointement .book-appointement-inner {\n  position: relative;\n}\n.banner-section .book-appointement .book-appointement-inner input {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-radius: 25px;\n  height: 50px;\n  border: none;\n  padding-left: 50px;\n  text-align: left;\n  letter-spacing: 0;\n  color: #9595a1;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 100;\n  padding-left: 60px;\n}\n.banner-section .book-appointement .book-appointement-inner img {\n  position: absolute;\n  left: 18px;\n  top: 14px;\n}\n.banner-section .book-appointement .btn-submit {\n  margin-top: 40px;\n}\n.banner-section .book-appointement .btn-submit button {\n  background: transparent linear-gradient(93deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  border: none;\n  width: 100%;\n  font-size: 14px;\n  font-weight: 600;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n}\n.banner-section .book-appointement label {\n  text-align: left;\n  letter-spacing: 0;\n  color: #262626;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n  padding-left: 15px;\n}\n.btn .btn-primary:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.get-stylish-look {\n  padding: 40px;\n  text-align: center;\n}\n.get-stylish-look h2 {\n  text-align: center;\n  letter-spacing: 3.6px;\n  color: #323333;\n  opacity: 1;\n  font-size: 45px;\n  font-weight: 400;\n}\n.get-stylish-look .style-look-details {\n  text-align: center;\n  letter-spacing: 4.2px;\n  color: #323333;\n  opacity: 1;\n  font-size: 14px;\n}\n.about-us {\n  background-image: url('photo-of-woman-holding-pink-flower-2144413.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 500px;\n  margin-top: -25px;\n  z-index: 0;\n}\n.about-us .about-us-inner {\n  background: #763987 0% 0% no-repeat padding-box;\n  opacity: 0.9;\n  min-height: 500px;\n  padding: 90px 0 0;\n}\n.about-us .about-us-inner h2 {\n  text-align: left;\n  letter-spacing: 2.88px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 36px;\n  font-weight: 100;\n  padding-bottom: 15px;\n}\n.about-us .about-us-inner p {\n  text-align: left;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 100;\n  max-width: 446px;\n  margin: 0;\n}\n.about-us .about-us-inner button {\n  box-shadow: 0px 3px 12px #00000029;\n  border: 1px solid #ffffff;\n  border-radius: 25px;\n  background: none;\n  width: 148px;\n  height: 50px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n  margin-top: 60px;\n}\n.about-us .about-us-inner .about-us-img {\n  margin-top: 50px;\n  margin-right: -65px;\n}\n.btn-book-now {\n  position: relative;\n  width: 189px;\n  z-index: 10;\n  display: block;\n  margin: 0 auto;\n}\n.btn-book-now button {\n  background: transparent linear-gradient(99deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  opacity: 1;\n  height: 50px;\n  border: none;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0 25px;\n  padding-right: 50px;\n}\n.btn-book-now img {\n  position: absolute;\n  right: 50px;\n  top: 11px;\n  width: 25px;\n}\n.services-section {\n  padding: 40px;\n}\n.services-section .services-section-outer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 25px;\n  flex-wrap: wrap;\n}\n.services-section .services-section-outer .services-outer .services-inner {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #ff7d7d;\n  border-radius: 10px;\n  opacity: 1;\n  width: 100px;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 50px;\n  transition: 0.6s;\n}\n.services-section .services-section-outer .services-outer .services-inner:hover {\n  background: #763987;\n  border: 1px solid #763987;\n}\n.services-section .services-section-outer .services-outer .services-inner:hover .a {\n  opacity: 1 !important;\n}\n.services-section .services-section-outer .services-outer .services-inner:hover .b {\n  fill: #fff;\n}\n.services-section .services-section-outer .services-outer .services-inner .a {\n  opacity: 0.4;\n}\n.services-section .services-section-outer .services-outer .services-inner .b {\n  fill: #ff7d7d;\n}\n.services-section .services-section-outer .services-outer h5 {\n  text-align: center;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 18px;\n  font-weight: 100;\n  width: 100px;\n  padding-top: 15px;\n}\n.services-section h2 {\n  text-align: center;\n  letter-spacing: 2.88px;\n  color: #282c37;\n  opacity: 1;\n  font-size: 36px;\n  font-weight: 100;\n  max-width: 455px;\n  margin: 0 auto;\n  display: block;\n  padding-bottom: 40px;\n  padding-top: 25px;\n}\n.services-section h2 img {\n  margin-top: -10px;\n}\n.app-info-section {\n  background-image: url('bg-app-info.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: #763987;\n}\n.app-info-section .app-info-inner {\n  padding: 70px 0;\n}\n.app-info-section .app-info-inner .app-info {\n  margin-top: 190px;\n  margin-left: 70px;\n}\n.app-info-section .app-info-inner .app-info h5 {\n  font-size: 18px;\n  text-align: left;\n  letter-spacing: 1.44px;\n  color: #ffffff;\n  font-weight: 100;\n}\n.app-info-section .app-info-inner .app-info h4 {\n  text-align: left;\n  letter-spacing: 2.88px;\n  color: aliceblue;\n  font-size: 36px;\n  font-weight: 600;\n  padding-bottom: 30px;\n}\n.modal-overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 999;\n}\n.modal-overlay .modal-section {\n  padding: 50px 30px;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 1px 10px #00000029;\n  opacity: 1;\n  width: 541px;\n  margin: 10px;\n  min-height: 550px;\n  /* Customize the label (the container) */\n  /* Hide the browser's default radio button */\n  /* Create a custom radio button */\n  /* On mouse-over, add a grey background color */\n  /* When the radio button is checked, add a blue background */\n  /* Create the indicator (the dot/circle - hidden when not checked) */\n  /* Show the indicator (dot/circle) when checked */\n  /* Style the indicator (dot/circle) */\n}\n.modal-overlay .modal-section .container {\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  font-size: 22px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.modal-overlay .modal-section .container input {\n  position: absolute;\n  opacity: 0;\n  cursor: pointer;\n  height: 0;\n  width: 0;\n}\n.modal-overlay .modal-section .checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #fff;\n  border-radius: 50%;\n  border: 1px solid #cc2b5e;\n}\n.modal-overlay .modal-section .container:hover input ~ .checkmark {\n  background-color: #fff;\n}\n.modal-overlay .modal-section .container input:checked ~ .checkmark {\n  background: transparent linear-gradient(180deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n}\n.modal-overlay .modal-section .checkmark:after {\n  content: \"\";\n  position: absolute;\n  display: none;\n}\n.modal-overlay .modal-section .container input:checked ~ .checkmark:after {\n  display: block;\n}\n.modal-overlay .modal-section .container .checkmark:after {\n  top: 4px;\n  left: 4px;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: white;\n}\n.modal-overlay .modal-section h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #763987;\n  opacity: 1;\n  font-size: 21px;\n  font-weight: 600;\n  padding-bottom: 10px;\n}\n.modal-overlay .modal-section .hair-section {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 35px;\n}\n.modal-overlay .modal-section .hair-section h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #262626;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.modal-overlay .modal-section .hair-section .hair-section-outer {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.modal-overlay .modal-section .hair-section .hair-section-outer .hair-section-inner label {\n  text-align: left;\n  letter-spacing: 0;\n  color: #262626;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n  width: 165px;\n}\n.modal-overlay .modal-section .massage-section {\n  margin-top: 20px;\n}\n.modal-overlay .modal-section .btn-category-section {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n.modal-overlay .modal-section .btn-category-section button {\n  background: #282c37 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000029;\n  border-radius: 25px;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n  text-transform: uppercase;\n  min-width: 161px;\n  height: 50px;\n}\n.modal-overlay .modal-section .btn-category-section .btn-done {\n  background: transparent linear-gradient(100deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  margin-left: 20px;\n}\n@media (max-width: 1200px) {\n  .banner-section .book-appointement {\n    width: 500px;\n  }\n\n  .about-us .about-us-inner .about-us-img {\n    margin-right: -35px;\n  }\n}\n@media (max-width: 991px) {\n  .banner-section {\n    margin-top: 55px;\n  }\n  .banner-section .book-appointement {\n    width: 380px;\n    margin-left: -50px;\n  }\n  .banner-section .book-appointement h2 {\n    font-size: 33px;\n  }\n\n  .about-us .about-us-inner button {\n    margin-top: 20px;\n    margin-bottom: 20px;\n  }\n}\n@media (max-width: 767px) {\n  .banner-section {\n    min-height: 560px;\n    margin-top: 60px;\n  }\n  .banner-section .book-appointement {\n    margin-top: 50px;\n    margin-left: 0;\n    padding: 15px;\n    width: 100%;\n  }\n  .banner-section .book-appointement h2 {\n    font-size: 24px;\n    padding-bottom: 0;\n  }\n  .banner-section .book-appointement .btn-submit {\n    margin-top: 15px;\n    text-align: center;\n  }\n  .banner-section .book-appointement .btn-submit button {\n    font-size: 12px;\n    width: 165px;\n    height: 40px;\n  }\n\n  .get-stylish-look {\n    padding: 25px;\n  }\n  .get-stylish-look h2 {\n    font-size: 21px;\n  }\n\n  .about-us .about-us-inner .about-us-img {\n    margin-top: 0;\n    margin-right: 0;\n  }\n  .about-us .about-us-inner button {\n    margin-top: 15px;\n    margin-bottom: 15px;\n    font-size: 12px;\n    width: 125px;\n    height: 40px;\n  }\n\n  .app-info-section .app-info-inner {\n    padding: 25px 0;\n  }\n  .app-info-section .app-info-inner .app-info {\n    margin-top: 30px;\n    margin-left: 0;\n    text-align: center;\n  }\n  .app-info-section .app-info-inner .app-info h4 {\n    font-size: 21px;\n    padding-bottom: 0;\n    text-align: center;\n  }\n  .app-info-section .app-info-inner .app-info h5 {\n    text-align: center;\n  }\n\n  .services-section {\n    padding: 25px;\n  }\n  .services-section h2 {\n    font-size: 21px;\n    max-width: 100%;\n    padding-bottom: 20px;\n    padding-top: 25px;\n    width: 100%;\n  }\n  .services-section h2 img {\n    margin-top: 0;\n    width: 15px;\n  }\n  .services-section .services-section-outer .services-outer {\n    margin-bottom: 15px;\n  }\n  .services-section .services-section-outer .services-outer .services-inner {\n    margin-right: 10px;\n  }\n  .services-section .services-section-outer .services-outer h5 {\n    padding-top: 5px;\n  }\n\n  .modal-overlay .modal-section {\n    width: 100%;\n    padding: 10px;\n  }\n  .modal-overlay .modal-section .btn-category-section button {\n    min-width: 130px;\n  }\n  .modal-overlay .modal-section .btn-category-section .btn-done {\n    margin-left: 5px;\n    margin-top: 0;\n  }\n  .modal-overlay .modal-section .hair-section .hair-section-outer .hair-section-inner label {\n    padding-left: 25px;\n    font-size: 13px;\n  }\n}\n.servicesWrapper {\n  max-height: 450px;\n  min-height: 400px;\n  overflow-y: scroll;\n  margin: 10px;\n}\n#style-3::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #f5f5f5;\n}\n#style-3::-webkit-scrollbar {\n  width: 6px;\n  background-color: #f5f5f5;\n}\n#style-3::-webkit-scrollbar-thumb {\n  background-color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91c2VyL2hvbWUvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JBO0VBQ0UsaUJBQUE7QUNmRjtBRG1CQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ2pCRjtBRG9CQTtFQUNFLFdBQUE7QUNqQkY7QURtQkE7RUFDRSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDaEJGO0FEbUJFO0VBQ0UsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2pCSjtBRGtCSTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNoQk47QURrQkk7RUFDRSxrQkFBQTtBQ2hCTjtBRGlCTTtFQUNFLCtDQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNoQlI7QURrQk07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDaEJSO0FEbUJJO0VBQ0UsZ0JBQUE7QUNqQk47QURrQk07RUFDRSxvR0FBQTtFQUVBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDakJSO0FEb0JJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNsQk47QUR1QkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNwQkY7QUR1QkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNwQkY7QURxQkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNuQko7QURxQkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDbkJKO0FEdUJBO0VBQ0UsdUVBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNwQkY7QURxQkU7RUFDRSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDbkJKO0FEb0JJO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNsQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUNsQk47QURvQkk7RUFDRSxrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNsQk47QURvQkk7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDbEJOO0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDcEJGO0FEcUJFO0VBQ0Usb0dBQUE7RUFFQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDckJKO0FEdUJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNyQko7QUR5QkE7RUFDRSxhQUFBO0FDdEJGO0FEdUJFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBRUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUN0Qko7QUQ4Q007RUFDRSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUM1Q1I7QUQ2Q1E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDM0NWO0FENENVO0VBQ0UscUJBQUE7QUMxQ1o7QUQ0Q1U7RUFDRSxVQUFBO0FDMUNaO0FENkNRO0VBQ0UsWUFBQTtBQzNDVjtBRDZDUTtFQUNFLGFBQUE7QUMzQ1Y7QUQ4Q007RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUM1Q1I7QURnREU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQzlDSjtBRCtDSTtFQUNFLGlCQUFBO0FDN0NOO0FEa0RBO0VBQ0Usd0NBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUMvQ0Y7QURnREU7RUFHRSxlQUFBO0FDaERKO0FEaURJO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQy9DTjtBRGdETTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDOUNSO0FEZ0RNO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUM5Q1I7QURvREE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDakRGO0FEa0RFO0VBRUUsa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQWFBLDRDQUFBO0VBUUEsaUNBQUE7RUFXQSwrQ0FBQTtFQUtBLDREQUFBO0VBS0Esb0VBQUE7RUFNQSxpREFBQTtFQUlBLHFDQUFBO0FDOUZKO0FEMkNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUN6Q047QUQ0Q0k7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUMxQ047QUQ2Q0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUMzQ047QUQ4Q0k7RUFDRSxzQkFBQTtBQzVDTjtBRGdESTtFQUNFLHFHQUFBO0FDOUNOO0FEa0RJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ2hETjtBRG1ESTtFQUNFLGNBQUE7QUNqRE47QURvREk7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2xETjtBRG9ESTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FDbEROO0FEb0RJO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDbEROO0FEbURNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsbUJBQUE7QUNsRFI7QURvRE07RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ2xEUjtBRG9EVTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNsRFo7QUR1REk7RUFDRSxnQkFBQTtBQ3JETjtBRHVESTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDckROO0FEc0RNO0VBQ0UsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNwRFI7QURzRE07RUFDRSxxR0FBQTtFQUdBLGlCQUFBO0FDdERSO0FENERBO0VBRUk7SUFDRSxZQUFBO0VDMURKOztFRCtESTtJQUNFLG1CQUFBO0VDNUROO0FBQ0Y7QURpRUE7RUFDRTtJQUNFLGdCQUFBO0VDL0RGO0VEZ0VFO0lBQ0UsWUFBQTtJQUNBLGtCQUFBO0VDOURKO0VEK0RJO0lBQ0UsZUFBQTtFQzdETjs7RURtRUk7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0VDaEVOO0FBQ0Y7QURxRUE7RUFDRTtJQUNFLGlCQUFBO0lBRUEsZ0JBQUE7RUNwRUY7RURxRUU7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ25FSjtFRG9FSTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ2xFTjtFRG9FSTtJQUNFLGdCQUFBO0lBQ0Esa0JBQUE7RUNsRU47RURtRU07SUFDRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNqRVI7O0VEc0VBO0lBQ0UsYUFBQTtFQ25FRjtFRG9FRTtJQUNFLGVBQUE7RUNsRUo7O0VEdUVJO0lBQ0UsYUFBQTtJQUNBLGVBQUE7RUNwRU47RURzRUk7SUFDRSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VDcEVOOztFRHlFRTtJQUNFLGVBQUE7RUN0RUo7RUR1RUk7SUFDRSxnQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQ3JFTjtFRHNFTTtJQUNFLGVBQUE7SUFFQSxpQkFBQTtJQUNBLGtCQUFBO0VDckVSO0VEdUVNO0lBQ0Usa0JBQUE7RUNyRVI7O0VEMEVBO0lBQ0UsYUFBQTtFQ3ZFRjtFRHdFRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUN0RUo7RUR1RUk7SUFDRSxhQUFBO0lBQ0EsV0FBQTtFQ3JFTjtFRHlFSTtJQUNFLG1CQUFBO0VDdkVOO0VEd0VNO0lBQ0Usa0JBQUE7RUN0RVI7RUR3RU07SUFDRSxnQkFBQTtFQ3RFUjs7RUQ0RUU7SUFDRSxXQUFBO0lBQ0EsYUFBQTtFQ3pFSjtFRDRFTTtJQUNFLGdCQUFBO0VDMUVSO0VENEVNO0lBQ0UsZ0JBQUE7SUFDQSxhQUFBO0VDMUVSO0VEZ0ZVO0lBQ0Usa0JBQUE7SUFDQSxlQUFBO0VDOUVaO0FBQ0Y7QURtSEE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDakhGO0FEb0hBO0VBQ0Usb0RBQUE7RUFDQSx5QkFBQTtBQ2pIRjtBRG9IQTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQ2pIRjtBRG9IQTtFQUNFLHdCQUFBO0FDakhGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmhvbWVwYWdlIHtcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vICAgYm90dG9tOiAwO1xuLy8gICByaWdodDogMDtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBwYWRkaW5nOiAwO1xuLy8gICAubWFpblNlY3Rpb24ge1xuLy8gICAgIGZsZXgtZ3JvdzogMTtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4vLyAgIH1cbi8vIH1cbi5sb2NhdGlvbkFyZWEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgLmxvY2F0aW9uIHtcbiAgfVxufVxuLmxvY2F0aW9uTGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2VvTG9jIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYmFubmVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmcucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1pbi1oZWlnaHQ6IDY3MHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuICAvLyBkaXNwbGF5OiBmbGV4O1xuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAuYm9vay1hcHBvaW50ZW1lbnQge1xuICAgIGJhY2tncm91bmQ6ICNmNWY2ZjcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjMDAwMDAwMjk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBtaW4taGVpZ2h0OiA0NTFweDtcbiAgICB3aWR0aDogNTQxcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG4gICAgaDIge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgY29sb3I6ICMzMjMzMzM7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZm9udC1zaXplOiA0NnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB9XG4gICAgLmJvb2stYXBwb2ludGVtZW50LWlubmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGlucHV0IHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIC8vIG9wYWNpdHk6IDE7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBjb2xvcjogIzk1OTVhMTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDYwcHg7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDE4cHg7XG4gICAgICAgIHRvcDogMTRweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi1zdWJtaXQge1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5M2RlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKVxuICAgICAgICAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICB9XG4gIH1cbn1cblxuLmJ0biAuYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nZXQtc3R5bGlzaC1sb29rIHtcbiAgcGFkZGluZzogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAzLjZweDtcbiAgICBjb2xvcjogIzMyMzMzMztcbiAgICBvcGFjaXR5OiAxO1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG4gIC5zdHlsZS1sb29rLWRldGFpbHMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsZXR0ZXItc3BhY2luZzogNC4ycHg7XG4gICAgY29sb3I6ICMzMjMzMzM7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbn1cblxuLmFib3V0LXVzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Bob3RvLW9mLXdvbWFuLWhvbGRpbmctcGluay1mbG93ZXItMjE0NDQxMy5wbmcnKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xuICB6LWluZGV4OiAwO1xuICAuYWJvdXQtdXMtaW5uZXIge1xuICAgIGJhY2tncm91bmQ6ICM3NjM5ODcgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgICBwYWRkaW5nOiA5MHB4IDAgMDtcbiAgICBoMiB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDIuODhweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICB9XG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgIG1heC13aWR0aDogNDQ2cHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDI5O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgd2lkdGg6IDE0OHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgfVxuICAgIC5hYm91dC11cy1pbWcge1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTY1cHg7XG4gICAgfVxuICB9XG59XG5cbi5idG4tYm9vay1ub3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxODlweDtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTlkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCVcbiAgICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICAvLyB3aWR0aDogMTg5cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZzogMCAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIH1cbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDUwcHg7XG4gICAgdG9wOiAxMXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG59XG5cbi5zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNDBweDtcbiAgLnNlcnZpY2VzLXNlY3Rpb24tb3V0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gbWF4LXdpZHRoOiA4MzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIC5zZXJ2aWNlcy1vdXRlciB7XG4gICAgICAvLyAuc2VydmljZXMtaW5uZXIge1xuICAgICAgLy8gICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdkN2Q7XG4gICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIC8vICAgICBvcGFjaXR5OiAxO1xuICAgICAgLy8gICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIC8vICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIC8vICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAvLyAgICAgJjpob3ZlciB7XG4gICAgICAvLyAgICAgICAgIGJhY2tncm91bmQ6ICM3NjM5ODc7XG4gICAgICAvLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NjM5ODc7XG4gICAgICAvLyAgICAgICAgIC5iIHtcbiAgICAgIC8vICAgICAgICAgICAgIGZpbGw6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgIC8vICAgICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gfVxuICAgICAgLnNlcnZpY2VzLWlubmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjdkN2Q7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC42cztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzc2Mzk4NztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzYzOTg3O1xuICAgICAgICAgIC5hIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmIge1xuICAgICAgICAgICAgZmlsbDogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmEge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICAgICAgfVxuICAgICAgICAuYiB7XG4gICAgICAgICAgZmlsbDogI2ZmN2Q3ZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaDUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBoMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAyLjg4cHg7XG4gICAgY29sb3I6ICMyODJjMzc7XG4gICAgb3BhY2l0eTogMTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBtYXgtd2lkdGg6IDQ1NXB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIGltZyB7XG4gICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmFwcC1pbmZvLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctYXBwLWluZm8ucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTE4LCA1NywgMTM1LCAxKTtcbiAgLmFwcC1pbmZvLWlubmVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNzYzOTg3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAvLyBvcGFjaXR5OiAwLjg7XG4gICAgcGFkZGluZzogNzBweCAwO1xuICAgIC5hcHAtaW5mbyB7XG4gICAgICBtYXJnaW4tdG9wOiAxOTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xuICAgICAgaDUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjQ0cHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgfVxuICAgICAgaDQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMi44OHB4O1xuICAgICAgICBjb2xvcjogYWxpY2VibHVlO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk7XG4gIC5tb2RhbC1zZWN0aW9uIHtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgcGFkZGluZzogNTBweCAzMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjMDAwMDAwMjk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogNTQxcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xuICAgIC8qIEN1c3RvbWl6ZSB0aGUgbGFiZWwgKHRoZSBjb250YWluZXIpICovXG4gICAgLmNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cbiAgICAvKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCByYWRpbyBidXR0b24gKi9cbiAgICAuY29udGFpbmVyIGlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICB9XG4gICAgLyogQ3JlYXRlIGEgY3VzdG9tIHJhZGlvIGJ1dHRvbiAqL1xuICAgIC5jaGVja21hcmsge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYzJiNWU7XG4gICAgfVxuICAgIC8qIE9uIG1vdXNlLW92ZXIsIGFkZCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciAqL1xuICAgIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjYmMyZTY1O1xuICAgIH1cbiAgICAvKiBXaGVuIHRoZSByYWRpbyBidXR0b24gaXMgY2hlY2tlZCwgYWRkIGEgYmx1ZSBiYWNrZ3JvdW5kICovXG4gICAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpXG4gICAgICAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICB9XG4gICAgLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4gICAgLmNoZWNrbWFyazphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICAgIC8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXG4gICAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLyogU3R5bGUgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgKi9cbiAgICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgdG9wOiA0cHg7XG4gICAgICBsZWZ0OiA0cHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbiAgICBoNCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICBjb2xvcjogIzc2Mzk4NztcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5oYWlyLXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgICAgaDUge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLy8gbWFyZ2luLXRvcDogMzVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5oYWlyLXNlY3Rpb24tb3V0ZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgLmhhaXItc2VjdGlvbi1pbm5lciB7XG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMyNjI2MjY7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLm1hc3NhZ2Utc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAuYnRuLWNhdGVnb3J5LXNlY3Rpb24ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI4MmMzNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMjk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBtaW4td2lkdGg6IDE2MXB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICB9XG4gICAgICAuYnRuLWRvbmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxuICAgICAgICAgIGxpbmVhci1ncmFkaWVudCgxMDBkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0XG4gICAgICAgICAgcGFkZGluZy1ib3g7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5iYW5uZXItc2VjdGlvbiB7XG4gICAgLmJvb2stYXBwb2ludGVtZW50IHtcbiAgICAgIHdpZHRoOiA1MDBweDtcbiAgICB9XG4gIH1cbiAgLmFib3V0LXVzIHtcbiAgICAuYWJvdXQtdXMtaW5uZXIge1xuICAgICAgLmFib3V0LXVzLWltZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTM1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuYmFubmVyLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDU1cHg7XG4gICAgLmJvb2stYXBwb2ludGVtZW50IHtcbiAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYWJvdXQtdXMge1xuICAgIC5hYm91dC11cy1pbm5lciB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmJhbm5lci1zZWN0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiA1NjBweDtcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgLmJvb2stYXBwb2ludGVtZW50IHtcbiAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICAgIC5idG4tc3VibWl0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5nZXQtc3R5bGlzaC1sb29rIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICB9XG4gIH1cbiAgLmFib3V0LXVzIHtcbiAgICAuYWJvdXQtdXMtaW5uZXIge1xuICAgICAgLmFib3V0LXVzLWltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgIH1cbiAgICAgIGJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgd2lkdGg6IDEyNXB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5hcHAtaW5mby1zZWN0aW9uIHtcbiAgICAuYXBwLWluZm8taW5uZXIge1xuICAgICAgcGFkZGluZzogMjVweCAwO1xuICAgICAgLmFwcC1pbmZvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAvLyBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5zZXJ2aWNlcy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICAgIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGltZyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VydmljZXMtc2VjdGlvbi1vdXRlciB7XG4gICAgICAuc2VydmljZXMtb3V0ZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAuc2VydmljZXMtaW5uZXIge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICBoNSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAubW9kYWwtb3ZlcmxheSB7XG4gICAgLm1vZGFsLXNlY3Rpb24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgLmJ0bi1jYXRlZ29yeS1zZWN0aW9uIHtcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuYnRuLWRvbmUge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmhhaXItc2VjdGlvbiB7XG4gICAgICAgIC5oYWlyLXNlY3Rpb24tb3V0ZXIge1xuICAgICAgICAgIC5oYWlyLXNlY3Rpb24taW5uZXIge1xuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gLnNlcnZpY2VzLWlubmVyIHtcbi8vICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY3ZDdkO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4vLyAgICAgb3BhY2l0eTogMTtcbi8vICAgICB3aWR0aDogMTAwcHg7XG4vLyAgICAgaGVpZ2h0OiAxMDBweDtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuLy8gICAgIHRyYW5zaXRpb246IDAuNnM7XG4vLyAgICAgJjpob3ZlciB7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICM3NjM5ODc7XG4vLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3NjM5ODc7XG4vLyAgICAgICAgIC5hIHtcbi8vICAgICAgICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICAuYiB7XG4vLyAgICAgICAgICAgICBmaWxsOiAjZmZmO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIC5hIHtcbi8vICAgICAgICAgb3BhY2l0eTogMC40O1xuLy8gICAgIH1cbi8vICAgICAuYiB7XG4vLyAgICAgICAgIGZpbGw6ICNmZjdkN2Q7XG4vLyAgICAgfVxuLy8gfVxuLnNlcnZpY2VzV3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn1cbiIsIi5sb2NhdGlvbkFyZWEge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sb2NhdGlvbkxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdlb0xvYyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmFubmVyLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbWluLWhlaWdodDogNjcwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2stYXBwb2ludGVtZW50IHtcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjMDAwMDAwMjk7XG4gIG9wYWNpdHk6IDE7XG4gIG1pbi1oZWlnaHQ6IDQ1MXB4O1xuICB3aWR0aDogNTQxcHg7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuICBtYXJnaW4tbGVmdDogLTMwcHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2stYXBwb2ludGVtZW50IGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMzIzMzMzO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDQ2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29rLWFwcG9pbnRlbWVudCAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2stYXBwb2ludGVtZW50IC5ib29rLWFwcG9pbnRlbWVudC1pbm5lciBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5NTk1YTE7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29rLWFwcG9pbnRlbWVudCAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXIgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxOHB4O1xuICB0b3A6IDE0cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2stYXBwb2ludGVtZW50IC5idG4tc3VibWl0IHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9vay1hcHBvaW50ZW1lbnQgLmJ0bi1zdWJtaXQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkzZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3BhY2l0eTogMTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9vay1hcHBvaW50ZW1lbnQgbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xufVxuXG4uYnRuIC5idG4tcHJpbWFyeTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmdldC1zdHlsaXNoLWxvb2sge1xuICBwYWRkaW5nOiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZ2V0LXN0eWxpc2gtbG9vayBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDMuNnB4O1xuICBjb2xvcjogIzMyMzMzMztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLmdldC1zdHlsaXNoLWxvb2sgLnN0eWxlLWxvb2stZGV0YWlscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDQuMnB4O1xuICBjb2xvcjogIzMyMzMzMztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYWJvdXQtdXMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3Bob3RvLW9mLXdvbWFuLWhvbGRpbmctcGluay1mbG93ZXItMjE0NDQxMy5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgei1pbmRleDogMDtcbn1cbi5hYm91dC11cyAuYWJvdXQtdXMtaW5uZXIge1xuICBiYWNrZ3JvdW5kOiAjNzYzOTg3IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgb3BhY2l0eTogMC45O1xuICBtaW4taGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZzogOTBweCAwIDA7XG59XG4uYWJvdXQtdXMgLmFib3V0LXVzLWlubmVyIGgyIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuODhweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG4uYWJvdXQtdXMgLmFib3V0LXVzLWlubmVyIHAge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1heC13aWR0aDogNDQ2cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5hYm91dC11cyAuYWJvdXQtdXMtaW5uZXIgYnV0dG9uIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAyOTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgd2lkdGg6IDE0OHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuLmFib3V0LXVzIC5hYm91dC11cy1pbm5lciAuYWJvdXQtdXMtaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNjVweDtcbn1cblxuLmJ0bi1ib29rLW5vdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4OXB4O1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmJ0bi1ib29rLW5vdyBidXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTlkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDI5O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBvcGFjaXR5OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgMjVweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cbi5idG4tYm9vay1ub3cgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNTBweDtcbiAgdG9wOiAxMXB4O1xuICB3aWR0aDogMjVweDtcbn1cblxuLnNlcnZpY2VzLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0MHB4O1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gLnNlcnZpY2VzLXNlY3Rpb24tb3V0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnNlcnZpY2VzLXNlY3Rpb24gLnNlcnZpY2VzLXNlY3Rpb24tb3V0ZXIgLnNlcnZpY2VzLW91dGVyIC5zZXJ2aWNlcy1pbm5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmY3ZDdkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHRyYW5zaXRpb246IDAuNnM7XG59XG4uc2VydmljZXMtc2VjdGlvbiAuc2VydmljZXMtc2VjdGlvbi1vdXRlciAuc2VydmljZXMtb3V0ZXIgLnNlcnZpY2VzLWlubmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzc2Mzk4NztcbiAgYm9yZGVyOiAxcHggc29saWQgIzc2Mzk4Nztcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIC5zZXJ2aWNlcy1zZWN0aW9uLW91dGVyIC5zZXJ2aWNlcy1vdXRlciAuc2VydmljZXMtaW5uZXI6aG92ZXIgLmEge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uc2VydmljZXMtc2VjdGlvbiAuc2VydmljZXMtc2VjdGlvbi1vdXRlciAuc2VydmljZXMtb3V0ZXIgLnNlcnZpY2VzLWlubmVyOmhvdmVyIC5iIHtcbiAgZmlsbDogI2ZmZjtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIC5zZXJ2aWNlcy1zZWN0aW9uLW91dGVyIC5zZXJ2aWNlcy1vdXRlciAuc2VydmljZXMtaW5uZXIgLmEge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uc2VydmljZXMtc2VjdGlvbiAuc2VydmljZXMtc2VjdGlvbi1vdXRlciAuc2VydmljZXMtb3V0ZXIgLnNlcnZpY2VzLWlubmVyIC5iIHtcbiAgZmlsbDogI2ZmN2Q3ZDtcbn1cbi5zZXJ2aWNlcy1zZWN0aW9uIC5zZXJ2aWNlcy1zZWN0aW9uLW91dGVyIC5zZXJ2aWNlcy1vdXRlciBoNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHdpZHRoOiAxMDBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4uc2VydmljZXMtc2VjdGlvbiBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDIuODhweDtcbiAgY29sb3I6ICMyODJjMzc7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWF4LXdpZHRoOiA0NTVweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG59XG4uc2VydmljZXMtc2VjdGlvbiBoMiBpbWcge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmFwcC1pbmZvLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWFwcC1pbmZvLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc2Mzk4Nztcbn1cbi5hcHAtaW5mby1zZWN0aW9uIC5hcHAtaW5mby1pbm5lciB7XG4gIHBhZGRpbmc6IDcwcHggMDtcbn1cbi5hcHAtaW5mby1zZWN0aW9uIC5hcHAtaW5mby1pbm5lciAuYXBwLWluZm8ge1xuICBtYXJnaW4tdG9wOiAxOTBweDtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG4uYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8taW5uZXIgLmFwcC1pbmZvIGg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMS40NHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5hcHAtaW5mby1zZWN0aW9uIC5hcHAtaW5mby1pbm5lciAuYXBwLWluZm8gaDQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMi44OHB4O1xuICBjb2xvcjogYWxpY2VibHVlO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ubW9kYWwtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTk7XG59XG4ubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDUwcHggMzBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAjMDAwMDAwMjk7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiA1NDFweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBtaW4taGVpZ2h0OiA1NTBweDtcbiAgLyogQ3VzdG9taXplIHRoZSBsYWJlbCAodGhlIGNvbnRhaW5lcikgKi9cbiAgLyogSGlkZSB0aGUgYnJvd3NlcidzIGRlZmF1bHQgcmFkaW8gYnV0dG9uICovXG4gIC8qIENyZWF0ZSBhIGN1c3RvbSByYWRpbyBidXR0b24gKi9cbiAgLyogT24gbW91c2Utb3ZlciwgYWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gIC8qIFdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkLCBhZGQgYSBibHVlIGJhY2tncm91bmQgKi9cbiAgLyogQ3JlYXRlIHRoZSBpbmRpY2F0b3IgKHRoZSBkb3QvY2lyY2xlIC0gaGlkZGVuIHdoZW4gbm90IGNoZWNrZWQpICovXG4gIC8qIFNob3cgdGhlIGluZGljYXRvciAoZG90L2NpcmNsZSkgd2hlbiBjaGVja2VkICovXG4gIC8qIFN0eWxlIHRoZSBpbmRpY2F0b3IgKGRvdC9jaXJjbGUpICovXG59XG4ubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiAuY29udGFpbmVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5tb2RhbC1vdmVybGF5IC5tb2RhbC1zZWN0aW9uIC5jb250YWluZXIgaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbn1cbi5tb2RhbC1vdmVybGF5IC5tb2RhbC1zZWN0aW9uIC5jaGVja21hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2MyYjVlO1xufVxuLm1vZGFsLW92ZXJsYXkgLm1vZGFsLXNlY3Rpb24gLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLm1vZGFsLW92ZXJsYXkgLm1vZGFsLXNlY3Rpb24gLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuLm1vZGFsLW92ZXJsYXkgLm1vZGFsLXNlY3Rpb24gLmNoZWNrbWFyazphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tb2RhbC1vdmVybGF5IC5tb2RhbC1zZWN0aW9uIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tb2RhbC1vdmVybGF5IC5tb2RhbC1zZWN0aW9uIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gIHRvcDogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzc2Mzk4NztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5tb2RhbC1vdmVybGF5IC5tb2RhbC1zZWN0aW9uIC5oYWlyLXNlY3Rpb24ge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLm1vZGFsLW92ZXJsYXkgLm1vZGFsLXNlY3Rpb24gLmhhaXItc2VjdGlvbiBoNSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzI2MjYyNjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vZGFsLW92ZXJsYXkgLm1vZGFsLXNlY3Rpb24gLmhhaXItc2VjdGlvbiAuaGFpci1zZWN0aW9uLW91dGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiAuaGFpci1zZWN0aW9uIC5oYWlyLXNlY3Rpb24tb3V0ZXIgLmhhaXItc2VjdGlvbi1pbm5lciBsYWJlbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzI2MjYyNjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB3aWR0aDogMTY1cHg7XG59XG4ubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiAubWFzc2FnZS1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5tb2RhbC1vdmVybGF5IC5tb2RhbC1zZWN0aW9uIC5idG4tY2F0ZWdvcnktc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiAuYnRuLWNhdGVnb3J5LXNlY3Rpb24gYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzI4MmMzNyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMjk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBtaW4td2lkdGg6IDE2MXB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4ubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiAuYnRuLWNhdGVnb3J5LXNlY3Rpb24gLmJ0bi1kb25lIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDEwMGRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5iYW5uZXItc2VjdGlvbiAuYm9vay1hcHBvaW50ZW1lbnQge1xuICAgIHdpZHRoOiA1MDBweDtcbiAgfVxuXG4gIC5hYm91dC11cyAuYWJvdXQtdXMtaW5uZXIgLmFib3V0LXVzLWltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMzVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5iYW5uZXItc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNTVweDtcbiAgfVxuICAuYmFubmVyLXNlY3Rpb24gLmJvb2stYXBwb2ludGVtZW50IHtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xuICB9XG4gIC5iYW5uZXItc2VjdGlvbiAuYm9vay1hcHBvaW50ZW1lbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgfVxuXG4gIC5hYm91dC11cyAuYWJvdXQtdXMtaW5uZXIgYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmFubmVyLXNlY3Rpb24ge1xuICAgIG1pbi1oZWlnaHQ6IDU2MHB4O1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cbiAgLmJhbm5lci1zZWN0aW9uIC5ib29rLWFwcG9pbnRlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5iYW5uZXItc2VjdGlvbiAuYm9vay1hcHBvaW50ZW1lbnQgaDIge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuICAuYmFubmVyLXNlY3Rpb24gLmJvb2stYXBwb2ludGVtZW50IC5idG4tc3VibWl0IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYmFubmVyLXNlY3Rpb24gLmJvb2stYXBwb2ludGVtZW50IC5idG4tc3VibWl0IGJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxNjVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICAuZ2V0LXN0eWxpc2gtbG9vayB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAuZ2V0LXN0eWxpc2gtbG9vayBoMiB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICB9XG5cbiAgLmFib3V0LXVzIC5hYm91dC11cy1pbm5lciAuYWJvdXQtdXMtaW1nIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICAuYWJvdXQtdXMgLmFib3V0LXVzLWlubmVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB3aWR0aDogMTI1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgLmFwcC1pbmZvLXNlY3Rpb24gLmFwcC1pbmZvLWlubmVyIHtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG4gIH1cbiAgLmFwcC1pbmZvLXNlY3Rpb24gLmFwcC1pbmZvLWlubmVyIC5hcHAtaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmFwcC1pbmZvLXNlY3Rpb24gLmFwcC1pbmZvLWlubmVyIC5hcHAtaW5mbyBoNCB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuYXBwLWluZm8tc2VjdGlvbiAuYXBwLWluZm8taW5uZXIgLmFwcC1pbmZvIGg1IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuc2VydmljZXMtc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMjVweDtcbiAgfVxuICAuc2VydmljZXMtc2VjdGlvbiBoMiB7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc2VydmljZXMtc2VjdGlvbiBoMiBpbWcge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgd2lkdGg6IDE1cHg7XG4gIH1cbiAgLnNlcnZpY2VzLXNlY3Rpb24gLnNlcnZpY2VzLXNlY3Rpb24tb3V0ZXIgLnNlcnZpY2VzLW91dGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5zZXJ2aWNlcy1zZWN0aW9uIC5zZXJ2aWNlcy1zZWN0aW9uLW91dGVyIC5zZXJ2aWNlcy1vdXRlciAuc2VydmljZXMtaW5uZXIge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuc2VydmljZXMtc2VjdGlvbiAuc2VydmljZXMtc2VjdGlvbi1vdXRlciAuc2VydmljZXMtb3V0ZXIgaDUge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gIH1cblxuICAubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuICAubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiAuYnRuLWNhdGVnb3J5LXNlY3Rpb24gYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xuICB9XG4gIC5tb2RhbC1vdmVybGF5IC5tb2RhbC1zZWN0aW9uIC5idG4tY2F0ZWdvcnktc2VjdGlvbiAuYnRuLWRvbmUge1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAubW9kYWwtb3ZlcmxheSAubW9kYWwtc2VjdGlvbiAuaGFpci1zZWN0aW9uIC5oYWlyLXNlY3Rpb24tb3V0ZXIgLmhhaXItc2VjdGlvbi1pbm5lciBsYWJlbCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuLnNlcnZpY2VzV3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/home/mainpage/mainpage.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/user/home/mainpage/mainpage.component.ts ***!
    \**********************************************************/

  /*! exports provided: MainpageComponent */

  /***/
  function srcAppUserHomeMainpageMainpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainpageComponent", function () {
      return MainpageComponent;
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


    var _usercommonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usercommonservice.service */
    "./src/app/user/home/usercommonservice.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MainpageComponent = /*#__PURE__*/function () {
      function MainpageComponent(userCommServ, toastServ, fb, router, languagesService, geocoder) {
        _classCallCheck(this, MainpageComponent);

        this.userCommServ = userCommServ;
        this.toastServ = toastServ;
        this.fb = fb;
        this.router = router;
        this.languagesService = languagesService;
        this.geocoder = geocoder;
        this.today = new Date();
        this.isModal = false;
        this.location = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        this.pageSize = 10;
        this.page = 1;
      }

      _createClass(MainpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          console.log(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].env);

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].env === "prod") {
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

          this.minDate = new Date();
          this.myDateValue = new Date();
          this.fetchCategories();
          this.categoriesForm = this.fb.group({
            service: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.searchSalonForm = this.fb.group({
            service_id: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            location: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.location.subscribe(function (x) {
            _this25.searchSalonForm.get("location").setValue(x);

            _this25.searchSalonForm.get("location").updateValueAndValidity();
          });
          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this25.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "onDateChange",
        value: function onDateChange(event) {
          var date = new Date(event).toISOString();
          this.searchSalonForm.get("date").setValue(date);
          this.searchSalonForm.updateValueAndValidity();
        }
      }, {
        key: "openServiceModal",
        value: function openServiceModal() {
          this.isModal = true;
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isModal = false;
        }
      }, {
        key: "searchSalons",
        value: function searchSalons(data) {
          if (data.date && data.service_id && this.lat & this["long"]) {
            data.lat = this.lat;
            data["long"] = this["long"];
            this.errorMsg = null;
            sessionStorage.setItem("userprefrence", JSON.stringify(data));
            this.userCommServ.setUserPrefrence(data);
            this.router.navigate(["/list"]);
          } else {
            this.errorMsg = "Please fill the required fileds";
          }
        }
      }, {
        key: "fetchCategories",
        value: function fetchCategories() {
          var _this26 = this;

          this.userCommServ.getCategoriesList().subscribe(function (data) {
            if (data["code"] === 200) {
              _this26.categoriesList = data["data"];
            } else if (data["code"] === 400) {
              _this26.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this26.toastServ.error("Server-Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "selectedService",
        value: function selectedService(data) {
          this.service_id = data["service"]["_id"];
          this.serviceName = data["service"]["name"];
          this.searchSalonForm.get("service_id").setValue(this.service_id);
          this.searchSalonForm.updateValueAndValidity();
          this.isModal = false;
        }
      }, {
        key: "getAddress",
        value: function getAddress(place) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var location;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.lat = place["geometry"].location.lat();
                    this["long"] = place["geometry"].location.lng();
                    _context.next = 4;
                    return this.geocoder.getLocationByCoords(this.lat, this["long"]);

                  case 4:
                    location = _context.sent;
                    this.location.next(location);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getCurrentLocation",
        value: function getCurrentLocation() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _yield$this$geocoder$, lat, _long, _location;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this.geocoder.getCurrentPosition();

                  case 3:
                    _yield$this$geocoder$ = _context2.sent;
                    lat = _yield$this$geocoder$.lat;
                    _long = _yield$this$geocoder$["long"];
                    this.lat = lat;
                    this["long"] = _long;
                    _context2.next = 10;
                    return this.geocoder.getLocationByCoords(lat, _long);

                  case 10:
                    _location = _context2.sent;
                    this.location.next(_location);
                    _context2.next = 16;
                    break;

                  case 14:
                    _context2.prev = 14;
                    _context2.t0 = _context2["catch"](0);

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[0, 14]]);
          }));
        }
      }]);

      return MainpageComponent;
    }();

    MainpageComponent.ctorParameters = function () {
      return [{
        type: _usercommonservice_service__WEBPACK_IMPORTED_MODULE_2__["UsercommonserviceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_7__["LanguagesService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_7__["GeocoderService"]
      }];
    };

    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-mainpage",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mainpage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/mainpage/mainpage.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mainpage.component.scss */
      "./src/app/user/home/mainpage/mainpage.component.scss"))["default"]]
    })], MainpageComponent);
    /***/
  },

  /***/
  "./src/app/user/home/salon-detail/salon-detail.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/user/home/salon-detail/salon-detail.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeSalonDetailSalonDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banner-section {\n  margin-top: 6em;\n}\n.banner-section .booking-view .booking-view-left {\n  display: flex;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #0000001a;\n  border-radius: 4px;\n  opacity: 1;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-img {\n  flex: 1;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info {\n  flex: 1.5;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul li {\n  display: flex;\n  justify-content: space-between;\n  border-bottom: 1px solid #f3f5f8;\n  padding: 15px;\n  padding-left: 30px;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul li h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #8a8f9c;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  margin: 0;\n  display: inline-block;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul li span {\n  text-align: left;\n  letter-spacing: 0;\n  color: #8a8f9c;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul li i {\n  color: #8a8f9c;\n  font-size: 18px;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul li .reviews {\n  cursor: pointer;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul li .reviews i {\n  color: #42b72a;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info ul li .reviews span {\n  color: #42b72a;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days {\n  padding: 30px;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #262626;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 500;\n  margin-bottom: 15px;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days ul li {\n  border-bottom: none;\n  padding: 0;\n  margin-bottom: 10px;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days ul li .date-sec {\n  display: flex;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days ul li .date-sec h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #8a8f9c;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  padding-left: 25px;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days ul li .time-sec {\n  text-align: left;\n  letter-spacing: 0;\n  opacity: 1;\n  font-size: 14px;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days ul li .closed-sec h5 {\n  color: #c82b5f;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days ul li .closed-sec i {\n  color: #c82b5f;\n}\n.banner-section .booking-view .booking-view-left .booking-view-left-info .working-days ul li .time-sec-closed {\n  color: #c82b5f;\n}\n.banner-section .booking-view .our-services {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #0000001a;\n  border-radius: 4px;\n  opacity: 1;\n  padding: 15px;\n}\n.banner-section .booking-view .our-services h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.banner-section .booking-view .our-services .hair-sec {\n  margin-top: 10px;\n}\n.banner-section .booking-view .our-services .hair-sec h6 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n}\n.banner-section .booking-view .our-services .hair-sec .hair-sec-inner {\n  display: flex;\n  flex-direction: column;\n}\n.banner-section .booking-view .our-services .hair-sec .hair-sec-inner img {\n  margin-right: 10px;\n}\n.banner-section .booking-view .our-services .hair-sec .hair-sec-inner .hair-services {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n}\n.banner-section .booking-view .our-services .hair-sec .hair-sec-inner .hair-services h6 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  margin: 0;\n  opacity: 1;\n  font-size: 14px;\n  margin-bottom: 3px;\n}\n.banner-section .booking-view .our-services .hair-sec .hair-sec-inner .hair-services .dollar-req {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 14px;\n}\n.banner-section .booking-view .our-services .hair-sec .hair-sec-inner .hair-services .dollar-req span {\n  text-align: left;\n  text-decoration: line-through;\n  letter-spacing: 0;\n  color: #c2c2c2;\n  opacity: 1;\n  font-size: 14px;\n  margin-left: 8px;\n}\n.banner-section .booking-view .our-services .hair-sec .hair-sec-inner .hair-services .min-req {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9595a1;\n  opacity: 1;\n  font-size: 14px;\n}\n.rating-detail {\n  display: flex;\n}\n.find {\n  cursor: pointer;\n}\n.categoryName {\n  font-size: 12px;\n}\n.overlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.overlay .main-section {\n  padding: 1em;\n  background: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 10px;\n  margin: 15px;\n  max-height: 500px;\n  overflow-y: auto;\n  padding-top: 0.5em;\n}\n.overlay .main-section .closeTime {\n  text-align: right;\n  position: relative;\n  right: 0;\n  z-index: 99999;\n  margin: 10px;\n}\n.overlay .main-section .reviews {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  font-size: 14px;\n}\n.overlay .main-section .reviews .imgSec {\n  width: 12%;\n}\n.overlay .main-section .reviews .commentSec {\n  width: 85%;\n}\n.userName {\n  font-weight: 600;\n}\n.closeImage {\n  width: 20px;\n  height: 20px;\n  margin: 5px;\n}\n.img {\n  text-align: right;\n}\n#style-3::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #f5f5f5;\n}\n#style-3::-webkit-scrollbar {\n  width: 6px;\n  background-color: #f5f5f5;\n}\n#style-3::-webkit-scrollbar-thumb {\n  background-color: purple;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL3NhbG9uLWRldGFpbC9zYWxvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvaG9tZS9zYWxvbi1kZXRhaWwvc2Fsb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NOO0FEQU07RUFDRSxPQUFBO0FDRVI7QURBTTtFQUNFLFNBQUE7QUNFUjtBRERRO0VBQ0UsVUFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQ0dWO0FERlU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0laO0FESFk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUNLZDtBREhZO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDS2Q7QURIWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDS2Q7QURIWTtFQUNFLGVBQUE7QUNLZDtBREpjO0VBQ0UsY0FBQTtBQ01oQjtBREpjO0VBQ0UsY0FBQTtBQ01oQjtBRERRO0VBQ0UsYUFBQTtBQ0dWO0FERlU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0laO0FERFk7RUFDRSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0dkO0FERmM7RUFDRSxhQUFBO0FDSWhCO0FESGdCO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLbEI7QURGYztFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0loQjtBRERnQjtFQUNFLGNBQUE7QUNHbEI7QUREZ0I7RUFDRSxjQUFBO0FDR2xCO0FEQWM7RUFDRSxjQUFBO0FDRWhCO0FES0k7RUFDRSwrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ0hOO0FESU07RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRlI7QURJTTtFQUNFLGdCQUFBO0FDRlI7QURHUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RWO0FER1E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNEVjtBREdVO0VBQ0Usa0JBQUE7QUNEWjtBREdVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0RaO0FERVk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQWQ7QURFWTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNBZDtBRENjO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNDaEI7QURFWTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNBZDtBRFFBO0VBQ0UsYUFBQTtBQ0xGO0FET0E7RUFDRSxlQUFBO0FDSkY7QURNQTtFQUNFLGVBQUE7QUNIRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FER0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FERUk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQU47QURFSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQU47QURDTTtFQUNFLFVBQUE7QUNDUjtBRENNO0VBQ0UsVUFBQTtBQ0NSO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FER0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBRjtBREVBO0VBQ0UsaUJBQUE7QUNDRjtBREVBO0VBQ0Usb0RBQUE7RUFDQSx5QkFBQTtBQ0NGO0FERUE7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUNDRjtBREVBO0VBQ0Usd0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZS9zYWxvbi1kZXRhaWwvc2Fsb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lci1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiA2ZW07XHJcbiAgLmJvb2tpbmctdmlldyB7XHJcbiAgICAuYm9va2luZy12aWV3LWxlZnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDFhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIC5ib29raW5nLXZpZXctbGVmdC1pbWcge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8ge1xyXG4gICAgICAgIGZsZXg6IDEuNTtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjNmNWY4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGE4ZjljO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOGE4ZjljO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM4YThmOWM7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5yZXZpZXdzIHtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyYjcyYTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzQyYjcyYTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLndvcmtpbmctZGF5cyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgIC5kYXRlLXNlYyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICM4YThmOWM7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAudGltZS1zZWMge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmNsb3NlZC1zZWMge1xyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2M4MmI1ZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2M4MmI1ZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnRpbWUtc2VjLWNsb3NlZCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2M4MmI1ZjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5vdXItc2VydmljZXMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDFhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgIGg1IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5oYWlyLXNlYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGFpci1zZWMtaW5uZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhhaXItc2VydmljZXMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIGg2IHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRvbGxhci1yZXEge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYzJjMmMyO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5taW4tcmVxIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjOTU5NWExO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5yYXRpbmctZGV0YWlsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5maW5kIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNhdGVnb3J5TmFtZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC5tYWluLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogMC41ZW07XHJcbiAgICAuY2xvc2VUaW1lIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgICAucmV2aWV3cyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLmltZ1NlYyB7XHJcbiAgICAgICAgd2lkdGg6IDEyJTtcclxuICAgICAgfVxyXG4gICAgICAuY29tbWVudFNlYyB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udXNlck5hbWUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNsb3NlSW1hZ2Uge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4uaW1nIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbiNzdHlsZS0zOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4jc3R5bGUtMzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcclxufVxyXG4iLCIuYmFubmVyLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiA2ZW07XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDFhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG9wYWNpdHk6IDE7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWltZyB7XG4gIGZsZXg6IDE7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8ge1xuICBmbGV4OiAxLjU7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8gdWwge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5ib29raW5nLXZpZXctbGVmdCAuYm9va2luZy12aWV3LWxlZnQtaW5mbyB1bCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmM2Y1Zjg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5ib29raW5nLXZpZXctbGVmdCAuYm9va2luZy12aWV3LWxlZnQtaW5mbyB1bCBsaSBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzhhOGY5YztcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5ib29raW5nLXZpZXctbGVmdCAuYm9va2luZy12aWV3LWxlZnQtaW5mbyB1bCBsaSBzcGFuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOGE4ZjljO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8gdWwgbGkgaSB7XG4gIGNvbG9yOiAjOGE4ZjljO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8gdWwgbGkgLnJldmlld3Mge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8gdWwgbGkgLnJldmlld3MgaSB7XG4gIGNvbG9yOiAjNDJiNzJhO1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLmJvb2tpbmctdmlldy1sZWZ0IC5ib29raW5nLXZpZXctbGVmdC1pbmZvIHVsIGxpIC5yZXZpZXdzIHNwYW4ge1xuICBjb2xvcjogIzQyYjcyYTtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5ib29raW5nLXZpZXctbGVmdCAuYm9va2luZy12aWV3LWxlZnQtaW5mbyAud29ya2luZy1kYXlzIHtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5ib29raW5nLXZpZXctbGVmdCAuYm9va2luZy12aWV3LWxlZnQtaW5mbyAud29ya2luZy1kYXlzIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8gLndvcmtpbmctZGF5cyB1bCBsaSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8gLndvcmtpbmctZGF5cyB1bCBsaSAuZGF0ZS1zZWMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLmJvb2tpbmctdmlldy1sZWZ0IC5ib29raW5nLXZpZXctbGVmdC1pbmZvIC53b3JraW5nLWRheXMgdWwgbGkgLmRhdGUtc2VjIGg1IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOGE4ZjljO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5ib29raW5nLXZpZXctbGVmdCAuYm9va2luZy12aWV3LWxlZnQtaW5mbyAud29ya2luZy1kYXlzIHVsIGxpIC50aW1lLXNlYyB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAuYm9va2luZy12aWV3LWxlZnQgLmJvb2tpbmctdmlldy1sZWZ0LWluZm8gLndvcmtpbmctZGF5cyB1bCBsaSAuY2xvc2VkLXNlYyBoNSB7XG4gIGNvbG9yOiAjYzgyYjVmO1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLmJvb2tpbmctdmlldy1sZWZ0IC5ib29raW5nLXZpZXctbGVmdC1pbmZvIC53b3JraW5nLWRheXMgdWwgbGkgLmNsb3NlZC1zZWMgaSB7XG4gIGNvbG9yOiAjYzgyYjVmO1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLmJvb2tpbmctdmlldy1sZWZ0IC5ib29raW5nLXZpZXctbGVmdC1pbmZvIC53b3JraW5nLWRheXMgdWwgbGkgLnRpbWUtc2VjLWNsb3NlZCB7XG4gIGNvbG9yOiAjYzgyYjVmO1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLm91ci1zZXJ2aWNlcyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMWE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTVweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5vdXItc2VydmljZXMgaDUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLm91ci1zZXJ2aWNlcyAuaGFpci1zZWMge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLm91ci1zZXJ2aWNlcyAuaGFpci1zZWMgaDYge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5vdXItc2VydmljZXMgLmhhaXItc2VjIC5oYWlyLXNlYy1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAub3VyLXNlcnZpY2VzIC5oYWlyLXNlYyAuaGFpci1zZWMtaW5uZXIgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLm91ci1zZXJ2aWNlcyAuaGFpci1zZWMgLmhhaXItc2VjLWlubmVyIC5oYWlyLXNlcnZpY2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLm91ci1zZXJ2aWNlcyAuaGFpci1zZWMgLmhhaXItc2VjLWlubmVyIC5oYWlyLXNlcnZpY2VzIGg2IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW46IDA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5ib29raW5nLXZpZXcgLm91ci1zZXJ2aWNlcyAuaGFpci1zZWMgLmhhaXItc2VjLWlubmVyIC5oYWlyLXNlcnZpY2VzIC5kb2xsYXItcmVxIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLmJvb2tpbmctdmlldyAub3VyLXNlcnZpY2VzIC5oYWlyLXNlYyAuaGFpci1zZWMtaW5uZXIgLmhhaXItc2VydmljZXMgLmRvbGxhci1yZXEgc3BhbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNjMmMyYzI7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuYm9va2luZy12aWV3IC5vdXItc2VydmljZXMgLmhhaXItc2VjIC5oYWlyLXNlYy1pbm5lciAuaGFpci1zZXJ2aWNlcyAubWluLXJlcSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzk1OTVhMTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucmF0aW5nLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5maW5kIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2F0ZWdvcnlOYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ub3ZlcmxheSAubWFpbi1zZWN0aW9uIHtcbiAgcGFkZGluZzogMWVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXRvcDogMC41ZW07XG59XG4ub3ZlcmxheSAubWFpbi1zZWN0aW9uIC5jbG9zZVRpbWUge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMDtcbiAgei1pbmRleDogOTk5OTk7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5vdmVybGF5IC5tYWluLXNlY3Rpb24gLnJldmlld3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ub3ZlcmxheSAubWFpbi1zZWN0aW9uIC5yZXZpZXdzIC5pbWdTZWMge1xuICB3aWR0aDogMTIlO1xufVxuLm92ZXJsYXkgLm1haW4tc2VjdGlvbiAucmV2aWV3cyAuY29tbWVudFNlYyB7XG4gIHdpZHRoOiA4NSU7XG59XG5cbi51c2VyTmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jbG9zZUltYWdlIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5pbWcge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuI3N0eWxlLTM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/home/salon-detail/salon-detail.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user/home/salon-detail/salon-detail.component.ts ***!
    \******************************************************************/

  /*! exports provided: SalonDetailComponent */

  /***/
  function srcAppUserHomeSalonDetailSalonDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalonDetailComponent", function () {
      return SalonDetailComponent;
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


    var _usercommonservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../usercommonservice.service */
    "./src/app/user/home/usercommonservice.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");

    var SalonDetailComponent = /*#__PURE__*/function () {
      function SalonDetailComponent(userServ, toastServ, router, languagesService) {
        _classCallCheck(this, SalonDetailComponent);

        this.userServ = userServ;
        this.toastServ = toastServ;
        this.router = router;
        this.languagesService = languagesService;
        this.isReviewShow = false;
      }

      _createClass(SalonDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.salonData = JSON.parse(sessionStorage.getItem("salonDetails"));

          if (this.salonData) {
            this.salonID = this.salonData["_id"];
            var _this$salonData$coord = this.salonData.coordinates,
                latitude = _this$salonData$coord.latitude,
                longitude = _this$salonData$coord.longitude;
            this.salonlat = latitude;
            this.salonlong = longitude;
            this.getSalonDetails(this.salonID);
            this.getSalonCategories(this.salonID);
            this.getSalonWeeklyDays(this.salonID);
          }

          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this27.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "findDirection",
        value: function findDirection() {
          var _this28 = this;

          navigator.geolocation.getCurrentPosition(function (pos) {
            _this28.lng = +pos.coords.longitude;
            _this28.lat = +pos.coords.latitude;
            window.open("https://www.google.com/maps/dir/" + _this28.lat + "," + _this28.lng + "/" + _this28.salonlong + "," + _this28.salonlat + "/" + "@" + _this28.salonlong + "," + _this28.salonlat + "," + "6z", "_blank");
          });
        }
      }, {
        key: "getSalonDetails",
        value: function getSalonDetails(data) {
          var _this29 = this;

          var dataToPass = {
            salon_id: data
          };
          this.userServ.getSalonDetails(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this29.salonDetailsData = data["data"];
              _this29.averageRatings = _this29.salonDetailsData["avgRatings"];
            } else if (data["code"] === 400) {
              _this29.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this29.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "getSalonCategories",
        value: function getSalonCategories(data) {
          var _this30 = this;

          var dataToPass = {
            salon_id: data
          };
          this.userServ.getSalonCategories(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this30.salonCategoriesData = data["data"];
            } else if (data["code"] === 400) {
              _this30.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this30.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "getReviewRatings",
        value: function getReviewRatings() {
          var _this31 = this;

          var dataToPass = {
            salon_id: this.salonID
          };
          this.userServ.getReviewRatings(dataToPass).subscribe(function (data) {
            _this31.isReviewShow = true;

            if (data["code"] === 200) {
              _this31.salonStarRatings = data["data"];
            } else if (data["code"] === 400) {
              _this31.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this31.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isReviewShow = false;
        }
      }, {
        key: "getSalonWeeklyDays",
        value: function getSalonWeeklyDays(data) {
          var _this32 = this;

          var dataToPass = {
            salon_id: data
          };
          this.userServ.getSalonWeekDays(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this32.salonAvailalbilityData = data["data"];
            } else if (data["code"] === 400) {
              _this32.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this32.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }]);

      return SalonDetailComponent;
    }();

    SalonDetailComponent.ctorParameters = function () {
      return [{
        type: _usercommonservice_service__WEBPACK_IMPORTED_MODULE_2__["UsercommonserviceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["LanguagesService"]
      }];
    };

    SalonDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-salon-detail",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salon-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/salon-detail/salon-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salon-detail.component.scss */
      "./src/app/user/home/salon-detail/salon-detail.component.scss"))["default"]]
    })], SalonDetailComponent);
    /***/
  },

  /***/
  "./src/app/user/home/salon-list/salon-list.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/user/home/salon-list/salon-list.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeSalonListSalonListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".banner-section {\n  background: #f5f6f7;\n  margin-top: 5em;\n}\n.banner-section .salon-list {\n  padding-top: 35px;\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.banner-section .salon-list .salon-list-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #d3d4d7;\n  padding-bottom: 25px;\n  padding-right: 3em;\n  padding-left: 4em;\n}\n.banner-section .salon-list h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 18px;\n  margin: 0;\n  font-weight: 600;\n}\n.banner-section .salon-list .book-appointement-inner input {\n  width: 316px;\n  height: 50px;\n  letter-spacing: 0;\n  color: #4d4d55;\n}\n.banner-section .salon-list .book-appointement-inner label {\n  text-align: left;\n  letter-spacing: 0;\n  color: #262626;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n}\n.banner-section .salon-info-outer .salon-list-info {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000014;\n  border-radius: 10px;\n  opacity: 1;\n  min-height: 118px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-left {\n  display: flex;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-left .salon-img {\n  background: #fff2f2;\n  border-radius: 10px;\n  padding: 10px;\n  margin-right: 10px;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-left .salon-img img {\n  width: 70px;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-left .salon-info .location {\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-left .salon-info .location span {\n  text-align: left;\n  letter-spacing: 0;\n  color: #9595a1;\n  opacity: 1;\n  font-style: italic;\n  font-size: 14px;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-left .salon-info img {\n  width: 11px;\n  margin-right: 8px;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-left h5 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 600;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-right {\n  display: flex;\n  margin-bottom: 15px;\n  flex-wrap: wrap;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-right:last-child() {\n  margin-bottom: 0;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-right .time-slots {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border: 1px solid #d6d6d6;\n  border-radius: 6px;\n  opacity: 1;\n  width: 85px;\n  height: 34px;\n  margin: 5px;\n}\n.banner-section .salon-info-outer .salon-list-info .salon-list-info-right .time-slots a {\n  text-align: center;\n  letter-spacing: 0;\n  color: #292929;\n  opacity: 1;\n  font-size: 14px;\n  display: block;\n  padding: 5px;\n}\n.banner-section .salon-info-outer .salon-filter {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  margin-top: 18px;\n}\n.banner-section .salon-info-outer .salon-filter h4 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #000000;\n  opacity: 1;\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0;\n}\n.banner-section .salon-info-outer .bookapp-rights {\n  text-align: center;\n  letter-spacing: 0;\n  color: #9595a1;\n  opacity: 1;\n  font-size: 15px;\n  margin-bottom: 15px;\n}\n.banner-section .salon-info-outer .book-appointement-inner-sec {\n  text-align: center;\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n.banner-section .salon-info-outer .book-appointement-inner-sec .btn-submit-sec {\n  margin-top: 0;\n}\n@media (max-width: 1200px) {\n  .banner-section .salon-list .book-appointement-inner {\n    position: relative;\n    margin-right: 5px;\n    margin-left: 5px;\n  }\n  .banner-section .salon-list .book-appointement-inner input {\n    width: 100%;\n  }\n  .banner-section .salon-list h4 {\n    padding-right: 15px;\n  }\n}\n@media (max-width: 991px) {\n  .salon-info-outer .salon-list-info .salon-list-info-right {\n    flex-wrap: wrap;\n  }\n  .salon-info-outer .salon-list-info .salon-list-info-right .time-slots {\n    margin-bottom: 10px;\n  }\n  .salon-info-outer .salon-list-info .salon-list-info-left .salon-img {\n    display: flex;\n    align-items: center;\n  }\n}\n@media (max-width: 767px) {\n  .banner-section .salon-list {\n    padding-top: 0;\n  }\n  .banner-section .salon-list .salon-list-inner {\n    display: block;\n    padding: 0;\n    padding-top: 10px;\n  }\n  .banner-section .salon-list .filterPref {\n    width: 100%;\n    margin-bottom: 10px;\n    margin-top: 10px;\n  }\n  .banner-section .salon-list .book-appointement-inner {\n    margin-bottom: 15px;\n  }\n  .banner-section .salon-info-outer .salon-list-info .salon-list-info-left {\n    display: block;\n  }\n  .banner-section .salon-info-outer .salon-list-info .salon-list-info-left .salon-img {\n    text-align: center;\n    margin-bottom: 15px;\n  }\n  .banner-section .salon-info-outer .salon-list-info .salon-info {\n    margin-bottom: 15px;\n  }\n}\n.filled.color2 {\n  color: orange;\n}\n.regBtn {\n  background: transparent linear-gradient(99deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000012;\n  border-radius: 25px;\n  padding: 8px;\n  border-color: unset;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 12px;\n  font-weight: 500;\n  width: 130px;\n  margin-left: 15px;\n}\n.slotBox {\n  cursor: pointer;\n}\n.noRecordsDiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.noRecordsDiv span {\n  padding: 1em;\n  border: 1px solid purple;\n  border-radius: 10px;\n  color: purple;\n  width: 25%;\n  text-align: center;\n}\n.detailBtn {\n  background: transparent linear-gradient(99deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 12px #00000012;\n  padding: 5px;\n  border-color: unset;\n  text-align: center;\n  letter-spacing: 1.4px;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 500;\n  width: auto;\n}\n.searchInput {\n  margin-left: 15px;\n  margin-right: 15px;\n}\n.filterPref {\n  width: 50%;\n  display: flex;\n  align-items: center;\n}\n.FilterOverlay {\n  position: fixed;\n  display: none;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.FilterOverlay .mainSect {\n  padding: 1em;\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  border-radius: 10px;\n  margin: 15px;\n}\n.sortBY {\n  font-weight: 700;\n}\n.price:hover {\n  cursor: pointer;\n  width: 100px;\n  height: 100px;\n  background-image: url('Group 8210.svg');\n}\n.price {\n  background-image: url('Group 8220.svg');\n  height: 100px;\n  cursor: pointer;\n  width: 100px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.distance:hover {\n  cursor: pointer;\n  width: 100px;\n  height: 100px;\n  background-image: url('Group 8221.svg');\n}\n.distance {\n  cursor: pointer;\n  background-image: url('Group 8211.svg');\n  height: 100px;\n  width: 100px;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n.noSlots {\n  color: purple;\n  font-size: 14px;\n  font-family: Regular Lato;\n  font-weight: 600;\n  text-align: center;\n  margin-top: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL3NhbG9uLWxpc3Qvc2Fsb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdXNlci9ob21lL3NhbG9uLWxpc3Qvc2Fsb24tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRERJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQ0VOO0FEQUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDRU47QURFTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQVI7QURFTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0FSO0FES0k7RUFDRSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNITjtBRElNO0VBQ0UsYUFBQTtBQ0ZSO0FER1E7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDRFY7QURFVTtFQUNFLFdBQUE7QUNBWjtBRElVO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtBQ0ZaO0FER1k7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNEZDtBRElVO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDRlo7QURLUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hWO0FETU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDSlI7QURLUTtFQUNFLGdCQUFBO0FDSFY7QURLUTtFQUNFLCtDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNIVjtBRElVO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRlo7QURPSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNMTjtBRE1NO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0pSO0FET0k7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMTjtBRE9JO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNMTjtBRE1NO0VBQ0UsYUFBQTtBQ0pSO0FEVUE7RUFHTTtJQUNFLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ1ROO0VEVU07SUFDRSxXQUFBO0VDUlI7RURXSTtJQUNFLG1CQUFBO0VDVE47QUFDRjtBRGNBO0VBR007SUFDRSxlQUFBO0VDZE47RURlTTtJQUNFLG1CQUFBO0VDYlI7RURpQk07SUFDRSxhQUFBO0lBQ0EsbUJBQUE7RUNmUjtBQUNGO0FEcUJBO0VBRUk7SUFDRSxjQUFBO0VDcEJKO0VEcUJJO0lBQ0UsY0FBQTtJQUNBLFVBQUE7SUFDQSxpQkFBQTtFQ25CTjtFRHFCSTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDbkJOO0VEcUJJO0lBQ0UsbUJBQUE7RUNuQk47RUR3Qk07SUFDRSxjQUFBO0VDdEJSO0VEdUJRO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQ3JCVjtFRHdCTTtJQUNFLG1CQUFBO0VDdEJSO0FBQ0Y7QUQ0QkE7RUFDRSxhQUFBO0FDMUJGO0FENEJBO0VBQ0Usb0dBQUE7RUFFQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsZUFBQTtBQzFCRjtBRDRCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ3pCRjtBRDBCRTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ3hCSjtBRDJCQTtFQUNFLG9HQUFBO0VBRUEsa0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDekJGO0FEMkJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ3hCRjtBRDBCQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN2QkY7QUR5QkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDdEJGO0FEd0JFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDdEJKO0FENkJBO0VBQ0UsZ0JBQUE7QUMzQkY7QUQ2QkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtBQzFCRjtBRDRCQTtFQUNFLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtBQ3pCRjtBRDRCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0FDekJGO0FEMkJBO0VBQ0UsZUFBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0FDeEJGO0FEMEJBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDdkJGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL3NhbG9uLWxpc3Qvc2Fsb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXItc2VjdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjZmNztcclxuICBtYXJnaW4tdG9wOiA1ZW07XHJcbiAgLnNhbG9uLWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xyXG4gICAgLnNhbG9uLWxpc3QtaW5uZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkNGQ3O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogM2VtO1xyXG5cclxuICAgICAgcGFkZGluZy1sZWZ0OiA0ZW07XHJcbiAgICB9XHJcbiAgICBoNCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXIge1xyXG4gICAgICAvLyBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjNGQ0ZDU1O1xyXG4gICAgICB9XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnNhbG9uLWluZm8tb3V0ZXIge1xyXG4gICAgLnNhbG9uLWxpc3QtaW5mbyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDE0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBtaW4taGVpZ2h0OiAxMThweDtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgLnNhbG9uLWxpc3QtaW5mby1sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5zYWxvbi1pbWcge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZjJmMjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zYWxvbi1pbmZvIHtcclxuICAgICAgICAgIC5sb2NhdGlvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgICBjb2xvcjogIzk1OTVhMTtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNhbG9uLWxpc3QtaW5mby1yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAmOmxhc3QtY2hpbGQoKSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGltZS1zbG90cyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgd2lkdGg6IDg1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweDtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI5MjkyOTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNhbG9uLWZpbHRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgICAgaDQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5ib29rYXBwLXJpZ2h0cyB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgIGNvbG9yOiAjOTU5NWExO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXItc2VjIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIC5idG4tc3VibWl0LXNlYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5iYW5uZXItc2VjdGlvbiB7XHJcbiAgICAuc2Fsb24tbGlzdCB7XHJcbiAgICAgIC5ib29rLWFwcG9pbnRlbWVudC1pbm5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAuc2Fsb24taW5mby1vdXRlciB7XHJcbiAgICAuc2Fsb24tbGlzdC1pbmZvIHtcclxuICAgICAgLnNhbG9uLWxpc3QtaW5mby1yaWdodCB7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC50aW1lLXNsb3RzIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zYWxvbi1saXN0LWluZm8tbGVmdCB7XHJcbiAgICAgICAgLnNhbG9uLWltZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5iYW5uZXItc2VjdGlvbiB7XHJcbiAgICAuc2Fsb24tbGlzdCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAuc2Fsb24tbGlzdC1pbm5lciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAuZmlsdGVyUHJlZiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5ib29rLWFwcG9pbnRlbWVudC1pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNhbG9uLWluZm8tb3V0ZXIge1xyXG4gICAgICAuc2Fsb24tbGlzdC1pbmZvIHtcclxuICAgICAgICAuc2Fsb24tbGlzdC1pbmZvLWxlZnQge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAuc2Fsb24taW1nIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2Fsb24taW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmZpbGxlZC5jb2xvcjIge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuLnJlZ0J0biB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDk5ZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlXHJcbiAgICBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxMnB4ICMwMDAwMDAxMjtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItY29sb3I6IHVuc2V0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zbG90Qm94IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5vUmVjb3Jkc0RpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHNwYW4ge1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiBwdXJwbGU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG4uZGV0YWlsQnRuIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTlkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCUgMCVcclxuICAgIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDEyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXItY29sb3I6IHVuc2V0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG4uc2VhcmNoSW5wdXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG4uZmlsdGVyUHJlZiB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLkZpbHRlck92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIC5tYWluU2VjdCB7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4O1xyXG4gICAgLnByaWNlIHtcclxuICAgIH1cclxuICAgIC5kaXN0YW5jZSB7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5zb3J0Qlkge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnByaWNlOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL0dyb3VwXFwgODIxMC5zdmcnKTtcclxufVxyXG4ucHJpY2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Hcm91cFxcIDgyMjAuc3ZnJyk7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uZGlzdGFuY2U6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR3JvdXBcXCA4MjIxLnN2ZycpO1xyXG59XHJcbi5kaXN0YW5jZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Hcm91cFxcIDgyMTEuc3ZnJyk7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuLm5vU2xvdHMge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSZWd1bGFyIExhdG87XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogM2VtO1xyXG59XHJcbiIsIi5iYW5uZXItc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY2Zjc7XG4gIG1hcmdpbi10b3A6IDVlbTtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWxpc3QgLnNhbG9uLWxpc3QtaW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkNGQ3O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xuICBwYWRkaW5nLWxlZnQ6IDRlbTtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24tbGlzdCBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWxpc3QgLmJvb2stYXBwb2ludGVtZW50LWlubmVyIGlucHV0IHtcbiAgd2lkdGg6IDMxNnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzRkNGQ1NTtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24tbGlzdCAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXIgbGFiZWwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24taW5mby1vdXRlciAuc2Fsb24tbGlzdC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMTJweCAjMDAwMDAwMTQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIG1pbi1oZWlnaHQ6IDExOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5zYWxvbi1pbmZvLW91dGVyIC5zYWxvbi1saXN0LWluZm8gLnNhbG9uLWxpc3QtaW5mby1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24taW5mby1vdXRlciAuc2Fsb24tbGlzdC1pbmZvIC5zYWxvbi1saXN0LWluZm8tbGVmdCAuc2Fsb24taW1nIHtcbiAgYmFja2dyb3VuZDogI2ZmZjJmMjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5zYWxvbi1pbmZvLW91dGVyIC5zYWxvbi1saXN0LWluZm8gLnNhbG9uLWxpc3QtaW5mby1sZWZ0IC5zYWxvbi1pbWcgaW1nIHtcbiAgd2lkdGg6IDcwcHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLnNhbG9uLWxpc3QtaW5mbyAuc2Fsb24tbGlzdC1pbmZvLWxlZnQgLnNhbG9uLWluZm8gLmxvY2F0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5zYWxvbi1pbmZvLW91dGVyIC5zYWxvbi1saXN0LWluZm8gLnNhbG9uLWxpc3QtaW5mby1sZWZ0IC5zYWxvbi1pbmZvIC5sb2NhdGlvbiBzcGFuIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjOTU5NWExO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24taW5mby1vdXRlciAuc2Fsb24tbGlzdC1pbmZvIC5zYWxvbi1saXN0LWluZm8tbGVmdCAuc2Fsb24taW5mbyBpbWcge1xuICB3aWR0aDogMTFweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLnNhbG9uLWxpc3QtaW5mbyAuc2Fsb24tbGlzdC1pbmZvLWxlZnQgaDUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24taW5mby1vdXRlciAuc2Fsb24tbGlzdC1pbmZvIC5zYWxvbi1saXN0LWluZm8tcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLnNhbG9uLWxpc3QtaW5mbyAuc2Fsb24tbGlzdC1pbmZvLXJpZ2h0Omxhc3QtY2hpbGQoKSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLnNhbG9uLWxpc3QtaW5mbyAuc2Fsb24tbGlzdC1pbmZvLXJpZ2h0IC50aW1lLXNsb3RzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNmQ2ZDY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IDg1cHg7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLnNhbG9uLWxpc3QtaW5mbyAuc2Fsb24tbGlzdC1pbmZvLXJpZ2h0IC50aW1lLXNsb3RzIGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzI5MjkyOTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNXB4O1xufVxuLmJhbm5lci1zZWN0aW9uIC5zYWxvbi1pbmZvLW91dGVyIC5zYWxvbi1maWx0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLnNhbG9uLWZpbHRlciBoNCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDA7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLmJvb2thcHAtcmlnaHRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM5NTk1YTE7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5iYW5uZXItc2VjdGlvbiAuc2Fsb24taW5mby1vdXRlciAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXItc2VjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uYmFubmVyLXNlY3Rpb24gLnNhbG9uLWluZm8tb3V0ZXIgLmJvb2stYXBwb2ludGVtZW50LWlubmVyLXNlYyAuYnRuLXN1Ym1pdC1zZWMge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5iYW5uZXItc2VjdGlvbiAuc2Fsb24tbGlzdCAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIC5iYW5uZXItc2VjdGlvbiAuc2Fsb24tbGlzdCAuYm9vay1hcHBvaW50ZW1lbnQtaW5uZXIgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5iYW5uZXItc2VjdGlvbiAuc2Fsb24tbGlzdCBoNCB7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5zYWxvbi1pbmZvLW91dGVyIC5zYWxvbi1saXN0LWluZm8gLnNhbG9uLWxpc3QtaW5mby1yaWdodCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG4gIC5zYWxvbi1pbmZvLW91dGVyIC5zYWxvbi1saXN0LWluZm8gLnNhbG9uLWxpc3QtaW5mby1yaWdodCAudGltZS1zbG90cyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuc2Fsb24taW5mby1vdXRlciAuc2Fsb24tbGlzdC1pbmZvIC5zYWxvbi1saXN0LWluZm8tbGVmdCAuc2Fsb24taW1nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmFubmVyLXNlY3Rpb24gLnNhbG9uLWxpc3Qge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG4gIC5iYW5uZXItc2VjdGlvbiAuc2Fsb24tbGlzdCAuc2Fsb24tbGlzdC1pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuICAuYmFubmVyLXNlY3Rpb24gLnNhbG9uLWxpc3QgLmZpbHRlclByZWYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgfVxuICAuYmFubmVyLXNlY3Rpb24gLnNhbG9uLWxpc3QgLmJvb2stYXBwb2ludGVtZW50LWlubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5iYW5uZXItc2VjdGlvbiAuc2Fsb24taW5mby1vdXRlciAuc2Fsb24tbGlzdC1pbmZvIC5zYWxvbi1saXN0LWluZm8tbGVmdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmJhbm5lci1zZWN0aW9uIC5zYWxvbi1pbmZvLW91dGVyIC5zYWxvbi1saXN0LWluZm8gLnNhbG9uLWxpc3QtaW5mby1sZWZ0IC5zYWxvbi1pbWcge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG4gIC5iYW5uZXItc2VjdGlvbiAuc2Fsb24taW5mby1vdXRlciAuc2Fsb24tbGlzdC1pbmZvIC5zYWxvbi1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB9XG59XG4uZmlsbGVkLmNvbG9yMiB7XG4gIGNvbG9yOiBvcmFuZ2U7XG59XG5cbi5yZWdCdG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTlkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDEyO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uc2xvdEJveCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5vUmVjb3Jkc0RpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbi5ub1JlY29yZHNEaXYgc3BhbiB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogcHVycGxlO1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXRhaWxCdG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTlkZWcsICNjYzJiNWUgMCUsICM3NTNhODggMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDEycHggIzAwMDAwMDEyO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnNlYXJjaElucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmZpbHRlclByZWYge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uRmlsdGVyT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIHotaW5kZXg6IDk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uRmlsdGVyT3ZlcmxheSAubWFpblNlY3Qge1xuICBwYWRkaW5nOiAxZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbjogMTVweDtcbn1cbi5zb3J0Qlkge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucHJpY2U6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Hcm91cCA4MjEwLnN2Z1wiKTtcbn1cblxuLnByaWNlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Hcm91cCA4MjIwLnN2Z1wiKTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmRpc3RhbmNlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvR3JvdXAgODIyMS5zdmdcIik7XG59XG5cbi5kaXN0YW5jZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9Hcm91cCA4MjExLnN2Z1wiKTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5ub1Nsb3RzIHtcbiAgY29sb3I6IHB1cnBsZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogUmVndWxhciBMYXRvO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDNlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/home/salon-list/salon-list.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/home/salon-list/salon-list.component.ts ***!
    \**************************************************************/

  /*! exports provided: SalonListComponent */

  /***/
  function srcAppUserHomeSalonListSalonListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalonListComponent", function () {
      return SalonListComponent;
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


    var _usercommonservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../usercommonservice.service */
    "./src/app/user/home/usercommonservice.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");

    var SalonListComponent = /*#__PURE__*/function () {
      function SalonListComponent(router, userCommnServ, toastServ, languagesService, geocoder) {
        _classCallCheck(this, SalonListComponent);

        this.router = router;
        this.userCommnServ = userCommnServ;
        this.toastServ = toastServ;
        this.languagesService = languagesService;
        this.geocoder = geocoder;
        this.pageSize = 10;
        this.page = 1;
        this.readOnly = true;
        this.showNoRecords = false;
      }

      _createClass(SalonListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.userPrefrence = JSON.parse(sessionStorage.getItem("userprefrence"));

          if (!this.userPrefrence) {
            this.router.navigate(["/home"]);
          } else {
            this.getSalonsList(this.userPrefrence);
          }

          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this33.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "getAllSalons",
        value: function getAllSalons() {
          var dataToPass = {
            service_id: this.userPrefrence.service_id ? this.userPrefrence.service_id : "",
            date: this.userPrefrence.date,
            lat: this.userPrefrence.lat,
            "long": this.userPrefrence["long"],
            pageSize: this.salonCount,
            page: this.page
          };
          this.getSalonsList(dataToPass);
        }
      }, {
        key: "getSalonsList",
        value: function getSalonsList(data) {
          var _this34 = this;

          var dataToPass = {
            service_id: data.service_id ? data.service_id : "",
            date: data.date,
            lat: data.lat,
            "long": data["long"],
            pageSize: this.pageSize,
            page: this.page
          };
          this.userCommnServ.getSalonsList(dataToPass).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this34, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(data["code"] === 200)) {
                        _context3.next = 13;
                        break;
                      }

                      this.salonListingData = data["data"]["salon"];

                      if (!this.salonListingData) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 5;
                      return this.loadCoordinates(this.salonListingData);

                    case 5:
                      _context3.next = 8;
                      break;

                    case 7:
                      null;

                    case 8:
                      this.salonCount = data["data"]["count"];

                      if (this.salonCount > 10) {
                        this.isShowCountButton = true;
                      } else if (this.salonCount <= 10) {
                        this.isShowCountButton = false;
                      }

                      if (data["data"].length === 0) {
                        this.showNoRecords = true;
                      } else if (data["data"]["salon"].length > 0) {
                        this.showNoRecords = false;
                      }

                      _context3.next = 14;
                      break;

                    case 13:
                      if (data["code"] === 400) {
                        this.toastServ.error(data["message"], "", {
                          timeOut: 1000
                        });
                      }

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }, function (error) {
            _this34.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "openFilterModal",
        value: function openFilterModal() {
          this.isShowFilterPopUp = true;
        }
      }, {
        key: "sortByPrice",
        value: function sortByPrice() {
          var _this35 = this;

          this.isShowFilterPopUp = false;
          var dataToPass = {
            service_id: this.userPrefrence.service_id ? this.userPrefrence.service_id : "",
            date: this.userPrefrence.date,
            sort: "price",
            sortOrder: "asc",
            name: this.searchTerm,
            lat: this.userPrefrence.lat,
            "long": this.userPrefrence["long"],
            pageSize: this.pageSize,
            page: this.page
          };
          this.userCommnServ.getSalonsList(dataToPass).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this35, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(data["code"] === 200)) {
                        _context4.next = 10;
                        break;
                      }

                      this.salonListingData = data["data"]["salon"];

                      if (!this.salonListingData) {
                        _context4.next = 7;
                        break;
                      }

                      _context4.next = 5;
                      return this.loadCoordinates(this.salonListingData);

                    case 5:
                      _context4.next = 8;
                      break;

                    case 7:
                      null;

                    case 8:
                      _context4.next = 11;
                      break;

                    case 10:
                      if (data["code"] === 400) {
                        this.toastServ.error(data["message"], "", {
                          timeOut: 1000
                        });
                      }

                    case 11:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }, function (error) {
            _this35.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "sortByDistance",
        value: function sortByDistance() {
          var _this36 = this;

          this.isShowFilterPopUp = false;
          var dataToPass = {
            service_id: this.userPrefrence.service_id ? this.userPrefrence.service_id : "",
            date: this.userPrefrence.date,
            sort: "distance",
            sortOrder: "asc",
            name: this.searchTerm,
            lat: this.userPrefrence.lat,
            "long": this.userPrefrence["long"],
            pageSize: this.pageSize,
            page: this.page
          };
          this.userCommnServ.getSalonsList(dataToPass).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this36, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(data["code"] === 200)) {
                        _context5.next = 10;
                        break;
                      }

                      this.salonListingData = data["data"]["salon"];

                      if (!this.salonListingData) {
                        _context5.next = 7;
                        break;
                      }

                      _context5.next = 5;
                      return this.loadCoordinates(this.salonListingData);

                    case 5:
                      _context5.next = 8;
                      break;

                    case 7:
                      null;

                    case 8:
                      _context5.next = 11;
                      break;

                    case 10:
                      if (data["code"] === 400) {
                        this.toastServ.error(data["message"], "", {
                          timeOut: 1000
                        });
                      }

                    case 11:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }, function (error) {
            _this36.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "goToFilter",
        value: function goToFilter() {
          this.router.navigate(["/home"]);
        }
      }, {
        key: "showSalonDetails",
        value: function showSalonDetails(data) {
          sessionStorage.setItem("salonDetails", JSON.stringify(data));
          this.router.navigate(["/detail"]);
        }
      }, {
        key: "bookSlot",
        value: function bookSlot(starttime, serviceData) {
          var dataToPass = {
            stime: starttime,
            data: serviceData
          };
          sessionStorage.setItem("bookingData", JSON.stringify(dataToPass));
          this.router.navigate(["/checkout"]);
        }
      }, {
        key: "clearFilter",
        value: function clearFilter() {
          var _this37 = this;

          var dataToPass = {
            service_id: this.userPrefrence.service_id ? this.userPrefrence.service_id : "",
            date: this.userPrefrence.date,
            name: this.searchTerm,
            lat: this.userPrefrence.lat,
            "long": this.userPrefrence["long"],
            pageSize: this.pageSize,
            page: this.page
          };
          this.userCommnServ.getSalonsList(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this37.salonListingData = data["data"];

              if (data["data"].length === 0) {
                _this37.showNoRecords = true;
              } else if (data["data"].length > 0) {
                _this37.showNoRecords = false;
              }
            } else if (data["code"] === 400) {
              _this37.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this37.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "loadCoordinates",
        value: function loadCoordinates(salons) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _iterator, _step, _step$value, idx, salon, _salon$location$coord, longitude, latitude, _location2;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _iterator = _createForOfIteratorHelper(salons.entries());
                    _context6.prev = 1;

                    _iterator.s();

                  case 3:
                    if ((_step = _iterator.n()).done) {
                      _context6.next = 14;
                      break;
                    }

                    _step$value = _slicedToArray(_step.value, 2), idx = _step$value[0], salon = _step$value[1];
                    _salon$location$coord = _slicedToArray(salon.location.coordinates, 2), longitude = _salon$location$coord[0], latitude = _salon$location$coord[1];
                    _context6.next = 8;
                    return this.geocoder.getLocationByCoords(latitude, longitude);

                  case 8:
                    _location2 = _context6.sent;
                    salon.location = _location2;
                    salons[idx] = salon;
                    salons[idx].coordinates = {
                      latitude: latitude,
                      longitude: longitude
                    };

                  case 12:
                    _context6.next = 3;
                    break;

                  case 14:
                    _context6.next = 19;
                    break;

                  case 16:
                    _context6.prev = 16;
                    _context6.t0 = _context6["catch"](1);

                    _iterator.e(_context6.t0);

                  case 19:
                    _context6.prev = 19;

                    _iterator.f();

                    return _context6.finish(19);

                  case 22:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[1, 16, 19, 22]]);
          }));
        }
      }]);

      return SalonListComponent;
    }();

    SalonListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _usercommonservice_service__WEBPACK_IMPORTED_MODULE_3__["UsercommonserviceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["LanguagesService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["GeocoderService"]
      }];
    };

    SalonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-salon-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salon-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/salon-list/salon-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salon-list.component.scss */
      "./src/app/user/home/salon-list/salon-list.component.scss"))["default"]]
    })], SalonListComponent);
    /***/
  },

  /***/
  "./src/app/user/home/starrating/starrating.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/user/home/starrating/starrating.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeStarratingStarratingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.rated {\n  color: gold;\n}\n.stars-outer {\n  display: inline-block;\n  position: relative;\n  font-family: FontAwesome;\n}\n.stars-outer::before {\n  content: \"\";\n}\n.stars-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  width: 0;\n}\n.stars-inner::before {\n  content: \"\";\n  color: #f8ce0b;\n}\n.stars-inner {\n  width: 0;\n}\n.inner {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n}\n.outer {\n  position: absolute;\n}\n.starWrapper {\n  width: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9ob21lL3N0YXJyYXRpbmcvc3RhcnJhdGluZy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL3N0YXJyYXRpbmcvc3RhcnJhdGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDRSxXQUFBO0FERUY7QUNBQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBREdGO0FDQUE7RUFDRSxnQkFBQTtBREdGO0FDQUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFFBQUE7QURHRjtBQ0FBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FER0Y7QUNBQTtFQUNFLFFBQUE7QURHRjtBQ0RBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURJRjtBQ0ZBO0VBQ0Usa0JBQUE7QURLRjtBQ0hBO0VBQ0UsV0FBQTtBRE1GIiwiZmlsZSI6InNyYy9hcHAvdXNlci9ob21lL3N0YXJyYXRpbmcvc3RhcnJhdGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5yYXRlZCB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4uc3RhcnMtb3V0ZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xufVxuXG4uc3RhcnMtb3V0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CG74CG74CG74CG74CGXCI7XG59XG5cbi5zdGFycy1pbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMDtcbn1cblxuLnN0YXJzLWlubmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Ahe+Ahe+Ahe+Ahe+AhVwiO1xuICBjb2xvcjogI2Y4Y2UwYjtcbn1cblxuLnN0YXJzLWlubmVyIHtcbiAgd2lkdGg6IDA7XG59XG5cbi5pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm91dGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uc3RhcldyYXBwZXIge1xuICB3aWR0aDogNzVweDtcbn0iLCIucmF0ZWQge1xuICBjb2xvcjogZ29sZDtcbn1cbi5zdGFycy1vdXRlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG59XG5cbi5zdGFycy1vdXRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcZjAwNiBcXGYwMDYgXFxmMDA2IFxcZjAwNiBcXGYwMDYnO1xufVxuXG4uc3RhcnMtaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG59XG5cbi5zdGFycy1pbm5lcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcZjAwNSBcXGYwMDUgXFxmMDA1IFxcZjAwNSBcXGYwMDUnO1xuICBjb2xvcjogI2Y4Y2UwYjtcbn1cblxuLnN0YXJzLWlubmVyIHtcbiAgd2lkdGg6IDA7XG59XG4uaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3V0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc3RhcldyYXBwZXIge1xuICB3aWR0aDogNzVweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/home/starrating/starrating.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/user/home/starrating/starrating.component.ts ***!
    \**************************************************************/

  /*! exports provided: StarratingComponent */

  /***/
  function srcAppUserHomeStarratingStarratingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StarratingComponent", function () {
      return StarratingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StarratingComponent = /*#__PURE__*/function () {
      function StarratingComponent() {
        _classCallCheck(this, StarratingComponent);

        this.isFavorite = false;
        this.totalRatings = 5;
        this.tempArray = [];
        this.tempArray1 = [];
      }

      _createClass(StarratingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          for (var i = 0; i < this.ratings; i++) {
            this.tempArray.push({});
          }
        }
      }]);

      return StarratingComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StarratingComponent.prototype, "ratings", void 0);
    StarratingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-starrating",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./starrating.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/starrating/starrating.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./starrating.component.scss */
      "./src/app/user/home/starrating/starrating.component.scss"))["default"]]
    })], StarratingComponent);
    /***/
  },

  /***/
  "./src/app/user/home/termsandcondition/termsandcondition.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/user/home/termsandcondition/termsandcondition.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeTermsandconditionTermsandconditionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvaG9tZS90ZXJtc2FuZGNvbmRpdGlvbi90ZXJtc2FuZGNvbmRpdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/user/home/termsandcondition/termsandcondition.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/user/home/termsandcondition/termsandcondition.component.ts ***!
    \****************************************************************************/

  /*! exports provided: TermsandconditionComponent */

  /***/
  function srcAppUserHomeTermsandconditionTermsandconditionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsandconditionComponent", function () {
      return TermsandconditionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TermsandconditionComponent = /*#__PURE__*/function () {
      function TermsandconditionComponent() {
        _classCallCheck(this, TermsandconditionComponent);
      }

      _createClass(TermsandconditionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsandconditionComponent;
    }();

    TermsandconditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-termsandcondition",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./termsandcondition.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/termsandcondition/termsandcondition.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./termsandcondition.component.scss */
      "./src/app/user/home/termsandcondition/termsandcondition.component.scss"))["default"]]
    })], TermsandconditionComponent);
    /***/
  },

  /***/
  "./src/app/user/home/usercommonservice.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/user/home/usercommonservice.service.ts ***!
    \********************************************************/

  /*! exports provided: UsercommonserviceService */

  /***/
  function srcAppUserHomeUsercommonserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsercommonserviceService", function () {
      return UsercommonserviceService;
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


    var httpOptionss = {
      headers: {
        skip: "true"
      }
    };
    var httpOptions = {
      headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("LoggedInUser")
      })
    };

    var UsercommonserviceService = /*#__PURE__*/function () {
      function UsercommonserviceService(http) {
        _classCallCheck(this, UsercommonserviceService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
        this.userPrefrence = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
      }

      _createClass(UsercommonserviceService, [{
        key: "setUserPrefrence",
        value: function setUserPrefrence(data) {
          this.userPrefrence.next(data);
        }
      }, {
        key: "getUserPrefrence",
        value: function getUserPrefrence() {
          return this.userPrefrence.asObservable();
        }
      }, {
        key: "getCategoriesList",
        value: function getCategoriesList() {
          var dataToPass = {
            type: "categories"
          };
          return this.http.post(this.baseUrl + "/categories", dataToPass, httpOptionss);
        }
      }, {
        key: "getSalonsList",
        value: function getSalonsList(data) {
          return this.http.post(this.baseUrl + "/searchsalon", data);
        }
      }, {
        key: "getOtpForVerification",
        value: function getOtpForVerification(data) {
          return this.http.post(this.baseUrl + "/getotp", data);
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp(data) {
          return this.http.post(this.baseUrl + "/verifyotp", data);
        }
      }, {
        key: "registerUser",
        value: function registerUser(data) {
          return this.http.post(this.baseUrl + "/register", data);
        }
      }, {
        key: "loginUser",
        value: function loginUser(data) {
          return this.http.post(this.baseUrl + "/login", data);
        }
      }, {
        key: "addReviewAndRatings",
        value: function addReviewAndRatings(data) {
          return this.http.post(this.baseUrl + "/addreviewrating", data);
        }
      }, {
        key: "getUserDetails",
        value: function getUserDetails(data) {
          return this.http.post(this.baseUrl + "/user-detail", data);
        }
      }, {
        key: "payForService",
        value: function payForService(data) {
          return this.http.post(this.baseUrl + "/charge", data);
        }
      }, {
        key: "getUserBookings",
        value: function getUserBookings(data) {
          return this.http.post(this.baseUrl + "/users-booking", data);
        }
      }, {
        key: "getSalonDays",
        value: function getSalonDays(data) {
          return this.http.post(this.baseUrl + "/salon-days", data);
        }
      }, {
        key: "checkPromoCodeValidity",
        value: function checkPromoCodeValidity(data) {
          return this.http.post(this.baseUrl + "/validate-promocode", data);
        }
      }, {
        key: "getAdminDetails",
        value: function getAdminDetails(data) {
          return this.http.post(this.baseUrl + "/get-admin-detail", data);
        }
      }, {
        key: "getReviewRatings",
        value: function getReviewRatings(data) {
          return this.http.post(this.baseUrl + "/reviewsratings", data);
        }
      }, {
        key: "getSalonCategories",
        value: function getSalonCategories(data) {
          return this.http.post(this.baseUrl + "/saloncategories", data);
        }
      }, {
        key: "getSalonDetails",
        value: function getSalonDetails(data) {
          return this.http.post(this.baseUrl + "/salon", data);
        }
      }, {
        key: "getSalonWeekDays",
        value: function getSalonWeekDays(data) {
          return this.http.post(this.baseUrl + "/salon-days", data);
        }
      }, {
        key: "getPromocodes",
        value: function getPromocodes(data) {
          return this.http.post(this.baseUrl + "/promocodes", data);
        }
      }, {
        key: "getStripeToken",
        value: function getStripeToken(data) {
          return this.http.post(this.baseUrl + "/get-stripe-token", data);
        }
      }, {
        key: "getWalletAmount",
        value: function getWalletAmount(data) {
          return this.http.post(this.baseUrl + "/users-wallet", data);
        }
      }]);

      return UsercommonserviceService;
    }();

    UsercommonserviceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UsercommonserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UsercommonserviceService);
    /***/
  },

  /***/
  "./src/app/user/home/userlogin/countries.ts":
  /*!**************************************************!*\
    !*** ./src/app/user/home/userlogin/countries.ts ***!
    \**************************************************/

  /*! exports provided: country */

  /***/
  function srcAppUserHomeUserloginCountriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "country", function () {
      return country;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var country = [{
      "name": "Afghanistan",
      "topLevelDomain": [".af"],
      "alpha2Code": "AF",
      "alpha3Code": "AFG",
      "callingCodes": ["93"],
      "capital": "Kabul",
      "altSpellings": ["AF", "Afġānistān"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 27657145,
      "latlng": [33.0, 65.0],
      "demonym": "Afghan",
      "area": 652230.0,
      "gini": 27.8,
      "timezones": ["UTC+04:30"],
      "borders": ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
      "nativeName": "افغانستان",
      "numericCode": "004",
      "currencies": [{
        "code": "AFN",
        "name": "Afghan afghani",
        "symbol": "؋"
      }],
      "languages": [{
        "iso639_1": "ps",
        "iso639_2": "pus",
        "name": "Pashto",
        "nativeName": "پښتو"
      }, {
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      }, {
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }],
      "translations": {
        "de": "Afghanistan",
        "es": "Afganistán",
        "fr": "Afghanistan",
        "ja": "アフガニスタン",
        "it": "Afghanistan",
        "br": "Afeganistão",
        "pt": "Afeganistão",
        "nl": "Afghanistan",
        "hr": "Afganistan",
        "fa": "افغانستان"
      },
      "flag": "https://restcountries.eu/data/afg.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "AFG"
    }, {
      "name": "Åland Islands",
      "topLevelDomain": [".ax"],
      "alpha2Code": "AX",
      "alpha3Code": "ALA",
      "callingCodes": ["358"],
      "capital": "Mariehamn",
      "altSpellings": ["AX", "Aaland", "Aland", "Ahvenanmaa"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 28875,
      "latlng": [60.116667, 19.9],
      "demonym": "Ålandish",
      "area": 1580.0,
      "gini": null,
      "timezones": ["UTC+02:00"],
      "borders": [],
      "nativeName": "Åland",
      "numericCode": "248",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }],
      "translations": {
        "de": "Åland",
        "es": "Alandia",
        "fr": "Åland",
        "ja": "オーランド諸島",
        "it": "Isole Aland",
        "br": "Ilhas de Aland",
        "pt": "Ilhas de Aland",
        "nl": "Ålandeilanden",
        "hr": "Ålandski otoci",
        "fa": "جزایر الند"
      },
      "flag": "https://restcountries.eu/data/ala.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": ""
    }, {
      "name": "Albania",
      "topLevelDomain": [".al"],
      "alpha2Code": "AL",
      "alpha3Code": "ALB",
      "callingCodes": ["355"],
      "capital": "Tirana",
      "altSpellings": ["AL", "Shqipëri", "Shqipëria", "Shqipnia"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 2886026,
      "latlng": [41.0, 20.0],
      "demonym": "Albanian",
      "area": 28748.0,
      "gini": 34.5,
      "timezones": ["UTC+01:00"],
      "borders": ["MNE", "GRC", "MKD", "KOS"],
      "nativeName": "Shqipëria",
      "numericCode": "008",
      "currencies": [{
        "code": "ALL",
        "name": "Albanian lek",
        "symbol": "L"
      }],
      "languages": [{
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      }],
      "translations": {
        "de": "Albanien",
        "es": "Albania",
        "fr": "Albanie",
        "ja": "アルバニア",
        "it": "Albania",
        "br": "Albânia",
        "pt": "Albânia",
        "nl": "Albanië",
        "hr": "Albanija",
        "fa": "آلبانی"
      },
      "flag": "https://restcountries.eu/data/alb.svg",
      "regionalBlocs": [{
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "ALB"
    }, {
      "name": "Algeria",
      "topLevelDomain": [".dz"],
      "alpha2Code": "DZ",
      "alpha3Code": "DZA",
      "callingCodes": ["213"],
      "capital": "Algiers",
      "altSpellings": ["DZ", "Dzayer", "Algérie"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "population": 40400000,
      "latlng": [28.0, 3.0],
      "demonym": "Algerian",
      "area": 2381741.0,
      "gini": 35.3,
      "timezones": ["UTC+01:00"],
      "borders": ["TUN", "LBY", "NER", "ESH", "MRT", "MLI", "MAR"],
      "nativeName": "الجزائر",
      "numericCode": "012",
      "currencies": [{
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Algerien",
        "es": "Argelia",
        "fr": "Algérie",
        "ja": "アルジェリア",
        "it": "Algeria",
        "br": "Argélia",
        "pt": "Argélia",
        "nl": "Algerije",
        "hr": "Alžir",
        "fa": "الجزایر"
      },
      "flag": "https://restcountries.eu/data/dza.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "ALG"
    }, {
      "name": "American Samoa",
      "topLevelDomain": [".as"],
      "alpha2Code": "AS",
      "alpha3Code": "ASM",
      "callingCodes": ["1684"],
      "capital": "Pago Pago",
      "altSpellings": ["AS", "Amerika Sāmoa", "Amelika Sāmoa", "Sāmoa Amelika"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 57100,
      "latlng": [-14.33333333, -170.0],
      "demonym": "American Samoan",
      "area": 199.0,
      "gini": null,
      "timezones": ["UTC-11:00"],
      "borders": [],
      "nativeName": "American Samoa",
      "numericCode": "016",
      "currencies": [{
        "code": "USD",
        "name": "United State Dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "sm",
        "iso639_2": "smo",
        "name": "Samoan",
        "nativeName": "gagana fa'a Samoa"
      }],
      "translations": {
        "de": "Amerikanisch-Samoa",
        "es": "Samoa Americana",
        "fr": "Samoa américaines",
        "ja": "アメリカ領サモア",
        "it": "Samoa Americane",
        "br": "Samoa Americana",
        "pt": "Samoa Americana",
        "nl": "Amerikaans Samoa",
        "hr": "Američka Samoa",
        "fa": "ساموآی آمریکا"
      },
      "flag": "https://restcountries.eu/data/asm.svg",
      "regionalBlocs": [],
      "cioc": "ASA"
    }, {
      "name": "Andorra",
      "topLevelDomain": [".ad"],
      "alpha2Code": "AD",
      "alpha3Code": "AND",
      "callingCodes": ["376"],
      "capital": "Andorra la Vella",
      "altSpellings": ["AD", "Principality of Andorra", "Principat d'Andorra"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 78014,
      "latlng": [42.5, 1.5],
      "demonym": "Andorran",
      "area": 468.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["FRA", "ESP"],
      "nativeName": "Andorra",
      "numericCode": "020",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "ca",
        "iso639_2": "cat",
        "name": "Catalan",
        "nativeName": "català"
      }],
      "translations": {
        "de": "Andorra",
        "es": "Andorra",
        "fr": "Andorre",
        "ja": "アンドラ",
        "it": "Andorra",
        "br": "Andorra",
        "pt": "Andorra",
        "nl": "Andorra",
        "hr": "Andora",
        "fa": "آندورا"
      },
      "flag": "https://restcountries.eu/data/and.svg",
      "regionalBlocs": [],
      "cioc": "AND"
    }, {
      "name": "Angola",
      "topLevelDomain": [".ao"],
      "alpha2Code": "AO",
      "alpha3Code": "AGO",
      "callingCodes": ["244"],
      "capital": "Luanda",
      "altSpellings": ["AO", "República de Angola", "ʁɛpublika de an'ɡɔla"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 25868000,
      "latlng": [-12.5, 18.5],
      "demonym": "Angolan",
      "area": 1246700.0,
      "gini": 58.6,
      "timezones": ["UTC+01:00"],
      "borders": ["COG", "COD", "ZMB", "NAM"],
      "nativeName": "Angola",
      "numericCode": "024",
      "currencies": [{
        "code": "AOA",
        "name": "Angolan kwanza",
        "symbol": "Kz"
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Angola",
        "es": "Angola",
        "fr": "Angola",
        "ja": "アンゴラ",
        "it": "Angola",
        "br": "Angola",
        "pt": "Angola",
        "nl": "Angola",
        "hr": "Angola",
        "fa": "آنگولا"
      },
      "flag": "https://restcountries.eu/data/ago.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "ANG"
    }, {
      "name": "Anguilla",
      "topLevelDomain": [".ai"],
      "alpha2Code": "AI",
      "alpha3Code": "AIA",
      "callingCodes": ["1264"],
      "capital": "The Valley",
      "altSpellings": ["AI"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 13452,
      "latlng": [18.25, -63.16666666],
      "demonym": "Anguillian",
      "area": 91.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Anguilla",
      "numericCode": "660",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Anguilla",
        "es": "Anguilla",
        "fr": "Anguilla",
        "ja": "アンギラ",
        "it": "Anguilla",
        "br": "Anguila",
        "pt": "Anguila",
        "nl": "Anguilla",
        "hr": "Angvila",
        "fa": "آنگویلا"
      },
      "flag": "https://restcountries.eu/data/aia.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Antarctica",
      "topLevelDomain": [".aq"],
      "alpha2Code": "AQ",
      "alpha3Code": "ATA",
      "callingCodes": ["672"],
      "capital": "",
      "altSpellings": [],
      "region": "Polar",
      "subregion": "",
      "population": 1000,
      "latlng": [-74.65, 4.48],
      "demonym": "",
      "area": 1.4E7,
      "gini": null,
      "timezones": ["UTC-03:00", "UTC+03:00", "UTC+05:00", "UTC+06:00", "UTC+07:00", "UTC+08:00", "UTC+10:00", "UTC+12:00"],
      "borders": [],
      "nativeName": "Antarctica",
      "numericCode": "010",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }, {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Antarktika",
        "es": "Antártida",
        "fr": "Antarctique",
        "ja": "南極大陸",
        "it": "Antartide",
        "br": "Antártida",
        "pt": "Antárctida",
        "nl": "Antarctica",
        "hr": "Antarktika",
        "fa": "جنوبگان"
      },
      "flag": "https://restcountries.eu/data/ata.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Antigua and Barbuda",
      "topLevelDomain": [".ag"],
      "alpha2Code": "AG",
      "alpha3Code": "ATG",
      "callingCodes": ["1268"],
      "capital": "Saint John's",
      "altSpellings": ["AG"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 86295,
      "latlng": [17.05, -61.8],
      "demonym": "Antiguan, Barbudan",
      "area": 442.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Antigua and Barbuda",
      "numericCode": "028",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Antigua und Barbuda",
        "es": "Antigua y Barbuda",
        "fr": "Antigua-et-Barbuda",
        "ja": "アンティグア・バーブーダ",
        "it": "Antigua e Barbuda",
        "br": "Antígua e Barbuda",
        "pt": "Antígua e Barbuda",
        "nl": "Antigua en Barbuda",
        "hr": "Antigva i Barbuda",
        "fa": "آنتیگوا و باربودا"
      },
      "flag": "https://restcountries.eu/data/atg.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "ANT"
    }, {
      "name": "Argentina",
      "topLevelDomain": [".ar"],
      "alpha2Code": "AR",
      "alpha3Code": "ARG",
      "callingCodes": ["54"],
      "capital": "Buenos Aires",
      "altSpellings": ["AR", "Argentine Republic", "República Argentina"],
      "region": "Americas",
      "subregion": "South America",
      "population": 43590400,
      "latlng": [-34.0, -64.0],
      "demonym": "Argentinean",
      "area": 2780400.0,
      "gini": 44.5,
      "timezones": ["UTC-03:00"],
      "borders": ["BOL", "BRA", "CHL", "PRY", "URY"],
      "nativeName": "Argentina",
      "numericCode": "032",
      "currencies": [{
        "code": "ARS",
        "name": "Argentine peso",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }, {
        "iso639_1": "gn",
        "iso639_2": "grn",
        "name": "Guaraní",
        "nativeName": "Avañe'ẽ"
      }],
      "translations": {
        "de": "Argentinien",
        "es": "Argentina",
        "fr": "Argentine",
        "ja": "アルゼンチン",
        "it": "Argentina",
        "br": "Argentina",
        "pt": "Argentina",
        "nl": "Argentinië",
        "hr": "Argentina",
        "fa": "آرژانتین"
      },
      "flag": "https://restcountries.eu/data/arg.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "ARG"
    }, {
      "name": "Armenia",
      "topLevelDomain": [".am"],
      "alpha2Code": "AM",
      "alpha3Code": "ARM",
      "callingCodes": ["374"],
      "capital": "Yerevan",
      "altSpellings": ["AM", "Hayastan", "Republic of Armenia", "Հայաստանի Հանրապետություն"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 2994400,
      "latlng": [40.0, 45.0],
      "demonym": "Armenian",
      "area": 29743.0,
      "gini": 30.9,
      "timezones": ["UTC+04:00"],
      "borders": ["AZE", "GEO", "IRN", "TUR"],
      "nativeName": "Հայաստան",
      "numericCode": "051",
      "currencies": [{
        "code": "AMD",
        "name": "Armenian dram",
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "hy",
        "iso639_2": "hye",
        "name": "Armenian",
        "nativeName": "Հայերեն"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Armenien",
        "es": "Armenia",
        "fr": "Arménie",
        "ja": "アルメニア",
        "it": "Armenia",
        "br": "Armênia",
        "pt": "Arménia",
        "nl": "Armenië",
        "hr": "Armenija",
        "fa": "ارمنستان"
      },
      "flag": "https://restcountries.eu/data/arm.svg",
      "regionalBlocs": [{
        "acronym": "EEU",
        "name": "Eurasian Economic Union",
        "otherAcronyms": ["EAEU"],
        "otherNames": []
      }],
      "cioc": "ARM"
    }, {
      "name": "Aruba",
      "topLevelDomain": [".aw"],
      "alpha2Code": "AW",
      "alpha3Code": "ABW",
      "callingCodes": ["297"],
      "capital": "Oranjestad",
      "altSpellings": ["AW"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 107394,
      "latlng": [12.5, -69.96666666],
      "demonym": "Aruban",
      "area": 180.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Aruba",
      "numericCode": "533",
      "currencies": [{
        "code": "AWG",
        "name": "Aruban florin",
        "symbol": "ƒ"
      }],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }, {
        "iso639_1": "pa",
        "iso639_2": "pan",
        "name": "(Eastern) Punjabi",
        "nativeName": "ਪੰਜਾਬੀ"
      }],
      "translations": {
        "de": "Aruba",
        "es": "Aruba",
        "fr": "Aruba",
        "ja": "アルバ",
        "it": "Aruba",
        "br": "Aruba",
        "pt": "Aruba",
        "nl": "Aruba",
        "hr": "Aruba",
        "fa": "آروبا"
      },
      "flag": "https://restcountries.eu/data/abw.svg",
      "regionalBlocs": [],
      "cioc": "ARU"
    }, {
      "name": "Australia",
      "topLevelDomain": [".au"],
      "alpha2Code": "AU",
      "alpha3Code": "AUS",
      "callingCodes": ["61"],
      "capital": "Canberra",
      "altSpellings": ["AU"],
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "population": 24117360,
      "latlng": [-27.0, 133.0],
      "demonym": "Australian",
      "area": 7692024.0,
      "gini": 30.5,
      "timezones": ["UTC+05:00", "UTC+06:30", "UTC+07:00", "UTC+08:00", "UTC+09:30", "UTC+10:00", "UTC+10:30", "UTC+11:30"],
      "borders": [],
      "nativeName": "Australia",
      "numericCode": "036",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Australien",
        "es": "Australia",
        "fr": "Australie",
        "ja": "オーストラリア",
        "it": "Australia",
        "br": "Austrália",
        "pt": "Austrália",
        "nl": "Australië",
        "hr": "Australija",
        "fa": "استرالیا"
      },
      "flag": "https://restcountries.eu/data/aus.svg",
      "regionalBlocs": [],
      "cioc": "AUS"
    }, {
      "name": "Austria",
      "topLevelDomain": [".at"],
      "alpha2Code": "AT",
      "alpha3Code": "AUT",
      "callingCodes": ["43"],
      "capital": "Vienna",
      "altSpellings": ["AT", "Österreich", "Osterreich", "Oesterreich"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 8725931,
      "latlng": [47.33333333, 13.33333333],
      "demonym": "Austrian",
      "area": 83871.0,
      "gini": 26.0,
      "timezones": ["UTC+01:00"],
      "borders": ["CZE", "DEU", "HUN", "ITA", "LIE", "SVK", "SVN", "CHE"],
      "nativeName": "Österreich",
      "numericCode": "040",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }],
      "translations": {
        "de": "Österreich",
        "es": "Austria",
        "fr": "Autriche",
        "ja": "オーストリア",
        "it": "Austria",
        "br": "áustria",
        "pt": "áustria",
        "nl": "Oostenrijk",
        "hr": "Austrija",
        "fa": "اتریش"
      },
      "flag": "https://restcountries.eu/data/aut.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "AUT"
    }, {
      "name": "Azerbaijan",
      "topLevelDomain": [".az"],
      "alpha2Code": "AZ",
      "alpha3Code": "AZE",
      "callingCodes": ["994"],
      "capital": "Baku",
      "altSpellings": ["AZ", "Republic of Azerbaijan", "Azərbaycan Respublikası"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 9730500,
      "latlng": [40.5, 47.5],
      "demonym": "Azerbaijani",
      "area": 86600.0,
      "gini": 33.7,
      "timezones": ["UTC+04:00"],
      "borders": ["ARM", "GEO", "IRN", "RUS", "TUR"],
      "nativeName": "Azərbaycan",
      "numericCode": "031",
      "currencies": [{
        "code": "AZN",
        "name": "Azerbaijani manat",
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "az",
        "iso639_2": "aze",
        "name": "Azerbaijani",
        "nativeName": "azərbaycan dili"
      }],
      "translations": {
        "de": "Aserbaidschan",
        "es": "Azerbaiyán",
        "fr": "Azerbaïdjan",
        "ja": "アゼルバイジャン",
        "it": "Azerbaijan",
        "br": "Azerbaijão",
        "pt": "Azerbaijão",
        "nl": "Azerbeidzjan",
        "hr": "Azerbajdžan",
        "fa": "آذربایجان"
      },
      "flag": "https://restcountries.eu/data/aze.svg",
      "regionalBlocs": [],
      "cioc": "AZE"
    }, {
      "name": "Bahamas",
      "topLevelDomain": [".bs"],
      "alpha2Code": "BS",
      "alpha3Code": "BHS",
      "callingCodes": ["1242"],
      "capital": "Nassau",
      "altSpellings": ["BS", "Commonwealth of the Bahamas"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 378040,
      "latlng": [24.25, -76.0],
      "demonym": "Bahamian",
      "area": 13943.0,
      "gini": null,
      "timezones": ["UTC-05:00"],
      "borders": [],
      "nativeName": "Bahamas",
      "numericCode": "044",
      "currencies": [{
        "code": "BSD",
        "name": "Bahamian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Bahamas",
        "es": "Bahamas",
        "fr": "Bahamas",
        "ja": "バハマ",
        "it": "Bahamas",
        "br": "Bahamas",
        "pt": "Baamas",
        "nl": "Bahama’s",
        "hr": "Bahami",
        "fa": "باهاما"
      },
      "flag": "https://restcountries.eu/data/bhs.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "BAH"
    }, {
      "name": "Bahrain",
      "topLevelDomain": [".bh"],
      "alpha2Code": "BH",
      "alpha3Code": "BHR",
      "callingCodes": ["973"],
      "capital": "Manama",
      "altSpellings": ["BH", "Kingdom of Bahrain", "Mamlakat al-Baḥrayn"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 1404900,
      "latlng": [26.0, 50.55],
      "demonym": "Bahraini",
      "area": 765.0,
      "gini": null,
      "timezones": ["UTC+03:00"],
      "borders": [],
      "nativeName": "‏البحرين",
      "numericCode": "048",
      "currencies": [{
        "code": "BHD",
        "name": "Bahraini dinar",
        "symbol": ".د.ب"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Bahrain",
        "es": "Bahrein",
        "fr": "Bahreïn",
        "ja": "バーレーン",
        "it": "Bahrein",
        "br": "Bahrein",
        "pt": "Barém",
        "nl": "Bahrein",
        "hr": "Bahrein",
        "fa": "بحرین"
      },
      "flag": "https://restcountries.eu/data/bhr.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "BRN"
    }, {
      "name": "Bangladesh",
      "topLevelDomain": [".bd"],
      "alpha2Code": "BD",
      "alpha3Code": "BGD",
      "callingCodes": ["880"],
      "capital": "Dhaka",
      "altSpellings": ["BD", "People's Republic of Bangladesh", "Gônôprôjatôntri Bangladesh"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 161006790,
      "latlng": [24.0, 90.0],
      "demonym": "Bangladeshi",
      "area": 147570.0,
      "gini": 32.1,
      "timezones": ["UTC+06:00"],
      "borders": ["MMR", "IND"],
      "nativeName": "Bangladesh",
      "numericCode": "050",
      "currencies": [{
        "code": "BDT",
        "name": "Bangladeshi taka",
        "symbol": "৳"
      }],
      "languages": [{
        "iso639_1": "bn",
        "iso639_2": "ben",
        "name": "Bengali",
        "nativeName": "বাংলা"
      }],
      "translations": {
        "de": "Bangladesch",
        "es": "Bangladesh",
        "fr": "Bangladesh",
        "ja": "バングラデシュ",
        "it": "Bangladesh",
        "br": "Bangladesh",
        "pt": "Bangladeche",
        "nl": "Bangladesh",
        "hr": "Bangladeš",
        "fa": "بنگلادش"
      },
      "flag": "https://restcountries.eu/data/bgd.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "BAN"
    }, {
      "name": "Barbados",
      "topLevelDomain": [".bb"],
      "alpha2Code": "BB",
      "alpha3Code": "BRB",
      "callingCodes": ["1246"],
      "capital": "Bridgetown",
      "altSpellings": ["BB"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 285000,
      "latlng": [13.16666666, -59.53333333],
      "demonym": "Barbadian",
      "area": 430.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Barbados",
      "numericCode": "052",
      "currencies": [{
        "code": "BBD",
        "name": "Barbadian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Barbados",
        "es": "Barbados",
        "fr": "Barbade",
        "ja": "バルバドス",
        "it": "Barbados",
        "br": "Barbados",
        "pt": "Barbados",
        "nl": "Barbados",
        "hr": "Barbados",
        "fa": "باربادوس"
      },
      "flag": "https://restcountries.eu/data/brb.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "BAR"
    }, {
      "name": "Belarus",
      "topLevelDomain": [".by"],
      "alpha2Code": "BY",
      "alpha3Code": "BLR",
      "callingCodes": ["375"],
      "capital": "Minsk",
      "altSpellings": ["BY", "Bielaruś", "Republic of Belarus", "Белоруссия", "Республика Беларусь", "Belorussiya", "Respublika Belarus’"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 9498700,
      "latlng": [53.0, 28.0],
      "demonym": "Belarusian",
      "area": 207600.0,
      "gini": 26.5,
      "timezones": ["UTC+03:00"],
      "borders": ["LVA", "LTU", "POL", "RUS", "UKR"],
      "nativeName": "Белару́сь",
      "numericCode": "112",
      "currencies": [{
        "code": "BYN",
        "name": "New Belarusian ruble",
        "symbol": "Br"
      }, {
        "code": "BYR",
        "name": "Old Belarusian ruble",
        "symbol": "Br"
      }],
      "languages": [{
        "iso639_1": "be",
        "iso639_2": "bel",
        "name": "Belarusian",
        "nativeName": "беларуская мова"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Weißrussland",
        "es": "Bielorrusia",
        "fr": "Biélorussie",
        "ja": "ベラルーシ",
        "it": "Bielorussia",
        "br": "Bielorrússia",
        "pt": "Bielorrússia",
        "nl": "Wit-Rusland",
        "hr": "Bjelorusija",
        "fa": "بلاروس"
      },
      "flag": "https://restcountries.eu/data/blr.svg",
      "regionalBlocs": [{
        "acronym": "EEU",
        "name": "Eurasian Economic Union",
        "otherAcronyms": ["EAEU"],
        "otherNames": []
      }],
      "cioc": "BLR"
    }, {
      "name": "Belgium",
      "topLevelDomain": [".be"],
      "alpha2Code": "BE",
      "alpha3Code": "BEL",
      "callingCodes": ["32"],
      "capital": "Brussels",
      "altSpellings": ["BE", "België", "Belgie", "Belgien", "Belgique", "Kingdom of Belgium", "Koninkrijk België", "Royaume de Belgique", "Königreich Belgien"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 11319511,
      "latlng": [50.83333333, 4.0],
      "demonym": "Belgian",
      "area": 30528.0,
      "gini": 33.0,
      "timezones": ["UTC+01:00"],
      "borders": ["FRA", "DEU", "LUX", "NLD"],
      "nativeName": "België",
      "numericCode": "056",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }],
      "translations": {
        "de": "Belgien",
        "es": "Bélgica",
        "fr": "Belgique",
        "ja": "ベルギー",
        "it": "Belgio",
        "br": "Bélgica",
        "pt": "Bélgica",
        "nl": "België",
        "hr": "Belgija",
        "fa": "بلژیک"
      },
      "flag": "https://restcountries.eu/data/bel.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "BEL"
    }, {
      "name": "Belize",
      "topLevelDomain": [".bz"],
      "alpha2Code": "BZ",
      "alpha3Code": "BLZ",
      "callingCodes": ["501"],
      "capital": "Belmopan",
      "altSpellings": ["BZ"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 370300,
      "latlng": [17.25, -88.75],
      "demonym": "Belizean",
      "area": 22966.0,
      "gini": 53.1,
      "timezones": ["UTC-06:00"],
      "borders": ["GTM", "MEX"],
      "nativeName": "Belize",
      "numericCode": "084",
      "currencies": [{
        "code": "BZD",
        "name": "Belize dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Belize",
        "es": "Belice",
        "fr": "Belize",
        "ja": "ベリーズ",
        "it": "Belize",
        "br": "Belize",
        "pt": "Belize",
        "nl": "Belize",
        "hr": "Belize",
        "fa": "بلیز"
      },
      "flag": "https://restcountries.eu/data/blz.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }, {
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "BIZ"
    }, {
      "name": "Benin",
      "topLevelDomain": [".bj"],
      "alpha2Code": "BJ",
      "alpha3Code": "BEN",
      "callingCodes": ["229"],
      "capital": "Porto-Novo",
      "altSpellings": ["BJ", "Republic of Benin", "République du Bénin"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 10653654,
      "latlng": [9.5, 2.25],
      "demonym": "Beninese",
      "area": 112622.0,
      "gini": 38.6,
      "timezones": ["UTC+01:00"],
      "borders": ["BFA", "NER", "NGA", "TGO"],
      "nativeName": "Bénin",
      "numericCode": "204",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Benin",
        "es": "Benín",
        "fr": "Bénin",
        "ja": "ベナン",
        "it": "Benin",
        "br": "Benin",
        "pt": "Benim",
        "nl": "Benin",
        "hr": "Benin",
        "fa": "بنین"
      },
      "flag": "https://restcountries.eu/data/ben.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "BEN"
    }, {
      "name": "Bermuda",
      "topLevelDomain": [".bm"],
      "alpha2Code": "BM",
      "alpha3Code": "BMU",
      "callingCodes": ["1441"],
      "capital": "Hamilton",
      "altSpellings": ["BM", "The Islands of Bermuda", "The Bermudas", "Somers Isles"],
      "region": "Americas",
      "subregion": "Northern America",
      "population": 61954,
      "latlng": [32.33333333, -64.75],
      "demonym": "Bermudian",
      "area": 54.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Bermuda",
      "numericCode": "060",
      "currencies": [{
        "code": "BMD",
        "name": "Bermudian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Bermuda",
        "es": "Bermudas",
        "fr": "Bermudes",
        "ja": "バミューダ",
        "it": "Bermuda",
        "br": "Bermudas",
        "pt": "Bermudas",
        "nl": "Bermuda",
        "hr": "Bermudi",
        "fa": "برمودا"
      },
      "flag": "https://restcountries.eu/data/bmu.svg",
      "regionalBlocs": [],
      "cioc": "BER"
    }, {
      "name": "Bhutan",
      "topLevelDomain": [".bt"],
      "alpha2Code": "BT",
      "alpha3Code": "BTN",
      "callingCodes": ["975"],
      "capital": "Thimphu",
      "altSpellings": ["BT", "Kingdom of Bhutan"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 775620,
      "latlng": [27.5, 90.5],
      "demonym": "Bhutanese",
      "area": 38394.0,
      "gini": 38.1,
      "timezones": ["UTC+06:00"],
      "borders": ["CHN", "IND"],
      "nativeName": "ʼbrug-yul",
      "numericCode": "064",
      "currencies": [{
        "code": "BTN",
        "name": "Bhutanese ngultrum",
        "symbol": "Nu."
      }, {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }],
      "languages": [{
        "iso639_1": "dz",
        "iso639_2": "dzo",
        "name": "Dzongkha",
        "nativeName": "རྫོང་ཁ"
      }],
      "translations": {
        "de": "Bhutan",
        "es": "Bután",
        "fr": "Bhoutan",
        "ja": "ブータン",
        "it": "Bhutan",
        "br": "Butão",
        "pt": "Butão",
        "nl": "Bhutan",
        "hr": "Butan",
        "fa": "بوتان"
      },
      "flag": "https://restcountries.eu/data/btn.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "BHU"
    }, {
      "name": "Bolivia (Plurinational State of)",
      "topLevelDomain": [".bo"],
      "alpha2Code": "BO",
      "alpha3Code": "BOL",
      "callingCodes": ["591"],
      "capital": "Sucre",
      "altSpellings": ["BO", "Buliwya", "Wuliwya", "Plurinational State of Bolivia", "Estado Plurinacional de Bolivia", "Buliwya Mamallaqta", "Wuliwya Suyu", "Tetã Volívia"],
      "region": "Americas",
      "subregion": "South America",
      "population": 10985059,
      "latlng": [-17.0, -65.0],
      "demonym": "Bolivian",
      "area": 1098581.0,
      "gini": 56.3,
      "timezones": ["UTC-04:00"],
      "borders": ["ARG", "BRA", "CHL", "PRY", "PER"],
      "nativeName": "Bolivia",
      "numericCode": "068",
      "currencies": [{
        "code": "BOB",
        "name": "Bolivian boliviano",
        "symbol": "Bs."
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }, {
        "iso639_1": "ay",
        "iso639_2": "aym",
        "name": "Aymara",
        "nativeName": "aymar aru"
      }, {
        "iso639_1": "qu",
        "iso639_2": "que",
        "name": "Quechua",
        "nativeName": "Runa Simi"
      }],
      "translations": {
        "de": "Bolivien",
        "es": "Bolivia",
        "fr": "Bolivie",
        "ja": "ボリビア多民族国",
        "it": "Bolivia",
        "br": "Bolívia",
        "pt": "Bolívia",
        "nl": "Bolivia",
        "hr": "Bolivija",
        "fa": "بولیوی"
      },
      "flag": "https://restcountries.eu/data/bol.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "BOL"
    }, {
      "name": "Bonaire, Sint Eustatius and Saba",
      "topLevelDomain": [".an", ".nl"],
      "alpha2Code": "BQ",
      "alpha3Code": "BES",
      "callingCodes": ["5997"],
      "capital": "Kralendijk",
      "altSpellings": ["BQ", "Boneiru"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 17408,
      "latlng": [12.15, -68.266667],
      "demonym": "Dutch",
      "area": 294.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Bonaire",
      "numericCode": "535",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }],
      "translations": {
        "de": "Bonaire, Sint Eustatius und Saba",
        "es": null,
        "fr": "Bonaire, Saint-Eustache et Saba",
        "ja": null,
        "it": "Bonaire, Saint-Eustache e Saba",
        "br": "Bonaire",
        "pt": "Bonaire",
        "nl": null,
        "hr": null,
        "fa": "بونیر"
      },
      "flag": "https://restcountries.eu/data/bes.svg",
      "regionalBlocs": [],
      "cioc": null
    }, {
      "name": "Bosnia and Herzegovina",
      "topLevelDomain": [".ba"],
      "alpha2Code": "BA",
      "alpha3Code": "BIH",
      "callingCodes": ["387"],
      "capital": "Sarajevo",
      "altSpellings": ["BA", "Bosnia-Herzegovina", "Босна и Херцеговина"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 3531159,
      "latlng": [44.0, 18.0],
      "demonym": "Bosnian, Herzegovinian",
      "area": 51209.0,
      "gini": 36.2,
      "timezones": ["UTC+01:00"],
      "borders": ["HRV", "MNE", "SRB"],
      "nativeName": "Bosna i Hercegovina",
      "numericCode": "070",
      "currencies": [{
        "code": "BAM",
        "name": "Bosnia and Herzegovina convertible mark",
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "bs",
        "iso639_2": "bos",
        "name": "Bosnian",
        "nativeName": "bosanski jezik"
      }, {
        "iso639_1": "hr",
        "iso639_2": "hrv",
        "name": "Croatian",
        "nativeName": "hrvatski jezik"
      }, {
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      }],
      "translations": {
        "de": "Bosnien und Herzegowina",
        "es": "Bosnia y Herzegovina",
        "fr": "Bosnie-Herzégovine",
        "ja": "ボスニア・ヘルツェゴビナ",
        "it": "Bosnia ed Erzegovina",
        "br": "Bósnia e Herzegovina",
        "pt": "Bósnia e Herzegovina",
        "nl": "Bosnië en Herzegovina",
        "hr": "Bosna i Hercegovina",
        "fa": "بوسنی و هرزگوین"
      },
      "flag": "https://restcountries.eu/data/bih.svg",
      "regionalBlocs": [{
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "BIH"
    }, {
      "name": "Botswana",
      "topLevelDomain": [".bw"],
      "alpha2Code": "BW",
      "alpha3Code": "BWA",
      "callingCodes": ["267"],
      "capital": "Gaborone",
      "altSpellings": ["BW", "Republic of Botswana", "Lefatshe la Botswana"],
      "region": "Africa",
      "subregion": "Southern Africa",
      "population": 2141206,
      "latlng": [-22.0, 24.0],
      "demonym": "Motswana",
      "area": 582000.0,
      "gini": 61.0,
      "timezones": ["UTC+02:00"],
      "borders": ["NAM", "ZAF", "ZMB", "ZWE"],
      "nativeName": "Botswana",
      "numericCode": "072",
      "currencies": [{
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "tn",
        "iso639_2": "tsn",
        "name": "Tswana",
        "nativeName": "Setswana"
      }],
      "translations": {
        "de": "Botswana",
        "es": "Botswana",
        "fr": "Botswana",
        "ja": "ボツワナ",
        "it": "Botswana",
        "br": "Botsuana",
        "pt": "Botsuana",
        "nl": "Botswana",
        "hr": "Bocvana",
        "fa": "بوتسوانا"
      },
      "flag": "https://restcountries.eu/data/bwa.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "BOT"
    }, {
      "name": "Bouvet Island",
      "topLevelDomain": [".bv"],
      "alpha2Code": "BV",
      "alpha3Code": "BVT",
      "callingCodes": [""],
      "capital": "",
      "altSpellings": ["BV", "Bouvetøya", "Bouvet-øya"],
      "region": "",
      "subregion": "",
      "population": 0,
      "latlng": [-54.43333333, 3.4],
      "demonym": "",
      "area": 49.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": [],
      "nativeName": "Bouvetøya",
      "numericCode": "074",
      "currencies": [{
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "no",
        "iso639_2": "nor",
        "name": "Norwegian",
        "nativeName": "Norsk"
      }, {
        "iso639_1": "nb",
        "iso639_2": "nob",
        "name": "Norwegian Bokmål",
        "nativeName": "Norsk bokmål"
      }, {
        "iso639_1": "nn",
        "iso639_2": "nno",
        "name": "Norwegian Nynorsk",
        "nativeName": "Norsk nynorsk"
      }],
      "translations": {
        "de": "Bouvetinsel",
        "es": "Isla Bouvet",
        "fr": "Île Bouvet",
        "ja": "ブーベ島",
        "it": "Isola Bouvet",
        "br": "Ilha Bouvet",
        "pt": "Ilha Bouvet",
        "nl": "Bouveteiland",
        "hr": "Otok Bouvet",
        "fa": "جزیره بووه"
      },
      "flag": "https://restcountries.eu/data/bvt.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Brazil",
      "topLevelDomain": [".br"],
      "alpha2Code": "BR",
      "alpha3Code": "BRA",
      "callingCodes": ["55"],
      "capital": "Brasília",
      "altSpellings": ["BR", "Brasil", "Federative Republic of Brazil", "República Federativa do Brasil"],
      "region": "Americas",
      "subregion": "South America",
      "population": 206135893,
      "latlng": [-10.0, -55.0],
      "demonym": "Brazilian",
      "area": 8515767.0,
      "gini": 54.7,
      "timezones": ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
      "borders": ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
      "nativeName": "Brasil",
      "numericCode": "076",
      "currencies": [{
        "code": "BRL",
        "name": "Brazilian real",
        "symbol": "R$"
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Brasilien",
        "es": "Brasil",
        "fr": "Brésil",
        "ja": "ブラジル",
        "it": "Brasile",
        "br": "Brasil",
        "pt": "Brasil",
        "nl": "Brazilië",
        "hr": "Brazil",
        "fa": "برزیل"
      },
      "flag": "https://restcountries.eu/data/bra.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "BRA"
    }, {
      "name": "British Indian Ocean Territory",
      "topLevelDomain": [".io"],
      "alpha2Code": "IO",
      "alpha3Code": "IOT",
      "callingCodes": ["246"],
      "capital": "Diego Garcia",
      "altSpellings": ["IO"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 3000,
      "latlng": [-6.0, 71.5],
      "demonym": "Indian",
      "area": 60.0,
      "gini": null,
      "timezones": ["UTC+06:00"],
      "borders": [],
      "nativeName": "British Indian Ocean Territory",
      "numericCode": "086",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Britisches Territorium im Indischen Ozean",
        "es": "Territorio Británico del Océano Índico",
        "fr": "Territoire britannique de l'océan Indien",
        "ja": "イギリス領インド洋地域",
        "it": "Territorio britannico dell'oceano indiano",
        "br": "Território Britânico do Oceano íÍdico",
        "pt": "Território Britânico do Oceano Índico",
        "nl": "Britse Gebieden in de Indische Oceaan",
        "hr": "Britanski Indijskooceanski teritorij",
        "fa": "قلمرو بریتانیا در اقیانوس هند"
      },
      "flag": "https://restcountries.eu/data/iot.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": ""
    }, {
      "name": "United States Minor Outlying Islands",
      "topLevelDomain": [".us"],
      "alpha2Code": "UM",
      "alpha3Code": "UMI",
      "callingCodes": [""],
      "capital": "",
      "altSpellings": ["UM"],
      "region": "Americas",
      "subregion": "Northern America",
      "population": 300,
      "latlng": [],
      "demonym": "American",
      "area": null,
      "gini": null,
      "timezones": ["UTC-11:00", "UTC-10:00", "UTC+12:00"],
      "borders": [],
      "nativeName": "United States Minor Outlying Islands",
      "numericCode": "581",
      "currencies": [{
        "code": "USD",
        "name": "United States Dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Kleinere Inselbesitzungen der Vereinigten Staaten",
        "es": "Islas Ultramarinas Menores de Estados Unidos",
        "fr": "Îles mineures éloignées des États-Unis",
        "ja": "合衆国領有小離島",
        "it": "Isole minori esterne degli Stati Uniti d'America",
        "br": "Ilhas Menores Distantes dos Estados Unidos",
        "pt": "Ilhas Menores Distantes dos Estados Unidos",
        "nl": "Kleine afgelegen eilanden van de Verenigde Staten",
        "hr": "Mali udaljeni otoci SAD-a",
        "fa": "جزایر کوچک حاشیه‌ای ایالات متحده آمریکا"
      },
      "flag": "https://restcountries.eu/data/umi.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Virgin Islands (British)",
      "topLevelDomain": [".vg"],
      "alpha2Code": "VG",
      "alpha3Code": "VGB",
      "callingCodes": ["1284"],
      "capital": "Road Town",
      "altSpellings": ["VG"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 28514,
      "latlng": [18.431383, -64.62305],
      "demonym": "Virgin Islander",
      "area": 151.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "British Virgin Islands",
      "numericCode": "092",
      "currencies": [{
        "code": null,
        "name": "[D]",
        "symbol": "$"
      }, {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Britische Jungferninseln",
        "es": "Islas Vírgenes del Reino Unido",
        "fr": "Îles Vierges britanniques",
        "ja": "イギリス領ヴァージン諸島",
        "it": "Isole Vergini Britanniche",
        "br": "Ilhas Virgens Britânicas",
        "pt": "Ilhas Virgens Britânicas",
        "nl": "Britse Maagdeneilanden",
        "hr": "Britanski Djevičanski Otoci",
        "fa": "جزایر ویرجین بریتانیا"
      },
      "flag": "https://restcountries.eu/data/vgb.svg",
      "regionalBlocs": [],
      "cioc": "IVB"
    }, {
      "name": "Virgin Islands (U.S.)",
      "topLevelDomain": [".vi"],
      "alpha2Code": "VI",
      "alpha3Code": "VIR",
      "callingCodes": ["1 340"],
      "capital": "Charlotte Amalie",
      "altSpellings": ["VI", "USVI", "American Virgin Islands", "U.S. Virgin Islands"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 114743,
      "latlng": [18.34, -64.93],
      "demonym": "Virgin Islander",
      "area": 346.36,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Virgin Islands of the United States",
      "numericCode": "850",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Amerikanische Jungferninseln",
        "es": "Islas Vírgenes de los Estados Unidos",
        "fr": "Îles Vierges des États-Unis",
        "ja": "アメリカ領ヴァージン諸島",
        "it": "Isole Vergini americane",
        "br": "Ilhas Virgens Americanas",
        "pt": "Ilhas Virgens Americanas",
        "nl": "Verenigde Staten Maagdeneilanden",
        "hr": null,
        "fa": "جزایر ویرجین آمریکا"
      },
      "flag": "https://restcountries.eu/data/vir.svg",
      "regionalBlocs": [],
      "cioc": "ISV"
    }, {
      "name": "Brunei Darussalam",
      "topLevelDomain": [".bn"],
      "alpha2Code": "BN",
      "alpha3Code": "BRN",
      "callingCodes": ["673"],
      "capital": "Bandar Seri Begawan",
      "altSpellings": ["BN", "Nation of Brunei", " the Abode of Peace"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 411900,
      "latlng": [4.5, 114.66666666],
      "demonym": "Bruneian",
      "area": 5765.0,
      "gini": null,
      "timezones": ["UTC+08:00"],
      "borders": ["MYS"],
      "nativeName": "Negara Brunei Darussalam",
      "numericCode": "096",
      "currencies": [{
        "code": "BND",
        "name": "Brunei dollar",
        "symbol": "$"
      }, {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "ms",
        "iso639_2": "msa",
        "name": "Malay",
        "nativeName": "bahasa Melayu"
      }],
      "translations": {
        "de": "Brunei",
        "es": "Brunei",
        "fr": "Brunei",
        "ja": "ブルネイ・ダルサラーム",
        "it": "Brunei",
        "br": "Brunei",
        "pt": "Brunei",
        "nl": "Brunei",
        "hr": "Brunej",
        "fa": "برونئی"
      },
      "flag": "https://restcountries.eu/data/brn.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "BRU"
    }, {
      "name": "Bulgaria",
      "topLevelDomain": [".bg"],
      "alpha2Code": "BG",
      "alpha3Code": "BGR",
      "callingCodes": ["359"],
      "capital": "Sofia",
      "altSpellings": ["BG", "Republic of Bulgaria", "Република България"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 7153784,
      "latlng": [43.0, 25.0],
      "demonym": "Bulgarian",
      "area": 110879.0,
      "gini": 28.2,
      "timezones": ["UTC+02:00"],
      "borders": ["GRC", "MKD", "ROU", "SRB", "TUR"],
      "nativeName": "България",
      "numericCode": "100",
      "currencies": [{
        "code": "BGN",
        "name": "Bulgarian lev",
        "symbol": "лв"
      }],
      "languages": [{
        "iso639_1": "bg",
        "iso639_2": "bul",
        "name": "Bulgarian",
        "nativeName": "български език"
      }],
      "translations": {
        "de": "Bulgarien",
        "es": "Bulgaria",
        "fr": "Bulgarie",
        "ja": "ブルガリア",
        "it": "Bulgaria",
        "br": "Bulgária",
        "pt": "Bulgária",
        "nl": "Bulgarije",
        "hr": "Bugarska",
        "fa": "بلغارستان"
      },
      "flag": "https://restcountries.eu/data/bgr.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "BUL"
    }, {
      "name": "Burkina Faso",
      "topLevelDomain": [".bf"],
      "alpha2Code": "BF",
      "alpha3Code": "BFA",
      "callingCodes": ["226"],
      "capital": "Ouagadougou",
      "altSpellings": ["BF"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 19034397,
      "latlng": [13.0, -2.0],
      "demonym": "Burkinabe",
      "area": 272967.0,
      "gini": 39.8,
      "timezones": ["UTC"],
      "borders": ["BEN", "CIV", "GHA", "MLI", "NER", "TGO"],
      "nativeName": "Burkina Faso",
      "numericCode": "854",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "ff",
        "iso639_2": "ful",
        "name": "Fula",
        "nativeName": "Fulfulde"
      }],
      "translations": {
        "de": "Burkina Faso",
        "es": "Burkina Faso",
        "fr": "Burkina Faso",
        "ja": "ブルキナファソ",
        "it": "Burkina Faso",
        "br": "Burkina Faso",
        "pt": "Burquina Faso",
        "nl": "Burkina Faso",
        "hr": "Burkina Faso",
        "fa": "بورکینافاسو"
      },
      "flag": "https://restcountries.eu/data/bfa.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "BUR"
    }, {
      "name": "Burundi",
      "topLevelDomain": [".bi"],
      "alpha2Code": "BI",
      "alpha3Code": "BDI",
      "callingCodes": ["257"],
      "capital": "Bujumbura",
      "altSpellings": ["BI", "Republic of Burundi", "Republika y'Uburundi", "République du Burundi"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 10114505,
      "latlng": [-3.5, 30.0],
      "demonym": "Burundian",
      "area": 27834.0,
      "gini": 33.3,
      "timezones": ["UTC+02:00"],
      "borders": ["COD", "RWA", "TZA"],
      "nativeName": "Burundi",
      "numericCode": "108",
      "currencies": [{
        "code": "BIF",
        "name": "Burundian franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "rn",
        "iso639_2": "run",
        "name": "Kirundi",
        "nativeName": "Ikirundi"
      }],
      "translations": {
        "de": "Burundi",
        "es": "Burundi",
        "fr": "Burundi",
        "ja": "ブルンジ",
        "it": "Burundi",
        "br": "Burundi",
        "pt": "Burúndi",
        "nl": "Burundi",
        "hr": "Burundi",
        "fa": "بوروندی"
      },
      "flag": "https://restcountries.eu/data/bdi.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "BDI"
    }, {
      "name": "Cambodia",
      "topLevelDomain": [".kh"],
      "alpha2Code": "KH",
      "alpha3Code": "KHM",
      "callingCodes": ["855"],
      "capital": "Phnom Penh",
      "altSpellings": ["KH", "Kingdom of Cambodia"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 15626444,
      "latlng": [13.0, 105.0],
      "demonym": "Cambodian",
      "area": 181035.0,
      "gini": 37.9,
      "timezones": ["UTC+07:00"],
      "borders": ["LAO", "THA", "VNM"],
      "nativeName": "Kâmpŭchéa",
      "numericCode": "116",
      "currencies": [{
        "code": "KHR",
        "name": "Cambodian riel",
        "symbol": "៛"
      }, {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "km",
        "iso639_2": "khm",
        "name": "Khmer",
        "nativeName": "ខ្មែរ"
      }],
      "translations": {
        "de": "Kambodscha",
        "es": "Camboya",
        "fr": "Cambodge",
        "ja": "カンボジア",
        "it": "Cambogia",
        "br": "Camboja",
        "pt": "Camboja",
        "nl": "Cambodja",
        "hr": "Kambodža",
        "fa": "کامبوج"
      },
      "flag": "https://restcountries.eu/data/khm.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "CAM"
    }, {
      "name": "Cameroon",
      "topLevelDomain": [".cm"],
      "alpha2Code": "CM",
      "alpha3Code": "CMR",
      "callingCodes": ["237"],
      "capital": "Yaoundé",
      "altSpellings": ["CM", "Republic of Cameroon", "République du Cameroun"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 22709892,
      "latlng": [6.0, 12.0],
      "demonym": "Cameroonian",
      "area": 475442.0,
      "gini": 38.9,
      "timezones": ["UTC+01:00"],
      "borders": ["CAF", "TCD", "COG", "GNQ", "GAB", "NGA"],
      "nativeName": "Cameroon",
      "numericCode": "120",
      "currencies": [{
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Kamerun",
        "es": "Camerún",
        "fr": "Cameroun",
        "ja": "カメルーン",
        "it": "Camerun",
        "br": "Camarões",
        "pt": "Camarões",
        "nl": "Kameroen",
        "hr": "Kamerun",
        "fa": "کامرون"
      },
      "flag": "https://restcountries.eu/data/cmr.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "CMR"
    }, {
      "name": "Canada",
      "topLevelDomain": [".ca"],
      "alpha2Code": "CA",
      "alpha3Code": "CAN",
      "callingCodes": ["1"],
      "capital": "Ottawa",
      "altSpellings": ["CA"],
      "region": "Americas",
      "subregion": "Northern America",
      "population": 36155487,
      "latlng": [60.0, -95.0],
      "demonym": "Canadian",
      "area": 9984670.0,
      "gini": 32.6,
      "timezones": ["UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC-03:30"],
      "borders": ["USA"],
      "nativeName": "Canada",
      "numericCode": "124",
      "currencies": [{
        "code": "CAD",
        "name": "Canadian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Kanada",
        "es": "Canadá",
        "fr": "Canada",
        "ja": "カナダ",
        "it": "Canada",
        "br": "Canadá",
        "pt": "Canadá",
        "nl": "Canada",
        "hr": "Kanada",
        "fa": "کانادا"
      },
      "flag": "https://restcountries.eu/data/can.svg",
      "regionalBlocs": [{
        "acronym": "NAFTA",
        "name": "North American Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": ["Tratado de Libre Comercio de América del Norte", "Accord de Libre-échange Nord-Américain"]
      }],
      "cioc": "CAN"
    }, {
      "name": "Cabo Verde",
      "topLevelDomain": [".cv"],
      "alpha2Code": "CV",
      "alpha3Code": "CPV",
      "callingCodes": ["238"],
      "capital": "Praia",
      "altSpellings": ["CV", "Republic of Cabo Verde", "República de Cabo Verde"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 531239,
      "latlng": [16.0, -24.0],
      "demonym": "Cape Verdian",
      "area": 4033.0,
      "gini": 50.5,
      "timezones": ["UTC-01:00"],
      "borders": [],
      "nativeName": "Cabo Verde",
      "numericCode": "132",
      "currencies": [{
        "code": "CVE",
        "name": "Cape Verdean escudo",
        "symbol": "Esc"
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Kap Verde",
        "es": "Cabo Verde",
        "fr": "Cap Vert",
        "ja": "カーボベルデ",
        "it": "Capo Verde",
        "br": "Cabo Verde",
        "pt": "Cabo Verde",
        "nl": "Kaapverdië",
        "hr": "Zelenortska Republika",
        "fa": "کیپ ورد"
      },
      "flag": "https://restcountries.eu/data/cpv.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "CPV"
    }, {
      "name": "Cayman Islands",
      "topLevelDomain": [".ky"],
      "alpha2Code": "KY",
      "alpha3Code": "CYM",
      "callingCodes": ["1345"],
      "capital": "George Town",
      "altSpellings": ["KY"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 58238,
      "latlng": [19.5, -80.5],
      "demonym": "Caymanian",
      "area": 264.0,
      "gini": null,
      "timezones": ["UTC-05:00"],
      "borders": [],
      "nativeName": "Cayman Islands",
      "numericCode": "136",
      "currencies": [{
        "code": "KYD",
        "name": "Cayman Islands dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Kaimaninseln",
        "es": "Islas Caimán",
        "fr": "Îles Caïmans",
        "ja": "ケイマン諸島",
        "it": "Isole Cayman",
        "br": "Ilhas Cayman",
        "pt": "Ilhas Caimão",
        "nl": "Caymaneilanden",
        "hr": "Kajmanski otoci",
        "fa": "جزایر کیمن"
      },
      "flag": "https://restcountries.eu/data/cym.svg",
      "regionalBlocs": [],
      "cioc": "CAY"
    }, {
      "name": "Central African Republic",
      "topLevelDomain": [".cf"],
      "alpha2Code": "CF",
      "alpha3Code": "CAF",
      "callingCodes": ["236"],
      "capital": "Bangui",
      "altSpellings": ["CF", "Central African Republic", "République centrafricaine"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 4998000,
      "latlng": [7.0, 21.0],
      "demonym": "Central African",
      "area": 622984.0,
      "gini": 56.3,
      "timezones": ["UTC+01:00"],
      "borders": ["CMR", "TCD", "COD", "COG", "SSD", "SDN"],
      "nativeName": "Ködörösêse tî Bêafrîka",
      "numericCode": "140",
      "currencies": [{
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "sg",
        "iso639_2": "sag",
        "name": "Sango",
        "nativeName": "yângâ tî sängö"
      }],
      "translations": {
        "de": "Zentralafrikanische Republik",
        "es": "República Centroafricana",
        "fr": "République centrafricaine",
        "ja": "中央アフリカ共和国",
        "it": "Repubblica Centrafricana",
        "br": "República Centro-Africana",
        "pt": "República Centro-Africana",
        "nl": "Centraal-Afrikaanse Republiek",
        "hr": "Srednjoafrička Republika",
        "fa": "جمهوری آفریقای مرکزی"
      },
      "flag": "https://restcountries.eu/data/caf.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "CAF"
    }, {
      "name": "Chad",
      "topLevelDomain": [".td"],
      "alpha2Code": "TD",
      "alpha3Code": "TCD",
      "callingCodes": ["235"],
      "capital": "N'Djamena",
      "altSpellings": ["TD", "Tchad", "Republic of Chad", "République du Tchad"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 14497000,
      "latlng": [15.0, 19.0],
      "demonym": "Chadian",
      "area": 1284000.0,
      "gini": 39.8,
      "timezones": ["UTC+01:00"],
      "borders": ["CMR", "CAF", "LBY", "NER", "NGA", "SSD"],
      "nativeName": "Tchad",
      "numericCode": "148",
      "currencies": [{
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Tschad",
        "es": "Chad",
        "fr": "Tchad",
        "ja": "チャド",
        "it": "Ciad",
        "br": "Chade",
        "pt": "Chade",
        "nl": "Tsjaad",
        "hr": "Čad",
        "fa": "چاد"
      },
      "flag": "https://restcountries.eu/data/tcd.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "CHA"
    }, {
      "name": "Chile",
      "topLevelDomain": [".cl"],
      "alpha2Code": "CL",
      "alpha3Code": "CHL",
      "callingCodes": ["56"],
      "capital": "Santiago",
      "altSpellings": ["CL", "Republic of Chile", "República de Chile"],
      "region": "Americas",
      "subregion": "South America",
      "population": 18191900,
      "latlng": [-30.0, -71.0],
      "demonym": "Chilean",
      "area": 756102.0,
      "gini": 52.1,
      "timezones": ["UTC-06:00", "UTC-04:00"],
      "borders": ["ARG", "BOL", "PER"],
      "nativeName": "Chile",
      "numericCode": "152",
      "currencies": [{
        "code": "CLP",
        "name": "Chilean peso",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Chile",
        "es": "Chile",
        "fr": "Chili",
        "ja": "チリ",
        "it": "Cile",
        "br": "Chile",
        "pt": "Chile",
        "nl": "Chili",
        "hr": "Čile",
        "fa": "شیلی"
      },
      "flag": "https://restcountries.eu/data/chl.svg",
      "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherAcronyms": [],
        "otherNames": ["Alianza del Pacífico"]
      }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "CHI"
    }, {
      "name": "China",
      "topLevelDomain": [".cn"],
      "alpha2Code": "CN",
      "alpha3Code": "CHN",
      "callingCodes": ["86"],
      "capital": "Beijing",
      "altSpellings": ["CN", "Zhōngguó", "Zhongguo", "Zhonghua", "People's Republic of China", "中华人民共和国", "Zhōnghuá Rénmín Gònghéguó"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 1377422166,
      "latlng": [35.0, 105.0],
      "demonym": "Chinese",
      "area": 9640011.0,
      "gini": 47.0,
      "timezones": ["UTC+08:00"],
      "borders": ["AFG", "BTN", "MMR", "HKG", "IND", "KAZ", "PRK", "KGZ", "LAO", "MAC", "MNG", "PAK", "RUS", "TJK", "VNM"],
      "nativeName": "中国",
      "numericCode": "156",
      "currencies": [{
        "code": "CNY",
        "name": "Chinese yuan",
        "symbol": "¥"
      }],
      "languages": [{
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }],
      "translations": {
        "de": "China",
        "es": "China",
        "fr": "Chine",
        "ja": "中国",
        "it": "Cina",
        "br": "China",
        "pt": "China",
        "nl": "China",
        "hr": "Kina",
        "fa": "چین"
      },
      "flag": "https://restcountries.eu/data/chn.svg",
      "regionalBlocs": [],
      "cioc": "CHN"
    }, {
      "name": "Christmas Island",
      "topLevelDomain": [".cx"],
      "alpha2Code": "CX",
      "alpha3Code": "CXR",
      "callingCodes": ["61"],
      "capital": "Flying Fish Cove",
      "altSpellings": ["CX", "Territory of Christmas Island"],
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "population": 2072,
      "latlng": [-10.5, 105.66666666],
      "demonym": "Christmas Island",
      "area": 135.0,
      "gini": null,
      "timezones": ["UTC+07:00"],
      "borders": [],
      "nativeName": "Christmas Island",
      "numericCode": "162",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Weihnachtsinsel",
        "es": "Isla de Navidad",
        "fr": "Île Christmas",
        "ja": "クリスマス島",
        "it": "Isola di Natale",
        "br": "Ilha Christmas",
        "pt": "Ilha do Natal",
        "nl": "Christmaseiland",
        "hr": "Božićni otok",
        "fa": "جزیره کریسمس"
      },
      "flag": "https://restcountries.eu/data/cxr.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Cocos (Keeling) Islands",
      "topLevelDomain": [".cc"],
      "alpha2Code": "CC",
      "alpha3Code": "CCK",
      "callingCodes": ["61"],
      "capital": "West Island",
      "altSpellings": ["CC", "Territory of the Cocos (Keeling) Islands", "Keeling Islands"],
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "population": 550,
      "latlng": [-12.5, 96.83333333],
      "demonym": "Cocos Islander",
      "area": 14.0,
      "gini": null,
      "timezones": ["UTC+06:30"],
      "borders": [],
      "nativeName": "Cocos (Keeling) Islands",
      "numericCode": "166",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Kokosinseln",
        "es": "Islas Cocos o Islas Keeling",
        "fr": "Îles Cocos",
        "ja": "ココス（キーリング）諸島",
        "it": "Isole Cocos e Keeling",
        "br": "Ilhas Cocos",
        "pt": "Ilhas dos Cocos",
        "nl": "Cocoseilanden",
        "hr": "Kokosovi Otoci",
        "fa": "جزایر کوکوس"
      },
      "flag": "https://restcountries.eu/data/cck.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Colombia",
      "topLevelDomain": [".co"],
      "alpha2Code": "CO",
      "alpha3Code": "COL",
      "callingCodes": ["57"],
      "capital": "Bogotá",
      "altSpellings": ["CO", "Republic of Colombia", "República de Colombia"],
      "region": "Americas",
      "subregion": "South America",
      "population": 48759958,
      "latlng": [4.0, -72.0],
      "demonym": "Colombian",
      "area": 1141748.0,
      "gini": 55.9,
      "timezones": ["UTC-05:00"],
      "borders": ["BRA", "ECU", "PAN", "PER", "VEN"],
      "nativeName": "Colombia",
      "numericCode": "170",
      "currencies": [{
        "code": "COP",
        "name": "Colombian peso",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Kolumbien",
        "es": "Colombia",
        "fr": "Colombie",
        "ja": "コロンビア",
        "it": "Colombia",
        "br": "Colômbia",
        "pt": "Colômbia",
        "nl": "Colombia",
        "hr": "Kolumbija",
        "fa": "کلمبیا"
      },
      "flag": "https://restcountries.eu/data/col.svg",
      "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherAcronyms": [],
        "otherNames": ["Alianza del Pacífico"]
      }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "COL"
    }, {
      "name": "Comoros",
      "topLevelDomain": [".km"],
      "alpha2Code": "KM",
      "alpha3Code": "COM",
      "callingCodes": ["269"],
      "capital": "Moroni",
      "altSpellings": ["KM", "Union of the Comoros", "Union des Comores", "Udzima wa Komori", "al-Ittiḥād al-Qumurī"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 806153,
      "latlng": [-12.16666666, 44.25],
      "demonym": "Comoran",
      "area": 1862.0,
      "gini": 64.3,
      "timezones": ["UTC+03:00"],
      "borders": [],
      "nativeName": "Komori",
      "numericCode": "174",
      "currencies": [{
        "code": "KMF",
        "name": "Comorian franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Union der Komoren",
        "es": "Comoras",
        "fr": "Comores",
        "ja": "コモロ",
        "it": "Comore",
        "br": "Comores",
        "pt": "Comores",
        "nl": "Comoren",
        "hr": "Komori",
        "fa": "کومور"
      },
      "flag": "https://restcountries.eu/data/com.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "COM"
    }, {
      "name": "Congo",
      "topLevelDomain": [".cg"],
      "alpha2Code": "CG",
      "alpha3Code": "COG",
      "callingCodes": ["242"],
      "capital": "Brazzaville",
      "altSpellings": ["CG", "Congo-Brazzaville"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 4741000,
      "latlng": [-1.0, 15.0],
      "demonym": "Congolese",
      "area": 342000.0,
      "gini": 47.3,
      "timezones": ["UTC+01:00"],
      "borders": ["AGO", "CMR", "CAF", "COD", "GAB"],
      "nativeName": "République du Congo",
      "numericCode": "178",
      "currencies": [{
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "ln",
        "iso639_2": "lin",
        "name": "Lingala",
        "nativeName": "Lingála"
      }],
      "translations": {
        "de": "Kongo",
        "es": "Congo",
        "fr": "Congo",
        "ja": "コンゴ共和国",
        "it": "Congo",
        "br": "Congo",
        "pt": "Congo",
        "nl": "Congo [Republiek]",
        "hr": "Kongo",
        "fa": "کنگو"
      },
      "flag": "https://restcountries.eu/data/cog.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "CGO"
    }, {
      "name": "Congo (Democratic Republic of the)",
      "topLevelDomain": [".cd"],
      "alpha2Code": "CD",
      "alpha3Code": "COD",
      "callingCodes": ["243"],
      "capital": "Kinshasa",
      "altSpellings": ["CD", "DR Congo", "Congo-Kinshasa", "DRC"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 85026000,
      "latlng": [0.0, 25.0],
      "demonym": "Congolese",
      "area": 2344858.0,
      "gini": null,
      "timezones": ["UTC+01:00", "UTC+02:00"],
      "borders": ["AGO", "BDI", "CAF", "COG", "RWA", "SSD", "TZA", "UGA", "ZMB"],
      "nativeName": "République démocratique du Congo",
      "numericCode": "180",
      "currencies": [{
        "code": "CDF",
        "name": "Congolese franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "ln",
        "iso639_2": "lin",
        "name": "Lingala",
        "nativeName": "Lingála"
      }, {
        "iso639_1": "kg",
        "iso639_2": "kon",
        "name": "Kongo",
        "nativeName": "Kikongo"
      }, {
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      }, {
        "iso639_1": "lu",
        "iso639_2": "lub",
        "name": "Luba-Katanga",
        "nativeName": "Tshiluba"
      }],
      "translations": {
        "de": "Kongo (Dem. Rep.)",
        "es": "Congo (Rep. Dem.)",
        "fr": "Congo (Rép. dém.)",
        "ja": "コンゴ民主共和国",
        "it": "Congo (Rep. Dem.)",
        "br": "RD Congo",
        "pt": "RD Congo",
        "nl": "Congo [DRC]",
        "hr": "Kongo, Demokratska Republika",
        "fa": "جمهوری کنگو"
      },
      "flag": "https://restcountries.eu/data/cod.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "COD"
    }, {
      "name": "Cook Islands",
      "topLevelDomain": [".ck"],
      "alpha2Code": "CK",
      "alpha3Code": "COK",
      "callingCodes": ["682"],
      "capital": "Avarua",
      "altSpellings": ["CK", "Kūki 'Āirani"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 18100,
      "latlng": [-21.23333333, -159.76666666],
      "demonym": "Cook Islander",
      "area": 236.0,
      "gini": null,
      "timezones": ["UTC-10:00"],
      "borders": [],
      "nativeName": "Cook Islands",
      "numericCode": "184",
      "currencies": [{
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }, {
        "code": "CKD",
        "name": "Cook Islands dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Cookinseln",
        "es": "Islas Cook",
        "fr": "Îles Cook",
        "ja": "クック諸島",
        "it": "Isole Cook",
        "br": "Ilhas Cook",
        "pt": "Ilhas Cook",
        "nl": "Cookeilanden",
        "hr": "Cookovo Otočje",
        "fa": "جزایر کوک"
      },
      "flag": "https://restcountries.eu/data/cok.svg",
      "regionalBlocs": [],
      "cioc": "COK"
    }, {
      "name": "Costa Rica",
      "topLevelDomain": [".cr"],
      "alpha2Code": "CR",
      "alpha3Code": "CRI",
      "callingCodes": ["506"],
      "capital": "San José",
      "altSpellings": ["CR", "Republic of Costa Rica", "República de Costa Rica"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 4890379,
      "latlng": [10.0, -84.0],
      "demonym": "Costa Rican",
      "area": 51100.0,
      "gini": 50.7,
      "timezones": ["UTC-06:00"],
      "borders": ["NIC", "PAN"],
      "nativeName": "Costa Rica",
      "numericCode": "188",
      "currencies": [{
        "code": "CRC",
        "name": "Costa Rican colón",
        "symbol": "₡"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Costa Rica",
        "es": "Costa Rica",
        "fr": "Costa Rica",
        "ja": "コスタリカ",
        "it": "Costa Rica",
        "br": "Costa Rica",
        "pt": "Costa Rica",
        "nl": "Costa Rica",
        "hr": "Kostarika",
        "fa": "کاستاریکا"
      },
      "flag": "https://restcountries.eu/data/cri.svg",
      "regionalBlocs": [{
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "CRC"
    }, {
      "name": "Croatia",
      "topLevelDomain": [".hr"],
      "alpha2Code": "HR",
      "alpha3Code": "HRV",
      "callingCodes": ["385"],
      "capital": "Zagreb",
      "altSpellings": ["HR", "Hrvatska", "Republic of Croatia", "Republika Hrvatska"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 4190669,
      "latlng": [45.16666666, 15.5],
      "demonym": "Croatian",
      "area": 56594.0,
      "gini": 33.7,
      "timezones": ["UTC+01:00"],
      "borders": ["BIH", "HUN", "MNE", "SRB", "SVN"],
      "nativeName": "Hrvatska",
      "numericCode": "191",
      "currencies": [{
        "code": "HRK",
        "name": "Croatian kuna",
        "symbol": "kn"
      }],
      "languages": [{
        "iso639_1": "hr",
        "iso639_2": "hrv",
        "name": "Croatian",
        "nativeName": "hrvatski jezik"
      }],
      "translations": {
        "de": "Kroatien",
        "es": "Croacia",
        "fr": "Croatie",
        "ja": "クロアチア",
        "it": "Croazia",
        "br": "Croácia",
        "pt": "Croácia",
        "nl": "Kroatië",
        "hr": "Hrvatska",
        "fa": "کرواسی"
      },
      "flag": "https://restcountries.eu/data/hrv.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "CRO"
    }, {
      "name": "Cuba",
      "topLevelDomain": [".cu"],
      "alpha2Code": "CU",
      "alpha3Code": "CUB",
      "callingCodes": ["53"],
      "capital": "Havana",
      "altSpellings": ["CU", "Republic of Cuba", "República de Cuba"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 11239004,
      "latlng": [21.5, -80.0],
      "demonym": "Cuban",
      "area": 109884.0,
      "gini": null,
      "timezones": ["UTC-05:00"],
      "borders": [],
      "nativeName": "Cuba",
      "numericCode": "192",
      "currencies": [{
        "code": "CUC",
        "name": "Cuban convertible peso",
        "symbol": "$"
      }, {
        "code": "CUP",
        "name": "Cuban peso",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Kuba",
        "es": "Cuba",
        "fr": "Cuba",
        "ja": "キューバ",
        "it": "Cuba",
        "br": "Cuba",
        "pt": "Cuba",
        "nl": "Cuba",
        "hr": "Kuba",
        "fa": "کوبا"
      },
      "flag": "https://restcountries.eu/data/cub.svg",
      "regionalBlocs": [],
      "cioc": "CUB"
    }, {
      "name": "Curaçao",
      "topLevelDomain": [".cw"],
      "alpha2Code": "CW",
      "alpha3Code": "CUW",
      "callingCodes": ["599"],
      "capital": "Willemstad",
      "altSpellings": ["CW", "Curacao", "Kòrsou", "Country of Curaçao", "Land Curaçao", "Pais Kòrsou"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 154843,
      "latlng": [12.116667, -68.933333],
      "demonym": "Dutch",
      "area": 444.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Curaçao",
      "numericCode": "531",
      "currencies": [{
        "code": "ANG",
        "name": "Netherlands Antillean guilder",
        "symbol": "ƒ"
      }],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }, {
        "iso639_1": "pa",
        "iso639_2": "pan",
        "name": "(Eastern) Punjabi",
        "nativeName": "ਪੰਜਾਬੀ"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Curaçao",
        "es": null,
        "fr": "Curaçao",
        "ja": null,
        "it": "Curaçao",
        "br": "Curaçao",
        "pt": "Curaçao",
        "nl": "Curaçao",
        "hr": null,
        "fa": "کوراسائو"
      },
      "flag": "https://restcountries.eu/data/cuw.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Cyprus",
      "topLevelDomain": [".cy"],
      "alpha2Code": "CY",
      "alpha3Code": "CYP",
      "callingCodes": ["357"],
      "capital": "Nicosia",
      "altSpellings": ["CY", "Kýpros", "Kıbrıs", "Republic of Cyprus", "Κυπριακή Δημοκρατία", "Kıbrıs Cumhuriyeti"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 847000,
      "latlng": [35.0, 33.0],
      "demonym": "Cypriot",
      "area": 9251.0,
      "gini": null,
      "timezones": ["UTC+02:00"],
      "borders": ["GBR"],
      "nativeName": "Κύπρος",
      "numericCode": "196",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "el",
        "iso639_2": "ell",
        "name": "Greek (modern)",
        "nativeName": "ελληνικά"
      }, {
        "iso639_1": "tr",
        "iso639_2": "tur",
        "name": "Turkish",
        "nativeName": "Türkçe"
      }, {
        "iso639_1": "hy",
        "iso639_2": "hye",
        "name": "Armenian",
        "nativeName": "Հայերեն"
      }],
      "translations": {
        "de": "Zypern",
        "es": "Chipre",
        "fr": "Chypre",
        "ja": "キプロス",
        "it": "Cipro",
        "br": "Chipre",
        "pt": "Chipre",
        "nl": "Cyprus",
        "hr": "Cipar",
        "fa": "قبرس"
      },
      "flag": "https://restcountries.eu/data/cyp.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "CYP"
    }, {
      "name": "Czech Republic",
      "topLevelDomain": [".cz"],
      "alpha2Code": "CZ",
      "alpha3Code": "CZE",
      "callingCodes": ["420"],
      "capital": "Prague",
      "altSpellings": ["CZ", "Česká republika", "Česko"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 10558524,
      "latlng": [49.75, 15.5],
      "demonym": "Czech",
      "area": 78865.0,
      "gini": 26.0,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "DEU", "POL", "SVK"],
      "nativeName": "Česká republika",
      "numericCode": "203",
      "currencies": [{
        "code": "CZK",
        "name": "Czech koruna",
        "symbol": "Kč"
      }],
      "languages": [{
        "iso639_1": "cs",
        "iso639_2": "ces",
        "name": "Czech",
        "nativeName": "čeština"
      }, {
        "iso639_1": "sk",
        "iso639_2": "slk",
        "name": "Slovak",
        "nativeName": "slovenčina"
      }],
      "translations": {
        "de": "Tschechische Republik",
        "es": "República Checa",
        "fr": "République tchèque",
        "ja": "チェコ",
        "it": "Repubblica Ceca",
        "br": "República Tcheca",
        "pt": "República Checa",
        "nl": "Tsjechië",
        "hr": "Češka",
        "fa": "جمهوری چک"
      },
      "flag": "https://restcountries.eu/data/cze.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "CZE"
    }, {
      "name": "Denmark",
      "topLevelDomain": [".dk"],
      "alpha2Code": "DK",
      "alpha3Code": "DNK",
      "callingCodes": ["45"],
      "capital": "Copenhagen",
      "altSpellings": ["DK", "Danmark", "Kingdom of Denmark", "Kongeriget Danmark"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 5717014,
      "latlng": [56.0, 10.0],
      "demonym": "Danish",
      "area": 43094.0,
      "gini": 24.0,
      "timezones": ["UTC-04:00", "UTC-03:00", "UTC-01:00", "UTC", "UTC+01:00"],
      "borders": ["DEU"],
      "nativeName": "Danmark",
      "numericCode": "208",
      "currencies": [{
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "da",
        "iso639_2": "dan",
        "name": "Danish",
        "nativeName": "dansk"
      }],
      "translations": {
        "de": "Dänemark",
        "es": "Dinamarca",
        "fr": "Danemark",
        "ja": "デンマーク",
        "it": "Danimarca",
        "br": "Dinamarca",
        "pt": "Dinamarca",
        "nl": "Denemarken",
        "hr": "Danska",
        "fa": "دانمارک"
      },
      "flag": "https://restcountries.eu/data/dnk.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "DEN"
    }, {
      "name": "Djibouti",
      "topLevelDomain": [".dj"],
      "alpha2Code": "DJ",
      "alpha3Code": "DJI",
      "callingCodes": ["253"],
      "capital": "Djibouti",
      "altSpellings": ["DJ", "Jabuuti", "Gabuuti", "Republic of Djibouti", "République de Djibouti", "Gabuutih Ummuuno", "Jamhuuriyadda Jabuuti"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 900000,
      "latlng": [11.5, 43.0],
      "demonym": "Djibouti",
      "area": 23200.0,
      "gini": 40.0,
      "timezones": ["UTC+03:00"],
      "borders": ["ERI", "ETH", "SOM"],
      "nativeName": "Djibouti",
      "numericCode": "262",
      "currencies": [{
        "code": "DJF",
        "name": "Djiboutian franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Dschibuti",
        "es": "Yibuti",
        "fr": "Djibouti",
        "ja": "ジブチ",
        "it": "Gibuti",
        "br": "Djibuti",
        "pt": "Djibuti",
        "nl": "Djibouti",
        "hr": "Džibuti",
        "fa": "جیبوتی"
      },
      "flag": "https://restcountries.eu/data/dji.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "DJI"
    }, {
      "name": "Dominica",
      "topLevelDomain": [".dm"],
      "alpha2Code": "DM",
      "alpha3Code": "DMA",
      "callingCodes": ["1767"],
      "capital": "Roseau",
      "altSpellings": ["DM", "Dominique", "Wai‘tu kubuli", "Commonwealth of Dominica"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 71293,
      "latlng": [15.41666666, -61.33333333],
      "demonym": "Dominican",
      "area": 751.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Dominica",
      "numericCode": "212",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Dominica",
        "es": "Dominica",
        "fr": "Dominique",
        "ja": "ドミニカ国",
        "it": "Dominica",
        "br": "Dominica",
        "pt": "Dominica",
        "nl": "Dominica",
        "hr": "Dominika",
        "fa": "دومینیکا"
      },
      "flag": "https://restcountries.eu/data/dma.svg",
      "regionalBlocs": [],
      "cioc": "DMA"
    }, {
      "name": "Dominican Republic",
      "topLevelDomain": [".do"],
      "alpha2Code": "DO",
      "alpha3Code": "DOM",
      "callingCodes": ["1809", "1829", "1849"],
      "capital": "Santo Domingo",
      "altSpellings": ["DO"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 10075045,
      "latlng": [19.0, -70.66666666],
      "demonym": "Dominican",
      "area": 48671.0,
      "gini": 47.2,
      "timezones": ["UTC-04:00"],
      "borders": ["HTI"],
      "nativeName": "República Dominicana",
      "numericCode": "214",
      "currencies": [{
        "code": "DOP",
        "name": "Dominican peso",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Dominikanische Republik",
        "es": "República Dominicana",
        "fr": "République dominicaine",
        "ja": "ドミニカ共和国",
        "it": "Repubblica Dominicana",
        "br": "República Dominicana",
        "pt": "República Dominicana",
        "nl": "Dominicaanse Republiek",
        "hr": "Dominikanska Republika",
        "fa": "جمهوری دومینیکن"
      },
      "flag": "https://restcountries.eu/data/dom.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }, {
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "DOM"
    }, {
      "name": "Ecuador",
      "topLevelDomain": [".ec"],
      "alpha2Code": "EC",
      "alpha3Code": "ECU",
      "callingCodes": ["593"],
      "capital": "Quito",
      "altSpellings": ["EC", "Republic of Ecuador", "República del Ecuador"],
      "region": "Americas",
      "subregion": "South America",
      "population": 16545799,
      "latlng": [-2.0, -77.5],
      "demonym": "Ecuadorean",
      "area": 276841.0,
      "gini": 49.3,
      "timezones": ["UTC-06:00", "UTC-05:00"],
      "borders": ["COL", "PER"],
      "nativeName": "Ecuador",
      "numericCode": "218",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Ecuador",
        "es": "Ecuador",
        "fr": "Équateur",
        "ja": "エクアドル",
        "it": "Ecuador",
        "br": "Equador",
        "pt": "Equador",
        "nl": "Ecuador",
        "hr": "Ekvador",
        "fa": "اکوادور"
      },
      "flag": "https://restcountries.eu/data/ecu.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "ECU"
    }, {
      "name": "Egypt",
      "topLevelDomain": [".eg"],
      "alpha2Code": "EG",
      "alpha3Code": "EGY",
      "callingCodes": ["20"],
      "capital": "Cairo",
      "altSpellings": ["EG", "Arab Republic of Egypt"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "population": 91290000,
      "latlng": [27.0, 30.0],
      "demonym": "Egyptian",
      "area": 1002450.0,
      "gini": 30.8,
      "timezones": ["UTC+02:00"],
      "borders": ["ISR", "LBY", "SDN"],
      "nativeName": "مصر‎",
      "numericCode": "818",
      "currencies": [{
        "code": "EGP",
        "name": "Egyptian pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Ägypten",
        "es": "Egipto",
        "fr": "Égypte",
        "ja": "エジプト",
        "it": "Egitto",
        "br": "Egito",
        "pt": "Egipto",
        "nl": "Egypte",
        "hr": "Egipat",
        "fa": "مصر"
      },
      "flag": "https://restcountries.eu/data/egy.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "EGY"
    }, {
      "name": "El Salvador",
      "topLevelDomain": [".sv"],
      "alpha2Code": "SV",
      "alpha3Code": "SLV",
      "callingCodes": ["503"],
      "capital": "San Salvador",
      "altSpellings": ["SV", "Republic of El Salvador", "República de El Salvador"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 6520675,
      "latlng": [13.83333333, -88.91666666],
      "demonym": "Salvadoran",
      "area": 21041.0,
      "gini": 48.3,
      "timezones": ["UTC-06:00"],
      "borders": ["GTM", "HND"],
      "nativeName": "El Salvador",
      "numericCode": "222",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "El Salvador",
        "es": "El Salvador",
        "fr": "Salvador",
        "ja": "エルサルバドル",
        "it": "El Salvador",
        "br": "El Salvador",
        "pt": "El Salvador",
        "nl": "El Salvador",
        "hr": "Salvador",
        "fa": "السالوادور"
      },
      "flag": "https://restcountries.eu/data/slv.svg",
      "regionalBlocs": [{
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "ESA"
    }, {
      "name": "Equatorial Guinea",
      "topLevelDomain": [".gq"],
      "alpha2Code": "GQ",
      "alpha3Code": "GNQ",
      "callingCodes": ["240"],
      "capital": "Malabo",
      "altSpellings": ["GQ", "Republic of Equatorial Guinea", "República de Guinea Ecuatorial", "République de Guinée équatoriale", "República da Guiné Equatorial"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 1222442,
      "latlng": [2.0, 10.0],
      "demonym": "Equatorial Guinean",
      "area": 28051.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["CMR", "GAB"],
      "nativeName": "Guinea Ecuatorial",
      "numericCode": "226",
      "currencies": [{
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Äquatorial-Guinea",
        "es": "Guinea Ecuatorial",
        "fr": "Guinée-Équatoriale",
        "ja": "赤道ギニア",
        "it": "Guinea Equatoriale",
        "br": "Guiné Equatorial",
        "pt": "Guiné Equatorial",
        "nl": "Equatoriaal-Guinea",
        "hr": "Ekvatorijalna Gvineja",
        "fa": "گینه استوایی"
      },
      "flag": "https://restcountries.eu/data/gnq.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "GEQ"
    }, {
      "name": "Eritrea",
      "topLevelDomain": [".er"],
      "alpha2Code": "ER",
      "alpha3Code": "ERI",
      "callingCodes": ["291"],
      "capital": "Asmara",
      "altSpellings": ["ER", "State of Eritrea", "ሃገረ ኤርትራ", "Dawlat Iritriyá", "ʾErtrā", "Iritriyā", ""],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 5352000,
      "latlng": [15.0, 39.0],
      "demonym": "Eritrean",
      "area": 117600.0,
      "gini": null,
      "timezones": ["UTC+03:00"],
      "borders": ["DJI", "ETH", "SDN"],
      "nativeName": "ኤርትራ",
      "numericCode": "232",
      "currencies": [{
        "code": "ERN",
        "name": "Eritrean nakfa",
        "symbol": "Nfk"
      }],
      "languages": [{
        "iso639_1": "ti",
        "iso639_2": "tir",
        "name": "Tigrinya",
        "nativeName": "ትግርኛ"
      }, {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Eritrea",
        "es": "Eritrea",
        "fr": "Érythrée",
        "ja": "エリトリア",
        "it": "Eritrea",
        "br": "Eritreia",
        "pt": "Eritreia",
        "nl": "Eritrea",
        "hr": "Eritreja",
        "fa": "اریتره"
      },
      "flag": "https://restcountries.eu/data/eri.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "ERI"
    }, {
      "name": "Estonia",
      "topLevelDomain": [".ee"],
      "alpha2Code": "EE",
      "alpha3Code": "EST",
      "callingCodes": ["372"],
      "capital": "Tallinn",
      "altSpellings": ["EE", "Eesti", "Republic of Estonia", "Eesti Vabariik"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 1315944,
      "latlng": [59.0, 26.0],
      "demonym": "Estonian",
      "area": 45227.0,
      "gini": 36.0,
      "timezones": ["UTC+02:00"],
      "borders": ["LVA", "RUS"],
      "nativeName": "Eesti",
      "numericCode": "233",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "et",
        "iso639_2": "est",
        "name": "Estonian",
        "nativeName": "eesti"
      }],
      "translations": {
        "de": "Estland",
        "es": "Estonia",
        "fr": "Estonie",
        "ja": "エストニア",
        "it": "Estonia",
        "br": "Estônia",
        "pt": "Estónia",
        "nl": "Estland",
        "hr": "Estonija",
        "fa": "استونی"
      },
      "flag": "https://restcountries.eu/data/est.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "EST"
    }, {
      "name": "Ethiopia",
      "topLevelDomain": [".et"],
      "alpha2Code": "ET",
      "alpha3Code": "ETH",
      "callingCodes": ["251"],
      "capital": "Addis Ababa",
      "altSpellings": ["ET", "ʾĪtyōṗṗyā", "Federal Democratic Republic of Ethiopia", "የኢትዮጵያ ፌዴራላዊ ዲሞክራሲያዊ ሪፐብሊክ"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 92206005,
      "latlng": [8.0, 38.0],
      "demonym": "Ethiopian",
      "area": 1104300.0,
      "gini": 29.8,
      "timezones": ["UTC+03:00"],
      "borders": ["DJI", "ERI", "KEN", "SOM", "SSD", "SDN"],
      "nativeName": "ኢትዮጵያ",
      "numericCode": "231",
      "currencies": [{
        "code": "ETB",
        "name": "Ethiopian birr",
        "symbol": "Br"
      }],
      "languages": [{
        "iso639_1": "am",
        "iso639_2": "amh",
        "name": "Amharic",
        "nativeName": "አማርኛ"
      }],
      "translations": {
        "de": "Äthiopien",
        "es": "Etiopía",
        "fr": "Éthiopie",
        "ja": "エチオピア",
        "it": "Etiopia",
        "br": "Etiópia",
        "pt": "Etiópia",
        "nl": "Ethiopië",
        "hr": "Etiopija",
        "fa": "اتیوپی"
      },
      "flag": "https://restcountries.eu/data/eth.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "ETH"
    }, {
      "name": "Falkland Islands (Malvinas)",
      "topLevelDomain": [".fk"],
      "alpha2Code": "FK",
      "alpha3Code": "FLK",
      "callingCodes": ["500"],
      "capital": "Stanley",
      "altSpellings": ["FK", "Islas Malvinas"],
      "region": "Americas",
      "subregion": "South America",
      "population": 2563,
      "latlng": [-51.75, -59.0],
      "demonym": "Falkland Islander",
      "area": 12173.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Falkland Islands",
      "numericCode": "238",
      "currencies": [{
        "code": "FKP",
        "name": "Falkland Islands pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Falklandinseln",
        "es": "Islas Malvinas",
        "fr": "Îles Malouines",
        "ja": "フォークランド（マルビナス）諸島",
        "it": "Isole Falkland o Isole Malvine",
        "br": "Ilhas Malvinas",
        "pt": "Ilhas Falkland",
        "nl": "Falklandeilanden [Islas Malvinas]",
        "hr": "Falklandski Otoci",
        "fa": "جزایر فالکلند"
      },
      "flag": "https://restcountries.eu/data/flk.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": ""
    }, {
      "name": "Faroe Islands",
      "topLevelDomain": [".fo"],
      "alpha2Code": "FO",
      "alpha3Code": "FRO",
      "callingCodes": ["298"],
      "capital": "Tórshavn",
      "altSpellings": ["FO", "Føroyar", "Færøerne"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 49376,
      "latlng": [62.0, -7.0],
      "demonym": "Faroese",
      "area": 1393.0,
      "gini": null,
      "timezones": ["UTC+00:00"],
      "borders": [],
      "nativeName": "Føroyar",
      "numericCode": "234",
      "currencies": [{
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }, {
        "code": "(none)",
        "name": "Faroese króna",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "fo",
        "iso639_2": "fao",
        "name": "Faroese",
        "nativeName": "føroyskt"
      }],
      "translations": {
        "de": "Färöer-Inseln",
        "es": "Islas Faroe",
        "fr": "Îles Féroé",
        "ja": "フェロー諸島",
        "it": "Isole Far Oer",
        "br": "Ilhas Faroé",
        "pt": "Ilhas Faroé",
        "nl": "Faeröer",
        "hr": "Farski Otoci",
        "fa": "جزایر فارو"
      },
      "flag": "https://restcountries.eu/data/fro.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": ""
    }, {
      "name": "Fiji",
      "topLevelDomain": [".fj"],
      "alpha2Code": "FJ",
      "alpha3Code": "FJI",
      "callingCodes": ["679"],
      "capital": "Suva",
      "altSpellings": ["FJ", "Viti", "Republic of Fiji", "Matanitu ko Viti", "Fijī Gaṇarājya"],
      "region": "Oceania",
      "subregion": "Melanesia",
      "population": 867000,
      "latlng": [-18.0, 175.0],
      "demonym": "Fijian",
      "area": 18272.0,
      "gini": 42.8,
      "timezones": ["UTC+12:00"],
      "borders": [],
      "nativeName": "Fiji",
      "numericCode": "242",
      "currencies": [{
        "code": "FJD",
        "name": "Fijian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fj",
        "iso639_2": "fij",
        "name": "Fijian",
        "nativeName": "vosa Vakaviti"
      }, {
        "iso639_1": "hi",
        "iso639_2": "hin",
        "name": "Hindi",
        "nativeName": "हिन्दी"
      }, {
        "iso639_1": "ur",
        "iso639_2": "urd",
        "name": "Urdu",
        "nativeName": "اردو"
      }],
      "translations": {
        "de": "Fidschi",
        "es": "Fiyi",
        "fr": "Fidji",
        "ja": "フィジー",
        "it": "Figi",
        "br": "Fiji",
        "pt": "Fiji",
        "nl": "Fiji",
        "hr": "Fiđi",
        "fa": "فیجی"
      },
      "flag": "https://restcountries.eu/data/fji.svg",
      "regionalBlocs": [],
      "cioc": "FIJ"
    }, {
      "name": "Finland",
      "topLevelDomain": [".fi"],
      "alpha2Code": "FI",
      "alpha3Code": "FIN",
      "callingCodes": ["358"],
      "capital": "Helsinki",
      "altSpellings": ["FI", "Suomi", "Republic of Finland", "Suomen tasavalta", "Republiken Finland"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 5491817,
      "latlng": [64.0, 26.0],
      "demonym": "Finnish",
      "area": 338424.0,
      "gini": 26.9,
      "timezones": ["UTC+02:00"],
      "borders": ["NOR", "SWE", "RUS"],
      "nativeName": "Suomi",
      "numericCode": "246",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fi",
        "iso639_2": "fin",
        "name": "Finnish",
        "nativeName": "suomi"
      }, {
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }],
      "translations": {
        "de": "Finnland",
        "es": "Finlandia",
        "fr": "Finlande",
        "ja": "フィンランド",
        "it": "Finlandia",
        "br": "Finlândia",
        "pt": "Finlândia",
        "nl": "Finland",
        "hr": "Finska",
        "fa": "فنلاند"
      },
      "flag": "https://restcountries.eu/data/fin.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "FIN"
    }, {
      "name": "France",
      "topLevelDomain": [".fr"],
      "alpha2Code": "FR",
      "alpha3Code": "FRA",
      "callingCodes": ["33"],
      "capital": "Paris",
      "altSpellings": ["FR", "French Republic", "République française"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 66710000,
      "latlng": [46.0, 2.0],
      "demonym": "French",
      "area": 640679.0,
      "gini": 32.7,
      "timezones": ["UTC-10:00", "UTC-09:30", "UTC-09:00", "UTC-08:00", "UTC-04:00", "UTC-03:00", "UTC+01:00", "UTC+03:00", "UTC+04:00", "UTC+05:00", "UTC+11:00", "UTC+12:00"],
      "borders": ["AND", "BEL", "DEU", "ITA", "LUX", "MCO", "ESP", "CHE"],
      "nativeName": "France",
      "numericCode": "250",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Frankreich",
        "es": "Francia",
        "fr": "France",
        "ja": "フランス",
        "it": "Francia",
        "br": "França",
        "pt": "França",
        "nl": "Frankrijk",
        "hr": "Francuska",
        "fa": "فرانسه"
      },
      "flag": "https://restcountries.eu/data/fra.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "FRA"
    }, {
      "name": "French Guiana",
      "topLevelDomain": [".gf"],
      "alpha2Code": "GF",
      "alpha3Code": "GUF",
      "callingCodes": ["594"],
      "capital": "Cayenne",
      "altSpellings": ["GF", "Guiana", "Guyane"],
      "region": "Americas",
      "subregion": "South America",
      "population": 254541,
      "latlng": [4.0, -53.0],
      "demonym": "",
      "area": null,
      "gini": null,
      "timezones": ["UTC-03:00"],
      "borders": ["BRA", "SUR"],
      "nativeName": "Guyane française",
      "numericCode": "254",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Französisch Guyana",
        "es": "Guayana Francesa",
        "fr": "Guayane",
        "ja": "フランス領ギアナ",
        "it": "Guyana francese",
        "br": "Guiana Francesa",
        "pt": "Guiana Francesa",
        "nl": "Frans-Guyana",
        "hr": "Francuska Gvajana",
        "fa": "گویان فرانسه"
      },
      "flag": "https://restcountries.eu/data/guf.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }, {
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": ""
    }, {
      "name": "French Polynesia",
      "topLevelDomain": [".pf"],
      "alpha2Code": "PF",
      "alpha3Code": "PYF",
      "callingCodes": ["689"],
      "capital": "Papeetē",
      "altSpellings": ["PF", "Polynésie française", "French Polynesia", "Pōrīnetia Farāni"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 271800,
      "latlng": [-15.0, -140.0],
      "demonym": "French Polynesian",
      "area": 4167.0,
      "gini": null,
      "timezones": ["UTC-10:00", "UTC-09:30", "UTC-09:00"],
      "borders": [],
      "nativeName": "Polynésie française",
      "numericCode": "258",
      "currencies": [{
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Französisch-Polynesien",
        "es": "Polinesia Francesa",
        "fr": "Polynésie française",
        "ja": "フランス領ポリネシア",
        "it": "Polinesia Francese",
        "br": "Polinésia Francesa",
        "pt": "Polinésia Francesa",
        "nl": "Frans-Polynesië",
        "hr": "Francuska Polinezija",
        "fa": "پلی‌نزی فرانسه"
      },
      "flag": "https://restcountries.eu/data/pyf.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "French Southern Territories",
      "topLevelDomain": [".tf"],
      "alpha2Code": "TF",
      "alpha3Code": "ATF",
      "callingCodes": [""],
      "capital": "Port-aux-Français",
      "altSpellings": ["TF"],
      "region": "Africa",
      "subregion": "Southern Africa",
      "population": 140,
      "latlng": [-49.25, 69.167],
      "demonym": "French",
      "area": 7747.0,
      "gini": null,
      "timezones": ["UTC+05:00"],
      "borders": [],
      "nativeName": "Territoire des Terres australes et antarctiques françaises",
      "numericCode": "260",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Französische Süd- und Antarktisgebiete",
        "es": "Tierras Australes y Antárticas Francesas",
        "fr": "Terres australes et antarctiques françaises",
        "ja": "フランス領南方・南極地域",
        "it": "Territori Francesi del Sud",
        "br": "Terras Austrais e Antárticas Francesas",
        "pt": "Terras Austrais e Antárticas Francesas",
        "nl": "Franse Gebieden in de zuidelijke Indische Oceaan",
        "hr": "Francuski južni i antarktički teritoriji",
        "fa": "سرزمین‌های جنوبی و جنوبگانی فرانسه"
      },
      "flag": "https://restcountries.eu/data/atf.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": ""
    }, {
      "name": "Gabon",
      "topLevelDomain": [".ga"],
      "alpha2Code": "GA",
      "alpha3Code": "GAB",
      "callingCodes": ["241"],
      "capital": "Libreville",
      "altSpellings": ["GA", "Gabonese Republic", "République Gabonaise"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 1802278,
      "latlng": [-1.0, 11.75],
      "demonym": "Gabonese",
      "area": 267668.0,
      "gini": 41.5,
      "timezones": ["UTC+01:00"],
      "borders": ["CMR", "COG", "GNQ"],
      "nativeName": "Gabon",
      "numericCode": "266",
      "currencies": [{
        "code": "XAF",
        "name": "Central African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Gabun",
        "es": "Gabón",
        "fr": "Gabon",
        "ja": "ガボン",
        "it": "Gabon",
        "br": "Gabão",
        "pt": "Gabão",
        "nl": "Gabon",
        "hr": "Gabon",
        "fa": "گابن"
      },
      "flag": "https://restcountries.eu/data/gab.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "GAB"
    }, {
      "name": "Gambia",
      "topLevelDomain": [".gm"],
      "alpha2Code": "GM",
      "alpha3Code": "GMB",
      "callingCodes": ["220"],
      "capital": "Banjul",
      "altSpellings": ["GM", "Republic of the Gambia"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 1882450,
      "latlng": [13.46666666, -16.56666666],
      "demonym": "Gambian",
      "area": 11295.0,
      "gini": null,
      "timezones": ["UTC+00:00"],
      "borders": ["SEN"],
      "nativeName": "Gambia",
      "numericCode": "270",
      "currencies": [{
        "code": "GMD",
        "name": "Gambian dalasi",
        "symbol": "D"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Gambia",
        "es": "Gambia",
        "fr": "Gambie",
        "ja": "ガンビア",
        "it": "Gambia",
        "br": "Gâmbia",
        "pt": "Gâmbia",
        "nl": "Gambia",
        "hr": "Gambija",
        "fa": "گامبیا"
      },
      "flag": "https://restcountries.eu/data/gmb.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "GAM"
    }, {
      "name": "Georgia",
      "topLevelDomain": [".ge"],
      "alpha2Code": "GE",
      "alpha3Code": "GEO",
      "callingCodes": ["995"],
      "capital": "Tbilisi",
      "altSpellings": ["GE", "Sakartvelo"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 3720400,
      "latlng": [42.0, 43.5],
      "demonym": "Georgian",
      "area": 69700.0,
      "gini": 41.3,
      "timezones": ["UTC-05:00"],
      "borders": ["ARM", "AZE", "RUS", "TUR"],
      "nativeName": "საქართველო",
      "numericCode": "268",
      "currencies": [{
        "code": "GEL",
        "name": "Georgian Lari",
        "symbol": "ლ"
      }],
      "languages": [{
        "iso639_1": "ka",
        "iso639_2": "kat",
        "name": "Georgian",
        "nativeName": "ქართული"
      }],
      "translations": {
        "de": "Georgien",
        "es": "Georgia",
        "fr": "Géorgie",
        "ja": "グルジア",
        "it": "Georgia",
        "br": "Geórgia",
        "pt": "Geórgia",
        "nl": "Georgië",
        "hr": "Gruzija",
        "fa": "گرجستان"
      },
      "flag": "https://restcountries.eu/data/geo.svg",
      "regionalBlocs": [],
      "cioc": "GEO"
    }, {
      "name": "Germany",
      "topLevelDomain": [".de"],
      "alpha2Code": "DE",
      "alpha3Code": "DEU",
      "callingCodes": ["49"],
      "capital": "Berlin",
      "altSpellings": ["DE", "Federal Republic of Germany", "Bundesrepublik Deutschland"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 81770900,
      "latlng": [51.0, 9.0],
      "demonym": "German",
      "area": 357114.0,
      "gini": 28.3,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
      "nativeName": "Deutschland",
      "numericCode": "276",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }],
      "translations": {
        "de": "Deutschland",
        "es": "Alemania",
        "fr": "Allemagne",
        "ja": "ドイツ",
        "it": "Germania",
        "br": "Alemanha",
        "pt": "Alemanha",
        "nl": "Duitsland",
        "hr": "Njemačka",
        "fa": "آلمان"
      },
      "flag": "https://restcountries.eu/data/deu.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "GER"
    }, {
      "name": "Ghana",
      "topLevelDomain": [".gh"],
      "alpha2Code": "GH",
      "alpha3Code": "GHA",
      "callingCodes": ["233"],
      "capital": "Accra",
      "altSpellings": ["GH"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 27670174,
      "latlng": [8.0, -2.0],
      "demonym": "Ghanaian",
      "area": 238533.0,
      "gini": 42.8,
      "timezones": ["UTC"],
      "borders": ["BFA", "CIV", "TGO"],
      "nativeName": "Ghana",
      "numericCode": "288",
      "currencies": [{
        "code": "GHS",
        "name": "Ghanaian cedi",
        "symbol": "₵"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Ghana",
        "es": "Ghana",
        "fr": "Ghana",
        "ja": "ガーナ",
        "it": "Ghana",
        "br": "Gana",
        "pt": "Gana",
        "nl": "Ghana",
        "hr": "Gana",
        "fa": "غنا"
      },
      "flag": "https://restcountries.eu/data/gha.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "GHA"
    }, {
      "name": "Gibraltar",
      "topLevelDomain": [".gi"],
      "alpha2Code": "GI",
      "alpha3Code": "GIB",
      "callingCodes": ["350"],
      "capital": "Gibraltar",
      "altSpellings": ["GI"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 33140,
      "latlng": [36.13333333, -5.35],
      "demonym": "Gibraltar",
      "area": 6.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["ESP"],
      "nativeName": "Gibraltar",
      "numericCode": "292",
      "currencies": [{
        "code": "GIP",
        "name": "Gibraltar pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Gibraltar",
        "es": "Gibraltar",
        "fr": "Gibraltar",
        "ja": "ジブラルタル",
        "it": "Gibilterra",
        "br": "Gibraltar",
        "pt": "Gibraltar",
        "nl": "Gibraltar",
        "hr": "Gibraltar",
        "fa": "جبل‌طارق"
      },
      "flag": "https://restcountries.eu/data/gib.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": ""
    }, {
      "name": "Greece",
      "topLevelDomain": [".gr"],
      "alpha2Code": "GR",
      "alpha3Code": "GRC",
      "callingCodes": ["30"],
      "capital": "Athens",
      "altSpellings": ["GR", "Elláda", "Hellenic Republic", "Ελληνική Δημοκρατία"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 10858018,
      "latlng": [39.0, 22.0],
      "demonym": "Greek",
      "area": 131990.0,
      "gini": 34.3,
      "timezones": ["UTC+02:00"],
      "borders": ["ALB", "BGR", "TUR", "MKD"],
      "nativeName": "Ελλάδα",
      "numericCode": "300",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "el",
        "iso639_2": "ell",
        "name": "Greek (modern)",
        "nativeName": "ελληνικά"
      }],
      "translations": {
        "de": "Griechenland",
        "es": "Grecia",
        "fr": "Grèce",
        "ja": "ギリシャ",
        "it": "Grecia",
        "br": "Grécia",
        "pt": "Grécia",
        "nl": "Griekenland",
        "hr": "Grčka",
        "fa": "یونان"
      },
      "flag": "https://restcountries.eu/data/grc.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "GRE"
    }, {
      "name": "Greenland",
      "topLevelDomain": [".gl"],
      "alpha2Code": "GL",
      "alpha3Code": "GRL",
      "callingCodes": ["299"],
      "capital": "Nuuk",
      "altSpellings": ["GL", "Grønland"],
      "region": "Americas",
      "subregion": "Northern America",
      "population": 55847,
      "latlng": [72.0, -40.0],
      "demonym": "Greenlandic",
      "area": 2166086.0,
      "gini": null,
      "timezones": ["UTC-04:00", "UTC-03:00", "UTC-01:00", "UTC+00:00"],
      "borders": [],
      "nativeName": "Kalaallit Nunaat",
      "numericCode": "304",
      "currencies": [{
        "code": "DKK",
        "name": "Danish krone",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "kl",
        "iso639_2": "kal",
        "name": "Kalaallisut",
        "nativeName": "kalaallisut"
      }],
      "translations": {
        "de": "Grönland",
        "es": "Groenlandia",
        "fr": "Groenland",
        "ja": "グリーンランド",
        "it": "Groenlandia",
        "br": "Groelândia",
        "pt": "Gronelândia",
        "nl": "Groenland",
        "hr": "Grenland",
        "fa": "گرینلند"
      },
      "flag": "https://restcountries.eu/data/grl.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Grenada",
      "topLevelDomain": [".gd"],
      "alpha2Code": "GD",
      "alpha3Code": "GRD",
      "callingCodes": ["1473"],
      "capital": "St. George's",
      "altSpellings": ["GD"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 103328,
      "latlng": [12.11666666, -61.66666666],
      "demonym": "Grenadian",
      "area": 344.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Grenada",
      "numericCode": "308",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Grenada",
        "es": "Grenada",
        "fr": "Grenade",
        "ja": "グレナダ",
        "it": "Grenada",
        "br": "Granada",
        "pt": "Granada",
        "nl": "Grenada",
        "hr": "Grenada",
        "fa": "گرنادا"
      },
      "flag": "https://restcountries.eu/data/grd.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "GRN"
    }, {
      "name": "Guadeloupe",
      "topLevelDomain": [".gp"],
      "alpha2Code": "GP",
      "alpha3Code": "GLP",
      "callingCodes": ["590"],
      "capital": "Basse-Terre",
      "altSpellings": ["GP", "Gwadloup"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 400132,
      "latlng": [16.25, -61.583333],
      "demonym": "Guadeloupian",
      "area": null,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Guadeloupe",
      "numericCode": "312",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Guadeloupe",
        "es": "Guadalupe",
        "fr": "Guadeloupe",
        "ja": "グアドループ",
        "it": "Guadeloupa",
        "br": "Guadalupe",
        "pt": "Guadalupe",
        "nl": "Guadeloupe",
        "hr": "Gvadalupa",
        "fa": "جزیره گوادلوپ"
      },
      "flag": "https://restcountries.eu/data/glp.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Guam",
      "topLevelDomain": [".gu"],
      "alpha2Code": "GU",
      "alpha3Code": "GUM",
      "callingCodes": ["1671"],
      "capital": "Hagåtña",
      "altSpellings": ["GU", "Guåhån"],
      "region": "Oceania",
      "subregion": "Micronesia",
      "population": 184200,
      "latlng": [13.46666666, 144.78333333],
      "demonym": "Guamanian",
      "area": 549.0,
      "gini": null,
      "timezones": ["UTC+10:00"],
      "borders": [],
      "nativeName": "Guam",
      "numericCode": "316",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "ch",
        "iso639_2": "cha",
        "name": "Chamorro",
        "nativeName": "Chamoru"
      }, {
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Guam",
        "es": "Guam",
        "fr": "Guam",
        "ja": "グアム",
        "it": "Guam",
        "br": "Guam",
        "pt": "Guame",
        "nl": "Guam",
        "hr": "Guam",
        "fa": "گوام"
      },
      "flag": "https://restcountries.eu/data/gum.svg",
      "regionalBlocs": [],
      "cioc": "GUM"
    }, {
      "name": "Guatemala",
      "topLevelDomain": [".gt"],
      "alpha2Code": "GT",
      "alpha3Code": "GTM",
      "callingCodes": ["502"],
      "capital": "Guatemala City",
      "altSpellings": ["GT"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 16176133,
      "latlng": [15.5, -90.25],
      "demonym": "Guatemalan",
      "area": 108889.0,
      "gini": 55.9,
      "timezones": ["UTC-06:00"],
      "borders": ["BLZ", "SLV", "HND", "MEX"],
      "nativeName": "Guatemala",
      "numericCode": "320",
      "currencies": [{
        "code": "GTQ",
        "name": "Guatemalan quetzal",
        "symbol": "Q"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Guatemala",
        "es": "Guatemala",
        "fr": "Guatemala",
        "ja": "グアテマラ",
        "it": "Guatemala",
        "br": "Guatemala",
        "pt": "Guatemala",
        "nl": "Guatemala",
        "hr": "Gvatemala",
        "fa": "گواتمالا"
      },
      "flag": "https://restcountries.eu/data/gtm.svg",
      "regionalBlocs": [{
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "GUA"
    }, {
      "name": "Guernsey",
      "topLevelDomain": [".gg"],
      "alpha2Code": "GG",
      "alpha3Code": "GGY",
      "callingCodes": ["44"],
      "capital": "St. Peter Port",
      "altSpellings": ["GG", "Bailiwick of Guernsey", "Bailliage de Guernesey"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 62999,
      "latlng": [49.46666666, -2.58333333],
      "demonym": "Channel Islander",
      "area": 78.0,
      "gini": null,
      "timezones": ["UTC+00:00"],
      "borders": [],
      "nativeName": "Guernsey",
      "numericCode": "831",
      "currencies": [{
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }, {
        "code": "(none)",
        "name": "Guernsey pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Guernsey",
        "es": "Guernsey",
        "fr": "Guernesey",
        "ja": "ガーンジー",
        "it": "Guernsey",
        "br": "Guernsey",
        "pt": "Guernsey",
        "nl": "Guernsey",
        "hr": "Guernsey",
        "fa": "گرنزی"
      },
      "flag": "https://restcountries.eu/data/ggy.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Guinea",
      "topLevelDomain": [".gn"],
      "alpha2Code": "GN",
      "alpha3Code": "GIN",
      "callingCodes": ["224"],
      "capital": "Conakry",
      "altSpellings": ["GN", "Republic of Guinea", "République de Guinée"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 12947000,
      "latlng": [11.0, -10.0],
      "demonym": "Guinean",
      "area": 245857.0,
      "gini": 39.4,
      "timezones": ["UTC"],
      "borders": ["CIV", "GNB", "LBR", "MLI", "SEN", "SLE"],
      "nativeName": "Guinée",
      "numericCode": "324",
      "currencies": [{
        "code": "GNF",
        "name": "Guinean franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "ff",
        "iso639_2": "ful",
        "name": "Fula",
        "nativeName": "Fulfulde"
      }],
      "translations": {
        "de": "Guinea",
        "es": "Guinea",
        "fr": "Guinée",
        "ja": "ギニア",
        "it": "Guinea",
        "br": "Guiné",
        "pt": "Guiné",
        "nl": "Guinee",
        "hr": "Gvineja",
        "fa": "گینه"
      },
      "flag": "https://restcountries.eu/data/gin.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "GUI"
    }, {
      "name": "Guinea-Bissau",
      "topLevelDomain": [".gw"],
      "alpha2Code": "GW",
      "alpha3Code": "GNB",
      "callingCodes": ["245"],
      "capital": "Bissau",
      "altSpellings": ["GW", "Republic of Guinea-Bissau", "República da Guiné-Bissau"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 1547777,
      "latlng": [12.0, -15.0],
      "demonym": "Guinea-Bissauan",
      "area": 36125.0,
      "gini": 35.5,
      "timezones": ["UTC"],
      "borders": ["GIN", "SEN"],
      "nativeName": "Guiné-Bissau",
      "numericCode": "624",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Guinea-Bissau",
        "es": "Guinea-Bisáu",
        "fr": "Guinée-Bissau",
        "ja": "ギニアビサウ",
        "it": "Guinea-Bissau",
        "br": "Guiné-Bissau",
        "pt": "Guiné-Bissau",
        "nl": "Guinee-Bissau",
        "hr": "Gvineja Bisau",
        "fa": "گینه بیسائو"
      },
      "flag": "https://restcountries.eu/data/gnb.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "GBS"
    }, {
      "name": "Guyana",
      "topLevelDomain": [".gy"],
      "alpha2Code": "GY",
      "alpha3Code": "GUY",
      "callingCodes": ["592"],
      "capital": "Georgetown",
      "altSpellings": ["GY", "Co-operative Republic of Guyana"],
      "region": "Americas",
      "subregion": "South America",
      "population": 746900,
      "latlng": [5.0, -59.0],
      "demonym": "Guyanese",
      "area": 214969.0,
      "gini": 44.5,
      "timezones": ["UTC-04:00"],
      "borders": ["BRA", "SUR", "VEN"],
      "nativeName": "Guyana",
      "numericCode": "328",
      "currencies": [{
        "code": "GYD",
        "name": "Guyanese dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Guyana",
        "es": "Guyana",
        "fr": "Guyane",
        "ja": "ガイアナ",
        "it": "Guyana",
        "br": "Guiana",
        "pt": "Guiana",
        "nl": "Guyana",
        "hr": "Gvajana",
        "fa": "گویان"
      },
      "flag": "https://restcountries.eu/data/guy.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "GUY"
    }, {
      "name": "Haiti",
      "topLevelDomain": [".ht"],
      "alpha2Code": "HT",
      "alpha3Code": "HTI",
      "callingCodes": ["509"],
      "capital": "Port-au-Prince",
      "altSpellings": ["HT", "Republic of Haiti", "République d'Haïti", "Repiblik Ayiti"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 11078033,
      "latlng": [19.0, -72.41666666],
      "demonym": "Haitian",
      "area": 27750.0,
      "gini": 59.2,
      "timezones": ["UTC-05:00"],
      "borders": ["DOM"],
      "nativeName": "Haïti",
      "numericCode": "332",
      "currencies": [{
        "code": "HTG",
        "name": "Haitian gourde",
        "symbol": "G"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "ht",
        "iso639_2": "hat",
        "name": "Haitian",
        "nativeName": "Kreyòl ayisyen"
      }],
      "translations": {
        "de": "Haiti",
        "es": "Haiti",
        "fr": "Haïti",
        "ja": "ハイチ",
        "it": "Haiti",
        "br": "Haiti",
        "pt": "Haiti",
        "nl": "Haïti",
        "hr": "Haiti",
        "fa": "هائیتی"
      },
      "flag": "https://restcountries.eu/data/hti.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "HAI"
    }, {
      "name": "Heard Island and McDonald Islands",
      "topLevelDomain": [".hm", ".aq"],
      "alpha2Code": "HM",
      "alpha3Code": "HMD",
      "callingCodes": [""],
      "capital": "",
      "altSpellings": ["HM"],
      "region": "",
      "subregion": "",
      "population": 0,
      "latlng": [-53.1, 72.51666666],
      "demonym": "Heard and McDonald Islander",
      "area": 412.0,
      "gini": null,
      "timezones": ["UTC+05:00"],
      "borders": [],
      "nativeName": "Heard Island and McDonald Islands",
      "numericCode": "334",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Heard und die McDonaldinseln",
        "es": "Islas Heard y McDonald",
        "fr": "Îles Heard-et-MacDonald",
        "ja": "ハード島とマクドナルド諸島",
        "it": "Isole Heard e McDonald",
        "br": "Ilha Heard e Ilhas McDonald",
        "pt": "Ilha Heard e Ilhas McDonald",
        "nl": "Heard- en McDonaldeilanden",
        "hr": "Otok Heard i otočje McDonald",
        "fa": "جزیره هرد و جزایر مک‌دونالد"
      },
      "flag": "https://restcountries.eu/data/hmd.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Holy See",
      "topLevelDomain": [".va"],
      "alpha2Code": "VA",
      "alpha3Code": "VAT",
      "callingCodes": ["379"],
      "capital": "Rome",
      "altSpellings": ["Sancta Sedes", "Vatican", "The Vatican"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 451,
      "latlng": [41.9, 12.45],
      "demonym": "",
      "area": 0.44,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["ITA"],
      "nativeName": "Sancta Sedes",
      "numericCode": "336",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "la",
        "iso639_2": "lat",
        "name": "Latin",
        "nativeName": "latine"
      }, {
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }],
      "translations": {
        "de": "Heiliger Stuhl",
        "es": "Santa Sede",
        "fr": "voir Saint",
        "ja": "聖座",
        "it": "Santa Sede",
        "br": "Vaticano",
        "pt": "Vaticano",
        "nl": "Heilige Stoel",
        "hr": "Sveta Stolica",
        "fa": "سریر مقدس"
      },
      "flag": "https://restcountries.eu/data/vat.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Honduras",
      "topLevelDomain": [".hn"],
      "alpha2Code": "HN",
      "alpha3Code": "HND",
      "callingCodes": ["504"],
      "capital": "Tegucigalpa",
      "altSpellings": ["HN", "Republic of Honduras", "República de Honduras"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 8576532,
      "latlng": [15.0, -86.5],
      "demonym": "Honduran",
      "area": 112492.0,
      "gini": 57.0,
      "timezones": ["UTC-06:00"],
      "borders": ["GTM", "SLV", "NIC"],
      "nativeName": "Honduras",
      "numericCode": "340",
      "currencies": [{
        "code": "HNL",
        "name": "Honduran lempira",
        "symbol": "L"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Honduras",
        "es": "Honduras",
        "fr": "Honduras",
        "ja": "ホンジュラス",
        "it": "Honduras",
        "br": "Honduras",
        "pt": "Honduras",
        "nl": "Honduras",
        "hr": "Honduras",
        "fa": "هندوراس"
      },
      "flag": "https://restcountries.eu/data/hnd.svg",
      "regionalBlocs": [{
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "HON"
    }, {
      "name": "Hong Kong",
      "topLevelDomain": [".hk"],
      "alpha2Code": "HK",
      "alpha3Code": "HKG",
      "callingCodes": ["852"],
      "capital": "City of Victoria",
      "altSpellings": ["HK", "香港"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 7324300,
      "latlng": [22.25, 114.16666666],
      "demonym": "Chinese",
      "area": 1104.0,
      "gini": 53.3,
      "timezones": ["UTC+08:00"],
      "borders": ["CHN"],
      "nativeName": "香港",
      "numericCode": "344",
      "currencies": [{
        "code": "HKD",
        "name": "Hong Kong dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }],
      "translations": {
        "de": "Hong Kong",
        "es": "Hong Kong",
        "fr": "Hong Kong",
        "ja": "香港",
        "it": "Hong Kong",
        "br": "Hong Kong",
        "pt": "Hong Kong",
        "nl": "Hongkong",
        "hr": "Hong Kong",
        "fa": "هنگ‌کنگ"
      },
      "flag": "https://restcountries.eu/data/hkg.svg",
      "regionalBlocs": [],
      "cioc": "HKG"
    }, {
      "name": "Hungary",
      "topLevelDomain": [".hu"],
      "alpha2Code": "HU",
      "alpha3Code": "HUN",
      "callingCodes": ["36"],
      "capital": "Budapest",
      "altSpellings": ["HU"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 9823000,
      "latlng": [47.0, 20.0],
      "demonym": "Hungarian",
      "area": 93028.0,
      "gini": 31.2,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "HRV", "ROU", "SRB", "SVK", "SVN", "UKR"],
      "nativeName": "Magyarország",
      "numericCode": "348",
      "currencies": [{
        "code": "HUF",
        "name": "Hungarian forint",
        "symbol": "Ft"
      }],
      "languages": [{
        "iso639_1": "hu",
        "iso639_2": "hun",
        "name": "Hungarian",
        "nativeName": "magyar"
      }],
      "translations": {
        "de": "Ungarn",
        "es": "Hungría",
        "fr": "Hongrie",
        "ja": "ハンガリー",
        "it": "Ungheria",
        "br": "Hungria",
        "pt": "Hungria",
        "nl": "Hongarije",
        "hr": "Mađarska",
        "fa": "مجارستان"
      },
      "flag": "https://restcountries.eu/data/hun.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "HUN"
    }, {
      "name": "Iceland",
      "topLevelDomain": [".is"],
      "alpha2Code": "IS",
      "alpha3Code": "ISL",
      "callingCodes": ["354"],
      "capital": "Reykjavík",
      "altSpellings": ["IS", "Island", "Republic of Iceland", "Lýðveldið Ísland"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 334300,
      "latlng": [65.0, -18.0],
      "demonym": "Icelander",
      "area": 103000.0,
      "gini": null,
      "timezones": ["UTC"],
      "borders": [],
      "nativeName": "Ísland",
      "numericCode": "352",
      "currencies": [{
        "code": "ISK",
        "name": "Icelandic króna",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "is",
        "iso639_2": "isl",
        "name": "Icelandic",
        "nativeName": "Íslenska"
      }],
      "translations": {
        "de": "Island",
        "es": "Islandia",
        "fr": "Islande",
        "ja": "アイスランド",
        "it": "Islanda",
        "br": "Islândia",
        "pt": "Islândia",
        "nl": "IJsland",
        "hr": "Island",
        "fa": "ایسلند"
      },
      "flag": "https://restcountries.eu/data/isl.svg",
      "regionalBlocs": [{
        "acronym": "EFTA",
        "name": "European Free Trade Association",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "ISL"
    }, {
      "name": "India",
      "topLevelDomain": [".in"],
      "alpha2Code": "IN",
      "alpha3Code": "IND",
      "callingCodes": ["91"],
      "capital": "New Delhi",
      "altSpellings": ["IN", "Bhārat", "Republic of India", "Bharat Ganrajya"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 1295210000,
      "latlng": [20.0, 77.0],
      "demonym": "Indian",
      "area": 3287590.0,
      "gini": 33.4,
      "timezones": ["UTC+05:30"],
      "borders": ["AFG", "BGD", "BTN", "MMR", "CHN", "NPL", "PAK", "LKA"],
      "nativeName": "भारत",
      "numericCode": "356",
      "currencies": [{
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }],
      "languages": [{
        "iso639_1": "hi",
        "iso639_2": "hin",
        "name": "Hindi",
        "nativeName": "हिन्दी"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Indien",
        "es": "India",
        "fr": "Inde",
        "ja": "インド",
        "it": "India",
        "br": "Índia",
        "pt": "Índia",
        "nl": "India",
        "hr": "Indija",
        "fa": "هند"
      },
      "flag": "https://restcountries.eu/data/ind.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "IND"
    }, {
      "name": "Indonesia",
      "topLevelDomain": [".id"],
      "alpha2Code": "ID",
      "alpha3Code": "IDN",
      "callingCodes": ["62"],
      "capital": "Jakarta",
      "altSpellings": ["ID", "Republic of Indonesia", "Republik Indonesia"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 258705000,
      "latlng": [-5.0, 120.0],
      "demonym": "Indonesian",
      "area": 1904569.0,
      "gini": 34.0,
      "timezones": ["UTC+07:00", "UTC+08:00", "UTC+09:00"],
      "borders": ["TLS", "MYS", "PNG"],
      "nativeName": "Indonesia",
      "numericCode": "360",
      "currencies": [{
        "code": "IDR",
        "name": "Indonesian rupiah",
        "symbol": "Rp"
      }],
      "languages": [{
        "iso639_1": "id",
        "iso639_2": "ind",
        "name": "Indonesian",
        "nativeName": "Bahasa Indonesia"
      }],
      "translations": {
        "de": "Indonesien",
        "es": "Indonesia",
        "fr": "Indonésie",
        "ja": "インドネシア",
        "it": "Indonesia",
        "br": "Indonésia",
        "pt": "Indonésia",
        "nl": "Indonesië",
        "hr": "Indonezija",
        "fa": "اندونزی"
      },
      "flag": "https://restcountries.eu/data/idn.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "INA"
    }, {
      "name": "Côte d'Ivoire",
      "topLevelDomain": [".ci"],
      "alpha2Code": "CI",
      "alpha3Code": "CIV",
      "callingCodes": ["225"],
      "capital": "Yamoussoukro",
      "altSpellings": ["CI", "Ivory Coast", "Republic of Côte d'Ivoire", "République de Côte d'Ivoire"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 22671331,
      "latlng": [8.0, -5.0],
      "demonym": "Ivorian",
      "area": 322463.0,
      "gini": 41.5,
      "timezones": ["UTC"],
      "borders": ["BFA", "GHA", "GIN", "LBR", "MLI"],
      "nativeName": "Côte d'Ivoire",
      "numericCode": "384",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Elfenbeinküste",
        "es": "Costa de Marfil",
        "fr": "Côte d'Ivoire",
        "ja": "コートジボワール",
        "it": "Costa D'Avorio",
        "br": "Costa do Marfim",
        "pt": "Costa do Marfim",
        "nl": "Ivoorkust",
        "hr": "Obala Bjelokosti",
        "fa": "ساحل عاج"
      },
      "flag": "https://restcountries.eu/data/civ.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "CIV"
    }, {
      "name": "Iran (Islamic Republic of)",
      "topLevelDomain": [".ir"],
      "alpha2Code": "IR",
      "alpha3Code": "IRN",
      "callingCodes": ["98"],
      "capital": "Tehran",
      "altSpellings": ["IR", "Islamic Republic of Iran", "Jomhuri-ye Eslāmi-ye Irān"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 79369900,
      "latlng": [32.0, 53.0],
      "demonym": "Iranian",
      "area": 1648195.0,
      "gini": 38.3,
      "timezones": ["UTC+03:30"],
      "borders": ["AFG", "ARM", "AZE", "IRQ", "PAK", "TUR", "TKM"],
      "nativeName": "ایران",
      "numericCode": "364",
      "currencies": [{
        "code": "IRR",
        "name": "Iranian rial",
        "symbol": "﷼"
      }],
      "languages": [{
        "iso639_1": "fa",
        "iso639_2": "fas",
        "name": "Persian (Farsi)",
        "nativeName": "فارسی"
      }],
      "translations": {
        "de": "Iran",
        "es": "Iran",
        "fr": "Iran",
        "ja": "イラン・イスラム共和国",
        "it": null,
        "br": "Irã",
        "pt": "Irão",
        "nl": "Iran",
        "hr": "Iran",
        "fa": "ایران"
      },
      "flag": "https://restcountries.eu/data/irn.svg",
      "regionalBlocs": [],
      "cioc": "IRI"
    }, {
      "name": "Iraq",
      "topLevelDomain": [".iq"],
      "alpha2Code": "IQ",
      "alpha3Code": "IRQ",
      "callingCodes": ["964"],
      "capital": "Baghdad",
      "altSpellings": ["IQ", "Republic of Iraq", "Jumhūriyyat al-‘Irāq"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 37883543,
      "latlng": [33.0, 44.0],
      "demonym": "Iraqi",
      "area": 438317.0,
      "gini": 30.9,
      "timezones": ["UTC+03:00"],
      "borders": ["IRN", "JOR", "KWT", "SAU", "SYR", "TUR"],
      "nativeName": "العراق",
      "numericCode": "368",
      "currencies": [{
        "code": "IQD",
        "name": "Iraqi dinar",
        "symbol": "ع.د"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }, {
        "iso639_1": "ku",
        "iso639_2": "kur",
        "name": "Kurdish",
        "nativeName": "Kurdî"
      }],
      "translations": {
        "de": "Irak",
        "es": "Irak",
        "fr": "Irak",
        "ja": "イラク",
        "it": "Iraq",
        "br": "Iraque",
        "pt": "Iraque",
        "nl": "Irak",
        "hr": "Irak",
        "fa": "عراق"
      },
      "flag": "https://restcountries.eu/data/irq.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "IRQ"
    }, {
      "name": "Ireland",
      "topLevelDomain": [".ie"],
      "alpha2Code": "IE",
      "alpha3Code": "IRL",
      "callingCodes": ["353"],
      "capital": "Dublin",
      "altSpellings": ["IE", "Éire", "Republic of Ireland", "Poblacht na hÉireann"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 6378000,
      "latlng": [53.0, -8.0],
      "demonym": "Irish",
      "area": 70273.0,
      "gini": 34.3,
      "timezones": ["UTC"],
      "borders": ["GBR"],
      "nativeName": "Éire",
      "numericCode": "372",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "ga",
        "iso639_2": "gle",
        "name": "Irish",
        "nativeName": "Gaeilge"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Irland",
        "es": "Irlanda",
        "fr": "Irlande",
        "ja": "アイルランド",
        "it": "Irlanda",
        "br": "Irlanda",
        "pt": "Irlanda",
        "nl": "Ierland",
        "hr": "Irska",
        "fa": "ایرلند"
      },
      "flag": "https://restcountries.eu/data/irl.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "IRL"
    }, {
      "name": "Isle of Man",
      "topLevelDomain": [".im"],
      "alpha2Code": "IM",
      "alpha3Code": "IMN",
      "callingCodes": ["44"],
      "capital": "Douglas",
      "altSpellings": ["IM", "Ellan Vannin", "Mann", "Mannin"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 84497,
      "latlng": [54.25, -4.5],
      "demonym": "Manx",
      "area": 572.0,
      "gini": null,
      "timezones": ["UTC+00:00"],
      "borders": [],
      "nativeName": "Isle of Man",
      "numericCode": "833",
      "currencies": [{
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }, {
        "code": "IMP[G]",
        "name": "Manx pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "gv",
        "iso639_2": "glv",
        "name": "Manx",
        "nativeName": "Gaelg"
      }],
      "translations": {
        "de": "Insel Man",
        "es": "Isla de Man",
        "fr": "Île de Man",
        "ja": "マン島",
        "it": "Isola di Man",
        "br": "Ilha de Man",
        "pt": "Ilha de Man",
        "nl": "Isle of Man",
        "hr": "Otok Man",
        "fa": "جزیره من"
      },
      "flag": "https://restcountries.eu/data/imn.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": ""
    }, {
      "name": "Israel",
      "topLevelDomain": [".il"],
      "alpha2Code": "IL",
      "alpha3Code": "ISR",
      "callingCodes": ["972"],
      "capital": "Jerusalem",
      "altSpellings": ["IL", "State of Israel", "Medīnat Yisrā'el"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 8527400,
      "latlng": [31.5, 34.75],
      "demonym": "Israeli",
      "area": 20770.0,
      "gini": 39.2,
      "timezones": ["UTC+02:00"],
      "borders": ["EGY", "JOR", "LBN", "SYR"],
      "nativeName": "יִשְׂרָאֵל",
      "numericCode": "376",
      "currencies": [{
        "code": "ILS",
        "name": "Israeli new shekel",
        "symbol": "₪"
      }],
      "languages": [{
        "iso639_1": "he",
        "iso639_2": "heb",
        "name": "Hebrew (modern)",
        "nativeName": "עברית"
      }, {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Israel",
        "es": "Israel",
        "fr": "Israël",
        "ja": "イスラエル",
        "it": "Israele",
        "br": "Israel",
        "pt": "Israel",
        "nl": "Israël",
        "hr": "Izrael",
        "fa": "اسرائیل"
      },
      "flag": "https://restcountries.eu/data/isr.svg",
      "regionalBlocs": [],
      "cioc": "ISR"
    }, {
      "name": "Italy",
      "topLevelDomain": [".it"],
      "alpha2Code": "IT",
      "alpha3Code": "ITA",
      "callingCodes": ["39"],
      "capital": "Rome",
      "altSpellings": ["IT", "Italian Republic", "Repubblica italiana"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 60665551,
      "latlng": [42.83333333, 12.83333333],
      "demonym": "Italian",
      "area": 301336.0,
      "gini": 36.0,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "FRA", "SMR", "SVN", "CHE", "VAT"],
      "nativeName": "Italia",
      "numericCode": "380",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      }],
      "translations": {
        "de": "Italien",
        "es": "Italia",
        "fr": "Italie",
        "ja": "イタリア",
        "it": "Italia",
        "br": "Itália",
        "pt": "Itália",
        "nl": "Italië",
        "hr": "Italija",
        "fa": "ایتالیا"
      },
      "flag": "https://restcountries.eu/data/ita.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "ITA"
    }, {
      "name": "Jamaica",
      "topLevelDomain": [".jm"],
      "alpha2Code": "JM",
      "alpha3Code": "JAM",
      "callingCodes": ["1876"],
      "capital": "Kingston",
      "altSpellings": ["JM"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 2723246,
      "latlng": [18.25, -77.5],
      "demonym": "Jamaican",
      "area": 10991.0,
      "gini": 45.5,
      "timezones": ["UTC-05:00"],
      "borders": [],
      "nativeName": "Jamaica",
      "numericCode": "388",
      "currencies": [{
        "code": "JMD",
        "name": "Jamaican dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Jamaika",
        "es": "Jamaica",
        "fr": "Jamaïque",
        "ja": "ジャマイカ",
        "it": "Giamaica",
        "br": "Jamaica",
        "pt": "Jamaica",
        "nl": "Jamaica",
        "hr": "Jamajka",
        "fa": "جامائیکا"
      },
      "flag": "https://restcountries.eu/data/jam.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "JAM"
    }, {
      "name": "Japan",
      "topLevelDomain": [".jp"],
      "alpha2Code": "JP",
      "alpha3Code": "JPN",
      "callingCodes": ["81"],
      "capital": "Tokyo",
      "altSpellings": ["JP", "Nippon", "Nihon"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 126960000,
      "latlng": [36.0, 138.0],
      "demonym": "Japanese",
      "area": 377930.0,
      "gini": 38.1,
      "timezones": ["UTC+09:00"],
      "borders": [],
      "nativeName": "日本",
      "numericCode": "392",
      "currencies": [{
        "code": "JPY",
        "name": "Japanese yen",
        "symbol": "¥"
      }],
      "languages": [{
        "iso639_1": "ja",
        "iso639_2": "jpn",
        "name": "Japanese",
        "nativeName": "日本語 (にほんご)"
      }],
      "translations": {
        "de": "Japan",
        "es": "Japón",
        "fr": "Japon",
        "ja": "日本",
        "it": "Giappone",
        "br": "Japão",
        "pt": "Japão",
        "nl": "Japan",
        "hr": "Japan",
        "fa": "ژاپن"
      },
      "flag": "https://restcountries.eu/data/jpn.svg",
      "regionalBlocs": [],
      "cioc": "JPN"
    }, {
      "name": "Jersey",
      "topLevelDomain": [".je"],
      "alpha2Code": "JE",
      "alpha3Code": "JEY",
      "callingCodes": ["44"],
      "capital": "Saint Helier",
      "altSpellings": ["JE", "Bailiwick of Jersey", "Bailliage de Jersey", "Bailliage dé Jèrri"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 100800,
      "latlng": [49.25, -2.16666666],
      "demonym": "Channel Islander",
      "area": 116.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": [],
      "nativeName": "Jersey",
      "numericCode": "832",
      "currencies": [{
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }, {
        "code": "JEP[G]",
        "name": "Jersey pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Jersey",
        "es": "Jersey",
        "fr": "Jersey",
        "ja": "ジャージー",
        "it": "Isola di Jersey",
        "br": "Jersey",
        "pt": "Jersey",
        "nl": "Jersey",
        "hr": "Jersey",
        "fa": "جرزی"
      },
      "flag": "https://restcountries.eu/data/jey.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Jordan",
      "topLevelDomain": [".jo"],
      "alpha2Code": "JO",
      "alpha3Code": "JOR",
      "callingCodes": ["962"],
      "capital": "Amman",
      "altSpellings": ["JO", "Hashemite Kingdom of Jordan", "al-Mamlakah al-Urdunīyah al-Hāshimīyah"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 9531712,
      "latlng": [31.0, 36.0],
      "demonym": "Jordanian",
      "area": 89342.0,
      "gini": 35.4,
      "timezones": ["UTC+03:00"],
      "borders": ["IRQ", "ISR", "SAU", "SYR"],
      "nativeName": "الأردن",
      "numericCode": "400",
      "currencies": [{
        "code": "JOD",
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Jordanien",
        "es": "Jordania",
        "fr": "Jordanie",
        "ja": "ヨルダン",
        "it": "Giordania",
        "br": "Jordânia",
        "pt": "Jordânia",
        "nl": "Jordanië",
        "hr": "Jordan",
        "fa": "اردن"
      },
      "flag": "https://restcountries.eu/data/jor.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "JOR"
    }, {
      "name": "Kazakhstan",
      "topLevelDomain": [".kz", ".қаз"],
      "alpha2Code": "KZ",
      "alpha3Code": "KAZ",
      "callingCodes": ["76", "77"],
      "capital": "Astana",
      "altSpellings": ["KZ", "Qazaqstan", "Казахстан", "Republic of Kazakhstan", "Қазақстан Республикасы", "Qazaqstan Respublïkası", "Республика Казахстан", "Respublika Kazakhstan"],
      "region": "Asia",
      "subregion": "Central Asia",
      "population": 17753200,
      "latlng": [48.0, 68.0],
      "demonym": "Kazakhstani",
      "area": 2724900.0,
      "gini": 29.0,
      "timezones": ["UTC+05:00", "UTC+06:00"],
      "borders": ["CHN", "KGZ", "RUS", "TKM", "UZB"],
      "nativeName": "Қазақстан",
      "numericCode": "398",
      "currencies": [{
        "code": "KZT",
        "name": "Kazakhstani tenge",
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "kk",
        "iso639_2": "kaz",
        "name": "Kazakh",
        "nativeName": "қазақ тілі"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Kasachstan",
        "es": "Kazajistán",
        "fr": "Kazakhstan",
        "ja": "カザフスタン",
        "it": "Kazakistan",
        "br": "Cazaquistão",
        "pt": "Cazaquistão",
        "nl": "Kazachstan",
        "hr": "Kazahstan",
        "fa": "قزاقستان"
      },
      "flag": "https://restcountries.eu/data/kaz.svg",
      "regionalBlocs": [{
        "acronym": "EEU",
        "name": "Eurasian Economic Union",
        "otherAcronyms": ["EAEU"],
        "otherNames": []
      }],
      "cioc": "KAZ"
    }, {
      "name": "Kenya",
      "topLevelDomain": [".ke"],
      "alpha2Code": "KE",
      "alpha3Code": "KEN",
      "callingCodes": ["254"],
      "capital": "Nairobi",
      "altSpellings": ["KE", "Republic of Kenya", "Jamhuri ya Kenya"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 47251000,
      "latlng": [1.0, 38.0],
      "demonym": "Kenyan",
      "area": 580367.0,
      "gini": 47.7,
      "timezones": ["UTC+03:00"],
      "borders": ["ETH", "SOM", "SSD", "TZA", "UGA"],
      "nativeName": "Kenya",
      "numericCode": "404",
      "currencies": [{
        "code": "KES",
        "name": "Kenyan shilling",
        "symbol": "Sh"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      }],
      "translations": {
        "de": "Kenia",
        "es": "Kenia",
        "fr": "Kenya",
        "ja": "ケニア",
        "it": "Kenya",
        "br": "Quênia",
        "pt": "Quénia",
        "nl": "Kenia",
        "hr": "Kenija",
        "fa": "کنیا"
      },
      "flag": "https://restcountries.eu/data/ken.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "KEN"
    }, {
      "name": "Kiribati",
      "topLevelDomain": [".ki"],
      "alpha2Code": "KI",
      "alpha3Code": "KIR",
      "callingCodes": ["686"],
      "capital": "South Tarawa",
      "altSpellings": ["KI", "Republic of Kiribati", "Ribaberiki Kiribati"],
      "region": "Oceania",
      "subregion": "Micronesia",
      "population": 113400,
      "latlng": [1.41666666, 173.0],
      "demonym": "I-Kiribati",
      "area": 811.0,
      "gini": null,
      "timezones": ["UTC+12:00", "UTC+13:00", "UTC+14:00"],
      "borders": [],
      "nativeName": "Kiribati",
      "numericCode": "296",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }, {
        "code": "(none)",
        "name": "Kiribati dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Kiribati",
        "es": "Kiribati",
        "fr": "Kiribati",
        "ja": "キリバス",
        "it": "Kiribati",
        "br": "Kiribati",
        "pt": "Quiribáti",
        "nl": "Kiribati",
        "hr": "Kiribati",
        "fa": "کیریباتی"
      },
      "flag": "https://restcountries.eu/data/kir.svg",
      "regionalBlocs": [],
      "cioc": "KIR"
    }, {
      "name": "Kuwait",
      "topLevelDomain": [".kw"],
      "alpha2Code": "KW",
      "alpha3Code": "KWT",
      "callingCodes": ["965"],
      "capital": "Kuwait City",
      "altSpellings": ["KW", "State of Kuwait", "Dawlat al-Kuwait"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 4183658,
      "latlng": [29.5, 45.75],
      "demonym": "Kuwaiti",
      "area": 17818.0,
      "gini": null,
      "timezones": ["UTC+03:00"],
      "borders": ["IRN", "SAU"],
      "nativeName": "الكويت",
      "numericCode": "414",
      "currencies": [{
        "code": "KWD",
        "name": "Kuwaiti dinar",
        "symbol": "د.ك"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Kuwait",
        "es": "Kuwait",
        "fr": "Koweït",
        "ja": "クウェート",
        "it": "Kuwait",
        "br": "Kuwait",
        "pt": "Kuwait",
        "nl": "Koeweit",
        "hr": "Kuvajt",
        "fa": "کویت"
      },
      "flag": "https://restcountries.eu/data/kwt.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "KUW"
    }, {
      "name": "Kyrgyzstan",
      "topLevelDomain": [".kg"],
      "alpha2Code": "KG",
      "alpha3Code": "KGZ",
      "callingCodes": ["996"],
      "capital": "Bishkek",
      "altSpellings": ["KG", "Киргизия", "Kyrgyz Republic", "Кыргыз Республикасы", "Kyrgyz Respublikasy"],
      "region": "Asia",
      "subregion": "Central Asia",
      "population": 6047800,
      "latlng": [41.0, 75.0],
      "demonym": "Kirghiz",
      "area": 199951.0,
      "gini": 36.2,
      "timezones": ["UTC+06:00"],
      "borders": ["CHN", "KAZ", "TJK", "UZB"],
      "nativeName": "Кыргызстан",
      "numericCode": "417",
      "currencies": [{
        "code": "KGS",
        "name": "Kyrgyzstani som",
        "symbol": "с"
      }],
      "languages": [{
        "iso639_1": "ky",
        "iso639_2": "kir",
        "name": "Kyrgyz",
        "nativeName": "Кыргызча"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Kirgisistan",
        "es": "Kirguizistán",
        "fr": "Kirghizistan",
        "ja": "キルギス",
        "it": "Kirghizistan",
        "br": "Quirguistão",
        "pt": "Quirguizistão",
        "nl": "Kirgizië",
        "hr": "Kirgistan",
        "fa": "قرقیزستان"
      },
      "flag": "https://restcountries.eu/data/kgz.svg",
      "regionalBlocs": [{
        "acronym": "EEU",
        "name": "Eurasian Economic Union",
        "otherAcronyms": ["EAEU"],
        "otherNames": []
      }],
      "cioc": "KGZ"
    }, {
      "name": "Lao People's Democratic Republic",
      "topLevelDomain": [".la"],
      "alpha2Code": "LA",
      "alpha3Code": "LAO",
      "callingCodes": ["856"],
      "capital": "Vientiane",
      "altSpellings": ["LA", "Lao", "Laos", "Lao People's Democratic Republic", "Sathalanalat Paxathipatai Paxaxon Lao"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 6492400,
      "latlng": [18.0, 105.0],
      "demonym": "Laotian",
      "area": 236800.0,
      "gini": 36.7,
      "timezones": ["UTC+07:00"],
      "borders": ["MMR", "KHM", "CHN", "THA", "VNM"],
      "nativeName": "ສປປລາວ",
      "numericCode": "418",
      "currencies": [{
        "code": "LAK",
        "name": "Lao kip",
        "symbol": "₭"
      }],
      "languages": [{
        "iso639_1": "lo",
        "iso639_2": "lao",
        "name": "Lao",
        "nativeName": "ພາສາລາວ"
      }],
      "translations": {
        "de": "Laos",
        "es": "Laos",
        "fr": "Laos",
        "ja": "ラオス人民民主共和国",
        "it": "Laos",
        "br": "Laos",
        "pt": "Laos",
        "nl": "Laos",
        "hr": "Laos",
        "fa": "لائوس"
      },
      "flag": "https://restcountries.eu/data/lao.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "LAO"
    }, {
      "name": "Latvia",
      "topLevelDomain": [".lv"],
      "alpha2Code": "LV",
      "alpha3Code": "LVA",
      "callingCodes": ["371"],
      "capital": "Riga",
      "altSpellings": ["LV", "Republic of Latvia", "Latvijas Republika"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 1961600,
      "latlng": [57.0, 25.0],
      "demonym": "Latvian",
      "area": 64559.0,
      "gini": 36.6,
      "timezones": ["UTC+02:00"],
      "borders": ["BLR", "EST", "LTU", "RUS"],
      "nativeName": "Latvija",
      "numericCode": "428",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "lv",
        "iso639_2": "lav",
        "name": "Latvian",
        "nativeName": "latviešu valoda"
      }],
      "translations": {
        "de": "Lettland",
        "es": "Letonia",
        "fr": "Lettonie",
        "ja": "ラトビア",
        "it": "Lettonia",
        "br": "Letônia",
        "pt": "Letónia",
        "nl": "Letland",
        "hr": "Latvija",
        "fa": "لتونی"
      },
      "flag": "https://restcountries.eu/data/lva.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "LAT"
    }, {
      "name": "Lebanon",
      "topLevelDomain": [".lb"],
      "alpha2Code": "LB",
      "alpha3Code": "LBN",
      "callingCodes": ["961"],
      "capital": "Beirut",
      "altSpellings": ["LB", "Lebanese Republic", "Al-Jumhūrīyah Al-Libnānīyah"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 5988000,
      "latlng": [33.83333333, 35.83333333],
      "demonym": "Lebanese",
      "area": 10452.0,
      "gini": null,
      "timezones": ["UTC+02:00"],
      "borders": ["ISR", "SYR"],
      "nativeName": "لبنان",
      "numericCode": "422",
      "currencies": [{
        "code": "LBP",
        "name": "Lebanese pound",
        "symbol": "ل.ل"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Libanon",
        "es": "Líbano",
        "fr": "Liban",
        "ja": "レバノン",
        "it": "Libano",
        "br": "Líbano",
        "pt": "Líbano",
        "nl": "Libanon",
        "hr": "Libanon",
        "fa": "لبنان"
      },
      "flag": "https://restcountries.eu/data/lbn.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "LIB"
    }, {
      "name": "Lesotho",
      "topLevelDomain": [".ls"],
      "alpha2Code": "LS",
      "alpha3Code": "LSO",
      "callingCodes": ["266"],
      "capital": "Maseru",
      "altSpellings": ["LS", "Kingdom of Lesotho", "Muso oa Lesotho"],
      "region": "Africa",
      "subregion": "Southern Africa",
      "population": 1894194,
      "latlng": [-29.5, 28.5],
      "demonym": "Mosotho",
      "area": 30355.0,
      "gini": 52.5,
      "timezones": ["UTC+02:00"],
      "borders": ["ZAF"],
      "nativeName": "Lesotho",
      "numericCode": "426",
      "currencies": [{
        "code": "LSL",
        "name": "Lesotho loti",
        "symbol": "L"
      }, {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "st",
        "iso639_2": "sot",
        "name": "Southern Sotho",
        "nativeName": "Sesotho"
      }],
      "translations": {
        "de": "Lesotho",
        "es": "Lesotho",
        "fr": "Lesotho",
        "ja": "レソト",
        "it": "Lesotho",
        "br": "Lesoto",
        "pt": "Lesoto",
        "nl": "Lesotho",
        "hr": "Lesoto",
        "fa": "لسوتو"
      },
      "flag": "https://restcountries.eu/data/lso.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "LES"
    }, {
      "name": "Liberia",
      "topLevelDomain": [".lr"],
      "alpha2Code": "LR",
      "alpha3Code": "LBR",
      "callingCodes": ["231"],
      "capital": "Monrovia",
      "altSpellings": ["LR", "Republic of Liberia"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 4615000,
      "latlng": [6.5, -9.5],
      "demonym": "Liberian",
      "area": 111369.0,
      "gini": 38.2,
      "timezones": ["UTC"],
      "borders": ["GIN", "CIV", "SLE"],
      "nativeName": "Liberia",
      "numericCode": "430",
      "currencies": [{
        "code": "LRD",
        "name": "Liberian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Liberia",
        "es": "Liberia",
        "fr": "Liberia",
        "ja": "リベリア",
        "it": "Liberia",
        "br": "Libéria",
        "pt": "Libéria",
        "nl": "Liberia",
        "hr": "Liberija",
        "fa": "لیبریا"
      },
      "flag": "https://restcountries.eu/data/lbr.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "LBR"
    }, {
      "name": "Libya",
      "topLevelDomain": [".ly"],
      "alpha2Code": "LY",
      "alpha3Code": "LBY",
      "callingCodes": ["218"],
      "capital": "Tripoli",
      "altSpellings": ["LY", "State of Libya", "Dawlat Libya"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "population": 6385000,
      "latlng": [25.0, 17.0],
      "demonym": "Libyan",
      "area": 1759540.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["DZA", "TCD", "EGY", "NER", "SDN", "TUN"],
      "nativeName": "‏ليبيا",
      "numericCode": "434",
      "currencies": [{
        "code": "LYD",
        "name": "Libyan dinar",
        "symbol": "ل.د"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Libyen",
        "es": "Libia",
        "fr": "Libye",
        "ja": "リビア",
        "it": "Libia",
        "br": "Líbia",
        "pt": "Líbia",
        "nl": "Libië",
        "hr": "Libija",
        "fa": "لیبی"
      },
      "flag": "https://restcountries.eu/data/lby.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "LBA"
    }, {
      "name": "Liechtenstein",
      "topLevelDomain": [".li"],
      "alpha2Code": "LI",
      "alpha3Code": "LIE",
      "callingCodes": ["423"],
      "capital": "Vaduz",
      "altSpellings": ["LI", "Principality of Liechtenstein", "Fürstentum Liechtenstein"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 37623,
      "latlng": [47.26666666, 9.53333333],
      "demonym": "Liechtensteiner",
      "area": 160.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "CHE"],
      "nativeName": "Liechtenstein",
      "numericCode": "438",
      "currencies": [{
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }],
      "translations": {
        "de": "Liechtenstein",
        "es": "Liechtenstein",
        "fr": "Liechtenstein",
        "ja": "リヒテンシュタイン",
        "it": "Liechtenstein",
        "br": "Liechtenstein",
        "pt": "Listenstaine",
        "nl": "Liechtenstein",
        "hr": "Lihtenštajn",
        "fa": "لیختن‌اشتاین"
      },
      "flag": "https://restcountries.eu/data/lie.svg",
      "regionalBlocs": [{
        "acronym": "EFTA",
        "name": "European Free Trade Association",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "LIE"
    }, {
      "name": "Lithuania",
      "topLevelDomain": [".lt"],
      "alpha2Code": "LT",
      "alpha3Code": "LTU",
      "callingCodes": ["370"],
      "capital": "Vilnius",
      "altSpellings": ["LT", "Republic of Lithuania", "Lietuvos Respublika"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 2872294,
      "latlng": [56.0, 24.0],
      "demonym": "Lithuanian",
      "area": 65300.0,
      "gini": 37.6,
      "timezones": ["UTC+02:00"],
      "borders": ["BLR", "LVA", "POL", "RUS"],
      "nativeName": "Lietuva",
      "numericCode": "440",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "lt",
        "iso639_2": "lit",
        "name": "Lithuanian",
        "nativeName": "lietuvių kalba"
      }],
      "translations": {
        "de": "Litauen",
        "es": "Lituania",
        "fr": "Lituanie",
        "ja": "リトアニア",
        "it": "Lituania",
        "br": "Lituânia",
        "pt": "Lituânia",
        "nl": "Litouwen",
        "hr": "Litva",
        "fa": "لیتوانی"
      },
      "flag": "https://restcountries.eu/data/ltu.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "LTU"
    }, {
      "name": "Luxembourg",
      "topLevelDomain": [".lu"],
      "alpha2Code": "LU",
      "alpha3Code": "LUX",
      "callingCodes": ["352"],
      "capital": "Luxembourg",
      "altSpellings": ["LU", "Grand Duchy of Luxembourg", "Grand-Duché de Luxembourg", "Großherzogtum Luxemburg", "Groussherzogtum Lëtzebuerg"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 576200,
      "latlng": [49.75, 6.16666666],
      "demonym": "Luxembourger",
      "area": 2586.0,
      "gini": 30.8,
      "timezones": ["UTC+01:00"],
      "borders": ["BEL", "FRA", "DEU"],
      "nativeName": "Luxembourg",
      "numericCode": "442",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }, {
        "iso639_1": "lb",
        "iso639_2": "ltz",
        "name": "Luxembourgish",
        "nativeName": "Lëtzebuergesch"
      }],
      "translations": {
        "de": "Luxemburg",
        "es": "Luxemburgo",
        "fr": "Luxembourg",
        "ja": "ルクセンブルク",
        "it": "Lussemburgo",
        "br": "Luxemburgo",
        "pt": "Luxemburgo",
        "nl": "Luxemburg",
        "hr": "Luksemburg",
        "fa": "لوکزامبورگ"
      },
      "flag": "https://restcountries.eu/data/lux.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "LUX"
    }, {
      "name": "Macao",
      "topLevelDomain": [".mo"],
      "alpha2Code": "MO",
      "alpha3Code": "MAC",
      "callingCodes": ["853"],
      "capital": "",
      "altSpellings": ["MO", "澳门", "Macao Special Administrative Region of the People's Republic of China", "中華人民共和國澳門特別行政區", "Região Administrativa Especial de Macau da República Popular da China"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 649100,
      "latlng": [22.16666666, 113.55],
      "demonym": "Chinese",
      "area": 30.0,
      "gini": null,
      "timezones": ["UTC+08:00"],
      "borders": ["CHN"],
      "nativeName": "澳門",
      "numericCode": "446",
      "currencies": [{
        "code": "MOP",
        "name": "Macanese pataca",
        "symbol": "P"
      }],
      "languages": [{
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }, {
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Macao",
        "es": "Macao",
        "fr": "Macao",
        "ja": "マカオ",
        "it": "Macao",
        "br": "Macau",
        "pt": "Macau",
        "nl": "Macao",
        "hr": "Makao",
        "fa": "مکائو"
      },
      "flag": "https://restcountries.eu/data/mac.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Macedonia (the former Yugoslav Republic of)",
      "topLevelDomain": [".mk"],
      "alpha2Code": "MK",
      "alpha3Code": "MKD",
      "callingCodes": ["389"],
      "capital": "Skopje",
      "altSpellings": ["MK", "Republic of Macedonia", "Република Македонија"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 2058539,
      "latlng": [41.83333333, 22.0],
      "demonym": "Macedonian",
      "area": 25713.0,
      "gini": 43.2,
      "timezones": ["UTC+01:00"],
      "borders": ["ALB", "BGR", "GRC", "KOS", "SRB"],
      "nativeName": "Македонија",
      "numericCode": "807",
      "currencies": [{
        "code": "MKD",
        "name": "Macedonian denar",
        "symbol": "ден"
      }],
      "languages": [{
        "iso639_1": "mk",
        "iso639_2": "mkd",
        "name": "Macedonian",
        "nativeName": "македонски јазик"
      }],
      "translations": {
        "de": "Mazedonien",
        "es": "Macedonia",
        "fr": "Macédoine",
        "ja": "マケドニア旧ユーゴスラビア共和国",
        "it": "Macedonia",
        "br": "Macedônia",
        "pt": "Macedónia",
        "nl": "Macedonië",
        "hr": "Makedonija",
        "fa": ""
      },
      "flag": "https://restcountries.eu/data/mkd.svg",
      "regionalBlocs": [{
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "MKD"
    }, {
      "name": "Madagascar",
      "topLevelDomain": [".mg"],
      "alpha2Code": "MG",
      "alpha3Code": "MDG",
      "callingCodes": ["261"],
      "capital": "Antananarivo",
      "altSpellings": ["MG", "Republic of Madagascar", "Repoblikan'i Madagasikara", "République de Madagascar"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 22434363,
      "latlng": [-20.0, 47.0],
      "demonym": "Malagasy",
      "area": 587041.0,
      "gini": 44.1,
      "timezones": ["UTC+03:00"],
      "borders": [],
      "nativeName": "Madagasikara",
      "numericCode": "450",
      "currencies": [{
        "code": "MGA",
        "name": "Malagasy ariary",
        "symbol": "Ar"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "mg",
        "iso639_2": "mlg",
        "name": "Malagasy",
        "nativeName": "fiteny malagasy"
      }],
      "translations": {
        "de": "Madagaskar",
        "es": "Madagascar",
        "fr": "Madagascar",
        "ja": "マダガスカル",
        "it": "Madagascar",
        "br": "Madagascar",
        "pt": "Madagáscar",
        "nl": "Madagaskar",
        "hr": "Madagaskar",
        "fa": "ماداگاسکار"
      },
      "flag": "https://restcountries.eu/data/mdg.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "MAD"
    }, {
      "name": "Malawi",
      "topLevelDomain": [".mw"],
      "alpha2Code": "MW",
      "alpha3Code": "MWI",
      "callingCodes": ["265"],
      "capital": "Lilongwe",
      "altSpellings": ["MW", "Republic of Malawi"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 16832910,
      "latlng": [-13.5, 34.0],
      "demonym": "Malawian",
      "area": 118484.0,
      "gini": 39.0,
      "timezones": ["UTC+02:00"],
      "borders": ["MOZ", "TZA", "ZMB"],
      "nativeName": "Malawi",
      "numericCode": "454",
      "currencies": [{
        "code": "MWK",
        "name": "Malawian kwacha",
        "symbol": "MK"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "ny",
        "iso639_2": "nya",
        "name": "Chichewa",
        "nativeName": "chiCheŵa"
      }],
      "translations": {
        "de": "Malawi",
        "es": "Malawi",
        "fr": "Malawi",
        "ja": "マラウイ",
        "it": "Malawi",
        "br": "Malawi",
        "pt": "Malávi",
        "nl": "Malawi",
        "hr": "Malavi",
        "fa": "مالاوی"
      },
      "flag": "https://restcountries.eu/data/mwi.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "MAW"
    }, {
      "name": "Malaysia",
      "topLevelDomain": [".my"],
      "alpha2Code": "MY",
      "alpha3Code": "MYS",
      "callingCodes": ["60"],
      "capital": "Kuala Lumpur",
      "altSpellings": ["MY"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 31405416,
      "latlng": [2.5, 112.5],
      "demonym": "Malaysian",
      "area": 330803.0,
      "gini": 46.2,
      "timezones": ["UTC+08:00"],
      "borders": ["BRN", "IDN", "THA"],
      "nativeName": "Malaysia",
      "numericCode": "458",
      "currencies": [{
        "code": "MYR",
        "name": "Malaysian ringgit",
        "symbol": "RM"
      }],
      "languages": [{
        "iso639_1": null,
        "iso639_2": "zsm",
        "name": "Malaysian",
        "nativeName": "بهاس مليسيا"
      }],
      "translations": {
        "de": "Malaysia",
        "es": "Malasia",
        "fr": "Malaisie",
        "ja": "マレーシア",
        "it": "Malesia",
        "br": "Malásia",
        "pt": "Malásia",
        "nl": "Maleisië",
        "hr": "Malezija",
        "fa": "مالزی"
      },
      "flag": "https://restcountries.eu/data/mys.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "MAS"
    }, {
      "name": "Maldives",
      "topLevelDomain": [".mv"],
      "alpha2Code": "MV",
      "alpha3Code": "MDV",
      "callingCodes": ["960"],
      "capital": "Malé",
      "altSpellings": ["MV", "Maldive Islands", "Republic of the Maldives", "Dhivehi Raajjeyge Jumhooriyya"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 344023,
      "latlng": [3.25, 73.0],
      "demonym": "Maldivan",
      "area": 300.0,
      "gini": 37.4,
      "timezones": ["UTC+05:00"],
      "borders": [],
      "nativeName": "Maldives",
      "numericCode": "462",
      "currencies": [{
        "code": "MVR",
        "name": "Maldivian rufiyaa",
        "symbol": ".ރ"
      }],
      "languages": [{
        "iso639_1": "dv",
        "iso639_2": "div",
        "name": "Divehi",
        "nativeName": "ދިވެހި"
      }],
      "translations": {
        "de": "Malediven",
        "es": "Maldivas",
        "fr": "Maldives",
        "ja": "モルディブ",
        "it": "Maldive",
        "br": "Maldivas",
        "pt": "Maldivas",
        "nl": "Maldiven",
        "hr": "Maldivi",
        "fa": "مالدیو"
      },
      "flag": "https://restcountries.eu/data/mdv.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "MDV"
    }, {
      "name": "Mali",
      "topLevelDomain": [".ml"],
      "alpha2Code": "ML",
      "alpha3Code": "MLI",
      "callingCodes": ["223"],
      "capital": "Bamako",
      "altSpellings": ["ML", "Republic of Mali", "République du Mali"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 18135000,
      "latlng": [17.0, -4.0],
      "demonym": "Malian",
      "area": 1240192.0,
      "gini": 33.0,
      "timezones": ["UTC"],
      "borders": ["DZA", "BFA", "GIN", "CIV", "MRT", "NER", "SEN"],
      "nativeName": "Mali",
      "numericCode": "466",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Mali",
        "es": "Mali",
        "fr": "Mali",
        "ja": "マリ",
        "it": "Mali",
        "br": "Mali",
        "pt": "Mali",
        "nl": "Mali",
        "hr": "Mali",
        "fa": "مالی"
      },
      "flag": "https://restcountries.eu/data/mli.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "MLI"
    }, {
      "name": "Malta",
      "topLevelDomain": [".mt"],
      "alpha2Code": "MT",
      "alpha3Code": "MLT",
      "callingCodes": ["356"],
      "capital": "Valletta",
      "altSpellings": ["MT", "Republic of Malta", "Repubblika ta' Malta"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 425384,
      "latlng": [35.83333333, 14.58333333],
      "demonym": "Maltese",
      "area": 316.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": [],
      "nativeName": "Malta",
      "numericCode": "470",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "mt",
        "iso639_2": "mlt",
        "name": "Maltese",
        "nativeName": "Malti"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Malta",
        "es": "Malta",
        "fr": "Malte",
        "ja": "マルタ",
        "it": "Malta",
        "br": "Malta",
        "pt": "Malta",
        "nl": "Malta",
        "hr": "Malta",
        "fa": "مالت"
      },
      "flag": "https://restcountries.eu/data/mlt.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "MLT"
    }, {
      "name": "Marshall Islands",
      "topLevelDomain": [".mh"],
      "alpha2Code": "MH",
      "alpha3Code": "MHL",
      "callingCodes": ["692"],
      "capital": "Majuro",
      "altSpellings": ["MH", "Republic of the Marshall Islands", "Aolepān Aorōkin M̧ajeļ"],
      "region": "Oceania",
      "subregion": "Micronesia",
      "population": 54880,
      "latlng": [9.0, 168.0],
      "demonym": "Marshallese",
      "area": 181.0,
      "gini": null,
      "timezones": ["UTC+12:00"],
      "borders": [],
      "nativeName": "M̧ajeļ",
      "numericCode": "584",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "mh",
        "iso639_2": "mah",
        "name": "Marshallese",
        "nativeName": "Kajin M̧ajeļ"
      }],
      "translations": {
        "de": "Marshallinseln",
        "es": "Islas Marshall",
        "fr": "Îles Marshall",
        "ja": "マーシャル諸島",
        "it": "Isole Marshall",
        "br": "Ilhas Marshall",
        "pt": "Ilhas Marshall",
        "nl": "Marshalleilanden",
        "hr": "Maršalovi Otoci",
        "fa": "جزایر مارشال"
      },
      "flag": "https://restcountries.eu/data/mhl.svg",
      "regionalBlocs": [],
      "cioc": "MHL"
    }, {
      "name": "Martinique",
      "topLevelDomain": [".mq"],
      "alpha2Code": "MQ",
      "alpha3Code": "MTQ",
      "callingCodes": ["596"],
      "capital": "Fort-de-France",
      "altSpellings": ["MQ"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 378243,
      "latlng": [14.666667, -61.0],
      "demonym": "French",
      "area": null,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Martinique",
      "numericCode": "474",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Martinique",
        "es": "Martinica",
        "fr": "Martinique",
        "ja": "マルティニーク",
        "it": "Martinica",
        "br": "Martinica",
        "pt": "Martinica",
        "nl": "Martinique",
        "hr": "Martinique",
        "fa": "مونتسرات"
      },
      "flag": "https://restcountries.eu/data/mtq.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Mauritania",
      "topLevelDomain": [".mr"],
      "alpha2Code": "MR",
      "alpha3Code": "MRT",
      "callingCodes": ["222"],
      "capital": "Nouakchott",
      "altSpellings": ["MR", "Islamic Republic of Mauritania", "al-Jumhūriyyah al-ʾIslāmiyyah al-Mūrītāniyyah"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 3718678,
      "latlng": [20.0, -12.0],
      "demonym": "Mauritanian",
      "area": 1030700.0,
      "gini": 40.5,
      "timezones": ["UTC"],
      "borders": ["DZA", "MLI", "SEN", "ESH"],
      "nativeName": "موريتانيا",
      "numericCode": "478",
      "currencies": [{
        "code": "MRO",
        "name": "Mauritanian ouguiya",
        "symbol": "UM"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Mauretanien",
        "es": "Mauritania",
        "fr": "Mauritanie",
        "ja": "モーリタニア",
        "it": "Mauritania",
        "br": "Mauritânia",
        "pt": "Mauritânia",
        "nl": "Mauritanië",
        "hr": "Mauritanija",
        "fa": "موریتانی"
      },
      "flag": "https://restcountries.eu/data/mrt.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "MTN"
    }, {
      "name": "Mauritius",
      "topLevelDomain": [".mu"],
      "alpha2Code": "MU",
      "alpha3Code": "MUS",
      "callingCodes": ["230"],
      "capital": "Port Louis",
      "altSpellings": ["MU", "Republic of Mauritius", "République de Maurice"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 1262879,
      "latlng": [-20.28333333, 57.55],
      "demonym": "Mauritian",
      "area": 2040.0,
      "gini": null,
      "timezones": ["UTC+04:00"],
      "borders": [],
      "nativeName": "Maurice",
      "numericCode": "480",
      "currencies": [{
        "code": "MUR",
        "name": "Mauritian rupee",
        "symbol": "₨"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Mauritius",
        "es": "Mauricio",
        "fr": "Île Maurice",
        "ja": "モーリシャス",
        "it": "Mauritius",
        "br": "Maurício",
        "pt": "Maurícia",
        "nl": "Mauritius",
        "hr": "Mauricijus",
        "fa": "موریس"
      },
      "flag": "https://restcountries.eu/data/mus.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "MRI"
    }, {
      "name": "Mayotte",
      "topLevelDomain": [".yt"],
      "alpha2Code": "YT",
      "alpha3Code": "MYT",
      "callingCodes": ["262"],
      "capital": "Mamoudzou",
      "altSpellings": ["YT", "Department of Mayotte", "Département de Mayotte"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 226915,
      "latlng": [-12.83333333, 45.16666666],
      "demonym": "French",
      "area": null,
      "gini": null,
      "timezones": ["UTC+03:00"],
      "borders": [],
      "nativeName": "Mayotte",
      "numericCode": "175",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Mayotte",
        "es": "Mayotte",
        "fr": "Mayotte",
        "ja": "マヨット",
        "it": "Mayotte",
        "br": "Mayotte",
        "pt": "Mayotte",
        "nl": "Mayotte",
        "hr": "Mayotte",
        "fa": "مایوت"
      },
      "flag": "https://restcountries.eu/data/myt.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": ""
    }, {
      "name": "Mexico",
      "topLevelDomain": [".mx"],
      "alpha2Code": "MX",
      "alpha3Code": "MEX",
      "callingCodes": ["52"],
      "capital": "Mexico City",
      "altSpellings": ["MX", "Mexicanos", "United Mexican States", "Estados Unidos Mexicanos"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 122273473,
      "latlng": [23.0, -102.0],
      "demonym": "Mexican",
      "area": 1964375.0,
      "gini": 47.0,
      "timezones": ["UTC-08:00", "UTC-07:00", "UTC-06:00"],
      "borders": ["BLZ", "GTM", "USA"],
      "nativeName": "México",
      "numericCode": "484",
      "currencies": [{
        "code": "MXN",
        "name": "Mexican peso",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Mexiko",
        "es": "México",
        "fr": "Mexique",
        "ja": "メキシコ",
        "it": "Messico",
        "br": "México",
        "pt": "México",
        "nl": "Mexico",
        "hr": "Meksiko",
        "fa": "مکزیک"
      },
      "flag": "https://restcountries.eu/data/mex.svg",
      "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherAcronyms": [],
        "otherNames": ["Alianza del Pacífico"]
      }, {
        "acronym": "NAFTA",
        "name": "North American Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": ["Tratado de Libre Comercio de América del Norte", "Accord de Libre-échange Nord-Américain"]
      }],
      "cioc": "MEX"
    }, {
      "name": "Micronesia (Federated States of)",
      "topLevelDomain": [".fm"],
      "alpha2Code": "FM",
      "alpha3Code": "FSM",
      "callingCodes": ["691"],
      "capital": "Palikir",
      "altSpellings": ["FM", "Federated States of Micronesia"],
      "region": "Oceania",
      "subregion": "Micronesia",
      "population": 102800,
      "latlng": [6.91666666, 158.25],
      "demonym": "Micronesian",
      "area": 702.0,
      "gini": null,
      "timezones": ["UTC+10:00", "UTC+11"],
      "borders": [],
      "nativeName": "Micronesia",
      "numericCode": "583",
      "currencies": [{
        "code": null,
        "name": "[D]",
        "symbol": "$"
      }, {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Mikronesien",
        "es": "Micronesia",
        "fr": "Micronésie",
        "ja": "ミクロネシア連邦",
        "it": "Micronesia",
        "br": "Micronésia",
        "pt": "Micronésia",
        "nl": "Micronesië",
        "hr": "Mikronezija",
        "fa": "ایالات فدرال میکرونزی"
      },
      "flag": "https://restcountries.eu/data/fsm.svg",
      "regionalBlocs": [],
      "cioc": "FSM"
    }, {
      "name": "Moldova (Republic of)",
      "topLevelDomain": [".md"],
      "alpha2Code": "MD",
      "alpha3Code": "MDA",
      "callingCodes": ["373"],
      "capital": "Chișinău",
      "altSpellings": ["MD", "Republic of Moldova", "Republica Moldova"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 3553100,
      "latlng": [47.0, 29.0],
      "demonym": "Moldovan",
      "area": 33846.0,
      "gini": 33.0,
      "timezones": ["UTC+02:00"],
      "borders": ["ROU", "UKR"],
      "nativeName": "Moldova",
      "numericCode": "498",
      "currencies": [{
        "code": "MDL",
        "name": "Moldovan leu",
        "symbol": "L"
      }],
      "languages": [{
        "iso639_1": "ro",
        "iso639_2": "ron",
        "name": "Romanian",
        "nativeName": "Română"
      }],
      "translations": {
        "de": "Moldawie",
        "es": "Moldavia",
        "fr": "Moldavie",
        "ja": "モルドバ共和国",
        "it": "Moldavia",
        "br": "Moldávia",
        "pt": "Moldávia",
        "nl": "Moldavië",
        "hr": "Moldova",
        "fa": "مولداوی"
      },
      "flag": "https://restcountries.eu/data/mda.svg",
      "regionalBlocs": [{
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "MDA"
    }, {
      "name": "Monaco",
      "topLevelDomain": [".mc"],
      "alpha2Code": "MC",
      "alpha3Code": "MCO",
      "callingCodes": ["377"],
      "capital": "Monaco",
      "altSpellings": ["MC", "Principality of Monaco", "Principauté de Monaco"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 38400,
      "latlng": [43.73333333, 7.4],
      "demonym": "Monegasque",
      "area": 2.02,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["FRA"],
      "nativeName": "Monaco",
      "numericCode": "492",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Monaco",
        "es": "Mónaco",
        "fr": "Monaco",
        "ja": "モナコ",
        "it": "Principato di Monaco",
        "br": "Mônaco",
        "pt": "Mónaco",
        "nl": "Monaco",
        "hr": "Monako",
        "fa": "موناکو"
      },
      "flag": "https://restcountries.eu/data/mco.svg",
      "regionalBlocs": [],
      "cioc": "MON"
    }, {
      "name": "Mongolia",
      "topLevelDomain": [".mn"],
      "alpha2Code": "MN",
      "alpha3Code": "MNG",
      "callingCodes": ["976"],
      "capital": "Ulan Bator",
      "altSpellings": ["MN"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 3093100,
      "latlng": [46.0, 105.0],
      "demonym": "Mongolian",
      "area": 1564110.0,
      "gini": 36.5,
      "timezones": ["UTC+07:00", "UTC+08:00"],
      "borders": ["CHN", "RUS"],
      "nativeName": "Монгол улс",
      "numericCode": "496",
      "currencies": [{
        "code": "MNT",
        "name": "Mongolian tögrög",
        "symbol": "₮"
      }],
      "languages": [{
        "iso639_1": "mn",
        "iso639_2": "mon",
        "name": "Mongolian",
        "nativeName": "Монгол хэл"
      }],
      "translations": {
        "de": "Mongolei",
        "es": "Mongolia",
        "fr": "Mongolie",
        "ja": "モンゴル",
        "it": "Mongolia",
        "br": "Mongólia",
        "pt": "Mongólia",
        "nl": "Mongolië",
        "hr": "Mongolija",
        "fa": "مغولستان"
      },
      "flag": "https://restcountries.eu/data/mng.svg",
      "regionalBlocs": [],
      "cioc": "MGL"
    }, {
      "name": "Montenegro",
      "topLevelDomain": [".me"],
      "alpha2Code": "ME",
      "alpha3Code": "MNE",
      "callingCodes": ["382"],
      "capital": "Podgorica",
      "altSpellings": ["ME", "Crna Gora"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 621810,
      "latlng": [42.5, 19.3],
      "demonym": "Montenegrin",
      "area": 13812.0,
      "gini": 30.0,
      "timezones": ["UTC+01:00"],
      "borders": ["ALB", "BIH", "HRV", "KOS", "SRB"],
      "nativeName": "Црна Гора",
      "numericCode": "499",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      }, {
        "iso639_1": "bs",
        "iso639_2": "bos",
        "name": "Bosnian",
        "nativeName": "bosanski jezik"
      }, {
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      }, {
        "iso639_1": "hr",
        "iso639_2": "hrv",
        "name": "Croatian",
        "nativeName": "hrvatski jezik"
      }],
      "translations": {
        "de": "Montenegro",
        "es": "Montenegro",
        "fr": "Monténégro",
        "ja": "モンテネグロ",
        "it": "Montenegro",
        "br": "Montenegro",
        "pt": "Montenegro",
        "nl": "Montenegro",
        "hr": "Crna Gora",
        "fa": "مونته‌نگرو"
      },
      "flag": "https://restcountries.eu/data/mne.svg",
      "regionalBlocs": [{
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "MNE"
    }, {
      "name": "Montserrat",
      "topLevelDomain": [".ms"],
      "alpha2Code": "MS",
      "alpha3Code": "MSR",
      "callingCodes": ["1664"],
      "capital": "Plymouth",
      "altSpellings": ["MS"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 4922,
      "latlng": [16.75, -62.2],
      "demonym": "Montserratian",
      "area": 102.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Montserrat",
      "numericCode": "500",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Montserrat",
        "es": "Montserrat",
        "fr": "Montserrat",
        "ja": "モントセラト",
        "it": "Montserrat",
        "br": "Montserrat",
        "pt": "Monserrate",
        "nl": "Montserrat",
        "hr": "Montserrat",
        "fa": "مایوت"
      },
      "flag": "https://restcountries.eu/data/msr.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": ""
    }, {
      "name": "Morocco",
      "topLevelDomain": [".ma"],
      "alpha2Code": "MA",
      "alpha3Code": "MAR",
      "callingCodes": ["212"],
      "capital": "Rabat",
      "altSpellings": ["MA", "Kingdom of Morocco", "Al-Mamlakah al-Maġribiyah"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "population": 33337529,
      "latlng": [32.0, -5.0],
      "demonym": "Moroccan",
      "area": 446550.0,
      "gini": 40.9,
      "timezones": ["UTC"],
      "borders": ["DZA", "ESH", "ESP"],
      "nativeName": "المغرب",
      "numericCode": "504",
      "currencies": [{
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Marokko",
        "es": "Marruecos",
        "fr": "Maroc",
        "ja": "モロッコ",
        "it": "Marocco",
        "br": "Marrocos",
        "pt": "Marrocos",
        "nl": "Marokko",
        "hr": "Maroko",
        "fa": "مراکش"
      },
      "flag": "https://restcountries.eu/data/mar.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "MAR"
    }, {
      "name": "Mozambique",
      "topLevelDomain": [".mz"],
      "alpha2Code": "MZ",
      "alpha3Code": "MOZ",
      "callingCodes": ["258"],
      "capital": "Maputo",
      "altSpellings": ["MZ", "Republic of Mozambique", "República de Moçambique"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 26423700,
      "latlng": [-18.25, 35.0],
      "demonym": "Mozambican",
      "area": 801590.0,
      "gini": 45.7,
      "timezones": ["UTC+02:00"],
      "borders": ["MWI", "ZAF", "SWZ", "TZA", "ZMB", "ZWE"],
      "nativeName": "Moçambique",
      "numericCode": "508",
      "currencies": [{
        "code": "MZN",
        "name": "Mozambican metical",
        "symbol": "MT"
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Mosambik",
        "es": "Mozambique",
        "fr": "Mozambique",
        "ja": "モザンビーク",
        "it": "Mozambico",
        "br": "Moçambique",
        "pt": "Moçambique",
        "nl": "Mozambique",
        "hr": "Mozambik",
        "fa": "موزامبیک"
      },
      "flag": "https://restcountries.eu/data/moz.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "MOZ"
    }, {
      "name": "Myanmar",
      "topLevelDomain": [".mm"],
      "alpha2Code": "MM",
      "alpha3Code": "MMR",
      "callingCodes": ["95"],
      "capital": "Naypyidaw",
      "altSpellings": ["MM", "Burma", "Republic of the Union of Myanmar", "Pyidaunzu Thanmăda Myăma Nainngandaw"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 51419420,
      "latlng": [22.0, 98.0],
      "demonym": "Burmese",
      "area": 676578.0,
      "gini": null,
      "timezones": ["UTC+06:30"],
      "borders": ["BGD", "CHN", "IND", "LAO", "THA"],
      "nativeName": "Myanma",
      "numericCode": "104",
      "currencies": [{
        "code": "MMK",
        "name": "Burmese kyat",
        "symbol": "Ks"
      }],
      "languages": [{
        "iso639_1": "my",
        "iso639_2": "mya",
        "name": "Burmese",
        "nativeName": "ဗမာစာ"
      }],
      "translations": {
        "de": "Myanmar",
        "es": "Myanmar",
        "fr": "Myanmar",
        "ja": "ミャンマー",
        "it": "Birmania",
        "br": "Myanmar",
        "pt": "Myanmar",
        "nl": "Myanmar",
        "hr": "Mijanmar",
        "fa": "میانمار"
      },
      "flag": "https://restcountries.eu/data/mmr.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "MYA"
    }, {
      "name": "Namibia",
      "topLevelDomain": [".na"],
      "alpha2Code": "NA",
      "alpha3Code": "NAM",
      "callingCodes": ["264"],
      "capital": "Windhoek",
      "altSpellings": ["NA", "Namibië", "Republic of Namibia"],
      "region": "Africa",
      "subregion": "Southern Africa",
      "population": 2324388,
      "latlng": [-22.0, 17.0],
      "demonym": "Namibian",
      "area": 825615.0,
      "gini": 63.9,
      "timezones": ["UTC+01:00"],
      "borders": ["AGO", "BWA", "ZAF", "ZMB"],
      "nativeName": "Namibia",
      "numericCode": "516",
      "currencies": [{
        "code": "NAD",
        "name": "Namibian dollar",
        "symbol": "$"
      }, {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "af",
        "iso639_2": "afr",
        "name": "Afrikaans",
        "nativeName": "Afrikaans"
      }],
      "translations": {
        "de": "Namibia",
        "es": "Namibia",
        "fr": "Namibie",
        "ja": "ナミビア",
        "it": "Namibia",
        "br": "Namíbia",
        "pt": "Namíbia",
        "nl": "Namibië",
        "hr": "Namibija",
        "fa": "نامیبیا"
      },
      "flag": "https://restcountries.eu/data/nam.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "NAM"
    }, {
      "name": "Nauru",
      "topLevelDomain": [".nr"],
      "alpha2Code": "NR",
      "alpha3Code": "NRU",
      "callingCodes": ["674"],
      "capital": "Yaren",
      "altSpellings": ["NR", "Naoero", "Pleasant Island", "Republic of Nauru", "Ripublik Naoero"],
      "region": "Oceania",
      "subregion": "Micronesia",
      "population": 10084,
      "latlng": [-0.53333333, 166.91666666],
      "demonym": "Nauruan",
      "area": 21.0,
      "gini": null,
      "timezones": ["UTC+12:00"],
      "borders": [],
      "nativeName": "Nauru",
      "numericCode": "520",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }, {
        "code": "(none)",
        "name": null,
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "na",
        "iso639_2": "nau",
        "name": "Nauruan",
        "nativeName": "Dorerin Naoero"
      }],
      "translations": {
        "de": "Nauru",
        "es": "Nauru",
        "fr": "Nauru",
        "ja": "ナウル",
        "it": "Nauru",
        "br": "Nauru",
        "pt": "Nauru",
        "nl": "Nauru",
        "hr": "Nauru",
        "fa": "نائورو"
      },
      "flag": "https://restcountries.eu/data/nru.svg",
      "regionalBlocs": [],
      "cioc": "NRU"
    }, {
      "name": "Nepal",
      "topLevelDomain": [".np"],
      "alpha2Code": "NP",
      "alpha3Code": "NPL",
      "callingCodes": ["977"],
      "capital": "Kathmandu",
      "altSpellings": ["NP", "Federal Democratic Republic of Nepal", "Loktāntrik Ganatantra Nepāl"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 28431500,
      "latlng": [28.0, 84.0],
      "demonym": "Nepalese",
      "area": 147181.0,
      "gini": 32.8,
      "timezones": ["UTC+05:45"],
      "borders": ["CHN", "IND"],
      "nativeName": "नेपाल",
      "numericCode": "524",
      "currencies": [{
        "code": "NPR",
        "name": "Nepalese rupee",
        "symbol": "₨"
      }],
      "languages": [{
        "iso639_1": "ne",
        "iso639_2": "nep",
        "name": "Nepali",
        "nativeName": "नेपाली"
      }],
      "translations": {
        "de": "Népal",
        "es": "Nepal",
        "fr": "Népal",
        "ja": "ネパール",
        "it": "Nepal",
        "br": "Nepal",
        "pt": "Nepal",
        "nl": "Nepal",
        "hr": "Nepal",
        "fa": "نپال"
      },
      "flag": "https://restcountries.eu/data/npl.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "NEP"
    }, {
      "name": "Netherlands",
      "topLevelDomain": [".nl"],
      "alpha2Code": "NL",
      "alpha3Code": "NLD",
      "callingCodes": ["31"],
      "capital": "Amsterdam",
      "altSpellings": ["NL", "Holland", "Nederland"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 17019800,
      "latlng": [52.5, 5.75],
      "demonym": "Dutch",
      "area": 41850.0,
      "gini": 30.9,
      "timezones": ["UTC-04:00", "UTC+01:00"],
      "borders": ["BEL", "DEU"],
      "nativeName": "Nederland",
      "numericCode": "528",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }],
      "translations": {
        "de": "Niederlande",
        "es": "Países Bajos",
        "fr": "Pays-Bas",
        "ja": "オランダ",
        "it": "Paesi Bassi",
        "br": "Holanda",
        "pt": "Países Baixos",
        "nl": "Nederland",
        "hr": "Nizozemska",
        "fa": "پادشاهی هلند"
      },
      "flag": "https://restcountries.eu/data/nld.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "NED"
    }, {
      "name": "New Caledonia",
      "topLevelDomain": [".nc"],
      "alpha2Code": "NC",
      "alpha3Code": "NCL",
      "callingCodes": ["687"],
      "capital": "Nouméa",
      "altSpellings": ["NC"],
      "region": "Oceania",
      "subregion": "Melanesia",
      "population": 268767,
      "latlng": [-21.5, 165.5],
      "demonym": "New Caledonian",
      "area": 18575.0,
      "gini": null,
      "timezones": ["UTC+11:00"],
      "borders": [],
      "nativeName": "Nouvelle-Calédonie",
      "numericCode": "540",
      "currencies": [{
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Neukaledonien",
        "es": "Nueva Caledonia",
        "fr": "Nouvelle-Calédonie",
        "ja": "ニューカレドニア",
        "it": "Nuova Caledonia",
        "br": "Nova Caledônia",
        "pt": "Nova Caledónia",
        "nl": "Nieuw-Caledonië",
        "hr": "Nova Kaledonija",
        "fa": "کالدونیای جدید"
      },
      "flag": "https://restcountries.eu/data/ncl.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "New Zealand",
      "topLevelDomain": [".nz"],
      "alpha2Code": "NZ",
      "alpha3Code": "NZL",
      "callingCodes": ["64"],
      "capital": "Wellington",
      "altSpellings": ["NZ", "Aotearoa"],
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "population": 4697854,
      "latlng": [-41.0, 174.0],
      "demonym": "New Zealander",
      "area": 270467.0,
      "gini": 36.2,
      "timezones": ["UTC-11:00", "UTC-10:00", "UTC+12:00", "UTC+12:45", "UTC+13:00"],
      "borders": [],
      "nativeName": "New Zealand",
      "numericCode": "554",
      "currencies": [{
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "mi",
        "iso639_2": "mri",
        "name": "Māori",
        "nativeName": "te reo Māori"
      }],
      "translations": {
        "de": "Neuseeland",
        "es": "Nueva Zelanda",
        "fr": "Nouvelle-Zélande",
        "ja": "ニュージーランド",
        "it": "Nuova Zelanda",
        "br": "Nova Zelândia",
        "pt": "Nova Zelândia",
        "nl": "Nieuw-Zeeland",
        "hr": "Novi Zeland",
        "fa": "نیوزیلند"
      },
      "flag": "https://restcountries.eu/data/nzl.svg",
      "regionalBlocs": [],
      "cioc": "NZL"
    }, {
      "name": "Nicaragua",
      "topLevelDomain": [".ni"],
      "alpha2Code": "NI",
      "alpha3Code": "NIC",
      "callingCodes": ["505"],
      "capital": "Managua",
      "altSpellings": ["NI", "Republic of Nicaragua", "República de Nicaragua"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 6262703,
      "latlng": [13.0, -85.0],
      "demonym": "Nicaraguan",
      "area": 130373.0,
      "gini": 40.5,
      "timezones": ["UTC-06:00"],
      "borders": ["CRI", "HND"],
      "nativeName": "Nicaragua",
      "numericCode": "558",
      "currencies": [{
        "code": "NIO",
        "name": "Nicaraguan córdoba",
        "symbol": "C$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Nicaragua",
        "es": "Nicaragua",
        "fr": "Nicaragua",
        "ja": "ニカラグア",
        "it": "Nicaragua",
        "br": "Nicarágua",
        "pt": "Nicarágua",
        "nl": "Nicaragua",
        "hr": "Nikaragva",
        "fa": "نیکاراگوئه"
      },
      "flag": "https://restcountries.eu/data/nic.svg",
      "regionalBlocs": [{
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "NCA"
    }, {
      "name": "Niger",
      "topLevelDomain": [".ne"],
      "alpha2Code": "NE",
      "alpha3Code": "NER",
      "callingCodes": ["227"],
      "capital": "Niamey",
      "altSpellings": ["NE", "Nijar", "Republic of Niger", "République du Niger"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 20715000,
      "latlng": [16.0, 8.0],
      "demonym": "Nigerien",
      "area": 1267000.0,
      "gini": 34.6,
      "timezones": ["UTC+01:00"],
      "borders": ["DZA", "BEN", "BFA", "TCD", "LBY", "MLI", "NGA"],
      "nativeName": "Niger",
      "numericCode": "562",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Niger",
        "es": "Níger",
        "fr": "Niger",
        "ja": "ニジェール",
        "it": "Niger",
        "br": "Níger",
        "pt": "Níger",
        "nl": "Niger",
        "hr": "Niger",
        "fa": "نیجر"
      },
      "flag": "https://restcountries.eu/data/ner.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "NIG"
    }, {
      "name": "Nigeria",
      "topLevelDomain": [".ng"],
      "alpha2Code": "NG",
      "alpha3Code": "NGA",
      "callingCodes": ["234"],
      "capital": "Abuja",
      "altSpellings": ["NG", "Nijeriya", "Naíjíríà", "Federal Republic of Nigeria"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 186988000,
      "latlng": [10.0, 8.0],
      "demonym": "Nigerian",
      "area": 923768.0,
      "gini": 48.8,
      "timezones": ["UTC+01:00"],
      "borders": ["BEN", "CMR", "TCD", "NER"],
      "nativeName": "Nigeria",
      "numericCode": "566",
      "currencies": [{
        "code": "NGN",
        "name": "Nigerian naira",
        "symbol": "₦"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Nigeria",
        "es": "Nigeria",
        "fr": "Nigéria",
        "ja": "ナイジェリア",
        "it": "Nigeria",
        "br": "Nigéria",
        "pt": "Nigéria",
        "nl": "Nigeria",
        "hr": "Nigerija",
        "fa": "نیجریه"
      },
      "flag": "https://restcountries.eu/data/nga.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "NGR"
    }, {
      "name": "Niue",
      "topLevelDomain": [".nu"],
      "alpha2Code": "NU",
      "alpha3Code": "NIU",
      "callingCodes": ["683"],
      "capital": "Alofi",
      "altSpellings": ["NU"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 1470,
      "latlng": [-19.03333333, -169.86666666],
      "demonym": "Niuean",
      "area": 260.0,
      "gini": null,
      "timezones": ["UTC-11:00"],
      "borders": [],
      "nativeName": "Niuē",
      "numericCode": "570",
      "currencies": [{
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }, {
        "code": "(none)",
        "name": "Niue dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Niue",
        "es": "Niue",
        "fr": "Niue",
        "ja": "ニウエ",
        "it": "Niue",
        "br": "Niue",
        "pt": "Niue",
        "nl": "Niue",
        "hr": "Niue",
        "fa": "نیووی"
      },
      "flag": "https://restcountries.eu/data/niu.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Norfolk Island",
      "topLevelDomain": [".nf"],
      "alpha2Code": "NF",
      "alpha3Code": "NFK",
      "callingCodes": ["672"],
      "capital": "Kingston",
      "altSpellings": ["NF", "Territory of Norfolk Island", "Teratri of Norf'k Ailen"],
      "region": "Oceania",
      "subregion": "Australia and New Zealand",
      "population": 2302,
      "latlng": [-29.03333333, 167.95],
      "demonym": "Norfolk Islander",
      "area": 36.0,
      "gini": null,
      "timezones": ["UTC+11:30"],
      "borders": [],
      "nativeName": "Norfolk Island",
      "numericCode": "574",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Norfolkinsel",
        "es": "Isla de Norfolk",
        "fr": "Île de Norfolk",
        "ja": "ノーフォーク島",
        "it": "Isola Norfolk",
        "br": "Ilha Norfolk",
        "pt": "Ilha Norfolk",
        "nl": "Norfolkeiland",
        "hr": "Otok Norfolk",
        "fa": "جزیره نورفک"
      },
      "flag": "https://restcountries.eu/data/nfk.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Korea (Democratic People's Republic of)",
      "topLevelDomain": [".kp"],
      "alpha2Code": "KP",
      "alpha3Code": "PRK",
      "callingCodes": ["850"],
      "capital": "Pyongyang",
      "altSpellings": ["KP", "Democratic People's Republic of Korea", "조선민주주의인민공화국", "Chosŏn Minjujuŭi Inmin Konghwaguk"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 25281000,
      "latlng": [40.0, 127.0],
      "demonym": "North Korean",
      "area": 120538.0,
      "gini": null,
      "timezones": ["UTC+09:00"],
      "borders": ["CHN", "KOR", "RUS"],
      "nativeName": "북한",
      "numericCode": "408",
      "currencies": [{
        "code": "KPW",
        "name": "North Korean won",
        "symbol": "₩"
      }],
      "languages": [{
        "iso639_1": "ko",
        "iso639_2": "kor",
        "name": "Korean",
        "nativeName": "한국어"
      }],
      "translations": {
        "de": "Nordkorea",
        "es": "Corea del Norte",
        "fr": "Corée du Nord",
        "ja": "朝鮮民主主義人民共和国",
        "it": "Corea del Nord",
        "br": "Coreia do Norte",
        "pt": "Coreia do Norte",
        "nl": "Noord-Korea",
        "hr": "Sjeverna Koreja",
        "fa": "کره جنوبی"
      },
      "flag": "https://restcountries.eu/data/prk.svg",
      "regionalBlocs": [],
      "cioc": "PRK"
    }, {
      "name": "Northern Mariana Islands",
      "topLevelDomain": [".mp"],
      "alpha2Code": "MP",
      "alpha3Code": "MNP",
      "callingCodes": ["1670"],
      "capital": "Saipan",
      "altSpellings": ["MP", "Commonwealth of the Northern Mariana Islands", "Sankattan Siha Na Islas Mariånas"],
      "region": "Oceania",
      "subregion": "Micronesia",
      "population": 56940,
      "latlng": [15.2, 145.75],
      "demonym": "American",
      "area": 464.0,
      "gini": null,
      "timezones": ["UTC+10:00"],
      "borders": [],
      "nativeName": "Northern Mariana Islands",
      "numericCode": "580",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "ch",
        "iso639_2": "cha",
        "name": "Chamorro",
        "nativeName": "Chamoru"
      }],
      "translations": {
        "de": "Nördliche Marianen",
        "es": "Islas Marianas del Norte",
        "fr": "Îles Mariannes du Nord",
        "ja": "北マリアナ諸島",
        "it": "Isole Marianne Settentrionali",
        "br": "Ilhas Marianas",
        "pt": "Ilhas Marianas",
        "nl": "Noordelijke Marianeneilanden",
        "hr": "Sjevernomarijanski otoci",
        "fa": "جزایر ماریانای شمالی"
      },
      "flag": "https://restcountries.eu/data/mnp.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Norway",
      "topLevelDomain": [".no"],
      "alpha2Code": "NO",
      "alpha3Code": "NOR",
      "callingCodes": ["47"],
      "capital": "Oslo",
      "altSpellings": ["NO", "Norge", "Noreg", "Kingdom of Norway", "Kongeriket Norge", "Kongeriket Noreg"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 5223256,
      "latlng": [62.0, 10.0],
      "demonym": "Norwegian",
      "area": 323802.0,
      "gini": 25.8,
      "timezones": ["UTC+01:00"],
      "borders": ["FIN", "SWE", "RUS"],
      "nativeName": "Norge",
      "numericCode": "578",
      "currencies": [{
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "no",
        "iso639_2": "nor",
        "name": "Norwegian",
        "nativeName": "Norsk"
      }, {
        "iso639_1": "nb",
        "iso639_2": "nob",
        "name": "Norwegian Bokmål",
        "nativeName": "Norsk bokmål"
      }, {
        "iso639_1": "nn",
        "iso639_2": "nno",
        "name": "Norwegian Nynorsk",
        "nativeName": "Norsk nynorsk"
      }],
      "translations": {
        "de": "Norwegen",
        "es": "Noruega",
        "fr": "Norvège",
        "ja": "ノルウェー",
        "it": "Norvegia",
        "br": "Noruega",
        "pt": "Noruega",
        "nl": "Noorwegen",
        "hr": "Norveška",
        "fa": "نروژ"
      },
      "flag": "https://restcountries.eu/data/nor.svg",
      "regionalBlocs": [{
        "acronym": "EFTA",
        "name": "European Free Trade Association",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "NOR"
    }, {
      "name": "Oman",
      "topLevelDomain": [".om"],
      "alpha2Code": "OM",
      "alpha3Code": "OMN",
      "callingCodes": ["968"],
      "capital": "Muscat",
      "altSpellings": ["OM", "Sultanate of Oman", "Salṭanat ʻUmān"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 4420133,
      "latlng": [21.0, 57.0],
      "demonym": "Omani",
      "area": 309500.0,
      "gini": null,
      "timezones": ["UTC+04:00"],
      "borders": ["SAU", "ARE", "YEM"],
      "nativeName": "عمان",
      "numericCode": "512",
      "currencies": [{
        "code": "OMR",
        "name": "Omani rial",
        "symbol": "ر.ع."
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Oman",
        "es": "Omán",
        "fr": "Oman",
        "ja": "オマーン",
        "it": "oman",
        "br": "Omã",
        "pt": "Omã",
        "nl": "Oman",
        "hr": "Oman",
        "fa": "عمان"
      },
      "flag": "https://restcountries.eu/data/omn.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "OMA"
    }, {
      "name": "Pakistan",
      "topLevelDomain": [".pk"],
      "alpha2Code": "PK",
      "alpha3Code": "PAK",
      "callingCodes": ["92"],
      "capital": "Islamabad",
      "altSpellings": ["PK", "Pākistān", "Islamic Republic of Pakistan", "Islāmī Jumhūriya'eh Pākistān"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 194125062,
      "latlng": [30.0, 70.0],
      "demonym": "Pakistani",
      "area": 881912.0,
      "gini": 30.0,
      "timezones": ["UTC+05:00"],
      "borders": ["AFG", "CHN", "IND", "IRN"],
      "nativeName": "Pakistan",
      "numericCode": "586",
      "currencies": [{
        "code": "PKR",
        "name": "Pakistani rupee",
        "symbol": "₨"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "ur",
        "iso639_2": "urd",
        "name": "Urdu",
        "nativeName": "اردو"
      }],
      "translations": {
        "de": "Pakistan",
        "es": "Pakistán",
        "fr": "Pakistan",
        "ja": "パキスタン",
        "it": "Pakistan",
        "br": "Paquistão",
        "pt": "Paquistão",
        "nl": "Pakistan",
        "hr": "Pakistan",
        "fa": "پاکستان"
      },
      "flag": "https://restcountries.eu/data/pak.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "PAK"
    }, {
      "name": "Palau",
      "topLevelDomain": [".pw"],
      "alpha2Code": "PW",
      "alpha3Code": "PLW",
      "callingCodes": ["680"],
      "capital": "Ngerulmud",
      "altSpellings": ["PW", "Republic of Palau", "Beluu er a Belau"],
      "region": "Oceania",
      "subregion": "Micronesia",
      "population": 17950,
      "latlng": [7.5, 134.5],
      "demonym": "Palauan",
      "area": 459.0,
      "gini": null,
      "timezones": ["UTC+09:00"],
      "borders": [],
      "nativeName": "Palau",
      "numericCode": "585",
      "currencies": [{
        "code": "(none)",
        "name": "[E]",
        "symbol": "$"
      }, {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Palau",
        "es": "Palau",
        "fr": "Palaos",
        "ja": "パラオ",
        "it": "Palau",
        "br": "Palau",
        "pt": "Palau",
        "nl": "Palau",
        "hr": "Palau",
        "fa": "پالائو"
      },
      "flag": "https://restcountries.eu/data/plw.svg",
      "regionalBlocs": [],
      "cioc": "PLW"
    }, {
      "name": "Palestine, State of",
      "topLevelDomain": [".ps"],
      "alpha2Code": "PS",
      "alpha3Code": "PSE",
      "callingCodes": ["970"],
      "capital": "Ramallah",
      "altSpellings": ["PS", "State of Palestine", "Dawlat Filasṭin"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 4682467,
      "latlng": [31.9, 35.2],
      "demonym": "Palestinian",
      "area": null,
      "gini": 35.5,
      "timezones": ["UTC+02:00"],
      "borders": ["ISR", "EGY", "JOR"],
      "nativeName": "فلسطين",
      "numericCode": "275",
      "currencies": [{
        "code": "ILS",
        "name": "Israeli new sheqel",
        "symbol": "₪"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Palästina",
        "es": "Palestina",
        "fr": "Palestine",
        "ja": "パレスチナ",
        "it": "Palestina",
        "br": "Palestina",
        "pt": "Palestina",
        "nl": "Palestijnse gebieden",
        "hr": "Palestina",
        "fa": "فلسطین"
      },
      "flag": "https://restcountries.eu/data/pse.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "PLE"
    }, {
      "name": "Panama",
      "topLevelDomain": [".pa"],
      "alpha2Code": "PA",
      "alpha3Code": "PAN",
      "callingCodes": ["507"],
      "capital": "Panama City",
      "altSpellings": ["PA", "Republic of Panama", "República de Panamá"],
      "region": "Americas",
      "subregion": "Central America",
      "population": 3814672,
      "latlng": [9.0, -80.0],
      "demonym": "Panamanian",
      "area": 75417.0,
      "gini": 51.9,
      "timezones": ["UTC-05:00"],
      "borders": ["COL", "CRI"],
      "nativeName": "Panamá",
      "numericCode": "591",
      "currencies": [{
        "code": "PAB",
        "name": "Panamanian balboa",
        "symbol": "B/."
      }, {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Panama",
        "es": "Panamá",
        "fr": "Panama",
        "ja": "パナマ",
        "it": "Panama",
        "br": "Panamá",
        "pt": "Panamá",
        "nl": "Panama",
        "hr": "Panama",
        "fa": "پاناما"
      },
      "flag": "https://restcountries.eu/data/pan.svg",
      "regionalBlocs": [{
        "acronym": "CAIS",
        "name": "Central American Integration System",
        "otherAcronyms": ["SICA"],
        "otherNames": ["Sistema de la Integración Centroamericana,"]
      }],
      "cioc": "PAN"
    }, {
      "name": "Papua New Guinea",
      "topLevelDomain": [".pg"],
      "alpha2Code": "PG",
      "alpha3Code": "PNG",
      "callingCodes": ["675"],
      "capital": "Port Moresby",
      "altSpellings": ["PG", "Independent State of Papua New Guinea", "Independen Stet bilong Papua Niugini"],
      "region": "Oceania",
      "subregion": "Melanesia",
      "population": 8083700,
      "latlng": [-6.0, 147.0],
      "demonym": "Papua New Guinean",
      "area": 462840.0,
      "gini": 50.9,
      "timezones": ["UTC+10:00"],
      "borders": ["IDN"],
      "nativeName": "Papua Niugini",
      "numericCode": "598",
      "currencies": [{
        "code": "PGK",
        "name": "Papua New Guinean kina",
        "symbol": "K"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Papua-Neuguinea",
        "es": "Papúa Nueva Guinea",
        "fr": "Papouasie-Nouvelle-Guinée",
        "ja": "パプアニューギニア",
        "it": "Papua Nuova Guinea",
        "br": "Papua Nova Guiné",
        "pt": "Papua Nova Guiné",
        "nl": "Papoea-Nieuw-Guinea",
        "hr": "Papua Nova Gvineja",
        "fa": "پاپوآ گینه نو"
      },
      "flag": "https://restcountries.eu/data/png.svg",
      "regionalBlocs": [],
      "cioc": "PNG"
    }, {
      "name": "Paraguay",
      "topLevelDomain": [".py"],
      "alpha2Code": "PY",
      "alpha3Code": "PRY",
      "callingCodes": ["595"],
      "capital": "Asunción",
      "altSpellings": ["PY", "Republic of Paraguay", "República del Paraguay", "Tetã Paraguái"],
      "region": "Americas",
      "subregion": "South America",
      "population": 6854536,
      "latlng": [-23.0, -58.0],
      "demonym": "Paraguayan",
      "area": 406752.0,
      "gini": 52.4,
      "timezones": ["UTC-04:00"],
      "borders": ["ARG", "BOL", "BRA"],
      "nativeName": "Paraguay",
      "numericCode": "600",
      "currencies": [{
        "code": "PYG",
        "name": "Paraguayan guaraní",
        "symbol": "₲"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }, {
        "iso639_1": "gn",
        "iso639_2": "grn",
        "name": "Guaraní",
        "nativeName": "Avañe'ẽ"
      }],
      "translations": {
        "de": "Paraguay",
        "es": "Paraguay",
        "fr": "Paraguay",
        "ja": "パラグアイ",
        "it": "Paraguay",
        "br": "Paraguai",
        "pt": "Paraguai",
        "nl": "Paraguay",
        "hr": "Paragvaj",
        "fa": "پاراگوئه"
      },
      "flag": "https://restcountries.eu/data/pry.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "PAR"
    }, {
      "name": "Peru",
      "topLevelDomain": [".pe"],
      "alpha2Code": "PE",
      "alpha3Code": "PER",
      "callingCodes": ["51"],
      "capital": "Lima",
      "altSpellings": ["PE", "Republic of Peru", " República del Perú"],
      "region": "Americas",
      "subregion": "South America",
      "population": 31488700,
      "latlng": [-10.0, -76.0],
      "demonym": "Peruvian",
      "area": 1285216.0,
      "gini": 48.1,
      "timezones": ["UTC-05:00"],
      "borders": ["BOL", "BRA", "CHL", "COL", "ECU"],
      "nativeName": "Perú",
      "numericCode": "604",
      "currencies": [{
        "code": "PEN",
        "name": "Peruvian sol",
        "symbol": "S/."
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Peru",
        "es": "Perú",
        "fr": "Pérou",
        "ja": "ペルー",
        "it": "Perù",
        "br": "Peru",
        "pt": "Peru",
        "nl": "Peru",
        "hr": "Peru",
        "fa": "پرو"
      },
      "flag": "https://restcountries.eu/data/per.svg",
      "regionalBlocs": [{
        "acronym": "PA",
        "name": "Pacific Alliance",
        "otherAcronyms": [],
        "otherNames": ["Alianza del Pacífico"]
      }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "PER"
    }, {
      "name": "Philippines",
      "topLevelDomain": [".ph"],
      "alpha2Code": "PH",
      "alpha3Code": "PHL",
      "callingCodes": ["63"],
      "capital": "Manila",
      "altSpellings": ["PH", "Republic of the Philippines", "Repúblika ng Pilipinas"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 103279800,
      "latlng": [13.0, 122.0],
      "demonym": "Filipino",
      "area": 342353.0,
      "gini": 43.0,
      "timezones": ["UTC+08:00"],
      "borders": [],
      "nativeName": "Pilipinas",
      "numericCode": "608",
      "currencies": [{
        "code": "PHP",
        "name": "Philippine peso",
        "symbol": "₱"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Philippinen",
        "es": "Filipinas",
        "fr": "Philippines",
        "ja": "フィリピン",
        "it": "Filippine",
        "br": "Filipinas",
        "pt": "Filipinas",
        "nl": "Filipijnen",
        "hr": "Filipini",
        "fa": "جزایر الندفیلیپین"
      },
      "flag": "https://restcountries.eu/data/phl.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "PHI"
    }, {
      "name": "Pitcairn",
      "topLevelDomain": [".pn"],
      "alpha2Code": "PN",
      "alpha3Code": "PCN",
      "callingCodes": ["64"],
      "capital": "Adamstown",
      "altSpellings": ["PN", "Pitcairn Henderson Ducie and Oeno Islands"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 56,
      "latlng": [-25.06666666, -130.1],
      "demonym": "Pitcairn Islander",
      "area": 47.0,
      "gini": null,
      "timezones": ["UTC-08:00"],
      "borders": [],
      "nativeName": "Pitcairn Islands",
      "numericCode": "612",
      "currencies": [{
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }, {
        "code": null,
        "name": "Pitcairn Islands dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Pitcairn",
        "es": "Islas Pitcairn",
        "fr": "Îles Pitcairn",
        "ja": "ピトケアン",
        "it": "Isole Pitcairn",
        "br": "Ilhas Pitcairn",
        "pt": "Ilhas Picárnia",
        "nl": "Pitcairneilanden",
        "hr": "Pitcairnovo otočje",
        "fa": "پیتکرن"
      },
      "flag": "https://restcountries.eu/data/pcn.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Poland",
      "topLevelDomain": [".pl"],
      "alpha2Code": "PL",
      "alpha3Code": "POL",
      "callingCodes": ["48"],
      "capital": "Warsaw",
      "altSpellings": ["PL", "Republic of Poland", "Rzeczpospolita Polska"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 38437239,
      "latlng": [52.0, 20.0],
      "demonym": "Polish",
      "area": 312679.0,
      "gini": 34.1,
      "timezones": ["UTC+01:00"],
      "borders": ["BLR", "CZE", "DEU", "LTU", "RUS", "SVK", "UKR"],
      "nativeName": "Polska",
      "numericCode": "616",
      "currencies": [{
        "code": "PLN",
        "name": "Polish złoty",
        "symbol": "zł"
      }],
      "languages": [{
        "iso639_1": "pl",
        "iso639_2": "pol",
        "name": "Polish",
        "nativeName": "język polski"
      }],
      "translations": {
        "de": "Polen",
        "es": "Polonia",
        "fr": "Pologne",
        "ja": "ポーランド",
        "it": "Polonia",
        "br": "Polônia",
        "pt": "Polónia",
        "nl": "Polen",
        "hr": "Poljska",
        "fa": "لهستان"
      },
      "flag": "https://restcountries.eu/data/pol.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "POL"
    }, {
      "name": "Portugal",
      "topLevelDomain": [".pt"],
      "alpha2Code": "PT",
      "alpha3Code": "PRT",
      "callingCodes": ["351"],
      "capital": "Lisbon",
      "altSpellings": ["PT", "Portuguesa", "Portuguese Republic", "República Portuguesa"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 10374822,
      "latlng": [39.5, -8.0],
      "demonym": "Portuguese",
      "area": 92090.0,
      "gini": 38.5,
      "timezones": ["UTC-01:00", "UTC"],
      "borders": ["ESP"],
      "nativeName": "Portugal",
      "numericCode": "620",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Portugal",
        "es": "Portugal",
        "fr": "Portugal",
        "ja": "ポルトガル",
        "it": "Portogallo",
        "br": "Portugal",
        "pt": "Portugal",
        "nl": "Portugal",
        "hr": "Portugal",
        "fa": "پرتغال"
      },
      "flag": "https://restcountries.eu/data/prt.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "POR"
    }, {
      "name": "Puerto Rico",
      "topLevelDomain": [".pr"],
      "alpha2Code": "PR",
      "alpha3Code": "PRI",
      "callingCodes": ["1787", "1939"],
      "capital": "San Juan",
      "altSpellings": ["PR", "Commonwealth of Puerto Rico", "Estado Libre Asociado de Puerto Rico"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 3474182,
      "latlng": [18.25, -66.5],
      "demonym": "Puerto Rican",
      "area": 8870.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Puerto Rico",
      "numericCode": "630",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Puerto Rico",
        "es": "Puerto Rico",
        "fr": "Porto Rico",
        "ja": "プエルトリコ",
        "it": "Porto Rico",
        "br": "Porto Rico",
        "pt": "Porto Rico",
        "nl": "Puerto Rico",
        "hr": "Portoriko",
        "fa": "پورتو ریکو"
      },
      "flag": "https://restcountries.eu/data/pri.svg",
      "regionalBlocs": [],
      "cioc": "PUR"
    }, {
      "name": "Qatar",
      "topLevelDomain": [".qa"],
      "alpha2Code": "QA",
      "alpha3Code": "QAT",
      "callingCodes": ["974"],
      "capital": "Doha",
      "altSpellings": ["QA", "State of Qatar", "Dawlat Qaṭar"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 2587564,
      "latlng": [25.5, 51.25],
      "demonym": "Qatari",
      "area": 11586.0,
      "gini": 41.1,
      "timezones": ["UTC+03:00"],
      "borders": ["SAU"],
      "nativeName": "قطر",
      "numericCode": "634",
      "currencies": [{
        "code": "QAR",
        "name": "Qatari riyal",
        "symbol": "ر.ق"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Katar",
        "es": "Catar",
        "fr": "Qatar",
        "ja": "カタール",
        "it": "Qatar",
        "br": "Catar",
        "pt": "Catar",
        "nl": "Qatar",
        "hr": "Katar",
        "fa": "قطر"
      },
      "flag": "https://restcountries.eu/data/qat.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "QAT"
    }, {
      "name": "Republic of Kosovo",
      "topLevelDomain": [""],
      "alpha2Code": "XK",
      "alpha3Code": "KOS",
      "callingCodes": ["383"],
      "capital": "Pristina",
      "altSpellings": ["XK", "Република Косово"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 1733842,
      "latlng": [42.666667, 21.166667],
      "demonym": "Kosovar",
      "area": 10908.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["ALB", "MKD", "MNE", "SRB"],
      "nativeName": "Republika e Kosovës",
      "numericCode": null,
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "sq",
        "iso639_2": "sqi",
        "name": "Albanian",
        "nativeName": "Shqip"
      }, {
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      }],
      "translations": {
        "de": null,
        "es": "Kosovo",
        "fr": null,
        "ja": null,
        "it": null,
        "br": "Kosovo",
        "pt": "Kosovo",
        "nl": null,
        "hr": "Kosovo",
        "fa": "کوزوو"
      },
      "flag": "https://restcountries.eu/data/kos.svg",
      "regionalBlocs": [{
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": null
    }, {
      "name": "Réunion",
      "topLevelDomain": [".re"],
      "alpha2Code": "RE",
      "alpha3Code": "REU",
      "callingCodes": ["262"],
      "capital": "Saint-Denis",
      "altSpellings": ["RE", "Reunion"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 840974,
      "latlng": [-21.15, 55.5],
      "demonym": "French",
      "area": null,
      "gini": null,
      "timezones": ["UTC+04:00"],
      "borders": [],
      "nativeName": "La Réunion",
      "numericCode": "638",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Réunion",
        "es": "Reunión",
        "fr": "Réunion",
        "ja": "レユニオン",
        "it": "Riunione",
        "br": "Reunião",
        "pt": "Reunião",
        "nl": "Réunion",
        "hr": "Réunion",
        "fa": "رئونیون"
      },
      "flag": "https://restcountries.eu/data/reu.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": ""
    }, {
      "name": "Romania",
      "topLevelDomain": [".ro"],
      "alpha2Code": "RO",
      "alpha3Code": "ROU",
      "callingCodes": ["40"],
      "capital": "Bucharest",
      "altSpellings": ["RO", "Rumania", "Roumania", "România"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 19861408,
      "latlng": [46.0, 25.0],
      "demonym": "Romanian",
      "area": 238391.0,
      "gini": 30.0,
      "timezones": ["UTC+02:00"],
      "borders": ["BGR", "HUN", "MDA", "SRB", "UKR"],
      "nativeName": "România",
      "numericCode": "642",
      "currencies": [{
        "code": "RON",
        "name": "Romanian leu",
        "symbol": "lei"
      }],
      "languages": [{
        "iso639_1": "ro",
        "iso639_2": "ron",
        "name": "Romanian",
        "nativeName": "Română"
      }],
      "translations": {
        "de": "Rumänien",
        "es": "Rumania",
        "fr": "Roumanie",
        "ja": "ルーマニア",
        "it": "Romania",
        "br": "Romênia",
        "pt": "Roménia",
        "nl": "Roemenië",
        "hr": "Rumunjska",
        "fa": "رومانی"
      },
      "flag": "https://restcountries.eu/data/rou.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "ROU"
    }, {
      "name": "Russian Federation",
      "topLevelDomain": [".ru"],
      "alpha2Code": "RU",
      "alpha3Code": "RUS",
      "callingCodes": ["7"],
      "capital": "Moscow",
      "altSpellings": ["RU", "Rossiya", "Russian Federation", "Российская Федерация", "Rossiyskaya Federatsiya"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 146599183,
      "latlng": [60.0, 100.0],
      "demonym": "Russian",
      "area": 1.7124442E7,
      "gini": 40.1,
      "timezones": ["UTC+03:00", "UTC+04:00", "UTC+06:00", "UTC+07:00", "UTC+08:00", "UTC+09:00", "UTC+10:00", "UTC+11:00", "UTC+12:00"],
      "borders": ["AZE", "BLR", "CHN", "EST", "FIN", "GEO", "KAZ", "PRK", "LVA", "LTU", "MNG", "NOR", "POL", "UKR"],
      "nativeName": "Россия",
      "numericCode": "643",
      "currencies": [{
        "code": "RUB",
        "name": "Russian ruble",
        "symbol": "₽"
      }],
      "languages": [{
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Russland",
        "es": "Rusia",
        "fr": "Russie",
        "ja": "ロシア連邦",
        "it": "Russia",
        "br": "Rússia",
        "pt": "Rússia",
        "nl": "Rusland",
        "hr": "Rusija",
        "fa": "روسیه"
      },
      "flag": "https://restcountries.eu/data/rus.svg",
      "regionalBlocs": [{
        "acronym": "EEU",
        "name": "Eurasian Economic Union",
        "otherAcronyms": ["EAEU"],
        "otherNames": []
      }],
      "cioc": "RUS"
    }, {
      "name": "Rwanda",
      "topLevelDomain": [".rw"],
      "alpha2Code": "RW",
      "alpha3Code": "RWA",
      "callingCodes": ["250"],
      "capital": "Kigali",
      "altSpellings": ["RW", "Republic of Rwanda", "Repubulika y'u Rwanda", "République du Rwanda"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 11553188,
      "latlng": [-2.0, 30.0],
      "demonym": "Rwandan",
      "area": 26338.0,
      "gini": 50.8,
      "timezones": ["UTC+02:00"],
      "borders": ["BDI", "COD", "TZA", "UGA"],
      "nativeName": "Rwanda",
      "numericCode": "646",
      "currencies": [{
        "code": "RWF",
        "name": "Rwandan franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "rw",
        "iso639_2": "kin",
        "name": "Kinyarwanda",
        "nativeName": "Ikinyarwanda"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Ruanda",
        "es": "Ruanda",
        "fr": "Rwanda",
        "ja": "ルワンダ",
        "it": "Ruanda",
        "br": "Ruanda",
        "pt": "Ruanda",
        "nl": "Rwanda",
        "hr": "Ruanda",
        "fa": "رواندا"
      },
      "flag": "https://restcountries.eu/data/rwa.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "RWA"
    }, {
      "name": "Saint Barthélemy",
      "topLevelDomain": [".bl"],
      "alpha2Code": "BL",
      "alpha3Code": "BLM",
      "callingCodes": ["590"],
      "capital": "Gustavia",
      "altSpellings": ["BL", "St. Barthelemy", "Collectivity of Saint Barthélemy", "Collectivité de Saint-Barthélemy"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 9417,
      "latlng": [18.5, -63.41666666],
      "demonym": "Saint Barthélemy Islander",
      "area": 21.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Saint-Barthélemy",
      "numericCode": "652",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Saint-Barthélemy",
        "es": "San Bartolomé",
        "fr": "Saint-Barthélemy",
        "ja": "サン・バルテルミー",
        "it": "Antille Francesi",
        "br": "São Bartolomeu",
        "pt": "São Bartolomeu",
        "nl": "Saint Barthélemy",
        "hr": "Saint Barthélemy",
        "fa": "سن-بارتلمی"
      },
      "flag": "https://restcountries.eu/data/blm.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "topLevelDomain": [".sh"],
      "alpha2Code": "SH",
      "alpha3Code": "SHN",
      "callingCodes": ["290"],
      "capital": "Jamestown",
      "altSpellings": ["SH"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 4255,
      "latlng": [-15.95, -5.7],
      "demonym": "Saint Helenian",
      "area": null,
      "gini": null,
      "timezones": ["UTC+00:00"],
      "borders": [],
      "nativeName": "Saint Helena",
      "numericCode": "654",
      "currencies": [{
        "code": "SHP",
        "name": "Saint Helena pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Sankt Helena",
        "es": "Santa Helena",
        "fr": "Sainte-Hélène",
        "ja": "セントヘレナ・アセンションおよびトリスタンダクーニャ",
        "it": "Sant'Elena",
        "br": "Santa Helena",
        "pt": "Santa Helena",
        "nl": "Sint-Helena",
        "hr": "Sveta Helena",
        "fa": "سنت هلنا، اسنشن و تریستان دا کونا"
      },
      "flag": "https://restcountries.eu/data/shn.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": null
    }, {
      "name": "Saint Kitts and Nevis",
      "topLevelDomain": [".kn"],
      "alpha2Code": "KN",
      "alpha3Code": "KNA",
      "callingCodes": ["1869"],
      "capital": "Basseterre",
      "altSpellings": ["KN", "Federation of Saint Christopher and Nevis"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 46204,
      "latlng": [17.33333333, -62.75],
      "demonym": "Kittian and Nevisian",
      "area": 261.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Saint Kitts and Nevis",
      "numericCode": "659",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "St. Kitts und Nevis",
        "es": "San Cristóbal y Nieves",
        "fr": "Saint-Christophe-et-Niévès",
        "ja": "セントクリストファー・ネイビス",
        "it": "Saint Kitts e Nevis",
        "br": "São Cristóvão e Neves",
        "pt": "São Cristóvão e Neves",
        "nl": "Saint Kitts en Nevis",
        "hr": "Sveti Kristof i Nevis",
        "fa": "سنت کیتس و نویس"
      },
      "flag": "https://restcountries.eu/data/kna.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "SKN"
    }, {
      "name": "Saint Lucia",
      "topLevelDomain": [".lc"],
      "alpha2Code": "LC",
      "alpha3Code": "LCA",
      "callingCodes": ["1758"],
      "capital": "Castries",
      "altSpellings": ["LC"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 186000,
      "latlng": [13.88333333, -60.96666666],
      "demonym": "Saint Lucian",
      "area": 616.0,
      "gini": 42.6,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Saint Lucia",
      "numericCode": "662",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Saint Lucia",
        "es": "Santa Lucía",
        "fr": "Saint-Lucie",
        "ja": "セントルシア",
        "it": "Santa Lucia",
        "br": "Santa Lúcia",
        "pt": "Santa Lúcia",
        "nl": "Saint Lucia",
        "hr": "Sveta Lucija",
        "fa": "سنت لوسیا"
      },
      "flag": "https://restcountries.eu/data/lca.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "LCA"
    }, {
      "name": "Saint Martin (French part)",
      "topLevelDomain": [".mf", ".fr", ".gp"],
      "alpha2Code": "MF",
      "alpha3Code": "MAF",
      "callingCodes": ["590"],
      "capital": "Marigot",
      "altSpellings": ["MF", "Collectivity of Saint Martin", "Collectivité de Saint-Martin"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 36979,
      "latlng": [18.08333333, -63.95],
      "demonym": "Saint Martin Islander",
      "area": 53.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": ["SXM", "NLD"],
      "nativeName": "Saint-Martin",
      "numericCode": "663",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }],
      "translations": {
        "de": "Saint Martin",
        "es": "Saint Martin",
        "fr": "Saint-Martin",
        "ja": "サン・マルタン（フランス領）",
        "it": "Saint Martin",
        "br": "Saint Martin",
        "pt": "Ilha São Martinho",
        "nl": "Saint-Martin",
        "hr": "Sveti Martin",
        "fa": "سینت مارتن"
      },
      "flag": "https://restcountries.eu/data/maf.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Saint Pierre and Miquelon",
      "topLevelDomain": [".pm"],
      "alpha2Code": "PM",
      "alpha3Code": "SPM",
      "callingCodes": ["508"],
      "capital": "Saint-Pierre",
      "altSpellings": ["PM", "Collectivité territoriale de Saint-Pierre-et-Miquelon"],
      "region": "Americas",
      "subregion": "Northern America",
      "population": 6069,
      "latlng": [46.83333333, -56.33333333],
      "demonym": "French",
      "area": 242.0,
      "gini": null,
      "timezones": ["UTC-03:00"],
      "borders": [],
      "nativeName": "Saint-Pierre-et-Miquelon",
      "numericCode": "666",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Saint-Pierre und Miquelon",
        "es": "San Pedro y Miquelón",
        "fr": "Saint-Pierre-et-Miquelon",
        "ja": "サンピエール島・ミクロン島",
        "it": "Saint-Pierre e Miquelon",
        "br": "Saint-Pierre e Miquelon",
        "pt": "São Pedro e Miquelon",
        "nl": "Saint Pierre en Miquelon",
        "hr": "Sveti Petar i Mikelon",
        "fa": "سن پیر و میکلن"
      },
      "flag": "https://restcountries.eu/data/spm.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Saint Vincent and the Grenadines",
      "topLevelDomain": [".vc"],
      "alpha2Code": "VC",
      "alpha3Code": "VCT",
      "callingCodes": ["1784"],
      "capital": "Kingstown",
      "altSpellings": ["VC"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 109991,
      "latlng": [13.25, -61.2],
      "demonym": "Saint Vincentian",
      "area": 389.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Saint Vincent and the Grenadines",
      "numericCode": "670",
      "currencies": [{
        "code": "XCD",
        "name": "East Caribbean dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Saint Vincent und die Grenadinen",
        "es": "San Vicente y Granadinas",
        "fr": "Saint-Vincent-et-les-Grenadines",
        "ja": "セントビンセントおよびグレナディーン諸島",
        "it": "Saint Vincent e Grenadine",
        "br": "São Vicente e Granadinas",
        "pt": "São Vicente e Granadinas",
        "nl": "Saint Vincent en de Grenadines",
        "hr": "Sveti Vincent i Grenadini",
        "fa": "سنت وینسنت و گرنادین‌ها"
      },
      "flag": "https://restcountries.eu/data/vct.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "VIN"
    }, {
      "name": "Samoa",
      "topLevelDomain": [".ws"],
      "alpha2Code": "WS",
      "alpha3Code": "WSM",
      "callingCodes": ["685"],
      "capital": "Apia",
      "altSpellings": ["WS", "Independent State of Samoa", "Malo Saʻoloto Tutoʻatasi o Sāmoa"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 194899,
      "latlng": [-13.58333333, -172.33333333],
      "demonym": "Samoan",
      "area": 2842.0,
      "gini": null,
      "timezones": ["UTC+13:00"],
      "borders": [],
      "nativeName": "Samoa",
      "numericCode": "882",
      "currencies": [{
        "code": "WST",
        "name": "Samoan tālā",
        "symbol": "T"
      }],
      "languages": [{
        "iso639_1": "sm",
        "iso639_2": "smo",
        "name": "Samoan",
        "nativeName": "gagana fa'a Samoa"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Samoa",
        "es": "Samoa",
        "fr": "Samoa",
        "ja": "サモア",
        "it": "Samoa",
        "br": "Samoa",
        "pt": "Samoa",
        "nl": "Samoa",
        "hr": "Samoa",
        "fa": "ساموآ"
      },
      "flag": "https://restcountries.eu/data/wsm.svg",
      "regionalBlocs": [],
      "cioc": "SAM"
    }, {
      "name": "San Marino",
      "topLevelDomain": [".sm"],
      "alpha2Code": "SM",
      "alpha3Code": "SMR",
      "callingCodes": ["378"],
      "capital": "City of San Marino",
      "altSpellings": ["SM", "Republic of San Marino", "Repubblica di San Marino"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 33005,
      "latlng": [43.76666666, 12.41666666],
      "demonym": "Sammarinese",
      "area": 61.0,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": ["ITA"],
      "nativeName": "San Marino",
      "numericCode": "674",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      }],
      "translations": {
        "de": "San Marino",
        "es": "San Marino",
        "fr": "Saint-Marin",
        "ja": "サンマリノ",
        "it": "San Marino",
        "br": "San Marino",
        "pt": "São Marinho",
        "nl": "San Marino",
        "hr": "San Marino",
        "fa": "سان مارینو"
      },
      "flag": "https://restcountries.eu/data/smr.svg",
      "regionalBlocs": [],
      "cioc": "SMR"
    }, {
      "name": "Sao Tome and Principe",
      "topLevelDomain": [".st"],
      "alpha2Code": "ST",
      "alpha3Code": "STP",
      "callingCodes": ["239"],
      "capital": "São Tomé",
      "altSpellings": ["ST", "Democratic Republic of São Tomé and Príncipe", "República Democrática de São Tomé e Príncipe"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 187356,
      "latlng": [1.0, 7.0],
      "demonym": "Sao Tomean",
      "area": 964.0,
      "gini": 50.8,
      "timezones": ["UTC"],
      "borders": [],
      "nativeName": "São Tomé e Príncipe",
      "numericCode": "678",
      "currencies": [{
        "code": "STD",
        "name": "São Tomé and Príncipe dobra",
        "symbol": "Db"
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "São Tomé und Príncipe",
        "es": "Santo Tomé y Príncipe",
        "fr": "Sao Tomé-et-Principe",
        "ja": "サントメ・プリンシペ",
        "it": "São Tomé e Príncipe",
        "br": "São Tomé e Príncipe",
        "pt": "São Tomé e Príncipe",
        "nl": "Sao Tomé en Principe",
        "hr": "Sveti Toma i Princip",
        "fa": "کواترو دو فرویرو"
      },
      "flag": "https://restcountries.eu/data/stp.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "STP"
    }, {
      "name": "Saudi Arabia",
      "topLevelDomain": [".sa"],
      "alpha2Code": "SA",
      "alpha3Code": "SAU",
      "callingCodes": ["966"],
      "capital": "Riyadh",
      "altSpellings": ["SA", "Kingdom of Saudi Arabia", "Al-Mamlakah al-‘Arabiyyah as-Su‘ūdiyyah"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 32248200,
      "latlng": [25.0, 45.0],
      "demonym": "Saudi Arabian",
      "area": 2149690.0,
      "gini": null,
      "timezones": ["UTC+03:00"],
      "borders": ["IRQ", "JOR", "KWT", "OMN", "QAT", "ARE", "YEM"],
      "nativeName": "العربية السعودية",
      "numericCode": "682",
      "currencies": [{
        "code": "SAR",
        "name": "Saudi riyal",
        "symbol": "ر.س"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Saudi-Arabien",
        "es": "Arabia Saudí",
        "fr": "Arabie Saoudite",
        "ja": "サウジアラビア",
        "it": "Arabia Saudita",
        "br": "Arábia Saudita",
        "pt": "Arábia Saudita",
        "nl": "Saoedi-Arabië",
        "hr": "Saudijska Arabija",
        "fa": "عربستان سعودی"
      },
      "flag": "https://restcountries.eu/data/sau.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "KSA"
    }, {
      "name": "Senegal",
      "topLevelDomain": [".sn"],
      "alpha2Code": "SN",
      "alpha3Code": "SEN",
      "callingCodes": ["221"],
      "capital": "Dakar",
      "altSpellings": ["SN", "Republic of Senegal", "République du Sénégal"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 14799859,
      "latlng": [14.0, -14.0],
      "demonym": "Senegalese",
      "area": 196722.0,
      "gini": 39.2,
      "timezones": ["UTC"],
      "borders": ["GMB", "GIN", "GNB", "MLI", "MRT"],
      "nativeName": "Sénégal",
      "numericCode": "686",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Senegal",
        "es": "Senegal",
        "fr": "Sénégal",
        "ja": "セネガル",
        "it": "Senegal",
        "br": "Senegal",
        "pt": "Senegal",
        "nl": "Senegal",
        "hr": "Senegal",
        "fa": "سنگال"
      },
      "flag": "https://restcountries.eu/data/sen.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "SEN"
    }, {
      "name": "Serbia",
      "topLevelDomain": [".rs"],
      "alpha2Code": "RS",
      "alpha3Code": "SRB",
      "callingCodes": ["381"],
      "capital": "Belgrade",
      "altSpellings": ["RS", "Srbija", "Republic of Serbia", "Република Србија", "Republika Srbija"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 7076372,
      "latlng": [44.0, 21.0],
      "demonym": "Serbian",
      "area": 88361.0,
      "gini": 27.8,
      "timezones": ["UTC+01:00"],
      "borders": ["BIH", "BGR", "HRV", "HUN", "KOS", "MKD", "MNE", "ROU"],
      "nativeName": "Србија",
      "numericCode": "688",
      "currencies": [{
        "code": "RSD",
        "name": "Serbian dinar",
        "symbol": "дин."
      }],
      "languages": [{
        "iso639_1": "sr",
        "iso639_2": "srp",
        "name": "Serbian",
        "nativeName": "српски језик"
      }],
      "translations": {
        "de": "Serbien",
        "es": "Serbia",
        "fr": "Serbie",
        "ja": "セルビア",
        "it": "Serbia",
        "br": "Sérvia",
        "pt": "Sérvia",
        "nl": "Servië",
        "hr": "Srbija",
        "fa": "صربستان"
      },
      "flag": "https://restcountries.eu/data/srb.svg",
      "regionalBlocs": [{
        "acronym": "CEFTA",
        "name": "Central European Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "SRB"
    }, {
      "name": "Seychelles",
      "topLevelDomain": [".sc"],
      "alpha2Code": "SC",
      "alpha3Code": "SYC",
      "callingCodes": ["248"],
      "capital": "Victoria",
      "altSpellings": ["SC", "Republic of Seychelles", "Repiblik Sesel", "République des Seychelles"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 91400,
      "latlng": [-4.58333333, 55.66666666],
      "demonym": "Seychellois",
      "area": 452.0,
      "gini": 65.8,
      "timezones": ["UTC+04:00"],
      "borders": [],
      "nativeName": "Seychelles",
      "numericCode": "690",
      "currencies": [{
        "code": "SCR",
        "name": "Seychellois rupee",
        "symbol": "₨"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Seychellen",
        "es": "Seychelles",
        "fr": "Seychelles",
        "ja": "セーシェル",
        "it": "Seychelles",
        "br": "Seicheles",
        "pt": "Seicheles",
        "nl": "Seychellen",
        "hr": "Sejšeli",
        "fa": "سیشل"
      },
      "flag": "https://restcountries.eu/data/syc.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "SEY"
    }, {
      "name": "Sierra Leone",
      "topLevelDomain": [".sl"],
      "alpha2Code": "SL",
      "alpha3Code": "SLE",
      "callingCodes": ["232"],
      "capital": "Freetown",
      "altSpellings": ["SL", "Republic of Sierra Leone"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 7075641,
      "latlng": [8.5, -11.5],
      "demonym": "Sierra Leonean",
      "area": 71740.0,
      "gini": 42.5,
      "timezones": ["UTC"],
      "borders": ["GIN", "LBR"],
      "nativeName": "Sierra Leone",
      "numericCode": "694",
      "currencies": [{
        "code": "SLL",
        "name": "Sierra Leonean leone",
        "symbol": "Le"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Sierra Leone",
        "es": "Sierra Leone",
        "fr": "Sierra Leone",
        "ja": "シエラレオネ",
        "it": "Sierra Leone",
        "br": "Serra Leoa",
        "pt": "Serra Leoa",
        "nl": "Sierra Leone",
        "hr": "Sijera Leone",
        "fa": "سیرالئون"
      },
      "flag": "https://restcountries.eu/data/sle.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "SLE"
    }, {
      "name": "Singapore",
      "topLevelDomain": [".sg"],
      "alpha2Code": "SG",
      "alpha3Code": "SGP",
      "callingCodes": ["65"],
      "capital": "Singapore",
      "altSpellings": ["SG", "Singapura", "Republik Singapura", "新加坡共和国"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 5535000,
      "latlng": [1.36666666, 103.8],
      "demonym": "Singaporean",
      "area": 710.0,
      "gini": 48.1,
      "timezones": ["UTC+08:00"],
      "borders": [],
      "nativeName": "Singapore",
      "numericCode": "702",
      "currencies": [{
        "code": "BND",
        "name": "Brunei dollar",
        "symbol": "$"
      }, {
        "code": "SGD",
        "name": "Singapore dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "ms",
        "iso639_2": "msa",
        "name": "Malay",
        "nativeName": "bahasa Melayu"
      }, {
        "iso639_1": "ta",
        "iso639_2": "tam",
        "name": "Tamil",
        "nativeName": "தமிழ்"
      }, {
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }],
      "translations": {
        "de": "Singapur",
        "es": "Singapur",
        "fr": "Singapour",
        "ja": "シンガポール",
        "it": "Singapore",
        "br": "Singapura",
        "pt": "Singapura",
        "nl": "Singapore",
        "hr": "Singapur",
        "fa": "سنگاپور"
      },
      "flag": "https://restcountries.eu/data/sgp.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "SIN"
    }, {
      "name": "Sint Maarten (Dutch part)",
      "topLevelDomain": [".sx"],
      "alpha2Code": "SX",
      "alpha3Code": "SXM",
      "callingCodes": ["1721"],
      "capital": "Philipsburg",
      "altSpellings": ["SX"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 38247,
      "latlng": [18.033333, -63.05],
      "demonym": "Dutch",
      "area": 34.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": ["MAF"],
      "nativeName": "Sint Maarten",
      "numericCode": "534",
      "currencies": [{
        "code": "ANG",
        "name": "Netherlands Antillean guilder",
        "symbol": "ƒ"
      }],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Sint Maarten (niederl. Teil)",
        "es": null,
        "fr": "Saint Martin (partie néerlandaise)",
        "ja": null,
        "it": "Saint Martin (parte olandese)",
        "br": "Sint Maarten",
        "pt": "São Martinho",
        "nl": "Sint Maarten",
        "hr": null,
        "fa": "سینت مارتن"
      },
      "flag": "https://restcountries.eu/data/sxm.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Slovakia",
      "topLevelDomain": [".sk"],
      "alpha2Code": "SK",
      "alpha3Code": "SVK",
      "callingCodes": ["421"],
      "capital": "Bratislava",
      "altSpellings": ["SK", "Slovak Republic", "Slovenská republika"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 5426252,
      "latlng": [48.66666666, 19.5],
      "demonym": "Slovak",
      "area": 49037.0,
      "gini": 26.0,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "CZE", "HUN", "POL", "UKR"],
      "nativeName": "Slovensko",
      "numericCode": "703",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "sk",
        "iso639_2": "slk",
        "name": "Slovak",
        "nativeName": "slovenčina"
      }],
      "translations": {
        "de": "Slowakei",
        "es": "República Eslovaca",
        "fr": "Slovaquie",
        "ja": "スロバキア",
        "it": "Slovacchia",
        "br": "Eslováquia",
        "pt": "Eslováquia",
        "nl": "Slowakije",
        "hr": "Slovačka",
        "fa": "اسلواکی"
      },
      "flag": "https://restcountries.eu/data/svk.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "SVK"
    }, {
      "name": "Slovenia",
      "topLevelDomain": [".si"],
      "alpha2Code": "SI",
      "alpha3Code": "SVN",
      "callingCodes": ["386"],
      "capital": "Ljubljana",
      "altSpellings": ["SI", "Republic of Slovenia", "Republika Slovenija"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 2064188,
      "latlng": [46.11666666, 14.81666666],
      "demonym": "Slovene",
      "area": 20273.0,
      "gini": 31.2,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "HRV", "ITA", "HUN"],
      "nativeName": "Slovenija",
      "numericCode": "705",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "sl",
        "iso639_2": "slv",
        "name": "Slovene",
        "nativeName": "slovenski jezik"
      }],
      "translations": {
        "de": "Slowenien",
        "es": "Eslovenia",
        "fr": "Slovénie",
        "ja": "スロベニア",
        "it": "Slovenia",
        "br": "Eslovênia",
        "pt": "Eslovénia",
        "nl": "Slovenië",
        "hr": "Slovenija",
        "fa": "اسلوونی"
      },
      "flag": "https://restcountries.eu/data/svn.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "SLO"
    }, {
      "name": "Solomon Islands",
      "topLevelDomain": [".sb"],
      "alpha2Code": "SB",
      "alpha3Code": "SLB",
      "callingCodes": ["677"],
      "capital": "Honiara",
      "altSpellings": ["SB"],
      "region": "Oceania",
      "subregion": "Melanesia",
      "population": 642000,
      "latlng": [-8.0, 159.0],
      "demonym": "Solomon Islander",
      "area": 28896.0,
      "gini": null,
      "timezones": ["UTC+11:00"],
      "borders": [],
      "nativeName": "Solomon Islands",
      "numericCode": "090",
      "currencies": [{
        "code": "SBD",
        "name": "Solomon Islands dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Salomonen",
        "es": "Islas Salomón",
        "fr": "Îles Salomon",
        "ja": "ソロモン諸島",
        "it": "Isole Salomone",
        "br": "Ilhas Salomão",
        "pt": "Ilhas Salomão",
        "nl": "Salomonseilanden",
        "hr": "Solomonski Otoci",
        "fa": "جزایر سلیمان"
      },
      "flag": "https://restcountries.eu/data/slb.svg",
      "regionalBlocs": [],
      "cioc": "SOL"
    }, {
      "name": "Somalia",
      "topLevelDomain": [".so"],
      "alpha2Code": "SO",
      "alpha3Code": "SOM",
      "callingCodes": ["252"],
      "capital": "Mogadishu",
      "altSpellings": ["SO", "aṣ-Ṣūmāl", "Federal Republic of Somalia", "Jamhuuriyadda Federaalka Soomaaliya", "Jumhūriyyat aṣ-Ṣūmāl al-Fiderāliyya"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 11079000,
      "latlng": [10.0, 49.0],
      "demonym": "Somali",
      "area": 637657.0,
      "gini": null,
      "timezones": ["UTC+03:00"],
      "borders": ["DJI", "ETH", "KEN"],
      "nativeName": "Soomaaliya",
      "numericCode": "706",
      "currencies": [{
        "code": "SOS",
        "name": "Somali shilling",
        "symbol": "Sh"
      }],
      "languages": [{
        "iso639_1": "so",
        "iso639_2": "som",
        "name": "Somali",
        "nativeName": "Soomaaliga"
      }, {
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Somalia",
        "es": "Somalia",
        "fr": "Somalie",
        "ja": "ソマリア",
        "it": "Somalia",
        "br": "Somália",
        "pt": "Somália",
        "nl": "Somalië",
        "hr": "Somalija",
        "fa": "سومالی"
      },
      "flag": "https://restcountries.eu/data/som.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "SOM"
    }, {
      "name": "South Africa",
      "topLevelDomain": [".za"],
      "alpha2Code": "ZA",
      "alpha3Code": "ZAF",
      "callingCodes": ["27"],
      "capital": "Pretoria",
      "altSpellings": ["ZA", "RSA", "Suid-Afrika", "Republic of South Africa"],
      "region": "Africa",
      "subregion": "Southern Africa",
      "population": 55653654,
      "latlng": [-29.0, 24.0],
      "demonym": "South African",
      "area": 1221037.0,
      "gini": 63.1,
      "timezones": ["UTC+02:00"],
      "borders": ["BWA", "LSO", "MOZ", "NAM", "SWZ", "ZWE"],
      "nativeName": "South Africa",
      "numericCode": "710",
      "currencies": [{
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "R"
      }],
      "languages": [{
        "iso639_1": "af",
        "iso639_2": "afr",
        "name": "Afrikaans",
        "nativeName": "Afrikaans"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "nr",
        "iso639_2": "nbl",
        "name": "Southern Ndebele",
        "nativeName": "isiNdebele"
      }, {
        "iso639_1": "st",
        "iso639_2": "sot",
        "name": "Southern Sotho",
        "nativeName": "Sesotho"
      }, {
        "iso639_1": "ss",
        "iso639_2": "ssw",
        "name": "Swati",
        "nativeName": "SiSwati"
      }, {
        "iso639_1": "tn",
        "iso639_2": "tsn",
        "name": "Tswana",
        "nativeName": "Setswana"
      }, {
        "iso639_1": "ts",
        "iso639_2": "tso",
        "name": "Tsonga",
        "nativeName": "Xitsonga"
      }, {
        "iso639_1": "ve",
        "iso639_2": "ven",
        "name": "Venda",
        "nativeName": "Tshivenḓa"
      }, {
        "iso639_1": "xh",
        "iso639_2": "xho",
        "name": "Xhosa",
        "nativeName": "isiXhosa"
      }, {
        "iso639_1": "zu",
        "iso639_2": "zul",
        "name": "Zulu",
        "nativeName": "isiZulu"
      }],
      "translations": {
        "de": "Republik Südafrika",
        "es": "República de Sudáfrica",
        "fr": "Afrique du Sud",
        "ja": "南アフリカ",
        "it": "Sud Africa",
        "br": "República Sul-Africana",
        "pt": "República Sul-Africana",
        "nl": "Zuid-Afrika",
        "hr": "Južnoafrička Republika",
        "fa": "آفریقای جنوبی"
      },
      "flag": "https://restcountries.eu/data/zaf.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "RSA"
    }, {
      "name": "South Georgia and the South Sandwich Islands",
      "topLevelDomain": [".gs"],
      "alpha2Code": "GS",
      "alpha3Code": "SGS",
      "callingCodes": ["500"],
      "capital": "King Edward Point",
      "altSpellings": ["GS", "South Georgia and the South Sandwich Islands"],
      "region": "Americas",
      "subregion": "South America",
      "population": 30,
      "latlng": [-54.5, -37.0],
      "demonym": "South Georgia and the South Sandwich Islander",
      "area": null,
      "gini": null,
      "timezones": ["UTC-02:00"],
      "borders": [],
      "nativeName": "South Georgia",
      "numericCode": "239",
      "currencies": [{
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }, {
        "code": "(none)",
        "name": null,
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Südgeorgien und die Südlichen Sandwichinseln",
        "es": "Islas Georgias del Sur y Sandwich del Sur",
        "fr": "Géorgie du Sud-et-les Îles Sandwich du Sud",
        "ja": "サウスジョージア・サウスサンドウィッチ諸島",
        "it": "Georgia del Sud e Isole Sandwich Meridionali",
        "br": "Ilhas Geórgias do Sul e Sandwich do Sul",
        "pt": "Ilhas Geórgia do Sul e Sanduíche do Sul",
        "nl": "Zuid-Georgia en Zuidelijke Sandwicheilanden",
        "hr": "Južna Georgija i otočje Južni Sandwich",
        "fa": "جزایر جورجیای جنوبی و ساندویچ جنوبی"
      },
      "flag": "https://restcountries.eu/data/sgs.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": ""
    }, {
      "name": "Korea (Republic of)",
      "topLevelDomain": [".kr"],
      "alpha2Code": "KR",
      "alpha3Code": "KOR",
      "callingCodes": ["82"],
      "capital": "Seoul",
      "altSpellings": ["KR", "Republic of Korea"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 50801405,
      "latlng": [37.0, 127.5],
      "demonym": "South Korean",
      "area": 100210.0,
      "gini": 31.3,
      "timezones": ["UTC+09:00"],
      "borders": ["PRK"],
      "nativeName": "대한민국",
      "numericCode": "410",
      "currencies": [{
        "code": "KRW",
        "name": "South Korean won",
        "symbol": "₩"
      }],
      "languages": [{
        "iso639_1": "ko",
        "iso639_2": "kor",
        "name": "Korean",
        "nativeName": "한국어"
      }],
      "translations": {
        "de": "Südkorea",
        "es": "Corea del Sur",
        "fr": "Corée du Sud",
        "ja": "大韓民国",
        "it": "Corea del Sud",
        "br": "Coreia do Sul",
        "pt": "Coreia do Sul",
        "nl": "Zuid-Korea",
        "hr": "Južna Koreja",
        "fa": "کره شمالی"
      },
      "flag": "https://restcountries.eu/data/kor.svg",
      "regionalBlocs": [],
      "cioc": "KOR"
    }, {
      "name": "South Sudan",
      "topLevelDomain": [".ss"],
      "alpha2Code": "SS",
      "alpha3Code": "SSD",
      "callingCodes": ["211"],
      "capital": "Juba",
      "altSpellings": ["SS"],
      "region": "Africa",
      "subregion": "Middle Africa",
      "population": 12131000,
      "latlng": [7.0, 30.0],
      "demonym": "South Sudanese",
      "area": 619745.0,
      "gini": 45.5,
      "timezones": ["UTC+03:00"],
      "borders": ["CAF", "COD", "ETH", "KEN", "SDN", "UGA"],
      "nativeName": "South Sudan",
      "numericCode": "728",
      "currencies": [{
        "code": "SSP",
        "name": "South Sudanese pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Südsudan",
        "es": "Sudán del Sur",
        "fr": "Soudan du Sud",
        "ja": "南スーダン",
        "it": "Sudan del sud",
        "br": "Sudão do Sul",
        "pt": "Sudão do Sul",
        "nl": "Zuid-Soedan",
        "hr": "Južni Sudan",
        "fa": "سودان جنوبی"
      },
      "flag": "https://restcountries.eu/data/ssd.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": ""
    }, {
      "name": "Spain",
      "topLevelDomain": [".es"],
      "alpha2Code": "ES",
      "alpha3Code": "ESP",
      "callingCodes": ["34"],
      "capital": "Madrid",
      "altSpellings": ["ES", "Kingdom of Spain", "Reino de España"],
      "region": "Europe",
      "subregion": "Southern Europe",
      "population": 46438422,
      "latlng": [40.0, -4.0],
      "demonym": "Spanish",
      "area": 505992.0,
      "gini": 34.7,
      "timezones": ["UTC", "UTC+01:00"],
      "borders": ["AND", "FRA", "GIB", "PRT", "MAR"],
      "nativeName": "España",
      "numericCode": "724",
      "currencies": [{
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Spanien",
        "es": "España",
        "fr": "Espagne",
        "ja": "スペイン",
        "it": "Spagna",
        "br": "Espanha",
        "pt": "Espanha",
        "nl": "Spanje",
        "hr": "Španjolska",
        "fa": "اسپانیا"
      },
      "flag": "https://restcountries.eu/data/esp.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "ESP"
    }, {
      "name": "Sri Lanka",
      "topLevelDomain": [".lk"],
      "alpha2Code": "LK",
      "alpha3Code": "LKA",
      "callingCodes": ["94"],
      "capital": "Colombo",
      "altSpellings": ["LK", "ilaṅkai", "Democratic Socialist Republic of Sri Lanka"],
      "region": "Asia",
      "subregion": "Southern Asia",
      "population": 20966000,
      "latlng": [7.0, 81.0],
      "demonym": "Sri Lankan",
      "area": 65610.0,
      "gini": 40.3,
      "timezones": ["UTC+05:30"],
      "borders": ["IND"],
      "nativeName": "śrī laṃkāva",
      "numericCode": "144",
      "currencies": [{
        "code": "LKR",
        "name": "Sri Lankan rupee",
        "symbol": "Rs"
      }],
      "languages": [{
        "iso639_1": "si",
        "iso639_2": "sin",
        "name": "Sinhalese",
        "nativeName": "සිංහල"
      }, {
        "iso639_1": "ta",
        "iso639_2": "tam",
        "name": "Tamil",
        "nativeName": "தமிழ்"
      }],
      "translations": {
        "de": "Sri Lanka",
        "es": "Sri Lanka",
        "fr": "Sri Lanka",
        "ja": "スリランカ",
        "it": "Sri Lanka",
        "br": "Sri Lanka",
        "pt": "Sri Lanka",
        "nl": "Sri Lanka",
        "hr": "Šri Lanka",
        "fa": "سری‌لانکا"
      },
      "flag": "https://restcountries.eu/data/lka.svg",
      "regionalBlocs": [{
        "acronym": "SAARC",
        "name": "South Asian Association for Regional Cooperation",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "SRI"
    }, {
      "name": "Sudan",
      "topLevelDomain": [".sd"],
      "alpha2Code": "SD",
      "alpha3Code": "SDN",
      "callingCodes": ["249"],
      "capital": "Khartoum",
      "altSpellings": ["SD", "Republic of the Sudan", "Jumhūrīyat as-Sūdān"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "population": 39598700,
      "latlng": [15.0, 30.0],
      "demonym": "Sudanese",
      "area": 1886068.0,
      "gini": 35.3,
      "timezones": ["UTC+03:00"],
      "borders": ["CAF", "TCD", "EGY", "ERI", "ETH", "LBY", "SSD"],
      "nativeName": "السودان",
      "numericCode": "729",
      "currencies": [{
        "code": "SDG",
        "name": "Sudanese pound",
        "symbol": "ج.س."
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Sudan",
        "es": "Sudán",
        "fr": "Soudan",
        "ja": "スーダン",
        "it": "Sudan",
        "br": "Sudão",
        "pt": "Sudão",
        "nl": "Soedan",
        "hr": "Sudan",
        "fa": "سودان"
      },
      "flag": "https://restcountries.eu/data/sdn.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "SUD"
    }, {
      "name": "Suriname",
      "topLevelDomain": [".sr"],
      "alpha2Code": "SR",
      "alpha3Code": "SUR",
      "callingCodes": ["597"],
      "capital": "Paramaribo",
      "altSpellings": ["SR", "Sarnam", "Sranangron", "Republic of Suriname", "Republiek Suriname"],
      "region": "Americas",
      "subregion": "South America",
      "population": 541638,
      "latlng": [4.0, -56.0],
      "demonym": "Surinamer",
      "area": 163820.0,
      "gini": 52.9,
      "timezones": ["UTC-03:00"],
      "borders": ["BRA", "GUF", "FRA", "GUY"],
      "nativeName": "Suriname",
      "numericCode": "740",
      "currencies": [{
        "code": "SRD",
        "name": "Surinamese dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "nl",
        "iso639_2": "nld",
        "name": "Dutch",
        "nativeName": "Nederlands"
      }],
      "translations": {
        "de": "Suriname",
        "es": "Surinam",
        "fr": "Surinam",
        "ja": "スリナム",
        "it": "Suriname",
        "br": "Suriname",
        "pt": "Suriname",
        "nl": "Suriname",
        "hr": "Surinam",
        "fa": "سورینام"
      },
      "flag": "https://restcountries.eu/data/sur.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }, {
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "SUR"
    }, {
      "name": "Svalbard and Jan Mayen",
      "topLevelDomain": [".sj"],
      "alpha2Code": "SJ",
      "alpha3Code": "SJM",
      "callingCodes": ["4779"],
      "capital": "Longyearbyen",
      "altSpellings": ["SJ", "Svalbard and Jan Mayen Islands"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 2562,
      "latlng": [78.0, 20.0],
      "demonym": "Norwegian",
      "area": null,
      "gini": null,
      "timezones": ["UTC+01:00"],
      "borders": [],
      "nativeName": "Svalbard og Jan Mayen",
      "numericCode": "744",
      "currencies": [{
        "code": "NOK",
        "name": "Norwegian krone",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "no",
        "iso639_2": "nor",
        "name": "Norwegian",
        "nativeName": "Norsk"
      }],
      "translations": {
        "de": "Svalbard und Jan Mayen",
        "es": "Islas Svalbard y Jan Mayen",
        "fr": "Svalbard et Jan Mayen",
        "ja": "スヴァールバル諸島およびヤンマイエン島",
        "it": "Svalbard e Jan Mayen",
        "br": "Svalbard",
        "pt": "Svalbard",
        "nl": "Svalbard en Jan Mayen",
        "hr": "Svalbard i Jan Mayen",
        "fa": "سوالبارد و یان ماین"
      },
      "flag": "https://restcountries.eu/data/sjm.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Swaziland",
      "topLevelDomain": [".sz"],
      "alpha2Code": "SZ",
      "alpha3Code": "SWZ",
      "callingCodes": ["268"],
      "capital": "Lobamba",
      "altSpellings": ["SZ", "weSwatini", "Swatini", "Ngwane", "Kingdom of Swaziland", "Umbuso waseSwatini"],
      "region": "Africa",
      "subregion": "Southern Africa",
      "population": 1132657,
      "latlng": [-26.5, 31.5],
      "demonym": "Swazi",
      "area": 17364.0,
      "gini": 51.5,
      "timezones": ["UTC+02:00"],
      "borders": ["MOZ", "ZAF"],
      "nativeName": "Swaziland",
      "numericCode": "748",
      "currencies": [{
        "code": "SZL",
        "name": "Swazi lilangeni",
        "symbol": "L"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "ss",
        "iso639_2": "ssw",
        "name": "Swati",
        "nativeName": "SiSwati"
      }],
      "translations": {
        "de": "Swasiland",
        "es": "Suazilandia",
        "fr": "Swaziland",
        "ja": "スワジランド",
        "it": "Swaziland",
        "br": "Suazilândia",
        "pt": "Suazilândia",
        "nl": "Swaziland",
        "hr": "Svazi",
        "fa": "سوازیلند"
      },
      "flag": "https://restcountries.eu/data/swz.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "SWZ"
    }, {
      "name": "Sweden",
      "topLevelDomain": [".se"],
      "alpha2Code": "SE",
      "alpha3Code": "SWE",
      "callingCodes": ["46"],
      "capital": "Stockholm",
      "altSpellings": ["SE", "Kingdom of Sweden", "Konungariket Sverige"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 9894888,
      "latlng": [62.0, 15.0],
      "demonym": "Swedish",
      "area": 450295.0,
      "gini": 25.0,
      "timezones": ["UTC+01:00"],
      "borders": ["FIN", "NOR"],
      "nativeName": "Sverige",
      "numericCode": "752",
      "currencies": [{
        "code": "SEK",
        "name": "Swedish krona",
        "symbol": "kr"
      }],
      "languages": [{
        "iso639_1": "sv",
        "iso639_2": "swe",
        "name": "Swedish",
        "nativeName": "svenska"
      }],
      "translations": {
        "de": "Schweden",
        "es": "Suecia",
        "fr": "Suède",
        "ja": "スウェーデン",
        "it": "Svezia",
        "br": "Suécia",
        "pt": "Suécia",
        "nl": "Zweden",
        "hr": "Švedska",
        "fa": "سوئد"
      },
      "flag": "https://restcountries.eu/data/swe.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "SWE"
    }, {
      "name": "Switzerland",
      "topLevelDomain": [".ch"],
      "alpha2Code": "CH",
      "alpha3Code": "CHE",
      "callingCodes": ["41"],
      "capital": "Bern",
      "altSpellings": ["CH", "Swiss Confederation", "Schweiz", "Suisse", "Svizzera", "Svizra"],
      "region": "Europe",
      "subregion": "Western Europe",
      "population": 8341600,
      "latlng": [47.0, 8.0],
      "demonym": "Swiss",
      "area": 41284.0,
      "gini": 33.7,
      "timezones": ["UTC+01:00"],
      "borders": ["AUT", "FRA", "ITA", "LIE", "DEU"],
      "nativeName": "Schweiz",
      "numericCode": "756",
      "currencies": [{
        "code": "CHF",
        "name": "Swiss franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "de",
        "iso639_2": "deu",
        "name": "German",
        "nativeName": "Deutsch"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }, {
        "iso639_1": "it",
        "iso639_2": "ita",
        "name": "Italian",
        "nativeName": "Italiano"
      }],
      "translations": {
        "de": "Schweiz",
        "es": "Suiza",
        "fr": "Suisse",
        "ja": "スイス",
        "it": "Svizzera",
        "br": "Suíça",
        "pt": "Suíça",
        "nl": "Zwitserland",
        "hr": "Švicarska",
        "fa": "سوئیس"
      },
      "flag": "https://restcountries.eu/data/che.svg",
      "regionalBlocs": [{
        "acronym": "EFTA",
        "name": "European Free Trade Association",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "SUI"
    }, {
      "name": "Syrian Arab Republic",
      "topLevelDomain": [".sy"],
      "alpha2Code": "SY",
      "alpha3Code": "SYR",
      "callingCodes": ["963"],
      "capital": "Damascus",
      "altSpellings": ["SY", "Syrian Arab Republic", "Al-Jumhūrīyah Al-ʻArabīyah As-Sūrīyah"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 18564000,
      "latlng": [35.0, 38.0],
      "demonym": "Syrian",
      "area": 185180.0,
      "gini": 35.8,
      "timezones": ["UTC+02:00"],
      "borders": ["IRQ", "ISR", "JOR", "LBN", "TUR"],
      "nativeName": "سوريا",
      "numericCode": "760",
      "currencies": [{
        "code": "SYP",
        "name": "Syrian pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Syrien",
        "es": "Siria",
        "fr": "Syrie",
        "ja": "シリア・アラブ共和国",
        "it": "Siria",
        "br": "Síria",
        "pt": "Síria",
        "nl": "Syrië",
        "hr": "Sirija",
        "fa": "سوریه"
      },
      "flag": "https://restcountries.eu/data/syr.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "SYR"
    }, {
      "name": "Taiwan",
      "topLevelDomain": [".tw"],
      "alpha2Code": "TW",
      "alpha3Code": "TWN",
      "callingCodes": ["886"],
      "capital": "Taipei",
      "altSpellings": ["TW", "Táiwān", "Republic of China", "中華民國", "Zhōnghuá Mínguó"],
      "region": "Asia",
      "subregion": "Eastern Asia",
      "population": 23503349,
      "latlng": [23.5, 121.0],
      "demonym": "Taiwanese",
      "area": 36193.0,
      "gini": null,
      "timezones": ["UTC+08:00"],
      "borders": [],
      "nativeName": "臺灣",
      "numericCode": "158",
      "currencies": [{
        "code": "TWD",
        "name": "New Taiwan dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "zh",
        "iso639_2": "zho",
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén)"
      }],
      "translations": {
        "de": "Taiwan",
        "es": "Taiwán",
        "fr": "Taïwan",
        "ja": "台湾（中華民国）",
        "it": "Taiwan",
        "br": "Taiwan",
        "pt": "Taiwan",
        "nl": "Taiwan",
        "hr": "Tajvan",
        "fa": "تایوان"
      },
      "flag": "https://restcountries.eu/data/twn.svg",
      "regionalBlocs": [],
      "cioc": "TPE"
    }, {
      "name": "Tajikistan",
      "topLevelDomain": [".tj"],
      "alpha2Code": "TJ",
      "alpha3Code": "TJK",
      "callingCodes": ["992"],
      "capital": "Dushanbe",
      "altSpellings": ["TJ", "Toçikiston", "Republic of Tajikistan", "Ҷумҳурии Тоҷикистон", "Çumhuriyi Toçikiston"],
      "region": "Asia",
      "subregion": "Central Asia",
      "population": 8593600,
      "latlng": [39.0, 71.0],
      "demonym": "Tadzhik",
      "area": 143100.0,
      "gini": 30.8,
      "timezones": ["UTC+05:00"],
      "borders": ["AFG", "CHN", "KGZ", "UZB"],
      "nativeName": "Тоҷикистон",
      "numericCode": "762",
      "currencies": [{
        "code": "TJS",
        "name": "Tajikistani somoni",
        "symbol": "ЅМ"
      }],
      "languages": [{
        "iso639_1": "tg",
        "iso639_2": "tgk",
        "name": "Tajik",
        "nativeName": "тоҷикӣ"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Tadschikistan",
        "es": "Tayikistán",
        "fr": "Tadjikistan",
        "ja": "タジキスタン",
        "it": "Tagikistan",
        "br": "Tajiquistão",
        "pt": "Tajiquistão",
        "nl": "Tadzjikistan",
        "hr": "Tađikistan",
        "fa": "تاجیکستان"
      },
      "flag": "https://restcountries.eu/data/tjk.svg",
      "regionalBlocs": [],
      "cioc": "TJK"
    }, {
      "name": "Tanzania, United Republic of",
      "topLevelDomain": [".tz"],
      "alpha2Code": "TZ",
      "alpha3Code": "TZA",
      "callingCodes": ["255"],
      "capital": "Dodoma",
      "altSpellings": ["TZ", "United Republic of Tanzania", "Jamhuri ya Muungano wa Tanzania"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 55155000,
      "latlng": [-6.0, 35.0],
      "demonym": "Tanzanian",
      "area": 945087.0,
      "gini": 37.6,
      "timezones": ["UTC+03:00"],
      "borders": ["BDI", "COD", "KEN", "MWI", "MOZ", "RWA", "UGA", "ZMB"],
      "nativeName": "Tanzania",
      "numericCode": "834",
      "currencies": [{
        "code": "TZS",
        "name": "Tanzanian shilling",
        "symbol": "Sh"
      }],
      "languages": [{
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Tansania",
        "es": "Tanzania",
        "fr": "Tanzanie",
        "ja": "タンザニア",
        "it": "Tanzania",
        "br": "Tanzânia",
        "pt": "Tanzânia",
        "nl": "Tanzania",
        "hr": "Tanzanija",
        "fa": "تانزانیا"
      },
      "flag": "https://restcountries.eu/data/tza.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "TAN"
    }, {
      "name": "Thailand",
      "topLevelDomain": [".th"],
      "alpha2Code": "TH",
      "alpha3Code": "THA",
      "callingCodes": ["66"],
      "capital": "Bangkok",
      "altSpellings": ["TH", "Prathet", "Thai", "Kingdom of Thailand", "ราชอาณาจักรไทย", "Ratcha Anachak Thai"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 65327652,
      "latlng": [15.0, 100.0],
      "demonym": "Thai",
      "area": 513120.0,
      "gini": 40.0,
      "timezones": ["UTC+07:00"],
      "borders": ["MMR", "KHM", "LAO", "MYS"],
      "nativeName": "ประเทศไทย",
      "numericCode": "764",
      "currencies": [{
        "code": "THB",
        "name": "Thai baht",
        "symbol": "฿"
      }],
      "languages": [{
        "iso639_1": "th",
        "iso639_2": "tha",
        "name": "Thai",
        "nativeName": "ไทย"
      }],
      "translations": {
        "de": "Thailand",
        "es": "Tailandia",
        "fr": "Thaïlande",
        "ja": "タイ",
        "it": "Tailandia",
        "br": "Tailândia",
        "pt": "Tailândia",
        "nl": "Thailand",
        "hr": "Tajland",
        "fa": "تایلند"
      },
      "flag": "https://restcountries.eu/data/tha.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "THA"
    }, {
      "name": "Timor-Leste",
      "topLevelDomain": [".tl"],
      "alpha2Code": "TL",
      "alpha3Code": "TLS",
      "callingCodes": ["670"],
      "capital": "Dili",
      "altSpellings": ["TL", "East Timor", "Democratic Republic of Timor-Leste", "República Democrática de Timor-Leste", "Repúblika Demokrátika Timór-Leste"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 1167242,
      "latlng": [-8.83333333, 125.91666666],
      "demonym": "East Timorese",
      "area": 14874.0,
      "gini": 31.9,
      "timezones": ["UTC+09:00"],
      "borders": ["IDN"],
      "nativeName": "Timor-Leste",
      "numericCode": "626",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }, {
        "code": null,
        "name": null,
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "pt",
        "iso639_2": "por",
        "name": "Portuguese",
        "nativeName": "Português"
      }],
      "translations": {
        "de": "Timor-Leste",
        "es": "Timor Oriental",
        "fr": "Timor oriental",
        "ja": "東ティモール",
        "it": "Timor Est",
        "br": "Timor Leste",
        "pt": "Timor Leste",
        "nl": "Oost-Timor",
        "hr": "Istočni Timor",
        "fa": "تیمور شرقی"
      },
      "flag": "https://restcountries.eu/data/tls.svg",
      "regionalBlocs": [],
      "cioc": "TLS"
    }, {
      "name": "Togo",
      "topLevelDomain": [".tg"],
      "alpha2Code": "TG",
      "alpha3Code": "TGO",
      "callingCodes": ["228"],
      "capital": "Lomé",
      "altSpellings": ["TG", "Togolese", "Togolese Republic", "République Togolaise"],
      "region": "Africa",
      "subregion": "Western Africa",
      "population": 7143000,
      "latlng": [8.0, 1.16666666],
      "demonym": "Togolese",
      "area": 56785.0,
      "gini": 34.4,
      "timezones": ["UTC"],
      "borders": ["BEN", "BFA", "GHA"],
      "nativeName": "Togo",
      "numericCode": "768",
      "currencies": [{
        "code": "XOF",
        "name": "West African CFA franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Togo",
        "es": "Togo",
        "fr": "Togo",
        "ja": "トーゴ",
        "it": "Togo",
        "br": "Togo",
        "pt": "Togo",
        "nl": "Togo",
        "hr": "Togo",
        "fa": "توگو"
      },
      "flag": "https://restcountries.eu/data/tgo.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "TOG"
    }, {
      "name": "Tokelau",
      "topLevelDomain": [".tk"],
      "alpha2Code": "TK",
      "alpha3Code": "TKL",
      "callingCodes": ["690"],
      "capital": "Fakaofo",
      "altSpellings": ["TK"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 1411,
      "latlng": [-9.0, -172.0],
      "demonym": "Tokelauan",
      "area": 12.0,
      "gini": null,
      "timezones": ["UTC+13:00"],
      "borders": [],
      "nativeName": "Tokelau",
      "numericCode": "772",
      "currencies": [{
        "code": "NZD",
        "name": "New Zealand dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Tokelau",
        "es": "Islas Tokelau",
        "fr": "Tokelau",
        "ja": "トケラウ",
        "it": "Isole Tokelau",
        "br": "Tokelau",
        "pt": "Toquelau",
        "nl": "Tokelau",
        "hr": "Tokelau",
        "fa": "توکلائو"
      },
      "flag": "https://restcountries.eu/data/tkl.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Tonga",
      "topLevelDomain": [".to"],
      "alpha2Code": "TO",
      "alpha3Code": "TON",
      "callingCodes": ["676"],
      "capital": "Nuku'alofa",
      "altSpellings": ["TO"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 103252,
      "latlng": [-20.0, -175.0],
      "demonym": "Tongan",
      "area": 747.0,
      "gini": null,
      "timezones": ["UTC+13:00"],
      "borders": [],
      "nativeName": "Tonga",
      "numericCode": "776",
      "currencies": [{
        "code": "TOP",
        "name": "Tongan paʻanga",
        "symbol": "T$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "to",
        "iso639_2": "ton",
        "name": "Tonga (Tonga Islands)",
        "nativeName": "faka Tonga"
      }],
      "translations": {
        "de": "Tonga",
        "es": "Tonga",
        "fr": "Tonga",
        "ja": "トンガ",
        "it": "Tonga",
        "br": "Tonga",
        "pt": "Tonga",
        "nl": "Tonga",
        "hr": "Tonga",
        "fa": "تونگا"
      },
      "flag": "https://restcountries.eu/data/ton.svg",
      "regionalBlocs": [],
      "cioc": "TGA"
    }, {
      "name": "Trinidad and Tobago",
      "topLevelDomain": [".tt"],
      "alpha2Code": "TT",
      "alpha3Code": "TTO",
      "callingCodes": ["1868"],
      "capital": "Port of Spain",
      "altSpellings": ["TT", "Republic of Trinidad and Tobago"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 1349667,
      "latlng": [11.0, -61.0],
      "demonym": "Trinidadian",
      "area": 5130.0,
      "gini": 40.3,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Trinidad and Tobago",
      "numericCode": "780",
      "currencies": [{
        "code": "TTD",
        "name": "Trinidad and Tobago dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Trinidad und Tobago",
        "es": "Trinidad y Tobago",
        "fr": "Trinité et Tobago",
        "ja": "トリニダード・トバゴ",
        "it": "Trinidad e Tobago",
        "br": "Trinidad e Tobago",
        "pt": "Trindade e Tobago",
        "nl": "Trinidad en Tobago",
        "hr": "Trinidad i Tobago",
        "fa": "ترینیداد و توباگو"
      },
      "flag": "https://restcountries.eu/data/tto.svg",
      "regionalBlocs": [{
        "acronym": "CARICOM",
        "name": "Caribbean Community",
        "otherAcronyms": [],
        "otherNames": ["Comunidad del Caribe", "Communauté Caribéenne", "Caribische Gemeenschap"]
      }],
      "cioc": "TTO"
    }, {
      "name": "Tunisia",
      "topLevelDomain": [".tn"],
      "alpha2Code": "TN",
      "alpha3Code": "TUN",
      "callingCodes": ["216"],
      "capital": "Tunis",
      "altSpellings": ["TN", "Republic of Tunisia", "al-Jumhūriyyah at-Tūnisiyyah"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "population": 11154400,
      "latlng": [34.0, 9.0],
      "demonym": "Tunisian",
      "area": 163610.0,
      "gini": 41.4,
      "timezones": ["UTC+01:00"],
      "borders": ["DZA", "LBY"],
      "nativeName": "تونس",
      "numericCode": "788",
      "currencies": [{
        "code": "TND",
        "name": "Tunisian dinar",
        "symbol": "د.ت"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Tunesien",
        "es": "Túnez",
        "fr": "Tunisie",
        "ja": "チュニジア",
        "it": "Tunisia",
        "br": "Tunísia",
        "pt": "Tunísia",
        "nl": "Tunesië",
        "hr": "Tunis",
        "fa": "تونس"
      },
      "flag": "https://restcountries.eu/data/tun.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }, {
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "TUN"
    }, {
      "name": "Turkey",
      "topLevelDomain": [".tr"],
      "alpha2Code": "TR",
      "alpha3Code": "TUR",
      "callingCodes": ["90"],
      "capital": "Ankara",
      "altSpellings": ["TR", "Turkiye", "Republic of Turkey", "Türkiye Cumhuriyeti"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 78741053,
      "latlng": [39.0, 35.0],
      "demonym": "Turkish",
      "area": 783562.0,
      "gini": 39.0,
      "timezones": ["UTC+03:00"],
      "borders": ["ARM", "AZE", "BGR", "GEO", "GRC", "IRN", "IRQ", "SYR"],
      "nativeName": "Türkiye",
      "numericCode": "792",
      "currencies": [{
        "code": "TRY",
        "name": "Turkish lira",
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "tr",
        "iso639_2": "tur",
        "name": "Turkish",
        "nativeName": "Türkçe"
      }],
      "translations": {
        "de": "Türkei",
        "es": "Turquía",
        "fr": "Turquie",
        "ja": "トルコ",
        "it": "Turchia",
        "br": "Turquia",
        "pt": "Turquia",
        "nl": "Turkije",
        "hr": "Turska",
        "fa": "ترکیه"
      },
      "flag": "https://restcountries.eu/data/tur.svg",
      "regionalBlocs": [],
      "cioc": "TUR"
    }, {
      "name": "Turkmenistan",
      "topLevelDomain": [".tm"],
      "alpha2Code": "TM",
      "alpha3Code": "TKM",
      "callingCodes": ["993"],
      "capital": "Ashgabat",
      "altSpellings": ["TM"],
      "region": "Asia",
      "subregion": "Central Asia",
      "population": 4751120,
      "latlng": [40.0, 60.0],
      "demonym": "Turkmen",
      "area": 488100.0,
      "gini": 40.8,
      "timezones": ["UTC+05:00"],
      "borders": ["AFG", "IRN", "KAZ", "UZB"],
      "nativeName": "Türkmenistan",
      "numericCode": "795",
      "currencies": [{
        "code": "TMT",
        "name": "Turkmenistan manat",
        "symbol": "m"
      }],
      "languages": [{
        "iso639_1": "tk",
        "iso639_2": "tuk",
        "name": "Turkmen",
        "nativeName": "Türkmen"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Turkmenistan",
        "es": "Turkmenistán",
        "fr": "Turkménistan",
        "ja": "トルクメニスタン",
        "it": "Turkmenistan",
        "br": "Turcomenistão",
        "pt": "Turquemenistão",
        "nl": "Turkmenistan",
        "hr": "Turkmenistan",
        "fa": "ترکمنستان"
      },
      "flag": "https://restcountries.eu/data/tkm.svg",
      "regionalBlocs": [],
      "cioc": "TKM"
    }, {
      "name": "Turks and Caicos Islands",
      "topLevelDomain": [".tc"],
      "alpha2Code": "TC",
      "alpha3Code": "TCA",
      "callingCodes": ["1649"],
      "capital": "Cockburn Town",
      "altSpellings": ["TC"],
      "region": "Americas",
      "subregion": "Caribbean",
      "population": 31458,
      "latlng": [21.75, -71.58333333],
      "demonym": "Turks and Caicos Islander",
      "area": 948.0,
      "gini": null,
      "timezones": ["UTC-04:00"],
      "borders": [],
      "nativeName": "Turks and Caicos Islands",
      "numericCode": "796",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Turks- und Caicosinseln",
        "es": "Islas Turks y Caicos",
        "fr": "Îles Turques-et-Caïques",
        "ja": "タークス・カイコス諸島",
        "it": "Isole Turks e Caicos",
        "br": "Ilhas Turcas e Caicos",
        "pt": "Ilhas Turcas e Caicos",
        "nl": "Turks- en Caicoseilanden",
        "hr": "Otoci Turks i Caicos",
        "fa": "جزایر تورکس و کایکوس"
      },
      "flag": "https://restcountries.eu/data/tca.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Tuvalu",
      "topLevelDomain": [".tv"],
      "alpha2Code": "TV",
      "alpha3Code": "TUV",
      "callingCodes": ["688"],
      "capital": "Funafuti",
      "altSpellings": ["TV"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 10640,
      "latlng": [-8.0, 178.0],
      "demonym": "Tuvaluan",
      "area": 26.0,
      "gini": null,
      "timezones": ["UTC+12:00"],
      "borders": [],
      "nativeName": "Tuvalu",
      "numericCode": "798",
      "currencies": [{
        "code": "AUD",
        "name": "Australian dollar",
        "symbol": "$"
      }, {
        "code": "TVD[G]",
        "name": "Tuvaluan dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Tuvalu",
        "es": "Tuvalu",
        "fr": "Tuvalu",
        "ja": "ツバル",
        "it": "Tuvalu",
        "br": "Tuvalu",
        "pt": "Tuvalu",
        "nl": "Tuvalu",
        "hr": "Tuvalu",
        "fa": "تووالو"
      },
      "flag": "https://restcountries.eu/data/tuv.svg",
      "regionalBlocs": [],
      "cioc": "TUV"
    }, {
      "name": "Uganda",
      "topLevelDomain": [".ug"],
      "alpha2Code": "UG",
      "alpha3Code": "UGA",
      "callingCodes": ["256"],
      "capital": "Kampala",
      "altSpellings": ["UG", "Republic of Uganda", "Jamhuri ya Uganda"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 33860700,
      "latlng": [1.0, 32.0],
      "demonym": "Ugandan",
      "area": 241550.0,
      "gini": 44.3,
      "timezones": ["UTC+03:00"],
      "borders": ["COD", "KEN", "RWA", "SSD", "TZA"],
      "nativeName": "Uganda",
      "numericCode": "800",
      "currencies": [{
        "code": "UGX",
        "name": "Ugandan shilling",
        "symbol": "Sh"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "sw",
        "iso639_2": "swa",
        "name": "Swahili",
        "nativeName": "Kiswahili"
      }],
      "translations": {
        "de": "Uganda",
        "es": "Uganda",
        "fr": "Uganda",
        "ja": "ウガンダ",
        "it": "Uganda",
        "br": "Uganda",
        "pt": "Uganda",
        "nl": "Oeganda",
        "hr": "Uganda",
        "fa": "اوگاندا"
      },
      "flag": "https://restcountries.eu/data/uga.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "UGA"
    }, {
      "name": "Ukraine",
      "topLevelDomain": [".ua"],
      "alpha2Code": "UA",
      "alpha3Code": "UKR",
      "callingCodes": ["380"],
      "capital": "Kiev",
      "altSpellings": ["UA", "Ukrayina"],
      "region": "Europe",
      "subregion": "Eastern Europe",
      "population": 42692393,
      "latlng": [49.0, 32.0],
      "demonym": "Ukrainian",
      "area": 603700.0,
      "gini": 26.4,
      "timezones": ["UTC+02:00"],
      "borders": ["BLR", "HUN", "MDA", "POL", "ROU", "RUS", "SVK"],
      "nativeName": "Україна",
      "numericCode": "804",
      "currencies": [{
        "code": "UAH",
        "name": "Ukrainian hryvnia",
        "symbol": "₴"
      }],
      "languages": [{
        "iso639_1": "uk",
        "iso639_2": "ukr",
        "name": "Ukrainian",
        "nativeName": "Українська"
      }],
      "translations": {
        "de": "Ukraine",
        "es": "Ucrania",
        "fr": "Ukraine",
        "ja": "ウクライナ",
        "it": "Ucraina",
        "br": "Ucrânia",
        "pt": "Ucrânia",
        "nl": "Oekraïne",
        "hr": "Ukrajina",
        "fa": "وکراین"
      },
      "flag": "https://restcountries.eu/data/ukr.svg",
      "regionalBlocs": [],
      "cioc": "UKR"
    }, {
      "name": "United Arab Emirates",
      "topLevelDomain": [".ae"],
      "alpha2Code": "AE",
      "alpha3Code": "ARE",
      "callingCodes": ["971"],
      "capital": "Abu Dhabi",
      "altSpellings": ["AE", "UAE"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 9856000,
      "latlng": [24.0, 54.0],
      "demonym": "Emirati",
      "area": 83600.0,
      "gini": null,
      "timezones": ["UTC+04"],
      "borders": ["OMN", "SAU"],
      "nativeName": "دولة الإمارات العربية المتحدة",
      "numericCode": "784",
      "currencies": [{
        "code": "AED",
        "name": "United Arab Emirates dirham",
        "symbol": "د.إ"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Vereinigte Arabische Emirate",
        "es": "Emiratos Árabes Unidos",
        "fr": "Émirats arabes unis",
        "ja": "アラブ首長国連邦",
        "it": "Emirati Arabi Uniti",
        "br": "Emirados árabes Unidos",
        "pt": "Emirados árabes Unidos",
        "nl": "Verenigde Arabische Emiraten",
        "hr": "Ujedinjeni Arapski Emirati",
        "fa": "امارات متحده عربی"
      },
      "flag": "https://restcountries.eu/data/are.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "UAE"
    }, {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "topLevelDomain": [".uk"],
      "alpha2Code": "GB",
      "alpha3Code": "GBR",
      "callingCodes": ["44"],
      "capital": "London",
      "altSpellings": ["GB", "UK", "Great Britain"],
      "region": "Europe",
      "subregion": "Northern Europe",
      "population": 65110000,
      "latlng": [54.0, -2.0],
      "demonym": "British",
      "area": 242900.0,
      "gini": 34.0,
      "timezones": ["UTC-08:00", "UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00", "UTC", "UTC+01:00", "UTC+02:00", "UTC+06:00"],
      "borders": ["IRL"],
      "nativeName": "United Kingdom",
      "numericCode": "826",
      "currencies": [{
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Vereinigtes Königreich",
        "es": "Reino Unido",
        "fr": "Royaume-Uni",
        "ja": "イギリス",
        "it": "Regno Unito",
        "br": "Reino Unido",
        "pt": "Reino Unido",
        "nl": "Verenigd Koninkrijk",
        "hr": "Ujedinjeno Kraljevstvo",
        "fa": "بریتانیای کبیر و ایرلند شمالی"
      },
      "flag": "https://restcountries.eu/data/gbr.svg",
      "regionalBlocs": [{
        "acronym": "EU",
        "name": "European Union",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "GBR"
    }, {
      "name": "United States of America",
      "topLevelDomain": [".us"],
      "alpha2Code": "US",
      "alpha3Code": "USA",
      "callingCodes": ["1"],
      "capital": "Washington, D.C.",
      "altSpellings": ["US", "USA", "United States of America"],
      "region": "Americas",
      "subregion": "Northern America",
      "population": 323947000,
      "latlng": [38.0, -97.0],
      "demonym": "American",
      "area": 9629091.0,
      "gini": 48.0,
      "timezones": ["UTC-12:00", "UTC-11:00", "UTC-10:00", "UTC-09:00", "UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00", "UTC-04:00", "UTC+10:00", "UTC+12:00"],
      "borders": ["CAN", "MEX"],
      "nativeName": "United States",
      "numericCode": "840",
      "currencies": [{
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Vereinigte Staaten von Amerika",
        "es": "Estados Unidos",
        "fr": "États-Unis",
        "ja": "アメリカ合衆国",
        "it": "Stati Uniti D'America",
        "br": "Estados Unidos",
        "pt": "Estados Unidos",
        "nl": "Verenigde Staten",
        "hr": "Sjedinjene Američke Države",
        "fa": "ایالات متحده آمریکا"
      },
      "flag": "https://restcountries.eu/data/usa.svg",
      "regionalBlocs": [{
        "acronym": "NAFTA",
        "name": "North American Free Trade Agreement",
        "otherAcronyms": [],
        "otherNames": ["Tratado de Libre Comercio de América del Norte", "Accord de Libre-échange Nord-Américain"]
      }],
      "cioc": "USA"
    }, {
      "name": "Uruguay",
      "topLevelDomain": [".uy"],
      "alpha2Code": "UY",
      "alpha3Code": "URY",
      "callingCodes": ["598"],
      "capital": "Montevideo",
      "altSpellings": ["UY", "Oriental Republic of Uruguay", "República Oriental del Uruguay"],
      "region": "Americas",
      "subregion": "South America",
      "population": 3480222,
      "latlng": [-33.0, -56.0],
      "demonym": "Uruguayan",
      "area": 181034.0,
      "gini": 39.7,
      "timezones": ["UTC-03:00"],
      "borders": ["ARG", "BRA"],
      "nativeName": "Uruguay",
      "numericCode": "858",
      "currencies": [{
        "code": "UYU",
        "name": "Uruguayan peso",
        "symbol": "$"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Uruguay",
        "es": "Uruguay",
        "fr": "Uruguay",
        "ja": "ウルグアイ",
        "it": "Uruguay",
        "br": "Uruguai",
        "pt": "Uruguai",
        "nl": "Uruguay",
        "hr": "Urugvaj",
        "fa": "اروگوئه"
      },
      "flag": "https://restcountries.eu/data/ury.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "URU"
    }, {
      "name": "Uzbekistan",
      "topLevelDomain": [".uz"],
      "alpha2Code": "UZ",
      "alpha3Code": "UZB",
      "callingCodes": ["998"],
      "capital": "Tashkent",
      "altSpellings": ["UZ", "Republic of Uzbekistan", "O‘zbekiston Respublikasi", "Ўзбекистон Республикаси"],
      "region": "Asia",
      "subregion": "Central Asia",
      "population": 31576400,
      "latlng": [41.0, 64.0],
      "demonym": "Uzbekistani",
      "area": 447400.0,
      "gini": 36.7,
      "timezones": ["UTC+05:00"],
      "borders": ["AFG", "KAZ", "KGZ", "TJK", "TKM"],
      "nativeName": "O‘zbekiston",
      "numericCode": "860",
      "currencies": [{
        "code": "UZS",
        "name": "Uzbekistani so'm",
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "uz",
        "iso639_2": "uzb",
        "name": "Uzbek",
        "nativeName": "Oʻzbek"
      }, {
        "iso639_1": "ru",
        "iso639_2": "rus",
        "name": "Russian",
        "nativeName": "Русский"
      }],
      "translations": {
        "de": "Usbekistan",
        "es": "Uzbekistán",
        "fr": "Ouzbékistan",
        "ja": "ウズベキスタン",
        "it": "Uzbekistan",
        "br": "Uzbequistão",
        "pt": "Usbequistão",
        "nl": "Oezbekistan",
        "hr": "Uzbekistan",
        "fa": "ازبکستان"
      },
      "flag": "https://restcountries.eu/data/uzb.svg",
      "regionalBlocs": [],
      "cioc": "UZB"
    }, {
      "name": "Vanuatu",
      "topLevelDomain": [".vu"],
      "alpha2Code": "VU",
      "alpha3Code": "VUT",
      "callingCodes": ["678"],
      "capital": "Port Vila",
      "altSpellings": ["VU", "Republic of Vanuatu", "Ripablik blong Vanuatu", "République de Vanuatu"],
      "region": "Oceania",
      "subregion": "Melanesia",
      "population": 277500,
      "latlng": [-16.0, 167.0],
      "demonym": "Ni-Vanuatu",
      "area": 12189.0,
      "gini": null,
      "timezones": ["UTC+11:00"],
      "borders": [],
      "nativeName": "Vanuatu",
      "numericCode": "548",
      "currencies": [{
        "code": "VUV",
        "name": "Vanuatu vatu",
        "symbol": "Vt"
      }],
      "languages": [{
        "iso639_1": "bi",
        "iso639_2": "bis",
        "name": "Bislama",
        "nativeName": "Bislama"
      }, {
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Vanuatu",
        "es": "Vanuatu",
        "fr": "Vanuatu",
        "ja": "バヌアツ",
        "it": "Vanuatu",
        "br": "Vanuatu",
        "pt": "Vanuatu",
        "nl": "Vanuatu",
        "hr": "Vanuatu",
        "fa": "وانواتو"
      },
      "flag": "https://restcountries.eu/data/vut.svg",
      "regionalBlocs": [],
      "cioc": "VAN"
    }, {
      "name": "Venezuela (Bolivarian Republic of)",
      "topLevelDomain": [".ve"],
      "alpha2Code": "VE",
      "alpha3Code": "VEN",
      "callingCodes": ["58"],
      "capital": "Caracas",
      "altSpellings": ["VE", "Bolivarian Republic of Venezuela", "República Bolivariana de Venezuela"],
      "region": "Americas",
      "subregion": "South America",
      "population": 31028700,
      "latlng": [8.0, -66.0],
      "demonym": "Venezuelan",
      "area": 916445.0,
      "gini": 44.8,
      "timezones": ["UTC-04:00"],
      "borders": ["BRA", "COL", "GUY"],
      "nativeName": "Venezuela",
      "numericCode": "862",
      "currencies": [{
        "code": "VEF",
        "name": "Venezuelan bolívar",
        "symbol": "Bs F"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Venezuela",
        "es": "Venezuela",
        "fr": "Venezuela",
        "ja": "ベネズエラ・ボリバル共和国",
        "it": "Venezuela",
        "br": "Venezuela",
        "pt": "Venezuela",
        "nl": "Venezuela",
        "hr": "Venezuela",
        "fa": "ونزوئلا"
      },
      "flag": "https://restcountries.eu/data/ven.svg",
      "regionalBlocs": [{
        "acronym": "USAN",
        "name": "Union of South American Nations",
        "otherAcronyms": ["UNASUR", "UNASUL", "UZAN"],
        "otherNames": ["Unión de Naciones Suramericanas", "União de Nações Sul-Americanas", "Unie van Zuid-Amerikaanse Naties", "South American Union"]
      }],
      "cioc": "VEN"
    }, {
      "name": "Viet Nam",
      "topLevelDomain": [".vn"],
      "alpha2Code": "VN",
      "alpha3Code": "VNM",
      "callingCodes": ["84"],
      "capital": "Hanoi",
      "altSpellings": ["VN", "Socialist Republic of Vietnam", "Cộng hòa Xã hội chủ nghĩa Việt Nam"],
      "region": "Asia",
      "subregion": "South-Eastern Asia",
      "population": 92700000,
      "latlng": [16.16666666, 107.83333333],
      "demonym": "Vietnamese",
      "area": 331212.0,
      "gini": 35.6,
      "timezones": ["UTC+07:00"],
      "borders": ["KHM", "CHN", "LAO"],
      "nativeName": "Việt Nam",
      "numericCode": "704",
      "currencies": [{
        "code": "VND",
        "name": "Vietnamese đồng",
        "symbol": "₫"
      }],
      "languages": [{
        "iso639_1": "vi",
        "iso639_2": "vie",
        "name": "Vietnamese",
        "nativeName": "Tiếng Việt"
      }],
      "translations": {
        "de": "Vietnam",
        "es": "Vietnam",
        "fr": "Viêt Nam",
        "ja": "ベトナム",
        "it": "Vietnam",
        "br": "Vietnã",
        "pt": "Vietname",
        "nl": "Vietnam",
        "hr": "Vijetnam",
        "fa": "ویتنام"
      },
      "flag": "https://restcountries.eu/data/vnm.svg",
      "regionalBlocs": [{
        "acronym": "ASEAN",
        "name": "Association of Southeast Asian Nations",
        "otherAcronyms": [],
        "otherNames": []
      }],
      "cioc": "VIE"
    }, {
      "name": "Wallis and Futuna",
      "topLevelDomain": [".wf"],
      "alpha2Code": "WF",
      "alpha3Code": "WLF",
      "callingCodes": ["681"],
      "capital": "Mata-Utu",
      "altSpellings": ["WF", "Territory of the Wallis and Futuna Islands", "Territoire des îles Wallis et Futuna"],
      "region": "Oceania",
      "subregion": "Polynesia",
      "population": 11750,
      "latlng": [-13.3, -176.2],
      "demonym": "Wallis and Futuna Islander",
      "area": 142.0,
      "gini": null,
      "timezones": ["UTC+12:00"],
      "borders": [],
      "nativeName": "Wallis et Futuna",
      "numericCode": "876",
      "currencies": [{
        "code": "XPF",
        "name": "CFP franc",
        "symbol": "Fr"
      }],
      "languages": [{
        "iso639_1": "fr",
        "iso639_2": "fra",
        "name": "French",
        "nativeName": "français"
      }],
      "translations": {
        "de": "Wallis und Futuna",
        "es": "Wallis y Futuna",
        "fr": "Wallis-et-Futuna",
        "ja": "ウォリス・フツナ",
        "it": "Wallis e Futuna",
        "br": "Wallis e Futuna",
        "pt": "Wallis e Futuna",
        "nl": "Wallis en Futuna",
        "hr": "Wallis i Fortuna",
        "fa": "والیس و فوتونا"
      },
      "flag": "https://restcountries.eu/data/wlf.svg",
      "regionalBlocs": [],
      "cioc": ""
    }, {
      "name": "Western Sahara",
      "topLevelDomain": [".eh"],
      "alpha2Code": "EH",
      "alpha3Code": "ESH",
      "callingCodes": ["212"],
      "capital": "El Aaiún",
      "altSpellings": ["EH", "Taneẓroft Tutrimt"],
      "region": "Africa",
      "subregion": "Northern Africa",
      "population": 510713,
      "latlng": [24.5, -13.0],
      "demonym": "Sahrawi",
      "area": 266000.0,
      "gini": null,
      "timezones": ["UTC+00:00"],
      "borders": ["DZA", "MRT", "MAR"],
      "nativeName": "الصحراء الغربية",
      "numericCode": "732",
      "currencies": [{
        "code": "MAD",
        "name": "Moroccan dirham",
        "symbol": "د.م."
      }, {
        "code": "DZD",
        "name": "Algerian dinar",
        "symbol": "د.ج"
      }],
      "languages": [{
        "iso639_1": "es",
        "iso639_2": "spa",
        "name": "Spanish",
        "nativeName": "Español"
      }],
      "translations": {
        "de": "Westsahara",
        "es": "Sahara Occidental",
        "fr": "Sahara Occidental",
        "ja": "西サハラ",
        "it": "Sahara Occidentale",
        "br": "Saara Ocidental",
        "pt": "Saara Ocidental",
        "nl": "Westelijke Sahara",
        "hr": "Zapadna Sahara",
        "fa": "جمهوری دموکراتیک عربی صحرا"
      },
      "flag": "https://restcountries.eu/data/esh.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": ""
    }, {
      "name": "Yemen",
      "topLevelDomain": [".ye"],
      "alpha2Code": "YE",
      "alpha3Code": "YEM",
      "callingCodes": ["967"],
      "capital": "Sana'a",
      "altSpellings": ["YE", "Yemeni Republic", "al-Jumhūriyyah al-Yamaniyyah"],
      "region": "Asia",
      "subregion": "Western Asia",
      "population": 27478000,
      "latlng": [15.0, 48.0],
      "demonym": "Yemeni",
      "area": 527968.0,
      "gini": 37.7,
      "timezones": ["UTC+03:00"],
      "borders": ["OMN", "SAU"],
      "nativeName": "اليَمَن",
      "numericCode": "887",
      "currencies": [{
        "code": "YER",
        "name": "Yemeni rial",
        "symbol": "﷼"
      }],
      "languages": [{
        "iso639_1": "ar",
        "iso639_2": "ara",
        "name": "Arabic",
        "nativeName": "العربية"
      }],
      "translations": {
        "de": "Jemen",
        "es": "Yemen",
        "fr": "Yémen",
        "ja": "イエメン",
        "it": "Yemen",
        "br": "Iêmen",
        "pt": "Iémen",
        "nl": "Jemen",
        "hr": "Jemen",
        "fa": "یمن"
      },
      "flag": "https://restcountries.eu/data/yem.svg",
      "regionalBlocs": [{
        "acronym": "AL",
        "name": "Arab League",
        "otherAcronyms": [],
        "otherNames": ["جامعة الدول العربية", "Jāmiʻat ad-Duwal al-ʻArabīyah", "League of Arab States"]
      }],
      "cioc": "YEM"
    }, {
      "name": "Zambia",
      "topLevelDomain": [".zm"],
      "alpha2Code": "ZM",
      "alpha3Code": "ZMB",
      "callingCodes": ["260"],
      "capital": "Lusaka",
      "altSpellings": ["ZM", "Republic of Zambia"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 15933883,
      "latlng": [-15.0, 30.0],
      "demonym": "Zambian",
      "area": 752612.0,
      "gini": 54.6,
      "timezones": ["UTC+02:00"],
      "borders": ["AGO", "BWA", "COD", "MWI", "MOZ", "NAM", "TZA", "ZWE"],
      "nativeName": "Zambia",
      "numericCode": "894",
      "currencies": [{
        "code": "ZMW",
        "name": "Zambian kwacha",
        "symbol": "ZK"
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }],
      "translations": {
        "de": "Sambia",
        "es": "Zambia",
        "fr": "Zambie",
        "ja": "ザンビア",
        "it": "Zambia",
        "br": "Zâmbia",
        "pt": "Zâmbia",
        "nl": "Zambia",
        "hr": "Zambija",
        "fa": "زامبیا"
      },
      "flag": "https://restcountries.eu/data/zmb.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "ZAM"
    }, {
      "name": "Zimbabwe",
      "topLevelDomain": [".zw"],
      "alpha2Code": "ZW",
      "alpha3Code": "ZWE",
      "callingCodes": ["263"],
      "capital": "Harare",
      "altSpellings": ["ZW", "Republic of Zimbabwe"],
      "region": "Africa",
      "subregion": "Eastern Africa",
      "population": 14240168,
      "latlng": [-20.0, 30.0],
      "demonym": "Zimbabwean",
      "area": 390757.0,
      "gini": null,
      "timezones": ["UTC+02:00"],
      "borders": ["BWA", "MOZ", "ZAF", "ZMB"],
      "nativeName": "Zimbabwe",
      "numericCode": "716",
      "currencies": [{
        "code": "BWP",
        "name": "Botswana pula",
        "symbol": "P"
      }, {
        "code": "GBP",
        "name": "British pound",
        "symbol": "£"
      }, {
        "code": "CNY",
        "name": "Chinese yuan",
        "symbol": "¥"
      }, {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
      }, {
        "code": "INR",
        "name": "Indian rupee",
        "symbol": "₹"
      }, {
        "code": "JPY",
        "name": "Japanese yen",
        "symbol": "¥"
      }, {
        "code": "ZAR",
        "name": "South African rand",
        "symbol": "Rs"
      }, {
        "code": "USD",
        "name": "United States dollar",
        "symbol": "$"
      }, {
        "code": "(none)",
        "name": null,
        "symbol": null
      }],
      "languages": [{
        "iso639_1": "en",
        "iso639_2": "eng",
        "name": "English",
        "nativeName": "English"
      }, {
        "iso639_1": "sn",
        "iso639_2": "sna",
        "name": "Shona",
        "nativeName": "chiShona"
      }, {
        "iso639_1": "nd",
        "iso639_2": "nde",
        "name": "Northern Ndebele",
        "nativeName": "isiNdebele"
      }],
      "translations": {
        "de": "Simbabwe",
        "es": "Zimbabue",
        "fr": "Zimbabwe",
        "ja": "ジンバブエ",
        "it": "Zimbabwe",
        "br": "Zimbabwe",
        "pt": "Zimbabué",
        "nl": "Zimbabwe",
        "hr": "Zimbabve",
        "fa": "زیمباوه"
      },
      "flag": "https://restcountries.eu/data/zwe.svg",
      "regionalBlocs": [{
        "acronym": "AU",
        "name": "African Union",
        "otherAcronyms": [],
        "otherNames": ["الاتحاد الأفريقي", "Union africaine", "União Africana", "Unión Africana", "Umoja wa Afrika"]
      }],
      "cioc": "ZIM"
    }];
    /***/
  },

  /***/
  "./src/app/user/home/userlogin/userlogin.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/user/home/userlogin/userlogin.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserHomeUserloginUserloginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".user-login-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.user-login-section .login-section-inner {\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  position: relative;\n  display: flex;\n}\n.user-login-section .login-section-inner .login-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  flex-direction: column;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.user-login-section .login-section-inner .login-left img {\n  width: 50%;\n}\n.user-login-section .login-section-inner .login-left .login-left-info {\n  padding-bottom: 30px;\n  padding-top: 55px;\n}\n.user-login-section .login-section-inner .login-left .login-left-info h2 {\n  text-align: left;\n  letter-spacing: 0;\n  color: #262626;\n  opacity: 1;\n  font-size: 18px;\n  font-weight: 500;\n  margin-bottom: 20px;\n  margin-top: 50px;\n}\n.user-login-section .login-section-inner .login-left .login-left-info .sign-in {\n  text-align: left;\n  letter-spacing: 0;\n  color: #59626a;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 400;\n}\n.user-login-section .login-section-inner .login-left .form-sec {\n  background: #f5f6f7;\n  padding: 35px 115px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form input {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000005;\n  border-top-right-radius: 24px;\n  width: 316px;\n  border-bottom-right-radius: 24px;\n  height: 50px;\n  text-align: left;\n  letter-spacing: 0;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 100;\n  color: #9595a1 !important;\n  border: none;\n  border-left: 1px solid #eeeeee;\n}\n.user-login-section .login-section-inner .login-left .form-sec form input:focus {\n  border-color: #eeeeee !important;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .input-group-prepend {\n  display: flex;\n  flex-direction: column;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .input-group-prepend .input-group-text {\n  background: #ffffff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000005;\n  border: none;\n  border-top-left-radius: 24px;\n  border-bottom-left-radius: 24px;\n  height: 50px;\n  text-align: left;\n  letter-spacing: 0;\n  opacity: 1;\n  font-size: 16px;\n  font-weight: 100;\n  color: #9595a1 !important;\n}\n.user-login-section .login-section-inner .login-left .form-sec form label {\n  text-align: left;\n  letter-spacing: 0;\n  color: #262626;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 600;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .btn-get-otp {\n  background: transparent linear-gradient(90deg, #cc2b5e 0%, #753a88 100%) 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 6px #00000005;\n  border-radius: 48px;\n  height: 50px;\n  width: 100%;\n  text-align: center;\n  letter-spacing: 0;\n  color: #ffffff;\n  opacity: 1;\n  font-size: 14px;\n  border: none;\n  margin-top: 10px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .btn-get-otp img {\n  width: initial;\n  margin-right: 10px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .btn-sign-apple {\n  background: #000000;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .social-info {\n  text-align: center;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .social-info .fb-icon {\n  color: #385c8e;\n  font-weight: 600;\n  font-size: 30px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .social-info .google-icon {\n  color: #f94938;\n  font-weight: 600;\n  font-size: 30px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .social-info .apple-icon {\n  font-weight: 600;\n  font-size: 30px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .social-info a:nth-child(1) {\n  margin-right: 20px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form h5 {\n  text-align: center;\n  letter-spacing: 0;\n  color: #59626a;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 100;\n  margin-top: 25px;\n  margin-bottom: 15px;\n}\n.user-login-section .login-section-inner .login-left .form-sec form .max-width-sec {\n  max-width: 320px;\n}\n.user-login-section .login-section-inner .login-left .form-sec .terms-privacy {\n  text-align: center;\n  margin: 0 auto;\n  display: block;\n  letter-spacing: 0;\n  color: #ff7d7d;\n  opacity: 1;\n  font-size: 14px;\n  border-top: 1px solid #eeeeee;\n  padding-top: 15px;\n}\n.user-login-section .login-section-inner .login-left .social-info {\n  text-align: center;\n}\n.user-login-section .login-section-inner .login-left .social-info .fb-icon {\n  color: #385c8e;\n  font-weight: 600;\n  font-size: 30px;\n}\n.user-login-section .login-section-inner .login-left .social-info .google-icon {\n  color: #f94938;\n  font-weight: 600;\n  font-size: 30px;\n}\n.user-login-section .login-section-inner .login-left .social-info .apple-icon {\n  font-weight: 600;\n  font-size: 30px;\n}\n.user-login-section .login-section-inner .login-left .social-info a:nth-child(n) {\n  margin-right: 20px;\n}\n.user-login-section .login-section-inner .login-left h5 {\n  text-align: center;\n  letter-spacing: 0;\n  color: #59626a;\n  opacity: 1;\n  font-size: 14px;\n  font-weight: 100;\n  margin-top: 25px;\n  margin-bottom: 15px;\n}\n.user-login-section .login-section-inner .login-right {\n  flex: 1.5;\n  padding: 0;\n  display: flex;\n}\n.user-login-section .login-section-inner .login-right label {\n  font-size: 15px;\n  color: #4d4d55;\n  font-family: \"Roboto\";\n}\n.user-login-section .login-section-inner .login-right input {\n  font-size: 13px;\n  border: 1px solid #d2d4df;\n  border-radius: 8px;\n  color: #9595a1;\n  height: 35px;\n  font-family: \"Roboto\";\n}\n.user-login-section .login-section-inner .login-right .btn-sign-in {\n  width: 100%;\n  background-image: -ms-linear-gradient(0deg, #c92c5f 0%, #783a87 50%);\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n}\n.user-login-section .login-section-inner .login-right .btn-sign-in:hover {\n  background-image: -ms-linear-gradient(0deg, #783a87 0%, #c92c5f 50%);\n}\n.user-login-section .login-section-inner .login-right .form-control:focus {\n  border-color: #9c3ee8;\n  outline: 0;\n  box-shadow: 0 0 0 0 #9c3ee8;\n}\n.user-login-section .login-section-inner .login-right .form-group {\n  margin-bottom: 10px;\n}\n.user-login-section .login-section-inner .login-right .btn-primary:not(:disabled):not(.disabled):active {\n  background-image: -ms-linear-gradient(0deg, #c92c5f 0%, #783a87 50%);\n}\n.user-login-section .login-section-inner .login-right .sign-up {\n  font-size: 12px;\n  color: #4d4d55;\n  font-family: \"Roboto\";\n  text-align: center;\n  padding-top: 10px;\n}\n.user-login-section .login-section-inner .login-right .sign-up a {\n  color: #c92c5f;\n  text-decoration: none;\n  padding-left: 10px;\n}\n@media (max-width: 991px) {\n  .user-login-section .login-section-inner {\n    display: block;\n  }\n  .user-login-section .login-section-inner .login-left .form-sec form .max-width-sec {\n    max-width: initial;\n  }\n}\n@media (max-width: 767px) {\n  .user-login-section .login-section-inner .login-left .form-sec {\n    padding: 35px 0;\n    padding-bottom: 15px;\n  }\n  .user-login-section .login-section-inner .login-left .form-sec form .max-width-sec {\n    padding: 15px;\n  }\n  .user-login-section .login-section-inner .login-left .login-left-info {\n    padding-bottom: 20px;\n    padding-top: 20px;\n  }\n  .user-login-section .login-section-inner .login-left .login-left-info h2 {\n    margin-bottom: 10px;\n    margin-top: 30px;\n  }\n}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em;\n  background: white !important;\n  border-radius: 45px !important;\n  margin-bottom: 8px !important;\n  text-align: center !important;\n}\n.formfields {\n  margin-bottom: 4px;\n}\n.socilaLogin {\n  cursor: pointer;\n}\n.ng-autocomplete {\n  width: 100%;\n  max-width: 600px;\n  display: table;\n  margin: 0 auto;\n}\n.codesList {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9ob21lL3VzZXJsb2dpbi91c2VybG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvaG9tZS91c2VybG9naW4vdXNlcmxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0VKO0FEREk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUNHTjtBRERNO0VBQ0UsVUFBQTtBQ0dSO0FERE07RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0FDR1I7QURGUTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNJVjtBREZRO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSVY7QURETTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNHUjtBRENVO0VBQ0UsK0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDWjtBREFZO0VBQ0UsZ0NBQUE7QUNFZDtBRENVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDQ1o7QURBWTtFQUNFLCtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRWQ7QURDVTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NaO0FEQ1U7RUFDRSxvR0FBQTtFQUdBLGlDQUFBO0VBQ0EsbUJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNGWjtBREdZO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDRGQ7QURJVTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0ZaO0FES1U7RUFDRSxrQkFBQTtBQ0haO0FES1k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSGQ7QURLWTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNIZDtBREtZO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSGQ7QURNYztFQUNFLGtCQUFBO0FDSmhCO0FEUVU7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTlo7QURRVTtFQUNFLGdCQUFBO0FDTlo7QURTUTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7QUNQVjtBRFVNO0VBQ0Usa0JBQUE7QUNSUjtBRFNRO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1BWO0FEU1E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUFY7QURTUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ1BWO0FEVVU7RUFDRSxrQkFBQTtBQ1JaO0FEWU07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDVlI7QURhSTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ1hOO0FEWU07RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDVlI7QURZTTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQ1ZSO0FEWU07RUFDRSxXQUFBO0VBV0Esb0VBQUE7RUFLQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ3RCUjtBRHVCUTtFQVdFLG9FQUFBO0FDN0JWO0FEcUNRO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUNuQ1Y7QURzQ007RUFDRSxtQkFBQTtBQ3BDUjtBRHlDWTtFQVdFLG9FQUFBO0FDL0NkO0FEd0RNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN0RFI7QUR1RFE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ3JEVjtBRDREQTtFQUVJO0lBQ0UsY0FBQTtFQzFESjtFRDhEVTtJQUNFLGtCQUFBO0VDNURaO0FBQ0Y7QURvRUE7RUFLUTtJQUNFLGVBQUE7SUFDQSxvQkFBQTtFQ3RFUjtFRHdFVTtJQUNFLGFBQUE7RUN0RVo7RUQyRU07SUFDRSxvQkFBQTtJQUNBLGlCQUFBO0VDekVSO0VEMEVRO0lBQ0UsbUJBQUE7SUFDQSxnQkFBQTtFQ3hFVjtBQUNGO0FEK0VBO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtBQzdFRjtBRCtFQTtFQUNFLGtCQUFBO0FDNUVGO0FEOEVBO0VBQ0UsZUFBQTtBQzNFRjtBRDZFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDMUVGO0FENEVBO0VBQ0UsbUJBQUE7QUN6RUYiLCJmaWxlIjoic3JjL2FwcC91c2VyL2hvbWUvdXNlcmxvZ2luL3VzZXJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2VyLWxvZ2luLXNlY3Rpb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmxvZ2luLXNlY3Rpb24taW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC5sb2dpbi1sZWZ0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIC8vIHBhZGRpbmc6IDg1cHggMTE1cHg7XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAubG9naW4tbGVmdC1pbmZvIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTVweDtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICBjb2xvcjogIzI2MjYyNjtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zaWduLWluIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIGNvbG9yOiAjNTk2MjZhO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLXNlYyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjZmNztcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDExNXB4O1xyXG4gICAgICAgIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggIzAwMDAwMDA1O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDMxNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1OTVhMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2VlZWVlZTtcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWVlZWVlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pbnB1dC1ncm91cC1wcmVwZW5kIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAwNTtcclxuICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjRweDtcclxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICM5NTk1YTEgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyNjI2MjY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5idG4tZ2V0LW90cCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjY2MyYjVlIDAlLCAjNzUzYTg4IDEwMCUpIDAlIDAlIG5vLXJlcGVhdFxyXG4gICAgICAgICAgICAgIHBhZGRpbmctYm94O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMDU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQ4cHg7XHJcbiAgICAgICAgICAgIC8vIHdpZHRoOiAzMTZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmJ0bi1zaWduLWFwcGxlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zb2NpYWwtaW5mbyB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIC5mYi1pY29uIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzM4NWM4ZTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZ29vZ2xlLWljb24ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZjk0OTM4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hcHBsZS1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTk2MjZhO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWF4LXdpZHRoLXNlYyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXJtcy1wcml2YWN5IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIGNvbG9yOiAjZmY3ZDdkO1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zb2NpYWwtaW5mbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC5mYi1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjMzg1YzhlO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdvb2dsZS1pY29uIHtcclxuICAgICAgICAgIGNvbG9yOiAjZjk0OTM4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcGxlLWljb24ge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAmOm50aC1jaGlsZChuKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaDUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgICAgICBjb2xvcjogIzU5NjI2YTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxvZ2luLXJpZ2h0IHtcclxuICAgICAgZmxleDogMS41O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGQ0ZDU1O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ0ZGY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjOTU5NWExO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1zaWduLWluIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIDBkZWcsXHJcbiAgICAgICAgICByZ2IoMjAxLCA0NCwgOTUpIDAlLFxyXG4gICAgICAgICAgcmdiKDEyMCwgNTgsIDEzNSkgNTAlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIDBkZWcsXHJcbiAgICAgICAgICByZ2IoMjAxLCA0NCwgOTUpIDAlLFxyXG4gICAgICAgICAgcmdiKDEyMCwgNTgsIDEzNSkgNTAlXHJcbiAgICAgICAgKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgMGRlZyxcclxuICAgICAgICAgIHJnYigyMDEsIDQ0LCA5NSkgMCUsXHJcbiAgICAgICAgICByZ2IoMTIwLCA1OCwgMTM1KSA1MCVcclxuICAgICAgICApO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAwZGVnLFxyXG4gICAgICAgICAgICByZ2IoMTIwLCA1OCwgMTM1KSAwJSxcclxuICAgICAgICAgICAgcmdiKDIwMSwgNDQsIDk1KSA1MCVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMGRlZyxcclxuICAgICAgICAgICAgcmdiKDEyMCwgNTgsIDEzNSkgMCUsXHJcbiAgICAgICAgICAgIHJnYigyMDEsIDQ0LCA5NSkgNTAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgMGRlZyxcclxuICAgICAgICAgICAgcmdiKDEyMCwgNTgsIDEzNSkgMCUsXHJcbiAgICAgICAgICAgIHJnYigyMDEsIDQ0LCA5NSkgNTAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzljM2VlODtcclxuICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwICM5YzNlZTg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLWdyb3VwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgJjpub3QoOmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAmOm5vdCguZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYigyMDEsIDQ0LCA5NSkgMCUsXHJcbiAgICAgICAgICAgICAgICByZ2IoMTIwLCA1OCwgMTM1KSA1MCVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgMGRlZyxcclxuICAgICAgICAgICAgICAgIHJnYigyMDEsIDQ0LCA5NSkgMCUsXHJcbiAgICAgICAgICAgICAgICByZ2IoMTIwLCA1OCwgMTM1KSA1MCVcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAwZGVnLFxyXG4gICAgICAgICAgICAgICAgcmdiKDIwMSwgNDQsIDk1KSAwJSxcclxuICAgICAgICAgICAgICAgIHJnYigxMjAsIDU4LCAxMzUpIDUwJVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNpZ24tdXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzRkNGQ1NTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYigyMDEsIDQ0LCA5NSk7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAudXNlci1sb2dpbi1zZWN0aW9uIHtcclxuICAgIC5sb2dpbi1zZWN0aW9uLWlubmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIC5sb2dpbi1sZWZ0IHtcclxuICAgICAgICAuZm9ybS1zZWMge1xyXG4gICAgICAgICAgZm9ybSB7XHJcbiAgICAgICAgICAgIC5tYXgtd2lkdGgtc2VjIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC51c2VyLWxvZ2luLXNlY3Rpb24ge1xyXG4gICAgLmxvZ2luLXNlY3Rpb24taW5uZXIge1xyXG4gICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgLmxvZ2luLWxlZnQge1xyXG4gICAgICAgIC5mb3JtLXNlYyB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgICAubWF4LXdpZHRoLXNlYyB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAvLyBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLWxlZnQtaW5mbyB7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNDVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtZmllbGRzIHtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbn1cclxuLnNvY2lsYUxvZ2luIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm5nLWF1dG9jb21wbGV0ZSB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbi5jb2Rlc0xpc3R7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSIsIi51c2VyLWxvZ2luLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IC5sb2dpbi1sZWZ0LWluZm8ge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgcGFkZGluZy10b3A6IDU1cHg7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IC5sb2dpbi1sZWZ0LWluZm8gaDIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLmxvZ2luLWxlZnQtaW5mbyAuc2lnbi1pbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBjb2xvcjogIzU5NjI2YTtcbiAgb3BhY2l0eTogMTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMge1xuICBiYWNrZ3JvdW5kOiAjZjVmNmY3O1xuICBwYWRkaW5nOiAzNXB4IDExNXB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSBpbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3gtc2hhZG93OiAwcHggM3B4IDZweCAjMDAwMDAwMDU7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNHB4O1xuICB3aWR0aDogMzE2cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjOTU5NWExICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWVlZWVlO1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogI2VlZWVlZSAhaW1wb3J0YW50O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSAuaW5wdXQtZ3JvdXAtcHJlcGVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IC5mb3JtLXNlYyBmb3JtIC5pbnB1dC1ncm91cC1wcmVwZW5kIC5pbnB1dC1ncm91cC10ZXh0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAwNTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjOTU5NWExICFpbXBvcnRhbnQ7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IC5mb3JtLXNlYyBmb3JtIGxhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjMjYyNjI2O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IC5mb3JtLXNlYyBmb3JtIC5idG4tZ2V0LW90cCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2NjMmI1ZSAwJSwgIzc1M2E4OCAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNnB4ICMwMDAwMDAwNTtcbiAgYm9yZGVyLXJhZGl1czogNDhweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSAuYnRuLWdldC1vdHAgaW1nIHtcbiAgd2lkdGg6IGluaXRpYWw7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLmZvcm0tc2VjIGZvcm0gLmJ0bi1zaWduLWFwcGxlIHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLmZvcm0tc2VjIGZvcm0gLnNvY2lhbC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSAuc29jaWFsLWluZm8gLmZiLWljb24ge1xuICBjb2xvcjogIzM4NWM4ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSAuc29jaWFsLWluZm8gLmdvb2dsZS1pY29uIHtcbiAgY29sb3I6ICNmOTQ5Mzg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLmZvcm0tc2VjIGZvcm0gLnNvY2lhbC1pbmZvIC5hcHBsZS1pY29uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSAuc29jaWFsLWluZm8gYTpudGgtY2hpbGQoMSkge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IC5mb3JtLXNlYyBmb3JtIGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM1OTYyNmE7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLmZvcm0tc2VjIGZvcm0gLm1heC13aWR0aC1zZWMge1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgLnRlcm1zLXByaXZhY3kge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGNvbG9yOiAjZmY3ZDdkO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLnNvY2lhbC1pbmZvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuc29jaWFsLWluZm8gLmZiLWljb24ge1xuICBjb2xvcjogIzM4NWM4ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuc29jaWFsLWluZm8gLmdvb2dsZS1pY29uIHtcbiAgY29sb3I6ICNmOTQ5Mzg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLnNvY2lhbC1pbmZvIC5hcHBsZS1pY29uIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuc29jaWFsLWluZm8gYTpudGgtY2hpbGQobikge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgY29sb3I6ICM1OTYyNmE7XG4gIG9wYWNpdHk6IDE7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLXJpZ2h0IHtcbiAgZmxleDogMS41O1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tcmlnaHQgbGFiZWwge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiAjNGQ0ZDU1O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLXJpZ2h0IGlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNGRmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjOTU5NWExO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tcmlnaHQgLmJ0bi1zaWduLWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsICNjOTJjNWYgMCUsICM3ODNhODcgNTAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywgI2M5MmM1ZiAwJSwgIzc4M2E4NyA1MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDBkZWcsICNjOTJjNWYgMCUsICM3ODNhODcgNTAlKTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tcmlnaHQgLmJ0bi1zaWduLWluOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQoMGRlZywgIzc4M2E4NyAwJSwgI2M5MmM1ZiA1MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCAjNzgzYTg3IDAlLCAjYzkyYzVmIDUwJSk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQoMGRlZywgIzc4M2E4NyAwJSwgI2M5MmM1ZiA1MCUpO1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tcmlnaHQgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzljM2VlODtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAjOWMzZWU4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tcmlnaHQgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tcmlnaHQgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KDBkZWcsICNjOTJjNWYgMCUsICM3ODNhODcgNTAlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMGRlZywgI2M5MmM1ZiAwJSwgIzc4M2E4NyA1MCUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KDBkZWcsICNjOTJjNWYgMCUsICM3ODNhODcgNTAlKTtcbn1cbi51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLXJpZ2h0IC5zaWduLXVwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRkNGQ1NTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4udXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1yaWdodCAuc2lnbi11cCBhIHtcbiAgY29sb3I6ICNjOTJjNWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMgZm9ybSAubWF4LXdpZHRoLXNlYyB7XG4gICAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAuZm9ybS1zZWMge1xuICAgIHBhZGRpbmc6IDM1cHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgfVxuICAudXNlci1sb2dpbi1zZWN0aW9uIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IC5mb3JtLXNlYyBmb3JtIC5tYXgtd2lkdGgtc2VjIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG4gIC51c2VyLWxvZ2luLXNlY3Rpb24gLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgLmxvZ2luLWxlZnQtaW5mbyB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgLnVzZXItbG9naW4tc2VjdGlvbiAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCAubG9naW4tbGVmdC1pbmZvIGgyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjI1ZW07XG4gIGJhY2tncm91bmQ6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDQ1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uZm9ybWZpZWxkcyB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLnNvY2lsYUxvZ2luIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmctYXV0b2NvbXBsZXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmNvZGVzTGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/home/userlogin/userlogin.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/user/home/userlogin/userlogin.component.ts ***!
    \************************************************************/

  /*! exports provided: UserloginComponent */

  /***/
  function srcAppUserHomeUserloginUserloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserloginComponent", function () {
      return UserloginComponent;
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


    var _admin_country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../admin/country */
    "./src/app/admin/country.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _usercommonservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usercommonservice.service */
    "./src/app/user/home/usercommonservice.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _countries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./countries */
    "./src/app/user/home/userlogin/countries.ts");
    /* harmony import */


    var _auth_serv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../auth-serv.service */
    "./src/app/user/home/auth-serv.service.ts");
    /* harmony import */


    var ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-angular-social-login */
    "./node_modules/ngx-angular-social-login/ngx-angular-social-login.umd.js");
    /* harmony import */


    var ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _allserv_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../allserv.service */
    "./src/app/allserv.service.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _fb_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../fb-login */
    "./src/app/user/fb-login/index.ts");

    var UserloginComponent = /*#__PURE__*/function () {
      function UserloginComponent(fb, userCommServ, toastServ, socialAuthService, authServ, router, allServ, languagesService) {
        _classCallCheck(this, UserloginComponent);

        this.fb = fb;
        this.userCommServ = userCommServ;
        this.toastServ = toastServ;
        this.socialAuthService = socialAuthService;
        this.authServ = authServ;
        this.router = router;
        this.allServ = allServ;
        this.languagesService = languagesService;
        this.countriesList = _countries__WEBPACK_IMPORTED_MODULE_6__["country"];
        this.country_code = [];
        this.previousRoute = "/home";
        this.isOtpShow = false;
      }

      _createClass(UserloginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.countrycodes = _admin_country__WEBPACK_IMPORTED_MODULE_2__["countries"];
          this.allServ.getPrevRoute().subscribe(function (data) {
            _this38.previousRoute = data;
          });
          this.loginForm = this.fb.group({
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: [""]
          });
          this.otpVerificationForm = this.fb.group({
            token: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.registerUserForm = this.fb.group({
            firstName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this38.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }, {
        key: "onFocus",
        value: function onFocus() {
          this.mySelect.open();
        }
      }, {
        key: "completeOtpVerification",
        value: function completeOtpVerification(data) {
          var _this39 = this;

          var dataToPass = {};

          if (data.token) {
            dataToPass = {
              code: "+" + this.code,
              phone: this.phoneNumber,
              via: "sms",
              token: data.token
            };
            this.userCommServ.verifyOtp(dataToPass).subscribe(function (data) {
              if (data["code"] === 200) {
                if (data["data"]["isalreadyexist"] === true) {
                  _this39.authServ.sendToken(data["data"]["token"]);

                  sessionStorage.setItem("userID", data["data"]["user"]["_id"]);
                  sessionStorage.setItem("username", data["data"]["user"]["firstName"]);

                  _this39.router.navigate([_this39.previousRoute]);
                } else if (data["data"]["isalreadyexist"] === false) {
                  _this39.registerUserForm.get("phone").setValue(data["data"]["user"]["phone"]);

                  _this39.registerUserForm.updateValueAndValidity();

                  if (data["data"]["isVerified"] === true) {
                    document.getElementById("otpForm").style.display = "none";
                    _this39.showRegisterForm = true;
                  } else {
                    _this39.showRegisterForm = false;
                  }

                  _this39.toastServ.success(data["message"], "", {
                    timeOut: 1000
                  });
                } else if (data["code"] === 400) {
                  _this39.toastServ.error(data["message"], "", {
                    timeOut: 1000
                  });
                }
              }
            }, function (error) {
              _this39.toastServ.error(error.error["message"], "", {
                timeOut: 1000
              });
            });
          } else if (data.socialLoginId) {
            dataToPass = {
              email: data.email,
              socialLoginId: data.socialLoginId
            };
            this.userCommServ.verifyOtp(dataToPass).subscribe(function (data) {
              if (data["code"] === 200) {
                if (data["data"]["isalreadyexist"] === true) {
                  _this39.authServ.sendToken(data["data"]["token"]);

                  sessionStorage.setItem("userID", data["data"]["user"]["_id"]);
                  sessionStorage.setItem("emailID", data["data"]["user"]["email"]);
                  sessionStorage.setItem("username", data["data"]["user"]["firstName"]);

                  _this39.router.navigate([_this39.previousRoute]);
                } else if (data["data"]["isalreadyexist"] === false) {
                  _this39.registerUserForm.get("phone").setValue(data["data"]["user"]["phone"]);

                  _this39.registerUserForm.updateValueAndValidity();

                  if (data["data"]["isVerified"] === true) {
                    //  document.getElementById("otpForm").style.display = "none";
                    _this39.showRegisterForm = true;
                  } else {
                    _this39.showRegisterForm = false;
                  }

                  _this39.toastServ.success(data["message"], "", {
                    timeOut: 1000
                  });
                } else if (data["code"] === 400) {
                  _this39.toastServ.error(data["message"], "", {
                    timeOut: 1000
                  });
                }
              }
            }, function (error) {
              _this39.toastServ.error(error.error["message"], "", {
                timeOut: 1000
              });
            });
          }
        }
      }, {
        key: "selectEvent",
        value: function selectEvent(item) {// do something with selected item
        }
      }, {
        key: "onChangeSearch",
        value: function onChangeSearch(search) {// fetch remote data from here
          // And reassign the 'data' which is binded to 'data' property.
        }
      }, {
        key: "onFocused",
        value: function onFocused(e) {// do something
        }
      }, {
        key: "countryCode",
        value: function countryCode(code) {
          this.country_code = code.callingCodes;
          this.loginForm.get("code").setValue(this.country_code[0]);
          this.loginForm.updateValueAndValidity();
        }
      }, {
        key: "getOtpOnCall",
        value: function getOtpOnCall() {
          var _this40 = this;

          var dataToPass = {
            code: "+" + this.code,
            phone: this.phoneNumber,
            via: "call"
          };
          this.userCommServ.getOtpForVerification(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this40.isOtpShow = true;

              _this40.toastServ.success(data["message"], "", {
                timeOut: 1000
              });
            } else if (data["code"] === 400) {
              _this40.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this40.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "registerUser",
        value: function registerUser(data) {
          var _this41 = this;

          var dataToPass = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            role: "user",
            isVerified: true,
            socialLoginId: this.socialLoginID,
            loggedInVia: this.loggedInVia
          };
          this.userCommServ.registerUser(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this41.toastServ.success(data["message"], "", {
                timeOut: 1000
              });

              console.log("DATA", data);

              _this41.authServ.sendToken(data["data"]["token"]);

              sessionStorage.setItem("userID", data["data"]["user"]["_id"]);
              sessionStorage.setItem("username", data["data"]["user"]["firstName"]);

              _this41.router.navigate(["/home"]);
            } else if (data["code"] === 400) {
              _this41.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this41.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "getOtp",
        value: function getOtp(data) {
          var _this42 = this;

          this.phoneNumber = data.phone;
          this.code = data.code;
          var dataToPass = {
            code: "+" + data.code,
            phone: data.phone,
            via: "sms"
          };
          this.userCommServ.getOtpForVerification(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this42.isOtpShow = true;

              _this42.toastServ.success(data["message"], "", {
                timeOut: 1000
              });
            } else if (data["code"] === 400) {
              _this42.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this42.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "socialSignIn",
        value: function socialSignIn(socialPlatform) {
          var _this43 = this;

          if (socialPlatform === "apple") {
            this.appleSocialSignIn();
            return;
          }

          var socialPlatformProvider;

          if (socialPlatform == "facebook") {
            socialPlatformProvider = _fb_login__WEBPACK_IMPORTED_MODULE_12__["CustomFacebookLoginProvider"].PROVIDER_ID;
          } else if (socialPlatform == "google") {
            socialPlatformProvider = ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLoginProvider"].PROVIDER_ID;
          }

          this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            if (userData) {
              var fullName;
              fullName = userData["name"];
              fullName.split(" ", 2);
              _this43.firstName = fullName.split(" ", 2)[0];
              _this43.LastName = fullName.split(" ", 2)[1];
              _this43.EmailID = userData["email"];
              _this43.socialLoginID = userData["id"];
              _this43.loggedInVia = userData["provider"];

              _this43.registerUserForm.get("firstName").setValue(_this43.firstName);

              _this43.registerUserForm.get("lastName").setValue(_this43.LastName);

              _this43.registerUserForm.get("email").setValue(_this43.EmailID);

              _this43.registerUserForm.updateValueAndValidity();

              document.getElementById("mobileNoForm").style.display = "none";
              _this43.showRegisterForm = true;
            }

            var dataToPass = {
              email: _this43.EmailID,
              socialLoginId: _this43.socialLoginID
            };

            _this43.completeOtpVerification(dataToPass); // Now sign-in with userData

          });
        }
      }, {
        key: "appleSocialSignIn",
        value: function appleSocialSignIn() {}
      }]);

      return UserloginComponent;
    }();

    UserloginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _usercommonservice_service__WEBPACK_IMPORTED_MODULE_4__["UsercommonserviceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: _auth_serv_service__WEBPACK_IMPORTED_MODULE_7__["AuthServService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: _allserv_service__WEBPACK_IMPORTED_MODULE_10__["AllservService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_11__["LanguagesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("mySelect", {
      "static": false
    })], UserloginComponent.prototype, "mySelect", void 0);
    UserloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userlogin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userlogin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/home/userlogin/userlogin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userlogin.component.scss */
      "./src/app/user/home/userlogin/userlogin.component.scss"))["default"]]
    })], UserloginComponent);
    /***/
  },

  /***/
  "./src/app/user/privacypolicy/privacypolicy.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/user/privacypolicy/privacypolicy.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserPrivacypolicyPrivacypolicyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainSection {\n  padding: 2em;\n  margin: 2em;\n  margin-top: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvdXNlci9wcml2YWN5cG9saWN5L3ByaXZhY3lwb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJpdmFjeXBvbGljeS9wcml2YWN5cG9saWN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91c2VyL3ByaXZhY3lwb2xpY3kvcHJpdmFjeXBvbGljeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluU2VjdGlvbiB7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi10b3A6IDRlbTtcbn1cbiIsIi5tYWluU2VjdGlvbiB7XG4gIHBhZGRpbmc6IDJlbTtcbiAgbWFyZ2luOiAyZW07XG4gIG1hcmdpbi10b3A6IDRlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/privacypolicy/privacypolicy.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/user/privacypolicy/privacypolicy.component.ts ***!
    \***************************************************************/

  /*! exports provided: PrivacypolicyComponent */

  /***/
  function srcAppUserPrivacypolicyPrivacypolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacypolicyComponent", function () {
      return PrivacypolicyComponent;
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


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services */
    "./src/app/services/index.ts");

    var PrivacypolicyComponent = /*#__PURE__*/function () {
      function PrivacypolicyComponent(languagesService) {
        _classCallCheck(this, PrivacypolicyComponent);

        this.languagesService = languagesService;
      }

      _createClass(PrivacypolicyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this44 = this;

          this.currentLanguageSub = this.languagesService.currentLanguage$.subscribe(function (x) {
            return _this44.currentLanguage = x;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.currentLanguageSub.unsubscribe();
        }
      }]);

      return PrivacypolicyComponent;
    }();

    PrivacypolicyComponent.ctorParameters = function () {
      return [{
        type: _services__WEBPACK_IMPORTED_MODULE_2__["LanguagesService"]
      }];
    };

    PrivacypolicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-privacypolicy",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./privacypolicy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/privacypolicy/privacypolicy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./privacypolicy.component.scss */
      "./src/app/user/privacypolicy/privacypolicy.component.scss"))["default"]]
    })], PrivacypolicyComponent);
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
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


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/user/home/home.component.ts");
    /* harmony import */


    var _home_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/mainpage/mainpage.component */
    "./src/app/user/home/mainpage/mainpage.component.ts");
    /* harmony import */


    var _home_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/userlogin/userlogin.component */
    "./src/app/user/home/userlogin/userlogin.component.ts");
    /* harmony import */


    var _home_salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/salon-list/salon-list.component */
    "./src/app/user/home/salon-list/salon-list.component.ts");
    /* harmony import */


    var _home_salon_detail_salon_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/salon-detail/salon-detail.component */
    "./src/app/user/home/salon-detail/salon-detail.component.ts");
    /* harmony import */


    var _home_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/bookings/bookings.component */
    "./src/app/user/home/bookings/bookings.component.ts");
    /* harmony import */


    var _home_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/about/about.component */
    "./src/app/user/home/about/about.component.ts");
    /* harmony import */


    var _home_download_download_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/download/download.component */
    "./src/app/user/home/download/download.component.ts");
    /* harmony import */


    var _home_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/termsandcondition/termsandcondition.component */
    "./src/app/user/home/termsandcondition/termsandcondition.component.ts");
    /* harmony import */


    var _home_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/faq/faq.component */
    "./src/app/user/home/faq/faq.component.ts");
    /* harmony import */


    var _home_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/checkout/checkout.component */
    "./src/app/user/home/checkout/checkout.component.ts");
    /* harmony import */


    var _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./privacypolicy/privacypolicy.component */
    "./src/app/user/privacypolicy/privacypolicy.component.ts");

    var routes = [{
      path: "",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      children: [{
        path: "home",
        component: _home_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_4__["MainpageComponent"]
      }, {
        path: "login",
        component: _home_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_5__["UserloginComponent"]
      }, {
        path: "list",
        component: _home_salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_6__["SalonListComponent"]
      }, {
        path: "detail",
        component: _home_salon_detail_salon_detail_component__WEBPACK_IMPORTED_MODULE_7__["SalonDetailComponent"]
      }, {
        path: "booking",
        component: _home_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_8__["BookingsComponent"]
      }, {
        path: "about",
        component: _home_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"]
      }, {
        path: "download",
        component: _home_download_download_component__WEBPACK_IMPORTED_MODULE_10__["DownloadComponent"]
      }, {
        path: "termsandcondition",
        component: _home_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_11__["TermsandconditionComponent"]
      }, {
        path: "checkout",
        component: _home_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"]
      }, {
        path: "faq",
        component: _home_faq_faq_component__WEBPACK_IMPORTED_MODULE_12__["FaqComponent"]
      }, {
        path: "privacypolicy",
        component: _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_14__["PrivacypolicyComponent"]
      }, {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }]
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
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


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var ngx_stars__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-stars */
    "./node_modules/ngx-stars/fesm2015/ngx-stars.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/datepicker */
    "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/user/home/home.component.ts");
    /* harmony import */


    var _home_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/mainpage/mainpage.component */
    "./src/app/user/home/mainpage/mainpage.component.ts");
    /* harmony import */


    var _home_mainpage_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/mainpage/header/header.component */
    "./src/app/user/home/mainpage/header/header.component.ts");
    /* harmony import */


    var _home_mainpage_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/mainpage/footer/footer.component */
    "./src/app/user/home/mainpage/footer/footer.component.ts");
    /* harmony import */


    var _home_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/userlogin/userlogin.component */
    "./src/app/user/home/userlogin/userlogin.component.ts");
    /* harmony import */


    var _home_salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/salon-list/salon-list.component */
    "./src/app/user/home/salon-list/salon-list.component.ts");
    /* harmony import */


    var _home_salon_detail_salon_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/salon-detail/salon-detail.component */
    "./src/app/user/home/salon-detail/salon-detail.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-angular-social-login */
    "./node_modules/ngx-angular-social-login/ngx-angular-social-login.umd.js");
    /* harmony import */


    var ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_18__);
    /* harmony import */


    var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angular-ng-autocomplete */
    "./node_modules/angular-ng-autocomplete/fesm2015/angular-ng-autocomplete.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _home_mainpage_googlesearch_googlesearch_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home/mainpage/googlesearch/googlesearch.component */
    "./src/app/user/home/mainpage/googlesearch/googlesearch.component.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */


    var _home_starrating_starrating_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./home/starrating/starrating.component */
    "./src/app/user/home/starrating/starrating.component.ts");
    /* harmony import */


    var _home_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./home/bookings/bookings.component */
    "./src/app/user/home/bookings/bookings.component.ts");
    /* harmony import */


    var _home_about_about_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./home/about/about.component */
    "./src/app/user/home/about/about.component.ts");
    /* harmony import */


    var _home_download_download_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./home/download/download.component */
    "./src/app/user/home/download/download.component.ts");
    /* harmony import */


    var _home_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./home/termsandcondition/termsandcondition.component */
    "./src/app/user/home/termsandcondition/termsandcondition.component.ts");
    /* harmony import */


    var _home_faq_faq_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./home/faq/faq.component */
    "./src/app/user/home/faq/faq.component.ts");
    /* harmony import */


    var _home_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home/checkout/checkout.component */
    "./src/app/user/home/checkout/checkout.component.ts");
    /* harmony import */


    var _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./privacypolicy/privacypolicy.component */
    "./src/app/user/privacypolicy/privacypolicy.component.ts");
    /* harmony import */


    var _pipes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ../pipes */
    "./src/app/pipes/index.ts");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _home_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_10__["MainpageComponent"], _home_mainpage_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _home_mainpage_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _home_userlogin_userlogin_component__WEBPACK_IMPORTED_MODULE_13__["UserloginComponent"], _home_salon_list_salon_list_component__WEBPACK_IMPORTED_MODULE_14__["SalonListComponent"], _home_salon_detail_salon_detail_component__WEBPACK_IMPORTED_MODULE_15__["SalonDetailComponent"], _home_mainpage_googlesearch_googlesearch_component__WEBPACK_IMPORTED_MODULE_21__["GooglesearchComponent"], _home_starrating_starrating_component__WEBPACK_IMPORTED_MODULE_23__["StarratingComponent"], _home_bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__["BookingsComponent"], _home_about_about_component__WEBPACK_IMPORTED_MODULE_25__["AboutComponent"], _home_download_download_component__WEBPACK_IMPORTED_MODULE_26__["DownloadComponent"], _home_termsandcondition_termsandcondition_component__WEBPACK_IMPORTED_MODULE_27__["TermsandconditionComponent"], _home_faq_faq_component__WEBPACK_IMPORTED_MODULE_28__["FaqComponent"], _home_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_29__["CheckoutComponent"], _privacypolicy_privacypolicy_component__WEBPACK_IMPORTED_MODULE_30__["PrivacypolicyComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_8__["UserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["DatepickerModule"].forRoot(), ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_7__["BsDatepickerModule"].forRoot(), _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_22__["NgxMaskModule"].forRoot(), ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__["Ng2SearchPipeModule"], ngx_angular_social_login__WEBPACK_IMPORTED_MODULE_18__["SocialLoginModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_19__["AutocompleteLibModule"], ngx_stars__WEBPACK_IMPORTED_MODULE_5__["NgxStarsModule"], _pipes__WEBPACK_IMPORTED_MODULE_31__["PipeModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]],
      providers: []
    })], UserModule);
    /***/
  }
}]);
//# sourceMappingURL=app-user-user-module-es5.js.map