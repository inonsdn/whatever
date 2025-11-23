import { inject } from "vue"
import { ApiHandlerKey, CacheKey } from "./plugins"

export function useCache() {
    return inject(CacheKey)
}

export function useApiHandler () {
    return inject(ApiHandlerKey)
}
