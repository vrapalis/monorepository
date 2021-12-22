"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["libs_feature_profile_src_index_ts"],{

/***/ 6112:
/*!*******************************************!*\
  !*** ./libs/feature/profile/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureProfileModule": () => (/* reexport safe */ _lib_feature_profile_module__WEBPACK_IMPORTED_MODULE_0__.FeatureProfileModule)
/* harmony export */ });
/* harmony import */ var _lib_feature_profile_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feature-profile.module */ 1199);



/***/ }),

/***/ 7000:
/*!*************************************************************************!*\
  !*** ./libs/feature/profile/src/lib/containers/profile-cn.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileCnComponent": () => (/* binding */ ProfileCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ProfileCnComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileCnComponent.ɵfac = function ProfileCnComponent_Factory(t) { return new (t || ProfileCnComponent)(); };
ProfileCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCnComponent, selectors: [["frontend-profile-cn"]], decls: 2, vars: 0, template: function ProfileCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " profile-cn works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 1199:
/*!****************************************************************!*\
  !*** ./libs/feature/profile/src/lib/feature-profile.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureProfileModule": () => (/* binding */ FeatureProfileModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_profile_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/profile-cn.component */ 7000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);





class FeatureProfileModule {
}
FeatureProfileModule.ɵfac = function FeatureProfileModule_Factory(t) { return new (t || FeatureProfileModule)(); };
FeatureProfileModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatureProfileModule });
FeatureProfileModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                { path: '', pathMatch: 'full', component: _containers_profile_cn_component__WEBPACK_IMPORTED_MODULE_0__.ProfileCnComponent }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatureProfileModule, { declarations: [_containers_profile_cn_component__WEBPACK_IMPORTED_MODULE_0__.ProfileCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=libs_feature_profile_src_index_ts.js.map