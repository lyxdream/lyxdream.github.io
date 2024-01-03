import{_ as s,o as a,c as i,R as n,ag as e,ah as p,ai as t,aj as l,ak as r,al as h,am as k,an as d,ao as c}from"./chunks/framework.iNKEMQtI.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"note/buryingPoint.md","filePath":"note/buryingPoint.md","lastUpdated":1701769291000}'),o={name:"note/buryingPoint.md"},m=n('<h2 id="小程序友盟事件埋点" tabindex="-1">小程序友盟事件埋点 <a class="header-anchor" href="#小程序友盟事件埋点" aria-label="Permalink to &quot;小程序友盟事件埋点&quot;">​</a></h2><h3 id="进入友盟小程序埋点模块" tabindex="-1">进入友盟小程序埋点模块 <a class="header-anchor" href="#进入友盟小程序埋点模块" aria-label="Permalink to &quot;进入友盟小程序埋点模块&quot;">​</a></h3><p><img src="'+e+'" alt="小程序埋点模块"></p><p>其他上面写的很明细可以跟着做，需要注意的是小程序里面如何使用npm和添加自定义事件</p><h3 id="创建微信小程序并接入sdk" tabindex="-1">创建微信小程序并接入SDK <a class="header-anchor" href="#创建微信小程序并接入sdk" aria-label="Permalink to &quot;创建微信小程序并接入SDK&quot;">​</a></h3><p>1.在小程序根目录内，生成依赖配置文件package.json</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2、在小程序 package.json 所在的目录中执行命令安装 npm 包：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> umtrack-wx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3、点击开发者工具中的菜单栏：工具 --&gt; 构建 npm</p><p><img src="'+p+'" alt="构建 npm"> 4、勾选“使用 npm 模块”选项：</p><p><img src="'+t+`" alt="使用 npm "></p><p>5、使用 npm 包</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;umtrack-wx&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  umengConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    appKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YOUR_UMENG_APPKEY&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//由友盟分配的APP_KEY</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 使用Openid进行统计，此项为false时将使用友盟+uuid进行用户统计。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 使用Openid来统计微信小程序的用户，会使统计的指标更为准确，对系统准确性要求高的应用推荐使用Openid。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    useOpenid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 使用openid进行统计时，是否授权友盟自动获取Openid，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 如若需要，请到友盟后台&quot;设置管理-应用信息&quot;(https://mp.umeng.com/setting/appset)中设置appId及secret</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    autoGetOpenid: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    debug: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//是否打开调试模式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    uploadUserInfo: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 自动上传用户信息，设为false取消上传，默认为false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="自定义事件添加流程" tabindex="-1">自定义事件添加流程 <a class="header-anchor" href="#自定义事件添加流程" aria-label="Permalink to &quot;自定义事件添加流程&quot;">​</a></h3><p>1、进入U-MiniProgram后台 -&gt;统计分析 -&gt;“自定义事件”页面，点击“事件管理”； 添加埋点事件的页面<a href="https://databank.umeng.com/sdc/manage" target="_blank" rel="noreferrer">https://databank.umeng.com/sdc/manage</a></p><p><img src="`+l+'" alt="事件管理 "></p><p>2、点击“添加事件”，输入小程序埋点的事件ID和名称（确保你的event id 和你的小程序页面的事件id一致）</p><p><img src="'+r+'" alt="添加事件 "></p><p><img src="'+h+'" alt="添加事件 "></p><p>3、添加之后的效果</p><p><img src="'+k+'" alt="添加之后的效果"></p><p>4、使用</p><p><img src="'+d+'" alt="使用"></p><p>5、返回小程序自定义事件页面查看该事件数据，在这里可以看到你自定义事件触发的次数 <a href="https://mp.umeng.com/analysis/5eb3a6c3dbc2ec0856ab3236/conversion/custom-event" target="_blank" rel="noreferrer">https://mp.umeng.com/analysis/5eb3a6c3dbc2ec0856ab3236/conversion/custom-event</a></p><p><img src="'+c+'" alt="自定义事件触发的次数"></p><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&quot;">​</a></h2>',27),g=[m];function u(b,E,_,y,F,v){return a(),i("div",null,g)}const A=s(o,[["render",u]]);export{f as __pageData,A as default};
