<script lang="ts" setup>
import { NCard, NA, NTag, NSpace } from "naive-ui";
import { TagType } from "../types";

defineProps<{
  name: string,
  url: string,
  type?: "Study",
  tags?: string[]
}>();

const typeTagMap:{[key in string]: TagType} = {
  "Study": "info"
};
</script>

<template>
  <n-card>
    <template #header>
      <n-a :href="url" target="blank">{{ name }}</n-a>
    </template>
    <template #header-extra v-if="type">
      <n-tag :type="typeTagMap[type!]">{{ type }}</n-tag>
    </template>
    <template #footer v-if="tags">
      <n-space justify="end">
        <n-tag v-for="tag in tags" :key="tag">{{ tag }}</n-tag>
      </n-space>
    </template>
    <slot />
  </n-card>
</template>