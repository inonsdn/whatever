<template>
    <TodoListView
        :values="items"
        @on-mark-done_cb="onMarkDone_cb"
        @on-mark-undone_cb="onMarkUndone_cb"/>
</template>

<script setup lang="ts">

    import TodoListView from '@/views/TodoListView.vue'

    import type {TodoListItem} from '@/types/TodoListInterface'
    import {TODO_STATE_NEW, TODO_STATE_DONE} from '@/types/TodoListInterface'
import { computed, onMounted, ref } from 'vue'

    // mounted to get value from local storage

    // handle route
    const data = ref<{
        todoIdToDataObj: Record<number, TodoListItem>
    }>({
        todoIdToDataObj: {}
    })

    onMounted(() => {
        const todoListItems: Array<TodoListItem> = [
            {
                id: 1,
                state: TODO_STATE_NEW,
                text: 'Make the todo list view done'
            },
            {
                id: 2,
                state: TODO_STATE_DONE,
                text: 'Add the button at the right of todo item'
            },
            {
                id: 3,
                state: TODO_STATE_NEW,
                text: 'Add callback of button Mark Done to emit markdone and page handle it'
            },
            {
                id: 4,
                state: TODO_STATE_NEW,
                text: 'Make page able to update data'
            },
            {
                id: 5,
                state: TODO_STATE_NEW,
                text: 'Implement dialog for add todo item'
            },
            {
                id: 6,
                state: TODO_STATE_DONE,
                text: 'Add toggle to done and undone todo'
            }
        ]
        for (const item of todoListItems) {
            data.value.todoIdToDataObj[item.id] = item
        }
    })

    const items = computed(() => Object.values(data.value.todoIdToDataObj))

    function onMarkDone_cb (itemId: number) {
        console.log('===== got event', itemId)
        const oldValue = data.value.todoIdToDataObj[itemId]
        data.value.todoIdToDataObj = {
            ...data.value.todoIdToDataObj,
            [itemId]: {
                ...oldValue,
                state: TODO_STATE_DONE
            }
            
        }
    }

    function onMarkUndone_cb (itemId: number) {
        console.log('===== got event', itemId)
        const oldValue = data.value.todoIdToDataObj[itemId]
        data.value.todoIdToDataObj = {
            ...data.value.todoIdToDataObj,
            [itemId]: {
                ...oldValue,
                state: TODO_STATE_NEW
            }
            
        }
    }

</script>


<style>
</style>