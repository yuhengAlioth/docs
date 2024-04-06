# Docker容器

## 初识Docker

### 什么是Docker

Docker 是一个开源的应用容器引擎，让开发者可以打包他们的应用以及依赖包到一 个可移植的镜像(images)中，然后发布到任何流行的 Linux或Windows操作系统的  机器上，也可以实现虚拟化。

容器(container)是完全使用沙箱(sandbox)机制，相互之间不会有任何接口。

![docker](https://s2.loli.net/2024/04/06/KkDlBsXJUQTCeuw.png)

### 镜像和容器

Docker中有两个重要的概念：

**镜像(Image)：** Docker将应用程序及其所需的依赖、函数库、环境、配置等文件 打包在一起，称为镜像。

**容器(Container)：**镜像中的应用程序运行后形成的进程就是**容器**，只是Docker 会给容器进程做隔离，对外不可见。


例如你下载了一个QQ，如果我们将QQ在磁盘上的运行文件及其运行的操作系统依赖打包，形成QQ镜像。然后你可以启动一个，双开、三开QQ，每次开启的QQ都是一个容器。

### DockerHub

开源应用程序非常多，打包这些应用往往是重复的劳动。为了避免这些重复劳动，  人们就会将自己打包的应用镜像，例如Redis、 MySQL镜像放到网络上，共享使用， 就像GitHub的代码共享一样。

Docker镜像地址：  [[Docker Hub Container Image Library | App Containerization](https://hub.docker.com/)](https://hub.docker.com/)

> #### 提示
>
> 由于Docker镜像仓库的DNS被污染，导致Docker镜像仓库无法访问。使用国 内镜像加速可解决无法访问问题。阿里云官网提供了镜像加速，网址如下：
>
> [容器镜像服务 (aliyun.com)](https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors)

#### Ubuntu的Docker镜像加速

==下面的代码在终端执行，其中内容是要一行一行写入==

![Ubuntu的Docker镜像加速](https://s2.loli.net/2024/04/06/aWNMTLV1Bu2Ir7Z.png)

#### Mac的Docker镜像加速

![Mac的Docker镜像加速](https://s2.loli.net/2024/04/06/MgBskTafFbtPqo8.png)

#### Windows的Docker镜像加速

![Windows的Docker镜像加速](https://s2.loli.net/2024/04/06/DkodgtPOl21HBMw.png)

## 镜像操作

### 镜像名称

首先来看下镜像的名称组成：

- 镜像名称一般分两部分组成：`[repository]:[tag]`。
- 在没有指定`tag`时，默认是`latest`，代表最新版本的镜像

例如：`mysql:5.7 `

这里的mysql就是repository，5.7就是tag，合一起就是镜像名称，代表5.7版本的MySQL镜像。

### 镜像命令

常见的镜像操作命令如图：

docker镜像操作命令

![docker镜像操作命令](https://s2.loli.net/2024/04/06/jzROplHf4GWeXc3.png)

#### 常用的镜像命令

`docker images`查看镜像

`docker rmi`删除镜像

`docker push`推送镜像到服务器

`docker pull`从服务器拉取镜像

`docker save`保存镜像为压缩包

`docker load`加载压缩包为镜像

### 拉取、查看镜像

从DockerHub中拉取一个nginx镜像并查看

1. 首先查看docker中已经安装的镜像

   ```shell
   docker images
   ```

2. 根据查看到的镜像名称，拉取自己需要的镜像

   ```shell
    docker pull nginx
   ```

3. 通过命令：docker images 查看拉取到的镜像

   ```shell
   docker images
   ```

### 保存、导入镜像

利用docker save将nginx镜像导出磁盘，然后再通过load加载回来

#### 查看命令语法结构

利用`docker xx --help`命令查看`docker save`和`docker load`的语法

例如，查看save命令用法，可以输入命令：

```shell
docker save --help
```

命令格式：

```shell
docker save -o [保存的目标文件名称] [镜像名称]
```

#### 使用docker save导出镜像到磁盘

运行命令：

```shell
docker save -o nginx.tar nginx:latest
```

#### 使用docker load加载镜像

先删除本地的nginx镜像：

```shell
docker rmi nginx:latest
```

然后运行命令，加载本地文件：

```shell
docker load -i nginx.tar
```

## 容器操作

### 容器相关命令

容器操作的命令如图：

docker容器操作命令图

![docker容器操作命令图](https://s2.loli.net/2024/04/06/lsfmbkjqNRaEdTU.png)

容器保护三个状态：

- 运行：进程正常运行
- 暂停：进程暂停，  CPU不再运行，并不释放内存
- 停止：进程终止，回收进程占用的内存、  CPU等资源

其中：

- `docker run`：创建并运行一个容器，处于运行状态
- `docker stop`：停止一个运行的容器
- `docker start`：让一个停止的容器再次运行
- `docker restart`：重新启动容器
- `docker rm`：删除一个容器
- `docker pause`：让一个运行的容器暂停
- `docker unpause`：让一个容器从暂停状态恢复运行

### 创建并运行容器

创建并运行nginx

命令语法：

```shell
docker run --name containerName -p 80:80 -d nginx
```

语法解析：

- `docker run`：创建并运行一个容器
- `--name`: 给容器起的名字，例如叫做ng
- `-p`：将宿主机端口与容器端口映射，冒号左侧是宿主机端口，右侧是容器端口 
- `-d`：后台运行容器
-  `nginx`：镜像名称，例如nginx

这里的`-p`参数，是将容器端口映射到宿主机端口。

默认情况下，容器是隔离环境，我们直接访问宿主机的80端口，肯定访问不到容器 中的nginx。

现在，将容器的80与宿主机的80关联起来，当我们访问宿主机的80端口时，就会被 映射到容器的80，这样就能访问到nginx了：

运行nginx容器

```shell
docker run --name ng -p 8080:80 -d nginx:latest
```

查看运行的容器

```shell
docker ps
```

访问docker容器中的nginx

打开浏览器，输入docker容器宿主机的ip和nginx的映射端口，例如：`http://47.96.10.118:8080` ，即可看到结果。

查看docker容器中的nginx访问日志

```shell
docker logs ng
```

持续查看docker容器中的nginx访问日志

```shell
 docker logs -f ng
```

停止持续显示访问日志： `Ctrl + C`

## 数据卷

问题：

镜像中包含了应用程序及其所需的依赖、函数库、环境、配置等，还包括了应 用程序的数据。如果在应用程序运行过程中修改了数据，**那么删除镜像后，数据也同时删除了**。

原因：

产生这种问题的原因是容器与数据（容器内文件）耦合带来的后果。

改进：

要解决这个问题，必须将数据与容器解耦，这就要用到数据卷了。

### 什么是数据卷

**数据卷(volume)**是一个虚拟目录，指向宿主机文件系统中的某个目录。

![docker数据卷](https://s2.loli.net/2024/04/06/I4lOn1GoBejQkzp.png)

一旦完成数据卷挂载，对容器的一切操作都会作用在数据卷对应的宿主机目录了。

这样，我们操作宿主机的/var/lib/docker/volumes/html目录，就等于操作容器内 的/usr/share/nginx/html目录了

### 数据卷操作命令

数据卷操作的基本语法如下：

```shell
docker volume [COMMAND]
```

`docker volume`命令是数据卷操作，根据命令后跟随的command来确定下一步的操作：

- `create`创建一个volume
- `inspect`显示一个或多个volume的信息
- `ls`列出所有的volume
- `prune`删除未使用的volume
- `rm`删除一个或多个指定的volume

### 创建和查看数据卷

创建一个数据卷，并查看数据卷在宿主机的目录位置

#### 创建数据卷

```shell
docker volume create html
```

#### 查看所有数据卷

```shell
docker volume ls
```

#### 查看数据卷详细信息卷

```shell
docker volume inspect html
```

可以看到，我们创建的html这个数据卷关联的宿主机目录为 /var/lib/docker/volumes/html/_data 目录。

### 挂载数据卷

我们在创建容器时，可以通过`-v`参数来挂载一个数据卷到某个容器内目录，命令格式如下：

```shell
docker run --name ng -v html:/usr/share/nginx/html -p 8080:80 -d nginx
```

这里的-v就是挂载数据卷的命令：

-  `-v html:/usr/share/nginx/html`：把html数据卷挂载到容器内 的/usr/share/nginx/html这个目录中
- nginx默认网页在nginx中的存储位置就是/usr/share/nginx/html目录
- 挂载后，宿主机的/var/lib/docker/volumes/html/_data目录就是nginx的网页目录了，在这个目录中创建网页就可用直接访问了。

创建网页：

在/var/lib/docker/volumes/html/_data目录中创建文件index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="./js/echarts.min.js"></script>
 </head>
 <body>
     hello docker volume
 </body>

 </html>
```

### 给MySQL挂载本地目录

容器不仅仅可以挂载数据卷，也可以直接挂载到宿主机目录上。关联关系如下：

- 带数据卷模式：宿主机目录 ---> 数据卷 ---> 容器内目录
- 直接挂载模式：宿主机目录 ---> 容器内目录

如图：

![docker目录挂载](https://s2.loli.net/2024/04/06/Lo3jpbI6TVzPEtC.png)

**语法：**

目录挂载与数据卷挂载的语法是类似的：

- -v [宿主机目录]:[容器内目录]
- -v [宿主机文件]:[容器内文件]

**需求：**创建并运行一个MySQL容器，将宿主机目录直接挂载到容器

**步骤：**

1. mysql.tar文件上传到服务器
2. 创建目录/usr/mysql/data
3. 创建目录/usr/mysql/conf
4. 将提供的hmy.cnf文件上传到/usr/mysql/conf
5. 挂载/usr/mysql/data到mysql容器内数据存储目录
6. 挂载/usr/mysql/conf/hmy.cnf到mysql容器的配置文件
7. 设置MySQL密码

实现过程如下：

1. 加载mysql镜像

   ```shell
   docker load -i mysql.tar
   ```

2. 运行mysql容器

   ```shell
   docker run \
   --name mysql \
   -e MYSQL_ROOT_PASSWORD=root \
   -p 3309:3306 \
   -v /usr/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf \
   -v /usr/mysql/data:/var/lib/mysql \
   -d \
   mysql:5.7.25
   ```

3. `hmy.cnf`文件里面的内容 

   ```shell
   [mysqld]
   skip-name-resolve
   character_set_server=utf8
   datadir=/var/lib/mysql
   server-id=1000
   ```

`SqlYog`连接docker里的`mysql8.0`，还需要设置

- 阿里云的安全组添加3309(你开放的端口)的端口

- ubuntu的防火墙要允许3309(你开放的端口)端口通信

  ```shell
  sudo ufw status
  sudo ufw allow 3309(你开放的端口)
  ```

- 从linux进入到docker中的容器的命令是

  其中mysql是容器的名称

  ```shell
  docker exec -it mysql bash
  ```

- 进入docker中创建的MySQL的容器中后重置mysql8.0密码

  ```shell
  # 进入mysql
  mysql -u root -p
  
  # 先进入 mysql 数据库
  use mysql;
  
  # 指定加密方式重置密码
  alter user root@'%' identified with mysql_native_password by 'root'；
  ```



