<template>
    <TodoListView
        :values="items"
        @on-mark-done_cb="onMarkDone_cb"
        @on-mark-undone_cb="onMarkUndone_cb"
        @on-add-clicked="onAddNewTodo"/>
</template>

<script setup lang="ts">

    import TodoListView from '@/views/TodoListView.vue'

    import type {TodoListItem} from '@/types/TodoListInterface'
    import {TODO_STATE_NEW, TODO_STATE_DONE} from '@/types/TodoListInterface'
    import { computed, onMounted, ref } from 'vue'
    import { useCache } from '@/cache/useCache'
    import { useStore, mapGetters } from 'vuex'

    // mounted to get value from local storage
    const cache = useCache()
    const store = useStore()

    // handle route
    const data = ref<{
        todoIdToDataObj: Record<number, TodoListItem>
    }>({
        todoIdToDataObj: {}
    })

    mapGetters({
        getAllTodoList: 'todoList/getAll'
    })

    onMounted(() => {
        // TODO: make to be setup
        // map getters, state, action
        const todoIdToItem = getAllTodoList()
        data.value.todoIdToDataObj = todoIdToItem
    })

    const items = computed(() => Object.values(data.value.todoIdToDataObj))

    function onMarkDone_cb (itemId: number) {
        cache?.todoList?.update(itemId, {state: TODO_STATE_DONE}).then(() => {
            const oldValue = data.value.todoIdToDataObj[itemId]
            data.value.todoIdToDataObj = {
                ...data.value.todoIdToDataObj,
                [itemId]: {
                    ...oldValue,
                    state: TODO_STATE_DONE
                }
            }
        })
    }

    function onMarkUndone_cb (itemId: number) {
        console.log('===== got event', itemId)
        cache?.todoList?.update(itemId, {state: TODO_STATE_NEW}).then(() => {
            const oldValue = data.value.todoIdToDataObj[itemId]
            data.value.todoIdToDataObj = {
                ...data.value.todoIdToDataObj,
                [itemId]: {
                    ...oldValue,
                    state: TODO_STATE_NEW
                }
            }
        })
    }

    function onAddNewTodo(todo: string) {
        const createObj = {
            todo: todo,
            state: TODO_STATE_NEW,
        }
        cache?.todoList?.add(createObj).then(() => {
            console.log('Done')
        })
    }

</script>


<style>
</style>