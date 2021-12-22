"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["libs_feature_clients_src_index_ts"],{

/***/ 6553:
/*!*******************************************!*\
  !*** ./libs/feature/clients/src/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureClientsModule": () => (/* reexport safe */ _lib_feature_clients_module__WEBPACK_IMPORTED_MODULE_0__.FeatureClientsModule)
/* harmony export */ });
/* harmony import */ var _lib_feature_clients_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feature-clients.module */ 372);



/***/ }),

/***/ 6667:
/*!*************************************************************************!*\
  !*** ./libs/feature/clients/src/lib/containers/clients-cn.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsCnComponent": () => (/* binding */ ClientsCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class ClientsCnComponent {
    constructor() { }
    ngOnInit() {
    }
}
ClientsCnComponent.ɵfac = function ClientsCnComponent_Factory(t) { return new (t || ClientsCnComponent)(); };
ClientsCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientsCnComponent, selectors: [["frontend-clients-cn"]], decls: 2, vars: 0, template: function ClientsCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " clients-cn works! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 372:
/*!****************************************************************!*\
  !*** ./libs/feature/clients/src/lib/feature-clients.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureClientsModule": () => (/* binding */ FeatureClientsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_clients_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/clients-cn.component */ 6667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);





class FeatureClientsModule {
}
FeatureClientsModule.ɵfac = function FeatureClientsModule_Factory(t) { return new (t || FeatureClientsModule)(); };
FeatureClientsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FeatureClientsModule });
FeatureClientsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild([
                { path: '', pathMatch: 'full', component: _containers_clients_cn_component__WEBPACK_IMPORTED_MODULE_0__.ClientsCnComponent }
            ]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FeatureClientsModule, { declarations: [_containers_clients_cn_component__WEBPACK_IMPORTED_MODULE_0__.ClientsCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=libs_feature_clients_src_index_ts.js.map