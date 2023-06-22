<template>
    <div class="bg-neutral-500" :class="property"></div>
</template>

<script setup>
defineProps({ property: String });
</script>
