import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { prismjsPlugin } from 'vite-plugin-prismjs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    prismjsPlugin({
      languages: 'all', // 语言
      plugins: ['line-numbers', 'show-language', 'copy-to-clipboard', 'inline-color'],
      theme: 'okaidia',// 主题
      css: true,
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/globalVar.scss";@import "@/styles/globalMixin.scss";'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
    }
  }

})
