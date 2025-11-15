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
        this.updateDataToLastRevision()
    }

    constructIndexDBRepositories () {
        this.todoList = new TodoListRepository(db)
    }

    updateDataToLastRevision () {
        // get last revision that client knows from local
        // get from server
        // update to local if needed
        // update to store
        this.updateStores()
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
        const modifiedTodoList = todoList?.map((todoObj) => {
            return {
                id: todoObj.id,
                text: todoObj.todo,
                state: todoObj.state
            }
        })
        console.log('get todoList ', modifiedTodoList)
        this.store.dispatch('todoList/updateTodoListItems', modifiedTodoList)
        console.log('done dispatch ', modifiedTodoList)
    }
}

export async function createCacheHandler() {
    const cache = new CacheHandler(store)
    cache.initialize()
    await cache.updateStores()
    return cache
}