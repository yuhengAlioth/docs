# JDK配置

## 一、下载

[Java官网](https://www.oracle.com/cn/java/technologies/downloads/)

[jdk17解压版本](https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.zip)

[jdk17安装版本](https://download.oracle.com/java/17/latest/jdk-17_windows-x64_bin.exe)

## 二、安装解压版

1. 解压到文件夹

2. 配置系统环境变量

   ==此电脑->右键->属性->高级系统设置->环境变量->系统环境变量==

   | 新建系统变量 |                                     |
   | ------------ | ----------------------------------- |
   | 变量名       | JAVA_HOME                           |
   | 变量值       | 解压JDK的路径                       |
   |              | 例如：D:\Environmnt\Java\jdk-17.0.2 |

3. 配置系统环境变量中`Path`里面添加变量

   `%JAVA_HOME%\bin`

4. 检测是否安装成功

   ```shll
   java -version
   ```

   