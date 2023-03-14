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
        :type="proj.type"
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
  </n-grid>
</template>
