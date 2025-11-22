<template>
    <header>
        <div class="wrapper">
            <NavBar :routers=routerPaths></NavBar>
        </div>
    </header>
    <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from '@/components/NavBar.vue'

const routerPaths = [
    {
        name: 'Todo List',
        path: '/todoList'
    },
    {
        name: 'Whatever',
        path: '/whatever'
    },
    {
        name: 'Notes',
        path: '/notes'
    }
]

</script>


<style scoped>
header {
    line-height: 1;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>
