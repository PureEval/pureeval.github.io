import{d as y,h as v,g,o as r,c,k as e,Z as I,$ as A,F as l,D as p,t as d,e as O,p as b,m as E,_ as M,H as W}from"./chunks/framework.97522925.js";const S=JSON.parse('[{"text":"Global API","anchor":"global-api","items":[{"text":"⭐Currying","link":"/api/currying","headers":[{"text":"curry()","anchor":"curry"},{"text":"uncurry()","anchor":"uncurry"}]},{"text":"⭐Transform","link":"/api/transform","headers":[{"text":"compose()","anchor":"compose"},{"text":"pipe()","anchor":"pipe"},{"text":"call()","anchor":"call"},{"text":"andThen()","anchor":"andThen"},{"text":"tryCatch()","anchor":"tryCatch"}]},{"text":"Logic","link":"/api/logic"},{"text":"PlaceHolder","link":"/api/placeholder","headers":[{"text":"_","anchor":"_"},{"text":"unreached","anchor":"unreached"},{"text":"otherwise","anchor":"otherwise"}]},{"text":"String","link":"/api/string"},{"text":"⭐StateMachine","link":"/api/stateMachine"},{"text":"Math","link":"/api/mathematics","headers":[{"text":"odd()","anchor":"odd"},{"text":"even()","anchor":"even"},{"text":"add()","anchor":"add"},{"text":"minus()","anchor":"minus"},{"text":"mul()","anchor":"mul"},{"text":"div()","anchor":"div"},{"text":"divr()","anchor":"divr"},{"text":"mod()","anchor":"mod"},{"text":"rema()","anchor":"rema"},{"text":"power()","anchor":"power"},{"text":"negate()","anchor":"negate"},{"text":"upper()","anchor":"upper"},{"text":"under()","anchor":"under"},{"text":"sort()","anchor":"sort"},{"text":"median()","anchor":"median"},{"text":"sum()","anchor":"sum"},{"text":"average()","anchor":"average"},{"text":"prod()","anchor":"prod"},{"text":"max()","anchor":"max"},{"text":"min()","anchor":"min"},{"text":"dec()","anchor":"dec"},{"text":"inc()","anchor":"inc"}]},{"text":"Range","link":"/api/range"},{"text":"Bind","link":"/api/bind","headers":[{"text":"bind()","anchor":"bind"}]},{"text":"⭐Match","link":"/api/match","headers":[{"text":"match()","anchor":"match"}]},{"text":"List","link":"/api/list","headers":[{"text":"zipWith()","anchor":"zipWith"},{"text":"zip()","anchor":"zip"},{"text":"join()","anchor":"join"},{"text":"slice()","anchor":"slice"},{"text":"take()","anchor":"take"},{"text":"takeWhile()","anchor":"takeWhile"},{"text":"drop()","anchor":"drop"},{"text":"dropWhile()","anchor":"dropWhile"},{"text":"every()","anchor":"every"},{"text":"some()","anchor":"some"},{"text":"concat()","anchor":"concat"},{"text":"concatr()","anchor":"concatr"},{"text":"head()","anchor":"head"},{"text":"tail()","anchor":"tail"},{"text":"dropHead()","anchor":"dropHead"},{"text":"dropTail()","anchor":"dropTail"},{"text":"includes()","anchor":"includes"},{"text":"reverse()","anchor":"reverse"},{"text":"countWith()","anchor":"countWith"},{"text":"count()","anchor":"count"},{"text":"pairList()","anchor":"pairList"}]},{"text":"Object","link":"/api/object"},{"text":"⭐Iterate","link":"/api/iterate","headers":[{"text":"iterate()","anchor":"iterate"},{"text":"map()","anchor":"map"},{"text":"flatMap()","anchor":"flatMap"},{"text":"forEach()","anchor":"forEach"},{"text":"reduce()","anchor":"reduce"},{"text":"fold()","anchor":"fold"},{"text":"scan()","anchor":"scan"}]},{"text":"Filter","link":"/api/filter","headers":[{"text":"filter()","anchor":"filter"},{"text":"reject()","anchor":"reject"},{"text":"shield()","anchor":"shield"},{"text":"choose()","anchor":"choose"}]},{"text":"⭐Optics","link":"/api/optics"},{"text":"⭐Maybe(Monad)","link":"/api/maybe"},{"text":"⭐MaybeAsync","link":"/api/maybeAsync"},{"text":"⭐Task","link":"/api/task"},{"text":"⭐Either","link":"/api/either","headers":[{"text":"Right/Left","anchor":"right-left"},{"text":"Either.map()","anchor":"map"},{"text":"Either.fold()","anchor":"fold"},{"text":"Either.chain()","anchor":"chain"}]},{"text":"⭐IO(Monad)","link":"/api/io","headers":[{"text":"IO","anchor":"IO"},{"text":"IO.map()","anchor":"iomap"},{"text":"IO.chain()","anchor":"iochain"},{"text":"IO.handle(Algebraic Effects)","anchor":"iohandle"},{"text":"IO.run()","anchor":"iorun"}]},{"text":"⭐IOAsync","link":"/api/ioasync","headers":[{"text":"IOAsync","anchor":"IOAsync"},{"text":"IOAsync.map()","anchor":"IOAsync-map"},{"text":"IOAsync.chain()","anchor":"IOAsync-chain"},{"text":"IOAsync.handle(Algebraic Effects)","anchor":"IOAsync-handle"},{"text":"IOAsync.run()","anchor":"IOAsync-run"}]},{"text":"⚠List(Cons)","link":"/api/listcons"},{"text":"⚠Data","link":"/api/data","headers":[{"text":"Data()","anchor":"data"}]}]}]'),u=i=>(b("data-v-a41823c2"),i=i(),E(),i),w=u(()=>e("div",{class:"section-content"},[e("span",null," Translation for this page is in progress for English users, some content may not be available. ")],-1)),L={id:"api-index"},P={class:"header"},T=u(()=>e("h1",null,"API Reference",-1)),j={class:"api-filter"},C=u(()=>e("label",{for:"api-filter"},"Filter",-1)),D=["id"],N={class:"api-groups"},z=["id"],H=["href"],R=["href"],B={key:0,class:"no-match"},F=y({__name:"ApiIndex",setup(i){const h=v(""),x=s=>s.toLowerCase().replace(/-/g," "),_=g(()=>{const s=x(h.value),o=t=>x(t).includes(s);return S.map(t=>{if(o(t.text))return t;const n=t.items.map(a=>{if(o(a.text)||s.includes("ssr")&&a.text.startsWith("Server"))return a;const m=a.headers.filter(({text:f,anchor:k})=>o(f)||o(k));return m.length?{text:a.text,link:a.link,headers:m}:null}).filter(a=>a);return n.length?{text:t.text,items:n}:null}).filter(t=>t)});return(s,o)=>(r(),c(l,null,[w,e("div",L,[e("div",P,[T,e("div",j,[C,I(e("input",{id:"api-filter","onUpdate:modelValue":o[0]||(o[0]=t=>h.value=t),type:"search",placeholder:"Enter keyword"},null,512),[[A,h.value]])])]),(r(!0),c(l,null,p(_.value,t=>(r(),c("div",{key:t.text,class:"api-section"},[e("h2",{id:t.anchor},d(t.text),9,D),e("div",N,[(r(!0),c(l,null,p(t.items,n=>(r(),c("div",{id:n.text.startsWith("⭐")||n.text.startsWith("⚠")?n.text.slice(1):n.text,key:n.text,class:"api-group"},[e("h3",null,[e("a",{href:n.link},d(n.text),9,H)]),e("ul",null,[(r(!0),c(l,null,p(n.headers,a=>(r(),c("li",{key:a.anchor},[e("a",{href:n.link+".html#"+a.anchor},d(a.text),9,R)]))),128))])],8,z))),128))])]))),128)),_.value.length?O("",!0):(r(),c("div",B,' No API matching "'+d(h.value)+'" found. ',1))])],64))}});const V=M(F,[["__scopeId","data-v-a41823c2"]]),J=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","layout":"page"},"headers":[],"relativePath":"en/api/index.md","filePath":"en/api/index.md","lastUpdated":1695313216000}'),q={name:"en/api/index.md"},U=Object.assign(q,{setup(i){return(h,x)=>(r(),c("div",null,[W(V)]))}});export{J as __pageData,U as default};
