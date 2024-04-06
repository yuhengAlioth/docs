# Nacos配置

## Nacos简介

Nacos是一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。它是 `SpringCloud Alibaba`组件之一，负责服务注册发现和服务配置，可以这样认为 `nacos=eureka+config`。

Nacos致力于帮助您发现、配置和管理微服务。 Nacos提供了一组简单易用的特性集，帮助你快速实现动态服务发现、服务配置、服务元数据及流量管理。

从上面的介绍就可以看出， Nacos的作用就是一个注册中心，用来管理注册上来的各个微服务。

## 一、下载

[Nacos官网](https://nacos.io/zh-cn/)

[Nacos2.3.0](https://github.com/alibaba/nacos/releases)

## 二、安装解压版

1. 解压到文件夹

2. 默认启动

   ```shell
   #切换目录
   cd nacos/bin
   #命令启动
   startup.cmd -m standalone
   ```

## 三、配置数据库源

一般使用MySQL

打开`conf`文件夹下的`application.properties`，修改数据库信息

## 四、启动模式

对于`Nacos`，常见的启动模式包括：

1. `Standalone` ：单机模式

   这种模式下， `Nacos` 在单个节点上运行，适用于开发和测试环境。

2. `Cluster`：集群模式

   在集群模式下， `Nacos` 可以部署在多个节点上，以实现高可用性和扩展性。

**默认是集群模式**

打开bin文件夹下的`startup.cmd(Linux下为startup.sh)`，更改一处配置。

```bash
set MODE="cluster"
修改为
set MODE="standalone"
```

之后在`cmd`里面直接启动`startup.cmd`即可。

访问 `http://localhost:8848/nacos` ，即可访问服务，如果需要密码，默认账号密码是：`nacos/nacos`
