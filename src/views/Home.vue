<script setup lang="ts">
import { profile } from "../person";
import { NH1, NH2, NTag, NSpace, NDivider } from 'naive-ui';
import PersonProfile from "../components/PersonProfile.vue";
</script>


<template>
  <n-space vertical>
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
</template>