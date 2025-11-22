<template>
    <div>
        <p v-if="name">{{ name }}</p>
        <input class="inputFilter" type="text" v-model="data.textValue" :placeholder="placeholder" @input="onTextTyping"/>
    </div>
</template>
<script setup lang="ts">
    import { computed, onMounted, ref } from 'vue';

    // define props
    const props = withDefaults(defineProps<{
        readonly name: string,
        readonly value: string,
        readonly placeholder: string | undefined
    }>(), {
        name: '',
        value: '',
        placeholder: undefined
    })

    // define data
    const data = ref<{
        textValue: string
    }>({
        textValue: ''
    })

    const emit = defineEmits<{
        (e: 'onInputUpdate', value: string): void
    }>()

    // Hooks on component mounted
    onMounted(() => {
        data.value.textValue = props.value
    })

    function onTextTyping(e: Event) {
        const text = e.target?.value
        emit('onInputUpdate', text)
        console.log('NTextInput', data.value.textValue)
    }

</script>

<style>
    .inputFilter {
        border: 0;
        border-radius: 0.4em;
        height: 1.5em;
        width: 70%;
        outline: none;
        padding: 0.5em;
    }
</style>