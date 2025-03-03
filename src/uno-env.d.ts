import type { AttributifyAttributes } from "@unocss/preset-attributify";

type Prefix = "un-";

declare module "@vue/runtime-dom" {
  interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string>> {}
}
