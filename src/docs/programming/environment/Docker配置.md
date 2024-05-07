# 系统安装

## Ubuntu系统

### 卸载旧版本

如需要，先卸载旧版本

```sh
sudo apt-get remove docker docker-engine docker.io containerd runc
```

### 获取软件最新源

```sh
sudo apt-get update
```

### 安装 apt 依赖包

用于通过HTTPS来获取仓库

```sh
sudo apt-get -y install apt-transport-https ca-certificates curl software-properties-common
```

### 安装GPG证书

```sh
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
```

### 验证

```sh
sudo apt-key fingerprint 0EBFCD88
```

### 设置稳定版仓库

```sh
sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable"
```

## Win11

### 开启 Hyperv

#### 步骤 1

**windows11 上安装 HyperV**

1. 创建`hyper-v.txt`文件,然后重命名为`hyper-v.bat`文件,再以管理员的方式运行。 

   ```
   pushd "%~dp0"
   dir /b %SystemRoot%\servicing\Packages\*Hyper-V*.mum >hv.txt
   for /f %%i in ('findstr /i . hv.txt 2^>nul') do dism /online /norestart /add-package:"%SystemRoot%\servicing\Packages\%%i"
   del hv.txt
   Dism /online /enable-feature /featurename:Microsoft-Hyper-V -All /LimitAccess /ALL
   pause
   ```

2. 控制面板 ==> 程序 ==> 启用或关闭Windows功能 ==> 开启`Hyper-V`

### 安装WSL

#### 步骤 2 

**启用适用于 Linux 的 Windows 子系统**

以管理员身份打开 PowerShell，然后输入以下命令：

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

#### 步骤 3

**启用虚拟机功能**

安装 WSL 2 之前，必须启用“虚拟机平台”可选功能。 计算机需要[排查适用于 Linux 的 Windows 子系统问题](https://learn.microsoft.com/zh-cn/windows/wsl/troubleshooting#error-0x80370102-the-virtual-machine-could-not-be-started-because-a-required-feature-is-not-installed)才能使用此功能。

以管理员身份打开 PowerShell 并运行：

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

#### 步骤 4

**下载 Linux 内核更新包**

Linux 内核更新包会安装最新版本的 [WSL 2 Linux 内核](https://github.com/microsoft/WSL2-Linux-Kernel)，以便在 Windows 操作系统映像中运行 WSL。 （若要运行 [比较 WSL 版本](https://learn.microsoft.com/zh-cn/windows/wsl/compare-versions#wsl-in-the-microsoft-store) 并更频繁地推送更新，请使用 `wsl.exe --install` 或 `wsl.exe --update`。）

1.  下载最新包：
    [适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) 
2.  运行上一步中下载的更新包。 （双击以运行 - 系统将提示你提供提升的权限，选择“是”以批准此安装。） 

#### 步骤 5

**将 WSL 2 设置为默认版本**

打开 PowerShell，然后在安装新的 Linux 发行版时运行以下命令，将 WSL 2 设置为默认版本：

```powershell
wsl --set-default-version 2
```

#### 步骤 6

**安装所选的 Linux 分发**

1. 打开 [Install WSL](https://aka.ms/wslstore)，并选择你偏好的 Linux 分发版系统。
2. 首次启动新安装的 Linux 分发版时，将打开一个控制台窗口，系统会要求你等待一分钟或两分钟，以便文件解压缩并存储到电脑上。 未来的所有启动时间应不到一秒
3. 然后，需要[设置 WSL 开发环境](https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)。



# 安装 Docker Engine-Community

### 更新 apt 包索引

```sh
sudo apt-get update
```

### 安装最新版本

```sh
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### 测试

```sh
sudo docker run hello-world
```

# 管理docker

### 显示docker状态

```sh
systemctl status docker
```

### 启动docker

```sh
systemctl start docker
```

### 停止docker

```sh
systemctl stop docker
```

### 重启docker

```sh
systemctl restart docker
```

### 开机启动

```sh
sudo systemctl enable docker
```
