import type { DialogApi, DialogOptions, DialogReactive, LoadingBarApi, MessageApi, MessageOptions, MessageReactive, ModalApi, ModalOptions, ModalReactive, NotificationApi, NotificationOptions, NotificationReactive } from "naive-ui";
import type { VNodeChild } from "vue";
import type { NaiveDiscreteApiModules, NaiveUIProps } from "~/modules/ui.definition.ts";
import { createDiscreteApi, darkTheme, dateDeDE, dateEnUS, deDE, enUS, lightTheme } from "naive-ui";
import { reactive } from "vue";
import { getLanguage, getThemeMode } from "~/stores/context.ts";
import { themeOverrides } from "~/theme/shared.ts";
import { log } from "~/utils/logger.ts";

const NAMESPACE = "NaiveUI Utils";

const language = getLanguage();
const theme = getThemeMode();

export const naiveConfig = reactive<NaiveUIProps>({
  configProvider: {
    abstract: true,
    locale: language ? deDE : enUS,
    dateLocale: language ? dateDeDE : dateEnUS,
    theme: theme === "dark" ? darkTheme : lightTheme,
    themeOverrides,
  },
  loadingBar: undefined,
  message: {
    closable: true,
    duration: 10000,
  },
  notification: undefined,
  dialog: undefined,
  modal: undefined,
});

const store: {
  isDefined: boolean;
  message: undefined | MessageApi;
  notification: undefined | NotificationApi;
  loadingBar: undefined | LoadingBarApi;
  dialog: undefined | DialogApi;
  modal: undefined | ModalApi;
  unmount: undefined | (() => void);
} = {
  isDefined: false,
  message: undefined,
  notification: undefined,
  loadingBar: undefined,
  dialog: undefined,
  modal: undefined,
  unmount: undefined,
};

export function defineNaiveUI(mods: NaiveDiscreteApiModules[], props: NaiveUIProps) {
  if (store.isDefined) {
    log.warn(NAMESPACE, "Naive UI is already defined");
    return;
  }

  const { message, modal, loadingBar, notification, dialog, unmount } = createDiscreteApi(mods, {
    configProviderProps: props?.configProvider,
    loadingBarProviderProps: props?.loadingBar,
    messageProviderProps: props?.message,
    notificationProviderProps: props?.notification,
    dialogProviderProps: props?.dialog,
  });

  store.message = message ?? undefined;
  store.notification = notification ?? undefined;
  store.loadingBar = loadingBar ?? undefined;
  store.dialog = dialog ?? undefined;
  store.modal = modal ?? undefined;
  store.unmount = unmount;
  store.isDefined = true;
}

export function disposeNaiveUI() {
  store.message = undefined;
  store.notification = undefined;
  store.loadingBar = undefined;
  store.dialog = undefined;
  store.modal = undefined;

  if (store.unmount) {
    store.unmount();
  }

  store.isDefined = false;
}

export function loadingBarStart() {
  if (!store.loadingBar) {
    log.error(NAMESPACE, "Loading bar provider is not defined");
    return;
  }

  store.loadingBar.start();
}

export function loadingBarStop(failed: boolean = false) {
  if (!store.loadingBar) {
    log.error(NAMESPACE, "Loading bar provider is not defined");
    return;
  }

  if (failed === true) {
    store.loadingBar.error();
  }
  else {
    store.loadingBar.finish();
  }
}

export function createNotification(options: NotificationOptions): NotificationReactive | undefined {
  if (!store.notification) {
    log.error(NAMESPACE, "Notification provider is not defined");
    return undefined;
  }

  return store.notification.create(options);
}

export function createMessage(content: string | (() => VNodeChild), options: MessageOptions): MessageReactive | undefined {
  if (!store.message) {
    log.error(NAMESPACE, "Message provider is not defined");
    return undefined;
  }

  return store.message.create(content, options);
}

export function createDialog(options: DialogOptions): DialogReactive | undefined {
  if (!store.dialog) {
    log.error(NAMESPACE, "Dialog provider is not defined");
    return undefined;
  }

  return store.dialog.create(options);
}

export function createModal(options: ModalOptions): ModalReactive | undefined {
  if (!store.modal) {
    log.error(NAMESPACE, "Modal provider is not defined");
    return undefined;
  }

  return store.modal.create(options);
}
