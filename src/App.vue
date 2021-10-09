<script setup lang="ts">
import { NEmpty, NConfigProvider, NSpace, NLayout, NLayoutSider, NLayoutContent, useOsTheme, darkTheme } from 'naive-ui';
import { computed } from '@vue/reactivity';
import SiderProfile from './components/SiderProfile.vue';

const osThemeRef = useOsTheme();
const theme = computed(() => osThemeRef.value === 'dark' ? darkTheme : null);

</script>

<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider sider-placement="right" position="absolute">
      <n-layout-content>
        <!-- TODO 主内容区域 -->
        <n-space align="center" justify="center" style="height: 100%;">
          <n-empty description="这里还没放入实际的内容哦~"></n-empty>
        </n-space>
      </n-layout-content>
      <n-layout-sider show-trigger="bar" bordered :collapsed-width="0">
        <n-space vertical justify="center" align="center" style="height: 100%;">
          <sider-profile></sider-profile>
        </n-space>
      </n-layout-sider>
    </n-layout>
  </n-config-provider>
</template>