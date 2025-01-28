<script setup lang="ts">
import type { ButtonProps, IconProps } from "naive-ui";
import type { RouterLinkProps } from "vue-router";
import { NButton, NIcon } from "naive-ui";
import { RouterLink } from "vue-router";

defineOptions({
  name: "RouterButtonComponent",
  inheritAttrs: false,
});

defineProps<{
  to: RouterLinkProps["to"];
  icon?: IconProps["component"];
  iconProps?: Omit<IconProps, "component">;
  buttonProps?: Omit<ButtonProps, "tag" | "href">;
}>();
</script>

<template>
  <RouterLink v-slot="{ href, navigate }" :to custom>
    <NButton
      v-bind="buttonProps"
      tag="a"
      :href="href"
      @click="navigate"
    >
      <template v-if="icon" #icon>
        <NIcon :component="icon" v-bind="iconProps" />
      </template>

      <slot />
    </NButton>
  </RouterLink>
</template>
