## git 多账户管理

一般情况一台电脑配置一个 git 账户，并且使用全局配置

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

但是当你想将个人账号与工作账号分开就需要配置多个 git 账户，比如同时使用 github 和 gitee 以及 gitlab 等，这时候就需要使用 git 的多账户管理功能。

### 配置多个 git 账户

#### 配置git全局配置

```bash
git config --global user.name "your name"
git config --global user.email "your email"
```

#### 为每个账户生成ssh key

在 windows 系统中找到`C:\\Users\\你的用户名\\.ssh`文件，在此文件下执行下面操作。（**也就是每个邮箱**）

##### 配置 git 账户 A 的 ssh key

```bash
ssh-keygen -t rsa -C "your A email"
```

执行完上面的命令后，命令行会弹出以下提示：

```bash
Enter file in which to save the key (/Users/yourname/.ssh/id_rsa): 
```

出现上面提示可以输入文件名，也可以直接回车，使用默认文件名(**我们为A账户设置一个文件名称如：id_rsa_A_gitee**)。然后会提示输入密码，这里可以输入密码，也可以直接回车，使用默认密码。然后会提示再次输入密码，这里再次输入密码或者回车即可。

##### 配置 git 账户 B 的 ssh key

名称同理即可

##### 创建`config`文件

在 windows 系统中，文件中配置以下内容：

```bash
#服务器别名
Host gitee
#主机地址
HostName gitee.com
#可以写邮箱名称，也可以写 git 账号
User 名称
#对应github 密钥路径，注意不要写错
IdentityFile C:\\Users\\你的用户名\\.ssh\你起的名称
#配置yes，表示只使用这里的key，防止使用默认的
IdentitiesOnly yes
#强制验证方式，这里使用的是publickey
PreferredAuthentications publickey

# 可以配置多个...

```

#### 测试配置

```bash
ssh -T git@配置的服务器别名
```

出现`Hi 你的账号...`说明成功

### 配置项目账户

在你需要单独提交的项目下面初始化 git 后进行以下操作：

```bash
git config --local user.name "your A name"
git config --local user.email "your A email"
```

### 更改连接

原本当你创建远程仓库后给你的地址为：

```bash
git remote add origin git@gitee.com:你账号名称/仓库名称.git
```

修改为你定义的路径别名形式：

```bash
git remote add origin git@你定义的别名:你账号名称/仓库名称.git
```

### 提交

在远程仓库配置你生成的 ssh key 的公钥后，正常操作即可

