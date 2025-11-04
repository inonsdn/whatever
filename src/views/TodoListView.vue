<template>
    <div>
        <div class="todoPanel">
            <div class="todoPanel-filter">
                <input class="inputFilter" type="text" v-model="data.filterTodoText" placeholder="Filter" @input="onFilterType"/>
            </div>
            <div>
                <NButton>Add</NButton>
                <NButton>Remove</NButton>
            </div>
        </div>
        <TodoItem v-for="item in data.filteredTodoItems"
            :key="item.id"
            :id="item.id"
            :text="item.text"
            :state="item.state"
            @mark-done_cb="markDoneClicked"
            @mark-undone_cb="markUndoneClicked"/>
    </div>
</template>

<script setup lang="ts">

    import TodoItem from '@/components/TodoItem.vue';
    import type {TodoListItem} from '@/types/TodoListInterface'
    import { onMounted, ref, toRefs, watch } from 'vue';
    import NButton from '@/components/generic/NButton.vue';

    // define props for this view
    const props = defineProps<{
        // values list of todo item
        values: Array<TodoListItem>
    }>()

    const { values } = toRefs(props)
    const data = ref<{
        filterTodoText: string,
        filteredTodoItems: Array<TodoListItem>,
        delayUpdateTimerId: number
    }>({
        filterTodoText: '',
        filteredTodoItems: [],
        delayUpdateTimerId: 0
    })

    const emit = defineEmits<{
        (e: 'onMarkDone_cb', itemId: number): void
        (e: 'onMarkUndone_cb', itemId: number): void
    }>()

    // LIFE CYCLE
    watch(values, (newVal, oldVal) => {
        console.log(newVal, oldVal)
        updateFilteredItems(null)
    }, { deep: true })

    onMounted(() => {
        updateFilteredItems(null)
        console.log('=====', data.value.filteredTodoItems)
    })

    // FUNCTION DEFINITION
    function markDoneClicked (itemId: number) {
        console.log('Mark done clicked of item ', itemId)
        emit('onMarkDone_cb', itemId)
    }

    function markUndoneClicked (itemId: number) {
        console.log('Mark done clicked of item ', itemId)
        emit('onMarkUndone_cb', itemId)
    }

    function updateFilteredItems(filteredText: string | null) {
        if (!!!filteredText) {
            data.value.filteredTodoItems = values.value
        } else {
            data.value.filteredTodoItems = values.value.filter((item) => {
                if (item.text.toLowerCase().includes(filteredText.toLowerCase())) {
                    return true
                }
                return false
            })
        }
    }

    function onFilterType(e: Event) {
        const filteredText = e.target?.value
        console.log(e.target?.value)

        // delay update filtered items
        clearTimeout(data.value.delayUpdateTimerId)
        data.value.delayUpdateTimerId = setTimeout(() => {
            updateFilteredItems(filteredText)
        }, 200)
    }

</script>


<style>
.todoPanel {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.todoPanel-filter {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 70%;
}
.inputFilter {
    border: 0;
    border-radius: 0.4em;
    height: 1.5em;
    width: 70%;
    outline: none;
    padding: 0.5em;
}
button {
    margin: 0.2em;
    height: 1em;
}

</style>