import { defineConfig } from "vitepress";
// import { componentPreview, containerPreview } from "@vitepress-demo-preview/plugin"
import path from "path";

import vueJsx from "@vitejs/plugin-vue-jsx";
// import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import sidebar from "./config/sidebar";
import nav from "./config/nav";
import { mdPlugin } from "./config/plugins";

export default defineConfig({
  // base: "/",
  title: "ElementPlus Kit",
  description: "基于 ElementPlus 的组件生成器",
  head: [
    ['link', { rel: 'icon', href: 'logo.png' }],
    ["meta", { name: 'referrer', content: 'no-referrer' }]
  ],
  themeConfig: {
    logo: 'logo.png',
    outline: [2, 3],
    nav, //头部导航
    sidebar, //侧边栏
    search: {
      provider: 'local'
    }
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    lineNumbers: true,
    config(md) {
      mdPlugin(md);
    },
  },
  vite: {
    plugins: [vueJsx()],
    resolve: {
      alias: {
        "@alias": path.resolve(__dirname, "../"),
      },
    },
  },
});
