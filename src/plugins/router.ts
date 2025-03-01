import type { RouteRecordInfo } from "vue-router";
import type { Localization } from "~/locales/en";
import { createRouter, createWebHashHistory } from "vue-router";
import { loadingBarStart, loadingBarStop } from "~/modules/ui.ts";
import LandingPage from "~/pages/LandingPage.vue";
import { t } from "./i18n";

export const router = createRouter({
  history: createWebHashHistory("/"),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
      meta: {
        title: "PageTitleLandingPage",
      },
    },
    {
      path: "/changelog",
      name: "Changelog",
      component: () => import("~/pages/Changelog.vue"),
      meta: {
        title: "PageTitleChangelog",
      },
    },
    {
      path: "/:catchAll(.*)*",
      name: "Error404",
      component: () => import("~/pages/Error404.vue"),
      meta: {
        title: "PageTitleError404",
      },
    },
  ],
});

router.beforeEach((to) => {
  loadingBarStart();

  if (to.meta.title) {
    document.title = `${t(to.meta.title)} | ${t("PageTitle")}`;
  }
});

router.afterEach(() => {
  loadingBarStop();
});

interface RouteNamedMap {
  LandingPage: RouteRecordInfo<"LandingPage", "/", Record<never, never>, Record<never, never>>;
  Changelog: RouteRecordInfo<"Changelog", "/", Record<never, never>, Record<never, never>>;
  Error404: RouteRecordInfo<"Error404", "/:catchAll(.*)*", Record<"pathMatch", string>, Record<never, never>>;
}

declare module "vue-router" {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap;
  }

  interface RouteMeta {
    title: keyof Localization;
  }
}
