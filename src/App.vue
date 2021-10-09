<script setup lang="ts">
import { NH1, NText, NA, NAvatar, NThing, NConfigProvider, NSpace, NLayout, NLayoutSider, NLayoutContent, useOsTheme, darkTheme } from 'naive-ui';
import { computed } from '@vue/reactivity';
import SiderProfile from './components/SiderProfile.vue';
import PersonProfile from './components/PersonProfile.vue';

const osThemeRef = useOsTheme();
const theme = computed(() => osThemeRef.value === 'dark' ? darkTheme : null);

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
          <sider-profile></sider-profile>
        </n-space>
      </n-layout-sider>
    </n-layout>
  </n-config-provider>
</template>