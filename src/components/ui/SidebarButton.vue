<template>
    <li class="group">
        <button class="w-full py-5 text-xl text-white group-hover:bg-neutral-50/90 group-hover:text-black" :class="customClass">
            <slot></slot>
        </button>
    </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({ isComponent: Boolean });

const customClass = computed(() => {
    if (props.isComponent) {
        return "bg-neutral-200/90 text-black";
    }
});
</script>
