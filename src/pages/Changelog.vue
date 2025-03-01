<script setup lang="ts">
import { formatDate } from "@vueuse/core";
import { NFlex, NStatistic } from "naive-ui";
import { version } from "package";
import PageCard from "~/components/Cards/PageCard.vue";
import Contributors from "~/components/UI/Contributors.vue";
import { IconChangelog } from "~/icons/index.ts";
import { t } from "~/plugins/i18n.ts";
import Changelog from "../../CHANGELOG.md";

defineOptions({
  name: "ChangelogComponent",
  inheritAttrs: false,
});

const BUILD_TIME = formatDate(new Date(import.meta.env.VITE_BUILD_DATE), "YYYY-MM-DD HH:mm");
</script>

<template>
  <PageCard :title="t('Changelogs')" :icon="IconChangelog">
    <template #subheader>
      <NFlex justify="space-between" align="flex-start" size="large">
        <NStatistic :label="t('BuildInfo')">
          {{ BUILD_TIME }}
        </NStatistic>

        <NStatistic :label="t('Version')">
          {{ version }}
        </NStatistic>

        <NStatistic :label="t('Contributors')">
          <Contributors />
        </NStatistic>
      </NFlex>
    </template>

    <Changelog />
  </PageCard>
</template>
