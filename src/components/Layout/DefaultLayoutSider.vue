<script setup lang="ts">
import type { MenuOption } from "naive-ui";
import { NIcon, NLayoutSider, NMenu } from "naive-ui";
import { computed, h } from "vue";
import { RouterLink } from "vue-router";
import { IconChangelog, IconHome } from "~/icons/index.ts";
import { t } from "~/plugins/i18n.ts";

defineOptions({
  name: "DefaultLayoutSiderComponent",
  inheritAttrs: false,
});

const navigation = computed<MenuOption[]>(() => ([
  {
    key: "LandingPage",
    label: () => h(RouterLink, { to: { name: "LandingPage" } }, { default: () => t("LandingPage") }),
    icon: () => h(NIcon, { component: IconHome }),
  },
  {
    key: "Changelogs",
    label: () => h(RouterLink, { to: { name: "Changelog" } }, { default: () => t("Changelogs") }),
    icon: () => h(NIcon, { component: IconChangelog }),
  },
]));
</script>

<template>
  <NLayoutSider
    bordered
    show-trigger
    collapse-mode="width"
    :collapsed-width="64"
    :width="240"
    :native-scrollbar="false"
  >
    <NMenu
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="navigation"
    />
  </NLayoutSider>
</template>
