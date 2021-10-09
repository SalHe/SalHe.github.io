<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import avatarUrl from './assets/SalHe.png';
import { NH2, NH5, NP, NEmpty, NAvatar, NConfigProvider, NSpace, NLayout, NLayoutSider, NLayoutContent, NIcon, useOsTheme, darkTheme } from 'naive-ui';
import { computed } from '@vue/reactivity';
import { LogoGithub, Location } from "@vicons/ionicons5";

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
          <n-avatar round :size="160" :src="avatarUrl"></n-avatar>
          <n-h2 style="margin: 0;">SalHe Li</n-h2>
          <n-h5 style="margin: 0;">SalHe</n-h5>
          <n-p style="margin: 0;">I wanna be free.</n-p>
          <a href="https://github.com/SalHe" target="_blank">
            <n-space :size="5" justify="center">
              <n-icon size="medium">
                <LogoGithub />
              </n-icon>Github
            </n-space>
          </a>
          <n-space :size="5" justify="center">
            <n-icon size="medium">
              <Location />
            </n-icon>China
          </n-space>
        </n-space>
      </n-layout-sider>
    </n-layout>
  </n-config-provider>
</template>