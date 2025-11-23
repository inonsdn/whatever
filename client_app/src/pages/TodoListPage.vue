<template>
    <div>
        <TodoListView
        :values="items"
        @on-mark-done_cb="onMarkDone_cb"
        @on-mark-undone_cb="onMarkUndone_cb"
        @on-add-clicked="onAddNewTodo"/>
        <AddTodoListDialog 
            :model-value="isShowDialog"
            @on-save="onSaveTodo"/>
    </div>
</template>

<script setup lang="ts">

    import TodoListView from '@/views/TodoListView.vue'

    import type {TodoListItem} from '@/types/TodoListInterface'
    import {TODO_STATE_NEW, TODO_STATE_DONE} from '@/types/TodoListInterface'
    import { computed, onMounted, ref } from 'vue'
    import { useCache } from '@/cache/injectPlugins'
    import { useStore, mapGetters } from 'vuex'
    import AddTodoListDialog from '@/components/AddTodoListDialog.vue'

    // mounted to get value from local storage
    const cache = useCache()
    const store = useStore()

    // handle route
    const data = ref<{
        todoIdToDataObj: Record<number, TodoListItem>,
        showDialog: boolean
    }>({
        todoIdToDataObj: {},
        showDialog: false
    })

    mapGetters({
        getAllTodoList: 'todoList/getAll'
    })

    onMounted(async () => {
        // TODO: make to be setup
        // map getters, state, action
        // data.value.todoIdToDataObj = todoIdToItem
        console.log(await cache?.getLottoForTest())
    })

    const todoIdToItem = computed(() => store.getters['todoList/getAll'])
    const items = computed(() => {
        console.log('COMPUTE', todoIdToItem.value, Object.values(todoIdToItem.value))
        return Object.values(todoIdToItem.value)
    })
    const isShowDialog = computed(() => data.value.showDialog)

    function onMarkDone_cb (itemId: number) {
        store.dispatch('todoList/updateTodoState', {itemId, TODO_STATE_DONE})
    }

    function onMarkUndone_cb (itemId: number) {
        console.log('===== got event', itemId)
        store.dispatch('todoList/updateTodoState', {itemId, TODO_STATE_NEW})
    }

    function onAddNewTodo() {
        data.value.showDialog = true
    }

    async function onSaveTodo(formData) {
        data.value.showDialog = false
        console.log('Page save got ', formData)
        const newTodo = {
            state: TODO_STATE_NEW,
            text: formData.todo
        }
        try {
            await cache?.createNewTodoList(newTodo)
        } catch {
            console.log('Found error')
        }
        console.log('Page save got ', newTodo)
    }

</script>


<style>
</style>