import{_ as s,o as a,c as i,R as n,aN as e,aO as p,aP as l,aQ as t,aR as h,aS as r,aT as k,aU as g,aV as c,aW as E,aX as d,aY as o,aZ as b,a_ as u,a$ as y,b0 as m,b1 as F}from"./chunks/framework.iNKEMQtI.js";const x=JSON.parse('{"title":"GitHub Actions 实现自动部署静态博客","description":"","frontmatter":{},"headers":[],"relativePath":"note/vitePress-blog/deploy.md","filePath":"note/vitePress-blog/deploy.md","lastUpdated":1701769291000}'),A={name:"note/vitePress-blog/deploy.md"},D=n('<h1 id="github-actions-实现自动部署静态博客" tabindex="-1">GitHub Actions 实现自动部署静态博客 <a class="header-anchor" href="#github-actions-实现自动部署静态博客" aria-label="Permalink to &quot;GitHub Actions 实现自动部署静态博客&quot;">​</a></h1><p>可以有两种做法，第一种是将源码和显示页面放在不同的仓库来实现，第二种是将源码和显示页面都在同一个仓库来实现。（两者只是存放源码和展示页面的仓库不同，部署的过程和方式都是相同的）,下面以一个仓库为例。</p><h2 id="创建github仓库" tabindex="-1">创建GitHub仓库 <a class="header-anchor" href="#创建github仓库" aria-label="Permalink to &quot;创建GitHub仓库&quot;">​</a></h2><p>建立一个仓库（假设命名为tool-kit），用来存放项目源码。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果要创建用户或组织站点，则存储库必须命名为 xxx.github.io。 如果您的用户或组织名称包含大写字母，您必须小写字母，具体创建过程点击<a href="https://docs.github.com/zh/enterprise-server@3.9/pages/getting-started-with-github-pages/creating-a-github-pages-site" target="_blank" rel="noreferrer">创建 GitHub Pages 站点</a>查看。</p></div><p>如果创建其他的文档，也可以直接用仓库名，如下图所示：</p><p><img src="'+e+'" alt="repo"></p><h2 id="在部署的目标仓库创建gh-pages分支" tabindex="-1">在部署的目标仓库创建gh-pages分支 <a class="header-anchor" href="#在部署的目标仓库创建gh-pages分支" aria-label="Permalink to &quot;在部署的目标仓库创建gh-pages分支&quot;">​</a></h2><p>如下图所示，输入gh-pages然后回车就可以创建分支了（如果是部署在当前仓库，就在当前仓库创建，如果是其它仓库，就去其它仓库创建）</p><p><img src="'+p+'" alt="repo"></p><p>进入创建的GitHub仓库的配置，具体位置在Settings -&gt; Pages -&gt; Build and deployment -&gt; Source。选择Deploy from a branch，即选择一个分支。 选择gh-pages分支。</p><p><img src="'+l+`" alt="repo"></p><h2 id="使用github-action实现自动部署" tabindex="-1">使用Github Action实现自动部署 <a class="header-anchor" href="#使用github-action实现自动部署" aria-label="Permalink to &quot;使用Github Action实现自动部署&quot;">​</a></h2><h3 id="创建action" tabindex="-1">创建action <a class="header-anchor" href="#创建action" aria-label="Permalink to &quot;创建action&quot;">​</a></h3><p>每个仓库都有一个Actions，点进去，New workflow，这个过程就是创建一个后缀为.yml的文件，这个文件想怎么命名都可以，yml文件的内容就需要根据自己的需求进行改动了。</p><h4 id="配置deploy-yml" tabindex="-1">配置deploy.yml <a class="header-anchor" href="#配置deploy-yml" aria-label="Permalink to &quot;配置deploy.yml&quot;">​</a></h4><p>如果是部署到当前仓库的gh-pages分支，deploy.yml的内容如下：</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .github/workflows/deploy.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 每当 push 到 main 分支时触发部署</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 只在下列路径变更时触发</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;docs/**&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;package.json&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;.github/**&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 手动触发部署</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    id-token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    cancel-in-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Build job</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">            url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            # 拉取代码</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # “最近更新时间” 等 git 日志相关信息，需要拉取全部提交记录</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 安装 pnpm</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup pnpm</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm/action-setup@v2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 设置 node 版本</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pnpm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # or pnpm / yarn</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #此操作有助于支持从任何静态站点生成器部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/configure-pages@v3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  cd ./docs</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  pnpm install --frozen-lockfile</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 打包静态文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  echo \${{ github.workspace }} </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                  pnpm run docs:deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  DOC_ENV</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">production</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">            #此操作有助于支持从任何静态站点生成器部署到 GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-pages-artifact@v2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./docs/.vitepress/dist</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">              # 发布</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">JamesIves/github-pages-deploy-action@v4.3.4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # GitHub 密钥</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      \${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                      # GitHub Pages 读取的分支</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  branch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">gh-pages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                  # 静态文件所在目录</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  folder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./docs/.vitepress/dist</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div><p>GitHub Actions的环境中提供了很多预置的配置和工具，例如Node.js，pnpm等等，我们直接使用即可。</p><p>具体怎么配置，可以根据自己的需求来，也可以参考<a href="https://docs.github.com/zh/enterprise-server@3.9/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages" target="_blank" rel="noreferrer">通过 GitHub Pages 使用自定义工作流</a> 和 <a href="https://vitepress.dev/guide/deploy" target="_blank" rel="noreferrer">vitepress部署</a></p><div class="warning custom-block"><p class="custom-block-title">温馨提示</p><p>Deploy 部署，使用的第三方action：JamesIves/github-pages-deploy-action@v4.3.4,它有两个参数：分别是branch、folder，更多关于这个action的详情可以去查看<a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noreferrer">github-pages-deploy-action</a>，用这个的原因是有可以选择发布分支的选项branch</p><p>如果在主分支发布则可以用<a href="https://github.com/marketplace/actions/deploy-github-pages-site" target="_blank" rel="noreferrer">actions/deploy-pages@v2</a>和<a href="https://vitepress.dev/guide/deploy" target="_blank" rel="noreferrer">vitepress部署</a>用同样的即可</p></div><p>配置完成之后， 每当(docs/** ，package.json，.github/**) push 到 main 分支时触发部署</p><h4 id="配置release-tag-yml" tabindex="-1">配置release-tag.yml <a class="header-anchor" href="#配置release-tag-yml" aria-label="Permalink to &quot;配置release-tag.yml&quot;">​</a></h4><p>新建release-tag 文件</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># .github/workflows/release-tag.yml</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 借鉴 https://github.com/vuejs/vitepress/blob/main/.github/workflows/release-tag.yml</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Release</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;v*&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Push events to matching v*, i.e. v1.0, v20.15.10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    release</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github.repository == &#39;lyxdream/tool-kit&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Create Release for Tag</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">release_tag</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yyx990803/release-tag@master</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              env</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  GITHUB_TOKEN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">              with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  tag_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ github.ref }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">                  body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                      Please refer to [CHANGELOG.md](https://github.com/\${{ github.repository }}/blob/main/CHANGELOG.md) for details.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h3 id="上传源码到当前仓库" tabindex="-1">上传源码到当前仓库 <a class="header-anchor" href="#上传源码到当前仓库" aria-label="Permalink to &quot;上传源码到当前仓库&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git@github.com:[userName]/tool-kit.git</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> main</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>触发部署，效果如下：</p><p><img src="`+t+'" alt="repo"></p><p><img src="'+h+'" alt="repo"></p><p><img src="'+r+`" alt="repo"></p><p><strong>打tag</strong></p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tag</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1.0.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tags</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>push之后，就会触发Release</p><p>效果如下：</p><p><img src="`+k+'" alt="repo"></p><p><img src="'+g+'" alt="repo"></p><p>往私有仓库推送需要生成一个具有推送私有仓库权限的 token即上面用到的<strong>ACCESS_TOKEN</strong>，下面补充一下如何获取<strong>ACCESS_TOKEN</strong></p><h3 id="获取github-token" tabindex="-1">获取Github Token <a class="header-anchor" href="#获取github-token" aria-label="Permalink to &quot;获取Github Token&quot;">​</a></h3><h4 id="_1-获取github-token" tabindex="-1">1. 获取Github Token <a class="header-anchor" href="#_1-获取github-token" aria-label="Permalink to &quot;1. 获取Github Token&quot;">​</a></h4><p><strong>配置路径是</strong>:个人头像-&gt;settings-&gt;Developer Settings-&gt;Personal access tokens-&gt;tokens (classic)-&gt;Generate new toekn-&gt; New personal access token (classic)</p><ul><li>Generate new Token</li></ul><p><img src="'+c+'" alt="github token"></p><p><img src="'+E+'" alt="github token"></p><ul><li><p>给这个token取一个名字，比如toolbloh <img src="'+d+'" alt="github token"></p></li><li><p>给这个token赋予仓库的权限和工作流权限，这是至少得选项，也可以都选择上</p></li></ul><p><img src="'+o+'" alt="github token"></p><ul><li>点击生成即可</li></ul><p><img src="'+b+'" alt="github token"></p><p><img src="'+u+'" alt="github token"></p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>出于安全考虑，这个token生成之后只会可见一次，因为后面步骤会使用，所以我们需要做好保存。</p><p>这个 token 是用户级别的，它可以用于访问修改该账户名下的任意仓库。</p></div><h4 id="_2-配置token到当前仓库" tabindex="-1">2. 配置token到当前仓库 <a class="header-anchor" href="#_2-配置token到当前仓库" aria-label="Permalink to &quot;2. 配置token到当前仓库&quot;">​</a></h4><p>为了让 Github Action 可以访问到这个token，需要给它做一个配置。</p><p><strong>配置路径是</strong>：在该仓库下的 Settings(注意这个是仓库下的设置而非个人下的设置) -&gt; Secrets -&gt; Actions -&gt; New repository secret。</p><p><img src="'+y+'" alt="token"></p><p>添加完之后的效果如下图：</p><p><img src="'+m+'" alt="token"></p><h2 id="遇到的问题" tabindex="-1">遇到的问题 <a class="header-anchor" href="#遇到的问题" aria-label="Permalink to &quot;遇到的问题&quot;">​</a></h2><ol><li>采用github自动化部署失败 Error: The deploy step encountered an error: The process &#39;/usr/bin/git&#39; failed with exit code 128 ❌ 78Notice: Deployment failed! ❌</li></ol><p><strong>原因分析</strong>：</p><p>工作流权限配置的不正确</p><p><strong>解决办法</strong>：</p><p>到仓库的Setting-&gt;Actions-&gt;General</p><p>在 Fork pull request workflows from outside collaborators-&gt;选择Require approval for first-time contributors who are new to GitHub</p><p>同时&quot;Workflow permissions&quot;中，选择Read and write permissions</p><p><img src="'+F+'" alt="token"></p><p>点击保存，如果还是不行，就是github_token出现了问题,重新配置github_token</p><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><p><a href="https://docs.github.com/zh/enterprise-server@3.9/pages/getting-started-with-github-pages/creating-a-github-pages-site" target="_blank" rel="noreferrer">创建 GitHub Pages 站点</a></p><p><a href="https://docs.github.com/zh/enterprise-server@3.9/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages" target="_blank" rel="noreferrer">通过 GitHub Pages 使用自定义工作流</a></p><p><a href="https://vitepress.dev/guide/deploy" target="_blank" rel="noreferrer">vitepress部署</a></p><p><a href="https://docs.github.com/zh/actions/deployment/about-deployments/deploying-with-github-actions" target="_blank" rel="noreferrer">使用 GitHub Actions 进行部署</a></p><p><a href="https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank" rel="noreferrer">阮一峰GitHub Actions 入门教程</a></p><p><a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens" target="_blank" rel="noreferrer">Creating a personal access token</a></p><p><a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens" target="_blank" rel="noreferrer">管理个人访问令牌</a></p><p><a href="https://blog.csdn.net/weixin_44786530/article/details/131933687" target="_blank" rel="noreferrer">FileHub使用教程：Github Token获取步骤，使用快人一步</a></p><p><a href="https://blog.csdn.net/ibigboy/article/details/126402267" target="_blank" rel="noreferrer">GitHub部署vuepress报错</a></p><p><a href="https://blog.csdn.net/qq_43173415/article/details/117741139" target="_blank" rel="noreferrer">vuepress搭建个人博客+Github Actions 自动部署（详细）</a></p><p><a href="https://zhangferry.com/2022/07/24/github_action_for_blog_deploy/" target="_blank" rel="noreferrer">利用 Github Action 实现博客自动发版</a></p>',78),C=[D];function _(f,v,B,w,G,P){return a(),i("div",null,C)}const H=s(A,[["render",_]]);export{x as __pageData,H as default};
