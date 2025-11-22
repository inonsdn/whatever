
<template>
    <BaseDialog :model-value="isShowDialog">
        <div class="add-dialog">
            <NTextInput name="Todo" @on-input-update="onTodoUpdate"/>
            <NTextInput name="State" @on-input-update="onStateUpdate"/>
            <NButton
                @click="onSave">
                <p>Save</p>
            </NButton>
        </div>
    </BaseDialog>
</template>
<script setup lang="ts">

    import { computed, ref } from 'vue';
    import BaseDialog from './BaseDialog.vue';
    import NTextInput from './generic/NTextInput.vue';
    import NButton from './generic/NButton.vue';

    const props = withDefaults(defineProps<{
        readonly isShow: boolean
    }>(), {
        isShow: false
    })

    const data = ref<{
        formData: Record<string, any>
    }>({
        formData: {}
    })

    const isShowDialog = computed(() => props.isShow)

    const emit = defineEmits<{
        (e: 'onSave', formData: Record<string, any>): void
    }>()

    function onTodoUpdate(text: string) {
        data.value.formData['todo'] = text
        console.log('Add dialog,', data.value.formData)
    }

    function onStateUpdate(text: string) {
        data.value.formData['state'] = text
        console.log('Add dialog,', data.value.formData)
    }

    function onSave() {
        emit('onSave', data.value.formData)
    }

</script>
<style>
.add-dialog {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>