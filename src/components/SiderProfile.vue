<script setup lang="ts">
import { NH2, NH5, NP, NAvatar, NSpace, NIcon } from 'naive-ui';
import { LogoGithub, Heart, Location } from '@vicons/ionicons5';
import { profile } from "../person";

const links = [
    {
        link: "https://github.com/SalHe",
        title: "Github",
        icon: LogoGithub,
        newWindow: true
    },
    {
        link: "https://www.china.com/",
        title: "China",
        icon: Location,
        newWindow: true
    },
    {
        link: "https://salhe.github.io/SalHeLetty",
        title: "SalHe & Letty",
        icon: Heart,
        newWindow: false
    },
];
</script>

<template>
    <n-space vertical>
        <n-avatar round :size="180" :src="profile.avatarUrl"></n-avatar>
        <n-h2 style="margin: 0;">{{ profile.realName }}</n-h2>
        <n-h5 style="margin: 0;">{{ profile.nickName }}</n-h5>
        <n-p style="margin: 0;">{{ profile.slogan }}</n-p>
        <a v-for="link of links" :href="link.link" :target="link.newWindow ? '_blank' : undefined">
            <n-space :size="5">
                <n-icon size="medium">
                    <component :is="link.icon"></component>
                </n-icon>
                {{ link.title }}
            </n-space>
        </a>
    </n-space>
</template>