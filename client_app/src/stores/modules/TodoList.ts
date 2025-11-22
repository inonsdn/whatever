import type { TodoListItem } from "@/types/TodoListInterface";
import type { Module } from "vuex/types/index.js";

export interface TodoListState {
    todoIdToItem: Record<number, TodoListItem>
}

const state: TodoListState = {
    todoIdToItem: {},
}

export function createTodoListModule(): Module<TodoListState, unknown> {
    return {
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
            },

            updateTodoState (state: TodoListState, {id, stateStr}) {
                console.log('##### update todo state ', id, stateStr)
                state.todoIdToItem[id].state = stateStr
                console.log('====== DONE')
            }
        },

        actions: {
            updateTodoListItems(context, items: Array<TodoListItem>) {
                context.commit("updateTodoListItems", items)
            },

            updateTodoState(context, {id, stateStr}) {
                // update local db
                // await repo.update(id, {state: state})
                // update to state by mutation
                context.commit('updateTodoState', id, stateStr)
            }
        },
    }
}
