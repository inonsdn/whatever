import { createStore } from "vuex"
import { createTodoListModule } from "@/stores/modules/TodoList"
import { TodoListRepository } from "@/cache/repositories/TodoListRepository"
import { db } from "@/cache/db"

const todoListRepo = new TodoListRepository(db)

export const store = createStore(
    {
        modules: {
            todoList: createTodoListModule(todoListRepo)
        },
        strict: true // TODO: this should be false when deploy to production
    }
)