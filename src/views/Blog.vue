<script setup lang="ts">
import { inject } from "@vue/runtime-core";
import { NSpace, NEmpty, NIcon, NA, NAvatar, NText, NCard, NTime } from "naive-ui";
import { Blog } from "../api/blogs";
import { LogoGithub } from "@vicons/ionicons5";

const blog = inject<Blog>("blog");
const posts = await blog?.listPost();
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
                    <n-text>{{ post.title }}</n-text>
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
                <n-text>{{ post.body }}</n-text>
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
                </n-space>
            </template>
        </n-card>
    </n-space>
</template>