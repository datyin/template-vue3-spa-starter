<script setup lang="ts">
import type { TooltipProps } from "naive-ui";
import { NPerformantEllipsis } from "naive-ui";
import { useContextStore } from "~/stores/context.ts";
import RouterButton from "./RouterButton.vue";

defineOptions({
  name: "LogoComponent",
  inheritAttrs: false,
});

const context = useContextStore();

const tooltipProps: TooltipProps = {
  width: 280,
  delay: 0,
  placement: "bottom-start",
};
</script>

<template>
  <RouterButton :to="{ name: 'LandingPage' }" :button-props="{ quaternary: true }">
    <template #icon>
      <img :src="context.logo" class="h-18px w-18px border-none" loading="lazy">
    </template>

    <NPerformantEllipsis class="text-initial font-500 line-height-relaxed !max-w-200px" :tooltip="tooltipProps">
      {{ context.siteName }}
    </NPerformantEllipsis>
  </RouterButton>
</template>
