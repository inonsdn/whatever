import { db } from '@/cache/db'
import { TodoListRepository } from './repositories/TodoListRepository'
import type { TodoListItem } from '@/types/TodoListInterface'
import { Store } from 'vuex'
import { store } from '@/stores'

export class CacheHandler {
    
    public todoList: TodoListRepository | null
    private store: Store<any>

    constructor(store: Store<any>) {
        this.todoList = null
        this.store = store
    }

    initialize () {
        this.constructIndexDBRepositories()
    }

    constructIndexDBRepositories () {
        this.todoList = new TodoListRepository(db)
    }

    async createNewTodoList(item: Partial<TodoListItem>) {
        const todoId = await this.todoList?.add(item)
    }

    async updateStores() {
        await this.updateTodoListStore()
    }

    async updateTodoListStore() {
        console.log('update todo')
        const todoList = await this.todoList?.getAll()
        console.log('get todoList ', todoList)
        this.store.dispatch('todoList/updateTodoListItems', todoList)
        console.log('done dispatch ', todoList)
    }
}

export async function createCacheHandler() {
    const cache = new CacheHandler(store)
    cache.initialize()
    await cache.updateStores()
    return cache
}