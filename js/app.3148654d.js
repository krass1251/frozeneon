(function(){"use strict";var e={2188:function(e,t,a){var s=a(9242),n=a(8957),o=a(1850),r=a(8600),l=a(3504),c=a(3396),i=a(7139);const u={key:0,class:"text-center pa-4"},g={key:1,class:"text-center pa-4 text-decoration-underline"},p=(0,c._)("strong",null,"Name",-1),d=(0,c._)("strong",null,"description",-1),m=(0,c._)("strong",null,"homepage",-1),f=(0,c._)("strong",null,"repository",-1),k={key:0};function h(e,t,a,s,n,o){const r=(0,c.up)("packages-search"),l=(0,c.up)("app-header"),h=(0,c.up)("packages-output"),v=(0,c.up)("base-pagination"),w=(0,c.up)("v-card"),P=(0,c.up)("v-main"),y=(0,c.up)("v-progress-circular"),_=(0,c.up)("v-card-text"),b=(0,c.up)("v-dialog"),x=(0,c.up)("app-footer"),j=(0,c.up)("v-app");return(0,c.wg)(),(0,c.j4)(j,null,{default:(0,c.w5)((()=>[(0,c.Wm)(l,null,{default:(0,c.w5)((()=>[(0,c.Wm)(r,{class:"ml-8",onSearchInput:o.setText},null,8,["onSearchInput"])])),_:1}),(0,c.Wm)(P,null,{default:(0,c.w5)((()=>[n.text.length?(0,c.kq)("",!0):((0,c.wg)(),(0,c.iD)("h3",u," To see the result use the search bar above. ")),1===n.text.length?((0,c.wg)(),(0,c.iD)("h3",g," Use at least 2 characters, these are the rules. ")):(0,c.kq)("",!0),(0,c.Wm)(w,{loading:e.$store.state.packages.isLoading,"min-height":"100%"},{default:(0,c.w5)((()=>[e.$store.state.packages.packagesResultsTotal?((0,c.wg)(),(0,c.j4)(h,{key:0,onOnPackageClick:o.onPackageClick},null,8,["onOnPackageClick"])):(0,c.kq)("",!0),(0,c.Wm)(v,{onNewPage:o.updatePage,page:n.page},null,8,["onNewPage","page"])])),_:1},8,["loading"])])),_:1}),(0,c.Wm)(b,{modelValue:n.dialog,"onUpdate:modelValue":t[0]||(t[0]=e=>n.dialog=e),width:"80%","close-on-content-click":!0},{default:(0,c.w5)((()=>[e.$store.state.packages.isPopupLoading?((0,c.wg)(),(0,c.j4)(y,{key:0,size:70,indeterminate:"",class:"primary--text align-self-center"})):((0,c.wg)(),(0,c.j4)(w,{key:1},{default:(0,c.w5)((()=>[(0,c.Wm)(_,null,{default:(0,c.w5)((()=>[p,(0,c.Uk)(": "+(0,i.zw)(e.$store.state.packages.packageResult?.name||"N/A"),1)])),_:1}),(0,c.Wm)(_,null,{default:(0,c.w5)((()=>[d,(0,c.Uk)(": "+(0,i.zw)(e.$store.state.packages.packageResult?.description||"N/A"),1)])),_:1}),(0,c.Wm)(_,null,{default:(0,c.w5)((()=>[m,(0,c.Uk)(": "+(0,i.zw)(e.$store.state.packages.packageResult?.homepage||"N/A"),1)])),_:1}),(0,c.Wm)(_,null,{default:(0,c.w5)((()=>[f,(0,c.Uk)(": "+(0,i.zw)(e.$store.state.packages.packageResult?.repository?.url||"N/A"),1)])),_:1}),e.$store.state.packages.packageResult?.contributors?((0,c.wg)(),(0,c.iD)("div",k,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.$store.state.packages.packageResult?.contributors,((e,t)=>((0,c.wg)(),(0,c.j4)(_,{key:e?.email||e?.name},{default:(0,c.w5)((()=>[(0,c._)("strong",null,"contributors "+(0,i.zw)(t+1),1),(0,c.Uk)(": "+(0,i.zw)(e?.email||"N/A"),1)])),_:2},1024)))),128))])):(0,c.kq)("",!0)])),_:1}))])),_:1},8,["modelValue"]),(0,c.Wm)(x)])),_:1})}const v=e=>((0,c.dD)("data-v-1a8c152a"),e=e(),(0,c.Cn)(),e),w=v((()=>(0,c._)("strong",null,"DELIVR",-1)));function P(e,t,a,s,n,o){const r=(0,c.up)("v-toolbar-title"),l=(0,c.up)("v-toolbar");return(0,c.wg)(),(0,c.j4)(l,{prominent:""},{default:(0,c.w5)((()=>[(0,c.Wm)(r,{class:"title d-none d-sm-flex flex-grow-0 w-auto"},{default:(0,c.w5)((()=>[(0,c.Uk)(" JS"),w])),_:1}),(0,c.WI)(e.$slots,"default",{},void 0,!0)])),_:3})}var y={name:"AppHeader",data(){return{}}},_=a(89);const b=(0,_.Z)(y,[["render",P],["__scopeId","data-v-1a8c152a"]]);var x=b;const j={key:0,class:"d-flex justify-center mt-4"},R={class:"ma-2 pa-2"};function $(e,t,a,s,n,o){const r=(0,c.up)("v-btn");return o.lastPage>1?((0,c.wg)(),(0,c.iD)("div",j,[(0,c.Wm)(r,{class:"ma-2 pa-2",onClick:t[0]||(t[0]=e=>o.prevNextPage(-1)),disabled:0===a.page,variant:"outlined"},{default:(0,c.w5)((()=>[(0,c.Uk)(" < ")])),_:1},8,["disabled"]),(0,c._)("span",R,(0,i.zw)(a.page+1)+" of "+(0,i.zw)(o.lastPage),1),(0,c.Wm)(r,{class:"ma-2 pa-2",onClick:t[1]||(t[1]=e=>o.prevNextPage(1)),disabled:a.page+1===o.lastPage,variant:"outlined"},{default:(0,c.w5)((()=>[(0,c.Uk)(" > ")])),_:1},8,["disabled"])])):(0,c.kq)("",!0)}var I={name:"BasePagination",computed:{lastPage(){return Math.ceil(this.$store.state.packages.packagesResultsTotal/this.$store.state.packages.resultsOnPage)}},props:{items:{type:Array,default:()=>[]},itemsPerPage:{type:Number,default:10},page:{type:Number,default:0}},methods:{prevNextPage(e){this.$emit("newPage",this.page+e)}}};const O=(0,_.Z)(I,[["render",$]]);var T=O;function A(e,t,a,s,n,o){const r=(0,c.up)("v-text-field");return(0,c.wg)(),(0,c.j4)(r,{modelValue:n.searchInputText,"onUpdate:modelValue":t[0]||(t[0]=e=>n.searchInputText=e),"append-icon":"mdi-magnify",label:"Search all of npm (min 2 characters)",onInput:e.debouncedSearch,"single-line":"","hide-details":"",dense:""},null,8,["modelValue","onInput"])}function W(e,t){let a;return function(...s){const n=()=>{a=null,e(...s)};clearTimeout(a),a=setTimeout(n,t)}}var z={name:"PackagesSearch",data(){return{searchInputText:""}},methods:{search(){this.$emit("searchInput",this.searchInputText)}},created(){this.debouncedSearch=W(this.search,200)}};const S=(0,_.Z)(z,[["render",A]]);var L=S;const N=(0,c._)("thead",null,[(0,c._)("tr",null,[(0,c._)("th",{class:"text-left"}," Name "),(0,c._)("th",{class:"text-left"}," Author ")])],-1),U=["onClick"];function C(e,t,a,s,n,o){const r=(0,c.up)("v-table");return(0,c.wg)(),(0,c.j4)(r,{density:"compact"},{default:(0,c.w5)((()=>[N,(0,c._)("tbody",null,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(e.$store.state.packages.packagesResults,(e=>((0,c.wg)(),(0,c.iD)("tr",{key:e?.id,onClick:t=>o.onPackageClick(e?.package?.name)},[(0,c._)("td",null,(0,i.zw)(e.package?.name||"N/A"),1),(0,c._)("td",null,(0,i.zw)(e.package?.author?.name||"N/A"),1)],8,U)))),128))])])),_:1})}var D={name:"PackagesOutput",methods:{onPackageClick(e){this.$emit("onPackageClick",e)}}};const Z=(0,_.Z)(D,[["render",C]]);var V=Z,q=a(65),B=a.p+"img/1_bg_crop.f32e34a8.jpg";const H=e=>((0,c.dD)("data-v-4f27428d"),e=e(),(0,c.Cn)(),e),M=H((()=>(0,c._)("img",{class:"v-avatar avatar",src:B,alt:"Andrei"},null,-1))),F=H((()=>(0,c._)("span",{class:"mx-auto my-1 text-grey-darken-3"},"Andrei Krasovskii",-1))),K=H((()=>(0,c._)("span",{class:"mx-auto my-1 text-grey-darken-3"},"Social links",-1)));function Y(e,t,a,s,n,o){const r=(0,c.up)("v-col"),l=(0,c.up)("v-btn"),i=(0,c.up)("v-row"),u=(0,c.up)("v-container"),g=(0,c.up)("v-footer");return(0,c.wg)(),(0,c.j4)(g,{class:"bg-grey-lighten-1 flex-grow-0"},{default:(0,c.w5)((()=>[(0,c.Wm)(u,null,{default:(0,c.w5)((()=>[(0,c.Wm)(i,{justify:"start",align:"start","no-gutters":""},{default:(0,c.w5)((()=>[(0,c.Wm)(r,{class:"text-center mt-4 d-flex flex-column align-center order-sm-first",cols:"12",sm:"3"},{default:(0,c.w5)((()=>[M,F])),_:1}),(0,c.Wm)(r,{class:"mt-4 d-flex flex-column align-center",order:"first",cols:"12",sm:"9"},{default:(0,c.w5)((()=>[K,(0,c.Wm)(i,{justify:"center",align:"center","no-gutters":""},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(n.icons,(e=>((0,c.wg)(),(0,c.j4)(l,{href:e.link,target:"_blank",key:e.name,class:"mx-4",icon:e.name,link:"",color:"grey-darken-3",variant:"text"},null,8,["href","icon"])))),128))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var E={name:"AppFooter",data(){return{icons:[{name:"mdi-github",link:"https://github.com/krass1251/frozeneon"},{name:"mdi-linkedin",link:"https://www.linkedin.com/in/krass1251/"},{name:"mdi-file-account",link:"https://docs.google.com/document/d/1-S1jFlejdByWZUXhfG_6cz8X6mI1hq7DxjBc7L0cjAw/edit#"},{name:"mdi-youtube",link:"https://www.youtube.com/watch?v=f0SvTGnB3Ok"}]}}};const G=(0,_.Z)(E,[["render",Y],["__scopeId","data-v-4f27428d"]]);var X=G,J={name:"App",components:{AppHeader:x,PackagesSearch:L,PackagesOutput:V,BasePagination:T,AppFooter:X},data(){return{page:0,text:"",dialog:!1,results:[]}},watch:{dialog(e){e||this.setPackageResult({})}},methods:{...(0,q.nv)("packages",["getPackages","getPackage"]),...(0,q.OI)("packages",["setPackageResult"]),updatePage(e){this.page=e,this.search()},setText(e){this.text=e,this.page=0,this.search()},search(){this.getPackages({url:this.$store.state.packages.searchApiUrl,text:this.text,from:this.page*this.$store.state.packages.resultsOnPage,size:this.$store.state.packages.resultsOnPage})},onPackageClick(e){this.dialog=!0,this.getPackage({url:this.$store.state.packages.packageApiUrl,name:e})}}};const Q=(0,_.Z)(J,[["render",h]]);var ee=Q;function te(){return{packagesResults:[],packageResult:{},packagesResultsTotal:0,searchApiUrl:"https://registry.npmjs.org/-/v1/search",packageApiUrl:"https://registry.npmjs.org",resultsOnPage:10,isLoading:!1,isPopupLoading:!1}}var ae=te;const se={};var ne=se;function oe(e,t){e.packageResult=t}var re=oe;function le(e,t){e.packagesResults=t}var ce=le;function ie(e,t){e.packagesResultsTotal=t}var ue=ie;function ge(e,t){e.isLoading=t}var pe=ge;function de(e,t){e.isPopupLoading=t}var me=de;const fe={setPackageResult:re,setPackagesResults:ce,setPackagesResultsTotal:ue,setIsLoading:pe,setIsPopupLoading:me};var ke=fe,he=a(5939);async function ve({commit:e},t){const{url:a,name:s}=t;try{e("setIsPopupLoading",!0);const t=await he.Z.get(`${a}/${s}`);e("setPackageResult",t?.data||{}),e("setIsPopupLoading",!1)}catch(n){console.error(n),e("setPackageResult",{}),e("setIsPopupLoading",!1)}}var we=ve;async function Pe({commit:e},t){const{url:a,text:s,from:n,size:o}=t;let r="";if(n&&(r=`&from=${n}`),s.length<2)return e("setPackagesResults",[]),void e("setPackagesResultsTotal",0);try{e("setIsLoading",!0);const t=await he.Z.get(`${a}?text=${s}&size=${o}${r}`);e("setPackagesResults",t?.data?.objects||[]),e("setPackagesResultsTotal",t?.data?.total||0),e("setIsLoading",!1)}catch(l){console.error(l),e("setPackagesResults",[]),e("setPackagesResultsTotal",0),e("setIsLoading",!1)}}var ye=Pe;const _e={getPackage:we,getPackages:ye};var be=_e;const xe={namespaced:!0,state:ae(),getters:ne,mutations:ke,actions:be};var je=xe,Re=(0,q.MT)({state:{},getters:{},mutations:{},actions:{},modules:{packages:je}});a(9773);const $e=(0,n.Rd)({components:o,directives:r,icons:{defaultSet:"mdi",aliases:l.j,sets:{mdi:l.t}}});(0,s.ri)(ee).use(Re).use($e).mount("#app")}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,o){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],n=e[u][1],o=e[u][2];for(var l=!0,c=0;c<s.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[c])}))?s.splice(c--,1):(l=!1,o<r&&(r=o));if(l){e.splice(u--,1);var i=n();void 0!==i&&(t=i)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,r=s[0],l=s[1],c=s[2],i=0;if(r.some((function(t){return 0!==e[t]}))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(c)var u=c(a)}for(t&&t(s);i<r.length;i++)o=r[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},s=self["webpackChunkfrozeneon"]=self["webpackChunkfrozeneon"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2188)}));s=a.O(s)})();
//# sourceMappingURL=app.3148654d.js.map