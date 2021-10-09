<script setup lang="ts">
import { NH1, NH2, NTag, NConfigProvider, NSpace, NLayout, NLayoutSider, NLayoutContent, NDivider, useOsTheme, darkTheme } from 'naive-ui';
import { computed, ref } from '@vue/reactivity';
import SiderProfile from './components/SiderProfile.vue';
import PersonProfile from './components/PersonProfile.vue';
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
          <person-profile></person-profile>
          <n-divider></n-divider>
          <div>
            <n-h1>Skills</n-h1>
            <n-h2>Languages</n-h2>
            <n-space>
              <n-tag v-for="lang of profile.programming.languages">{{ lang }}</n-tag>
            </n-space>
            <n-h2>Platforms</n-h2>
            <n-space>
              <n-tag v-for="platform of profile.programming.platforms">{{ platform }}</n-tag>
            </n-space>
            <n-h2>Frameworks</n-h2>
            <n-space>
              <n-tag v-for="framework of profile.programming.frameworks">{{ framework }}</n-tag>
            </n-space>
            <n-h2>IDEs</n-h2>
            <n-space>
              <n-tag v-for="ide of profile.programming.ides">{{ ide }}</n-tag>
            </n-space>
            <n-h2>Systems</n-h2>
            <n-space>
              <n-tag v-for="system of profile.programming.systems">{{ system }}</n-tag>
            </n-space>
          </div>
        </n-space>
      </n-layout-content>
    </n-layout>
  </n-config-provider>
</template>