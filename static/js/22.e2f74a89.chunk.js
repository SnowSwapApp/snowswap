(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[22],{1333:function(e,t,n){"use strict";n.r(t);var c,r,i,s,a,o,b,l,j,u,d,x,m,O=n(1),p=n(13),h=n(71),f=n(235),g=n(8),v=n(4),y=n(2),k=n(0),w=v.e.div(c||(c=Object(g.a)(["\n  background: ",";\n  padding-bottom: 40px;\n  padding-top: 40px;\n"])),(function(e){var t=e.theme;return t.isDark?"repeating-linear-gradient(to right, #332453, #332453 40px, #281D44 40px, #281D44 80px)":"repeating-linear-gradient(to right, #21d4e2, #21d4e2 40px, #53dee9 40px, #53dee9 80px)"})),S=v.e.div(r||(r=Object(g.a)(["\n  background-image: url('/images/curtain-bottom-",".png');\n  background-repeat: repeat-x;\n  background-size: contain;\n  height: 20px;\n"])),(function(e){return e.theme.isDark?"dark":"light"})),N=function(){var e=Object(p.b)().t;return Object(k.jsxs)(y.l,{mb:"32px",children:[Object(k.jsx)(w,{children:Object(k.jsxs)(f.a,{children:[Object(k.jsx)(y.T,{as:"h1",scale:"xl",mb:"24px",children:e("Launchpad")}),Object(k.jsx)(y.Xb,{bold:!0,fontSize:"20px",children:e("Buy new tokens with a brand new token sale model.")})]})}),Object(k.jsx)(S,{})]})},P=n(36),T=n(6),I=n(3),D=n.n(I),B=n(12),R=n(10),X=n(152),A=n(118),F=n(384),L=n(58),C=n(21),U=function(){var e=Object(A.a)().fastRefresh,t=Object(O.useState)({status:-2,costPresale:-2,listingPrice:-2,softcap:-2,hardcap:-2,sold:-2,decimals:-2,name:"",symbol:"",link:"",logolink:"",headerlogo:"",isWhitelistOn:!1,round:-1,users:-2,maxUserAmount:-2,startPresaleTime:-2,endPresaleTime:-2,paused:!0,ILOToken:""}),n=Object(R.a)(t,2),c=n[0],r=n[1],i=(Object(X.a)().currentBlock,Object(C.l)()),s=Object(O.useCallback)(Object(B.a)(D.a.mark((function e(){var t,n,c,s,a,o,b,l,j,u,d,x,m,O,p,h,f,g,v,y,k,w,S;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["status","costPresale","listingPrice","softcap","hardcap","sold","decimals","name","symbol","link","logolink","headerlogo","isWhitelistOn","round","users","maxUserAmount","startPresaleTime","endPresaleTime","paused","ILOToken"].map((function(e){return{address:i,name:e}})),e.next=3,Object(L.b)(F,t);case 3:n=e.sent,c=Object(R.a)(n,20),s=c[0],a=c[1],o=c[2],b=c[3],l=c[4],j=c[5],u=c[6],d=c[7],x=c[8],m=c[9],O=c[10],p=c[11],h=c[12],f=c[13],g=c[14],v=c[15],y=c[16],k=c[17],w=c[18],S=c[19],r((function(e){return{status:s,costPresale:a,listingPrice:o,softcap:b,hardcap:l,sold:j,decimals:u,name:d,symbol:x,link:m,logolink:O,headerlogo:p,isWhitelistOn:h,round:f,users:g,maxUserAmount:v,startPresaleTime:y,endPresaleTime:k,paused:w,ILOToken:S}}));case 26:case"end":return e.stop()}}),e)}))),[i]);return Object(O.useEffect)((function(){s()}),[s,e]),Object(T.a)({},c)},E=n(41),W=n(90),z=n(19),Y=n(76),q=n(49),Q=n(46),G=n(30),J=n(40),V=n(14),H=n.n(V),M=["primaryToken","children"],K=function(e){var t=e.primaryToken,n=e.children,c=Object(q.a)(e,M);return Object(k.jsxs)(y.R,Object(T.a)(Object(T.a)({},c),{},{children:[Object(k.jsx)("img",{alt:"icon",width:32,style:{objectFit:"contain"},src:t}),Object(k.jsx)("div",{children:n})]}))},Z=function(e){return Object(k.jsx)(y.Xb,Object(T.a)({bold:!0,fontSize:"12px",color:"secondary",textTransform:"uppercase"},e))},$=function(e){return Object(k.jsx)(y.Xb,Object(T.a)({bold:!0,fontSize:"20px",style:{wordBreak:"break-all"}},e))},_=function(e){var t=e.publicIfoData,n=Object(E.c)().account,c=Object(p.b)().t,r=Object(y.yc)(c("Sorry,  You didn't buy anything in this sale."),{placement:"bottom"}),i=(r.targetRef,r.tooltip),s=r.tooltipVisible,a=Object(J.h)(t.ILOToken.toString()),o=Object(O.useState)("0"),b=Object(R.a)(o,2),l=b[0],j=b[1],u=Object(O.useState)("0"),d=Object(R.a)(u,2),x=d[0],m=d[1];Object(O.useEffect)((function(){function e(){return(e=Object(B.a)(D.a.mark((function e(){var c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=G.f,e.next=3,a.balanceOf(n);case 3:e.t1=e.sent.toString(),c=(0,e.t0)(e.t1,18,0),console.log("",c),j(new H.a(c).times(t.costPresale).div(1e18).toString()),m(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n,a,t]);return Object(k.jsxs)(y.l,{pb:"24px",children:[s&&i,-1!==t.status?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(K,{primaryToken:"/images/tokens/".concat(Q.i.wbnb.address[56]).concat(".svg"),children:[Object(k.jsxs)(Z,{children:["\xa0\xa0\xa0\xa0",c("Your BNB committed")]}),Object(k.jsxs)($,{children:["\xa0\xa0\xa0\xa0",l]})]}),Object(k.jsx)("br",{}),Object(k.jsxs)(K,{primaryToken:t.logolink,children:[Object(k.jsxs)(Z,{children:["\xa0\xa0\xa0\xa0",t.symbol.concat(" Recieved")]}),Object(k.jsxs)($,{children:["\xa0\xa0\xa0\xa0",x]})]})]}):null]})},ee=n(100),te=n(139),ne=function(e){e.currency;var t=e.onDismiss,n=Object(p.b)().t;return Object(k.jsx)(y.qb,{title:n("BNB required"),onDismiss:t,children:Object(k.jsx)(y.sb,{maxWidth:"288px",children:Object(k.jsx)(y.Xb,{mb:"16px",children:n("You'll need BNB to participate in the IFO!")})})})},ce=n(67),re=n(29),ie=[.1,.25,.5,.75,1],se=re.c.times(re.c.pow(re.a)).toString(),ae=function(e){var t=e.publicIfoData,n=e.onDismiss,c=(e.onSuccess,Object(O.useState)("")),r=Object(R.a)(c,2),i=r[0],s=r[1],a=(Object(E.c)().account,Object(te.c)().balance),o=Object(W.a)(),b=o.toastError,l=o.toastSuccess;console.log(a);var j=Object(J.l)(Object(C.l)()),u=Object(p.b)().t,d=(new H.a(i).times(ce.j),Object(O.useState)(!1)),x=Object(R.a)(d,2),m=x[0],h=x[1];return Object(k.jsx)(y.qb,{title:u("",{}),onDismiss:n,children:Object(k.jsxs)(y.sb,{maxWidth:"350px",children:[Object(k.jsx)(y.i,{value:i,onUserInput:function(e){s(e),h(Number(Object(G.e)(new H.a(e),18))<Number(t.costPresale))},mb:"8px"}),Object(k.jsx)(y.Xb,{color:"textSubtle",textAlign:"right",fontSize:"12px",mb:"16px",children:u("Balance: ")+Object(G.f)(a,18,6)}),Object(k.jsx)(y.R,{justifyContent:"space-between",mb:"16px",children:ie.map((function(e,t){return Object(k.jsxs)(y.o,{scale:"xs",variant:"tertiary",onClick:function(){return s((Number(Object(G.f)(a,18,6))*e).toString())},mr:t<ie.length-1?"8px":0,children:[100*e,"%"]},e)}))}),Object(k.jsx)(y.Xb,{color:"textSubtle",fontSize:"12px",mb:"24px",children:u("If you don't commit enough BNB, you may not receive any ILO tokens at all and will only receive a full refund of your BNB.")}),Object(k.jsx)(y.o,{disabled:m,onClick:Object(B.a)(D.a.mark((function e(){var t;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.buyPresale({gasPrice:se,value:Object(G.e)(new H.a(i)).toString()});case 3:return t=e.sent,e.next=6,t.wait();case 6:e.sent.status&&(l(u("Token Recieved"),u("Token has been sent to your wallet.")),n()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),b(u("Error"),u("You are not allowed to buy."));case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),children:"Buy"})]})})},oe=function(e){var t=e.publicIfoData,n=(t.maxUserAmount,Object(p.b)().t),c=Object(W.a)().toastSuccess,r=(t.ILOToken.toString(),Object(te.c)().balance),i=Object(E.c)().account,s=Object(J.l)(Object(C.l)()),a=Object(O.useState)(!1),o=Object(R.a)(a,2),b=o[0],l=o[1],j=Number(((new Date).getTime()/1e3).toFixed(0)),u=j<Number(t.startPresaleTime)?Number(t.startPresaleTime)-j:j<Number(t.endPresaleTime)?Number(t.endPresaleTime)-j:0;Object(O.useEffect)((function(){function e(){return(e=Object(B.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(t.isWhitelistOn[0]),!t.isWhitelistOn[0]){e.next=7;break}return console.log("asdasd"),e.next=5,s.isInList(i);case 5:"true"===e.sent.toString()&&l(!0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}i&&function(){e.apply(this,arguments)}()}),[i,s,t]);var d=function(){var e=Object(B.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(n("Success!"),n("You have contributed to this IFO!"));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=Object(y.wc)(Object(k.jsx)(ae,{publicIfoData:t,onSuccess:d}),!1),m=Object(R.a)(x,1)[0],h=Object(y.wc)(Object(k.jsx)(ne,{currency:Q.i.wbnb}),!1),f=Object(R.a)(h,1)[0];return j>Number(t.startPresaleTime)&&u>0&&(!t.isWhitelistOn[0]||b)?Object(k.jsx)(y.o,{onClick:r.isEqualTo(0)?f:m,width:"100%",children:"Buy Presale"}):(console.log("asda",j-Number(t.startPresaleTime),u),j>Number(t.startPresaleTime)&&u>0?Object(k.jsx)("div",{style:{textAlign:"center"},children:"Sorry you are not whitelisted."}):Object(k.jsx)("div",{style:{textAlign:"center"},children:"Coming soon"}))},be=function(e){var t=e.publicIfoData;Object(p.b)().t;return Object(E.c)().account?Object(k.jsx)(k.Fragment,{children:-1!==t.status&&Object(k.jsx)(oe,{publicIfoData:t})}):Object(k.jsx)(ee.a,{width:"100%"})},le=function(){return Object(k.jsxs)("div",{children:[Object(k.jsx)(y.Lb,{mb:"8px"}),Object(k.jsx)(y.Lb,{})]})},je=function(e){var t=e.label,n=e.value;return Object(k.jsxs)(y.R,{justifyContent:"space-between",alignItems:"center",children:[Object(k.jsx)(y.Xb,{small:!0,color:"textSubtle",children:t}),n?Object(k.jsx)(y.Xb,{small:!0,textAlign:"right",children:n}):Object(k.jsx)(y.Lb,{height:21,width:80})]})},ue=function(e){var t=e.publicIfoData,n=Object(p.b)().t;return-2!==Number(t.status)?(console.log(t.maxUserAmount.toString()),Object(k.jsxs)(y.l,{paddingTop:"24px",children:[Object(k.jsx)(je,{label:n("Max BNB entry:"),value:"0"!==t.maxUserAmount.toString()?t.maxUserAmount/t.costPresale:"No Limit"}),Object(k.jsx)(je,{label:n("BNB raised:"),value:"".concat(Object(G.f)(new H.a(t.sold),t.decimals,2).toString())}),Object(k.jsx)(je,{label:n("Token sold:"),value:"".concat((Number(t.sold)/Number(t.costPresale)).toString())}),Object(k.jsx)(je,{label:n("Price Per BNB:"),value:(1e18/t.costPresale).toString().concat(" ").concat(t.symbol.toString())})]})):Object(k.jsx)(y.l,{paddingTop:"24px",children:Object(k.jsx)(le,{})})},de=(i={},Object(z.a)(i,Y.e.poolBasic,{title:"Basic Sale",variant:"blue",tooltip:"Every person can only commit a limited amount, but may expect a higher return per token committed."}),Object(z.a)(i,Y.e.poolUnlimited,{title:"Unlimited Sale",variant:"violet",tooltip:"No limits on the amount you can commit. Additional fee applies when claiming."}),function(e){var t=e.publicIfoData;Object(p.b)().t;return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)(y.s,{children:[Object(k.jsx)(y.v,{variant:"violet",children:Object(k.jsx)(y.R,{justifyContent:"space-between",alignItems:"center",children:Object(k.jsx)(y.Xb,{bold:!0,fontSize:"20px",children:"1"===t.round.toString()?"Round 1":"2"===t.round.toString()?"Round 2":"3"===t.round.toString()?"Final Round":""})})}),Object(k.jsxs)(y.t,{children:[Object(k.jsx)(_,{publicIfoData:t}),Object(k.jsx)(be,{publicIfoData:t}),Object(k.jsx)(ue,{publicIfoData:t})]})]})})}),xe=n(360),me=function(e){var t=e.publicIfoData,n=Object(p.b)().t,c=Number(((new Date).getTime()/1e3).toFixed(0));console.log(c);var r=c<Number(t.startPresaleTime)?Number(t.startPresaleTime)-c:c<Number(t.endPresaleTime)?Number(t.endPresaleTime)-c:0;console.log(r,Number(t.startPresaleTime),c,Number(t.endPresaleTime));var i=Object(xe.a)(r),s=c<Number(t.startPresaleTime)?n("Start"):0!==r?n("Finish"):"Finised";return Object(k.jsx)(y.R,{justifyContent:"center",mb:"32px",children:-1===t.status?Object(k.jsx)(y.Lb,{animation:"pulse",variant:"rect",width:"100%",height:"48px"}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(y.Db,{width:"48px",mr:"16px"}),Object(k.jsxs)(y.R,{alignItems:"center",children:[Object(k.jsxs)(y.Xb,{bold:!0,mr:"16px",children:[s,":"]}),Object(k.jsx)(y.Xb,{children:n("%day%d %hour%h %minute%m",{day:i.days,hour:i.hours,minute:i.minutes})})]})]})})},Oe=(re.c,Object(v.e)(y.R)(s||(s=Object(g.a)(["\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  "," {\n    flex-direction: row;\n    align-items: initial;\n  }\n"])),(function(e){return e.theme.mediaQueries.md}))),pe=Object(v.e)(y.R)(a||(a=Object(g.a)(["\n  ",";\n"])),(function(e){return e.isFinished?"filter: grayscale(100%)":""})),he=Object(v.e)(y.db)(o||(o=Object(g.a)(["\n  margin-top: 32px;\n  "," {\n    margin-top: 0;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),fe=function(e){var t=e.publicIfoData,n=Object(p.b)().t;return Object(k.jsxs)(Oe,{children:[Object(k.jsx)(pe,{isFinished:0===t.status,alignItems:"center",flexGrow:1,children:Object(k.jsxs)(y.R,{flexDirection:"column",children:[Object(k.jsxs)(y.R,{children:[Object(k.jsx)(y.Xb,{bold:!0,mr:"8px",children:n("Launchpad: %title%",{title:t.name})}),Object(k.jsxs)(y.R,{alignItems:"center",mr:"8px",children:[Object(k.jsx)(y.oc,{color:"textSubtle",width:"16px",mr:"4px"}),Object(k.jsxs)(y.Xb,{color:"textSubtle",children:[Number(t.users)," \xa0"]}),Object(k.jsx)(y.Xb,{color:"textSubtle",children:" Participants"})]})]}),Object(k.jsxs)(y.R,{children:[Object(k.jsx)(y.Xb,{bold:!0,mr:"8px",children:n("Listing Price:")}),Object(k.jsxs)(y.R,{alignItems:"center",mr:"8px",children:[Object(k.jsx)(y.Xb,{color:"textSubtle",children:"1 BNB =  \xa0"}),Object(k.jsxs)(y.Xb,{color:"textSubtle",children:[(1e18/t.listingPrice).toFixed(2),"\xa0",t.symbol]})]})]}),Object(k.jsx)(he,{href:t.link,mb:"8px",children:n("Learn more about %title%",{title:t.name})})]})}),Object(k.jsxs)(y.R,{alignItems:"flex-end",flexDirection:"column",children:[Object(k.jsxs)(y.R,{children:[Object(k.jsx)(y.Xb,{bold:!0,mr:"8px",children:n("Softcap: ")}),Object(k.jsx)(y.R,{alignItems:"center",mr:"8px",children:Object(k.jsxs)(y.Xb,{color:"textSubtle",children:[Number(t.softcap)/1e18,"\xa0BNB"]})})]}),Object(k.jsxs)(y.R,{children:[Object(k.jsx)(y.Xb,{bold:!0,mr:"8px",children:n("Hardcap: ")}),Object(k.jsx)(y.R,{alignItems:"center",mr:"8px",children:Object(k.jsxs)(y.Xb,{color:"textSubtle",children:[Number(t.hardcap)/1e18,"\xa0BNB"]})})]}),Object(k.jsx)(he,{href:"asd",children:n("View Contract")})]})]})},ge=Object(v.e)(y.s)(b||(b=Object(g.a)(["\n  max-width: 736px;\n  width: 100%;\n  margin: auto;\n  \n"]))),ve=Object(v.e)(y.v)(l||(l=Object(g.a)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 112px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background:#000000;\n"]))),ye=v.e.div(j||(j=Object(g.a)(["\n  display: block;\n  background: ",";\n"])),(function(e){var t=e.isActive,n=e.theme;return t?n.colors.gradients.bubblegum:n.colors.dropdown})),ke=v.e.div(u||(u=Object(g.a)(["\n  display: block;\n  margin-left: 25%;\n  margin-right: 25%;\n  margin-bottom: 32px;\n  "," {\n    justify-items: ",";\n  }\n"])),(function(e){return e.theme.mediaQueries.md}),(function(e){return e.singleCard?"center":"unset"})),we=Object(v.e)(y.t)(d||(d=Object(g.a)(["\n  padding: 24px 16px;\n  "," {\n    padding: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),Se=(Object(v.e)(y.u)(x||(x=Object(g.a)(["\n  text-align: center;\n  padding: 8px;\n  background: ",";\n"])),(function(e){return e.theme.colors.backgroundAlt})),function(e){var t=e.publicIfoData,n=Object(p.b)().t,c=(Object(E.c)().account,Number(((new Date).getTime()/1e3).toFixed(0))),r=c<Number(t.startPresaleTime)?Number(t.startPresaleTime)-c:c<Number(t.endPresaleTime)?c-Number(t.endPresaleTime):0,i=function(e,t){return"cancelled"===e?Object(k.jsx)(y.w,{variantColor:"textDisabled",ribbonPosition:"left",text:t(e)}):Object(k.jsx)(y.w,{variantColor:"primary",ribbonPosition:"left",style:{textTransform:"uppercase"},text:"".concat(t(e),"!")})}(0!==r&&-1===Number(t.status)?"cancelled":c<Number(t.startPresaleTime)&&0===Number(t.status)?"coming soon":0!==r&&0===Number(t.status)||0!==r&&1===Number(t.status)?"live":0===r||2===Number(t.status)?"finished":"",n),s=2!==t.status&&-1!==t.status;Object(W.a)().toastSuccess;return Object(k.jsxs)(ge,{ribbon:i,children:[Object(k.jsx)(ve,{children:Object(k.jsx)("img",{alt:"mainlogo",src:t.headerlogo})}),Object(k.jsxs)(ye,{isActive:-1!==t.status&&2!==t.status,children:[s&&Object(k.jsx)(y.Gb,{variant:"flat",primaryStep:t.sold/t.softcap*100}),Object(k.jsxs)(we,{children:[s&&Object(k.jsx)(me,{publicIfoData:t}),Object(k.jsx)("div",{style:{textAlign:"center"},children:t.name}),Object(k.jsx)("br",{}),Object(k.jsx)(ke,{singleCard:!0,children:Object(k.jsx)(de,{publicIfoData:t})}),Object(k.jsx)(fe,{publicIfoData:t})]})]})]})}),Ne=v.e.div(m||(m=Object(g.a)(["\n  display: flex;\n  padding: 40px 0;\n  border-top: 2px solid ",";\n"])),(function(e){return e.theme.colors.textSubtle})),Pe=(P.x.find((function(e){return e.isActive})),function(){var e=U();return-2!==e.status?Object(k.jsx)(Ne,{children:Object(k.jsx)(Se,{publicIfoData:e})}):Object(k.jsx)(Ne,{})});t.default=function(){Object(p.b)().t;var e=Object(h.j)(),t=e.path;e.url,e.isExact;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(N,{}),Object(k.jsx)(f.a,{children:Object(k.jsx)(h.b,{exact:!0,path:"".concat(t),children:Object(k.jsx)(Pe,{})})})]})}}}]);
//# sourceMappingURL=22.e2f74a89.chunk.js.map