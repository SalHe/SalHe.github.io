<script setup lang="ts">
import { profile } from "../person";
import { NH1, NSpace, NDivider } from "naive-ui";
import PersonProfile from "../components/PersonProfile.vue";
import Skills from "../components/Skills.vue";
import Projects from "./Projects.vue";
import type { Skill, TagType } from "../types";
import { useMyI18n } from "../i18n";

const { t } = useMyI18n();

function transformSkills(skills: string[]): Skill[] {
  const map: { [key in string]: TagType } = {
    "!": "primary",
  };
  return skills.map((x) => {
    const leading = x[0];
    let name = x;
    let type: TagType | undefined = undefined;
    if (leading in map) {
      name = name.substring(1);
      type = map[leading];
    }
    return { name, type };
  });
}
</script>

<template>
  <!-- TODO 响应式适配，主要针对打印 -->
  <n-space vertical style="max-width: 700px">
    <person-profile />
    <n-divider />
    <div>
      <n-h1>{{ t("skills.$") }}</n-h1>
      <template v-for="(skills, skillType) in profile.programming">
        <skills :title="skillType" :items="transformSkills(skills)" />
      </template>
      <n-h1>{{ t("projects.$") }}</n-h1>
      <Projects />
    </div>
  </n-space>
</template>
