<script setup lang="ts">
import { inject, Ref } from 'vue';
import { useRoute } from 'vue-router';
import { Blog } from '../api/blogs';
import PostContent from '../components/PostContent.vue';
import { NEmpty } from "naive-ui";

const props = defineProps<{
  issue_number: number
}>();

const blog = inject<Blog>("blog");
const themeMode = inject<Ref<"dark" | "light">>("themeMode");
const post = await blog?.getPostDetails(props.issue_number);
</script>

<template>
  <n-empty v-if="post === undefined"></n-empty>
  <post-content v-else :post="post" :theme-mode="themeMode"></post-content>
</template>