"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["libs_feature_users_src_index_ts"],{

/***/ 3595:
/*!*****************************************!*\
  !*** ./libs/feature/users/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureUsersModule": () => (/* reexport safe */ _lib_feature_users_module__WEBPACK_IMPORTED_MODULE_0__.FeatureUsersModule)
/* harmony export */ });
/* harmony import */ var _lib_feature_users_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feature-users.module */ 255);



/***/ }),

/***/ 1700:
/*!*********************************************************************!*\
  !*** ./libs/feature/users/src/lib/containers/users-cn.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersCnComponent": () => (/* binding */ UsersCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class UsersCnComponent {
    constructor() { }
    ngOnInit() {
    }
}
UsersCnComponent.ɵfac = function UsersCnComponent_Factory(t) { return new (t || UsersCnComponent)(); };
UsersCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersCnComponent, selectors: [["frontend-users-cn"]], decls: 2, vars: 0, template: function UsersCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " users-cn works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 255:
/*!************************************************************!*\
  !*** ./libs/feature/users/src/lib/feature-users.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureUsersModule": () => (/* binding */ FeatureUsersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_users_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/users-cn.component */ 1700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);





class FeatureUsersModule {
}
FeatureUsersModule.ɵfac = function FeatureUsersModule_Factory(t) { return new (t || FeatureUsersModule)(); };
FeatureUsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatureUsersModule });
FeatureUsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                { path: '', pathMatch: 'full', component: _containers_users_cn_component__WEBPACK_IMPORTED_MODULE_0__.UsersCnComponent }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatureUsersModule, { declarations: [_containers_users_cn_component__WEBPACK_IMPORTED_MODULE_0__.UsersCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=libs_feature_users_src_index_ts.js.map