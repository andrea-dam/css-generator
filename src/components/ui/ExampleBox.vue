<template>
    <div class="bg-neutral-500 dark:bg-neutral-400" :class="property"></div>
</template>

<script setup>
defineProps({ property: String });
</script>
