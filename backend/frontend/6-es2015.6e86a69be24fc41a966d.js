(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Ndow:function(t,e,s){"use strict";s.r(e);var n=s("8Y7J");class r{}var l=s("pMnS"),o=s("s7LF");class a{constructor(t,e,s,n,r,l){this.activatedRoute=t,this.fb=e,this.adminServ=s,this.toastServ=n,this.router=r,this.allServ=l}ngOnInit(){this.resetkeyId=this.activatedRoute.snapshot.params.id,this.setNewPasswordForm=this.fb.group({newpassword:["",o.z.compose([o.z.required,o.z.minLength(3)])]}),this.allServ.getPrevRoute().subscribe(t=>{this.currentRoute=t})}submitNewPassword(t){this.adminServ.resetNewPassword({resetkey:this.resetkeyId,password:t.newpassword}).subscribe(t=>{200===t.code?(this.toastServ.success(t.message,"",{timeOut:1e3}),this.router.navigate([this.currentRoute])):400===t.code&&this.toastServ.error("Failed to reset password",t.message,{timeOut:1e3})},t=>{this.toastServ.error("Server - Error",t.error.message,{timeOut:1e3})})}}var i=s("iInd"),u=s("gG8M"),c=s("EApP"),h=s("nnH5"),p=n.Cb({encapsulation:0,styles:[[".createPasswordWrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:center;align-items:center}.createPasswordWrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]{padding:1em;border:1px solid #d3d3d3;border-radius:10px;margin:5px}.createPasswordWrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.createPasswordWrapper[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .btnSbt[_ngcontent-%COMP%]{width:100px}"]],data:{}});function d(t){return n.ac(0,[(t()(),n.Eb(0,0,null,null,16,"div",[["class","createPasswordWrapper"]],null,null,null,null,null)),(t()(),n.Eb(1,0,null,null,15,"div",[["class","main-content col-lg-6 col-md-6 col-sm-12"]],null,null,null,null,null)),(t()(),n.Eb(2,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(t,e,s){var r=!0;return"submit"===e&&(r=!1!==n.Qb(t,4).onSubmit(s)&&r),"reset"===e&&(r=!1!==n.Qb(t,4).onReset()&&r),r}),null,null)),n.Db(3,16384,null,0,o.E,[],null,null),n.Db(4,540672,null,0,o.k,[[8,null],[8,null]],{form:[0,"form"]},null),n.Vb(2048,null,o.d,null,[o.k]),n.Db(6,16384,null,0,o.s,[[4,o.d]],null,null),(t()(),n.Eb(7,0,null,null,1,"label",[],null,null,null,null,null)),(t()(),n.Yb(-1,null,["Enter New Password"])),(t()(),n.Eb(9,0,null,null,5,"input",[["class","form-control"],["formControlName","newpassword"],["placeholder"," New Password"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(t,e,s){var r=!0;return"input"===e&&(r=!1!==n.Qb(t,10)._handleInput(s.target.value)&&r),"blur"===e&&(r=!1!==n.Qb(t,10).onTouched()&&r),"compositionstart"===e&&(r=!1!==n.Qb(t,10)._compositionStart()&&r),"compositionend"===e&&(r=!1!==n.Qb(t,10)._compositionEnd(s.target.value)&&r),r}),null,null)),n.Db(10,16384,null,0,o.e,[n.N,n.n,[2,o.a]],null,null),n.Vb(1024,null,o.p,(function(t){return[t]}),[o.e]),n.Db(12,671744,null,0,o.j,[[3,o.d],[8,null],[8,null],[6,o.p],[2,o.C]],{name:[0,"name"]},null),n.Vb(2048,null,o.q,null,[o.j]),n.Db(14,16384,null,0,o.r,[[4,o.q]],null,null),(t()(),n.Eb(15,0,null,null,1,"button",[["class","btn btn-sign-in btnSbt"]],[[8,"disabled",0]],[[null,"click"]],(function(t,e,s){var n=!0,r=t.component;return"click"===e&&(n=!1!==r.submitNewPassword(r.setNewPasswordForm.value)&&n),n}),null,null)),(t()(),n.Yb(-1,null,[" Submit "]))],(function(t,e){t(e,4,0,e.component.setNewPasswordForm),t(e,12,0,"newpassword")}),(function(t,e){var s=e.component;t(e,2,0,n.Qb(e,6).ngClassUntouched,n.Qb(e,6).ngClassTouched,n.Qb(e,6).ngClassPristine,n.Qb(e,6).ngClassDirty,n.Qb(e,6).ngClassValid,n.Qb(e,6).ngClassInvalid,n.Qb(e,6).ngClassPending),t(e,9,0,n.Qb(e,14).ngClassUntouched,n.Qb(e,14).ngClassTouched,n.Qb(e,14).ngClassPristine,n.Qb(e,14).ngClassDirty,n.Qb(e,14).ngClassValid,n.Qb(e,14).ngClassInvalid,n.Qb(e,14).ngClassPending),t(e,15,0,s.setNewPasswordForm.invalid)}))}function b(t){return n.ac(0,[(t()(),n.Eb(0,0,null,null,1,"app-cp",[],null,null,null,d,p)),n.Db(1,114688,null,0,a,[i.a,o.g,u.a,c.j,i.k,h.a],null,null)],(function(t,e){t(e,1,0)}),null)}var g=n.Ab("app-cp",a,b,{},{},[]),v=s("SVse");class m{}s.d(e,"CreatepasswordModuleNgFactory",(function(){return w}));var w=n.Bb(r,[],(function(t){return n.Nb([n.Ob(512,n.l,n.mb,[[8,[l.a,g]],[3,n.l],n.E]),n.Ob(4608,v.o,v.n,[n.A,[2,v.F]]),n.Ob(4608,o.B,o.B,[]),n.Ob(4608,o.g,o.g,[]),n.Ob(1073742336,v.c,v.c,[]),n.Ob(1073742336,i.o,i.o,[[2,i.t],[2,i.k]]),n.Ob(1073742336,m,m,[]),n.Ob(1073742336,o.A,o.A,[]),n.Ob(1073742336,o.m,o.m,[]),n.Ob(1073742336,o.x,o.x,[]),n.Ob(1073742336,r,r,[]),n.Ob(1024,i.i,(function(){return[[{path:"",children:[{path:"",component:a}]}]]}),[])])}))},gG8M:function(t,e,s){"use strict";s.d(e,"a",(function(){return i}));var n=s("IheW"),r=s("AytR"),l=s("2Vo4"),o=s("8Y7J");const a={headers:new n.g({"Content-Type":"application/json",Authorization:localStorage.getItem("LoggedInUser")})};let i=(()=>{class t{constructor(t){this.http=t,this.baseUrl=r.a.backendBaseUrl+"/api",this.headerText=new l.a(""),this.headerResponse=new l.a(!0)}setHeaderResponse(t){this.headerResponse.next(t)}getHeaderResponse(){return this.headerResponse.asObservable()}setHeaderText(t){this.headerText.next(t)}getHeaderText(){return this.headerText.asObservable()}getSalonsList(t){return this.http.post(this.baseUrl+"/activesalons",t)}getSalonsRequest(t){return this.http.post(this.baseUrl+"/salonsrequest",t,a)}approveSalonRequests(t){return this.http.post(this.baseUrl+"/acceptrequest",t)}getActiveSalonsCount(t){return this.http.post(this.baseUrl+"/salonscount",t)}getActiveUsersCount(t){return this.http.post(this.baseUrl+"/userscount",t,a)}declineSalonRequest(t){return this.http.post(this.baseUrl+"/suspendsalon",t)}getActiveUsersList(t){return this.http.post(this.baseUrl+"/userslist",t)}getAdmincategoriesList(t){return this.http.post(this.baseUrl+"/admin-categories",t,a)}addCategories(t){return this.http.post(this.baseUrl+"/add-categories",t,a)}deleteCategories(t){return this.http.post(this.baseUrl+"/remove-categories",t,a)}getArchivedCategories(t){return this.http.post(this.baseUrl+"/archive-categories",t,a)}getRolesList(t){return this.http.post(this.baseUrl+"/roles",t,a)}addRoles(t){return this.http.post(this.baseUrl+"/add-role",t,a)}deleteRoles(t){return this.http.post(this.baseUrl+"/remove-role",t,a)}updateRoles(t){return this.http.post(this.baseUrl+"/edit-role",t,a)}awakeCategories(t){return this.http.post(this.baseUrl+"/awake-category",t,a)}addServices(t){return this.http.post(this.baseUrl+"/add-service",t,a)}removeServices(t){return this.http.post(this.baseUrl+"/remove-service",t,a)}getServices(t){return this.http.post(this.baseUrl+"/active-services",t,a)}fetchAllUsersCommon(t){return this.http.post(this.baseUrl+"/all-users",t,a)}getUserDetails(t){return this.http.post(this.baseUrl+"/user-detail",t,a)}getSalonDetails(t){return this.http.post(this.baseUrl+"/view-salon",t,a)}addPlans(t){return this.http.post(this.baseUrl+"/create-plan",t)}getPlans(t){return this.http.post(this.baseUrl+"/get-plan",t)}deletePlans(t){return this.http.post(this.baseUrl+"/delete-plan",t)}activeUser(t){return this.http.post(this.baseUrl+"/active-user-check",t,a)}deactiveUser(t){return this.http.post(this.baseUrl+"/deactive-user-check",t,a)}getSalonSubscriptionList(t){return this.http.post(this.baseUrl+"/get-subscriptions",t)}resetNewPassword(t){return this.http.post(this.baseUrl+"/reset-password",t)}}return t.ngInjectableDef=o.ec({factory:function(){return new t(o.fc(n.c))},token:t,providedIn:"root"}),t})()},nnH5:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var n=s("2Vo4"),r=s("8Y7J");let l=(()=>{class t{constructor(){this.currentRoute=new n.a(""),this.previousRoute=new n.a("")}setRoute(t){this.currentRoute.next(t)}getRoute(){return this.currentRoute.asObservable()}setPrevRoute(t){this.previousRoute.next(t)}getPrevRoute(){return this.previousRoute.asObservable()}}return t.ngInjectableDef=r.ec({factory:function(){return new t},token:t,providedIn:"root"}),t})()}}]);