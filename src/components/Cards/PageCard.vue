<script setup lang="ts">
import type { IconProps } from "naive-ui";
import { NCard, NDivider, NFlex, NH5, NIcon, NSpin } from "naive-ui";
import { useSlots } from "vue";

defineOptions({
  name: "PageCardComponent",
  inheritAttrs: false,
});

const props = defineProps<{
  loading?: boolean;
  title?: string;
  icon?: IconProps["component"];
  iconProps?: Omit<IconProps, "component">;
}>();

const slots = useSlots();
</script>

<template>
  <NSpin :show="props.loading">
    <NCard size="small">
      <NFlex vertical class="w-full">
        <NFlex :wrap="false" justify="flex-start" align="center">
          <NIcon
            v-if="props.icon"
            v-bind="props.iconProps"
            :component="props.icon"
          />

          <NH5 class="!m-none">
            <slot name="title">
              {{ props.title }}
            </slot>
          </NH5>
        </NFlex>

        <NDivider dashed class="!my-sm" />

        <template v-if="slots.subheader">
          <slot name="subheader" />

          <NDivider dashed class="!my-sm" />
        </template>

        <slot />

        <template v-if="slots.footer">
          <NDivider dashed class="!my-sm" />

          <slot name="footer" />
        </template>
      </NFlex>
    </NCard>
  </NSpin>
</template>
