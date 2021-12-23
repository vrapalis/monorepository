"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["main"],{

/***/ 6682:
/*!***********************************************!*\
  !*** ./apps/ui/src/app/app-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontend/shared/ui */ 6356);
/* harmony import */ var _frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/util */ 9595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "libs_feature_home_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/home */ 1173)).then(mod => mod.FeatureHomeModule),
        canLoad: [_frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__.OAuthGuardService]
    },
    {
        path: 'login', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_tooltip_mjs"), __webpack_require__.e("libs_feature_login_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/login */ 236)).then(mod => mod.FeatureLoginModule),
        data: {
            animation: 'LoginPage'
        }
    },
    {
        path: 'registration',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("default-node_modules_angular_material_fesm2020_tooltip_mjs"), __webpack_require__.e("libs_feature_registration_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/registration */ 6457)).then(mod => mod.FeatureRegistrationModule),
        data: {
            animation: 'RegistrationPage'
        }
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("libs_feature_forgot-password_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/forgot-password */ 6627)).then(mod => mod.FeatureForgotPasswordModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_material_fesm2020_input_mjs"), __webpack_require__.e("libs_feature_reset-password_src_index_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/reset-password */ 5110)).then(mod => mod.FeatureResetPasswordModule)
    },
    { path: '**', component: _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 4532:
/*!******************************************!*\
  !*** ./apps/ui/src/app/app.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontend/shared/util */ 9595);
/* harmony import */ var _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/ui */ 6356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ 9272);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);









class AppComponent {
    constructor(authService, http, sharedUtilAuthService, env) {
        this.authService = authService;
        this.http = http;
        this.sharedUtilAuthService = sharedUtilAuthService;
        this.env = env;
    }
    ngOnInit() {
        this.authService.configure(this.env.getAuthConfig());
        this.sharedUtilAuthService.onOAuthEvents();
    }
    testRequest() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.authService.getAccessToken()}`
        });
        this.http
            .get('http://127.0.0.1:8080/api/users/test-api', {
            observe: 'body',
            headers
        })
            .subscribe((value) => console.log(value), (error) => console.error({ err: error }));
    }
    prepareRoute(outlet) {
        var _a;
        return (_a = outlet === null || outlet === void 0 ? void 0 : outlet.activatedRouteData) === null || _a === void 0 ? void 0 : _a['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__.SharedUtilAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__.SharedUtilEnvService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["frontend-root"]], decls: 3, vars: 1, consts: [[2, "height", "100%"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"], data: { animation: [
            _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.slideInAnimation
        ] } });


/***/ }),

/***/ 7680:
/*!***************************************!*\
  !*** ./apps/ui/src/app/app.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 4532);
/* harmony import */ var _core_app_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/app-core.module */ 4691);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _core_app_core_module__WEBPACK_IMPORTED_MODULE_1__.AppCoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _core_app_core_module__WEBPACK_IMPORTED_MODULE_1__.AppCoreModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 4691:
/*!*************************************************!*\
  !*** ./apps/ui/src/app/core/app-core.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppCoreModule": () => (/* binding */ AppCoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ 9272);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 4277);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/util */ 9595);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-routing.module */ 6682);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/router-store */ 6100);
/* harmony import */ var _frontend_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @frontend/state */ 2492);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store-devtools */ 5960);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ 4996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);




















class AppCoreModule {
}
AppCoreModule.ɵfac = function AppCoreModule_Factory(t) { return new (t || AppCoreModule)(); };
AppCoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppCoreModule });
AppCoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        { provide: _frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__.ENV_INJECT_TOKEN, useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment },
        _frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__.SharedUtilEnvService,
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__.OAuthModule.forRoot({ resourceServer: { sendAccessToken: true } }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsModule.forRoot([]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreModule.forRoot({}, {
                metaReducers: !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? [] : [],
                runtimeChecks: {
                    strictActionImmutability: true,
                    strictStateImmutability: true,
                },
            }),
            !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule.instrument() : [],
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__.StoreRouterConnectingModule.forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.NoopAnimationsModule,
            _frontend_state__WEBPACK_IMPORTED_MODULE_3__.GlobalStateModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule
        ], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppCoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__.OAuthModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsRootModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_9__.StoreRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_10__.StoreDevtoolsModule, _ngrx_router_store__WEBPACK_IMPORTED_MODULE_11__.StoreRouterConnectingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.NoopAnimationsModule,
        _frontend_state__WEBPACK_IMPORTED_MODULE_3__.GlobalStateModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__.MatSnackBarModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 4277:
/*!*************************************************!*\
  !*** ./apps/ui/src/environments/environment.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    issuer: 'http://127.0.0.1:8080',
    appName: 'OAuth2 Server Dev',
    production: false,
    host: `http://127.0.0.1:8080`,
    apiBasePath: '/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 2199:
/*!*****************************!*\
  !*** ./apps/ui/src/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 7680);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4277);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 9806:
/*!**********************************************!*\
  !*** ./libs/shared/data-access/src/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* reexport safe */ _lib_client_client_service__WEBPACK_IMPORTED_MODULE_0__.ClientService)
/* harmony export */ });
/* harmony import */ var _lib_client_client_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/client/client.service */ 9415);



/***/ }),

/***/ 9415:
/*!******************************************************************!*\
  !*** ./libs/shared/data-access/src/lib/client/client.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientService": () => (/* binding */ ClientService)
/* harmony export */ });
/* harmony import */ var _frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontend/shared/util */ 9595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);





class ClientService {
    constructor(http, envService) {
        this.http = http;
        this.envService = envService;
        this.getProviders = () => this.http.get(`${this.envService.env.host}${this.envService.env.apiBasePath}/clients/providers`, { observe: 'body' });
    }
}
ClientService.ɵfac = function ClientService_Factory(t) { return new (t || ClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__.SharedUtilEnvService)); };
ClientService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ClientService, factory: ClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8248:
/*!****************************************!*\
  !*** ./libs/shared/model/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/env */ 7056);
/* harmony import */ var _lib_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/user */ 8771);
/* harmony import */ var _lib_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/dto */ 256);
/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/client */ 3886);






/***/ }),

/***/ 3886:
/*!*********************************************!*\
  !*** ./libs/shared/model/src/lib/client.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 256:
/*!******************************************!*\
  !*** ./libs/shared/model/src/lib/dto.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 7056:
/*!******************************************!*\
  !*** ./libs/shared/model/src/lib/env.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8771:
/*!*******************************************!*\
  !*** ./libs/shared/model/src/lib/user.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6356:
/*!*************************************!*\
  !*** ./libs/shared/ui/src/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiModule": () => (/* reexport safe */ _lib_shared_ui_module__WEBPACK_IMPORTED_MODULE_0__.SharedUiModule),
/* harmony export */   "SharedUiApplicationModule": () => (/* reexport safe */ _lib_application_shared_ui_application_module__WEBPACK_IMPORTED_MODULE_1__.SharedUiApplicationModule),
/* harmony export */   "SharedUiApplicationCnComponent": () => (/* reexport safe */ _lib_application_containers_shared_ui_application_cn_component__WEBPACK_IMPORTED_MODULE_2__.SharedUiApplicationCnComponent),
/* harmony export */   "SharedUiNotFoundModule": () => (/* reexport safe */ _lib_not_found_shared_ui_not_found_module__WEBPACK_IMPORTED_MODULE_3__.SharedUiNotFoundModule),
/* harmony export */   "NotFoundComponent": () => (/* reexport safe */ _lib_not_found_components_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent),
/* harmony export */   "LoginFormCnComponent": () => (/* reexport safe */ _lib_form_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_5__.LoginFormCnComponent),
/* harmony export */   "SharedUiFormModule": () => (/* reexport safe */ _lib_form_shared_ui_form_module__WEBPACK_IMPORTED_MODULE_6__.SharedUiFormModule),
/* harmony export */   "slideInAnimation": () => (/* reexport safe */ _lib_animations_animations__WEBPACK_IMPORTED_MODULE_7__.slideInAnimation)
/* harmony export */ });
/* harmony import */ var _lib_shared_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-ui.module */ 6015);
/* harmony import */ var _lib_application_shared_ui_application_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/application/shared-ui-application.module */ 9800);
/* harmony import */ var _lib_application_containers_shared_ui_application_cn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/application/containers/shared-ui-application-cn.component */ 4438);
/* harmony import */ var _lib_not_found_shared_ui_not_found_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/not-found/shared-ui-not-found.module */ 1530);
/* harmony import */ var _lib_not_found_components_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/not-found/components/not-found.component */ 6266);
/* harmony import */ var _lib_form_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/form/containers/login/login-form-cn.component */ 1651);
/* harmony import */ var _lib_form_shared_ui_form_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/form/shared-ui-form.module */ 9341);
/* harmony import */ var _lib_animations_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/animations/animations */ 7240);

// Application


// Not found


// Form


// Animations



/***/ }),

/***/ 7240:
/*!*********************************************************!*\
  !*** ./libs/shared/ui/src/lib/animations/animations.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideInAnimation": () => (/* binding */ slideInAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 6755);

const slideInAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('LoginPage <=> RegistrationPage', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'relative' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: '-100%',
                left: 0,
                width: '100%',
                opacity: 0
            })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)()),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':leave', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('250ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ top: '-100%', opacity: 0 }))
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('250ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ top: '0%', opacity: 1 }))
            ])
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)())
    ]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* <=> LoginPage', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ position: 'relative' }),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter, :leave', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                position: 'absolute',
                top: '-100%',
                left: 0,
                width: '100%',
                opacity: 0
            })
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({})
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.group)([
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('250ms ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ top: '0%', opacity: 1 }))
            ])
        ]),
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.query)(':enter', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animateChild)())
    ]),
]);


/***/ }),

/***/ 4438:
/*!*********************************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/application/containers/shared-ui-application-cn.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiApplicationCnComponent": () => (/* binding */ SharedUiApplicationCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navigation_containers_navigation_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navigation/containers/navigation-container.component */ 2883);


const _c0 = ["*"];
class SharedUiApplicationCnComponent {
}
SharedUiApplicationCnComponent.ɵfac = function SharedUiApplicationCnComponent_Factory(t) { return new (t || SharedUiApplicationCnComponent)(); };
SharedUiApplicationCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SharedUiApplicationCnComponent, selectors: [["frontend-shared-ui-application-cn"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [["appName", "OAuth2 Client"]], template: function SharedUiApplicationCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "frontend-navigation-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_navigation_containers_navigation_container_component__WEBPACK_IMPORTED_MODULE_0__.NavigationContainerComponent], encapsulation: 2 });


/***/ }),

/***/ 9800:
/*!****************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/application/shared-ui-application.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiApplicationModule": () => (/* binding */ SharedUiApplicationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _containers_shared_ui_application_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/shared-ui-application-cn.component */ 4438);
/* harmony import */ var _header_shared_ui_header_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/shared-ui-header.module */ 4713);
/* harmony import */ var _navigation_shared_ui_navigation_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation/shared-ui-navigation.module */ 4656);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);





class SharedUiApplicationModule {
}
SharedUiApplicationModule.ɵfac = function SharedUiApplicationModule_Factory(t) { return new (t || SharedUiApplicationModule)(); };
SharedUiApplicationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedUiApplicationModule });
SharedUiApplicationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _header_shared_ui_header_module__WEBPACK_IMPORTED_MODULE_1__.SharedUiHeaderModule,
            _navigation_shared_ui_navigation_module__WEBPACK_IMPORTED_MODULE_2__.SharedUiNavigationModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedUiApplicationModule, { declarations: [_containers_shared_ui_application_cn_component__WEBPACK_IMPORTED_MODULE_0__.SharedUiApplicationCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _header_shared_ui_header_module__WEBPACK_IMPORTED_MODULE_1__.SharedUiHeaderModule,
        _navigation_shared_ui_navigation_module__WEBPACK_IMPORTED_MODULE_2__.SharedUiNavigationModule], exports: [_containers_shared_ui_application_cn_component__WEBPACK_IMPORTED_MODULE_0__.SharedUiApplicationCnComponent] }); })();


/***/ }),

/***/ 1651:
/*!*********************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/form/containers/login/login-form-cn.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormCnComponent": () => (/* binding */ LoginFormCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

const _c0 = ["*"];
class LoginFormCnComponent {
}
LoginFormCnComponent.ɵfac = function LoginFormCnComponent_Factory(t) { return new (t || LoginFormCnComponent)(); };
LoginFormCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormCnComponent, selectors: [["frontend-login-form-cn"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "wrapper", "row", "justify-content-center", "align-content-center"]], template: function LoginFormCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body,   html {\n  background-color: azure;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: auto;\n  height: 100%;\n}\n@media only screen and (max-width: 1280px) {\n  .wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlL21peGlucy5zY3NzIiwibG9naW4tZm9ybS1jbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxrQkFBQTtBQ0FBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQUFGO0FBR0E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBRjtBRE9FO0VDVkY7SUFNSSxXQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJsb2dpbi1mb3JtLWNuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInZhcnNcIjtcblxuLyogTUVESUEgUVVFUklFUyAqL1xuXG5AbWl4aW4gbWF4TW9iaWxlU2NyZWVuIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWluTW9iaWxlU2NyZWVuKXtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWluVGFibGV0U2NyZWVuIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkbWluVGFibGV0U2NyZWVuKXtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWF4VGFibGV0U2NyZWVuIHtcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbWluVGFibGV0U2NyZWVuKXtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gYmV0d2Vlbk1vYmlsZUFuZFRhYmxldFNjcmVlbiB7XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1pbk1vYmlsZVNjcmVlbikgYW5kIChtYXgtd2lkdGg6ICRtaW5UYWJsZXRTY3JlZW4pe1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iLCJAaW1wb3J0IFwibGlicy9zaGFyZWQvdWkvc3JjL2xpYi9zdHlsZS9taXhpbnNcIjtcblxuOjpuZy1kZWVwIGJvZHksIDo6bmctZGVlcCBodG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXp1cmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgQGluY2x1ZGUgbWF4VGFibGV0U2NyZWVuIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 9341:
/*!**************************************************************!*\
  !*** ./libs/shared/ui/src/lib/form/shared-ui-form.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiFormModule": () => (/* binding */ SharedUiFormModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/login/login-form-cn.component */ 1651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class SharedUiFormModule {
}
SharedUiFormModule.ɵfac = function SharedUiFormModule_Factory(t) { return new (t || SharedUiFormModule)(); };
SharedUiFormModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedUiFormModule });
SharedUiFormModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedUiFormModule, { declarations: [_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_0__.LoginFormCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_0__.LoginFormCnComponent] }); })();


/***/ }),

/***/ 4604:
/*!********************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/header/components/shared-ui-header.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiHeaderComponent": () => (/* binding */ SharedUiHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 9339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 8852);









function SharedUiHeaderComponent_mat_toolbar_0_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SharedUiHeaderComponent_mat_toolbar_0_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r2.drawer.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SharedUiHeaderComponent_mat_toolbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SharedUiHeaderComponent_mat_toolbar_0_button_1_Template, 3, 0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r0.isHandset$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.appName);
} }
class SharedUiHeaderComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
    }
}
SharedUiHeaderComponent.ɵfac = function SharedUiHeaderComponent_Factory(t) { return new (t || SharedUiHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
SharedUiHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedUiHeaderComponent, selectors: [["frontend-shared-ui-header"]], inputs: { drawer: "drawer", appName: "appName", authUser: "authUser" }, decls: 1, vars: 1, consts: [["color", "primary", 4, "ngIf"], ["color", "primary"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], [1, "example-spacer"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"]], template: function SharedUiHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SharedUiHeaderComponent_mat_toolbar_0_Template, 6, 4, "mat-toolbar", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.drawer);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC11aS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FBQ0YiLCJmaWxlIjoic2hhcmVkLXVpLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIl19 */"] });


/***/ }),

/***/ 673:
/*!******************************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/header/containers/shared-ui-header-container.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiHeaderContainerComponent": () => (/* binding */ SharedUiHeaderContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _components_shared_ui_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared-ui-header.component */ 4604);



class SharedUiHeaderContainerComponent {
}
SharedUiHeaderContainerComponent.ɵfac = function SharedUiHeaderContainerComponent_Factory(t) { return new (t || SharedUiHeaderContainerComponent)(); };
SharedUiHeaderContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SharedUiHeaderContainerComponent, selectors: [["frontend-shared-ui-header-container"]], inputs: { drawer: "drawer", appName: "appName" }, decls: 1, vars: 2, consts: [[3, "appName", "drawer"]], template: function SharedUiHeaderContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "frontend-shared-ui-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appName", ctx.appName)("drawer", ctx.drawer);
    } }, directives: [_components_shared_ui_header_component__WEBPACK_IMPORTED_MODULE_0__.SharedUiHeaderComponent], styles: [""] });


/***/ }),

/***/ 4713:
/*!******************************************************************!*\
  !*** ./libs/shared/ui/src/lib/header/shared-ui-header.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiHeaderModule": () => (/* binding */ SharedUiHeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _containers_shared_ui_header_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/shared-ui-header-container.component */ 673);
/* harmony import */ var _components_shared_ui_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared-ui-header.component */ 4604);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);








class SharedUiHeaderModule {
}
SharedUiHeaderModule.ɵfac = function SharedUiHeaderModule_Factory(t) { return new (t || SharedUiHeaderModule)(); };
SharedUiHeaderModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedUiHeaderModule });
SharedUiHeaderModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedUiHeaderModule, { declarations: [_containers_shared_ui_header_container_component__WEBPACK_IMPORTED_MODULE_0__.SharedUiHeaderContainerComponent,
        _components_shared_ui_header_component__WEBPACK_IMPORTED_MODULE_1__.SharedUiHeaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_containers_shared_ui_header_container_component__WEBPACK_IMPORTED_MODULE_0__.SharedUiHeaderContainerComponent] }); })();


/***/ }),

/***/ 6653:
/*!******************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/navigation/components/navigation.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationComponent": () => (/* binding */ NavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ 9339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8537);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 1986);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _header_containers_shared_ui_header_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../header/containers/shared-ui-header-container.component */ 673);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);










const _c0 = ["*"];
class NavigationComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.Breakpoints.Handset)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(result => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)());
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__.BreakpointObserver)); };
NavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["frontend-navigation"]], inputs: { appName: "appName" }, ngContentSelectors: _c0, decls: 19, vars: 11, consts: [[1, "sidenav-container"], ["fixedInViewport", "", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "routerLink", "./profile", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "./users", "routerLinkActive", "active"], ["mat-list-item", "", "routerLink", "./clients", "routerLinkActive", "active"], [3, "drawer", "appName"], [1, "m-3"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "frontend-shared-ui-header-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 7, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 5, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("drawer", _r0)("appName", ctx.appName);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenav, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_7__.MatListItem, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavContent, _header_containers_shared_ui_header_container_component__WEBPACK_IMPORTED_MODULE_0__.SharedUiHeaderContainerComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe], styles: [".sidenav-container[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUNGIiwiZmlsZSI6Im5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"] });


/***/ }),

/***/ 2883:
/*!****************************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/navigation/containers/navigation-container.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationContainerComponent": () => (/* binding */ NavigationContainerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navigation.component */ 6653);


const _c0 = ["*"];
class NavigationContainerComponent {
}
NavigationContainerComponent.ɵfac = function NavigationContainerComponent_Factory(t) { return new (t || NavigationContainerComponent)(); };
NavigationContainerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavigationContainerComponent, selectors: [["frontend-navigation-container"]], inputs: { appName: "appName" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "appName"]], template: function NavigationContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "frontend-navigation", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appName", ctx.appName);
    } }, directives: [_components_navigation_component__WEBPACK_IMPORTED_MODULE_0__.NavigationComponent], styles: [""] });


/***/ }),

/***/ 4656:
/*!**************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/navigation/shared-ui-navigation.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiNavigationModule": () => (/* binding */ SharedUiNavigationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _containers_navigation_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/navigation-container.component */ 2883);
/* harmony import */ var _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navigation.component */ 6653);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ 1986);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _header_shared_ui_header_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/shared-ui-header.module */ 4713);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);










class SharedUiNavigationModule {
}
SharedUiNavigationModule.ɵfac = function SharedUiNavigationModule_Factory(t) { return new (t || SharedUiNavigationModule)(); };
SharedUiNavigationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedUiNavigationModule });
SharedUiNavigationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
            _header_shared_ui_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUiHeaderModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedUiNavigationModule, { declarations: [_containers_navigation_container_component__WEBPACK_IMPORTED_MODULE_0__.NavigationContainerComponent,
        _components_navigation_component__WEBPACK_IMPORTED_MODULE_1__.NavigationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
        _header_shared_ui_header_module__WEBPACK_IMPORTED_MODULE_2__.SharedUiHeaderModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule], exports: [_containers_navigation_container_component__WEBPACK_IMPORTED_MODULE_0__.NavigationContainerComponent] }); })();


/***/ }),

/***/ 6266:
/*!****************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/not-found/components/not-found.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class NotFoundComponent {
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["frontend-not-found"]], decls: 3, vars: 0, consts: [[1, "mat-error"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nothing found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 1530:
/*!************************************************************************!*\
  !*** ./libs/shared/ui/src/lib/not-found/shared-ui-not-found.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiNotFoundModule": () => (/* binding */ SharedUiNotFoundModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _components_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/not-found.component */ 6266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class SharedUiNotFoundModule {
}
SharedUiNotFoundModule.ɵfac = function SharedUiNotFoundModule_Factory(t) { return new (t || SharedUiNotFoundModule)(); };
SharedUiNotFoundModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedUiNotFoundModule });
SharedUiNotFoundModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedUiNotFoundModule, { declarations: [_components_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_components_not_found_component__WEBPACK_IMPORTED_MODULE_0__.NotFoundComponent] }); })();


/***/ }),

/***/ 6015:
/*!****************************************************!*\
  !*** ./libs/shared/ui/src/lib/shared-ui.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUiModule": () => (/* binding */ SharedUiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _not_found_shared_ui_not_found_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/shared-ui-not-found.module */ 1530);
/* harmony import */ var _application_shared_ui_application_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application/shared-ui-application.module */ 9800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




class SharedUiModule {
}
SharedUiModule.ɵfac = function SharedUiModule_Factory(t) { return new (t || SharedUiModule)(); };
SharedUiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedUiModule });
SharedUiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], _application_shared_ui_application_module__WEBPACK_IMPORTED_MODULE_1__.SharedUiApplicationModule,
        _not_found_shared_ui_not_found_module__WEBPACK_IMPORTED_MODULE_0__.SharedUiNotFoundModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedUiModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_application_shared_ui_application_module__WEBPACK_IMPORTED_MODULE_1__.SharedUiApplicationModule,
        _not_found_shared_ui_not_found_module__WEBPACK_IMPORTED_MODULE_0__.SharedUiNotFoundModule] }); })();


/***/ }),

/***/ 9595:
/*!***************************************!*\
  !*** ./libs/shared/util/src/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INJECT_TOKEN": () => (/* reexport safe */ _lib_shared_util_module__WEBPACK_IMPORTED_MODULE_0__.INJECT_TOKEN),
/* harmony export */   "SharedUtilModule": () => (/* reexport safe */ _lib_shared_util_module__WEBPACK_IMPORTED_MODULE_0__.SharedUtilModule),
/* harmony export */   "ENV_INJECT_TOKEN": () => (/* reexport safe */ _lib_tokens_shared_util_inject_tokens__WEBPACK_IMPORTED_MODULE_1__.ENV_INJECT_TOKEN),
/* harmony export */   "SharedUtilEnvService": () => (/* reexport safe */ _lib_services_env_shared_util_env_service__WEBPACK_IMPORTED_MODULE_2__.SharedUtilEnvService),
/* harmony export */   "OAuthGuardService": () => (/* reexport safe */ _lib_guards_o_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__.OAuthGuardService),
/* harmony export */   "OAUTH2_CODE_FLOW_CONFIG": () => (/* reexport safe */ _lib_config_oauth2_config__WEBPACK_IMPORTED_MODULE_4__.OAUTH2_CODE_FLOW_CONFIG),
/* harmony export */   "SharedUtilAuthService": () => (/* reexport safe */ _lib_services_auth_shared_util_auth_service__WEBPACK_IMPORTED_MODULE_5__.SharedUtilAuthService),
/* harmony export */   "SharedUtilFormUtilService": () => (/* reexport safe */ _lib_services_form_shared_util_form_util_service__WEBPACK_IMPORTED_MODULE_6__.SharedUtilFormUtilService),
/* harmony export */   "SharedUtilSnackService": () => (/* reexport safe */ _lib_services_snack_shared_util_snack_service__WEBPACK_IMPORTED_MODULE_7__.SharedUtilSnackService)
/* harmony export */ });
/* harmony import */ var _lib_shared_util_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/shared-util.module */ 7593);
/* harmony import */ var _lib_tokens_shared_util_inject_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/tokens/shared-util-inject-tokens */ 8270);
/* harmony import */ var _lib_services_env_shared_util_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/env/shared-util-env.service */ 4635);
/* harmony import */ var _lib_guards_o_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/guards/o-auth-guard.service */ 7246);
/* harmony import */ var _lib_config_oauth2_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/config/oauth2-config */ 5343);
/* harmony import */ var _lib_services_auth_shared_util_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/services/auth/shared-util-auth-service */ 9411);
/* harmony import */ var _lib_services_form_shared_util_form_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/form/shared-util-form-util.service */ 778);
/* harmony import */ var _lib_services_snack_shared_util_snack_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/services/snack/shared-util-snack.service */ 5002);










/***/ }),

/***/ 5343:
/*!**********************************************************!*\
  !*** ./libs/shared/util/src/lib/config/oauth2-config.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OAUTH2_CODE_FLOW_CONFIG": () => (/* binding */ OAUTH2_CODE_FLOW_CONFIG)
/* harmony export */ });
const OAUTH2_CODE_FLOW_CONFIG = {
    // Url of the Identity Provider
    // issuer: 'http://127.0.0.1:8080',
    issuer: 'https://vrapalis-oauth2.ddns.net',
    useHttpBasicAuth: true,
    dummyClientSecret: 'secret',
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin,
    oidc: true,
    // The SPA's id. The SPA is registerd with this id at the auth-server
    // clientId: 'server.code',
    clientId: 'client',
    // Just needed if your auth server demands a secret. In general, this
    // is a sign that the auth server is not configured with SPAs in mind
    // and it might not enforce further best practices vital for security
    // such applications.
    // dummyClientSecret: 'secret',
    responseType: 'code',
    requireHttps: false,
    // set the scope for the permissions the client should request
    // The first four are defined by OIDC.
    // Important: Request offline_access to get a refresh token
    // The api scope is a usecase specific one
    // scope: 'openid',
    scope: 'read',
    showDebugInformation: true
};


/***/ }),

/***/ 7246:
/*!*****************************************************************!*\
  !*** ./libs/shared/util/src/lib/guards/o-auth-guard.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OAuthGuardService": () => (/* binding */ OAuthGuardService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 6928);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal-compatibility */ 4530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ 9272);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 9407);









class OAuthGuardService {
    constructor(oauthService, state) {
        this.oauthService = oauthService;
        this.state = state;
    }
    canLoad(route, segments) {
        return (0,rxjs_internal_compatibility__WEBPACK_IMPORTED_MODULE_0__.fromPromise)(this.oauthService.loadDiscoveryDocumentAndTryLogin())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => {
            console.log(this.oauthService);
            if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
                this.oauthService.initLoginFlow();
                return false;
            }
            else {
                return true;
            }
        }));
    }
}
OAuthGuardService.ɵfac = function OAuthGuardService_Factory(t) { return new (t || OAuthGuardService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
OAuthGuardService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OAuthGuardService, factory: OAuthGuardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9411:
/*!****************************************************************************!*\
  !*** ./libs/shared/util/src/lib/services/auth/shared-util-auth-service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUtilAuthService": () => (/* binding */ SharedUtilAuthService)
/* harmony export */ });
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ 9272);
/* harmony import */ var _frontend_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontend/state */ 2492);
/* harmony import */ var _frontend_shared_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/model */ 8248);
/* harmony import */ var _env_shared_util_env_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../env/shared-util-env.service */ 4635);
/* harmony import */ var _snack_shared_util_snack_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../snack/shared-util-snack.service */ 5002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);















class SharedUtilAuthService {
    constructor(oauthService, state, http, envService, snackBarUtilService, router) {
        this.oauthService = oauthService;
        this.state = state;
        this.http = http;
        this.envService = envService;
        this.snackBarUtilService = snackBarUtilService;
        this.router = router;
    }
    onOAuthEvents() {
        this.oauthService.events
            .subscribe(event => {
            console.log(event);
            switch (event.type) {
                case 'token_received':
                    this.state.dispatch((0,_frontend_state__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_ACTION)());
                    return;
                case 'discovery_document_loaded':
                    if (event instanceof angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthSuccessEvent) {
                        if (event.info !== null) {
                            this.state.dispatch((0,_frontend_state__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_ACTION)());
                        }
                    }
                    return;
                default:
                    return;
            }
        });
    }
    registration(user) {
        return this.http.post(`${this.envService.env.host}${this.envService.env.apiBasePath}/users/registration`, user, { observe: 'body' });
    }
    forgotPassword(email) {
        const forgotPasswordDao = { email };
        return this.http.post(`${this.envService.env.host}${this.envService.env.apiBasePath}/users/forgot-password`, forgotPasswordDao, { observe: 'body' });
    }
    resetPassword(resetPasswordDto) {
        return this.http.put(`${this.envService.env.host}${this.envService.env.apiBasePath}/users/reset-password`, resetPasswordDto, { observe: 'body' });
    }
    registrationCode(code) {
        const body = { code };
        return this.http.put(`${this.envService.env.host}${this.envService.env.apiBasePath}/users/registration`, body, { observe: 'body' });
    }
}
SharedUtilAuthService.ɵfac = function SharedUtilAuthService_Factory(t) { return new (t || SharedUtilAuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_env_shared_util_env_service__WEBPACK_IMPORTED_MODULE_2__.SharedUtilEnvService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_snack_shared_util_snack_service__WEBPACK_IMPORTED_MODULE_3__.SharedUtilSnackService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router)); };
SharedUtilAuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SharedUtilAuthService, factory: SharedUtilAuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4635:
/*!**************************************************************************!*\
  !*** ./libs/shared/util/src/lib/services/env/shared-util-env.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUtilEnvService": () => (/* binding */ SharedUtilEnvService)
/* harmony export */ });
/* harmony import */ var _tokens_shared_util_inject_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../tokens/shared-util-inject-tokens */ 8270);
/* harmony import */ var _config_oauth2_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/oauth2-config */ 5343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



class SharedUtilEnvService {
    constructor(env) {
        this.env = env;
    }
    getAuthConfig() {
        const config = _config_oauth2_config__WEBPACK_IMPORTED_MODULE_1__.OAUTH2_CODE_FLOW_CONFIG;
        config.issuer = this.env.issuer;
        return config;
    }
}
SharedUtilEnvService.ɵfac = function SharedUtilEnvService_Factory(t) { return new (t || SharedUtilEnvService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_tokens_shared_util_inject_tokens__WEBPACK_IMPORTED_MODULE_0__.ENV_INJECT_TOKEN)); };
SharedUtilEnvService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SharedUtilEnvService, factory: SharedUtilEnvService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 778:
/*!*********************************************************************************!*\
  !*** ./libs/shared/util/src/lib/services/form/shared-util-form-util.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUtilFormUtilService": () => (/* binding */ SharedUtilFormUtilService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class SharedUtilFormUtilService {
    getEmailErrorMessage(form) {
        var _a, _b;
        if ((_a = form.get('email')) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            return 'You must enter a value';
        }
        if ((_b = form.get('email')) === null || _b === void 0 ? void 0 : _b.hasError('email')) {
            return 'Not a valid email';
        }
        return '';
    }
    getPasswordErrorMessage(form) {
        var _a, _b, _c;
        if ((_a = form.get('password')) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            return 'You must enter a value';
        }
        if ((_b = form.get('password')) === null || _b === void 0 ? void 0 : _b.hasError('minlength')) {
            return 'Should be min 6 length';
        }
        if ((_c = form.get('password')) === null || _c === void 0 ? void 0 : _c.hasError('maxlength')) {
            return 'Should be max 12 length';
        }
        return '';
    }
    isPasswordSame(password, passwordRepeated) {
        return password === passwordRepeated;
    }
}
SharedUtilFormUtilService.ɵfac = function SharedUtilFormUtilService_Factory(t) { return new (t || SharedUtilFormUtilService)(); };
SharedUtilFormUtilService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedUtilFormUtilService, factory: SharedUtilFormUtilService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5002:
/*!******************************************************************************!*\
  !*** ./libs/shared/util/src/lib/services/snack/shared-util-snack.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedUtilSnackService": () => (/* binding */ SharedUtilSnackService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ 4996);



class SharedUtilSnackService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    open(title, msg) {
        return this.snackBar.open(msg, title, {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
        }).afterDismissed();
    }
}
SharedUtilSnackService.ɵfac = function SharedUtilSnackService_Factory(t) { return new (t || SharedUtilSnackService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__.MatSnackBar)); };
SharedUtilSnackService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedUtilSnackService, factory: SharedUtilSnackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7593:
/*!********************************************************!*\
  !*** ./libs/shared/util/src/lib/shared-util.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INJECT_TOKEN": () => (/* binding */ INJECT_TOKEN),
/* harmony export */   "SharedUtilModule": () => (/* binding */ SharedUtilModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);


const INJECT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('');
class SharedUtilModule {
}
SharedUtilModule.ɵfac = function SharedUtilModule_Factory(t) { return new (t || SharedUtilModule)(); };
SharedUtilModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedUtilModule });
SharedUtilModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [{ provide: INJECT_TOKEN, useValue: '' }] });


/***/ }),

/***/ 8270:
/*!**********************************************************************!*\
  !*** ./libs/shared/util/src/lib/tokens/shared-util-inject-tokens.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ENV_INJECT_TOKEN": () => (/* binding */ ENV_INJECT_TOKEN)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

const ENV_INJECT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Env inject token');


/***/ }),

/***/ 2492:
/*!*********************************!*\
  !*** ./libs/state/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStateModule": () => (/* reexport safe */ _lib_global_state_module__WEBPACK_IMPORTED_MODULE_0__.GlobalStateModule),
/* harmony export */   "initialState": () => (/* reexport safe */ _lib_user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__.initialState),
/* harmony export */   "reducer": () => (/* reexport safe */ _lib_user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
/* harmony export */   "userFeatureKey": () => (/* reexport safe */ _lib_user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__.userFeatureKey),
/* harmony export */   "FORGOT_PASSWORD_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.FORGOT_PASSWORD_ACTION),
/* harmony export */   "FORGOT_PASSWORD_ERROR_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.FORGOT_PASSWORD_ERROR_ACTION),
/* harmony export */   "FORGOT_PASSWORD_SUCCESS_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.FORGOT_PASSWORD_SUCCESS_ACTION),
/* harmony export */   "REGISTRATION_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_ACTION),
/* harmony export */   "REGISTRATION_CODE_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_CODE_ACTION),
/* harmony export */   "REGISTRATION_CODE_ERROR_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_CODE_ERROR_ACTION),
/* harmony export */   "REGISTRATION_CODE_SUCCESS_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_CODE_SUCCESS_ACTION),
/* harmony export */   "REGISTRATION_ERROR_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_ERROR_ACTION),
/* harmony export */   "REGISTRATION_SUCCESS_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.REGISTRATION_SUCCESS_ACTION),
/* harmony export */   "RESET_PASSWORD_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.RESET_PASSWORD_ACTION),
/* harmony export */   "RESET_PASSWORD_ERROR_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.RESET_PASSWORD_ERROR_ACTION),
/* harmony export */   "RESET_PASSWORD_SUCCESS_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.RESET_PASSWORD_SUCCESS_ACTION),
/* harmony export */   "TRY_TO_RECEIVE_TOKEN_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.TRY_TO_RECEIVE_TOKEN_ACTION),
/* harmony export */   "TRY_TO_RECEIVE_TOKEN_ERROR_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.TRY_TO_RECEIVE_TOKEN_ERROR_ACTION),
/* harmony export */   "TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION": () => (/* reexport safe */ _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__.TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION),
/* harmony export */   "clientFeatureKey": () => (/* reexport safe */ _lib_client_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_3__.clientFeatureKey),
/* harmony export */   "clientInitialState": () => (/* reexport safe */ _lib_client_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_3__.clientInitialState),
/* harmony export */   "clientReducer": () => (/* reexport safe */ _lib_client_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_3__.clientReducer),
/* harmony export */   "LOAD_CLIENT_PROVIDERS_ACTION": () => (/* reexport safe */ _lib_client_actions_client_actions__WEBPACK_IMPORTED_MODULE_4__.LOAD_CLIENT_PROVIDERS_ACTION),
/* harmony export */   "LOAD_CLIENT_PROVIDERS_ERROR_ACTION": () => (/* reexport safe */ _lib_client_actions_client_actions__WEBPACK_IMPORTED_MODULE_4__.LOAD_CLIENT_PROVIDERS_ERROR_ACTION),
/* harmony export */   "LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION": () => (/* reexport safe */ _lib_client_actions_client_actions__WEBPACK_IMPORTED_MODULE_4__.LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION),
/* harmony export */   "selectClientProviders": () => (/* reexport safe */ _lib_client_selectors_client_selectors__WEBPACK_IMPORTED_MODULE_5__.selectClientProviders),
/* harmony export */   "selectClientState": () => (/* reexport safe */ _lib_client_selectors_client_selectors__WEBPACK_IMPORTED_MODULE_5__.selectClientState)
/* harmony export */ });
/* harmony import */ var _lib_global_state_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/global-state.module */ 2237);
/* harmony import */ var _lib_user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/user/reducers/user.reducer */ 8570);
/* harmony import */ var _lib_user_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/user/actions/user.actions */ 5910);
/* harmony import */ var _lib_client_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/client/reducers/client.reducer */ 7684);
/* harmony import */ var _lib_client_actions_client_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/client/actions/client.actions */ 1529);
/* harmony import */ var _lib_client_selectors_client_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/client/selectors/client.selectors */ 9293);

// User


// Client





/***/ }),

/***/ 1529:
/*!*************************************************************!*\
  !*** ./libs/state/src/lib/client/actions/client.actions.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LOAD_CLIENT_PROVIDERS_ACTION": () => (/* binding */ LOAD_CLIENT_PROVIDERS_ACTION),
/* harmony export */   "LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION": () => (/* binding */ LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION),
/* harmony export */   "LOAD_CLIENT_PROVIDERS_ERROR_ACTION": () => (/* binding */ LOAD_CLIENT_PROVIDERS_ERROR_ACTION)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9407);

const LOAD_CLIENT_PROVIDERS_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Login Component] Load client providers');
const LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Client Effect] Load client providers success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const LOAD_CLIENT_PROVIDERS_ERROR_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Client Effect] Load client providers error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 4929:
/*!*************************************************************!*\
  !*** ./libs/state/src/lib/client/effects/client.effects.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientEffects": () => (/* binding */ ClientEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var _actions_client_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/client.actions */ 1529);
/* harmony import */ var _frontend_shared_data_access__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/data-access */ 9806);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);








class ClientEffects {
    constructor(actions$, cService) {
        this.actions$ = actions$;
        this.cService = cService;
        this.loadClintProvidersAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_client_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_CLIENT_PROVIDERS_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(action => this.cService.getProviders().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(provider => (0,_actions_client_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION)({ provider })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_actions_client_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_CLIENT_PROVIDERS_ERROR_ACTION)({ error })))))));
        this.loadClintProvidersSuccessAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_client_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION)), { dispatch: false });
        this.loadClintProvidersErrorAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_client_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_CLIENT_PROVIDERS_ERROR_ACTION)), { dispatch: false });
    }
}
ClientEffects.ɵfac = function ClientEffects_Factory(t) { return new (t || ClientEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_frontend_shared_data_access__WEBPACK_IMPORTED_MODULE_1__.ClientService)); };
ClientEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: ClientEffects, factory: ClientEffects.ɵfac });


/***/ }),

/***/ 7684:
/*!**************************************************************!*\
  !*** ./libs/state/src/lib/client/reducers/client.reducer.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clientFeatureKey": () => (/* binding */ clientFeatureKey),
/* harmony export */   "clientInitialState": () => (/* binding */ clientInitialState),
/* harmony export */   "clientReducer": () => (/* binding */ clientReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _actions_client_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/client.actions */ 1529);


const clientFeatureKey = 'client';
const clientInitialState = {
    providers: []
};
const clientReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(clientInitialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_client_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_CLIENT_PROVIDERS_SUCCESS_ACTION, (state, action) => (Object.assign(Object.assign({}, state), { providers: action.provider }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_client_actions__WEBPACK_IMPORTED_MODULE_0__.LOAD_CLIENT_PROVIDERS_ERROR_ACTION, (state, action) => (Object.assign(Object.assign({}, state), { providers: clientInitialState.providers }))));


/***/ }),

/***/ 9293:
/*!*****************************************************************!*\
  !*** ./libs/state/src/lib/client/selectors/client.selectors.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectClientState": () => (/* binding */ selectClientState),
/* harmony export */   "selectClientProviders": () => (/* binding */ selectClientProviders)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _reducers_client_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reducers/client.reducer */ 7684);


const selectClientState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_0__.clientFeatureKey);
const selectClientProviders = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(selectClientState, (state) => state.providers);


/***/ }),

/***/ 2237:
/*!***************************************************!*\
  !*** ./libs/state/src/lib/global-state.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalStateModule": () => (/* binding */ GlobalStateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/reducers/user.reducer */ 8570);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var _user_effects_user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/effects/user.effects */ 460);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _ui_reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/reducers/ui.reducer */ 7143);
/* harmony import */ var _ui_effects_ui_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/effects/ui.effects */ 4487);
/* harmony import */ var _client_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/reducers/client.reducer */ 7684);
/* harmony import */ var _client_effects_client_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/effects/client.effects */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);












class GlobalStateModule {
}
GlobalStateModule.ɵfac = function GlobalStateModule_Factory(t) { return new (t || GlobalStateModule)(); };
GlobalStateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: GlobalStateModule });
GlobalStateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature(_user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_0__.userFeatureKey, _user_reducers_user_reducer__WEBPACK_IMPORTED_MODULE_0__.reducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature(_ui_reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_2__.uiFeatureKey, _ui_reducers_ui_reducer__WEBPACK_IMPORTED_MODULE_2__.reducer),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreModule.forFeature(_client_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_4__.clientFeatureKey, _client_reducers_client_reducer__WEBPACK_IMPORTED_MODULE_4__.clientReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsModule.forFeature([_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_1__.UserEffects, _ui_effects_ui_effects__WEBPACK_IMPORTED_MODULE_3__.UiEffects, _client_effects_client_effects__WEBPACK_IMPORTED_MODULE_5__.ClientEffects])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](GlobalStateModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreFeatureModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_8__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 4549:
/*!*****************************************************!*\
  !*** ./libs/state/src/lib/ui/actions/ui.actions.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadUis": () => (/* binding */ loadUis)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9407);

const loadUis = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Ui] Load Uis');


/***/ }),

/***/ 4487:
/*!*****************************************************!*\
  !*** ./libs/state/src/lib/ui/effects/ui.effects.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiEffects": () => (/* binding */ UiEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2537);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui.actions */ 4549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






class UiEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.loadUis$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => {
            return this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.loadUis), 
            /** An EMPTY observable only emits completion. Replace with your own observable API request */
            (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.concatMap)(() => rxjs__WEBPACK_IMPORTED_MODULE_3__.EMPTY));
        });
    }
}
UiEffects.ɵfac = function UiEffects_Factory(t) { return new (t || UiEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions)); };
UiEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UiEffects, factory: UiEffects.ɵfac });


/***/ }),

/***/ 7143:
/*!******************************************************!*\
  !*** ./libs/state/src/lib/ui/reducers/ui.reducer.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uiFeatureKey": () => (/* binding */ uiFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/ui.actions */ 4549);


const uiFeatureKey = 'ui';
const initialState = {
    alert: {
        msg: null,
        isShown: false
    }
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_ui_actions__WEBPACK_IMPORTED_MODULE_0__.loadUis, state => state));


/***/ }),

/***/ 5910:
/*!*********************************************************!*\
  !*** ./libs/state/src/lib/user/actions/user.actions.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TRY_TO_RECEIVE_TOKEN_ACTION": () => (/* binding */ TRY_TO_RECEIVE_TOKEN_ACTION),
/* harmony export */   "TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION": () => (/* binding */ TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION),
/* harmony export */   "TRY_TO_RECEIVE_TOKEN_ERROR_ACTION": () => (/* binding */ TRY_TO_RECEIVE_TOKEN_ERROR_ACTION),
/* harmony export */   "REGISTRATION_ACTION": () => (/* binding */ REGISTRATION_ACTION),
/* harmony export */   "REGISTRATION_SUCCESS_ACTION": () => (/* binding */ REGISTRATION_SUCCESS_ACTION),
/* harmony export */   "REGISTRATION_ERROR_ACTION": () => (/* binding */ REGISTRATION_ERROR_ACTION),
/* harmony export */   "REGISTRATION_CODE_ACTION": () => (/* binding */ REGISTRATION_CODE_ACTION),
/* harmony export */   "REGISTRATION_CODE_SUCCESS_ACTION": () => (/* binding */ REGISTRATION_CODE_SUCCESS_ACTION),
/* harmony export */   "REGISTRATION_CODE_ERROR_ACTION": () => (/* binding */ REGISTRATION_CODE_ERROR_ACTION),
/* harmony export */   "FORGOT_PASSWORD_ACTION": () => (/* binding */ FORGOT_PASSWORD_ACTION),
/* harmony export */   "FORGOT_PASSWORD_SUCCESS_ACTION": () => (/* binding */ FORGOT_PASSWORD_SUCCESS_ACTION),
/* harmony export */   "FORGOT_PASSWORD_ERROR_ACTION": () => (/* binding */ FORGOT_PASSWORD_ERROR_ACTION),
/* harmony export */   "RESET_PASSWORD_ACTION": () => (/* binding */ RESET_PASSWORD_ACTION),
/* harmony export */   "RESET_PASSWORD_SUCCESS_ACTION": () => (/* binding */ RESET_PASSWORD_SUCCESS_ACTION),
/* harmony export */   "RESET_PASSWORD_ERROR_ACTION": () => (/* binding */ RESET_PASSWORD_ERROR_ACTION)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9407);

const APPLICATION_CONTAINER = '[Application Container]';
const TRY_TO_RECEIVE_TOKEN_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`${APPLICATION_CONTAINER} Try To Receive Token`);
const TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`${APPLICATION_CONTAINER} Success Received Token`, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const TRY_TO_RECEIVE_TOKEN_ERROR_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)(`${APPLICATION_CONTAINER} Error Received Token`);
const REGISTRATION_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Registration Component] User Registration', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const REGISTRATION_SUCCESS_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Registration Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const REGISTRATION_ERROR_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Registration Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const REGISTRATION_CODE_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Registration Component] Registration Code', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const REGISTRATION_CODE_SUCCESS_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Registration Code Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const REGISTRATION_CODE_ERROR_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Registration Code Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const FORGOT_PASSWORD_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Forgot Password Component] Forgot Password', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const FORGOT_PASSWORD_SUCCESS_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Forgot Password Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const FORGOT_PASSWORD_ERROR_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Forgot Password Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const RESET_PASSWORD_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Reset Password Component] Reset Password', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const RESET_PASSWORD_SUCCESS_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Reset Password Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const RESET_PASSWORD_ERROR_ACTION = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[User Effect] Reset Password Error', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 460:
/*!*********************************************************!*\
  !*** ./libs/state/src/lib/user/effects/user.effects.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEffects": () => (/* binding */ UserEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5029);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8252);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ 5910);
/* harmony import */ var _frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/util */ 9595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-oauth2-oidc */ 9272);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);














class UserEffects {
    constructor(actions$, state, oauthService, authUtilService, snackService, router) {
        this.actions$ = actions$;
        this.state = state;
        this.oauthService = oauthService;
        this.authUtilService = authUtilService;
        this.snackService = snackService;
        this.router = router;
        this.tryToReceiveTokenAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
            const userIdentityClaims = this.oauthService.getIdentityClaims();
            const userGrantedScopes = this.oauthService.getGrantedScopes();
            if (userIdentityClaims !== null && userGrantedScopes !== null) {
                const { id, sub } = userIdentityClaims;
                return (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION)({ user: { id, email: sub, scopes: userGrantedScopes } });
            }
            else {
                return (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_ERROR_ACTION)();
            }
        })));
        this.tryToReceiveTokenSuccessAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION)), { dispatch: false });
        this.tryToReceiveTokenErrorAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_ERROR_ACTION)), { dispatch: false });
        this.registrationAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.authUtilService.registration(action.user).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_SUCCESS_ACTION)({ response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_ERROR_ACTION)({ response: error.error })))))));
        this.registrationSuccessAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_SUCCESS_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.router.navigate(['/login']))), { dispatch: false });
        this.registrationErrorAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_ERROR_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg))), { dispatch: false });
        this.registrationCodeAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_CODE_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.authUtilService.registrationCode(action.code).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_CODE_SUCCESS_ACTION)({ response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_CODE_ERROR_ACTION)({ response: error.error })))))));
        this.registrationCodeSuccessAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_CODE_SUCCESS_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.router.navigate(['/login']))), { dispatch: false });
        this.registrationCodeErrorAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.REGISTRATION_CODE_ERROR_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg))), { dispatch: false });
        this.forgotPasswordAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.FORGOT_PASSWORD_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.authUtilService.forgotPassword(action.email).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.FORGOT_PASSWORD_SUCCESS_ACTION)({ response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.FORGOT_PASSWORD_ERROR_ACTION)({ response: err.error })))))));
        this.forgotPasswordSuccessAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.FORGOT_PASSWORD_SUCCESS_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.router.navigate(['/reset-password']))), { dispatch: false });
        this.forgotPasswordErrorAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.FORGOT_PASSWORD_ERROR_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg))), { dispatch: false });
        this.resetPasswordAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.RESET_PASSWORD_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.authUtilService.resetPassword(action.resetPassword).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(response => (0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.RESET_PASSWORD_SUCCESS_ACTION)({ response })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)((0,_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.RESET_PASSWORD_ERROR_ACTION)({ response: err.error })))))));
        this.resetPasswordSuccessAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.RESET_PASSWORD_SUCCESS_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.router.navigate(['/login']))), { dispatch: false });
        this.resetPasswordErrorAction$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.ofType)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.RESET_PASSWORD_ERROR_ACTION), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(action => this.snackService.open(action.response.msg, action.response.detailedMsg))), { dispatch: false });
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_10__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__.SharedUtilAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_1__.SharedUtilSnackService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
UserEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });


/***/ }),

/***/ 8570:
/*!**********************************************************!*\
  !*** ./libs/state/src/lib/user/reducers/user.reducer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userFeatureKey": () => (/* binding */ userFeatureKey),
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/user.actions */ 5910);


const userFeatureKey = 'user';
const initialState = {
    id: null,
    email: null,
    scopes: null
};
const reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_actions_user_actions__WEBPACK_IMPORTED_MODULE_0__.TRY_TO_RECEIVE_TOKEN_SUCCESS_ACTION, (state, action) => (Object.assign(Object.assign({}, state), action.user))));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(2199)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map