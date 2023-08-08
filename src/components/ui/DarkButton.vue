<template>
    <button
        @click="toggleDark()"
        class="absolute right-10 top-10 z-10 flex items-center justify-center rounded-full border bg-neutral-50 p-2 text-3xl shadow dark:bg-neutral-800 dark:text-white dark:shadow-none">
        <Icon v-if="isDark" :icon="sunnyFilledLoopToMoonFilledLoopTransition"></Icon>
        <Icon v-else :icon="moonFilledToSunnyFilledLoopTransition"></Icon>
    </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import moonFilledToSunnyFilledLoopTransition from "@iconify-icons/line-md/moon-filled-to-sunny-filled-loop-transition";
import sunnyFilledLoopToMoonFilledLoopTransition from "@iconify-icons/line-md/sunny-filled-loop-to-moon-filled-loop-transition";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
