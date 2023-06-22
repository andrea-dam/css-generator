<template>
    <button
        @click="toggleDark()"
        class="absolute right-10 top-10 flex items-center justify-center rounded-full border bg-neutral-50 p-2 text-3xl shadow dark:bg-neutral-800 dark:text-white dark:shadow-none">
        <Icon v-if="isDark" icon="ph:sun-bold"></Icon>
        <Icon v-else icon="ph:moon-bold"></Icon>
    </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
