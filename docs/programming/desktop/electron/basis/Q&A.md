# 常见问题
## 自定义安装位置

electron-vite 项目打包设置

```yaml
# 添加如下代码
nsis:
	
	....
	
  # 修改安装位置
  oneClick: false
  allowToChangeInstallationDirectory: true
```

## 多窗口场景

### React框架

使用 `hash` 路由进行切换页面的情况，在被打开的页面的主进程中创建窗口里配置

```typescript
import url from 'node:url'


if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
	configWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#config')
} else {
	// 解决打包后软件窗口跳转失败问题
	configWindow.loadURL(
		url.format({
			// 编译后的文件路径
			pathname: join(__dirname, '../renderer/index.html'),
			// URL 的协议部分
			protocol: 'file',
			// 使用两个斜杠 / 连接协议和路径
			slashes: true,
			// hash 的值，URL 的散列部分
			hash: 'config',
		}),
	)
}
```

## 使用 SQLite 数据库

node 环境下使用
[better-sqlite3](https://github.com/WiseLibs/better-sqlite3)
[node-sqlite3: SQLite3 bindings for Node.js](https://github.com/TryGhost/node-sqlite3)

### better-sqlite3

安装

```bash
pnpm install better-sqlite3
```

安装类型支持

```bash
pnpm install @types/better-sqlite3
```

构建为 electron 支持的方式

```bash
pnpm install --save-dev electron-rebuild
```

项目目录执行
Windows:

```bash
.\node_modules\.bin\electron-rebuild.cmd

# 或

npx electron-rebuild
```





