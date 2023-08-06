<template>
    <li class="group">
        <button class="w-full py-5 text-xl group-hover:bg-neutral-50/90 group-hover:text-black" :class="customClass">
            <slot></slot>
        </button>
    </li>
</template>

<script setup>
import { computedEager } from "@vueuse/core";

const props = defineProps({ isActive: Boolean });

const customClass = computedEager(() => {
    return props.isActive ? "bg-neutral-200/70 text-black" : "text-white";
});
</script>
