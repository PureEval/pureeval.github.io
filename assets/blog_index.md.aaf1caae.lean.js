import{_ as d,o as i,c as o,z as e,t as n,F as _,L as u,b as h,a as g,G as p}from"./chunks/framework.76ef088f.js";const m={props:{title:{type:String,required:!0},excerpt:{type:String,required:!0},image:{type:String,required:!0},author:{type:String,required:!0},href:{type:String,required:!0}},methods:{truncateText(r,s){return r.length>s?r.substring(0,s)+"...":r}}},f={class:"card"},x={class:"flex"},v={class:"media"},b=["src","alt"],y={class:"details"},S=["href"],B={class:"title"},P={class:"excerpt"},q={class:"author"},A={class:"name"};function E(r,s,t,a,c,l){return i(),o("div",f,[e("div",x,[e("div",v,[e("img",{src:t.image,alt:t.title},null,8,b)]),e("div",y,[e("a",{href:t.href},[e("h2",B,n(t.title),1),e("p",P,n(l.truncateText(t.excerpt,40)),1)],8,S),e("div",q,[e("div",null,[e("h3",A,n(t.author),1)])])])])])}const N=d(m,[["render",E],["__scopeId","data-v-64aa11e4"]]),k=[{title:"Document Notations",Author:"CAIMEO",excerpt:"文档使用的符号约定",image:"/blog/art1.png",path:"/blog/notations.html"}],D=e("h1",{id:"pureeval-blog",tabindex:"-1"},[g("PureEval Blog "),e("a",{class:"header-anchor",href:"#pureeval-blog","aria-label":'Permalink to "PureEval Blog"'},"​")],-1),V=JSON.parse('{"title":"PureEval Blog","description":"","frontmatter":{},"headers":[],"relativePath":"blog/index.md","filePath":"blog/index.md","lastUpdated":1687101942000}'),O={name:"blog/index.md"},C=Object.assign(O,{setup(r){return(s,t)=>(i(),o("div",null,[D,(i(!0),o(_,null,u(h(k),(a,c)=>(i(),o("div",{key:c},[p(N,{title:a.title,excerpt:a.excerpt,image:a.image,author:a.Author,href:a.path},null,8,["title","excerpt","image","author","href"])]))),128))]))}});export{V as __pageData,C as default};
