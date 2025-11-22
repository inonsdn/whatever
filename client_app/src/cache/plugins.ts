import type { App, InjectionKey } from "vue";
import type { CacheHandler } from "./CacheHandler";

export const CacheKey: InjectionKey<CacheHandler> = Symbol('CacheHandler');

export function createCachePlugins(cache: CacheHandler) {
    return {
        install(app: App) {
            app.provide(CacheKey, cache)
        }
    }
}
