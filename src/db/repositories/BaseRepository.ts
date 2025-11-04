export interface DbItem {
    id: number
}

export interface BaseRepository {
    add(item: DbItem): Promise<string>
    update(id: number, item: Partial<DbItem>): Promise<void>
    delete(id: number): Promise<void>
    getAll(): Promise<DbItem>
}
