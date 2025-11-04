<template>
    <main>
        <ListItem
            v-for="item in items"
            :key="item.id"
            :item="item"
        />
    </main>
</template>
<script setup lang="ts">
    import ListItem from '@/components/generic/ListItem.vue';

    const items = [
        {
            id: 1,
            name: 'test',
            description: 'this is test item'
        }
    ]

</script>


<style>
</style>