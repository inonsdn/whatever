import type { App, InjectionKey } from "vue";
import type { CacheHandler } from "./CacheHandler";
// import ApiHandler from "@/utils/ApiHandler";

export const CacheKey: InjectionKey<CacheHandler> = Symbol('CacheHandler');
export const ApiHandlerKey: InjectionKey<CacheHandler> = Symbol('ApiHandler');

export function createCachePlugins(cache: CacheHandler) {
    return {
        install(app: App) {
            app.provide(CacheKey, cache)
        }
    }
}

export function createApiPlugins(apiHandler) {
    return {
        install(app: App) {
            app.provide(ApiHandlerKey, apiHandler)
        }
    }
}