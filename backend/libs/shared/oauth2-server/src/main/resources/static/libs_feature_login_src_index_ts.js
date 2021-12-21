"use strict";
(self["webpackChunkui"] = self["webpackChunkui"] || []).push([["libs_feature_login_src_index_ts"],{

/***/ 236:
/*!*****************************************!*\
  !*** ./libs/feature/login/src/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureLoginModule": () => (/* reexport safe */ _lib_feature_login_module__WEBPACK_IMPORTED_MODULE_0__.FeatureLoginModule)
/* harmony export */ });
/* harmony import */ var _lib_feature_login_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/feature-login.module */ 8039);



/***/ }),

/***/ 885:
/*!*********************************************************************!*\
  !*** ./libs/feature/login/src/lib/containers/login-cn.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginCnComponent": () => (/* binding */ LoginCnComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @frontend/shared/util */ 9595);
/* harmony import */ var _frontend_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/state */ 2492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _shared_ui_src_lib_form_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../shared/ui/src/lib/form/containers/login/login-form-cn.component */ 1651);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);


















function LoginCnComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.getEmailErrorMessage());
} }
function LoginCnComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.getPasswordErrorMessage());
} }
function LoginCnComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "a", 16);
} if (rf & 2) {
    const provider_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](provider_r3.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "Login with" + provider_r3.registrationId)("href", "/oauth2/authorization/" + provider_r3.registrationId, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class LoginCnComponent {
    constructor(fb, http, store, snackService, envService) {
        this.fb = fb;
        this.http = http;
        this.store = store;
        this.snackService = snackService;
        this.envService = envService;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
        this.providers$ = this.store.select(_frontend_state__WEBPACK_IMPORTED_MODULE_1__.selectClientProviders);
    }
    onSubmit() {
        const payload = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
            .set('email', this.form.value.email)
            .set('password', this.form.value.password);
        this.http.post(`${this.envService.env.host}/login`, payload.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        }).subscribe(console.log, err => {
            if (err.url && !(err.url.includes('/login?error'))) {
                window.location.href = err.url;
            }
            else {
                this.snackService.open('Error', 'Login error.');
            }
        });
    }
    getEmailErrorMessage() {
        var _a, _b;
        if ((_a = this.form.get('email')) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            return 'You must enter a value';
        }
        if ((_b = this.form.get('email')) === null || _b === void 0 ? void 0 : _b.hasError('email')) {
            return 'Not a valid email';
        }
        return '';
    }
    getPasswordErrorMessage() {
        var _a, _b, _c;
        if ((_a = this.form.get('password')) === null || _a === void 0 ? void 0 : _a.hasError('required')) {
            return 'You must enter a value';
        }
        if ((_b = this.form.get('password')) === null || _b === void 0 ? void 0 : _b.hasError('minlength')) {
            return 'Should be min 6 length';
        }
        if ((_c = this.form.get('password')) === null || _c === void 0 ? void 0 : _c.hasError('maxlength')) {
            return 'Should be max 12 length';
        }
        return '';
    }
    ngOnInit() {
        this.store.dispatch((0,_frontend_state__WEBPACK_IMPORTED_MODULE_1__.LOAD_CLIENT_PROVIDERS_ACTION)());
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]]
        });
    }
}
LoginCnComponent.ɵfac = function LoginCnComponent_Factory(t) { return new (t || LoginCnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__.SharedUtilSnackService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_frontend_shared_util__WEBPACK_IMPORTED_MODULE_0__.SharedUtilEnvService)); };
LoginCnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginCnComponent, selectors: [["frontend-login-cn"]], decls: 30, vars: 7, consts: [[3, "formGroup", "ngSubmit"], [1, "col-12", "fs-1", "text-opacity-50", "text-primary", "bi-door-open"], [1, "ms-2"], ["appearance", "outline", 1, "col-12", "mt-4"], ["matInput", "", "type", "email", "placeholder", "Email", "formControlName", "email"], ["matSuffix", ""], [4, "ngIf"], ["appearance", "outline", 1, "col-12", "mt-3"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "password"], [1, "row", "col-12", "mt-3", "justify-content-end"], ["mat-button", "", "color", "primary", "routerLink", "/registration", "matTooltip", "Navigate to registration page", 1, "col-4", "col-lg-2"], ["mat-raised-button", "", "color", "primary", "type", "submit", 1, "col-6", "col-lg-3", "ms-1", 3, "disabled"], [1, "row", "col-12", "justify-content-end", "mt-3"], ["mat-button", "", "color", "accent", "routerLink", "/forgot-password", "matTooltip", "Navigate to forgot password page", 1, "col-6", "col-lg-3"], [1, "row", "col-12", "mt-4", "justify-content-end"], ["mat-icon-button", "", "class", "sn-icon col-1 text-primary fs-2 ms-3", 3, "matTooltip", "class", "href", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 1, "sn-icon", "col-1", "text-primary", "fs-2", "ms-3", 3, "matTooltip", "href"]], template: function LoginCnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "frontend-login-form-cn");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginCnComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Login");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, LoginCnComponent_mat_error_11_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, LoginCnComponent_mat_error_18_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Forgot Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, LoginCnComponent_a_28_Template, 1, 4, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.form.get("email")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form.get("password")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](29, 5, ctx.providers$));
    } }, directives: [_shared_ui_src_lib_form_containers_login_login_form_cn_component__WEBPACK_IMPORTED_MODULE_2__.LoginFormCnComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".sn-icon[_ngcontent-%COMP%]:hover {\n  font-size: 2.5em !important;\n  transition: 0.1s all ease-in;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWNuLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUFBViIsImZpbGUiOiJsb2dpbi1jbi5jb21wb25lbnQudHMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5zbi1pY29uOmhvdmVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIuNWVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBhbGwgZWFzZS1pbjtcbiAgICAgIH1cbiAgIl19 */"] });


/***/ }),

/***/ 8039:
/*!************************************************************!*\
  !*** ./libs/feature/login/src/lib/feature-login.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeatureLoginModule": () => (/* binding */ FeatureLoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _containers_login_cn_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/login-cn.component */ 885);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @frontend/shared/ui */ 6356);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);












class FeatureLoginModule {
}
FeatureLoginModule.ɵfac = function FeatureLoginModule_Factory(t) { return new (t || FeatureLoginModule)(); };
FeatureLoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FeatureLoginModule });
FeatureLoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([
                { path: '', pathMatch: 'full', component: _containers_login_cn_component__WEBPACK_IMPORTED_MODULE_0__.LoginCnComponent }
            ]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule,
            _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedUiFormModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FeatureLoginModule, { declarations: [_containers_login_cn_component__WEBPACK_IMPORTED_MODULE_0__.LoginCnComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule,
        _frontend_shared_ui__WEBPACK_IMPORTED_MODULE_1__.SharedUiFormModule] }); })();


/***/ })

}]);
//# sourceMappingURL=libs_feature_login_src_index_ts.js.map