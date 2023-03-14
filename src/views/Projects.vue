<script setup lang="ts">
import { NGrid, NGridItem, NA } from "naive-ui";
import Project from "../components/Project.vue";
import { useMyI18n } from "../i18n";
import { profile } from "../person";

const { t } = useMyI18n();
</script>

<template>
  <n-grid responsive="self" x-gap="12" y-gap="12" cols="2 800:4 1200:6">
    <n-grid-item v-for="proj in profile.projects" :span="2">
      <project
        :name="t(`projects.album.${proj.key}.name`)"
        :url="proj.url"
        :tags="proj.tags"
      >
        <div>
          {{ t(`projects.album.${proj.key}.description`) }}
          <br />
          <template v-if="proj.links">
            <template v-for="(link, key) in proj.links">
              <li>
                <n-a :href="link" target="_blank">{{
                  t(`projects.album.${proj.key}.links.${key}`)
                }}</n-a>
              </li>
            </template>
          </template>
        </div>
      </project>
    </n-grid-item>
    <!-- 
    <n-grid-item :span="2">
      <project
        :name="t('projects.album.ebuild.name')"
        url="https://salhe.github.io/ebuild/"
        :tags="['Build', 'Tool', 'Automate', 'CI']"
      >
        {{ t("projects.album.ebuild.description") }}
      </project>
    </n-grid-item>
    <n-grid-item :span="2">
      <project
        :name="t('projects.album.qiaqia-course.name')"
        url="https://github.com/SE2022-Qiaqia"
        type="Study"
        :tags="['Gin', 'Vue3', 'Vite', 'Docker', 'VuePress']"
      >
        This project is for one course in Wuhan University. Although it's a
        project for study, it's built on many modern technologies.
        <br />

        Such as
        <n-a href="https://github.com/SE2022-Qiaqia/back-end-go"
          >web api based on Gin and Golang</n-a
        >
        and
        <n-a href="https://github.com/SE2022-Qiaqia/back-end"
          >on Spring (not completed due to lack of time)</n-a
        >,
        <n-a href="https://github.com/SE2022-Qiaqia/front-end"
          >web ui based on Vue3/Vuex4/Vite</n-a
        >
        (you can explorer our web ui
        <n-a href="https://se2022-qiaqia.github.io/front-end">here</n-a> ).
        Besides,
        <n-a href="https://github.com/SE2022-Qiaqia/docker"
          >Docker deployment</n-a
        >
        is supported.

        <br />
        If you want to learn more about this project, you can go to its
        <n-a href="https://se2022-qiaqia.github.io/docs/">online document</n-a>.
      </project>
    </n-grid-item>
    <n-grid-item :span="2">
      <project
        name="Animals12"
        url="https://github.com/SalHe/animals12"
        :tags="['Game', 'Chess', 'Vue3']"
      >
        A mini chess game for fun, in honor of childhood.
      </project>
    </n-grid-item>
    <n-grid-item :span="2">
      <project
        name="CleverBar"
        url="https://github.com/SalHe/CleverBar"
        :tags="['Tool', 'Windows', '.NET']"
      >
        A utility which can quickly toggle Auto Hide Task without opening
        Taskbar Settings.
      </project>
    </n-grid-item> -->
  </n-grid>
</template>
