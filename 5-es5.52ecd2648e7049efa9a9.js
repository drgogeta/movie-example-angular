function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,a=new Array(t);i<t;i++)a[i]=e[i];return a}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var a=t[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{EA54:function(e,t,i){"use strict";i.r(t),i.d(t,"MoviesModule",(function(){return q}));var a,n,o=i("ofXK"),r=i("vxfF"),c=i("PCNd"),s=i("tyNb"),l=i("3Pt+"),b=["movie","series","episode"],d=i("IzEk"),u=i("fXoL"),v=i("tk/3"),p=i("z6cu"),f=i("LRne"),m=i("AytR"),h=i("eIep"),g=((a=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"searchMovies$",value:function(e,t,i,a){var n="".concat(m.a.url).concat(m.a.apikey),o=(new v.c).set("s",e).set("type",t).set("y",i).set("page ",a.toString());return this.http.get(n,{params:o}).pipe(Object(h.a)((function(e){return e.Search?Object(f.a)(e):Object(p.a)("Movie not found!")})))}},{key:"getDetailMovie$",value:function(e){var t="".concat(m.a.url).concat(m.a.apikey),i=(new v.c).set("i",e);return this.http.get(t,{params:i})}}]),e}()).\u0275fac=function(e){return new(e||a)(u.Wb(v.a))},a.\u0275prov=u.Jb({token:a,factory:a.\u0275fac,providedIn:"root"}),a),y=i("2Vo4"),S=((n=function(){function e(){_classCallCheck(this,e),this.favoriteMovies=new y.a([]),this.movies=new y.a({Search:[]});var t=JSON.parse(localStorage.getItem("favoriteMovies"));this.favoriteMovies.next(t||[])}return _createClass(e,[{key:"getFavoriteMovies",value:function(){return this.favoriteMovies.asObservable()}},{key:"addFavoriteMovies",value:function(e){this.favoriteMovies.getValue();var t=[].concat(_toConsumableArray(this.favoriteMovies.getValue()),[e]);localStorage.setItem("favoriteMovies",JSON.stringify(t)),this.favoriteMovies.next(t)}},{key:"removeFavoriteMovies",value:function(e){var t=this.favoriteMovies.getValue().filter((function(t){return t.imdbID!==e.imdbID}));localStorage.setItem("favoriteMovies",JSON.stringify(t)),this.favoriteMovies.next(t)}},{key:"getMovies",value:function(){return this.movies.asObservable()}},{key:"addMovies",value:function(e){this.movies.next(e)}}]),e}()).\u0275fac=function(e){return new(e||n)},n.\u0275prov=u.Jb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),_=i("dNgK"),w=i("kmnG"),R=i("qFsG"),k=i("d3UM"),M=i("FKr1"),C=i("bTqV"),O=i("Wp6s"),x=i("Qu3c"),P=i("NFeN");function B(e,t){if(1&e&&(u.Qb(0),u.Sb(1,"mat-option",11),u.wc(2),u.Rb(),u.Pb()),2&e){var i=t.$implicit;u.Bb(1),u.jc("value",i),u.Bb(1),u.xc(i)}}function I(e,t){if(1&e){var i=u.Tb();u.Sb(0,"mat-card",14),u.Sb(1,"div",15),u.ac("click",(function(){u.oc(i);var e=t.$implicit;return u.ec(2).viewDetail(e.imdbID)})),u.Ob(2,"img",16),u.Sb(3,"mat-card-content",17),u.Sb(4,"p"),u.wc(5),u.Rb(),u.Sb(6,"p"),u.wc(7),u.Rb(),u.Rb(),u.Rb(),u.Sb(8,"mat-card-actions",18),u.Sb(9,"button",19),u.ac("click",(function(){u.oc(i);var e=t.$implicit;return u.ec(2).removeFavorite(e)})),u.Sb(10,"mat-icon",20),u.wc(11,"remove"),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var a=t.$implicit;u.jc("matTooltip",a.Title),u.Bb(2),u.jc("src",a.Poster,u.pc),u.Bb(3),u.xc(a.Year),u.Bb(2),u.xc(a.Type)}}function j(e,t){if(1&e&&(u.Sb(0,"div",12),u.uc(1,I,12,4,"mat-card",13),u.Rb()),2&e){var i=t.ngIf;u.Bb(1),u.jc("ngForOf",i)}}function F(e,t){if(1&e){var i=u.Tb();u.Sb(0,"mat-card",14),u.Sb(1,"div",15),u.ac("click",(function(){u.oc(i);var e=t.$implicit;return u.ec(2).viewDetail(e.imdbID)})),u.Ob(2,"img",16),u.Sb(3,"mat-card-content",17),u.Sb(4,"p"),u.wc(5),u.Rb(),u.Sb(6,"p"),u.wc(7),u.Rb(),u.Rb(),u.Rb(),u.Sb(8,"mat-card-actions",18),u.Sb(9,"button",19),u.ac("click",(function(){u.oc(i);var e=t.$implicit;return u.ec(2).addFavorite(e)})),u.Sb(10,"mat-icon",20),u.wc(11," add_circle_outline "),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var a=t.$implicit;u.jc("matTooltip",a.Title),u.Bb(2),u.jc("src",a.Poster,u.pc),u.Bb(3),u.xc(a.Year),u.Bb(2),u.xc(a.Type)}}function T(e,t){if(1&e&&(u.Sb(0,"div",21),u.uc(1,F,12,4,"mat-card",13),u.Rb()),2&e){var i=t.ngIf;u.Bb(1),u.jc("ngForOf",i.Search)}}var A,N=((A=function(){function e(t,i,a,n){_classCallCheck(this,e),this.service=t,this.state=i,this.router=a,this.snackBar=n,this.typeMovies=b,this.page=1}return _createClass(e,[{key:"ngOnInit",value:function(){this.favoriteMovies$=this.state.getFavoriteMovies(),this.movies$=this.state.getMovies(),this.searchForm=new l.d({search:new l.b("",[l.m.required]),type:new l.b,year:new l.b})}},{key:"onSearch",value:function(e){var t=this,i=e.search,a=e.type,n=e.year;this.service.searchMovies$(i,a,n,this.page).pipe(Object(d.a)(1)).subscribe({next:function(e){return t.state.addMovies(e)},error:function(e){return t.openSnackBar(e)}})}},{key:"addFavorite",value:function(e){try{this.state.addFavoriteMovies(e),this.openSnackBar("Movie add successful")}catch(t){this.openSnackBar(t)}}},{key:"removeFavorite",value:function(e){this.state.removeFavoriteMovies(e),this.openSnackBar("Movie remove successful")}},{key:"viewDetail",value:function(e){this.router.navigate(["/movie/detail/"+e])}},{key:"openSnackBar",value:function(e){this.searchForm.reset(),this.snackBar.open(e,"Close",{duration:2e3})}}]),e}()).\u0275fac=function(e){return new(e||A)(u.Nb(g),u.Nb(S),u.Nb(s.b),u.Nb(_.a))},A.\u0275cmp=u.Hb({type:A,selectors:[["app-list"]],decls:29,vars:9,consts:[[1,"list-movie"],[1,"list-movie-container","container"],[1,"list-movie-container-form",3,"formGroup"],["appearance","outline",1,"list-movie-container-form__input"],["matInput","","type","text","formControlName","search","placeholder","Movie"],["formControlName","type"],[4,"ngFor","ngForOf"],["matInput","","type","text","formControlName","year","placeholder","Placeholder"],["mat-flat-button","","type","submit","color","primary",1,"list-movie-container-form__button",3,"disabled","click"],["class","list-movie-container-favorites","cdkScrollable","",4,"ngIf"],["class","list-movie-container-result",4,"ngIf"],[3,"value"],["cdkScrollable","",1,"list-movie-container-favorites"],["class","movie-card",3,"matTooltip",4,"ngFor","ngForOf"],[1,"movie-card",3,"matTooltip"],["matRipple","","matRippleColor","primary",3,"click"],["mat-card-image","","onerror","this.src='assets/img/download.png'",1,"movie-card__img",3,"src"],[1,"movie-card__content"],[1,"movie-card__actions"],["mat-button","","color","accent",3,"click"],["aria-hidden","false","aria-label","add-favorites"],[1,"list-movie-container-result"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"form",2),u.Sb(3,"mat-form-field",3),u.Sb(4,"mat-label"),u.wc(5,"Name movie"),u.Rb(),u.Ob(6,"input",4),u.Rb(),u.Sb(7,"mat-form-field",3),u.Sb(8,"mat-label"),u.wc(9,"Type"),u.Rb(),u.Sb(10,"mat-select",5),u.Sb(11,"mat-option"),u.wc(12,"-- None --"),u.Rb(),u.uc(13,B,3,2,"ng-container",6),u.Rb(),u.Rb(),u.Sb(14,"mat-form-field",3),u.Sb(15,"mat-label"),u.wc(16,"Year"),u.Rb(),u.Ob(17,"input",7),u.Rb(),u.Sb(18,"div"),u.Sb(19,"button",8),u.ac("click",(function(){return t.onSearch(t.searchForm.value)})),u.wc(20," Search "),u.Rb(),u.Rb(),u.Rb(),u.Sb(21,"h2"),u.wc(22,"Your Favorite Movies"),u.Rb(),u.uc(23,j,2,1,"div",9),u.fc(24,"async"),u.Sb(25,"h2"),u.wc(26,"Films Found"),u.Rb(),u.uc(27,T,2,1,"div",10),u.fc(28,"async"),u.Rb(),u.Rb()),2&e&&(u.Bb(2),u.jc("formGroup",t.searchForm),u.Bb(11),u.jc("ngForOf",t.typeMovies),u.Bb(6),u.jc("disabled",t.searchForm.invalid),u.Bb(4),u.jc("ngIf",u.gc(24,5,t.favoriteMovies$)),u.Bb(4),u.jc("ngIf",u.gc(28,7,t.movies$)))},directives:[l.n,l.j,l.e,w.b,w.e,R.a,l.a,l.i,l.c,k.a,M.h,o.j,C.a,o.k,r.a,O.a,x.a,M.l,O.f,O.c,O.b,P.a],pipes:[o.b],styles:[".list-movie[_ngcontent-%COMP%]{display:flex;justify-content:center}.list-movie-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:0}.list-movie-container-favorites[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow:auto}.list-movie-container-form[_ngcontent-%COMP%]{align-items:baseline;display:flex;justify-content:center}.list-movie-container-form__input[_ngcontent-%COMP%]{margin:0 10px}.list-movie-container-result[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(5,20%)}.movie-card[_ngcontent-%COMP%]{cursor:pointer;max-width:200px;margin:10px;height:auto;width:100%;padding:0}.movie-card__img[_ngcontent-%COMP%]{max-height:272px}.movie-card__content[_ngcontent-%COMP%]{display:flex}.movie-card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;overflow:hidden;text-overflow:ellipsis;text-align:center;width:200px;white-space:nowrap}.movie-card__actions[_ngcontent-%COMP%]{position:absolute;bottom:5px;right:-10px}.movie-card[_ngcontent-%COMP%]:hover{box-shadow:0 0 15px -5px #b388ff}"],changeDetection:0}),A),$=i("Xa2L");function D(e,t){if(1&e){var i=u.Tb();u.Sb(0,"mat-card",7),u.Sb(1,"div",8),u.Ob(2,"img",9),u.Rb(),u.Sb(3,"div",10),u.Sb(4,"mat-card-header"),u.Sb(5,"mat-card-title"),u.wc(6),u.Rb(),u.Rb(),u.Sb(7,"mat-card-content",11),u.Sb(8,"div"),u.Sb(9,"b"),u.wc(10,"Year:"),u.Rb(),u.wc(11),u.Rb(),u.Sb(12,"div"),u.Sb(13,"b"),u.wc(14,"Released:"),u.Rb(),u.wc(15),u.Rb(),u.Sb(16,"div"),u.Sb(17,"b"),u.wc(18,"Runtime:"),u.Rb(),u.wc(19),u.Rb(),u.Sb(20,"div"),u.Sb(21,"b"),u.wc(22,"Genre:"),u.Rb(),u.wc(23),u.Rb(),u.Sb(24,"div"),u.Sb(25,"b"),u.wc(26,"Director:"),u.Rb(),u.wc(27),u.Rb(),u.Sb(28,"div"),u.Sb(29,"b"),u.wc(30,"Actors:"),u.Rb(),u.wc(31),u.Rb(),u.Sb(32,"div"),u.Sb(33,"b"),u.wc(34,"Awards:"),u.Rb(),u.wc(35),u.Rb(),u.Sb(36,"div"),u.Sb(37,"b"),u.wc(38,"Production:"),u.Rb(),u.wc(39),u.Rb(),u.Sb(40,"div"),u.Sb(41,"p"),u.wc(42),u.Rb(),u.Rb(),u.Sb(43,"div"),u.Sb(44,"p"),u.wc(45),u.Rb(),u.Rb(),u.Rb(),u.Sb(46,"mat-card-actions",12),u.Sb(47,"button",13),u.ac("click",(function(){u.oc(i);var e=t.ngIf;return u.ec().addFavorite(e)})),u.Sb(48,"mat-icon",14),u.wc(49,"add_circle_outline"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var a=t.ngIf;u.Bb(2),u.jc("src",a.Poster,u.pc),u.Bb(4),u.xc(a.Title),u.Bb(5),u.yc(" ",a.Year,""),u.Bb(4),u.yc(" ",a.Released,""),u.Bb(4),u.yc(" ",a.Runtime,""),u.Bb(4),u.yc(" ",a.Genre,""),u.Bb(4),u.yc(" ",a.Director,""),u.Bb(4),u.yc(" ",a.Actors,""),u.Bb(4),u.yc(" ",a.Awards,""),u.Bb(4),u.yc(" ",a.Production,""),u.Bb(3),u.xc(a.Writer),u.Bb(3),u.xc(a.Plot)}}function L(e,t){1&e&&u.Ob(0,"mat-spinner")}var J,E,G,Y,H=((J=function(){function e(t,i,a,n,o){_classCallCheck(this,e),this.activatedRoute=t,this.service=i,this.state=a,this.snackBar=n,this.location=o}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.detailMovie$=this.activatedRoute.params.pipe(Object(h.a)((function(t){var i=t.id;return e.service.getDetailMovie$(i)})))}},{key:"addFavorite",value:function(e){try{this.state.addFavoriteMovies(e),this.openSnackBar("Movie add successful")}catch(t){this.openSnackBar(t)}}},{key:"openSnackBar",value:function(e){this.snackBar.open(e,"Close",{duration:2e3})}},{key:"previousPage",value:function(){this.location.back()}}]),e}()).\u0275fac=function(e){return new(e||J)(u.Nb(s.a),u.Nb(g),u.Nb(S),u.Nb(_.a),u.Nb(o.g))},J.\u0275cmp=u.Hb({type:J,selectors:[["app-detail"]],decls:10,vars:4,consts:[[1,"detail"],[1,"detail-container","container"],[1,"detail-container__previous"],["mat-button","",3,"click"],["aria-hidden","false","aria-label","return"],["class","detail-container-card",4,"ngIf","ngIfElse"],["loading",""],[1,"detail-container-card"],[1,"detail-container-card__img"],["mat-card-image","","onerror","this.src='assets/img/download.png'",3,"src"],[1,"detail-container-card-description"],[1,"detail-container-card-description__detail"],[1,"detail-container-card-description__actions"],["mat-button","","type","submit","color","accent",3,"click"],["aria-hidden","false","aria-label","add-favorites"]],template:function(e,t){if(1&e&&(u.Sb(0,"div",0),u.Sb(1,"div",1),u.Sb(2,"div",2),u.Sb(3,"button",3),u.ac("click",(function(){return t.previousPage()})),u.Sb(4,"mat-icon",4),u.wc(5," keyboard_backspace "),u.Rb(),u.Rb(),u.Rb(),u.uc(6,D,50,12,"mat-card",5),u.fc(7,"async"),u.uc(8,L,1,0,"ng-template",null,6,u.vc),u.Rb(),u.Rb()),2&e){var i=u.mc(9);u.Bb(6),u.jc("ngIf",u.gc(7,2,t.detailMovie$))("ngIfElse",i)}},directives:[C.a,P.a,o.k,O.a,O.f,O.e,O.h,O.c,O.b,$.b],pipes:[o.b],styles:[".detail[_ngcontent-%COMP%]{display:flex;justify-content:center}.detail-container__previous[_ngcontent-%COMP%]{position:absolute;top:65px;left:0}.detail-container-card[_ngcontent-%COMP%]{display:flex}.detail-container-card__img[_ngcontent-%COMP%]{margin-right:30px}.detail-container-card__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:auto}.detail-container-card-description[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-content:center}.detail-container-card-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{overflow:auto;text-overflow:ellipsis;text-align:justify;width:400px;white-space:normal}.detail-container-card-description__detail[_ngcontent-%COMP%]{margin:0}.detail-container-card-description__actions[_ngcontent-%COMP%]{position:absolute;bottom:-20px;right:0}.mat-card-title[_ngcontent-%COMP%]{overflow:auto;text-overflow:ellipsis;text-align:center;width:400px;white-space:normal}"]}),J),K=i("1xRy"),V=[{path:"",component:(E=function e(){_classCallCheck(this,e)},E.\u0275fac=function(e){return new(e||E)},E.\u0275cmp=u.Hb({type:E,selectors:[["app-movie"]],decls:2,vars:0,template:function(e,t){1&e&&(u.Sb(0,"app-template"),u.Ob(1,"router-outlet"),u.Rb())},directives:[K.a,s.d],encapsulation:2}),E),children:[{path:"",redirectTo:"movies",pathMatch:"full"},{path:"movies",component:N},{path:"detail/:id",component:H}]}],W=((Y=function e(){_classCallCheck(this,e)}).\u0275mod=u.Lb({type:Y}),Y.\u0275inj=u.Kb({factory:function(e){return new(e||Y)},imports:[[s.c.forChild(V)],s.c]}),Y),q=((G=function e(){_classCallCheck(this,e)}).\u0275mod=u.Lb({type:G}),G.\u0275inj=u.Kb({factory:function(e){return new(e||G)},providers:[r.c],imports:[[o.c,W,c.a]]}),G)}}]);