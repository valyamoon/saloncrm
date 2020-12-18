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
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"dashboardWrapper\">\n  <div id=\"navigationBar\">\n    <app-header></app-header>\n  </div>\n  <div id=\"mainSection\">\n    <div\n      class=\"selectorSection\"\n      [ngClass]=\"isSelectorShown ? 'selectorSection' : 'danger'\"\n    >\n      <div class=\"menus-app\" (click)=\"hideMenu()\">\n        <div class=\"clearfix profile-sm\">\n          <div class=\"float-left font-weight-bold\">{{ adminName }}</div>\n          <div class=\"float-right\">\n            <i class=\"material-icons\" (click)=\"logout()\" title=\"Logout\">\n              exit_to_app\n            </i>\n          </div>\n        </div>\n        <a class=\"selectors\" routerLink=\"dashboard\" routerLinkActive=\"active\"\n          >Dashboard</a\n        >\n        <a class=\"selectors\" routerLink=\"manage-admin\" routerLinkActive=\"active\"\n          >Manage Admin</a\n        >\n        <a class=\"selectors\" routerLink=\"salons\" routerLinkActive=\"active\"\n          >Manage Salons</a\n        >\n        <a class=\"selectors\" routerLink=\"users\" routerLinkActive=\"active\">\n          Manage Users</a\n        >\n        <a class=\"selectors\" routerLink=\"categories\" routerLinkActive=\"active\"\n          >Manage Categories</a\n        >\n        <a class=\"selectors\" routerLink=\"services\" routerLinkActive=\"active\"\n          >Manage Services</a\n        >\n        <a class=\"selectors\" routerLink=\"roles\" routerLinkActive=\"active\"\n          >Manage Roles</a\n        >\n        <a class=\"selectors\" routerLink=\"manage-plan\" routerLinkActive=\"active\"\n          >Manage Plans</a\n        >\n        <a\n          class=\"selectors\"\n          routerLink=\"subscribed-salons\"\n          routerLinkActive=\"active\"\n          >Subscribed Salons</a\n        >\n        <a class=\"selectors\" routerLink=\"detail\" routerLinkActive=\"active\"\n          >Admin Details</a\n        >\n        <a class=\"selectors\" routerLink=\"bookings\" routerLinkActive=\"active\"\n          >Bookings</a\n        >\n        <!-- <a class=\"selectors\" routerLink=\"other\" routerLinkActive=\"active\"\n          >Other</a\n        > -->\n        <!-- <a class=\"selectors\" routerLink=\"location\" routerLinkActive=\"active\"\n          >Location   subscribed-salons</a\n        > -->\n      </div>\n    </div>\n    <div\n      class=\"selectedSection\"\n      [ngClass]=\"isSelectorShown ? 'selectedSection' : 'fullShow'\"\n    >\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/booking-details/booking-details.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/booking-details/booking-details.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"categoriesWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"headerArea\">\n          <app-header-text></app-header-text>\n        </div>\n      </div>\n    </div>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Date</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Date:</span>\n            {{ element.date | date: \"longDate\" }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"salonname\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Salon Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Salon Name:</span>\n            {{ element.salonName }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"username\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>User Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">User Name:</span>\n            {{ element.userName }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"orderid\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Order Id</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Order Id:</span>\n            {{ element.orderId }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Action:</span>\n            <div class=\"buttonArea\">\n              <button\n                class=\"btn-primary btn-sign-in can\"\n                (click)=\"cancelBooking(element)\"\n              >\n                Cancel\n              </button>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"totalCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n  <app-loader *ngIf=\"isLoader\"></app-loader>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/categories/categories.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/categories/categories.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"categoriesWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"headerArea\">\n          <app-header-text></app-header-text>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"btnActionArea\">\n          <button\n            class=\"btn btn-primary btn-sign-in\"\n            (click)=\"openAddCategoryModal('add')\"\n          >\n            Add Category\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- \f<Modal Popup for add categories start here> -->\n  <div class=\"modalSection\" *ngIf=\"isAddModal\">\n    <div class=\"modal-content-area\">\n      <div class=\"header\">\n        Add Category\n      </div>\n      <form [formGroup]=\"categoryForm\">\n        <label>Category Name:</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Enter Category Name\"\n          formControlName=\"name\"\n        />\n      </form>\n      <button\n        *ngIf=\"!isShowUpdate\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"categoryForm.invalid\"\n        (click)=\"addCategory(categoryForm.value)\"\n      >\n        Add\n      </button>\n      <button\n        *ngIf=\"isShowUpdate\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"categoryForm.invalid\"\n        (click)=\"update(categoryForm.value)\"\n      >\n        Update\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"dismissModal()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n\n  <!-- \f<Modal Popup for add categories end here> -->\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"catname\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.catname }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"isactive\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-slide-toggle\n              [checked]=\"element.isActive\"\n              [disabled]=\"disabled\"\n            ></mat-slide-toggle>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <div class=\"\" (click)=\"deleteCategory(element)\">\n                <img\n                  src=\"../../../../assets/images/delete.svg\"\n                  alt=\"Delete\"\n                  title=\"Delete Category\"\n                />\n              </div>\n              <div class=\"editBtn\" (click)=\"openAddCategoryModal(element)\">\n                <img\n                  src=\"../../../../assets/images/edit.svg\"\n                  width=\"16px\"\n                  alt=\"Update\"\n                  title=\"Update Category\"\n                />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"adminCategoriesCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/confirmation/confirmation.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/confirmation/confirmation.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n  <div class=\"modal-header\">\n    <h4>{{ title || \"Confirm\" }}</h4>\n  </div>\n  <div class=\"modal-body\">\n    <p>{{ message || \"Are you sure?\" }}</p>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancel()\">\n      Cancel\n    </button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">\n      OK\n    </button>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/dashboard/dashboard.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/dashboard/dashboard.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"cards\">\n  <div class=\"card\">\n    <span class=\"cardText\">Salon Request</span>\n    <h2>{{ limit }}</h2>\n  </div>\n  <div class=\"card\">\n    <span class=\"cardText\">Active Salons</span>\n    <h2>{{ ActiveSalonsCount }}</h2>\n  </div>\n  <div class=\"card\">\n    <span class=\"cardText\">Users</span>\n    <h2>{{ ActiveUsersCount }}</h2>\n  </div>\n</div>\n<div class=\"headerSection\">\n  <span class=\"breadCrumb\"></span\n  ><app-header-text class=\"header\"></app-header-text>\n</div>\n<div class=\"table-responsive tablecustom\">\n  <div class=\"example-container mat-elevation-z8\">\n    <table mat-table [dataSource]=\"SalonRequestList\">\n      <!-- Position Column -->\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef>Name</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Name:</span>\n          {{ element.name }}\n        </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"salonaddress\">\n        <th mat-header-cell *matHeaderCellDef>Address</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Address:</span>\n          {{ element.salonaddress }}\n        </td>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"contact\">\n        <th mat-header-cell *matHeaderCellDef class=\"status-check\">Contact</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Contact:</span>\n          {{ element.contact }}\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"isactive\">\n        <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n        <td mat-cell *matCellDef=\"let element\">\n          <span class=\"mobile-label\">Status:</span>\n          <mat-slide-toggle\n            [checked]=\"element.isActive\"\n            [disabled]=\"disabled\"\n          ></mat-slide-toggle>\n        </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef class=\"status-check-action\">\n          Action\n        </th>\n        <td mat-cell *matCellDef=\"let element\" class=\"btnArea\">\n          <span class=\"mobile-label\">Action:</span>\n          <button\n            class=\"btn btn-primary btn-sign-in btnsec\"\n            (click)=\"approveSalonRequest(element)\"\n          >\n            Approve\n          </button>\n\n          <div class=\"suspend-sec\" (click)=\"declineSalonRequest(element)\">\n            <img\n              src=\"../../../../assets/images/suspend.svg\"\n              title=\"Suspend Salon\"\n              alt=\"Suspend Salon\"\n            />\n          </div>\n          <div class=\"suspend-sec\" (click)=\"showSalonDetails(element)\">\n            <img\n              src=\"../../../../assets/images/view.svg\"\n              title=\"Salon Detail\"\n              alt=\" Salon Detail\"\n            />\n          </div>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n    </table>\n\n    <mat-paginator\n      [length]=\"limit\"\n      [pageSize]=\"count\"\n      (page)=\"paginate($event)\"\n      [pageSizeOptions]=\"[5, 10, 15, 20]\"\n      showFirstLastButtons\n    ></mat-paginator>\n    <div *ngIf=\"noRecordFound\" class=\"noRecords\">\n      <div class=\"noRec\">No Records Found</div>\n    </div>\n  </div>\n</div>\n\n<div class=\"userDetailsOverlay\" *ngIf=\"showSalonDetail\">\n  <div class=\"main-section-area col-lg-6 col-md-6 col-sm-12\">\n    <div class=\"header\">\n      <h1>Salon Details</h1>\n    </div>\n    <div class=\"main-section\">\n      <div class=\"field-row img\">\n        <img src=\"{{ salonRequestDetails.image }}\" class=\"profilePic\" />\n      </div>\n      <div class=\"field-row\">\n        <label>Name:</label>\n        <div class=\"details\">{{ salonRequestDetails.name }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Email:</label>\n        <div class=\"details\">{{ salonEmail }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Address:</label>\n        <div class=\"details\">{{ salonRequestDetails.salonaddress }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Contact:</label>\n        <div class=\"details\">{{ salonRequestDetails.contact }}</div>\n      </div>\n      <div class=\"field-row\">\n        <label>Close Time:</label>\n        <div class=\"details\">\n          {{ salonRequestDetails.closetime | date: \"shortTime\" }}\n        </div>\n      </div>\n      <div class=\"field-row\">\n        <label>Open Time:</label>\n        <div class=\"details\">\n          {{ salonRequestDetails.opentime | date: \"shortTime\" }}\n        </div>\n      </div>\n    </div>\n    <div class=\"btn-Area\">\n      <button\n        class=\" btn btn-sign-in btn-primary\"\n        (click)=\"closeSalonDetails()\"\n      >\n        Close\n      </button>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"modalSection\"  *ngIf=\"isDeleteDialog\">\n        <div class=\"modal-content-area\">\n                          <div><h1>Are you sure you want to delete?</div>\n                            <div><p>warning you are about to delete role!</p></div>\n                            <div class=\"yesNoBtn\">\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"confirm('yes')\">Yes</button>\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"reject('no')\">No</button>\n                            </div>\n                      </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"dialogWrapper\">\n  <div class=\"data-content  col-lg-6 col-md-6 col-sm-12\">\n    <div class=\"warning\">Are you sure you want to delete this?</div>\n    <div class=\"btnArea\">\n      <button class=\"btn btn-sign-in\" (click)=\"confirm('yes')\">Yes</button\n      ><button class=\"btn btn-sign-in\" (click)=\"confirm('no')\">No</button>\n    </div>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/details/details.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/details/details.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"detailsWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <div class=\"headerArea\">\n          <app-header-text></app-header-text>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"btnActionArea\">\n          <button\n            [disabled]=\"!isAddCompleted\"\n            class=\"btn btn-primary btn-sign-in\"\n            (click)=\"openAddCategoryModal('add')\"\n          >\n            Add\n          </button>\n          <button\n            class=\"btn btn-primary btn-sign-in\"\n            (click)=\"openAddCategoryModal('edit')\"\n          >\n            Update\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"main-content col-lg-5 col-md-6 col-sm-12\">\n    <div class=\"fields\">\n      <label>Phone</label>\n      <div class=\"field\">{{ adminDetails?.phone }}</div>\n    </div>\n    <div class=\"fields\">\n      <label>Code</label>\n      <div class=\"field\">+{{ adminDetails?.code }}</div>\n    </div>\n    <div class=\"fields\">\n      <label>About</label>\n      <div class=\"field\">{{ adminDetails?.about }}</div>\n    </div>\n  </div>\n  <div class=\"modalSection\" *ngIf=\"isModal\">\n    <div class=\"modal-content-area col-lg-4 col-md-4 col-sm-12\">\n      <form [formGroup]=\"adminDetailsForm\">\n        <label>Phone</label>\n        <input\n          type=\"number\"\n          class=\"form-control\"\n          formControlName=\"phone\"\n          placeholder=\"Contact Number\"\n        />\n        <div\n          *ngIf=\"phone.invalid && (phone.dirty || phone.touched)\"\n          class=\"erroralert\"\n        >\n          <div *ngIf=\"phone.errors.required\">\n            Phone is required.\n          </div>\n          <div *ngIf=\"phone.errors.minlength\">\n            Phone must be at least 3 characters long.\n          </div>\n          <div *ngIf=\"phone.errors.maxlength\">\n            Cannot be more than 11\n          </div>\n        </div>\n        <label>Country Code</label>\n        <select class=\"select-css\" formControlName=\"code\">\n          <option *ngFor=\"let item of countriesData\" [ngValue]=\"item.code\"\n            >{{ item.name }} {{ item.code }}</option\n          >\n        </select>\n        <label>About Us</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"about\"\n          placeholder=\"About Us\"\n        />\n        <div style=\"display: flex;justify-content: space-between;\">\n          <button\n            *ngIf=\"isAdd\"\n            class=\"btn-sign-in bts\"\n            [disabled]=\"adminDetailsForm.invalid\"\n            (click)=\"addDetail(adminDetailsForm.value)\"\n          >\n            Add\n          </button>\n          <button\n            *ngIf=\"!isAdd\"\n            class=\"btn-sign-in bts\"\n            [disabled]=\"adminDetailsForm.invalid\"\n            (click)=\"updateDetails(adminDetailsForm.value)\"\n          >\n            Update\n          </button>\n          <button class=\"btn-sign-in bts\" (click)=\"dismissModal()\">\n            Cancel\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header-text/header-text.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header-text/header-text.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>{{headerTitle}}</h1>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header/header.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header/header.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n  <div class=\"headerSection col-lg-12 col-sm-12 col-md-12\">\n    <div class=\"logo col-lg-6\">\n      <div class=\"hamburgerIcon\" (click)=\"showSelection()\">\n        <div class=\"bar1\"></div>\n        <div class=\"bar2\"></div>\n        <div class=\"bar3\"></div>\n      </div>\n    </div>\n    <div class=\"detailSection col-lg-6 \">\n      <div class=\"username\">\n        {{ adminName }}\n      </div>\n      <div class=\"logoutbutton\">\n        <div class=\"logout\" (click)=\"showLogoutButton()\">\n          <span id=\"downArrow\"></span>\n        </div>\n        <div class=\"logoutItem\" *ngIf=\"showLogout\" (click)=\"logout()\">\n          Logout\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/loader/loader.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/loader/loader.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"spinner\">\n  <mat-progress-spinner\n    class=\"example-margin\"\n    [color]=\"color\"\n    [mode]=\"mode\"\n    [value]=\"value\"\n  >\n  </mat-progress-spinner>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admin-manage-wrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n    <div class=\"actionButtons\">\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"openRegisterModal()\">\n        Register Admin\n      </button>\n    </div>\n  </div>\n\n  <div class=\"modalSection\" *ngIf=\"isAddModal\">\n    <div class=\"modal-content-area col-lg-6 col-md-6 col-sm-9\">\n      <div class=\"header\">\n        {{ modalHeaderText }}\n      </div>\n      <form [formGroup]=\"registerAdminForm\">\n        <div class=\"register-sec\">\n          <label>Email:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            placeholder=\"Enter Email\"\n            formControlName=\"email\"\n          />\n          <div\n            *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n            class=\"error-show\"\n          >\n            <div *ngIf=\"email.errors.required\">\n              Email is required.\n            </div>\n            <div *ngIf=\"email.errors.pattern\">\n              Enter Valid Email\n            </div>\n          </div>\n        </div>\n        <div class=\"register-sec\">\n          <label>Password:</label>\n          <input\n            type=\"password\"\n            class=\"form-control\"\n            placeholder=\"Enter Password\"\n            formControlName=\"password\"\n          />\n          <div\n            *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n            class=\"error-show\"\n          >\n            <div *ngIf=\"password.errors.required\">\n              Password is required.\n            </div>\n            <div *ngIf=\"password.errors.minlength\">\n              Password must be minimum 3 letters\n            </div>\n            <div *ngIf=\"password.errors.maxlength\">\n              Maximum allowed letters are 10\n            </div>\n          </div>\n        </div>\n      </form>\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"registerAdminForm.invalid\"\n        (click)=\"registerUser(registerAdminForm.value)\"\n      >\n        Add\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"dismissModal()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\">\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef>Email</th>\n          <td mat-cell *matCellDef=\"let element\" class=\"valueField\">\n            {{ element.email }}\n          </td>\n        </ng-container>\n\n        <!-- <ng-container matColumnDef=\"isactive\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-slide-toggle\n              [checked]=\"element.isActive\"\n              [disabled]=\"disabled\"\n              [(ngModel)]=\"toggle\"\n              (change)=\"onChange($event)\"\n            ></mat-slide-toggle>\n          </td>\n        </ng-container> -->\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <!-- <button\n                class=\"btn btn-primary btn-sign-in  btn-sec\"\n                (click)=\"deleteAdmin(element)\"\n              >\n                Delete\n              </button> -->\n              <div class=\"\" (click)=\"deleteAdmin(element)\">\n                <img\n                  src=\"../../../../assets/images/delete.svg\"\n                  title=\"Delete Admin\"\n                />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"adminCountTotal\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manageplan/manageplan.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manageplan/manageplan.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"managePlanWrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n    <div class=\"actionButtons\">\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        (click)=\"openAddPlanPanel('add')\"\n      >\n        Add Plan\n      </button>\n    </div>\n  </div>\n  <div class=\"mainSection\">\n    <div class=\"col-md-4\" *ngFor=\"let item of planListArray\">\n      <div class=\"card\">\n        <h4>\n          {{ item.id }}\n        </h4>\n        <h3 class=\"rate\">\n          {{ item.amount | currency: \"USD\" }}\n        </h3>\n        <p>Enjoy the benefits of this package for a {{ item.interval }}</p>\n        <a (click)=\"deletePlan(item)\" class=\"delete-btn\">\n          <img\n            src=\"../../../../assets/images/delete.svg\"\n            alt=\"Delete\"\n            title=\"Delete Plan\"\n          />\n        </a>\n        <!-- <a (click)=\"updatePlan(item)\">\n          <img\n            src=\"../../../../assets/images/edit.svg\"\n            alt=\"Update\"\n            title=\"Update Plan\"\n          />\n        </a> -->\n\n        <!-- <button\n          class=\"btn-primary btn btn-sign-in edit\"\n          (click)=\"deletePlan(item)\"\n        >\n          Delete\n        </button> -->\n      </div>\n    </div>\n\n    <!-- <div class=\"plan-card col-md-4\" *ngFor=\"let item of planListArray\">\n      <div class=\"form-group\">\n        <h4>\n          {{ item.id }}\n        </h4>\n        <h3 class=\"rate\">\n          {{ item.amount | currency: \"USD\" }}\n        </h3>\n      </div>\n      <div class=\"clearfix\">\n        <div>Enjoy the benefits of this package for a {{ item.interval }}</div>\n      </div>\n      <div class=\"plan-edit text-right\">\n        <button\n          class=\"btn-primary btn btn-sign-in edit\"\n          (click)=\"deletePlan(item)\"\n        >\n          Delete\n        </button>\n      </div>\n    </div> -->\n  </div>\n\n  <div class=\"addPlanModel\" *ngIf=\"isAddPlan\">\n    <div class=\"modal-content col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"headerText\">\n        <h2>{{ headertext }}</h2>\n      </div>\n      <form [formGroup]=\"savePlan\">\n        <div class=\"inpFeilds\">\n          <label>Plan Name:</label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            formControlName=\"planname\"\n            placeholder=\"Name\"\n          />\n        </div>\n        <div class=\"inpFeilds\">\n          <label>Amount:</label>\n          <input\n            type=\"number\"\n            class=\"form-control\"\n            formControlName=\"amount\"\n            placeholder=\"Amount\"\n          />\n        </div>\n        <div class=\"inpFeilds\">\n          <label>Trial Period:</label>\n          <input\n            type=\"number\"\n            class=\"form-control\"\n            formControlName=\"trialperiod\"\n            placeholder=\"Trial Days\"\n          />\n        </div>\n        <div class=\"inpFeilds\">\n          <label>Cycle:</label>\n          <select class=\"select-css selectOption\" formControlName=\"interval\">\n            <option *ngFor=\"let item of intervals\" [ngValue]=\"item.value\">{{\n              item.key\n            }}</option>\n          </select>\n        </div>\n        <div class=\"inpFeilds\">\n          <button\n            *ngIf=\"!isEditPlan\"\n            class=\"btn btn-primary btn-sign-in\"\n            [disabled]=\"savePlan.invalid\"\n            (click)=\"add(savePlan.value)\"\n          >\n            Add\n          </button>\n          <button\n            *ngIf=\"isEditPlan\"\n            class=\"btn btn-primary btn-sign-in\"\n            [disabled]=\"savePlan.invalid\"\n            (click)=\"update(savePlan.value)\"\n          >\n            Update\n          </button>\n\n          <button class=\"btn btn-primary btn-sign-in\" (click)=\"close('add')\">\n            Cancel\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"noRec\" *ngIf=\"noRecordsFound\">\n    No Records Found\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/other/other.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/other/other.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"managePlanWrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n    <div class=\"actionButtons\"></div>\n  </div>\n  <div class=\"mainSection\">\n    <div class=\"sections\">\n      <h2>About Us</h2>\n      <div class=\"fields\">\n        <textarea name=\"comment\" form=\"usrform\">Enter text here...</textarea>\n      </div>\n    </div>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/roles/roles.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/roles/roles.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rolesWrapper\">\n  <div class=\"actionButtons\">\n    <div class=\"headerArea\">\n      <app-header-text></app-header-text>\n    </div>\n    <div class=\"btnActionArea\">\n      <button\n        class=\"btn btn-primary btn-sign-in\"\n        (click)=\"openAddRolesModal('add')\"\n      >\n        Add Roles\n      </button>\n    </div>\n  </div>\n\n  <!-- <> -->\n\n  <!-- <div class=\"confirmDialog\" *ngIf=\"isDeleteDialog\">\n        <div class=\"modal-content-section\">\n                          <div><h1>Are you sure you want to delete?</h1></div>\n                            <div><p>warning you are about to delete role!</p></div>\n                            <div class=\"yesNoBtn\">\n                                <button click)=\"confirmDialog()\">CHC</button>\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"confirm('yes')\">Yes</button>\n                                <button class=\"btn btn-primary btn-sign-in\" (click)=\"reject('no')\">No</button>\n                            </div>\n        </div>\n  </div> -->\n  <!-- <> -->\n\n  <!-- \f<Modal Popup for add categories start here> -->\n  <div class=\"modalSection\" *ngIf=\"isAddModal\">\n    <div class=\"modal-content-area col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"header\">\n        {{ modalHeaderText }}\n      </div>\n      <form [formGroup]=\"roleForm\">\n        <label>Role Name:</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"Enter Category Name\"\n          formControlName=\"name\"\n        />\n      </form>\n      <button\n        *ngIf=\"isAdd\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"roleForm.invalid\"\n        (click)=\"saveRole(roleForm.value)\"\n      >\n        Add\n      </button>\n      <button\n        *ngIf=\"!isAdd\"\n        class=\"btn btn-primary btn-sign-in\"\n        [disabled]=\"roleForm.invalid\"\n        (click)=\"updateRole(roleForm.value)\"\n      >\n        Update\n      </button>\n      <button class=\"btn btn-primary btn-sign-in\" (click)=\"dismissModal()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n\n  <!-- \f<Modal Popup for add categories end here> -->\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">{{ element.name }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <!-- <button\n                [disabled]=\"disabled\"\n                class=\"btn btn-primary btn-sign-in  btn-sec\"\n                (click)=\"deleteRole(element)\"\n              >\n                Delete\n              </button>\n\n              <button\n                class=\"btn btn-primary btn-sign-in  btn-sec\"\n                (click)=\"openAddRolesModal(element)\"\n              >\n                Edit\n              </button> -->\n              <div class=\"disabledClass\" (click)=\"deleteRole(element)\">\n                <img src=\"../../../../assets/images/delete.svg\" />\n              </div>\n              <div class=\"disabledClass\" (click)=\"openAddRolesModal(element)\">\n                <img src=\"../../../../assets/images/edit-icon.svg\" />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"rolesCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n    </div>\n    <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n      <div class=\"noRec\">No Records Found</div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"salonListWrapper\">\n  <div class=\"headerSection\">\n    <span class=\"breadCrumb\"></span>\n    <app-header-text class=\"header\"></app-header-text>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Name\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Name:</span>\n            {{ element.name }}\n          </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"salonaddress\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Address\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Address:</span>\n            {{ element.salonaddress }}\n          </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"contact\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Contact\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Contact:</span>\n            {{ element.contact }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"opentime\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Open Time\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Open Time:</span>\n            {{ element.opentime | date: \"shortTime\" }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"closetime\">\n          <th\n            mat-header-cell\n            *matHeaderCellDef\n            class=\"status-check\"\n            mat-sort-header\n          >\n            Close Time\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Close Time:</span>\n            {{ element.closetime | date: \"shortTime\" }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">\n            Action\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Action:</span>\n            <div class=\"actionArea\">\n              <div class=\"suspend-sec\" (click)=\"declineSalonRequest(element)\">\n                <img\n                  src=\"../../../../assets/images/suspend.svg\"\n                  title=\"Suspend Salon\"\n                  alt=\"Suspend Salon\"\n                />\n              </div>\n\n              <div class=\"suspend-sec\" (click)=\"showSalonDetails(element)\">\n                <img\n                  src=\"../../../../assets/images/view.svg\"\n                  title=\"Salon Details\"\n                  alt=\"Salon Details\"\n                />\n              </div>\n              <button\n                class=\"btn btn-primary btn-sign-in btn-sus\"\n                (click)=\"getMontlyUser(element)\"\n              >\n                Users\n              </button>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"ActiveSalonsCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"userDetailsOverlay\" *ngIf=\"showSalonDetail\">\n    <div class=\"main-section-area col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"header\" *ngIf=\"!isCountShow\">\n        <h1>Salon Details</h1>\n      </div>\n      <div class=\"main-section\" *ngIf=\"!isCountShow\">\n        <div class=\"field-row img\">\n          <img src=\"{{ salonDetails.image }}\" class=\"profilePic\" />\n        </div>\n        <div class=\"field-row\">\n          <label>Name:</label>\n          <div class=\"details\">{{ salonDetails.name }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Email:</label>\n          <div class=\"details\">{{ salonEmail }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Address:</label>\n          <div class=\"details\">{{ salonDetails.salonaddress }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Contact:</label>\n          <div class=\"details\">{{ salonDetails.contact }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Close Time:</label>\n          <div class=\"details\">\n            {{ salonDetails.closetime | date: \"shortTime\" }}\n          </div>\n        </div>\n        <div class=\"field-row\">\n          <label>Open Time:</label>\n          <div class=\"details\">\n            {{ salonDetails.opentime | date: \"shortTime\" }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"countShow\" *ngIf=\"isCountShow\">\n        <h1>{{ monthlyUserCount }}</h1>\n      </div>\n\n      <div class=\"btn-Area\">\n        <button\n          class=\" btn btn-sign-in btn-primary\"\n          (click)=\"closeSalonDetails()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/services/services.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/services/services.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"servicesWrapper\">\n  <div class=\"headerSection\">\n    <app-header-text></app-header-text>\n    <div class=\"actionBtn\">\n      <button\n        class=\"btn btn-primary btn-sign-in btnService\"\n        (click)=\"openAddServiceModal('add')\"\n      >\n        Add Service\n      </button>\n    </div>\n  </div>\n  <div class=\"addServiceModal\" *ngIf=\"addServiceModal\">\n    <div class=\"modalContent  col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"headerText\">\n        <h3>{{ action }}Service</h3>\n      </div>\n      <div class=\"mainSection\">\n        <form class=\"serviceForm\" #form [formGroup]=\"saveServiceForm\">\n          <div class=\"fields\" *ngIf=\"!isShowUpdate\">\n            <label class=\"label\">Select Category:</label>\n            <select class=\"select-css selectOption\" formControlName=\"category\">\n              <option *ngFor=\"let item of categoriesList\" [value]=\"item._id\">{{\n                item.catname\n              }}</option>\n            </select>\n          </div>\n          <div class=\"fields\">\n            <label class=\"label\">Service Name:</label>\n            <input\n              type=\"text\"\n              class=\"form-control pls\"\n              placeholder=\"Enter service name\"\n              formControlName=\"name\"\n            />\n          </div>\n          <div class=\"fields\">\n            <button\n              name=\"addBtn\"\n              *ngIf=\"!isShowUpdate\"\n              class=\"btn btn-primary btn-sign-in\"\n              [disabled]=\"saveServiceForm.invalid\"\n              (click)=\"addService(saveServiceForm.value)\"\n            >\n              Add\n            </button>\n            <button\n              *ngIf=\"isShowUpdate\"\n              class=\"btn btn-primary btn-sign-in\"\n              [disabled]=\"saveServiceForm.invalid\"\n              (click)=\"updateData(saveServiceForm.value)\"\n            >\n              Update\n            </button>\n            <button\n              class=\"btn btn-primary btn-sign-in\"\n              (click)=\"dismissModal()\"\n            >\n              Cancel\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.name }}\n          </td>\n        </ng-container>\n\n        <!-- <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Status</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <mat-slide-toggle\n              [checked]=\"element.isActive\"\n              [disabled]=\"disabled\"\n            ></mat-slide-toggle>\n          </td>\n        </ng-container> -->\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef class=\"status-check\">Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"buttonArea\">\n              <!-- <button\n                    class=\"btn btn-primary btn-sign-in  btn-sec\"\n                    (click)=\"deleteService(element)\"\n                  >\n                    Delete\n                  </button> -->\n              <div class=\"\" (click)=\"deleteService(element)\">\n                <img\n                  src=\"../../../../assets/images/delete.svg\"\n                  title=\"Delete Service\"\n                />\n              </div>\n              <div class=\"editBtn\" (click)=\"openAddServiceModal(element)\">\n                <img\n                  src=\"../../../../assets/images/edit.svg\"\n                  width=\"16px\"\n                  title=\"Update Service\"\n                />\n              </div>\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"servicesCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"subscriptionListWrapper\">\n  <div class=\"header\">\n    <app-header-text></app-header-text>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.salon.name }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"startdate\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            Subscribed On\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.created_on }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"enddate\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>\n            Renewal Date\n          </th>\n          <td mat-cell *matCellDef=\"let element\">\n            {{ element.expiry_date }}\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"salonSubscriptionCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"UserListWrapper\">\n  <div class=\"headerSection\">\n    <span class=\"breadCrumb\"></span\n    ><app-header-text class=\"header\"></app-header-text>\n  </div>\n  <input\n    class=\"from-control search\"\n    (keyup)=\"applyFilter($event)\"\n    placeholder=\"Search\"\n  />\n\n  <div class=\"table-responsive tablecustom\">\n    <div class=\"example-container mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n        <!-- Position Column -->\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"firstName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>First Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">First Name:</span>\n            {{ element.firstName }}\n          </td>\n        </ng-container>\n\n        <!-- Weight Column -->\n        <ng-container matColumnDef=\"lastName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Last Name</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Last Name:</span>\n            {{ element.lastName }}\n          </td>\n        </ng-container>\n\n        <!-- Symbol Column -->\n        <ng-container matColumnDef=\"email\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Email:</span>\n            {{ element.email }}\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"phone\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Contact</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Contact:</span>\n            {{ element.phone }}\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"action\">\n          <th mat-header-cell *matHeaderCellDef>Action</th>\n          <td mat-cell *matCellDef=\"let element\">\n            <span class=\"mobile-label\">Action:</span>\n            <div class=\"suspend-sec\" (click)=\"viewUserDetails(element)\">\n              <img\n                src=\"../../../../assets/images/view.svg\"\n                title=\"User Details\"\n                alt=\"User Details\"\n              />\n            </div>\n          </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n      </table>\n\n      <mat-paginator\n        [length]=\"ActiveUsersCount\"\n        [pageSize]=\"count\"\n        (page)=\"paginate($event)\"\n        [pageSizeOptions]=\"[5, 10, 15, 20]\"\n        showFirstLastButtons\n      ></mat-paginator>\n      <div *ngIf=\"noRecordsFound\" class=\"noRecords\">\n        <div class=\"noRec\">No Records Found</div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"userDetailsOverlay\" *ngIf=\"showUserDetails\">\n    <div class=\"main-section-area col-lg-6 col-md-6 col-sm-12\">\n      <div class=\"header\">\n        <h1>User Details</h1>\n      </div>\n      <div class=\"main-section\">\n        <div class=\"field-row img\">\n          <img src=\"{{ userDetails.profilepic }}\" class=\"profilePic\" />\n        </div>\n        <div class=\"field-row\">\n          <label>First Name:</label>\n          <div class=\"details\">{{ userDetails.firstName }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Last Name:</label>\n          <div class=\"details\">{{ userDetails.lastName }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Email:</label>\n          <div class=\"details\">{{ userDetails.email }}</div>\n        </div>\n        <div class=\"field-row\">\n          <label>Contact:</label>\n          <div class=\"details\">{{ userDetails.phone }}</div>\n        </div>\n      </div>\n      <div class=\"btn-Area\">\n        <button\n          class=\" btn btn-sign-in btn-primary\"\n          (click)=\"closeUserDetail()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<app-loader *ngIf=\"isLoader\"></app-loader>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/adminlogin/adminlogin.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-section\">\n  <div class=\"login-section-inner\">\n    <div class=\"login-left\">\n      <img src=\"../../../assets/images/logo.svg\" />\n    </div>\n    <div class=\"login-right\">\n      <form [formGroup]=\"adminLogin\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"InputEmail\">Email address</label>\n              <input\n                type=\"email\"\n                required\n                formControlName=\"email\"\n                class=\"form-control\"\n                id=\"InputEmail\"\n                aria-describedby=\"emailHelp\"\n                placeholder=\"Enter email\"\n              />\n\n              <div\n                *ngIf=\"email.invalid && (email.dirty || email.touched)\"\n                class=\"error-show\"\n              >\n                <div *ngIf=\"email.errors.required\">\n                  Name is required.\n                </div>\n                <div *ngIf=\"email.errors.pattern\">\n                  Invalid Email\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"form-group\">\n              <label for=\"InputPassword\">Password</label>\n              <input\n                type=\"password\"\n                required\n                formControlName=\"password\"\n                class=\"form-control\"\n                id=\"exampleInputPassword1\"\n                placeholder=\"Password\"\n              />\n              <div\n                *ngIf=\"password.invalid && (password.dirty || password.touched)\"\n                class=\"error-show\"\n              >\n                <div *ngIf=\"password.errors.required\">\n                  Password is required.\n                </div>\n                <div *ngIf=\"password.errors.minlength\">\n                  Password must be minimum 3 letters\n                </div>\n                <div *ngIf=\"password.errors.maxlength\">\n                  Maximum allowed letters are 10\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12\">\n            <button\n              [disabled]=\"adminLogin.invalid\"\n              (click)=\"loginAdmin(adminLogin.value)\"\n              class=\"btn btn-primary btn-sign-in\"\n            >\n              LOGIN\n            </button>\n          </div>\n          <div class=\"col-md-12\">\n            <div class=\"sign-up\">\n              Forgot password ?\n              <!-- <a\n                [routerLink]=\"forget - password\"\n                routerLinkActive=\"router-link-active\"\n                >Reset Password</a\n              > -->\n              <button class=\"resetPassword\" (click)=\"resetPassword()\">\n                Reset Password\n              </button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/others/others.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/others/others.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>others works!</p>\n");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#dashboardWrapper {\n  top: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 52px;\n}\n#dashboardWrapper .hamburgerIcon {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n  margin: 5px;\n  width: 20%;\n  cursor: pointer;\n  position: relative;\n}\n#dashboardWrapper .hamburgerIcon .bar1,\n#dashboardWrapper .hamburgerIcon .bar2,\n#dashboardWrapper .hamburgerIcon .bar3 {\n  width: 35px;\n  height: 5px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  margin: 2px 0;\n  transition: 0.4s;\n}\n#dashboardWrapper .hamburgerIcon .bar1.change {\n  transform: rotate(-45deg) translate(-9px, 4px);\n}\n#dashboardWrapper .hamburgerIcon .bar2.change {\n  opacity: 0;\n}\n#dashboardWrapper .hamburgerIcon .bar3.change {\n  transform: rotate(45deg) translate(-8px, -4px);\n}\n#dashboardWrapper #mainSection {\n  display: flex;\n  margin-top: 0;\n  justify-content: space-between;\n  height: 100%;\n  background-color: #f1f5f9;\n}\n#dashboardWrapper #mainSection .selectorSection {\n  padding: 0;\n  width: 280px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  position: relative;\n  transition: 1s;\n  margin-top: 0;\n  min-height: 400px;\n  padding-top: 15px;\n  z-index: 0;\n}\n@media only screen and (max-width: 767px) {\n  #dashboardWrapper #mainSection .selectorSection {\n    width: 100%;\n    position: fixed;\n    z-index: 9;\n    bottom: 0;\n    top: 53px;\n    display: none;\n  }\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app {\n  display: flex;\n  flex-direction: column;\n  padding-left: 20px;\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app .selectors {\n  padding: 8px 20px 8px 20px;\n  color: white;\n  word-break: break-all;\n  text-decoration: none;\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app .selectors:hover {\n  padding: 8px 20px 8px 20px;\n  color: #783a87;\n  background-color: white;\n  word-break: break-all;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  margin-right: 5px;\n  text-decoration: none;\n}\n#dashboardWrapper #mainSection .selectorSection .menus-app .active {\n  background: white;\n  color: #783a87;\n  margin-top: 5px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  margin-right: 5px;\n}\n#dashboardWrapper #mainSection .selectorSection.danger {\n  transition: 1s;\n  width: 0;\n  overflow: hidden;\n}\n@media only screen and (max-width: 767px) {\n  #dashboardWrapper #mainSection .selectorSection.danger {\n    display: block;\n    width: 100%;\n  }\n}\n#dashboardWrapper #mainSection .selectedSection {\n  width: 85%;\n  padding: 25px 15px;\n}\n@media only screen and (max-width: 767px) {\n  #dashboardWrapper #mainSection .selectedSection {\n    width: 100%;\n  }\n}\n#dashboardWrapper #mainSection .selectedSection.fullShow {\n  width: 100% !important;\n}\n.profile-sm {\n  color: #fff;\n  padding-left: 20px;\n  padding-right: 8px;\n  display: none;\n}\n@media screen and (max-width: 767px) {\n  .profile-sm {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDQ0Y7QURBRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUk7OztFQUdFLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0dBQUE7RUFFQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NOO0FEQ0k7RUFFRSw4Q0FBQTtBQ0NOO0FERUk7RUFDRSxVQUFBO0FDQU47QURHSTtFQUVFLDhDQUFBO0FDRE47QURJRTtFQUNFLGFBQUE7RUFHQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNKSjtBREtJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxvR0FBQTtFQUVBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FDSk47QURLTTtFQVpGO0lBYUksV0FBQTtJQUNBLGVBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VDRk47QUFDRjtBREdNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0UsMEJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0RWO0FESVE7RUFDRSwwQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNGVjtBRElRO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0ZWO0FETUk7RUFDRSxjQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0FDSk47QURLTTtFQUpGO0lBS0ksY0FBQTtJQUNBLFdBQUE7RUNGTjtBQUNGO0FESUk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNGTjtBREdNO0VBSEY7SUFJSSxXQUFBO0VDQU47QUFDRjtBREVJO0VBQ0Usc0JBQUE7QUNBTjtBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDREY7QURHQTtFQUNFO0lBQ0UsY0FBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYWRtaW4tZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Rhc2hib2FyZFdyYXBwZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNTJweDtcbiAgLmhhbWJ1cmdlckljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmJhcjEsXG4gICAgLmJhcjIsXG4gICAgLmJhcjMge1xuICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKVxuICAgICAgICAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgfVxuICAgIC5iYXIxLmNoYW5nZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA0cHgpO1xuICAgIH1cblxuICAgIC5iYXIyLmNoYW5nZSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIC5iYXIzLmNoYW5nZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC00cHgpO1xuICAgIH1cbiAgfVxuICAjbWFpblNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gbWFyZ2luLXRvcDogNXB4O1xuXG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG4gICAgLnNlbGVjdG9yU2VjdGlvbiB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgd2lkdGg6IDI4MHB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpXG4gICAgICAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICAgICAgei1pbmRleDogMDtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogOTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0b3A6IDUzcHg7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgICAubWVudXMtYXBwIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG4gICAgICAgIC5zZWxlY3RvcnMge1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4IDhweCAyMHB4O1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdG9yczpob3ZlciB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDIwcHggOHB4IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICM3ODNhODc7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgY29sb3I6ICM3ODNhODc7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAuc2VsZWN0b3JTZWN0aW9uLmRhbmdlciB7XG4gICAgICB0cmFuc2l0aW9uOiAxcztcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VsZWN0ZWRTZWN0aW9uIHtcbiAgICAgIHdpZHRoOiA4NSU7XG4gICAgICBwYWRkaW5nOiAyNXB4IDE1cHg7XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuc2VsZWN0ZWRTZWN0aW9uLmZ1bGxTaG93IHtcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG4ucHJvZmlsZS1zbSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wcm9maWxlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuIiwiI2Rhc2hib2FyZFdyYXBwZXIge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNTJweDtcbn1cbiNkYXNoYm9hcmRXcmFwcGVyIC5oYW1idXJnZXJJY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDIwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAuaGFtYnVyZ2VySWNvbiAuYmFyMSxcbiNkYXNoYm9hcmRXcmFwcGVyIC5oYW1idXJnZXJJY29uIC5iYXIyLFxuI2Rhc2hib2FyZFdyYXBwZXIgLmhhbWJ1cmdlckljb24gLmJhcjMge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMnB4IDA7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAuaGFtYnVyZ2VySWNvbiAuYmFyMS5jaGFuZ2Uge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDZweCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKC05cHgsIDRweCk7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAuaGFtYnVyZ2VySWNvbiAuYmFyMi5jaGFuZ2Uge1xuICBvcGFjaXR5OiAwO1xufVxuI2Rhc2hib2FyZFdyYXBwZXIgLmhhbWJ1cmdlckljb24gLmJhcjMuY2hhbmdlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC00cHgpO1xufVxuI2Rhc2hib2FyZFdyYXBwZXIgI21haW5TZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdG9yU2VjdGlvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAyODBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAxcztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICB6LWluZGV4OiAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAjZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdG9yU2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDk7XG4gICAgYm90dG9tOiAwO1xuICAgIHRvcDogNTNweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4jZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdG9yU2VjdGlvbiAubWVudXMtYXBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuI2Rhc2hib2FyZFdyYXBwZXIgI21haW5TZWN0aW9uIC5zZWxlY3RvclNlY3Rpb24gLm1lbnVzLWFwcCAuc2VsZWN0b3JzIHtcbiAgcGFkZGluZzogOHB4IDIwcHggOHB4IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdG9yU2VjdGlvbiAubWVudXMtYXBwIC5zZWxlY3RvcnM6aG92ZXIge1xuICBwYWRkaW5nOiA4cHggMjBweCA4cHggMjBweDtcbiAgY29sb3I6ICM3ODNhODc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdG9yU2VjdGlvbiAubWVudXMtYXBwIC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICM3ODNhODc7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4jZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdG9yU2VjdGlvbi5kYW5nZXIge1xuICB0cmFuc2l0aW9uOiAxcztcbiAgd2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0b3JTZWN0aW9uLmRhbmdlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0ZWRTZWN0aW9uIHtcbiAgd2lkdGg6IDg1JTtcbiAgcGFkZGluZzogMjVweCAxNXB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAjZGFzaGJvYXJkV3JhcHBlciAjbWFpblNlY3Rpb24gLnNlbGVjdGVkU2VjdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiNkYXNoYm9hcmRXcmFwcGVyICNtYWluU2VjdGlvbiAuc2VsZWN0ZWRTZWN0aW9uLmZ1bGxTaG93IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUtc20ge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wcm9maWxlLXNtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var _salon_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../salon/auth.service */ "./src/app/salon/auth.service.ts");




let AdminDashboardComponent = class AdminDashboardComponent {
    constructor(adminServ, authServ) {
        this.adminServ = adminServ;
        this.authServ = authServ;
        this.isSelectorShown = true;
    }
    ngOnInit() {
        this.adminServ.getHeaderResponse().subscribe((data) => {
            this.isSelectorShown = !data;
            this.isSelectorShown = !this.isSelectorShown;
        });
        this.getAdminName();
    }
    getAdminName() {
        this.email = sessionStorage.getItem("userDetails");
        this.index = this.email.indexOf("@");
        this.adminName = this.email.substring(0, this.index).toUpperCase();
    }
    logout() {
        this.authServ.logout();
    }
    hideMenu() {
        this.isSelectorShown = true;
    }
};
AdminDashboardComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: _salon_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-admin-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/admin-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-dashboard.component.scss */ "./src/app/admin/admin-dashboard/admin-dashboard.component.scss")).default]
    })
], AdminDashboardComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/booking-details/booking-details.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/booking-details/booking-details.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.can {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9ib29raW5nLWRldGFpbHMvYm9va2luZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYm9va2luZy1kZXRhaWxzL2Jvb2tpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUNDRjs7RURDQTtJQUNFLGtCQUFBO0VDRUY7O0VEQUE7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUNHRjs7RUREQTtJQUNFLFdBQUE7RUNJRjs7RURGQTtJQUNFLGFBQUE7RUNLRjs7RURGQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQ0tGO0FBQ0Y7O0FESEE7RUFDRSxXQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvYm9va2luZy1kZXRhaWxzL2Jvb2tpbmctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW9iaWxlLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtbGFiZWwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmNhbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cblxuICB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnN1c3BlbmQtc2VjIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi5jYW4ge1xuICBtYXJnaW46IDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts ***!
  \************************************************************************************/
/*! exports provided: BookingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailsComponent", function() { return BookingDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let BookingDetailsComponent = class BookingDetailsComponent {
    constructor(adminServ, toastServ) {
        this.adminServ = adminServ;
        this.toastServ = toastServ;
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
        this.displayedColumns = ["date", "salonname", "username", "orderid", "action"];
    }
    ngOnInit() {
        this.getBookings();
        this.adminServ.setHeaderText("Bookings");
    }
    getBookings() {
        this.isLoader = true;
        let dataToPass = {
            type: "upcomings"
        };
        this.adminServ.getUpcomingBookings(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.isLoader = false;
                this.upcomingBookings = data["data"]["bookings"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.upcomingBookings);
                this.dataSource.sort = this.sort;
                this.totalCount = data["data"]["count"];
            }
            else if (data["code"] === 400) {
                this.toastServ.error(data["message"], "", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error(error.error["message"], "", {
                timeOut: 1000
            });
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    paginate(event) {
        this.page = event.pageIndex + 1;
        this.count = event.pageSize;
        this.getBookings();
    }
    cancelBooking(data) {
        let dataToPass = {
            booking_id: data["_id"]
        };
        this.adminServ.cancelBookings(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.isLoader = false;
                this.getBookings();
                this.toastServ.success(data["message"], "", {
                    timeOut: 1000
                });
            }
            else if (data["code"] === 400) {
                this.toastServ.error(data["message"], "", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error(error.error["message"], "", {
                timeOut: 1000
            });
        });
    }
};
BookingDetailsComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], BookingDetailsComponent.prototype, "sort", void 0);
BookingDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-booking-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/booking-details/booking-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking-details.component.scss */ "./src/app/admin/admin-dashboard/booking-details/booking-details.component.scss")).default]
    })
], BookingDetailsComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/categories/categories.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/categories/categories.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  margin-top: 15px;\n}\n\n.categoriesWrapper .actionButtons .btnActionArea {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.categoriesWrapper .actionButtons .btnActionArea .btn-primary-btn {\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n\n.categoriesWrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.categoriesWrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  width: 40%;\n}\n\n.categoriesWrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n\n.categoriesWrapper .modalSection .modal-content-area form {\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n}\n\n.categoriesWrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n}\n\ntable {\n  width: 100%;\n}\n\n.btn-sec {\n  margin-bottom: 5px;\n}\n\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n\n.status-check {\n  width: 120px;\n}\n\n.editBtn {\n  margin-left: 10px;\n}\n\n.buttonArea {\n  display: flex;\n  justify-content: flex-start;\n  padding: 10px;\n  align-items: center;\n}\n\n.btn-awke {\n  margin-bottom: 9px;\n}\n\n@media screen and (max-width: 991px) {\n  .categoriesWrapper .modalSection .modal-content-area {\n    width: 100%;\n    margin: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBRFdJO0VBRUUsYUFBQTtFQUNBLHlCQUFBO0FDVE47O0FEVU07RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0dBQUE7QUNSUjs7QURjRTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1BKOztBRFNJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ1BOOztBRFNNO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUNQUjs7QURTTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDUFI7O0FEUVE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ05WOztBRGFBO0VBQ0UsV0FBQTtBQ1ZGOztBRFlBO0VBQ0Usa0JBQUE7QUNURjs7QURXQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNSRjs7QURVQTtFQUNFLFlBQUE7QUNQRjs7QURTQTtFQUNFLGlCQUFBO0FDTkY7O0FEUUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURPQTtFQUNFLGtCQUFBO0FDSkY7O0FETUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxZQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNhdGVnb3JpZXNXcmFwcGVyIHtcbiAgLmFjdGlvbkJ1dHRvbnMge1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAuaGVhZGVyVGV4dEFyZWEge1xuICAgICAgLy8gd2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAuYnRuQWN0aW9uQXJlYSB7XG4gICAgICAvLyB3aWR0aDogNTAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAuYnRuLXByaW1hcnktYnRuIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKVxuICAgICAgICAgIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubW9kYWxTZWN0aW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gICAgei1pbmRleDogMjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAubW9kYWwtY29udGVudC1hcmVhIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgd2lkdGg6IDQwJTtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXNlYyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5idG4tc2lnbi1pbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cbi5lZGl0QnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uYnV0dG9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5idG4tYXdrZSB7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5jYXRlZ29yaWVzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxufVxuIiwiLmhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jYXRlZ29yaWVzV3JhcHBlciAuYWN0aW9uQnV0dG9ucyAuYnRuQWN0aW9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG4uY2F0ZWdvcmllc1dyYXBwZXIgLmFjdGlvbkJ1dHRvbnMgLmJ0bkFjdGlvbkFyZWEgLmJ0bi1wcmltYXJ5LWJ0biB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4uY2F0ZWdvcmllc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jYXRlZ29yaWVzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5jYXRlZ29yaWVzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uY2F0ZWdvcmllc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmNhdGVnb3JpZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSBmb3JtIGxhYmVsIHtcbiAgd2lkdGg6IDQ1JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tc2VjIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuLXNpZ24taW4ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmVkaXRCdG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmJ1dHRvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5idG4tYXdrZSB7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmNhdGVnb3JpZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/categories/categories.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/categories/categories.component.ts ***!
  \**************************************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../confirmation/confirmation.component */ "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");








let CategoriesComponent = class CategoriesComponent {
    constructor(adminServ, fb, toastrSev, SimpleModalService) {
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
    ngOnInit() {
        this.adminServ.setHeaderText("Manage Categories");
        this.categoryForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.fetchCategoriesList();
    }
    openAddCategoryModal(data) {
        if (data === "add") {
            this.isAddModal = true;
            this.isShowUpdate = false;
        }
        else {
            this.categoryForm.get("name").setValue(data.catname);
            this.categoryID = data._id;
            this.isAddModal = true;
            this.isShowUpdate = true;
        }
        // if (data) {
        // } else if (data === "null") {
        //   this.isAddModal = true;
        // }
        //console.log(this.isAddModal);
    }
    dismissModal() {
        this.isAddModal = false;
        this.showArchived = false;
        this.categoryForm.reset();
    }
    paginate(event) {
        //console.log(event);
        this.page = event.pageIndex + 1;
        //  console.log("c", this.count);
        // console.log("p", this.page);
        this.count = event.pageSize;
        this.fetchCategoriesList();
    }
    update(data) {
        //console.log(data);
        this.isLoader = true;
        let dataToPass = {
            category_id: this.categoryID,
            catname: data.name
        };
        this.adminServ.updateCategory(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.isLoader = false;
                this.isAddModal = false;
                this.fetchCategoriesList();
            }
            else if (data["code"] === 400) {
                this.isLoader = false;
                this.toastrSev.error("Failed", data["message"], {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.isAddModal = false;
            this.toastrSev.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    addCategory(data) {
        // console.log("ADD", data);
        this.isLoader = true;
        let dataToPass = {
            catname: data.name
        };
        this.adminServ.addCategories(dataToPass).subscribe(data => {
            if (data["code"] === 200) {
                this.isAddModal = false;
                this.isLoader = false;
                this.categoryForm.reset();
                this.toastrSev.success("Catgory Added", "Success", {
                    timeOut: 1000
                });
                this.fetchCategoriesList();
            }
            else {
                this.isLoader = false;
                this.isAddModal = true;
                this.toastrSev.error("Failed To Added", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.isAddModal = false;
            this.toastrSev.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    fetchCategoriesList() {
        this.isLoader = true;
        let dataToPass = {
            type: "admin-categories",
            pageSize: this.count,
            page: this.page
        };
        //console.log(dataToPass);
        this.adminServ.getAdmincategoriesList(dataToPass).subscribe(data => {
            //   console.log(data);
            if (data["code"] === 200) {
                this.isLoader = false;
                this.adminCategoriesCount = data["data"]["count"];
                this.categoriesList = data["data"]["data"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.categoriesList);
                this.dataSource.sort = this.sort;
                if (this.categoriesList.length == 0) {
                    this.noRecordsFound = true;
                }
                else {
                    this.noRecordsFound = false;
                }
            }
            else {
                this.isLoader = false;
                this.toastrSev.error("Failed To Fetch", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastrSev.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    deleteCategory(data) {
        this.SimpleModalService.addModal(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmationComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
        }).subscribe(isConfirmed => {
            if (isConfirmed === true) {
                this.isLoader = true;
                let dataToPass = {
                    category_id: data._id
                };
                this.adminServ.deleteCategories(dataToPass).subscribe(data => {
                    if (data["code"] === 200) {
                        this.isLoader = false;
                        this.fetchCategoriesList();
                        this.toastrSev.success("Catgories Deleted", "Success", {
                            timeOut: 1000
                        });
                    }
                    else {
                        this.isLoader = false;
                        this.toastrSev.error("Failed To Delete", "Error", {
                            timeOut: 1000
                        });
                    }
                }, error => {
                    this.isLoader = false;
                    this.toastrSev.error("Server Error", error.error["message"], {
                        timeOut: 1000
                    });
                });
            }
        });
    }
    updateCategory(data) {
        this.openAddCategoryModal(data);
        this.isShowUpdate = true;
    }
    applyFilter(event) {
        console.log(event);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
CategoriesComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["SimpleModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: false })
], CategoriesComponent.prototype, "sort", void 0);
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-categories",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/categories/categories.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./categories.component.scss */ "./src/app/admin/admin-dashboard/categories/categories.component.scss")).default]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/confirmation/confirmation.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/confirmation/confirmation.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: 100%;\n}\n\n/* Optional: Makes the sample page fill the window. */\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n}\n\n#description {\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n}\n\n#infowindow-content .title {\n  font-weight: bold;\n}\n\n#infowindow-content {\n  display: none;\n}\n\n#map #infowindow-content {\n  display: inline;\n}\n\n.pac-card {\n  margin: 10px 10px 0 0;\n  border-radius: 2px 0 0 2px;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  outline: none;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);\n  background-color: #fff;\n  font-family: Roboto;\n}\n\n#pac-container {\n  padding-bottom: 12px;\n  margin-right: 12px;\n}\n\n.pac-controls {\n  display: inline-block;\n  padding: 5px 11px;\n}\n\n.pac-controls label {\n  font-family: Roboto;\n  font-size: 13px;\n  font-weight: 300;\n}\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px;\n}\n\n#pac-input:focus {\n  border-color: #4d90fe;\n}\n\n#title {\n  color: #fff;\n  background-color: #4d90fe;\n  font-size: 25px;\n  font-weight: 500;\n  padding: 6px 12px;\n}\n\n#target {\n  width: 345px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ0E7RUFDRSxZQUFBO0FDakNGOztBRG1DQSxxREFBQTs7QUFDQTs7RUFFRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNoQ0Y7O0FEa0NBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUMvQkY7O0FEa0NBO0VBQ0UsaUJBQUE7QUMvQkY7O0FEa0NBO0VBQ0UsYUFBQTtBQy9CRjs7QURrQ0E7RUFDRSxlQUFBO0FDL0JGOztBRGtDQTtFQUNFLHFCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQy9CRjs7QURrQ0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDL0JGOztBRGtDQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUMvQkY7O0FEa0NBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUMvQkY7O0FEa0NBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUMvQkY7O0FEa0NBO0VBQ0UscUJBQUE7QUMvQkY7O0FEa0NBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUMvQkY7O0FEaUNBO0VBQ0UsWUFBQTtBQzlCRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm92ZXJsYXl7XG5cbi8vICAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuLy8gICAgIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4vLyAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuLy8gICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4vLyAgICAgei1pbmRleDogMjtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbi8vICAgICAuY29uZmlybURpYWxvZ3tcbi8vICAgICAgICAgY29sb3I6d2hpdGU7XG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICAgICAgcGFkZGluZy10b3A6IDVweDtcbi8vICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4vLyAgICAgICAgIC5maWVsZHtcblxuLy8gICAgICAgICAgICAgc3BhbntcblxuLy8gICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgIH1cblxuLy8gICAgIH1cblxuLy8gfVxuI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi8qIE9wdGlvbmFsOiBNYWtlcyB0aGUgc2FtcGxlIHBhZ2UgZmlsbCB0aGUgd2luZG93LiAqL1xuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiNkZXNjcmlwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI2luZm93aW5kb3ctY29udGVudCAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNtYXAgI2luZm93aW5kb3ctY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnBhYy1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xuICBib3JkZXItcmFkaXVzOiAycHggMCAwIDJweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdXRsaW5lOiBub25lO1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogUm9ib3RvO1xufVxuXG4jcGFjLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5wYWMtY29udHJvbHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVweCAxMXB4O1xufVxuXG4ucGFjLWNvbnRyb2xzIGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4jcGFjLWlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgcGFkZGluZzogMCAxMXB4IDAgMTNweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuI3BhYy1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzRkOTBmZTtcbn1cblxuI3RpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDkwZmU7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG59XG4jdGFyZ2V0IHtcbiAgd2lkdGg6IDM0NXB4O1xufVxuIiwiI21hcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogT3B0aW9uYWw6IE1ha2VzIHRoZSBzYW1wbGUgcGFnZSBmaWxsIHRoZSB3aW5kb3cuICovXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4jZGVzY3JpcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbiNpbmZvd2luZG93LWNvbnRlbnQgLnRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNpbmZvd2luZG93LWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFwICNpbmZvd2luZG93LWNvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5wYWMtY2FyZCB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcbiAgYm9yZGVyLXJhZGl1czogMnB4IDAgMCAycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcbn1cblxuI3BhYy1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4ucGFjLWNvbnRyb2xzIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMTFweDtcbn1cblxuLnBhYy1jb250cm9scyBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuI3BhYy1pbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIHBhZGRpbmc6IDAgMTFweCAwIDEzcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogNDAwcHg7XG59XG5cbiNwYWMtaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM0ZDkwZmU7XG59XG5cbiN0aXRsZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ5MGZlO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDZweCAxMnB4O1xufVxuXG4jdGFyZ2V0IHtcbiAgd2lkdGg6IDM0NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");



let ConfirmationComponent = class ConfirmationComponent extends ngx_simple_modal__WEBPACK_IMPORTED_MODULE_2__["SimpleModalComponent"] {
    constructor() {
        super();
    }
    confirm() {
        // on click on confirm button we set dialog result as true,
        // ten we can get dialog result from caller code
        this.result = true;
        console.log(this.result);
        this.close();
    }
    cancel() {
        this.result = false;
        console.log(this.result);
        this.close();
    }
};
ConfirmationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-confirmation",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirmation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/confirmation/confirmation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirmation.component.scss */ "./src/app/admin/admin-dashboard/confirmation/confirmation.component.scss")).default]
    })
], ConfirmationComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/dashboard/dashboard.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/dashboard/dashboard.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n#cards {\n  display: flex;\n  justify-content: space-between;\n}\n\n#cards .card {\n  flex-grow: 1;\n  z-index: 0;\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 5px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  padding: 25px;\n}\n\n#cards .card .cardText {\n  color: white;\n  font-weight: 600;\n  text-align: center;\n  padding-top: 5px;\n  font-size: 20px;\n}\n\n#cards .card h2 {\n  color: white;\n}\n\n#paginationCard {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#paginationCard .paginator {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-left: 10px;\n}\n\n#paginationCard .paginator .pageNumber {\n  padding: 2px 5px 2px 5px;\n  font-size: 10px;\n  border: 1px solid #783a87;\n  align-items: center;\n  display: flex;\n  cursor: pointer;\n  justify-content: center;\n  border-radius: 5px;\n}\n\n#paginationCard .paginator .prevnextBtn {\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  color: white;\n  border-radius: 10px;\n}\n\n.btn-sign-in {\n  width: 50% !important;\n  margin-bottom: 5px;\n}\n\n.tablecustom {\n  margin-top: 15px;\n}\n\n.headerSection {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.headerSection .header {\n  color: purple;\n}\n\n.status-check {\n  width: 120px;\n}\n\n.status-check-action {\n  width: 240px;\n}\n\n.btnArea {\n  display: flex;\n  justify-content: center;\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.userDetailsOverlay .main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n\n.userDetailsOverlay .main-section-area .header {\n  border-bottom: 1px solid lightgray;\n}\n\n.userDetailsOverlay .main-section-area .main-section {\n  margin-top: 10px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row label {\n  width: 20%;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.suspend-sec {\n  width: 10%;\n  margin-left: 10px;\n  display: flex;\n  align-items: center;\n}\n\n@media screen and (max-width: 991px) {\n  .main-section-area {\n    width: 100%;\n  }\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.btnsec {\n  margin: 10px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0VGOztBREFFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvR0FBQTtFQUVBLHlCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBRENJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDTjs7QURDSTtFQUNFLFlBQUE7QUNDTjs7QURJQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDRko7O0FER0k7RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FDRE47O0FER0k7RUFDRSxvR0FBQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDRk47O0FETUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7O0FEa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNmRjs7QURnQkU7RUFDRSxhQUFBO0FDZEo7O0FEaUJBO0VBQ0UsWUFBQTtBQ2RGOztBRGdCQTtFQUNFLFlBQUE7QUNiRjs7QURlQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQ1pGOztBRGVBO0VBQ0UsZUFBQTtFQUFpQixtQ0FBQTtFQUVqQixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDVEY7O0FEVUU7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDUko7O0FEU0k7RUFDRSxrQ0FBQTtBQ1BOOztBRFNJO0VBQ0UsZ0JBQUE7QUNQTjs7QURRTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDTlI7O0FET1E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNMVjs7QURPUTtFQUNFLFVBQUE7QUNMVjs7QURPUTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTFY7O0FEUU07RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FDTlI7O0FEYUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNYRjs7QURhQTtFQUNFO0lBQ0UsV0FBQTtFQ1ZGO0FBQ0Y7O0FEWUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDVkY7O0FEYUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7QUNWRjs7QURhQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLHFCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0VDVkY7O0VEWUE7SUFDRSxrQkFBQTtFQ1RGOztFRFdBO0lBQ0UsYUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VDUkY7O0VEVUE7SUFDRSxXQUFBO0VDUEY7O0VEU0E7SUFDRSxhQUFBO0VDTkY7O0VEU0E7SUFDRSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxhQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7RUNORjtBQUNGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLmNhcmQge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHdpZHRoOiAzMCU7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCVcbiAgICAgIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgLmNhcmRUZXh0IHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBoMiB7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbiNwYWdpbmF0aW9uQ2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC5pdGVtUGVyUGFnZSB7XG4gIH1cbiAgLnBhZ2luYXRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAucGFnZU51bWJlciB7XG4gICAgICBwYWRkaW5nOiAycHggNXB4IDJweCA1cHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjNzgzYTg3O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG4gICAgLnByZXZuZXh0QnRuIHtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKVxuICAgICAgICAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gIH1cbn1cbi5idG4tc2lnbi1pbiB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLy8gLm5vUmVjb3Jkc3tcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgLm5vUmVje1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBjb2xvcjogIzcyMWMyNDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XG4vLyAgICAgcGFkZGluZzogMmVtO1xuLy8gICAgIHdpZHRoOiA1MCU7XG4vLyAgICAgfVxuXG4vLyB9XG4udGFibGVjdXN0b20ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmhlYWRlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIC5oZWFkZXIge1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cbn1cbi5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogMTIwcHg7XG59XG4uc3RhdHVzLWNoZWNrLWFjdGlvbiB7XG4gIHdpZHRoOiAyNDBweDtcbn1cbi5idG5BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi51c2VyRGV0YWlsc092ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAvL2Rpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgLmhlYWRlciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cbiAgICAubWFpbi1zZWN0aW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAuZmllbGQtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAucHJvZmlsZVBpYyB7XG4gICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuaW1nIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5idG4tQXJlYSB7XG4gICAgfVxuICB9XG59XG4uc3VzcGVuZC1zZWMge1xuICB3aWR0aDogMTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5tYWluLXNlY3Rpb24tYXJlYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuXG4ubW9iaWxlLWxhYmVsIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5tb2JpbGUtbGFiZWwge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuICB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zdXNwZW5kLXNlYyB7XG4gICAgd2lkdGg6IDI1cHg7XG4gIH1cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmJ0bnNlYyB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiNjYXJkcyAuY2FyZCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgei1pbmRleDogMDtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuI2NhcmRzIC5jYXJkIC5jYXJkVGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4jY2FyZHMgLmNhcmQgaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNwYWdpbmF0aW9uQ2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jcGFnaW5hdGlvbkNhcmQgLnBhZ2luYXRvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4jcGFnaW5hdGlvbkNhcmQgLnBhZ2luYXRvciAucGFnZU51bWJlciB7XG4gIHBhZGRpbmc6IDJweCA1cHggMnB4IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzgzYTg3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4jcGFnaW5hdGlvbkNhcmQgLnBhZ2luYXRvciAucHJldm5leHRCdG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5idG4tc2lnbi1pbiB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGFibGVjdXN0b20ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uaGVhZGVyU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5oZWFkZXJTZWN0aW9uIC5oZWFkZXIge1xuICBjb2xvcjogcHVycGxlO1xufVxuXG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uc3RhdHVzLWNoZWNrLWFjdGlvbiB7XG4gIHdpZHRoOiAyNDBweDtcbn1cblxuLmJ0bkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnVzZXJEZXRhaWxzT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cgLnByb2ZpbGVQaWMge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyBsYWJlbCB7XG4gIHdpZHRoOiAyMCU7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cgLmRldGFpbHMge1xuICB3aWR0aDogNzUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5pbWcge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdXNwZW5kLXNlYyB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubWFpbi1zZWN0aW9uLWFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3VzcGVuZC1zZWMge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufVxuLmJ0bnNlYyB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let DashboardComponent = class DashboardComponent {
    constructor(adminServ, toastServ, router) {
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
    ngOnInit() {
        if (JSON.parse(sessionStorage.getItem("isReload")) === true) {
            window.location.reload();
            sessionStorage.setItem("isReload", JSON.stringify(false));
        }
        let dataToPass = {
            pageSize: this.pageSize,
            page: this.page
        };
        this.dataDefault = dataToPass;
        this.getActiveSalonsCount();
        this.getActiveUsersCount();
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 100000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.adminServ.getSalonsRequest(this.dataDefault)))
            .subscribe(result => {
            this.SalonRequestList = result["data"]["data"];
            this.limit = result["data"]["countNumber"];
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
    getRequests() {
        console.log("getreq0");
        let dataToPass = {
            pageSize: this.pageSize,
            page: this.page
        };
        this.adminServ.getSalonsRequest(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.SalonRequestList = data["data"]["data"];
                this.limit = data["data"]["countNumber"];
                if (this.limit == 0 || this.SalonRequestList.length === 0) {
                    this.noRecordFound = true;
                }
                else {
                    this.noRecordFound = false;
                }
            }
            else if (data["code"] === 400) {
                this.toastServ.error(data["message"], "", {
                    timeOut: 1000
                });
            }
        }, error => {
            console.log(error);
            this.toastServ.error(error.error["message"], "", {
                timeOut: 1000
            });
        });
    }
    paginate(event) {
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
    approveSalonRequest(data) {
        // console.log("ApproveFor", data);
        let dataToPass = {
            salon_id: data._id
        };
        this.adminServ.approveSalonRequests(dataToPass).subscribe(data => {
            //    console.log("FFFF", data);
            if (data["code"] === 200) {
                this.toastServ.success("Salon Approved Successfully", "", {
                    timeOut: 1000
                });
                this.getRequests();
                this.getActiveSalonsCount();
                this.getActiveUsersCount();
            }
            else if (data["code"] === 400) {
                this.toastServ.error("Failed", data["message"], {
                    timeOut: 1000
                });
            }
        }, error => {
            console.log(error);
            this.toastServ.error("Failed To Approve Salon", error.error["message"], {
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
    getActiveUsersCount() {
        console.log("sssssssssss");
        let dataToPass = {
            type: "user"
        };
        this.adminServ.getActiveUsersCount(dataToPass).subscribe(data => {
            if (data["code"] == 200) {
                this.ActiveUsersCount = data["data"];
                //   console.log("ActiveUsersCount SALONS", this.ActiveUsersCount);
            }
        }, error => {
            this.toastServ.error("Server Error", error.error["message"], {
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
    getActiveSalonsCount() {
        console.log("comnign");
        let dataToPass = {
            type: "salon"
        };
        this.adminServ.getActiveSalonsCount(dataToPass).subscribe(data => {
            //  console.log("DATA", data);
            if (data["code"] == 200) {
                this.ActiveSalonsCount = data["data"];
                //   console.log("ACTIVE SALONS", this.ActiveSalonsCount);
            }
        }, error => {
            this.toastServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    showSalonDetails(data) {
        // console.log(data);
        let dataToPass = {
            salon_id: data._id
        };
        this.adminServ.getSalonDetails(dataToPass).subscribe((data) => {
            //  console.log("DSS", data);
            if (data["code"] === 200) {
                this.showSalonDetail = true;
                this.salonRequestDetails = data["data"]["salondetail"];
                this.salonEmail = data["data"]["email"];
                if (this.salonRequestDetails["image"] === null) {
                    this.salonRequestDetails["image"] =
                        "../../../assets/images/profilepic.png";
                }
            }
            else {
                this.toastServ.error("Failed To Fetch User Details", "Error", {
                    timeOut: 1000
                });
            }
        });
    }
    closeSalonDetails() {
        this.showSalonDetail = false;
    }
    /**
     * Function is use to Pay to Decline Salon Request
     * @access private
     * @return json
     * Created by SmartData
     * @smartData Enterprises (I) Ltd
     */
    declineSalonRequest(data) {
        let dataToPass = {
            salon_id: data._id
        };
        this.adminServ.declineSalonRequest(dataToPass).subscribe(data => {
            if (data["code"] === 200) {
                this.toastServ.success("Salon Declined Successfully", "", {
                    timeOut: 1000
                });
                this.getRequests();
                this.getActiveSalonsCount();
                this.getActiveUsersCount();
            }
            else if (data["code"] === 400) {
                this.toastServ.error(data["message"], "", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/admin-dashboard/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialogWrapper {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dialogWrapper .data-content {\n  background: white;\n  margin: 10px;\n  padding: 1em;\n}\n.dialogWrapper .data-content .warning {\n  font-size: 18px;\n  font-weight: 600;\n}\n.dialogWrapper .data-content .btnArea {\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kZWxldGUtZGlhbG9nL2RlbGV0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQWlCLG1DQUFBO0VBRWpCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUFzQyxrQ0FBQTtFQUN0QyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNJRjtBREZFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0lKO0FERkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNJTjtBREZJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvZGVsZXRlLWRpYWxvZy9kZWxldGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZ1dyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAvL2Rpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAuZGF0YS1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMWVtO1xuXG4gICAgLndhcm5pbmcge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmJ0bkFyZWEge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgfVxufVxuIiwiLmRpYWxvZ1dyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGlhbG9nV3JhcHBlciAuZGF0YS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMWVtO1xufVxuLmRpYWxvZ1dyYXBwZXIgLmRhdGEtY29udGVudCAud2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaWFsb2dXcmFwcGVyIC5kYXRhLWNvbnRlbnQgLmJ0bkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.ts ***!
  \********************************************************************************/
/*! exports provided: DeleteDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteDialogComponent", function() { return DeleteDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");



let DeleteDialogComponent = class DeleteDialogComponent {
    constructor(adminServ) {
        this.adminServ = adminServ;
    }
    ngOnInit() { }
};
DeleteDialogComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] }
];
DeleteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-delete-dialog",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-dialog.component.scss */ "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.scss")).default]
    })
], DeleteDialogComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/details/details.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/details/details.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".detailsWrapper .actionButtons .btnActionArea {\n  display: flex;\n  justify-content: flex-end;\n}\n.detailsWrapper .actionButtons .btnActionArea .btn-primary-btn {\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.detailsWrapper .main-content {\n  background: white;\n  padding: 1em;\n  border-radius: 10px;\n}\n.detailsWrapper .main-content .fields {\n  display: flex;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n  padding: 10px;\n  align-items: center;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.detailsWrapper .main-content .fields label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n}\n.detailsWrapper .main-content .fields .field {\n  padding: 10px;\n}\n.detailsWrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.detailsWrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 20px;\n  width: 40%;\n}\n.detailsWrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.detailsWrapper .modalSection .modal-content-area form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 15px;\n}\n.detailsWrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n  margin-top: 10px;\n}\n.bts {\n  margin: 0;\n  margin-top: 10px;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUk7RUFFRSxhQUFBO0VBQ0EseUJBQUE7QUNWTjtBRFdNO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9HQUFBO0FDVFI7QURjRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWko7QURhSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1hOO0FEYU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ1hSO0FEYU07RUFDRSxhQUFBO0FDWFI7QURlRTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1JKO0FEVUk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDUk47QURVTTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FDUlI7QURVTTtFQUNFLGFBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0FDVFI7QURVUTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNSVjtBRGNBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1hGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXRhaWxzV3JhcHBlciB7XG4gIC5hY3Rpb25CdXR0b25zIHtcbiAgICAvLyBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgLmhlYWRlclRleHRBcmVhIHtcbiAgICAgIC8vIHdpZHRoOiA1MCU7XG4gICAgfVxuXG4gICAgLmJ0bkFjdGlvbkFyZWEge1xuICAgICAgLy8gd2lkdGg6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgLmJ0bi1wcmltYXJ5LWJ0biB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSlcbiAgICAgICAgICAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tYWluLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC5maWVsZHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcblxuICAgICAgbGFiZWwge1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5maWVsZCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tb2RhbFNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5tb2RhbC1jb250ZW50LWFyZWEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICB3aWR0aDogNDAlO1xuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICAgIGZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4uYnRzIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTIwcHg7XG59XG4iLCIuZGV0YWlsc1dyYXBwZXIgLmFjdGlvbkJ1dHRvbnMgLmJ0bkFjdGlvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmRldGFpbHNXcmFwcGVyIC5hY3Rpb25CdXR0b25zIC5idG5BY3Rpb25BcmVhIC5idG4tcHJpbWFyeS1idG4ge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGhlaWdodDogMzVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuLmRldGFpbHNXcmFwcGVyIC5tYWluLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLmRldGFpbHNXcmFwcGVyIC5tYWluLWNvbnRlbnQgLmZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiAxMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZGV0YWlsc1dyYXBwZXIgLm1haW4tY29udGVudCAuZmllbGRzIGxhYmVsIHtcbiAgd2lkdGg6IDQ1JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG59XG4uZGV0YWlsc1dyYXBwZXIgLm1haW4tY29udGVudCAuZmllbGRzIC5maWVsZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZGV0YWlsc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIGRpc3BsYXk6IG5vbmU7XG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kZXRhaWxzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDQwJTtcbn1cbi5kZXRhaWxzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEgLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4uZGV0YWlsc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRldGFpbHNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSBmb3JtIGxhYmVsIHtcbiAgd2lkdGg6IDQ1JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5idHMge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/details/details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/details/details.component.ts ***!
  \********************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../country */ "./src/app/admin/country.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let DetailsComponent = class DetailsComponent {
    constructor(adminServ, fb, toastServ) {
        this.adminServ = adminServ;
        this.fb = fb;
        this.toastServ = toastServ;
        this.countriesData = _country__WEBPACK_IMPORTED_MODULE_4__["countries"];
        this.isModal = false;
        this.isAddCompleted = true;
    }
    ngOnInit() {
        this.adminDataToPass = {
            type: "admin"
        };
        this.getAdminDetails(this.adminDataToPass);
        this.user_id = sessionStorage.getItem("userId");
        this.adminServ.setHeaderText("Manage Admin Details");
        this.adminDetailsForm = this.fb.group({
            phone: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(11)
                ])
            ],
            code: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            about: [""]
        });
    }
    get phone() {
        return this.adminDetailsForm.get("phone");
    }
    openAddCategoryModal(data) {
        this.isModal = true;
        if (data === "add") {
            this.isAdd = true;
        }
        else if (data === "edit") {
            this.adminDetailsForm.get("phone").setValue(this.adminDetails.phone);
            this.adminDetailsForm.get("code").setValue(this.adminDetails.code);
            this.adminDetailsForm.get("about").setValue(this.adminDetails.about);
            this.isAdd = false;
        }
    }
    addDetail(data) {
        let dataToPass = {
            admin_id: this.user_id,
            phone: data.phone,
            code: data.code,
            about: data.about
        };
        this.adminServ.addAdminDetails(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.getAdminDetails(this.adminDataToPass);
                this.adminDetailsForm.reset();
            }
            else if (data["code"] === 400) {
                this.toastServ.error(data["message"], "", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error("Server- Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    updateDetails(data) {
        // console.log(data);
        let dataToPass = {
            admin_id: this.user_id,
            phone: data.phone,
            code: data.code,
            about: data.about
        };
        this.adminServ.updateAdminDetails(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.getAdminDetails(this.adminDataToPass);
                this.isModal = false;
                this.adminDetailsForm.reset();
            }
            else if (data["code"] === 400) {
                this.toastServ.error(data["message"], "", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error("Server- Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    getAdminDetails(data) {
        let dataToPass = {
            type: "admin"
        };
        this.adminServ.getAdminDetails(dataToPass).subscribe((data) => {
            console.log(data["data"].length);
            if (data["code"] === 200) {
                this.adminDetails = data["data"];
                if (this.adminDetails !== null) {
                    this.isAddCompleted = false;
                }
                else {
                    this.isAddCompleted = true;
                }
            }
            else if (data["code"] === 400) {
                this.toastServ.error(data["message"], "", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error("Server- Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    dismissModal() {
        this.isModal = false;
    }
};
DetailsComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-details",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/details/details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.scss */ "./src/app/admin/admin-dashboard/details/details.component.scss")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/header-text/header-text.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/header-text/header-text.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  padding-left: 0;\n  color: #212529;\n  font-size: 30px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9oZWFkZXItdGV4dC9oZWFkZXItdGV4dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2hlYWRlci10ZXh0L2hlYWRlci10ZXh0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9oZWFkZXItdGV4dC9oZWFkZXItdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbiIsImgxIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBjb2xvcjogIzIxMjUyOTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/header-text/header-text.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/header-text/header-text.component.ts ***!
  \****************************************************************************/
/*! exports provided: HeaderTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTextComponent", function() { return HeaderTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");



let HeaderTextComponent = class HeaderTextComponent {
    constructor(admServ) {
        this.admServ = admServ;
        this.headerTitle = "Home";
    }
    ngOnInit() {
        this.admServ.getHeaderText().subscribe((data) => {
            this.headerTitle = data;
        });
    }
};
HeaderTextComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] }
];
HeaderTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header-text',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header-text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header-text/header-text.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header-text.component.scss */ "./src/app/admin/admin-dashboard/header-text/header-text.component.scss")).default]
    })
], HeaderTextComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/header/header.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/header/header.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header {\n  box-shadow: 1px 0px 1px 1px #783a87;\n  padding: 5px;\n}\n.header .headerSection {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 5px;\n}\n.header .headerSection .logo {\n  background-image: url('logo.svg');\n  width: 330px;\n  height: 2em;\n  background-repeat: no-repeat;\n  position: relative;\n}\n.header .headerSection .detailSection {\n  display: flex;\n  /* justify-content: space-between; */\n  width: 50% !important;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0;\n}\n.header .headerSection .detailSection .logoutbutton .logout {\n  height: 30px;\n  width: 30px;\n  border: 1px solid lightgray;\n  border-radius: 25px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 5px;\n  cursor: pointer;\n}\n.header .headerSection .detailSection .logoutbutton .logout #downArrow {\n  border: solid black;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 3px;\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n  margin-bottom: 3px;\n}\n.header .headerSection .detailSection .logoutbutton .logoutItem {\n  position: absolute;\n  height: 20px;\n  cursor: pointer;\n  right: 2px;\n  text-align: center;\n  align-items: center;\n  padding: 15px;\n  box-shadow: 1px 2px 2px 1px lightgrey;\n  background: white;\n  border-radius: 5px;\n  display: flex;\n}\n.bar1,\n.bar2,\n.bar3 {\n  width: 35px;\n  height: 5px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n  border-color: transparent;\n  margin: 2px 0;\n  transition: 0.4s;\n  cursor: pointer;\n}\n.bar1,\n.bar2,\n.bar3:hover {\n  width: 35px;\n  height: 5px;\n  background-color: white;\n  border-color: #783a87;\n  margin: 2px 0;\n  transition: 0.4s;\n}\n.hamburgerIcon {\n  position: absolute;\n  left: 220px;\n  cursor: pointer;\n  top: 7px;\n}\n.username {\n  font-size: 14px;\n}\n@media screen and (max-width: 991px) {\n  .header .headerSection .detailSection {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNDSjtBRENJO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUNDTjtBRENJO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ0NOO0FES1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hWO0FES1U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FDSFo7QURPUTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDTFY7QURZQTs7O0VBR0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxvR0FBQTtFQUVBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1ZGO0FEWUE7OztFQUdFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1RGO0FEWUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtBQ1RGO0FEV0E7RUFDRSxlQUFBO0FDUkY7QURXQTtFQUNFO0lBQ0UsYUFBQTtFQ1JGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICBib3gtc2hhZG93OiAxcHggMHB4IDFweCAxcHggIzc4M2E4NztcbiAgcGFkZGluZzogNXB4O1xuXG4gIC5oZWFkZXJTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgIC5sb2dvIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2ZycpO1xuICAgICAgd2lkdGg6IDMzMHB4O1xuICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAuZGV0YWlsU2VjdGlvbiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgLnByb2ZpbGVQaWMge1xuICAgICAgfVxuICAgICAgLnVzZXJuYW1lIHtcbiAgICAgIH1cbiAgICAgIC5sb2dvdXRidXR0b24ge1xuICAgICAgICAubG9nb3V0IHtcbiAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgI2Rvd25BcnJvdyB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvdXRJdGVtIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICByaWdodDogMnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMXB4IGxpZ2h0Z3JleTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYmFyMSxcbi5iYXIyLFxuLmJhcjMge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJVxuICAgIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAycHggMDtcbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJhcjEsXG4uYmFyMixcbi5iYXIzOmhvdmVyIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjNzgzYTg3O1xuICBtYXJnaW46IDJweCAwO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uaGFtYnVyZ2VySWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiA3cHg7XG59XG4udXNlcm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZWFkZXIgLmhlYWRlclNlY3Rpb24gLmRldGFpbFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi8vIC5iYXIxLmNoYW5nZSB7XG4vLyAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNnB4KTtcbi8vICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTlweCwgNHB4KTtcbi8vIH1cblxuLy8gLmJhcjIuY2hhbmdlIHtcbi8vICAgb3BhY2l0eTogMDtcbi8vIH1cblxuLy8gLmJhcjMuY2hhbmdlIHtcbi8vICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xuLy8gICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC00cHgpO1xuLy8gfVxuIiwiLmhlYWRlciB7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggMXB4IDFweCAjNzgzYTg3O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaGVhZGVyIC5oZWFkZXJTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaGVhZGVyIC5oZWFkZXJTZWN0aW9uIC5sb2dvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnN2Z1wiKTtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDJlbTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlciAuaGVhZGVyU2VjdGlvbiAuZGV0YWlsU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwO1xufVxuLmhlYWRlciAuaGVhZGVyU2VjdGlvbiAuZGV0YWlsU2VjdGlvbiAubG9nb3V0YnV0dG9uIC5sb2dvdXQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaGVhZGVyIC5oZWFkZXJTZWN0aW9uIC5kZXRhaWxTZWN0aW9uIC5sb2dvdXRidXR0b24gLmxvZ291dCAjZG93bkFycm93IHtcbiAgYm9yZGVyOiBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAwIDNweCAzcHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAzcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5oZWFkZXIgLmhlYWRlclNlY3Rpb24gLmRldGFpbFNlY3Rpb24gLmxvZ291dGJ1dHRvbiAubG9nb3V0SXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHJpZ2h0OiAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAycHggMXB4IGxpZ2h0Z3JleTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJhcjEsXG4uYmFyMixcbi5iYXIzIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDJweCAwO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYXIxLFxuLmJhcjIsXG4uYmFyMzpob3ZlciB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogIzc4M2E4NztcbiAgbWFyZ2luOiAycHggMDtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmhhbWJ1cmdlckljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvcDogN3B4O1xufVxuXG4udXNlcm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZWFkZXIgLmhlYWRlclNlY3Rpb24gLmRldGFpbFNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/header/header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/header/header.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/admin/auth.service.ts");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authServ, admnServ) {
        this.authServ = authServ;
        this.admnServ = admnServ;
        this.isShowSelection = true;
    }
    ngOnInit() {
        this.getAdminName();
    }
    showSelection() {
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
    showLogoutButton() {
        this.showLogout = true;
    }
    /**
     * Function is use to Pay to logout admin
     * @access private
     * @return json
     * Created by SmartData
     * @smartData Enterprises (I) Ltd
     */
    logout() {
        this.authServ.logout();
    }
    getAdminName() {
        this.email = sessionStorage.getItem("userDetails");
        this.index = this.email.indexOf("@");
        this.adminName = this.email.substring(0, this.index).toUpperCase();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_3__["AdminServService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-header",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/admin/admin-dashboard/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/loader/loader.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/loader/loader.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwaW5uZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgLmV4YW1wbGUtbWFyZ2luIHtcbiAgfVxufVxuIiwiLnNwaW5uZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/loader/loader.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/loader/loader.component.ts ***!
  \******************************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoaderComponent = class LoaderComponent {
    constructor() {
        this.value = 50;
        this.color = "accent";
        this.mode = "indeterminate";
    }
    ngOnInit() { }
};
LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-loader",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/loader/loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loader.component.scss */ "./src/app/admin/admin-dashboard/loader/loader.component.scss")).default]
    })
], LoaderComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".admin-manage-wrapper .header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.admin-manage-wrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.admin-manage-wrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n.admin-manage-wrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.admin-manage-wrapper .modalSection .modal-content-area form {\n  display: flex;\n  flex-direction: column;\n  margin-top: 5px;\n}\n.admin-manage-wrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n  font-weight: 400;\n  color: #212529;\n}\ntable {\n  width: 100%;\n}\n.status-check {\n  width: 120px;\n}\n.headerText h3 {\n  font-size: 20px;\n  padding-bottom: 0;\n}\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n.serviceForm {\n  margin-top: 15px;\n}\n.register-sec {\n  display: flex;\n  margin-bottom: 5px;\n  flex-direction: column;\n}\n.valueField:first-child {\n  opacity: 0.5;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9tYW5hZ2UtYWRtaW4vbWFuYWdlLWFkbWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvbWFuYWdlLWFkbWluL21hbmFnZS1hZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQUo7QURJRTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0dKO0FEREk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDR047QURETTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FDR1I7QURETTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUNHUjtBREZRO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJVjtBREVBO0VBQ0UsV0FBQTtBQ0NGO0FEQ0E7RUFDRSxZQUFBO0FDRUY7QURBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0dGO0FEQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDR0Y7QUREQTtFQUNFLGdCQUFBO0FDSUY7QURGQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDS0Y7QURIQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL21hbmFnZS1hZG1pbi9tYW5hZ2UtYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tbWFuYWdlLXdyYXBwZXIge1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5hY3Rpb25CdXR0b25zIHtcbiAgICB9XG4gIH1cbiAgLm1vZGFsU2VjdGlvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgIG1hcmdpbjogMTBweDtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgICBmb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBjb2xvcjogIzIxMjUyOTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogMTIwcHg7XG59XG4uaGVhZGVyVGV4dCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5idG4tc2lnbi1pbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnNlcnZpY2VGb3JtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5yZWdpc3Rlci1zZWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udmFsdWVGaWVsZDpmaXJzdC1jaGlsZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iLCIuYWRtaW4tbWFuYWdlLXdyYXBwZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hZG1pbi1tYW5hZ2Utd3JhcHBlciAubW9kYWxTZWN0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmFkbWluLW1hbmFnZS13cmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4uYWRtaW4tbWFuYWdlLXdyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIC5oZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmFkbWluLW1hbmFnZS13cmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSBmb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLmFkbWluLW1hbmFnZS13cmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSBmb3JtIGxhYmVsIHtcbiAgd2lkdGg6IDQ1JTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjEyNTI5O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uaGVhZGVyVGV4dCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5idG4tc2lnbi1pbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uc2VydmljZUZvcm0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ucmVnaXN0ZXItc2VjIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udmFsdWVGaWVsZDpmaXJzdC1jaGlsZCB7XG4gIG9wYWNpdHk6IDAuNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts ***!
  \******************************************************************************/
/*! exports provided: ManageAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageAdminComponent", function() { return ManageAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _salon_login_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../salon/login/login.service */ "./src/app/salon/login/login.service.ts");
/* harmony import */ var _salon_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../salon/auth.service */ "./src/app/salon/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let ManageAdminComponent = class ManageAdminComponent {
    constructor(adminServ, toastrServ, fb, logServ, authServ) {
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
    ngOnInit() {
        this.adminServ.setHeaderText("Manage Admin");
        this.fetchAllAdmins();
        this.registerAdminForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(this.emailPattern)]],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(10)
                ])
            ]
        });
    }
    get email() {
        return this.registerAdminForm.get("email");
    }
    applyFilter(event) {
        console.log(event);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    get password() {
        return this.registerAdminForm.get("password");
    }
    openRegisterModal() {
        this.isAddModal = true;
    }
    paginate(event) {
        this.page = event.pageIndex + 1;
        this.count = event.pageSize;
        this.fetchAllAdmins();
    }
    dismissModal() {
        this.isAddModal = false;
    }
    registerUser(data) {
        this.isLoader = true;
        let dataToPass = {
            role: "admin",
            email: data.email,
            password: data.password
        };
        this.logServ.signUpSalon(dataToPass).subscribe((res) => {
            if (res.code === 200) {
                this.isLoader = false;
                this.toastrServ.success("Registered Successfully", "Please Login", {
                    timeOut: 1000
                });
                this.fetchAllAdmins();
                this.registerAdminForm.reset();
                this.isAddModal = false;
                this.authServ.sendToken(res.data.token);
            }
            else if (res.code === 201) {
                this.toastrServ.warning("User Already Exist", "Please Login", {
                    timeOut: 1000
                });
                this.isLoader = false;
                this.isAddModal = false;
            }
            else {
                this.isLoader = false;
                this.toastrServ.error("Failed to register", "Please try again", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastrServ.error("Server - Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    fetchAllAdmins() {
        this.isLoader = true;
        let dataToPass = {
            type: "admin",
            pageSize: this.count,
            page: this.page
        };
        this.adminServ.fetchAllUsersCommon(dataToPass).subscribe((data) => {
            if (data["code"] == 200) {
                this.isLoader = false;
                //   console.log(data["data"]["data"]);
                this.adminList = data["data"]["data"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.adminList);
                this.adminCountTotal = data["data"]["count"];
                if (this.adminList.length == 0) {
                    this.noRecordsFound = true;
                }
                //    console.log("BEHERE", this.adminList, this.adminCountTotal);
            }
        }, error => {
            this.isLoader = false;
            this.toastrServ.error("Server - Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    deleteAdmin(data) {
        //console.log(data);
    }
    onChange(data) {
        //console.log(this.toggle, data);
        // if (data["checked"] === true) {
        //   let dataToPass = {
        //     type: "admin"
        //     // _id:
        //   };
        //   //this.adminServ.activeUser()
        // } else if (e["checked"] === false) {
        // }
    }
};
ManageAdminComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _salon_login_login_service__WEBPACK_IMPORTED_MODULE_5__["LoginService"] },
    { type: _salon_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
ManageAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-manage-admin",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-admin.component.scss */ "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.scss")).default]
    })
], ManageAdminComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/manageplan/manageplan.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/manageplan/manageplan.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".managePlanWrapper .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.managePlanWrapper .header .actionButtons {\n  display: flex;\n  align-items: center;\n}\n.managePlanWrapper .mainSection {\n  display: flex;\n  flex-wrap: wrap;\n}\n.managePlanWrapper .mainSection .plan-card {\n  margin: 5px;\n  border: 1px solid lightgray;\n  box-shadow: 3px 4px 11px 1px lightgrey;\n  border-radius: 5px;\n  padding: 15px;\n  width: 250px;\n  background: #fff;\n  border-color: transparent;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  height: auto;\n}\n.managePlanWrapper .mainSection .plan-card h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  float: left;\n}\n.managePlanWrapper .mainSection .plan-card h3 {\n  color: #783a87;\n  position: absolute;\n  right: 15px;\n  top: 10px;\n}\n.managePlanWrapper .mainSection .plan-card .plan-area {\n  display: flex;\n  justify-content: space-between;\n}\n.managePlanWrapper .mainSection .plan-card .plan-edit .edit {\n  border: 1px solid white;\n  color: white;\n  font-weight: 600;\n}\n.managePlanWrapper .addPlanModel {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.managePlanWrapper .addPlanModel .modal-content {\n  margin: 10px;\n  padding: 10px;\n}\n.managePlanWrapper .addPlanModel .modal-content form .inpFeilds {\n  display: flex;\n  margin-top: 5px;\n  align-items: center;\n  margin-bottom: 5px;\n  justify-content: space-between;\n}\n.managePlanWrapper .addPlanModel .modal-content form .inpFeilds label {\n  width: 20%;\n}\n.managePlanWrapper .addPlanModel .modal-content form .inpFeilds .form-control {\n  width: 75% !important;\n}\n.card {\n  margin: 5px;\n  border: 1px solid lightgray;\n  box-shadow: 3px 4px 11px 1px lightgrey;\n  border-radius: 5px;\n  padding: 15px;\n  background: #fff;\n  border-color: transparent;\n  color: #333;\n  font-family: \"Roboto\", sans-serif;\n  height: auto;\n}\n.card h4 {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  float: left;\n}\n.card h3 {\n  color: #783a87;\n  margin-top: 10px;\n}\n.card p {\n  font-size: 14px;\n  margin-top: 10px;\n  margin-bottom: 0;\n}\n.card .delete-btn {\n  position: absolute;\n  top: 11px;\n  right: 12px;\n}\n.selectOption {\n  width: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9tYW5hZ2VwbGFuL21hbmFnZXBsYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9tYW5hZ2VwbGFuL21hbmFnZXBsYW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0FKO0FEQ0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNBSjtBREVJO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQVlBLFlBQUE7QUNYTjtBREFNO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0VSO0FEQU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ0VSO0FEQ007RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUNDUjtBREVRO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNBVjtBREtFO0VBQ0UsZUFBQTtFQUFpQixtQ0FBQTtFQUNqQixhQUFBO0VBQWUsc0JBQUE7RUFDZixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDRUo7QURBSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRU47QURFUTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FDQVY7QURFVTtFQUNFLFVBQUE7QUNBWjtBREVVO0VBQ0UscUJBQUE7QUNBWjtBRFdBO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFFQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtBQ1RGO0FEVUU7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDUko7QURVRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEYUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1hKO0FEYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDWEo7QURjQTtFQUNFLFVBQUE7QUNYRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9tYW5hZ2VwbGFuL21hbmFnZXBsYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuYWdlUGxhbldyYXBwZXIge1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5hY3Rpb25CdXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuICAubWFpblNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnBsYW4tY2FyZCB7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIGJveC1zaGFkb3c6IDNweCA0cHggMTFweCAxcHggbGlnaHRncmV5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIGgzIHtcbiAgICAgICAgY29sb3I6ICM3ODNhODc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgIHRvcDogMTBweDtcbiAgICAgIH1cbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIC5wbGFuLWFyZWEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG4gICAgICAucGxhbi1lZGl0IHtcbiAgICAgICAgLmVkaXQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5hZGRQbGFuTW9kZWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAuaGVhZGVyVGV4dCB7XG4gICAgICB9XG4gICAgICBmb3JtIHtcbiAgICAgICAgLmlucEZlaWxkcyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNlbGVjdCB7XG4gICAgICAgICAgLy8gICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgLy8gICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmNhcmQge1xuICBtYXJnaW46IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3gtc2hhZG93OiAzcHggNHB4IDExcHggMXB4IGxpZ2h0Z3JleTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxNXB4O1xuXG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGhlaWdodDogYXV0bztcbiAgaDQge1xuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgaDMge1xuICAgIGNvbG9yOiAjNzgzYTg3O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHJpZ2h0OiAxNXB4O1xuICAgIC8vIHRvcDogMTBweDtcbiAgfVxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5kZWxldGUtYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMXB4O1xuICAgIHJpZ2h0OiAxMnB4O1xuICB9XG59XG4uc2VsZWN0T3B0aW9uIHtcbiAgd2lkdGg6IDc1JTtcbn1cbiIsIi5tYW5hZ2VQbGFuV3JhcHBlciAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5oZWFkZXIgLmFjdGlvbkJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5tYWluU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAubWFpblNlY3Rpb24gLnBsYW4tY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggMTFweCAxcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBoZWlnaHQ6IGF1dG87XG59XG4ubWFuYWdlUGxhbldyYXBwZXIgLm1haW5TZWN0aW9uIC5wbGFuLWNhcmQgaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAubWFpblNlY3Rpb24gLnBsYW4tY2FyZCBoMyB7XG4gIGNvbG9yOiAjNzgzYTg3O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDEwcHg7XG59XG4ubWFuYWdlUGxhbldyYXBwZXIgLm1haW5TZWN0aW9uIC5wbGFuLWNhcmQgLnBsYW4tYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAubWFpblNlY3Rpb24gLnBsYW4tY2FyZCAucGxhbi1lZGl0IC5lZGl0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAuYWRkUGxhbk1vZGVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5hZGRQbGFuTW9kZWwgLm1vZGFsLWNvbnRlbnQge1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ubWFuYWdlUGxhbldyYXBwZXIgLmFkZFBsYW5Nb2RlbCAubW9kYWwtY29udGVudCBmb3JtIC5pbnBGZWlsZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm1hbmFnZVBsYW5XcmFwcGVyIC5hZGRQbGFuTW9kZWwgLm1vZGFsLWNvbnRlbnQgZm9ybSAuaW5wRmVpbGRzIGxhYmVsIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAuYWRkUGxhbk1vZGVsIC5tb2RhbC1jb250ZW50IGZvcm0gLmlucEZlaWxkcyAuZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggMTFweCAxcHggbGlnaHRncmV5O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmNhcmQgaDQge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi5jYXJkIGgzIHtcbiAgY29sb3I6ICM3ODNhODc7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2FyZCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmNhcmQgLmRlbGV0ZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTFweDtcbiAgcmlnaHQ6IDEycHg7XG59XG5cbi5zZWxlY3RPcHRpb24ge1xuICB3aWR0aDogNzUlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts ***!
  \**************************************************************************/
/*! exports provided: ManageplanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageplanComponent", function() { return ManageplanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirmation/confirmation.component */ "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");







let ManageplanComponent = class ManageplanComponent {
    constructor(adminServ, fb, toastServ, SimpleModalService) {
        this.adminServ = adminServ;
        this.fb = fb;
        this.toastServ = toastServ;
        this.SimpleModalService = SimpleModalService;
        this.planListArray = [];
        this.intervals = [{ key: "Monthly", value: "month" }];
    }
    ngOnInit() {
        this.adminServ.setHeaderText("Manage Plans");
        this.getplans();
        this.savePlan = this.fb.group({
            amount: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            interval: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            planname: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            trialperiod: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    openAddPlanPanel(data) {
        if (data === "add") {
            this.isAddPlan = true;
            this.isEditPlan = false;
            this.headertext = "Add Plan";
            this.savePlan
                .get("interval")
                .patchValue({ key: "Monthly", value: "month" });
        }
        else if (data === "edit") {
            this.isEditPlan = true;
            this.headertext = "Edit Plan";
        }
    }
    deletePlan(data) {
        this.SimpleModalService.addModal(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
        }).subscribe(isConfirmed => {
            if (isConfirmed === true) {
                this.isLoader = true;
                let dataToPass = {
                    planid: data.plan_id,
                    _id: data._id
                };
                this.adminServ.deletePlans(dataToPass).subscribe((data) => {
                    if (data["code"] === 200) {
                        this.getplans();
                        this.isAddPlan = false;
                        this.isEditPlan = false;
                        this.isLoader = false;
                        this.savePlan.reset();
                        this.toastServ.success("Plan Delete", "Success", {
                            timeOut: 1000
                        });
                    }
                    else {
                        this.isLoader = false;
                        this.toastServ.error("Failed To Delete", "Error", {
                            timeOut: 1000
                        });
                    }
                }, error => {
                    this.isLoader = false;
                    this.toastServ.error("Server- Error", error.error["message"], {
                        timeOut: 1000
                    });
                });
            }
        });
    }
    close(data) {
        if (data === "add") {
            this.isAddPlan = false;
            this.savePlan.reset();
        }
        else if (data === "edit") {
            this.isEditPlan = false;
            this.savePlan.reset();
        }
    }
    add(data) {
        this.isLoader = true;
        console.log("LOADER", this.isLoader);
        this.adminServ.addPlans(data).subscribe((data) => {
            if (data["code"] === 200) {
                this.getplans();
                this.isAddPlan = false;
                this.isLoader = false;
                this.savePlan.reset();
                this.toastServ.success("Plan Added", "Success", {
                    timeOut: 1000
                });
            }
            else {
                this.isLoader = false;
                this.toastServ.error("Failed To Add", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastServ.error("Server- Error", error.error["message"], {
                timeOut: 1000
            });
            this.isLoader = false;
        });
    }
    updatePlan(data) {
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
    update(data) {
        console.log(data);
        this.isLoader = true;
        let dataToPass = {
            plan_id: this.planID,
            trial_period_days: data.trialperiod,
            amount: data.amount,
            _id: this._idPlan,
            id: data.planname,
            interval: data.interval
        };
        console.log("DATATOPASS", dataToPass);
        this.adminServ.editPlans(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.getplans();
                this.isLoader = false;
                this.isAddPlan = false;
                this.isEditPlan = false;
                this.savePlan.reset();
                this.toastServ.success("Plan Updated", "Success", {
                    timeOut: 1000
                });
            }
            else {
                this.isLoader = false;
                this.toastServ.error("Failed To Update", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastServ.error("Server- Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    getplans() {
        this.isLoader = true;
        let dataToPass = {
            type: "plans"
        };
        this.adminServ.getPlans(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.isLoader = false;
                this.planListArray = data["data"];
                if (this.planListArray.length === 0) {
                    this.noRecordsFound = true;
                }
                else {
                    this.noRecordsFound = false;
                }
            }
        });
    }
};
ManageplanComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__["SimpleModalService"] }
];
ManageplanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-manageplan",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manageplan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/manageplan/manageplan.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manageplan.component.scss */ "./src/app/admin/admin-dashboard/manageplan/manageplan.component.scss")).default]
    })
], ManageplanComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/other/other.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/other/other.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".managePlanWrapper .header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.managePlanWrapper .header .actionButtons {\n  display: flex;\n  align-items: center;\n}\n.managePlanWrapper .mainSection {\n  display: flex;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9vdGhlci9vdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL290aGVyL290aGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjtBRENJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDQ047QURFRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvb3RoZXIvb3RoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFuYWdlUGxhbldyYXBwZXIge1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC5hY3Rpb25CdXR0b25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuICAubWFpblNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG4iLCIubWFuYWdlUGxhbldyYXBwZXIgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAuaGVhZGVyIC5hY3Rpb25CdXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5tYW5hZ2VQbGFuV3JhcHBlciAubWFpblNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/other/other.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/other/other.component.ts ***!
  \****************************************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var _salon_dashboard_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../salon/dashboard/common.service */ "./src/app/salon/dashboard/common.service.ts");




let OtherComponent = class OtherComponent {
    constructor(adminServ, common) {
        this.adminServ = adminServ;
        this.common = common;
    }
    ngOnInit() {
        this.adminServ.setHeaderText("Others");
    }
};
OtherComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: _salon_dashboard_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
OtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-other",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./other.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/other/other.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./other.component.scss */ "./src/app/admin/admin-dashboard/other/other.component.scss")).default]
    })
], OtherComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/roles/roles.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/roles/roles.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rolesWrapper .actionButtons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.rolesWrapper .actionButtons .headerTextArea {\n  width: 50%;\n}\n.rolesWrapper .actionButtons .btnActionArea {\n  width: 50%;\n  display: flex;\n  justify-content: flex-end;\n}\n.rolesWrapper .actionButtons .btnActionArea .btn-primary-btn {\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  color: white;\n  cursor: pointer;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.rolesWrapper .modalSection {\n  position: fixed;\n  /* Sit on top of the page content */\n  display: none;\n  /* Hidden by default */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rolesWrapper .modalSection .modal-content-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n.rolesWrapper .modalSection .modal-content-area .header {\n  font-size: 20px;\n  border-bottom: 1px solid lightgray;\n  padding-bottom: 10px;\n}\n.rolesWrapper .modalSection .modal-content-area form {\n  display: flex;\n  align-items: center;\n  margin-top: 15px;\n}\n.rolesWrapper .modalSection .modal-content-area form label {\n  width: 45%;\n  white-space: nowrap;\n  font-size: 15px;\n  margin: 0;\n}\n.rolesWrapper .confirmDialog {\n  position: absolute;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 1000;\n}\ntable {\n  width: 100%;\n}\n.btn-sec {\n  margin-bottom: 5px;\n}\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n.headerText {\n  font-size: 20px;\n  padding-bottom: 0;\n}\n.status-check {\n  width: 120px;\n}\n.buttonArea {\n  display: flex;\n  align-items: center;\n  pointer-events: none;\n}\n.buttonArea .disabledClass {\n  opacity: 0.2;\n  margin-left: 10px;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtBQ0FOO0FER0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDRE47QURFTTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvR0FBQTtBQ0FSO0FETUU7RUFDRSxlQUFBO0VBQWlCLG1DQUFBO0VBQ2pCLGFBQUE7RUFBZSxzQkFBQTtFQUNmLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUFzQyxrQ0FBQTtFQUN0QyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjtBRENJO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0NOO0FEQ007RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQkFBQTtBQ0NSO0FEQ007RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NSO0FEQVE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0VWO0FESUU7RUFDRSxrQkFBQTtFQUFvQixtQ0FBQTtFQUNwQixXQUFBO0VBQWEsc0NBQUE7RUFDYixZQUFBO0VBQWMsdUNBQUE7RUFDZCxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFBc0Msa0NBQUE7RUFDdEMsYUFBQTtBQ0VKO0FESUE7RUFDRSxXQUFBO0FDRkY7QURJQTtFQUNFLGtCQUFBO0FDREY7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNERjtBRElBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNERjtBREdFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9yb2xlcy9yb2xlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb2xlc1dyYXBwZXIge1xuICAuYWN0aW9uQnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5oZWFkZXJUZXh0QXJlYSB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgIH1cblxuICAgIC5idG5BY3Rpb25BcmVhIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIC5idG4tcHJpbWFyeS1idG4ge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpXG4gICAgICAgICAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tb2RhbFNlY3Rpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgICB6LWluZGV4OiAyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIC5tb2RhbC1jb250ZW50LWFyZWEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgICAgZm9ybSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb25maXJtRGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgLm1vZGFsLWNvbnRlbnQtc2VjdGlvbiB7XG4gICAgfVxuICB9XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXNlYyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmJ0bi1zaWduLWluIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5oZWFkZXJUZXh0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmJ1dHRvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAuZGlzYWJsZWRDbGFzcyB7XG4gICAgb3BhY2l0eTogMC4yO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cbn1cbiIsIi5yb2xlc1dyYXBwZXIgLmFjdGlvbkJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucm9sZXNXcmFwcGVyIC5hY3Rpb25CdXR0b25zIC5oZWFkZXJUZXh0QXJlYSB7XG4gIHdpZHRoOiA1MCU7XG59XG4ucm9sZXNXcmFwcGVyIC5hY3Rpb25CdXR0b25zIC5idG5BY3Rpb25BcmVhIHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yb2xlc1dyYXBwZXIgLmFjdGlvbkJ1dHRvbnMgLmJ0bkFjdGlvbkFyZWEgLmJ0bi1wcmltYXJ5LWJ0biB7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4ucm9sZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucm9sZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ucm9sZXNXcmFwcGVyIC5tb2RhbFNlY3Rpb24gLm1vZGFsLWNvbnRlbnQtYXJlYSAuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5yb2xlc1dyYXBwZXIgLm1vZGFsU2VjdGlvbiAubW9kYWwtY29udGVudC1hcmVhIGZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLnJvbGVzV3JhcHBlciAubW9kYWxTZWN0aW9uIC5tb2RhbC1jb250ZW50LWFyZWEgZm9ybSBsYWJlbCB7XG4gIHdpZHRoOiA0NSU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuLnJvbGVzV3JhcHBlciAuY29uZmlybURpYWxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAxMDAwO1xufVxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bi1zZWMge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5idG4tc2lnbi1pbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG4uaGVhZGVyVGV4dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogMTIwcHg7XG59XG5cbi5idXR0b25BcmVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYnV0dG9uQXJlYSAuZGlzYWJsZWRDbGFzcyB7XG4gIG9wYWNpdHk6IDAuMjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/roles/roles.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/roles/roles.component.ts ***!
  \****************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let RolesComponent = class RolesComponent {
    constructor(admnServ, toastrServ, fb, dialog) {
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
    ngOnInit() {
        this.roleForm = this.fb.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.fetchRoles();
        this.admnServ.setHeaderText("Manage Roles");
    }
    applyFilter(event) {
        console.log(event);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    paginate(event) {
        // console.log(event);
        this.page = event.pageIndex + 1;
        // console.log("c", this.count);
        // console.log("p", this.page);
        this.count = event.pageSize;
        this.fetchRoles();
    }
    confirm(data) {
        this.isConfirm = data;
    }
    reject(data) {
        //console.log(data);
        this.isConfirm = data;
        // console.log(this.isConfirm);
        this.isDeleteDialog = false;
    }
    fetchRoles() {
        this.isLoader = true;
        let dataToPass = {
            type: "roles",
            pageSize: this.count,
            page: this.page
        };
        this.admnServ.getRolesList(dataToPass).subscribe((data) => {
            //   console.log(data);
            if (data["code"] == 200) {
                this.isLoader = false;
                this.rolesList = data["data"]["data"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.rolesList);
                this.dataSource.sort = this.sort;
                this.rolesCount = data["data"]["count"];
                if (this.rolesList.length == 0) {
                    this.noRecordsFound = true;
                }
            }
            else {
                this.isLoader = false;
                this.noRecordsFound = false;
                this.toastrServ.error("Failed To Fetch Roles", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    openAddRolesModal(data) {
        if (data === "add") {
            this.modalHeaderText = "Add Role";
            this.isAdd = true;
        }
        else {
            this.roleForm.get("name").setValue(data.name);
            this.role_id = data._id;
            this.modalHeaderText = "Edit Role";
            this.isAdd = false;
        }
        // console.log(data);
        this.isAddModal = true;
    }
    deleteRole(data) {
        let dataToPass = {
            role_id: data._id
        };
        this.admnServ.deleteRoles(dataToPass).subscribe(data => {
            //    console.log("INS ERE", data);
            if (data["code"] === 200) {
                this.toastrServ.success("Role Deleted", "Success", {
                    timeOut: 1000
                });
                this.fetchRoles();
            }
            else {
                this.toastrServ.error("Failed To Delete", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    dismissModal() {
        this.isAddModal = false;
        this.roleForm.reset();
    }
    saveRole(data) {
        let dataToPass = {
            role: data.name
        };
        this.admnServ.addRoles(dataToPass).subscribe(data => {
            if (data["code"] === 200) {
                this.isAddModal = false;
                this.roleForm.reset();
                this.toastrServ.success("Role Added", "Success", {
                    timeOut: 1000
                });
                this.roleForm.reset();
                this.fetchRoles();
            }
            else {
                this.isAddModal = true;
                this.toastrServ.error("Failed To Add", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    updateRole(data) {
        //   console.log("N ", data);
        let dataToPass = {
            name: data.name,
            _id: this.role_id
        };
        // console.log(dataToPass);
        this.admnServ.updateRoles(dataToPass).subscribe(data => {
            if (data["code"] === 200) {
                this.isAddModal = false;
                this.toastrServ.success("Role Updated", "Success", {
                    timeOut: 1000
                });
                this.roleForm.reset();
                this.fetchRoles();
            }
            else {
                this.isAddModal = true;
                this.toastrServ.error("Failed To Update", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            //   console.log(error.error);
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
};
RolesComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], RolesComponent.prototype, "sort", void 0);
RolesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-roles",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/roles/roles.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./roles.component.scss */ "./src/app/admin/admin-dashboard/roles/roles.component.scss")).default]
    })
], RolesComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/salonlist/salonlist.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.btn-sus {\n  margin-bottom: 5px;\n  font-size: 11px;\n  width: 50px;\n}\n\n.buttonArea {\n  display: flex;\n  justify-content: space-between;\n}\n\n.headerSection {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.headerSection .header {\n  color: purple;\n}\n\n.status-check {\n  width: 10%;\n}\n\n.status-check:nth-child(2) {\n  width: 25%;\n}\n\n.status-check:nth-child(1) {\n  width: 20%;\n}\n\n.suspend-sec {\n  width: 20%;\n  margin-left: 10px;\n}\n\n.actionArea {\n  display: flex;\n  align-items: center;\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.userDetailsOverlay .main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n\n.userDetailsOverlay .main-section-area .header {\n  border-bottom: 1px solid lightgray;\n}\n\n.userDetailsOverlay .main-section-area .main-section {\n  margin-top: 10px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row label {\n  width: 20%;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n\n.countShow {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.countShow h1 {\n  width: 200px;\n  height: 200px;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  border: 10px solid purple;\n  border-radius: 100px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9zYWxvbmxpc3Qvc2Fsb25saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbi1kYXNoYm9hcmQvc2Fsb25saXN0L3NhbG9ubGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURIRTtFQUNFLGFBQUE7QUNLSjs7QURGQTtFQUNFLFVBQUE7QUNLRjs7QURIQTtFQUNFLFVBQUE7QUNNRjs7QURKQTtFQUNFLFVBQUE7QUNPRjs7QURMQTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBQ1FGOztBRE5BO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FEU0E7RUFDRSxlQUFBO0VBQWlCLG1DQUFBO0VBRWpCLFdBQUE7RUFBYSxzQ0FBQTtFQUNiLFlBQUE7RUFBYyx1Q0FBQTtFQUNkLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUFzQyxrQ0FBQTtFQUN0QyxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNIRjs7QURJRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNGSjs7QURHSTtFQUNFLGtDQUFBO0FDRE47O0FER0k7RUFDRSxnQkFBQTtBQ0ROOztBREVNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUNBUjs7QURDUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQ0NWOztBRENRO0VBQ0UsVUFBQTtBQ0NWOztBRENRO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDVjs7QURFTTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7QUNBUjs7QURRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNORjs7QURTQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UsYUFBQTtBQ05GOztBRFNBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EscUJBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7RUNORjs7RURRQTtJQUNFLGtCQUFBO0VDTEY7O0VET0E7SUFDRSxhQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUNKRjs7RURNQTtJQUNFLFdBQUE7RUNIRjs7RURLQTtJQUNFLGFBQUE7RUNGRjs7RURLQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFDQSw4QkFBQTtJQUNBLFlBQUE7SUFDQSx1QkFBQTtFQ0ZGO0FBQ0Y7O0FESUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZGOztBREdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3NhbG9ubGlzdC9zYWxvbmxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ0bi1zdXMge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4uYnV0dG9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5oZWFkZXJTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAuaGVhZGVyIHtcbiAgICBjb2xvcjogcHVycGxlO1xuICB9XG59XG4uc3RhdHVzLWNoZWNrIHtcbiAgd2lkdGg6IDEwJTtcbn1cbi5zdGF0dXMtY2hlY2s6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDI1JTtcbn1cbi5zdGF0dXMtY2hlY2s6bnRoLWNoaWxkKDEpIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi5zdXNwZW5kLXNlYyB7XG4gIHdpZHRoOiAyMCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmFjdGlvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnN0YXR1cy1jaGVjay1hY3Rpb24ge1xufVxuLy8gLm5vUmVjb3Jkc3tcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgLm5vUmVje1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBjb2xvcjogIzcyMWMyNDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XG4vLyAgICAgcGFkZGluZzogMmVtO1xuLy8gICAgIHdpZHRoOiA1MCU7XG4vLyAgICAgfVxuXG4vLyB9XG4udXNlckRldGFpbHNPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgLy9kaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC5tYWluLXNlY3Rpb24tYXJlYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIC5oZWFkZXIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICB9XG4gICAgLm1haW4tc2VjdGlvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgLmZpZWxkLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLnByb2ZpbGVQaWMge1xuICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmltZyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICAuYnRuLUFyZWEge1xuICAgIH1cbiAgfVxufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuICB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgdGQubWF0LWNlbGwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc3VzcGVuZC1zZWMge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG4gIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi5jb3VudFNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaDEge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXI6IDEwcHggc29saWQgcHVycGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tc3VzIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uYnV0dG9uQXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmhlYWRlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uaGVhZGVyU2VjdGlvbiAuaGVhZGVyIHtcbiAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMCU7XG59XG5cbi5zdGF0dXMtY2hlY2s6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLnN0YXR1cy1jaGVjazpudGgtY2hpbGQoMSkge1xuICB3aWR0aDogMjAlO1xufVxuXG4uc3VzcGVuZC1zZWMge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmFjdGlvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXNlckRldGFpbHNPdmVybGF5IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBTaXQgb24gdG9wIG9mIHRoZSBwYWdlIGNvbnRlbnQgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3BhY2l0eTogMTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLmhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyAucHJvZmlsZVBpYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IGxhYmVsIHtcbiAgd2lkdGg6IDIwJTtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmZpZWxkLXJvdyAuZGV0YWlscyB7XG4gIHdpZHRoOiA3NSU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24gLmltZyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cblxuICB0ZC5tYXQtY2VsbDpmaXJzdC1vZi10eXBlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cblxuICB0ZC5tYXQtY2VsbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnN1c3BlbmQtc2VjIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLXJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5tYXQtcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICBwYWRkaW5nOiA4cHggMjRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIH1cbn1cbi5jb3VudFNob3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jb3VudFNob3cgaDEge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDEwcHggc29saWQgcHVycGxlO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn0iXX0= */");

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
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let SalonlistComponent = class SalonlistComponent {
    constructor(adminServ, toastrServ) {
        this.adminServ = adminServ;
        this.toastrServ = toastrServ;
        this.displayedColumns = [
            "name",
            "salonaddress",
            "contact",
            "opentime",
            "closetime",
            "action"
        ];
        this.limit = 0;
        this.count = 5;
        this.pageSize = 5;
        this.page = 1;
        this.disabled = true;
        this.showSalonDetail = false;
    }
    ngOnInit() {
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
    getActiveSalonsList() {
        this.isLoader = true;
        let dataToPass = {
            type: "activesalons",
            pageSize: this.count,
            page: this.page
        };
        this.adminServ.getSalonsList(dataToPass).subscribe(data => {
            // console.log(data);
            // console.log("SalonsList", data["data"]);
            if (data["code"] === 200) {
                this.isLoader = false;
                this.activeSalons = data["data"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.activeSalons);
                this.dataSource.sort = this.sort;
                if (this.activeSalons.length == 0) {
                    this.noRecordsFound = true;
                }
                else {
                    this.noRecordsFound = false;
                }
            }
            else {
                this.isLoader = false;
                this.toastrServ.error("Failed To Fetch Salons", "Failed", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastrServ.success("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    applyFilter(event) {
        console.log(event);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getActiveSalonsCount() {
        let dataToPass = {
            type: "salon"
        };
        this.adminServ.getActiveSalonsCount(dataToPass).subscribe(data => {
            //  console.log("DATA", data);
            if (data["code"] == 200) {
                this.ActiveSalonsCount = data["data"];
                //   console.log("ACTIVE SALONS COUNT", this.ActiveSalonsCount);
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    paginate(event) {
        //  console.log(event);
        this.page = event.pageIndex + 1;
        this.count = event.pageSize;
        this.getActiveSalonsList();
    }
    showSalonDetails(data) {
        this.isLoader = true;
        // console.log(data);
        let dataToPass = {
            salon_id: data._id
        };
        this.adminServ.getSalonDetails(dataToPass).subscribe((data) => {
            //  console.log("DSS", data);
            if (data["code"] === 200) {
                this.showSalonDetail = true;
                this.isLoader = false;
                this.salonDetails = data["data"]["salondetail"];
                this.salonEmail = data["data"]["email"];
                if (this.salonDetails["image"] === null) {
                    this.salonDetails["image"] = "../../../assets/images/profilepic.png";
                }
            }
            else {
                this.isLoader = false;
                this.toastrServ.error("Failed To Fetch User Details", "Error", {
                    timeOut: 1000
                });
            }
        });
    }
    closeSalonDetails() {
        this.showSalonDetail = false;
        this.isCountShow = false;
    }
    getMontlyUser(data) {
        if (data) {
            let dataToPass = { salon_id: data["_id"] };
            this.adminServ.getMonthlyUsersCount(dataToPass).subscribe((data) => {
                if (data.code === 200) {
                    this.monthlyUserCount = data.data;
                    this.showSalonDetail = true;
                    this.isCountShow = true;
                }
                else if (data.code == 400) {
                    this.toastrServ.error(data.message, "", {
                        timeOut: 1000
                    });
                }
            }, error => {
                this.toastrServ.error(error.message, "", { timeOut: 1000 });
            });
        }
    }
    declineSalonRequest(data) {
        this.isLoader = true;
        // console.log("ApproveFor", data);
        let dataToPass = {
            salon_id: data._id
        };
        this.adminServ.declineSalonRequest(dataToPass).subscribe(data => {
            // console.log("FFFF", data);
            if (data["code"] === 200) {
                this.isLoader = false;
                this.toastrServ.success("Salon Declined Successfully", "", {
                    timeOut: 3000
                });
                this.getActiveSalonsList();
                this.getActiveSalonsCount();
            }
            else {
                this.isLoader = false;
                this.toastrServ.error("Failed To Decline", "", {
                    timeOut: 3000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 3000
            });
        });
    }
};
SalonlistComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], SalonlistComponent.prototype, "sort", void 0);
SalonlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-salonlist",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./salonlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/salonlist/salonlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./salonlist.component.scss */ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.scss")).default]
    })
], SalonlistComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/services/services.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/services/services.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".servicesWrapper .headerSection {\n  display: flex;\n  justify-content: space-between;\n}\n.servicesWrapper .headerSection .actionBtn {\n  padding-right: 10px;\n}\n.servicesWrapper .addServiceModal {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.servicesWrapper .addServiceModal .modalContent {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n.servicesWrapper .addServiceModal .modalContent .headerText {\n  border-bottom: 1px solid lightgray;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields .label {\n  width: 30%;\n  white-space: nowrap;\n  margin-right: 10px;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields .selectOption {\n  width: 65%;\n  padding: 10px !important;\n  background: transparent;\n  box-shadow: none;\n  border: 1px solid #ced4da;\n  margin-right: 0;\n}\n.servicesWrapper .addServiceModal .modalContent .mainSection .serviceForm .fields .pls {\n  width: 65% !important;\n  margin-left: 4px;\n}\n.selectOption {\n  margin-left: 15px;\n  width: 60%;\n  padding: 5px;\n  border-radius: 35px;\n}\ntable {\n  width: 100%;\n}\n.status-check {\n  width: 120px;\n}\n.headerText h3 {\n  font-size: 20px;\n  padding-bottom: 0;\n}\n.btn-sign-in {\n  min-width: 80px;\n  margin-right: 5px;\n  margin-left: 0;\n}\n.serviceForm {\n  margin-top: 15px;\n}\n.buttonArea {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n.buttonArea .editBtn {\n  margin-left: 10px;\n}\n.btnService {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQUo7QURDSTtFQUNFLG1CQUFBO0FDQ047QURFRTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFFakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0dKO0FERkk7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDSU47QURGTTtFQUNFLGtDQUFBO0FDSVI7QURBVTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7QUNDWjtBREFZO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNFZDtBREFZO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ0VkO0FEQVk7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDRWQ7QURNQTtFQUNFLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxXQUFBO0FDSEY7QURNQTtFQUNFLFlBQUE7QUNIRjtBREtBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRkY7QURLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNGRjtBRElBO0VBQ0UsZ0JBQUE7QUNERjtBRElBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNERjtBREVFO0VBQ0UsaUJBQUE7QUNBSjtBREdBO0VBQ0UsWUFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3NlcnZpY2VzL3NlcnZpY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlcnZpY2VzV3JhcHBlciB7XG4gIC5oZWFkZXJTZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAuYWN0aW9uQnRuIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgfVxuICB9XG4gIC5hZGRTZXJ2aWNlTW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gICAgLy9kaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpOyAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICAgIHotaW5kZXg6IDI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC5tb2RhbENvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG5cbiAgICAgIC5oZWFkZXJUZXh0IHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgIH1cbiAgICAgIC5tYWluU2VjdGlvbiB7XG4gICAgICAgIC5zZXJ2aWNlRm9ybSB7XG4gICAgICAgICAgLmZpZWxkcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zZWxlY3RPcHRpb24ge1xuICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGxzIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLnNlbGVjdE9wdGlvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdGF0dXMtY2hlY2sge1xuICB3aWR0aDogMTIwcHg7XG59XG4uaGVhZGVyVGV4dCBoMyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5idG4tc2lnbi1pbiB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLnNlcnZpY2VGb3JtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJ1dHRvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIC5lZGl0QnRuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgfVxufVxuLmJ0blNlcnZpY2Uge1xuICB3aWR0aDogMTAwcHg7XG59XG4iLCIuc2VydmljZXNXcmFwcGVyIC5oZWFkZXJTZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnNlcnZpY2VzV3JhcHBlciAuaGVhZGVyU2VjdGlvbiAuYWN0aW9uQnRuIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5zZXJ2aWNlc1dyYXBwZXIgLmFkZFNlcnZpY2VNb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIHdpZHRoOiAxMDAlO1xuICAvKiBGdWxsIHdpZHRoIChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAvKiBCbGFjayBiYWNrZ3JvdW5kIHdpdGggb3BhY2l0eSAqL1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zZXJ2aWNlc1dyYXBwZXIgLmFkZFNlcnZpY2VNb2RhbCAubW9kYWxDb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5zZXJ2aWNlc1dyYXBwZXIgLmFkZFNlcnZpY2VNb2RhbCAubW9kYWxDb250ZW50IC5oZWFkZXJUZXh0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi5zZXJ2aWNlc1dyYXBwZXIgLmFkZFNlcnZpY2VNb2RhbCAubW9kYWxDb250ZW50IC5tYWluU2VjdGlvbiAuc2VydmljZUZvcm0gLmZpZWxkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5zZXJ2aWNlc1dyYXBwZXIgLmFkZFNlcnZpY2VNb2RhbCAubW9kYWxDb250ZW50IC5tYWluU2VjdGlvbiAuc2VydmljZUZvcm0gLmZpZWxkcyAubGFiZWwge1xuICB3aWR0aDogMzAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uc2VydmljZXNXcmFwcGVyIC5hZGRTZXJ2aWNlTW9kYWwgLm1vZGFsQ29udGVudCAubWFpblNlY3Rpb24gLnNlcnZpY2VGb3JtIC5maWVsZHMgLnNlbGVjdE9wdGlvbiB7XG4gIHdpZHRoOiA2NSU7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cbi5zZXJ2aWNlc1dyYXBwZXIgLmFkZFNlcnZpY2VNb2RhbCAubW9kYWxDb250ZW50IC5tYWluU2VjdGlvbiAuc2VydmljZUZvcm0gLmZpZWxkcyAucGxzIHtcbiAgd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uc2VsZWN0T3B0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHdpZHRoOiA2MCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzVweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0YXR1cy1jaGVjayB7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLmhlYWRlclRleHQgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uYnRuLXNpZ24taW4ge1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnNlcnZpY2VGb3JtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLmJ1dHRvbkFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG4uYnV0dG9uQXJlYSAuZWRpdEJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYnRuU2VydmljZSB7XG4gIHdpZHRoOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/services/services.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/services/services.component.ts ***!
  \**********************************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirmation/confirmation.component */ "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");








let ServicesComponent = class ServicesComponent {
    constructor(adminServ, toastrServ, fb, SimpleModalService) {
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
    ngOnInit() {
        this.saveServiceForm = this.fb.group({
            category: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.adminServ.setHeaderText("Manage Services");
        this.fetchCategoriesList();
        this.fetchAllServices();
    }
    applyFilter(event) {
        console.log(event);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    updateData(data) {
        this.isLoader = true;
        let dataToPass = {
            service_id: this.serviceID,
            name: data.name
        };
        this.adminServ.updateService(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.fetchAllServices();
                this.toastrServ.success(data["message"], "Sucess", {
                    timeOut: 500
                });
                this.addServiceModal = false;
                this.isLoader = false;
                this.saveServiceForm.reset();
            }
            else if (data["code"] === 200) {
                this.toastrServ.error(data["message"], "Error", {
                    timeOut: 500
                });
                this.isLoader = false;
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 500
            });
            this.isLoader = false;
        });
    }
    updateService(data) {
        this.openAddServiceModal(data);
    }
    fetchCategoriesList() {
        let dataToPass = {
            type: "categories"
        };
        this.adminServ.getCategories(dataToPass).subscribe(data => {
            if (data["code"] === 200) {
                // console.log("data", data);
                this.adminCategoriesCount = data["data"]["count"];
                if (data["data"].length === 0) {
                    this.showNoRecords(true);
                }
                if (data["data"].length > 0) {
                    this.showNoRecords(false);
                    this.categoriesList = data["data"];
                }
            }
            else {
                this.toastrServ.error("Failed To Fetch", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    showNoRecords(data) {
        this.noRecordsFound = data;
    }
    openAddServiceModal(data) {
        if (data === "add") {
            this.action = "Add";
            this.addServiceModal = true;
            this.isShowUpdate = false;
        }
        else {
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
    deleteService(data) {
        this.SimpleModalService.addModal(_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmationComponent"], {
            title: "Warning",
            message: "Are you sure you want to delete?"
        }).subscribe(isConfirmed => {
            // Get modal result
            if (isConfirmed === true) {
                let dataToPass = {
                    service_id: data._id
                };
                this.adminServ.removeServices(dataToPass).subscribe((data) => {
                    if (data["code"] == 200) {
                        this.toastrServ.success("Service Deleted", "Success", {
                            timeOut: 1000,
                            progressAnimation: "decreasing"
                        });
                        this.fetchAllServices();
                    }
                    else {
                        this.toastrServ.error("Failed To Delete", "Error", {
                            timeOut: 1000,
                            progressAnimation: "decreasing"
                        });
                    }
                }, error => {
                    this.toastrServ.error("Server Error", error.error["message"], {
                        timeOut: 1000,
                        progressAnimation: "decreasing"
                    });
                });
            }
        });
    }
    addService(data) {
        this.isLoader = true;
        let dataToPass = {
            category_id: data.category,
            name: data.name
        };
        this.adminServ.addServices(dataToPass).subscribe((data) => {
            if (data["code"] == 200) {
                this.toastrServ.success("Service Added", "Success", {
                    timeOut: 1000,
                    progressAnimation: "decreasing"
                });
                this.isLoader = false;
                this.addServiceModal = false;
                this.saveServiceForm.reset();
                this.fetchAllServices();
            }
            else {
                this.toastrServ.error("Failed To Add", "Error", {
                    timeOut: 1000,
                    progressAnimation: "decreasing"
                });
                this.isLoader = false;
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000,
                progressAnimation: "decreasing"
            });
            this.isLoader = false;
        });
    }
    dismissModal() {
        this.addServiceModal = false;
        this.saveServiceForm.reset();
    }
    paginate(event) {
        this.page = event.pageIndex + 1;
        this.count = event.pageSize;
        this.fetchAllServices();
    }
    fetchAllServices() {
        let dataToPass = {
            type: "services",
            pageSize: this.count,
            page: this.page
        };
        this.adminServ.getServices(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.servicesList = data["data"]["data"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](this.servicesList);
                this.dataSource.sort = this.sort;
                this.servicesCount = data["data"]["count"];
                if (data["data"]["data"].length == 0) {
                    this.noRecordsFound = true;
                }
                else {
                    this.noRecordsFound = false;
                }
                // this.toastrServ.success("Fetched Services", "Success", {
                //   timeOut: 1000
                // });
            }
            else {
                this.toastrServ.error("Failed to fetch", "Error", {
                    timeOut: 1000
                });
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
};
ServicesComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: ngx_simple_modal__WEBPACK_IMPORTED_MODULE_6__["SimpleModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSort"], { static: false })
], ServicesComponent.prototype, "sort", void 0);
ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-services",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/services/services.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./services.component.scss */ "./src/app/admin/admin-dashboard/services/services.component.scss")).default]
    })
], ServicesComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9zdWJjcmlwdGlvbnMtbGlzdC9zdWJjcmlwdGlvbnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3N1YmNyaXB0aW9ucy1saXN0L3N1YmNyaXB0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3N1YmNyaXB0aW9ucy1saXN0L3N1YmNyaXB0aW9ucy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn0iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SubcriptionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubcriptionsListComponent", function() { return SubcriptionsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let SubcriptionsListComponent = class SubcriptionsListComponent {
    constructor(adminServ, toastServ) {
        this.adminServ = adminServ;
        this.toastServ = toastServ;
        this.displayedColumns = ["name", "startdate", "enddate"];
        this.pageSize = 5;
        this.count = 5;
        this.page = 1;
    }
    ngOnInit() {
        this.adminServ.setHeaderText("Salons Subscribed List");
        this.getSubscribedSalonsList();
    }
    paginate(event) {
        //console.log(event);
        this.page = event.pageIndex + 1;
        //  console.log("c", this.count);
        // console.log("p", this.page);
        this.count = event.pageSize;
        this.getSubscribedSalonsList();
    }
    getSubscribedSalonsList() {
        this.isLoader = true;
        let dataToPass = {
            type: "subscriptions",
            pageSize: this.count,
            page: this.page
        };
        this.adminServ.getSalonSubscriptionList(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.isLoader = false;
                this.salonSubscriptionsList = data["data"]["salons"];
                if (this.salonSubscriptionsList.length === 0) {
                    this.noRecordsFound = true;
                }
                else {
                    this.noRecordsFound = false;
                }
                this.salonSubscriptionsList.forEach(function (c) {
                    var months_arr = [
                        "Jan",
                        "Feb",
                        "Mar",
                        "Apr",
                        "May",
                        "Jun",
                        "Jul",
                        "Aug",
                        "Sep",
                        "Oct",
                        "Nov",
                        "Dec"
                    ];
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
                this.convertedSalonSubscriptionList = this.salonSubscriptionsList;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.convertedSalonSubscriptionList);
                this.dataSource.sort = this.sort;
                this.salonSubscriptionCount = data["data"]["count"];
            }
            else if (data["code"] === 400) {
                this.isLoader = false;
                this.toastServ.error("Failed to fetch", data["message"], {
                    timeOut: 1000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastServ.error("Server- Error", error.error["message"], {
                timeOut: 1000
            });
        });
    }
    applyFilter(event) {
        console.log(event);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
SubcriptionsListComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], SubcriptionsListComponent.prototype, "sort", void 0);
SubcriptionsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-subcriptions-list",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subcriptions-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subcriptions-list.component.scss */ "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.scss")).default]
    })
], SubcriptionsListComponent);



/***/ }),

/***/ "./src/app/admin/admin-dashboard/userlist/userlist.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/userlist/userlist.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.btn-sus {\n  margin-bottom: 5px;\n}\n\n.UserListWrapper {\n  margin-top: 5px;\n}\n\n.headerSection {\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n\n.headerSection .header {\n  color: purple;\n}\n\n.suspend-sec {\n  width: 20%;\n  margin-left: 10px;\n}\n\n.userDetailsOverlay {\n  position: fixed;\n  /* Sit on top of the page content */\n  width: 100%;\n  /* Full width (cover the whole page) */\n  height: 100%;\n  /* Full height (cover the whole page) */\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  /* Black background with opacity */\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.userDetailsOverlay .main-section-area {\n  background-color: white;\n  border-radius: 10px;\n  opacity: 1;\n  padding: 10px;\n  margin: 10px;\n}\n\n.userDetailsOverlay .main-section-area .header {\n  border-bottom: 1px solid lightgray;\n}\n\n.userDetailsOverlay .main-section-area .main-section {\n  margin-top: 10px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .profilePic {\n  width: 100px;\n  height: 100px;\n  border: 1px solid lightgray;\n  border-radius: 50px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row label {\n  width: 20%;\n}\n\n.userDetailsOverlay .main-section-area .main-section .field-row .details {\n  width: 75%;\n  border: 1px solid lightgray;\n  padding: 5px;\n  margin-bottom: 5px;\n  border-radius: 6px;\n}\n\n.userDetailsOverlay .main-section-area .main-section .img {\n  justify-content: center;\n  margin-bottom: 10px;\n}\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mobile-label {\n  display: none;\n}\n\n@media (max-width: 600px) {\n  .mobile-label {\n    width: 80px;\n    display: inline-block;\n    font-weight: bold;\n    color: purple;\n  }\n\n  td.mat-cell:first-of-type {\n    padding-left: 10px;\n  }\n\n  td.mat-cell {\n    padding: 10px;\n    display: flex;\n    width: 100%;\n  }\n\n  .suspend-sec {\n    width: 25px;\n  }\n\n  .mat-header-row {\n    display: none;\n  }\n\n  .mat-row {\n    flex-direction: column;\n    align-items: start;\n    padding: 8px 24px;\n    display: flex;\n    justify-content: space-between;\n    height: auto;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9zcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FESEU7RUFDRSxhQUFBO0FDS0o7O0FEREE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUNJRjs7QUREQTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFFakIsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQXNDLGtDQUFBO0VBQ3RDLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ09GOztBRE5FO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ1FKOztBRFBJO0VBQ0Usa0NBQUE7QUNTTjs7QURQSTtFQUNFLGdCQUFBO0FDU047O0FEUk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ1VSOztBRFRRO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FDV1Y7O0FEVFE7RUFDRSxVQUFBO0FDV1Y7O0FEVFE7RUFDRSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1dWOztBRFJNO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQ1VSOztBREZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0lGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSUY7O0FEREE7RUFDRSxhQUFBO0FDSUY7O0FEREE7RUFDRTtJQUNFLFdBQUE7SUFDQSxxQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQ0lGOztFREZBO0lBQ0Usa0JBQUE7RUNLRjs7RURIQTtJQUNFLGFBQUE7SUFDQSxhQUFBO0lBQ0EsV0FBQTtFQ01GOztFREpBO0lBQ0UsV0FBQTtFQ09GOztFRExBO0lBQ0UsYUFBQTtFQ1FGOztFRExBO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0VDUUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC91c2VybGlzdC91c2VybGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnRuLXN1cyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5Vc2VyTGlzdFdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaGVhZGVyU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgLmhlYWRlciB7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxufVxuXG4uc3VzcGVuZC1zZWMge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnVzZXJEZXRhaWxzT3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXG4gIC8vZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0IChjb3ZlciB0aGUgd2hvbGUgcGFnZSkgKi9cbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IC8qIEJsYWNrIGJhY2tncm91bmQgd2l0aCBvcGFjaXR5ICovXG4gIHotaW5kZXg6IDI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAubWFpbi1zZWN0aW9uLWFyZWEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICAuaGVhZGVyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgfVxuICAgIC5tYWluLXNlY3Rpb24ge1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIC5maWVsZC1yb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIC5wcm9maWxlUGljIHtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgfVxuICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5pbWcge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLmJ0bi1BcmVhIHtcbiAgICB9XG4gIH1cbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogNTAwcHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5tYXQtdGFibGUge1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNTAwcHg7XG59XG5cbi5tb2JpbGUtbGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLm1vYmlsZS1sYWJlbCB7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiBwdXJwbGU7XG4gIH1cbiAgdGQubWF0LWNlbGw6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnN1c3BlbmQtc2VjIHtcbiAgICB3aWR0aDogMjVweDtcbiAgfVxuICAubWF0LWhlYWRlci1yb3cge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWF0LXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgcGFkZGluZzogOHB4IDI0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG59XG4iLCJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLXN1cyB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLlVzZXJMaXN0V3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmhlYWRlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4uaGVhZGVyU2VjdGlvbiAuaGVhZGVyIHtcbiAgY29sb3I6IHB1cnBsZTtcbn1cblxuLnN1c3BlbmQtc2VjIHtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi51c2VyRGV0YWlsc092ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFNpdCBvbiB0b3Agb2YgdGhlIHBhZ2UgY29udGVudCAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogRnVsbCBoZWlnaHQgKGNvdmVyIHRoZSB3aG9sZSBwYWdlKSAqL1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cbiAgei1pbmRleDogMjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvcGFjaXR5OiAxO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAuaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cbi51c2VyRGV0YWlsc092ZXJsYXkgLm1haW4tc2VjdGlvbi1hcmVhIC5tYWluLXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IC5wcm9maWxlUGljIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4udXNlckRldGFpbHNPdmVybGF5IC5tYWluLXNlY3Rpb24tYXJlYSAubWFpbi1zZWN0aW9uIC5maWVsZC1yb3cgbGFiZWwge1xuICB3aWR0aDogMjAlO1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuZmllbGQtcm93IC5kZXRhaWxzIHtcbiAgd2lkdGg6IDc1JTtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLnVzZXJEZXRhaWxzT3ZlcmxheSAubWFpbi1zZWN0aW9uLWFyZWEgLm1haW4tc2VjdGlvbiAuaW1nIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZXhhbXBsZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLm1vYmlsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubW9iaWxlLWxhYmVsIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgfVxuXG4gIHRkLm1hdC1jZWxsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuc3VzcGVuZC1zZWMge1xuICAgIHdpZHRoOiAyNXB4O1xuICB9XG5cbiAgLm1hdC1oZWFkZXItcm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hdC1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin-serv.service */ "./src/app/admin/admin-dashboard/admin-serv.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let UserlistComponent = class UserlistComponent {
    constructor(adminServ, toastrServ) {
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
    ngOnInit() {
        this.getActiveUsersList();
        this.getActiveUsersCount();
        this.adminServ.setHeaderText("Manage Users");
    }
    getActiveUsersList() {
        this.isLoader = true;
        let dataToPass = {
            type: "user",
            pageSize: this.count,
            page: this.page
        };
        this.adminServ.getActiveUsersList(dataToPass).subscribe(data => {
            if (data["code"] === 200) {
                this.isLoader = false;
                this.activeUsersList = data["data"];
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.activeUsersList);
                this.dataSource.sort = this.sort;
                if (this.activeUsersList.length == 0) {
                    this.noRecordsFound = true;
                }
                else {
                    this.noRecordsFound = false;
                }
            }
            else {
                this.isLoader = false;
                this.toastrServ.error("Failed To Fetch Users List", "", {
                    timeOut: 2000
                });
            }
        }, error => {
            this.isLoader = false;
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 2000
            });
        });
    }
    closeUserDetail() {
        this.showUserDetails = false;
        this.userDetails = null;
    }
    applyFilter(event) {
        console.log(event);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    viewUserDetails(data) {
        this.isLoader = true;
        let dataToPass = {
            user_id: data._id
        };
        this.adminServ.getUserDetails(dataToPass).subscribe((data) => {
            if (data["code"] === 200) {
                this.isLoader = false;
                this.showUserDetails = true;
                this.userDetails = data["data"];
                if (this.userDetails["profilepic"] === null) {
                    this.userDetails.profilepic = "../../../assets/images/profilepic.png";
                }
            }
            else {
                this.isLoader = false;
                this.toastrServ.error("Failed To Fetch User Details", "Error", {
                    timeOut: 2000
                });
            }
        });
    }
    getActiveUsersCount() {
        let dataToPass = {
            type: "user"
        };
        this.adminServ.getActiveUsersCount(dataToPass).subscribe(data => {
            //   console.log("DATA", data);
            if (data["code"] == 200) {
                this.ActiveUsersCount = data["data"];
                //   console.log("ACTIVE USERS COUNT", this.ActiveUsersCount);
            }
        }, error => {
            this.toastrServ.error("Server Error", error.error["message"], {
                timeOut: 3000
            });
        });
    }
    paginate(event) {
        //  console.log(event);
        this.page = event.pageIndex + 1;
        this.count = event.pageSize;
        this.getActiveUsersList();
    }
};
UserlistComponent.ctorParameters = () => [
    { type: _admin_serv_service__WEBPACK_IMPORTED_MODULE_2__["AdminServService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: false })
], UserlistComponent.prototype, "sort", void 0);
UserlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-userlist",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin-dashboard/userlist/userlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./userlist.component.scss */ "./src/app/admin/admin-dashboard/userlist/userlist.component.scss")).default]
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
/* harmony import */ var _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin-dashboard/dashboard/dashboard.component */ "./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-dashboard/categories/categories.component */ "./src/app/admin/admin-dashboard/categories/categories.component.ts");
/* harmony import */ var _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-dashboard/services/services.component */ "./src/app/admin/admin-dashboard/services/services.component.ts");
/* harmony import */ var _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-dashboard/roles/roles.component */ "./src/app/admin/admin-dashboard/roles/roles.component.ts");
/* harmony import */ var _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-dashboard/manage-admin/manage-admin.component */ "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts");
/* harmony import */ var _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-dashboard/manageplan/manageplan.component */ "./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts");
/* harmony import */ var _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin-dashboard/subcriptions-list/subcriptions-list.component */ "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts");
/* harmony import */ var _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-dashboard/details/details.component */ "./src/app/admin/admin-dashboard/details/details.component.ts");
/* harmony import */ var _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-dashboard/booking-details/booking-details.component */ "./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts");
/* harmony import */ var _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-dashboard/other/other.component */ "./src/app/admin/admin-dashboard/other/other.component.ts");



















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
            { path: "salons", component: _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_7__["SalonlistComponent"] },
            { path: "users", component: _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_8__["UserlistComponent"] },
            { path: "dashboard", component: _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"] },
            { path: "services", component: _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_11__["ServicesComponent"] },
            { path: "categories", component: _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"] },
            { path: "roles", component: _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_12__["RolesComponent"] },
            { path: "detail", component: _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_16__["DetailsComponent"] },
            { path: "manage-plan", component: _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_14__["ManageplanComponent"] },
            { path: "bookings", component: _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_17__["BookingDetailsComponent"] },
            { path: "other", component: _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_18__["OtherComponent"] },
            { path: "subscribed-salons", component: _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_15__["SubcriptionsListComponent"] },
            // { path: "location", component: ConfirmationComponent },
            { path: "manage-admin", component: _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_13__["ManageAdminComponent"] },
            { path: "", redirectTo: "dashboard", pathMatch: "full" }
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
/* harmony import */ var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-simple-modal */ "./node_modules/ngx-simple-modal/fesm2015/ngx-simple-modal.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
/* harmony import */ var _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adminlogin/adminlogin.component */ "./src/app/admin/adminlogin/adminlogin.component.ts");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin-dashboard/userlist/userlist.component */ "./src/app/admin/admin-dashboard/userlist/userlist.component.ts");
/* harmony import */ var _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin-dashboard/salonlist/salonlist.component */ "./src/app/admin/admin-dashboard/salonlist/salonlist.component.ts");
/* harmony import */ var _admin_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin-dashboard/header/header.component */ "./src/app/admin/admin-dashboard/header/header.component.ts");
/* harmony import */ var _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin-dashboard/dashboard/dashboard.component */ "./src/app/admin/admin-dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin-dashboard/categories/categories.component */ "./src/app/admin/admin-dashboard/categories/categories.component.ts");
/* harmony import */ var _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-dashboard/services/services.component */ "./src/app/admin/admin-dashboard/services/services.component.ts");
/* harmony import */ var _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-dashboard/roles/roles.component */ "./src/app/admin/admin-dashboard/roles/roles.component.ts");
/* harmony import */ var _admin_dashboard_header_text_header_text_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-dashboard/header-text/header-text.component */ "./src/app/admin/admin-dashboard/header-text/header-text.component.ts");
/* harmony import */ var _admin_dashboard_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-dashboard/confirmation/confirmation.component */ "./src/app/admin/admin-dashboard/confirmation/confirmation.component.ts");
/* harmony import */ var _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-dashboard/manage-admin/manage-admin.component */ "./src/app/admin/admin-dashboard/manage-admin/manage-admin.component.ts");
/* harmony import */ var _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin-dashboard/manageplan/manageplan.component */ "./src/app/admin/admin-dashboard/manageplan/manageplan.component.ts");
/* harmony import */ var _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin-dashboard/subcriptions-list/subcriptions-list.component */ "./src/app/admin/admin-dashboard/subcriptions-list/subcriptions-list.component.ts");
/* harmony import */ var _admin_dashboard_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin-dashboard/loader/loader.component */ "./src/app/admin/admin-dashboard/loader/loader.component.ts");
/* harmony import */ var _admin_dashboard_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./admin-dashboard/delete-dialog/delete-dialog.component */ "./src/app/admin/admin-dashboard/delete-dialog/delete-dialog.component.ts");
/* harmony import */ var _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./admin-dashboard/details/details.component */ "./src/app/admin/admin-dashboard/details/details.component.ts");
/* harmony import */ var _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin-dashboard/booking-details/booking-details.component */ "./src/app/admin/admin-dashboard/booking-details/booking-details.component.ts");
/* harmony import */ var _others_others_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./others/others.component */ "./src/app/admin/others/others.component.ts");
/* harmony import */ var _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./admin-dashboard/other/other.component */ "./src/app/admin/admin-dashboard/other/other.component.ts");






























let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _adminlogin_adminlogin_component__WEBPACK_IMPORTED_MODULE_9__["AdminloginComponent"],
            _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["AdminDashboardComponent"],
            _admin_dashboard_userlist_userlist_component__WEBPACK_IMPORTED_MODULE_11__["UserlistComponent"],
            _admin_dashboard_salonlist_salonlist_component__WEBPACK_IMPORTED_MODULE_12__["SalonlistComponent"],
            _admin_dashboard_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _admin_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
            _admin_dashboard_categories_categories_component__WEBPACK_IMPORTED_MODULE_16__["CategoriesComponent"],
            _admin_dashboard_services_services_component__WEBPACK_IMPORTED_MODULE_17__["ServicesComponent"],
            _admin_dashboard_roles_roles_component__WEBPACK_IMPORTED_MODULE_18__["RolesComponent"],
            _admin_dashboard_header_text_header_text_component__WEBPACK_IMPORTED_MODULE_19__["HeaderTextComponent"],
            _admin_dashboard_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationComponent"],
            _admin_dashboard_manage_admin_manage_admin_component__WEBPACK_IMPORTED_MODULE_21__["ManageAdminComponent"],
            _admin_dashboard_manageplan_manageplan_component__WEBPACK_IMPORTED_MODULE_22__["ManageplanComponent"],
            _admin_dashboard_subcriptions_list_subcriptions_list_component__WEBPACK_IMPORTED_MODULE_23__["SubcriptionsListComponent"],
            _admin_dashboard_loader_loader_component__WEBPACK_IMPORTED_MODULE_24__["LoaderComponent"],
            _admin_dashboard_delete_dialog_delete_dialog_component__WEBPACK_IMPORTED_MODULE_25__["DeleteDialogComponent"],
            _admin_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_26__["DetailsComponent"],
            _admin_dashboard_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_27__["BookingDetailsComponent"],
            _others_others_component__WEBPACK_IMPORTED_MODULE_28__["OthersComponent"],
            _admin_dashboard_other_other_component__WEBPACK_IMPORTED_MODULE_29__["OtherComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_8__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_6__["NotifierModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
            ngx_simple_modal__WEBPACK_IMPORTED_MODULE_7__["SimpleModalModule"].forRoot({ container: "modal-container" }),
            _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"]
        ],
        entryComponents: [_admin_dashboard_confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_20__["ConfirmationComponent"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".notifier__container * {\n  box-sizing: border-box;\n}\n.notifier__container-list {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style-type: none;\n}\n.notifier__notification {\n  display: block;\n  position: fixed;\n  visibility: hidden;\n  z-index: 10000;\n  will-change: transform;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.notifier__notification--material {\n  border-radius: 3px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n  cursor: default;\n  padding-top: 11px;\n  padding-right: 26px;\n  padding-bottom: 10px;\n  padding-left: 26px;\n}\n.notifier__notification--material .notifier__notification-message {\n  display: inline-block;\n  margin-top: 0;\n  margin-bottom: 0;\n  vertical-align: top;\n  line-height: 32px;\n  font-size: 15px;\n}\n.notifier__notification--material .notifier__notification-button {\n  display: inline-block;\n  transition: opacity 0.2s ease;\n  opacity: 0.5;\n  margin-right: -10px;\n  margin-left: 10px;\n  outline: none;\n  border: none;\n  background: none;\n  cursor: pointer;\n  padding: 6px;\n  width: 32px;\n  height: 32px;\n  vertical-align: top;\n}\n.notifier__notification--material .notifier__notification-button:hover, .notifier__notification--material .notifier__notification-button:focus {\n  opacity: 1;\n}\n.notifier__notification--material .notifier__notification-button:active {\n  transform: scale(0.82);\n  opacity: 1;\n}\n.notifier__notification--default {\n  background-color: #444;\n  color: #FFF;\n}\n.notifier__notification--default .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--error {\n  background-color: #D9534F;\n  color: #FFF;\n}\n.notifier__notification--error .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--info {\n  background-color: #5BC0DE;\n  color: #FFF;\n}\n.notifier__notification--info .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--success {\n  background-color: #5CB85C;\n  color: #FFF;\n}\n.notifier__notification--success .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.notifier__notification--warning {\n  background-color: #F0AD4E;\n  color: #FFF;\n}\n.notifier__notification--warning .notifier__notification-button-icon {\n  fill: #FFF;\n}\n.login-section {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.login-section-inner {\n  width: 595px;\n  min-height: 400px;\n  margin: 0 auto;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  border-radius: 8px;\n  position: relative;\n  /* padding: 25px 40px; */\n  display: flex;\n}\n.login-section-inner .login-left {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex: 1;\n  background: url('bg-left.png');\n  flex-direction: column;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.login-section-inner .login-left img {\n  width: 50%;\n}\n.login-right {\n  flex: 1;\n  padding: 0 0 20px 0;\n  padding: 25px 40px;\n  display: flex;\n  align-items: center;\n}\n.resetPassword {\n  background: white;\n  outline: none;\n  border: 0;\n  color: red;\n}\n.login-section-inner label {\n  font-size: 15px;\n  color: #4d4d55;\n  font-family: \"Roboto\";\n}\n.login-section-inner input {\n  font-size: 13px;\n  border: 1px solid #d2d4df;\n  border-radius: 8px;\n  color: #9595a1;\n  height: 35px;\n  font-family: \"Roboto\";\n}\n.login-section-inner .btn-sign-in {\n  width: 100%;\n  border-color: transparent;\n  transition: 0.5s;\n  background-size: 200% auto;\n  font-size: 13px;\n  border-radius: 8px;\n  height: 35px;\n  font-family: \"Roboto\";\n  margin-top: 10px;\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.login-section-inner .btn-sign-in:hover {\n  /* background-position: right center; */\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.login-section-inner .form-control:focus {\n  border-color: #9c3ee8;\n  outline: 0;\n  box-shadow: 0 0 0 0 #9c3ee8;\n}\n.login-section-inner .form-group {\n  margin-bottom: 10px;\n}\n.login-section-inner .btn-primary:not(:disabled):not(.disabled):active {\n  background: transparent linear-gradient(90deg, #783a87 0%, #bc2e65 100%) 0% 0% no-repeat padding-box;\n}\n.sign-up {\n  font-size: 12px;\n  color: #4d4d55;\n  font-family: \"Roboto\";\n  text-align: center;\n  padding-top: 10px;\n}\n.sign-up a {\n  color: #c92c5f;\n  text-decoration: none;\n  padding-left: 10px;\n}\n@media (max-width: 991px) {\n  .login-section-inner {\n    display: block;\n  }\n\n  .login-section-inner .login-left {\n    min-height: 225px;\n  }\n\n  .login-section-inner .login-left img {\n    width: 35%;\n  }\n}\n@media (max-width: 767px) {\n  .login-section {\n    align-items: inherit;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvY29yZS5zY3NzIiwic3JjL2FwcC9hZG1pbi9hZG1pbmxvZ2luL2FkbWlubG9naW4uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcmFuaml0YXR3YWwvRG93bmxvYWRzL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2FuZ3VsYXItbm90aWZpZXIvc3R5bGVzL3RoZW1lcy90aGVtZS1tYXRlcmlhbC5zY3NzIiwiL1VzZXJzL3JhbmppdGF0d2FsL0Rvd25sb2Fkcy9NRUFOLXNhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy90eXBlcy90eXBlLWRlZmF1bHQuc2NzcyIsIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvdHlwZXMvdHlwZS1lcnJvci5zY3NzIiwiL1VzZXJzL3JhbmppdGF0d2FsL0Rvd25sb2Fkcy9NRUFOLXNhbG9uY3JtL2Zyb250ZW5kL25vZGVfbW9kdWxlcy9hbmd1bGFyLW5vdGlmaWVyL3N0eWxlcy90eXBlcy90eXBlLWluZm8uc2NzcyIsIi9Vc2Vycy9yYW5qaXRhdHdhbC9Eb3dubG9hZHMvTUVBTi1zYWxvbmNybS9mcm9udGVuZC9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMvdHlwZXMvdHlwZS1zdWNjZXNzLnNjc3MiLCIvVXNlcnMvcmFuaml0YXR3YWwvRG93bmxvYWRzL01FQU4tc2Fsb25jcm0vZnJvbnRlbmQvbm9kZV9tb2R1bGVzL2FuZ3VsYXItbm90aWZpZXIvc3R5bGVzL3R5cGVzL3R5cGUtd2FybmluZy5zY3NzIiwiL1VzZXJzL3JhbmppdGF0d2FsL0Rvd25sb2Fkcy9NRUFOLXNhbG9uY3JtL2Zyb250ZW5kL3NyYy9hcHAvYWRtaW4vYWRtaW5sb2dpbi9hZG1pbmxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFFO0VBQ0Msc0JBQUE7QUNQSDtBRFVFO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0VBR0EsZUFBQTtFQUVELHFCQUFBO0FDWkg7QURpQkM7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUdBLHNCQUFBO0VBSUEsbUNBQUE7VUFBQSwyQkFBQTtBQ3BCRjtBQ1JBO0VBQ0Msa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFFQyxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBRFVGO0FDTEU7RUFDQyxxQkFBQTtFQUVDLGFBQUE7RUFDQSxnQkFBQTtFQUVELG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FES0g7QUNGRTtFQUNDLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBRUMsbUJBQUE7RUFDQSxpQkFBQTtFQUVELGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURFSDtBQ0FHO0VBRUMsVUFBQTtBRENKO0FDRUc7RUFDQyxzQkFBQTtFQUNBLFVBQUE7QURBSjtBRWxEQTtFQUNDLHNCQUxtQztFQU1uQyxXQUw2QjtBRjBEOUI7QUVuREM7RUFDQyxVQVA0QjtBRjREOUI7QUcxREE7RUFDQyx5QkFMaUM7RUFNakMsV0FMMkI7QUhrRTVCO0FHM0RDO0VBQ0MsVUFQMEI7QUhvRTVCO0FJbEVBO0VBQ0MseUJBTGdDO0VBTWhDLFdBTDBCO0FKMEUzQjtBSW5FQztFQUNDLFVBUHlCO0FKNEUzQjtBSzFFQTtFQUNDLHlCQUxtQztFQU1uQyxXQUw2QjtBTGtGOUI7QUszRUM7RUFDQyxVQVA0QjtBTG9GOUI7QU1sRkE7RUFDQyx5QkFMbUM7RUFNbkMsV0FMNkI7QU4wRjlCO0FNbkZDO0VBQ0MsVUFQNEI7QU40RjlCO0FPOUZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVBpR0Y7QU8vRkE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FQa0dGO0FPL0ZBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QVBrR0Y7QU9oR0E7RUFDRSxVQUFBO0FQbUdGO0FPakdBO0VBQ0UsT0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QVBvR0Y7QU9qR0E7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBUG9HRjtBT2pHQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QVBvR0Y7QU9sR0E7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QVBxR0Y7QU9uR0E7RUFDRSxXQUFBO0VBRUEseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvR0FBQTtBUHFHRjtBT2xHQTtFQUNFLHVDQUFBO0VBQ0Esb0dBQUE7QVBxR0Y7QU9sR0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBUHFHRjtBT25HQTtFQUNFLG1CQUFBO0FQc0dGO0FPbkdBO0VBQ0Usb0dBQUE7QVBzR0Y7QU9uR0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBUHNHRjtBT3BHQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FQdUdGO0FPcEdBO0VBQ0U7SUFDRSxjQUFBO0VQdUdGOztFT3JHQTtJQUNFLGlCQUFBO0VQd0dGOztFT3RHQTtJQUNFLFVBQUE7RVB5R0Y7QUFDRjtBT3ZHQTtFQUNFO0lBQ0Usb0JBQUE7RVB5R0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWlubG9naW4vYWRtaW5sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5PVElGSUVSOiBDT1JFIFNUWUxFU1xuXG4vLyBDb250YWluZXJcblxuLm5vdGlmaWVyIHtcblxuXHQmX19jb250YWluZXIge1xuXG5cdFx0KiB7XG5cdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdH1cblxuXHRcdCYtbGlzdCB7XG5cdFx0XHRtYXJnaW46IHtcblx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRib3R0b206IDA7XG5cdFx0XHR9XG5cdFx0XHRwYWRkaW5nOiB7XG5cdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHR9XG5cdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0fVxuXG5cdH1cblxuXHQmX19ub3RpZmljYXRpb24ge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHBvc2l0aW9uOiBmaXhlZDsgLy8gT3ZlcmxheVxuXHRcdHZpc2liaWxpdHk6IGhpZGRlbjsgLy8gTm90aWZpY2F0aW9ucyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQsIGFuZCBnZXQgc2hvd24gKG9yIGFuaW1hdGVkIGluKSBkeW5hbWljYWxseSBieSB0aGUgQW5ndWxhciBjb21wb25lbnRcblx0XHR6LWluZGV4OiAxMDAwMDsgLy8gUHJldHR5IG11Y2ggcmFuZG9tIC4uLlxuXG5cdFx0Ly8gVGhpcyBhdHRyaWJ1dGUgZm9yY2VzIHRoaXMgZWxlbWVudCB0byBiZSByZW5kZXJlZCBvbiBhIG5ldyBsYXllciwgYnkgdGhlIEdQVSwgaW4gb3JkZXIgdG8gaW1wcm92ZSBpdHMgcGVyZm9ybWFuY2UgKCNwZXJmbWF0dGVycylcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXG5cdFx0Ly8gVGhpcyBhdHRyaWJ1dGUgaW1wcm92ZXMgdGhlIG92ZXJhbGwgc2Nyb2xsaW5nIHBlcmZvcm1hbmNlIGZvciBmaXhlZCBwb3NpdGlvbiBlbGVtZW50cywgc3VjaCBhcyB0aGlzIG9uZSAoI3BlcmZtYXR0ZXJzKVxuXHRcdC8vIFNlZSA8aHR0cHM6Ly9iZW5mcmFpbi5jb20vaW1wcm92aW5nLWNzcy1wZXJmb3JtYW5jZS1maXhlZC1wb3NpdGlvbi1lbGVtZW50cy8+XG5cdFx0YmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG5cdH1cblxufVxuIiwiLm5vdGlmaWVyX19jb250YWluZXIgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ubm90aWZpZXJfX2NvbnRhaW5lci1saXN0IHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTAwMDA7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyNnB4O1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tbWF0ZXJpYWwgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZTtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b246aG92ZXIsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b246Zm9jdXMge1xuICBvcGFjaXR5OiAxO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLW1hdGVyaWFsIC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuODIpO1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWRlZmF1bHQgLm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24ge1xuICBmaWxsOiAjRkZGO1xufVxuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGO1xuICBjb2xvcjogI0ZGRjtcbn1cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1lcnJvciAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVCQzBERTtcbiAgY29sb3I6ICNGRkY7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0taW5mbyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjg1QztcbiAgY29sb3I6ICNGRkY7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tc3VjY2VzcyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwQUQ0RTtcbiAgY29sb3I6ICNGRkY7XG59XG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0td2FybmluZyAubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7XG4gIGZpbGw6ICNGRkY7XG59XG5cbi5sb2dpbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIge1xuICB3aWR0aDogNTk1cHg7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvKiBwYWRkaW5nOiAyNXB4IDQwcHg7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JnLWxlZnQucG5nKTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQgaW1nIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmxvZ2luLXJpZ2h0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVzZXRQYXNzd29yZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzRkNGQ1NTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIGlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNGRmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjOTU5NWExO1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXNpZ24taW4ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXNpZ24taW46aG92ZXIge1xuICAvKiBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCBjZW50ZXI7ICovXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzc4M2E4NyAwJSwgI2JjMmU2NSAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM5YzNlZTg7XG4gIG91dGxpbmU6IDA7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIzljM2VlODtcbn1cblxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAuYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cblxuLnNpZ24tdXAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGQ0ZDU1O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnNpZ24tdXAgYSB7XG4gIGNvbG9yOiAjYzkyYzVmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IHtcbiAgICBtaW4taGVpZ2h0OiAyMjVweDtcbiAgfVxuXG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5sb2dpbi1zZWN0aW9uIHtcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgfVxufSIsIi8vIE5PVElGSUVSOiBNQVRFUklBTCBUSEVNRVxuLy9cbi8vIFRoaXMgbWF0ZXJpYWwgdGhlbWUgdHJpZXMgaXRzIGJlc3QgdG8gbG9vayBhcyBtYXRlcmlhbC1kZXNpZ24naXNoIGFzIHBvc3NpYmxlIC0gcm91bmQgZWRnZXMsIHNoYWRvd3MsIGFuZCBzbWFsbCBhbmltYXRpb25zLlxuLy8gQW5kLCBvZiBjb3Vyc2UsIHRoYW5rcyB0byAjR29vZ2xlIGZvciBjcmVhdGluZyBhbmQgc2hhcmluZyBzdWNoIGFuIGF3ZXNvbWUgZGVzaWduIGxhbmd1YWdlIVxuLy8gSSBoaWdobHkgZW5jb3VyYWdlIGV2ZXJ5b25lIHRvIHJlYWQgaW50byB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWNzOiA8aHR0cHM6Ly9tYXRlcmlhbC5nb29nbGUuY29tLz5cblxuJG5vdGlmaWVyLXNoYWRvdy1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMikgIWRlZmF1bHQ7XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1tYXRlcmlhbCB7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0Ym94LXNoYWRvdzogMCAxcHggM3B4ICRub3RpZmllci1zaGFkb3ctY29sb3I7XG5cdGN1cnNvcjogZGVmYXVsdDsgLy8gRGVmYXVsdCBjdXJzb3IsIGV2ZW4gd2hlbiBob3ZlcmluZyBvdmVyIHRleHRcblx0cGFkZGluZzoge1xuXHRcdHRvcDogMTFweDtcblx0XHRyaWdodDogMjZweDtcblx0XHRib3R0b206IDEwcHg7XG5cdFx0bGVmdDogMjZweDtcblx0fVxuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uIHtcblxuXHRcdCYtbWVzc2FnZSB7XG5cdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRtYXJnaW46IHsgLy8gUmVzZXQgcGFyYWdyYXBoIGRlZmF1bHQgc3R5bGVzXG5cdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0fVxuXHRcdFx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0XHRcdGxpbmUtaGVpZ2h0OiAzMnB4O1xuXHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdH1cblxuXHRcdCYtYnV0dG9uIHtcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRcdHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XG5cdFx0XHRvcGFjaXR5OiAuNTtcblx0XHRcdG1hcmdpbjoge1xuXHRcdFx0XHRyaWdodDogLTEwcHg7XG5cdFx0XHRcdGxlZnQ6IDEwcHg7XG5cdFx0XHR9O1xuXHRcdFx0b3V0bGluZTogbm9uZTtcblx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7IC8vIE1ha2UgaXQgb2J2aW91cyB0aGF0IHRoZSBcImJ1dHRvblwiIChvciwgbW9yZSBob25lc3RseSwgaWNvbikgaXMgY2xpY2thYmxlICgjVVgpXG5cdFx0XHRwYWRkaW5nOiA2cHg7XG5cdFx0XHR3aWR0aDogMzJweDtcblx0XHRcdGhlaWdodDogMzJweDtcblx0XHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XG5cblx0XHRcdCY6aG92ZXIsXG5cdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0b3BhY2l0eTogMTsgLy8gTWFrZSBtZSBcImZlZWxcIiB0aGUgY2xpY2thYmlsaXR5IHdpdGggYSB0cmFuc3BhcmVuY3kgY2hhbmdlICgjVVgpXG5cdFx0XHR9XG5cblx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSguODIpOyAvLyBNYWtlIG1lIFwiZmVlbFwiIHRoZSBjbGljayBieSBhIHB1c2ggYmFjayAoI1VYKVxuXHRcdFx0XHRvcGFjaXR5OiAxO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IERFRkFVTFQgVFlQRSBTVFlMRVNcblxuJG5vdGlmaWVyLWRlZmF1bHQtYmFja2dyb3VuZC1jb2xvcjogIzQ0NCAhZGVmYXVsdDtcbiRub3RpZmllci1kZWZhdWx0LWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItZGVmYXVsdC1pY29uLWNvbG9yOiAjRkZGICFkZWZhdWx0O1xuXG4ubm90aWZpZXJfX25vdGlmaWNhdGlvbi0tZGVmYXVsdCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRub3RpZmllci1kZWZhdWx0LWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItZGVmYXVsdC1mb250LWNvbG9yO1xuXG5cdC5ub3RpZmllcl9fbm90aWZpY2F0aW9uLWJ1dHRvbi1pY29uIHsgLy8gMTZ4MTYgZml4ZWQgc2l6ZVxuXHRcdGZpbGw6ICRub3RpZmllci1kZWZhdWx0LWljb24tY29sb3I7XG5cdH1cblxufVxuIiwiLy8gTk9USUZJRVI6IEVSUk9SIFRZUEUgU1RZTEVTXG5cbiRub3RpZmllci1lcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjRDk1MzRGICFkZWZhdWx0O1xuJG5vdGlmaWVyLWVycm9yLWZvbnQtY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG4kbm90aWZpZXItZXJyb3ItaWNvbi1jb2xvcjogI0ZGRiAhZGVmYXVsdDtcblxuLm5vdGlmaWVyX19ub3RpZmljYXRpb24tLWVycm9yIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJG5vdGlmaWVyLWVycm9yLWJhY2tncm91bmQtY29sb3I7XG5cdGNvbG9yOiAkbm90aWZpZXItZXJyb3ItZm9udC1jb2xvcjtcblxuXHQubm90aWZpZXJfX25vdGlmaWNhdGlvbi1idXR0b24taWNvbiB7IC8vIDE2eDE2IGZpeGVkIHNpemVcblx0XHRmaWxsOiAkbm90aWZpZXItZXJyb3ItaWNvbi1jb2xvcjtcblx0fVxuXG59XG4iLCIvLyBOT1RJRklFUjogSU5GTyBUWVBFIFNUWUxFU1xuXG4kbm90aWZpZXItaW5mby1iYWNrZ3JvdW5kLWNvbG9yOiAjNUJDMERFICFkZWZhdWx0O1xuJG5vdGlmaWVyLWluZm8tZm9udC1jb2xvcjogI0ZGRiAhZGVmYXVsdDtcbiRub3RpZmllci1pbmZvLWljb24tY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1pbmZvIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJG5vdGlmaWVyLWluZm8tYmFja2dyb3VuZC1jb2xvcjtcblx0Y29sb3I6ICRub3RpZmllci1pbmZvLWZvbnQtY29sb3I7XG5cblx0Lm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24geyAvLyAxNngxNiBmaXhlZCBzaXplXG5cdFx0ZmlsbDogJG5vdGlmaWVyLWluZm8taWNvbi1jb2xvcjtcblx0fVxuXG59XG4iLCIvLyBOT1RJRklFUjogU1VDQ0VTUyBUWVBFIFNUWUxFU1xuXG4kbm90aWZpZXItc3VjY2Vzcy1iYWNrZ3JvdW5kLWNvbG9yOiAjNUNCODVDICFkZWZhdWx0O1xuJG5vdGlmaWVyLXN1Y2Nlc3MtZm9udC1jb2xvcjogI0ZGRiAhZGVmYXVsdDtcbiRub3RpZmllci1zdWNjZXNzLWljb24tY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS1zdWNjZXNzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJG5vdGlmaWVyLXN1Y2Nlc3MtYmFja2dyb3VuZC1jb2xvcjtcblx0Y29sb3I6ICRub3RpZmllci1zdWNjZXNzLWZvbnQtY29sb3I7XG5cblx0Lm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24geyAvLyAxNngxNiBmaXhlZCBzaXplXG5cdFx0ZmlsbDogJG5vdGlmaWVyLXN1Y2Nlc3MtaWNvbi1jb2xvcjtcblx0fVxuXG59XG4iLCIvLyBOT1RJRklFUjogV0FSTklORyBUWVBFIFNUWUxFU1xuXG4kbm90aWZpZXItd2FybmluZy1iYWNrZ3JvdW5kLWNvbG9yOiAjRjBBRDRFICFkZWZhdWx0O1xuJG5vdGlmaWVyLXdhcm5pbmctZm9udC1jb2xvcjogI0ZGRiAhZGVmYXVsdDtcbiRub3RpZmllci13YXJuaW5nLWljb24tY29sb3I6ICNGRkYgIWRlZmF1bHQ7XG5cbi5ub3RpZmllcl9fbm90aWZpY2F0aW9uLS13YXJuaW5nIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJG5vdGlmaWVyLXdhcm5pbmctYmFja2dyb3VuZC1jb2xvcjtcblx0Y29sb3I6ICRub3RpZmllci13YXJuaW5nLWZvbnQtY29sb3I7XG5cblx0Lm5vdGlmaWVyX19ub3RpZmljYXRpb24tYnV0dG9uLWljb24geyAvLyAxNngxNiBmaXhlZCBzaXplXG5cdFx0ZmlsbDogJG5vdGlmaWVyLXdhcm5pbmctaWNvbi1jb2xvcjtcblx0fVxuXG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYW5ndWxhci1ub3RpZmllci9zdHlsZXMuc2Nzcyc7XG5cbi5sb2dpbi1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbi1zZWN0aW9uLWlubmVyIHtcbiAgd2lkdGg6IDU5NXB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMXJlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4xNzUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogcGFkZGluZzogMjVweCA0MHB4OyAqL1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iZy1sZWZ0LnBuZyk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG4ubG9naW4tc2VjdGlvbi1pbm5lciAubG9naW4tbGVmdCBpbWcge1xuICB3aWR0aDogNTAlO1xufVxuLmxvZ2luLXJpZ2h0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAwIDIwcHggMDtcbiAgcGFkZGluZzogMjVweCA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucmVzZXRQYXNzd29yZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzRkNGQ1NTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkMmQ0ZGY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICM5NTk1YTE7XG4gIGhlaWdodDogMzVweDtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWluIHtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNzgzYTg3IDAlLCAjYmMyZTY1IDEwMCUpIDAlIDAlXG4gICAgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xufVxuLmxvZ2luLXNlY3Rpb24taW5uZXIgLmJ0bi1zaWduLWluOmhvdmVyIHtcbiAgLyogYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyAqL1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCVcbiAgICBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4ubG9naW4tc2VjdGlvbi1pbm5lciAuZm9ybS1jb250cm9sOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjOWMzZWU4O1xuICBvdXRsaW5lOiAwO1xuICBib3gtc2hhZG93OiAwIDAgMCAwICM5YzNlZTg7XG59XG4ubG9naW4tc2VjdGlvbi1pbm5lciAuZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5sb2dpbi1zZWN0aW9uLWlubmVyIC5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM3ODNhODcgMCUsICNiYzJlNjUgMTAwJSkgMCUgMCVcbiAgICBuby1yZXBlYXQgcGFkZGluZy1ib3g7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0ZDRkNTU7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5zaWduLXVwIGEge1xuICBjb2xvcjogcmdiKDIwMSwgNDQsIDk1KTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAubG9naW4tc2VjdGlvbi1pbm5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLmxvZ2luLXNlY3Rpb24taW5uZXIgLmxvZ2luLWxlZnQge1xuICAgIG1pbi1oZWlnaHQ6IDIyNXB4O1xuICB9XG4gIC5sb2dpbi1zZWN0aW9uLWlubmVyIC5sb2dpbi1sZWZ0IGltZyB7XG4gICAgd2lkdGg6IDM1JTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5sb2dpbi1zZWN0aW9uIHtcbiAgICBhbGlnbi1pdGVtczogaW5oZXJpdDtcbiAgfVxufVxuIl19 */");

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
/* harmony import */ var _allserv_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../allserv.service */ "./src/app/allserv.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");









let AdminloginComponent = class AdminloginComponent {
    constructor(toastServ, router, fb, adminServ, authServ, allServ) {
        this.toastServ = toastServ;
        this.router = router;
        this.fb = fb;
        this.adminServ = adminServ;
        this.authServ = authServ;
        this.allServ = allServ;
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    }
    ngOnInit() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].env === "prod") {
            console.log(location.protocol);
            window.console.log = function () { };
            if (window) {
                window.console.log = function () { };
            }
            if (location.protocol === "http:") {
                console.log(":");
                window.location.href = location.href.replace("http", "https");
                console.log(window.location);
            }
        }
        this.adminLogin = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            password: [
                "",
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ])
            ]
        });
        this.allServ.setRoute(this.router.url);
    }
    get password() {
        return this.adminLogin.get("password");
    }
    get email() {
        return this.adminLogin.get("email");
    }
    resetPassword() {
        this.router.navigate(["forget-password"]);
    }
    /**
     * Function is use to login Admin
     * @access private
     * @return json
     * Created by SmartData
     * @smartData Enterprises (I) Ltd
     */
    loginAdmin(data) {
        let dataToPass = {
            email: data.email,
            password: data.password,
            role: "admin"
        };
        this.adminServ.login(dataToPass).subscribe((data) => {
            if (data.code === 200) {
                this.toastServ.success("Logged In Successfully", "", {
                    timeOut: 3000
                });
                sessionStorage.setItem("userDetails", data["data"]["userInfo"].email);
                sessionStorage.setItem("userId", data["data"]["userInfo"]._id);
                sessionStorage.setItem("isReload", JSON.stringify(true));
                this.authServ.sendToken(data.data.token);
                this.router.navigate(["admin/home"]);
            }
            else {
                this.toastServ.error("Invalid Login details", "", {
                    timeOut: 3000
                });
            }
        }, error => {
            this.toastServ.error("Failed to Login", error.error["message"], {
                timeOut: 3000
            });
        });
    }
};
AdminloginComponent.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _allserv_service__WEBPACK_IMPORTED_MODULE_7__["AllservService"] }
];
AdminloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-adminlogin",
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
        providedIn: "root"
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
        sessionStorage.clear();
        localStorage.clear();
        this.myRoute.navigate(["admin"]);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/admin/others/others.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/others/others.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL290aGVycy9vdGhlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/others/others.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/others/others.component.ts ***!
  \**************************************************/
/*! exports provided: OthersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersComponent", function() { return OthersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OthersComponent = class OthersComponent {
    constructor() { }
    ngOnInit() {
    }
};
OthersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-others',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./others.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/others/others.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./others.component.css */ "./src/app/admin/others/others.component.css")).default]
    })
], OthersComponent);



/***/ })

}]);
//# sourceMappingURL=app-admin-admin-module-es2015.js.map