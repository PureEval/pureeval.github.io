import{d as _,h as g,g as v,o as n,c as o,k as r,a0 as b,a1 as L,F as d,G as p,t as x,e as M,p as A,m as I,_ as O,J as w}from"./chunks/framework.c1e4fd08.js";const W=JSON.parse('[{"text":"Global API","anchor":"global-api","items":[{"text":"⭐Currying","link":"/api/currying","headers":[{"text":"curry()","anchor":"curry"},{"text":"uncurry()","anchor":"uncurry"}]},{"text":"⭐Transform","link":"/api/transform","headers":[{"text":"compose()","anchor":"compose"},{"text":"pipe()","anchor":"pipe"},{"text":"call()","anchor":"call"},{"text":"andThen()","anchor":"andThen"},{"text":"tryCatch()","anchor":"tryCatch"}]},{"text":"Logic","link":"/api/logic","headers":[{"text":"either()","anchor":"either"},{"text":"both()","anchor":"both"},{"text":"not()","anchor":"not"},{"text":"lt()","anchor":"lt"},{"text":"lte()","anchor":"lte"},{"text":"gt()","anchor":"gt"},{"text":"gte()","anchor":"gte"},{"text":"equal()","anchor":"equal"},{"text":"equalStrict()","anchor":"equalstrict"},{"text":"deepEqual()","anchor":"deepequal"},{"text":"when()","anchor":"when"},{"text":"unless()","anchor":"unless"},{"text":"ifElse()","anchor":"ifElse"},{"text":"id()","anchor":"id"},{"text":"always()","anchor":"always"},{"text":"eqType()","anchor":"eqType"},{"text":"eqData()","anchor":"eqData"}]},{"text":"PlaceHolder","link":"/api/placeholder","headers":[{"text":"_","anchor":"_"},{"text":"unreached","anchor":"unreached"},{"text":"otherwise","anchor":"otherwise"}]},{"text":"String","link":"/api/string","headers":[{"text":"rexMatch()","anchor":"rexMatch"},{"text":"rexReplace()","anchor":"rexReplace"},{"text":"rexText()","anchor":"rexTest"},{"text":"split()","anchor":"split"},{"text":"toLower()","anchor":"toLower"},{"text":"toUpper()","anchor":"toUpper"},{"text":"trim()","anchor":"trim"},{"text":"words()","anchor":"words"}]},{"text":"⭐StateMachine","link":"/api/stateMachine","headers":[{"text":"higherPipe()","anchor":"higherPipe"},{"text":"higherComp()","anchor":"higherCompose"},{"text":"coalgebra()","anchor":"coalgebra"},{"text":"stateMachine()","anchor":"stateMachine"}]},{"text":"Math","link":"/api/mathematics","headers":[{"text":"odd()","anchor":"odd"},{"text":"even()","anchor":"even"},{"text":"add()","anchor":"add"},{"text":"minus()","anchor":"minus"},{"text":"mul()","anchor":"mul"},{"text":"div()","anchor":"div"},{"text":"divr()","anchor":"divr"},{"text":"mod()","anchor":"mod"},{"text":"rema()","anchor":"rema"},{"text":"power()","anchor":"power"},{"text":"negate()","anchor":"negate"},{"text":"upper()","anchor":"upper"},{"text":"under()","anchor":"under"},{"text":"sort()","anchor":"sort"},{"text":"median()","anchor":"median"},{"text":"sum()","anchor":"sum"},{"text":"average()","anchor":"average"},{"text":"prod()","anchor":"prod"},{"text":"max()","anchor":"max"},{"text":"min()","anchor":"min"},{"text":"dec()","anchor":"dec"},{"text":"inc()","anchor":"inc"}]},{"text":"Range","link":"/api/range","headers":[{"text":"range()","anchor":"range"}]},{"text":"Bind","link":"/api/bind","headers":[{"text":"bind()","anchor":"bind"}]},{"text":"⭐Match","link":"/api/match","headers":[{"text":"match()","anchor":"match"}]},{"text":"List","link":"/api/list","headers":[{"text":"zipWith()","anchor":"zipWith"},{"text":"zip()","anchor":"zip"},{"text":"join()","anchor":"join"},{"text":"slice()","anchor":"slice"},{"text":"take()","anchor":"take"},{"text":"takeWhile()","anchor":"takeWhile"},{"text":"drop()","anchor":"drop"},{"text":"dropWhile()","anchor":"dropWhile"},{"text":"every()","anchor":"every"},{"text":"some()","anchor":"some"},{"text":"concat()","anchor":"concat"},{"text":"concatr()","anchor":"concatr"},{"text":"head()","anchor":"head"},{"text":"tail()","anchor":"tail"},{"text":"dropHead()","anchor":"dropHead"},{"text":"dropTail()","anchor":"dropTail"},{"text":"includes()","anchor":"includes"},{"text":"reverse()","anchor":"reverse"},{"text":"countWith()","anchor":"countWith"},{"text":"count()","anchor":"count"},{"text":"pairList()","anchor":"pairList"}]},{"text":"Object","link":"/api/object","headers":[{"text":"prop()","anchor":"prop"},{"text":"assoc()","anchor":"assoc"},{"text":"modify()","anchor":"modify"},{"text":"dissoc()","anchor":"dissoc"},{"text":"deepClone()","anchor":"deepClone"},{"text":"keys()","anchor":"keys"},{"text":"values()","anchor":"values"},{"text":"makePair()","anchor":"makePair"},{"text":"construct()","anchor":"construct"},{"text":"has()","anchor":"has"}]},{"text":"⭐Iterate","link":"/api/iterate","headers":[{"text":"iterate()","anchor":"iterate"},{"text":"map()","anchor":"map"},{"text":"flatMap()","anchor":"flatMap"},{"text":"forEach()","anchor":"forEach"},{"text":"reduce()","anchor":"reduce"},{"text":"fold()","anchor":"fold"},{"text":"scan()","anchor":"scan"}]},{"text":"Filter","link":"/api/filter","headers":[{"text":"filter()","anchor":"filter"},{"text":"reject()","anchor":"reject"},{"text":"shield()","anchor":"shield"},{"text":"choose()","anchor":"choose"}]},{"text":"⭐Optics","link":"/api/optics","headers":[{"text":"Lens","anchor":"Lens"},{"text":"Lens.of()","anchor":"of"},{"text":"Lens.bind()","anchor":"bind"},{"text":"view","anchor":"view"},{"text":"set","anchor":"set"},{"text":"over","anchor":"over"}]},{"text":"⭐Maybe(Monad)","link":"/api/maybe","headers":[{"text":"Maybe","anchor":"maybe"},{"text":"Maybe.of()","anchor":"of"},{"text":"Maybe.is()","anchor":"is"},{"text":"Maybe.isNothing()","anchor":"isnothing"},{"text":"Maybe.map()","anchor":"map"},{"text":"Maybe.fold()","anchor":"fold"},{"text":"Maybe.chain()","anchor":"chain"},{"text":"Just()","anchor":"just"},{"text":"Nothing","anchor":"nothing"}]},{"text":"⭐MaybeAsync","link":"/api/maybeAsync","headers":[{"text":"MaybeAsync","anchor":"maybeasync"},{"text":"MaybeAsync.of()","anchor":"of"},{"text":"MaybeAsync.is()","anchor":"is"},{"text":"MaybeAsync.isNothing()","anchor":"isnothing"},{"text":"MaybeAsync.map()","anchor":"map"},{"text":"MaybeAsync.fold()","anchor":"fold"},{"text":"MaybeAsync.chain()","anchor":"chain"},{"text":"JustAsync()","anchor":"just"},{"text":"NothingAsync","anchor":"nothing"}]},{"text":"⭐Task","link":"/api/task","headers":[{"text":"Task","anchor":"task"},{"text":"Task.map()","anchor":"taskmap"},{"text":"Task.chain()","anchor":"taskchain"},{"text":"Task.fold()","anchor":"taskfold"}]},{"text":"⭐Either","link":"/api/either","headers":[{"text":"Right/Left","anchor":"right-left"},{"text":"Either.map()","anchor":"map"},{"text":"Either.fold()","anchor":"fold"},{"text":"Either.chain()","anchor":"chain"}]},{"text":"⭐IO(Monad)","link":"/api/io","headers":[{"text":"IO","anchor":"IO"},{"text":"IO.map()","anchor":"iomap"},{"text":"IO.chain()","anchor":"iochain"},{"text":"IO.handle(Algebraic Effects)","anchor":"iohandle"},{"text":"IO.run()","anchor":"iorun"}]},{"text":"⭐IOAsync","link":"/api/ioasync","headers":[{"text":"IOAsync","anchor":"IO"},{"text":"IOAsync.map()","anchor":"iomap"},{"text":"IOAsync.chain()","anchor":"iochain"},{"text":"IOAsync.handle(Algebraic Effects)","anchor":"iohandle"},{"text":"IOAsync.run()","anchor":"iorun"}]},{"text":"⚠List(Cons)","link":"/api/listcons","headers":[{"text":"L.lazy()","anchor":"lazy"},{"text":"L.seq()","anchor":"seq"},{"text":"L.head()","anchor":"head"},{"text":"L.isEmpty()","anchor":"isempty"},{"text":"L.iter()","anchor":"iter"},{"text":"L.range()","anchor":"range"},{"text":"L.tail()","anchor":"tail"},{"text":"L.iterate()","anchor":"iterate"},{"text":"L.map()","anchor":"map"},{"text":"L.flatMap()","anchor":"flatMap"},{"text":"L.concat()","anchor":"concat"},{"text":"L.take()","anchor":"take"},{"text":"L.drop()","anchor":"drop"},{"text":"L.repeat()","anchor":"repeat"},{"text":"L.filter()","anchor":"filter"},{"text":"L.reject()","anchor":"reject"},{"text":"L.forEach()","anchor":"forEach"},{"text":"L.takeWhile()","anchor":"takeWhile"},{"text":"L.dropWhile()","anchor":"dropWhile"},{"text":"L.zipWith()","anchor":"zipWith"},{"text":"L.shield()","anchor":"shield"},{"text":"L.choose()","anchor":"choose"}]},{"text":"⚠Data","link":"/api/data","headers":[{"text":"Data()","anchor":"data"}]}]}]'),y=h=>(A("data-v-79ea8d8c"),h=h(),I(),h),E={id:"api-index"},T={class:"header"},q=y(()=>r("h1",null,"API Reference",-1)),P={class:"api-filter"},j=y(()=>r("label",{for:"api-filter"},"Filter",-1)),C=["id"],N={class:"api-groups"},S=["id"],z=["href"],D=["href"],R={key:0,class:"no-match"},J=_({__name:"ApiIndex",setup(h){const i=g(""),l=s=>s.toLowerCase().replace(/-/g," "),u=v(()=>{const s=l(i.value),c=t=>l(t).includes(s);return W.map(t=>{if(c(t.text))return t;const a=t.items.map(e=>{if(c(e.text)||s.includes("ssr")&&e.text.startsWith("Server"))return e;const m=e.headers.filter(({text:f,anchor:k})=>c(f)||c(k));return m.length?{text:e.text,link:e.link,headers:m}:null}).filter(e=>e);return a.length?{text:t.text,items:a}:null}).filter(t=>t)});return(s,c)=>(n(),o("div",E,[r("div",T,[q,r("div",P,[j,b(r("input",{id:"api-filter","onUpdate:modelValue":c[0]||(c[0]=t=>i.value=t),type:"search",placeholder:"Enter keyword"},null,512),[[L,i.value]])])]),(n(!0),o(d,null,p(u.value,t=>(n(),o("div",{key:t.text,class:"api-section"},[r("h2",{id:t.anchor},x(t.text),9,C),r("div",N,[(n(!0),o(d,null,p(t.items,a=>(n(),o("div",{id:a.text.startsWith("⭐")||a.text.startsWith("⚠")?a.text.slice(1):a.text,key:a.text,class:"api-group"},[r("h3",null,[r("a",{href:a.link},x(a.text),9,z)]),r("ul",null,[(n(!0),o(d,null,p(a.headers,e=>(n(),o("li",{key:e.anchor},[r("a",{href:a.link+".html#"+e.anchor},x(e.text),9,D)]))),128))])],8,S))),128))])]))),128)),u.value.length?M("",!0):(n(),o("div",R,' No API matching "'+x(i.value)+'" found. ',1))]))}});const B=O(J,[["__scopeId","data-v-79ea8d8c"]]),U=JSON.parse('{"title":"API Reference","description":"","frontmatter":{"title":"API Reference","layout":"page"},"headers":[],"relativePath":"api/index.md","filePath":"api/index.md","lastUpdated":1671974123000}'),F={name:"api/index.md"},V=Object.assign(F,{setup(h){return(i,l)=>(n(),o("div",null,[w(B)]))}});export{U as __pageData,V as default};
