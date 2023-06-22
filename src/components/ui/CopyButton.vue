<template>
    <BaseButton class="w-32 justify-between bg-blue-500 px-4 hover:bg-blue-400 active:bg-blue-500">
        <span class="text-2xl">
            <Icon v-if="copied" icon="lucide:copy-check" />
            <Icon v-else icon="lucide:copy" />
        </span>
        <span>
            <span v-if="copied" class="text-base">Copiato!</span>
            <span v-else class="text-base">Copia</span>
        </span>
    </BaseButton>
</template>

<script setup>
import BaseButton from "./BaseButton.vue";
defineProps({ copied: Boolean });
</script>
