(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{540:function(e,t,a){"use strict";a.r(t);var n=a(330),l=a(95),s=a(96),i=a(99),r=a(97),c=a(98),o=a(1),m=a.n(o),u=a(297),d=a(298),p=a(300),h=a(302),E=a(299),g=a(328),f=a(301),b=a(485),v=a(486),S=a(487),y=a(321),O=a(316),N=a(320),x=a(103),w=a(169),k=(a(477),a(478),{type:"info",insert:"top",container:"top-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],width:300,dismiss:{duration:2500,onScreen:!0,pauseOnHover:!0,showIcon:!0}});var j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e)))._isMounted=!1,a.updateView=function(){a.reloadStatus()},a.loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.state={settings:"",state:"",visible:!1,visible_video:!1,visible_rasp:!1},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.reloadStatus()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"reloadStatus",value:function(){var e=this;x.a.getSettings(function(t){JSON.stringify(e.state.settings)!==JSON.stringify(t)&&e.setState({settings:t})}),x.a.getState(function(t){e.setState({state:t})})}},{key:"render",value:function(){return""===this.state.state||""===this.state.settings?null:m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(d.a,{xs:"12",xl:"4"},m.a.createElement(z,{settings:this.state.settings,state:this.state.state,reloadStatus:this.updateView})),m.a.createElement(d.a,{xs:"12",xl:"4"},m.a.createElement(C,{value:this.state.state.video_recording,dest:this.state.state.dest,reloadStatus:this.updateView}),m.a.createElement(R,{dest:this.state.state.dest,reloadStatus:this.updateView})),m.a.createElement(d.a,{xs:"12",xl:"4"},m.a.createElement(V,{settings:this.state.settings,reloadStatus:this.updateView}))))}}]),t}(o.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleSwitch=function(){a.inputVideo.value=!a.inputVideo.value},a.handleText=function(e){var t=e.target.value;e.target.validity.valid&&(a.inputVideo.name=t)},a.toggle=function(){a.setState({collapse:!a.state.collapse})},a.sendVideo=function(){w.store.addNotification(Object(n.a)({title:"Video",message:"Invio del pacchetto video alla bici"},k)),x.a.sendVideo(a.inputVideo),a.props.reloadStatus()},a.state={collapse:!1},a.inputVideo={dest:a.props.dest,type:"7",value:a.props.value,name:""},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(h.a,null,m.a.createElement(E.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:this.toggle,"aria-expanded":this.state.collapse},m.a.createElement("strong",null,"Video"))),m.a.createElement(g.a,{isOpen:!this.state.collapse},m.a.createElement(f.a,null,m.a.createElement(b.a,{action:"",encType:"multipart/form-data",className:"form-horizontal"},m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Registrazione")),m.a.createElement(d.a,{md:"3"},m.a.createElement(N.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,checked:this.props.value,onChange:this.handleSwitch}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"5"},m.a.createElement(S.a,null,"Name")),m.a.createElement(d.a,{md:"7"},m.a.createElement(y.a,{className:"text-center",type:"text",pattern:"*",placeholder:"Inserire nome del file video",onChange:this.handleText}))))),m.a.createElement(O.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"9"},m.a.createElement(E.a,{type:"submit","data-dismiss":"alert",size:"sl",color:"primary",onClick:this.sendVideo},m.a.createElement("i",{className:"fa fa-sign-out"})," Send"),"\u2002")))))}}]),t}(o.Component),V=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).handleSwitch=function(e){var t=a.inputSettings,n=!t[e];t[e]=n},a.handleText=function(e,t){var n=a.inputSettings,l=t.target.value;t.target.validity.valid&&(n[e]=l)},a.toggle=function(){a.setState({collapse:!a.state.collapse})},a.saveSettings=function(){w.store.addNotification(Object(n.a)({title:"Settings",message:"Invio del pacchetto settings alla bici"},k)),a.inputSettings.update=function(){var e=new Date,t=e.getDate()+"-"+("0"+(e.getMonth()+1)).slice(-2);return("0"+(e.getHours()+1)).slice(-2)+":"+("0"+(e.getMinutes()+1)).slice(-2)+":"+("0"+(e.getSeconds()+1)).slice(-2)+"_"+t}(),x.a.saveSettings(a.inputSettings),a.props.reloadStatus()},a.state={collapse:!1},a.inputSettings=JSON.parse(JSON.stringify(a.props.settings)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(h.a,null,m.a.createElement(E.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:this.toggle,"aria-expanded":this.state.collapse},m.a.createElement("strong",null,"Impostazioni"))),m.a.createElement(g.a,{isOpen:!this.state.collapse},m.a.createElement(f.a,null,m.a.createElement(b.a,{action:"",encType:"multipart/form-data",className:"form-horizontal"},m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Log")),m.a.createElement(d.a,{md:"3"},m.a.createElement(N.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,onChange:this.handleSwitch.bind(this,"log"),checked:this.props.settings.log}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Csv")),m.a.createElement(d.a,{md:"3"},m.a.createElement(N.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,onChange:this.handleSwitch.bind(this,"csv"),checked:this.props.settings.csv}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Ant")),m.a.createElement(d.a,{md:"3"},m.a.createElement(N.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,onChange:this.handleSwitch.bind(this,"ant"),checked:this.props.settings.ant}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Potenza media")),m.a.createElement(d.a,{md:"3"},m.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"",defaultValue:this.props.settings.potenza,onChange:this.handleText.bind(this,"potenza")}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Led Mode")),m.a.createElement(d.a,{md:"3"},m.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.props.settings.led,onChange:this.handleText.bind(this,"led")}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Circonferenza")),m.a.createElement(d.a,{md:"3"},m.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.props.settings.circonferenza,onChange:this.handleText.bind(this,"circonferenza")}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Valore calibrazione")),m.a.createElement(d.a,{md:"3"},m.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.props.settings.calibration_value,onInput:this.handleText.bind(this,"calibration_value")}))),m.a.createElement(v.a,{row:!0},m.a.createElement(d.a,{md:"9"},m.a.createElement(S.a,null,"Run")),m.a.createElement(d.a,{md:"3"},m.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.props.settings.run,onInput:this.handleText.bind(this,"run")}))))),m.a.createElement(O.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"9"},m.a.createElement(E.a,{type:"submit","data-dismiss":"alert",size:"sl",color:"success",onClick:this.saveSettings},m.a.createElement("i",{className:"fa fa-download"})," Save"),"\u2002"),m.a.createElement(d.a,{md:"3"},m.a.createElement("div",{className:"text-center"},this.props.settings.update.replace("_","\n")))))))}}]),t}(o.Component),z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).toggle=function(){a.setState({collapse:!a.state.collapse})},a.toggleButton=function(){w.store.addNotification(Object(n.a)({},k,{title:"State",message:"Aggiornato lo status",type:"success"})),a.props.reloadStatus()},a.state={status:"",collapse:!1},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(){this.updateStatus()}},{key:"componentDidMount",value:function(){this.updateStatus()}},{key:"updateStatus",value:function(){var e=JSON.parse(JSON.stringify(this.props.state)),t=JSON.parse(JSON.stringify(this.props.settings));delete e.dest,delete e.type,delete t.dest,delete t.type;var a=JSON.stringify(e,null,1).replace(/\{|\}|"|,|/g,"").replace("\n",""),n=JSON.stringify(t,null,1).replace(/\{|\}|"|,/g,"");this.setState({status:a+n})}},{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(h.a,null,m.a.createElement(E.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:this.toggle,"aria-expanded":this.state.collapse},m.a.createElement("strong",null,"Status"))),m.a.createElement(g.a,{isOpen:!this.state.collapse},m.a.createElement(f.a,null,m.a.createElement("pre",null,m.a.createElement("code",null,this.state.status))),m.a.createElement(O.a,null,m.a.createElement(E.a,{className:"text-white bg-cyan",type:"submit",size:"sl",onClick:this.toggleButton},m.a.createElement("i",{className:"fa fa-refresh"})," Reload"))))}}]),t}(o.Component),R=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).toggle=function(){a.setState({collapse:!a.state.collapse})},a.sendRasp=function(e){w.store.addNotification(Object(n.a)({title:"Raspberry",message:"Invio del pacchetto raspberry alla bici"},k)),a.inputRasp.value=e,x.a.sendRasp(a.inputRasp),a.props.reloadStatus()},a.state={collapse:!1},a.inputRasp={dest:a.props.dest,type:"6",value:""},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return m.a.createElement(p.a,null,m.a.createElement(h.a,null,m.a.createElement(E.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:this.toggle,"aria-expanded":this.state.collapse},m.a.createElement("strong",null,"Raspberry"))),m.a.createElement(g.a,{isOpen:!this.state.collapse},m.a.createElement(f.a,null,m.a.createElement(u.a,null,m.a.createElement(d.a,{md:"8"},m.a.createElement(E.a,{type:"submit","data-dismiss":"alert",size:"sl",color:"danger",onClick:this.sendRasp.bind(this,"0")},m.a.createElement("i",{className:"fa fa-power-off"})," Spegni")),m.a.createElement(d.a,{md:"4"},"\u2002\u2002\u2002",m.a.createElement(E.a,{className:"text-white",type:"submit","data-dismiss":"alert",size:"sl",color:"warning",onClick:this.sendRasp.bind(this,"1")},m.a.createElement("i",{className:"fa fa-refresh"})," Riavvia"))))))}}]),t}(o.Component);t.default=j}}]);
//# sourceMappingURL=43.be9cfbf0.chunk.js.map