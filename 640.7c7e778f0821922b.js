"use strict";(self.webpackChunkwebsites_vrapalis=self.webpackChunkwebsites_vrapalis||[]).push([[640],{4640:(v,c,i)=>{i.r(c),i.d(c,{WebsitesVrapalisFeatureHomeModule:()=>x,websitesVrapalisFeatureHomeRoutes:()=>p});var s=i(9808),l=i(3903),a=i(9833),e=i(5e3),h=i(520),m=i(7404);function f(t,n){if(1&t&&(e.TgZ(0,"a",9),e._UZ(1,"img",10),e.qZA()),2&t){const o=n.$implicit;e.Q6J("href",o.linkUrl,e.LSH),e.xp6(1),e.Q6J("src",o.picture.url,e.LSH)}}function u(t,n){if(1&t&&(e.TgZ(0,"div",6),e.TgZ(1,"h2",7),e._uU(2),e.qZA(),e.YNc(3,f,2,2,"a",8),e.qZA()),2&t){const o=e.oxw(2);e.xp6(2),e.Oqu(o.home.projects.title),e.xp6(1),e.Q6J("ngForOf",o.home.projects.projects)}}function g(t,n){if(1&t&&(e.TgZ(0,"div",1),e.TgZ(1,"div",2),e._UZ(2,"img",3),e._UZ(3,"markdown",4),e.qZA(),e.YNc(4,u,4,2,"div",5),e.qZA()),2&t){const o=e.oxw();e.xp6(2),e.Q6J("src",o.home.profile.url,e.LSH),e.xp6(1),e.Q6J("data",o.home.profileDescription),e.xp6(1),e.Q6J("ngIf",o.home.projects)}}let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["web-home-component"]],inputs:{home:"home"},decls:1,vars:1,consts:[["class","home-wrapper row align-items-start justify-content-center",4,"ngIf"],[1,"home-wrapper","row","align-items-start","justify-content-center"],[1,"profile","col-12","row","justify-content-center"],[1,"col-12","offset-xl-1","col-md-4","col-xl-3","col-xxl-3",3,"src"],[1,"text-md-start","text-center","col-12","col-md-8","col-xl-8","col-xxl-8",3,"data"],["class","projects col-12 row justify-content-center",4,"ngIf"],[1,"projects","col-12","row","justify-content-center"],["markdown",""],["class","col-12 col-md-auto m-3","target","_blank",3,"href",4,"ngFor","ngForOf"],["target","_blank",1,"col-12","col-md-auto","m-3",3,"href"],[3,"src"]],template:function(o,r){1&o&&e.YNc(0,g,5,3,"div",0),2&o&&e.Q6J("ngIf",r.home)},directives:[s.O5,m.lF,s.sg],styles:[".home-wrapper[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:contain;height:400px;opacity:.75}.home-wrapper[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]{margin-top:80px;z-index:100}@media only screen and (max-width: 576px){.home-wrapper[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:280px!important}.home-wrapper[_ngcontent-%COMP%]   .projects[_ngcontent-%COMP%]{margin:50px 0}}@media only screen and (max-width: 768px){.home-wrapper[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:400px}}"]}),t})();function d(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&t){const o=n.$implicit;e.xp6(2),e.Oqu(e.lcZ(3,1,o))}}const p=[{path:"",component:(()=>{class t{constructor(o,r){this.http=o,this.homeService=r,this.home$=this.homeService.getSingle("home"),this.fact$=this.http.get("https://catfact.ninja/fact",{observe:"body"})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(h.eN),e.Y36(a.A0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["web-home"]],decls:4,vars:6,consts:[[3,"home"],[4,"ngIf"]],template:function(o,r){1&o&&(e._UZ(0,"web-home-component",0),e.ALo(1,"async"),e.YNc(2,d,4,3,"ng-container",1),e.ALo(3,"async")),2&o&&(e.Q6J("home",e.lcZ(1,2,r.home$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,4,r.fact$)))},directives:[C,s.O5],pipes:[s.Ov,s.Ts],encapsulation:2}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,l.Bz.forChild(p),m.JP.forChild(),a.mG]]}),t})()}}]);