import { Octokit } from 'octokit';
import { createOAuthAppAuth } from "@octokit/auth-oauth-app";
import { createApp } from 'vue'
import { isNavigationFailure } from 'vue-router';
import { Blog } from './api/blogs';
import App from './App.vue'
import { profile } from './person';
import { router } from "./router";
import GithubClientConfig from "github-client";

router.afterEach((to, from, failure) => {
    if (!isNavigationFailure(failure)) {
        window.document.title = "SalHe's | " + to.meta.title;
    }
});

const octokit = new Octokit({
    authStrategy: createOAuthAppAuth,
    auth: GithubClientConfig
});

createApp(App)
    .use(router)
    .provide("blog", new Blog(octokit, profile))
    .mount('#app');