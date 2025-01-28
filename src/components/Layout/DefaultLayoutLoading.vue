<script setup lang="ts">
import { NFlex, NSpin, NText } from "naive-ui";
import { t } from "~/plugins/i18n";

defineOptions({
  name: "DefaultLayoutLoadingComponent",
  inheritAttrs: false,
});
</script>

<template>
  <NFlex vertical size="large" justify="center" align="center" class="h-full w-full">
    <NSpin size="large" />

    <NText>
      {{ t('Loading') }}
    </NText>
  </NFlex>
</template>
