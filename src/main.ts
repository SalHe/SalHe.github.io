import { createApp } from 'vue'
import { isNavigationFailure } from 'vue-router';
import App from './App.vue'
import { router } from "./router";

router.afterEach((to, from, failure) => {
    if (!isNavigationFailure(failure)) {
        window.document.title = "SalHe's | " + to.meta.title;
    }
});

createApp(App)
    .use(router)
    .mount('#app')
