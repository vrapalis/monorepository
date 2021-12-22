"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["libs_feature_registration_src_index_ts"],{

/***/ 6457:
/*!************************************************!*\
  !*** ./libs/feature/registration/src/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureRegistrationModule": () => (/* reexport safe */ _lib_feature_registration_module__WEBPACK_IMPORTED_MODULE_0__.FeatureRegistrationModule)
/* harmony export */ });
/* harmony import */ var _lib_feature_registration_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feature-registration.module */ 7008);



/***/ }),

/***/ 4791:
/*!***********************************************************************************!*\
  !*** ./libs/feature/registration/src/lib/containers/registration-cn.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationCnComponent": () => (/* binding */ RegistrationCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontend/shared/util */ 9595);
/* harmony import */ var _frontend_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/state */ 2492);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4058);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_ui_src_lib_form_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/src/lib/form/containers/login/login-form-cn.component */ 1651);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);



















function RegistrationCnComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.fUtilService.getEmailErrorMessage(ctx_r0.form));
} }
function RegistrationCnComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.fUtilService.getPasswordErrorMessage(ctx_r1.form));
} }
function RegistrationCnComponent_mat_error_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.fUtilService.getPasswordErrorMessage(ctx_r2.form));
} }
class RegistrationCnComponent {
    constructor(fb, fUtilService, store, route) {
        this.fb = fb;
        this.fUtilService = fUtilService;
        this.store = store;
        this.route = route;
        this.subscribeUntil$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12)]],
            passwordRepeated: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(12)]]
        });
    }
    ngOnInit() {
        this.route.queryParams
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(params => params.code), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(params => params.code), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.subscribeUntil$))
            .subscribe(code => this.store.dispatch((0,_frontend_state__WEBPACK_IMPORTED_MODULE_1__.REGISTRATION_CODE_ACTION)({ code })));
    }
    onSubmit() {
        const user = Object.assign({}, this.form.value);
        this.store.dispatch((0,_frontend_state__WEBPACK_IMPORTED_MODULE_1__.REGISTRATION_ACTION)({ user }));
    }
    isFormNotValid() {
        var _a, _b, _c;
        if (this.form.value.password.length >= 6) {
            return !((_a = this.form) === null || _a === void 0 ? void 0 : _a.valid) || !(((_b = this.form) === null || _b === void 0 ? void 0 : _b.value.password) === ((_c = this.form) === null || _c === void 0 ? void 0 : _c.value.passwordRepeated));
        }
        else {
            return true;
        }
    }
    ngOnDestroy() {
        this.subscribeUntil$.next();
        this.subscribeUntil$.complete();
    }
}
RegistrationCnComponent.ɵfac = function RegistrationCnComponent_Factory(t) { return new (t || RegistrationCnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__.SharedUtilFormUtilService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_9__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute)); };
RegistrationCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegistrationCnComponent, selectors: [["frontend-registration-cn"]], decls: 31, vars: 5, consts: [[3, "formGroup", "ngSubmit"], [1, "col-12", "fs-1", "text-opacity-50", "text-primary", "bi-person-plus"], [1, "ms-2"], ["appearance", "outline", 1, "col-12", "mt-4"], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email"], ["matSuffix", ""], [4, "ngIf"], ["appearance", "outline", 1, "col-12", "mt-3"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password"], ["matInput", "", "type", "password", "placeholder", "Password Repeated", "formControlName", "passwordRepeated"], [1, "row", "col-12", "mt-3", "justify-content-end"], ["mat-button", "", "color", "primary", "routerLink", "/login", "matTooltip", "Navigate to login page", 1, "col-4", "col-lg-2"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "col-6", "col-lg-3", "ms-1", 3, "disabled"]], template: function RegistrationCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "frontend-login-form-cn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RegistrationCnComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "alternate_email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RegistrationCnComponent_mat_error_11_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, RegistrationCnComponent_mat_error_18_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, RegistrationCnComponent_mat_error_25_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form.get("password")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.form.get("password")) == null ? null : tmp_3_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isFormNotValid());
    } }, directives: [_shared_ui_src_lib_form_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_2__.LoginFormCnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError], encapsulation: 2 });


/***/ }),

/***/ 7008:
/*!**************************************************************************!*\
  !*** ./libs/feature/registration/src/lib/feature-registration.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureRegistrationModule": () => (/* binding */ FeatureRegistrationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_registration_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/registration-cn.component */ 4791);
/* harmony import */ var _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/ui */ 6356);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);













class FeatureRegistrationModule {
}
FeatureRegistrationModule.ɵfac = function FeatureRegistrationModule_Factory(t) { return new (t || FeatureRegistrationModule)(); };
FeatureRegistrationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeatureRegistrationModule });
FeatureRegistrationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedUiFormModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                { path: '', pathMatch: 'full', component: _containers_registration_cn_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationCnComponent }
            ]),
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeatureRegistrationModule, { declarations: [_containers_registration_cn_component__WEBPACK_IMPORTED_MODULE_0__.RegistrationCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedUiFormModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule] }); })();


/***/ })

}]);
//# sourceMappingURL=libs_feature_registration_src_index_ts.js.map