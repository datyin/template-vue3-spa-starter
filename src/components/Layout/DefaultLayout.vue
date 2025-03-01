<script setup lang="ts">
import { NLayout } from "naive-ui";
import { useContextStore } from "~/stores/context";
import PageLoader from "../Loading/PageLoader.vue";
import DefaultLayoutContent from "./DefaultLayoutContent.vue";
import DefaultLayoutHeader from "./DefaultLayoutHeader.vue";
import DefaultLayoutSider from "./DefaultLayoutSider.vue";

defineOptions({
  name: "DefaultLayoutComponent",
  inheritAttrs: false,
});

const context = useContextStore();
</script>

<template>
  <NLayout position="absolute" class="!bottom-0 !top-0">
    <PageLoader v-if="context.loading" class="h-full min-h-300px w-full" />

    <template v-else>
      <DefaultLayoutHeader />

      <NLayout embedded has-sider position="absolute" class="!bottom-0 !top-64px">
        <DefaultLayoutSider />
        <DefaultLayoutContent>
          <slot />
        </DefaultLayoutContent>
      </NLayout>
    </template>
  </NLayout>
</template>
