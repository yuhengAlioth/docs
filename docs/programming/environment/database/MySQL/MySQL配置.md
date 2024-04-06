# MySQL配置

## 一、下载

[MySQL官网]( https://www.mysql.com/)

## 二、安装解压版

官网下载压缩包，解压到自己创建的目录之后，自己创建可执行文件`.bat`后缀，启动即可。

`1initialization.bat`：初始化MySQL服务，==只执行一次==。

`2install.bat` :安装MySQL服务 (将MySQL安装为Windows服务)

`3startup.bat` ：启动MySQL服务

`4reboot.bat` ：重启MySQL服务

>安装时，依次执行前三个`bat`文件

`5stop.bat`： 将MySQL服务停止

`6uninstall.bat `：删除MySQL服务

>卸载时，只执行最后两个bat文件，随后删除整个MySQL数据库的文件夹即可

### 配置`.bat`文件

#### 1initialization.bat

```bash
@echo 正在初始化 MySQL8 . . .

@echo 初始化完成后，当前窗口会自动关闭，请耐心等待 . . .

bin\mysqld --initialize-insecure
```

#### 2install.bat

```bash
@echo 安装 MySQL8 服务 . . .

bin\mysqld --install mysql8
```

#### 3startup.bat

```bash
@echo 正在启动MySQL8服务 . . .

net start mysql8
```

#### 4reboot.bat

```bash
@echo 正在重启 MySQL8 服务 . . .

net stop mysql8

net start mysql8
```

#### 5stop.bat

```bash
@echo 正在关闭 MySQL8 服务 . . .

net stop mysql8
```

#### 6uninstall.bat

```bash
@echo 正在移除 MySQL8 服务 . . .

net stop mysql8

bin\mysqld --remove mysql8
```

### 配置系统环境变量

Path内新建两个环境变量：

1.  系统变量里配置：`MYSQL_HOME     D:\biancheng\java\mysql-8.0.30-winx64`
2.  系统变量的path里面配置`%MYSQL_HOME%\bin`

### 启动MySQL服务

1. Windows系统以==管理员==身份启动CMD
2. 命令行终端进入文件夹目录后按照上面的步骤执行`.bat`文件
3. MySQL启动成功