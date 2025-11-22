<template>
    <nav>
        <RouterLink 
            v-for="router in routers"
            :key="router.path"
            :to="router.path"
            >{{router.name}}</RouterLink>
    </nav>
</template>

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

<style scoped>
nav {
    width: 100%;
    font-size: 16px;
    text-align: center;
    padding: 1em;
}

nav a.router-link-exact-active {
    color: var(--primary);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
    color: var(--secondary);
}

nav a:first-of-type {
    border: 0;
}

</style>