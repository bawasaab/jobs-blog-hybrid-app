(self.webpackChunkjobs_blog_hybrid_app=self.webpackChunkjobs_blog_hybrid_app||[]).push([[5499],{5499:function(t,i,e){"use strict";e.r(i),e.d(i,{ArticleDetailsPageModule:function(){return h}});var n=e(8583),s=e(665),l=e(3083),o=e(7338),r=e(4762),c=e(639),a=e(2275);const d=[{path:"",component:(()=>{class t{constructor(t,i,e,n){this.articlesService=t,this.activatedRoute=i,this.router=e,this.loadingController=n,this.isArticlesFound=!1,this.isArticleIdSetFlag=!1}ngOnInit(){this.activatedRoute.params.subscribe(t=>{this.articleId=t.articleId,console.log("this.articleId",this.articleId),this.isArticleIdSetFlag=!!this.articleId,this.isArticleIdSetFlag&&this.presentLoading()})}presentLoading(){return(0,r.mG)(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({cssClass:"my-custom-class",message:"Please wait..."}),this.getArticleById()})}getArticleById(){return(0,r.mG)(this,void 0,void 0,function*(){yield this.loading.present(),this.articlesService.getArticleById(this.articleId).subscribe(t=>(0,r.mG)(this,void 0,void 0,function*(){var i;console.log("result",t),this.articles=null===(i=null==t?void 0:t.data)||void 0===i?void 0:i.article,this.isArticlesFound=!0}),t=>(0,r.mG)(this,void 0,void 0,function*(){yield this.loading.dismiss(),console.log("ex",t),alert(t.toString())}),()=>(0,r.mG)(this,void 0,void 0,function*(){this.isArticlesFound&&(yield this.loading.dismiss())}))})}}return t.\u0275fac=function(i){return new(i||t)(c.Y36(a.J),c.Y36(o.gz),c.Y36(o.F0),c.Y36(l.HT))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-article-details"]],decls:21,vars:8,consts:[["color","primary"],["slot","start"],["fullscreen",""],["color","dark"],[1,""],["name","person"],["name","chatbubbles"],["name","calendar"],[1,"margin-top-10","text-justify",3,"innerHtml"]],template:function(t,i){1&t&&(c.TgZ(0,"ion-header"),c.TgZ(1,"ion-toolbar",0),c.TgZ(2,"ion-buttons",1),c._UZ(3,"ion-back-button"),c.qZA(),c.TgZ(4,"ion-title"),c._uU(5,"Article Details"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(6,"ion-content",2),c.TgZ(7,"ion-card"),c.TgZ(8,"ion-card-header",3),c.TgZ(9,"ion-card-subtitle",4),c._UZ(10,"ion-icon",5),c._uU(11),c._UZ(12,"ion-icon",6),c._uU(13),c._UZ(14,"ion-icon",7),c._uU(15),c.ALo(16,"date"),c.qZA(),c.TgZ(17,"ion-card-title"),c.TgZ(18,"h1"),c._uU(19),c.qZA(),c.qZA(),c.qZA(),c._UZ(20,"ion-card-content",8),c.qZA(),c.qZA()),2&t&&(c.xp6(11),c.hij(" ",null==i.articles?null:i.articles.author_details.first_name," "),c.xp6(2),c.hij(" ",null==i.articles||null==i.articles.comments?null:i.articles.comments.length," "),c.xp6(2),c.hij(" ",c.xi3(16,5,null==i.articles?null:i.articles.createdAt,"fullDate")," "),c.xp6(4),c.Oqu(null==i.articles?null:i.articles.title),c.xp6(1),c.Q6J("innerHtml",null==i.articles?null:i.articles.description,c.oJD))},directives:[l.Gu,l.sr,l.Sm,l.oU,l.cs,l.wd,l.W2,l.PM,l.Zi,l.tO,l.gu,l.gZ,l.FN],pipes:[n.uU],styles:[".text-center[_ngcontent-%COMP%]{text-align:center}.margin-top-10[_ngcontent-%COMP%]{margin-top:10px}.text-justify[_ngcontent-%COMP%]{text-align:justify}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[o.Bz.forChild(d)],o.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[[n.ez,s.u5,l.Pc,u]]}),t})()}}]);