import{B as R,P as X,Qb as nt,Rb as et,Sa as Q,Sb as it,V as Z,Wa as Y,X as W,Xa as tt,pa as q,xa as J}from"./chunk-K5D4F6CY.js";import{$b as d,Ab as m,Eb as p,Fb as g,Ga as C,Gb as _,Ha as h,La as A,Lc as O,Na as $,Nb as b,Pb as z,Qb as N,Rb as y,Sb as r,Tb as s,Ub as f,Vb as x,Wb as k,Yb as v,a as T,b as P,bc as l,ed as K,ga as V,gb as D,kd as U,lb as c,ld as G,ma as j,mb as S,q as w,ra as I,uc as L,vb as E,wa as F,wc as B,xc as H}from"./chunk-BZTUJXMX.js";var ot=(e,o)=>({$implicit:e,data:o}),at=e=>({$implicit:e});function ct(e,o){}function rt(e,o){if(e&1&&m(0,ct,0,0,"ng-template",1),e&2){let t=l();p("ngTemplateOutlet",t.instance.template)("ngTemplateOutletContext",H(2,ot,t,t.instance.options==null?null:t.instance.options.nzData))}}function st(e,o){e&1&&f(0,"span",6)}function pt(e,o){e&1&&f(0,"span",7)}function lt(e,o){e&1&&f(0,"span",8)}function mt(e,o){e&1&&f(0,"span",9)}function ft(e,o){if(e&1&&(x(0),f(1,"div",14),k()),e&2){let t=l(2);c(),p("innerHTML",t.instance.title,D)}}function dt(e,o){if(e&1&&(x(0),f(1,"div",14),k()),e&2){let t=l(2);c(),p("innerHTML",t.instance.content,D)}}function _t(e,o){}function ut(e,o){if(e&1&&(r(0,"span",13),m(1,_t,0,0,"ng-template",1),s()),e&2){let t=l(2);c(),p("ngTemplateOutlet",o)("ngTemplateOutletContext",B(2,at,t))}}function Ct(e,o){if(e&1&&(r(0,"div",2)(1,"div",2)(2,"div"),m(3,st,1,0,"span",6)(4,pt,1,0,"span",7)(5,lt,1,0,"span",8)(6,mt,1,0,"span",9),r(7,"div",10),m(8,ft,2,1,"ng-container",11),s(),r(9,"div",12),m(10,dt,2,1,"ng-container",11),s(),m(11,ut,2,4,"span",13),s()()()),e&2){let t,i,n=l();c(2),_("ant-notification-notice-with-icon",n.instance.type!=="blank"),c(),b((t=n.instance.type)==="success"?3:t==="info"?4:t==="warning"?5:t==="error"?6:-1),c(5),p("nzStringTemplateOutlet",n.instance.title),c(2),p("nzStringTemplateOutlet",n.instance.content),c(),b((i=n.instance.options==null?null:n.instance.options.nzButton)?11:-1,i)}}function ht(e,o){if(e&1&&(x(0),f(1,"span",15),k()),e&2){let t=o.$implicit;c(),p("nzType",t)}}function gt(e,o){if(e&1&&m(0,ht,2,1,"ng-container",11),e&2){let t=l();p("nzStringTemplateOutlet",t.instance.options==null?null:t.instance.options.nzCloseIcon)}}function zt(e,o){e&1&&f(0,"span",5)}function Nt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","topLeft")}}function yt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","topRight")}}function vt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","bottomLeft")}}function Tt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","bottomRight")}}function bt(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","top")}}function It(e,o){if(e&1){let t=v();r(0,"nz-notification",7),d("destroyed",function(n){C(t);let a=l();return h(a.remove(n.id,n.userAction))}),s()}if(e&2){let t=o.$implicit;p("instance",t)("placement","bottom")}}var St=(()=>{class e extends it{constructor(t){super(t),this.destroyed=new $}ngOnDestroy(){super.ngOnDestroy(),this.instance.onClick.complete()}onClick(t){this.instance.onClick.next(t)}close(){this.destroy(!0)}get state(){if(this.instance.state==="enter")switch(this.placement){case"topLeft":case"bottomLeft":return"enterLeft";case"topRight":case"bottomRight":return"enterRight";case"top":return"enterTop";case"bottom":return"enterBottom";default:return"enterRight"}else return this.instance.state}static{this.\u0275fac=function(i){return new(i||e)(S(O))}}static{this.\u0275cmp=F({type:e,selectors:[["nz-notification"]],inputs:{instance:"instance",index:"index",placement:"placement"},outputs:{destroyed:"destroyed"},exportAs:["nzNotification"],standalone:!0,features:[E,L],decls:7,vars:5,consts:[[1,"ant-notification-notice","ant-notification-notice-closable",3,"click","mouseenter","mouseleave","ngStyle","ngClass"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-notification-notice-content"],["tabindex","0",1,"ant-notification-notice-close",3,"click"],[1,"ant-notification-notice-close-x"],["nz-icon","","nzType","close",1,"ant-notification-close-icon"],["nz-icon","","nzType","check-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-success"],["nz-icon","","nzType","info-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-info"],["nz-icon","","nzType","exclamation-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-warning"],["nz-icon","","nzType","close-circle",1,"ant-notification-notice-icon","ant-notification-notice-icon-error"],[1,"ant-notification-notice-message"],[4,"nzStringTemplateOutlet"],[1,"ant-notification-notice-description"],[1,"ant-notification-notice-btn"],[3,"innerHTML"],["nz-icon","",3,"nzType"]],template:function(i,n){i&1&&(r(0,"div",0),d("@notificationMotion.done",function(u){return n.animationStateChanged.next(u)})("click",function(u){return n.onClick(u)})("mouseenter",function(){return n.onEnter()})("mouseleave",function(){return n.onLeave()}),m(1,rt,1,5,null,1)(2,Ct,12,6,"div",2),r(3,"a",3),d("click",function(){return n.close()}),r(4,"span",4),m(5,gt,1,1,"ng-container")(6,zt,1,0,"span",5),s()()()),i&2&&(p("ngStyle",(n.instance.options==null?null:n.instance.options.nzStyle)||null)("ngClass",(n.instance.options==null?null:n.instance.options.nzClass)||"")("@notificationMotion",n.state),c(),b(n.instance.template?1:2),c(4),b(n.instance.options!=null&&n.instance.options.nzCloseIcon?5:6))},dependencies:[U,K,W,Z,tt,Y,G],encapsulation:2,data:{animation:[Q]}})}}return e})(),M="notification",xt={nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:8,nzPauseOnHover:!0,nzAnimate:!0,nzDirection:"ltr"},kt=(()=>{class e extends et{constructor(t,i){super(t,i),this.dir="ltr",this.instances=[],this.topLeftInstances=[],this.topRightInstances=[],this.bottomLeftInstances=[],this.bottomRightInstances=[],this.topInstances=[],this.bottomInstances=[];let n=this.nzConfigService.getConfigForComponent(M);this.dir=n?.nzDirection||"ltr"}create(t){let i=this.onCreate(t),n=i.options.nzKey,a=this.instances.find(u=>u.options.nzKey===t.options.nzKey);return n&&a?this.replaceNotification(a,i):(this.instances.length>=this.config.nzMaxStack&&(this.instances=this.instances.slice(1)),this.instances=[...this.instances,i]),this.readyInstances(),i}onCreate(t){return t.options=this.mergeOptions(t.options),t.onClose=new w,t.onClick=new w,t}subscribeConfigChange(){this.nzConfigService.getConfigChangeEventForComponent(M).pipe(V(this.destroy$)).subscribe(()=>{this.updateConfig();let t=this.nzConfigService.getConfigForComponent(M);if(t){let{nzDirection:i}=t;this.dir=i||this.dir}})}updateConfig(){this.config=T(T(T({},xt),this.config),this.nzConfigService.getConfigForComponent(M)),this.top=R(this.config.nzTop),this.bottom=R(this.config.nzBottom),this.cdr.markForCheck()}replaceNotification(t,i){t.title=i.title,t.content=i.content,t.template=i.template,t.type=i.type,t.options=i.options}readyInstances(){let t={topLeft:[],topRight:[],bottomLeft:[],bottomRight:[],top:[],bottom:[]};this.instances.forEach(i=>{switch(i.options.nzPlacement){case"topLeft":t.topLeft.unshift(i);break;case"topRight":t.topRight.unshift(i);break;case"bottomLeft":t.bottomLeft.unshift(i);break;case"bottomRight":t.bottomRight.unshift(i);break;case"top":t.top.unshift(i);break;case"bottom":t.bottom.unshift(i);break;default:t.topRight.unshift(i)}}),this.topLeftInstances=t.topLeft,this.topRightInstances=t.topRight,this.bottomLeftInstances=t.bottomLeft,this.bottomRightInstances=t.bottomRight,this.topInstances=t.top,this.bottomInstances=t.bottom,this.cdr.detectChanges()}mergeOptions(t){let{nzDuration:i,nzAnimate:n,nzPauseOnHover:a,nzPlacement:u}=this.config;return T({nzDuration:i,nzAnimate:n,nzPauseOnHover:a,nzPlacement:u},t)}static{this.\u0275fac=function(i){return new(i||e)(S(O),S(X))}}static{this.\u0275cmp=F({type:e,selectors:[["nz-notification-container"]],exportAs:["nzNotificationContainer"],standalone:!0,features:[E,L],decls:18,vars:40,consts:[[1,"ant-notification","ant-notification-topLeft"],[3,"instance","placement"],[1,"ant-notification","ant-notification-topRight"],[1,"ant-notification","ant-notification-bottomLeft"],[1,"ant-notification","ant-notification-bottomRight"],[1,"ant-notification","ant-notification-top"],[1,"ant-notification","ant-notification-bottom"],[3,"destroyed","instance","placement"]],template:function(i,n){i&1&&(r(0,"div",0),N(1,Nt,1,2,"nz-notification",1,z),s(),r(3,"div",2),N(4,yt,1,2,"nz-notification",1,z),s(),r(6,"div",3),N(7,vt,1,2,"nz-notification",1,z),s(),r(9,"div",4),N(10,Tt,1,2,"nz-notification",1,z),s(),r(12,"div",5),N(13,bt,1,2,"nz-notification",1,z),s(),r(15,"div",6),N(16,It,1,2,"nz-notification",1,z),s()),i&2&&(g("top",n.top)("left","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topLeftInstances),c(2),g("top",n.top)("right","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topRightInstances),c(2),g("bottom",n.bottom)("left","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomLeftInstances),c(2),g("bottom",n.bottom)("right","0px"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomRightInstances),c(2),g("top",n.top)("left","50%")("transform","translateX(-50%)"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.topInstances),c(2),g("bottom",n.bottom)("left","50%")("transform","translateX(-50%)"),_("ant-notification-rtl",n.dir==="rtl"),c(),y(n.bottomInstances))},dependencies:[St],encapsulation:2,changeDetection:0})}}return e})();var Mt=0,tn=(()=>{class e extends nt{constructor(t,i,n){super(t,i,n),this.componentPrefix="notification-"}success(t,i,n){return this.create("success",t,i,n)}error(t,i,n){return this.create("error",t,i,n)}info(t,i,n){return this.create("info",t,i,n)}warning(t,i,n){return this.create("warning",t,i,n)}blank(t,i,n){return this.create("blank",t,i,n)}create(t,i,n,a){return this.createInstance({type:t,title:i,content:n},a)}template(t,i){return this.createInstance({template:t},i)}generateMessageId(){return`${this.componentPrefix}-${Mt++}`}createInstance(t,i){return this.container=this.withContainer(kt),this.container.create(P(T({},t),{createdAt:new Date,messageId:i?.nzKey||this.generateMessageId(),options:i}))}static{this.\u0275fac=function(i){return new(i||e)(I(J),I(q),I(A))}}static{this.\u0275prov=j({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{tn as a};
