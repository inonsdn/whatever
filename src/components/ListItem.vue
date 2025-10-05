<script setup lang="ts">

    interface ListItemObj {
        id: number
        name: string
        description: string
        onClick: () => {}
    }

    defineProps<{
        item: ListItemObj
    }>()

</script>

<template>
    <div class="div-item">
        <div class="item" onclick="item.onClick">
            <h>{{item.name}}</h>
            <p>{{item.description}}</p>
        </div>
        <!-- <div class="item">
            <button>Edit</button>
            <button>Del</button>
        </div> -->
    </div>
</template>

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
