(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{498:function(e,t,a){"use strict";a.r(t);var n=a(95),l=a(96),s=a(98),i=a(97),r=a(99),c=a(1),o=a.n(c),m=a(295),u=a(296),d=a(363),h=a(298),p=a(300),g=a(297),E=a(326),v=a(299),f=a(477),b=a(478),S=a(479),y=a(319),w=a(314),x=a(318),O=a(103);var N=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e)))._isMounted=!1,a.newSettings=function(){a.showMessage(),a.reloadStatus()},a.recordVideo=function(){a.showMessageVideo(),a.reloadStatus()},a.toggleButton=function(){a.reloadStatus()},a.onDismiss=function(){a.state.visible?a.setState({visible:!1}):a.state.visible_video&&a.setState({visible_video:!1})},a.showMessage=function(){a.setState({visible:!0}),setTimeout(a.onDismiss,2500)},a.showMessageVideo=function(){a.setState({visible_video:!0}),setTimeout(a.onDismiss,2500)},a.loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},a.state={settings:"",state:"",visible:!1,visible_video:!1},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this._isMounted=!0,this.reloadStatus()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"reloadStatus",value:function(){var e=this;O.a.getSettings(function(t){return e.setState({settings:t})}),O.a.getState(function(t){return e.setState({state:t})})}},{key:"render",value:function(){return""===this.state.state?null:o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",xl:"4"},o.a.createElement(V,{settings:this.state.settings,state:this.state.state,toggleButton:this.toggleButton}),o.a.createElement(d.a,{color:"warning",isOpen:this.state.visible,toggle:this.onDismiss},"Impostazioni salvate")),o.a.createElement(u.a,{xs:"12",xl:"4"},o.a.createElement(k,{video:this.state.state.video_recording,dest:this.state.state.dest,sendVideo:this.recordVideo}),o.a.createElement(d.a,{color:"warning",isOpen:this.state.visible_video,toggle:this.onDismiss},"Registrazione video")),o.a.createElement(u.a,{xs:"12",xl:"4"},o.a.createElement(C,{settings:this.state.settings,saveSettings:this.newSettings}))))}}]),t}(c.Component),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleSwitch=function(){a.inputVideo.value=!a.inputVideo.value},a.handleText=function(e){var t=e.target.value;e.target.validity.valid&&(a.inputVideo.name=t)},a.toggle=function(){a.setState({collapse:!a.state.collapse})},a.sendVideo=function(){O.a.sendVideo(a.inputVideo),a.props.sendVideo()},a.state={value:a.props.video,collapse:!1},a.inputVideo={dest:a.props.dest,type:"7",value:"",name:""},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(){this.setState({value:this.props.video})}},{key:"render",value:function(){return""===this.inputVideo.value&&(this.inputVideo.value=this.state.value),o.a.createElement(h.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:this.toggle,"aria-expanded":this.state.collapse},o.a.createElement("strong",null,"Video"))),o.a.createElement(E.a,{isOpen:!this.state.collapse},o.a.createElement(v.a,null,o.a.createElement(f.a,{action:"",encType:"multipart/form-data",className:"form-horizontal"},o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"10"},o.a.createElement(S.a,null,"Registrazione")),o.a.createElement(u.a,{md:"2"},o.a.createElement(x.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,defaultValue:this.state.value,onChange:this.handleSwitch}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"5"},o.a.createElement(S.a,null,"Name")),o.a.createElement(u.a,{md:"7"},o.a.createElement(y.a,{className:"text-center",type:"text",pattern:"*",placeholder:"Inserire nome del file video",onChange:this.handleText}))))),o.a.createElement(w.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,{md:"9"},o.a.createElement(g.a,{type:"submit","data-dismiss":"alert",size:"sl",color:"primary",onClick:this.sendVideo},o.a.createElement("i",{className:"fa fa-sign-out"})," Send"),"\u2002")))))}}]),t}(c.Component),C=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).handleSwitch=function(e){var t=a.inputSettings,n=!t[e];t[e]=n},a.handleText=function(e,t){var n=a.inputSettings,l=t.target.value;t.target.validity.valid&&(n[e]=l)},a.toggle=function(){a.setState({collapse:!a.state.collapse})},a.saveSettings=function(){a.inputSettings.update=function(){var e=new Date,t=e.getDate()+"/"+(e.getMonth()+1);return e.getHours()+":"+e.getMinutes()+":"+e.getSeconds()+"-"+t}(),O.a.saveSettings(a.inputSettings),a.props.saveSettings()},a.state={settings:a.props.settings,collapse:!1},a.inputSettings=void 0,a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return void 0===this.inputSettings&&(this.inputSettings=JSON.parse(JSON.stringify(this.state.settings))),o.a.createElement(h.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:this.toggle,"aria-expanded":this.state.collapse},o.a.createElement("strong",null,"Impostazioni"))),o.a.createElement(E.a,{isOpen:!this.state.collapse},o.a.createElement(v.a,null,o.a.createElement(f.a,{action:"",encType:"multipart/form-data",className:"form-horizontal"},o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"10"},o.a.createElement(S.a,null,"Log")),o.a.createElement(u.a,{md:"2"},o.a.createElement(x.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,onChange:this.handleSwitch.bind(this,"log"),defaultChecked:this.state.settings.log}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"10"},o.a.createElement(S.a,null,"Csv")),o.a.createElement(u.a,{md:"2"},o.a.createElement(x.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,onChange:this.handleSwitch.bind(this,"csv"),checked:this.state.settings.csv}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"10"},o.a.createElement(S.a,null,"Ant")),o.a.createElement(u.a,{md:"2"},o.a.createElement(x.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,onChange:this.handleSwitch.bind(this,"ant"),defaultChecked:this.state.settings.ant}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"9"},o.a.createElement(S.a,null,"Potenza media")),o.a.createElement(u.a,{md:"3"},o.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"",defaultValue:this.state.settings.potenza,onChange:this.handleText.bind(this,"potenza")}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"9"},o.a.createElement(S.a,null,"Led Mode")),o.a.createElement(u.a,{md:"3"},o.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.state.settings.led,onChange:this.handleText.bind(this,"led")}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"9"},o.a.createElement(S.a,null,"Circonferenza")),o.a.createElement(u.a,{md:"3"},o.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.state.settings.circonferenza,onChange:this.handleText.bind(this,"circonferenza")}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"9"},o.a.createElement(S.a,null,"Valore calibrazione")),o.a.createElement(u.a,{md:"3"},o.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.state.settings.calibration_value,onInput:this.handleText.bind(this,"calibration_value")}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"9"},o.a.createElement(S.a,null,"Run")),o.a.createElement(u.a,{md:"3"},o.a.createElement(y.a,{className:"text-center",type:"number",min:"0",pattern:"[0-9]*",defaultValue:this.state.settings.run,onInput:this.handleText.bind(this,"run")}))),o.a.createElement(b.a,{row:!0},o.a.createElement(u.a,{md:"10"},o.a.createElement(S.a,null,"Record video")),o.a.createElement(u.a,{md:"2"},o.a.createElement(x.l,{className:"mx-1",variant:"pill",color:"primary",outline:"alt",label:!0,onChange:this.handleSwitch.bind(this,"video_record"),defaultChecked:this.state.settings.video_record}))))),o.a.createElement(w.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,{md:"9"},o.a.createElement(g.a,{type:"submit","data-dismiss":"alert",size:"sl",color:"success",onClick:this.saveSettings},o.a.createElement("i",{className:"fa fa-download"})," Save"),"\u2002"),o.a.createElement(u.a,{md:"3"},o.a.createElement("div",{className:"text-center"},this.state.settings.update))))))}}]),t}(c.Component),V=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).toggle=function(){a.setState({collapse:!a.state.collapse})},a.state={status:"",collapse:!1},a}return Object(r.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(){this.updateStatus()}},{key:"componentDidMount",value:function(){this.updateStatus()}},{key:"updateStatus",value:function(){var e=JSON.parse(JSON.stringify(this.props.state)),t=JSON.parse(JSON.stringify(this.props.settings));delete e.dest,delete e.type,delete t.dest,delete t.type;var a=JSON.stringify(e,null,1).replace(/\{|\}|"|,|/g,"").replace("\n",""),n=JSON.stringify(t,null,1).replace(/\{|\}|"|,/g,"");this.setState({status:a+n})}},{key:"render",value:function(){return o.a.createElement(h.a,null,o.a.createElement(p.a,null,o.a.createElement(g.a,{block:!0,color:"link",className:"text-left m-0 p-0",onClick:this.toggle,"aria-expanded":this.state.collapse},o.a.createElement("strong",null,"Status"))),o.a.createElement(E.a,{isOpen:!this.state.collapse},o.a.createElement(v.a,null,o.a.createElement("pre",null,o.a.createElement("code",null,this.state.status))),o.a.createElement(w.a,null,o.a.createElement(g.a,{type:"submit",size:"sl",color:"danger",onClick:this.props.toggleButton},o.a.createElement("i",{className:"fa fa-refresh"})," Reload"))))}}]),t}(c.Component);t.default=N}}]);
//# sourceMappingURL=43.df8a290c.chunk.js.map