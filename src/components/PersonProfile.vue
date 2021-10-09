<script setup lang="ts">
import { profile } from "../person";
import { NH1, NText, NA, NAvatar, NThing, NSpace } from 'naive-ui';
import firstAvatarWithU from "../assets/loveu.jpg";
</script>

<template>
    <n-thing style="max-width: 600px;">
        <template #avatar>
            <n-avatar :size="168" :src="firstAvatarWithU"></n-avatar>
        </template>
        <template #header>
            <n-h1 style="margin-bottom: 0px;">{{ profile.realName }}</n-h1>
            <div style="margin-top: 2px; margin-bottom: 20px;">
                <n-text>{{ profile.nickName }}</n-text>
            </div>
        </template>
        <template #description>
            <n-space vertical :size="0">
                <n-text>{{ profile.major }}</n-text>
                <n-text>{{ profile.school }}</n-text>
                <n-text>
                    Email:
                    <n-a :href="'mailto:' + profile.email">{{ profile.email }}</n-a>
                </n-text>
            </n-space>
        </template>
        <template #default>
            <n-text>{{ profile.description }}</n-text>
        </template>
    </n-thing>
</template>