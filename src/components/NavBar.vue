<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

interface RoutePath {
    name: string
    path: string
}

// props of components
defineProps<{
    routers: Array<RoutePath>
}>()

</script>

<template>
    <nav>
        <RouterLink 
            v-for="router in routers"
            :key="router.path"
            :to="router.path"
            >{{router.name}}</RouterLink>
    </nav>
</template>

<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

</style>