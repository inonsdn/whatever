<template>
    <div class="list-item">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.list-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: var(--text-dark-primary);
    margin-top: 0.3em;
    margin-bottom: 0.3em;
    background-color: var(--thirdary);
    border-radius: 0.4em;
    padding: 0.3em;
    box-shadow: 0 0 3px var(--secondary); /* rgba(0, 0, 0, 0.5); */
}

.list-item:hover {
    background-color: var(--primary);
    color: var(--text-light-primary);
}
</style>
