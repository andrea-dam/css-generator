<template>
    <label :for="parameter"><slot></slot></label>
    <select
        :name="parameter"
        :id="parameter"
        :value="parameter"
        class="w-24 rounded border border-neutral-500 p-1"
        @input="$emit('update-value', input.value)"
        ref="input">
        <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
    </select>
</template>

<script setup>
import { ref } from "vue";

defineProps({ parameter: String, options: Array });
defineEmits(["update-value"]);

const input = ref();
</script>
