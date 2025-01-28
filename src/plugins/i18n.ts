import type { Localization } from "~/locales/en.ts";
import { createI18n } from "vue-i18n";
import { de } from "~/locales/de.ts";
import { en } from "~/locales/en.ts";
import { getLanguage } from "~/stores/context";

const initialLanguage = getLanguage();

export const i18n = createI18n({
  legacy: false,
  locale: initialLanguage,
  fallbackLocale: initialLanguage === "en" ? "de" : "en",
  messages: { en, de },
  availableLocales: ["en", "de"],
});

/**
 * Helper function to get a localized string with type safety.
 * @param key The key of the string to get.
 * @param replacements Optional replacements for the string.
 * @returns The localized string.
 */
export function t(key: keyof Localization, replacements?: Record<string, string>) {
  return i18n.global.t(key, replacements as any);
}
