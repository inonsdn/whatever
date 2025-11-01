<template>
    <div class="div-item">
        <div class="item" @click="emit('click_cb')">
            <h>{{item.name}}</h>
            <p>{{item.description}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">

    import type { ListItemObj } from '@/types/ListItemInterface'

    defineProps<{
        item: ListItemObj
    }>()

    const emit = defineEmits<{ 
        (e: 'click_cb'): void
    }>()

</script>

<style scoped>
div {
    margin: 1em;
    border: 3em;
}

.div-item {
    display: flex;
    justify-content: space-between;
    border: 3em;
    border-color: var(--color-text);
}

.div-item:hover {
    background-color: var(--color-text);
}

.item {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>
