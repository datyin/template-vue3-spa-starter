<script setup lang="ts">
import type { DropdownOption } from "naive-ui";
import { NButton, NDropdown, NIcon } from "naive-ui";
import { computed, h } from "vue";
import { IconColors, IconDarkMode, IconFlagDE, IconFlagEN, IconLightMode, IconSettings, IconTranslate } from "~/icons/index.ts";
import { t } from "~/plugins/i18n.ts";
import { useContextStore } from "~/stores/context.ts";

defineOptions({
  name: "ClientSettingsComponent",
  inheritAttrs: false,
});

const context = useContextStore();

const options = computed<DropdownOption[]>(() => ([
  {
    key: "language",
    label: t("Language"),
    icon: () => h(NIcon, { component: IconTranslate }),
    children: [
      {
        key: "en",
        label: t("English"),
        icon: () => h(NIcon, { component: IconFlagEN }),
      },
      {
        key: "de",
        label: t("German"),
        icon: () => h(NIcon, { component: IconFlagDE }),
      },
    ],
  },
  {
    key: "theme",
    label: t("Theme"),
    icon: () => h(NIcon, { component: IconColors }),
    children: [
      {
        icon: () => h(NIcon, { component: IconLightMode }),
        key: "light",
        label: t("Light"),
      },
      {
        icon: () => h(NIcon, { component: IconDarkMode }),
        key: "dark",
        label: t("Dark"),
      },
    ],
  },
]));

function onSelect(option: string) {
  switch (option) {
    case "en":
      context.updateLanguage("en");
      break;
    case "de":
      context.updateLanguage("de");
      break;
    case "light":
      context.updateThemeMode("light");
      break;
    case "dark":
      context.updateThemeMode("dark");
      break;
  }
}
</script>

<template>
  <NDropdown trigger="click" :options @select="onSelect">
    <NButton secondary>
      <template #icon>
        <NIcon :component="IconSettings" />
      </template>
    </NButton>
  </NDropdown>
</template>
