import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.fde9942b.js";const F=JSON.parse('{"title":"Data","description":"","frontmatter":{},"headers":[],"relativePath":"api/data.md","filePath":"api/data.md","lastUpdated":1693153571000}'),p={name:"api/data.md"},o=l(`<h1 id="data-api" tabindex="-1">Data <a class="header-anchor" href="#data-api" aria-label="Permalink to &quot;Data {#data-api}&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>本节内容为实验性内容，当前的性能可能不适用于正常的代码生产，本节的 API 随时可能被移除或更改。</p></div><p>本节提供了并不完美的定义抽象数据结构的方法。</p><h2 id="data" tabindex="-1">Data() <a class="header-anchor" href="#data" aria-label="Permalink to &quot;Data() {#data}&quot;">​</a></h2><p>构造一个抽象数据结构。</p><ul><li><strong>Details</strong></li></ul><p>传入一组构造函数，返回这些构造函数所组成的代数数据结构。</p><ul><li><strong>Example</strong></li></ul><h5 id="example-1" tabindex="-1">Example 1 <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example 1&quot;">​</a></h5><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Maybe</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Just a&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Nothing&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Maybe</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Data</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Just a&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Nothing&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>此时 Maybe 对象的定义如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Maybe</span></span>
<span class="line"><span style="color:#e1e4e8;">    - binder //用于绑定到外部环境的对象</span></span>
<span class="line"><span style="color:#e1e4e8;">    - function bindShow(show) =&gt; show //设置 Data 展示方式的函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    - function from(data) =&gt; boolean //用以判断是否为 Maybe 类型的函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    - function Just(a) =&gt; (Just a) // 实际的构造函数</span></span>
<span class="line"><span style="color:#e1e4e8;">    - Nothing =&gt; Nothing // 实际的构造函数</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Maybe</span></span>
<span class="line"><span style="color:#24292e;">    - binder //用于绑定到外部环境的对象</span></span>
<span class="line"><span style="color:#24292e;">    - function bindShow(show) =&gt; show //设置 Data 展示方式的函数</span></span>
<span class="line"><span style="color:#24292e;">    - function from(data) =&gt; boolean //用以判断是否为 Maybe 类型的函数</span></span>
<span class="line"><span style="color:#24292e;">    - function Just(a) =&gt; (Just a) // 实际的构造函数</span></span>
<span class="line"><span style="color:#24292e;">    - Nothing =&gt; Nothing // 实际的构造函数</span></span></code></pre></div><p>对于 Just/Nothing，其构造为：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Just</span></span>
<span class="line"><span style="color:#e1e4e8;">    - function is(data) =&gt; boolean //用以判断是否为 Just 类型的函数</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">(Just a)</span></span>
<span class="line"><span style="color:#e1e4e8;">    - a = a</span></span>
<span class="line"><span style="color:#e1e4e8;">    - args = [a]</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Nothing</span></span>
<span class="line"><span style="color:#e1e4e8;">    - function is(data) =&gt; boolean //用以判断是否为 Nothing 类型的函数</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Just</span></span>
<span class="line"><span style="color:#24292e;">    - function is(data) =&gt; boolean //用以判断是否为 Just 类型的函数</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">(Just a)</span></span>
<span class="line"><span style="color:#24292e;">    - a = a</span></span>
<span class="line"><span style="color:#24292e;">    - args = [a]</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Nothing</span></span>
<span class="line"><span style="color:#24292e;">    - function is(data) =&gt; boolean //用以判断是否为 Nothing 类型的函数</span></span></code></pre></div><p>你可以这样使用他：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">foo</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> Maybe.</span><span style="color:#B392F0;">Just</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">foo.a; </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Maybe.Just.</span><span style="color:#B392F0;">is</span><span style="color:#E1E4E8;">(foo); </span><span style="color:#6A737D;">// true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">foo</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Maybe.</span><span style="color:#6F42C1;">Just</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">foo.a; </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Maybe.Just.</span><span style="color:#6F42C1;">is</span><span style="color:#24292E;">(foo); </span><span style="color:#6A737D;">// true</span></span></code></pre></div><h5 id="example-2" tabindex="-1">Example 2 <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example 2&quot;">​</a></h5><p>你还可以引入多个构造参数来完成更复杂的代数数据结构：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Round</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Round x y r&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Square Round x y r =&gt; Number</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Square</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">round</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.14</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> round.r </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Square</span><span style="color:#E1E4E8;">(Round.</span><span style="color:#B392F0;">Round</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">//78.5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Round</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Data</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Round x y r&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Square Round x y r =&gt; Number</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Square</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">round</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.14</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> round.r </span><span style="color:#D73A49;">**</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Square</span><span style="color:#24292E;">(Round.</span><span style="color:#6F42C1;">Round</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">//78.5</span></span></code></pre></div><h5 id="example-3" tabindex="-1">Example 3 <a class="header-anchor" href="#example-3" aria-label="Permalink to &quot;Example 3&quot;">​</a></h5><p>如果您使用 Node.js 或者您的 env 有全局变量这一概念，您可以直接把 Data 绑定到环境中：</p><p>每个代数数据类型的 binder 属性提供了可以安全绑定到全局的量的对象集合，他们只会包含每个类型的构造函数。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">assign</span><span style="color:#E1E4E8;">(global, </span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Round x y r&#39;</span><span style="color:#E1E4E8;">).binder);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Square Round x y r =&gt; Number</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Square</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">round</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3.14</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> round.r </span><span style="color:#F97583;">**</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">Square</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Round</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">)); </span><span style="color:#6A737D;">//78.5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">assign</span><span style="color:#24292E;">(global, </span><span style="color:#6F42C1;">Data</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Round x y r&#39;</span><span style="color:#24292E;">).binder);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// Square Round x y r =&gt; Number</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Square</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">round</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3.14</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> round.r </span><span style="color:#D73A49;">**</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">Square</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Round</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">)); </span><span style="color:#6A737D;">//78.5</span></span></code></pre></div><h5 id="example-4" tabindex="-1">Example 4 <a class="header-anchor" href="#example-4" aria-label="Permalink to &quot;Example 4&quot;">​</a></h5><p>您可以使用 bindShow 为您的代数数据类型定义 show 方法来将代数类型与基本类型转换。</p><p>请注意：show 方法在未经过 bindShow 绑定前将返回该类型的类型名称。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Nat</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Data</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Succ m&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;Zero&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Nat.</span><span style="color:#B392F0;">bindShow</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">match</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    [Zero.is, </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    [Succ.is, ({ </span><span style="color:#FFAB70;">m</span><span style="color:#E1E4E8;"> }) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> m.</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">() </span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Nat.</span><span style="color:#B392F0;">Succ</span><span style="color:#E1E4E8;">(Nat.</span><span style="color:#B392F0;">Succ</span><span style="color:#E1E4E8;">(Nat.Zero)).</span><span style="color:#B392F0;">show</span><span style="color:#E1E4E8;">(); </span><span style="color:#6A737D;">//2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Nat</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Data</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Succ m&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;Zero&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Nat.</span><span style="color:#6F42C1;">bindShow</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">match</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    [Zero.is, </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    [Succ.is, ({ </span><span style="color:#E36209;">m</span><span style="color:#24292E;"> }) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> m.</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">() </span><span style="color:#D73A49;">+</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">));</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Nat.</span><span style="color:#6F42C1;">Succ</span><span style="color:#24292E;">(Nat.</span><span style="color:#6F42C1;">Succ</span><span style="color:#24292E;">(Nat.Zero)).</span><span style="color:#6F42C1;">show</span><span style="color:#24292E;">(); </span><span style="color:#6A737D;">//2</span></span></code></pre></div>`,27),e=[o];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const h=s(p,[["render",t]]);export{F as __pageData,h as default};
