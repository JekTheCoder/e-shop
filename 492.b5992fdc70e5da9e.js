"use strict";(self.webpackChunke_shop=self.webpackChunke_shop||[]).push([[492],{3492:(L,l,i)=>{i.r(l),i.d(l,{ItemShopModule:()=>Y});var c=i(6895),a=i(3456),d=i(8505),t=i(4650),u=i(3261),p=i(4859),g=i(215),m=i(4707),f=i(7579),h=i(2722),x=i(4004),_=i(7392);function Z(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"span",5),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(3);return t.KtG(r.collapseToggle())}),t._uU(1,"see less"),t.qZA()}}function v(e,s){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,Z,2,0,"span",4),t.qZA()),2&e){const n=t.oxw(2),o=t.MAs(2);t.xp6(1),t.Q6J("ngIf",!n.collapsed)("ngIfElse",o)}}function A(e,s){if(1&e&&(t.ynx(0),t.TgZ(1,"div",2)(2,"p"),t._uU(3),t.ALo(4,"slice"),t.qZA(),t.YNc(5,v,2,2,"div",0),t.qZA(),t.TgZ(6,"p",3),t._uU(7),t.ALo(8,"date"),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(3),t.Oqu(t.Dn7(4,4,n.answer.content,0,n.length)),t.xp6(2),t.Q6J("ngIf",n.overflowed),t.xp6(2),t.AsE("by ",n.answer.user," on ",t.lcZ(8,8,n.answer.date),"")}}function C(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"span"),t._uU(1,"..."),t.qZA(),t.TgZ(2,"span",5),t.NdJ("click",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.collapseToggle())}),t._uU(3,"see more"),t.qZA()}}let w=(()=>{class e{constructor(){this.MAX_LENGTH=200,this.length=this.MAX_LENGTH}ngOnInit(){this.collapsed=this.overflowed=this.MAX_LENGTH<(this.answer?.content.length||0)}collapseToggle(){this.collapsed=!this.collapsed,this.length=this.collapsed?this.MAX_LENGTH:this.answer.content.length}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-answer"]],inputs:{answer:"answer"},decls:3,vars:1,consts:[[4,"ngIf"],["seeMore",""],[1,""],[1,"author"],["class","text-clickable",3,"click",4,"ngIf","ngIfElse"],[1,"text-clickable",3,"click"]],template:function(n,o){1&n&&(t.YNc(0,A,9,10,"ng-container",0),t.YNc(1,C,4,0,"ng-template",null,1,t.W1O)),2&n&&t.Q6J("ngIf",o.answer)},dependencies:[c.O5,c.OU,c.uU],styles:["[_nghost-%COMP%]{display:block;margin-bottom:10px}[_nghost-%COMP%]   .author[_ngcontent-%COMP%]{color:#8d8d8d}.text-clickable[_ngcontent-%COMP%]{color:#264ae9}p[_ngcontent-%COMP%]{word-break:break-word}"]}),e})();function T(e,s){1&e&&t._UZ(0,"app-answer",11),2&e&&t.Q6J("answer",s.$implicit)}function O(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",13),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(4);return t.KtG(r.seeMoreAnswers())}),t._uU(1,"See more ->"),t.qZA()}}function M(e,s){if(1&e&&(t.ynx(0),t.YNc(1,O,2,0,"div",12),t.BQk()),2&e){t.oxw();const n=t.MAs(5),o=t.oxw(2);t.xp6(1),t.Q6J("ngIf",o.answersSeen<o.question.answers.length)("ngIfElse",n)}}function q(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"div",13),t.NdJ("click",function(){t.CHM(n);const r=t.oxw(3);return t.KtG(r.collapseAnswers())}),t._uU(1,"Collapse All"),t.qZA()}}function y(e,s){if(1&e&&(t.TgZ(0,"div",7),t.YNc(1,T,1,1,"app-answer",8),t.ALo(2,"slice"),t.YNc(3,M,2,2,"ng-container",9),t.YNc(4,q,2,0,"ng-template",null,10,t.W1O),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,2,n.question.answers,0,n.answersSeen)),t.xp6(2),t.Q6J("ngIf",n.overflowed)}}function U(e,s){if(1&e&&(t.TgZ(0,"div",4)(1,"p"),t._uU(2,"Q:"),t.qZA(),t.TgZ(3,"p")(4,"b"),t._uU(5),t.qZA(),t.TgZ(6,"span",5),t._uU(7),t.ALo(8,"date"),t.qZA()(),t.TgZ(9,"p"),t._uU(10,"A:"),t.qZA(),t.YNc(11,y,6,6,"div",6),t.qZA()),2&e){const n=t.oxw(),o=t.MAs(12);t.xp6(5),t.Oqu(n.question.content),t.xp6(2),t.AsE(" by ",n.question.user," on ",t.lcZ(8,5,n.question.date),""),t.xp6(4),t.Q6J("ngIf",0!==n.question.answers.length)("ngIfElse",o)}}function I(e,s){1&e&&(t.TgZ(0,"p"),t._uU(1,"No answers"),t.qZA())}let P=(()=>{class e{constructor(n){this.store=n,this.votes$=new m.t(1),this.unsuscriber$=new f.x,this.vote=null,this.answersSeen=1}set questionSetter(n){this.question=n,this.votes$.next(n.votes)}ngOnInit(){this.overflowed=(this.question?.answers.length||0)>1}ngOnDestroy(){this.unsuscriber$.next(),this.unsuscriber$.complete()}rate(n){n!==this.vote?(this.vote=n,this.store.rateQuestion(this.question.id,n).pipe((0,h.R)(this.unsuscriber$),(0,x.U)(o=>o.votes)).subscribe({next:o=>this.votes$.next(o),error:o=>this.votes$.error(o)})):this.vote=null}seeMoreAnswers(){this.answersSeen+=2,this.answersSeen=Math.min(this.answersSeen,this.question.answers.length)}collapseAnswers(){this.answersSeen=1}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.x))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-question"]],inputs:{questionSetter:["question","questionSetter"]},decls:13,vars:6,consts:[[1,"votes-container"],["mat-icon-button","",3,"color","click"],["class","content",4,"ngIf"],["noAnswers",""],[1,"content"],[1,"author"],["class","answers-container",4,"ngIf","ngIfElse"],[1,"answers-container"],[3,"answer",4,"ngFor","ngForOf"],[4,"ngIf"],["collapse",""],[3,"answer"],["class","text-clickable",3,"click",4,"ngIf","ngIfElse"],[1,"text-clickable",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.rate(!0)}),t.TgZ(2,"mat-icon"),t._uU(3,"keyboard_arrow_up"),t.qZA()(),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"async"),t.qZA(),t.TgZ(7,"button",1),t.NdJ("click",function(){return o.rate(!1)}),t.TgZ(8,"mat-icon"),t._uU(9,"keyboard_arrow_down"),t.qZA()()(),t.YNc(10,U,12,7,"div",2),t.YNc(11,I,2,0,"ng-template",null,3,t.W1O)),2&n&&(t.xp6(1),t.Q6J("color",!0===o.vote?"primary":""),t.xp6(4),t.Oqu(t.lcZ(6,4,o.votes$)),t.xp6(2),t.Q6J("color",!1===o.vote?"primary":""),t.xp6(3),t.Q6J("ngIf",o.question))},dependencies:[c.sg,c.O5,p.lW,_.Hw,w,c.Ov,c.OU,c.uU],styles:["[_nghost-%COMP%]{display:grid;grid-template-columns:30px 1fr;gap:10px;margin-top:20px}.content[_ngcontent-%COMP%]{display:grid;grid-template-columns:40px 1fr;grid-template-rows:40px 1fr}.votes-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.text-clickable[_ngcontent-%COMP%]{color:#264ae9}.author[_ngcontent-%COMP%]{color:#8d8d8d}"]}),e})();const Q=function(e){return{categories:e}};function b(e,s){if(1&e&&(t.TgZ(0,"div",5)(1,"div",6),t._UZ(2,"img",7),t.qZA(),t.TgZ(3,"div",8)(4,"h2"),t._uU(5),t.qZA(),t._UZ(6,"app-star-rating",9),t.TgZ(7,"p",3)(8,"b"),t._uU(9,"Category:"),t.qZA(),t._uU(10,"\xa0 "),t.TgZ(11,"a",10),t._uU(12),t.ALo(13,"titlecase"),t.qZA()(),t.TgZ(14,"h4",3),t._uU(15,"About this product"),t.qZA(),t.TgZ(16,"p"),t._uU(17),t.qZA(),t.TgZ(18,"div",11)(19,"span"),t._uU(20),t.ALo(21,"currency"),t.qZA()()(),t.TgZ(22,"div",12)(23,"div",13)(24,"div",14)(25,"p")(26,"b"),t._uU(27,"Price:"),t.qZA(),t._uU(28),t.ALo(29,"currency"),t.qZA(),t.TgZ(30,"p")(31,"b"),t._uU(32,"Title: "),t.qZA(),t._uU(33),t.qZA(),t.TgZ(34,"p",3)(35,"b"),t._uU(36,"Category:"),t.qZA(),t.TgZ(37,"span"),t._uU(38),t.ALo(39,"titlecase"),t.qZA()()(),t.TgZ(40,"div",15)(41,"button",16),t._uU(42,"Buy Now!"),t.qZA(),t.TgZ(43,"button",16),t._uU(44,"Add to cart"),t.qZA(),t.TgZ(45,"button",16),t._uU(46,"Add to wishes list"),t.qZA()()()()()),2&e){const n=s.ngIf;t.xp6(2),t.Q6J("src",n.image,t.LSH)("alt",n.title),t.xp6(3),t.Oqu(n.title),t.xp6(1),t.Q6J("points",n.rating.rate)("count",n.rating.count),t.xp6(5),t.Q6J("queryParams",t.VKq(22,Q,n.category)),t.xp6(1),t.Oqu(t.lcZ(13,12,n.category)),t.xp6(5),t.Oqu(n.description),t.xp6(3),t.Oqu(t.xi3(21,14,n.price,"USD")),t.xp6(8),t.hij(" ",t.xi3(29,17,n.price,"USD"),""),t.xp6(5),t.hij(" ",n.title,""),t.xp6(5),t.hij(" ",t.lcZ(39,20,n.category),"")}}function S(e,s){1&e&&t._UZ(0,"app-question",18),2&e&&t.Q6J("question",s.$implicit)}function N(e,s){if(1&e&&(t.ynx(0),t.YNc(1,S,1,1,"app-question",17),t.BQk()),2&e){const n=s.ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}const k=[{path:":itemId",pathMatch:"full",component:(()=>{class e{constructor(n,o,r){this.fs=n,this.route=o,this.router=r}ngOnInit(){this.route.paramMap.pipe((0,d.b)(n=>{const o=n.get("itemId");if(!o)return void this.router.navigate(["/notfound"]);const r=Number(o);this.product$=this.fs.getOne(r),this.questions$=this.fs.getQuestions(r)})).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.x),t.Y36(a.gz),t.Y36(a.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-item-shop"]],decls:10,vars:6,consts:[[1,"separator"],[1,"container"],["class","grid",4,"ngIf"],[1,"mt"],[4,"ngIf"],[1,"grid"],[1,"img"],[3,"src","alt"],["id","mid"],[3,"points","count"],["routerLink","/search",3,"queryParams"],[1,"price-container"],["id","last"],[1,"card"],[1,""],[1,"shop-buttons"],["mat-stroked-button",""],[3,"question",4,"ngFor","ngForOf"],[3,"question"]],template:function(n,o){1&n&&(t._UZ(0,"div",0),t.TgZ(1,"div",1),t.YNc(2,b,47,24,"div",2),t.ALo(3,"async"),t._UZ(4,"hr"),t.TgZ(5,"section")(6,"h2",3),t._uU(7,"Customer's Questions"),t.qZA(),t.YNc(8,N,2,1,"ng-container",4),t.ALo(9,"async"),t.qZA()()),2&n&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,2,o.product$)),t.xp6(6),t.Q6J("ngIf",t.lcZ(9,4,o.questions$)))},dependencies:[c.sg,c.O5,a.yS,p.lW,g.T,P,c.Ov,c.rS,c.H9],styles:[".separator[_ngcontent-%COMP%]{padding:40px}.container[_ngcontent-%COMP%]{margin:auto;min-width:400px;max-width:1200px}.grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:400px 5fr 3fr;gap:10px;transition:color .2s ease-in-out}.grid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{display:flex;justify-content:center}.grid[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;object-fit:cover}.grid[_ngcontent-%COMP%]   #mid[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:unset;text-decoration:none}.grid[_ngcontent-%COMP%]   #last[_ngcontent-%COMP%]{padding:20px}.grid[_ngcontent-%COMP%]   #last[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border-radius:10px;height:100%;padding:10px;display:flex;flex-direction:column;justify-content:space-between}.grid[_ngcontent-%COMP%]   #last[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .shop-buttons[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{width:100%}.price-container[_ngcontent-%COMP%]{padding-left:20px;padding-top:20px}.price-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:50px;font-weight:2}.mt[_ngcontent-%COMP%]{margin-top:20px}@media (max-width: 1020px){.grid[_ngcontent-%COMP%]{grid-template-columns:100%;grid-template-rows:600px 1fr auto}}"]}),e})()},{path:"**",pathMatch:"full",redirectTo:"/notfound"}];let J=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(k),a.Bz]}),e})(),Y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.ez,J,p.ot,_.Ps,g.T]}),e})()}}]);