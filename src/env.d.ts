/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module "github-client" {
  const GithubClientConfig: {
    clientId: string;
    clientSecret: string;
    explain: string;
  }
  export default GithubClientConfig;
}