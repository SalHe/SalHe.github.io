<script setup lang="ts">
import { profile } from "../person";
import { NH1, NSpace, NDivider } from 'naive-ui';
import PersonProfile from "../components/PersonProfile.vue";
import Skills from "../components/Skills.vue";
import type { Skill, TagType } from "../types";

function capitalizeString(str:string): string {
  if(str.length <= 1) return str;
  return str[0].toUpperCase() + str.substring(1); 
}

function transformSkills(skills:string[]): Skill[]{
  const map:{[key in string]: TagType} = {
    "!": "primary"
  };
  return skills.map(x => {
    const leading = x[0];
    let name = x;
    let type: TagType | undefined = undefined;
    if(leading in map){
      name = name.substring(1);
      type = map[leading];
    }
    return { name, type }
  });
}
</script>

<template>
  <n-space vertical>
    <person-profile></person-profile>
    <n-divider />
    <div>
      <n-h1>Skills</n-h1>
      <template v-for="skills, skillType in profile.programming">
        <skills :title="capitalizeString(skillType)" :items="transformSkills(skills)" />
      </template>
    </div>
  </n-space>
</template>