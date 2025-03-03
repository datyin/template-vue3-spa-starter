<script setup lang="ts">
import { onMounted } from "vue";
import DefaultLayout from "./components/Layout/DefaultLayout.vue";
import NaiveUI from "./components/NaiveUI.vue";
import { naiveConfig } from "./modules/ui.ts";
import { bootstrap } from "./services/index.ts";

defineOptions({
  name: "AppComponent",
  inheritAttrs: false,
});

onMounted(bootstrap);
</script>

<template>
  <NaiveUI
    :config-provider="naiveConfig.configProvider"
    :loading-bar-provider="naiveConfig.loadingBar"
    :message-provider="naiveConfig.message"
    :dialog-provider="naiveConfig.dialog"
    :modal-provider="naiveConfig.modal"
  >
    <DefaultLayout />
  </NaiveUI>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.markdown-body,
.markdown-body code {
  --at-apply: font-mono;
}
</style>
