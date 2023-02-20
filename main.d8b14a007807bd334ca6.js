"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{569:(e,t,n)=>{var r=n(634),a=n(378),s=n(401);function i(...e){const t=[];return e.forEach((e=>{t.push(e),e.endsWith("/")||t.push("/")})),t.join("")}const c=new s.xQ,l=new s.xQ,o=a.forwardRef((({path:e,children:t,...n},r)=>a.createElement("a",{...n,href:e,onClick:t=>{t.defaultPrevented||0!==t.button||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),(e=>{e!==window.location.pathname&&(window.history.pushState(null,document.title,e),c.next(e))})(e))},ref:r},t)));class u extends Error{}function m(e){return(t,n)=>{const r=e(t,n);if(null==r)throw new u(`required field "${n}" is missing.`);return r}}const d=(e,t)=>e[t],h=d,p=m(d),f=m(((e,t)=>new Date(e[t]))),E=(e,t,n)=>{var r,a;return null!==(a=null===(r=e[t])||void 0===r?void 0:r.map(n))&&void 0!==a?a:[]};class w{constructor(e,t,n,r,a){this.title=e,this.name=t,this.abstract=n,this.created=r,this.updated=a}static deserialize(e){return new w(p(e,"title"),p(e,"name"),p(e,"abstract"),f(e,"created"),f(e,"updated"))}}class g{constructor(e,t,n,r,a,s,i,c,l){this.title=e,this.name=t,this.abstract=n,this.created=r,this.updated=a,this.content=s,this.thumbnail=i,this.categories=c,this.tags=l}static deserialize(e){return new g(p(e,"title"),p(e,"name"),p(e,"abstract"),f(e,"created"),f(e,"updated"),p(e,"content"),h(e,"thumbnail"),E(e,"categories",b.deserialize),[])}}class v{constructor(e,t,n){this.name=e,this.content=t,this.children=n}static deserialize(e){return new v(p(e,"name"),p(e,"content"),E(e,"children",v.deserialize))}}class b{constructor(e,t){this.name=e,this.content=t}static deserialize(e){return new b(p(e,"name"),p(e,"content"))}}class k{constructor(e,t,n){this.name=e,this.content=t,this.posts=n}static deserialize(e){return new k(p(e,"name"),p(e,"content"),E(e,"children",w.deserialize))}}class y{constructor(e,t,n){this.recent=e,this.categories=t,this.description=n}static deserialize(e){return new y(E(e,"recent",w.deserialize),E(e,"categories",v.deserialize),p(e,"meta.description"))}}class N extends Error{}class x extends Error{}function z(e){return fetch(["",...e,""].join("/")).then((e=>{if(e.ok)return e.json();throw e.status>=500?new x("failed to retrieve resource"):404===e.status?new N("failed to retrieve resource"):new Error("failed to retrieve resource")}))}class S{constructor(e=z){this.get=e,this.BASE="api",this.POSTS="posts",this.CATEGORIES="categories"}async getPostList(){return this.get([this.BASE,this.POSTS]).then((e=>e.map(w.deserialize)))}async getPost(e){return this.get([this.BASE,this.POSTS,e]).then(g.deserialize)}async getHomePage(){return this.get([this.BASE]).then(y.deserialize)}async getCategory(e){return this.get([this.BASE,this.CATEGORIES,e]).then(k.deserialize)}}const C={"motion-puzzle":()=>n.e(748).then(n.bind(n,748)),"rotation-visualization":()=>Promise.all([n.e(882),n.e(243)]).then(n.bind(n,243))},$=[{key:"rotation-visualization",name:"Rotation Visualization",description:"Visualization of rotation in a three-dimensional space, showing you how it affects the rotation matrix and quaternion"}];class A extends Error{constructor(e){super(`unexpected case: ${JSON.stringify(e)}`)}}const _="Chester Liu";class P{constructor(e){this.content=e,this.type="home",this.title=_,this.meta={description:e.description}}static deserialize(e){return new P(y.deserialize(e.content))}}class O{constructor(){this.type="apps",this.title=`Apps | ${_}`,this.meta={description:"A collection of web apps published on this site."}}static deserialize(){return new O}}class T{constructor(e){this.name=e,this.type="appitem";const t=$.find((t=>t.key===e));if(null==t)throw new Error(`App with key "${t}" cannot be loaded`);this.title=`${t.name} | ${_}`,this.meta={description:t.description}}static deserialize(e){return new T(e.name)}}class B{constructor(e){this.content=e,this.type="postitem",this.title=`${e.title} | ${_}`,this.meta={description:e.abstract}}static deserialize(e){return new B(g.deserialize(e.content))}}class L{constructor(){this.type="notfound",this.title=`Page not found | ${_}`,this.meta={description:void 0}}static deserialize(){return new L}}class M{constructor(){this.type="error",this.title=`Server Error | ${_}`,this.meta={description:void 0}}static deserialize(){return new M}}class D{constructor(e){this.page=e}static deserialize(e){return new D(function(e){switch(e.type){case"home":return P.deserialize(e);case"apps":return O.deserialize();case"appitem":return T.deserialize(e);case"postitem":return B.deserialize(e);case"notfound":return L.deserialize();case"error":return M.deserialize();default:throw new Error(`Unhandled page type ${e}`)}}(e.page))}}const R={home:"/",posts:"/posts/",apps:"/apps/"};var I=n(42);function q(e){switch(e){case"hello-world":case"motion-puzzle":return"motion-puzzle";case"rotation-visualization":return"rotation-visualization";default:throw new Error(`cannot resolve widget ${e}`)}}function U(e){return C[q(e)]()}function j(e){const t=q(e);if(!$.map((e=>e.key)).includes(t))throw new Error(`cannot load widget ${e}`);return U(t),t}const F={subtitle:"T",list:"U",row:"V",divider:"W",link:"X"};function G(){return a.createElement("main",null,a.createElement("p",{className:F.subtitle},"A collection of web apps published on this website."),a.createElement("ul",{className:F.list},$.map((({key:e,name:t,description:n})=>a.createElement("li",{key:e,className:F.row},a.createElement("hr",{className:F.divider}),a.createElement(o,{className:F.link,path:i(R.apps,e)},a.createElement("h2",null,t)),a.createElement("p",null,n))))))}class H extends a.Component{constructor(e){super(e),this.load=async()=>{var e;try{const{name:t,params:n}=null!==(e=this.props.bootstrap)&&void 0!==e?e:await this.props.load(),{createWidget:r}=await U(t);return r(n)}catch(e){return a.createElement("div",{className:"i f"},"App could not be loaded 😢",a.createElement("button",{onClick:()=>this.retry()},"try again"))}},this.state={Content:this.createLoader()}}createLoader(){return a.lazy((()=>this.load().then((e=>({default:()=>e})))))}retry(){this.setState({Content:this.createLoader()})}render(){return a.createElement(a.Suspense,{fallback:a.createElement("div",{className:"g f"})},a.createElement(this.state.Content,null))}}function J({name:e}){return a.createElement(H,{bootstrap:{name:e,params:""}})}const W={message:"F",reload:"G"};function K(){const e=a.useCallback((()=>{window.location.reload()}),[]);return a.createElement("div",{className:W.message},"Unable to load the page, please try ",a.createElement("button",{className:W.reload,onClick:e},"refresh"),".")}const Q={list:"N",row:"O",divider:"P",link:"Q",time:"R",readmore:"S"},V={ssr:"w",container:"Z",emoji:"__",pop:"_a",name:"_c",animate:"_d",title:"_e",location:"_f","block-background":"_g","block-foreground":"_h"};function Z(){return a.createElement("div",{className:V.container},a.createElement("div",{className:V.emoji},"👋"),a.createElement("h1",{className:V.name},a.createElement("div",{className:V.animate},"Chester Liu")),a.createElement("div",{className:V.title},a.createElement("div",{className:V.animate},"Software Engineer at Atlassian")),a.createElement("div",{className:V.location},a.createElement("div",{className:V.animate},"Sydney • Australia")))}const X=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Y({content:{recent:e}}){return a.createElement("main",null,a.createElement("div",{className:Q.row},a.createElement(Z,null)),a.createElement("ul",{className:Q.list},e.map((({name:e,title:t,abstract:n,created:r})=>{return a.createElement("li",{className:Q.row,key:e},a.createElement("hr",{className:Q.divider}),a.createElement("article",null,a.createElement("time",{dateTime:r.toISOString(),title:r.toISOString(),className:Q.time},`${(s=r).getUTCDate()} ${X[s.getMonth()]} ${s.getUTCFullYear()}`),a.createElement("h2",null,a.createElement(o,{path:i(R.posts,e),className:Q.link},t)),a.createElement("p",null,n),a.createElement(o,{tabIndex:-1,path:i(R.posts,e),className:Q.readmore},"Read more")));var s}))))}const ee={row:"C",link:"D",button:"E"};function te(){const e=a.useCallback((()=>{window.history.back()}),[]);return a.createElement("div",{className:ee.row},a.createElement("h1",null,"Page not found"),a.createElement("p",null,"You seem to have found a dead link."),a.createElement("p",null,"There is nothing to see here, but you can"),a.createElement("ul",null,a.createElement("li",null,"Go to the ",a.createElement(o,{path:"/",className:ee.link},"home page"),"."),a.createElement("li",null,a.createElement("button",{className:ee.button,onClick:e},"Go back")," to the page you came from.")))}const ne={ssr:"w"},re={container:"j",active:"k"};function ae(e){return e.split("/").filter((e=>""!=e))}function se(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function ie(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}class ce{constructor(e,t=[]){this.defualt=e,this.resources=t,this.resolve=this.resolve.bind(this)}register(...e){e.forEach((e=>this.resources.push(e)))}resolve(e){for(const{path:t,resolve:n,exact:r=!1}of this.resources)if((r?ie:se)(ae(t),ae(e)))return n(e);return this.defualt}}const le=new L;var oe=n(348),ue=n(854),me=n(205),de=n(941),he=n(752),pe=n(138);const fe={codeBlock:"_l",comment:"_m",punctuation:"_n",tag:"_o",function:"_p",string:"_q",keyword:"_r",plainText:"_s"};function Ee(e){if(null!=e)return I(e.map((e=>{switch(e){case"comment":return fe.comment;case"punctuation":return fe.punctuation;case"function":return fe.function;case"string":return fe.string;case"keyword":return fe.keyword;case"tag":return fe.tag;case"token":return fe.token;case"plain-text":return;default:throw new Error(`Unhandled highligh content: ${e}`)}})))}function we(e,t){var n;return"text"===e.type?e.value:a.createElement(e.tagName,{key:t,className:Ee(null===(n=e.properties)||void 0===n?void 0:n.className)},e.children.map(we))}oe.$.register(pe.Z);const ge=({code:e,language:t})=>{const n=oe.$.highlight(e,t);return a.createElement("pre",null,a.createElement("code",{className:fe.codeBlock},n.children.map(we)))};class ve{constructor(e,t){this.name=e,this.params=t}static deserialize(e){return new ve(e.name,e.params)}}const be={left:"_i",center:"_k",right:"_j"},ke={codeBlock(e,t){if("widget"===t){const t=async()=>ve.deserialize(JSON.parse(e));return a.createElement(H,{load:t})}return t&&oe.$.registered(t)?a.createElement(ge,{code:e,language:t}):a.createElement("pre",null,a.createElement("code",null,e.trim()))},blockquote:e=>a.createElement("blockquote",null,e),heading:(e,t,n)=>a.createElement(`h${t+1}`,{key:n,id:n},e),thematicBreak:()=>a.createElement("hr",null),list:(e,t=!1,n)=>t?a.createElement("ol",{start:n},e):a.createElement("ul",null,e),listitem:e=>a.createElement("li",null,e),checkbox:e=>a.createElement("input",{type:"checkbox",checked:e,readOnly:!0}),paragraph:e=>a.createElement("p",null,e),table:(e,t)=>a.createElement("table",null,a.createElement("thead",null,e),a.createElement("tbody",null,t)),tablerow:e=>a.createElement("tr",null,e),tablecell(e,t,n){const r=n&&be[n],s=t?"th":"td";return a.createElement(s,{className:r},e)},strong:e=>a.createElement("strong",null,e),emphasis:e=>a.createElement("em",null,e),inlineCode:e=>a.createElement("code",null,e),delete:e=>a.createElement("del",null,e),link:(e,t,n)=>a.createElement("a",{href:t,title:n},e),image:(e,t,n)=>a.createElement("img",{src:e,title:t,alt:n}),text:e=>e,break:()=>a.createElement("br",null)};class ye extends Error{constructor(e){super(`Unsuppoted markdown content type: ${e.type}, receoved ${JSON.stringify(e)}`)}}function Ne(e){const t=[e];return function(e){let n=0;const r=e(t[t.length-1],(e=>{n+=1,t.push(e)}));return t.splice(t.length-n,t.length),r}}const xe=Ne(!0),ze=Ne(!1),Se=Ne(void 0),Ce=Ne(void 0);function $e(e,t){return a.Children.toArray(e.map((e=>{switch(e.type){case"paragraph":return xe((n=>n?t.paragraph($e(e.children,t)):$e(e.children,t)));case"heading":return t.heading($e(e.children,t),e.depth);case"thematicBreak":return t.thematicBreak();case"blockquote":return t.blockquote($e(e.children,t));case"list":return e.spread,t.list($e(e.children,t),e.ordered,e.start);case"table":return Se(((n,r)=>ze(((n,a)=>{r(e.align),a(!0);const s=$e(e.children.slice(0,1),t);a(!1);const i=$e(e.children.slice(1),t);return t.table(s,i)}))));case"html":case"yaml":case"definition":case"footnoteDefinition":case"imageReference":case"footnote":case"footnoteReference":case"linkReference":throw new ye(e);case"code":return t.codeBlock(e.value,e.lang,e.meta);case"listItem":return xe(((n,r)=>(r(e.spread||!1),null==e.checked?t.listitem($e(e.children,t)):t.listitem(a.createElement(a.Fragment,null,t.checkbox(e.checked),$e(e.children,t))))));case"tableRow":return Se((n=>t.tablerow(e.children.map(((e,r)=>Ce(((a,s)=>(n&&s(n[r]),$e([e],t)))))))));case"tableCell":return ze((n=>Ce((r=>t.tablecell($e(e.children,t),n,null!=r?r:void 0)))));case"text":return t.text(e.value);case"emphasis":return t.emphasis($e(e.children,t));case"strong":return t.strong($e(e.children,t));case"delete":return t.delete($e(e.children,t));case"inlineCode":return t.inlineCode(e.value);case"break":return t.break();case"image":return t.image(e.url,e.title,e.alt);case"link":return t.link($e(e.children,t),e.url,e.title);default:throw new Error(`failed to render ${JSON.stringify(e)} element`)}})))}const Ae=(0,de.l)().use(me.Z).use(ue.Z);function _e(e,t){const n=Ae.parse(e);if((0,he.is)(n,"root"))return a.createElement(a.Fragment,null,$e(n.children,t));throw new Error(`Expected mdast.Root, received ${n}`)}const Pe=a.memo((({content:e,decorate:t=(e=>e)})=>_e(e,t(ke)))),Oe={markdown:"_t",article:"Y _t"};function Te({post:{title:e,content:t}}){return a.createElement("article",{className:Oe.article},a.createElement("h1",null,e),a.createElement(Pe,{content:t}))}const Be=400,Le=800+Be;let Me=!0;function De({transition:e,children:t}){Me&&(Me=!e);const n=I(re.container,e&&re.active,Me&&ne.ssr);return a.createElement("div",{className:n},t)}function Re({initialPage:e,footer:t,updateDocumentHead:n}){const r=function(e,t){return new ce(Promise.resolve(le),[{path:R.home,exact:!0,resolve:async()=>new P(await e.getHomePage())},{path:R.apps,exact:!0,resolve:async()=>new O},{path:R.apps,resolve:async e=>new T(t(e.split("/").filter((e=>""!=e))[1]))},{path:R.posts,exact:!0,resolve:async()=>le},{path:R.posts,resolve:async t=>new B(await e.getPost(t.split("/").filter((e=>""!=e))[1]))}])}(new S,j);return a.createElement((function(){const[i,c]=a.useState(e),[o,u]=a.useState(!1);return a.useEffect((()=>l.pipe((0,s.wt)((e=>new s.y$((t=>{let n=!0;const a=new Promise((e=>setTimeout(e,Be))),s=(e=>r.resolve(e).catch((e=>(Promise.reject(e),e instanceof N?new L:new M))))(e),i=new Promise((e=>setTimeout(e,Le)));return u(!0),a.then((()=>(n&&t(void 0),s))).then((e=>{n&&(u(!1),t(e),n=!1)})),i.then((()=>{n&&(u(!1),t(void 0))})),()=>{n=!1}}))))).pipe((0,s.bw)(n)).subscribe(c)),[]),a.createElement(De,{transition:o},null==i?a.createElement("div",null,"Loading..."):function(e){switch(e.type){case"home":return a.createElement(Y,{content:e.content});case"apps":return a.createElement(G,null);case"appitem":return a.createElement(J,{name:e.name});case"postitem":return a.createElement(Te,{post:e.content});case"notfound":return a.createElement(te,null);case"error":return a.createElement(K,null)}}(i),t)}),null)}class Ie extends a.Component{constructor(e){super(e),this.state={transitionActive:!1}}componentDidUpdate(e){!e.active&&this.props.active?this.state.transitionActive?this.timer&&clearTimeout(this.timer):requestAnimationFrame((()=>{this.setState({transitionActive:!0})})):e.active&&!this.props.active&&(this.timer=setTimeout((()=>{this.setState({transitionActive:!1})}),this.props.durationMs))}render(){const{children:e,active:t,states:n}=this.props,{transitionActive:r}=this.state;return e(t?r?n.active:n.enter:r?n.exit:n.inactive)}}const qe={nav:"q",list:"r",item:"s",link:"t",indicator:"u"};class Ue extends a.Component{constructor(e){super(e),this.state={}}static getDerivedStateFromProps(e){const{spec:t}=e;return null==t?{}:{transform:`translateX(${t.left}px) scaleX(${t.width/100})`,opacity:.2}}render(){const{transform:e,opacity:t}=this.state,n={enter:{display:"block",transform:e},active:{display:"block",transform:e,opacity:t},exit:{display:"block",transform:e},inactive:{display:"none"}};return a.createElement(Ie,{active:null!=this.props.spec,states:n,durationMs:400},(e=>a.createElement("div",{style:e,className:qe.indicator})))}}function je({items:e}){const[t,n]=a.useState(void 0),r=a.useCallback((e=>{const t=e.currentTarget.offsetLeft,r=e.currentTarget.clientWidth;null!=t&&null!=r&&n({left:t,width:r})}),[]),s=a.useCallback((()=>{n(void 0)}),[]);return a.createElement("nav",{className:qe.nav},a.createElement(Ue,{spec:t}),a.createElement("ul",{className:qe.list},e.map((({path:e,content:t})=>a.createElement("li",{className:qe.item,key:e},a.createElement(o,{path:e,className:qe.link,onMouseEnter:r,onMouseLeave:s},t))))))}const Fe={footer:"l",divider:"m",links:"n",icon:"o",copyright:"p"},Ge=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"LinkedIn",role:"img",viewBox:"0 0 512 512",fill:"#fff"},a.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#0077b5"}),a.createElement("circle",{cx:"142",cy:"138",r:"37"}),a.createElement("path",{stroke:"#fff",strokeWidth:"66",d:"M244 194v198M142 194v198"}),a.createElement("path",{d:"M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"})),He=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",role:"img",viewBox:"0 0 512 512"},a.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#181717"}),a.createElement("path",{fill:"#fff",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"}));function Je(){return a.createElement("footer",{className:Fe.footer},a.createElement("hr",{className:Fe.divider}),a.createElement("div",{className:Fe.links},a.createElement("a",{className:Fe.icon,href:"https://www.linkedin.com/in/chenruiliu/",target:"_blank",rel:"external nofollow noreferrer"},Ge),a.createElement("a",{className:Fe.icon,href:"https://github.com/Cansn0w",target:"_blank",rel:"external nofollow noreferrer"},He)),a.createElement("div",{className:Fe.copyright},"© 2022-2023 Chester Liu."))}function We(e){var t,n;null!=e&&null!=(null===window||void 0===window?void 0:window.document)&&(document.title=e.title,null===(t=document.getElementsByTagName("meta").namedItem("description"))||void 0===t||t.setAttribute("content",null!==(n=e.meta.description)&&void 0!==n?n:""))}window.addEventListener("DOMContentLoaded",(()=>{const e=D.deserialize(window.bootstrap);window.addEventListener("popstate",(()=>{c.next(window.location.pathname)})),c.pipe((0,s.xb)(void 0,window.location.pathname)).subscribe((e=>{l.next(e)})),(0,r.a)(document.getElementById("root"),function(e){const t=(n=[{path:R.home,content:"Home"},{path:R.apps,content:"Apps"}],a.createElement(je,{items:n}));var n;const r=Re({initialPage:e.page,footer:a.createElement(Je,null),updateDocumentHead:We});return a.createElement(a.StrictMode,null,t,r)}(e))}))},401:(e,t,n)=>{n.d(t,{Gv:()=>o,UI:()=>l,bw:()=>d,wt:()=>m,xQ:()=>c,xb:()=>u,y$:()=>i});const r={},a=()=>r,s=(e,t)=>e===t;class i{constructor(e){this.subscribe=e}pipe(e){return e(this)}}class c extends i{constructor(){super((e=>{const t=t=>e(t);return this.subscribers.push(t),()=>{const e=this.subscribers.indexOf(t);-1!==e&&this.subscribers.splice(e,1)}})),this.subscribers=[],this.next=this.next.bind(this)}next(e){this.subscribers.forEach((t=>t(e)))}}function l(e){return function(t){return new i((n=>t.subscribe((t=>{n(e(t))}))))}}function o(){return function(e){let t;return new i((n=>e.subscribe((e=>{null==t||n([t,e]),t=e}))))}}function u(e=s,t){return function(n){let a=null!=t?t:r;return new i((t=>n.subscribe((n=>{a!==r&&e(n,a)||(a=n,t(a))}))))}}function m(e){return function(t){let n=a;return new i((r=>{const a=t.subscribe((t=>{n(),n=e(t).subscribe(r)}));return()=>{n(),a()}}))}}function d(e){return function(t){return new i((n=>t.subscribe((t=>{e(t),n(t)}))))}}}},e=>{e.O(0,[212],(()=>(569,e(e.s=569)))),e.O()}]);