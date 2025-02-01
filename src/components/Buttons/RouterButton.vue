<script setup lang="ts">
import type { ButtonProps, IconProps } from "naive-ui";
import type { AnchorHTMLAttributes } from "vue";
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
  disabled?: ButtonProps["disabled"];
  buttonProps?: Omit<ButtonProps, "tag" | "disabled"> & Omit<AnchorHTMLAttributes, "href">;
}>();
</script>

<template>
  <RouterLink v-slot="{ href, navigate }" :to custom>
    <NButton
      v-bind="buttonProps"
      :disabled
      tag="a"
      :href="href"
      @click="navigate"
    >
      <template #icon>
        <slot name="icon">
          <NIcon v-if="icon" :component="icon" v-bind="iconProps" />
        </slot>
      </template>

      <slot />
    </NButton>
  </RouterLink>
</template>
