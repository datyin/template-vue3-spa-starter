import { fileURLToPath, URL } from "node:url";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWebFonts, presetWind3, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [
    presetAttributify({
      prefix: "un-",
      prefixedOnly: true,
    }),
    presetWind3(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Inter",
        mono: "DM Mono",
      },
      processors: createLocalFontProcessor({
        fontAssetsDir: fileURLToPath(new URL("./public/fonts", import.meta.url)),
        fontServeBaseUrl: "./fonts",
      }),
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
