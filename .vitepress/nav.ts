export default [
  { text: "首页", link: "/" },
  // 前端导航
  {
    text: "前端",
    items: [
      {
        text: "基础",
        items: [
          { text: "HTML", link: "/programming/front/basis/HTML" },
          { text: "CSS", link: "/programming/front/basis/CSS" },
          { text: "JavaScript", link: "/programming/front/basis/JavaScript" },
          { text: "TypeScript", link: "/programming/front/basis/TypeScript" },
          { text: "jQuery", link: "/programming/front/basis/jQuery" },
          { text: "Node", link: "/programming/front/basis/Node" },
        ],
      },
      {
        text: "框架",
        items: [
          { text: "Vue2", link: "/programming/front/frame/Vue2" },
          { text: "Vue3", link: "/programming/front/frame/Vue3" },
          { text: "BootStrap", link: "/programming/front/frame/BootStrap" },
        ],
      },
    ],
  },
  // 后端导航
  {
    text: "后端",
    items: [
      {
        text: "基础",
        items: [{ text: "初识Java", link: "/programming/back/basis/初识Java" }],
      },
      {
        text: "框架",
        items: [
          { text: "SpringBoot", link: "/programming/back/frame/SpringBoot" },
        ],
      },
    ],
  },
  // 移动端导航
  {
    text: "移动端",
    items: [
      {
        text: "鸿蒙开发",
        items: [
          {
            text: "初识鸿蒙",
            link: "/programming/mobile/HarmonyOS/basis/初识鸿蒙",
          },
          { text: "ArkTS", link: "/programming/mobile/HarmonyOS/basis/ArkTS" },
        ],
      },
      {
        text: "小程序",
        items: [
          {
            text: "微信小程序",
            link: "/programming/mobile/applet/WeChat/微信小程序",
          },
        ],
      },
      {
        text: "uni-app",
        items: [
          {
            text: "uni-app入门",
            link: "/programming/mobile/uni-app/uni-app入门",
          },
        ],
      },
    ],
  },
  // 桌面端导航
  {
    text: "桌面端",
    items: [
      {
        text: "Electron",
        items: [
          {
            text: "Electron入门",
            link: "/programming/desktop/electron/basis/Electron入门",
          },
          {
            text: "Q&A",
            link: "/programming/desktop/electron/basis/Q&A",
          },
        ],
      },
      {
        text: "脚手架",
        items: [
          {
            text: "electron-vite",
            link: "/programming/desktop/electron/frame/electron-vite",
          },
        ],
      },
    ],
  },
  // 环境配置导航
  {
    text: "环境配置",
    items: [
      {
        text: "数据库",
        items: [
          {
            text: "MySQL配置",
            link: "/programming/environment/database/MySQL/MySQL配置",
          },
          {
            text: "MongDB配置",
            link: "/programming/environment/database/MongoDB/MongoDB配置",
          },
          {
            text: "Redis配置",
            link: "/programming/environment/database/Redis/Redis配置",
          },
        ],
      },
      {
        text: "编程环境",
        items: [
          { text: "JDK配置", link: "/programming/environment/JDK配置" },
          { text: "Maven配置", link: "/programming/environment/Maven配置" },
          { text: "Nacos配置", link: "/programming/environment/Nacos配置" },
          { text: "Docker配置", link: "/programming/environment/Docker配置" },
        ],
      },
    ],
  },
  // 软件配置导航
  {
    text: "软件配置",
    items: [
      {
        text: "前端工具",
        items: [
          {
            text: "Typora图床配置",
            link: "/programming/configuration/Typora配置",
          },
          { text: "VSCode配置", link: "/programming/configuration/VSCode配置" },
        ],
      },
      {
        text: "后端工具",
        items: [
          { text: "IDEA配置", link: "/programming/configuration/IDEA配置" },
        ],
      },
      {
        text: "其他配置",
        items: [
          {
            text: "终端美化",
            link: "/programming/configuration/终端美化",
          },
        ],
      },
    ],
  },
  // 拓展导航
  {
    text: "拓展",
    items: [
      {
        text: "版本控制器",
        items: [
          { text: "Git配置", link: "/programming/expand/git/Git配置" },
          { text: "Git学习", link: "/programming/expand/git/Git学习" },
        ],
      },
      {
        text: "工程化",
        items: [
          {
            text: "前端工程化",
            link: "/programming/expand/engineering/前端工程化",
          },
        ],
      },
      {
        text: "Docker",
        items: [
          {
            text: "Docker容器",
            link: "/programming/expand/docker/Docker容器",
          },
        ],
      },
    ],
  },
  // 个人作品
  {
    text: "个人作品",
    items: [
      {
        text: "主题",
        items: [
          { text: "Typora主题", link: "/programming/project/Typora主题" },
        ],
      },
    ],
  },
];
