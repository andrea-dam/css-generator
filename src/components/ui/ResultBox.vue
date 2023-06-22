<template>
    <div class="flex flex-col justify-center gap-5">
        <textarea
            name="result"
            id="result"
            cols="50"
            rows="1"
            :value="result"
            class="w-full resize-none rounded border px-5 py-2 shadow-inner focus:outline-blue-600"
            readonly></textarea>
        <div class="flex gap-5">
            <CopyButton @click="copy(result)" :copied="copied" />
            <ResetButton @click="$emit('reset')" />
        </div>
    </div>
</template>

<script setup>
import CopyButton from "./CopyButton.vue";
import ResetButton from "./ResetButton.vue";

defineProps({ result: String });
defineEmits(["copy", "reset"]);
</script>
