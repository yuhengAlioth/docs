import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.CPs9Ukbn.js";const b=JSON.parse('{"title":"JDK配置","description":"","frontmatter":{},"headers":[],"relativePath":"programming/environment/JDK配置.md","filePath":"programming/environment/JDK配置.md","lastUpdated":1715075190000}'),n={name:"programming/environment/JDK配置.md"},o=r('<h1 id="jdk配置" tabindex="-1">JDK配置 <a class="header-anchor" href="#jdk配置" aria-label="Permalink to &quot;JDK配置&quot;">​</a></h1><h2 id="一、下载" tabindex="-1">一、下载 <a class="header-anchor" href="#一、下载" aria-label="Permalink to &quot;一、下载&quot;">​</a></h2><p><a href="https://www.oracle.com/cn/java/technologies/downloads/" target="_blank" rel="noreferrer">Java官网</a></p><p><a href="https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.zip" target="_blank" rel="noreferrer">jdk17解压版本</a></p><p><a href="https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe" target="_blank" rel="noreferrer">jdk17安装版本</a></p><h2 id="二、安装解压版" tabindex="-1">二、安装解压版 <a class="header-anchor" href="#二、安装解压版" aria-label="Permalink to &quot;二、安装解压版&quot;">​</a></h2><ol><li><p>解压到文件夹</p></li><li><p>配置系统环境变量</p><p>==此电脑-&gt;右键-&gt;属性-&gt;高级系统设置-&gt;环境变量-&gt;系统环境变量==</p><table><thead><tr><th>新建系统变量</th><th></th></tr></thead><tbody><tr><td>变量名</td><td>JAVA_HOME</td></tr><tr><td>变量值</td><td>解压JDK的路径</td></tr><tr><td></td><td>例如：D:\\Environmnt\\Java\\jdk-17.0.2</td></tr></tbody></table></li><li><p>配置系统环境变量中<code>Path</code>里面添加变量</p><p><code>%JAVA_HOME%\\bin</code></p></li><li><p>检测是否安装成功</p><div class="language-shll vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shll</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>java -version</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol>',7),d=[o];function l(i,s,p,c,h,_){return t(),e("div",null,d)}const g=a(n,[["render",l]]);export{b as __pageData,g as default};
