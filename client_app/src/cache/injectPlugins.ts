import { inject } from "vue"
import { ApiHandlerKey, CacheKey } from "./plugins"

export function useCache() {
    const cache = inject(CacheKey)
    if (!cache) {
        throw new Error('Cache is not initialized. Did you call installCache(app) in main.ts?')
    }
    return cache
}

export function useApiHandler () {
    return inject(ApiHandlerKey)
}
