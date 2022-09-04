<script setup lang="ts">
import { NH1, NSpace, NButton, NTooltip, NTag, NIcon, NA, NAvatar, NCard, NTime } from "naive-ui";
import { LogoGithub, ThumbsUpOutline, ChatboxOutline } from "@vicons/ionicons5";
import 'md-editor-v3/lib/style.css';
import MDEditor from "md-editor-v3";
import { useRouter } from 'vue-router';
import { Post } from '../api/blogs';
import { useThemeMode } from "../use";

const themeMode = useThemeMode();

defineProps<{
  post: Post,
}>();

const router = useRouter();

</script>

<template>
  <n-card>
    <template #header>
      <router-link :to="`/post/${post.number}`" style="text-decoration: inherit; color: inherit;">
        <n-h1 prefix="bar" align-text>{{ post.title }}</n-h1>
      </router-link>
    </template>
    <template #header-extra>
      <a :href="post.html_url" target="_blank" style="text-decoration: inherit; color: inherit;">
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
        <!-- TODO custom comment click event -->
        <n-button text @click="router.push(`/post/${post.number}`)">
          <n-icon>
            <ChatboxOutline />
          </n-icon>
          <span style="margin-left: 5px;">{{ post.reactions?.['+1'] }}</span>
        </n-button>
      </n-space>
    </template>
  </n-card>
</template>