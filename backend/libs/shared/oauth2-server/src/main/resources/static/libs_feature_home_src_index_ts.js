"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["libs_feature_home_src_index_ts"],{

/***/ 1173:
/*!****************************************!*\
  !*** ./libs/feature/home/src/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureHomeModule": () => (/* reexport safe */ _lib_feature_home_module__WEBPACK_IMPORTED_MODULE_0__.FeatureHomeModule)
/* harmony export */ });
/* harmony import */ var _lib_feature_home_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feature-home.module */ 704);



/***/ }),

/***/ 5154:
/*!*******************************************************************!*\
  !*** ./libs/feature/home/src/lib/containers/home-cn.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeCnComponent": () => (/* binding */ HomeCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-oauth2-oidc */ 9272);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_ui_src_lib_application_containers_shared_ui_application_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../shared/ui/src/lib/application/containers/shared-ui-application-cn.component */ 4438);






class HomeCnComponent {
    constructor(oauthService, route) {
        this.oauthService = oauthService;
        this.route = route;
    }
    ngOnInit() {
        // This would directly (w/o user interaction) redirect the user to the
        // login page if they are not already logged in.
        /*this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
          if (!this.oauthService.hasValidIdToken() || !this.oauthService.hasValidAccessToken()) {
            this.oauthService.initImplicitFlow('some-state');
          }
        });*/
    }
}
HomeCnComponent.ɵfac = function HomeCnComponent_Factory(t) { return new (t || HomeCnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_2__.OAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
HomeCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeCnComponent, selectors: [["frontend-home-cn"]], decls: 2, vars: 0, template: function HomeCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "frontend-shared-ui-application-cn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_ui_src_lib_application_containers_shared_ui_application_cn_component__WEBPACK_IMPORTED_MODULE_0__.SharedUiApplicationCnComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 704:
/*!**********************************************************!*\
  !*** ./libs/feature/home/src/lib/feature-home.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureHomeModule": () => (/* binding */ FeatureHomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_home_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/home-cn.component */ 5154);
/* harmony import */ var _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/ui */ 6356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);






class FeatureHomeModule {
}
FeatureHomeModule.ɵfac = function FeatureHomeModule_Factory(t) { return new (t || FeatureHomeModule)(); };
FeatureHomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeatureHomeModule });
FeatureHomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
                {
                    path: '', component: _containers_home_cn_component__WEBPACK_IMPORTED_MODULE_0__.HomeCnComponent, children: [
                        { path: '', redirectTo: 'profile' },
                        {
                            path: 'profile',
                            loadChildren: () => __webpack_require__.e(/*! import() */ "libs_feature_profile_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/profile */ 6112)).then(mod => mod.FeatureProfileModule)
                        },
                        {
                            path: 'users',
                            loadChildren: () => __webpack_require__.e(/*! import() */ "libs_feature_users_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/users */ 3595)).then(mod => mod.FeatureUsersModule)
                        },
                        {
                            path: 'clients',
                            loadChildren: () => __webpack_require__.e(/*! import() */ "libs_feature_clients_src_index_ts").then(__webpack_require__.bind(__webpack_require__, /*! @frontend/feature/clients */ 6553)).then(mod => mod.FeatureClientsModule)
                        }
                    ]
                },
                { path: '**', component: _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.NotFoundComponent }
            ]),
            _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedUiModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeatureHomeModule, { declarations: [_containers_home_cn_component__WEBPACK_IMPORTED_MODULE_0__.HomeCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedUiModule] }); })();


/***/ })

}]);
//# sourceMappingURL=libs_feature_home_src_index_ts.js.map