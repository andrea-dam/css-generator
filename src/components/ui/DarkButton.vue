<template>
    <button
        @click="toggleDark()"
        class="absolute right-10 top-10 z-10 flex items-center justify-center rounded-full border bg-neutral-50 p-2 shadow dark:bg-neutral-800 dark:text-white dark:shadow-none xl:text-2xl 2xl:text-3xl">
        <Icon v-if="isDark" :icon="sunnyFilledLoopToMoonFilledTransition"></Icon>
        <Icon v-else :icon="moonFilledToSunnyFilledTransition"></Icon>
    </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import moonFilledToSunnyFilledTransition from "@iconify-icons/line-md/moon-filled-to-sunny-filled-transition";
import sunnyFilledLoopToMoonFilledTransition from "@iconify-icons/line-md/sunny-filled-loop-to-moon-filled-transition";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
