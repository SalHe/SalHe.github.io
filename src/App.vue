<script setup lang="tsx">
import {
  NMenu,
  NAvatar,
  NButton,
  NText,
  NSwitch,
  NConfigProvider,
  NSpace,
  NLayout,
  NLayoutHeader,
  NLayoutSider,
  NLayoutContent,
  darkTheme,
  MenuGroupOption,
  MenuOption,
} from "naive-ui";
import SiderProfile from "./components/SiderProfile.vue";
import { profile } from "./person";
import { useDark, useLocalStorage } from "@vueuse/core";
import { useLocale } from "./use";
import { useMyI18n } from "./i18n";

const isDark = useDark();
const siderCollapsed = useLocalStorage("siderCollapsed", true);
const { switch: switchLocale } = useLocale();

const { t } = useMyI18n();

const navMenuOptions: (MenuOption | MenuGroupOption)[] = [
  {
    label: () => (
      <router-link to="/">
        <NSpace
          justify="center"
          align="center"
          style="margin: 0;"
          item-style="display: flex; align-items: center;"
          size={5}
        >
          <NAvatar src={profile.avatarUrl} round size={20}></NAvatar>
          <NText type="info" strong>
            {t("website")}
          </NText>
        </NSpace>
      </router-link>
    ),
    key: "home",
  },
  {
    label: () => <a href="https://salhe.github.io/blog">{t("blog")}</a>,
    key: "blog",
  },
];
</script>

<template>
  <n-config-provider :theme="isDark ? darkTheme : null">
    <n-layout position="absolute">
      <!-- 顶部导航栏 -->
      <n-layout-header
        position="absolute"
        style="height: 70px; padding: 20px"
        bordered
      >
        <n-space justify="space-between">
          <!-- Menus -->
          <n-menu mode="horizontal" :options="navMenuOptions"></n-menu>
          <n-space>
            <n-button quaternary @click="switchLocale">中文/EN</n-button>
            <!-- Theme switcher -->
            <n-switch v-model:value="isDark">
              <template #checked>🌙{{ t("theme.dark") }}</template>
              <template #unchecked>🌞{{ t("theme.light") }}</template>
            </n-switch>
          </n-space>
        </n-space>
      </n-layout-header>

      <!-- the height of main area equals screen's height minus 70px for header. -->
      <n-layout
        position="absolute"
        style="top: 70px; height: calc(100vh - 70px)"
        has-sider
      >
        <!-- 侧边菜单栏 -->
        <n-layout-sider
          show-trigger="bar"
          bordered
          :collapsed-width="0"
          :default-collapsed="siderCollapsed"
          :native-scrollbar="false"
          @update:collapsed="(v) => (siderCollapsed = v)"
          content-style="height: 100%"
        >
          <n-space
            vertical
            justify="center"
            align="center"
            style="height: 100%"
          >
            <sider-profile></sider-profile>
          </n-space>
        </n-layout-sider>

        <!-- 主内容区 -->
        <!-- I hope main content fill height of reset at least. -->
        <n-layout-content
          :native-scrollbar="false"
          content-style="height: 100%"
        >
          <n-space
            vertical
            style="padding: 20px 5vw; min-height: calc(100% - 40px)"
            item-style="flex: 1; display: flex; align-self: center;"
          >
            <!-- I hope n-space's unique child fill height. -->
            <!-- And make its child `display: flex` to control alignment in router-view. -->
            <!-- Otherwise, in default align router-view to center of content area. -->
            <suspense>
              <router-view></router-view>
            </suspense>
          </n-space>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<style>
.md,
.md-dark {
  background-color: transparent !important;
}
</style>
