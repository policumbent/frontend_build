(this.webpackJsonpmarta=this.webpackJsonpmarta||[]).push([[22],{558:function(e,a,l){"use strict";var t=l(18),c=l(51),r=l(2),n=l.n(r),m=l(56),d=l.n(m),o=l(553),s=l.n(o),i=l(554),u=d.a.oneOfType([d.a.number,d.a.string]),E={tag:i.q,noGutters:d.a.bool,className:d.a.string,cssModule:d.a.object,form:d.a.bool,xs:u,sm:u,md:u,lg:u,xl:u},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e){var a=e.className,l=e.cssModule,r=e.noGutters,m=e.tag,d=e.form,o=e.widths,u=Object(c.a)(e,["className","cssModule","noGutters","tag","form","widths"]),E=[];o.forEach((function(a,l){var t=e[a];if(delete u[a],t){var c=!l;E.push(c?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var h=Object(i.m)(s()(a,r?"no-gutters":null,d?"form-row":"row",E),l);return n.a.createElement(m,Object(t.a)({},u,{className:h}))};b.propTypes=E,b.defaultProps=h,a.a=b},559:function(e,a,l){"use strict";var t=l(18),c=l(51),r=l(2),n=l.n(r),m=l(56),d=l.n(m),o=l(553),s=l.n(o),i=l(554),u=d.a.oneOfType([d.a.number,d.a.string]),E=d.a.oneOfType([d.a.bool,d.a.number,d.a.string,d.a.shape({size:d.a.oneOfType([d.a.bool,d.a.number,d.a.string]),order:u,offset:u})]),h={tag:i.q,xs:E,sm:E,md:E,lg:E,xl:E,className:d.a.string,cssModule:d.a.object,widths:d.a.array},b={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,l){return!0===l||""===l?e?"col":"col-"+a:"auto"===l?e?"col-auto":"col-"+a+"-auto":e?"col-"+l:"col-"+a+"-"+l},N=function(e){var a=e.className,l=e.cssModule,r=e.widths,m=e.tag,d=Object(c.a)(e,["className","cssModule","widths","tag"]),o=[];r.forEach((function(a,t){var c=e[a];if(delete d[a],c||""===c){var r=!t;if(Object(i.k)(c)){var n,m=r?"-":"-"+a+"-",u=f(r,a,c.size);o.push(Object(i.m)(s()(((n={})[u]=c.size||""===c.size,n["order"+m+c.order]=c.order||0===c.order,n["offset"+m+c.offset]=c.offset||0===c.offset,n)),l))}else{var E=f(r,a,c);o.push(E)}}})),o.length||o.push("col");var u=Object(i.m)(s()(a,o),l);return n.a.createElement(m,Object(t.a)({},d,{className:u}))};N.propTypes=h,N.defaultProps=b,a.a=N},561:function(e,a,l){"use strict";var t=l(18),c=l(51),r=l(2),n=l.n(r),m=l(56),d=l.n(m),o=l(553),s=l.n(o),i=l(554),u={tag:i.q,inverse:d.a.bool,color:d.a.string,body:d.a.bool,outline:d.a.bool,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.color,m=e.body,d=e.inverse,o=e.outline,u=e.tag,E=e.innerRef,h=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),b=Object(i.m)(s()(a,"card",!!d&&"text-white",!!m&&"card-body",!!r&&(o?"border":"bg")+"-"+r),l);return n.a.createElement(u,Object(t.a)({},h,{className:b,ref:E}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},562:function(e,a,l){"use strict";var t=l(18),c=l(51),r=l(2),n=l.n(r),m=l(56),d=l.n(m),o=l(553),s=l.n(o),i=l(554),u={tag:i.q,className:d.a.string,cssModule:d.a.object,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},E=function(e){var a=e.className,l=e.cssModule,r=e.innerRef,m=e.tag,d=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(i.m)(s()(a,"card-body"),l);return n.a.createElement(m,Object(t.a)({},d,{className:o,ref:r}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},563:function(e,a,l){"use strict";var t=l(18),c=l(51),r=l(2),n=l.n(r),m=l(56),d=l.n(m),o=l(553),s=l.n(o),i=l(554),u={tag:i.q,className:d.a.string,cssModule:d.a.object},E=function(e){var a=e.className,l=e.cssModule,r=e.tag,m=Object(c.a)(e,["className","cssModule","tag"]),d=Object(i.m)(s()(a,"card-header"),l);return n.a.createElement(r,Object(t.a)({},m,{className:d}))};E.propTypes=u,E.defaultProps={tag:"div"},a.a=E},784:function(e,a,l){"use strict";var t=l(18),c=l(51),r=l(2),n=l.n(r),m=l(56),d=l.n(m),o=l(553),s=l.n(o),i=l(554),u={className:d.a.string,cssModule:d.a.object,size:d.a.string,bordered:d.a.bool,borderless:d.a.bool,striped:d.a.bool,dark:d.a.bool,hover:d.a.bool,responsive:d.a.oneOfType([d.a.bool,d.a.string]),tag:i.q,responsiveTag:i.q,innerRef:d.a.oneOfType([d.a.func,d.a.string,d.a.object])},E=function(e){var a=e.className,l=e.cssModule,r=e.size,m=e.bordered,d=e.borderless,o=e.striped,u=e.dark,E=e.hover,h=e.responsive,b=e.tag,f=e.responsiveTag,N=e.innerRef,x=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"]),p=Object(i.m)(s()(a,"table",!!r&&"table-"+r,!!m&&"table-bordered",!!d&&"table-borderless",!!o&&"table-striped",!!u&&"table-dark",!!E&&"table-hover"),l),k=n.a.createElement(b,Object(t.a)({},x,{ref:N,className:p}));if(h){var v=Object(i.m)(!0===h?"table-responsive":"table-responsive-"+h,l);return n.a.createElement(f,{className:v},k)}return k};E.propTypes=u,E.defaultProps={tag:"table",responsiveTag:"div"},a.a=E},807:function(e,a,l){"use strict";l.r(a);var t=l(143),c=l(144),r=l(146),n=l(145),m=l(147),d=l(2),o=l.n(d),s=l(558),i=l(559),u=l(561),E=l(563),h=l(562),b=l(784),f=l(580),N=function(e){function a(){return Object(t.a)(this,a),Object(r.a)(this,Object(n.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(s.a,null,o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch default"),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"success",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"warning",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"info",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"danger",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"light",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"dark",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"primary",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch pills"),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"3d Switch"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"3d Switch"," ",o.a.createElement("small",null,o.a.createElement("code",null,"disabled"))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"success",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"warning",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"info",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"danger",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"light",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"dark",checked:!0,disabled:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"3d Switch"," ",o.a.createElement("small",null,o.a.createElement("code",null,'outline="alt"'))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"secondary",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"success",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"warning",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"info",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"danger",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"light",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"dark",checked:!0,outline:"alt"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",outline:"alt",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"3d Switch"," ",o.a.createElement("small",null,o.a.createElement("code",null,"label"))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"3d Switch"," ",o.a.createElement("small",null,o.a.createElement("code",null,'outline="alt" label'))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"3d Switch"," ",o.a.createElement("small",null,o.a.createElement("code",null,'outline="alt" label'))," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"secondary",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"success",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"warning",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"info",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"danger",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"light",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"dark",defaultChecked:!0,label:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"3d",outline:"alt",color:"primary",label:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch outline"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"success",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"warning",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"info",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"danger",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"light",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"dark",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch outline pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch outline alternative"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"success",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"warning",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"info",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"danger",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"light",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"dark",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:"alt",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch outline alternative - pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"success",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"warning",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"info",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"danger",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"light",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"dark",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"primary",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"success",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"warning",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"info",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"danger",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"light",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"dark",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:!0,label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",outline:!0,label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:!0,label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"success",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"warning",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"info",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"danger",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"light",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"dark",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:"alt",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",label:!0,checked:!0}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,disabled:!0})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline alternative"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",outline:!0,checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:!0,disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline alternative"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12",md:"6"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Switch with text outline alternative pills"," ",o.a.createElement("a",{href:"https://coreui.io/pro/react/",className:"badge badge-danger"},"CoreUI Pro")),o.a.createElement(h.a,null,o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"secondary",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"success",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"warning",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"info",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"danger",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"light",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"dark",outline:"alt",checked:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"}),o.a.createElement(f.d,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",disabled:!0,label:!0,dataOn:"\u2713",dataOff:"\u2715"})))),o.a.createElement(i.a,{xs:"12"},o.a.createElement(u.a,null,o.a.createElement(E.a,null,"Sizes"),o.a.createElement(h.a,{className:"p-0"},o.a.createElement(b.a,{hover:!0,striped:!0,className:"table-align-middle mb-0"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Size"),o.a.createElement("th",null,"Example"),o.a.createElement("th",null,"Props"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Large"),o.a.createElement("td",null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"lg"})),o.a.createElement("td",null,"Add ",o.a.createElement("code",null,"size=","lg"))),o.a.createElement("tr",null,o.a.createElement("td",null,"Normal"),o.a.createElement("td",null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",checked:!0})),o.a.createElement("td",null,"-")),o.a.createElement("tr",null,o.a.createElement("td",null,"Small"),o.a.createElement("td",null,o.a.createElement(f.d,{className:"mx-1",variant:"3d",color:"primary",checked:!0,size:"sm"})),o.a.createElement("td",null,"Add ",o.a.createElement("code",null,"size=","sm"))))))))))}}]),a}(d.Component);a.default=N}}]);
//# sourceMappingURL=22.0f2f2963.chunk.js.map