(this["webpackJsonpgithub-profiles"]=this["webpackJsonpgithub-profiles"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(20),i=c.n(r),o=(c(28),c(29),c(21)),l=c(3),j=c(9),b=c(2),h=(c(30),c.p+"static/media/searchicon.bc2178ae.svg"),d=c.p+"static/media/githublogo.5eab40a0.png";c(15),c(16);var u=function(e){var t=e.username,c=e.className,s=Object(n.useState)(null),r=Object(b.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(!1),j=Object(b.a)(l,2),h=j[0],d=j[1],u=Object(n.useState)([]),g=Object(b.a)(u,2),O=g[0],m=g[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/users/".concat(t,"/repos")).then((function(e){return e.json()})).then((function(e){d(!0),m(e)}),(function(e){d(!0),o(e)}))}),[]),i?Object(a.jsxs)("div",{children:["Error: ",i.message]}):h?Array.isArray(O)&&O.length>0?Object(a.jsx)("span",{className:"".concat(c),children:Object(a.jsxs)("ul",{className:"".concat(c,"-repos"),children:[O.map((function(e){return Object(a.jsx)("li",{children:e.name},e.id)})).slice(0,3)," "]})}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"No repository found."})," ",Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})]}):Object(a.jsx)("div",{id:"loading",children:"Loading..."})},g=c.p+"static/media/gridicon.1afda891.svg",O=c.p+"static/media/listicon.c2d3dbb9.svg";var m=function(e){var t=e.isList,c=e.setIsList,s=(e.lastSearches,e.user,Object(n.useState)(null)),r=Object(b.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(!1),j=Object(b.a)(l,2),h=j[0],d=j[1],m=Object(n.useState)([]),x=Object(b.a)(m,2),f=x[0],p=x[1];if(Object(n.useEffect)((function(){fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(e){d(!0),p(e),localStorage.setItem("result",JSON.stringify(e))}),(function(e){d(!0),o(e)}))}),[]),i)return Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"80vh"},children:["Error: ",i.message]});if(h){if(document.title="Github Profiles",Array.isArray(f)){var v="".concat(!0===t?"person":"person-grid");return Object(a.jsxs)("div",{className:"".concat(v,"-wrapper"),children:[Object(a.jsxs)("div",{className:"".concat(v,"-container"),children:[Object(a.jsx)("h2",{id:"".concat(v,"-list-of-persons"),children:"The Most popular users according to GitHub: :)"}),Object(a.jsxs)("div",{className:v,children:[Object(a.jsx)("span",{id:"grid-list-grid-switcher",children:!0===t?Object(a.jsx)("span",{onClick:function(){return c(!t)},children:Object(a.jsx)("img",{alt:"Grid Icon",src:g})}):Object(a.jsx)("span",{onClick:function(){return c(!t)},children:Object(a.jsx)("img",{alt:"List Icon",src:O})})}),f.map((function(e){return Object(a.jsxs)("div",{className:"".concat(v,"-each-person"),children:[Object(a.jsx)("img",{alt:"Avatar",href:"".concat(e.login),className:"".concat(v,"-avatar"),src:e.avatar_url}),Object(a.jsx)("a",{className:"".concat(v,"-name"),href:"/".concat(e.login),onClick:function(){localStorage.setItem("aseiyosaxla",JSON.stringify(e)),localStorage.setItem("person-index",JSON.stringify(f.indexOf(e)))},children:e.login}),Object(a.jsx)("p",{className:"".concat(v,"-type"),children:e.type}),Object(a.jsx)(u,{className:v,username:e.login}),Object(a.jsx)("br",{})," ",Object(a.jsx)("br",{})]},e.id)}))]})]}),Object(a.jsx)("button",{style:{width:"100%",backgroundColor:"#2b3337",border:"0"}})]})}return Object(a.jsxs)("p",{className:"no-info-avaiable",children:["There Is Problem Retrieving Data From GitHub API... ",Object(a.jsx)("br",{}),"Estimated Error: `Failed to load resource: the server responded with a status of 403 (rate limit exceeded)`"]})}return document.title="Loading...",Object(a.jsx)("div",{id:"loading",children:"Loading..."})},x=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(parseInt(localStorage.getItem("numLastSearched"))),i=Object(b.a)(r,2),o=i[0],l=i[1],u=Object(n.useState)(""),g=Object(b.a)(u,2),O=g[0],x=g[1],f=Object(n.useState)({firstSearch:null,secondSearch:null,thirdSearch:null}),p=Object(b.a)(f,2),v=p[0],S=p[1];return Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{id:"header",children:[Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("img",{alt:"github logo",src:d,className:"github-logo"})," "]}),Object(a.jsxs)("span",{className:"search",children:[" ",Object(a.jsx)("a",{href:"".concat(localStorage.getItem("searchResult")),children:Object(a.jsx)("img",{alt:"search icon",onClick:function(e){"search"===e.target.className&&e.preventDefault(),localStorage.setItem("searchResult",O),0===o||1===o||isNaN(o)?(S(Object(j.a)(Object(j.a)({},v),{},{firstSearch:O})),localStorage.setItem("firstSearch",O),localStorage.setItem("numLastSearched","2"),l(parseInt(localStorage.getItem("numLastSearched")))):"2"===o||2===o?(S(Object(j.a)(Object(j.a)({},v),{},{secondSearch:O})),localStorage.setItem("secondSearch",O),localStorage.setItem("numLastSearched","3"),l(parseInt(localStorage.getItem("numLastSearched")))):"3"!==o&&3!==o||(S(Object(j.a)(Object(j.a)({},v),{},{thirdSearch:O})),localStorage.setItem("thirdSearch",O),localStorage.setItem("numLastSearched","1"),l(parseInt(localStorage.getItem("numLastSearched")))),x("")},src:h,className:"search-icon"})}),Object(a.jsx)("input",{onChange:function(e){x(e.target.value),localStorage.setItem("searchInput",e.target.value)},value:O,type:"text",placeholder:"Search for user",className:"search-box"})]})," ",Object(a.jsxs)("span",{className:"last-searches",children:["Latest Searches: ",Object(a.jsx)("br",{}),localStorage.getItem("firstSearch")," "," ",localStorage.getItem("secondSearch")," "," ",localStorage.getItem("thirdSearch")]})]}),Object(a.jsx)(m,{lastSearches:v,setIsList:s,isList:c,user:O})]})},f=c.p+"static/media/supervisor_account.6a1bce44.svg";c(17),c(18);function p(){var e=JSON.parse(localStorage.getItem("result"))[localStorage.getItem("person-index")].login,t=Object(n.useState)(null),c=Object(b.a)(t,2),s=c[0],r=c[1],i=Object(n.useState)(!1),o=Object(b.a)(i,2),l=o[0],j=o[1],h=Object(n.useState)([]),g=Object(b.a)(h,2),O=g[0],m=g[1],x=Object(n.useState)([]),p=Object(b.a)(x,2),v=p[0],S=p[1];Object(n.useEffect)((function(){return fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){j(!0),m(e)}),(function(e){j(!0),r(e)})),function(){}}),[]),Object(n.useEffect)((function(){return fetch("https://api.github.com/users/".concat(e,"/orgs")).then((function(e){return e.json()})).then((function(e){S(e)}),(function(e){r(e)})),function(){}}),[]);var I="search-user";return document.title="".concat(O.login," (").concat(O.name,")"),Array.isArray(v)?Object(a.jsx)("div",{className:"".concat(I,"-page"),children:"https://developer.github.com/v3/#rate-limiting"===O.documentation_url?Object(a.jsxs)("p",{className:"no-info-avaiable",children:["Error: `Failed to load resource: the server responded with a status of 403 (rate limit exceeded)`",Object(a.jsx)("a",{href:"/github-profiles",children:Object(a.jsx)("button",{children:"Landing Page"})})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"".concat(I,"-header"),children:Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("img",{alt:"github-logo",src:d,className:"".concat(I,"-logo")})," "]})}),Object(a.jsxs)("span",{children:[Object(a.jsx)("h1",{id:"full-name",children:O.name}),Object(a.jsx)("a",{style:{textDecoration:"none"},href:"https://github.com/".concat(O.login),children:Object(a.jsx)("h3",{id:"".concat(I,"-login"),children:"".concat(O.login)})}),Object(a.jsx)("p",{style:{marginTop:"5px",opacity:"0.9"},children:O.type}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{alt:"Avatar",src:O.avatar_url,id:"".concat(I,"-img")}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{id:"".concat(I,"-follower-following"),children:[Object(a.jsx)("img",{id:"follower-following-img",src:f,alt:"supervisor_account"}),"Followers: ",O.followers," "," "," Following: ",O.following]}),Object(a.jsx)("br",{}),Object(a.jsx)(u,{className:"".concat(I),username:e}),Object(a.jsx)("br",{}),Array.isArray(v)&&0!==v.length?Object(a.jsxs)("span",{id:"organization-selector",children:[v.map((function(e){return Object(a.jsxs)("div",{className:"organisation-img",children:[Object(a.jsx)("img",{title:"".concat(e.login),alt:"organisation-img",className:"organisation-img",src:e.avatar_url}),Object(a.jsx)("a",{style:{textDecoration:"none",color:"white"},href:"https://github.com/".concat(e.login),target:"_blank",rel:"noreferrer",children:Object(a.jsx)("span",{id:"organisation-login",children:e.login})})]})})),Object(a.jsx)("br",{})]}):Object(a.jsxs)("div",{children:[O.name?O.name.toLowerCase():"User"," is not belong to any organization"]})]}),s?Object(a.jsxs)("div",{children:["Error: ",s.message]}):l?null:Object(a.jsx)("div",{id:"loading",children:"Loading..."})]})}):Object(a.jsx)("div",{className:"".concat(I,"-page"),children:"https://developer.github.com/v3/#rate-limiting"===O.documentation_url?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"".concat(I,"-header"),children:Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("img",{alt:"github-logo",src:d,className:"".concat(I,"-logo")})," "]})}),Object(a.jsx)("p",{className:"no-info-avaiable",children:"There Is Problem Retrieving Data From GitHub API..."})," "]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"".concat(I,"-header"),children:Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("img",{alt:"github-logo",src:d,className:"".concat(I,"-logo")})," "]})}),s?Object(a.jsxs)("div",{children:["Error: ",s.message]}):l?null:Object(a.jsx)("div",{id:"loading",children:"Loading..."})]})})}function v(){var e=Object(n.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(!1),i=Object(b.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)([]),h=Object(b.a)(j,2),g=h[0],O=h[1],m=Object(n.useState)([]),x=Object(b.a)(m,2),p=x[0],v=x[1];Object(n.useEffect)((function(){return function(){var e=localStorage.getItem("searchResult");fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){l(!0),O(e)}),(function(e){l(!0),s(e)}))}(),function(){}}),[]),Object(n.useEffect)((function(){return function(){var e=localStorage.getItem("searchResult");fetch("https://api.github.com/users/".concat(e,"/orgs")).then((function(e){return e.json()})).then((function(e){v(e)}),(function(e){s(e)}))}(),function(){}}),[]);var S="search-user";return document.title="".concat(g.login," (").concat(g.name,")"),Array.isArray(p)?Object(a.jsx)("div",{className:"".concat(S,"-page"),children:"https://developer.github.com/v3/#rate-limiting"===g.documentation_url?Object(a.jsxs)("p",{className:"no-info-avaiable",children:["There Is Problem Retrieving Data From GitHub API...",Object(a.jsx)("a",{href:"/github-profiles",children:Object(a.jsx)("button",{children:"Landing Page"})})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"".concat(S,"-header"),children:Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("img",{alt:"github-logo",src:d,className:"".concat(S,"-logo")})," "]})}),Object(a.jsxs)("span",{children:[Object(a.jsx)("h1",{id:"full-name",children:g.name}),Object(a.jsx)("a",{style:{textDecoration:"none"},href:"https://github.com/".concat(g.login),children:Object(a.jsx)("h3",{id:"".concat(S,"-login"),children:"".concat(g.login)})}),Object(a.jsx)("p",{style:{marginTop:"5px",opacity:"0.9"},children:g.type}),Object(a.jsx)("br",{}),Object(a.jsx)("img",{alt:"Avatar",src:g.avatar_url,id:"".concat(S,"-img")}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{id:"".concat(S,"-follower-following"),children:[Object(a.jsx)("img",{id:"follower-following-img",src:f,alt:"supervisor_account"}),"Followers: ",g.followers," "," "," Following: ",g.following]}),Object(a.jsx)("br",{}),Object(a.jsx)(u,{className:"".concat(S),username:localStorage.getItem("searchResult")}),Object(a.jsx)("br",{}),Array.isArray(p)&&0!==p.length?Object(a.jsxs)("span",{id:"oranization-selector",children:[p.map((function(e){return Object(a.jsxs)("div",{className:"organisation-img",children:[Object(a.jsx)("img",{title:"".concat(e.login),alt:"organisation-img",className:"organisation-img",src:e.avatar_url}),Object(a.jsx)("a",{style:{textDecoration:"none",color:"white"},href:"https://github.com/".concat(e.login),target:"_blank",rel:"noreferrer",children:Object(a.jsx)("span",{id:"organisation-login",children:e.login})})]})})),Object(a.jsx)("br",{})]}):Object(a.jsxs)("div",{children:[g.name?g.name.toLowerCase():"User"," is not belong to any organization"]})]}),c?Object(a.jsxs)("div",{children:["Error: ",c.message]}):o?null:Object(a.jsx)("div",{id:"loading",children:"Loading..."})]})}):Object(a.jsx)("div",{className:"".concat(S,"-page"),children:"https://developer.github.com/v3/#rate-limiting"===g.documentation_url?Object(a.jsxs)("p",{className:"no-info-avaiable",children:["There Is Problem Retrieving Data From GitHub API...",Object(a.jsx)("a",{href:"/",children:Object(a.jsx)("button",{children:"Landing Page"})})]}):Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{id:"".concat(S,"-header"),children:Object(a.jsxs)("a",{href:"/",children:[Object(a.jsx)("img",{alt:"github-logo",src:d,className:"".concat(S,"-logo")})," "]})}),Object(a.jsx)("h1",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"75vh"},children:"**Not Found**"}),c?Object(a.jsxs)("div",{children:["Error: ",c.message]}):o?null:Object(a.jsx)("div",{id:"loading",children:"Loading..."})]})})}var S=function(){var e,t=JSON.parse(localStorage.getItem("result")),c=localStorage.getItem("person-index");return null===t||null===c||"https://developer.github.com/v3/#rate-limiting"===t.documentation_url?(e="",c=0):e=t[c],Object(a.jsxs)(o.a,{children:[Object(a.jsx)(l.a,{exact:!0,path:"/",component:x}),Object(a.jsx)(l.a,{exact:!0,path:"/".concat(e.login===localStorage.getItem("searchResult")?null:e.login),component:p}),Object(a.jsx)(l.a,{exact:!0,path:"/".concat(localStorage.getItem("searchResult")),component:e.login===localStorage.getItem("searchResult")?p:v})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root")),I()}},[[36,1,2]]]);
//# sourceMappingURL=main.6fd3b0ed.chunk.js.map