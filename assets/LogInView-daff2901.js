import{d as z,r as R,au as Y,W as M,U as gt,aa as ht,Q as F,ae as vt,ac as dt,ai as ct,av as mt,o as O,l as V,q as T,w as k,F as Et,ag as Bt,aw as pt,e as Ct,j as W,g as q,h as J,n as wt,t as Tt,p as It,aj as St,ak as _t,an as X,ao as G,ax as Lt,ay as Pt}from"./index-04af70b1.js";import{E as Dt,a as bt}from"./el-form-item-04ace386.js";import{E as kt}from"./el-input-09275e26.js";var N=function(){return N=Object.assign||function(e){for(var r,A=1,a=arguments.length;A<a;A++){r=arguments[A];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)},$={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},Rt=$;function j(t){this.mode=Rt.MODE_8BIT_BYTE,this.data=t}j.prototype={getLength:function(t){return this.data.length},write:function(t){for(var e=0;e<this.data.length;e++)t.put(this.data.charCodeAt(e),8)}};var Qt=j,K={L:1,M:0,Q:3,H:2},y=K;function p(t,e){this.totalCount=t,this.dataCount=e}p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];p.getRSBlocks=function(t,e){var r=p.getRsBlockTable(t,e);if(r==null)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var A=r.length/3,a=new Array,n=0;n<A;n++)for(var i=r[n*3+0],o=r[n*3+1],u=r[n*3+2],l=0;l<i;l++)a.push(new p(o,u));return a};p.getRsBlockTable=function(t,e){switch(e){case y.L:return p.RS_BLOCK_TABLE[(t-1)*4+0];case y.M:return p.RS_BLOCK_TABLE[(t-1)*4+1];case y.Q:return p.RS_BLOCK_TABLE[(t-1)*4+2];case y.H:return p.RS_BLOCK_TABLE[(t-1)*4+3];default:return}};var Mt=p;function tt(){this.buffer=new Array,this.length=0}tt.prototype={get:function(t){var e=Math.floor(t/8);return(this.buffer[e]>>>7-t%8&1)==1},put:function(t,e){for(var r=0;r<e;r++)this.putBit((t>>>e-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var yt=tt,m={glog:function(t){if(t<1)throw new Error("glog("+t+")");return m.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return m.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(var g=0;g<8;g++)m.EXP_TABLE[g]=1<<g;for(var g=8;g<256;g++)m.EXP_TABLE[g]=m.EXP_TABLE[g-4]^m.EXP_TABLE[g-5]^m.EXP_TABLE[g-6]^m.EXP_TABLE[g-8];for(var g=0;g<255;g++)m.LOG_TABLE[m.EXP_TABLE[g]]=g;var et=m,D=et;function x(t,e){if(t.length==null)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&t[r]==0;)r++;this.num=new Array(t.length-r+e);for(var A=0;A<t.length-r;A++)this.num[A]=t[A+r]}x.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var A=0;A<t.getLength();A++)e[r+A]^=D.gexp(D.glog(this.get(r))+D.glog(t.get(A)));return new x(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=D.glog(this.get(0))-D.glog(t.get(0)),r=new Array(this.getLength()),A=0;A<this.getLength();A++)r[A]=this.get(A);for(var A=0;A<t.getLength();A++)r[A]^=D.gexp(D.glog(t.get(A))+e);return new x(r,0).mod(t)}};var At=x,d=$,Z=At,xt=et,I={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;t!=0;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case I.PATTERN000:return(e+r)%2==0;case I.PATTERN001:return e%2==0;case I.PATTERN010:return r%3==0;case I.PATTERN011:return(e+r)%3==0;case I.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case I.PATTERN101:return e*r%2+e*r%3==0;case I.PATTERN110:return(e*r%2+e*r%3)%2==0;case I.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new Z([1],0),r=0;r<t;r++)e=e.multiply(new Z([1,xt.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case d.MODE_NUMBER:return 10;case d.MODE_ALPHA_NUM:return 9;case d.MODE_8BIT_BYTE:return 8;case d.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case d.MODE_NUMBER:return 12;case d.MODE_ALPHA_NUM:return 11;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else if(e<41)switch(t){case d.MODE_NUMBER:return 14;case d.MODE_ALPHA_NUM:return 13;case d.MODE_8BIT_BYTE:return 16;case d.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}else throw new Error("type:"+e)},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,A=0;A<e;A++)for(var a=0;a<e;a++){for(var n=0,i=t.isDark(A,a),o=-1;o<=1;o++)if(!(A+o<0||e<=A+o))for(var u=-1;u<=1;u++)a+u<0||e<=a+u||o==0&&u==0||i==t.isDark(A+o,a+u)&&n++;n>5&&(r+=3+n-5)}for(var A=0;A<e-1;A++)for(var a=0;a<e-1;a++){var l=0;t.isDark(A,a)&&l++,t.isDark(A+1,a)&&l++,t.isDark(A,a+1)&&l++,t.isDark(A+1,a+1)&&l++,(l==0||l==4)&&(r+=3)}for(var A=0;A<e;A++)for(var a=0;a<e-6;a++)t.isDark(A,a)&&!t.isDark(A,a+1)&&t.isDark(A,a+2)&&t.isDark(A,a+3)&&t.isDark(A,a+4)&&!t.isDark(A,a+5)&&t.isDark(A,a+6)&&(r+=40);for(var a=0;a<e;a++)for(var A=0;A<e-6;A++)t.isDark(A,a)&&!t.isDark(A+1,a)&&t.isDark(A+2,a)&&t.isDark(A+3,a)&&t.isDark(A+4,a)&&!t.isDark(A+5,a)&&t.isDark(A+6,a)&&(r+=40);for(var s=0,a=0;a<e;a++)for(var A=0;A<e;A++)t.isDark(A,a)&&s++;var h=Math.abs(100*s/e/e-50)/5;return r+=h*10,r}},Nt=f,Ht=Qt,rt=Mt,at=yt,S=Nt,Ot=At;function C(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var v=C.prototype;v.addData=function(t){var e=new Ht(t);this.dataList.push(e),this.dataCache=null};v.isDark=function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]};v.getModuleCount=function(){return this.moduleCount};v.make=function(){if(this.typeNumber<1){var t=1;for(t=1;t<40;t++){for(var e=rt.getRSBlocks(t,this.errorCorrectLevel),r=new at,A=0,a=0;a<e.length;a++)A+=e[a].dataCount;for(var a=0;a<this.dataList.length;a++){var n=this.dataList[a];r.put(n.mode,4),r.put(n.getLength(),S.getLengthInBits(n.mode,t)),n.write(r)}if(r.getLengthInBits()<=A*8)break}this.typeNumber=t}this.makeImpl(!1,this.getBestMaskPattern())};v.makeImpl=function(t,e){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var A=0;A<this.moduleCount;A++)this.modules[r][A]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),this.dataCache==null&&(this.dataCache=C.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)};v.setupPositionProbePattern=function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var A=-1;A<=7;A++)e+A<=-1||this.moduleCount<=e+A||(0<=r&&r<=6&&(A==0||A==6)||0<=A&&A<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=A&&A<=4?this.modules[t+r][e+A]=!0:this.modules[t+r][e+A]=!1)};v.getBestMaskPattern=function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var A=S.getLostPoint(this);(r==0||t>A)&&(t=A,e=r)}return e};v.createMovieClip=function(t,e,r){var A=t.createEmptyMovieClip(e,r),a=1;this.make();for(var n=0;n<this.modules.length;n++)for(var i=n*a,o=0;o<this.modules[n].length;o++){var u=o*a,l=this.modules[n][o];l&&(A.beginFill(0,100),A.moveTo(u,i),A.lineTo(u+a,i),A.lineTo(u+a,i+a),A.lineTo(u,i+a),A.endFill())}return A};v.setupTimingPattern=function(){for(var t=8;t<this.moduleCount-8;t++)this.modules[t][6]==null&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)this.modules[6][e]==null&&(this.modules[6][e]=e%2==0)};v.setupPositionAdjustPattern=function(){for(var t=S.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var A=t[e],a=t[r];if(this.modules[A][a]==null)for(var n=-2;n<=2;n++)for(var i=-2;i<=2;i++)n==-2||n==2||i==-2||i==2||n==0&&i==0?this.modules[A+n][a+i]=!0:this.modules[A+n][a+i]=!1}};v.setupTypeNumber=function(t){for(var e=S.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var A=!t&&(e>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=A}for(var r=0;r<18;r++){var A=!t&&(e>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=A}};v.setupTypeInfo=function(t,e){for(var r=this.errorCorrectLevel<<3|e,A=S.getBCHTypeInfo(r),a=0;a<15;a++){var n=!t&&(A>>a&1)==1;a<6?this.modules[a][8]=n:a<8?this.modules[a+1][8]=n:this.modules[this.moduleCount-15+a][8]=n}for(var a=0;a<15;a++){var n=!t&&(A>>a&1)==1;a<8?this.modules[8][this.moduleCount-a-1]=n:a<9?this.modules[8][15-a-1+1]=n:this.modules[8][15-a-1]=n}this.modules[this.moduleCount-8][8]=!t};v.mapData=function(t,e){for(var r=-1,A=this.moduleCount-1,a=7,n=0,i=this.moduleCount-1;i>0;i-=2)for(i==6&&i--;;){for(var o=0;o<2;o++)if(this.modules[A][i-o]==null){var u=!1;n<t.length&&(u=(t[n]>>>a&1)==1);var l=S.getMask(e,A,i-o);l&&(u=!u),this.modules[A][i-o]=u,a--,a==-1&&(n++,a=7)}if(A+=r,A<0||this.moduleCount<=A){A-=r,r=-r;break}}};C.PAD0=236;C.PAD1=17;C.createData=function(t,e,r){for(var A=rt.getRSBlocks(t,e),a=new at,n=0;n<r.length;n++){var i=r[n];a.put(i.mode,4),a.put(i.getLength(),S.getLengthInBits(i.mode,t)),i.write(a)}for(var o=0,n=0;n<A.length;n++)o+=A[n].dataCount;if(a.getLengthInBits()>o*8)throw new Error("code length overflow. ("+a.getLengthInBits()+">"+o*8+")");for(a.getLengthInBits()+4<=o*8&&a.put(0,4);a.getLengthInBits()%8!=0;)a.putBit(!1);for(;!(a.getLengthInBits()>=o*8||(a.put(C.PAD0,8),a.getLengthInBits()>=o*8));)a.put(C.PAD1,8);return C.createBytes(a,A)};C.createBytes=function(t,e){for(var r=0,A=0,a=0,n=new Array(e.length),i=new Array(e.length),o=0;o<e.length;o++){var u=e[o].dataCount,l=e[o].totalCount-u;A=Math.max(A,u),a=Math.max(a,l),n[o]=new Array(u);for(var s=0;s<n[o].length;s++)n[o][s]=255&t.buffer[s+r];r+=u;var h=S.getErrorCorrectPolynomial(l),c=new Ot(n[o],h.getLength()-1),_=c.mod(h);i[o]=new Array(h.getLength()-1);for(var s=0;s<i[o].length;s++){var w=s+_.getLength()-i[o].length;i[o][s]=w>=0?_.get(w):0}}for(var b=0,s=0;s<e.length;s++)b+=e[s].totalCount;for(var L=new Array(b),E=0,s=0;s<A;s++)for(var o=0;o<e.length;o++)s<n[o].length&&(L[E++]=n[o][s]);for(var s=0;s<a;s++)for(var o=0;o<e.length;o++)s<i[o].length&&(L[E++]=i[o][s]);return L};var Jt=C,nt="H",Xt=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ot(t,e){var r=K[e],A=new Jt(-1,r);return A.addData(zt(t)),A.make(),A}function it(t){return t in K}function zt(t){for(var e="",r=0;r<t.length;r++){var A=t.charCodeAt(r);A<128?e+=String.fromCharCode(A):A<2048?(e+=String.fromCharCode(192|A>>6),e+=String.fromCharCode(128|A&63)):A<55296||A>=57344?(e+=String.fromCharCode(224|A>>12),e+=String.fromCharCode(128|A>>6&63),e+=String.fromCharCode(128|A&63)):(r++,A=65536+((A&1023)<<10|t.charCodeAt(r)&1023),e+=String.fromCharCode(240|A>>18),e+=String.fromCharCode(128|A>>12&63),e+=String.fromCharCode(128|A>>6&63),e+=String.fromCharCode(128|A&63))}return e}function st(t,e){e===void 0&&(e=0);var r=[];return t.forEach(function(A,a){var n=null;A.forEach(function(i,o){if(!i&&n!==null){r.push("M"+(n+e)+" "+(a+e)+"h"+(o-n)+"v1H"+(n+e)+"z"),n=null;return}if(o===A.length-1){if(!i)return;n===null?r.push("M"+(o+e)+","+(a+e)+" h1v1H"+(o+e)+"z"):r.push("M"+(n+e)+","+(a+e)+" h"+(o+1-n)+"v1H"+(n+e)+"z");return}i&&n===null&&(n=o)})}),r.join("")}var U={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:nt,validator:function(t){return it(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},Kt=N(N({},U),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),Ut=z({name:"QRCodeSvg",props:U,setup:function(t){var e=R(0),r=R(""),A=function(){var a=t.value,n=t.level,i=t.margin,o=ot(a,n).modules;e.value=o.length+i*2,r.value=st(o,i)};return A(),Y(A),function(){return M("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+e.value+" "+e.value},[M("path",{fill:t.background,d:"M0,0 h"+e.value+"v"+e.value+"H0z"}),M("path",{fill:t.foreground,d:r.value})])}}}),Ft=z({name:"QRCodeCanvas",props:U,setup:function(t){var e=R(null),r=function(){var A=t.value,a=t.level,n=t.size,i=t.margin,o=t.background,u=t.foreground,l=ot(A,a).modules,s=l.length+i*2,h=e.value;if(!!h){var c=h.getContext("2d");if(!!c){var _=window.devicePixelRatio||1,w=n/s*_;h.height=h.width=n*_,c.scale(w,w),c.fillStyle=o,c.fillRect(0,0,s,s),c.fillStyle=u,Xt?c.fill(new Path2D(st(l,i))):l.forEach(function(b,L){b.forEach(function(E,B){E&&c.fillRect(B+i,L+i,1,1)})})}}};return gt(r),Y(r),function(){return M("canvas",{ref:e,style:{width:t.size+"px",height:t.size+"px"}})}}}),Vt=z({name:"Qrcode",render:function(){var t=this.$props,e=t.renderAs,r=t.value,A=t.size,a=t.margin,n=t.level,i=t.background,o=t.foreground,u=A>>>0,l=a>>>0,s=it(n)?n:nt;return M(e==="svg"?Ut:Ft,{value:r,size:u,margin:l,level:s,background:i,foreground:o})},props:Kt});const Wt="data:image/png;base64,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2H/6EMwrLkCa9TCI++/Kd1mWn3+2SLOW8WTG/gMgAASAABAAAkAACAABCAABIAAEgAAQAAJAAAgAASAABIAAEAACQADf3d4V67c85rdN8BaXDOORpVmbf8oPrHvXUMUbU46bcjUB/DEpNmoZwGoZrOKST/HI0qzlpiKASUMV70w6Lsu5BbgFIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEgAASAABAAAkAACOCSZvNgFpesF0maNb+Pwx7TrL8q9q8wKT//6wqgNwh6cclhl6RZg275sH3F/hU65efvFoAAEAACQAAIAAEgAAQgAJdAAAgAASAABIAAEAACQAAIAAEgAASAAP5T8SP3Q8tjbrp/XHIsP7BTHHYeNBQ/s07LYT/wWP4wy2vLAJruH5esKsqMw4bzhuLzH72KYW4BbgEIAAEgAASAABAAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEADXGMBwehEt989veRn/5P2fn4q9xGHr8mHbigD644touf8oDvtYvv+w5f7bdbH8mW3Kh+3dAhAAAkAACAABIAAEgAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAFwhf4F1Z74yzd9MNkAAAAASUVORK5CYII=";const Gt=t=>(St("data-v-3d4f3161"),t=t(),_t(),t),Zt=Gt(()=>q("h2",{style:{"text-align":"center"}},"Sign in",-1)),Yt=["src"],qt={__name:"LogInView",setup(t){const e=F({account:"",password:""}),r=R(),A=F({account:[{required:!0,message:"Please input account",trigger:"blur"},{min:5,max:14,message:"Length should be 5 to 14",trigger:["blur","change"]}],password:[{required:!0,message:"Please input password",trigger:"blur"},{min:7,max:14,message:"Length should be 7 to 14",trigger:["blur","change"]}]}),{useUserStore:a,useLocationStore:n,useAlertStore:i}=Bt,o=R(),u=R(),[l,s,h,c]=[a(),n(),i(),vt()],{getLocation:_,isInRange:w}=dt(s);async function b(){u.value.disabled=!0;const[,E]=await X(r.value.validate());if(!E)return u.value.disabled=!1;const B=Lt(e),[Q,P]=await X(G.user.login(B));if(u.value.disabled=!1,e.password="",Q)switch(Q.response.data.message){case"Wrong times over 5":return h.show("帳號已被鎖定");case"Account do not exist":case"Password wrong":return h.show("帳號或密碼錯誤");default:return h.show()}Pt(P),l.formatAndStoreApiData(P.employee,P.attendances),c.push("/")}async function L(){if(!w)return h.show("請至公司附近操作");const[,E]=await X(G.user.getQrId(_.value));if(!E.punchQrId)return h.show();const B=`${location.protocol}//${location.host}/attendance/qrcode?punchQrId=${E.punchQrId}`;o.value=B,window.addEventListener("click",()=>o.value="",{once:!0,capture:!0})}return(E,B)=>{const Q=kt,P=Dt,ut=ct,lt=bt,ft=mt;return O(),V(Et,null,[Zt,T(ft,{style:{"justify-content":"center"}},{default:k(()=>[T(lt,{rules:A,ref_key:"formRef",ref:r,model:e,onSubmit:pt(b,["prevent"]),"label-position":"top","status-icon":""},{default:k(()=>[o.value?(O(),Ct(Vt,{key:0,class:"qr-code",value:o.value,size:400,level:"H"},null,8,["value"])):W("",!0),q("img",{onClick:L,src:J(Wt),alt:"qr"},null,8,Yt),o.value?W("",!0):(O(),V("span",{key:1,class:wt(J(w)?"text-info":"text-secondary")},Tt(J(w)?"掃描打卡":"請至公司取得qr code"),3)),T(P,{label:"Account",prop:"account"},{default:k(()=>[T(Q,{type:"text",modelValue:e.account,"onUpdate:modelValue":B[0]||(B[0]=H=>e.account=H),maxlength:"14"},null,8,["modelValue"])]),_:1}),T(P,{label:"Password",prop:"password"},{default:k(()=>[T(Q,{modelValue:e.password,"onUpdate:modelValue":B[1]||(B[1]=H=>e.password=H),type:"password","show-password":"",maxlength:"14"},null,8,["modelValue"])]),_:1}),T(P,null,{default:k(()=>[T(ut,{round:"",ref_key:"submitButtonRef",ref:u,"native-type":"submit",type:"primary"},{default:k(()=>[It(" Sign in ")]),_:1},512)]),_:1})]),_:1},8,["rules","model","onSubmit"])]),_:1})],64)}}},ee=ht(qt,[["__scopeId","data-v-3d4f3161"]]);export{ee as default};
