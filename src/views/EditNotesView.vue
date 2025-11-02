<template>
    <div>
        <h1>Edit note {{data.id}}</h1>
        <form @submit.prevent="onSubmitClicked">
            <input :placeholder="'title'" v-model="data.formData.title"/>
            <input :placeholder="'description'" v-model="data.formData.description"/>
            <button type="submit">Submit</button>
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
            title: 'qwerqwe',
            description: ''
        }
    })

    onMounted(() => {
        const itemId = route.params.id
        data.id = itemId
        // TODO: get data from api or database
    })

    watch(data, (newValue, oldValue) => {
        console.log(newValue)
    })

    function onTitleChanged(e) {
        console.log(e)
    }

    function onSubmitClicked() {
        console.log(data.formData)
    }

</script>

