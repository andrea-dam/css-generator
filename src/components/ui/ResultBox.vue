<template>
    <div class="flex w-full flex-col justify-center gap-5">
        <textarea
            name="result"
            id="result"
            cols="50"
            rows="1"
            :value="result"
            class="max-h-20 w-full resize-none rounded border border-inherit bg-neutral-50 px-5 py-2 shadow-inner focus:border-blue-600 focus:shadow-lg dark:border-neutral-800 dark:bg-neutral-600 dark:text-white"
            readonly></textarea>
        <div class="flex gap-5">
            <CopyButton @click="$emit('copy')" :copied="copied" />
            <ResetButton @click="$emit('reset')" />
        </div>
    </div>
</template>

<script setup>
import CopyButton from "./CopyButton.vue";
import ResetButton from "./ResetButton.vue";

defineProps({ result: String, copied: Boolean });
defineEmits(["copy", "reset"]);
</script>
