<script setup lang="ts">
import { NConfigProvider, NSpace, NLayout, NLayoutSider, NLayoutContent, useOsTheme, darkTheme } from 'naive-ui';
import { computed, ref } from '@vue/reactivity';
import SiderProfile from './components/SiderProfile.vue';
import PersonProfile from './components/PersonProfile.vue';
import { watchEffect } from '@vue/runtime-core';

const localTheme = localStorage.getItem("theme") || useOsTheme().value || 'dark';
const myTheme = ref(localTheme);
const theme = computed(() => myTheme.value === 'dark' ? darkTheme : null);

watchEffect(() => localStorage.setItem("theme", myTheme.value));

</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider sider-placement="right" position="absolute">
      <n-layout-content style="padding: 24px;">
        <n-space justify="center">
          <person-profile></person-profile>
        </n-space>
      </n-layout-content>
      <n-layout-sider show-trigger="bar" bordered :collapsed-width="0" default-collapsed>
        <n-space vertical justify="center" align="center" style="height: 100%;">
          <sider-profile v-model:theme="myTheme"></sider-profile>
        </n-space>
      </n-layout-sider>
    </n-layout>
  </n-config-provider>
</template>