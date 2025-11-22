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
    import { useCache } from '@/cache/useCache'
    import { useStore, mapGetters } from 'vuex'
    import BaseDialog from '@/components/BaseDialog.vue'
    import NTextInput from '@/components/generic/NTextInput.vue'
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

    onMounted(() => {
        // TODO: make to be setup
        // map getters, state, action
        data.value.todoIdToDataObj = todoIdToItem
    })

    const todoIdToItem = computed(() => store.getters['todoList/getAll'])
    const items = computed(() => Object.values(data.value.todoIdToDataObj))
    const isShowDialog = computed(() => data.value.showDialog)

    function onMarkDone_cb (itemId: number) {
        store.dispatch('todoList/updateTodoState', {itemId, TODO_STATE_DONE})
    }

    function onMarkUndone_cb (itemId: number) {
        console.log('===== got event', itemId)
        store.dispatch('todoList/updateTodoState', {itemId, TODO_STATE_NEW})
    }

    function testInputUpdate(text: string) {

    }

    function onAddNewTodo(todo: string) {
        data.value.showDialog = true
        console.log('==== data', data)
        // const createObj = {
        //     todo: todo,
        //     state: TODO_STATE_NEW,
        // }
        // cache?.todoList?.add(createObj).then(() => {
        //     console.log('Done')
        // })
    }

    function onSaveTodo(formData) {
        data.value.showDialog = false
        console.log('Page save got ', formData)
    }

</script>


<style>
</style>