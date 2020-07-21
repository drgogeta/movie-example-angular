function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{SuQF:function(e,n,t){"use strict";t.r(n),t.d(n,"SecurityModule",(function(){return x}));var a,r,o,i,s=t("ofXK"),c=t("tyNb"),l=t("3Pt+"),u=t("XNiG"),f=t("1G5W"),m=t("vkgz"),d=t("z6cu"),b=t("LRne"),p=t("M0ag"),h=function(){function e(){_classCallCheck(this,e),this.listUsers=[{userName:"Jaydon",password:"London2020",firstName:"Jaydon",lastName:"Edwards",age:20},{userName:"string",password:"Liverpool2020",firstName:"Findlay ",lastName:"Shields",age:21},{userName:"Philip",password:"Madrid2020",firstName:"Philip",lastName:"Coleman",age:22},{userName:"Gethin",password:"Barcelona2020",firstName:"Gethin",lastName:"Amin",age:23},{userName:"Zachary",password:"Bogota2020",firstName:"Zachary",lastName:"Short",age:24},{userName:"Marcia",password:"Bristol2020",firstName:"Marcia",lastName:"Cotton",age:25},{userName:"Diogo",password:"Exeter2020",firstName:"Diogo",lastName:"Turner",age:26}]}return _createClass(e,[{key:"validateUser",value:function(e){var n=this.listUsers.find((function(n){return n.password===e.password&&n.userName===e.userName}));return n?Object(b.a)({userName:n.userName,firstName:n.firstName,lastName:n.lastName,age:n.age}):Object(d.a)("User Not Found")}},{key:"saveUser",value:function(e){p.b.setToken(this.makeId(250)),p.b.setUser(e)}},{key:"makeId",value:function(e){for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length,r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*a));return n}}]),e}(),g=t("fXoL"),y=((a=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"login",value:function(e){var n=new h;return n.validateUser(e).pipe(Object(m.a)((function(e){return n.saveUser(e)})))}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275prov=g.Jb({token:a,factory:a.\u0275fac}),a),N=t("dNgK"),w=t("Wp6s"),v=t("kmnG"),k=t("qFsG"),C=t("bTqV"),S=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(r=function(){function e(n,t,a){_classCallCheck(this,e),this.loginService=n,this.router=t,this.snackBar=a,this.unSubscribe=new u.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.loginForm=new l.d({userName:new l.b("",[l.m.required]),password:new l.b("",[l.m.required,l.m.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)])})}},{key:"ngOnDestroy",value:function(){this.unSubscribe.complete()}},{key:"onClick",value:function(e){var n=this;this.loginService.login(e).pipe(Object(f.a)(this.unSubscribe)).subscribe({next:function(){return n.router.navigate(["/movie"])},error:function(e){return n.openSnackBar(e)}})}},{key:"openSnackBar",value:function(e){this.loginForm.reset(),this.snackBar.open(e,"Close",{duration:2e3})}}]),e}(),r.\u0275fac=function(e){return new(e||r)(g.Nb(y),g.Nb(c.b),g.Nb(N.a))},r.\u0275cmp=g.Hb({type:r,selectors:[["app-login"]],features:[g.Ab([y])],decls:18,vars:2,consts:[[1,"login"],[1,"login-container","container"],[1,"login-container-header"],[1,"login-container-body"],[1,"login-container-body__form",3,"formGroup"],["appearance","outline"],["matInput","","type","text","formControlName","userName","placeholder","Placeholder"],["matInput","","type","password","formControlName","password","placeholder","Placeholder"],[1,"login-container-footer"],["mat-raised-button","","color","primary","type","submit",3,"disabled","click"]],template:function(e,n){1&e&&(g.Sb(0,"div",0),g.Sb(1,"mat-card",1),g.Sb(2,"mat-card-header",2),g.Sb(3,"mat-card-title"),g.wc(4,"SIGN IN"),g.Rb(),g.Rb(),g.Sb(5,"mat-card-content",3),g.Sb(6,"form",4),g.Sb(7,"mat-form-field",5),g.Sb(8,"mat-label"),g.wc(9,"User name"),g.Rb(),g.Ob(10,"input",6),g.Rb(),g.Sb(11,"mat-form-field",5),g.Sb(12,"mat-label"),g.wc(13,"Password"),g.Rb(),g.Ob(14,"input",7),g.Rb(),g.Rb(),g.Rb(),g.Sb(15,"mat-card-footer",8),g.Sb(16,"button",9),g.ac("click",(function(){return n.onClick(n.loginForm.value)})),g.wc(17," Login in "),g.Rb(),g.Rb(),g.Rb(),g.Rb()),2&e&&(g.Bb(6),g.jc("formGroup",n.loginForm),g.Bb(10),g.jc("disabled",n.loginForm.invalid))},directives:[w.a,w.e,w.h,w.c,l.n,l.j,l.e,v.b,v.e,k.a,l.a,l.i,l.c,w.d,C.a],styles:[".login[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center;height:100%}.login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:20px;height:300px;width:250px}.login-container-header[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:10px}.login-container-body__form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.login-container-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;margin:10px 0}"]}),r)}],_=((i=function e(){_classCallCheck(this,e)}).\u0275mod=g.Lb({type:i}),i.\u0275inj=g.Kb({factory:function(e){return new(e||i)},imports:[[c.c.forChild(S)],c.c]}),i),x=((o=function e(){_classCallCheck(this,e)}).\u0275mod=g.Lb({type:o}),o.\u0275inj=g.Kb({factory:function(e){return new(e||o)},imports:[[s.c,_,p.c]]}),o)}}]);