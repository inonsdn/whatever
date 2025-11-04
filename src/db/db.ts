import Dexie from 'dexie'

const db = new Dexie('whateverdb')
db.version(1).stores({
    todolist: '++id, todo, state'
})
export { db }
