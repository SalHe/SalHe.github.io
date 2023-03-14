import { createI18n, useI18n } from "vue-i18n";
import { useLocale } from "../use";
import en from "./en";
import zh from "./zh";

export type MessageSchema = typeof zh;

export function useMyI18n() {
  return useI18n<{
    message: MessageSchema;
  }>();
}

export function createMyI18n() {
  return createI18n({
    legacy: false,
    locale: useLocale().locale.value,
    messages: { en, zh },
  });
}
