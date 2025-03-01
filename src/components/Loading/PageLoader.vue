<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { NFlex, NSpin, NText } from "naive-ui";
import { t } from "~/plugins/i18n.ts";

defineOptions({
  name: "PageLoaderComponent",
  inheritAttrs: false,
});

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <NFlex vertical size="large" justify="center" align="center" :class="props.class">
    <NSpin size="large" />

    <NText>
      {{ t('Loading') }}
    </NText>
  </NFlex>
</template>
