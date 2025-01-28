<script setup lang="ts">
import { NButton, NPerformantEllipsis } from "naive-ui";
import { useContextStore } from "~/stores/context.ts";

defineOptions({
  name: "LogoComponent",
  inheritAttrs: false,
});

const context = useContextStore();
</script>

<template>
  <NButton quaternary>
    <template #icon>
      <img :src="context.logo" class="h-18px w-18px border-none" loading="lazy">
    </template>

    <NPerformantEllipsis class="max-w-150px line-height-relaxed">
      {{ context.siteName }}
    </NPerformantEllipsis>
  </NButton>
</template>
