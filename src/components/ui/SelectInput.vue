<template>
    <div class="flex w-full items-center justify-between">
        <label :for="parameter" class="dark:text-white"><slot></slot></label>
        <select
            :name="parameter"
            :id="parameter"
            :value="parameter"
            class="w-32 rounded border border-inherit bg-neutral-50 p-1 shadow dark:border-neutral-800 dark:bg-neutral-600 dark:text-white"
            @input="$emit('update-value', input.value)"
            ref="input">
            <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({ parameter: String, options: Array });
defineEmits(["update-value"]);

const input = ref();
</script>
