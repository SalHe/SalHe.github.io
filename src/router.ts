import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
            meta: { title: "Home" }
        },
        {
            path: "/blog",
            component: Blog,
            meta: { title: "Blog" }
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
});