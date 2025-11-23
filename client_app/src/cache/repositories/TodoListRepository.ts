import type Dexie from "dexie";
import type { BaseRepository } from "./BaseRepository";

export interface TodoListCreateItem {
    todo: string
    state: string
}

export interface TodoListItem {
    id: number
    text: string
    state: string
}

export class TodoListRepository implements BaseRepository {
    constructor (private db: Dexie) {
        this.db = db
    }
    async getAll(): Promise<Array<TodoListItem>> {
        return await this.db.todoList.toArray()
    }

    async add(item: Partial<TodoListItem>): Promise<string> {
        return await this.db.todoList.add(item)
    }

    async update(id: number, item: Partial<TodoListItem>): Promise<void> {
        await this.db.todoList.update(id, item)
    }

    async delete(id: number): Promise<void> {
        
    }
}