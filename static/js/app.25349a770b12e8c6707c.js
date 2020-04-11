webpackJsonp([2],{100:function(e,t){e.exports={appName:"Shopizer",headerNavigation:[{name:"",path:"/starting"}],landingPage:"/starting",topics:["news"],pages:[{route:"/starting",name:"Getting started",description:"Getting started with shopizer",iconContext:"fas",icon:"address-book",children:[{route:"/whatisshopizer",name:"What is Shopizer",description:"Shopizer is an open source e-commerce software licenced under Apache V2 licence",iconContext:"fas",icon:"question-circle",markdown:"/static/markdown/whatisshopizer/default.md"},{route:"/architecture",name:"Shopizer architecture",description:"Shopizer architecture",iconContext:"fas",icon:"boxes",markdown:"/static/markdown/architecture/Current.md"},{route:"/starting",name:"Beginning with Shopizer",description:"Everything has a starting point",iconContext:"fas",icon:"tasks",markdown:"/static/markdown/init/Current.md"},{route:"/buildandrunlocally",name:"Build and run locally",description:"Build and run on your local machine",topics:[],iconContext:"fas",icon:"desktop",markdown:"/static/markdown/buildandrunlocally/Current.md"},{route:"/documentation",name:"Technical documentation",description:"Shopizer technical documentation",topics:[],iconContext:"fas",icon:"book",markdown:"/static/markdown/documentation/default.md"},{route:"/videotutorials",name:"Video tutorials",description:"Video tutorials on different topics",topics:["Tutorials","Examples","Swagger UI","AWS"],iconContext:"fab",icon:"youtube",markdown:"/static/markdown/documentation/videotutorials.md"},{route:"/docker",name:"Run from Docker image",description:"Run latest Shopizer image",topics:["Docker","DockerHub","Docker Compose"],iconContext:"fab",icon:"docker",markdown:"/static/markdown/docker/default.md"},{route:"/cloud",name:"Run in the cloud",description:"Run Shopizer in various clouds",topics:[],iconContext:"fab",icon:"cloud",markdown:"/static/markdown/cloud/default.md"},{route:"/contribute",name:"Contribute to Shopizer",description:"We are looking for your expertise",topics:[],iconContext:"fas",icon:"github",markdown:"/static/markdown/notavailable.md"}]},{route:"/documentation",name:"Shopizer configuration",description:"Shopizer configuration",iconContext:"fas",icon:"address-book",children:[{route:"/configuration",name:"Required configurations",description:"In order to have complete e-commerce experience, this section describes all required Shopizer configurations",iconContext:"fas",icon:"book",markdown:"/static/markdown/documentation/configuration/default.md"},{route:"/database",name:"Database configuration",description:"Configure Shopizer database",iconContext:"fas",icon:"database",markdown:"/static/markdown/documentation/database/default.md"},{route:"/search",name:"Search configuration",description:"Configure Shopizer search with ElasticSearch",topics:[],iconContext:"fas",icon:"search",children:[{route:"/elastic-local",name:"Local configuration of ElasticSearch",description:"Describes local installation and configuration of ElasticSearch",iconContext:"fas",icon:"home",topics:["search","kibana","elastic"],markdown:"/static/markdown/documentation/search/search.md"},{route:"/elastic-cloud",name:"Elastic Cloud configuration",description:"Describes installation and configuration of ElasticSearch in the cloud",iconContext:"fas",icon:"home",topics:["search","kibana","elastic","cloud"],markdown:"/static/markdown/documentation/search/cloud.md"}]}]},{route:"/software",name:"Commerce software",description:"Shopizer software design",iconContext:"fas",icon:"project-diagram",topics:["process"],children:[{route:"/users",name:"Users",description:"Administration users",iconContext:"fas",icon:"user",topics:["users","administrators"],markdown:"/static/markdown/documentation/software/users.md"},{route:"/vendors",name:"Vendors",description:"Merchants and customers vendors described",iconContext:"fas",icon:"home",topics:["vendors","merchant","seller","store","retailer"],markdown:"/static/markdown/notavailable.md"},{route:"/catalog",name:"Catalog functions",description:"Catalog functions described",iconContext:"fas",icon:"book",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/cart",name:"Shopping cart functions",description:"Shopping cart functions described",iconContext:"fas",icon:"shopping-cart",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/order",name:"Ordering functions",description:"Ordering functons described",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/customer",name:"Customer functions",description:"Customer functons described",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/translation",name:"Shopizer translation",description:"Translate to other lamguages",iconContext:"fas",icon:"language",markdown:"/static/markdown/software/translation.md"},{route:"/rules",name:"Rules system",description:"Shopizer's rule system",iconContext:"fas",icon:"language",markdown:"/static/markdown/notavailable.md"},{route:"/modules",name:"Shopizer modules",description:"Shopizer modules design",iconContext:"fas",icon:"project-diagram",topics:["process"],children:[{route:"/introduction",name:"What are modules",description:"how to read the process documentation",iconContext:"fas",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/shipping-modules",name:"Shipping module",description:"how to create new Pages for the application",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/payment-modules",name:"Payment module",description:"how to create new Pages for the application",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"}]}]},{route:"/databaseschema",name:"Database schema",description:"anything about process",iconContext:"fas",icon:"project-diagram",topics:["database"]},{route:"/rest",name:"REST api",description:"commerce REST api explained",iconContext:"fas",icon:"project-diagram",topics:["process"],children:[{route:"/swaggerdoc",name:"Swagger documentation",description:"REST api documentation generated by Swagger annotations",iconContext:"fas",icon:"project-diagram",topics:["documentation"],markdown:"/static/markdown/notavailable.md"},{route:"/resterrors",name:"Handling REST errors",description:"REST errors format",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/newrestservices",name:"Creating new REST services",description:"This document explains how to create new REST services",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"}]},{route:"/security",name:"Shopizer security",description:"Shopizer security explained",iconContext:"fas",icon:"project-diagram",topics:["process"],children:[{route:"/springsecurity",name:"Spring security",description:"Spring security and Shopizer",iconContext:"fas",icon:"project-diagram",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/adminauth",name:"Admin authentication",description:"Admin authentication explained",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/customerauth",name:"Customer authentication",description:"Customer authentication explained",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"},{route:"/apiauth",name:"REST api authentication",description:"Authenticating through REST api",iconContext:"fas",icon:"file-alt",topics:["process"],markdown:"/static/markdown/notavailable.md"}]},{route:"/metrics",name:"Shopizer metrics",description:"Shopizer generated data and metrics",iconContext:"fas",icon:"address-book",children:[{route:"/analytics",name:"Configure analytics",description:"",iconContext:"fas",icon:"desktop",markdown:"/static/markdown/notavailable.md"},{route:"/discover",name:"Discover Shopizer e-commerce data",description:"Use Kibana to discover order related data capable of giving insights to your e-commerce business",iconContext:"fas",icon:"file-alt",markdown:"/static/markdown/notavailable.md"}]},{route:"/deployment",name:"Deploying Shopizer",description:"Deploying Shopizer on premise and in the Cloud",iconContext:"fas",icon:"address-book",children:[{route:"/onpremisedeployment",name:"Deploy Shopizer on premise",description:"",iconContext:"fas",icon:"desktop",markdown:"/static/markdown/notavailable.md"},{route:"/clouddeployment",name:"Deploy Shopizer on AWS",description:"",iconContext:"fab",icon:"aws",markdown:"/static/markdown/notavailable.md"},{route:"/cloud",name:"Deploy Shopizer on various clouds",description:"",iconContext:"fas",icon:"cloud",markdown:"/static/markdown/cloud/default.md",children:[{route:"/lightsail-simple",name:"AWS Lightsail simple deployment",description:"AWS Lightsail simple deployment with Docker Compose, NGINX and Let's encrypt SSL",iconContext:"fas",icon:"",topics:["cloud","aws"],markdown:"/static/markdown/cloud/lightsail-simple.md"}]}]}]}},119:function(e,t,o){"use strict";var n=o(51),a=o(120),i=o(26),r=i(n.a,a.a,!1,null,null,null);t.a=r.exports},120:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"header"},[o("div",{staticClass:"header__brand"},[o("svg",{ref:"nav__open",staticClass:"header__hamburger",attrs:{tabindex:"0",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.openNavigation(t):null},click:e.openNavigation}},[o("path",{attrs:{d:"M424 394H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 265H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16zM424 135H89a8 8 0 0 1 0-16h335a8 8 0 0 1 0 16z"}})]),e._v(" "),e._m(0)]),e._v(" "),e._m(1)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"header__name"},[n("img",{attrs:{src:o(121)}}),n("b",[e._v("Technical documentation")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",{staticClass:"nav"},[o("a",{staticClass:"download",attrs:{id:"ghBranchVersion",href:"https://github.com/shopizer-ecommerce/shopizer"}})])}],i={render:n,staticRenderFns:a};t.a=i},121:function(e,t,o){e.exports=o.p+"static/img/shopizer-cart.407df07.png"},122:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Header",{on:{toggleMenu:e.toggleMenu}}),e._v(" "),o("main",[o("nav",{staticClass:"main__nav",class:{active:e.isNavOpen}},[o("div",{staticClass:"nav__search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchKeywords,expression:"searchKeywords"}],staticClass:"nav__search-input",attrs:{placeholder:"Type to search"},domProps:{value:e.searchKeywords},on:{keyup:e.search,input:function(t){t.target.composing||(e.searchKeywords=t.target.value)}}}),e._v(" "),e.searchResultsVisible?o("svg",{staticClass:"nav__search-icon",attrs:{tabindex:"0",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},on:{click:e.reset,keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.reset(t):null}}},[o("path",{attrs:{d:"M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z"}}),o("path",{attrs:{d:"M35.707 16.293a.999.999 0 0 0-1.414 0L26 24.586l-8.293-8.293a.999.999 0 1 0-1.414 1.414L24.586 26l-8.293 8.293a.999.999 0 1 0 1.414 1.414L26 27.414l8.293 8.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L27.414 26l8.293-8.293a.999.999 0 0 0 0-1.414z"}})]):e._e()]),e._v(" "),o("vue-tree-navigation",{attrs:{items:e.tocItems,defaultOpenLevel:1}})],1),e._v(" "),e.searchResultsVisible?o("div",{staticClass:"container"},[e.searchResults.length?o("h1",{staticClass:"results__heading"},[e._v(e._s(e.searchResults.length)+' results matching "'+e._s(e.searchKeywords)+'"')]):o("h1",{staticClass:"results__heading"},[e._v('No results matching "'+e._s(e.searchKeywords)+'"')]),e._v(" "),o("ul",{staticClass:"results__search"},e._l(e.searchResults,function(t,n){return o("li",{key:n,staticClass:"result"},[o("header",{staticClass:"result__header"},[o("router-link",{attrs:{to:t.path}},[o("h2",{staticClass:"result__title"},[e._v(e._s(t.name))])]),e._v(" "),e._l(t.topics,function(t,n){return o("span",{key:n,staticClass:"tag",attrs:{tabindex:"0"},on:{keyup:function(o){if(!("button"in o)&&e._k(o.keyCode,"enter",13,o.key,"Enter"))return null;e.searchTopic(t)},click:function(o){e.searchTopic(t)}}},[e._v(e._s(t))])})],2),e._v(" "),o("p",[e._v(e._s(e._f("truncate")(t.text,300,"...")))])])}))]):o("router-view")],1)],1)},a=[],i={render:n,staticRenderFns:a};t.a=i},123:function(e,t,o){"use strict";var n=o(29),a=o(124),i=o(16);n.a.use(a.a),t.a=new a.a({routes:i.a.getRoutingConfig()})},16:function(e,t,o){"use strict";function n(e,t){e.path=e.route,e.breadCrumb=t?JSON.parse(c()(t.breadCrumb)):[];var o=null!=t?t.path+e.route:"/";e.breadCrumb.push({name:e.name,path:o}),e.component=p,null!=t&&(e.path=t.path+e.route);var a=[];if(e.children)for(var i in e.children){var r=e.children[i];a.push({name:r.name,description:r.description,path:e.path+r.route,icon:r.icon,iconContext:e.iconContext,bgColor:r.bgColor,owner:r.owner,topics:r.topics}),n(r,e)}e.meta={tiles:a.length>0?a:null,name:e.name,description:e.description,markdown:e.markdown,icon:e.icon,iconContext:e.iconContext,bgColor:e.bgColor,owner:e.owner,topics:e.topics,breadCrumb:e.breadCrumb},h[e.path]=e.meta}function a(e){var t=JSON.parse(c()(e.pages));for(var o in t){n(t[o],null)}return t.push({path:"/",redirect:e.landingPage}),t}var i=o(74),r=o.n(i),s=o(98),c=o.n(s),d=o(100),u=o.n(d),l=o(57),m=o.n(l),p=function(){return o.e(0).then(o.bind(null,131))},h={};t.a={getMetaById:function(e){return h[e]},getRoutingConfig:function(){return a(this.getBaseConfig())},getBaseConfig:function(){return u.a},getPages:function(){return this.getBaseConfig().pages},getStatus:function(){return new r.a(function(e,t){var o=window.location.pathname,n=o.substring(0,o.length-1)+"/static/content.json";m.a.get(n).then(function(t){e(t.data)}).catch(function(e){return t(e)})})}}},31:function(e,t,o){"use strict";var n=o(53),a=o.n(n),i=o(16),r=o(119);t.a={name:"app",data:function(){return{baseUrl:"https://pages.github.ibm.com/merlin/playbook/#",isNavOpen:!1,tocItems:i.a.getPages(),content:[],searchResultsVisible:!1,searchResults:null,searchKeywords:null}},components:{Header:r.a},created:function(){var e=this;i.a.getStatus().then(function(t){void 0!==t&&(e.content=t)}).catch(function(e){console.log("error",e)})},methods:{toggleMenu:function(){this.isNavOpen=!this.isNavOpen},search:function(e){var t=this;if(this.searchKeywords){var o=a()({},this.$route.query,{search:this.searchKeywords});this.$router.push({query:o}),this.searchResultsVisible=!0;this.searchKeywords.indexOf("topic:")>-1?this.searchResults=this.content.filter(function(e){for(var o=(e.topics||[]).map(function(e){return e.toLowerCase()}),n=!1,a=0;a<o.length;a++)o[a].indexOf(t.searchKeywords.toLowerCase().replace("topic:",""))>-1&&(n=!0);return n}):this.searchResults=this.content.filter(function(e){return(e.text||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1||(e.name||"").toLowerCase().indexOf(t.searchKeywords.toLowerCase())>-1})}else{var n=this.$route.query;delete n.search,this.$router.push({query:n}),this.reset()}},searchTopic:function(e){var t="topic:"+e,o=a()({},this.$route.query,{search:t});this.searchKeywords=t,this.search(),this.$router.push({query:o})},reset:function(){this.searchResultsVisible=!1,this.searchKeywords="",this.searchResults=[]}},watch:{$route:{immediate:!0,handler:function(e,t){var o=window.location.href;if(o.indexOf("?")>-1){var n=o.substring(o.indexOf("?")+1),a=JSON.parse('{"'+decodeURIComponent(n.replace(/&/g,'","').replace(/=/g,'": "'))+'"}');a&&a.search&&(this.searchKeywords=a.search,this.search())}else this.searchKeywords="",this.searchResultsVisible=!1}}}}},51:function(e,t,o){"use strict";var n=o(16);t.a={name:"header-component",data:function(){return{isVisible:!1,isDesktop:!1,name:n.a.getBaseConfig().appName,list:n.a.getBaseConfig().headerNavigation}},created:function(){window.innerWidth>=780&&(this.isDesktop=!0),window.addEventListener("resize",this.handleResize)},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(e){e.currentTarget.innerWidth>=780?this.isDesktop=!0:this.isDesktop=!1},openNavigation:function(){this.$emit("toggleMenu")},closeNavigation:function(e){this.$emit("toggleMenu")}}}},58:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(29),a=o(61),i=o(123),r=o(125),s=o.n(r),c=o(52),d=o(126),u=(o.n(d),o(127)),l=o(128);n.a.use(s.a),c.library.add(l.l,l._25,l._9,l.X,l._8,l._30,l.M,l.H,l.I,l._14,l._13,l.V,l._16,l._29,l.s,l.D,l.C,l._24,l._21,l.P,l.B,l._12,l.Z,l.w,l.U,l._5,l.j,l._27,l._2,l.c,l.q,l.Q,l._28,l.S,l.F,l.t,l._17,l.f,l.G,l._20,l.x,l.a,l.e,l.A,l.n,l.z,l._10,l.R,l._32,l.u,l._1,l.E,l.T,l._23,l._22,l._3,l.W,l.g,l._11,l._19,l.y,l._4,l._15,l.p,l.J,l._7,l.Y,l.h,l._26,l.d,l.k,l.v,l.m,l.O,l.i,l.K,l.b,l.N,l._6,l._18,l._0,l._31,l.r,l.o,l.L,u.c,u.b,u.a,u.d,u.e,u.f);var m=function(e,t,o){o=o||"...";var n=document.createElement("div");n.innerHTML=e;var a=n.textContent;return a.length>t?a.slice(0,t)+o:a};n.a.filter("truncate",m),n.a.component("font-awesome-icon",d.FontAwesomeIcon),n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,render:function(e){return e(a.a)}})},61:function(e,t,o){"use strict";function n(e){o(62)}var a=o(31),i=o(122),r=o(26),s=n,c=r(a.a,i.a,!1,s,null,null);t.a=c.exports},62:function(e,t){}},[58]);
//# sourceMappingURL=app.25349a770b12e8c6707c.js.map