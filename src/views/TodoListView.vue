<template>
    <div>
        <div class="todoPanel">
            <button>Add</button>
            <button>Remove</button>
        </div>
        <TodoItem v-for="item in values"
            :key="item.id"
            :id="item.id"
            :text="item.text"
            :state="item.state"
            @markDone_cb="markDoneClicked"/>
    </div>
</template>

<script setup lang="ts">

    import TodoItem from '@/components/TodoItem.vue';
    import type {TodoListItem} from '@/types/TodoListInterface'
    import { toRefs, watch } from 'vue';

    // define props for this view
    const props = defineProps<{
        // values list of todo item
        values: Array<TodoListItem>
    }>()

    const { values } = toRefs(props)

    watch(values, (newVal, oldVal) => {
        console.log(newVal, oldVal)
    }, { deep: true })

    const emit = defineEmits<{
        (e: 'onMarkDone_cb', itemId: number): void
    }>()

    function markDoneClicked (itemId: number) {
        console.log('Mark done clicked of item ', itemId)
        emit('onMarkDone_cb', itemId)
    }

</script>


<style>
.todoPanel {
    display: flex;
    justify-content: right;

}
button {
    margin: 0.2em;
}

</style>