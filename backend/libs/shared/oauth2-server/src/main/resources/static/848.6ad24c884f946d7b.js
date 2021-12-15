"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[848],{4848:(A,g,i)=>{i.r(g),i.d(g,{FeatureLoginModule:()=>C});var c=i(6019),f=i(9522),a=i(9133),m=i(4522),o=i(3668),v=i(1651),s=i(8167),d=i(138),p=i(9112),u=i(86),h=i(7444);function T(n,l){if(1&n&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&n){const t=o.oxw();o.xp6(1),o.Oqu(t.getEmailErrorMessage())}}function b(n,l){if(1&n&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&n){const t=o.oxw();o.xp6(1),o.Oqu(t.getPasswordErrorMessage())}}let w=(()=>{class n{constructor(t,r){this.fb=t,this.http=r,this.form=t.group({email:["",[a.kI.email,a.kI.required]],password:["",[a.kI.minLength(6),a.kI.maxLength(12),a.kI.required]]})}onSubmit(){const t=(new m.LE).set("email",this.form.value.email).set("password",this.form.value.password);this.http.post("http://127.0.0.1:8080/login",t.toString(),{headers:(new m.WM).set("Content-Type","application/x-www-form-urlencoded")}).subscribe(console.log,r=>{r.url&&(window.location.href=r.url)})}getEmailErrorMessage(){var t,r;return(null===(t=this.form.get("email"))||void 0===t?void 0:t.hasError("required"))?"You must enter a value":(null===(r=this.form.get("email"))||void 0===r?void 0:r.hasError("email"))?"Not a valid email":""}getPasswordErrorMessage(){var t,r,e;return(null===(t=this.form.get("password"))||void 0===t?void 0:t.hasError("required"))?"You must enter a value":(null===(r=this.form.get("password"))||void 0===r?void 0:r.hasError("minlength"))?"Should be min 6 length":(null===(e=this.form.get("password"))||void 0===e?void 0:e.hasError("maxlength"))?"Should be max 12 length":""}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(a.qu),o.Y36(m.eN))},n.\u0275cmp=o.Xpm({type:n,selectors:[["frontend-login-cn"]],decls:32,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"col-12","fs-1","text-opacity-50","text-primary","bi-door-open"],[1,"ms-2"],["appearance","outline",1,"col-12","mt-4"],["matInput","","type","email","placeholder","Email","formControlName","email"],["matSuffix",""],[4,"ngIf"],["appearance","outline",1,"col-12","mt-3"],["matInput","","type","password","placeholder","Password","formControlName","password"],[1,"row","col-12","mt-3","justify-content-end"],["mat-button","","color","primary","routerLink","/registration","matTooltip","Navigate to registration page",1,"col-4","col-lg-2"],["mat-raised-button","","color","primary","type","submit",1,"col-6","col-lg-3","ms-1",3,"disabled"],[1,"row","col-12","justify-content-end","mt-3"],["mat-button","","color","accent","routerLink","/forgot-password","matTooltip","Navigate to forgot password page",1,"col-6","col-lg-3"],[1,"row","col-12","mt-4","justify-content-end"],["mat-icon-button","","matTooltip","Login with Google","href","/oauth2/authorization/google",1,"sn-icon","col-1","bi-google","text-primary","fs-2"],["mat-icon-button","","matTooltip","Login with Facebook","href","/oauth2/authorization/facebook",1,"sn-icon","col-1","bi-facebook","text-info","fs-2","ms-3"],["mat-icon-button","","matTooltip","Login with Microsoft","href","/oauth2/authorization/azuread",1,"sn-icon","col-1","bi-microsoft","text-success","fs-2","ms-3"],["mat-icon-button","","matTooltip","Login with Github","href","/oauth2/authorization/github",1,"sn-icon","col-1","bi-github","text-black","fs-2","ms-3"]],template:function(t,r){if(1&t&&(o.TgZ(0,"frontend-login-form-cn"),o.TgZ(1,"form",0),o.NdJ("ngSubmit",function(){return r.onSubmit()}),o.TgZ(2,"h1",1),o.TgZ(3,"span",2),o._uU(4,"Login"),o.qZA(),o.qZA(),o.TgZ(5,"mat-form-field",3),o.TgZ(6,"mat-label"),o._uU(7,"Email"),o.qZA(),o._UZ(8,"input",4),o.TgZ(9,"mat-icon",5),o._uU(10,"alternate_email"),o.qZA(),o.YNc(11,T,2,1,"mat-error",6),o.qZA(),o.TgZ(12,"mat-form-field",7),o.TgZ(13,"mat-label"),o._uU(14,"Password"),o.qZA(),o._UZ(15,"input",8),o.TgZ(16,"mat-icon",5),o._uU(17,"password"),o.qZA(),o.YNc(18,b,2,1,"mat-error",6),o.qZA(),o.TgZ(19,"div",9),o.TgZ(20,"a",10),o._uU(21,"Registration"),o.qZA(),o.TgZ(22,"button",11),o._uU(23,"Submit"),o.qZA(),o.qZA(),o.TgZ(24,"div",12),o.TgZ(25,"a",13),o._uU(26,"Forgot Password"),o.qZA(),o.qZA(),o.TgZ(27,"div",14),o._UZ(28,"a",15),o._UZ(29,"a",16),o._UZ(30,"a",17),o._UZ(31,"a",18),o.qZA(),o.qZA(),o.qZA()),2&t){let e,Z;o.xp6(1),o.Q6J("formGroup",r.form),o.xp6(10),o.Q6J("ngIf",null==(e=r.form.get("email"))?null:e.invalid),o.xp6(7),o.Q6J("ngIf",null==(Z=r.form.get("password"))?null:Z.invalid),o.xp6(4),o.Q6J("disabled",!r.form.valid)}},directives:[v.k,a._Y,a.JL,a.sg,s.KE,s.hX,d.Nt,a.Fj,a.JJ,a.u,p.Hw,s.R9,c.O5,u.zs,f.yS,h.gM,u.lW,s.TO],styles:[".sn-icon[_ngcontent-%COMP%]:hover{font-size:2.5em!important;transition:.1s all ease-in}"]}),n})();var L=i(764);let C=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[c.ez,f.Bz.forChild([{path:"",pathMatch:"full",component:w}]),a.UX,d.c,s.lN,p.Ps,u.ot,h.AV,L.dZ]]}),n})()}}]);