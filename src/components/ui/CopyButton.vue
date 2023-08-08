<template>
    <BaseButton class="w-36 justify-between bg-blue-500 px-4 hover:bg-blue-400 active:bg-blue-500">
        <span class="text-2xl">
            <Icon v-if="copied" :icon="copyCheck" />
            <Icon v-else :icon="copyIcon" />
        </span>
        <span>
            <span v-if="copied" class="text-base">Copiato!</span>
            <span v-else class="text-base">Copia</span>
        </span>
    </BaseButton>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import copyCheck from "@iconify-icons/lucide/copy-check";
import copyIcon from '@iconify-icons/lucide/copy';

import BaseButton from "./BaseButton.vue";

defineProps({ copied: Boolean });
</script>
