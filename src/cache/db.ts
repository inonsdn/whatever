import Dexie from 'dexie'

const db = new Dexie('whateverdb')
db.version(1).stores({
    todoList: '++id, todo, state'
})
export { db }
