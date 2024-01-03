import{_ as s,o as n,c as a,R as p}from"./chunks/framework.iNKEMQtI.js";const o=JSON.parse('{"title":"es6相关的面试题","description":"","frontmatter":{},"headers":[],"relativePath":"interview/index.md","filePath":"interview/index.md","lastUpdated":1701855843000}'),l={name:"interview/index.md"},i=p(`<h1 id="es6相关的面试题" tabindex="-1">es6相关的面试题 <a class="header-anchor" href="#es6相关的面试题" aria-label="Permalink to &quot;es6相关的面试题&quot;">​</a></h1><h3 id="_1、如何自己实现一个类模版字符串的功能" tabindex="-1">1、如何自己实现一个类模版字符串的功能 <a class="header-anchor" href="#_1、如何自己实现一个类模版字符串的功能" aria-label="Permalink to &quot;1、如何自己实现一个类模版字符串的功能&quot;">​</a></h3><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如何自己实现一个类模版字符串的功能</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;yx&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 9</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;hello\${name}今年\${age}了&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// replace 第二个参数，必需。一个字符串值。规定了替换文本或生成替换文本的函数。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eval(string) string:必需。要计算的字符串，其中含有要计算的 JavaScript 表达式或要执行的语句。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">str </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\$\\{</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">}]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\}</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // eval(&#39;name&#39;)   eval(&#39;age&#39;)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> eval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">arguments</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//[Arguments] {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;0&#39;: &#39;\${name}&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;1&#39;: &#39;name&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;2&#39;: 5,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;3&#39;: &#39;hello\${name}今年\${age}了&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   [Arguments] {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;0&#39;: &#39;\${age}&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;1&#39;: &#39;age&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;2&#39;: 14,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//     &#39;3&#39;: &#39;hello\${name}今年\${age}了&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//   helloyx今年9了</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="_2、带标签的模版字符串" tabindex="-1">2、带标签的模版字符串 <a class="header-anchor" href="#_2、带标签的模版字符串" aria-label="Permalink to &quot;2、带标签的模版字符串&quot;">​</a></h3><p>实现功能：给所有模版字符串中变量加上*号</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let name = &#39;yx&#39;;</span></span>
<span class="line"><span>let age = 9;</span></span>
<span class="line"><span>function tagFn(){  //第一个参数是字符串的数组，第二个参数是第一个变量，第三个是第三个变量</span></span>
<span class="line"><span>    console.log(arguments);  //[Arguments] { &#39;0&#39;: [ &#39;hello&#39;, &#39;’今年&#39;, &#39;了&#39; ], &#39;1&#39;: &#39;yx&#39;, &#39;2&#39;: 9 }</span></span>
<span class="line"><span>    let strings = arguments[0];</span></span>
<span class="line"><span>    let values = [].slice.call(arguments,1);    //如果想把第一个参数除外的剩余的参数转换成数组 //把arguments转换成一个真正的数组，从arguments第一位之后项开始</span></span>
<span class="line"><span>    console.log(strings,values)  // &#39;hello&#39;, &#39;’今年&#39;, &#39;了&#39; ] [ &#39;yx&#39;, 9 ]</span></span>
<span class="line"><span>    let str = &quot;&quot;;</span></span>
<span class="line"><span>    for(let i=0;i&lt;values.length;i++){</span></span>
<span class="line"><span>        str+= \`\${strings[i]}*\${values[i]}*\`</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    str +=strings[strings.length-1];</span></span>
<span class="line"><span>    return str;</span></span>
<span class="line"><span>    // return 100</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>let str = tagFn\`hello\${name}今年\${age}岁了\`</span></span>
<span class="line"><span>//标签（函数）返回什么，结果就是什么</span></span>
<span class="line"><span>console.log(str)</span></span>
<span class="line"><span>//hello*yx*今年*9*岁了</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>如果想把第一个参数除外的剩余的参数转换成数组</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//...叫剩运算符 就是把多余的都放到一个数组中</span></span>
<span class="line"><span>let fn = (x,...arrgs)=&gt;{</span></span>
<span class="line"><span>    console.log(arrgs)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn(&#39;x&#39;,1,2,3,4,5)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//[ 1, 2, 3, 4, 5 ]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_3、高阶函数" tabindex="-1">3、高阶函数 <a class="header-anchor" href="#_3、高阶函数" aria-label="Permalink to &quot;3、高阶函数&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>function a(c){</span></span>
<span class="line"><span>    return function(d){</span></span>
<span class="line"><span>        return {sum:c+d}</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>或者：</span></span>
<span class="line"><span>let a = c =&gt;d =&gt;({sum:c+d})</span></span>
<span class="line"><span>console.log(a(1)(2))</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="_4、箭头函数" tabindex="-1">4、箭头函数 <a class="header-anchor" href="#_4、箭头函数" aria-label="Permalink to &quot;4、箭头函数&quot;">​</a></h3><p>箭头函数 箭头函数中没有this 会向上查找</p><p>箭头函数特点：</p><blockquote><p>1、箭头函数没有function关键字</p></blockquote><blockquote><p>2、小括号和大括号之间有个箭头</p></blockquote><blockquote><p>3、如果参数是一个，可以省略小括号</p></blockquote><blockquote><p>4、如果没有return 可以不写大括号</p></blockquote><blockquote><p>5、如果直接返回的是对象，需要小括号包裹</p></blockquote><blockquote><p>6、 箭头函数中没有arguments</p></blockquote><blockquote><p>7、函数可以赋予默认参数</p></blockquote><p>解决this指向问题：前面是谁就是谁</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>        b:1,</span></span>
<span class="line"><span>        a:function(){</span></span>
<span class="line"><span>            let that = this;</span></span>
<span class="line"><span>            setTimeout(()=&gt;{</span></span>
<span class="line"><span>                console.log(that)</span></span>
<span class="line"><span>            },1000)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    obj.a()  //this指向obj</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let obj = {</span></span>
<span class="line"><span>        b:1,</span></span>
<span class="line"><span>        a:()=&gt;{</span></span>
<span class="line"><span>            setTimeout(()=&gt;{</span></span>
<span class="line"><span>                console.log(this)</span></span>
<span class="line"><span>            },1000)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>   obj.a()  //this指向window</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_5、this指向问题面试题" tabindex="-1">5、this指向问题面试题： <a class="header-anchor" href="#_5、this指向问题面试题" aria-label="Permalink to &quot;5、this指向问题面试题：&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let a =1;</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>    a:2,</span></span>
<span class="line"><span>    b:()=&gt;{</span></span>
<span class="line"><span>        console.log(a)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.b()   //1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let a =1;</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>    a:2,</span></span>
<span class="line"><span>    b:()=&gt;{</span></span>
<span class="line"><span>        console.log(this.a)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.b()  //undefined</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var a =1;</span></span>
<span class="line"><span>let obj = {</span></span>
<span class="line"><span>    a:2,</span></span>
<span class="line"><span>    b:()=&gt;{</span></span>
<span class="line"><span>        console.log(this.a)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>obj.b()  //1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>函数可以赋予默认参数</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>let fn = (a=1,b=2)=&gt;{</span></span>
<span class="line"><span>    console.log(a,b)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>fn();</span></span>
<span class="line"><span>//1 2</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,29),e=[i];function r(t,c,h,b,u,k){return n(),a("div",null,e)}const m=s(l,[["render",r]]);export{o as __pageData,m as default};
