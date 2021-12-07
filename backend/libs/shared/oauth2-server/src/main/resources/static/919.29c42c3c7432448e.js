"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[919],{5919:(M,d,r)=>{r.r(d),r.d(d,{FeatureRegistrationModule:()=>w});var g=r(6019),u=r(9522),e=r(9133),U=r(559),f=r(6120),T=r(8735),A=r(8053),C=r(8805),x=r(3405),t=r(3668),R=r(607),y=r(1651),l=r(8167),c=r(138),v=r(9112),p=r(86),Z=r(7444);function I(n,s){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.fUtilService.getEmailErrorMessage(o.form))}}function b(n,s){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.fUtilService.getPasswordErrorMessage(o.form))}}function S(n,s){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const o=t.oxw();t.xp6(1),t.Oqu(o.fUtilService.getPasswordErrorMessage(o.form))}}let N=(()=>{class n{constructor(o,i,a,m){this.fb=o,this.fUtilService=i,this.store=a,this.route=m,this.subscribeUntil$=new x.xQ,this.form=this.fb.group({email:["",[e.kI.email,e.kI.required]],password:["",[e.kI.required,e.kI.minLength(6),e.kI.maxLength(12)]],passwordRepeated:["",[e.kI.required,e.kI.minLength(6),e.kI.maxLength(12)]]})}ngOnInit(){this.route.queryParams.pipe((0,T.h)(o=>o.code),(0,A.U)(o=>o.code),(0,C.R)(this.subscribeUntil$)).subscribe(o=>this.store.dispatch((0,f.Wl)({code:o})))}onSubmit(){const o=Object.assign({},this.form.value);this.store.dispatch((0,f.Ar)({user:o}))}isFormNotValid(){var o,i,a;return!(this.form.value.password.length>=6&&(null===(o=this.form)||void 0===o?void 0:o.valid)&&(null===(i=this.form)||void 0===i?void 0:i.value.password)===(null===(a=this.form)||void 0===a?void 0:a.value.passwordRepeated))}ngOnDestroy(){this.subscribeUntil$.next(),this.subscribeUntil$.complete()}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(e.qu),t.Y36(U.oU),t.Y36(R.yh),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["frontend-registration-cn"]],decls:31,vars:5,consts:[[3,"formGroup","ngSubmit"],[1,"col-12","fs-1","text-opacity-50","text-primary","bi-person-plus"],[1,"ms-2"],["appearance","outline",1,"col-12","mt-4"],["matInput","","type","email","placeholder","Email","formControlName","email"],["matSuffix",""],[4,"ngIf"],["appearance","outline",1,"col-12","mt-3"],["matInput","","type","password","placeholder","Password","formControlName","password"],["matInput","","type","password","placeholder","Password Repeated","formControlName","passwordRepeated"],[1,"row","mt-3","justify-content-end"],["mat-button","","color","primary","routerLink","/login","matTooltip","Navigate to login page",1,"col-2"],["mat-raised-button","","color","primary","type","submit",1,"col-3","ms-1",3,"disabled"]],template:function(o,i){if(1&o&&(t.TgZ(0,"frontend-login-form-cn"),t.TgZ(1,"form",0),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(2,"h1",1),t.TgZ(3,"span",2),t._uU(4,"Registration"),t.qZA(),t.qZA(),t.TgZ(5,"mat-form-field",3),t.TgZ(6,"mat-label"),t._uU(7,"Email"),t.qZA(),t._UZ(8,"input",4),t.TgZ(9,"mat-icon",5),t._uU(10,"alternate_email"),t.qZA(),t.YNc(11,I,2,1,"mat-error",6),t.qZA(),t.TgZ(12,"mat-form-field",7),t.TgZ(13,"mat-label"),t._uU(14,"Password"),t.qZA(),t._UZ(15,"input",8),t.TgZ(16,"mat-icon",5),t._uU(17,"password"),t.qZA(),t.YNc(18,b,2,1,"mat-error",6),t.qZA(),t.TgZ(19,"mat-form-field",7),t.TgZ(20,"mat-label"),t._uU(21,"Password"),t.qZA(),t._UZ(22,"input",9),t.TgZ(23,"mat-icon",5),t._uU(24,"password"),t.qZA(),t.YNc(25,S,2,1,"mat-error",6),t.qZA(),t.TgZ(26,"div",10),t.TgZ(27,"a",11),t._uU(28,"Login"),t.qZA(),t.TgZ(29,"button",12),t._uU(30," Submit "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o){let a,m,h;t.xp6(1),t.Q6J("formGroup",i.form),t.xp6(10),t.Q6J("ngIf",null==(a=i.form.get("email"))?null:a.invalid),t.xp6(7),t.Q6J("ngIf",null==(m=i.form.get("password"))?null:m.invalid),t.xp6(7),t.Q6J("ngIf",null==(h=i.form.get("password"))?null:h.invalid),t.xp6(4),t.Q6J("disabled",i.isFormNotValid())}},directives:[y.k,e._Y,e.JL,e.sg,l.KE,l.hX,c.Nt,e.Fj,e.JJ,e.u,v.Hw,l.R9,g.O5,p.zs,u.yS,Z.gM,p.lW,l.TO],encapsulation:2}),n})();var J=r(764),F=r(4522);let w=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.ez,F.JF,e.UX,J.dZ,u.Bz.forChild([{path:"",pathMatch:"full",component:N}]),l.lN,v.Ps,p.ot,c.c,Z.AV]]}),n})()}}]);