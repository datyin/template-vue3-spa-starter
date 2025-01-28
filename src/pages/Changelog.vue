<script setup lang="ts">
import { NH1 } from "naive-ui";
import { version } from "package";
import Changelog from "../../CHANGELOG.md";

defineOptions({
  name: "ChangelogComponent",
  inheritAttrs: false,
});

const BUILD_TIME = new Date(import.meta.env.VITE_BUILD_DATE).toLocaleString();
</script>

<template>
  <NH1>
    {{ BUILD_TIME }} - v{{ version }}
  </NH1>

  <Changelog />
</template>
