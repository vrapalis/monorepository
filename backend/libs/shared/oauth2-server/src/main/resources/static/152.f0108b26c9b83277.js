"use strict";(self.webpackChunkui=self.webpackChunkui||[]).push([[152],{9152:(b,d,e)=>{e.r(d),e.d(d,{FeatureLoginModule:()=>E});var m=e(9808),p=e(7587),i=e(3075),g=e(520),f=e(8185),h=e(3850),o=e(5e3),C=e(6727),L=e(6397),l=e(7322),v=e(7531),Z=e(5245),c=e(7423),T=e(7238);function w(r,s){if(1&r&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&r){const t=o.oxw();o.xp6(1),o.Oqu(t.getEmailErrorMessage())}}function y(r,s){if(1&r&&(o.TgZ(0,"mat-error"),o._uU(1),o.qZA()),2&r){const t=o.oxw();o.xp6(1),o.Oqu(t.getPasswordErrorMessage())}}function A(r,s){if(1&r&&o._UZ(0,"a",16),2&r){const t=s.$implicit;o.Tol(t.classes),o.Q6J("matTooltip","Login with"+t.registrationId)("href","/oauth2/authorization/"+t.registrationId,o.LSH)}}let x=(()=>{class r{constructor(t,n,a,u,U){this.fb=t,this.http=n,this.store=a,this.snackService=u,this.envService=U,this.form=new i.cw({}),this.providers$=this.store.select(h.js)}onSubmit(){const t=(new g.LE).set("email",this.form.value.email).set("password",this.form.value.password);this.http.post(`${this.envService.env.host}/login`,t.toString(),{headers:(new g.WM).set("Content-Type","application/x-www-form-urlencoded")}).subscribe(console.log,n=>{n.url&&!n.url.includes("/login?error")?window.location.href=n.url:this.snackService.open("Error","Login error.")})}getEmailErrorMessage(){var t,n;return(null===(t=this.form.get("email"))||void 0===t?void 0:t.hasError("required"))?"You must enter a value":(null===(n=this.form.get("email"))||void 0===n?void 0:n.hasError("email"))?"Not a valid email":""}getPasswordErrorMessage(){var t,n,a;return(null===(t=this.form.get("password"))||void 0===t?void 0:t.hasError("required"))?"You must enter a value":(null===(n=this.form.get("password"))||void 0===n?void 0:n.hasError("minlength"))?"Should be min 6 length":(null===(a=this.form.get("password"))||void 0===a?void 0:a.hasError("maxlength"))?"Should be max 12 length":""}ngOnInit(){this.store.dispatch((0,h.Kr)()),this.form=this.fb.group({email:["",[i.kI.email,i.kI.required]],password:["",[i.kI.minLength(6),i.kI.maxLength(12),i.kI.required]]})}}return r.\u0275fac=function(t){return new(t||r)(o.Y36(i.qu),o.Y36(g.eN),o.Y36(C.yh),o.Y36(f.wM),o.Y36(f.dW))},r.\u0275cmp=o.Xpm({type:r,selectors:[["frontend-login-cn"]],decls:30,vars:7,consts:[[3,"formGroup","ngSubmit"],[1,"col-12","fs-1","text-opacity-50","text-primary","bi-door-open"],[1,"ms-2"],["appearance","outline",1,"col-12","mt-4"],["matInput","","type","email","placeholder","Email","formControlName","email"],["matSuffix",""],[4,"ngIf"],["appearance","outline",1,"col-12","mt-3"],["matInput","","type","password","placeholder","Password","formControlName","password"],[1,"row","col-12","mt-3","justify-content-end"],["mat-button","","color","primary","routerLink","/registration","matTooltip","Navigate to registration page",1,"col-4","col-lg-2"],["mat-raised-button","","color","primary","type","submit",1,"col-6","col-lg-3","ms-1",3,"disabled"],[1,"row","col-12","justify-content-end","mt-3"],["mat-button","","color","accent","routerLink","/forgot-password","matTooltip","Navigate to forgot password page",1,"col-6","col-lg-3"],[1,"row","col-12","mt-4","justify-content-end"],["mat-icon-button","","class","sn-icon col-1 text-primary fs-2 ms-3",3,"matTooltip","class","href",4,"ngFor","ngForOf"],["mat-icon-button","",1,"sn-icon","col-1","text-primary","fs-2","ms-3",3,"matTooltip","href"]],template:function(t,n){if(1&t&&(o.TgZ(0,"frontend-login-form-cn"),o.TgZ(1,"form",0),o.NdJ("ngSubmit",function(){return n.onSubmit()}),o.TgZ(2,"h1",1),o.TgZ(3,"span",2),o._uU(4,"Login"),o.qZA(),o.qZA(),o.TgZ(5,"mat-form-field",3),o.TgZ(6,"mat-label"),o._uU(7,"Email"),o.qZA(),o._UZ(8,"input",4),o.TgZ(9,"mat-icon",5),o._uU(10,"alternate_email"),o.qZA(),o.YNc(11,w,2,1,"mat-error",6),o.qZA(),o.TgZ(12,"mat-form-field",7),o.TgZ(13,"mat-label"),o._uU(14,"Password"),o.qZA(),o._UZ(15,"input",8),o.TgZ(16,"mat-icon",5),o._uU(17,"password"),o.qZA(),o.YNc(18,y,2,1,"mat-error",6),o.qZA(),o.TgZ(19,"div",9),o.TgZ(20,"a",10),o._uU(21,"Registration"),o.qZA(),o.TgZ(22,"button",11),o._uU(23," Submit "),o.qZA(),o.qZA(),o.TgZ(24,"div",12),o.TgZ(25,"a",13),o._uU(26,"Forgot Password"),o.qZA(),o.qZA(),o.TgZ(27,"div",14),o.YNc(28,A,1,4,"a",15),o.ALo(29,"async"),o.qZA(),o.qZA(),o.qZA()),2&t){let a,u;o.xp6(1),o.Q6J("formGroup",n.form),o.xp6(10),o.Q6J("ngIf",null==(a=n.form.get("email"))?null:a.invalid),o.xp6(7),o.Q6J("ngIf",null==(u=n.form.get("password"))?null:u.invalid),o.xp6(4),o.Q6J("disabled",!n.form.valid),o.xp6(6),o.Q6J("ngForOf",o.lcZ(29,5,n.providers$))}},directives:[L.k,i._Y,i.JL,i.sg,l.KE,l.hX,v.Nt,i.Fj,i.JJ,i.u,Z.Hw,l.R9,m.O5,c.zs,p.yS,T.gM,c.lW,m.sg,l.TO],pipes:[m.Ov],styles:[".sn-icon[_ngcontent-%COMP%]:hover{font-size:2.5em!important;transition:.1s all ease-in}"]}),r})();var S=e(9043);let E=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[m.ez,p.Bz.forChild([{path:"",pathMatch:"full",component:x}]),i.UX,v.c,l.lN,Z.Ps,c.ot,T.AV,S.dZ]]}),r})()}}]);