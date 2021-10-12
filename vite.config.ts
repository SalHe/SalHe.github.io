import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vitejs/plugin-vue-jsx"
import fs from "fs";

function read(file: string, environment: string): string {
  return fs.existsSync(file) ? fs.readFileSync(file).toString() : process.env[environment];
}

// Auto fetch client id/secret from file(for development) or environment variables(for CI/CD).
const clientId = read("./github-client-id", "CLIENT_ID");
const clientSecret = read("./github-client-secret", "CLIENT_SECRET");
fs.writeFileSync(
  "./src/github-client.ts",
  "export default "
  + JSON.stringify({
    clientId,
    clientSecret,
    explain: "Please do not use this client id and secret out of here."
  }));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  alias: [
    // Node-fetch@2.6.5 offers many platform support for fetch, such as nodejs, browser.
    // But it seems that vite can't pick a correct one implementation for browser.
    // So I have to fix this problem by adding this code.
    { find: "node-fetch", replacement: require.resolve("node-fetch/browser.js") }
  ]
})
