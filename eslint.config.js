import defineConfig from "@antfu/eslint-config";

export default defineConfig(
  {
    typescript: true,
    unocss: true,
    vue: true,
    formatters: true,
    stylistic: {
      semi: true,
      quotes: "double",
    },
  },
  {
    rules: {
      "no-console": ["error", { allow: ["warn", "error", "debug"] }],
      "curly": ["error", "multi-line"],
      "style/operator-linebreak": ["error", "after", { overrides: { "?": "before", ":": "before" } }],
    },
  },
);
