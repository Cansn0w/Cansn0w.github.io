(self.webpackChunk=self.webpackChunk||[]).push([[179],{5388:(e,t,n)=>{"use strict";var r=n(7634),a=n(7378),s=n(7401);function c(...e){const t=[];return e.forEach((e=>{t.push(e),e.endsWith("/")||t.push("/")})),t.join("")}const i=new s.xQ,l=new s.xQ,o=a.forwardRef((({path:e,children:t,...n},r)=>a.createElement("a",{...n,href:e,onClick:t=>{t.defaultPrevented||0!==t.button||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),(e=>{e!==window.location.pathname&&(window.history.pushState(null,document.title,e),i.next(e))})(e))},ref:r},t)));class u extends Error{}function m(e){return(t,n)=>{const r=e(t,n);if(null==r)throw new u(`required field "${n}" is missing.`);return r}}const h=(e,t)=>e[t],d=h,p=m(h),f=m(((e,t)=>new Date(e[t]))),w=(e,t,n)=>{var r,a;return null!==(a=null===(r=e[t])||void 0===r?void 0:r.map(n))&&void 0!==a?a:[]};class E{constructor(e,t,n,r,a){this.title=e,this.name=t,this.abstract=n,this.created=r,this.updated=a}static deserialize(e){return new E(p(e,"title"),p(e,"name"),p(e,"abstract"),f(e,"created"),f(e,"updated"))}}class g{constructor(e,t,n,r,a,s,c,i,l){this.title=e,this.name=t,this.abstract=n,this.created=r,this.updated=a,this.content=s,this.thumbnail=c,this.categories=i,this.tags=l}static deserialize(e){return new g(p(e,"title"),p(e,"name"),p(e,"abstract"),f(e,"created"),f(e,"updated"),p(e,"content"),d(e,"thumbnail"),w(e,"categories",b.deserialize),[])}}class v{constructor(e,t,n){this.name=e,this.content=t,this.children=n}static deserialize(e){return new v(p(e,"name"),p(e,"content"),w(e,"children",v.deserialize))}}class b{constructor(e,t){this.name=e,this.content=t}static deserialize(e){return new b(p(e,"name"),p(e,"content"))}}class y{constructor(e,t,n){this.name=e,this.content=t,this.posts=n}static deserialize(e){return new y(p(e,"name"),p(e,"content"),w(e,"children",E.deserialize))}}class k{constructor(e,t,n){this.recent=e,this.categories=t,this.description=n}static deserialize(e){return new k(w(e,"recent",E.deserialize),w(e,"categories",v.deserialize),p(e,"meta.description"))}}class z extends Error{}class N extends Error{}function x(e){return fetch(["",...e,""].join("/")).then((e=>{if(e.ok)return e.json();throw e.status>=500?new N("failed to retrieve resource"):404===e.status?new z("failed to retrieve resource"):new Error("failed to retrieve resource")}))}class _{constructor(e=x){this.get=e,this.BASE="api",this.POSTS="posts",this.CATEGORIES="categories"}async getPostList(){return this.get([this.BASE,this.POSTS]).then((e=>e.map(E.deserialize)))}async getPost(e){return this.get([this.BASE,this.POSTS,e]).then(g.deserialize)}async getHomePage(){return this.get([this.BASE]).then(k.deserialize)}async getCategory(e){return this.get([this.BASE,this.CATEGORIES,e]).then(y.deserialize)}}const C={"motion-puzzle":()=>n.e(349).then(n.bind(n,5349)),"rotation-visualization":()=>Promise.all([n.e(859),n.e(636)]).then(n.bind(n,6636))},S={widgets:[{key:"rotation-visualization",name:"Rotation Visualization",description:"Visualization of rotation in a three-dimensional space, showing you how it affects the rotation matrix and quaternion"}]};Error;class A{constructor(e){this.content=e,this.type="home",this.title="Chester Liu",this.meta={description:e.description}}static deserialize(e){return new A(k.deserialize(e.content))}}class ${constructor(){this.type="apps",this.title="Apps | Chester Liu",this.meta={description:"A collection of web apps published on this site."}}static deserialize(){return new $}}class P{constructor(e){this.name=e,this.type="appitem";const t=S.widgets.find((t=>t.key===e));if(null==t)throw new Error(`App with key "${t}" cannot be loaded`);this.title=`${t.name} | Chester Liu`,this.meta={description:t.description}}static deserialize(e){return new P(e.name)}}class M{constructor(e){this.content=e,this.type="postitem",this.title=`${e.title} | Chester Liu`,this.meta={description:e.abstract}}static deserialize(e){return new M(g.deserialize(e.content))}}class O{constructor(){this.type="notfound",this.title="Page not found | Chester Liu",this.meta={description:void 0}}static deserialize(){return new O}}class T{constructor(){this.type="error",this.title="Server Error | Chester Liu",this.meta={description:void 0}}static deserialize(){return new T}}class B{constructor(e){this.page=e}static deserialize(e){return new B(function(e){switch(e.type){case"home":return A.deserialize(e);case"apps":return $.deserialize();case"appitem":return P.deserialize(e);case"postitem":return M.deserialize(e);case"notfound":return O.deserialize();case"error":return T.deserialize();default:throw new Error(`Unhandled page type ${e}`)}}(e.page))}}const L="/posts/",D="/apps/";var R=n(42);function I(e){switch(e){case"hello-world":case"motion-puzzle":return"motion-puzzle";case"rotation-visualization":return"rotation-visualization";default:throw new Error(`cannot resolve widget ${e}`)}}function U(e){return C[I(e)]()}function q(e){const t=I(e);if(!S.widgets.map((e=>e.key)).includes(t))throw new Error(`cannot load widget ${e}`);return U(t),t}function F(){return a.createElement("main",null,a.createElement("p",{className:"_T"},"A collection of web apps published on this website."),a.createElement("ul",{className:"_U"},S.widgets.map((({key:e,name:t,description:n})=>a.createElement("li",{key:e,className:"_V"},a.createElement("hr",{className:"_W"}),a.createElement(o,{className:"_X",path:c(D,e)},a.createElement("h2",null,t)),a.createElement("p",null,n))))))}class G extends a.Component{constructor(e){super(e),this.state={content:void 0}}async load(){var e;this.setState({content:void 0});try{const{name:t,params:n}=null!==(e=this.props.bootstrap)&&void 0!==e?e:await this.props.load(),{createWidget:r}=await U(t);this.setState({content:r(n)})}catch(e){this.setState({content:this.renderErrorMessage()})}}componentDidMount(){this.load()}renderErrorMessage(){return a.createElement("div",{className:"_i _f"},"App could not be loaded 😢",a.createElement("button",{onClick:()=>this.load()},"try again"))}render(){return this.state.content?this.state.content:a.createElement("div",{className:"_g _f"})}}function H({name:e}){return a.createElement(G,{bootstrap:{name:e,params:""}})}function J(){const e=a.useCallback((()=>{window.location.reload()}),[]);return a.createElement("div",{className:"_F"},"Unable to load the page, please try ",a.createElement("button",{className:"_G",onClick:e},"refresh"),".")}const j="_4",W=a.createElement("svg",{className:"_2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 172.33 45.9",fill:"currentColor"},a.createElement("title",null,"Chester Liu"),a.createElement("path",{d:"M17.25 2.95C12.8 6.2 8.5 10.94 4.96 17.55c-3.54 6.6-3.5 7.4-4.12 9.2-.55 1.4-.69 2.9-.69 2.9-.15.97-.18 1.87-.12 2.7.18 2.27 1.3 4.4 3.35 6.37 2.35 2.23 4.85 3.32 7.52 3.27 2.31-.03 4.92-1 7.81-2.88a52.1 52.1 0 0 0 5.7-4.8l1.02-1.05c.76-.75 1.46-1.5 2.1-2.23-.07.28-.13.55-.16.77-.05.4-.04.72.05.96.06.17.15.34.3.58.17.24.33.43.52.61.82.83 1.52 1.24 2.1 1.24.14 0 .25-.03.53-.35.28-.32.9-1.06 1.73-2l2.18-2.45c.83-.93 2.5-2.72 3.33-3.53a39.6 39.6 0 0 1 1.8-1.69c-.55.93-.97 1.63-1.23 2.11a12.6 12.6 0 0 0-1.44 3.55 3.5 3.5 0 0 0 .45 2.5A4.04 4.04 0 0 0 39.54 35c.73.31.84.32 1.1.24.26-.07.36-.12.73-.33.38-.21.68-.43 2.36-2a78.3 78.3 0 0 0 2.9-2.82c-.08.73.02 1.38.28 1.93.4.84 1.02 1.6 1.86 2.26.69.47 1.4.86 2.11.99.47.07.94.05 1.44-.05.1-.02.51-.2 1.33-.63.6-.32.85-.47 1.57-1.02.01.01.41.5.66.7.52.45 1.17 1.05 1.72 1.17.54.13.75.09.75.09l.44-.04c.68-.06 1.64-.23 2.88-.5l1.02-.2 1.26-.22c.37-.08.7-.17 1.02-.27.84-.26.94-.9.13-2.2-.8-1.29-1.05-1.84-1.15-2.34-.36-1.73.25-3.34 1.84-4.81l.67-.57c-.3.5-.5.88-.6 1.14a2.3 2.3 0 0 0-.17.67c.02.36.2.76.48 1.1a4.64 4.64 0 0 0 1.9 1.43c.45.18.8.2 1.04.03.02-.02.04-.05.06-.17l.1-.5a7 7 0 0 1 .79-1.7l.58-.84.82-1.07c.46-.6.85-1.15 1.18-1.68.23-.33.38-.67.44-1.01.05-.25-.1-.58-.4-.91-.29-.34-.8-.75-.8-.75-.2-.14-.51-.3-1.12-.4-.6-.08-1.1-.08-1.94-.04-1.23.06-1.9.31-2.41.46-.94.3-1.84.7-2.7 1.24-2.05 1.29-3.19 2.87-3.4 4.74-.04.33-.05.67-.02 1.02l-2 1.48a83.8 83.8 0 0 1-2.6 1.89c-1.12.79-1.96 1.3-2.56 1.55 0 0-1.76.67-1.98.7-.5.11-.74.13-.94.13-.01-.45.08-1 .22-1.45.14-.45.22-.66.63-1.52.4-.86.83-1.55 1.31-2.22a3.56 3.56 0 0 0 1.96.62c.25-.02.58.13 2.46-.64.33-.17.57-.3 1.34-.87.78-.56.96-.8 1.31-1.24.38-.51.6-1.1.64-1.74.07-.48-.18-1.17-.73-1.78-.67-.76-1.16-1.34-2.68-1.9-1.51-.56-3.56.41-5.94 2.8a15.52 15.52 0 0 0-3.34 4.57v.01a40 40 0 0 1-1.1 1.02c-.91.85-1.67 1.48-2.43 2.06-.64.5-1.42 1.05-2.33 1.68-.13.1-.48.3-1.04.62l.33-.82c.26-.66.8-1.73 1.68-3.37.23-.43.6-1.08 1.11-1.96.52-.9.96-1.69 1.32-2.38.36-.71.68-1.4.94-2.08.1-.25 0-.55-.27-.9a5.26 5.26 0 0 0-1.16-1.06c-.55-.4-1-.64-1.45-.78-.47-.14-.8-.17-1.27.06s-.68.42-1.27.97c-.6.56-.7.66-1.8 1.9-1.1 1.24-1.35 1.64-2.42 3.04-1.07 1.4-2.32 3.14-3.63 5.03-.54.77-1.02 1.53-1.44 2.25l.44-1.26c.36-1.02 1.2-2.95 2.32-5.33 1.43-3.08 3.7-7.64 6.82-13.7.86-1.65 1.75-3.43 2.68-5.33.11-.25.03-.55-.25-.9a4.38 4.38 0 0 0-1.2-1.03c-.57-.36-.97-.53-1.24-.53-.17 0-.28.06-.34.18l-3.03 5.68a600.03 600.03 0 0 0-4.34 8.24 114.22 114.22 0 0 0-3.86 7.92 125.46 125.46 0 0 1-3.55 3.04c-.25.28-.77.7-1.63 1.32l-2.86 2.11A35.98 35.98 0 0 1 13 37.68c-2.36.87-4.62 1.4-5.42 1.29a4.62 4.62 0 0 1-1.87-.62 4 4 0 0 1-1.2-1.29 4.38 4.38 0 0 1-.63-1.68 9.8 9.8 0 0 1-.03-3.36c.1-.9.24-1.8.42-2.7.15-.49.1-.55.97-2.58A57.76 57.76 0 0 1 7.5 22 55.99 55.99 0 0 1 17.97 7.93 26.5 26.5 0 0 1 23.6 3.6a9.97 9.97 0 0 1 3.62-1.1c.8-.04 1.6.24 1.69.28l.35.56c.27.45.46 1.05.56 1.68.17.94.09 2.35-.25 4.21-.26 1.5-.8 3.05-1.63 4.64-.94 1.8-1.83 3.2-2.66 4.17a23 23 0 0 1-3.8 3.45c-.04.03-.02.1.06.2.1.1.2.18.32.24 0 0 .48.07 1.89-.44 1.02-.38 2.01-1 3.02-1.76a18.36 18.36 0 0 0 3.3-3.08 12.62 12.62 0 0 0 2.35-3.78c.67-1.97 1.08-4.43.65-6.22a7.88 7.88 0 0 0-1.83-3.46 9.97 9.97 0 0 0-1.73-1.62 8.05 8.05 0 0 0-3.4-1.5c-.78-.15-2.19 0-3.36.28-1.33.32-3.25.94-5.5 2.6zm66.1 1.76c-.22-.02-.37.05-.45.2a462.04 462.04 0 0 1-3.47 6.52 82.19 82.19 0 0 0-8.57.75l-1.3.2-1.02.17h-.15c-.06 0-.11 0-.2.04-.1.04-.15.1-.17.18-.01.07 0 .15.05.25.03.1.08.2.27.46s.26.34.75.83c.5.49 1.2.83 1.83.74 2.47-.31 4.78-.55 6.95-.72l-1.02 1.91c-.11.24-.48.93-1.09 2.09l-1.19 2.3-1.02 2.04a65.88 65.88 0 0 0-2.97 6.72c-.37.94-.6 1.74-.7 2.38-.06.42-.05.75.05 1a4.28 4.28 0 0 0 .82 1.22c.78.8 1.49 1.2 2.1 1.28.6.07.79.07 1.04 0 .26-.1.36-.14.77-.37.41-.23.73-.44.98-.67.52-.48.62-.6 1.21-1.2l1.17-1.1c.6-.57 1.17-1.14 1.73-1.73-.05.69.05 1.3.3 1.82.4.84 1.02 1.6 1.86 2.26.69.47 1.4.86 2.11.99.46.07.94.05 1.44-.05a14.14 14.14 0 0 0 3.94-2.45 30.3 30.3 0 0 0 2.76-2.5c-.2.57-.33 1.03-.4 1.38-.18.87.16 1.7 1.02 2.48.74.68 1.39 1.03 1.93 1.06.22.02.36-.04.42-.17.14.08.23.1.28.05.33-.45.83-1.07 1.5-1.88a79.2 79.2 0 0 0 1.47-1.79s1.08-1.36 1.18-1.44c.29-.32.35-.4.77-.93a41.2 41.2 0 0 1 2.82-3.21 6.98 6.98 0 0 0-.45 2.78c.05.53.26 1.05.64 1.56.38.5.82.88 1.32 1.14.06.05.16.07.27.07.13-.01.18-.08.13-.2a1.87 1.87 0 0 1-.2-.71c0-.25.04-.5.12-.77l.25-.67c.08-.17.21-.4.57-1.04.36-.63.84-1.42 1.51-2.43.67-1.01.81-1.23.9-1.4l.6-1.1c.17-.37-.1-.85-.8-1.45a3.01 3.01 0 0 0-.76-.77 3.49 3.49 0 0 0-1.25-.8c-.5-.19-.75-.16-.92-.11-.12.01-.32.12-.74.43-.43.3-.7.57-1.51 1.51-.81.94-1.48 1.82-2.5 3.4a139.36 139.36 0 0 0-5 8.35l.14-.55c.13-.5.45-1.43.88-2.45.83-2.04 2.07-4.74 3.72-8.12.17-.33 0-.75-.5-1.26s-1.05-.9-1.66-1.17c-.61-.26-.98-.27-1.11-.02a148.2 148.2 0 0 0-3.41 7.13l-1.95 1.45a95.09 95.09 0 0 1-2.6 1.89c-1.13.79-1.97 1.3-2.57 1.55 0 0-1.76.67-1.98.7-.5.11-.74.13-.94.13-.02-.45.08-1 .22-1.45a13.4 13.4 0 0 1 1.94-3.74 3.56 3.56 0 0 0 1.96.62c.24-.02.58.13 2.45-.64a11.57 11.57 0 0 0 1.77-1.14c.36-.3.54-.52.89-.97.38-.51.6-1.1.64-1.74a1.8 1.8 0 0 0-.22-1.21c-.1-.17-.3-.41-.64-.82a5.62 5.62 0 0 0-1.5-1.37 2.98 2.98 0 0 0-.86-.4c-1.7-.44-3.75.53-6.13 2.91a15.38 15.38 0 0 0-3.4 4.72l-.1.1-1.04.96a38.2 38.2 0 0 1-4.59 3.57c-.38.25-.74.47-1.09.65l.33-.92a66.54 66.54 0 0 1 2.48-5.8c1.38-3 3.35-6.97 5.9-11.91 2.29-.11 7.21-.2 9.25-.12 1.66.05 2.9.19 3.72.27 1.13.1 2.16.25 3.1.47.37.08.84.25 1.42.5.58.23.99.38 1.24.44.15.05.29.05.42 0s.16-.16.1-.35c-.27-.7-.75-1.61-2.76-2.59-2-.97-2.96-.94-3.7-1.05a50.7 50.7 0 0 0-6.14-.52 75.1 75.1 0 0 0-5.11-.08l2.06-4.09c.11-.25.03-.55-.25-.9a4.5 4.5 0 0 0-1.17-1.02 3.07 3.07 0 0 0-1.2-.56zm48.05 0a350.9 350.9 0 0 0-7.4 14.4l-1.85 3.85a189.69 189.69 0 0 0-2.5 5.27 71.27 71.27 0 0 0-1.66 3.9 55.2 55.2 0 0 0-1.13 2.99 25.81 25.81 0 0 0-1 3.72 8.15 8.15 0 0 0 .03 3.3c-.6.09-1.07.16-1.68.27a3.11 3.11 0 0 0-.62-.42c-.25-.12-.43-.17-.53-.15-.38.03-.72.02-1.11.1-.34.15-.59.3-.92.5a6 6 0 0 0-1.61.99c-.18.18-.13.44.15.8.28.34.55.61.82.81.52.43 1 .7 1.4.82.86.16 1.8-.05 4.35-.45.33-.05.83-.14 1.49-.27.33.2.6.32.8.37.2.05.27-.02.2-.2a.99.99 0 0 1-.13-.32 205.52 205.52 0 0 1 21.93-2.7c1.19-.05 1.94-.08 2.25-.08.2 0 .48.02.77.04.29.03.34.04.57.1.22.07.49.04.62-.14.13-.18.08-.47-.17-.87a4.97 4.97 0 0 0-1.12-1.19c-.48-.36-.96-.6-1.44-.72-.64-.16-1.8-.21-3.45-.14-1.81.1-3.79.26-5.92.5-4.27.45-8.97 1.1-14.1 1.93.2-.78.73-2.14 1.57-4.07 1.46-3.3 2.49-5.6 3.1-6.87.36-.75 1.17-2.43 2.4-5.06 1.26-2.65 2.3-4.82 3.1-6.53.83-1.7 1.67-3.38 2.51-5.03 1.37-2.73 2.57-5.05 3.6-6.95.18-.33.02-.75-.47-1.26a5.22 5.22 0 0 0-1.69-1.22 2.1 2.1 0 0 0-.76-.21c-.2 0-.33.06-.4.19zm20.09 12.15-.23.03c-.06.01-.12.04-.61.48-.5.43-.96.97-1.45 1.57-.5.6-.66.8-1.35 1.55-.7.74-.7.75-1.1 1.56.1.1.3.22.6.37.46.23.83.36 1.11.4a4.15 4.15 0 0 0 2.26-.4c.48-.25 1.08-.68 1.8-1.3.74-.6 1.25-1 1.55-1.2l.27-.16c.23-.15.29-.35.1-.75-.17-.4-.58-.88-1.14-1.3a3.92 3.92 0 0 0-1.81-.85zm15.23 7.2a.56.56 0 0 0-.3.05 1.55 1.55 0 0 0-.67.5 225.14 225.14 0 0 1-1.96 2.56l-1.22 1.44s-1.79 2.04-2.83 3.18a47.5 47.5 0 0 1-2.79 2.89c-.74.67-1.22 1.07-1.82 1.53-.33.28-.79.6-1.24.8v-.13c.05-.41.15-.82.3-1.22.27-.77.72-1.82 1.37-3.12.24-.51.74-1.42 1.48-2.73a33.68 33.68 0 0 0 1.64-3.13c.12-.28-.02-.64-.49-1.12a5.87 5.87 0 0 0-.9-.79c-.9-.6-1.44-.71-1.64-.37-.26.45-.67 1.13-1.24 2.04a78.23 78.23 0 0 0-2.6 4.54c-.15.28-.28.57-.4.84l-.15.15-1.1 1c-.82.73-1.57 1.35-2.2 1.85-.5.4-1.3.96-2.35 1.69-.43.3-.76.5-1 .62l.3-.77c.22-.54.77-1.61 2.05-3.95a127.4 127.4 0 0 0 2.07-3.84c.37-.7.68-1.38.94-2.06.19-.5-.26-1.12-1.28-1.81-1.01-.7-1.56-.82-1.74-.47a50.7 50.7 0 0 1-2.23 3.97 79.95 79.95 0 0 0-1.96 3.3 12.6 12.6 0 0 0-1.44 3.54 3.5 3.5 0 0 0 .44 2.5 4.1 4.1 0 0 0 1.67 1.6c.54.25.72.3.85.36.1.04.25.06.5-.02.26-.09.36-.14.75-.36.4-.22.7-.43 1.86-1.55l1.5-1.43a48.4 48.4 0 0 0 1.76-1.75v.03a4.2 4.2 0 0 0 1.28 3.62c.37.43.85.78 1.44 1.05.75.34 1.46.4 1.93.22a3.7 3.7 0 0 0 1.22-.7 9.96 9.96 0 0 0 1.54-1.48 310.3 310.3 0 0 0 3.18-3.75c-.24.56-.4 1.12-.5 1.66a3.5 3.5 0 0 0 .45 2.5 4.1 4.1 0 0 0 1.66 1.6 2.23 2.23 0 0 0 2.1-.02c.41-.23.73-.45 1.52-1.22l1.79-1.7a53.05 53.05 0 0 0 3.28-3.4c.31-.35.41-.47.56-.72.16-.24.2-.37.22-.48.02-.1-.05-.21-.22-.33-.17-.11-.29-.15-.37-.12a3.16 3.16 0 0 0-.94.71 50.8 50.8 0 0 1-3.4 2.96c-.52.4-1.3.96-2.36 1.69-.43.3-.76.5-1 .62l.33-.85a60.84 60.84 0 0 1 2.76-5.28c.52-.9.97-1.71 1.33-2.4.37-.72.68-1.41.95-2.09.18-.5-.27-1.12-1.2-1.75-.71-.48-1.17-.7-1.47-.7zM88.96 24.1l-.33.58c-.28.48-.5.82-.57.9-.7.85-1.37 1.3-1.98 1.37a23.3 23.3 0 0 1 2.87-2.85zm-33.14 0-.32.58c-.28.48-.5.82-.57.9-.72.85-1.38 1.3-1.99 1.37a23.3 23.3 0 0 1 2.87-2.85zm4.78 4.41c.06.18.12.36.2.55a12.38 12.38 0 0 0 1.15 2.07c.13.15.14.17.14.19a6.66 6.66 0 0 1-1.44.38l-2.58.46c-.58.1-1.02.19-1.4.27a31.54 31.54 0 0 0 3.93-3.92z"}));function K(){return a.createElement("div",{className:"_Z"},a.createElement("div",{className:"_0"},"👋"),a.createElement("h1",{className:"_3"},a.createElement("div",{className:j},W)),a.createElement("div",{className:"_5"},a.createElement("div",{className:j},"Software Engineer at Atlassian")),a.createElement("div",{className:"_6"},a.createElement("div",{className:j},"Sydney • Australia")))}const Q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function V({content:{recent:e}}){return a.createElement("main",null,a.createElement("div",{className:"_O"},a.createElement(K,null)),a.createElement("ul",{className:"_N"},e.map((({name:e,title:t,abstract:n,created:r})=>{return a.createElement("li",{className:"_O",key:e},a.createElement("hr",{className:"_P"}),a.createElement("article",null,a.createElement("time",{dateTime:r.toISOString(),title:r.toISOString(),className:"_R"},`${(s=r).getUTCDate()} ${Q[s.getMonth()]} ${s.getUTCFullYear()}`),a.createElement("h2",null,a.createElement(o,{path:c(L,e),className:"_Q"},t)),a.createElement("p",null,n),a.createElement(o,{tabIndex:-1,path:c(L,e),className:"_S"},"Read more")));var s}))))}function X(){const e=a.useCallback((()=>{window.history.back()}),[]);return a.createElement("div",{className:"_C"},a.createElement("h1",null,"Page not found"),a.createElement("p",null,"You seem to have found a dead link."),a.createElement("p",null,"There is nothing to see here, but you can"),a.createElement("ul",null,a.createElement("li",null,"Go to the ",a.createElement(o,{path:"/",className:"_D"},"home page"),"."),a.createElement("li",null,a.createElement("button",{className:"_E",onClick:e},"Go back")," to the page you came from.")))}function Y(e){return e.split("/").filter((e=>""!=e))}function Z(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function ee(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}class te{constructor(e,t=[]){this.defualt=e,this.resources=t,this.resolve=this.resolve.bind(this)}register(...e){e.forEach((e=>this.resources.push(e)))}resolve(e){for(const{path:t,resolve:n,exact:r=!1}of this.resources)if((r?ee:Z)(Y(t),Y(e)))return n(e);return this.defualt}}const ne=new O;var re=n(5766),ae=n(9784),se=n(3850),ce=n(4338),ie=n(9188),le=n(9420);const oe={codeBlock:"aa",comment:"ab",punctuation:"ac",tag:"ad",function:"ae",string:"af",keyword:"ag",plainText:"ah"};function ue(e){if(null!=e)return R(e.map((e=>{switch(e){case"comment":return oe.comment;case"punctuation":return oe.punctuation;case"function":return oe.function;case"string":return oe.string;case"keyword":return oe.keyword;case"tag":return oe.tag;case"token":return oe.token;case"plain-text":return;default:throw new Error(`Unhandled highligh content: ${e}`)}})))}function me(e,t){var n;return"text"===e.type?e.value:a.createElement(e.tagName,{key:t,className:ue(null===(n=e.properties)||void 0===n?void 0:n.className)},e.children.map(me))}re.$.register(le.Z);const he=({code:e,language:t})=>{const n=re.$.highlight(e,t);return a.createElement("pre",null,a.createElement("code",{className:oe.codeBlock},n.children.map(me)))};class de{constructor(e,t){this.name=e,this.params=t}static deserialize(e){return new de(e.name,e.params)}}const pe={left:"_9",center:"a_",right:"_-"},fe={codeBlock(e,t){if("widget"===t){const t=async()=>de.deserialize(JSON.parse(e));return a.createElement(G,{load:t})}return t&&re.$.registered(t)?a.createElement(he,{code:e,language:t}):a.createElement("pre",null,a.createElement("code",null,e.trim()))},blockquote:e=>a.createElement("blockquote",null,e),heading:(e,t,n)=>a.createElement(`h${t+1}`,{key:n,id:n},e),thematicBreak:()=>a.createElement("hr",null),list:(e,t=!1,n)=>t?a.createElement("ol",{start:n},e):a.createElement("ul",null,e),listitem:e=>a.createElement("li",null,e),checkbox:e=>a.createElement("input",{type:"checkbox",checked:e,readOnly:!0}),paragraph:e=>a.createElement("p",null,e),table:(e,t)=>a.createElement("table",null,a.createElement("thead",null,e),a.createElement("tbody",null,t)),tablerow:e=>a.createElement("tr",null,e),tablecell(e,t,n){const r=n&&pe[n],s=t?"th":"td";return a.createElement(s,{className:r},e)},strong:e=>a.createElement("strong",null,e),emphasis:e=>a.createElement("em",null,e),inlineCode:e=>a.createElement("code",null,e),delete:e=>a.createElement("del",null,e),link:(e,t,n)=>a.createElement("a",{href:t,title:n},e),image:(e,t,n)=>a.createElement("img",{src:e,title:t,alt:n}),text:e=>e,break:()=>a.createElement("br",null)};class we extends Error{constructor(e){super(`Unsuppoted markdown content type: ${e.type}, receoved ${JSON.stringify(e)}`)}}function Ee(e){const t=[e];return function(e){let n=0;const r=e(t[t.length-1],(e=>{n+=1,t.push(e)}));return t.splice(t.length-n,t.length),r}}const ge=Ee(!0),ve=Ee(!1),be=Ee(void 0),ye=Ee(void 0);function ke(e,t){return a.Children.toArray(e.map((e=>{switch(e.type){case"paragraph":return ge((n=>n?t.paragraph(ke(e.children,t)):ke(e.children,t)));case"heading":return t.heading(ke(e.children,t),e.depth);case"thematicBreak":return t.thematicBreak();case"blockquote":return t.blockquote(ke(e.children,t));case"list":return e.spread,t.list(ke(e.children,t),e.ordered,e.start);case"table":return be(((n,r)=>ve(((n,a)=>{r(e.align),a(!0);const s=ke(e.children.slice(0,1),t);a(!1);const c=ke(e.children.slice(1),t);return t.table(s,c)}))));case"html":throw new we(e);case"code":return t.codeBlock(e.value,e.lang,e.meta);case"yaml":case"definition":case"footnoteDefinition":throw new we(e);case"listItem":return ge(((n,r)=>(r(e.spread||!1),null==e.checked?t.listitem(ke(e.children,t)):t.listitem(a.createElement(a.Fragment,null,t.checkbox(e.checked),ke(e.children,t))))));case"tableRow":return be((n=>t.tablerow(e.children.map(((e,r)=>ye(((a,s)=>(n&&s(n[r]),ke([e],t)))))))));case"tableCell":return ve((n=>ye((r=>t.tablecell(ke(e.children,t),n,null!=r?r:void 0)))));case"text":return t.text(e.value);case"emphasis":return t.emphasis(ke(e.children,t));case"strong":return t.strong(ke(e.children,t));case"delete":return t.delete(ke(e.children,t));case"inlineCode":return t.inlineCode(e.value);case"break":return t.break();case"image":return t.image(e.url,e.title,e.alt);case"imageReference":case"footnote":case"footnoteReference":throw new we(e);case"link":return t.link(ke(e.children,t),e.url,e.title);case"linkReference":throw new we(e);default:throw new Error(`failed to render ${JSON.stringify(e)} element`)}})))}const ze=ce().use(se).use(ae);function Ne(e,t){const n=ze.parse(e);if(ie(n,"root"))return a.createElement(a.Fragment,null,ke(n.children,t));throw new Error(`Expected mdast.Root, received ${n.type}`)}const xe=a.memo((({content:e,decorate:t=(e=>e)})=>Ne(e,t(fe))));function _e({post:{title:e,content:t}}){return a.createElement("article",{className:"_Y ai"},a.createElement("h1",null,e),a.createElement(xe,{content:t}))}let Ce=!0;function Se({transition:e,children:t}){Ce&&(Ce=!e);const n=R("_j",e&&"_k",Ce&&"_w");return a.createElement("div",{className:n},t)}class Ae extends a.Component{constructor(e){super(e),this.state={transitionActive:!1}}componentDidUpdate(e){!e.active&&this.props.active?this.state.transitionActive?this.timer&&clearTimeout(this.timer):requestAnimationFrame((()=>{this.setState({transitionActive:!0})})):e.active&&!this.props.active&&(this.timer=setTimeout((()=>{this.setState({transitionActive:!1})}),this.props.durationMs))}render(){const{children:e,active:t,states:n}=this.props,{transitionActive:r}=this.state;return e(t?r?n.active:n.enter:r?n.exit:n.inactive)}}class $e extends a.Component{constructor(e){super(e),this.state={}}static getDerivedStateFromProps(e){const{spec:t}=e;return null==t?{}:{transform:`translateX(${t.left}px) scaleX(${t.width/100})`,opacity:.2}}render(){const{transform:e,opacity:t}=this.state,n={enter:{display:"block",transform:e},active:{display:"block",transform:e,opacity:t},exit:{display:"block",transform:e},inactive:{display:"none"}};return a.createElement(Ae,{active:null!=this.props.spec,states:n,durationMs:400},(e=>a.createElement("div",{style:e,className:"_u"})))}}function Pe({items:e}){const[t,n]=a.useState(void 0),r=a.useCallback((e=>{const t=e.currentTarget.offsetLeft,r=e.currentTarget.clientWidth;null!=t&&null!=r&&n({left:t,width:r})}),[]),s=a.useCallback((()=>{n(void 0)}),[]);return a.createElement("nav",{className:"_q"},a.createElement($e,{spec:t}),a.createElement("ul",{className:"_r"},e.map((({path:e,content:t})=>a.createElement("li",{className:"_s",key:e},a.createElement(o,{path:e,className:"_t",onMouseEnter:r,onMouseLeave:s},t))))))}const Me=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"LinkedIn",role:"img",viewBox:"0 0 512 512",fill:"#fff"},a.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#0077b5"}),a.createElement("circle",{cx:"142",cy:"138",r:"37"}),a.createElement("path",{stroke:"#fff",strokeWidth:"66",d:"M244 194v198M142 194v198"}),a.createElement("path",{d:"M276 282c0-20 13-40 36-40 24 0 33 18 33 45v105h66V279c0-61-32-89-76-89-34 0-51 19-59 32"})),Oe=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"GitHub",role:"img",viewBox:"0 0 512 512"},a.createElement("rect",{width:"512",height:"512",rx:"15%",fill:"#181717"}),a.createElement("path",{fill:"#fff",d:"M335 499c14 0 12 17 12 17H165s-2-17 12-17c13 0 16-6 16-12l-1-44c-71 16-86-34-86-34-12-30-28-37-28-37-24-16 1-16 1-16 26 2 40 26 40 26 22 39 59 28 74 22 2-17 9-28 16-35-57-6-116-28-116-126 0-28 10-51 26-69-3-6-11-32 3-67 0 0 21-7 70 26 42-12 86-12 128 0 49-33 70-26 70-26 14 35 6 61 3 67 16 18 26 41 26 69 0 98-60 120-117 126 10 8 18 24 18 48l-1 70c0 6 3 12 16 12z"}));function Te(){return a.createElement("footer",{className:"_l"},a.createElement("hr",{className:"_m"}),a.createElement("div",{className:"_n"},a.createElement("a",{className:"_o",href:"https://www.linkedin.com/in/chenruiliu/",target:"_blank",rel:"external nofollow noreferrer"},Me),a.createElement("a",{className:"_o",href:"https://github.com/Cansn0w",target:"_blank",rel:"external nofollow noreferrer"},Oe)),a.createElement("div",{className:"_p"},"© 2022-2023 Chester Liu."))}function Be(e){var t,n;null!=e&&null!=(null===window||void 0===window?void 0:window.document)&&(document.title=e.title,null===(t=document.getElementsByTagName("meta").namedItem("description"))||void 0===t||t.setAttribute("content",null!==(n=e.meta.description)&&void 0!==n?n:""))}function Le(e){const t=(n=[{path:"/",content:"Home"},{path:D,content:"Apps"}],a.createElement(Pe,{items:n}));var n;const r=function({initialPage:e,footer:t,updateDocumentHead:n}){const r=function(e,t){return new te(Promise.resolve(ne),[{path:"/",exact:!0,resolve:async()=>new A(await e.getHomePage())},{path:D,exact:!0,resolve:async()=>new $},{path:D,resolve:async e=>new P(t(e.split("/").filter((e=>""!=e))[1]))},{path:L,exact:!0,resolve:async()=>ne},{path:L,resolve:async t=>new M(await e.getPost(t.split("/").filter((e=>""!=e))[1]))}])}(new _,q);return a.createElement((function(){const[c,i]=a.useState(e),[o,u]=a.useState(!1);return a.useEffect((()=>l.pipe((0,s.wt)((e=>new s.y$((t=>{let n=!0;const a=new Promise((e=>setTimeout(e,400))),s=(e=>r.resolve(e).catch((e=>(Promise.reject(e),e instanceof z?new O:new T))))(e),c=new Promise((e=>setTimeout(e,1200)));return u(!0),a.then((()=>(n&&t(void 0),s))).then((e=>{n&&(u(!1),t(e),n=!1)})),c.then((()=>{n&&(u(!1),t(void 0))})),()=>{n=!1}}))))).pipe((0,s.bw)(n)).subscribe(i)),[]),a.createElement(Se,{transition:o},null==c?a.createElement("div",null,"Loading..."):function(e){switch(e.type){case"home":return a.createElement(V,{content:e.content});case"apps":return a.createElement(F,null);case"appitem":return a.createElement(H,{name:e.name});case"postitem":return a.createElement(_e,{post:e.content});case"notfound":return a.createElement(X,null);case"error":return a.createElement(J,null)}}(c),t)}),null)}({initialPage:e.page,footer:a.createElement(Te,null),updateDocumentHead:Be});return a.createElement(a.StrictMode,null,t,r)}window.addEventListener("DOMContentLoaded",(()=>{const e=B.deserialize(window.bootstrap);window.addEventListener("popstate",(()=>{i.next(window.location.pathname)})),i.pipe((0,s.xb)(void 0,window.location.pathname)).subscribe((e=>{l.next(e)})),(0,r.a)(document.getElementById("root"),Le(e))}))},7401:(e,t,n)=>{"use strict";n.d(t,{y$:()=>c,xQ:()=>i,UI:()=>l,Gv:()=>o,xb:()=>u,wt:()=>m,bw:()=>h});const r={},a=()=>r,s=(e,t)=>e===t;class c{constructor(e){this.subscribe=e}pipe(e){return e(this)}}class i extends c{constructor(){super((e=>{const t=t=>e(t);return this.subscribers.push(t),()=>{const e=this.subscribers.indexOf(t);-1!==e&&this.subscribers.splice(e,1)}})),this.subscribers=[],this.next=this.next.bind(this)}next(e){this.subscribers.forEach((t=>t(e)))}}function l(e){return function(t){return new c((n=>t.subscribe((t=>{n(e(t))}))))}}function o(){return function(e){let t;return new c((n=>e.subscribe((e=>{null==t||n([t,e]),t=e}))))}}function u(e=s,t){return function(n){let a=null!=t?t:r;return new c((t=>n.subscribe((n=>{a!==r&&e(n,a)||(a=n,t(a))}))))}}function m(e){return function(t){let n=a;return new c((r=>{const a=t.subscribe((t=>{n(),n=e(t).subscribe(r)}));return()=>{n(),a()}}))}}function h(e){return function(t){return new c((n=>t.subscribe((t=>{e(t),n(t)}))))}}}},e=>{"use strict";e.O(0,[106],(()=>(5388,e(e.s=5388)))),e.O()}]);