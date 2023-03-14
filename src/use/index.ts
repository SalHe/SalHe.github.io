import { useDark, useStorage } from "@vueuse/core";
import { computed } from "vue";

export function useThemeMode() {
  const isDark = useDark();
  return computed(() => (isDark.value ? "dark" : "light"));
}

export function useLocale() {
  const locale = useStorage("locale", "zh");
  return {
    locale,
    switch: () => {
      locale.value = locale.value === "zh" ? "en" : "zh";
      window.location.reload();
    },
  };
}
