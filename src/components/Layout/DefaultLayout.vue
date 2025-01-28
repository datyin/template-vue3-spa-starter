<script setup lang="ts">
import { NLayout } from "naive-ui";
import { useContextStore } from "~/stores/context";
import DefaultLayoutContent from "./DefaultLayoutContent.vue";
import DefaultLayoutHeader from "./DefaultLayoutHeader.vue";
import DefaultLayoutLoading from "./DefaultLayoutLoading.vue";
import DefaultLayoutSider from "./DefaultLayoutSider.vue";

defineOptions({
  name: "DefaultLayoutComponent",
  inheritAttrs: false,
});

const context = useContextStore();
</script>

<template>
  <NLayout position="absolute" class="!bottom-0 !top-0">
    <DefaultLayoutLoading v-if="context.loading" />

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
