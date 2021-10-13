<script setup lang="ts">
import { inject } from "@vue/runtime-core";
import { NH1, NSpace, NButton, NTooltip, NTag, NEmpty, NIcon, NA, NAvatar, NCard, NTime } from "naive-ui";
import { Blog } from "../api/blogs";
import { LogoGithub, ThumbsUpOutline, ChatboxOutline } from "@vicons/ionicons5";
import 'md-editor-v3/lib/style.css';
import MDEditor from "md-editor-v3";
import { Ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const blog = inject<Blog>("blog");
const posts = await blog?.listPost();

const themeMode = inject<Ref<"dark" | "light">>("themeMode");

const router = useRouter();

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
    <n-card v-for="post of posts" :key="post.number">
      <template #header>
        <router-link :to="`/post/${post.number}`">
          <n-h1 prefix="bar" align-text>{{ post.title }}</n-h1>
        </router-link>
      </template>
      <template #header-extra>
        <a :href="post.html_url" target="_blank">
          <n-icon size="26">
            <LogoGithub />
          </n-icon>
        </a>
      </template>
      <template #default>
        <m-d-editor
          :modelValue="post.body || ''"
          preview-only
          :theme="themeMode"
          language="en-US"
          :editor-id="`post${post.number}`"
        ></m-d-editor>
      </template>
      <template #footer>
        <n-space
          align="center"
          item-style="display: flex; flex-direction: column; align-items: center;"
        >
          <n-a :href="post.user?.html_url" target="_blank">
            <n-avatar :src="post.user?.avatar_url" :size="20" round></n-avatar>
          </n-a>
          <n-time :time="new Date(post.created_at)"></n-time>
          <n-tooltip v-for="label in post.labels" trigger="hover" :show-arrow="false">
            <template #trigger>
              <n-tag
                :color="typeof label === 'string' ? undefined : { borderColor: `#${label.color}` || undefined, textColor: `#${label.color}` || undefined }"
              >{{ typeof label == 'string' ? label : label.name }}</n-tag>
            </template>
            <span>{{ typeof label == 'string' ? label : label.description }}</span>
          </n-tooltip>
          <n-button text>
            <!-- TODO implements LIKE -->
            <n-icon>
              <ThumbsUpOutline />
            </n-icon>
            <span style="margin-left: 5px;">{{ post.reactions?.['+1'] }}</span>
          </n-button>
          <n-button text @click="router.push(`/post/${post.number}`)">
            <n-icon>
              <ChatboxOutline />
            </n-icon>
            <span style="margin-left: 5px;">{{ post.reactions?.['+1'] }}</span>
          </n-button>
        </n-space>
      </template>
    </n-card>
  </n-space>
</template>