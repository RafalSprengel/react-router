(this.webpackJsonprouter=this.webpackJsonprouter||[]).push([[0],{101:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),i=a.n(l),o=(a(95),a(147)),c=a(11),u=(a(96),a(28)),m=a(146),s=a(72),d=a.n(s),p=a(71),g=a.n(p),E=a(10),f=a(64),h=a(150),b=a(143),v=a(142),x=a(134),y=a(148),j=a(139),w=a(153),O=a(151),C=a(138),F=a(152),k=a(66),N=a.n(k),L=a(67),S=a.n(L),T=a(140),q=Object(x.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},withoutLabel:{marginTop:e.spacing(1)},textField:{width:250,marginTop:15},eye:{padding:"1px 6px !important",border:"0px !important",marginTop:"0px !important",marginRight:"0px !important","&:hover":{backgroundColor:"#838383 !important"}},onFocus:{color:"red"}}}));function D(e){e.className,e.onChange;var t=e.variant,a=e.label,l=e.value,i=e.error,o=e.helperText,u=e.handleInputChange,m=Object(n.useState)(!1),s=Object(c.a)(m,2),d=s[0],p=s[1],g=q();return r.a.createElement(F.a,{className:"".concat(g.textField," ").concat(g.onFocus),variant:t},r.a.createElement(O.a,{htmlFor:"outlined-adornment-password"},"Password"),r.a.createElement(w.a,{className:i?"".concat(g.onFocus):null,id:"outlined-adornment-password",type:d?"text":"password",value:l,onChange:u("pass"),label:a,error:i,autoComplete:"current-password",endAdornment:r.a.createElement(C.a,{position:"end"},r.a.createElement(j.a,{className:g.eye,"aria-label":"toggle password visibility",onClick:function(){p(!d)},edge:"end"},d?r.a.createElement(N.a,null):r.a.createElement(S.a,null))),labelWidth:70}),r.a.createElement(T.a,{error:i},o))}var U=a(145),I=a(144);function A(e){var t=e.handleDialog;return r.a.createElement("div",null,r.a.createElement(h.a,{open:!0,onClose:t,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(v.a,{id:"responsive-dialog-title"},"Check your login data"),r.a.createElement(b.a,null,r.a.createElement(I.a,null,"User name or password is incorrect!")),r.a.createElement(U.a,null,r.a.createElement(m.a,{onClick:t,color:"primary",autoFocus:!0},"Ok"))))}var P=r.a.createContext(),B=P.Consumer,J=function(e){var t=e.loggedUser,a=e.handleLogout,n=e.children;return r.a.createElement(P.Provider,{value:{loggedUser:t,handleLogout:a}},n)};var z=function(e){var t=e.handleDialogClose,a=e.handleLogin,l=Object(n.useState)(!0),i=Object(c.a)(l,2),o=i[0],u=i[1],s=Object(n.useState)(""),d=Object(c.a)(s,2),p=d[0],g=d[1],j=Object(n.useState)(""),w=Object(c.a)(j,2),O=w[0],C=w[1],F=Object(n.useState)(!1),k=Object(c.a)(F,2),N=k[0],L=k[1],S=Object(n.useState)(!1),T=Object(c.a)(S,2),q=T[0],U=T[1],I=Object(n.useState)({name:"",pass:""}),P=Object(c.a)(I,2),J=P[0],z=P[1],W="Johny",K="Cage",R=Object(x.a)((function(e){return{textField:{marginTop:"15px",width:250},button:{margin:"15px 0",textAlign:"center",display:"inline"},form:{display:"flex",flexDirection:"column",margin:"20px 50px",marginTop:0},formTitle:{paddingBottom:0,"& h2":{textAlign:"center"}}}}))(),H=function(e){if(e.preventDefault(),M(J.pass),G(J.name)||M(J.pass))return L(!0),!1;J.name===W&&J.pass===K?(z(""),L(!1),a(J.name)):U(!0)},Y=function(){U(!q)},G=function(e){return e.length<3?(g("user name at least 3 chars"),!0):(g(""),!1)},M=function(e){return e.length<1?(C("please fill this field"),!0):(C(""),!1)},Q=function(e){return function(t){t.persist();var a=t.target.value;z((function(t){return Object(f.a)({},t,Object(E.a)({},e,a))})),N&&"name"===e&&G(a),N&&"pass"===e&&M(a)}};return r.a.createElement("div",null,r.a.createElement(B,null,(function(e){var a=e.loggedUser;return r.a.createElement(h.a,{open:o&&!a,onExited:t,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(v.a,{className:R.formTitle,id:"alert-dialog-title"},"Sign In"),r.a.createElement(b.a,null,q?r.a.createElement(A,{handleDialog:Y}):null,r.a.createElement("div",{className:R.root},r.a.createElement("form",{onSubmit:H,className:R.form},r.a.createElement(y.a,{className:R.textField,onChange:Q("name"),variant:"outlined",label:"Username",auto:"username",error:!!p,helperText:p||!1}),r.a.createElement(D,{className:R.textField,handleInputChange:function(){return Q("pass")},variant:"outlined",label:"Password",error:!!O,helperText:O||!1}),r.a.createElement(m.a,{className:R.button,variant:"contained",color:"primary",type:"submit"},"Login"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){return u(!1)}},"Cancel")))))})))},W=(a(101),a(49)),K=a.n(W),R=a(68),H=a.n(R),Y=a(69),G=a.n(Y),M=a(70),Q=a.n(M),V=function(e){var t=e.handleLogin,a=Object(n.useState)(!1),l=Object(c.a)(a,2),i=l[0],o=l[1];return r.a.createElement("div",null,r.a.createElement(B,null,(function(e){var t=e.loggedUser,a=e.handleLogout;return r.a.createElement(r.a.Fragment,null,t?r.a.createElement(m.a,{id:"log-but",variant:"contained",color:"primary",endIcon:r.a.createElement(g.a,null),onClick:function(){return a()}},"LogOut"):r.a.createElement(m.a,{id:"log-but",variant:"contained",color:"primary",startIcon:r.a.createElement(d.a,null),onClick:function(){return o(!i)}},"Sign-in"))})),i&&r.a.createElement(z,{handleDialogClose:function(){o(!1)},handleLogin:t}),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/",render:function(e){return r.a.createElement("img",{src:K.a,alt:"city"})}}),r.a.createElement(u.b,{path:"/products",render:function(e){return r.a.createElement("img",{src:H.a,alt:"city"})}}),r.a.createElement(u.b,{path:"/contact",render:function(e){return r.a.createElement("img",{src:G.a,alt:"city"})}}),r.a.createElement(u.b,{path:"/admin",render:function(e){return r.a.createElement("img",{src:K.a,alt:"city"})}}),r.a.createElement(u.b,{render:function(e){return r.a.createElement("img",{src:Q.a,alt:"city",style:{width:"50%",filter:"blur(0px)"}})}})))},X=a(14),Z=(a(104),function(e){var t=e.text,a=e.author,n=e.title;return r.a.createElement("article",null,r.a.createElement("h2",null,n),r.a.createElement("div",{className:"article-text"},t),r.a.createElement("div",{className:"article-author"},"author: ",a))}),$=[{id:1,title:"Why Dark Energy Is The Biggest Unsolved Problem In The Universe?",author:"Jan Nowak",text:"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."},{id:2,title:"Fermi Paradox: Where Are the Aliens?",author:"Ania Kwiatkowska",text:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."},{id:3,title:"Are We Alone in the Universe??",author:"Jan Kowalski",text:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.."}].map((function(e){return r.a.createElement(Z,Object.assign({key:e.id},e))})),_=function(){return r.a.createElement(r.a.Fragment,null,$)},ee=(a(105),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Product page: "),e.match.params.item,r.a.createElement("br",null),r.a.createElement(X.b,{to:"/products"},"Back to product list"))}),te=["car","bike","motorcycle"],ae=function(){var e=te.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(X.b,{to:"/products/"+e},e))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{id:"product-list"},e))},ne=(a(106),Object(x.a)((function(e){return{textField:{width:"100%"},form:{display:"flex",flexDirection:"column",alignItems:"center"},button:{margin:"20px"}}}))),re=function(){var e=ne(),t=Object(n.useState)(""),a=Object(c.a)(t,2),l=a[0],i=a[1];return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i("")},className:e.form},r.a.createElement("h2",null,"Text to us:"),r.a.createElement(y.a,{className:e.textField,label:"Your message",multiline:!0,rows:"10",placeholder:"tap here your message",variant:"outlined",value:l,onChange:function(e){i(e.target.value)}}),r.a.createElement(m.a,{className:e.button,variant:"contained",color:"primary",type:"submit"},"Send")),r.a.createElement(u.a,{when:Boolean(l),message:"Are you sure you want to leave this page?"}))},le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Login: ",r.a.createElement("strong",null,"Johny")),r.a.createElement("p",null,"Password: ",r.a.createElement("strong",null,"Cage")))},ie=(a(107),function(e){e.handleLogin,e.handleLogout;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:_}),r.a.createElement(u.b,{exact:!0,path:"/products",component:ae}),r.a.createElement(u.b,{path:"/products/:item",component:ee}),r.a.createElement(u.b,{path:"/contact",component:re}),r.a.createElement(u.b,{path:"/blog",component:le}),r.a.createElement(u.b,{render:function(){return"Nie ma takiej strony"}})))}),oe=(a(108),function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),"you are in: ",e.match.url)}),ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("footer",null,r.a.createElement(u.b,{exact:!0,path:"/",component:function(){return r.a.createElement("div",{style:{color:"white"}},"This website has been made just for training purpose by Rafal Sprengel")}})),r.a.createElement(oe,null))},ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(X.c,{exact:!0,to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(X.c,{to:"/products"},"Products")),r.a.createElement("li",null,r.a.createElement(X.c,{to:"/contact"},"Contact")),r.a.createElement("li",null,r.a.createElement(X.c,{to:"/blog"},"Blog"))))},me=(a(109),function(){return r.a.createElement("aside",null,r.a.createElement(ue,null))}),se=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],l=t[1],i=function(e){l(e)},o=function(){l("")};return r.a.createElement(J,{loggedUser:a,handleLogout:o},r.a.createElement(X.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(V,{handleLogin:i})),r.a.createElement("main",null,r.a.createElement(me,null),r.a.createElement("section",null,r.a.createElement(ie,{handleLogin:i,handleLogout:o}))),r.a.createElement(ce,null))))},de=a(74),pe=Object(de.a)({palette:{primary:{main:"#ff7000"},secondary:{main:"#009900"}},absCenterDiv:{top:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}});i.a.render(r.a.createElement(o.a,{theme:pe},r.a.createElement(se,null)),document.getElementById("root"))},49:function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/site-not-found.8f905646.png"},90:function(e,t,a){e.exports=a(110)},95:function(e,t,a){},96:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.1e1d1d27.chunk.js.map