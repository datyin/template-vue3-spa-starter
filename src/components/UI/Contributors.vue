<script setup lang="ts">
import { NAvatar, NAvatarGroup, NDropdown, NTooltip } from "naive-ui";
import { contributors } from "package";
import { getInitials } from "~/utils/misc.ts";

defineOptions({
  name: "ContributorsComponent",
  inheritAttrs: false,
});

interface Contributor {
  name: string | undefined;
  email: string | undefined;
  initials: string;
  url: string | undefined;
  src: string;
}

const options: Contributor[] = Array.isArray(contributors)
  ? contributors.map((c) => {
      return {
        src: "",
        name: c.name,
        email: c.email,
        initials: getInitials(c.name),
        url: c.url,
      };
    })
  : []
;

const dropdownOptions = options.map((option) => {
  return {
    label: option.name,
    key: option.name,
  };
});
</script>

<template>
  <NAvatarGroup :options="options" :max="3" :size="38">
    <template #avatar="{ option }">
      <NTooltip trigger="hover">
        <template #trigger>
          <NAvatar :src="option.src">
            {{ (option as Contributor).initials }}
          </NAvatar>
        </template>

        {{ (option as Contributor).name }}
      </NTooltip>
    </template>

    <template #rest="{ rest }">
      <NDropdown :options="dropdownOptions">
        <NAvatar>
          + {{ rest }}
        </NAvatar>
      </NDropdown>
    </template>
  </NAvatarGroup>
</template>
