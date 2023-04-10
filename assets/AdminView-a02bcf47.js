import{bp as $e,bi as Pe,a4 as ke,bq as Be,b as Y,a0 as ne,a1 as pe,d as M,M as se,N as oe,a as q,r as E,R as z,a7 as le,a3 as he,o as F,l as re,n as _e,h as B,B as Ae,_ as ye,Z as W,br as Oe,bs as Re,c as D,U as ce,au as ze,q as c,E as j,bt as Ie,P as Ve,bu as Fe,D as K,bd as ge,L as De,S as Me,bv as Le,m as ie,X as Ue,bb as He,bw as de,u as je,bx as be,Q as te,by as Ke,f as Ye,v as qe,j as We,y as Xe,C as Qe,bz as Ze,bA as Ge,e as ae,w as A,F as Je,bB as et,ae as tt,an as U,ai as at,av as nt,ag as st,ao as H,p as fe,bC as L}from"./index-04af70b1.js";import{E as ot}from"./el-input-09275e26.js";const R=e=>$e(e),lt=(e,n,i)=>ke(e.subTree).filter(t=>{var s;return Be(t)&&((s=t.type)==null?void 0:s.name)===n&&!!t.component}).map(t=>t.component.uid).map(t=>i[t]).filter(t=>!!t),rt=(e,n)=>{const i={},w=Pe([]);return{children:w,addChild:s=>{i[s.uid]=s,w.value=lt(e,n,i)},removeChild:s=>{delete i[s],w.value=w.value.filter(N=>N.uid!==s)}}},X=Symbol("tabsRootContextKey"),ct=Y({tabs:{type:ne(Array),default:()=>pe([])}}),Ce="ElTabBar",it=M({name:Ce}),ut=M({...it,props:ct,setup(e,{expose:n}){const i=e,w=W(),o=se(X);o||oe(Ce,"<el-tabs><el-tab-bar /></el-tabs>");const t=q("tabs"),s=E(),N=E(),u=()=>{let y=0,g=0;const v=["top","bottom"].includes(o.props.tabPosition)?"width":"height",r=v==="width"?"x":"y",b=r==="x"?"left":"top";return i.tabs.every(m=>{var h,a;const _=(a=(h=w.parent)==null?void 0:h.refs)==null?void 0:a[`tab-${m.uid}`];if(!_)return!1;if(!m.active)return!0;y=_[`offset${R(b)}`],g=_[`client${R(v)}`];const C=window.getComputedStyle(_);return v==="width"&&(i.tabs.length>1&&(g-=Number.parseFloat(C.paddingLeft)+Number.parseFloat(C.paddingRight)),y+=Number.parseFloat(C.paddingLeft)),!1}),{[v]:`${g}px`,transform:`translate${R(r)}(${y}px)`}},d=()=>N.value=u();return z(()=>i.tabs,async()=>{await le(),d()},{immediate:!0}),he(s,()=>d()),n({ref:s,update:d}),(y,g)=>(F(),re("div",{ref_key:"barRef",ref:s,class:_e([B(t).e("active-bar"),B(t).is(B(o).props.tabPosition)]),style:Ae(N.value)},null,6))}});var dt=ye(ut,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const bt=Y({panes:{type:ne(Array),default:()=>pe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),ft={tabClick:(e,n,i)=>i instanceof Event,tabRemove:(e,n)=>n instanceof Event},ve="ElTabNav",vt=M({name:ve,props:bt,emits:ft,setup(e,{expose:n,emit:i}){const w=W(),o=se(X);o||oe(ve,"<el-tabs><tab-nav /></el-tabs>");const t=q("tabs"),s=Oe(),N=Re(),u=E(),d=E(),y=E(),g=E(),v=E(!1),r=E(0),b=E(!1),m=E(!0),h=D(()=>["top","bottom"].includes(o.props.tabPosition)?"width":"height"),a=D(()=>({transform:`translate${h.value==="width"?"X":"Y"}(-${r.value}px)`})),_=()=>{if(!u.value)return;const f=u.value[`offset${R(h.value)}`],p=r.value;if(!p)return;const l=p>f?p-f:0;r.value=l},C=()=>{if(!u.value||!d.value)return;const f=d.value[`offset${R(h.value)}`],p=u.value[`offset${R(h.value)}`],l=r.value;if(f-l<=p)return;const S=f-l>p*2?l+p:f-p;r.value=S},P=async()=>{const f=d.value;if(!v.value||!y.value||!u.value||!f)return;await le();const p=y.value.querySelector(".is-active");if(!p)return;const l=u.value,S=["top","bottom"].includes(o.props.tabPosition),$=p.getBoundingClientRect(),x=l.getBoundingClientRect(),O=S?f.offsetWidth-x.width:f.offsetHeight-x.height,k=r.value;let T=k;S?($.left<x.left&&(T=k-(x.left-$.left)),$.right>x.right&&(T=k+$.right-x.right)):($.top<x.top&&(T=k-(x.top-$.top)),$.bottom>x.bottom&&(T=k+($.bottom-x.bottom))),T=Math.max(T,0),r.value=Math.min(T,O)},V=()=>{var f;if(!d.value||!u.value)return;e.stretch&&((f=g.value)==null||f.update());const p=d.value[`offset${R(h.value)}`],l=u.value[`offset${R(h.value)}`],S=r.value;l<p?(v.value=v.value||{},v.value.prev=S,v.value.next=S+l<p,p-S<l&&(r.value=p-l)):(v.value=!1,S>0&&(r.value=0))},Te=f=>{const p=f.code,{up:l,down:S,left:$,right:x}=K;if(![l,S,$,x].includes(p))return;const O=Array.from(f.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),k=O.indexOf(f.target);let T;p===$||p===l?k===0?T=O.length-1:T=k-1:k<O.length-1?T=k+1:T=0,O[T].focus({preventScroll:!0}),O[T].click(),ue()},ue=()=>{m.value&&(b.value=!0)},Q=()=>b.value=!1;return z(s,f=>{f==="hidden"?m.value=!1:f==="visible"&&setTimeout(()=>m.value=!0,50)}),z(N,f=>{f?setTimeout(()=>m.value=!0,50):m.value=!1}),he(y,V),ce(()=>setTimeout(()=>P(),0)),ze(()=>V()),n({scrollToActiveTab:P,removeFocus:Q}),z(()=>e.panes,()=>w.update(),{flush:"post",deep:!0}),()=>{const f=v.value?[c("span",{class:[t.e("nav-prev"),t.is("disabled",!v.value.prev)],onClick:_},[c(j,null,{default:()=>[c(Ie,null,null)]})]),c("span",{class:[t.e("nav-next"),t.is("disabled",!v.value.next)],onClick:C},[c(j,null,{default:()=>[c(Ve,null,null)]})])]:null,p=e.panes.map((l,S)=>{var $,x,O,k;const T=l.uid,Z=l.props.disabled,G=(x=($=l.props.name)!=null?$:l.index)!=null?x:`${S}`,J=!Z&&(l.isClosable||e.editable);l.index=`${S}`;const Ee=J?c(j,{class:"is-icon-close",onClick:I=>i("tabRemove",l,I)},{default:()=>[c(Fe,null,null)]}):null,xe=((k=(O=l.slots).label)==null?void 0:k.call(O))||l.props.label,Se=!Z&&l.active?0:-1;return c("div",{ref:`tab-${T}`,class:[t.e("item"),t.is(o.props.tabPosition),t.is("active",l.active),t.is("disabled",Z),t.is("closable",J),t.is("focus",b.value)],id:`tab-${G}`,key:`tab-${T}`,"aria-controls":`pane-${G}`,role:"tab","aria-selected":l.active,tabindex:Se,onFocus:()=>ue(),onBlur:()=>Q(),onClick:I=>{Q(),i("tabClick",l,G,I)},onKeydown:I=>{J&&(I.code===K.delete||I.code===K.backspace)&&i("tabRemove",l,I)}},[xe,Ee])});return c("div",{ref:y,class:[t.e("nav-wrap"),t.is("scrollable",!!v.value),t.is(o.props.tabPosition)]},[f,c("div",{class:t.e("nav-scroll"),ref:u},[c("div",{class:[t.e("nav"),t.is(o.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(o.props.tabPosition))],ref:d,style:a.value,role:"tablist",onKeydown:Te},[e.type?null:c(dt,{ref:g,tabs:[...e.panes]},null),p])])])}}}),mt=Y({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number]},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:ne(Function),default:()=>!0},stretch:Boolean}),ee=e=>Ue(e)||He(e),pt={[ge]:e=>ee(e),tabClick:(e,n)=>n instanceof Event,tabChange:e=>ee(e),edit:(e,n)=>["remove","add"].includes(n),tabRemove:e=>ee(e),tabAdd:()=>!0};var ht=M({name:"ElTabs",props:mt,emits:pt,setup(e,{emit:n,slots:i,expose:w}){var o,t;const s=q("tabs"),{children:N,addChild:u,removeChild:d}=rt(W(),"ElTabPane"),y=E(),g=E((t=(o=e.modelValue)!=null?o:e.activeName)!=null?t:"0"),v=a=>{g.value=a,n(ge,a),n("tabChange",a)},r=async a=>{var _,C,P;if(!(g.value===a||de(a)))try{await((_=e.beforeLeave)==null?void 0:_.call(e,a,g.value))!==!1&&(v(a),(P=(C=y.value)==null?void 0:C.removeFocus)==null||P.call(C))}catch{}},b=(a,_,C)=>{a.props.disabled||(r(_),n("tabClick",a,C))},m=(a,_)=>{a.props.disabled||de(a.props.name)||(_.stopPropagation(),n("edit",a.props.name,"remove"),n("tabRemove",a.props.name))},h=()=>{n("edit",void 0,"add"),n("tabAdd")};return De({from:'"activeName"',replacement:'"model-value" or "v-model"',scope:"ElTabs",version:"2.3.0",ref:"https://element-plus.org/en-US/component/tabs.html#attributes",type:"Attribute"},D(()=>!!e.activeName)),z(()=>e.activeName,a=>r(a)),z(()=>e.modelValue,a=>r(a)),z(g,async()=>{var a;await le(),(a=y.value)==null||a.scrollToActiveTab()}),Me(X,{props:e,currentName:g,registerPane:u,unregisterPane:d}),w({currentName:g}),()=>{const a=e.editable||e.addable?c("span",{class:s.e("new-tab"),tabindex:"0",onClick:h,onKeydown:P=>{P.code===K.enter&&h()}},[c(j,{class:s.is("icon-plus")},{default:()=>[c(Le,null,null)]})]):null,_=c("div",{class:[s.e("header"),s.is(e.tabPosition)]},[a,c(vt,{ref:y,currentName:g.value,editable:e.editable,type:e.type,panes:N.value,stretch:e.stretch,onTabClick:b,onTabRemove:m},null)]),C=c("div",{class:s.e("content")},[ie(i,"default")]);return c("div",{class:[s.b(),s.m(e.tabPosition),{[s.m("card")]:e.type==="card",[s.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[_,C]:[C,_]])}}});const _t=Y({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),yt=["id","aria-hidden","aria-labelledby"],we="ElTabPane",gt=M({name:we}),Ct=M({...gt,props:_t,setup(e){const n=e,i=W(),w=je(),o=se(X);o||oe(we,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=q("tab-pane"),s=E(),N=D(()=>n.closable||o.props.closable),u=be(()=>{var r;return o.currentName.value===((r=n.name)!=null?r:s.value)}),d=E(u.value),y=D(()=>{var r;return(r=n.name)!=null?r:s.value}),g=be(()=>!n.lazy||d.value||u.value);z(u,r=>{r&&(d.value=!0)});const v=te({uid:i.uid,slots:w,props:n,paneName:y,active:u,index:s,isClosable:N});return ce(()=>{o.registerPane(v)}),Ke(()=>{o.unregisterPane(v.uid)}),(r,b)=>B(g)?Ye((F(),re("div",{key:0,id:`pane-${B(y)}`,class:_e(B(t).b()),role:"tabpanel","aria-hidden":!B(u),"aria-labelledby":`tab-${B(y)}`},[ie(r.$slots,"default")],10,yt)),[[qe,B(u)]]):We("v-if",!0)}});var Ne=ye(Ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const wt=Xe(ht,{TabPane:Ne}),Nt=Qe(Ne);const me={__name:"adminTable",props:["columns","data","formatFunction"],setup(e){const n=e,i=E(""),w=D(()=>n.formatFunction?n.data.filter(o=>new RegExp(i.value).test(o.name)).map(o=>n.formatFunction(o)):n.data.filter(o=>new RegExp(i.value).test(o.name)));return(o,t)=>{const s=Ze,N=ot,u=Ge;return F(),ae(u,{data:B(w),height:"600"},{default:A(()=>[(F(!0),re(Je,null,et(n.columns,d=>(F(),ae(s,{key:d.prop,prop:d.prop,label:d.prop},null,8,["prop","label"]))),128)),c(s,null,{header:A(()=>[c(N,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d)},null,8,["modelValue"])]),default:A(d=>[ie(o.$slots,"default",{lastColumn:d})]),_:3})]),_:3},8,["data"])}}},xt={__name:"AdminView",setup(e){const{useUserStore:n,useAlertStore:i}=st,w=tt(),[o,t]=[n(),i()],[s,N]=[te([]),te([])],u=E("absentEmployees");ce(async()=>{if(!o.isAdmin)return w.push("/");const[,b]=await U(H.admin.getAbsenteeism());b&&s.push(...b);const[,m]=await U(H.admin.getLockedAccount());m&&N.push(...m)});const d=[{label:"日期",prop:"date"},{label:"名字",prop:"name"},{label:"上班",prop:"punchIn"},{label:"下班",prop:"punchOut"}],y=[{label:"帳號",prop:"account"},{label:"名字",prop:"name"}];function g(b){return{...b,date:L(b.date).format("YYYY-MM-DD"),punchIn:b.punchIn?L.tz(L(b.punchIn)).format("DD日HH:mm"):"--",punchOut:b.punchOut?L.tz(L(b.punchOut)).format("DD日HH:mm"):"--"}}async function v(b){if(b.id)return t.show();const[m]=await U(H.admin.unlocked(b.id));if(m)return t.show();const h=N.findIndex(a=>a.id===b.id);N.splice(h,1)}async function r(b){const{dateId:m,employeeId:h}=b;if(!m||!h)return t.show();const[a]=await U(H.admin.patchAttendance({dateId:m,employeeId:h}));if(a)return t.show();const _=s.findIndex(C=>C.dateId===m&&C.employeeId===h);s.splice(_,1)}return(b,m)=>{const h=at,a=Nt,_=wt,C=nt;return F(),ae(C,{style:{"justify-content":"center"}},{default:A(()=>[c(_,{modelValue:u.value,"onUpdate:modelValue":m[0]||(m[0]=P=>u.value=P),style:{width:"800px","justify-content":"center"}},{default:A(()=>[c(a,{label:"缺勤員工",name:"absentEmployees"},{default:A(()=>[c(me,{data:B(s),columns:d,"format-function":g},{default:A(P=>[c(h,{type:"success",onClick:V=>r(P.lastColumn.row)},{default:A(()=>[fe("改為出勤")]),_:2},1032,["onClick"])]),_:1},8,["data"])]),_:1}),c(a,{label:"禁止帳號",name:"bannedAccounts"},{default:A(()=>[c(me,{columns:y,data:B(N)},{default:A(P=>[c(h,{type:"success",onClick:V=>v(P.lastColumn.row)},{default:A(()=>[fe("解鎖帳號")]),_:2},1032,["onClick"])]),_:1},8,["data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})}}};export{xt as default};
