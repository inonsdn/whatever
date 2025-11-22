import { inject } from "vue";
import { CacheKey } from "./plugins";

export function useCache() {
    const cache = inject(CacheKey)
    return cache
}