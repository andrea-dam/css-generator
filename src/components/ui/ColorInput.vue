<template>
    <div class="flex items-center justify-center gap-5 dark:text-white">
        <label for="color">Color</label>
        <input
            type="color"
            name="color"
            id="color"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :class="classes" />
    </div>
</template>

<script setup>
defineProps({ modelValue: String, classes: String });
defineEmits(["update:modelValue"]);
</script>
