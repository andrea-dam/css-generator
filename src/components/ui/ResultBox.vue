<template>
    <div class="flex items-center gap-5">
        <textarea name="result" id="result" cols="50" rows="1" :value="result" class="resize-none" readonly></textarea>
    </div>
</template>

<script setup>
defineProps({ result: String });
</script>
