import type { ConfigProviderProps, DialogProviderProps, LoadingBarProviderProps, MessageProviderProps, ModalProviderProps, NotificationProviderProps } from "naive-ui";
import type { Ref } from "vue";

export interface NaiveUIProps {
  configProvider?: Ref<ConfigProviderProps> | ConfigProviderProps;
  loadingBar?: Ref<LoadingBarProviderProps> | LoadingBarProviderProps;
  message?: Ref<MessageProviderProps> | MessageProviderProps;
  notification?: Ref<NotificationProviderProps> | NotificationProviderProps;
  dialog?: Ref<DialogProviderProps> | DialogProviderProps;
  modal?: Ref<ModalProviderProps> | ModalProviderProps;
}

export type NaiveDiscreteApiModules = "message" | "modal" | "notification" | "loadingBar" | "dialog";
