export default {
  // 当用户位于选择的目录时，会显示此侧边栏
  // 前端
  "/programming/front/": [
    {
      text: "前端知识库",
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
          ],
        },
      ],
    },
  ],
  // 后端
  "/programming/back/": [
    {
      text: "后端知识库",
      items: [
        {
          text: "JAVA",
          items: [
            { text: "初识Java", link: "/programming/back/basis/初识Java" },
          ],
        },
        {
          text: "框架",
          items: [
            { text: "SpringBoot", link: "/programming/back/frame/SpringBoot" },
          ],
        },
      ],
    },
  ],
  // 移动端
  "/programming/mobile/": [
    {
      text: "移动端",
      items: [
        {
          text: "鸿蒙",
          items: [
            {
              text: "初识鸿蒙",
              link: "/programming/mobile/HarmonyOS/basis/初识鸿蒙",
            },
            {
              text: "ArkTS",
              link: "/programming/mobile/HarmonyOS/basis/ArkTS",
            },
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
  ],
  // 桌面端
  "/programming/desktop/": [
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
  ],
  // 软件配置
  "/programming/configuration/": [
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
            {
              text: "VSCode配置",
              link: "/programming/configuration/VSCode配置",
            },
          ],
        },
        {
          text: "后端工具",
          items: [
            { text: "IDEA配置", link: "/programming/configuration/IDEA配置" },
          ],
        },
      ],
    },
  ],
  // 环境配置
  "/programming/environment/": [
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
  ],
  // 拓展
  "/programming/expand/": [
    {
      text: "拓展内容",
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
      ],
    },
  ],
};
