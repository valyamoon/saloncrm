function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-admin-module"], {
  /***/
  "./node_modules/angular-notifier/fesm2015/angular-notifier.js":
  /*!********************************************************************!*\
    !*** ./node_modules/angular-notifier/fesm2015/angular-notifier.js ***!
    \********************************************************************/

  /*! exports provided: NotifierConfig, NotifierConfigToken, NotifierContainerComponent, NotifierModule, NotifierNotificationComponent, NotifierOptionsToken, NotifierService, notifierCustomConfigFactory, notifierDefaultConfigFactory, ɵa, ɵb, ɵc */

  /***/
  function node_modulesAngularNotifierFesm2015AngularNotifierJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifierConfig", function () {
      return NotifierConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifierConfigToken", function () {
      return NotifierConfigToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifierContainerComponent", function () {
      return NotifierContainerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifierModule", function () {
      return NotifierModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifierNotificationComponent", function () {
      return NotifierNotificationComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifierOptionsToken", function () {
      return NotifierOptionsToken;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifierService", function () {
      return NotifierService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "notifierCustomConfigFactory", function () {
      return notifierCustomConfigFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "notifierDefaultConfigFactory", function () {
      return notifierDefaultConfigFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NotifierQueueService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return NotifierTimerService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return NotifierAnimationService;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notification
     *
     * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
     */


    var NotifierNotification =
    /**
     * Constructor
     *
     * @param {?} options Notifier options
     */
    function NotifierNotification(options) {
      _classCallCheck(this, NotifierNotification);

      /**
       * The template to customize
       * the appearance of the notification
       */
      this.template = null;
      Object.assign(this, options); // If not set manually, we have to create a unique notification ID by ourselves. The ID generation relies on the current browser
      // datetime in ms, in praticular the moment this notification gets constructed. Concurrency, and thus two IDs being the exact same,
      // is not possible due to the action queue concept.

      if (options.id === undefined) {
        this.id = "ID_".concat(new Date().getTime());
      }
    };

    if (false) {}
    /**
     * Notifiction options
     *
     * This interface describes which information are needed to create a new notification, or in other words, which information the external API
     * call must provide.
     * @record
     */


    function NotifierNotificationOptions() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notifier queue service
     *
     * In general, API calls don't get processed right away. Instead, we have to queue them up in order to prevent simultanious API calls
     * interfering with each other. This, at least in theory, is possible at any time. In particular, animations - which potentially overlap -
     * can cause changes in JS classes as well as affect the DOM. Therefore, the queue service takes all actions, puts them in a queue, and
     * processes them at the right time (which is when the previous action has been processed successfully).
     *
     * Technical sidenote:
     * An action looks pretty similar to the ones within the Flux / Redux pattern.
     */


    var NotifierQueueService = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NotifierQueueService() {
        _classCallCheck(this, NotifierQueueService);

        this.actionStream = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.actionQueue = [];
        this.isActionInProgress = false;
      }
      /**
       * Push a new action to the queue, and try to run it
       *
       * @param {?} action Action object
       * @return {?}
       */


      _createClass(NotifierQueueService, [{
        key: "push",
        value: function push(action) {
          this.actionQueue.push(action);
          this.tryToRunNextAction();
        }
        /**
         * Continue with the next action (called when the current action is finished)
         * @return {?}
         */

      }, {
        key: "continue",
        value: function _continue() {
          this.isActionInProgress = false;
          this.tryToRunNextAction();
        }
        /**
         * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
         * @private
         * @return {?}
         */

      }, {
        key: "tryToRunNextAction",
        value: function tryToRunNextAction() {
          if (this.isActionInProgress || this.actionQueue.length === 0) {
            return; // Skip (the queue can now go drink a coffee as it has nothing to do anymore)
          }

          this.isActionInProgress = true;
          this.actionStream.next(this.actionQueue.shift()); // Push next action to the stream, and remove the current action from the queue
        }
      }]);

      return NotifierQueueService;
    }();

    NotifierQueueService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NotifierQueueService.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notifier options
     * @record
     */


    function NotifierOptions() {}

    if (false) {}
    /**
     * Notifier configuration
     *
     * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
     * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
     * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
     */


    var NotifierConfig =
    /**
     * Constructor
     *
     * @param {?=} customOptions
     */
    function NotifierConfig() {
      var customOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, NotifierConfig);

      // Set default values
      this.animations = {
        enabled: true,
        hide: {
          easing: 'ease',
          offset: 50,
          preset: 'fade',
          speed: 300
        },
        overlap: 150,
        shift: {
          easing: 'ease',
          speed: 300
        },
        show: {
          easing: 'ease',
          preset: 'slide',
          speed: 300
        }
      };
      this.behaviour = {
        autoHide: 7000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4
      };
      this.position = {
        horizontal: {
          distance: 12,
          position: 'left'
        },
        vertical: {
          distance: 12,
          gap: 10,
          position: 'bottom'
        }
      };
      this.theme = 'material'; // The following merges the custom options into the notifier config, respecting the already set default values
      // This linear, more explicit and code-sizy workflow is preferred here over a recursive one (because we know the object structure)
      // Technical sidenote: Objects are merged, other types of values simply overwritten / copied

      if (customOptions.theme !== undefined) {
        this.theme = customOptions.theme;
      }

      if (customOptions.animations !== undefined) {
        if (customOptions.animations.enabled !== undefined) {
          this.animations.enabled = customOptions.animations.enabled;
        }

        if (customOptions.animations.overlap !== undefined) {
          this.animations.overlap = customOptions.animations.overlap;
        }

        if (customOptions.animations.hide !== undefined) {
          Object.assign(this.animations.hide, customOptions.animations.hide);
        }

        if (customOptions.animations.shift !== undefined) {
          Object.assign(this.animations.shift, customOptions.animations.shift);
        }

        if (customOptions.animations.show !== undefined) {
          Object.assign(this.animations.show, customOptions.animations.show);
        }
      }

      if (customOptions.behaviour !== undefined) {
        Object.assign(this.behaviour, customOptions.behaviour);
      }

      if (customOptions.position !== undefined) {
        if (customOptions.position.horizontal !== undefined) {
          Object.assign(this.position.horizontal, customOptions.position.horizontal);
        }

        if (customOptions.position.vertical !== undefined) {
          Object.assign(this.position.vertical, customOptions.position.vertical);
        }
      }
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // tslint:disable variable-name

    /**
     * Injection Token for notifier options
     * @type {?}
     */


    var NotifierOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[angular-notifier] Notifier Options');
    /**
     * Injection Token for notifier configuration
     * @type {?}
     */

    var NotifierConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[anuglar-notifier] Notifier Config');
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notifier service
     *
     * This service provides access to the public notifier API. Once injected into a component, directive, pipe, service, or any other building
     * block of an applications, it can be used to show new notifications, and hide existing ones. Internally, it transforms API calls into
     * actions, which then get thrown into the action queue - eventually being processed at the right moment.
     */

    var NotifierService = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} notifierQueueService Notifier queue service
       * @param {?} config               Notifier configuration, optionally injected as a dependency
       */
      function NotifierService(notifierQueueService, config) {
        _classCallCheck(this, NotifierService);

        this.queueService = notifierQueueService;
        this.config = config;
      }
      /**
       * Get the notifier configuration
       *
       * @return {?} Notifier configuration
       */


      _createClass(NotifierService, [{
        key: "getConfig",
        value: function getConfig() {
          return this.config;
        }
        /**
         * API: Show a new notification
         *
         * @param {?} notificationOptions Notification options
         * @return {?}
         */

      }, {
        key: "show",
        value: function show(notificationOptions) {
          this.queueService.push({
            payload: notificationOptions,
            type: 'SHOW'
          });
        }
        /**
         * API: Hide a specific notification, given its ID
         *
         * @param {?} notificationId ID of the notification to hide
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(notificationId) {
          this.queueService.push({
            payload: notificationId,
            type: 'HIDE'
          });
        }
        /**
         * API: Hide the newest notification
         * @return {?}
         */

      }, {
        key: "hideNewest",
        value: function hideNewest() {
          this.queueService.push({
            type: 'HIDE_NEWEST'
          });
        }
        /**
         * API: Hide the oldest notification
         * @return {?}
         */

      }, {
        key: "hideOldest",
        value: function hideOldest() {
          this.queueService.push({
            type: 'HIDE_OLDEST'
          });
        }
        /**
         * API: Hide all notifications at once
         * @return {?}
         */

      }, {
        key: "hideAll",
        value: function hideAll() {
          this.queueService.push({
            type: 'HIDE_ALL'
          });
        }
        /**
         * API: Shortcut for showing a new notification
         *
         * @param {?} type             Type of the notification
         * @param {?} message          Message of the notification
         * @param {?=} notificationId
         * @return {?}
         */

      }, {
        key: "notify",
        value: function notify(type, message, notificationId) {
          /** @type {?} */
          var notificationOptions = {
            message: message,
            type: type
          };

          if (notificationId !== undefined) {
            notificationOptions.id = notificationId;
          }

          this.show(notificationOptions);
        }
      }]);

      return NotifierService;
    }();

    NotifierService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NotifierService.ctorParameters = function () {
      return [{
        type: NotifierQueueService
      }, {
        type: NotifierConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NotifierConfigToken]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notifier container component
     * ----------------------------
     * This component acts as a wrapper for all notification components; consequently, it is responsible for creating a new notification
     * component and removing an existing notification component. Being more precicely, it also handles side effects of those actions, such as
     * shifting or even completely removing other notifications as well. Overall, this components handles actions coming from the queue service
     * by subscribing to its action stream.
     *
     * Technical sidenote:
     * This component has to be used somewhere in an application to work; it will not inject and create itself automatically, primarily in order
     * to not break the Angular AoT compilation. Moreover, this component (and also the notification components) set their change detection
     * strategy onPush, which means that we handle change detection manually in order to get the best performance. (#perfmatters)
     */


    var NotifierContainerComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} changeDetector       Change detector, used for manually triggering change detection runs
       * @param {?} notifierQueueService Notifier queue service
       * @param {?} notifierService      Notifier service
       */
      function NotifierContainerComponent(changeDetector, notifierQueueService, notifierService) {
        var _this = this;

        _classCallCheck(this, NotifierContainerComponent);

        this.changeDetector = changeDetector;
        this.queueService = notifierQueueService;
        this.config = notifierService.getConfig();
        this.notifications = []; // Connects this component up to the action queue, then handle incoming actions

        this.queueServiceSubscription = this.queueService.actionStream.subscribe(
        /**
        * @param {?} action
        * @return {?}
        */
        function (action) {
          _this.handleAction(action).then(
          /**
          * @return {?}
          */
          function () {
            _this.queueService["continue"]();
          });
        });
      }
      /**
       * Component destroyment lifecycle hook, cleans up the observable subsciption
       * @return {?}
       */


      _createClass(NotifierContainerComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.queueServiceSubscription) {
            this.queueServiceSubscription.unsubscribe();
          }
        }
        /**
         * Notification identifier, used as the ngFor trackby function
         *
         * @param {?} index        Index
         * @param {?} notification Notifier notification
         * @return {?} Notification ID as the unique identnfier
         */

      }, {
        key: "identifyNotification",
        value: function identifyNotification(index, notification) {
          return notification.id;
        }
        /**
         * Event handler, handles clicks on notification dismiss buttons
         *
         * @param {?} notificationId ID of the notification to dismiss
         * @return {?}
         */

      }, {
        key: "onNotificationDismiss",
        value: function onNotificationDismiss(notificationId) {
          this.queueService.push({
            payload: notificationId,
            type: 'HIDE'
          });
        }
        /**
         * Event handler, handles notification ready events
         *
         * @param {?} notificationComponent Notification component reference
         * @return {?}
         */

      }, {
        key: "onNotificationReady",
        value: function onNotificationReady(notificationComponent) {
          /** @type {?} */
          var currentNotification = this.notifications[this.notifications.length - 1];
          currentNotification.component = notificationComponent; // Save the new omponent reference

          this.continueHandleShowAction(currentNotification); // Continue with handling the show action
        }
        /**
         * Handle incoming actions by mapping action types to methods, and then running them
         *
         * @private
         * @param {?} action Action object
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "handleAction",
        value: function handleAction(action) {
          switch (action.type) {
            // TODO: Maybe a map (actionType -> class method) is a cleaner solution here?
            case 'SHOW':
              return this.handleShowAction(action);

            case 'HIDE':
              return this.handleHideAction(action);

            case 'HIDE_OLDEST':
              return this.handleHideOldestAction(action);

            case 'HIDE_NEWEST':
              return this.handleHideNewestAction(action);

            case 'HIDE_ALL':
              return this.handleHideAllAction(action);

            default:
              return new Promise(
              /**
              * @param {?} resolve
              * @param {?} reject
              * @return {?}
              */
              function (resolve, reject) {
                resolve(); // Ignore unknown action types
              });
          }
        }
        /**
         * Show a new notification
         *
         * We simply add the notification to the list, and then wait until its properly initialized / created / rendered.
         *
         * @private
         * @param {?} action Action object
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "handleShowAction",
        value: function handleShowAction(action) {
          var _this2 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            _this2.tempPromiseResolver = resolve; // Save the promise resolve function so that it can be called later on by another method

            _this2.addNotificationToList(new NotifierNotification(action.payload));
          });
        }
        /**
         * Continue to show a new notification (after the notification components is initialized / created / rendered).
         *
         * If this is the first (and thus only) notification, we can simply show it. Otherwhise, if stacking is disabled (or a low value), we
         * switch out notifications, in particular we hide the existing one, and then show our new one. Yet, if stacking is enabled, we first
         * shift all older notifications, and then show our new notification. In addition, if there are too many notification on the screen,
         * we hide the oldest one first. Furthermore, if configured, animation overlapping is applied.
         *
         * @private
         * @param {?} notification New notification to show
         * @return {?}
         */

      }, {
        key: "continueHandleShowAction",
        value: function continueHandleShowAction(notification) {
          var _this3 = this;

          // First (which means only one) notification in the list?

          /** @type {?} */
          var numberOfNotifications = this.notifications.length;

          if (numberOfNotifications === 1) {
            notification.component.show().then(this.tempPromiseResolver); // Done
          } else {
            /** @type {?} */
            var implicitStackingLimit = 2; // Stacking enabled? (stacking value below 2 means stacking is disabled)

            if (this.config.behaviour.stacking === false || this.config.behaviour.stacking < implicitStackingLimit) {
              this.notifications[0].component.hide().then(
              /**
              * @return {?}
              */
              function () {
                _this3.removeNotificationFromList(_this3.notifications[0]);

                notification.component.show().then(_this3.tempPromiseResolver); // Done
              });
            } else {
              /** @type {?} */
              var stepPromises = []; // Are there now too many notifications?

              if (numberOfNotifications > this.config.behaviour.stacking) {
                /** @type {?} */
                var oldNotifications = this.notifications.slice(1, numberOfNotifications - 1); // Are animations enabled?

                if (this.config.animations.enabled) {
                  // Is animation overlap enabled?
                  if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                    stepPromises.push(this.notifications[0].component.hide());
                    setTimeout(
                    /**
                    * @return {?}
                    */
                    function () {
                      stepPromises.push(_this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                    }, this.config.animations.hide.speed - this.config.animations.overlap);
                    setTimeout(
                    /**
                    * @return {?}
                    */
                    function () {
                      stepPromises.push(notification.component.show());
                    }, this.config.animations.hide.speed + this.config.animations.shift.speed - this.config.animations.overlap);
                  } else {
                    stepPromises.push(new Promise(
                    /**
                    * @param {?} resolve
                    * @param {?} reject
                    * @return {?}
                    */
                    function (resolve, reject) {
                      _this3.notifications[0].component.hide().then(
                      /**
                      * @return {?}
                      */
                      function () {
                        _this3.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then(
                        /**
                        * @return {?}
                        */
                        function () {
                          notification.component.show().then(resolve);
                        });
                      });
                    }));
                  }
                } else {
                  stepPromises.push(this.notifications[0].component.hide());
                  stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                  stepPromises.push(notification.component.show());
                }
              } else {
                /** @type {?} */
                var _oldNotifications = this.notifications.slice(0, numberOfNotifications - 1); // Are animations enabled?


                if (this.config.animations.enabled) {
                  // Is animation overlap enabled?
                  if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                    stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                    setTimeout(
                    /**
                    * @return {?}
                    */
                    function () {
                      stepPromises.push(notification.component.show());
                    }, this.config.animations.shift.speed - this.config.animations.overlap);
                  } else {
                    stepPromises.push(new Promise(
                    /**
                    * @param {?} resolve
                    * @param {?} reject
                    * @return {?}
                    */
                    function (resolve, reject) {
                      _this3.shiftNotifications(_oldNotifications, notification.component.getHeight(), true).then(
                      /**
                      * @return {?}
                      */
                      function () {
                        notification.component.show().then(resolve);
                      });
                    }));
                  }
                } else {
                  stepPromises.push(this.shiftNotifications(_oldNotifications, notification.component.getHeight(), true));
                  stepPromises.push(notification.component.show());
                }
              }

              Promise.all(stepPromises).then(
              /**
              * @return {?}
              */
              function () {
                if (numberOfNotifications > _this3.config.behaviour.stacking) {
                  _this3.removeNotificationFromList(_this3.notifications[0]);
                }

                _this3.tempPromiseResolver();
              }); // Done
            }
          }
        }
        /**
         * Hide an existing notification
         *
         * Fist, we skip everything if there are no notifications at all, or the given notification does not exist. Then, we hide the given
         * notification. If there exist older notifications, we then shift them around to fill the gap. Once both hiding the given notification
         * and shifting the older notificaitons is done, the given notification gets finally removed (from the DOM).
         *
         * @private
         * @param {?} action Action object, payload contains the notification ID
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "handleHideAction",
        value: function handleHideAction(action) {
          var _this4 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            /** @type {?} */
            var stepPromises = []; // Does the notification exist / are there even any notifications? (let's prevent accidential errors)

            /** @type {?} */

            var notification = _this4.findNotificationById(action.payload);

            if (notification === undefined) {
              resolve();
              return;
            } // Get older notifications

            /** @type {?} */


            var notificationIndex = _this4.findNotificationIndexById(action.payload);

            if (notificationIndex === undefined) {
              resolve();
              return;
            }
            /** @type {?} */


            var oldNotifications = _this4.notifications.slice(0, notificationIndex); // Do older notifications exist, and thus do we need to shift other notifications as a consequence?


            if (oldNotifications.length > 0) {
              // Are animations enabled?
              if (_this4.config.animations.enabled && _this4.config.animations.hide.speed > 0) {
                // Is animation overlap enabled?
                if (_this4.config.animations.overlap !== false && _this4.config.animations.overlap > 0) {
                  stepPromises.push(notification.component.hide());
                  setTimeout(
                  /**
                  * @return {?}
                  */
                  function () {
                    stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                  }, _this4.config.animations.hide.speed - _this4.config.animations.overlap);
                } else {
                  notification.component.hide().then(
                  /**
                  * @return {?}
                  */
                  function () {
                    stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                  });
                }
              } else {
                stepPromises.push(notification.component.hide());
                stepPromises.push(_this4.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
              }
            } else {
              stepPromises.push(notification.component.hide());
            } // Wait until both hiding and shifting is done, then remove the notification from the list


            Promise.all(stepPromises).then(
            /**
            * @return {?}
            */
            function () {
              _this4.removeNotificationFromList(notification);

              resolve(); // Done
            });
          });
        }
        /**
         * Hide the oldest notification (bridge to handleHideAction)
         *
         * @private
         * @param {?} action Action object
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "handleHideOldestAction",
        value: function handleHideOldestAction(action) {
          // Are there any notifications? (prevent accidential errors)
          if (this.notifications.length === 0) {
            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              resolve();
            }); // Done
          } else {
            action.payload = this.notifications[0].id;
            return this.handleHideAction(action);
          }
        }
        /**
         * Hide the newest notification (bridge to handleHideAction)
         *
         * @private
         * @param {?} action Action object
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "handleHideNewestAction",
        value: function handleHideNewestAction(action) {
          // Are there any notifications? (prevent accidential errors)
          if (this.notifications.length === 0) {
            return new Promise(
            /**
            * @param {?} resolve
            * @param {?} reject
            * @return {?}
            */
            function (resolve, reject) {
              resolve();
            }); // Done
          } else {
            action.payload = this.notifications[this.notifications.length - 1].id;
            return this.handleHideAction(action);
          }
        }
        /**
         * Hide all notifications at once
         *
         * @private
         * @param {?} action Action object
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "handleHideAllAction",
        value: function handleHideAllAction(action) {
          var _this5 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            // Are there any notifications? (prevent accidential errors)

            /** @type {?} */
            var numberOfNotifications = _this5.notifications.length;

            if (numberOfNotifications === 0) {
              resolve(); // Done

              return;
            } // Are animations enabled?


            if (_this5.config.animations.enabled && _this5.config.animations.hide.speed > 0 && _this5.config.animations.hide.offset !== false && _this5.config.animations.hide.offset > 0) {
              var _loop = function _loop(i) {
                /** @type {?} */
                var animationOffset = _this5.config.position.vertical.position === 'top' ? numberOfNotifications - 1 : i;
                setTimeout(
                /**
                * @return {?}
                */
                function () {
                  _this5.notifications[i].component.hide().then(
                  /**
                  * @return {?}
                  */
                  function () {
                    // Are we done here, was this the last notification to be hidden?
                    if (_this5.config.position.vertical.position === 'top' && i === 0 || _this5.config.position.vertical.position === 'bottom' && i === numberOfNotifications - 1) {
                      _this5.removeAllNotificationsFromList();

                      resolve(); // Done
                    }
                  });
                }, _this5.config.animations.hide.offset * animationOffset);
              };

              for (var i = numberOfNotifications - 1; i >= 0; i--) {
                _loop(i);
              }
            } else {
              /** @type {?} */
              var stepPromises = [];

              for (var _i = numberOfNotifications - 1; _i >= 0; _i--) {
                stepPromises.push(_this5.notifications[_i].component.hide());
              }

              Promise.all(stepPromises).then(
              /**
              * @return {?}
              */
              function () {
                _this5.removeAllNotificationsFromList();

                resolve(); // Done
              });
            }
          });
        }
        /**
         * Shift multiple notifications at once
         *
         * @private
         * @param {?} notifications List containing the notifications to be shifted
         * @param {?} distance      Distance to shift (in px)
         * @param {?} toMakePlace   Flag, defining in which direciton to shift
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "shiftNotifications",
        value: function shiftNotifications(notifications, distance, toMakePlace) {
          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            // Are there any notifications to shift?
            if (notifications.length === 0) {
              resolve();
              return;
            }
            /** @type {?} */


            var notificationPromises = [];

            for (var i = notifications.length - 1; i >= 0; i--) {
              notificationPromises.push(notifications[i].component.shift(distance, toMakePlace));
            }

            Promise.all(notificationPromises).then(resolve); // Done
          });
        }
        /**
         * Add a new notification to the list of notifications (triggers change detection)
         *
         * @private
         * @param {?} notification Notification to add to the list of notifications
         * @return {?}
         */

      }, {
        key: "addNotificationToList",
        value: function addNotificationToList(notification) {
          this.notifications.push(notification);
          this.changeDetector.markForCheck(); // Run change detection because the notification list changed
        }
        /**
         * Remove an existing notification from the list of notifications (triggers change detection)
         *
         * @private
         * @param {?} notification Notification to be removed from the list of notifications
         * @return {?}
         */

      }, {
        key: "removeNotificationFromList",
        value: function removeNotificationFromList(notification) {
          this.notifications = this.notifications.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.component !== notification.component;
          });
          this.changeDetector.markForCheck(); // Run change detection because the notification list changed
        }
        /**
         * Remove all notifications from the list (triggers change detection)
         * @private
         * @return {?}
         */

      }, {
        key: "removeAllNotificationsFromList",
        value: function removeAllNotificationsFromList() {
          this.notifications = [];
          this.changeDetector.markForCheck(); // Run change detection because the notification list changed
        }
        /**
         * Helper: Find a notification in the notification list by a given notification ID
         *
         * @private
         * @param {?} notificationId Notification ID, used for finding notification
         * @return {?} Notification, undefined if not found
         */

      }, {
        key: "findNotificationById",
        value: function findNotificationById(notificationId) {
          return this.notifications.find(
          /**
          * @param {?} currentNotification
          * @return {?}
          */
          function (currentNotification) {
            return currentNotification.id === notificationId;
          });
        }
        /**
         * Helper: Find a notification's index by a given notification ID
         *
         * @private
         * @param {?} notificationId Notification ID, used for finding a notification's index
         * @return {?} Notification index, undefined if not found
         */

      }, {
        key: "findNotificationIndexById",
        value: function findNotificationIndexById(notificationId) {
          /** @type {?} */
          var notificationIndex = this.notifications.findIndex(
          /**
          * @param {?} currentNotification
          * @return {?}
          */
          function (currentNotification) {
            return currentNotification.id === notificationId;
          });
          return notificationIndex !== -1 ? notificationIndex : undefined;
        }
      }]);

      return NotifierContainerComponent;
    }();

    NotifierContainerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        // (#perfmatters)
        host: {
          "class": 'notifier__container'
        },
        selector: 'notifier-container',
        template: "<ul>\n\t<li class=\"notifier__container-list\" *ngFor=\"let notification of notifications; trackBy: identifyNotification;\">\n\t\t<notifier-notification\n\t\t\t[notification]=\"notification\"\n\t\t\t(ready)=\"onNotificationReady( $event )\"\n\t\t\t(dismiss)=\"onNotificationDismiss( $event )\">\n\t\t</notifier-notification>\n\t</li>\n</ul>\n"
      }]
    }];
    /** @nocollapse */

    NotifierContainerComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: NotifierQueueService
      }, {
        type: NotifierService
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var ɵ0 =
    /**
    * @return {?}
    */
    function ɵ0() {
      return {
        from: {
          opacity: '1'
        },
        to: {
          opacity: '0'
        }
      };
    },
        ɵ1 =
    /**
    * @return {?}
    */
    function ɵ1() {
      return {
        from: {
          opacity: '0'
        },
        to: {
          opacity: '1'
        }
      };
    };
    /**
     * Fade animation preset
     * @type {?}
     */


    var fade = {
      hide: ɵ0,
      show: ɵ1
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ɵ0$1 =
    /**
    * @param {?} notification
    * @return {?}
    */
    function ɵ0$1(notification) {
      // Prepare variables

      /** @type {?} */
      var config = notification.component.getConfig();
      /** @type {?} */

      var shift = notification.component.getShift();
      /** @type {?} */

      var from;
      /** @type {?} */

      var to; // Configure variables, depending on configuration and component

      if (config.position.horizontal.position === 'left') {
        from = {
          transform: "translate3d( 0, ".concat(shift, "px, 0 )")
        };
        to = {
          transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), ").concat(shift, "px, 0 )")
        };
      } else if (config.position.horizontal.position === 'right') {
        from = {
          transform: "translate3d( 0, ".concat(shift, "px, 0 )")
        };
        to = {
          transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), ").concat(shift, "px, 0 )")
        };
      } else {
        /** @type {?} */
        var horizontalPosition;

        if (config.position.vertical.position === 'top') {
          horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
        } else {
          horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
        }

        from = {
          transform: "translate3d( -50%, ".concat(shift, "px, 0 )")
        };
        to = {
          transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
        };
      } // Done


      return {
        from: from,
        to: to
      };
    },
        ɵ1$1 =
    /**
    * @param {?} notification
    * @return {?}
    */
    function ɵ1$1(notification) {
      // Prepare variables

      /** @type {?} */
      var config = notification.component.getConfig();
      /** @type {?} */

      var from;
      /** @type {?} */

      var to; // Configure variables, depending on configuration and component

      if (config.position.horizontal.position === 'left') {
        from = {
          transform: "translate3d( calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px ), 0, 0 )")
        };
        to = {
          transform: 'translate3d( 0, 0, 0 )'
        };
      } else if (config.position.horizontal.position === 'right') {
        from = {
          transform: "translate3d( calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px ), 0, 0 )")
        };
        to = {
          transform: 'translate3d( 0, 0, 0 )'
        };
      } else {
        /** @type {?} */
        var horizontalPosition;

        if (config.position.vertical.position === 'top') {
          horizontalPosition = "calc( -100% - ".concat(config.position.horizontal.distance, "px - 10px )");
        } else {
          horizontalPosition = "calc( 100% + ".concat(config.position.horizontal.distance, "px + 10px )");
        }

        from = {
          transform: "translate3d( -50%, ".concat(horizontalPosition, ", 0 )")
        };
        to = {
          transform: 'translate3d( -50%, 0, 0 )'
        };
      } // Done


      return {
        from: from,
        to: to
      };
    };
    /**
     * Slide animation preset
     * @type {?}
     */


    var slide = {
      hide: ɵ0$1,
      show: ɵ1$1
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notifier animation service
     */

    var NotifierAnimationService = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NotifierAnimationService() {
        _classCallCheck(this, NotifierAnimationService);

        this.animationPresets = {
          fade: fade,
          slide: slide
        };
      }
      /**
       * Get animation data
       *
       * This method generates all data the Web Animations API needs to animate our notification. The result depends on both the animation
       * direction (either in or out) as well as the notifications (and its attributes) itself.
       *
       * @param {?} direction    Animation direction, either in or out
       * @param {?} notification Notification the animation data should be generated for
       * @return {?} Animation information
       */


      _createClass(NotifierAnimationService, [{
        key: "getAnimationData",
        value: function getAnimationData(direction, notification) {
          // Get all necessary animation data

          /** @type {?} */
          var keyframes;
          /** @type {?} */

          var duration;
          /** @type {?} */

          var easing;

          if (direction === 'show') {
            keyframes = this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification);
            duration = notification.component.getConfig().animations.show.speed;
            easing = notification.component.getConfig().animations.show.easing;
          } else {
            keyframes = this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification);
            duration = notification.component.getConfig().animations.hide.speed;
            easing = notification.component.getConfig().animations.hide.easing;
          } // Build and return animation data


          return {
            keyframes: [keyframes.from, keyframes.to],
            options: {
              duration: duration,
              easing: easing,
              fill: 'forwards' // Keep the newly painted state after the animation finished

            }
          };
        }
      }]);

      return NotifierAnimationService;
    }();

    NotifierAnimationService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NotifierAnimationService.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notifier timer service
     *
     * This service acts as a timer, needed due to the still rather limited setTimeout JavaScript API. The timer service can start and stop a
     * timer. Furthermore, it can also pause the timer at any time, and resume later on. The timer API workd promise-based.
     */


    var NotifierTimerService = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function NotifierTimerService() {
        _classCallCheck(this, NotifierTimerService);

        this.now = 0;
        this.remaining = 0;
      }
      /**
       * Start (or resume) the timer
       *
       * @param {?} duration Timer duration, in ms
       * @return {?} Promise, resolved once the timer finishes
       */


      _createClass(NotifierTimerService, [{
        key: "start",
        value: function start(duration) {
          var _this6 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            // For the first run ...
            _this6.remaining = duration; // Setup, then start the timer

            _this6.finishPromiseResolver = resolve;

            _this6["continue"]();
          });
        }
        /**
         * Pause the timer
         * @return {?}
         */

      }, {
        key: "pause",
        value: function pause() {
          clearTimeout(this.timerId);
          this.remaining -= new Date().getTime() - this.now;
        }
        /**
         * Continue the timer
         * @return {?}
         */

      }, {
        key: "continue",
        value: function _continue() {
          var _this7 = this;

          this.now = new Date().getTime();
          this.timerId = window.setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this7.finish();
          }, this.remaining);
        }
        /**
         * Stop the timer
         * @return {?}
         */

      }, {
        key: "stop",
        value: function stop() {
          clearTimeout(this.timerId);
          this.remaining = 0;
        }
        /**
         * Finish up the timeout by resolving the timer promise
         * @private
         * @return {?}
         */

      }, {
        key: "finish",
        value: function finish() {
          this.finishPromiseResolver();
        }
      }]);

      return NotifierTimerService;
    }();

    NotifierTimerService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NotifierTimerService.ctorParameters = function () {
      return [];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Notifier notification component
     * -------------------------------
     * This component is responsible for actually displaying the notification on screen. In addition, it's able to show and hide this
     * notification, in particular to animate this notification in and out, as well as shift (move) this notification vertically around.
     * Furthermore, the notification component handles all interactions the user has with this notification / component, such as clicks and
     * mouse movements.
     */


    var NotifierNotificationComponent = /*#__PURE__*/function () {
      /**
       * Constructor
       *
       * @param {?} elementRef               Reference to the component's element
       * @param {?} renderer                 Angular renderer
       * @param {?} notifierService          Notifier service
       * @param {?} notifierTimerService     Notifier timer service
       * @param {?} notifierAnimationService Notifier animation service
       */
      function NotifierNotificationComponent(elementRef, renderer, notifierService, notifierTimerService, notifierAnimationService) {
        _classCallCheck(this, NotifierNotificationComponent);

        this.config = notifierService.getConfig();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismiss = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.timerService = notifierTimerService;
        this.animationService = notifierAnimationService;
        this.renderer = renderer;
        this.element = elementRef.nativeElement;
        this.elementShift = 0;
      }
      /**
       * Component after view init lifecycle hook, setts up the component and then emits the ready event
       * @return {?}
       */


      _createClass(NotifierNotificationComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.setup();
          this.elementHeight = this.element.offsetHeight;
          this.elementWidth = this.element.offsetWidth;
          this.ready.emit(this);
        }
        /**
         * Get the notifier config
         *
         * @return {?} Notifier configuration
         */

      }, {
        key: "getConfig",
        value: function getConfig() {
          return this.config;
        }
        /**
         * Get notification element height (in px)
         *
         * @return {?} Notification element height (in px)
         */

      }, {
        key: "getHeight",
        value: function getHeight() {
          return this.elementHeight;
        }
        /**
         * Get notification element width (in px)
         *
         * @return {?} Notification element height (in px)
         */

      }, {
        key: "getWidth",
        value: function getWidth() {
          return this.elementWidth;
        }
        /**
         * Get notification shift offset (in px)
         *
         * @return {?} Notification element shift offset (in px)
         */

      }, {
        key: "getShift",
        value: function getShift() {
          return this.elementShift;
        }
        /**
         * Show (animate in) this notification
         *
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "show",
        value: function show() {
          var _this8 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            // Are animations enabled?
            if (_this8.config.animations.enabled && _this8.config.animations.show.speed > 0) {
              // Get animation data

              /** @type {?} */
              var animationData = _this8.animationService.getAnimationData('show', _this8.notification); // Set initial styles (styles before animation), prevents quick flicker when animation starts

              /** @type {?} */


              var animatedProperties = Object.keys(animationData.keyframes[0]);

              for (var i = animatedProperties.length - 1; i >= 0; i--) {
                _this8.renderer.setStyle(_this8.element, animatedProperties[i], animationData.keyframes[0][animatedProperties[i]]);
              } // Animate notification in


              _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');
              /** @type {?} */


              var animation = _this8.element.animate(animationData.keyframes, animationData.options);

              animation.onfinish =
              /**
              * @return {?}
              */
              function () {
                _this8.startAutoHideTimer();

                resolve(); // Done
              };
            } else {
              // Show notification
              _this8.renderer.setStyle(_this8.element, 'visibility', 'visible');

              _this8.startAutoHideTimer();

              resolve(); // Done
            }
          });
        }
        /**
         * Hide (animate out) this notification
         *
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "hide",
        value: function hide() {
          var _this9 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            _this9.stopAutoHideTimer(); // Are animations enabled?


            if (_this9.config.animations.enabled && _this9.config.animations.hide.speed > 0) {
              /** @type {?} */
              var animationData = _this9.animationService.getAnimationData('hide', _this9.notification);
              /** @type {?} */


              var animation = _this9.element.animate(animationData.keyframes, animationData.options);

              animation.onfinish =
              /**
              * @return {?}
              */
              function () {
                resolve(); // Done
              };
            } else {
              resolve(); // Done
            }
          });
        }
        /**
         * Shift (move) this notification
         *
         * @param {?} distance         Distance to shift (in px)
         * @param {?} shiftToMakePlace Flag, defining in which direction to shift
         * @return {?} Promise, resolved when done
         */

      }, {
        key: "shift",
        value: function shift(distance, shiftToMakePlace) {
          var _this10 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            // Calculate new position (position after the shift)

            /** @type {?} */
            var newElementShift;

            if (_this10.config.position.vertical.position === 'top' && shiftToMakePlace || _this10.config.position.vertical.position === 'bottom' && !shiftToMakePlace) {
              newElementShift = _this10.elementShift + distance + _this10.config.position.vertical.gap;
            } else {
              newElementShift = _this10.elementShift - distance - _this10.config.position.vertical.gap;
            }
            /** @type {?} */


            var horizontalPosition = _this10.config.position.horizontal.position === 'middle' ? '-50%' : '0'; // Are animations enabled?

            if (_this10.config.animations.enabled && _this10.config.animations.shift.speed > 0) {
              /** @type {?} */
              var animationData = {
                // TODO: Extract into animation service
                keyframes: [{
                  transform: "translate3d( ".concat(horizontalPosition, ", ").concat(_this10.elementShift, "px, 0 )")
                }, {
                  transform: "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )")
                }],
                options: {
                  duration: _this10.config.animations.shift.speed,
                  easing: _this10.config.animations.shift.easing,
                  fill: 'forwards'
                }
              };
              _this10.elementShift = newElementShift;
              /** @type {?} */

              var animation = _this10.element.animate(animationData.keyframes, animationData.options);

              animation.onfinish =
              /**
              * @return {?}
              */
              function () {
                resolve(); // Done
              };
            } else {
              _this10.renderer.setStyle(_this10.element, 'transform', "translate3d( ".concat(horizontalPosition, ", ").concat(newElementShift, "px, 0 )"));

              _this10.elementShift = newElementShift;
              resolve(); // Done
            }
          });
        }
        /**
         * Handle click on dismiss button
         * @return {?}
         */

      }, {
        key: "onClickDismiss",
        value: function onClickDismiss() {
          this.dismiss.emit(this.notification.id);
        }
        /**
         * Handle mouseover over notification area
         * @return {?}
         */

      }, {
        key: "onNotificationMouseover",
        value: function onNotificationMouseover() {
          if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.pauseAutoHideTimer();
          } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.stopAutoHideTimer();
          }
        }
        /**
         * Handle mouseout from notification area
         * @return {?}
         */

      }, {
        key: "onNotificationMouseout",
        value: function onNotificationMouseout() {
          if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.continueAutoHideTimer();
          } else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.startAutoHideTimer();
          }
        }
        /**
         * Handle click on notification area
         * @return {?}
         */

      }, {
        key: "onNotificationClick",
        value: function onNotificationClick() {
          if (this.config.behaviour.onClick === 'hide') {
            this.onClickDismiss();
          }
        }
        /**
         * Start the auto hide timer (if enabled)
         * @private
         * @return {?}
         */

      }, {
        key: "startAutoHideTimer",
        value: function startAutoHideTimer() {
          var _this11 = this;

          if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.start(this.config.behaviour.autoHide).then(
            /**
            * @return {?}
            */
            function () {
              _this11.onClickDismiss();
            });
          }
        }
        /**
         * Pause the auto hide timer (if enabled)
         * @private
         * @return {?}
         */

      }, {
        key: "pauseAutoHideTimer",
        value: function pauseAutoHideTimer() {
          if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.pause();
          }
        }
        /**
         * Continue the auto hide timer (if enabled)
         * @private
         * @return {?}
         */

      }, {
        key: "continueAutoHideTimer",
        value: function continueAutoHideTimer() {
          if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService["continue"]();
          }
        }
        /**
         * Stop the auto hide timer (if enabled)
         * @private
         * @return {?}
         */

      }, {
        key: "stopAutoHideTimer",
        value: function stopAutoHideTimer() {
          if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.stop();
          }
        }
        /**
         * Initial notification setup
         * @private
         * @return {?}
         */

      }, {
        key: "setup",
        value: function setup() {
          // Set start position (initially the exact same for every new notification)
          if (this.config.position.horizontal.position === 'left') {
            this.renderer.setStyle(this.element, 'left', "".concat(this.config.position.horizontal.distance, "px"));
          } else if (this.config.position.horizontal.position === 'right') {
            this.renderer.setStyle(this.element, 'right', "".concat(this.config.position.horizontal.distance, "px"));
          } else {
            this.renderer.setStyle(this.element, 'left', '50%'); // Let's get the GPU handle some work as well (#perfmatters)

            this.renderer.setStyle(this.element, 'transform', 'translate3d( -50%, 0, 0 )');
          }

          if (this.config.position.vertical.position === 'top') {
            this.renderer.setStyle(this.element, 'top', "".concat(this.config.position.vertical.distance, "px"));
          } else {
            this.renderer.setStyle(this.element, 'bottom', "".concat(this.config.position.vertical.distance, "px"));
          } // Add classes (responsible for visual design)


          this.renderer.addClass(this.element, "notifier__notification--".concat(this.notification.type));
          this.renderer.addClass(this.element, "notifier__notification--".concat(this.config.theme));
        }
      }]);

      return NotifierNotificationComponent;
    }();

    NotifierNotificationComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        // (#perfmatters)
        host: {
          '(click)': 'onNotificationClick()',
          '(mouseout)': 'onNotificationMouseout()',
          '(mouseover)': 'onNotificationMouseover()',
          "class": 'notifier__notification'
        },
        providers: [// We provide the timer to the component's local injector, so that every notification components gets its own
        // instance of the timer service, thus running their timers independently from each other
        NotifierTimerService],
        selector: 'notifier-notification',
        template: "<ng-container *ngIf=\"notification.template; else predefinedNotification\" [ngTemplateOutlet]=\"notification.template\" [ngTemplateOutletContext]=\"{ notification: notification }\">\n</ng-container>\n\n<ng-template #predefinedNotification>\n\t<p class=\"notifier__notification-message\">{{ notification.message }}</p>\n\t<button class=\"notifier__notification-button\" type=\"button\" title=\"dismiss\" *ngIf=\"config.behaviour.showDismissButton\" (click)=\"onClickDismiss()\">\n\t\t<svg class=\"notifier__notification-button-icon\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\">\n\t\t\t<path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n\t\t</svg>\n\t</button>\n</ng-template>\n"
      }]
    }];
    /** @nocollapse */

    NotifierNotificationComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: NotifierService
      }, {
        type: NotifierTimerService
      }, {
        type: NotifierAnimationService
      }];
    };

    NotifierNotificationComponent.propDecorators = {
      notification: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ready: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      dismiss: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Factory for a notifier configuration with custom options
     *
     * Sidenote:
     * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
     *
     * @param {?} options - Custom notifier options
     * @return {?} - Notifier configuration as result
     */


    function notifierCustomConfigFactory(options) {
      return new NotifierConfig(options);
    }
    /**
     * Factory for a notifier configuration with default options
     *
     * Sidenote:
     * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
     *
     * @return {?} - Notifier configuration as result
     */


    function notifierDefaultConfigFactory() {
      return new NotifierConfig({});
    }
    /**
     * Notifier module
     */


    var NotifierModule = /*#__PURE__*/function () {
      function NotifierModule() {
        _classCallCheck(this, NotifierModule);
      }

      _createClass(NotifierModule, null, [{
        key: "withConfig",

        /**
         * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
         *
         * @param {?=} options
         * @return {?} - Notifier module with custom providers
         */
        value: function withConfig() {
          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return {
            ngModule: NotifierModule,
            providers: [// Provide the options itself upfront (as we need to inject them as dependencies -- see below)
            {
              provide: NotifierOptionsToken,
              useValue: options
            }, // Provide a custom notifier configuration, based on the given notifier options
            {
              deps: [NotifierOptionsToken],
              provide: NotifierConfigToken,
              useFactory: notifierCustomConfigFactory
            }]
          };
        }
      }]);

      return NotifierModule;
    }();

    NotifierModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NotifierContainerComponent, NotifierNotificationComponent],
        exports: [NotifierContainerComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [NotifierAnimationService, NotifierService, NotifierQueueService, // Provide the default notifier configuration if just the module is imported
        {
          provide: NotifierConfigToken,
          useFactory: notifierDefaultConfigFactory
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=angular-notifier.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardAdminDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"dashboardWrapper\">\n  <div id=\"navigationBar\">\n    <app-header></app-header>\n  </div>\n  <div id=\"mainSection\">\n    <div\n      class=\"selectorSection\"\n      [ngClass]=\"isSelectorShown ? 'selectorSection' : 'danger'\"\n    >\n      <div class=\"menus-app\" (click)=\"hideMenu()\">\n        <div class=\"clearfix profile-sm\">\n          <div class=\"float-left font-weight-bold\">{{ adminName }}</div>\n          <div class=\"float-right\">\n            <i class=\"material-icons\" (click)=\"logout()\" title=\"Logout\">\n              exit_to_app\n            </i>\n          </div>\n        </div>\n        <a class=\"selectors\" routerLink=\"dashboard\" routerLinkActive=\"active\"\n          >Dashboard</a\n        >\n        <a class=\"selectors\" routerLink=\"manage-admin\" routerLinkActive=\"active\"\n          >Manage Admin</a\n        >\n        <a class=\"selectors\" routerLink=\"salons\" routerLinkActive=\"active\"\n          >Manage Salons</a\n        >\n        <a class=\"selectors\" routerLink=\"users\" routerLinkActive=\"active\">\n          Manage Users</a\n        >\n        <a class=\"selectors\" routerLink=\"categories\" routerLinkActive=\"active\"\n          >Manage Categories</a\n        >\n        <a class=\"selectors\" routerLink=\"services\" routerLinkActive=\"active\"\n          >Manage Services</a\n        >\n        <a class=\"selectors\" routerLink=\"roles\" routerLinkActive=\"active\"\n          >Manage Roles</a\n        >\n        <a class=\"selectors\" routerLink=\"manage-plan\" routerLinkActive=\"active\"\n          >Manage Plans</a\n        >\n        <a\n          class=\"selectors\"\n          routerLink=\"subscribed-salons\"\n          routerLinkActive=\"active\"\n          >Subscribed Salons</a\n        >\n        <a class=\"selectors\" routerLink=\"detail\" routerLinkActive=\"active\"\n          >Admin Details</a\n        >\n        <a class=\"selectors\" routerLink=\"bookings\" routerLinkActive=\"active\"\n          >Bookings</a\n        >\n        <!-- <a class=\"selectors\" routerLink=\"other\" routerLinkActive=\"active\"\n          >Other</a\n        > -->\n        <!-- <a class=\"selectors\" routerLink=\"location\" routerLinkActive=\"active\"\n          >Location   subscribed-salons</a\n        > -->\n      </div>\n    </div>\n    <div\n      class=\"selectedSection\"\n      [ngClass]=\"isSelectorShown ? 'selectedSection' : 'fullShow'\"\n    >\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/booking-details/booking-details.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/booking-details/booking-details.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardBookingDetailsBookingDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"categoriesWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"headerArea\">\n          <app-header-text></app-header-text>\n        </div>\n      </div>\n    </div>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Date:</span>\n            {{ element.date | date: \"longDate\" }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"salonname\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Salon Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Salon Name:</span>\n            {{ element.salonName }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"username\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>User Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">User Name:</span>\n            {{ element.userName }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"orderid\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Id</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Order Id:</span>\n            {{ element.orderId }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Action:</span>\n            <div class=\"buttonArea\">\n              <button\n                class=\"btn-primary btn-sign-in can\"\n                (click)=\"cancelBooking(element)\"\n              >\n                Cancel\n              </button>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"totalCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n  <app-loader *ngIf=\"isLoader\"></app-loader>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/categories/categories.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/categories/categories.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardCategoriesCategoriesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"categoriesWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"headerArea\">\n          <app-header-text></app-header-text>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"btnActionArea\">\n          <button\n            class=\"btn btn-primary btn-sign-in\"\n            (click)=\"openAddCategoryModal('add')\"\n          >\n            Add Category\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \f<Modal Popup for add categories start here> -->\n  <div class=\"modalSection\" *ngIf=\"isAddModal\">\n    <div class=\"modal-content-area\">\n      <div class=\"header\">\n        Add Category\n      </div>\n      <form [formGroup]=\"categoryForm\">\n        <label>Category Name:</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Enter Category Name\"\n          formControlName=\"name\"\n        />\n      </form>\n      <button\n        *ngIf=\"!isShowUpdate\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"categoryForm.invalid\"\n        (click)=\"addCategory(categoryForm.value)\"\n      >\n        Add\n      </button>\n      <button\n        *ngIf=\"isShowUpdate\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"categoryForm.invalid\"\n        (click)=\"update(categoryForm.value)\"\n      >\n        Update\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"dismissModal()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n\n  <!-- \f<Modal Popup for add categories end here> -->\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"catname\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.catname }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"isactive\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-slide-toggle\n              [checked]=\"element.isActive\"\n              [disabled]=\"disabled\"\n            ></mat-slide-toggle>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <div class=\"\" (click)=\"deleteCategory(element)\">\n                <img\n                  src=\"../../../../assets/images/delete.svg\"\n                  alt=\"Delete\"\n                  title=\"Delete Category\"\n                />\n              </div>\n              <div class=\"editBtn\" (click)=\"openAddCategoryModal(element)\">\n                <img\n                  src=\"../../../../assets/images/edit.svg\"\n                  width=\"16px\"\n                  alt=\"Update\"\n                  title=\"Update Category\"\n                />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"adminCategoriesCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/confirmation/confirmation.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/confirmation/confirmation.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardConfirmationConfirmationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4>{{ title || \"Confirm\" }}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{ message || \"Are you sure?\" }}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancel()\">\n      Cancel\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">\n      OK\n    </button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/dashboard/dashboard.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/dashboard/dashboard.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"cards\">\n  <div class=\"card\">\n    <span class=\"cardText\">Salon Request</span>\n    <h2>{{ limit }}</h2>\n  </div>\n  <div class=\"card\">\n    <span class=\"cardText\">Active Salons</span>\n    <h2>{{ ActiveSalonsCount }}</h2>\n  </div>\n  <div class=\"card\">\n    <span class=\"cardText\">Users</span>\n    <h2>{{ ActiveUsersCount }}</h2>\n  </div>\n</div>\n<div class=\"headerSection\">\n  <span class=\"breadCrumb\"></span\n  ><app-header-text class=\"header\"></app-header-text>\n</div>\n<div class=\"table-responsive tablecustom\">\n  <div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"SalonRequestList\">\n      <!-- Position Column -->\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Name:</span>\n          {{ element.name }}\n        </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"salonaddress\">\n        <th mat-header-cell *matHeaderCellDef>Address</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Address:</span>\n          {{ element.salonaddress }}\n        </td>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"contact\">\n        <th mat-header-cell *matHeaderCellDef class=\"status-check\">Contact</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Contact:</span>\n          {{ element.contact }}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"isactive\">\n        <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Status:</span>\n          <mat-slide-toggle\n            [checked]=\"element.isActive\"\n            [disabled]=\"disabled\"\n          ></mat-slide-toggle>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef class=\"status-check-action\">\n          Action\n        </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"btnArea\">\n          <span class=\"mobile-label\">Action:</span>\n          <button\n            class=\"btn btn-primary btn-sign-in btnsec\"\n            (click)=\"approveSalonRequest(element)\"\n          >\n            Approve\n          </button>\n\n          <div class=\"suspend-sec\" (click)=\"declineSalonRequest(element)\">\n            <img\n              src=\"../../../../assets/images/suspend.svg\"\n              title=\"Suspend Salon\"\n              alt=\"Suspend Salon\"\n            />\n          </div>\n          <div class=\"suspend-sec\" (click)=\"showSalonDetails(element)\">\n            <img\n              src=\"../../../../assets/images/view.svg\"\n              title=\"Salon Detail\"\n              alt=\" Salon Detail\"\n            />\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <mat-paginator\n      [length]=\"limit\"\n      [pageSize]=\"count\"\n      (page)=\"paginate($event)\"\n      [pageSizeOptions]=\"[5, 10, 15, 20]\"\n      showFirstLastButtons\n    ></mat-paginator>\n    <div *ngIf=\"noRecordFound\" class=\"noRecords\">\n      <div class=\"noRec\">No Records Found</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"userDetailsOverlay\" *ngIf=\"showSalonDetail\">\n  <div class=\"main-section-area col-lg-6 col-md-6 col-sm-12\">\n    <div class=\"header\">\n      <h1>Salon Details</h1>\n    </div>\n    <div class=\"main-section\">\n      <div class=\"field-row img\">\n        <img src=\"{{ salonRequestDetails.image }}\" class=\"profilePic\" />\n      </div>\n      <div class=\"field-row\">\n        <label>Name:</label>\n        <div class=\"details\">{{ salonRequestDetails.name }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Email:</label>\n        <div class=\"details\">{{ salonEmail }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Address:</label>\n        <div class=\"details\">{{ salonRequestDetails.salonaddress }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Contact:</label>\n        <div class=\"details\">{{ salonRequestDetails.contact }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Close Time:</label>\n        <div class=\"details\">\n          {{ salonRequestDetails.closetime | date: \"shortTime\" }}\n        </div>\n      </div>\n      <div class=\"field-row\">\n        <label>Open Time:</label>\n        <div class=\"details\">\n          {{ salonRequestDetails.opentime | date: \"shortTime\" }}\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-Area\">\n      <button\n        class=\" btn btn-sign-in btn-primary\"\n        (click)=\"closeSalonDetails()\"\n      >\n        Close\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"modalSection\"  *ngIf=\"isDeleteDialog\">\n        <div class=\"modal-content-area\">\n                          <div><h1>Are you sure you want to delete?</div>\n                            <div><p>warning you are about to delete role!</p></div>\n                            <div class=\"yesNoBtn\">\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"confirm('yes')\">Yes</button>\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"reject('no')\">No</button>\n                            </div>\n                      </div>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardDeleteDialogDeleteDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"dialogWrapper\">\n  <div class=\"data-content  col-lg-6 col-md-6 col-sm-12\">\n    <div class=\"warning\">Are you sure you want to delete this?</div>\n    <div class=\"btnArea\">\n      <button class=\"btn btn-sign-in\" (click)=\"confirm('yes')\">Yes</button\n      ><button class=\"btn btn-sign-in\" (click)=\"confirm('no')\">No</button>\n    </div>\n  </div>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/details/details.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/details/details.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardDetailsDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"detailsWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"headerArea\">\n          <app-header-text></app-header-text>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"btnActionArea\">\n          <button\n            [disabled]=\"!isAddCompleted\"\n            class=\"btn btn-primary btn-sign-in\"\n            (click)=\"openAddCategoryModal('add')\"\n          >\n            Add\n          </button>\n          <button\n            class=\"btn btn-primary btn-sign-in\"\n            (click)=\"openAddCategoryModal('edit')\"\n          >\n            Update\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"main-content col-lg-5 col-md-6 col-sm-12\">\n    <div class=\"fields\">\n      <label>Phone</label>\n      <div class=\"field\">{{ adminDetails?.phone }}</div>\n    </div>\n    <div class=\"fields\">\n      <label>Code</label>\n      <div class=\"field\">+{{ adminDetails?.code }}</div>\n    </div>\n    <div class=\"fields\">\n      <label>About</label>\n      <div class=\"field\">{{ adminDetails?.about }}</div>\n    </div>\n  </div>\n  <div class=\"modalSection\" *ngIf=\"isModal\">\n    <div class=\"modal-content-area col-lg-4 col-md-4 col-sm-12\">\n      <form [formGroup]=\"adminDetailsForm\">\n        <label>Phone</label>\n        <input\n          type=\"number\"\n          class=\"form-control\"\n          formControlName=\"phone\"\n          placeholder=\"Contact Number\"\n        />\n        <div\n          *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n          class=\"erroralert\"\n        >\n          <div *ngIf=\"phone.errors.required\">\n            Phone is required.\n          </div>\n          <div *ngIf=\"phone.errors.minlength\">\n            Phone must be at least 3 characters long.\n          </div>\n          <div *ngIf=\"phone.errors.maxlength\">\n            Cannot be more than 11\n          </div>\n        </div>\n        <label>Country Code</label>\n        <select class=\"select-css\" formControlName=\"code\">\n          <option *ngFor=\"let item of countriesData\" [ngValue]=\"item.code\"\n            >{{ item.name }} {{ item.code }}</option\n          >\n        </select>\n        <label>About Us</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"about\"\n          placeholder=\"About Us\"\n        />\n        <div style=\"display: flex;justify-content: space-between;\">\n          <button\n            *ngIf=\"isAdd\"\n            class=\"btn-sign-in bts\"\n            [disabled]=\"adminDetailsForm.invalid\"\n            (click)=\"addDetail(adminDetailsForm.value)\"\n          >\n            Add\n          </button>\n          <button\n            *ngIf=\"!isAdd\"\n            class=\"btn-sign-in bts\"\n            [disabled]=\"adminDetailsForm.invalid\"\n            (click)=\"updateDetails(adminDetailsForm.value)\"\n          >\n            Update\n          </button>\n          <button class=\"btn-sign-in bts\" (click)=\"dismissModal()\">\n            Cancel\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header-text/header-text.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header-text/header-text.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardHeaderTextHeaderTextComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>{{headerTitle}}</h1>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header/header.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header/header.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n  <div class=\"headerSection col-lg-12 col-sm-12 col-md-12\">\n    <div class=\"logo col-lg-6\">\n      <div class=\"hamburgerIcon\" (click)=\"showSelection()\">\n        <div class=\"bar1\"></div>\n        <div class=\"bar2\"></div>\n        <div class=\"bar3\"></div>\n      </div>\n    </div>\n    <div class=\"detailSection col-lg-6 \">\n      <div class=\"username\">\n        {{ adminName }}\n      </div>\n      <div class=\"logoutbutton\">\n        <div class=\"logout\" (click)=\"showLogoutButton()\">\n          <span id=\"downArrow\"></span>\n        </div>\n        <div class=\"logoutItem\" *ngIf=\"showLogout\" (click)=\"logout()\">\n          Logout\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/loader/loader.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/loader/loader.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"spinner\">\n  <mat-progress-spinner\n    class=\"example-margin\"\n    [color]=\"color\"\n    [mode]=\"mode\"\n    [value]=\"value\"\n  >\n  </mat-progress-spinner>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardManageAdminManageAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"admin-manage-wrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n    <div class=\"actionButtons\">\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"openRegisterModal()\">\n        Register Admin\n      </button>\n    </div>\n  </div>\n\n  <div class=\"modalSection\" *ngIf=\"isAddModal\">\n    <div class=\"modal-content-area col-lg-6 col-md-6 col-sm-9\">\n      <div class=\"header\">\n        {{ modalHeaderText }}\n      </div>\n      <form [formGroup]=\"registerAdminForm\">\n        <div class=\"register-sec\">\n          <label>Email:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Enter Email\"\n            formControlName=\"email\"\n          />\n          <div\n            *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n            class=\"error-show\"\n          >\n            <div *ngIf=\"email.errors.required\">\n              Email is required.\n            </div>\n            <div *ngIf=\"email.errors.pattern\">\n              Enter Valid Email\n            </div>\n          </div>\n        </div>\n        <div class=\"register-sec\">\n          <label>Password:</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"Enter Password\"\n            formControlName=\"password\"\n          />\n          <div\n            *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n            class=\"error-show\"\n          >\n            <div *ngIf=\"password.errors.required\">\n              Password is required.\n            </div>\n            <div *ngIf=\"password.errors.minlength\">\n              Password must be minimum 3 letters\n            </div>\n            <div *ngIf=\"password.errors.maxlength\">\n              Maximum allowed letters are 10\n            </div>\n          </div>\n        </div>\n      </form>\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"registerAdminForm.invalid\"\n        (click)=\"registerUser(registerAdminForm.value)\"\n      >\n        Add\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"dismissModal()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\">\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef>Email</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"valueField\">\n            {{ element.email }}\n          </td>\n        </ng-container>\n\n        <!-- <ng-container matColumnDef=\"isactive\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-slide-toggle\n              [checked]=\"element.isActive\"\n              [disabled]=\"disabled\"\n              [(ngModel)]=\"toggle\"\n              (change)=\"onChange($event)\"\n            ></mat-slide-toggle>\n          </td>\n        </ng-container> -->\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <!-- <button\n                class=\"btn btn-primary btn-sign-in  btn-sec\"\n                (click)=\"deleteAdmin(element)\"\n              >\n                Delete\n              </button> -->\n              <div class=\"\" (click)=\"deleteAdmin(element)\">\n                <img\n                  src=\"../../../../assets/images/delete.svg\"\n                  title=\"Delete Admin\"\n                />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"adminCountTotal\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manageplan/manageplan.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manageplan/manageplan.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardManageplanManageplanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"managePlanWrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n    <div class=\"actionButtons\">\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        (click)=\"openAddPlanPanel('add')\"\n      >\n        Add Plan\n      </button>\n    </div>\n  </div>\n  <div class=\"mainSection\">\n    <div class=\"col-md-4\" *ngFor=\"let item of planListArray\">\n      <div class=\"card\">\n        <h4>\n          {{ item.id }}\n        </h4>\n        <h3 class=\"rate\">\n          {{ item.amount | currency: \"USD\" }}\n        </h3>\n        <p>Enjoy the benefits of this package for a {{ item.interval }}</p>\n        <a (click)=\"deletePlan(item)\" class=\"delete-btn\">\n          <img\n            src=\"../../../../assets/images/delete.svg\"\n            alt=\"Delete\"\n            title=\"Delete Plan\"\n          />\n        </a>\n        <!-- <a (click)=\"updatePlan(item)\">\n          <img\n            src=\"../../../../assets/images/edit.svg\"\n            alt=\"Update\"\n            title=\"Update Plan\"\n          />\n        </a> -->\n\n        <!-- <button\n          class=\"btn-primary btn btn-sign-in edit\"\n          (click)=\"deletePlan(item)\"\n        >\n          Delete\n        </button> -->\n      </div>\n    </div>\n\n    <!-- <div class=\"plan-card col-md-4\" *ngFor=\"let item of planListArray\">\n      <div class=\"form-group\">\n        <h4>\n          {{ item.id }}\n        </h4>\n        <h3 class=\"rate\">\n          {{ item.amount | currency: \"USD\" }}\n        </h3>\n      </div>\n      <div class=\"clearfix\">\n        <div>Enjoy the benefits of this package for a {{ item.interval }}</div>\n      </div>\n      <div class=\"plan-edit text-right\">\n        <button\n          class=\"btn-primary btn btn-sign-in edit\"\n          (click)=\"deletePlan(item)\"\n        >\n          Delete\n        </button>\n      </div>\n    </div> -->\n  </div>\n\n  <div class=\"addPlanModel\" *ngIf=\"isAddPlan\">\n    <div class=\"modal-content col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"headerText\">\n        <h2>{{ headertext }}</h2>\n      </div>\n      <form [formGroup]=\"savePlan\">\n        <div class=\"inpFeilds\">\n          <label>Plan Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"planname\"\n            placeholder=\"Name\"\n          />\n        </div>\n        <div class=\"inpFeilds\">\n          <label>Amount:</label>\n          <input\n            type=\"number\"\n            class=\"form-control\"\n            formControlName=\"amount\"\n            placeholder=\"Amount\"\n          />\n        </div>\n        <div class=\"inpFeilds\">\n          <label>Trial Period:</label>\n          <input\n            type=\"number\"\n            class=\"form-control\"\n            formControlName=\"trialperiod\"\n            placeholder=\"Trial Days\"\n          />\n        </div>\n        <div class=\"inpFeilds\">\n          <label>Cycle:</label>\n          <select class=\"select-css selectOption\" formControlName=\"interval\">\n            <option *ngFor=\"let item of intervals\" [ngValue]=\"item.value\">{{\n              item.key\n            }}</option>\n          </select>\n        </div>\n        <div class=\"inpFeilds\">\n          <button\n            *ngIf=\"!isEditPlan\"\n            class=\"btn btn-primary btn-sign-in\"\n            [disabled]=\"savePlan.invalid\"\n            (click)=\"add(savePlan.value)\"\n          >\n            Add\n          </button>\n          <button\n            *ngIf=\"isEditPlan\"\n            class=\"btn btn-primary btn-sign-in\"\n            [disabled]=\"savePlan.invalid\"\n            (click)=\"update(savePlan.value)\"\n          >\n            Update\n          </button>\n\n          <button class=\"btn btn-primary btn-sign-in\" (click)=\"close('add')\">\n            Cancel\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"noRec\" *ngIf=\"noRecordsFound\">\n    No Records Found\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/other/other.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/other/other.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardOtherOtherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div class=\"managePlanWrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n    <div class=\"actionButtons\"></div>\n  </div>\n  <div class=\"mainSection\">\n    <div class=\"sections\">\n      <h2>About Us</h2>\n      <div class=\"fields\">\n        <textarea name=\"comment\" form=\"usrform\">Enter text here...</textarea>\n      </div>\n    </div>\n  </div>\n</div> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/roles/roles.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/roles/roles.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardRolesRolesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"rolesWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"headerArea\">\n      <app-header-text></app-header-text>\n    </div>\n    <div class=\"btnActionArea\">\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        (click)=\"openAddRolesModal('add')\"\n      >\n        Add Roles\n      </button>\n    </div>\n  </div>\n\n  <!-- <> -->\n\n  <!-- <div class=\"confirmDialog\" *ngIf=\"isDeleteDialog\">\n        <div class=\"modal-content-section\">\n                          <div><h1>Are you sure you want to delete?</h1></div>\n                            <div><p>warning you are about to delete role!</p></div>\n                            <div class=\"yesNoBtn\">\n                                <button click)=\"confirmDialog()\">CHC</button>\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"confirm('yes')\">Yes</button>\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"reject('no')\">No</button>\n                            </div>\n        </div>\n  </div> -->\n  <!-- <> -->\n\n  <!-- \f<Modal Popup for add categories start here> -->\n  <div class=\"modalSection\" *ngIf=\"isAddModal\">\n    <div class=\"modal-content-area col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"header\">\n        {{ modalHeaderText }}\n      </div>\n      <form [formGroup]=\"roleForm\">\n        <label>Role Name:</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Enter Category Name\"\n          formControlName=\"name\"\n        />\n      </form>\n      <button\n        *ngIf=\"isAdd\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"roleForm.invalid\"\n        (click)=\"saveRole(roleForm.value)\"\n      >\n        Add\n      </button>\n      <button\n        *ngIf=\"!isAdd\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"roleForm.invalid\"\n        (click)=\"updateRole(roleForm.value)\"\n      >\n        Update\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"dismissModal()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n\n  <!-- \f<Modal Popup for add categories end here> -->\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <!-- <button\n                [disabled]=\"disabled\"\n                class=\"btn btn-primary btn-sign-in  btn-sec\"\n                (click)=\"deleteRole(element)\"\n              >\n                Delete\n              </button>\n\n              <button\n                class=\"btn btn-primary btn-sign-in  btn-sec\"\n                (click)=\"openAddRolesModal(element)\"\n              >\n                Edit\n              </button> -->\n              <div class=\"disabledClass\" (click)=\"deleteRole(element)\">\n                <img src=\"../../../../assets/images/delete.svg\" />\n              </div>\n              <div class=\"disabledClass\" (click)=\"openAddRolesModal(element)\">\n                <img src=\"../../../../assets/images/edit-icon.svg\" />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"rolesCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n    <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n      <div class=\"noRec\">No Records Found</div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardSalonlistSalonlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"salonListWrapper\">\n  <div class=\"headerSection\">\n    <span class=\"breadCrumb\"></span>\n    <app-header-text class=\"header\"></app-header-text>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Name\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Name:</span>\n            {{ element.name }}\n          </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"salonaddress\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Address\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Address:</span>\n            {{ element.salonaddress }}\n          </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"contact\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Contact\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Contact:</span>\n            {{ element.contact }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"opentime\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Open Time\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Open Time:</span>\n            {{ element.opentime | date: \"shortTime\" }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"closetime\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Close Time\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Close Time:</span>\n            {{ element.closetime | date: \"shortTime\" }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Action:</span>\n            <div class=\"actionArea\">\n              <div class=\"suspend-sec\" (click)=\"declineSalonRequest(element)\">\n                <img\n                  src=\"../../../../assets/images/suspend.svg\"\n                  title=\"Suspend Salon\"\n                  alt=\"Suspend Salon\"\n                />\n              </div>\n\n              <div class=\"suspend-sec\" (click)=\"showSalonDetails(element)\">\n                <img\n                  src=\"../../../../assets/images/view.svg\"\n                  title=\"Salon Details\"\n                  alt=\"Salon Details\"\n                />\n              </div>\n              <button\n                class=\"btn btn-primary btn-sign-in btn-sus\"\n                (click)=\"getMontlyUser(element)\"\n              >\n                Users\n              </button>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"ActiveSalonsCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"userDetailsOverlay\" *ngIf=\"showSalonDetail\">\n    <div class=\"main-section-area col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"header\" *ngIf=\"!isCountShow\">\n        <h1>Salon Details</h1>\n      </div>\n      <div class=\"main-section\" *ngIf=\"!isCountShow\">\n        <div class=\"field-row img\">\n          <img src=\"{{ salonDetails.image }}\" class=\"profilePic\" />\n        </div>\n        <div class=\"field-row\">\n          <label>Name:</label>\n          <div class=\"details\">{{ salonDetails.name }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Email:</label>\n          <div class=\"details\">{{ salonEmail }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Address:</label>\n          <div class=\"details\">{{ salonDetails.location }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Contact:</label>\n          <div class=\"details\">{{ salonDetails.contact }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Close Time:</label>\n          <div class=\"details\">\n            {{ salonDetails.closetime | date: \"shortTime\" }}\n          </div>\n        </div>\n        <div class=\"field-row\">\n          <label>Open Time:</label>\n          <div class=\"details\">\n            {{ salonDetails.opentime | date: \"shortTime\" }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"countShow\" *ngIf=\"isCountShow\">\n        <h1>{{ monthlyUserCount }}</h1>\n      </div>\n\n      <div class=\"btn-Area\">\n        <button\n          class=\"btn btn-sign-in btn-primary\"\n          (click)=\"closeSalonDetails()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/services/services.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/services/services.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardServicesServicesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"servicesWrapper\">\n  <div class=\"headerSection\">\n    <app-header-text></app-header-text>\n    <div class=\"actionBtn\">\n      <button\n        class=\"btn btn-primary btn-sign-in btnService\"\n        (click)=\"openAddServiceModal('add')\"\n      >\n        Add Service\n      </button>\n    </div>\n  </div>\n  <div class=\"addServiceModal\" *ngIf=\"addServiceModal\">\n    <div class=\"modalContent  col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"headerText\">\n        <h3>{{ action }}Service</h3>\n      </div>\n      <div class=\"mainSection\">\n        <form class=\"serviceForm\" #form [formGroup]=\"saveServiceForm\">\n          <div class=\"fields\" *ngIf=\"!isShowUpdate\">\n            <label class=\"label\">Select Category:</label>\n            <select class=\"select-css selectOption\" formControlName=\"category\">\n              <option *ngFor=\"let item of categoriesList\" [value]=\"item._id\">{{\n                item.catname\n              }}</option>\n            </select>\n          </div>\n          <div class=\"fields\">\n            <label class=\"label\">Service Name:</label>\n            <input\n              type=\"text\"\n              class=\"form-control pls\"\n              placeholder=\"Enter service name\"\n              formControlName=\"name\"\n            />\n          </div>\n          <div class=\"fields\">\n            <button\n              name=\"addBtn\"\n              *ngIf=\"!isShowUpdate\"\n              class=\"btn btn-primary btn-sign-in\"\n              [disabled]=\"saveServiceForm.invalid\"\n              (click)=\"addService(saveServiceForm.value)\"\n            >\n              Add\n            </button>\n            <button\n              *ngIf=\"isShowUpdate\"\n              class=\"btn btn-primary btn-sign-in\"\n              [disabled]=\"saveServiceForm.invalid\"\n              (click)=\"updateData(saveServiceForm.value)\"\n            >\n              Update\n            </button>\n            <button\n              class=\"btn btn-primary btn-sign-in\"\n              (click)=\"dismissModal()\"\n            >\n              Cancel\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.name }}\n          </td>\n        </ng-container>\n\n        <!-- <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-slide-toggle\n              [checked]=\"element.isActive\"\n              [disabled]=\"disabled\"\n            ></mat-slide-toggle>\n          </td>\n        </ng-container> -->\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <!-- <button\n                    class=\"btn btn-primary btn-sign-in  btn-sec\"\n                    (click)=\"deleteService(element)\"\n                  >\n                    Delete\n                  </button> -->\n              <div class=\"\" (click)=\"deleteService(element)\">\n                <img\n                  src=\"../../../../assets/images/delete.svg\"\n                  title=\"Delete Service\"\n                />\n              </div>\n              <div class=\"editBtn\" (click)=\"openAddServiceModal(element)\">\n                <img\n                  src=\"../../../../assets/images/edit.svg\"\n                  width=\"16px\"\n                  title=\"Update Service\"\n                />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"servicesCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.html":
  /*!********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.html ***!
    \********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardSubcriptionsListSubcriptionsListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"subscriptionListWrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.salon.name }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"startdate\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            Subscribed On\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.created_on }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"enddate\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            Renewal Date\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.expiry_date }}\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"salonSubscriptionCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminDashboardUserlistUserlistComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"UserListWrapper\">\n  <div class=\"headerSection\">\n    <span class=\"breadCrumb\"></span\n    ><app-header-text class=\"header\"></app-header-text>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"firstName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">First Name:</span>\n            {{ element.firstName }}\n          </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"lastName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Last Name:</span>\n            {{ element.lastName }}\n          </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Email:</span>\n            {{ element.email }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"phone\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Contact</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Contact:</span>\n            {{ element.phone }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Action:</span>\n            <div class=\"suspend-sec\" (click)=\"viewUserDetails(element)\">\n              <img\n                src=\"../../../../assets/images/view.svg\"\n                title=\"User Details\"\n                alt=\"User Details\"\n              />\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"ActiveUsersCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"userDetailsOverlay\" *ngIf=\"showUserDetails\">\n    <div class=\"main-section-area col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"header\">\n        <h1>User Details</h1>\n      </div>\n      <div class=\"main-section\">\n        <div class=\"field-row img\">\n          <img src=\"{{ userDetails.profilepic }}\" class=\"profilePic\" />\n        </div>\n        <div class=\"field-row\">\n          <label>First Name:</label>\n          <div class=\"details\">{{ userDetails.firstName }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Last Name:</label>\n          <div class=\"details\">{{ userDetails.lastName }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Email:</label>\n          <div class=\"details\">{{ userDetails.email }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Contact:</label>\n          <div class=\"details\">{{ userDetails.phone }}</div>\n        </div>\n      </div>\n      <div class=\"btn-Area\">\n        <button\n          class=\" btn btn-sign-in btn-primary\"\n          (click)=\"closeUserDetail()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminloginAdminloginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-section\">\n  <div class=\"login-section-inner\">\n    <div class=\"login-left\">\n      <img src=\"../../../assets/images/logo.svg\" />\n    </div>\n    <div class=\"login-right\">\n      <form [formGroup]=\"adminLogin\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"InputEmail\">Email address</label>\n              <input\n                type=\"email\"\n                required\n                formControlName=\"email\"\n                class=\"form-control\"\n                id=\"InputEmail\"\n                aria-describedby=\"emailHelp\"\n                placeholder=\"Enter email\"\n              />\n\n              <div\n                *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                class=\"error-show\"\n              >\n                <div *ngIf=\"email.errors.required\">\n                  Name is required.\n                </div>\n                <div *ngIf=\"email.errors.pattern\">\n                  Invalid Email\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"InputPassword\">Password</label>\n              <input\n                type=\"password\"\n                required\n                formControlName=\"password\"\n                class=\"form-control\"\n                id=\"exampleInputPassword1\"\n                placeholder=\"Password\"\n              />\n              <div\n                *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                class=\"error-show\"\n              >\n                <div *ngIf=\"password.errors.required\">\n                  Password is required.\n                </div>\n                <div *ngIf=\"password.errors.minlength\">\n                  Password must be minimum 3 letters\n                </div>\n                <div *ngIf=\"password.errors.maxlength\">\n                  Maximum allowed letters are 10\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <button\n              [disabled]=\"adminLogin.invalid\"\n              (click)=\"loginAdmin(adminLogin.value)\"\n              class=\"btn btn-primary btn-sign-in\"\n            >\n              LOGIN\n            </button>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"sign-up\">\n              Forgot password ?\n              <!-- <a\n                [routerLink]=\"forget - password\"\n                routerLinkActive=\"router-link-active\"\n                >Reset Password</a\n              > -->\n              <button class=\"resetPassword\" (click)=\"resetPassword()\">\n                Reset Password\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/others/others.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/others/others.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminOthersOthersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>others works!</p>\n";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#dashboardWrapper {\n  top: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 52px;\n}\n#dashboardWrapper .hamburgerIcon {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  margin: 5px;\n  width: 20%;\n  cursor: pointer;\n  position: relative;\n}\n#dashboardWrapper .hamburgerIcon .bar1,\n#dashboardWrapper .hamburgerIcon .bar2,\n#dashboardWrapper .hamburgerIcon .bar3 {\n  width: 35px;\n  height: 5px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  margin: 2px 0;\n  transition: 0.4s;\n}\n#dashboardWrapper .hamburgerIcon .bar1.change {\n  transform: rotate(-45deg) translate(-9px, 4px);\n}\n#dashboardWrapper .hamburgerIcon .bar2.change {\n  opacity: 0;\n}\n#dashboardWrapper .hamburgerIcon .bar3.change {\n  transform: rotate(45deg) translate(-8px, -4px);\n}\n#dashboardWrapper #mainSection {\n  display: flex;\n  margin-top: 0;\n  justify-content: space-between;\n  height: 100%;\n  background-color: #f1f5f9;\n}\n#dashboardWrapper #mainSection .selectorSection {\n  padding: 0;\n  width: 280px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  position: relative;\n  transition: 1s;\n  margin-top: 0;\n  min-height: 400px;\n  padding-top: 15px;\n  z-index: 0;\n}\n@media only screen and (max-width: 767px) {\n  #dashboardWrapper #mainSection .selectorSection {\n    width: 100%;\n    position: fixed;\n    z-index: 9;\n    bottom: 0;\n    top: 53px;\n    display: none;\n  }\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app {\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app .selectors {\n  padding: 8px 20px 8px 20px;\n  color: white;\n  word-break: break-all;\n  text-decoration: none;\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app .selectors:hover {\n  padding: 8px 20px 8px 20px;\n  color: #783a87;\n  background-color: white;\n  word-break: break-all;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  margin-right: 5px;\n  text-decoration: none;\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app .active {\n  background: white;\n  color: #783a87;\n  margin-top: 5px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  margin-right: 5px;\n}\n#dashboardWrapper #mainSection .selectorSection.danger {\n  transition: 1s;\n  width: 0;\n  overflow: hidden;\n}\n@media only screen and (max-width: 767px) {\n  #dashboardWrapper #mainSection .selectorSection.danger {\n    display: block;\n    width: 100%;\n  }\n}\n#dashboardWrapper #mainSection .selectedSection {\n  width: 85%;\n  padding: 25px 15px;\n}\n@media only screen and (max-width: 767px) {\n  #dashboardWrapper #mainSection .selectedSection {\n    width: 100%;\n  }\n}\n#dashboardWrapper #mainSection .selectedSection.fullShow {\n  width: 100% !important;\n}\n.profile-sm {\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 8px;\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .profile-sm {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRUo7QURBSTs7O0VBR0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxvR0FBQTtFQUVBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ047QURDSTtFQUVFLDhDQUFBO0FDQ047QURFSTtFQUNFLFVBQUE7QUNBTjtBREdJO0VBRUUsOENBQUE7QUNETjtBRElFO0VBQ0UsYUFBQTtFQUdBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0pKO0FES0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG9HQUFBO0VBRUEseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUNKTjtBREtNO0VBWkY7SUFhSSxXQUFBO0lBQ0EsZUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7RUNGTjtBQUNGO0FER007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER1E7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDRFY7QURJUTtFQUNFLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ0ZWO0FESVE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDRlY7QURNSTtFQUNFLGNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUNKTjtBREtNO0VBSkY7SUFLSSxjQUFBO0lBQ0EsV0FBQTtFQ0ZOO0FBQ0Y7QURJSTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQ0ZOO0FER007RUFIRjtJQUlJLFdBQUE7RUNBTjtBQUNGO0FERUk7RUFDRSxzQkFBQTtBQ0FOO0FESUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNERjtBREdBO0VBQ0U7SUFDRSxjQUFBO0VDQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZGFzaGJvYXJkV3JhcHBlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1MnB4O1xuICAuaGFtYnVyZ2VySWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogMjAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYmFyMSxcbiAgICAuYmFyMixcbiAgICAuYmFyMyB7XG4gICAgICB3aWR0aDogMzVweDtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpXG4gICAgICAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgdHJhbnNpdGlvbjogMC40cztcbiAgICB9XG4gICAgLmJhcjEuY2hhbmdlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDRweCk7XG4gICAgfVxuXG4gICAgLmJhcjIuY2hhbmdlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgLmJhcjMuY2hhbmdlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtOHB4LCAtOHB4KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLTRweCk7XG4gICAgfVxuICB9XG4gICNtYWluU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgICAuc2VsZWN0b3JTZWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMjgwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSlcbiAgICAgICAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgICB6LWluZGV4OiAwO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHRvcDogNTNweDtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICAgIC5tZW51cy1hcHAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG5cbiAgICAgICAgLnNlbGVjdG9ycyB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDIwcHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0b3JzOmhvdmVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcbiAgICAgICAgICBjb2xvcjogIzc4M2E4NztcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBjb2xvcjogIzc4M2E4NztcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3RvclNlY3Rpb24uZGFuZ2VyIHtcbiAgICAgIHRyYW5zaXRpb246IDFzO1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3RlZFNlY3Rpb24ge1xuICAgICAgd2lkdGg6IDg1JTtcbiAgICAgIHBhZGRpbmc6IDI1cHggMTVweDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICAgIC5zZWxlY3RlZFNlY3Rpb24uZnVsbFNob3cge1xuICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cbi5wcm9maWxlLXNtIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnByb2ZpbGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4iLCIjZGFzaGJvYXJkV3JhcHBlciB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA1MnB4O1xufVxuI2Rhc2hib2FyZFdyYXBwZXIgLmhhbWJ1cmdlckljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMjAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNkYXNoYm9hcmRXcmFwcGVyIC5oYW1idXJnZXJJY29uIC5iYXIxLFxuI2Rhc2hib2FyZFdyYXBwZXIgLmhhbWJ1cmdlckljb24gLmJhcjIsXG4jZGFzaGJvYXJkV3JhcHBlciAuaGFtYnVyZ2VySWNvbiAuYmFyMyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAycHggMDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbiNkYXNoYm9hcmRXcmFwcGVyIC5oYW1idXJnZXJJY29uIC5iYXIxLmNoYW5nZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNHB4KTtcbn1cbiNkYXNoYm9hcmRXcmFwcGVyIC5oYW1idXJnZXJJY29uIC5iYXIyLmNoYW5nZSB7XG4gIG9wYWNpdHk6IDA7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAuaGFtYnVyZ2VySWNvbiAuYmFyMy5jaGFuZ2Uge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLTRweCk7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbn1cbiNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0b3JTZWN0aW9uIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI4MHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDFzO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHotaW5kZXg6IDA7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0b3JTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTtcbiAgICBib3R0b206IDA7XG4gICAgdG9wOiA1M3B4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0b3JTZWN0aW9uIC5tZW51cy1hcHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdG9yU2VjdGlvbiAubWVudXMtYXBwIC5zZWxlY3RvcnMge1xuICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0b3JTZWN0aW9uIC5tZW51cy1hcHAgLnNlbGVjdG9yczpob3ZlciB7XG4gIHBhZGRpbmc6IDhweCAyMHB4IDhweCAyMHB4O1xuICBjb2xvcjogIzc4M2E4NztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0b3JTZWN0aW9uIC5tZW51cy1hcHAgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogIzc4M2E4NztcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbiNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0b3JTZWN0aW9uLmRhbmdlciB7XG4gIHRyYW5zaXRpb246IDFzO1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgI2Rhc2hib2FyZFdyYXBwZXIgI21haW5TZWN0aW9uIC5zZWxlY3RvclNlY3Rpb24uZGFuZ2VyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuI2Rhc2hib2FyZFdyYXBwZXIgI21haW5TZWN0aW9uIC5zZWxlY3RlZFNlY3Rpb24ge1xuICB3aWR0aDogODUlO1xuICBwYWRkaW5nOiAyNXB4IDE1cHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0ZWRTZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuI2Rhc2hib2FyZFdyYXBwZXIgI21haW5TZWN0aW9uIC5zZWxlY3RlZFNlY3Rpb24uZnVsbFNob3cge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZS1zbSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnByb2ZpbGUtc20ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
    \********************************************************************/

  /*! exports provided: AdminDashboardComponent */

  /***/
  function srcAppAdminAdminDashboardAdminDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function () {
      return AdminDashboardComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var _salon_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../salon/auth.service */
    "./src/app/salon/auth.service.ts");

    var AdminDashboardComponent = /*#__PURE__*/function () {
      function AdminDashboardComponent(adminServ, authServ) {
        _classCallCheck(this, AdminDashboardComponent);

        this.adminServ = adminServ;
        this.authServ = authServ;
        this.isSelectorShown = true;
      }

      _createClass(AdminDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.adminServ.getHeaderResponse().subscribe(function (data) {
            _this12.isSelectorShown = !data;
            _this12.isSelectorShown = !_this12.isSelectorShown;
          });
          this.getAdminName();
        }
      }, {
        key: "getAdminName",
        value: function getAdminName() {
          this.email = sessionStorage.getItem("userDetails");
          this.index = this.email.indexOf("@");
          this.adminName = this.email.substring(0, this.index).toUpperCase();
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authServ.logout();
        }
      }, {
        key: "hideMenu",
        value: function hideMenu() {
          this.isSelectorShown = true;
        }
      }]);

      return AdminDashboardComponent;
    }();

    AdminDashboardComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: _salon_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-admin-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin-dashboard.component.scss */
      "./src/app/admin/admin-dashboard/admin-dashboard.component.scss"))["default"]]
    })], AdminDashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/booking-details/booking-details.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/booking-details/booking-details.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardBookingDetailsBookingDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.can {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2Jvb2tpbmctZGV0YWlscy9ib29raW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9ib29raW5nLWRldGFpbHMvYm9va2luZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQ0NGOztFRENBO0lBQ0Usa0JBQUE7RUNFRjs7RURBQTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ0dGOztFRERBO0lBQ0UsV0FBQTtFQ0lGOztFREZBO0lBQ0UsYUFBQTtFQ0tGOztFREZBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDS0Y7QUFDRjs7QURIQTtFQUNFLFdBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9ib29raW5nLWRldGFpbHMvYm9va2luZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN1c3BlbmQtc2VjIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG4uY2FuIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3VzcGVuZC1zZWMge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmNhbiB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts ***!
    \************************************************************************************/

  /*! exports provided: BookingDetailsComponent */

  /***/
  function srcAppAdminAdminDashboardBookingDetailsBookingDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingDetailsComponent", function () {
      return BookingDetailsComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var BookingDetailsComponent = /*#__PURE__*/function () {
      function BookingDetailsComponent(adminServ, toastServ) {
        _classCallCheck(this, BookingDetailsComponent);

        this.adminServ = adminServ;
        this.toastServ = toastServ;
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["date", "salonname", "username", "orderid", "action"];
      }

      _createClass(BookingDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getBookings();
          this.adminServ.setHeaderText("Bookings");
        }
      }, {
        key: "getBookings",
        value: function getBookings() {
          var _this13 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "upcomings"
          };
          this.adminServ.getUpcomingBookings(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this13.isLoader = false;
              _this13.upcomingBookings = data["data"]["bookings"];
              _this13.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this13.upcomingBookings);
              _this13.dataSource.sort = _this13.sort;
              _this13.totalCount = data["data"]["count"];
            } else if (data["code"] === 400) {
              _this13.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this13.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.getBookings();
        }
      }, {
        key: "cancelBooking",
        value: function cancelBooking(data) {
          var _this14 = this;

          var dataToPass = {
            booking_id: data["_id"]
          };
          this.adminServ.cancelBookings(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this14.isLoader = false;

              _this14.getBookings();

              _this14.toastServ.success(data["message"], "", {
                timeOut: 1000
              });
            } else if (data["code"] === 400) {
              _this14.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this14.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }]);

      return BookingDetailsComponent;
    }();

    BookingDetailsComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": false
    })], BookingDetailsComponent.prototype, "sort", void 0);
    BookingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-booking-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./booking-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/booking-details/booking-details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./booking-details.component.scss */
      "./src/app/admin/admin-dashboard/booking-details/booking-details.component.scss"))["default"]]
    })], BookingDetailsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/categories/categories.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/categories/categories.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardCategoriesCategoriesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  margin-top: 15px;\n}\n\n.categoriesWrapper .actionButtons .btnActionArea {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.categoriesWrapper .actionButtons .btnActionArea .btn-primary-btn {\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n\n.categoriesWrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.categoriesWrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  width: 40%;\n}\n\n.categoriesWrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n\n.categoriesWrapper .modalSection .modal-content-area form {\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n}\n\n.categoriesWrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n}\n\ntable {\n  width: 100%;\n}\n\n.btn-sec {\n  margin-bottom: 5px;\n}\n\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n\n.status-check {\n  width: 120px;\n}\n\n.editBtn {\n  margin-left: 10px;\n}\n\n.buttonArea {\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  align-items: center;\n}\n\n.btn-awke {\n  margin-bottom: 9px;\n}\n\n@media screen and (max-width: 991px) {\n  .categoriesWrapper .modalSection .modal-content-area {\n    width: 100%;\n    margin: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEV0k7RUFFRSxhQUFBO0VBQ0EseUJBQUE7QUNUTjs7QURVTTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvR0FBQTtBQ1JSOztBRGNFO0VBQ0UsZUFBQTtFQUFpQixtQ0FBQTtFQUNqQixhQUFBO0VBQWUsc0JBQUE7RUFDZixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUEo7O0FEU0k7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDUE47O0FEU007RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBQ1BSOztBRFNNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNQUjs7QURRUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDTlY7O0FEYUE7RUFDRSxXQUFBO0FDVkY7O0FEWUE7RUFDRSxrQkFBQTtBQ1RGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1JGOztBRFVBO0VBQ0UsWUFBQTtBQ1BGOztBRFNBO0VBQ0UsaUJBQUE7QUNORjs7QURRQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRE9BO0VBQ0Usa0JBQUE7QUNKRjs7QURNQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNIRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY2F0ZWdvcmllc1dyYXBwZXIge1xuICAuYWN0aW9uQnV0dG9ucyB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5oZWFkZXJUZXh0QXJlYSB7XG4gICAgICAvLyB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIC5idG5BY3Rpb25BcmVhIHtcbiAgICAgIC8vIHdpZHRoOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIC5idG4tcHJpbWFyeS1idG4ge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpXG4gICAgICAgICAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbFNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5tb2RhbC1jb250ZW50LWFyZWEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB3aWR0aDogNDAlO1xuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIGZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tc2VjIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmJ0bi1zaWduLWluIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuLmVkaXRCdG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5idXR0b25BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJ0bi1hd2tlIHtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNhdGVnb3JpZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG59XG4iLCIuaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmNhdGVnb3JpZXNXcmFwcGVyIC5hY3Rpb25CdXR0b25zIC5idG5BY3Rpb25BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5jYXRlZ29yaWVzV3JhcHBlciAuYWN0aW9uQnV0dG9ucyAuYnRuQWN0aW9uQXJlYSAuYnRuLXByaW1hcnktYnRuIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbi5jYXRlZ29yaWVzV3JhcHBlciAubW9kYWxTZWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhdGVnb3JpZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogNDAlO1xufVxuLmNhdGVnb3JpZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5jYXRlZ29yaWVzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY2F0ZWdvcmllc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIGZvcm0gbGFiZWwge1xuICB3aWR0aDogNDUlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1zZWMge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG4tc2lnbi1pbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uZWRpdEJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYnV0dG9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bi1hd2tlIHtcbiAgbWFyZ2luLWJvdHRvbTogOXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuY2F0ZWdvcmllc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE1cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/categories/categories.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/categories/categories.component.ts ***!
    \**************************************************************************/

  /*! exports provided: CategoriesComponent */

  /***/
  function srcAppAdminAdminDashboardCategoriesCategoriesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
      return CategoriesComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../confirmation/confirmation.component */
    "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");

    var CategoriesComponent = /*#__PURE__*/function () {
      function CategoriesComponent(adminServ, fb, toastrSev, SimpleModalService) {
        _classCallCheck(this, CategoriesComponent);

        this.adminServ = adminServ;
        this.fb = fb;
        this.toastrSev = toastrSev;
        this.SimpleModalService = SimpleModalService;
        this.isAddModal = false;
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["catname", "action"];
        this.noArchivedRecordsFound = false;
        this.disabled = true;
        this.showArchived = false;
        this.isShowUpdate = false;
      }

      _createClass(CategoriesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminServ.setHeaderText("Manage Categories");
          this.categoryForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.fetchCategoriesList();
        }
      }, {
        key: "openAddCategoryModal",
        value: function openAddCategoryModal(data) {
          if (data === "add") {
            this.isAddModal = true;
            this.isShowUpdate = false;
          } else {
            this.categoryForm.get("name").setValue(data.catname);
            this.categoryID = data._id;
            this.isAddModal = true;
            this.isShowUpdate = true;
          } // if (data) {
          // } else if (data === "null") {
          //   this.isAddModal = true;
          // }
          //console.log(this.isAddModal);

        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isAddModal = false;
          this.showArchived = false;
          this.categoryForm.reset();
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          //console.log(event);
          this.page = event.pageIndex + 1; //  console.log("c", this.count);
          // console.log("p", this.page);

          this.count = event.pageSize;
          this.fetchCategoriesList();
        }
      }, {
        key: "update",
        value: function update(data) {
          var _this15 = this;

          //console.log(data);
          this.isLoader = true;
          var dataToPass = {
            category_id: this.categoryID,
            catname: data.name
          };
          this.adminServ.updateCategory(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this15.isLoader = false;
              _this15.isAddModal = false;

              _this15.fetchCategoriesList();
            } else if (data["code"] === 400) {
              _this15.isLoader = false;

              _this15.toastrSev.error("Failed", data["message"], {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this15.isLoader = false;
            _this15.isAddModal = false;

            _this15.toastrSev.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "addCategory",
        value: function addCategory(data) {
          var _this16 = this;

          // console.log("ADD", data);
          this.isLoader = true;
          var dataToPass = {
            catname: data.name
          };
          this.adminServ.addCategories(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this16.isAddModal = false;
              _this16.isLoader = false;

              _this16.categoryForm.reset();

              _this16.toastrSev.success("Catgory Added", "Success", {
                timeOut: 1000
              });

              _this16.fetchCategoriesList();
            } else {
              _this16.isLoader = false;
              _this16.isAddModal = true;

              _this16.toastrSev.error("Failed To Added", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this16.isLoader = false;
            _this16.isAddModal = false;

            _this16.toastrSev.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "fetchCategoriesList",
        value: function fetchCategoriesList() {
          var _this17 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "admin-categories",
            pageSize: this.count,
            page: this.page
          }; //console.log(dataToPass);

          this.adminServ.getAdmincategoriesList(dataToPass).subscribe(function (data) {
            //   console.log(data);
            if (data["code"] === 200) {
              _this17.isLoader = false;
              _this17.adminCategoriesCount = data["data"]["count"];
              _this17.categoriesList = data["data"]["data"];
              _this17.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this17.categoriesList);
              _this17.dataSource.sort = _this17.sort;

              if (_this17.categoriesList.length == 0) {
                _this17.noRecordsFound = true;
              } else {
                _this17.noRecordsFound = false;
              }
            } else {
              _this17.isLoader = false;

              _this17.toastrSev.error("Failed To Fetch", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this17.isLoader = false;

            _this17.toastrSev.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory(data) {
          var _this18 = this;

          this.SimpleModalService.addModal(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
          }).subscribe(function (isConfirmed) {
            if (isConfirmed === true) {
              _this18.isLoader = true;
              var dataToPass = {
                category_id: data._id
              };

              _this18.adminServ.deleteCategories(dataToPass).subscribe(function (data) {
                if (data["code"] === 200) {
                  _this18.isLoader = false;

                  _this18.fetchCategoriesList();

                  _this18.toastrSev.success("Catgories Deleted", "Success", {
                    timeOut: 1000
                  });
                } else {
                  _this18.isLoader = false;

                  _this18.toastrSev.error("Failed To Delete", "Error", {
                    timeOut: 1000
                  });
                }
              }, function (error) {
                _this18.isLoader = false;

                _this18.toastrSev.error("Server Error", error.error["message"], {
                  timeOut: 1000
                });
              });
            }
          });
        }
      }, {
        key: "updateCategory",
        value: function updateCategory(data) {
          this.openAddCategoryModal(data);
          this.isShowUpdate = true;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return CategoriesComponent;
    }();

    CategoriesComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["SimpleModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], {
      "static": false
    })], CategoriesComponent.prototype, "sort", void 0);
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-categories",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/categories/categories.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./categories.component.scss */
      "./src/app/admin/admin-dashboard/categories/categories.component.scss"))["default"]]
    })], CategoriesComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/confirmation/confirmation.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/confirmation/confirmation.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardConfirmationConfirmationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n#infowindow-content .title {\n  font-weight: bold;\n}\n\n#infowindow-content {\n  display: none;\n}\n\n#map #infowindow-content {\n  display: inline;\n}\n\n.pac-card {\n  margin: 10px 10px 0 0;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto;\n}\n\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px;\n}\n\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px;\n}\n\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300;\n}\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n#pac-input:focus {\n  border-color: #4d90fe;\n}\n\n#title {\n  color: #fff;\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n#target {\n  width: 345px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDQTtFQUNFLFlBQUE7QUNqQ0Y7O0FEbUNBLHFEQUFBOztBQUNBOztFQUVFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ2hDRjs7QURrQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQy9CRjs7QURrQ0E7RUFDRSxpQkFBQTtBQy9CRjs7QURrQ0E7RUFDRSxhQUFBO0FDL0JGOztBRGtDQTtFQUNFLGVBQUE7QUMvQkY7O0FEa0NBO0VBQ0UscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDL0JGOztBRGtDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7QUMvQkY7O0FEa0NBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQy9CRjs7QURrQ0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQy9CRjs7QURrQ0E7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQy9CRjs7QURrQ0E7RUFDRSxxQkFBQTtBQy9CRjs7QURrQ0E7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQy9CRjs7QURpQ0E7RUFDRSxZQUFBO0FDOUJGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2NvbmZpcm1hdGlvbi9jb25maXJtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAub3ZlcmxheXtcblxuLy8gICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4vLyAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbi8vICAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4vLyAgICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4vLyAgICAgdG9wOiAwO1xuLy8gICAgIGxlZnQ6IDA7XG4vLyAgICAgcmlnaHQ6IDA7XG4vLyAgICAgYm90dG9tOiAwO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbi8vICAgICB6LWluZGV4OiAyO1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuLy8gICAgIC5jb25maXJtRGlhbG9ne1xuLy8gICAgICAgICBjb2xvcjp3aGl0ZTtcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuLy8gICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbi8vICAgICAgICAgLmZpZWxke1xuXG4vLyAgICAgICAgICAgICBzcGFue1xuXG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgfVxuXG4vLyAgICAgfVxuXG4vLyB9XG4jbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuI2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jaW5mb3dpbmRvdy1jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jaW5mb3dpbmRvdy1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuI21hcCAjaW5mb3dpbmRvdy1jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4ucGFjLWNhcmQge1xuICBtYXJnaW46IDEwcHggMTBweCAwIDA7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG59XG5cbiNwYWMtY29udGFpbmVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnBhYy1jb250cm9scyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDExcHg7XG59XG5cbi5wYWMtY29udHJvbHMgbGFiZWwge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiNwYWMtaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBwYWRkaW5nOiAwIDExcHggMCAxM3B4O1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4jcGFjLWlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjNGQ5MGZlO1xufVxuXG4jdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkOTBmZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbn1cbiN0YXJnZXQge1xuICB3aWR0aDogMzQ1cHg7XG59XG4iLCIjbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBPcHRpb25hbDogTWFrZXMgdGhlIHNhbXBsZSBwYWdlIGZpbGwgdGhlIHdpbmRvdy4gKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbiNkZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2luZm93aW5kb3ctY29udGVudCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXAgI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnBhYy1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4jcGFjLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5wYWMtY29udHJvbHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xufVxuXG4ucGFjLWNvbnRyb2xzIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jcGFjLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuI3BhYy1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzRkOTBmZTtcbn1cblxuI3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG59XG5cbiN0YXJnZXQge1xuICB3aWR0aDogMzQ1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ConfirmationComponent */

  /***/
  function srcAppAdminAdminDashboardConfirmationConfirmationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function () {
      return ConfirmationComponent;
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

    var ConfirmationComponent = /*#__PURE__*/function (_ngx_simple_modal__WE) {
      _inherits(ConfirmationComponent, _ngx_simple_modal__WE);

      var _super = _createSuper(ConfirmationComponent);

      function ConfirmationComponent() {
        _classCallCheck(this, ConfirmationComponent);

        return _super.call(this);
      }

      _createClass(ConfirmationComponent, [{
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

      return ConfirmationComponent;
    }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"]);

    ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-confirmation",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./confirmation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/confirmation/confirmation.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./confirmation.component.scss */
      "./src/app/admin/admin-dashboard/confirmation/confirmation.component.scss"))["default"]]
    })], ConfirmationComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/dashboard/dashboard.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/dashboard/dashboard.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n#cards {\n  display: flex;\n  justify-content: space-between;\n}\n\n#cards .card {\n  flex-grow: 1;\n  z-index: 0;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  padding: 25px;\n}\n\n#cards .card .cardText {\n  color: white;\n  font-weight: 600;\n  text-align: center;\n  padding-top: 5px;\n  font-size: 20px;\n}\n\n#cards .card h2 {\n  color: white;\n}\n\n#paginationCard {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#paginationCard .paginator {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 10px;\n}\n\n#paginationCard .paginator .pageNumber {\n  padding: 2px 5px 2px 5px;\n  font-size: 10px;\n  border: 1px solid #783a87;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  border-radius: 5px;\n}\n\n#paginationCard .paginator .prevnextBtn {\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  color: white;\n  border-radius: 10px;\n}\n\n.btn-sign-in {\n  width: 50% !important;\n  margin-bottom: 5px;\n}\n\n.tablecustom {\n  margin-top: 15px;\n}\n\n.headerSection {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.headerSection .header {\n  color: purple;\n}\n\n.status-check {\n  width: 120px;\n}\n\n.status-check-action {\n  width: 240px;\n}\n\n.btnArea {\n  display: flex;\n  justify-content: center;\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.userDetailsOverlay .main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n\n.userDetailsOverlay .main-section-area .header {\n  border-bottom: 1px solid lightgray;\n}\n\n.userDetailsOverlay .main-section-area .main-section {\n  margin-top: 10px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row label {\n  width: 20%;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.suspend-sec {\n  width: 10%;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n}\n\n@media screen and (max-width: 991px) {\n  .main-section-area {\n    width: 100%;\n  }\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.btnsec {\n  margin: 10px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDRUY7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9HQUFBO0VBRUEseUJBQUE7RUFDQSxhQUFBO0FDQUo7O0FEQ0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NOOztBRENJO0VBQ0UsWUFBQTtBQ0NOOztBRElBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURHSTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNETjs7QURHSTtFQUNFLG9HQUFBO0VBRUEseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGTjs7QURNQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjs7QURrQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ2ZGOztBRGdCRTtFQUNFLGFBQUE7QUNkSjs7QURpQkE7RUFDRSxZQUFBO0FDZEY7O0FEZ0JBO0VBQ0UsWUFBQTtBQ2JGOztBRGVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDWkY7O0FEZUE7RUFDRSxlQUFBO0VBQWlCLG1DQUFBO0VBRWpCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUFzQyxrQ0FBQTtFQUN0QyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNURjs7QURVRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNSSjs7QURTSTtFQUNFLGtDQUFBO0FDUE47O0FEU0k7RUFDRSxnQkFBQTtBQ1BOOztBRFFNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNOUjs7QURPUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0xWOztBRE9RO0VBQ0UsVUFBQTtBQ0xWOztBRE9RO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNMVjs7QURRTTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNOUjs7QURhQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1hGOztBRGFBO0VBQ0U7SUFDRSxXQUFBO0VDVkY7QUFDRjs7QURZQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNWRjs7QURhQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ1ZGOztBRGFBO0VBQ0UsYUFBQTtBQ1ZGOztBRGFBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUNWRjs7RURZQTtJQUNFLGtCQUFBO0VDVEY7O0VEV0E7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUNSRjs7RURVQTtJQUNFLFdBQUE7RUNQRjs7RURTQTtJQUNFLGFBQUE7RUNORjs7RURTQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQ05GO0FBQ0Y7O0FEUUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbiNjYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAuY2FyZCB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHotaW5kZXg6IDA7XG4gICAgd2lkdGg6IDMwJTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJVxuICAgICAgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICAuY2FyZFRleHQge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuI3BhZ2luYXRpb25DYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLml0ZW1QZXJQYWdlIHtcbiAgfVxuICAucGFnaW5hdG9yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIC5wYWdlTnVtYmVyIHtcbiAgICAgIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM3ODNhODc7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAucHJldm5leHRCdG4ge1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpXG4gICAgICAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuLmJ0bi1zaWduLWluIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4vLyAubm9SZWNvcmRze1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAubm9SZWN7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGNvbG9yOiAjNzIxYzI0O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbi8vICAgICBwYWRkaW5nOiAyZW07XG4vLyAgICAgd2lkdGg6IDUwJTtcbi8vICAgICB9XG5cbi8vIH1cbi50YWJsZWN1c3RvbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uaGVhZGVyU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgLmhlYWRlciB7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxufVxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5zdGF0dXMtY2hlY2stYWN0aW9uIHtcbiAgd2lkdGg6IDI0MHB4O1xufVxuLmJ0bkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVzZXJEZXRhaWxzT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIC8vZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAubWFpbi1zZWN0aW9uLWFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAuaGVhZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC5maWVsZC1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC5wcm9maWxlUGljIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbWcge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi1BcmVhIHtcbiAgICB9XG4gIH1cbn1cbi5zdXNwZW5kLXNlYyB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN1c3BlbmQtc2VjIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG4uYnRuc2VjIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2NhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI2NhcmRzIC5jYXJkIHtcbiAgZmxleC1ncm93OiAxO1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG4jY2FyZHMgLmNhcmQgLmNhcmRUZXh0IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiNjYXJkcyAuY2FyZCBoMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3BhZ2luYXRpb25DYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNwYWdpbmF0aW9uQ2FyZCAucGFnaW5hdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbiNwYWdpbmF0aW9uQ2FyZCAucGFnaW5hdG9yIC5wYWdlTnVtYmVyIHtcbiAgcGFkZGluZzogMnB4IDVweCAycHggNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3ODNhODc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiNwYWdpbmF0aW9uQ2FyZCAucGFnaW5hdG9yIC5wcmV2bmV4dEJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmJ0bi1zaWduLWluIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi50YWJsZWN1c3RvbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5oZWFkZXJTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmhlYWRlclNlY3Rpb24gLmhlYWRlciB7XG4gIGNvbG9yOiBwdXJwbGU7XG59XG5cbi5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5zdGF0dXMtY2hlY2stYWN0aW9uIHtcbiAgd2lkdGg6IDI0MHB4O1xufVxuXG4uYnRuQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udXNlckRldGFpbHNPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyAucHJvZmlsZVBpYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IGxhYmVsIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyAuZGV0YWlscyB7XG4gIHdpZHRoOiA3NSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmltZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnN1c3BlbmQtc2VjIHtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tYWluLXNlY3Rpb24tYXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW9iaWxlLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtbGFiZWwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG5cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG4uYnRuc2VjIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts ***!
    \************************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppAdminAdminDashboardDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(adminServ, toastServ, router) {
        _classCallCheck(this, DashboardComponent);

        this.adminServ = adminServ;
        this.toastServ = toastServ;
        this.router = router;
        this.displayedColumns = ["name", "salonaddress", "contact", "isactive", "action"];
        this.page = 1;
        this.limit = 0;
        this.count = 5;
        this.pageSize = 5;
        this.disabled = true;
        this.ActiveSalonsCount = 0;
        this.ActiveUsersCount = 0;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          if (JSON.parse(sessionStorage.getItem("isReload")) === true) {
            window.location.reload();
            sessionStorage.setItem("isReload", JSON.stringify(false));
          }

          var dataToPass = {
            pageSize: this.pageSize,
            page: this.page
          };
          this.dataDefault = dataToPass;
          this.getActiveSalonsCount();
          this.getActiveUsersCount();
          this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 100000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this19.adminServ.getSalonsRequest(_this19.dataDefault);
          })).subscribe(function (result) {
            _this19.SalonRequestList = result["data"]["data"];
            _this19.limit = result["data"]["countNumber"];
          });
          this.adminServ.setHeaderText("Salons Request");
        }
        /**
         * Function is use to Pay to get salon requests list
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "getRequests",
        value: function getRequests() {
          var _this20 = this;

          console.log("getreq0");
          var dataToPass = {
            pageSize: this.pageSize,
            page: this.page
          };
          this.adminServ.getSalonsRequest(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this20.SalonRequestList = data["data"]["data"];
              _this20.limit = data["data"]["countNumber"];

              if (_this20.limit == 0 || _this20.SalonRequestList.length === 0) {
                _this20.noRecordFound = true;
              } else {
                _this20.noRecordFound = false;
              }
            } else if (data["code"] === 400) {
              _this20.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            console.log(error);

            _this20.toastServ.error(error.error["message"], "", {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          //   console.log(event);
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.getRequests();
        }
        /**
         * Function is use to Pay to Approve Salon Request
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "approveSalonRequest",
        value: function approveSalonRequest(data) {
          var _this21 = this;

          // console.log("ApproveFor", data);
          var dataToPass = {
            salon_id: data._id
          };
          this.adminServ.approveSalonRequests(dataToPass).subscribe(function (data) {
            //    console.log("FFFF", data);
            if (data["code"] === 200) {
              _this21.toastServ.success("Salon Approved Successfully", "", {
                timeOut: 1000
              });

              _this21.getRequests();

              _this21.getActiveSalonsCount();

              _this21.getActiveUsersCount();
            } else if (data["code"] === 400) {
              _this21.toastServ.error("Failed", data["message"], {
                timeOut: 1000
              });
            }
          }, function (error) {
            console.log(error);

            _this21.toastServ.error("Failed To Approve Salon", error.error["message"], {
              timeOut: 1000
            });
          });
        }
        /**
         * Function is use to fetch Number of Active Users
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "getActiveUsersCount",
        value: function getActiveUsersCount() {
          var _this22 = this;

          console.log("sssssssssss");
          var dataToPass = {
            type: "user"
          };
          this.adminServ.getActiveUsersCount(dataToPass).subscribe(function (data) {
            if (data["code"] == 200) {
              _this22.ActiveUsersCount = data["data"]; //   console.log("ActiveUsersCount SALONS", this.ActiveUsersCount);
            }
          }, function (error) {
            _this22.toastServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
        /**
         * Function is use to fetch Number of Active Users
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "getActiveSalonsCount",
        value: function getActiveSalonsCount() {
          var _this23 = this;

          console.log("comnign");
          var dataToPass = {
            type: "salon"
          };
          this.adminServ.getActiveSalonsCount(dataToPass).subscribe(function (data) {
            //  console.log("DATA", data);
            if (data["code"] == 200) {
              _this23.ActiveSalonsCount = data["data"]; //   console.log("ACTIVE SALONS", this.ActiveSalonsCount);
            }
          }, function (error) {
            _this23.toastServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "showSalonDetails",
        value: function showSalonDetails(data) {
          var _this24 = this;

          // console.log(data);
          var dataToPass = {
            salon_id: data._id
          };
          this.adminServ.getSalonDetails(dataToPass).subscribe(function (data) {
            //  console.log("DSS", data);
            if (data["code"] === 200) {
              _this24.showSalonDetail = true;
              _this24.salonRequestDetails = data["data"]["salondetail"];
              _this24.salonEmail = data["data"]["email"];

              if (_this24.salonRequestDetails["image"] === null) {
                _this24.salonRequestDetails["image"] = "../../../assets/images/profilepic.png";
              }
            } else {
              _this24.toastServ.error("Failed To Fetch User Details", "Error", {
                timeOut: 1000
              });
            }
          });
        }
      }, {
        key: "closeSalonDetails",
        value: function closeSalonDetails() {
          this.showSalonDetail = false;
        }
        /**
         * Function is use to Pay to Decline Salon Request
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "declineSalonRequest",
        value: function declineSalonRequest(data) {
          var _this25 = this;

          var dataToPass = {
            salon_id: data._id
          };
          this.adminServ.declineSalonRequest(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this25.toastServ.success("Salon Declined Successfully", "", {
                timeOut: 1000
              });

              _this25.getRequests();

              _this25.getActiveSalonsCount();

              _this25.getActiveUsersCount();
            } else if (data["code"] === 400) {
              _this25.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this25.toastServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/dashboard/dashboard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/admin/admin-dashboard/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardDeleteDialogDeleteDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".dialogWrapper {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dialogWrapper .data-content {\n  background: white;\n  margin: 10px;\n  padding: 1em;\n}\n.dialogWrapper .data-content .warning {\n  font-size: 18px;\n  font-weight: 600;\n}\n.dialogWrapper .data-content .btnArea {\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2RlbGV0ZS1kaWFsb2cvZGVsZXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFFakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0lGO0FERkU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSUo7QURGSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0lOO0FERkk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUNJTiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIC8vZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC5kYXRhLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAxZW07XG5cbiAgICAud2FybmluZyB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuYnRuQXJlYSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICB9XG59XG4iLCIuZGlhbG9nV3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaWFsb2dXcmFwcGVyIC5kYXRhLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxZW07XG59XG4uZGlhbG9nV3JhcHBlciAuZGF0YS1jb250ZW50IC53YXJuaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpYWxvZ1dyYXBwZXIgLmRhdGEtY29udGVudCAuYnRuQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.ts ***!
    \********************************************************************************/

  /*! exports provided: DeleteDialogComponent */

  /***/
  function srcAppAdminAdminDashboardDeleteDialogDeleteDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function () {
      return DeleteDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeleteDialogComponent = function DeleteDialogComponent() {
      _classCallCheck(this, DeleteDialogComponent);
    };

    DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-delete-dialog",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-dialog.component.scss */
      "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.scss"))["default"]]
    })], DeleteDialogComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/details/details.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/details/details.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardDetailsDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".detailsWrapper .actionButtons .btnActionArea {\n  display: flex;\n  justify-content: flex-end;\n}\n.detailsWrapper .actionButtons .btnActionArea .btn-primary-btn {\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.detailsWrapper .main-content {\n  background: white;\n  padding: 1em;\n  border-radius: 10px;\n}\n.detailsWrapper .main-content .fields {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n  padding: 10px;\n  align-items: center;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.detailsWrapper .main-content .fields label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n}\n.detailsWrapper .main-content .fields .field {\n  padding: 10px;\n}\n.detailsWrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detailsWrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 20px;\n  width: 40%;\n}\n.detailsWrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.detailsWrapper .modalSection .modal-content-area form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.detailsWrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n  margin-top: 10px;\n}\n.bts {\n  margin: 0;\n  margin-top: 10px;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVSTtFQUVFLGFBQUE7RUFDQSx5QkFBQTtBQ1ZOO0FEV007RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0dBQUE7QUNUUjtBRGNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNaSjtBRGFJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDWE47QURhTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDWFI7QURhTTtFQUNFLGFBQUE7QUNYUjtBRGVFO0VBQ0UsZUFBQTtFQUFpQixtQ0FBQTtFQUNqQixhQUFBO0VBQWUsc0JBQUE7RUFDZixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDUko7QURVSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNSTjtBRFVNO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUNSUjtBRFVNO0VBQ0UsYUFBQTtFQUVBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNUUjtBRFVRO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1JWO0FEY0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHNXcmFwcGVyIHtcbiAgLmFjdGlvbkJ1dHRvbnMge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAuaGVhZGVyVGV4dEFyZWEge1xuICAgICAgLy8gd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAuYnRuQWN0aW9uQXJlYSB7XG4gICAgICAvLyB3aWR0aDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAuYnRuLXByaW1hcnktYnRuIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKVxuICAgICAgICAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1haW4tY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLmZpZWxkcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuICAgICAgLmZpZWxkIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLm1vZGFsU2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHdpZHRoOiA0MCU7XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi5idHMge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cbiIsIi5kZXRhaWxzV3JhcHBlciAuYWN0aW9uQnV0dG9ucyAuYnRuQWN0aW9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uZGV0YWlsc1dyYXBwZXIgLmFjdGlvbkJ1dHRvbnMgLmJ0bkFjdGlvbkFyZWEgLmJ0bi1wcmltYXJ5LWJ0biB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4uZGV0YWlsc1dyYXBwZXIgLm1haW4tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uZGV0YWlsc1dyYXBwZXIgLm1haW4tY29udGVudCAuZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5kZXRhaWxzV3JhcHBlciAubWFpbi1jb250ZW50IC5maWVsZHMgbGFiZWwge1xuICB3aWR0aDogNDUlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5kZXRhaWxzV3JhcHBlciAubWFpbi1jb250ZW50IC5maWVsZHMgLmZpZWxkIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5kZXRhaWxzV3JhcHBlciAubW9kYWxTZWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRldGFpbHNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNDAlO1xufVxuLmRldGFpbHNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5kZXRhaWxzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZGV0YWlsc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIGZvcm0gbGFiZWwge1xuICB3aWR0aDogNDUlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0cyB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgd2lkdGg6IDEyMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/details/details.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/details/details.component.ts ***!
    \********************************************************************/

  /*! exports provided: DetailsComponent */

  /***/
  function srcAppAdminAdminDashboardDetailsDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () {
      return DetailsComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _country__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../country */
    "./src/app/admin/country.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var DetailsComponent = /*#__PURE__*/function () {
      function DetailsComponent(adminServ, fb, toastServ) {
        _classCallCheck(this, DetailsComponent);

        this.adminServ = adminServ;
        this.fb = fb;
        this.toastServ = toastServ;
        this.countriesData = _country__WEBPACK_IMPORTED_MODULE_4__["countries"];
        this.isModal = false;
        this.isAddCompleted = true;
      }

      _createClass(DetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminDataToPass = {
            type: "admin"
          };
          this.getAdminDetails(this.adminDataToPass);
          this.user_id = sessionStorage.getItem("userId");
          this.adminServ.setHeaderText("Manage Admin Details");
          this.adminDetailsForm = this.fb.group({
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)])],
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            about: [""]
          });
        }
      }, {
        key: "openAddCategoryModal",
        value: function openAddCategoryModal(data) {
          this.isModal = true;

          if (data === "add") {
            this.isAdd = true;
          } else if (data === "edit") {
            this.adminDetailsForm.get("phone").setValue(this.adminDetails.phone);
            this.adminDetailsForm.get("code").setValue(this.adminDetails.code);
            this.adminDetailsForm.get("about").setValue(this.adminDetails.about);
            this.isAdd = false;
          }
        }
      }, {
        key: "addDetail",
        value: function addDetail(data) {
          var _this26 = this;

          var dataToPass = {
            admin_id: this.user_id,
            phone: data.phone,
            code: data.code,
            about: data.about
          };
          this.adminServ.addAdminDetails(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this26.getAdminDetails(_this26.adminDataToPass);

              _this26.adminDetailsForm.reset();
            } else if (data["code"] === 400) {
              _this26.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this26.toastServ.error("Server- Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "updateDetails",
        value: function updateDetails(data) {
          var _this27 = this;

          // console.log(data);
          var dataToPass = {
            admin_id: this.user_id,
            phone: data.phone,
            code: data.code,
            about: data.about
          };
          this.adminServ.updateAdminDetails(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this27.getAdminDetails(_this27.adminDataToPass);

              _this27.isModal = false;

              _this27.adminDetailsForm.reset();
            } else if (data["code"] === 400) {
              _this27.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this27.toastServ.error("Server- Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "getAdminDetails",
        value: function getAdminDetails(data) {
          var _this28 = this;

          var dataToPass = {
            type: "admin"
          };
          this.adminServ.getAdminDetails(dataToPass).subscribe(function (data) {
            console.log(data["data"].length);

            if (data["code"] === 200) {
              _this28.adminDetails = data["data"];

              if (_this28.adminDetails !== null) {
                _this28.isAddCompleted = false;
              } else {
                _this28.isAddCompleted = true;
              }
            } else if (data["code"] === 400) {
              _this28.toastServ.error(data["message"], "", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this28.toastServ.error("Server- Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isModal = false;
        }
      }, {
        key: "phone",
        get: function get() {
          return this.adminDetailsForm.get("phone");
        }
      }]);

      return DetailsComponent;
    }();

    DetailsComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-details",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/details/details.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./details.component.scss */
      "./src/app/admin/admin-dashboard/details/details.component.scss"))["default"]]
    })], DetailsComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/header-text/header-text.component.scss":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/header-text/header-text.component.scss ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardHeaderTextHeaderTextComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  padding-left: 0;\n  color: #212529;\n  font-size: 30px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2hlYWRlci10ZXh0L2hlYWRlci10ZXh0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvaGVhZGVyLXRleHQvaGVhZGVyLXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2hlYWRlci10ZXh0L2hlYWRlci10ZXh0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuIiwiaDEge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/header-text/header-text.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/header-text/header-text.component.ts ***!
    \****************************************************************************/

  /*! exports provided: HeaderTextComponent */

  /***/
  function srcAppAdminAdminDashboardHeaderTextHeaderTextComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderTextComponent", function () {
      return HeaderTextComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");

    var HeaderTextComponent = /*#__PURE__*/function () {
      function HeaderTextComponent(admServ) {
        _classCallCheck(this, HeaderTextComponent);

        this.admServ = admServ;
        this.headerTitle = "Home";
      }

      _createClass(HeaderTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.admServ.getHeaderText().subscribe(function (data) {
            _this29.headerTitle = data;
          });
        }
      }]);

      return HeaderTextComponent;
    }();

    HeaderTextComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }];
    };

    HeaderTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header-text',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header-text.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header-text/header-text.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header-text.component.scss */
      "./src/app/admin/admin-dashboard/header-text/header-text.component.scss"))["default"]]
    })], HeaderTextComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/header/header.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/header/header.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  box-shadow: 1px 0px 1px 1px #783a87;\n  padding: 5px;\n}\n.header .headerSection {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n.header .headerSection .logo {\n  background-image: url('logo.svg');\n  width: 330px;\n  height: 2em;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.header .headerSection .detailSection {\n  display: flex;\n  /* justify-content: space-between; */\n  width: 50% !important;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0;\n}\n.header .headerSection .detailSection .logoutbutton .logout {\n  height: 30px;\n  width: 30px;\n  border: 1px solid lightgray;\n  border-radius: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 5px;\n  cursor: pointer;\n}\n.header .headerSection .detailSection .logoutbutton .logout #downArrow {\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  margin-bottom: 3px;\n}\n.header .headerSection .detailSection .logoutbutton .logoutItem {\n  position: absolute;\n  height: 20px;\n  cursor: pointer;\n  right: 2px;\n  text-align: center;\n  align-items: center;\n  padding: 15px;\n  box-shadow: 1px 2px 2px 1px lightgrey;\n  background: white;\n  border-radius: 5px;\n  display: flex;\n}\n.bar1,\n.bar2,\n.bar3 {\n  width: 35px;\n  height: 5px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  margin: 2px 0;\n  transition: 0.4s;\n  cursor: pointer;\n}\n.bar1,\n.bar2,\n.bar3:hover {\n  width: 35px;\n  height: 5px;\n  background-color: white;\n  border-color: #783a87;\n  margin: 2px 0;\n  transition: 0.4s;\n}\n.hamburgerIcon {\n  position: absolute;\n  left: 220px;\n  cursor: pointer;\n  top: 7px;\n}\n.username {\n  font-size: 14px;\n}\n@media screen and (max-width: 991px) {\n  .header .headerSection .detailSection {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQ0k7RUFDRSxpQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ0NOO0FEQ0k7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDQ047QURLUTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSFY7QURLVTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUNIWjtBRE9RO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNMVjtBRFlBOzs7RUFHRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG9HQUFBO0VBRUEseUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDVkY7QURZQTs7O0VBR0UsV0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDVEY7QURZQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0FDVEY7QURXQTtFQUNFLGVBQUE7QUNSRjtBRFdBO0VBQ0U7SUFDRSxhQUFBO0VDUkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMXB4IDFweCAjNzgzYTg3O1xuICBwYWRkaW5nOiA1cHg7XG5cbiAgLmhlYWRlclNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgLmxvZ28ge1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnJyk7XG4gICAgICB3aWR0aDogMzMwcHg7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5kZXRhaWxTZWN0aW9uIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICovXG4gICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAucHJvZmlsZVBpYyB7XG4gICAgICB9XG4gICAgICAudXNlcm5hbWUge1xuICAgICAgfVxuICAgICAgLmxvZ291dGJ1dHRvbiB7XG4gICAgICAgIC5sb2dvdXQge1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAjZG93bkFycm93IHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgYmxhY2s7XG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ291dEl0ZW0ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHJpZ2h0OiAycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAxcHggbGlnaHRncmV5O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5iYXIxLFxuLmJhcjIsXG4uYmFyMyB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlXG4gICAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDJweCAwO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmFyMSxcbi5iYXIyLFxuLmJhcjM6aG92ZXIge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICM3ODNhODc7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5oYW1idXJnZXJJY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDdweDtcbn1cbi51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlYWRlciAuaGVhZGVyU2VjdGlvbiAuZGV0YWlsU2VjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLy8gLmJhcjEuY2hhbmdlIHtcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA0cHgpO1xuLy8gfVxuXG4vLyAuYmFyMi5jaGFuZ2Uge1xuLy8gICBvcGFjaXR5OiAwO1xuLy8gfVxuXG4vLyAuYmFyMy5jaGFuZ2Uge1xuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG4vLyAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLTRweCk7XG4vLyB9XG4iLCIuaGVhZGVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAxcHggMXB4ICM3ODNhODc7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5oZWFkZXIgLmhlYWRlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cbi5oZWFkZXIgLmhlYWRlclNlY3Rpb24gLmxvZ28ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnXCIpO1xuICB3aWR0aDogMzMwcHg7XG4gIGhlaWdodDogMmVtO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyIC5oZWFkZXJTZWN0aW9uIC5kZXRhaWxTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDA7XG59XG4uaGVhZGVyIC5oZWFkZXJTZWN0aW9uIC5kZXRhaWxTZWN0aW9uIC5sb2dvdXRidXR0b24gLmxvZ291dCB7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWFkZXIgLmhlYWRlclNlY3Rpb24gLmRldGFpbFNlY3Rpb24gLmxvZ291dGJ1dHRvbiAubG9nb3V0ICNkb3duQXJyb3cge1xuICBib3JkZXI6IHNvbGlkIGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDNweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLmhlYWRlciAuaGVhZGVyU2VjdGlvbiAuZGV0YWlsU2VjdGlvbiAubG9nb3V0YnV0dG9uIC5sb2dvdXRJdGVtIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcmlnaHQ6IDJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDJweCAxcHggbGlnaHRncmV5O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYmFyMSxcbi5iYXIyLFxuLmJhcjMge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHRyYW5zaXRpb246IDAuNHM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJhcjEsXG4uYmFyMixcbi5iYXIzOmhvdmVyIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjNzgzYTg3O1xuICBtYXJnaW46IDJweCAwO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uaGFtYnVyZ2VySWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiA3cHg7XG59XG5cbi51c2VybmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlYWRlciAuaGVhZGVyU2VjdGlvbiAuZGV0YWlsU2VjdGlvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/header/header.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/header/header.component.ts ***!
    \******************************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppAdminAdminDashboardHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../auth.service */
    "./src/app/admin/auth.service.ts");
    /* harmony import */


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(authServ, admnServ) {
        _classCallCheck(this, HeaderComponent);

        this.authServ = authServ;
        this.admnServ = admnServ;
        this.isShowSelection = true;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAdminName();
        }
      }, {
        key: "showSelection",
        value: function showSelection() {
          this.isShowSelection = !this.isShowSelection;
          this.admnServ.setHeaderResponse(this.isShowSelection);
        }
        /**
         * Function is use to Pay to show logout button
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "showLogoutButton",
        value: function showLogoutButton() {
          this.showLogout = true;
        }
        /**
         * Function is use to Pay to logout admin
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "logout",
        value: function logout() {
          this.authServ.logout();
        }
      }, {
        key: "getAdminName",
        value: function getAdminName() {
          this.email = sessionStorage.getItem("userDetails");
          this.index = this.email.indexOf("@");
          this.adminName = this.email.substring(0, this.index).toUpperCase();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_3__["AdminServService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/admin/admin-dashboard/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/loader/loader.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/loader/loader.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardLoaderLoaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spinner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAuZXhhbXBsZS1tYXJnaW4ge1xuICB9XG59XG4iLCIuc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/loader/loader.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/loader/loader.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcAppAdminAdminDashboardLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoaderComponent = function LoaderComponent() {
      _classCallCheck(this, LoaderComponent);

      this.value = 50;
      this.color = "accent";
      this.mode = "indeterminate";
    };

    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-loader",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/loader/loader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./loader.component.scss */
      "./src/app/admin/admin-dashboard/loader/loader.component.scss"))["default"]]
    })], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardManageAdminManageAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".admin-manage-wrapper .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.admin-manage-wrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-manage-wrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n.admin-manage-wrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.admin-manage-wrapper .modalSection .modal-content-area form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n}\n.admin-manage-wrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n  font-weight: 400;\n  color: #212529;\n}\ntable {\n  width: 100%;\n}\n.status-check {\n  width: 120px;\n}\n.headerText h3 {\n  font-size: 20px;\n  padding-bottom: 0;\n}\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n.serviceForm {\n  margin-top: 15px;\n}\n.register-sec {\n  display: flex;\n  margin-bottom: 5px;\n  flex-direction: column;\n}\n.valueField:first-child {\n  opacity: 0.5;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL21hbmFnZS1hZG1pbi9tYW5hZ2UtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9tYW5hZ2UtYWRtaW4vbWFuYWdlLWFkbWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBRElFO0VBQ0UsZUFBQTtFQUFpQixtQ0FBQTtFQUNqQixhQUFBO0VBQWUsc0JBQUE7RUFDZixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7QURESTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNHTjtBRERNO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUNHUjtBRERNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0dSO0FERlE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0lWO0FERUE7RUFDRSxXQUFBO0FDQ0Y7QURDQTtFQUNFLFlBQUE7QUNFRjtBREFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDR0Y7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNHRjtBRERBO0VBQ0UsZ0JBQUE7QUNJRjtBREZBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUNLRjtBREhBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvbWFuYWdlLWFkbWluL21hbmFnZS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbi1tYW5hZ2Utd3JhcHBlciB7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLmFjdGlvbkJ1dHRvbnMge1xuICAgIH1cbiAgfVxuICAubW9kYWxTZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAubW9kYWwtY29udGVudC1hcmVhIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luOiAxMHB4O1xuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIGZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGNvbG9yOiAjMjEyNTI5O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5oZWFkZXJUZXh0IGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJ0bi1zaWduLWluIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc2VydmljZUZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnJlZ2lzdGVyLXNlYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi52YWx1ZUZpZWxkOmZpcnN0LWNoaWxkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiIsIi5hZG1pbi1tYW5hZ2Utd3JhcHBlciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFkbWluLW1hbmFnZS13cmFwcGVyIC5tb2RhbFNlY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uYWRtaW4tbWFuYWdlLXdyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5hZG1pbi1tYW5hZ2Utd3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uYWRtaW4tbWFuYWdlLXdyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uYWRtaW4tbWFuYWdlLXdyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIGZvcm0gbGFiZWwge1xuICB3aWR0aDogNDUlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICMyMTI1Mjk7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5oZWFkZXJUZXh0IGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJ0bi1zaWduLWluIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5zZXJ2aWNlRm9ybSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5yZWdpc3Rlci1zZWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi52YWx1ZUZpZWxkOmZpcnN0LWNoaWxkIHtcbiAgb3BhY2l0eTogMC41O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ManageAdminComponent */

  /***/
  function srcAppAdminAdminDashboardManageAdminManageAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAdminComponent", function () {
      return ManageAdminComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _salon_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../salon/login/login.service */
    "./src/app/salon/login/login.service.ts");
    /* harmony import */


    var _salon_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../salon/auth.service */
    "./src/app/salon/auth.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ManageAdminComponent = /*#__PURE__*/function () {
      function ManageAdminComponent(adminServ, toastrServ, fb, logServ, authServ) {
        _classCallCheck(this, ManageAdminComponent);

        this.adminServ = adminServ;
        this.toastrServ = toastrServ;
        this.fb = fb;
        this.logServ = logServ;
        this.authServ = authServ;
        this.isAddModal = false;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
        this.modalHeaderText = "Register Admin";
        this.limit = 0;
        this.count = 5;
        this.noRecordsFound = false;
        this.disabled = true;
        this.displayedColumns = ["email", "action"];
        this.pageSize = 5;
      }

      _createClass(ManageAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminServ.setHeaderText("Manage Admin");
          this.fetchAllAdmins();
          this.registerAdminForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)])]
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "openRegisterModal",
        value: function openRegisterModal() {
          this.isAddModal = true;
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.fetchAllAdmins();
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isAddModal = false;
        }
      }, {
        key: "registerUser",
        value: function registerUser(data) {
          var _this30 = this;

          this.isLoader = true;
          var dataToPass = {
            role: "admin",
            email: data.email,
            password: data.password
          };
          this.logServ.signUpSalon(dataToPass).subscribe(function (res) {
            if (res.code === 200) {
              _this30.isLoader = false;

              _this30.toastrServ.success("Registered Successfully", "Please Login", {
                timeOut: 1000
              });

              _this30.fetchAllAdmins();

              _this30.registerAdminForm.reset();

              _this30.isAddModal = false;

              _this30.authServ.sendToken(res.data.token);
            } else if (res.code === 201) {
              _this30.toastrServ.warning("User Already Exist", "Please Login", {
                timeOut: 1000
              });

              _this30.isLoader = false;
              _this30.isAddModal = false;
            } else {
              _this30.isLoader = false;

              _this30.toastrServ.error("Failed to register", "Please try again", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this30.isLoader = false;

            _this30.toastrServ.error("Server - Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "fetchAllAdmins",
        value: function fetchAllAdmins() {
          var _this31 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "admin",
            pageSize: this.count,
            page: this.page
          };
          this.adminServ.fetchAllUsersCommon(dataToPass).subscribe(function (data) {
            if (data["code"] == 200) {
              _this31.isLoader = false; //   console.log(data["data"]["data"]);

              _this31.adminList = data["data"]["data"];
              _this31.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this31.adminList);
              _this31.adminCountTotal = data["data"]["count"];

              if (_this31.adminList.length == 0) {
                _this31.noRecordsFound = true;
              } //    console.log("BEHERE", this.adminList, this.adminCountTotal);

            }
          }, function (error) {
            _this31.isLoader = false;

            _this31.toastrServ.error("Server - Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "deleteAdmin",
        value: function deleteAdmin(data) {//console.log(data);
        }
      }, {
        key: "onChange",
        value: function onChange(data) {//console.log(this.toggle, data);
          // if (data["checked"] === true) {
          //   let dataToPass = {
          //     type: "admin"
          //     // _id:
          //   };
          //   //this.adminServ.activeUser()
          // } else if (e["checked"] === false) {
          // }
        }
      }, {
        key: "email",
        get: function get() {
          return this.registerAdminForm.get("email");
        }
      }, {
        key: "password",
        get: function get() {
          return this.registerAdminForm.get("password");
        }
      }]);

      return ManageAdminComponent;
    }();

    ManageAdminComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _salon_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"]
      }, {
        type: _salon_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    ManageAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-manage-admin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-admin.component.scss */
      "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.scss"))["default"]]
    })], ManageAdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/manageplan/manageplan.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/manageplan/manageplan.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardManageplanManageplanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".managePlanWrapper .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.managePlanWrapper .header .actionButtons {\n  display: flex;\n  align-items: center;\n}\n.managePlanWrapper .mainSection {\n  display: flex;\n  flex-wrap: wrap;\n}\n.managePlanWrapper .mainSection .plan-card {\n  margin: 5px;\n  border: 1px solid lightgray;\n  box-shadow: 3px 4px 11px 1px lightgrey;\n  border-radius: 5px;\n  padding: 15px;\n  width: 250px;\n  background: #fff;\n  border-color: transparent;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  height: auto;\n}\n.managePlanWrapper .mainSection .plan-card h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  float: left;\n}\n.managePlanWrapper .mainSection .plan-card h3 {\n  color: #783a87;\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n.managePlanWrapper .mainSection .plan-card .plan-area {\n  display: flex;\n  justify-content: space-between;\n}\n.managePlanWrapper .mainSection .plan-card .plan-edit .edit {\n  border: 1px solid white;\n  color: white;\n  font-weight: 600;\n}\n.managePlanWrapper .addPlanModel {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.managePlanWrapper .addPlanModel .modal-content {\n  margin: 10px;\n  padding: 10px;\n}\n.managePlanWrapper .addPlanModel .modal-content form .inpFeilds {\n  display: flex;\n  margin-top: 5px;\n  align-items: center;\n  margin-bottom: 5px;\n  justify-content: space-between;\n}\n.managePlanWrapper .addPlanModel .modal-content form .inpFeilds label {\n  width: 20%;\n}\n.managePlanWrapper .addPlanModel .modal-content form .inpFeilds .form-control {\n  width: 75% !important;\n}\n.card {\n  margin: 5px;\n  border: 1px solid lightgray;\n  box-shadow: 3px 4px 11px 1px lightgrey;\n  border-radius: 5px;\n  padding: 15px;\n  background: #fff;\n  border-color: transparent;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  height: auto;\n}\n.card h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  float: left;\n}\n.card h3 {\n  color: #783a87;\n  margin-top: 10px;\n}\n.card p {\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n.card .delete-btn {\n  position: absolute;\n  top: 11px;\n  right: 12px;\n}\n.selectOption {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL21hbmFnZXBsYW4vbWFuYWdlcGxhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL21hbmFnZXBsYW4vbWFuYWdlcGxhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDQUo7QURDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NOO0FERUU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0FKO0FERUk7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBWUEsWUFBQTtBQ1hOO0FEQU07RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDRVI7QURBTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDRVI7QURDTTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0NSO0FERVE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0FWO0FES0U7RUFDRSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLGFBQUE7RUFBZSxzQkFBQTtFQUNmLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUFzQyxrQ0FBQTtFQUN0QyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNFSjtBREFJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNFTjtBREVRO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNBVjtBREVVO0VBQ0UsVUFBQTtBQ0FaO0FERVU7RUFDRSxxQkFBQTtBQ0FaO0FEV0E7RUFDRSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0FDVEY7QURVRTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNSSjtBRFVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDUko7QURhRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDWEo7QURhRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNYSjtBRGNBO0VBQ0UsVUFBQTtBQ1hGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL21hbmFnZXBsYW4vbWFuYWdlcGxhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5hZ2VQbGFuV3JhcHBlciB7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmFjdGlvbkJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5tYWluU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAucGxhbi1jYXJkIHtcbiAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgYm94LXNoYWRvdzogM3B4IDRweCAxMXB4IDFweCBsaWdodGdyZXk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgIGg0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuICAgICAgaDMge1xuICAgICAgICBjb2xvcjogIzc4M2E4NztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgfVxuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgLnBsYW4tYXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICAgIC5wbGFuLWVkaXQge1xuICAgICAgICAuZWRpdCB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFkZFBsYW5Nb2RlbCB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLm1vZGFsLWNvbnRlbnQge1xuICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIC5oZWFkZXJUZXh0IHtcbiAgICAgIH1cbiAgICAgIGZvcm0ge1xuICAgICAgICAuaW5wRmVpbGRzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgIHdpZHRoOiA3NSUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc2VsZWN0IHtcbiAgICAgICAgICAvLyAgIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAvLyAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggMTFweCAxcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG5cbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBoNCB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuICBoMyB7XG4gICAgY29sb3I6ICM3ODNhODc7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLy8gcmlnaHQ6IDE1cHg7XG4gICAgLy8gdG9wOiAxMHB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbiAgLmRlbGV0ZS1idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDExcHg7XG4gICAgcmlnaHQ6IDEycHg7XG4gIH1cbn1cbi5zZWxlY3RPcHRpb24ge1xuICB3aWR0aDogNzUlO1xufVxuIiwiLm1hbmFnZVBsYW5XcmFwcGVyIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFuYWdlUGxhbldyYXBwZXIgLmhlYWRlciAuYWN0aW9uQnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFuYWdlUGxhbldyYXBwZXIgLm1haW5TZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5tYWluU2VjdGlvbiAucGxhbi1jYXJkIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogM3B4IDRweCAxMXB4IDFweCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogYXV0bztcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAubWFpblNlY3Rpb24gLnBsYW4tY2FyZCBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5tYWluU2VjdGlvbiAucGxhbi1jYXJkIGgzIHtcbiAgY29sb3I6ICM3ODNhODc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTBweDtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAubWFpblNlY3Rpb24gLnBsYW4tY2FyZCAucGxhbi1hcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5tYWluU2VjdGlvbiAucGxhbi1jYXJkIC5wbGFuLWVkaXQgLmVkaXQge1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5hZGRQbGFuTW9kZWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubWFuYWdlUGxhbldyYXBwZXIgLmFkZFBsYW5Nb2RlbCAubW9kYWwtY29udGVudCB7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAuYWRkUGxhbk1vZGVsIC5tb2RhbC1jb250ZW50IGZvcm0gLmlucEZlaWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ubWFuYWdlUGxhbldyYXBwZXIgLmFkZFBsYW5Nb2RlbCAubW9kYWwtY29udGVudCBmb3JtIC5pbnBGZWlsZHMgbGFiZWwge1xuICB3aWR0aDogMjAlO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5hZGRQbGFuTW9kZWwgLm1vZGFsLWNvbnRlbnQgZm9ybSAuaW5wRmVpbGRzIC5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm94LXNoYWRvdzogM3B4IDRweCAxMXB4IDFweCBsaWdodGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IGF1dG87XG59XG4uY2FyZCBoNCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuLmNhcmQgaDMge1xuICBjb2xvcjogIzc4M2E4NztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJkIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY2FyZCAuZGVsZXRlLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMXB4O1xuICByaWdodDogMTJweDtcbn1cblxuLnNlbGVjdE9wdGlvbiB7XG4gIHdpZHRoOiA3NSU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ManageplanComponent */

  /***/
  function srcAppAdminAdminDashboardManageplanManageplanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageplanComponent", function () {
      return ManageplanComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../confirmation/confirmation.component */
    "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");

    var ManageplanComponent = /*#__PURE__*/function () {
      function ManageplanComponent(adminServ, fb, toastServ, SimpleModalService) {
        _classCallCheck(this, ManageplanComponent);

        this.adminServ = adminServ;
        this.fb = fb;
        this.toastServ = toastServ;
        this.SimpleModalService = SimpleModalService;
        this.planListArray = [];
        this.intervals = [{
          key: "Monthly",
          value: "month"
        }];
      }

      _createClass(ManageplanComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminServ.setHeaderText("Manage Plans");
          this.getplans();
          this.savePlan = this.fb.group({
            amount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            interval: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            planname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            trialperiod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "openAddPlanPanel",
        value: function openAddPlanPanel(data) {
          if (data === "add") {
            this.isAddPlan = true;
            this.isEditPlan = false;
            this.headertext = "Add Plan";
            this.savePlan.get("interval").patchValue({
              key: "Monthly",
              value: "month"
            });
          } else if (data === "edit") {
            this.isEditPlan = true;
            this.headertext = "Edit Plan";
          }
        }
      }, {
        key: "deletePlan",
        value: function deletePlan(data) {
          var _this32 = this;

          this.SimpleModalService.addModal(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
          }).subscribe(function (isConfirmed) {
            if (isConfirmed === true) {
              _this32.isLoader = true;
              var dataToPass = {
                planid: data.plan_id,
                _id: data._id
              };

              _this32.adminServ.deletePlans(dataToPass).subscribe(function (data) {
                if (data["code"] === 200) {
                  _this32.getplans();

                  _this32.isAddPlan = false;
                  _this32.isEditPlan = false;
                  _this32.isLoader = false;

                  _this32.savePlan.reset();

                  _this32.toastServ.success("Plan Delete", "Success", {
                    timeOut: 1000
                  });
                } else {
                  _this32.isLoader = false;

                  _this32.toastServ.error("Failed To Delete", "Error", {
                    timeOut: 1000
                  });
                }
              }, function (error) {
                _this32.isLoader = false;

                _this32.toastServ.error("Server- Error", error.error["message"], {
                  timeOut: 1000
                });
              });
            }
          });
        }
      }, {
        key: "close",
        value: function close(data) {
          if (data === "add") {
            this.isAddPlan = false;
            this.savePlan.reset();
          } else if (data === "edit") {
            this.isEditPlan = false;
            this.savePlan.reset();
          }
        }
      }, {
        key: "add",
        value: function add(data) {
          var _this33 = this;

          this.isLoader = true;
          console.log("LOADER", this.isLoader);
          this.adminServ.addPlans(data).subscribe(function (data) {
            if (data["code"] === 200) {
              _this33.getplans();

              _this33.isAddPlan = false;
              _this33.isLoader = false;

              _this33.savePlan.reset();

              _this33.toastServ.success("Plan Added", "Success", {
                timeOut: 1000
              });
            } else {
              _this33.isLoader = false;

              _this33.toastServ.error("Failed To Add", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this33.toastServ.error("Server- Error", error.error["message"], {
              timeOut: 1000
            });

            _this33.isLoader = false;
          });
        }
      }, {
        key: "updatePlan",
        value: function updatePlan(data) {
          console.log(data);
          this.planID = data.plan_id;
          this._idPlan = data._id;
          this.isAddPlan = true;
          this.isEditPlan = true;
          this.savePlan.get("planname").setValue(data.id);
          this.savePlan.get("amount").setValue(data.amount);
          this.savePlan.get("interval").setValue(data.interval);
          this.savePlan.get("trialperiod").setValue(data.trial_period_days);
          console.log("OAL", this.planID);
        }
      }, {
        key: "update",
        value: function update(data) {
          var _this34 = this;

          console.log(data);
          this.isLoader = true;
          var dataToPass = {
            plan_id: this.planID,
            trial_period_days: data.trialperiod,
            amount: data.amount,
            _id: this._idPlan,
            id: data.planname,
            interval: data.interval
          };
          console.log("DATATOPASS", dataToPass);
          this.adminServ.editPlans(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this34.getplans();

              _this34.isLoader = false;
              _this34.isAddPlan = false;
              _this34.isEditPlan = false;

              _this34.savePlan.reset();

              _this34.toastServ.success("Plan Updated", "Success", {
                timeOut: 1000
              });
            } else {
              _this34.isLoader = false;

              _this34.toastServ.error("Failed To Update", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this34.isLoader = false;

            _this34.toastServ.error("Server- Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "getplans",
        value: function getplans() {
          var _this35 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "plans"
          };
          this.adminServ.getPlans(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this35.isLoader = false;
              _this35.planListArray = data["data"];

              if (_this35.planListArray.length === 0) {
                _this35.noRecordsFound = true;
              } else {
                _this35.noRecordsFound = false;
              }
            }
          });
        }
      }]);

      return ManageplanComponent;
    }();

    ManageplanComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__["SimpleModalService"]
      }];
    };

    ManageplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-manageplan",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manageplan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manageplan/manageplan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manageplan.component.scss */
      "./src/app/admin/admin-dashboard/manageplan/manageplan.component.scss"))["default"]]
    })], ManageplanComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/other/other.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/other/other.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardOtherOtherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".managePlanWrapper .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.managePlanWrapper .header .actionButtons {\n  display: flex;\n  align-items: center;\n}\n.managePlanWrapper .mainSection {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL290aGVyL290aGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvb3RoZXIvb3RoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9vdGhlci9vdGhlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYW5hZ2VQbGFuV3JhcHBlciB7XG4gIC5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLmFjdGlvbkJ1dHRvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICB9XG4gIC5tYWluU2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbiIsIi5tYW5hZ2VQbGFuV3JhcHBlciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5oZWFkZXIgLmFjdGlvbkJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5tYWluU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/other/other.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/other/other.component.ts ***!
    \****************************************************************/

  /*! exports provided: OtherComponent */

  /***/
  function srcAppAdminAdminDashboardOtherOtherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OtherComponent", function () {
      return OtherComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var _salon_dashboard_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../salon/dashboard/common.service */
    "./src/app/salon/dashboard/common.service.ts");

    var OtherComponent = /*#__PURE__*/function () {
      function OtherComponent(adminServ, common) {
        _classCallCheck(this, OtherComponent);

        this.adminServ = adminServ;
        this.common = common;
      }

      _createClass(OtherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminServ.setHeaderText("Others");
        }
      }]);

      return OtherComponent;
    }();

    OtherComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: _salon_dashboard_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }];
    };

    OtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-other",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./other.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/other/other.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./other.component.scss */
      "./src/app/admin/admin-dashboard/other/other.component.scss"))["default"]]
    })], OtherComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/roles/roles.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/roles/roles.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardRolesRolesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".rolesWrapper .actionButtons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rolesWrapper .actionButtons .headerTextArea {\n  width: 50%;\n}\n.rolesWrapper .actionButtons .btnActionArea {\n  width: 50%;\n  display: flex;\n  justify-content: flex-end;\n}\n.rolesWrapper .actionButtons .btnActionArea .btn-primary-btn {\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.rolesWrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rolesWrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n.rolesWrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.rolesWrapper .modalSection .modal-content-area form {\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n}\n.rolesWrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n}\n.rolesWrapper .confirmDialog {\n  position: absolute;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 1000;\n}\ntable {\n  width: 100%;\n}\n.btn-sec {\n  margin-bottom: 5px;\n}\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n.headerText {\n  font-size: 20px;\n  padding-bottom: 0;\n}\n.status-check {\n  width: 120px;\n}\n.buttonArea {\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n.buttonArea .disabledClass {\n  opacity: 0.2;\n  margin-left: 10px;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0FDQU47QURHSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNETjtBREVNO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9HQUFBO0FDQVI7QURNRTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FEQ0k7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ047QURDTTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FDQ1I7QURDTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ1I7QURBUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FDRVY7QURJRTtFQUNFLGtCQUFBO0VBQW9CLG1DQUFBO0VBQ3BCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUFzQyxrQ0FBQTtFQUN0QyxhQUFBO0FDRUo7QURJQTtFQUNFLFdBQUE7QUNGRjtBRElBO0VBQ0Usa0JBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RGO0FESUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNERjtBRElBO0VBQ0UsWUFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvbGVzV3JhcHBlciB7XG4gIC5hY3Rpb25CdXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmhlYWRlclRleHRBcmVhIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLmJ0bkFjdGlvbkFyZWEge1xuICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgLmJ0bi1wcmltYXJ5LWJ0biB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSlcbiAgICAgICAgICAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1vZGFsU2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNvbmZpcm1EaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMTAwMDtcbiAgICAubW9kYWwtY29udGVudC1zZWN0aW9uIHtcbiAgICB9XG4gIH1cbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tc2VjIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuLXNpZ24taW4ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLmhlYWRlclRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uYnV0dG9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gIC5kaXNhYmxlZENsYXNzIHtcbiAgICBvcGFjaXR5OiAwLjI7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxufVxuIiwiLnJvbGVzV3JhcHBlciAuYWN0aW9uQnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yb2xlc1dyYXBwZXIgLmFjdGlvbkJ1dHRvbnMgLmhlYWRlclRleHRBcmVhIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5yb2xlc1dyYXBwZXIgLmFjdGlvbkJ1dHRvbnMgLmJ0bkFjdGlvbkFyZWEge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnJvbGVzV3JhcHBlciAuYWN0aW9uQnV0dG9ucyAuYnRuQWN0aW9uQXJlYSAuYnRuLXByaW1hcnktYnRuIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbi5yb2xlc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5yb2xlc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5yb2xlc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIC5oZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnJvbGVzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ucm9sZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSBmb3JtIGxhYmVsIHtcbiAgd2lkdGg6IDQ1JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG4ucm9sZXNXcmFwcGVyIC5jb25maXJtRGlhbG9nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDEwMDA7XG59XG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLXNlYyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bi1zaWduLWluIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5oZWFkZXJUZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmJ1dHRvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5idXR0b25BcmVhIC5kaXNhYmxlZENsYXNzIHtcbiAgb3BhY2l0eTogMC4yO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/roles/roles.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/roles/roles.component.ts ***!
    \****************************************************************/

  /*! exports provided: RolesComponent */

  /***/
  function srcAppAdminAdminDashboardRolesRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RolesComponent", function () {
      return RolesComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var RolesComponent = /*#__PURE__*/function () {
      function RolesComponent(admnServ, toastrServ, fb, dialog) {
        _classCallCheck(this, RolesComponent);

        this.admnServ = admnServ;
        this.toastrServ = toastrServ;
        this.fb = fb;
        this.dialog = dialog;
        this.isAddModal = false;
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["name", "action"];
        this.disabled = true;
        this.popoverTitle = "Popover title";
        this.popoverMessage = "Popover description";
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.isDeleteDialog = false;
      }

      _createClass(RolesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.roleForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
          });
          this.fetchRoles();
          this.admnServ.setHeaderText("Manage Roles");
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          // console.log(event);
          this.page = event.pageIndex + 1; // console.log("c", this.count);
          // console.log("p", this.page);

          this.count = event.pageSize;
          this.fetchRoles();
        }
      }, {
        key: "confirm",
        value: function confirm(data) {
          this.isConfirm = data;
        }
      }, {
        key: "reject",
        value: function reject(data) {
          //console.log(data);
          this.isConfirm = data; // console.log(this.isConfirm);

          this.isDeleteDialog = false;
        }
      }, {
        key: "fetchRoles",
        value: function fetchRoles() {
          var _this36 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "roles",
            pageSize: this.count,
            page: this.page
          };
          this.admnServ.getRolesList(dataToPass).subscribe(function (data) {
            //   console.log(data);
            if (data["code"] == 200) {
              _this36.isLoader = false;
              _this36.rolesList = data["data"]["data"];
              _this36.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this36.rolesList);
              _this36.dataSource.sort = _this36.sort;
              _this36.rolesCount = data["data"]["count"];

              if (_this36.rolesList.length == 0) {
                _this36.noRecordsFound = true;
              }
            } else {
              _this36.isLoader = false;
              _this36.noRecordsFound = false;

              _this36.toastrServ.error("Failed To Fetch Roles", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this36.isLoader = false;

            _this36.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "openAddRolesModal",
        value: function openAddRolesModal(data) {
          if (data === "add") {
            this.modalHeaderText = "Add Role";
            this.isAdd = true;
          } else {
            this.roleForm.get("name").setValue(data.name);
            this.role_id = data._id;
            this.modalHeaderText = "Edit Role";
            this.isAdd = false;
          } // console.log(data);


          this.isAddModal = true;
        }
      }, {
        key: "deleteRole",
        value: function deleteRole(data) {
          var _this37 = this;

          var dataToPass = {
            role_id: data._id
          };
          this.admnServ.deleteRoles(dataToPass).subscribe(function (data) {
            //    console.log("INS ERE", data);
            if (data["code"] === 200) {
              _this37.toastrServ.success("Role Deleted", "Success", {
                timeOut: 1000
              });

              _this37.fetchRoles();
            } else {
              _this37.toastrServ.error("Failed To Delete", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this37.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.isAddModal = false;
          this.roleForm.reset();
        }
      }, {
        key: "saveRole",
        value: function saveRole(data) {
          var _this38 = this;

          var dataToPass = {
            role: data.name
          };
          this.admnServ.addRoles(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this38.isAddModal = false;

              _this38.roleForm.reset();

              _this38.toastrServ.success("Role Added", "Success", {
                timeOut: 1000
              });

              _this38.roleForm.reset();

              _this38.fetchRoles();
            } else {
              _this38.isAddModal = true;

              _this38.toastrServ.error("Failed To Add", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this38.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "updateRole",
        value: function updateRole(data) {
          var _this39 = this;

          //   console.log("N ", data);
          var dataToPass = {
            name: data.name,
            _id: this.role_id
          }; // console.log(dataToPass);

          this.admnServ.updateRoles(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this39.isAddModal = false;

              _this39.toastrServ.success("Role Updated", "Success", {
                timeOut: 1000
              });

              _this39.roleForm.reset();

              _this39.fetchRoles();
            } else {
              _this39.isAddModal = true;

              _this39.toastrServ.error("Failed To Update", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            //   console.log(error.error);
            _this39.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }]);

      return RolesComponent;
    }();

    RolesComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": false
    })], RolesComponent.prototype, "sort", void 0);
    RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-roles",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./roles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/roles/roles.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./roles.component.scss */
      "./src/app/admin/admin-dashboard/roles/roles.component.scss"))["default"]]
    })], RolesComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/salonlist/salonlist.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/salonlist/salonlist.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardSalonlistSalonlistComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.btn-sus {\n  margin-bottom: 5px;\n  font-size: 11px;\n  width: 50px;\n}\n\n.buttonArea {\n  display: flex;\n  justify-content: space-between;\n}\n\n.headerSection {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.headerSection .header {\n  color: purple;\n}\n\n.status-check {\n  width: 10%;\n}\n\n.status-check:nth-child(2) {\n  width: 25%;\n}\n\n.status-check:nth-child(1) {\n  width: 20%;\n}\n\n.suspend-sec {\n  width: 20%;\n  margin-left: 10px;\n}\n\n.actionArea {\n  display: flex;\n  align-items: center;\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.userDetailsOverlay .main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n\n.userDetailsOverlay .main-section-area .header {\n  border-bottom: 1px solid lightgray;\n}\n\n.userDetailsOverlay .main-section-area .main-section {\n  margin-top: 10px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row label {\n  width: 20%;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.countShow {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.countShow h1 {\n  width: 200px;\n  height: 200px;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  border: 10px solid purple;\n  border-radius: 100px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3NhbG9ubGlzdC9zYWxvbmxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9zYWxvbmxpc3Qvc2Fsb25saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0VGOztBREFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREhFO0VBQ0UsYUFBQTtBQ0tKOztBREZBO0VBQ0UsVUFBQTtBQ0tGOztBREhBO0VBQ0UsVUFBQTtBQ01GOztBREpBO0VBQ0UsVUFBQTtBQ09GOztBRExBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0FDUUY7O0FETkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNTRjs7QURTQTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFFakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0hGOztBRElFO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREdJO0VBQ0Usa0NBQUE7QUNETjs7QURHSTtFQUNFLGdCQUFBO0FDRE47O0FERU07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FSOztBRENRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDQ1Y7O0FEQ1E7RUFDRSxVQUFBO0FDQ1Y7O0FEQ1E7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NWOztBREVNO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQ0FSOztBRFFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ05GOztBRFNBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDTkY7O0FEU0E7RUFDRSxhQUFBO0FDTkY7O0FEU0E7RUFDRTtJQUNFLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQ05GOztFRFFBO0lBQ0Usa0JBQUE7RUNMRjs7RURPQTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ0pGOztFRE1BO0lBQ0UsV0FBQTtFQ0hGOztFREtBO0lBQ0UsYUFBQTtFQ0ZGOztFREtBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDRkY7QUFDRjs7QURJQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRkY7O0FER0U7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvc2Fsb25saXN0L3NhbG9ubGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXN1cyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB3aWR0aDogNTBweDtcbn1cbi5idXR0b25BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhlYWRlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC5oZWFkZXIge1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cbn1cbi5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogMTAlO1xufVxuLnN0YXR1cy1jaGVjazpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMjUlO1xufVxuLnN0YXR1cy1jaGVjazpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMjAlO1xufVxuLnN1c3BlbmQtc2VjIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYWN0aW9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc3RhdHVzLWNoZWNrLWFjdGlvbiB7XG59XG4vLyAubm9SZWNvcmRze1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgICAubm9SZWN7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIGNvbG9yOiAjNzIxYzI0O1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4vLyAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbi8vICAgICBwYWRkaW5nOiAyZW07XG4vLyAgICAgd2lkdGg6IDUwJTtcbi8vICAgICB9XG5cbi8vIH1cbi51c2VyRGV0YWlsc092ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAvL2Rpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLmhlYWRlciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cbiAgICAubWFpbi1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAuZmllbGQtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAucHJvZmlsZVBpYyB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaW1nIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4tQXJlYSB7XG4gICAgfVxuICB9XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW9iaWxlLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtbGFiZWwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmNvdW50U2hvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoMSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMTBweCBzb2xpZCBwdXJwbGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1zdXMge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5idXR0b25BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaGVhZGVyU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5oZWFkZXJTZWN0aW9uIC5oZWFkZXIge1xuICBjb2xvcjogcHVycGxlO1xufVxuXG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLnN0YXR1cy1jaGVjazpudGgtY2hpbGQoMikge1xuICB3aWR0aDogMjUlO1xufVxuXG4uc3RhdHVzLWNoZWNrOm50aC1jaGlsZCgxKSB7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5zdXNwZW5kLXNlYyB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYWN0aW9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi51c2VyRGV0YWlsc092ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IC5wcm9maWxlUGljIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cgbGFiZWwge1xuICB3aWR0aDogMjAlO1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IC5kZXRhaWxzIHtcbiAgd2lkdGg6IDc1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuaW1nIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3VzcGVuZC1zZWMge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmNvdW50U2hvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvdW50U2hvdyBoMSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMTBweCBzb2xpZCBwdXJwbGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts ***!
    \************************************************************************/

  /*! exports provided: SalonlistComponent */

  /***/
  function srcAppAdminAdminDashboardSalonlistSalonlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SalonlistComponent", function () {
      return SalonlistComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services */
    "./src/app/services/index.ts");

    var SalonlistComponent = /*#__PURE__*/function () {
      function SalonlistComponent(adminServ, toastrServ, geocoder) {
        _classCallCheck(this, SalonlistComponent);

        this.adminServ = adminServ;
        this.toastrServ = toastrServ;
        this.geocoder = geocoder;
        this.displayedColumns = ["name", "salonaddress", "contact", "opentime", "closetime", "action"];
        this.limit = 0;
        this.count = 5;
        this.pageSize = 5;
        this.page = 1;
        this.disabled = true;
        this.showSalonDetail = false;
      }

      _createClass(SalonlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getActiveSalonsList();
          this.getActiveSalonsCount();
          this.adminServ.setHeaderText("Manage Salons");
        }
        /**
         * Function is use to Fetch Active salons list
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "getActiveSalonsList",
        value: function getActiveSalonsList() {
          var _this40 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "activesalons",
            pageSize: this.count,
            page: this.page
          };
          this.adminServ.getSalonsList(dataToPass).subscribe(function (data) {
            // console.log(data);
            // console.log("SalonsList", data["data"]);
            if (data["code"] === 200) {
              _this40.isLoader = false;
              _this40.activeSalons = data["data"];
              _this40.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this40.activeSalons);
              _this40.dataSource.sort = _this40.sort;

              if (_this40.activeSalons.length == 0) {
                _this40.noRecordsFound = true;
              } else {
                _this40.noRecordsFound = false;
              }
            } else {
              _this40.isLoader = false;

              _this40.toastrServ.error("Failed To Fetch Salons", "Failed", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this40.isLoader = false;

            _this40.toastrServ.success("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "getActiveSalonsCount",
        value: function getActiveSalonsCount() {
          var _this41 = this;

          var dataToPass = {
            type: "salon"
          };
          this.adminServ.getActiveSalonsCount(dataToPass).subscribe(function (data) {
            //  console.log("DATA", data);
            if (data["code"] == 200) {
              _this41.ActiveSalonsCount = data["data"]; //   console.log("ACTIVE SALONS COUNT", this.ActiveSalonsCount);
            }
          }, function (error) {
            _this41.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          //  console.log(event);
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.getActiveSalonsList();
        }
      }, {
        key: "showSalonDetails",
        value: function showSalonDetails(data) {
          var _this42 = this;

          this.isLoader = true; // console.log(data);

          var dataToPass = {
            salon_id: data._id
          };
          this.adminServ.getSalonDetails(dataToPass).subscribe(function (data) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this42, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(data["code"] === 200)) {
                        _context.next = 11;
                        break;
                      }

                      this.showSalonDetail = true;
                      this.isLoader = false;
                      this.salonDetails = data["data"]["salondetail"];
                      this.salonEmail = data["data"]["email"];
                      _context.next = 7;
                      return this.loadCoordinates(data.data.salondetail);

                    case 7:
                      this.salonDetails.location = _context.sent;

                      if (this.salonDetails["image"] === null) {
                        this.salonDetails["image"] = "../../../assets/images/profilepic.png";
                      }

                      _context.next = 13;
                      break;

                    case 11:
                      this.isLoader = false;
                      this.toastrServ.error("Failed To Fetch User Details", "Error", {
                        timeOut: 1000
                      });

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          });
        }
      }, {
        key: "closeSalonDetails",
        value: function closeSalonDetails() {
          this.showSalonDetail = false;
          this.isCountShow = false;
        }
      }, {
        key: "getMontlyUser",
        value: function getMontlyUser(data) {
          var _this43 = this;

          if (data) {
            var dataToPass = {
              salon_id: data["_id"]
            };
            this.adminServ.getMonthlyUsersCount(dataToPass).subscribe(function (data) {
              if (data.code === 200) {
                _this43.monthlyUserCount = data.data;
                _this43.showSalonDetail = true;
                _this43.isCountShow = true;
              } else if (data.code == 400) {
                _this43.toastrServ.error(data.message, "", {
                  timeOut: 1000
                });
              }
            }, function (error) {
              _this43.toastrServ.error(error.message, "", {
                timeOut: 1000
              });
            });
          }
        }
      }, {
        key: "declineSalonRequest",
        value: function declineSalonRequest(data) {
          var _this44 = this;

          this.isLoader = true; // console.log("ApproveFor", data);

          var dataToPass = {
            salon_id: data._id
          };
          this.adminServ.declineSalonRequest(dataToPass).subscribe(function (data) {
            // console.log("FFFF", data);
            if (data["code"] === 200) {
              _this44.isLoader = false;

              _this44.toastrServ.success("Salon Declined Successfully", "", {
                timeOut: 3000
              });

              _this44.getActiveSalonsList();

              _this44.getActiveSalonsCount();
            } else {
              _this44.isLoader = false;

              _this44.toastrServ.error("Failed To Decline", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this44.isLoader = false;

            _this44.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "loadCoordinates",
        value: function loadCoordinates(salon) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _salon$location$coord, longitude, latitude, location;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _salon$location$coord = _slicedToArray(salon.location.coordinates, 2), longitude = _salon$location$coord[0], latitude = _salon$location$coord[1];
                    _context2.next = 3;
                    return this.geocoder.getLocationByCoords(latitude, longitude);

                  case 3:
                    location = _context2.sent;
                    return _context2.abrupt("return", location);

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SalonlistComponent;
    }();

    SalonlistComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["GeocoderService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": false
    })], SalonlistComponent.prototype, "sort", void 0);
    SalonlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-salonlist",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./salonlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./salonlist.component.scss */
      "./src/app/admin/admin-dashboard/salonlist/salonlist.component.scss"))["default"]]
    })], SalonlistComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/services/services.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/services/services.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardServicesServicesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".servicesWrapper .headerSection {\n  display: flex;\n  justify-content: space-between;\n}\n.servicesWrapper .headerSection .actionBtn {\n  padding-right: 10px;\n}\n.servicesWrapper .addServiceModal {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.servicesWrapper .addServiceModal .modalContent {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n.servicesWrapper .addServiceModal .modalContent .headerText {\n  border-bottom: 1px solid lightgray;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields .label {\n  width: 30%;\n  white-space: nowrap;\n  margin-right: 10px;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields .selectOption {\n  width: 65%;\n  padding: 10px !important;\n  background: transparent;\n  box-shadow: none;\n  border: 1px solid #ced4da;\n  margin-right: 0;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields .pls {\n  width: 65% !important;\n  margin-left: 4px;\n}\n.selectOption {\n  margin-left: 15px;\n  width: 60%;\n  padding: 5px;\n  border-radius: 35px;\n}\ntable {\n  width: 100%;\n}\n.status-check {\n  width: 120px;\n}\n.headerText h3 {\n  font-size: 20px;\n  padding-bottom: 0;\n}\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n.serviceForm {\n  margin-top: 15px;\n}\n.buttonArea {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.buttonArea .editBtn {\n  margin-left: 10px;\n}\n.btnService {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNBSjtBRENJO0VBQ0UsbUJBQUE7QUNDTjtBREVFO0VBQ0UsZUFBQTtFQUFpQixtQ0FBQTtFQUVqQixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDR0o7QURGSTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNJTjtBREZNO0VBQ0Usa0NBQUE7QUNJUjtBREFVO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBRUEsZUFBQTtBQ0NaO0FEQVk7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VkO0FEQVk7RUFDRSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDRWQ7QURBWTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFZDtBRE1BO0VBQ0UsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSEY7QURNQTtFQUNFLFdBQUE7QUNIRjtBRE1BO0VBQ0UsWUFBQTtBQ0hGO0FES0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNGRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZGO0FESUE7RUFDRSxnQkFBQTtBQ0RGO0FESUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0RGO0FERUU7RUFDRSxpQkFBQTtBQ0FKO0FER0E7RUFDRSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VydmljZXNXcmFwcGVyIHtcbiAgLmhlYWRlclNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5hY3Rpb25CdG4ge1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICB9XG4gIH1cbiAgLmFkZFNlcnZpY2VNb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICAvL2Rpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLm1vZGFsQ29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgLmhlYWRlclRleHQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgfVxuICAgICAgLm1haW5TZWN0aW9uIHtcbiAgICAgICAgLnNlcnZpY2VGb3JtIHtcbiAgICAgICAgICAuZmllbGRzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlbGVjdE9wdGlvbiB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5wbHMge1xuICAgICAgICAgICAgICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uc2VsZWN0T3B0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5oZWFkZXJUZXh0IGgzIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmJ0bi1zaWduLWluIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4uc2VydmljZUZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYnV0dG9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgLmVkaXRCdG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG59XG4uYnRuU2VydmljZSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiIsIi5zZXJ2aWNlc1dyYXBwZXIgLmhlYWRlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uc2VydmljZXNXcmFwcGVyIC5oZWFkZXJTZWN0aW9uIC5hY3Rpb25CdG4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnNlcnZpY2VzV3JhcHBlciAuYWRkU2VydmljZU1vZGFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNlcnZpY2VzV3JhcHBlciAuYWRkU2VydmljZU1vZGFsIC5tb2RhbENvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnNlcnZpY2VzV3JhcHBlciAuYWRkU2VydmljZU1vZGFsIC5tb2RhbENvbnRlbnQgLmhlYWRlclRleHQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnNlcnZpY2VzV3JhcHBlciAuYWRkU2VydmljZU1vZGFsIC5tb2RhbENvbnRlbnQgLm1haW5TZWN0aW9uIC5zZXJ2aWNlRm9ybSAuZmllbGRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLnNlcnZpY2VzV3JhcHBlciAuYWRkU2VydmljZU1vZGFsIC5tb2RhbENvbnRlbnQgLm1haW5TZWN0aW9uIC5zZXJ2aWNlRm9ybSAuZmllbGRzIC5sYWJlbCB7XG4gIHdpZHRoOiAzMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5zZXJ2aWNlc1dyYXBwZXIgLmFkZFNlcnZpY2VNb2RhbCAubW9kYWxDb250ZW50IC5tYWluU2VjdGlvbiAuc2VydmljZUZvcm0gLmZpZWxkcyAuc2VsZWN0T3B0aW9uIHtcbiAgd2lkdGg6IDY1JTtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuLnNlcnZpY2VzV3JhcHBlciAuYWRkU2VydmljZU1vZGFsIC5tb2RhbENvbnRlbnQgLm1haW5TZWN0aW9uIC5zZXJ2aWNlRm9ybSAuZmllbGRzIC5wbHMge1xuICB3aWR0aDogNjUlICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5zZWxlY3RPcHRpb24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgd2lkdGg6IDYwJTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uaGVhZGVyVGV4dCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5idG4tc2lnbi1pbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2VydmljZUZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uYnV0dG9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5idXR0b25BcmVhIC5lZGl0QnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5idG5TZXJ2aWNlIHtcbiAgd2lkdGg6IDEwMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/services/services.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/services/services.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppAdminAdminDashboardServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../confirmation/confirmation.component */
    "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ServicesComponent = /*#__PURE__*/function () {
      function ServicesComponent(adminServ, toastrServ, fb, SimpleModalService) {
        _classCallCheck(this, ServicesComponent);

        this.adminServ = adminServ;
        this.toastrServ = toastrServ;
        this.fb = fb;
        this.SimpleModalService = SimpleModalService;
        this.noRecordsFound = false;
        this.isLoader = false;
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["name", "action"];
        this.disabled = true;
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.saveServiceForm = this.fb.group({
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
          this.adminServ.setHeaderText("Manage Services");
          this.fetchCategoriesList();
          this.fetchAllServices();
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "updateData",
        value: function updateData(data) {
          var _this45 = this;

          this.isLoader = true;
          var dataToPass = {
            service_id: this.serviceID,
            name: data.name
          };
          this.adminServ.updateService(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this45.fetchAllServices();

              _this45.toastrServ.success(data["message"], "Sucess", {
                timeOut: 500
              });

              _this45.addServiceModal = false;
              _this45.isLoader = false;

              _this45.saveServiceForm.reset();
            } else if (data["code"] === 200) {
              _this45.toastrServ.error(data["message"], "Error", {
                timeOut: 500
              });

              _this45.isLoader = false;
            }
          }, function (error) {
            _this45.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 500
            });

            _this45.isLoader = false;
          });
        }
      }, {
        key: "updateService",
        value: function updateService(data) {
          this.openAddServiceModal(data);
        }
      }, {
        key: "fetchCategoriesList",
        value: function fetchCategoriesList() {
          var _this46 = this;

          var dataToPass = {
            type: "categories"
          };
          this.adminServ.getCategories(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              // console.log("data", data);
              _this46.adminCategoriesCount = data["data"]["count"];

              if (data["data"].length === 0) {
                _this46.showNoRecords(true);
              }

              if (data["data"].length > 0) {
                _this46.showNoRecords(false);

                _this46.categoriesList = data["data"];
              }
            } else {
              _this46.toastrServ.error("Failed To Fetch", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this46.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "showNoRecords",
        value: function showNoRecords(data) {
          this.noRecordsFound = data;
        }
      }, {
        key: "openAddServiceModal",
        value: function openAddServiceModal(data) {
          if (data === "add") {
            this.action = "Add";
            this.addServiceModal = true;
            this.isShowUpdate = false;
          } else {
            this.action = "Edit";
            this.isShowUpdate = true;
            this.serviceData = data;
            this.saveServiceForm.get("category").setValidators(null);
            this.saveServiceForm.updateValueAndValidity();
            this.addServiceModal = true;
            this.serviceID = data["_id"];
            this.saveServiceForm.get("name").setValue(data.name);
          }
        }
      }, {
        key: "deleteService",
        value: function deleteService(data) {
          var _this47 = this;

          this.SimpleModalService.addModal(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
          }).subscribe(function (isConfirmed) {
            // Get modal result
            if (isConfirmed === true) {
              var dataToPass = {
                service_id: data._id
              };

              _this47.adminServ.removeServices(dataToPass).subscribe(function (data) {
                if (data["code"] == 200) {
                  _this47.toastrServ.success("Service Deleted", "Success", {
                    timeOut: 1000,
                    progressAnimation: "decreasing"
                  });

                  _this47.fetchAllServices();
                } else {
                  _this47.toastrServ.error("Failed To Delete", "Error", {
                    timeOut: 1000,
                    progressAnimation: "decreasing"
                  });
                }
              }, function (error) {
                _this47.toastrServ.error("Server Error", error.error["message"], {
                  timeOut: 1000,
                  progressAnimation: "decreasing"
                });
              });
            }
          });
        }
      }, {
        key: "addService",
        value: function addService(data) {
          var _this48 = this;

          this.isLoader = true;
          var dataToPass = {
            category_id: data.category,
            name: data.name
          };
          this.adminServ.addServices(dataToPass).subscribe(function (data) {
            if (data["code"] == 200) {
              _this48.toastrServ.success("Service Added", "Success", {
                timeOut: 1000,
                progressAnimation: "decreasing"
              });

              _this48.isLoader = false;
              _this48.addServiceModal = false;

              _this48.saveServiceForm.reset();

              _this48.fetchAllServices();
            } else {
              _this48.toastrServ.error("Failed To Add", "Error", {
                timeOut: 1000,
                progressAnimation: "decreasing"
              });

              _this48.isLoader = false;
            }
          }, function (error) {
            _this48.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000,
              progressAnimation: "decreasing"
            });

            _this48.isLoader = false;
          });
        }
      }, {
        key: "dismissModal",
        value: function dismissModal() {
          this.addServiceModal = false;
          this.saveServiceForm.reset();
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.fetchAllServices();
        }
      }, {
        key: "fetchAllServices",
        value: function fetchAllServices() {
          var _this49 = this;

          var dataToPass = {
            type: "services",
            pageSize: this.count,
            page: this.page
          };
          this.adminServ.getServices(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this49.servicesList = data["data"]["data"];
              _this49.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this49.servicesList);
              _this49.dataSource.sort = _this49.sort;
              _this49.servicesCount = data["data"]["count"];

              if (data["data"]["data"].length == 0) {
                _this49.noRecordsFound = true;
              } else {
                _this49.noRecordsFound = false;
              } // this.toastrServ.success("Fetched Services", "Success", {
              //   timeOut: 1000
              // });

            } else {
              _this49.toastrServ.error("Failed to fetch", "Error", {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this49.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__["SimpleModalService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], {
      "static": false
    })], ServicesComponent.prototype, "sort", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-services",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./services.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/services/services.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./services.component.scss */
      "./src/app/admin/admin-dashboard/services/services.component.scss"))["default"]]
    })], ServicesComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.scss":
  /*!******************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.scss ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardSubcriptionsListSubcriptionsListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3N1YmNyaXB0aW9ucy1saXN0L3N1YmNyaXB0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvc3ViY3JpcHRpb25zLWxpc3Qvc3ViY3JpcHRpb25zLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvc3ViY3JpcHRpb25zLWxpc3Qvc3ViY3JpcHRpb25zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcbiAgICB3aWR0aDogMTAwJTtcblxufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: SubcriptionsListComponent */

  /***/
  function srcAppAdminAdminDashboardSubcriptionsListSubcriptionsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubcriptionsListComponent", function () {
      return SubcriptionsListComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var SubcriptionsListComponent = /*#__PURE__*/function () {
      function SubcriptionsListComponent(adminServ, toastServ) {
        _classCallCheck(this, SubcriptionsListComponent);

        this.adminServ = adminServ;
        this.toastServ = toastServ;
        this.displayedColumns = ["name", "startdate", "enddate"];
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
      }

      _createClass(SubcriptionsListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.adminServ.setHeaderText("Salons Subscribed List");
          this.getSubscribedSalonsList();
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          //console.log(event);
          this.page = event.pageIndex + 1; //  console.log("c", this.count);
          // console.log("p", this.page);

          this.count = event.pageSize;
          this.getSubscribedSalonsList();
        }
      }, {
        key: "getSubscribedSalonsList",
        value: function getSubscribedSalonsList() {
          var _this50 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "subscriptions",
            pageSize: this.count,
            page: this.page
          };
          this.adminServ.getSalonSubscriptionList(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this50.isLoader = false;
              _this50.salonSubscriptionsList = data["data"]["salons"];

              if (_this50.salonSubscriptionsList.length === 0) {
                _this50.noRecordsFound = true;
              } else {
                _this50.noRecordsFound = false;
              }

              _this50.salonSubscriptionsList.forEach(function (c) {
                var months_arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                var expiryDate = new Date(c.expiry_date * 1000);
                var expiry_year = expiryDate.getFullYear();
                var expiry_month = months_arr[expiryDate.getMonth()];
                var expiry_date = expiryDate.getDate();
                var finalExpiryDate = expiry_date + "-" + expiry_month + "-" + expiry_year;
                var susbcribedDate = new Date(c.created_on * 1000);
                var subscribe_year = susbcribedDate.getFullYear();
                var subscribe_month = months_arr[susbcribedDate.getMonth()];
                var subscribe_date = susbcribedDate.getDate();
                var finalSubscribedDate = subscribe_date + "-" + subscribe_month + "-" + subscribe_year;
                c.created_on = finalSubscribedDate;
                c.expiry_date = finalExpiryDate;
              });

              _this50.convertedSalonSubscriptionList = _this50.salonSubscriptionsList;
              _this50.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this50.convertedSalonSubscriptionList);
              _this50.dataSource.sort = _this50.sort;
              _this50.salonSubscriptionCount = data["data"]["count"];
            } else if (data["code"] === 400) {
              _this50.isLoader = false;

              _this50.toastServ.error("Failed to fetch", data["message"], {
                timeOut: 1000
              });
            }
          }, function (error) {
            _this50.isLoader = false;

            _this50.toastServ.error("Server- Error", error.error["message"], {
              timeOut: 1000
            });
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return SubcriptionsListComponent;
    }();

    SubcriptionsListComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": false
    })], SubcriptionsListComponent.prototype, "sort", void 0);
    SubcriptionsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-subcriptions-list",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subcriptions-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subcriptions-list.component.scss */
      "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.scss"))["default"]]
    })], SubcriptionsListComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/userlist/userlist.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/userlist/userlist.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminDashboardUserlistUserlistComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.btn-sus {\n  margin-bottom: 5px;\n}\n\n.UserListWrapper {\n  margin-top: 5px;\n}\n\n.headerSection {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.headerSection .header {\n  color: purple;\n}\n\n.suspend-sec {\n  width: 20%;\n  margin-left: 10px;\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.userDetailsOverlay .main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n\n.userDetailsOverlay .main-section-area .header {\n  border-bottom: 1px solid lightgray;\n}\n\n.userDetailsOverlay .main-section-area .main-section {\n  margin-top: 10px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row label {\n  width: 20%;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvdXNlcmxpc3QvdXNlcmxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURIRTtFQUNFLGFBQUE7QUNLSjs7QUREQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUFpQixtQ0FBQTtFQUVqQixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDT0Y7O0FETkU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDUUo7O0FEUEk7RUFDRSxrQ0FBQTtBQ1NOOztBRFBJO0VBQ0UsZ0JBQUE7QUNTTjs7QURSTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDVVI7O0FEVFE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNXVjs7QURUUTtFQUNFLFVBQUE7QUNXVjs7QURUUTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDV1Y7O0FEUk07RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FDVVI7O0FERkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FEREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QUREQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDSUY7O0VERkE7SUFDRSxrQkFBQTtFQ0tGOztFREhBO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VDTUY7O0VESkE7SUFDRSxXQUFBO0VDT0Y7O0VETEE7SUFDRSxhQUFBO0VDUUY7O0VETEE7SUFDRSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUNRRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idG4tc3VzIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLlVzZXJMaXN0V3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXJTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAuaGVhZGVyIHtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG59XG5cbi5zdXNwZW5kLXNlYyB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udXNlckRldGFpbHNPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgLy9kaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5tYWluLXNlY3Rpb24tYXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIC5oZWFkZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB9XG4gICAgLm1haW4tc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgLmZpZWxkLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLnByb2ZpbGVQaWMge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmltZyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRuLUFyZWEge1xuICAgIH1cbiAgfVxufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuICB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc3VzcGVuZC1zZWMge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG4gIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tc3VzIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uVXNlckxpc3RXcmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uaGVhZGVyU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5oZWFkZXJTZWN0aW9uIC5oZWFkZXIge1xuICBjb2xvcjogcHVycGxlO1xufVxuXG4uc3VzcGVuZC1zZWMge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnVzZXJEZXRhaWxzT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cgLnByb2ZpbGVQaWMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyBsYWJlbCB7XG4gIHdpZHRoOiAyMCU7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cgLmRldGFpbHMge1xuICB3aWR0aDogNzUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5pbWcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW9iaWxlLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtbGFiZWwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG5cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG5cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cblxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/admin/admin-dashboard/userlist/userlist.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/admin/admin-dashboard/userlist/userlist.component.ts ***!
    \**********************************************************************/

  /*! exports provided: UserlistComponent */

  /***/
  function srcAppAdminAdminDashboardUserlistUserlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserlistComponent", function () {
      return UserlistComponent;
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


    var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../admin-serv.service */
    "./src/app/admin/admin-dashboard/admin-serv.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var UserlistComponent = /*#__PURE__*/function () {
      function UserlistComponent(adminServ, toastrServ) {
        _classCallCheck(this, UserlistComponent);

        this.adminServ = adminServ;
        this.toastrServ = toastrServ;
        this.noRecordsFound = false;
        this.userDetailHeaderText = "User Details";
        this.displayedColumns = ["firstName", "lastName", "email", "phone", "action"];
        this.limit = 0;
        this.count = 5;
        this.pageSize = 5;
        this.page = 1;
        this.disabled = true;
      }

      _createClass(UserlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getActiveUsersList();
          this.getActiveUsersCount();
          this.adminServ.setHeaderText("Manage Users");
        }
      }, {
        key: "getActiveUsersList",
        value: function getActiveUsersList() {
          var _this51 = this;

          this.isLoader = true;
          var dataToPass = {
            type: "user",
            pageSize: this.count,
            page: this.page
          };
          this.adminServ.getActiveUsersList(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this51.isLoader = false;
              _this51.activeUsersList = data["data"];
              _this51.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this51.activeUsersList);
              _this51.dataSource.sort = _this51.sort;

              if (_this51.activeUsersList.length == 0) {
                _this51.noRecordsFound = true;
              } else {
                _this51.noRecordsFound = false;
              }
            } else {
              _this51.isLoader = false;

              _this51.toastrServ.error("Failed To Fetch Users List", "", {
                timeOut: 2000
              });
            }
          }, function (error) {
            _this51.isLoader = false;

            _this51.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 2000
            });
          });
        }
      }, {
        key: "closeUserDetail",
        value: function closeUserDetail() {
          this.showUserDetails = false;
          this.userDetails = null;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(event) {
          console.log(event);
          var filterValue = event.target.value;
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "viewUserDetails",
        value: function viewUserDetails(data) {
          var _this52 = this;

          this.isLoader = true;
          var dataToPass = {
            user_id: data._id
          };
          this.adminServ.getUserDetails(dataToPass).subscribe(function (data) {
            if (data["code"] === 200) {
              _this52.isLoader = false;
              _this52.showUserDetails = true;
              _this52.userDetails = data["data"];

              if (_this52.userDetails["profilepic"] === null) {
                _this52.userDetails.profilepic = "../../../assets/images/profilepic.png";
              }
            } else {
              _this52.isLoader = false;

              _this52.toastrServ.error("Failed To Fetch User Details", "Error", {
                timeOut: 2000
              });
            }
          });
        }
      }, {
        key: "getActiveUsersCount",
        value: function getActiveUsersCount() {
          var _this53 = this;

          var dataToPass = {
            type: "user"
          };
          this.adminServ.getActiveUsersCount(dataToPass).subscribe(function (data) {
            //   console.log("DATA", data);
            if (data["code"] == 200) {
              _this53.ActiveUsersCount = data["data"]; //   console.log("ACTIVE USERS COUNT", this.ActiveUsersCount);
            }
          }, function (error) {
            _this53.toastrServ.error("Server Error", error.error["message"], {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "paginate",
        value: function paginate(event) {
          //  console.log(event);
          this.page = event.pageIndex + 1;
          this.count = event.pageSize;
          this.getActiveUsersList();
        }
      }]);

      return UserlistComponent;
    }();

    UserlistComponent.ctorParameters = function () {
      return [{
        type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], {
      "static": false
    })], UserlistComponent.prototype, "sort", void 0);
    UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-userlist",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./userlist.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./userlist.component.scss */
      "./src/app/admin/admin-dashboard/userlist/userlist.component.scss"))["default"]]
    })], UserlistComponent);
    /***/
  },

  /***/
  "./src/app/admin/admin-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/admin/admin-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
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


    var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./adminlogin/adminlogin.component */
    "./src/app/admin/adminlogin/adminlogin.component.ts");
    /* harmony import */


    var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../admin/auth.service */
    "./src/app/admin/auth.service.ts");
    /* harmony import */


    var _admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../admin/auth.guard */
    "./src/app/admin/auth.guard.ts");
    /* harmony import */


    var _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-dashboard/salonlist/salonlist.component */
    "./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts");
    /* harmony import */


    var _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-dashboard/userlist/userlist.component */
    "./src/app/admin/admin-dashboard/userlist/userlist.component.ts");
    /* harmony import */


    var _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin-dashboard/dashboard/dashboard.component */
    "./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin-dashboard/categories/categories.component */
    "./src/app/admin/admin-dashboard/categories/categories.component.ts");
    /* harmony import */


    var _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin-dashboard/services/services.component */
    "./src/app/admin/admin-dashboard/services/services.component.ts");
    /* harmony import */


    var _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin-dashboard/roles/roles.component */
    "./src/app/admin/admin-dashboard/roles/roles.component.ts");
    /* harmony import */


    var _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-dashboard/manage-admin/manage-admin.component */
    "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts");
    /* harmony import */


    var _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin-dashboard/manageplan/manageplan.component */
    "./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts");
    /* harmony import */


    var _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin-dashboard/subcriptions-list/subcriptions-list.component */
    "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts");
    /* harmony import */


    var _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-dashboard/details/details.component */
    "./src/app/admin/admin-dashboard/details/details.component.ts");
    /* harmony import */


    var _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-dashboard/booking-details/booking-details.component */
    "./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts");
    /* harmony import */


    var _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-dashboard/other/other.component */
    "./src/app/admin/admin-dashboard/other/other.component.ts"); // const routes: Routes = [{path:'',component:AdminloginComponent},
    // {path:'home',component:AdminDashboardComponent,canActivate:[AuthGuard],children: [{path:'userlist',loadChildren:() => import('../admin/admin-dashboard/users-list/users-list.module').then(m=>m.UsersListModule)},
    // {path:'salonlist',loadChildren:() => import('../admin/admin-dashboard/salons-list/salons-list.module').then(m=>m.SalonsListModule)},
    // {path:'',redirectTo:'salonlist',pathMatch:'full'}]}
    // ];


    var routes = [{
      path: "",
      component: _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_3__["AdminloginComponent"]
    }, {
      path: "home",
      component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"],
      canActivate: [_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      children: [{
        path: "salons",
        component: _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_7__["SalonlistComponent"]
      }, {
        path: "users",
        component: _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"]
      }, {
        path: "dashboard",
        component: _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
      }, {
        path: "services",
        component: _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"]
      }, {
        path: "categories",
        component: _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"]
      }, {
        path: "roles",
        component: _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_12__["RolesComponent"]
      }, {
        path: "detail",
        component: _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_16__["DetailsComponent"]
      }, {
        path: "manage-plan",
        component: _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_14__["ManageplanComponent"]
      }, {
        path: "bookings",
        component: _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_17__["BookingDetailsComponent"]
      }, {
        path: "other",
        component: _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_18__["OtherComponent"]
      }, {
        path: "subscribed-salons",
        component: _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_15__["SubcriptionsListComponent"]
      }, // { path: "location", component: ConfirmationComponent },
      {
        path: "manage-admin",
        component: _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_13__["ManageAdminComponent"]
      }, {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }]
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      providers: [_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/admin/admin.module.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/admin.module.ts ***!
    \***************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-notifier */
    "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
    /* harmony import */


    var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-simple-modal */
    "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/admin/admin-routing.module.ts");
    /* harmony import */


    var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./adminlogin/adminlogin.component */
    "./src/app/admin/adminlogin/adminlogin.component.ts");
    /* harmony import */


    var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin-dashboard/admin-dashboard.component */
    "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
    /* harmony import */


    var _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin-dashboard/userlist/userlist.component */
    "./src/app/admin/admin-dashboard/userlist/userlist.component.ts");
    /* harmony import */


    var _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin-dashboard/salonlist/salonlist.component */
    "./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts");
    /* harmony import */


    var _admin_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./admin-dashboard/header/header.component */
    "./src/app/admin/admin-dashboard/header/header.component.ts");
    /* harmony import */


    var _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./admin-dashboard/dashboard/dashboard.component */
    "./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin-dashboard/categories/categories.component */
    "./src/app/admin/admin-dashboard/categories/categories.component.ts");
    /* harmony import */


    var _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin-dashboard/services/services.component */
    "./src/app/admin/admin-dashboard/services/services.component.ts");
    /* harmony import */


    var _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin-dashboard/roles/roles.component */
    "./src/app/admin/admin-dashboard/roles/roles.component.ts");
    /* harmony import */


    var _admin_dashboard_header_text_header_text_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./admin-dashboard/header-text/header-text.component */
    "./src/app/admin/admin-dashboard/header-text/header-text.component.ts");
    /* harmony import */


    var _admin_dashboard_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./admin-dashboard/confirmation/confirmation.component */
    "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
    /* harmony import */


    var _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./admin-dashboard/manage-admin/manage-admin.component */
    "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts");
    /* harmony import */


    var _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./admin-dashboard/manageplan/manageplan.component */
    "./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts");
    /* harmony import */


    var _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin-dashboard/subcriptions-list/subcriptions-list.component */
    "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts");
    /* harmony import */


    var _admin_dashboard_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin-dashboard/loader/loader.component */
    "./src/app/admin/admin-dashboard/loader/loader.component.ts");
    /* harmony import */


    var _admin_dashboard_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./admin-dashboard/delete-dialog/delete-dialog.component */
    "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.ts");
    /* harmony import */


    var _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin-dashboard/details/details.component */
    "./src/app/admin/admin-dashboard/details/details.component.ts");
    /* harmony import */


    var _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./admin-dashboard/booking-details/booking-details.component */
    "./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts");
    /* harmony import */


    var _others_others_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./others/others.component */
    "./src/app/admin/others/others.component.ts");
    /* harmony import */


    var _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./admin-dashboard/other/other.component */
    "./src/app/admin/admin-dashboard/other/other.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_9__["AdminloginComponent"], _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDashboardComponent"], _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_11__["UserlistComponent"], _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_12__["SalonlistComponent"], _admin_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"], _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesComponent"], _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"], _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_18__["RolesComponent"], _admin_dashboard_header_text_header_text_component__WEBPACK_IMPORTED_MODULE_19__["HeaderTextComponent"], _admin_dashboard_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationComponent"], _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_21__["ManageAdminComponent"], _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_22__["ManageplanComponent"], _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_23__["SubcriptionsListComponent"], _admin_dashboard_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"], _admin_dashboard_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DeleteDialogComponent"], _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_26__["DetailsComponent"], _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_27__["BookingDetailsComponent"], _others_others_component__WEBPACK_IMPORTED_MODULE_28__["OthersComponent"], _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_29__["OtherComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"], ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["SimpleModalModule"].forRoot({
        container: "modal-container"
      }), _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"]],
      entryComponents: [_admin_dashboard_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationComponent"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/admin/adminlogin/admin.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/admin/adminlogin/admin.service.ts ***!
    \***************************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppAdminAdminloginAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
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
        'Content-Type': 'application/json'
      })
    };

    var AdminService = /*#__PURE__*/function () {
      function AdminService(httpClient) {
        _classCallCheck(this, AdminService);

        this.httpClient = httpClient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
      }

      _createClass(AdminService, [{
        key: "login",
        value: function login(dataToPass) {
          return this.httpClient.post(this.baseUrl + "/login", dataToPass, httpOptions);
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/admin/adminlogin/adminlogin.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/admin/adminlogin/adminlogin.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminAdminloginAdminloginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".notifier__container * {\n  box-sizing: border-box;\n}\n.notifier__container-list {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style-type: none;\n}\n.notifier__notification {\n  display: block;\n  position: fixed;\n  visibility: hidden;\n  z-index: 10000;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.notifier__notification--material {\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  cursor: default;\n  padding-top: 11px;\n  padding-right: 26px;\n  padding-bottom: 10px;\n  padding-left: 26px;\n}\n.notifier__notification--material .notifier__notification-message {\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0;\n  vertical-align: top;\n  line-height: 32px;\n  font-size: 15px;\n}\n.notifier__notification--material .notifier__notification-button {\n  display: inline-block;\n  transition: opacity 0.2s ease;\n  opacity: 0.5;\n  margin-right: -10px;\n  margin-left: 10px;\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  vertical-align: top;\n}\n.notifier__notification--material .notifier__notification-button:hover, .notifier__notification--material .notifier__notification-button:focus {\n  opacity: 1;\n}\n.notifier__notification--material .notifier__notification-button:active {\n  transform: scale(0.82);\n  opacity: 1;\n}\n.notifier__notification--default {\n  background-color: #444;\n  color: #FFF;\n}\n.notifier__notification--default .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--error {\n  background-color: #D9534F;\n  color: #FFF;\n}\n.notifier__notification--error .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--info {\n  background-color: #5BC0DE;\n  color: #FFF;\n}\n.notifier__notification--info .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--success {\n  background-color: #5CB85C;\n  color: #FFF;\n}\n.notifier__notification--success .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--warning {\n  background-color: #F0AD4E;\n  color: #FFF;\n}\n.notifier__notification--warning .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.login-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login-section-inner {\n  width: 595px;\n  min-height: 400px;\n  margin: 0 auto;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  position: relative;\n  /* padding: 25px 40px; */\n  display: flex;\n}\n.login-section-inner .login-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background: url('bg-left.png');\n  flex-direction: column;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.login-section-inner .login-left img {\n  width: 50%;\n}\n.login-right {\n  flex: 1;\n  padding: 0 0 20px 0;\n  padding: 25px 40px;\n  display: flex;\n  align-items: center;\n}\n.resetPassword {\n  background: white;\n  outline: none;\n  border: 0;\n  color: red;\n}\n.login-section-inner label {\n  font-size: 15px;\n  color: #4d4d55;\n  font-family: \"Roboto\";\n}\n.login-section-inner input {\n  font-size: 13px;\n  border: 1px solid #d2d4df;\n  border-radius: 8px;\n  color: #9595a1;\n  height: 35px;\n  font-family: \"Roboto\";\n}\n.login-section-inner .btn-sign-in {\n  width: 100%;\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.login-section-inner .btn-sign-in:hover {\n  /* background-position: right center; */\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.login-section-inner .form-control:focus {\n  border-color: #9c3ee8;\n  outline: 0;\n  box-shadow: 0 0 0 0 #9c3ee8;\n}\n.login-section-inner .form-group {\n  margin-bottom: 10px;\n}\n.login-section-inner .btn-primary:not(:disabled):not(.disabled):active {\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.sign-up {\n  font-size: 12px;\n  color: #4d4d55;\n  font-family: \"Roboto\";\n  text-align: center;\n  padding-top: 10px;\n}\n.sign-up a {\n  color: #c92c5f;\n  text-decoration: none;\n  padding-left: 10px;\n}\n@media (max-width: 991px) {\n  .login-section-inner {\n    display: block;\n  }\n\n  .login-section-inner .login-left {\n    min-height: 225px;\n  }\n\n  .login-section-inner .login-left img {\n    width: 35%;\n  }\n}\n@media (max-width: 767px) {\n  .login-section {\n    align-items: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy9jb3JlLnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWlubG9naW4vYWRtaW5sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy90aGVtZXMvdGhlbWUtbWF0ZXJpYWwuc2NzcyIsIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy90eXBlcy90eXBlLWRlZmF1bHQuc2NzcyIsIi9ob21lL3Vua25vd24vRGVza3RvcC93b3JrL3NhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy90eXBlcy90eXBlLWVycm9yLnNjc3MiLCIvaG9tZS91bmtub3duL0Rlc2t0b3Avd29yay9zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvdHlwZXMvdHlwZS1pbmZvLnNjc3MiLCIvaG9tZS91bmtub3duL0Rlc2t0b3Avd29yay9zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvdHlwZXMvdHlwZS1zdWNjZXNzLnNjc3MiLCIvaG9tZS91bmtub3duL0Rlc2t0b3Avd29yay9zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvdHlwZXMvdHlwZS13YXJuaW5nLnNjc3MiLCIvaG9tZS91bmtub3duL0Rlc2t0b3Avd29yay9zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWlubG9naW4vYWRtaW5sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRRTtFQUNDLHNCQUFBO0FDUEg7QURVRTtFQUVFLGFBQUE7RUFDQSxnQkFBQTtFQUdBLGVBQUE7RUFFRCxxQkFBQTtBQ1pIO0FEaUJDO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFHQSxzQkFBQTtFQUlBLG1DQUFBO1VBQUEsMkJBQUE7QUNwQkY7QUNSQTtFQUNDLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0VBRUMsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QURVRjtBQ0xFO0VBQ0MscUJBQUE7RUFFQyxhQUFBO0VBQ0EsZ0JBQUE7RUFFRCxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBREtIO0FDRkU7RUFDQyxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUVDLG1CQUFBO0VBQ0EsaUJBQUE7RUFFRCxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FERUg7QUNBRztFQUVDLFVBQUE7QURDSjtBQ0VHO0VBQ0Msc0JBQUE7RUFDQSxVQUFBO0FEQUo7QUVsREE7RUFDQyxzQkFMbUM7RUFNbkMsV0FMNkI7QUYwRDlCO0FFbkRDO0VBQ0MsVUFQNEI7QUY0RDlCO0FHMURBO0VBQ0MseUJBTGlDO0VBTWpDLFdBTDJCO0FIa0U1QjtBRzNEQztFQUNDLFVBUDBCO0FIb0U1QjtBSWxFQTtFQUNDLHlCQUxnQztFQU1oQyxXQUwwQjtBSjBFM0I7QUluRUM7RUFDQyxVQVB5QjtBSjRFM0I7QUsxRUE7RUFDQyx5QkFMbUM7RUFNbkMsV0FMNkI7QUxrRjlCO0FLM0VDO0VBQ0MsVUFQNEI7QUxvRjlCO0FNbEZBO0VBQ0MseUJBTG1DO0VBTW5DLFdBTDZCO0FOMEY5QjtBTW5GQztFQUNDLFVBUDRCO0FONEY5QjtBTzlGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FQaUdGO0FPL0ZBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtBUGtHRjtBTy9GQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0FQa0dGO0FPaEdBO0VBQ0UsVUFBQTtBUG1HRjtBT2pHQTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FQb0dGO0FPakdBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QVBvR0Y7QU9qR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FQb0dGO0FPbEdBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FQcUdGO0FPbkdBO0VBQ0UsV0FBQTtFQUVBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0dBQUE7QVBxR0Y7QU9sR0E7RUFDRSx1Q0FBQTtFQUNBLG9HQUFBO0FQcUdGO0FPbEdBO0VBQ0UscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QVBxR0Y7QU9uR0E7RUFDRSxtQkFBQTtBUHNHRjtBT25HQTtFQUNFLG9HQUFBO0FQc0dGO0FPbkdBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QVBzR0Y7QU9wR0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBUHVHRjtBT3BHQTtFQUNFO0lBQ0UsY0FBQTtFUHVHRjs7RU9yR0E7SUFDRSxpQkFBQTtFUHdHRjs7RU90R0E7SUFDRSxVQUFBO0VQeUdGO0FBQ0Y7QU92R0E7RUFDRTtJQUNFLG9CQUFBO0VQeUdGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbmxvZ2luL2FkbWlubG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOT1RJRklFUjogQ09SRSBTVFlMRVNcblxuLy8gQ29udGFpbmVyXG5cbi5ub3RpZmllciB7XG5cblx0Jl9fY29udGFpbmVyIHtcblxuXHRcdCoge1xuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHR9XG5cblx0XHQmLWxpc3Qge1xuXHRcdFx0bWFyZ2luOiB7XG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0fVxuXHRcdFx0cGFkZGluZzoge1xuXHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0fVxuXHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRcdH1cblxuXHR9XG5cblx0Jl9fbm90aWZpY2F0aW9uIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRwb3NpdGlvbjogZml4ZWQ7IC8vIE92ZXJsYXlcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47IC8vIE5vdGlmaWNhdGlvbnMgYXJlIGhpZGRlbiBieSBkZWZhdWx0LCBhbmQgZ2V0IHNob3duIChvciBhbmltYXRlZCBpbikgZHluYW1pY2FsbHkgYnkgdGhlIEFuZ3VsYXIgY29tcG9uZW50XG5cdFx0ei1pbmRleDogMTAwMDA7IC8vIFByZXR0eSBtdWNoIHJhbmRvbSAuLi5cblxuXHRcdC8vIFRoaXMgYXR0cmlidXRlIGZvcmNlcyB0aGlzIGVsZW1lbnQgdG8gYmUgcmVuZGVyZWQgb24gYSBuZXcgbGF5ZXIsIGJ5IHRoZSBHUFUsIGluIG9yZGVyIHRvIGltcHJvdmUgaXRzIHBlcmZvcm1hbmNlICgjcGVyZm1hdHRlcnMpXG5cdFx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblxuXHRcdC8vIFRoaXMgYXR0cmlidXRlIGltcHJvdmVzIHRoZSBvdmVyYWxsIHNjcm9sbGluZyBwZXJmb3JtYW5jZSBmb3IgZml4ZWQgcG9zaXRpb24gZWxlbWVudHMsIHN1Y2ggYXMgdGhpcyBvbmUgKCNwZXJmbWF0dGVycylcblx0XHQvLyBTZWUgPGh0dHBzOi8vYmVuZnJhaW4uY29tL2ltcHJvdmluZy1jc3MtcGVyZm9ybWFuY2UtZml4ZWQtcG9zaXRpb24tZWxlbWVudHMvPlxuXHRcdGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcblxuXHR9XG5cbn1cbiIsIi5ub3RpZmllcl9fY29udGFpbmVyICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLm5vdGlmaWVyX19jb250YWluZXItbGlzdCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHotaW5kZXg6IDEwMDAwO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1yaWdodDogMjZweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjZweDtcbn1cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1tZXNzYWdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBsaW5lLWhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA2cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uOmhvdmVyLCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uOmZvY3VzIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b246YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgyKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xuICBjb2xvcjogI0ZGRjtcbn1cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1kZWZhdWx0IC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHtcbiAgZmlsbDogI0ZGRjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RjtcbiAgY29sb3I6ICNGRkY7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZXJyb3IgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0taW5mbyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1QkMwREU7XG4gIGNvbG9yOiAjRkZGO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWluZm8gLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I4NUM7XG4gIGNvbG9yOiAjRkZGO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLXN1Y2Nlc3MgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0td2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEFENEU7XG4gIGNvbG9yOiAjRkZGO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLXdhcm5pbmcgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubG9naW4tc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIHtcbiAgd2lkdGg6IDU5NXB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1sZWZ0LnBuZyk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5sb2dpbi1yaWdodCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlc2V0UGFzc3dvcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0ZDRkNTU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDRkZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogIzk1OTVhMTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWluOmhvdmVyIHtcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyAqL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWMzZWU4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwICM5YzNlZTg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5zaWduLXVwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRkNGQ1NTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zaWduLXVwIGEge1xuICBjb2xvcjogI2M5MmM1ZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCB7XG4gICAgbWluLWhlaWdodDogMjI1cHg7XG4gIH1cblxuICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWcge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubG9naW4tc2VjdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gIH1cbn0iLCIvLyBOT1RJRklFUjogTUFURVJJQUwgVEhFTUVcbi8vXG4vLyBUaGlzIG1hdGVyaWFsIHRoZW1lIHRyaWVzIGl0cyBiZXN0IHRvIGxvb2sgYXMgbWF0ZXJpYWwtZGVzaWduJ2lzaCBhcyBwb3NzaWJsZSAtIHJvdW5kIGVkZ2VzLCBzaGFkb3dzLCBhbmQgc21hbGwgYW5pbWF0aW9ucy5cbi8vIEFuZCwgb2YgY291cnNlLCB0aGFua3MgdG8gI0dvb2dsZSBmb3IgY3JlYXRpbmcgYW5kIHNoYXJpbmcgc3VjaCBhbiBhd2Vzb21lIGRlc2lnbiBsYW5ndWFnZSFcbi8vIEkgaGlnaGx5IGVuY291cmFnZSBldmVyeW9uZSB0byByZWFkIGludG8gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjczogPGh0dHBzOi8vbWF0ZXJpYWwuZ29vZ2xlLmNvbS8+XG5cbiRub3RpZmllci1zaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwge1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCAkbm90aWZpZXItc2hhZG93LWNvbG9yO1xuXHRjdXJzb3I6IGRlZmF1bHQ7IC8vIERlZmF1bHQgY3Vyc29yLCBldmVuIHdoZW4gaG92ZXJpbmcgb3ZlciB0ZXh0XG5cdHBhZGRpbmc6IHtcblx0XHR0b3A6IDExcHg7XG5cdFx0cmlnaHQ6IDI2cHg7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHRcdGxlZnQ6IDI2cHg7XG5cdH1cblxuXHQubm90aWZpZXJfX25vdGlmaWNhdGlvbiB7XG5cblx0XHQmLW1lc3NhZ2Uge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0bWFyZ2luOiB7IC8vIFJlc2V0IHBhcmFncmFwaCBkZWZhdWx0IHN0eWxlc1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdH1cblx0XHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0XHRsaW5lLWhlaWdodDogMzJweDtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHR9XG5cblx0XHQmLWJ1dHRvbiB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xuXHRcdFx0b3BhY2l0eTogLjU7XG5cdFx0XHRtYXJnaW46IHtcblx0XHRcdFx0cmlnaHQ6IC0xMHB4O1xuXHRcdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0fTtcblx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyOyAvLyBNYWtlIGl0IG9idmlvdXMgdGhhdCB0aGUgXCJidXR0b25cIiAob3IsIG1vcmUgaG9uZXN0bHksIGljb24pIGlzIGNsaWNrYWJsZSAoI1VYKVxuXHRcdFx0cGFkZGluZzogNnB4O1xuXHRcdFx0d2lkdGg6IDMycHg7XG5cdFx0XHRoZWlnaHQ6IDMycHg7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG5cdFx0XHQmOmhvdmVyLFxuXHRcdFx0Jjpmb2N1cyB7XG5cdFx0XHRcdG9wYWNpdHk6IDE7IC8vIE1ha2UgbWUgXCJmZWVsXCIgdGhlIGNsaWNrYWJpbGl0eSB3aXRoIGEgdHJhbnNwYXJlbmN5IGNoYW5nZSAoI1VYKVxuXHRcdFx0fVxuXG5cdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoLjgyKTsgLy8gTWFrZSBtZSBcImZlZWxcIiB0aGUgY2xpY2sgYnkgYSBwdXNoIGJhY2sgKCNVWClcblx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cbn1cbiIsIi8vIE5PVElGSUVSOiBERUZBVUxUIFRZUEUgU1RZTEVTXG5cbiRub3RpZmllci1kZWZhdWx0LWJhY2tncm91bmQtY29sb3I6ICM0NDQgIWRlZmF1bHQ7XG4kbm90aWZpZXItZGVmYXVsdC1mb250LWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuJG5vdGlmaWVyLWRlZmF1bHQtaWNvbi1jb2xvcjogI0ZGRiAhZGVmYXVsdDtcblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWRlZmF1bHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbm90aWZpZXItZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yO1xuXHRjb2xvcjogJG5vdGlmaWVyLWRlZmF1bHQtZm9udC1jb2xvcjtcblxuXHQubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7IC8vIDE2eDE2IGZpeGVkIHNpemVcblx0XHRmaWxsOiAkbm90aWZpZXItZGVmYXVsdC1pY29uLWNvbG9yO1xuXHR9XG5cbn1cbiIsIi8vIE5PVElGSUVSOiBFUlJPUiBUWVBFIFNUWUxFU1xuXG4kbm90aWZpZXItZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RiAhZGVmYXVsdDtcbiRub3RpZmllci1lcnJvci1mb250LWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuJG5vdGlmaWVyLWVycm9yLWljb24tY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1lcnJvciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yO1xuXHRjb2xvcjogJG5vdGlmaWVyLWVycm9yLWZvbnQtY29sb3I7XG5cblx0Lm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24geyAvLyAxNngxNiBmaXhlZCBzaXplXG5cdFx0ZmlsbDogJG5vdGlmaWVyLWVycm9yLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IElORk8gVFlQRSBTVFlMRVNcblxuJG5vdGlmaWVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERSAhZGVmYXVsdDtcbiRub3RpZmllci1pbmZvLWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItaW5mby1pY29uLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0taW5mbyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci1pbmZvLWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItaW5mby1mb250LWNvbG9yO1xuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHsgLy8gMTZ4MTYgZml4ZWQgc2l6ZVxuXHRcdGZpbGw6ICRub3RpZmllci1pbmZvLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IFNVQ0NFU1MgVFlQRSBTVFlMRVNcblxuJG5vdGlmaWVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QyAhZGVmYXVsdDtcbiRub3RpZmllci1zdWNjZXNzLWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItc3VjY2Vzcy1pY29uLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tc3VjY2VzcyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItc3VjY2Vzcy1mb250LWNvbG9yO1xuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHsgLy8gMTZ4MTYgZml4ZWQgc2l6ZVxuXHRcdGZpbGw6ICRub3RpZmllci1zdWNjZXNzLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IFdBUk5JTkcgVFlQRSBTVFlMRVNcblxuJG5vdGlmaWVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RSAhZGVmYXVsdDtcbiRub3RpZmllci13YXJuaW5nLWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItd2FybmluZy1pY29uLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0td2FybmluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItd2FybmluZy1mb250LWNvbG9yO1xuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHsgLy8gMTZ4MTYgZml4ZWQgc2l6ZVxuXHRcdGZpbGw6ICRub3RpZmllci13YXJuaW5nLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2FuZ3VsYXItbm90aWZpZXIvc3R5bGVzLnNjc3MnO1xuXG4ubG9naW4tc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gIHdpZHRoOiA1OTVweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmctbGVmdC5wbmcpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5sb2dpbi1yaWdodCB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDAgMCAyMHB4IDA7XG4gIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlc2V0UGFzc3dvcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICBjb2xvcjogcmVkO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0ZDRkNTU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cbi5sb2dpbi1zZWN0aW9uLWlubmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNGRmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjOTU5NWExO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbn1cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tc2lnbi1pbiB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJVxuICAgIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tc2lnbi1pbjpob3ZlciB7XG4gIC8qIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGNlbnRlcjsgKi9cbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlXG4gICAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmZvcm0tY29udHJvbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzljM2VlODtcbiAgb3V0bGluZTogMDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAjOWMzZWU4O1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlXG4gICAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuLnNpZ24tdXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGQ0ZDU1O1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uc2lnbi11cCBhIHtcbiAgY29sb3I6IHJnYigyMDEsIDQ0LCA5NSk7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmxvZ2luLXNlY3Rpb24taW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IHtcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcbiAgfVxuICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWcge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubG9naW4tc2VjdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/admin/adminlogin/adminlogin.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/admin/adminlogin/adminlogin.component.ts ***!
    \**********************************************************/

  /*! exports provided: AdminloginComponent */

  /***/
  function srcAppAdminAdminloginAdminloginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function () {
      return AdminloginComponent;
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


    var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin.service */
    "./src/app/admin/adminlogin/admin.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/admin/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _allserv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../allserv.service */
    "./src/app/allserv.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var AdminloginComponent = /*#__PURE__*/function () {
      function AdminloginComponent(toastServ, router, fb, adminServ, authServ, allServ) {
        _classCallCheck(this, AdminloginComponent);

        this.toastServ = toastServ;
        this.router = router;
        this.fb = fb;
        this.adminServ = adminServ;
        this.authServ = authServ;
        this.allServ = allServ;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
      }

      _createClass(AdminloginComponent, [{
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

          this.adminLogin = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)])]
          });
          this.allServ.setRoute(this.router.url);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          this.router.navigate(["forget-password"]);
        }
        /**
         * Function is use to login Admin
         * @access private
         * @return json
         * Created by SmartData
         * @smartData Enterprises (I) Ltd
         */

      }, {
        key: "loginAdmin",
        value: function loginAdmin(data) {
          var _this54 = this;

          var dataToPass = {
            email: data.email,
            password: data.password,
            role: "admin"
          };
          this.adminServ.login(dataToPass).subscribe(function (data) {
            if (data.code === 200) {
              _this54.toastServ.success("Logged In Successfully", "", {
                timeOut: 3000
              });

              sessionStorage.setItem("userDetails", data["data"]["userInfo"].email);
              sessionStorage.setItem("userId", data["data"]["userInfo"]._id);
              sessionStorage.setItem("isReload", JSON.stringify(true));

              _this54.authServ.sendToken(data.data.token);

              _this54.router.navigate(["admin/home"]);
            } else {
              _this54.toastServ.error("Invalid Login details", "", {
                timeOut: 3000
              });
            }
          }, function (error) {
            _this54.toastServ.error("Failed to Login", error.error["message"], {
              timeOut: 3000
            });
          });
        }
      }, {
        key: "password",
        get: function get() {
          return this.adminLogin.get("password");
        }
      }, {
        key: "email",
        get: function get() {
          return this.adminLogin.get("email");
        }
      }]);

      return AdminloginComponent;
    }();

    AdminloginComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _allserv_service__WEBPACK_IMPORTED_MODULE_7__["AllservService"]
      }];
    };

    AdminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-adminlogin",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./adminlogin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./adminlogin.component.scss */
      "./src/app/admin/adminlogin/adminlogin.component.scss"))["default"]]
    })], AdminloginComponent);
    /***/
  },

  /***/
  "./src/app/admin/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/admin/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAdminAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../admin/auth.service */
    "./src/app/admin/auth.service.ts");

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
            this.myRoute.navigate(["admin"]);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/admin/auth.service.ts":
  /*!***************************************!*\
    !*** ./src/app/admin/auth.service.ts ***!
    \***************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAdminAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
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

    var AuthService = /*#__PURE__*/function () {
      function AuthService(myRoute) {
        _classCallCheck(this, AuthService);

        this.myRoute = myRoute;
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
          sessionStorage.clear();
          localStorage.clear();
          this.myRoute.navigate(["admin"]);
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
      providedIn: "root"
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/admin/others/others.component.css":
  /*!***************************************************!*\
    !*** ./src/app/admin/others/others.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdminOthersOthersComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL290aGVycy9vdGhlcnMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/admin/others/others.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/admin/others/others.component.ts ***!
    \**************************************************/

  /*! exports provided: OthersComponent */

  /***/
  function srcAppAdminOthersOthersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OthersComponent", function () {
      return OthersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OthersComponent = function OthersComponent() {
      _classCallCheck(this, OthersComponent);
    };

    OthersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-others",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./others.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/others/others.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./others.component.css */
      "./src/app/admin/others/others.component.css"))["default"]]
    })], OthersComponent);
    /***/
  }
}]);
//# sourceMappingURL=app-admin-admin-module-es5.js.map