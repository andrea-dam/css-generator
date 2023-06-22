<template>
    <div
        class="flex h-fit items-center justify-between rounded border bg-neutral-50 px-2 py-1 shadow-inner dark:border-neutral-800 dark:bg-neutral-600 dark:text-white">
        <label :for="parameter"><slot></slot></label>
        <div class="flex flex-col items-center">
            <span>{{ parameter }}</span>
            <input
                type="range"
                class="w-64"
                :name="parameter"
                :id="parameter"
                :value="parameter"
                :min="min"
                :max="max"
                @dblclick="parameter = 0"
                @input="$emit('update-value', input.value)"
                ref="input" />
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({ parameter: Number, min: String, max: String });
defineEmits(["update-value"]);

const input = ref();
</script>
