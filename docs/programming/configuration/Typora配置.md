# Typora图床配置

## 方法一

### 注册`SM.MS`图床网站账号

图床网站：[Image Upload - SM.MS - Simple Free Image Hosting (smms.app)](https://smms.app/)

#### 获取 API Token

在登录网站后进入个人后台获取，`User`-->`Dashboard`-->`API Token`

### Typora配置

> #### 网站链接
>
> Typora官网：[Typora — a markdown editor, markdown reader.](https://typora.io/)
>
> Typora国内官网：[Typora 官方中文站 (typoraio.cn)](https://typoraio.cn/)

![Typora配置smms图床](https://s2.loli.net/2023/09/22/VGMIgBPAnowU86s.png)

#### 配置文件代码

```json
{
    "picBed": {
        "current": "smms-user",
        "uploader": "smms-user",
        "smms-user": {
            "Authorization": "你自己的smms图床的 API Token"
        },
        "transformer": "path"
    },
    "picgoPlugins": {
        "picgo-plugin-smms-user": true,
        "picgo-plugin-gitee-uploader": true
    }
}
```

#### 安装Node.js

下插件需要安装Node.js使用npm命令下载插件

> #### 网站链接
>
> Node官网：[Node.js (nodejs.org)](https://nodejs.org/en)
>
> Node国内官网：[Node.js 中文网 (nodejs.cn)](https://nodejs.cn/)

#### 执行安装插件命令

进入`C:\Users\你电脑的用户名称\AppData\Roaming\Typora\picgo\win64`在此目录下运行打开命令行终端执行命令

```powershell
.\picgo.exe install smms-user
```

显示安装成功，在Typora里进行图片上传验证成功即表示配置图床完成

## 方法二

使用`PicGo`软件进行图床管理，==注意：PicGo路径里需要选中`PicGo.exe`这个程序==

![![Typora配置图床软件PicGo](https://s2.loli.net/2023/09/22/Wl5IfBPn2Q9mdyv.png)](https://s2.loli.net/2024/04/04/tihWjCMFNXS1oln.png)

### SM.MS图床

软件默认使用SM.MS图床，可以可视化配置

![PicGo里配置smms图床](https://s2.loli.net/2023/09/22/hEFuLIiGBRPJMpj.png)

### `Gitee`图床

使用`Gitee`图床作为默认图床

1. 注册账号[ Gitee.com](https://gitee.com/)

2. 在`Gitee`里面兴建一个仓库![gitee创建图床仓库](https://s2.loli.net/2023/09/22/My3IBLKcNxUi2qG.png)

3. 在这个仓库创建完成之后点击`管理`进行仓库开源设置

4. 点击头像-->`设置`-->`私人令牌`
   ![Gitee获取私人令牌](https://s2.loli.net/2023/09/22/ET9jv4uRq8DNdPk.png)

5. 进入`Picgo`并且打开`插件设置`，**【安装gitee-uploader】**等待安装完成图床设置会出现`gitee`。

6. 在图床设置了选择`gitee`进行配置

   ![PicGo配置gitee图床](https://s2.loli.net/2023/09/22/owgKXG653WxjF78.png)

7. 设置为默认图床即可











