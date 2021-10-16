import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import "./github-config"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: [
      // Node-fetch@2.6.5 offers many platform support for fetch, such as nodejs, browser.
      // But it seems that vite can't pick a correct one implementation for browser.
      // So I have to fix this problem by adding this code.
      { find: "node-fetch", replacement: require.resolve("node-fetch/browser.js") }
    ]
  }
})
