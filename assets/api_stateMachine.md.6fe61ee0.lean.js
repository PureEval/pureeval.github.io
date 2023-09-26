import{_ as c,C as d,o as n,c as T,k as Q,H as t,w as a,a as s,Q as o}from"./chunks/framework.97522925.js";const $=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/stateMachine.md","filePath":"api/stateMachine.md","lastUpdated":1695743306000}'),h={name:"api/stateMachine.md"},i=Q("h2",{id:"statemachine-api",tabindex:"-1"},[s("StateMachine "),Q("a",{class:"header-anchor",href:"#statemachine-api","aria-label":'Permalink to "StateMachine {#statemachine-api}"'},"​")],-1),m=Q("h3",{id:"higherPipe",tabindex:"-1"},[s("higherPipe() "),Q("a",{class:"header-anchor",href:"#higherPipe","aria-label":'Permalink to "higherPipe() {#higherPipe}"'},"​")],-1),f=Q("p",null,"Performs high-dimensional function composition from left to right.",-1),y=Q("ul",null,[Q("li",null,[Q("strong",null,"Type")])],-1),u=Q("p",null,"Note: The type is not unique and depends on the offset array.",-1),g={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.929ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18090.8 1000","aria-hidden":"true"},H=o("",1),E=[H],w=o("",10),k={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.929ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 18090.8 1000","aria-hidden":"true"},Z=o("",1),C=[Z],x=o("",9),b={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},L={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"24.145ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 10672.2 1000","aria-hidden":"true"},v=o("",1),F=[v],V=o("",10),D={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.566ex"},xmlns:"http://www.w3.org/2000/svg",width:"40.445ex",height:"2.262ex",role:"img",focusable:"false",viewBox:"0 -750 17876.8 1000","aria-hidden":"true"},A=o("",1),P=[A],S=o("",6);function I(N,j,R,q,G,z){const e=d("mo"),l=d("mi"),r=d("math"),p=d("mjx-assistive-mml");return n(),T("div",null,[i,m,f,y,u,Q("mjx-container",g,[(n(),T("svg",_,E)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(r,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,null,{default:a(()=>[s(",")]),_:1}),t(e,null,{default:a(()=>[s("…")]),_:1}),t(e,null,{default:a(()=>[s(",")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("I")]),_:1}),t(l,null,{default:a(()=>[s("n")]),_:1}),t(l,null,{default:a(()=>[s("t")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1})]),_:1})]),_:1})]),w,Q("mjx-container",k,[(n(),T("svg",M,C)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(r,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,null,{default:a(()=>[s(",")]),_:1}),t(e,null,{default:a(()=>[s("…")]),_:1}),t(e,null,{default:a(()=>[s(",")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("I")]),_:1}),t(l,null,{default:a(()=>[s("n")]),_:1}),t(l,null,{default:a(()=>[s("t")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1})]),_:1})]),_:1})]),x,Q("mjx-container",b,[(n(),T("svg",L,F)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(r,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1})]),_:1})]),_:1})]),V,Q("mjx-container",D,[(n(),T("svg",B,P)),t(p,{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},{default:a(()=>[t(r,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},{default:a(()=>[t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("a")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("b")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,null,{default:a(()=>[s(",")]),_:1}),t(e,null,{default:a(()=>[s("…")]),_:1}),t(e,null,{default:a(()=>[s(",")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(l,null,{default:a(()=>[s("c")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("d")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("(")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("[")]),_:1}),t(l,null,{default:a(()=>[s("I")]),_:1}),t(l,null,{default:a(()=>[s("n")]),_:1}),t(l,null,{default:a(()=>[s("t")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s("]")]),_:1}),t(e,{accent:"false",stretchy:"false"},{default:a(()=>[s("→")]),_:1}),t(l,null,{default:a(()=>[s("d")]),_:1}),t(e,{stretchy:"false"},{default:a(()=>[s(")")]),_:1})]),_:1})]),_:1})]),S])}const W=c(h,[["render",I]]);export{$ as __pageData,W as default};
