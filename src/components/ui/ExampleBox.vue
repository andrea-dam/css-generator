<template>
    <div class="row-span-3 flex items-center justify-center">
        <div class="h-32 w-32 bg-neutral-500" :class="property"></div>
    </div>
</template>

<script setup>
defineProps({ property: String });
</script>
