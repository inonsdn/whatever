import type { TodoListItem } from "@/types/TodoListInterface";
import type { Module } from "vuex/types/index.js";

export interface TodoListState {
    todoIdToItem: Record<number, TodoListItem>
}

const state: TodoListState = {
    todoIdToItem: {},
}

export const todoList: Module<TodoListState, unknown> = {
    namespaced: true,

    state,

    getters: {
        getAll(state: TodoListState) {
            return state.todoIdToItem
        },

        getTodoItemById(state: TodoListState, id: number) {
            return state.todoIdToItem[id]
        }
    },

    mutations: {
        updateTodoListItems (state: TodoListState, items: Array<TodoListItem>) {
            for (const item of items) {
                state.todoIdToItem[item.id] = item
            }
        }
    },

    actions: {
        updateTodoListItems(context, items: Array<TodoListItem>) {
            context.commit("updateTodoListItems", items)
        }
    },
}