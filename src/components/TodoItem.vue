<template>
    <div class="todoItem">
        <p class="todoText">{{ modifiedText }}</p>
        <button @click="markDoneButtonClicked">{{ markButtonText }}</button>
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
        testText: 'Mark Done'
    })

    const emit = defineEmits<{
        (e: 'markDone_cb', id: number): void
        (e: 'markUndone_cb', id: number): void
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

    const markButtonText = computed(() => {
        if (state.value === TODO_STATE_DONE) {
            return 'Mark Undone'
        } else {
            return 'Mark Done'
        }
    })

    function markDoneButtonClicked() {
        if (state.value === TODO_STATE_NEW) {
            emit('markDone_cb', id.value)
        } else {
            emit('markUndone_cb', id.value)
        }
    }

</script>


<style>
.todoItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 0.3em;
    margin-bottom: 0.3em;
    background-color: var(--thirdary);
    border-radius: 0.4em;
    padding: 0.3em;
    /* padding-left: 0.3em;
    padding-right: 0.3em; */

}

.todoText {
    /* margin-left: 0.3em;
    margin-right: 0.3em; */
    /* margin: 0.3em;
    background-color: var(--thirdary); */
}

</style>