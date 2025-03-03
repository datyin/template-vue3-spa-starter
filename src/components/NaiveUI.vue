<script setup lang="ts">
import type { ConfigProviderProps, DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, ModalProviderProps } from "naive-ui";
import type { Ref } from "vue";
import { NConfigProvider, NDialogProvider, NGlobalStyle, NLoadingBarProvider, NMessageProvider, NModalProvider } from "naive-ui";
import { onMounted, onUnmounted } from "vue";
import { defineNaiveUI, disposeNaiveUI } from "../modules/ui";

defineOptions({
  name: "NaiveUIComponent",
  inheritAttrs: false,
});

const props = defineProps<{
  configProvider?: Ref<ConfigProviderProps> | ConfigProviderProps;
  loadingBarProvider?: Ref<LoadingBarProviderProps> | LoadingBarProviderProps;
  messageProvider?: Ref<MessageProviderProps> | MessageProviderProps;
  dialogProvider?: Ref<DialogProviderProps> | DialogProviderProps;
  modalProvider?: Ref<ModalProviderProps> | ModalProviderProps;
}>();

onMounted(() => {
  defineNaiveUI(["message", "dialog", "modal", "loadingBar", "notification"], {
    message: props.messageProvider,
    dialog: props.dialogProvider,
    modal: props.modalProvider,
    loadingBar: props.loadingBarProvider,
  });
});

onUnmounted(() => {
  disposeNaiveUI();
});
</script>

<template>
  <NConfigProvider v-bind="configProvider">
    <NLoadingBarProvider v-bind="loadingBarProvider">
      <NMessageProvider v-bind="messageProvider">
        <NDialogProvider v-bind="dialogProvider">
          <NModalProvider v-bind="modalProvider">
            <slot />
          </NModalProvider>
        </NDialogProvider>
      </NMessageProvider>
    </NLoadingBarProvider>

    <NGlobalStyle />
  </NConfigProvider>
</template>
