# windows 终端美化

## 安装软件

微软商店安装`WindowsTerminal`与`PowerShell`

## `PowerShell`配置

### 安装后的第一次启动

1. 首先使用管理员运行`PowerShell`
2. 点击左上角图标出现菜单
3. 点击属性
4. 选择终端
5. 将默认终端应用程序改为`Windows终端`
6. 关闭`PowerShell`

### 安装后的第二次启动

1. 正常打开`PowerShell`
2. 点击设置
3. 选择启动
4. 将默认配置文件改为`PowerShell`
5. 保存并且关闭

### 截图示例：

#### 第一次启动

![第一次管理员启动PowerShell](https://s2.loli.net/2024/05/11/KRTjwHmJv3tBC25.png)

#### 第二次启动

![第二次正常启动PowerShell](https://s2.loli.net/2024/05/11/aOUfARh1XgEFtlr.png)

## 安装字体

### 官网

[Home | Oh My Posh](https://ohmyposh.dev/)

官网点击下载：[Fonts | Oh My Posh](https://ohmyposh.dev/docs/installation/fonts)

或者在点击链接直接下载：[Meslo LGM NF](https://github.com/ryanoasis/nerd-fonts/releases/download/v3.0.2/Meslo.zip)

**将字体文件解压之后为所有用户全部安装**

### 设置字体

1. 打开`PowerShell`
2. 设置
3. 分别选择`默认值`、`PowerShell`进行以下操作
4. 选择外观
5. 选择`MesloLGL`开头的字体即可
6. 保存并且退出

## 安装`oh-my-posh`

根据操作系统选择安装方法

[Windows 系统](https://ohmyposh.dev/docs/installation/windows)

[macOS 系统](https://ohmyposh.dev/docs/installation/macos)

[Linux 系统](https://ohmyposh.dev/docs/installation/linux)

### `Windows`系统

1. 使用`winget`的安装方法

2. 管理员运行`PowerShell`

3. 输入以下命令

   ```powershell
   winget install JanDeDobbeleer.OhMyPosh -s winget
   ```

4. 显示安装成功后，重启`PowerShell`

   输入以下命令查看运行在那个终端上面，显示`pwsh`表示是`PowerShell`

   ```powershell
   oh-my-posh get shell
   ```

5. [创建配置文件](https://ohmyposh.dev/docs/installation/prompt)

   ```powershell
   New-Item -Path $PROFILE -Type File -Force
   ```

6. 使用记事本打开

   ```powershell
   notepad $PROFILE
   ```

   编辑以下命令，避免 Windows 防火墙报错

   ```bash
   & ([ScriptBlock]::Create((oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\jandedobbeleer.omp.json" --print) -join "`n"))
   ```

7. 使配置文件生效

   ```powershell
   .$PROFILE
   ```

### 查看所有主题

最后会显示主题的存放路径、配置文件存放的路径

```powershell
Get-PoshThemes
```

打开配置文件改变主题

```powershell
notepad $PROFILE
```

1. 防火墙没有报错，将加载主题的命令复制并且替换之前的命令（只能配置一个主题）

   想要还主题将`jonnychipz.omp.json`这条语句的前面单词改变为其他主题名称即可

   ```powershell
   oh-my-posh init pwsh --config 'C:\Users\用户名\AppData\Local\Programs\oh-my-posh\themes\jonnychipz.omp.json' | Invoke-Expression
   ```

2. 随机主题

   ```bash
   $theme = Get-ChildItem $env:UserProfile\\AppData\\Local\\Programs\\oh-my-posh\\themes\\|Get-Random
   echo "本次主题是:$theme :)"
   oh-my-posh --init --shell pwsh --config $theme.FullName | Invoke-Expression
   ```

### 安装文件图标库

当出现选项时输入`Y`即可

```powershell
Install-Module -Name tERMINAL-Icons -Repository PSGallery
```

1. 安装完成后在配置文件添加

   ```powershell
   Import-Module -Name Terminal-Icons
   ```

2. 使配置文件生效

   ```powershell
   .$PROFILE
   ```

在终端查看当前文件夹里面所有文件时会有对应的图标

![检测文件图标库是否安装成功](https://s2.loli.net/2024/05/11/Gwpq2S9kXxcmQ6s.png)

## VSCode 配置

1. 设置
2. 搜索`font`
3. 选择`终端`
4. 输入字体名称即可

点击
![VSCode设置终端字体1](https://s2.loli.net/2024/05/11/VhGiZAzNjI8Swcg.png)

在出来的内容最前面添加安装的字体
![VSCode设置终端字体2](https://s2.loli.net/2024/05/11/2tMNBvQXa1b98cw.png)
