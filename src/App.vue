<script setup lang="ts">
import { NAvatar, NText, NConfigProvider, NSpace, NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, useOsTheme, darkTheme } from 'naive-ui';
import { computed, ref } from '@vue/reactivity';
import SiderProfile from './components/SiderProfile.vue';
import { watchEffect } from '@vue/runtime-core';
import { profile } from "./person";

const localTheme = localStorage.getItem("theme") || useOsTheme().value || 'dark';
const myTheme = ref(localTheme);
const theme = computed(() => myTheme.value === 'dark' ? darkTheme : null);
const screenWidth = window.window.screen.availWidth;

watchEffect(() => localStorage.setItem("theme", myTheme.value));

</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout position="absolute">
      <n-layout-header position="absolute" style="height: 70px; padding: 20px;" bordered>
        <n-space>
          <a href="/">
            <n-space
              justify="center"
              align="center"
              style="margin: 0;"
              item-style="display: flex; align-items: center;"
              :size="5"
            >
              <n-avatar :src="profile.avatarUrl" round :size="20"></n-avatar>
              <n-text type="info" strong>SalHe's Home</n-text>
            </n-space>
          </a>
        </n-space>
      </n-layout-header>
      <n-layout position="absolute" style="top: 70px;" has-sider>
        <n-layout-sider
          show-trigger="bar"
          bordered
          :collapsed-width="0"
          :default-collapsed="screenWidth <= 360"
          :native-scrollbar="false"
          content-style="height: 100%"
        >
          <n-space vertical justify="center" align="center" style="height: 100%;">
            <sider-profile v-model:theme="myTheme"></sider-profile>
          </n-space>
        </n-layout-sider>
        <n-layout-content :native-scrollbar="false">
          <n-space vertical style="padding: 20px 5vw;">
            <router-view></router-view>
          </n-space>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>