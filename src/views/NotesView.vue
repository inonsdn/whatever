<template>
    <main>
        <ListItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @click_cb="() => onItemClicked(item)"
        />
    </main>
</template>

<script setup lang="ts">
import ListItem from '@/components/ListItem.vue';
import { useRouter } from 'vue-router';
import type { ListItemObj } from '@/types/ListItemInterface'

// for navigate to other route
const router = useRouter();

const items = [
    {
        id: 1,
        name: 'test',
        description: 'this is test item'
    },
    {
        id: 2,
        name: 'test2',
        description: 'this is test item2'
    }
]

function onItemClicked (item: ListItemObj) {
    router.push(`/notes/:${item.id}`)
}

</script>

<style>
</style>
