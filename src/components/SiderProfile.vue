<script setup lang="ts">
import { NH2, NH5, NP, NAvatar, NSpace, NIcon } from "naive-ui";
import { LogoGithub, Heart, Location } from "@vicons/ionicons5";
import { profile } from "../person";
import { useMyI18n } from "../i18n";

const { t } = useMyI18n();
const links = [
  {
    link: "https://www.china.com/",
    title: t("profile.location"),
    icon: Location,
    newWindow: true,
  },
  {
    link: "https://github.com/SalHe",
    title: "Github",
    icon: LogoGithub,
    newWindow: true,
  },
  {
    link: "https://salhe.github.io/SalHeLetty",
    title: "SalHe & Letty",
    icon: Heart,
    newWindow: false,
  },
];
</script>

<template>
  <n-space vertical>
    <n-avatar round :size="180" :src="profile.avatarUrl"></n-avatar>
    <n-h2 style="margin: 0">{{ t("profile.realName") }}</n-h2>
    <n-h5 style="margin: 0">{{ t("profile.nickName") }}</n-h5>
    <n-p style="margin: 0">{{ t("profile.slogan") }}</n-p>
    <a
      style="text-decoration: inherit; color: inherit"
      v-for="link of links"
      :href="link.link"
      :target="link.newWindow ? '_blank' : undefined"
    >
      <n-space :size="5">
        <n-icon size="medium">
          <component :is="link.icon"></component>
        </n-icon>
        {{ link.title }}
      </n-space>
    </a>
  </n-space>
</template>
