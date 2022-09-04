<script lang="ts" setup>
import { NSpace, NH2, NTag } from "naive-ui";
import type { Skill } from "../types";

const props = defineProps<{
    title: string,
    items: Skill[]
}>();
</script>

<template>
  <n-h2>{{ props.title }}</n-h2>
  <n-space>
    <n-tag v-for="item of props.items" :type="item.type">{{ item.name }}</n-tag>
  </n-space>
</template>