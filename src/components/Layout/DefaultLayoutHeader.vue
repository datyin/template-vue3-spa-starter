<script setup lang="ts">
import { NFlex, NLayoutHeader } from "naive-ui";
import ClientSettings from "./ClientSettings.vue";
import Logo from "./Logo.vue";

defineOptions({
  name: "DefaultLayoutHeaderComponent",
  inheritAttrs: false,
});
</script>

<template>
  <NLayoutHeader bordered class="max-h-64px min-h-64px flex items-center justify-between px-18px">
    <Logo />

    <NFlex :wrap="false" size="small">
      <ClientSettings />
    </NFlex>
  </NLayoutHeader>
</template>
