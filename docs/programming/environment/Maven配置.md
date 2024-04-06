# Maven配置

## 一、下载Maven

[Maven官网](https://archive.apache.org/dist/maven/)

选择你需要的版本，`binaries`文件里面是编译好可以直接用的、`source`文件夹里面是源码。

选择编译好的下载，`windows`就下载`zip`即可，`linux`下载`tar`即可。

## 二、配置Maven环境变量

==此电脑->右键属性->高级系统设置->环境变量->系统变量==

1. 新建系统变量

   | 新建系统变量 |                                             |
   | ------------ | ------------------------------------------- |
   | 变量名       | MAVEN_HOME                                  |
   | 变量值       | 解压Maven的路径                             |
   |              | 例如：D:\Environmnt\Java\apache-maven-3.8.8 |

2. 配置系统环境变量中`Path`里面添加变量

   > %MAVEN_HOME%\bin


## 三、检测配置

```shell
mvn -version
```

## 四、配置Maven仓库地址

Maven默认存储Jar包的地址：`C:\%USER_HOME%\.m2\repository`

在我们安装`Maven`目录下的``conf `文件夹下的`settings.xml` 文件，通过`localRepository`元素定义另一个本地仓库地址，例如：

```xml
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                              http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <localRepository>D:\maven_repository\repository(你自己选择一个地方)</localRepository>
</settings>
```

## 五、配置Maven镜像

配置 Maven 镜像的方法也非常的简单，我们只需要在 Maven 安装目录中 `setting.xml` 文件的 `mirrors` 节点中，使用 mirror 标签添加镜像的相关信息即可。

**阿里云镜像：**

```xml
<mirror>
    <id>aliyun</id>
    <mirrorOf>central</mirrorOf>
    <name>aliyun</name>
   <url>https://maven.aliyun.com/repository/public</url>
</mirror>
```

## 六、IDEA配置Maven

`File`->`New Projects Settings`->`Settings for New Projects` 在搜索里面搜索Maven，将其中的maven的默认配置更换成刚才安装的相同位置即可。

以后创建新的`Maven`项目就不用再配置了。
