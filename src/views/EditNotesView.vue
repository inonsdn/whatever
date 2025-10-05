<template>
    <div>
        <h1>Edit note {{data.id}}</h1>
        <form>
            <input :placeholder="'title'" v-bind:value="data.formData.title"/>
            <input :placeholder="'description'" v-bind:value="data.formData.description"/>
            <button :onclick="onSubmitClicked">Submit</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, reactive, watch } from 'vue';

const route = useRoute()
const data = reactive({
    id: null,
    formData: {
        title: '',
        description: ''
    }
})

onMounted(() => {
    const itemId = route.params.id
    data.id = itemId
})

watch(data.formData, (newValue, oldValue) => {
    console.log(newValue)
})

function onSubmitClicked() {
    console.log(data.formData)
}

</script>

