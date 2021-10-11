import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./views/Home.vue";
import Blog from "./views/Blog.vue";
import Post from "./views/Post.vue";

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
            path: "/post/:issue_number",
            component: Post,
            meta: { title: "Post" },
            props: true
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
});