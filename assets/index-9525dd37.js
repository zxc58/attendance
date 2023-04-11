import{b as me,k as et,T as Ne,d as M,u as Oe,a as $,r as P,c as h,o as f,e as w,w as T,f as ze,g as Z,n as S,h as d,E as ce,i as tt,j as L,l as B,m as x,p as D,t as le,F as te,q as K,v as Le,s as Ce,_ as F,x as nt,y as Ie,z as He,A as ot,B as Se,C as q,D as H,G as oe,H as ge,I as st,J as at,K as se,L as lt,M as de,N as pe,O as rt,P as ut,Q as Te,R as re,S as Me,U as $e,V as Fe,W as I,X as J,Y as Re,Z as Ee,$ as Pe,a0 as ke,a1 as it,a2 as ct,a3 as dt,a4 as pt,a5 as mt,a6 as ft,a7 as Ae,a8 as vt,a9 as ht,aa as _t,ab as De,ac as gt,ad as we,ae as yt,af as Ve,ag as bt,ah as We,ai as Mt,aj as kt,ak as Ct,al as It,am as St,an as Tt,ao as $t,ap as Et,aq as wt,ar as xt,as as Bt,at as Pt,au as At}from"./index-8f71c4f8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const ue=function(e,o,...n){let t;o.includes("mouse")||o.includes("click")?t="MouseEvents":o.includes("key")?t="KeyboardEvent":t="HTMLEvents";const s=document.createEvent(t);return s.initEvent(o,...n),e.dispatchEvent(s),e},Nt=["light","dark"],Ot=me({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:et(Ne),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:Nt,default:"light"}}),zt={close:e=>e instanceof MouseEvent},Lt=M({name:"ElAlert"}),Ht=M({...Lt,props:Ot,emits:zt,setup(e,{emit:o}){const n=e,{Close:t}=nt,s=Oe(),a=$("alert"),u=P(!0),v=h(()=>Ne[n.type]),r=h(()=>[a.e("icon"),{[a.is("big")]:!!n.description||!!s.default}]),_=h(()=>({[a.is("bold")]:n.description||s.default})),g=c=>{u.value=!1,o("close",c)};return(c,b)=>(f(),w(Ce,{name:d(a).b("fade"),persisted:""},{default:T(()=>[ze(Z("div",{class:S([d(a).b(),d(a).m(c.type),d(a).is("center",c.center),d(a).is(c.effect)]),role:"alert"},[c.showIcon&&d(v)?(f(),w(d(ce),{key:0,class:S(d(r))},{default:T(()=>[(f(),w(tt(d(v))))]),_:1},8,["class"])):L("v-if",!0),Z("div",{class:S(d(a).e("content"))},[c.title||c.$slots.title?(f(),B("span",{key:0,class:S([d(a).e("title"),d(_)])},[x(c.$slots,"title",{},()=>[D(le(c.title),1)])],2)):L("v-if",!0),c.$slots.default||c.description?(f(),B("p",{key:1,class:S(d(a).e("description"))},[x(c.$slots,"default",{},()=>[D(le(c.description),1)])],2)):L("v-if",!0),c.closable?(f(),B(te,{key:2},[c.closeText?(f(),B("div",{key:0,class:S([d(a).e("close-btn"),d(a).is("customed")]),onClick:g},le(c.closeText),3)):(f(),w(d(ce),{key:1,class:S(d(a).e("close-btn")),onClick:g},{default:T(()=>[K(d(t))]),_:1},8,["class"]))],64)):L("v-if",!0)],2)],2),[[Le,u.value]])]),_:3},8,["name"]))}});var Ft=F(Ht,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);const Rt=Ie(Ft),Dt=M({name:"ElCollapseTransition"}),Vt=M({...Dt,setup(e){const o=$("collapse-transition"),n={beforeEnter(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,t.scrollHeight!==0?(t.style.maxHeight=`${t.scrollHeight}px`,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.maxHeight=0,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.maxHeight=`${t.scrollHeight}px`,t.style.overflow="hidden"},leave(t){t.scrollHeight!==0&&(t.style.maxHeight=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){t.style.maxHeight="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}};return(t,s)=>(f(),w(Ce,He({name:d(o).b()},ot(n)),{default:T(()=>[x(t.$slots,"default")]),_:3},16,["name"]))}});var ie=F(Vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);ie.install=e=>{e.component(ie.name,ie)};const Wt=ie,jt=M({name:"ElContainer"}),qt=M({...jt,props:{direction:{type:String}},setup(e){const o=e,n=Oe(),t=$("container"),s=h(()=>o.direction==="vertical"?!0:o.direction==="horizontal"?!1:n&&n.default?n.default().some(u=>{const v=u.type.name;return v==="ElHeader"||v==="ElFooter"}):!1);return(a,u)=>(f(),B("section",{class:S([d(t).b(),d(t).is("vertical",d(s))])},[x(a.$slots,"default")],2))}});var Ut=F(qt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const Gt=M({name:"ElAside"}),Kt=M({...Gt,props:{width:{type:String,default:null}},setup(e){const o=e,n=$("aside"),t=h(()=>o.width?n.cssVarBlock({width:o.width}):{});return(s,a)=>(f(),B("aside",{class:S(d(n).b()),style:Se(d(t))},[x(s.$slots,"default")],6))}});var je=F(Kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const Jt=M({name:"ElFooter"}),Zt=M({...Jt,props:{height:{type:String,default:null}},setup(e){const o=e,n=$("footer"),t=h(()=>o.height?n.cssVarBlock({height:o.height}):{});return(s,a)=>(f(),B("footer",{class:S(d(n).b()),style:Se(d(t))},[x(s.$slots,"default")],6))}});var qe=F(Zt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const Qt=M({name:"ElHeader"}),Xt=M({...Qt,props:{height:{type:String,default:null}},setup(e){const o=e,n=$("header"),t=h(()=>o.height?n.cssVarBlock({height:o.height}):{});return(s,a)=>(f(),B("header",{class:S(d(n).b()),style:Se(d(t))},[x(s.$slots,"default")],6))}});var Ue=F(Xt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const Yt=M({name:"ElMain"}),en=M({...Yt,setup(e){const o=$("main");return(n,t)=>(f(),B("main",{class:S(d(o).b())},[x(n.$slots,"default")],2))}});var Ge=F(en,[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const tn=Ie(Ut,{Aside:je,Footer:qe,Header:Ue,Main:Ge});q(je);q(qe);const nn=q(Ue),on=q(Ge);let sn=class{constructor(o,n){this.parent=o,this.domNode=n,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(o){o===this.subMenuItems.length?o=0:o<0&&(o=this.subMenuItems.length-1),this.subMenuItems[o].focus(),this.subIndex=o}addListeners(){const o=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,n=>{n.addEventListener("keydown",t=>{let s=!1;switch(t.code){case H.down:{this.gotoSubIndex(this.subIndex+1),s=!0;break}case H.up:{this.gotoSubIndex(this.subIndex-1),s=!0;break}case H.tab:{ue(o,"mouseleave");break}case H.enter:case H.space:{s=!0,t.currentTarget.click();break}}return s&&(t.preventDefault(),t.stopPropagation()),!1})})}},an=class{constructor(o,n){this.domNode=o,this.submenu=null,this.submenu=null,this.init(n)}init(o){this.domNode.setAttribute("tabindex","0");const n=this.domNode.querySelector(`.${o}-menu`);n&&(this.submenu=new sn(this,n)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",o=>{let n=!1;switch(o.code){case H.down:{ue(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),n=!0;break}case H.up:{ue(o.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),n=!0;break}case H.tab:{ue(o.currentTarget,"mouseleave");break}case H.enter:case H.space:{n=!0,o.currentTarget.click();break}}n&&o.preventDefault()})}},ln=class{constructor(o,n){this.domNode=o,this.init(n)}init(o){const n=this.domNode.childNodes;Array.from(n).forEach(t=>{t.nodeType===1&&new an(t,o)})}};const rn=M({name:"ElMenuCollapseTransition",setup(){const e=$("menu");return{listeners:{onBeforeEnter:n=>n.style.opacity="0.2",onEnter(n,t){oe(n,`${e.namespace.value}-opacity-transition`),n.style.opacity="1",t()},onAfterEnter(n){ge(n,`${e.namespace.value}-opacity-transition`),n.style.opacity=""},onBeforeLeave(n){n.dataset||(n.dataset={}),st(n,e.m("collapse"))?(ge(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),oe(n,e.m("collapse"))):(oe(n,e.m("collapse")),n.dataset.oldOverflow=n.style.overflow,n.dataset.scrollWidth=n.clientWidth.toString(),ge(n,e.m("collapse"))),n.style.width=`${n.scrollWidth}px`,n.style.overflow="hidden"},onLeave(n){oe(n,"horizontal-collapse-transition"),n.style.width=`${n.dataset.scrollWidth}px`}}}}});function un(e,o,n,t,s,a){return f(),w(Ce,He({mode:"out-in"},e.listeners),{default:T(()=>[x(e.$slots,"default")]),_:3},16)}var cn=F(rn,[["render",un],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function Ke(e,o){const n=h(()=>{let s=e.parent;const a=[o.value];for(;s.type.name!=="ElMenu";)s.props.index&&a.unshift(s.props.index),s=s.parent;return a});return{parentMenu:h(()=>{let s=e.parent;for(;s&&!["ElMenu","ElSubMenu"].includes(s.type.name);)s=s.parent;return s}),indexPath:n}}function dn(e){return h(()=>{const n=e.backgroundColor;return n?new at(n).shade(20).toString():""})}const Je=(e,o)=>{const n=$("menu");return h(()=>n.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":dn(e).value||"","active-color":e.activeTextColor||"",level:`${o}`}))},pn=me({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:se},expandOpenIcon:{type:se},collapseCloseIcon:{type:se},collapseOpenIcon:{type:se}}),ae="ElSubMenu";var xe=M({name:ae,props:pn,setup(e,{slots:o,expose:n}){lt({from:"popper-append-to-body",replacement:"teleported",scope:ae,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},h(()=>e.popperAppendToBody!==void 0));const t=Ee(),{indexPath:s,parentMenu:a}=Ke(t,h(()=>e.index)),u=$("menu"),v=$("sub-menu"),r=de("rootMenu");r||pe(ae,"can not inject root menu");const _=de(`subMenu:${a.value.uid}`);_||pe(ae,"can not inject sub menu");const g=P({}),c=P({});let b;const A=P(!1),fe=P(),ne=P(null),V=h(()=>l.value==="horizontal"&&W.value?"bottom-start":"right-start"),U=h(()=>l.value==="horizontal"&&W.value||l.value==="vertical"&&!r.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?N.value?e.expandOpenIcon:e.expandCloseIcon:rt:e.collapseCloseIcon&&e.collapseOpenIcon?N.value?e.collapseOpenIcon:e.collapseCloseIcon:ut),W=h(()=>_.level===0),Q=h(()=>{var m;const y=(m=e.teleported)!=null?m:e.popperAppendToBody;return y===void 0?W.value:y}),ve=h(()=>r.props.collapse?`${u.namespace.value}-zoom-in-left`:`${u.namespace.value}-zoom-in-top`),he=h(()=>l.value==="horizontal"&&W.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","left-start","bottom-start","bottom-end","top-start","top-end"]),N=h(()=>r.openedMenus.includes(e.index)),j=h(()=>{let m=!1;return Object.values(g.value).forEach(y=>{y.active&&(m=!0)}),Object.values(c.value).forEach(y=>{y.active&&(m=!0)}),m}),X=h(()=>r.props.backgroundColor||""),Y=h(()=>r.props.activeTextColor||""),G=h(()=>r.props.textColor||""),l=h(()=>r.props.mode),i=Te({index:e.index,indexPath:s,active:j}),p=h(()=>l.value!=="horizontal"?{color:G.value}:{borderBottomColor:j.value?r.props.activeTextColor?Y.value:"":"transparent",color:j.value?Y.value:G.value}),E=()=>{var m,y,k;return(k=(y=(m=ne.value)==null?void 0:m.popperRef)==null?void 0:y.popperInstanceRef)==null?void 0:k.destroy()},C=m=>{m||E()},O=()=>{r.props.menuTrigger==="hover"&&r.props.mode==="horizontal"||r.props.collapse&&r.props.mode==="vertical"||e.disabled||r.handleSubMenuClick({index:e.index,indexPath:s.value,active:j.value})},z=(m,y=e.showTimeout)=>{var k;m.type!=="focus"&&(r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||e.disabled||(_.mouseInChild.value=!0,b==null||b(),{stop:b}=Pe(()=>{r.openMenu(e.index,s.value)},y),Q.value&&((k=a.value.vnode.el)==null||k.dispatchEvent(new MouseEvent("mouseenter")))))},R=(m=!1)=>{var y,k;r.props.menuTrigger==="click"&&r.props.mode==="horizontal"||!r.props.collapse&&r.props.mode==="vertical"||(b==null||b(),_.mouseInChild.value=!1,{stop:b}=Pe(()=>!A.value&&r.closeMenu(e.index,s.value),e.hideTimeout),Q.value&&m&&((y=t.parent)==null?void 0:y.type.name)==="ElSubMenu"&&((k=_.handleMouseleave)==null||k.call(_,!0)))};re(()=>r.props.collapse,m=>C(Boolean(m)));{const m=k=>{c.value[k.index]=k},y=k=>{delete c.value[k.index]};Me(`subMenu:${t.uid}`,{addSubMenu:m,removeSubMenu:y,handleMouseleave:R,mouseInChild:A,level:_.level+1})}return n({opened:N}),$e(()=>{r.addSubMenu(i),_.addSubMenu(i)}),Fe(()=>{_.removeSubMenu(i),r.removeSubMenu(i)}),()=>{var m;const y=[(m=o.title)==null?void 0:m.call(o),I(ce,{class:v.e("icon-arrow"),style:{transform:N.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&r.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>J(U.value)?I(t.appContext.components[U.value]):I(U.value)})],k=Je(r.props,_.level+1),Ye=r.isMenuPopup?I(Re,{ref:ne,visible:N.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:V.value,teleported:Q.value,fallbackPlacements:he.value,transition:ve.value,gpuAcceleration:!1},{content:()=>{var ee;return I("div",{class:[u.m(l.value),u.m("popup-container"),e.popperClass],onMouseenter:_e=>z(_e,100),onMouseleave:()=>R(!0),onFocus:_e=>z(_e,100)},[I("ul",{class:[u.b(),u.m("popup"),u.m(`popup-${V.value}`)],style:k.value},[(ee=o.default)==null?void 0:ee.call(o)])])},default:()=>I("div",{class:v.e("title"),style:[p.value,{backgroundColor:X.value}],onClick:O},y)}):I(te,{},[I("div",{class:v.e("title"),style:[p.value,{backgroundColor:X.value}],ref:fe,onClick:O},y),I(Wt,{},{default:()=>{var ee;return ze(I("ul",{role:"menu",class:[u.b(),u.m("inline")],style:k.value},[(ee=o.default)==null?void 0:ee.call(o)]),[[Le,N.value]])}})]);return I("li",{class:[v.b(),v.is("active",j.value),v.is("opened",N.value),v.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:N.value,onMouseenter:z,onMouseleave:()=>R(!0),onFocus:z},[Ye])}}});const mn=me({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:ke(Array),default:()=>it([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),ye=e=>Array.isArray(e)&&e.every(o=>J(o)),fn={close:(e,o)=>J(e)&&ye(o),open:(e,o)=>J(e)&&ye(o),select:(e,o,n,t)=>J(e)&&ye(o)&&ft(n)&&(t===void 0||t instanceof Promise)};var vn=M({name:"ElMenu",props:mn,emits:fn,setup(e,{emit:o,slots:n,expose:t}){const s=Ee(),a=s.appContext.config.globalProperties.$router,u=P(),v=$("menu"),r=$("sub-menu"),_=P(-1),g=P(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),c=P(e.defaultActive),b=P({}),A=P({}),fe=h(()=>e.mode==="horizontal"||e.mode==="vertical"&&e.collapse),ne=()=>{const l=c.value&&b.value[c.value];if(!l||e.mode==="horizontal"||e.collapse)return;l.indexPath.forEach(p=>{const E=A.value[p];E&&V(p,E.indexPath)})},V=(l,i)=>{g.value.includes(l)||(e.uniqueOpened&&(g.value=g.value.filter(p=>i.includes(p))),g.value.push(l),o("open",l,i))},U=l=>{const i=g.value.indexOf(l);i!==-1&&g.value.splice(i,1)},W=(l,i)=>{U(l),o("close",l,i)},Q=({index:l,indexPath:i})=>{g.value.includes(l)?W(l,i):V(l,i)},ve=l=>{(e.mode==="horizontal"||e.collapse)&&(g.value=[]);const{index:i,indexPath:p}=l;if(!(Ae(i)||Ae(p)))if(e.router&&a){const E=l.route||i,C=a.push(E).then(O=>(O||(c.value=i),O));o("select",i,p,{index:i,indexPath:p,route:E},C)}else c.value=i,o("select",i,p,{index:i,indexPath:p})},he=l=>{const i=b.value,p=i[l]||c.value&&i[c.value]||i[e.defaultActive];p?c.value=p.index:c.value=l},N=()=>{var l,i;if(!u.value)return-1;const p=Array.from((i=(l=u.value)==null?void 0:l.childNodes)!=null?i:[]).filter(y=>y.nodeName!=="#text"||y.nodeValue),E=64,C=Number.parseInt(getComputedStyle(u.value).paddingLeft,10),O=Number.parseInt(getComputedStyle(u.value).paddingRight,10),z=u.value.clientWidth-C-O;let R=0,m=0;return p.forEach((y,k)=>{R+=y.offsetWidth||0,R<=z-E&&(m=k+1)}),m===p.length?-1:m},j=(l,i=33.34)=>{let p;return()=>{p&&clearTimeout(p),p=setTimeout(()=>{l()},i)}};let X=!0;const Y=()=>{const l=()=>{_.value=-1,vt(()=>{_.value=N()})};X?l():j(l)(),X=!1};re(()=>e.defaultActive,l=>{b.value[l]||(c.value=""),he(l)}),re(()=>e.collapse,l=>{l&&(g.value=[])}),re(b.value,ne);let G;ct(()=>{e.mode==="horizontal"&&e.ellipsis?G=dt(u,Y).stop:G==null||G()});{const l=C=>{A.value[C.index]=C},i=C=>{delete A.value[C.index]};Me("rootMenu",Te({props:e,openedMenus:g,items:b,subMenus:A,activeIndex:c,isMenuPopup:fe,addMenuItem:C=>{b.value[C.index]=C},removeMenuItem:C=>{delete b.value[C.index]},addSubMenu:l,removeSubMenu:i,openMenu:V,closeMenu:W,handleMenuItemClick:ve,handleSubMenuClick:Q})),Me(`subMenu:${s.uid}`,{addSubMenu:l,removeSubMenu:i,mouseInChild:P(!1),level:0})}return $e(()=>{e.mode==="horizontal"&&new ln(s.vnode.el,v.namespace.value)}),t({open:i=>{const{indexPath:p}=A.value[i];p.forEach(E=>V(E,p))},close:U,handleResize:Y}),()=>{var l,i;let p=(i=(l=n.default)==null?void 0:l.call(n))!=null?i:[];const E=[];if(e.mode==="horizontal"&&u.value){const z=pt(p),R=_.value===-1?z:z.slice(0,_.value),m=_.value===-1?[]:z.slice(_.value);m!=null&&m.length&&e.ellipsis&&(p=R,E.push(I(xe,{index:"sub-menu-more",class:r.e("hide-arrow")},{title:()=>I(ce,{class:r.e("icon-more")},{default:()=>I(mt)}),default:()=>m})))}const C=Je(e,0),O=I("ul",{key:String(e.collapse),role:"menubar",ref:u,style:C.value,class:{[v.b()]:!0,[v.m(e.mode)]:!0,[v.m("collapse")]:e.collapse}},[...p,...E]);return e.collapseTransition&&e.mode==="vertical"?I(cn,()=>O):O}}});const hn=me({index:{type:ke([String,null]),default:null},route:{type:ke([String,Object])},disabled:Boolean}),_n={click:e=>J(e.index)&&Array.isArray(e.indexPath)},be="ElMenuItem",gn=M({name:be,components:{ElTooltip:Re},props:hn,emits:_n,setup(e,{emit:o}){const n=Ee(),t=de("rootMenu"),s=$("menu"),a=$("menu-item");t||pe(be,"can not inject root menu");const{parentMenu:u,indexPath:v}=Ke(n,ht(e,"index")),r=de(`subMenu:${u.value.uid}`);r||pe(be,"can not inject sub menu");const _=h(()=>e.index===t.activeIndex),g=Te({index:e.index,indexPath:v,active:_}),c=()=>{e.disabled||(t.handleMenuItemClick({index:e.index,indexPath:v.value,route:e.route}),o("click",g))};return $e(()=>{r.addSubMenu(g),t.addMenuItem(g)}),Fe(()=>{r.removeSubMenu(g),t.removeMenuItem(g)}),{parentMenu:u,rootMenu:t,active:_,nsMenu:s,nsMenuItem:a,handleClick:c}}});function yn(e,o,n,t,s,a){const u=_t("el-tooltip");return f(),B("li",{class:S([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:o[0]||(o[0]=(...v)=>e.handleClick&&e.handleClick(...v))},[e.parentMenu.type.name==="ElMenu"&&e.rootMenu.props.collapse&&e.$slots.title?(f(),w(u,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:T(()=>[x(e.$slots,"title")]),default:T(()=>[Z("div",{class:S(e.nsMenu.be("tooltip","trigger"))},[x(e.$slots,"default")],2)]),_:3},8,["effect"])):(f(),B(te,{key:1},[x(e.$slots,"default"),x(e.$slots,"title")],64))],2)}var Ze=F(gn,[["render",yn],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);const bn={title:String},Mn="ElMenuItemGroup",kn=M({name:Mn,props:bn,setup(){return{ns:$("menu-item-group")}}});function Cn(e,o,n,t,s,a){return f(),B("li",{class:S(e.ns.b())},[Z("div",{class:S(e.ns.e("title"))},[e.$slots.title?x(e.$slots,"title",{key:1}):(f(),B(te,{key:0},[D(le(e.title),1)],64))],2),Z("ul",null,[x(e.$slots,"default")])],2)}var Qe=F(kn,[["render",Cn],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const In=Ie(vn,{MenuItem:Ze,MenuItemGroup:Qe,SubMenu:xe}),Sn=q(Ze);q(Qe);q(xe);const Tn={__name:"FlashAlert",setup(e){const o=gt(),{alertContent:n,alertType:t}=we(o);return(s,a)=>{const u=Rt;return f(),w(u,{type:d(t),title:d(n),effect:"dark",center:"",closable:!1},null,8,["type","title"])}}},$n=De(Tn,[["__scopeId","data-v-37dd6f26"]]);const En=e=>(Ct("data-v-df5ceefc"),e=e(),It(),e),wn=En(()=>Z("div",{style:{"flex-grow":"1"}},null,-1)),xn={__name:"TopIndex",setup(e){const{width:o}=yt(),{useUserStore:n}=We,[t,s,a]=[n(),Ve(),bt()],{user:u,isAdmin:v}=we(t);function r(){t.$reset(),Mt(),s.push("/login")}return(_,g)=>{const c=Sn,b=kt,A=In;return f(),w(A,{style:{"align-items":"center"},router:"","default-active":d(a).path,ellipsis:!1,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},{default:T(()=>[d(o)>=768||!d(u)?(f(),w(c,{key:0,class:"logo"},{default:T(()=>[D("出勤系統")]),_:1})):L("",!0),d(u)?(f(),w(c,{key:1,index:"/"},{default:T(()=>[D("出勤")]),_:1})):L("",!0),d(u)?(f(),w(c,{key:2,index:"/setting"},{default:T(()=>[D("設定")]),_:1})):L("",!0),d(v)?(f(),w(c,{key:3,index:"/admin"},{default:T(()=>[D("管理")]),_:1})):L("",!0),wn,d(u)?(f(),w(b,{key:4,onClick:r},{default:T(()=>[D("登出")]),_:1})):L("",!0)]),_:1},8,["default-active"])}}},Bn=De(xn,[["__scopeId","data-v-df5ceefc"]]);const Pn={__name:"App",setup(e){const{useUserStore:o,useAlertStore:n}=We,[t,s,a]=[o(),n(),Ve()],{alertContent:u}=we(s);return St(async()=>{if(!Tt())return a.push("/login");const[v,r]=await $t(Et.user.verifyJWT());if(v)return a.push("/login");t.formatAndStoreApiData(r.employee,r.attendances)}),(v,r)=>{const _=$n,g=nn,c=on,b=tn;return f(),B(te,null,[d(u)?(f(),w(_,{key:0})):L("",!0),K(b,null,{default:T(()=>[K(g,{style:{"padding-right":"0px","padding-left":"0px"}},{default:T(()=>[K(Bn)]),_:1}),K(c,null,{default:T(()=>[K(d(wt))]),_:1})]),_:1})],64)}}},Be=xt(Pn),Xe=Bt();Xe.use(Pt.createReset);Be.use(Xe);Be.use(At);Be.mount("#app");
