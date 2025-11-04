import type Dexie from "dexie";
import type { BaseRepository } from "./BaseRepository";

export interface TodoListItem {
    id: number
    todo: string
    state: string
}

export class TodoListRepository implements BaseRepository {
    constructor (private db: Dexie) {
        this.db = db
    }
    async getAll(): Promise<TodoListItem> {
        return this.db.todolist.toArray()
    }

    async add(item: TodoListItem): Promise<string> {
        return this.db.todolist.add(item)
    }

    async update(id: number, item: Partial<TodoListItem>): Promise<void> {
        
    }

    async delete(id: number): Promise<void> {
        
    }
}