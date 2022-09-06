<script setup lang="ts">
import { profile } from "../person";
import { NH1, NSpace, NDivider, NGrid, NGridItem, NA } from 'naive-ui';
import PersonProfile from "../components/PersonProfile.vue";
import Skills from "../components/Skills.vue";
import type { Skill, TagType } from "../types";
import Project from "../components/Project.vue";

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
  <!-- TODO 响应式适配，主要针对打印 -->
  <n-space vertical>
    <person-profile></person-profile>
    <n-divider />
    <div>
      <n-h1>Skills</n-h1>
      <template v-for="skills, skillType in profile.programming">
        <skills :title="capitalizeString(skillType)" :items="transformSkills(skills)" />
      </template>
      <n-h1>Projects</n-h1>
      <n-grid responsive="self" x-gap="12" y-gap="12" cols="2 800:4 1200:6">
        <n-grid-item :span="2">
          <project name="ebuild" url="https://salhe.github.io/ebuild/" :tags="['Build','Tool','Automate','CI']">
            A build tool for EPL, based on ECL and E2TXT, purely written in C# (in Go previously).
            Aimed to automate the building process, assist the VCS/Diff, manage the sources file for EPL.
            It's well documented and friendly for beginner.
          </project>
        </n-grid-item>
        <n-grid-item :span="2">
          <project name="QiaQia Course System" url="https://github.com/SE2022-Qiaqia" type="Study"
            :tags="['Gin', 'Vue3', 'Vite', 'Docker', 'VuePress']">
            This project is for one course in Wuhan University. Although it's a project for study,
            it's built on many modern technologies.
            <br>

            Such as <n-a href="https://github.com/SE2022-Qiaqia/back-end-go">web api based on Gin and
              Golang</n-a>
            and <n-a href="https://github.com/SE2022-Qiaqia/back-end">on Spring (not completed due to
              lack of time)</n-a>,
            <n-a href="https://github.com/SE2022-Qiaqia/front-end">web ui based on Vue3/Vuex4/Vite</n-a>
            (you can explorer our web ui <n-a href="https://se2022-qiaqia.github.io/front-end">here</n-a>
            ).
            Besides, <n-a href="https://github.com/SE2022-Qiaqia/docker">Docker deployment</n-a> is
            supported.

            <br>
            If you want to learn more about this project, you can go to its <n-a
              href="https://se2022-qiaqia.github.io/docs/">online document</n-a>.
          </project>
        </n-grid-item>
        <n-grid-item :span="2">
          <project name="CleverBar" url="https://github.com/SalHe/CleverBar" :tags="['Tool', 'Windows', '.NET']">
            A utility which can quickly toggle Auto Hide Task without opening Taskbar Settings.
          </project>
        </n-grid-item>
      </n-grid>
    </div>
  </n-space>
</template>