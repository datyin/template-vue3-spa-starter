import type { RouteRecordInfo } from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import { loadingBarStart, loadingBarStop } from "~/modules/ui.ts";
import LandingPage from "~/pages/LandingPage.vue";

export const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    { path: "/", name: "LandingPage", component: LandingPage },
    { path: "/changelog", name: "Changelog", component: () => import("~/pages/Changelog.vue") },
    { path: "/:pathMatch(.*)*", name: "Error404", component: () => import("~/pages/Error404.vue") },
  ],
});

router.beforeEach(() => loadingBarStart());
router.afterEach(() => loadingBarStop());

interface RouteNamedMap {
  LandingPage: RouteRecordInfo<"LandingPage", "/", Record<never, never>, Record<never, never>>;
  Changelog: RouteRecordInfo<"Changelog", "/", Record<never, never>, Record<never, never>>;
  Error404: RouteRecordInfo<"Error404", "/:pathMatch(.*)*", Record<"pathMatch", string>, Record<never, never>>;
}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }
}
