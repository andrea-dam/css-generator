<template>
    <div class="flex items-center justify-center gap-5 dark:text-white">
        <label for="color">Color</label>
        <input
            type="color"
            name="color"
            id="color"
            :value="color"
            @input="$emit('update-color', input.value)"
            :class="classes"
            ref="input" />
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({ color: String, classes: String });
defineEmits(["update-color"]);

const input = ref();
</script>
