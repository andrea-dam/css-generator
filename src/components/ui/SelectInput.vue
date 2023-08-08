<template>
    <div class="grid w-full grid-cols-2 items-center justify-between">
        <label :for="parameter" class="dark:text-white"><slot></slot></label>
        <select
            :name="parameter"
            :id="parameter"
            v-model="selection"
            :disabled="isDisabled"
            class="rounded border border-inherit bg-neutral-50 p-1 shadow dark:border-neutral-800 dark:bg-neutral-600 dark:text-white"
            @change="$emit('update:modelValue', selection)">
            <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </select>
    </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({ modelValue: String, parameter: String, options: Array, isDisabled: Boolean });
defineEmits(["update:modelValue"]);

const selection = ref(props.modelValue);
</script>
