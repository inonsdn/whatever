<template>
    <div class="dialog" v-if="props.modelValue">
        <div class="modal">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">

    const props = withDefaults(defineProps<{
        modelValue: boolean
    }>(), {
        modelValue: true
    })

    console.log('Base dialog, ', props)

</script>

<style>

    .dialog {
        /* background-color: var(--color-background-soft); */
        position: fixed;
        inset: 0; /*??? Why is inset effect to modal?*/
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.4em;
        z-index: 1000;
    }
    .modal {
        position: absolute;
        background-color: var(--color-background-soft);
        min-width: 100px;
        min-height: 100px;
        border-radius: 0.4em;
        box-shadow: 0 0 3px var(--secondary); /* rgba(0, 0, 0, 0.5); */
    }
    /* .slot-component {
        padding: 1em;
    } */

</style>