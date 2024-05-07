/*
 * @Date: 2024-04-02 14:32:03
 * @作者: 七星玉蘅
 * @邮箱: 1532250426@qq.com
 * @LastEditTime: 2024-05-07 17:37:16
 * @FilePath: \docs\.vitepress\config.mts
 */
import { defineConfig } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点访问路径
  base: "/docs/",
  // 配置文件读取的位置
  srcDir: "docs/",
  // 语言
  lang: "zh-CN",
  // 代码块启用行号
  markdown: {
    lineNumbers: true,
  },
  // 站点标题
  title: "玉蘅文档库",
  description: "在线知识库",
  // 开启文章最后更新时间
  lastUpdated: true,
  themeConfig: {
    // 配置logo
    logo: "/logo.png",
    // 右侧边栏大纲
    outline: {
      level: "deep",
      label: "大纲",
    },
    // 显示外部链接图标
    externalLinkIcon: true,
    // 导航栏
    nav,
    // 侧边栏
    sidebar,
    // 搜索
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    // 社交链接
    socialLinks: [
      { icon: "github", link: "https://github.com/yuhengAlioth" },
      {
        icon: {
          svg: '<svg t="1711895596566" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4243" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4244"></path></svg>',
        },
        link: "https://gitee.com/aliothstar",
      },
    ],
    // 页脚
    footer: {
      copyright: "七星玉蘅 版权所有 © 2024-present 未经授权禁止转载！",
    },
    // 上一页下一页
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // 最后更新时间
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
});
