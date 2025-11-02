<template>
    <div class="todoItem">
        <p class="todoText">{{ modifiedText }}</p>
        <button @click="emit('markDone_cb', id)">Mark Done</button>
    </div>
</template>

<script setup lang="ts">

    import { computed, onMounted, ref, toRefs } from 'vue';
    import {TODO_STATE_NEW, TODO_STATE_DONE} from '@/types/TodoListInterface'
    
    // define props for this view
    const props = defineProps<{
        // values list of todo item
        // item: TodoListItem
        id: number,
        text: string,
        state: string
    }>()
    const { id, text, state } = toRefs(props)

    const data = ref({
        testText: 'aaaaa'
    })

    const emit = defineEmits<{
        (e: 'markDone_cb', id: number): void
    }>()

    onMounted(() => {
        // setShowText()
    })

    const modifiedText = computed(() => {
        let stateShowText = '[ ]'
        if (state.value === TODO_STATE_DONE) {
            stateShowText = '[/]'
        }
        return `- ${stateShowText} ${text.value} ${data.value.testText}`
    })

</script>


<style>
.todoItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 0.3em;
    margin-bottom: 0.3em;
    background-color: var(--thirdary);
}

.todoText {
    /* margin: 0.3em;
    background-color: var(--thirdary); */
}

</style>