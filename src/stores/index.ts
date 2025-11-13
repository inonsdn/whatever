import { createStore } from "vuex"
import { todoList } from "@/stores/modules/TodoList"

export const store = createStore(
    {
        modules: {
            todoList
        },
        strict: true // TODO: this should be false when deploy to production
    }
)