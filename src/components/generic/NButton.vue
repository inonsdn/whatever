<template>
    <button
        class="n-button"
        @click="emit('click')">
        <slot></slot>
    </button>
</template>

<script setup lang="ts">

    const emit = defineEmits<{
        (e: 'click'): void
    }>()

</script>

<style scoped>
.n-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: var(--text-dark-primary);
    height: inherit;
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    background-color: var(--thirdary);
    border-radius: 0.4em;
    padding: 0.3em;
    box-shadow: 0 0 3px var(--secondary); /* rgba(0, 0, 0, 0.5); */
}

.n-button:hover {
    background-color: var(--primary);
    color: var(--text-light-primary);
}
</style>
