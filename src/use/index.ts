import { useDark } from "@vueuse/core"
import { computed } from "vue";

export function useThemeMode() {
    const isDark = useDark();
    return computed(() => isDark.value ? "dark" : "light");
}