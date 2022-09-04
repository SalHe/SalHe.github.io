<script setup lang="ts">
import { inject } from "@vue/runtime-core";
import { NSpace, NEmpty } from "naive-ui";
import { Blog } from "../api/blogs";
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import PostContent from "../components/PostContent.vue";
import { useThemeMode } from "../use";

const blog = inject<Blog>("blog");
const posts = await blog?.listPost();

const themeMode = useThemeMode();

const route = useRoute();
watchEffect(() => {
  if (route.hash !== "") {
    document.querySelector(route.hash)?.scrollIntoView(true);
  }
});
</script>

<template>
  <n-space v-if="!posts || posts.length <= 0" align="center" justify="center"
    style="align-self: center; justify-self: center; flex:1">
    <n-empty description="No posts yet."></n-empty>
  </n-space>
  <n-space v-else vertical style="width: 100%;" size="large">
    <post-content v-for="post in posts" :post="post" :theme-mode="themeMode"></post-content>
  </n-space>
</template>