<script setup lang="ts">
import { NH1, NText, NA, NAvatar, NThing, NSpace } from "naive-ui";
import { useI18n } from "vue-i18n";
import firstAvatarWithU from "../assets/loveu.jpg";
import { profile } from "../person";
const { t } = useI18n();
</script>

<template>
  <n-thing>
    <template #avatar>
      <n-avatar :size="168" :src="firstAvatarWithU"></n-avatar>
    </template>
    <template #header>
      <n-h1 style="margin-bottom: 0px">{{ t("profile.realName") }}</n-h1>
      <div style="margin-top: 2px; margin-bottom: 20px">
        <n-text>{{ t("profile.nickName") }}</n-text>
      </div>
    </template>
    <template #description>
      <n-space vertical :size="0">
        <n-text>{{ t("profile.major") }}</n-text>
        <n-text>{{ t("profile.school") }}</n-text>
        <n-text>
          {{ t("email") }}:
          <n-a :href="'mailto:' + profile.email">{{ profile.email }}</n-a>
        </n-text>
      </n-space>
    </template>
    <template #default>
      <n-text>{{ t("profile.description") }}</n-text>
    </template>
  </n-thing>
</template>
