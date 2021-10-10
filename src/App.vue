<script setup lang="ts">
import { NConfigProvider, NSpace, NLayout, NLayoutSider, NLayoutContent, useOsTheme, darkTheme } from 'naive-ui';
import { computed, ref } from '@vue/reactivity';
import SiderProfile from './components/SiderProfile.vue';
import { watchEffect } from '@vue/runtime-core';

const localTheme = localStorage.getItem("theme") || useOsTheme().value || 'dark';
const myTheme = ref(localTheme);
const theme = computed(() => myTheme.value === 'dark' ? darkTheme : null);
const screenWidth = window.window.screen.availWidth;

watchEffect(() => localStorage.setItem("theme", myTheme.value));

</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider position="absolute">
      <n-layout-sider
        show-trigger="bar"
        bordered
        :collapsed-width="0"
        :default-collapsed="screenWidth <= 360"
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
  </n-config-provider>
</template>