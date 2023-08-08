<template>
    <div
        class="grid grid-cols-12 items-center justify-between rounded border bg-neutral-50 px-5 py-1 shadow-inner dark:border-neutral-800 dark:bg-neutral-600 dark:text-white">
        <label class="col-span-4" :for="parameter"><slot></slot></label>
        <span class="col-span-2">{{ modelValue }}</span>
        <input
            type="range"
            class="col-span-6"
            :name="parameter"
            :id="parameter"
            :value="modelValue"
            :min="min"
            :max="max"
            :disabled="isDisabled"
            @input="$emit('update:modelValue', $event.target.value)" />
    </div>
</template>

<script setup>
defineProps({ parameter: String, min: String, max: String, isDisabled: Boolean, modelValue: Number });
defineEmits(["update:modelValue"]);
</script>
