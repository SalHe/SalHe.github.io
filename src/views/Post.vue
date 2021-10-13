<script setup lang="ts">
import { inject, Ref, watchEffect } from 'vue';
import { Blog } from '../api/blogs';
import PostContent from '../components/PostContent.vue';
import { NEmpty } from "naive-ui";
import { useRoute } from 'vue-router';

const props = defineProps<{
  issueNumber: number
}>();

const blog = inject<Blog>("blog");
const themeMode = inject<Ref<"dark" | "light">>("themeMode");
const post = await blog?.getPostDetails(props.issueNumber);

const route = useRoute();
watchEffect(() => {
  route.fullPath; // watch route
  if (post?.title != null)
    document.title = `${post.title} - ${document.title}`;
});
</script>

<template>
  <n-empty v-if="post === undefined"></n-empty>
  <post-content v-else :post="post" :theme-mode="themeMode"></post-content>
</template>