(this["webpackJsonpcc-precook-ts"]=this["webpackJsonpcc-precook-ts"]||[]).push([[0],{204:function(e,t,a){e.exports=a.p+"static/media/logo.06c81d21.svg"},222:function(e,t,a){e.exports=a(359)},232:function(e,t){},234:function(e,t){},247:function(e,t){},249:function(e,t){},277:function(e,t){},278:function(e,t){},283:function(e,t){},285:function(e,t){},309:function(e,t){},359:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(427),i=a(428),s=a(17),m=a(32),p=a.n(m),u={palette:{primary:{main:"#536DFE",light:p()("#536DFE").lighten(7.5).toHexString(),dark:p()("#536DFE").darken(15).toHexString()},secondary:{main:"#FF5C93",light:p()("#FF5C93").lighten(7.5).toHexString(),dark:p()("#FF5C93").darken(15).toHexString(),contrastText:"#FFFFFF"},warning:{main:"#FFC260",light:p()("#FFC260").lighten(7.5).toHexString(),dark:p()("#FFC260").darken(15).toHexString()},success:{main:"#3CD4A0",light:p()("#3CD4A0").lighten(7.5).toHexString(),dark:p()("#3CD4A0").darken(15).toHexString()},info:{main:"#9013FE",light:p()("#9013FE").lighten(7.5).toHexString(),dark:p()("#9013FE").darken(15).toHexString()},text:{primary:"#4A4A4A",secondary:"#6E6E6E",hint:"#B9B9B9"},background:{default:"#F6F7FF",light:"#F3F5FF"}},customShadows:{widget:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetDark:"0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetWide:"0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"}},d=a(205),g={default:Object(d.a)(Object(s.a)(Object(s.a)({},u),{typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2rem"},h3:{fontSize:"1.64rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.285rem"},h6:{fontSize:"1.142rem"}}}))},f=a(123),y=a(40),h=a(15),b=a(201),E=window.location.host.split("."),k=E[0],C=E.slice(1);C.unshift("api");var x="https://"+C.join(".")+(window.location.port?":"+window.location.port:"")+"/data/"+k+"/",w=E.slice(1);w.unshift("login");var v=w.join(".")+(window.location.port?":"+window.location.port:"")+"/auth/login?ledgerId="+k,N=a(29),O=r.a.createContext({isAuthenticated:!1}),j=r.a.createContext({});function S(e,t){switch(t.type){case"LOGIN_SUCCESS":return{isAuthenticated:!0,token:t.token,party:t.party};case"LOGIN_FAILURE":case"SIGN_OUT_SUCCESS":return{isAuthenticated:!1}}}var A=function(e){var t=e.children,a=localStorage.getItem("cc-precook.daml.party"),n=localStorage.getItem("cc-precook.daml.token"),l=a&&n?{isAuthenticated:!0,token:n,party:a}:{isAuthenticated:!1},o=r.a.useReducer(S,l),c=Object(N.a)(o,2),i=c[0],s=c[1];return r.a.createElement(O.Provider,{value:i},r.a.createElement(j.Provider,{value:s},t))};function F(){var e=r.a.useContext(O);if(void 0===e)throw new Error("useUserState must be used within a UserProvider");return e}function B(){var e=r.a.useContext(j);if(void 0===e)throw new Error("useUserDispatch must be used within a UserProvider");return e}function I(e,t,a,n,r,l){if(l(!1),r(!0),t){var o=a||function(e){return b.sign({"https://daml.com/ledger-api":{ledgerId:k,applicationId:"cc-precook",admin:!0,actAs:[e],readAs:[e]}},"secret")}(t);localStorage.setItem("cc-precook.daml.party",t),localStorage.setItem("cc-precook.daml.token",o),e({type:"LOGIN_SUCCESS",token:o,party:t}),l(!1),r(!1),n.push("/app")}else e({type:"LOGIN_FAILURE"}),l(!0),r(!1)}var U=function(){window.location.assign("https://".concat(v))};var R=a(47),z=a.n(R),T=a(404),D=a(406),L=a(407),P=a(76),W=a(202),H=a.n(W),G=a(429),_=a(403),M=Object(G.a)((function(e){return Object(_.a)({logotype:{color:"white",marginLeft:e.spacing(2.5),marginRight:e.spacing(2.5),fontWeight:500,fontSize:18,whiteSpace:"nowrap"},appBar:{width:"100vw",zIndex:e.zIndex.drawer+1},toolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},grow:{flexGrow:1},headerMenuButton:{marginLeft:e.spacing(2),padding:e.spacing(.5)},headerIcon:{fontSize:28,color:"rgba(255, 255, 255, 0.35)"}})})),q=Object(h.g)((function(e){var t=e.history,a=M(),n=F(),l=B();return r.a.createElement(T.a,{position:"fixed",className:a.appBar},r.a.createElement(D.a,{className:a.toolbar},r.a.createElement(P.a,{variant:"h6",className:a.logotype},"DAML App Template"),r.a.createElement("div",{className:a.grow}),n.isAuthenticated&&r.a.createElement(P.a,{variant:"h6"},"User: ",n.party),r.a.createElement(L.a,{"aria-haspopup":"true",color:"inherit",className:a.headerMenuButton,"aria-controls":"profile-menu",onClick:function(e){return function(e,t){localStorage.removeItem("daml.party"),localStorage.removeItem("daml.token"),e({type:"SIGN_OUT_SUCCESS"}),t.push("/login")}(l,t)}},r.a.createElement(H.a,{className:a.headerIcon}))))})),Y=a(431),J=a(408),Q=a(361),V=a(409),K=a(410),X=a(203),Z=a.n(X),$=Object(G.a)((function(e){return Object(_.a)({drawer:{width:180,flexShrink:0,whiteSpace:"nowrap"},toolbar:Object(s.a)({},e.mixins.toolbar),linkRoot:{},link:{textDecoration:"none","&:hover, &:focus":{backgroundColor:e.palette.background.light}},linkActive:{backgroundColor:e.palette.background.light},linkIcon:{marginRight:e.spacing(1),color:e.palette.text.secondary+"99",width:24,display:"flex",justifyContent:"center"},linkIconActive:{marginRight:e.spacing(1),width:24,display:"flex",justifyContent:"center",color:e.palette.primary.main},linkText:{padding:0,fontSize:16,color:e.palette.text.secondary+"CC"},linkTextActive:{padding:0,fontSize:16,color:e.palette.text.primary}})})),ee=function(e){var t=e.path,a=e.icon,n=e.label,l=e.location,o=$(),c=t&&(l.pathname===t||-1!==l.pathname.indexOf(t));return r.a.createElement(Q.a,{button:!0,component:y.b,to:t,className:o.link,classes:{root:c?o.linkActive:o.linkRoot},disableRipple:!0},r.a.createElement(V.a,{className:c?o.linkIconActive:o.linkIcon},a),r.a.createElement(K.a,{classes:{primary:c?o.linkTextActive:o.linkText},primary:n}))},te=Object(h.g)((function(e){var t=e.location,a=$();return r.a.createElement(Y.a,{open:!0,variant:"permanent",className:a.drawer,classes:{paper:a.drawer}},r.a.createElement("div",{className:a.toolbar}),r.a.createElement(J.a,{style:{width:"100%"}},r.a.createElement(ee,{key:0,label:"Report",path:"/app/report",icon:r.a.createElement(Z.a,null),location:t})))})),ae=a(53),ne=a.n(ae),re=a(97),le=a(420),oe=a(421),ce=a(422),ie=a(423),se=a(424),me=a(419),pe=a(64),ue=a(72),de=a(415),ge=a(416),fe=a(417),ye=a(418),he=a(434),be=a(430),Ee=a(432),ke=a(411),Ce=a(414);function xe(e){var t=Object(n.useState)(e.defaultValue),a=Object(N.a)(t,2),l=a[0],o=a[1];var c=Object.entries(e.fields);return r.a.createElement(de.a,{open:e.open,onClose:function(){return e.onClose(null)},maxWidth:"sm",fullWidth:!0},r.a.createElement(ge.a,null,e.title),r.a.createElement(fe.a,null,c.map((function(e,t){return function(e,t){var a=Object(N.a)(e,2),n=a[0],c=a[1];return"selection"===c.type?r.a.createElement(ke.a,{key:t,fullWidth:!0},r.a.createElement(Ee.a,{required:!0},c.label),r.a.createElement(be.a,{value:l[n],defaultValue:"",onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(ue.a)({},n,e.target.value)))}},c.items.map((function(e){return r.a.createElement(Ce.a,{key:e,value:e},e)})))):r.a.createElement(he.a,{required:!0,autoFocus:!0,fullWidth:!0,key:t,label:c.label,type:c.type,onChange:function(e){return o(Object(s.a)(Object(s.a)({},l),{},Object(ue.a)({},n,e.target.value)))},InputLabelProps:{shrink:!0,required:!0},placeholder:"date"===c.type?"YYYY-MM-DD":""})}(e,t)}))),r.a.createElement(ye.a,null,r.a.createElement(me.a,{onClick:function(){return e.onClose(null)},color:"primary"},"Cancel"),r.a.createElement(me.a,{onClick:function(){return e.onClose(l)},color:"primary"},"Okay")))}var we=Object(G.a)((function(e){return Object(_.a)({tableCell:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem"},tableCellButton:{verticalAlign:"center",paddingTop:0,paddingBottom:0,fontSize:"0.75rem"},tableRow:{height:"auto"},textField:{fontSize:"0.75rem"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},choiceButton:{paddingTop:0,paddingBottom:0}})}));function ve(){var e=we(),t=Object(R.useParty)(),a=Object(R.useLedger)(),l=Object(R.useStreamQuery)(pe.CreditCard).contracts,o=Object(R.useStreamQuery)(pe.CreditCardApplication).contracts,c=Object(R.useStreamQuery)(pe.DeclinedApplication).contracts,i={open:!1,title:"New Asset",defaultValue:{underwriter:"",name:"",ccType:"Perks",currency:"USD"},fields:{underwriter:{label:"Underwriter",type:"text"},name:{label:"Name",type:"text"},ccType:{label:"Card Rewards",type:"selection",items:["Points","CashBack","Perks"]},currency:{label:"Currency",type:"selection",items:["USD","CHF","GBP","EUR","CAD","MXN","AUD","JPY"]}},onClose:function(){var e=Object(re.a)(ne.a.mark((function e(){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},m=Object(n.useState)(i),p=Object(N.a)(m,2),u=p[0],d=p[1];function g(){return(g=Object(re.a)(ne.a.mark((function e(t){return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.exercise(pe.DeclinedApplication.RequestNewCard,t,{});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,u),r.a.createElement(me.a,{color:"primary",size:"small",className:e.choiceButton,variant:"contained",onClick:function(){return function(){function e(){return(e=Object(re.a)(ne.a.mark((function e(n){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(Object(s.a)(Object(s.a)({},i),{},{open:!1})),n){e.next=3;break}return e.abrupt("return");case 3:return r=Object(s.a)(Object(s.a)({},n),{},{owner:t}),e.next=6,a.create(pe.CreditCardApplication,r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d(Object(s.a)(Object(s.a)({},i),{},{open:!0,onClose:function(t){return e.apply(this,arguments)}}))}()}},"Apply For a Credit Card!"),r.a.createElement("h1",null,"Applications"),r.a.createElement(le.a,{size:"small"},r.a.createElement(oe.a,null,r.a.createElement(ce.a,{className:e.tableRow},r.a.createElement(ie.a,{key:0,className:e.tableCell},"Underwriter"),r.a.createElement(ie.a,{key:1,className:e.tableCell},"Name"),r.a.createElement(ie.a,{key:2,className:e.tableCell},"Type"),r.a.createElement(ie.a,{key:3,className:e.tableCell},"Currency"))),r.a.createElement(se.a,null,o.map((function(t){return r.a.createElement(ce.a,{key:t.contractId,className:e.tableRow},r.a.createElement(ie.a,{key:0,className:e.tableCell},t.payload.underwriter),r.a.createElement(ie.a,{key:1,className:e.tableCell},t.payload.name),r.a.createElement(ie.a,{key:2,className:e.tableCell},t.payload.ccType),r.a.createElement(ie.a,{key:3,className:e.tableCell},t.payload.currency))})))),r.a.createElement("h1",null,"Declined Applications"),r.a.createElement(le.a,{size:"small"},r.a.createElement(oe.a,null,r.a.createElement(ce.a,{className:e.tableRow},r.a.createElement(ie.a,{key:0,className:e.tableCell},"Underwriter"),r.a.createElement(ie.a,{key:1,className:e.tableCell},"Name"),r.a.createElement(ie.a,{key:2,className:e.tableCell},"Consider..."),r.a.createElement(ie.a,{key:3,className:e.tableCell},"Currency"),r.a.createElement(ie.a,{key:4,className:e.tableCell},"Re-apply"))),r.a.createElement(se.a,null,c.map((function(a){return r.a.createElement(ce.a,{key:a.contractId,className:e.tableRow},r.a.createElement(ie.a,{key:0,className:e.tableCell},a.payload.underwriter),r.a.createElement(ie.a,{key:1,className:e.tableCell},a.payload.name),r.a.createElement(ie.a,{key:2,className:e.tableCell},a.payload.suggestedCcType),r.a.createElement(ie.a,{key:3,className:e.tableCell},a.payload.currency),r.a.createElement(ie.a,{key:4,className:e.tableCellButton},r.a.createElement(me.a,{color:"primary",size:"small",className:e.choiceButton,variant:"contained",disabled:a.payload.owner!==t,onClick:function(){return function(e){return g.apply(this,arguments)}(a.contractId)}},"Request")))})))),r.a.createElement("h1",null,"Approved Credit Cards"),r.a.createElement(le.a,{size:"small"},r.a.createElement(oe.a,null,r.a.createElement(ce.a,{className:e.tableRow},r.a.createElement(ie.a,{key:0,className:e.tableCell},"Underwriter"),r.a.createElement(ie.a,{key:1,className:e.tableCell},"Name"),r.a.createElement(ie.a,{key:2,className:e.tableCell},"Type"),r.a.createElement(ie.a,{key:3,className:e.tableCell},"Currency"),r.a.createElement(ie.a,{key:4,className:e.tableCell},"Limit"))),r.a.createElement(se.a,null,l.map((function(t){return r.a.createElement(ce.a,{key:t.contractId,className:e.tableRow},r.a.createElement(ie.a,{key:0,className:e.tableCell},t.payload.underwriter),r.a.createElement(ie.a,{key:1,className:e.tableCell},t.payload.name),r.a.createElement(ie.a,{key:2,className:e.tableCell},t.payload.ccType),r.a.createElement(ie.a,{key:3,className:e.tableCell},t.payload.currency),r.a.createElement(ie.a,{key:4,className:e.tableCell},t.payload.limit))})))))}var Ne=Object(G.a)((function(e){return Object(_.a)({root:{display:"flex",maxWidth:"100vw",overflowX:"hidden"},content:{flexGrow:1,padding:e.spacing(3),width:"calc(100vw - ".concat(240+e.spacing(6),"px)"),minHeight:"100vh"},fakeToolbar:Object(s.a)({},e.mixins.toolbar)})})),Oe=Object(h.g)((function(){var e=Ne(),t=F();return t.isAuthenticated?r.a.createElement(z.a,{party:t.party,token:t.token,httpBaseUrl:x,wsBaseUrl:void 0},r.a.createElement("div",{className:e.root},r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null),r.a.createElement(te,null),r.a.createElement("div",{className:e.content},r.a.createElement("div",{className:e.fakeToolbar}),r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/app/report",component:ve})))))):null})),je=a(425),Se=a(208),Ae=Object(G.a)((function(e){return Object(_.a)({container:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0},paperRoot:{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:e.spacing(8),paddingBottom:e.spacing(8),paddingLeft:e.spacing(6),paddingRight:e.spacing(6),maxWidth:404},errorCode:{marginBottom:e.spacing(5),fontSize:84,fontWeight:600},safetyText:{marginBottom:e.spacing(5),fontWeight:300,color:e.palette.text,textAlign:"center"},backButton:{textTransform:"none",fontSize:22}})})),Fe=function(){var e=Ae();return r.a.createElement(je.a,{container:!0,className:e.container},r.a.createElement(Se.a,{classes:{root:e.paperRoot}},r.a.createElement(P.a,{variant:"h3",color:"primary",className:e.errorCode},"404"),r.a.createElement(P.a,{variant:"h5",color:"primary",className:e.safetyText},"Oops. Looks like the page you're looking for no longer exists"),r.a.createElement(me.a,{variant:"contained",color:"primary",component:y.b,to:"/",size:"large",className:e.backButton},"Back to Home")))},Be=a(426),Ie=a(209),Ue=Object(G.a)((function(e){return Object(_.a)({container:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0},logotypeContainer:{backgroundColor:e.palette.background.default,width:"60%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},logotypeImage:{width:165,marginBottom:e.spacing(4)},logotypeText:{color:"#3a478f",fontWeight:500,fontSize:64},formContainer:{width:"40%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},form:{width:320},tab:{fontWeight:400,fontSize:18},dablLoginButton:{marginBottom:e.spacing(2)},errorMessage:{textAlign:"center"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},textField:{borderBottomColor:e.palette.background.light},formButtons:{width:"100%",marginTop:e.spacing(4),display:"flex",justifyContent:"space-between",alignItems:"center"},loginLoader:{marginLeft:e.spacing(4)}})})),Re=a(204),ze=a.n(Re),Te=Object(h.g)((function(e){var t=Ue(),a=B(),l=Object(n.useState)(!1),o=Object(N.a)(l,2),c=o[0],i=o[1],s=Object(n.useState)(!1),m=Object(N.a)(s,2),p=m[0],u=m[1],d=Object(n.useState)(""),g=Object(N.a)(d,2),f=g[0],y=g[1],h=Object(n.useState)(""),b=Object(N.a)(h,2),E=b[0],k=b[1];return r.a.createElement(je.a,{container:!0,className:t.container},r.a.createElement("div",{className:t.logotypeContainer},r.a.createElement("img",{src:ze.a,alt:"logo",className:t.logotypeImage}),r.a.createElement(P.a,{className:t.logotypeText},"App Template")),r.a.createElement("div",{className:t.formContainer},r.a.createElement("div",{className:t.form},r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie.a,{in:p},r.a.createElement(P.a,{color:"secondary",className:t.errorMessage},"Something is wrong with your login or password :(")),r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{className:t.dablLoginButton,variant:"contained",color:"primary",size:"large",onClick:U},"Log in with DABL"),r.a.createElement(P.a,null,"OR")),r.a.createElement(he.a,{id:"email",InputProps:{classes:{underline:t.textFieldUnderline,input:t.textField}},value:f,onChange:function(e){return y(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&I(a,f,E,e.history,i,u)},margin:"normal",placeholder:"Username",type:"email",fullWidth:!0}),r.a.createElement(he.a,{id:"password",InputProps:{classes:{underline:t.textFieldUnderline,input:t.textField}},value:E,onChange:function(e){return k(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&I(a,f,E,e.history,i,u)},margin:"normal",placeholder:"Password",type:"password",fullWidth:!0}),r.a.createElement("div",{className:t.formButtons},c?r.a.createElement(Be.a,{size:26,className:t.loginLoader}):r.a.createElement(me.a,{disabled:0===f.length,onClick:function(){return I(a,f,E,e.history,i,u)},variant:"contained",color:"primary",size:"large"},"Login"))))))}));function De(){var e=F();return r.a.createElement(y.a,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:function(){var e=B();return Object(n.useEffect)((function(){var t=new URL(window.location.toString()),a=t.searchParams.get("token");if(null!==a){var n=t.searchParams.get("party");if(null===n)throw Error("When 'token' is passed via URL, 'party' must be passed too.");localStorage.setItem("cc-precook.daml.party",n),localStorage.setItem("cc-precook.daml.token",a),e({type:"LOGIN_SUCCESS",token:a,party:n})}})),r.a.createElement(h.a,{to:"/app/report"})}}),r.a.createElement(h.b,{exact:!0,path:"/app",render:function(){return r.a.createElement(h.a,{to:"/app/report"})}}),r.a.createElement(t,{path:"/app",component:Oe}),r.a.createElement(a,{path:"/login",component:Te}),r.a.createElement(h.b,{component:Fe})));function t(t){var a=t.component,n=Object(f.a)(t,["component"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(t){return e.isAuthenticated?r.a.createElement(a,t):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:t.location}}})}}))}function a(t){var a=t.component,n=Object(f.a)(t,["component"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(t){return e.isAuthenticated?r.a.createElement(h.a,{to:{pathname:"/"}}):r.a.createElement(a,t)}}))}}o.a.render(r.a.createElement(A,null,r.a.createElement(c.a,{theme:g.default},r.a.createElement(i.a,null),r.a.createElement(De,null))),document.getElementById("root"))}},[[222,1,2]]]);
//# sourceMappingURL=main.d3df069c.chunk.js.map