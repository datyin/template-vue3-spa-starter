import { darkTheme, dateDeDE, dateEnUS, deDE, enUS, lightTheme } from "naive-ui";
import { name } from "package";
import { defineStore } from "pinia";
import { ref } from "vue";
import { z } from "zod";
import { naiveConfig } from "~/modules/ui";
import { i18n } from "~/plugins/i18n";

export type SupportedLanguage = "de" | "en";
export type SupportedThemeMode = "light" | "dark";

function getLanguageValue(input: unknown): SupportedLanguage {
  return z.enum(["de", "en"]).catch("en").parse(input);
}

function getThemeModeValue(input: unknown): SupportedThemeMode {
  return z.enum(["light", "dark"]).catch("light").parse(input);
}

export function getLanguage(): SupportedLanguage {
  const storedLanguage = localStorage.getItem(`${name}-language`);
  const browserLanguage = navigator?.language?.split("-")?.[0];
  return getLanguageValue(storedLanguage || browserLanguage);
}

function setLanguage(input: unknown): SupportedLanguage {
  const value = getLanguageValue(input);
  localStorage.setItem(`${name}-language`, value);
  i18n.global.locale.value = value;

  if (naiveConfig.configProvider) {
    (naiveConfig.configProvider as any).locale = value === "de" ? deDE : enUS;
    (naiveConfig.configProvider as any).dateLocale = value === "de" ? dateDeDE : dateEnUS;
  }

  return value;
}

export function getThemeMode(): SupportedThemeMode {
  const storedTheme = localStorage.getItem(`${name}-theme`);
  const browserPreferredMode = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  return getThemeModeValue(storedTheme || browserPreferredMode);
}

function setThemeMode(input: unknown): SupportedThemeMode {
  const value = getThemeModeValue(input);
  localStorage.setItem(`${name}-theme`, value);

  if (naiveConfig.configProvider) {
    (naiveConfig.configProvider as any).theme = value === "dark" ? darkTheme : lightTheme;
  }

  return value;
}

export const useContextStore = defineStore("context", () => {
  const loading = ref(false);
  const setLoading = (value: boolean) => loading.value = Boolean(value);

  const siteName = ref("My Site");
  const setSiteName = (value: string) => siteName.value = value;

  const logo = ref("https://placehold.co/24");
  const setLogo = (value: string) => logo.value = value;

  const language = ref<SupportedLanguage>(getLanguage());
  const updateLanguage = (value: string) => {
    const newLanguage = setLanguage(value);
    language.value = newLanguage;
  };

  const themeMode = ref<SupportedThemeMode>(getThemeMode());
  const updateThemeMode = (value: string) => {
    const newThemeMode = setThemeMode(value);
    themeMode.value = newThemeMode;
  };

  return {
    loading,
    setLoading,
    siteName,
    setSiteName,
    logo,
    setLogo,
    language,
    updateLanguage,
    themeMode,
    updateThemeMode,
  };
});
