<script setup lang="ts">
import { NLayoutContent } from "naive-ui";
import { RouterView } from "vue-router";
import PageLoader from "../Loading/PageLoader.vue";

defineOptions({
  name: "DefaultLayoutContentComponent",
  inheritAttrs: false,
});
</script>

<template>
  <NLayoutContent :native-scrollbar="false" class="p-18px" embedded>
    <RouterView v-slot="{ Component, route }">
      <Suspense v-if="Component" :timeout="0">
        <Component :is="Component" :key="route.name" />

        <template #fallback>
          <PageLoader class="h-full min-h-300px w-full" />
        </template>
      </Suspense>
    </RouterView>
  </NLayoutContent>
</template>
