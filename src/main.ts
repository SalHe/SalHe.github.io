import { Octokit } from 'octokit';
import { createApp } from 'vue'
import { isNavigationFailure } from 'vue-router';
import { Blog } from './api/blogs';
import App from './App.vue'
import { profile } from './person';
import { router } from "./router";

router.afterEach((to, from, failure) => {
    if (!isNavigationFailure(failure)) {
        window.document.title = "SalHe's | " + to.meta.title;
    }
});

createApp(App)
    .use(router)
    .provide("blog", new Blog(new Octokit(), profile))
    .mount('#app')
