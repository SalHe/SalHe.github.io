<script setup lang="ts">
import { inject } from "@vue/runtime-core";
import { NSpace, NEmpty } from "naive-ui";
import { Blog } from "../api/blogs";
import { Ref } from "vue";
import { useRoute } from "vue-router";
import PostContent from "../components/PostContent.vue";

const blog = inject<Blog>("blog");
const posts = await blog?.listPost();

const themeMode = inject<Ref<"dark" | "light">>("themeMode");

// Auto scroll to anchor (due to special reason, anchor can't work properly.)
const route = useRoute();
(async () => {
  let count = 0;
  const timer = setInterval(() => {
    if (count >= 10 || route.hash === "") {
      clearInterval(timer);
      return;
    }
    count++;
    const anchor = document.querySelector(route.hash);
    if (anchor != null) {
      anchor.scrollIntoView(true);
      clearInterval(timer);
    }
  }, 500);
})().then(() => { });
</script>

<template>
  <n-space
    v-if="!posts || posts.length <= 0"
    align="center"
    justify="center"
    style="align-self: center; justify-self: center; flex:1"
  >
    <n-empty description="No posts yet."></n-empty>
  </n-space>
  <n-space v-else vertical style="width: 100%;" size="large">
    <post-content v-for="post in posts" :post="post" :theme-mode="themeMode"></post-content>
  </n-space>
</template>