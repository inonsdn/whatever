<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';

const items = [
    {
        id: 1,
        name: 'test',
        description: 'this is test item'
    }
]

function onItemClicked (item: object) {
    window.location.replace(`/notes/:${item.id}`)
}

</script>

<template>
    <main>
        <ListItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            :onClick="()=>onItemClicked(item)"
        />
    </main>
</template>

<style>
</style>
