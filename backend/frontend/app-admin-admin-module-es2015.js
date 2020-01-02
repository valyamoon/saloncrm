(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-admin-admin-module"],{

/***/ "./node_modules/angular-notifier/fesm2015/angular-notifier.js":
/*!********************************************************************!*\
  !*** ./node_modules/angular-notifier/fesm2015/angular-notifier.js ***!
  \********************************************************************/
/*! exports provided: NotifierConfig, NotifierConfigToken, NotifierContainerComponent, NotifierModule, NotifierNotificationComponent, NotifierOptionsToken, NotifierService, notifierCustomConfigFactory, notifierDefaultConfigFactory, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfig", function() { return NotifierConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierConfigToken", function() { return NotifierConfigToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierContainerComponent", function() { return NotifierContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierModule", function() { return NotifierModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierNotificationComponent", function() { return NotifierNotificationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierOptionsToken", function() { return NotifierOptionsToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifierService", function() { return NotifierService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierCustomConfigFactory", function() { return notifierCustomConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notifierDefaultConfigFactory", function() { return notifierDefaultConfigFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NotifierQueueService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return NotifierTimerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return NotifierAnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notification
 *
 * This class describes the structure of a notifiction, including all information it needs to live, and everyone else needs to work with it.
 */
class NotifierNotification {
    /**
     * Constructor
     *
     * @param {?} options Notifier options
     */
    constructor(options) {
        /**
         * The template to customize
         * the appearance of the notification
         */
        this.template = null;
        Object.assign(this, options);
        // If not set manually, we have to create a unique notification ID by ourselves. The ID generation relies on the current browser
        // datetime in ms, in praticular the moment this notification gets constructed. Concurrency, and thus two IDs being the exact same,
        // is not possible due to the action queue concept.
        if (options.id === undefined) {
            this.id = `ID_${new Date().getTime()}`;
        }
    }
}
if (false) {}
/**
 * Notifiction options
 *
 * This interface describes which information are needed to create a new notification, or in other words, which information the external API
 * call must provide.
 * @record
 */
function NotifierNotificationOptions() { }
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
class NotifierQueueService {
    /**
     * Constructor
     */
    constructor() {
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
    push(action) {
        this.actionQueue.push(action);
        this.tryToRunNextAction();
    }
    /**
     * Continue with the next action (called when the current action is finished)
     * @return {?}
     */
    continue() {
        this.isActionInProgress = false;
        this.tryToRunNextAction();
    }
    /**
     * Try to run the next action in the queue; we skip if there already is some action in progress, or if there is no action left
     * @private
     * @return {?}
     */
    tryToRunNextAction() {
        if (this.isActionInProgress || this.actionQueue.length === 0) {
            return; // Skip (the queue can now go drink a coffee as it has nothing to do anymore)
        }
        this.isActionInProgress = true;
        this.actionStream.next(this.actionQueue.shift()); // Push next action to the stream, and remove the current action from the queue
    }
}
NotifierQueueService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
NotifierQueueService.ctorParameters = () => [];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier options
 * @record
 */
function NotifierOptions() { }
if (false) {}
/**
 * Notifier configuration
 *
 * The notifier configuration defines what notifications look like, how they behave, and how they get animated. It is a global
 * configuration, which means that it only can be set once (at the beginning), and cannot be changed afterwards. Aligning to the world of
 * Angular, this configuration can be provided in the root app module - alternatively, a meaningful default configuration will be used.
 */
class NotifierConfig {
    /**
     * Constructor
     *
     * @param {?=} customOptions
     */
    constructor(customOptions = {}) {
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
        this.theme = 'material';
        // The following merges the custom options into the notifier config, respecting the already set default values
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
    }
}
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
const NotifierOptionsToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[angular-notifier] Notifier Options');
/**
 * Injection Token for notifier configuration
 * @type {?}
 */
const NotifierConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('[anuglar-notifier] Notifier Config');

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
class NotifierService {
    /**
     * Constructor
     *
     * @param {?} notifierQueueService Notifier queue service
     * @param {?} config               Notifier configuration, optionally injected as a dependency
     */
    constructor(notifierQueueService, config) {
        this.queueService = notifierQueueService;
        this.config = config;
    }
    /**
     * Get the notifier configuration
     *
     * @return {?} Notifier configuration
     */
    getConfig() {
        return this.config;
    }
    /**
     * API: Show a new notification
     *
     * @param {?} notificationOptions Notification options
     * @return {?}
     */
    show(notificationOptions) {
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
    hide(notificationId) {
        this.queueService.push({
            payload: notificationId,
            type: 'HIDE'
        });
    }
    /**
     * API: Hide the newest notification
     * @return {?}
     */
    hideNewest() {
        this.queueService.push({
            type: 'HIDE_NEWEST'
        });
    }
    /**
     * API: Hide the oldest notification
     * @return {?}
     */
    hideOldest() {
        this.queueService.push({
            type: 'HIDE_OLDEST'
        });
    }
    /**
     * API: Hide all notifications at once
     * @return {?}
     */
    hideAll() {
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
    notify(type, message, notificationId) {
        /** @type {?} */
        let notificationOptions = {
            message,
            type
        };
        if (notificationId !== undefined) {
            notificationOptions.id = notificationId;
        }
        this.show(notificationOptions);
    }
}
NotifierService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
NotifierService.ctorParameters = () => [
    { type: NotifierQueueService },
    { type: NotifierConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [NotifierConfigToken,] }] }
];
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
class NotifierContainerComponent {
    /**
     * Constructor
     *
     * @param {?} changeDetector       Change detector, used for manually triggering change detection runs
     * @param {?} notifierQueueService Notifier queue service
     * @param {?} notifierService      Notifier service
     */
    constructor(changeDetector, notifierQueueService, notifierService) {
        this.changeDetector = changeDetector;
        this.queueService = notifierQueueService;
        this.config = notifierService.getConfig();
        this.notifications = [];
        // Connects this component up to the action queue, then handle incoming actions
        this.queueServiceSubscription = this.queueService.actionStream.subscribe((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            this.handleAction(action).then((/**
             * @return {?}
             */
            () => {
                this.queueService.continue();
            }));
        }));
    }
    /**
     * Component destroyment lifecycle hook, cleans up the observable subsciption
     * @return {?}
     */
    ngOnDestroy() {
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
    identifyNotification(index, notification) {
        return notification.id;
    }
    /**
     * Event handler, handles clicks on notification dismiss buttons
     *
     * @param {?} notificationId ID of the notification to dismiss
     * @return {?}
     */
    onNotificationDismiss(notificationId) {
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
    onNotificationReady(notificationComponent) {
        /** @type {?} */
        let currentNotification = this.notifications[this.notifications.length - 1];
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
    handleAction(action) {
        switch (action.type) { // TODO: Maybe a map (actionType -> class method) is a cleaner solution here?
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
                return new Promise((/**
                 * @param {?} resolve
                 * @param {?} reject
                 * @return {?}
                 */
                (resolve, reject) => {
                    resolve(); // Ignore unknown action types
                }));
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
    handleShowAction(action) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.tempPromiseResolver = resolve; // Save the promise resolve function so that it can be called later on by another method
            this.addNotificationToList(new NotifierNotification(action.payload));
        }));
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
    continueHandleShowAction(notification) {
        // First (which means only one) notification in the list?
        /** @type {?} */
        const numberOfNotifications = this.notifications.length;
        if (numberOfNotifications === 1) {
            notification.component.show().then(this.tempPromiseResolver); // Done
        }
        else {
            /** @type {?} */
            const implicitStackingLimit = 2;
            // Stacking enabled? (stacking value below 2 means stacking is disabled)
            if (this.config.behaviour.stacking === false || this.config.behaviour.stacking < implicitStackingLimit) {
                this.notifications[0].component.hide().then((/**
                 * @return {?}
                 */
                () => {
                    this.removeNotificationFromList(this.notifications[0]);
                    notification.component.show().then(this.tempPromiseResolver); // Done
                }));
            }
            else {
                /** @type {?} */
                const stepPromises = [];
                // Are there now too many notifications?
                if (numberOfNotifications > this.config.behaviour.stacking) {
                    /** @type {?} */
                    const oldNotifications = this.notifications.slice(1, numberOfNotifications - 1);
                    // Are animations enabled?
                    if (this.config.animations.enabled) {
                        // Is animation overlap enabled?
                        if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                            stepPromises.push(this.notifications[0].component.hide());
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                            }), this.config.animations.hide.speed - this.config.animations.overlap);
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                stepPromises.push(notification.component.show());
                            }), this.config.animations.hide.speed + this.config.animations.shift.speed - this.config.animations.overlap);
                        }
                        else {
                            stepPromises.push(new Promise((/**
                             * @param {?} resolve
                             * @param {?} reject
                             * @return {?}
                             */
                            (resolve, reject) => {
                                this.notifications[0].component.hide().then((/**
                                 * @return {?}
                                 */
                                () => {
                                    this.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then((/**
                                     * @return {?}
                                     */
                                    () => {
                                        notification.component.show().then(resolve);
                                    }));
                                }));
                            })));
                        }
                    }
                    else {
                        stepPromises.push(this.notifications[0].component.hide());
                        stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                        stepPromises.push(notification.component.show());
                    }
                }
                else {
                    /** @type {?} */
                    const oldNotifications = this.notifications.slice(0, numberOfNotifications - 1);
                    // Are animations enabled?
                    if (this.config.animations.enabled) {
                        // Is animation overlap enabled?
                        if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                            stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                            setTimeout((/**
                             * @return {?}
                             */
                            () => {
                                stepPromises.push(notification.component.show());
                            }), this.config.animations.shift.speed - this.config.animations.overlap);
                        }
                        else {
                            stepPromises.push(new Promise((/**
                             * @param {?} resolve
                             * @param {?} reject
                             * @return {?}
                             */
                            (resolve, reject) => {
                                this.shiftNotifications(oldNotifications, notification.component.getHeight(), true).then((/**
                                 * @return {?}
                                 */
                                () => {
                                    notification.component.show().then(resolve);
                                }));
                            })));
                        }
                    }
                    else {
                        stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), true));
                        stepPromises.push(notification.component.show());
                    }
                }
                Promise.all(stepPromises).then((/**
                 * @return {?}
                 */
                () => {
                    if (numberOfNotifications > this.config.behaviour.stacking) {
                        this.removeNotificationFromList(this.notifications[0]);
                    }
                    this.tempPromiseResolver();
                })); // Done
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
    handleHideAction(action) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const stepPromises = [];
            // Does the notification exist / are there even any notifications? (let's prevent accidential errors)
            /** @type {?} */
            const notification = this.findNotificationById(action.payload);
            if (notification === undefined) {
                resolve();
                return;
            }
            // Get older notifications
            /** @type {?} */
            const notificationIndex = this.findNotificationIndexById(action.payload);
            if (notificationIndex === undefined) {
                resolve();
                return;
            }
            /** @type {?} */
            const oldNotifications = this.notifications.slice(0, notificationIndex);
            // Do older notifications exist, and thus do we need to shift other notifications as a consequence?
            if (oldNotifications.length > 0) {
                // Are animations enabled?
                if (this.config.animations.enabled && this.config.animations.hide.speed > 0) {
                    // Is animation overlap enabled?
                    if (this.config.animations.overlap !== false && this.config.animations.overlap > 0) {
                        stepPromises.push(notification.component.hide());
                        setTimeout((/**
                         * @return {?}
                         */
                        () => {
                            stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                        }), this.config.animations.hide.speed - this.config.animations.overlap);
                    }
                    else {
                        notification.component.hide().then((/**
                         * @return {?}
                         */
                        () => {
                            stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                        }));
                    }
                }
                else {
                    stepPromises.push(notification.component.hide());
                    stepPromises.push(this.shiftNotifications(oldNotifications, notification.component.getHeight(), false));
                }
            }
            else {
                stepPromises.push(notification.component.hide());
            }
            // Wait until both hiding and shifting is done, then remove the notification from the list
            Promise.all(stepPromises).then((/**
             * @return {?}
             */
            () => {
                this.removeNotificationFromList(notification);
                resolve(); // Done
            }));
        }));
    }
    /**
     * Hide the oldest notification (bridge to handleHideAction)
     *
     * @private
     * @param {?} action Action object
     * @return {?} Promise, resolved when done
     */
    handleHideOldestAction(action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                resolve();
            })); // Done
        }
        else {
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
    handleHideNewestAction(action) {
        // Are there any notifications? (prevent accidential errors)
        if (this.notifications.length === 0) {
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                resolve();
            })); // Done
        }
        else {
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
    handleHideAllAction(action) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Are there any notifications? (prevent accidential errors)
            /** @type {?} */
            const numberOfNotifications = this.notifications.length;
            if (numberOfNotifications === 0) {
                resolve(); // Done
                return;
            }
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.hide.speed > 0 && this.config.animations.hide.offset !== false &&
                this.config.animations.hide.offset > 0) {
                for (let i = numberOfNotifications - 1; i >= 0; i--) {
                    /** @type {?} */
                    const animationOffset = this.config.position.vertical.position === 'top' ? numberOfNotifications - 1 : i;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.notifications[i].component.hide().then((/**
                         * @return {?}
                         */
                        () => {
                            // Are we done here, was this the last notification to be hidden?
                            if ((this.config.position.vertical.position === 'top' && i === 0) ||
                                (this.config.position.vertical.position === 'bottom' && i === numberOfNotifications - 1)) {
                                this.removeAllNotificationsFromList();
                                resolve(); // Done
                            }
                        }));
                    }), this.config.animations.hide.offset * animationOffset);
                }
            }
            else {
                /** @type {?} */
                let stepPromises = [];
                for (let i = numberOfNotifications - 1; i >= 0; i--) {
                    stepPromises.push(this.notifications[i].component.hide());
                }
                Promise.all(stepPromises).then((/**
                 * @return {?}
                 */
                () => {
                    this.removeAllNotificationsFromList();
                    resolve(); // Done
                }));
            }
        }));
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
    shiftNotifications(notifications, distance, toMakePlace) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Are there any notifications to shift?
            if (notifications.length === 0) {
                resolve();
                return;
            }
            /** @type {?} */
            let notificationPromises = [];
            for (let i = notifications.length - 1; i >= 0; i--) {
                notificationPromises.push(notifications[i].component.shift(distance, toMakePlace));
            }
            Promise.all(notificationPromises).then(resolve); // Done
        }));
    }
    /**
     * Add a new notification to the list of notifications (triggers change detection)
     *
     * @private
     * @param {?} notification Notification to add to the list of notifications
     * @return {?}
     */
    addNotificationToList(notification) {
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
    removeNotificationFromList(notification) {
        this.notifications =
            this.notifications.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item.component !== notification.component));
        this.changeDetector.markForCheck(); // Run change detection because the notification list changed
    }
    /**
     * Remove all notifications from the list (triggers change detection)
     * @private
     * @return {?}
     */
    removeAllNotificationsFromList() {
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
    findNotificationById(notificationId) {
        return this.notifications.find((/**
         * @param {?} currentNotification
         * @return {?}
         */
        (currentNotification) => currentNotification.id === notificationId));
    }
    /**
     * Helper: Find a notification's index by a given notification ID
     *
     * @private
     * @param {?} notificationId Notification ID, used for finding a notification's index
     * @return {?} Notification index, undefined if not found
     */
    findNotificationIndexById(notificationId) {
        /** @type {?} */
        const notificationIndex = this.notifications.findIndex((/**
         * @param {?} currentNotification
         * @return {?}
         */
        (currentNotification) => currentNotification.id === notificationId));
        return (notificationIndex !== -1 ? notificationIndex : undefined);
    }
}
NotifierContainerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // (#perfmatters)
                host: {
                    class: 'notifier__container'
                },
                selector: 'notifier-container',
                template: "<ul>\n\t<li class=\"notifier__container-list\" *ngFor=\"let notification of notifications; trackBy: identifyNotification;\">\n\t\t<notifier-notification\n\t\t\t[notification]=\"notification\"\n\t\t\t(ready)=\"onNotificationReady( $event )\"\n\t\t\t(dismiss)=\"onNotificationDismiss( $event )\">\n\t\t</notifier-notification>\n\t</li>\n</ul>\n"
            }] }
];
/** @nocollapse */
NotifierContainerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: NotifierQueueService },
    { type: NotifierService }
];
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = /**
 * @return {?}
 */
() => {
    return {
        from: {
            opacity: '1'
        },
        to: {
            opacity: '0'
        }
    };
}, ɵ1 = /**
 * @return {?}
 */
() => {
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
const fade = {
    hide: (ɵ0),
    show: (ɵ1)
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0$1 = /**
 * @param {?} notification
 * @return {?}
 */
(notification) => {
    // Prepare variables
    /** @type {?} */
    const config = notification.component.getConfig();
    /** @type {?} */
    const shift = notification.component.getShift();
    /** @type {?} */
    let from;
    /** @type {?} */
    let to;
    // Configure variables, depending on configuration and component
    if (config.position.horizontal.position === 'left') {
        from = {
            transform: `translate3d( 0, ${shift}px, 0 )`
        };
        to = {
            transform: `translate3d( calc( -100% - ${config.position.horizontal.distance}px - 10px ), ${shift}px, 0 )`
        };
    }
    else if (config.position.horizontal.position === 'right') {
        from = {
            transform: `translate3d( 0, ${shift}px, 0 )`
        };
        to = {
            transform: `translate3d( calc( 100% + ${config.position.horizontal.distance}px + 10px ), ${shift}px, 0 )`
        };
    }
    else {
        /** @type {?} */
        let horizontalPosition;
        if (config.position.vertical.position === 'top') {
            horizontalPosition = `calc( -100% - ${config.position.horizontal.distance}px - 10px )`;
        }
        else {
            horizontalPosition = `calc( 100% + ${config.position.horizontal.distance}px + 10px )`;
        }
        from = {
            transform: `translate3d( -50%, ${shift}px, 0 )`
        };
        to = {
            transform: `translate3d( -50%, ${horizontalPosition}, 0 )`
        };
    }
    // Done
    return {
        from,
        to
    };
}, ɵ1$1 = /**
 * @param {?} notification
 * @return {?}
 */
(notification) => {
    // Prepare variables
    /** @type {?} */
    const config = notification.component.getConfig();
    /** @type {?} */
    let from;
    /** @type {?} */
    let to;
    // Configure variables, depending on configuration and component
    if (config.position.horizontal.position === 'left') {
        from = {
            transform: `translate3d( calc( -100% - ${config.position.horizontal.distance}px - 10px ), 0, 0 )`
        };
        to = {
            transform: 'translate3d( 0, 0, 0 )'
        };
    }
    else if (config.position.horizontal.position === 'right') {
        from = {
            transform: `translate3d( calc( 100% + ${config.position.horizontal.distance}px + 10px ), 0, 0 )`
        };
        to = {
            transform: 'translate3d( 0, 0, 0 )'
        };
    }
    else {
        /** @type {?} */
        let horizontalPosition;
        if (config.position.vertical.position === 'top') {
            horizontalPosition = `calc( -100% - ${config.position.horizontal.distance}px - 10px )`;
        }
        else {
            horizontalPosition = `calc( 100% + ${config.position.horizontal.distance}px + 10px )`;
        }
        from = {
            transform: `translate3d( -50%, ${horizontalPosition}, 0 )`
        };
        to = {
            transform: 'translate3d( -50%, 0, 0 )'
        };
    }
    // Done
    return {
        from,
        to
    };
};
/**
 * Slide animation preset
 * @type {?}
 */
const slide = {
    hide: (ɵ0$1),
    show: (ɵ1$1)
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Notifier animation service
 */
class NotifierAnimationService {
    /**
     * Constructor
     */
    constructor() {
        this.animationPresets = {
            fade,
            slide
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
    getAnimationData(direction, notification) {
        // Get all necessary animation data
        /** @type {?} */
        let keyframes;
        /** @type {?} */
        let duration;
        /** @type {?} */
        let easing;
        if (direction === 'show') {
            keyframes = this.animationPresets[notification.component.getConfig().animations.show.preset].show(notification);
            duration = notification.component.getConfig().animations.show.speed;
            easing = notification.component.getConfig().animations.show.easing;
        }
        else {
            keyframes = this.animationPresets[notification.component.getConfig().animations.hide.preset].hide(notification);
            duration = notification.component.getConfig().animations.hide.speed;
            easing = notification.component.getConfig().animations.hide.easing;
        }
        // Build and return animation data
        return {
            keyframes: [
                keyframes.from,
                keyframes.to
            ],
            options: {
                duration,
                easing,
                fill: 'forwards' // Keep the newly painted state after the animation finished
            }
        };
    }
}
NotifierAnimationService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
NotifierAnimationService.ctorParameters = () => [];
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
class NotifierTimerService {
    /**
     * Constructor
     */
    constructor() {
        this.now = 0;
        this.remaining = 0;
    }
    /**
     * Start (or resume) the timer
     *
     * @param {?} duration Timer duration, in ms
     * @return {?} Promise, resolved once the timer finishes
     */
    start(duration) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // For the first run ...
            this.remaining = duration;
            // Setup, then start the timer
            this.finishPromiseResolver = resolve;
            this.continue();
        }));
    }
    /**
     * Pause the timer
     * @return {?}
     */
    pause() {
        clearTimeout(this.timerId);
        this.remaining -= new Date().getTime() - this.now;
    }
    /**
     * Continue the timer
     * @return {?}
     */
    continue() {
        this.now = new Date().getTime();
        this.timerId = window.setTimeout((/**
         * @return {?}
         */
        () => {
            this.finish();
        }), this.remaining);
    }
    /**
     * Stop the timer
     * @return {?}
     */
    stop() {
        clearTimeout(this.timerId);
        this.remaining = 0;
    }
    /**
     * Finish up the timeout by resolving the timer promise
     * @private
     * @return {?}
     */
    finish() {
        this.finishPromiseResolver();
    }
}
NotifierTimerService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] }
];
/** @nocollapse */
NotifierTimerService.ctorParameters = () => [];
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
class NotifierNotificationComponent {
    /**
     * Constructor
     *
     * @param {?} elementRef               Reference to the component's element
     * @param {?} renderer                 Angular renderer
     * @param {?} notifierService          Notifier service
     * @param {?} notifierTimerService     Notifier timer service
     * @param {?} notifierAnimationService Notifier animation service
     */
    constructor(elementRef, renderer, notifierService, notifierTimerService, notifierAnimationService) {
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
    ngAfterViewInit() {
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
    getConfig() {
        return this.config;
    }
    /**
     * Get notification element height (in px)
     *
     * @return {?} Notification element height (in px)
     */
    getHeight() {
        return this.elementHeight;
    }
    /**
     * Get notification element width (in px)
     *
     * @return {?} Notification element height (in px)
     */
    getWidth() {
        return this.elementWidth;
    }
    /**
     * Get notification shift offset (in px)
     *
     * @return {?} Notification element shift offset (in px)
     */
    getShift() {
        return this.elementShift;
    }
    /**
     * Show (animate in) this notification
     *
     * @return {?} Promise, resolved when done
     */
    show() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.show.speed > 0) {
                // Get animation data
                /** @type {?} */
                const animationData = this.animationService.getAnimationData('show', this.notification);
                // Set initial styles (styles before animation), prevents quick flicker when animation starts
                /** @type {?} */
                const animatedProperties = Object.keys(animationData.keyframes[0]);
                for (let i = animatedProperties.length - 1; i >= 0; i--) {
                    this.renderer.setStyle(this.element, animatedProperties[i], animationData.keyframes[0][animatedProperties[i]]);
                }
                // Animate notification in
                this.renderer.setStyle(this.element, 'visibility', 'visible');
                /** @type {?} */
                const animation = this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = (/**
                 * @return {?}
                 */
                () => {
                    this.startAutoHideTimer();
                    resolve(); // Done
                });
            }
            else {
                // Show notification
                this.renderer.setStyle(this.element, 'visibility', 'visible');
                this.startAutoHideTimer();
                resolve(); // Done
            }
        }));
    }
    /**
     * Hide (animate out) this notification
     *
     * @return {?} Promise, resolved when done
     */
    hide() {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.stopAutoHideTimer();
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.hide.speed > 0) {
                /** @type {?} */
                const animationData = this.animationService.getAnimationData('hide', this.notification);
                /** @type {?} */
                const animation = this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = (/**
                 * @return {?}
                 */
                () => {
                    resolve(); // Done
                });
            }
            else {
                resolve(); // Done
            }
        }));
    }
    /**
     * Shift (move) this notification
     *
     * @param {?} distance         Distance to shift (in px)
     * @param {?} shiftToMakePlace Flag, defining in which direction to shift
     * @return {?} Promise, resolved when done
     */
    shift(distance, shiftToMakePlace) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            // Calculate new position (position after the shift)
            /** @type {?} */
            let newElementShift;
            if ((this.config.position.vertical.position === 'top' && shiftToMakePlace)
                || (this.config.position.vertical.position === 'bottom' && !shiftToMakePlace)) {
                newElementShift = this.elementShift + distance + this.config.position.vertical.gap;
            }
            else {
                newElementShift = this.elementShift - distance - this.config.position.vertical.gap;
            }
            /** @type {?} */
            const horizontalPosition = this.config.position.horizontal.position === 'middle' ? '-50%' : '0';
            // Are animations enabled?
            if (this.config.animations.enabled && this.config.animations.shift.speed > 0) {
                /** @type {?} */
                const animationData = {
                    // TODO: Extract into animation service
                    keyframes: [
                        {
                            transform: `translate3d( ${horizontalPosition}, ${this.elementShift}px, 0 )`
                        },
                        {
                            transform: `translate3d( ${horizontalPosition}, ${newElementShift}px, 0 )`
                        }
                    ],
                    options: {
                        duration: this.config.animations.shift.speed,
                        easing: this.config.animations.shift.easing,
                        fill: 'forwards'
                    }
                };
                this.elementShift = newElementShift;
                /** @type {?} */
                const animation = this.element.animate(animationData.keyframes, animationData.options);
                animation.onfinish = (/**
                 * @return {?}
                 */
                () => {
                    resolve(); // Done
                });
            }
            else {
                this.renderer.setStyle(this.element, 'transform', `translate3d( ${horizontalPosition}, ${newElementShift}px, 0 )`);
                this.elementShift = newElementShift;
                resolve(); // Done
            }
        }));
    }
    /**
     * Handle click on dismiss button
     * @return {?}
     */
    onClickDismiss() {
        this.dismiss.emit(this.notification.id);
    }
    /**
     * Handle mouseover over notification area
     * @return {?}
     */
    onNotificationMouseover() {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.pauseAutoHideTimer();
        }
        else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.stopAutoHideTimer();
        }
    }
    /**
     * Handle mouseout from notification area
     * @return {?}
     */
    onNotificationMouseout() {
        if (this.config.behaviour.onMouseover === 'pauseAutoHide') {
            this.continueAutoHideTimer();
        }
        else if (this.config.behaviour.onMouseover === 'resetAutoHide') {
            this.startAutoHideTimer();
        }
    }
    /**
     * Handle click on notification area
     * @return {?}
     */
    onNotificationClick() {
        if (this.config.behaviour.onClick === 'hide') {
            this.onClickDismiss();
        }
    }
    /**
     * Start the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    startAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.start(this.config.behaviour.autoHide).then((/**
             * @return {?}
             */
            () => {
                this.onClickDismiss();
            }));
        }
    }
    /**
     * Pause the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    pauseAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.pause();
        }
    }
    /**
     * Continue the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    continueAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.continue();
        }
    }
    /**
     * Stop the auto hide timer (if enabled)
     * @private
     * @return {?}
     */
    stopAutoHideTimer() {
        if (this.config.behaviour.autoHide !== false && this.config.behaviour.autoHide > 0) {
            this.timerService.stop();
        }
    }
    /**
     * Initial notification setup
     * @private
     * @return {?}
     */
    setup() {
        // Set start position (initially the exact same for every new notification)
        if (this.config.position.horizontal.position === 'left') {
            this.renderer.setStyle(this.element, 'left', `${this.config.position.horizontal.distance}px`);
        }
        else if (this.config.position.horizontal.position === 'right') {
            this.renderer.setStyle(this.element, 'right', `${this.config.position.horizontal.distance}px`);
        }
        else {
            this.renderer.setStyle(this.element, 'left', '50%');
            // Let's get the GPU handle some work as well (#perfmatters)
            this.renderer.setStyle(this.element, 'transform', 'translate3d( -50%, 0, 0 )');
        }
        if (this.config.position.vertical.position === 'top') {
            this.renderer.setStyle(this.element, 'top', `${this.config.position.vertical.distance}px`);
        }
        else {
            this.renderer.setStyle(this.element, 'bottom', `${this.config.position.vertical.distance}px`);
        }
        // Add classes (responsible for visual design)
        this.renderer.addClass(this.element, `notifier__notification--${this.notification.type}`);
        this.renderer.addClass(this.element, `notifier__notification--${this.config.theme}`);
    }
}
NotifierNotificationComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                // (#perfmatters)
                host: {
                    '(click)': 'onNotificationClick()',
                    '(mouseout)': 'onNotificationMouseout()',
                    '(mouseover)': 'onNotificationMouseover()',
                    class: 'notifier__notification'
                },
                providers: [
                    // We provide the timer to the component's local injector, so that every notification components gets its own
                    // instance of the timer service, thus running their timers independently from each other
                    NotifierTimerService
                ],
                selector: 'notifier-notification',
                template: "<ng-container *ngIf=\"notification.template; else predefinedNotification\" [ngTemplateOutlet]=\"notification.template\" [ngTemplateOutletContext]=\"{ notification: notification }\">\n</ng-container>\n\n<ng-template #predefinedNotification>\n\t<p class=\"notifier__notification-message\">{{ notification.message }}</p>\n\t<button class=\"notifier__notification-button\" type=\"button\" title=\"dismiss\" *ngIf=\"config.behaviour.showDismissButton\" (click)=\"onClickDismiss()\">\n\t\t<svg class=\"notifier__notification-button-icon\" viewBox=\"0 0 24 24\" width=\"20\" height=\"20\">\n\t\t\t<path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" />\n\t\t</svg>\n\t</button>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
NotifierNotificationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
    { type: NotifierService },
    { type: NotifierTimerService },
    { type: NotifierAnimationService }
];
NotifierNotificationComponent.propDecorators = {
    notification: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    dismiss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
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
class NotifierModule {
    /**
     * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
     *
     * @param {?=} options
     * @return {?} - Notifier module with custom providers
     */
    static withConfig(options = {}) {
        return {
            ngModule: NotifierModule,
            providers: [
                // Provide the options itself upfront (as we need to inject them as dependencies -- see below)
                {
                    provide: NotifierOptionsToken,
                    useValue: options
                },
                // Provide a custom notifier configuration, based on the given notifier options
                {
                    deps: [
                        NotifierOptionsToken
                    ],
                    provide: NotifierConfigToken,
                    useFactory: notifierCustomConfigFactory
                }
            ]
        };
    }
}
NotifierModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    NotifierContainerComponent,
                    NotifierNotificationComponent
                ],
                exports: [
                    NotifierContainerComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                providers: [
                    NotifierAnimationService,
                    NotifierService,
                    NotifierQueueService,
                    // Provide the default notifier configuration if just the module is imported
                    {
                        provide: NotifierConfigToken,
                        useFactory: notifierDefaultConfigFactory
                    }
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=angular-notifier.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>HI SALON</h1>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>HI USER</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"login-section\">\n\n    <div class=\"login-section-inner\">\n<div class=\"login-left\">\n<img src=\"../../../assets/images/logo.svg\">\n</div>\n<div class=\"login-right\">\n    <form [formGroup]=\"adminLogin\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label for=\"InputEmail\">Email address</label>\n                        <input type=\"email\" formControlName=\"email\" class=\"form-control\" id=\"InputEmail\" aria-describedby=\"emailHelp\"\n                            placeholder=\"Enter email\">\n\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"form-group\">\n                        <label for=\"InputPassword\">Password</label>\n                        <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\"\n                            placeholder=\"Password\">\n                    </div>\n                </div>\n                <div class=\"col-md-12\">\n                        <button [disabled]=\"adminLogin.invalid\" (click)=\"loginAdmin(adminLogin.value)\" class=\"btn btn-primary btn-sign-in\">LOGIN</button>\n                    </div>\n                <div class=\"col-md-12\">\n                    <div class=\"sign-up\">\n                       Forgot password ?  <a href=\"\">Reset password</a>\n                    </div>\n                </div>\n              \n            </div>\n        </form>\n</div>\n     \n\n\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AdminDashboardComponent = class AdminDashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/admin/admin-dashboard/admin-dashboard.component.scss")).default]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/salonlist/salonlist.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9zYWxvbmxpc3Qvc2Fsb25saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts ***!
  \************************************************************************/
/*! exports provided: SalonlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalonlistComponent", function() { return SalonlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SalonlistComponent = class SalonlistComponent {
    constructor() { }
    ngOnInit() {
    }
};
SalonlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-salonlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salonlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salonlist.component.css */ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.css")).default]
    })
], SalonlistComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/userlist/userlist.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/userlist/userlist.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/userlist/userlist.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/userlist/userlist.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserlistComponent = class UserlistComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userlist.component.css */ "./src/app/admin/admin-dashboard/userlist/userlist.component.css")).default]
    })
], UserlistComponent);



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminlogin/adminlogin.component */ "./src/app/admin/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/auth.service */ "./src/app/admin/auth.service.ts");
/* harmony import */ var _admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../admin/auth.guard */ "./src/app/admin/auth.guard.ts");
/* harmony import */ var _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-dashboard/salonlist/salonlist.component */ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts");
/* harmony import */ var _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-dashboard/userlist/userlist.component */ "./src/app/admin/admin-dashboard/userlist/userlist.component.ts");









// const routes: Routes = [{path:'',component:AdminloginComponent},
// {path:'home',component:AdminDashboardComponent,canActivate:[AuthGuard],children: [{path:'userlist',loadChildren:() => import('../admin/admin-dashboard/users-list/users-list.module').then(m=>m.UsersListModule)},
// {path:'salonlist',loadChildren:() => import('../admin/admin-dashboard/salons-list/salons-list.module').then(m=>m.SalonsListModule)},
// {path:'',redirectTo:'salonlist',pathMatch:'full'}]}
// ];
const routes = [
    { path: "", component: _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_3__["AdminloginComponent"] },
    {
        path: "home",
        component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"],
        canActivate: [_admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: "salonlist", component: _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_7__["SalonlistComponent"] },
            { path: "userlist", component: _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"] },
            { path: "", redirectTo: "salonlist", pathMatch: "full" }
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        providers: [_admin_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _admin_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/fesm2015/angular-notifier.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./adminlogin/adminlogin.component */ "./src/app/admin/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-dashboard/userlist/userlist.component */ "./src/app/admin/admin-dashboard/userlist/userlist.component.ts");
/* harmony import */ var _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-dashboard/salonlist/salonlist.component */ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts");












let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_8__["AdminloginComponent"], _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["AdminDashboardComponent"], _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_10__["UserlistComponent"], _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_11__["SalonlistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/admin/adminlogin/admin.service.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/adminlogin/admin.service.ts ***!
  \***************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
let AdminService = class AdminService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendBaseUrl + "/api";
    }
    login(dataToPass) {
        return this.httpClient.post(this.baseUrl + "/login", dataToPass, httpOptions);
    }
};
AdminService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminService);



/***/ }),

/***/ "./src/app/admin/adminlogin/adminlogin.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/adminlogin/adminlogin.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".notifier__container * {\n  box-sizing: border-box;\n}\n.notifier__container-list {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style-type: none;\n}\n.notifier__notification {\n  display: block;\n  position: fixed;\n  visibility: hidden;\n  z-index: 10000;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.notifier__notification--material {\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  cursor: default;\n  padding-top: 11px;\n  padding-right: 26px;\n  padding-bottom: 10px;\n  padding-left: 26px;\n}\n.notifier__notification--material .notifier__notification-message {\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0;\n  vertical-align: top;\n  line-height: 32px;\n  font-size: 15px;\n}\n.notifier__notification--material .notifier__notification-button {\n  display: inline-block;\n  transition: opacity 0.2s ease;\n  opacity: 0.5;\n  margin-right: -10px;\n  margin-left: 10px;\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  vertical-align: top;\n}\n.notifier__notification--material .notifier__notification-button:hover, .notifier__notification--material .notifier__notification-button:focus {\n  opacity: 1;\n}\n.notifier__notification--material .notifier__notification-button:active {\n  transform: scale(0.82);\n  opacity: 1;\n}\n.notifier__notification--default {\n  background-color: #444;\n  color: #FFF;\n}\n.notifier__notification--default .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--error {\n  background-color: #D9534F;\n  color: #FFF;\n}\n.notifier__notification--error .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--info {\n  background-color: #5BC0DE;\n  color: #FFF;\n}\n.notifier__notification--info .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--success {\n  background-color: #5CB85C;\n  color: #FFF;\n}\n.notifier__notification--success .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--warning {\n  background-color: #F0AD4E;\n  color: #FFF;\n}\n.notifier__notification--warning .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.login-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login-section-inner {\n  width: 595px;\n  min-height: 400px;\n  margin: 0 auto;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  position: relative;\n  /* padding: 25px 40px; */\n  display: flex;\n}\n.login-section-inner .login-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background: url('bg-left.png');\n  flex-direction: column;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.login-section-inner .login-left img {\n  width: 50%;\n}\n.login-right {\n  flex: 1;\n  padding: 0 0 20px 0;\n  padding: 25px 40px;\n  display: flex;\n  align-items: center;\n}\n.login-section-inner label {\n  font-size: 15px;\n  color: #4D4D55;\n  font-family: \"Roboto\";\n}\n.login-section-inner input {\n  font-size: 13px;\n  border: 1px solid #D2D4DF;\n  border-radius: 8px;\n  color: #9595A1;\n  height: 35px;\n  font-family: \"Roboto\";\n}\n.login-section-inner .btn-sign-in {\n  width: 100%;\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n}\n.login-section-inner .btn-sign-in:hover {\n  /* background-position: right center; */\n  background: transparent linear-gradient(90deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n}\n.login-section-inner .form-control:focus {\n  border-color: #9C3EE8;\n  outline: 0;\n  box-shadow: 0 0 0 0 #9C3EE8;\n}\n.login-section-inner .form-group {\n  margin-bottom: 10px;\n}\n.login-section-inner .btn-primary:not(:disabled):not(.disabled):active {\n  background: transparent linear-gradient(90deg, #783A87 0%, #BC2E65 100%) 0% 0% no-repeat padding-box;\n}\n.sign-up {\n  font-size: 12px;\n  color: #4D4D55;\n  font-family: \"Roboto\";\n  text-align: center;\n  padding-top: 10px;\n}\n.sign-up a {\n  color: #c92c5f;\n  text-decoration: none;\n  padding-left: 10px;\n}\n@media (max-width: 991px) {\n  .login-section-inner {\n    display: block;\n  }\n\n  .login-section-inner .login-left {\n    min-height: 225px;\n  }\n\n  .login-section-inner .login-left img {\n    width: 35%;\n  }\n}\n@media (max-width: 767px) {\n  .login-section {\n    align-items: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25hZGltc2hhaC9EZXNrdG9wL05FV1NBTE9OR0lUL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2FuZ3VsYXItbm90aWZpZXIvc3R5bGVzL2NvcmUuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW5sb2dpbi9hZG1pbmxvZ2luLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvbmFkaW1zaGFoL0Rlc2t0b3AvTkVXU0FMT05HSVQvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvdGhlbWVzL3RoZW1lLW1hdGVyaWFsLnNjc3MiLCIvaG9tZS9uYWRpbXNoYWgvRGVza3RvcC9ORVdTQUxPTkdJVC9NRUFOLXNhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy90eXBlcy90eXBlLWRlZmF1bHQuc2NzcyIsIi9ob21lL25hZGltc2hhaC9EZXNrdG9wL05FV1NBTE9OR0lUL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2FuZ3VsYXItbm90aWZpZXIvc3R5bGVzL3R5cGVzL3R5cGUtZXJyb3Iuc2NzcyIsIi9ob21lL25hZGltc2hhaC9EZXNrdG9wL05FV1NBTE9OR0lUL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2FuZ3VsYXItbm90aWZpZXIvc3R5bGVzL3R5cGVzL3R5cGUtaW5mby5zY3NzIiwiL2hvbWUvbmFkaW1zaGFoL0Rlc2t0b3AvTkVXU0FMT05HSVQvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvdHlwZXMvdHlwZS1zdWNjZXNzLnNjc3MiLCIvaG9tZS9uYWRpbXNoYWgvRGVza3RvcC9ORVdTQUxPTkdJVC9NRUFOLXNhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy90eXBlcy90eXBlLXdhcm5pbmcuc2NzcyIsIi9ob21lL25hZGltc2hhaC9EZXNrdG9wL05FV1NBTE9OR0lUL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvc3JjL2FwcC9hZG1pbi9hZG1pbmxvZ2luL2FkbWlubG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUU7RUFDQyxzQkFBQTtBQ1BIO0FEVUU7RUFFRSxhQUFBO0VBQ0EsZ0JBQUE7RUFHQSxlQUFBO0VBRUQscUJBQUE7QUNaSDtBRGlCQztFQUNDLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBR0Esc0JBQUE7RUFJQSxtQ0FBQTtVQUFBLDJCQUFBO0FDcEJGO0FDUkE7RUFDQyxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtFQUVDLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FEVUY7QUNMRTtFQUNDLHFCQUFBO0VBRUMsYUFBQTtFQUNBLGdCQUFBO0VBRUQsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURLSDtBQ0ZFO0VBQ0MscUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFFQyxtQkFBQTtFQUNBLGlCQUFBO0VBRUQsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBREVIO0FDQUc7RUFFQyxVQUFBO0FEQ0o7QUNFRztFQUNDLHNCQUFBO0VBQ0EsVUFBQTtBREFKO0FFbERBO0VBQ0Msc0JBTG1DO0VBTW5DLFdBTDZCO0FGMEQ5QjtBRW5EQztFQUNDLFVBUDRCO0FGNEQ5QjtBRzFEQTtFQUNDLHlCQUxpQztFQU1qQyxXQUwyQjtBSGtFNUI7QUczREM7RUFDQyxVQVAwQjtBSG9FNUI7QUlsRUE7RUFDQyx5QkFMZ0M7RUFNaEMsV0FMMEI7QUowRTNCO0FJbkVDO0VBQ0MsVUFQeUI7QUo0RTNCO0FLMUVBO0VBQ0MseUJBTG1DO0VBTW5DLFdBTDZCO0FMa0Y5QjtBSzNFQztFQUNDLFVBUDRCO0FMb0Y5QjtBTWxGQTtFQUNDLHlCQUxtQztFQU1uQyxXQUw2QjtBTjBGOUI7QU1uRkM7RUFDQyxVQVA0QjtBTjRGOUI7QU81RkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBUCtGSjtBTzdGQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QVBnR0o7QU83RkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBUGdHSjtBTzdGQTtFQUNJLFVBQUE7QVBnR0o7QU85RkE7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBUGlHSjtBTzVGQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QVA4Rko7QU81RkE7RUFFSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QVA4Rko7QU81RkE7RUFDQSxXQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvR0FBQTtBUDhGQTtBTzVGQTtFQUNJLHVDQUFBO0VBQ0Esb0dBQUE7QVArRko7QU83RkE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBUGdHSjtBTzlGQTtFQUVJLG1CQUFBO0FQZ0dKO0FPN0ZBO0VBQ0ksb0dBQUE7QVBnR0o7QU85RkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBUGlHSjtBTy9GQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FQa0dKO0FPL0ZBO0VBQ0k7SUFDSSxjQUFBO0VQa0dOOztFT2hHRTtJQUNJLGlCQUFBO0VQbUdOOztFT2pHRTtJQUNJLFVBQUE7RVBvR047QUFDRjtBT2xHQTtFQUNJO0lBQ0ksb0JBQUE7RVBvR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWlubG9naW4vYWRtaW5sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5PVElGSUVSOiBDT1JFIFNUWUxFU1xuXG4vLyBDb250YWluZXJcblxuLm5vdGlmaWVyIHtcblxuXHQmX19jb250YWluZXIge1xuXG5cdFx0KiB7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdH1cblxuXHRcdCYtbGlzdCB7XG5cdFx0XHRtYXJnaW46IHtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHR9XG5cdFx0XHRwYWRkaW5nOiB7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR9XG5cdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0fVxuXG5cdH1cblxuXHQmX19ub3RpZmljYXRpb24ge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHBvc2l0aW9uOiBmaXhlZDsgLy8gT3ZlcmxheVxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gTm90aWZpY2F0aW9ucyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQsIGFuZCBnZXQgc2hvd24gKG9yIGFuaW1hdGVkIGluKSBkeW5hbWljYWxseSBieSB0aGUgQW5ndWxhciBjb21wb25lbnRcblx0XHR6LWluZGV4OiAxMDAwMDsgLy8gUHJldHR5IG11Y2ggcmFuZG9tIC4uLlxuXG5cdFx0Ly8gVGhpcyBhdHRyaWJ1dGUgZm9yY2VzIHRoaXMgZWxlbWVudCB0byBiZSByZW5kZXJlZCBvbiBhIG5ldyBsYXllciwgYnkgdGhlIEdQVSwgaW4gb3JkZXIgdG8gaW1wcm92ZSBpdHMgcGVyZm9ybWFuY2UgKCNwZXJmbWF0dGVycylcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG5cdFx0Ly8gVGhpcyBhdHRyaWJ1dGUgaW1wcm92ZXMgdGhlIG92ZXJhbGwgc2Nyb2xsaW5nIHBlcmZvcm1hbmNlIGZvciBmaXhlZCBwb3NpdGlvbiBlbGVtZW50cywgc3VjaCBhcyB0aGlzIG9uZSAoI3BlcmZtYXR0ZXJzKVxuXHRcdC8vIFNlZSA8aHR0cHM6Ly9iZW5mcmFpbi5jb20vaW1wcm92aW5nLWNzcy1wZXJmb3JtYW5jZS1maXhlZC1wb3NpdGlvbi1lbGVtZW50cy8+XG5cdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG5cdH1cblxufVxuIiwiLm5vdGlmaWVyX19jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubm90aWZpZXJfX2NvbnRhaW5lci1saXN0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwMDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b246aG92ZXIsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b246Zm9jdXMge1xuICBvcGFjaXR5OiAxO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODIpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWRlZmF1bHQgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1lcnJvciAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERTtcbiAgY29sb3I6ICNGRkY7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0taW5mbyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcbiAgY29sb3I6ICNGRkY7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tc3VjY2VzcyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RTtcbiAgY29sb3I6ICNGRkY7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0td2FybmluZyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5sb2dpbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIge1xuICB3aWR0aDogNTk1cHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAyNXB4IDQwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWxlZnQucG5nKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxvZ2luLXJpZ2h0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM0RDRENTU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciBpbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0QyRDRERjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogIzk1OTVBMTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWluIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWluOmhvdmVyIHtcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyAqL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNBODcgMCUsICNCQzJFNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOUMzRUU4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwICM5QzNFRTg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1wcmltYXJ5Om5vdCg6ZGlzYWJsZWQpOm5vdCguZGlzYWJsZWQpOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M0E4NyAwJSwgI0JDMkU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5zaWduLXVwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRENEQ1NTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5zaWduLXVwIGEge1xuICBjb2xvcjogI2M5MmM1ZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCB7XG4gICAgbWluLWhlaWdodDogMjI1cHg7XG4gIH1cblxuICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWcge1xuICAgIHdpZHRoOiAzNSU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAubG9naW4tc2VjdGlvbiB7XG4gICAgYWxpZ24taXRlbXM6IGluaGVyaXQ7XG4gIH1cbn0iLCIvLyBOT1RJRklFUjogTUFURVJJQUwgVEhFTUVcbi8vXG4vLyBUaGlzIG1hdGVyaWFsIHRoZW1lIHRyaWVzIGl0cyBiZXN0IHRvIGxvb2sgYXMgbWF0ZXJpYWwtZGVzaWduJ2lzaCBhcyBwb3NzaWJsZSAtIHJvdW5kIGVkZ2VzLCBzaGFkb3dzLCBhbmQgc21hbGwgYW5pbWF0aW9ucy5cbi8vIEFuZCwgb2YgY291cnNlLCB0aGFua3MgdG8gI0dvb2dsZSBmb3IgY3JlYXRpbmcgYW5kIHNoYXJpbmcgc3VjaCBhbiBhd2Vzb21lIGRlc2lnbiBsYW5ndWFnZSFcbi8vIEkgaGlnaGx5IGVuY291cmFnZSBldmVyeW9uZSB0byByZWFkIGludG8gdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjczogPGh0dHBzOi8vbWF0ZXJpYWwuZ29vZ2xlLmNvbS8+XG5cbiRub3RpZmllci1zaGFkb3ctY29sb3I6IHJnYmEoMCwgMCwgMCwgLjIpICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwge1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJveC1zaGFkb3c6IDAgMXB4IDNweCAkbm90aWZpZXItc2hhZG93LWNvbG9yO1xuXHRjdXJzb3I6IGRlZmF1bHQ7IC8vIERlZmF1bHQgY3Vyc29yLCBldmVuIHdoZW4gaG92ZXJpbmcgb3ZlciB0ZXh0XG5cdHBhZGRpbmc6IHtcblx0XHR0b3A6IDExcHg7XG5cdFx0cmlnaHQ6IDI2cHg7XG5cdFx0Ym90dG9tOiAxMHB4O1xuXHRcdGxlZnQ6IDI2cHg7XG5cdH1cblxuXHQubm90aWZpZXJfX25vdGlmaWNhdGlvbiB7XG5cblx0XHQmLW1lc3NhZ2Uge1xuXHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0bWFyZ2luOiB7IC8vIFJlc2V0IHBhcmFncmFwaCBkZWZhdWx0IHN0eWxlc1xuXHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdGJvdHRvbTogMDtcblx0XHRcdH1cblx0XHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cdFx0XHRsaW5lLWhlaWdodDogMzJweDtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHR9XG5cblx0XHQmLWJ1dHRvbiB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHR0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xuXHRcdFx0b3BhY2l0eTogLjU7XG5cdFx0XHRtYXJnaW46IHtcblx0XHRcdFx0cmlnaHQ6IC0xMHB4O1xuXHRcdFx0XHRsZWZ0OiAxMHB4O1xuXHRcdFx0fTtcblx0XHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRiYWNrZ3JvdW5kOiBub25lO1xuXHRcdFx0Y3Vyc29yOiBwb2ludGVyOyAvLyBNYWtlIGl0IG9idmlvdXMgdGhhdCB0aGUgXCJidXR0b25cIiAob3IsIG1vcmUgaG9uZXN0bHksIGljb24pIGlzIGNsaWNrYWJsZSAoI1VYKVxuXHRcdFx0cGFkZGluZzogNnB4O1xuXHRcdFx0d2lkdGg6IDMycHg7XG5cdFx0XHRoZWlnaHQ6IDMycHg7XG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG5cdFx0XHQmOmhvdmVyLFxuXHRcdFx0Jjpmb2N1cyB7XG5cdFx0XHRcdG9wYWNpdHk6IDE7IC8vIE1ha2UgbWUgXCJmZWVsXCIgdGhlIGNsaWNrYWJpbGl0eSB3aXRoIGEgdHJhbnNwYXJlbmN5IGNoYW5nZSAoI1VYKVxuXHRcdFx0fVxuXG5cdFx0XHQmOmFjdGl2ZSB7XG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGUoLjgyKTsgLy8gTWFrZSBtZSBcImZlZWxcIiB0aGUgY2xpY2sgYnkgYSBwdXNoIGJhY2sgKCNVWClcblx0XHRcdFx0b3BhY2l0eTogMTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHR9XG5cbn1cbiIsIi8vIE5PVElGSUVSOiBERUZBVUxUIFRZUEUgU1RZTEVTXG5cbiRub3RpZmllci1kZWZhdWx0LWJhY2tncm91bmQtY29sb3I6ICM0NDQgIWRlZmF1bHQ7XG4kbm90aWZpZXItZGVmYXVsdC1mb250LWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuJG5vdGlmaWVyLWRlZmF1bHQtaWNvbi1jb2xvcjogI0ZGRiAhZGVmYXVsdDtcblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWRlZmF1bHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbm90aWZpZXItZGVmYXVsdC1iYWNrZ3JvdW5kLWNvbG9yO1xuXHRjb2xvcjogJG5vdGlmaWVyLWRlZmF1bHQtZm9udC1jb2xvcjtcblxuXHQubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7IC8vIDE2eDE2IGZpeGVkIHNpemVcblx0XHRmaWxsOiAkbm90aWZpZXItZGVmYXVsdC1pY29uLWNvbG9yO1xuXHR9XG5cbn1cbiIsIi8vIE5PVElGSUVSOiBFUlJPUiBUWVBFIFNUWUxFU1xuXG4kbm90aWZpZXItZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI0Q5NTM0RiAhZGVmYXVsdDtcbiRub3RpZmllci1lcnJvci1mb250LWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuJG5vdGlmaWVyLWVycm9yLWljb24tY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1lcnJvciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yO1xuXHRjb2xvcjogJG5vdGlmaWVyLWVycm9yLWZvbnQtY29sb3I7XG5cblx0Lm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24geyAvLyAxNngxNiBmaXhlZCBzaXplXG5cdFx0ZmlsbDogJG5vdGlmaWVyLWVycm9yLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IElORk8gVFlQRSBTVFlMRVNcblxuJG5vdGlmaWVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERSAhZGVmYXVsdDtcbiRub3RpZmllci1pbmZvLWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItaW5mby1pY29uLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0taW5mbyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci1pbmZvLWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItaW5mby1mb250LWNvbG9yO1xuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHsgLy8gMTZ4MTYgZml4ZWQgc2l6ZVxuXHRcdGZpbGw6ICRub3RpZmllci1pbmZvLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IFNVQ0NFU1MgVFlQRSBTVFlMRVNcblxuJG5vdGlmaWVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QyAhZGVmYXVsdDtcbiRub3RpZmllci1zdWNjZXNzLWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItc3VjY2Vzcy1pY29uLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tc3VjY2VzcyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci1zdWNjZXNzLWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItc3VjY2Vzcy1mb250LWNvbG9yO1xuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHsgLy8gMTZ4MTYgZml4ZWQgc2l6ZVxuXHRcdGZpbGw6ICRub3RpZmllci1zdWNjZXNzLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IFdBUk5JTkcgVFlQRSBTVFlMRVNcblxuJG5vdGlmaWVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RSAhZGVmYXVsdDtcbiRub3RpZmllci13YXJuaW5nLWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItd2FybmluZy1pY29uLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0td2FybmluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci13YXJuaW5nLWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItd2FybmluZy1mb250LWNvbG9yO1xuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHsgLy8gMTZ4MTYgZml4ZWQgc2l6ZVxuXHRcdGZpbGw6ICRub3RpZmllci13YXJuaW5nLWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiICBcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMuc2Nzc1wiO1xuXG5cbi5sb2dpbi1zZWN0aW9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubG9naW4tc2VjdGlvbi1pbm5lcntcbiAgICB3aWR0aDogNTk1cHg7XG4gICAgbWluLWhlaWdodDogNDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLDAsMCwuMTc1KTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIHBhZGRpbmc6IDI1cHggNDBweDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1sZWZ0LnBuZyk7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIFxufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgaW1ne1xuICAgIHdpZHRoOiA1MCU7XG59XG4ubG9naW4tcmlnaHR7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwIDAgMjBweCAwO1xuICAgIHBhZGRpbmc6IDI1cHggNDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciBsYWJlbHtcblxuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzRENEQ1NTtcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG59XG4ubG9naW4tc2VjdGlvbi1pbm5lciBpbnB1dHtcblxuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDJENERGO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBjb2xvcjogIzk1OTVBMTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWlue1xud2lkdGg6IDEwMCU7XG5cbmJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG50cmFuc2l0aW9uOiAwLjVzO1xuYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG5mb250LXNpemU6IDEzcHg7XG5ib3JkZXItcmFkaXVzOiA4cHg7XG5oZWlnaHQ6IDM1cHg7XG5mb250LWZhbWlseTogJ1JvYm90byc7XG5tYXJnaW4tdG9wOiAxMHB4O1xuYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tc2lnbi1pbjpob3ZlcntcbiAgICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7ICovXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzQTg3IDAlLCAjQkMyRTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWNvbnRyb2w6Zm9jdXN7XG4gICAgYm9yZGVyLWNvbG9yOiAjOUMzRUU4O1xuICAgIG91dGxpbmU6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCAjOUMzRUU4O1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmZvcm0tZ3JvdXB7XG5cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZle1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M0E4NyAwJSwgI0JDMkU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4uc2lnbi11cHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM0RDRENTU7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5zaWduLXVwIGF7XG4gICAgY29sb3I6IHJnYigyMDEsNDQsOTUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xuICAgIC5sb2dpbi1zZWN0aW9uLWlubmVye1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnR7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIyNXB4O1xuICAgIH1cbiAgICAubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWcge1xuICAgICAgICB3aWR0aDogMzUlO1xuICAgIH1cbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xuICAgIC5sb2dpbi1zZWN0aW9ue1xuICAgICAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/adminlogin/adminlogin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/adminlogin/adminlogin.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminloginComponent", function() { return AdminloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin.service */ "./src/app/admin/adminlogin/admin.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth.service */ "./src/app/admin/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AdminloginComponent = class AdminloginComponent {
    constructor(toastServ, router, fb, adminServ, authServ) {
        this.toastServ = toastServ;
        this.router = router;
        this.fb = fb;
        this.adminServ = adminServ;
        this.authServ = authServ;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    }
    ngOnInit() {
        this.adminLogin = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    loginAdmin(data) {
        this.adminServ.login(data).subscribe((data) => {
            if (data.code === 200) {
                this.toastServ.success('Logged In Successfully', '', {
                    timeOut: 3000
                });
                console.log("data", data);
                this.authServ.sendToken(data.data.token);
                this.router.navigate(['admin/home']);
            }
            else {
                this.toastServ.error('Invalid Login details', '', {
                    timeOut: 3000
                });
            }
        });
    }
};
AdminloginComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AdminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminlogin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adminlogin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adminlogin.component.scss */ "./src/app/admin/adminlogin/adminlogin.component.scss")).default]
    })
], AdminloginComponent);



/***/ }),

/***/ "./src/app/admin/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/admin/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _admin_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin/auth.service */ "./src/app/admin/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(auth, myRoute) {
        this.auth = auth;
        this.myRoute = myRoute;
    }
    canActivate(next, state) {
        if (this.auth.isLoggedIn()) {
            return true;
        }
        else {
            this.myRoute.navigate(["admin"]);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _admin_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/admin/auth.service.ts":
/*!***************************************!*\
  !*** ./src/app/admin/auth.service.ts ***!
  \***************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthService = class AuthService {
    constructor(myRoute) {
        this.myRoute = myRoute;
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
        this.myRoute.navigate(['admin']);
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



/***/ })

}]);
//# sourceMappingURL=app-admin-admin-module-es2015.js.map