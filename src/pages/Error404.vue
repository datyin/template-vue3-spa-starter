<script setup lang="ts">
import { NResult } from "naive-ui";
import RouterButton from "~/components/Buttons/RouterButton.vue";
import { IconHome } from "~/icons";
import { t } from "~/plugins/i18n";

defineOptions({
  name: "Error404Component",
  inheritAttrs: false,
});
</script>

<template>
  <NResult status="404" title="404" :description="t('PageNotFound')">
    <template #footer>
      <RouterButton :to="{ name: 'LandingPage' }" :icon="IconHome" :button-props="{ type: 'primary' }">
        {{ t('BackToLandingPage') }}
      </RouterButton>
    </template>
  </NResult>
</template>
