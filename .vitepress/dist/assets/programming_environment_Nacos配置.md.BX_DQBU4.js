import{_ as a,c as s,o as e,a4 as n}from"./chunks/framework.CPs9Ukbn.js";const b=JSON.parse('{"title":"Nacos配置","description":"","frontmatter":{},"headers":[],"relativePath":"programming/environment/Nacos配置.md","filePath":"programming/environment/Nacos配置.md","lastUpdated":1712054876000}'),i={name:"programming/environment/Nacos配置.md"},o=n(`<h1 id="nacos配置" tabindex="-1">Nacos配置 <a class="header-anchor" href="#nacos配置" aria-label="Permalink to &quot;Nacos配置&quot;">​</a></h1><h2 id="nacos简介" tabindex="-1">Nacos简介 <a class="header-anchor" href="#nacos简介" aria-label="Permalink to &quot;Nacos简介&quot;">​</a></h2><p>Nacos是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。它是 <code>SpringCloud Alibaba</code>组件之一，负责服务注册发现和服务配置，可以这样认为 <code>nacos=eureka+config</code>。</p><p>Nacos致力于帮助您发现、配置和管理微服务。 Nacos提供了一组简单易用的特性集，帮助你快速实现动态服务发现、服务配置、服务元数据及流量管理。</p><p>从上面的介绍就可以看出， Nacos的作用就是一个注册中心，用来管理注册上来的各个微服务。</p><h2 id="一、下载" tabindex="-1">一、下载 <a class="header-anchor" href="#一、下载" aria-label="Permalink to &quot;一、下载&quot;">​</a></h2><p><a href="https://nacos.io/zh-cn/" target="_blank" rel="noreferrer">Nacos官网</a></p><p><a href="https://github.com/alibaba/nacos/releases" target="_blank" rel="noreferrer">Nacos2.3.0</a></p><h2 id="二、安装解压版" tabindex="-1">二、安装解压版 <a class="header-anchor" href="#二、安装解压版" aria-label="Permalink to &quot;二、安装解压版&quot;">​</a></h2><ol><li><p>解压到文件夹</p></li><li><p>默认启动</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#切换目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nacos/bin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#命令启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startup.cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> standalone</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></li></ol><h2 id="三、配置数据库源" tabindex="-1">三、配置数据库源 <a class="header-anchor" href="#三、配置数据库源" aria-label="Permalink to &quot;三、配置数据库源&quot;">​</a></h2><p>一般使用MySQL</p><p>打开<code>conf</code>文件夹下的<code>application.properties</code>，修改数据库信息</p><h2 id="四、启动模式" tabindex="-1">四、启动模式 <a class="header-anchor" href="#四、启动模式" aria-label="Permalink to &quot;四、启动模式&quot;">​</a></h2><p>对于<code>Nacos</code>，常见的启动模式包括：</p><ol><li><p><code>Standalone</code> ：单机模式</p><p>这种模式下， <code>Nacos</code> 在单个节点上运行，适用于开发和测试环境。</p></li><li><p><code>Cluster</code>：集群模式</p><p>在集群模式下， <code>Nacos</code> 可以部署在多个节点上，以实现高可用性和扩展性。</p></li></ol><p><strong>默认是集群模式</strong></p><p>打开bin文件夹下的<code>startup.cmd(Linux下为startup.sh)</code>，更改一处配置。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MODE=&quot;cluster&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">修改为</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MODE=&quot;standalone&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>之后在<code>cmd</code>里面直接启动<code>startup.cmd</code>即可。</p><p>访问 <code>http://localhost:8848/nacos</code> ，即可访问服务，如果需要密码，默认账号密码是：<code>nacos/nacos</code></p>`,21),t=[o];function l(p,c,r,d,h,u){return e(),s("div",null,t)}const m=a(i,[["render",l]]);export{b as __pageData,m as default};
