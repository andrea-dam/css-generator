<template>
    <div class="row-span-3 flex items-center justify-center">
        <div class="box-shadow h-24 w-24 border bg-neutral-500"></div>
    </div>
    <div class="row-span-3">
        <input type="range" name="h-offset" id="h-offset" v-model="hOffset" min="0" max="200" />
        <input type="range" name="v-offset" id="v-offset" v-model="vOffset" />
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useStyleTag } from "@vueuse/core";

const hOffset = ref(0);
const vOffset = ref(0);

useStyleTag(`.box-shadow { box-shadow: ${hOffset.value}px ${vOffset.value}px; }`);
</script>
