<template>
    <div
        class="grid grid-cols-12 items-center justify-between rounded border bg-neutral-50 px-5 py-1 shadow-inner dark:border-neutral-800 dark:bg-neutral-600 dark:text-white">
        <label class="col-span-4" :for="parameter"><slot></slot></label>
        <span class="col-span-2">{{ parameter }}</span>
        <input
            type="range"
            class="col-span-6"
            :name="parameter"
            :id="parameter"
            :value="parameter"
            :min="min"
            :max="max"
            :disabled="isDisabled"
            @dblclick="parameter = 0"
            @input="$emit('update-value', input.value)"
            ref="input" />
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({ parameter: Number, min: String, max: String, isDisabled: Boolean });
defineEmits(["update-value"]);

const input = ref();
</script>
