<script setup lang="ts">
import { NLayoutContent } from "naive-ui";
import { RouterView } from "vue-router";

defineOptions({
  name: "DefaultLayoutContentComponent",
  inheritAttrs: false,
});
</script>

<template>
  <NLayoutContent :native-scrollbar="false" class="p-18px">
    <RouterView />
  </NLayoutContent>
</template>
