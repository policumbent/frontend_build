(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{529:function(n,e,t){"use strict";t.r(e);var a=t(95),o=t(96),l=t(98),r=t(97),i=t(99),u=t(1),c=t.n(u),s=t(286),m=t(283),p=t(530),h=t(344),b=t(318),d={items:[{name:"Dashboard",url:"/dashboard",icon:"icon-speedometer"},{name:"Bike",url:"/bike",icon:"icon-rocket"}]},f=c.a.lazy(function(){return Promise.all([t.e(1),t.e(2),t.e(39)]).then(t.bind(null,525))}),y=c.a.lazy(function(){return Promise.all([t.e(0),t.e(13),t.e(43)]).then(t.bind(null,498))}),z=c.a.lazy(function(){return t.e(25).then(t.bind(null,499))}),g=c.a.lazy(function(){return Promise.all([t.e(0),t.e(26)]).then(t.bind(null,500))}),E=c.a.lazy(function(){return Promise.all([t.e(0),t.e(37)]).then(t.bind(null,523))}),v=c.a.lazy(function(){return Promise.all([t.e(0),t.e(18)]).then(t.bind(null,501))}),w=c.a.lazy(function(){return t.e(11).then(t.bind(null,502))}),P=c.a.lazy(function(){return Promise.all([t.e(0),t.e(7),t.e(42)]).then(t.bind(null,503))}),k=c.a.lazy(function(){return t.e(19).then(t.bind(null,532))}),x=c.a.lazy(function(){return t.e(15).then(t.bind(null,526))}),B=c.a.lazy(function(){return Promise.all([t.e(0),t.e(27)]).then(t.bind(null,528))}),j=c.a.lazy(function(){return t.e(16).then(t.bind(null,506))}),O=c.a.lazy(function(){return t.e(28).then(t.bind(null,507))}),C=c.a.lazy(function(){return t.e(22).then(t.bind(null,527))}),N=c.a.lazy(function(){return t.e(32).then(t.bind(null,508))}),S=c.a.lazy(function(){return t.e(20).then(t.bind(null,509))}),D=c.a.lazy(function(){return t.e(14).then(t.bind(null,510))}),I=c.a.lazy(function(){return t.e(29).then(t.bind(null,511))}),L=c.a.lazy(function(){return t.e(23).then(t.bind(null,531))}),T=c.a.lazy(function(){return t.e(12).then(t.bind(null,512))}),A=c.a.lazy(function(){return Promise.all([t.e(8),t.e(44)]).then(t.bind(null,513))}),J=c.a.lazy(function(){return t.e(21).then(t.bind(null,515))}),F=c.a.lazy(function(){return t.e(30).then(t.bind(null,516))}),G=c.a.lazy(function(){return Promise.all([t.e(0),t.e(33)]).then(t.bind(null,517))}),H=c.a.lazy(function(){return t.e(31).then(t.bind(null,518))}),M=c.a.lazy(function(){return Promise.all([t.e(0),t.e(34)]).then(t.bind(null,519))}),R=c.a.lazy(function(){return t.e(17).then(t.bind(null,520))}),U=c.a.lazy(function(){return Promise.all([t.e(0),t.e(35)]).then(t.bind(null,524))}),W=c.a.lazy(function(){return Promise.all([t.e(2),t.e(38)]).then(t.bind(null,521))}),q=[{path:"/",exact:!0,name:"Home",component:X},{path:"/dashboard",name:"Dashboard",component:f},{path:"/bike",name:"Bike",component:y},{path:"/theme",exact:!0,name:"Theme",component:W},{path:"/theme/colors",name:"Colors",component:W},{path:"/base",exact:!0,name:"Base",component:g},{path:"/base/cards",name:"Cards",component:g},{path:"/base/forms",name:"Forms",component:P},{path:"/base/switches",name:"Switches",component:S},{path:"/base/tables",name:"Tables",component:D},{path:"/base/tabs",name:"Tabs",component:I},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:z},{path:"/base/carousels",name:"Carousel",component:E},{path:"/base/collapses",name:"Collapse",component:v},{path:"/base/dropdowns",name:"Dropdowns",component:w},{path:"/base/jumbotrons",name:"Jumbotrons",component:k},{path:"/base/list-groups",name:"List Groups",component:x},{path:"/base/navbars",name:"Navbars",component:B},{path:"/base/navs",name:"Navs",component:j},{path:"/base/paginations",name:"Paginations",component:O},{path:"/base/popovers",name:"Popovers",component:C},{path:"/base/progress-bar",name:"Progress Bar",component:N},{path:"/base/tooltips",name:"Tooltips",component:L},{path:"/buttons",exact:!0,name:"Buttons",component:J},{path:"/buttons/buttons",name:"Buttons",component:J},{path:"/buttons/button-dropdowns",name:"Button Dropdowns",component:T},{path:"/buttons/button-groups",name:"Button Groups",component:A},{path:"/icons",exact:!0,name:"Icons",component:F},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:F},{path:"/icons/font-awesome",name:"Font Awesome",component:G},{path:"/icons/simple-line-icons",name:"Simple Line Icons",component:H},{path:"/notifications",exact:!0,name:"Notifications",component:M},{path:"/notifications/alerts",name:"Alerts",component:M},{path:"/notifications/badges",name:"Badges",component:R},{path:"/notifications/modals",name:"Modals",component:U},{path:"/widgets",name:"Widgets",component:c.a.lazy(function(){return Promise.all([t.e(1),t.e(24)]).then(t.bind(null,522))})}],K=c.a.lazy(function(){return t.e(40).then(t.bind(null,496))}),Q=c.a.lazy(function(){return t.e(36).then(t.bind(null,497))}),V=function(n){function e(){var n,t;Object(a.a)(this,e);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(t=Object(l.a)(this,(n=Object(r.a)(e)).call.apply(n,[this].concat(i)))).loading=function(){return c.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(i.a)(e,n),Object(o.a)(e,[{key:"signOut",value:function(n){n.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var n=this;return c.a.createElement("div",{className:"app"},c.a.createElement(b.c,{fixed:!0},c.a.createElement(u.Suspense,{fallback:this.loading()},c.a.createElement(Q,{onLogout:function(e){return n.signOut(e)}}))),c.a.createElement("div",{className:"app-body"},c.a.createElement(b.e,{fixed:!0,display:"lg"},c.a.createElement(b.h,null),c.a.createElement(b.g,null),c.a.createElement(u.Suspense,null,c.a.createElement(b.j,Object.assign({navConfig:d},this.props))),c.a.createElement(b.f,null),c.a.createElement(b.i,null)),c.a.createElement("main",{className:"main"},c.a.createElement(b.a,{appRoutes:q}),c.a.createElement(h.a,{fluid:!0},c.a.createElement(u.Suspense,{fallback:this.loading()},c.a.createElement(s.a,null,q.map(function(n,e){return n.component?c.a.createElement(m.a,{key:e,path:n.path,exact:n.exact,name:n.name,render:function(e){return c.a.createElement(n.component,e)}}):null}),c.a.createElement(p.a,{from:"/",to:"/dashboard"})))))),c.a.createElement(b.b,null,c.a.createElement(u.Suspense,{fallback:this.loading()},c.a.createElement(K,null))))}}]),e}(u.Component),X=e.default=V}}]);
//# sourceMappingURL=41.25bc1be9.chunk.js.map