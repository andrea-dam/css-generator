<template>
    <div class="row-span-3 flex items-center justify-center">
        <div class="box-shadow h-24 w-24 bg-neutral-500"></div>
    </div>
    <div class="row-span-3">
        <input type="range" name="h-offset" id="h-offset" v-model="hOffset" min="-50" max="50" />
        <input type="range" name="v-offset" id="v-offset" v-model="vOffset" min="-50" max="50" />
        <input type="range" name="blur" id="blur" v-model="blur" min="0" max="50" />
        <input type="range" name="spread" id="spread" v-model="spread" min="-50" max="50" />
        <input type="color" name="color" id="color" v-model="color" />
        <input type="checkbox" name="inset" id="inset" v-model="inset" />
        <textarea name="result" id="result" cols="40" rows="2" :value="css" class="border" readonly disabled wrap="soft"></textarea>
        <button @click="copy(result)"><Icon icon="ph:copy-simple-fill" /></button>
    </div>
</template>

<script setup>
import { watch, computed } from "vue";
import { useStyleTag, useStorage, useClipboard } from "@vueuse/core";
import { Icon } from "@iconify/vue";

const hOffset = useStorage("box-shadow-hoffset", 10);
const vOffset = useStorage("box-shadow-voffset", 10);
const blur = useStorage("box-shadow-blur", 10);
const spread = useStorage("box-shadow-spread", 0);
const color = useStorage("box-shadow-color", "#000000");
const inset = useStorage("box-shadow-inset", false);

const { css } = useStyleTag(
    `.box-shadow { box-shadow: ${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${color.value}; }`,
    {
        id: "box-shadow",
    }
);

watch([hOffset, vOffset, blur, spread, color, inset], ([newH, newV, newBlur, newSpread, newColor, newInset]) => {
    if (newInset) {
        css.value = `.box-shadow { box-shadow: ${newH}px ${newV}px ${newBlur}px ${newSpread}px ${newColor} inset; }`;
    } else {
        css.value = `.box-shadow { box-shadow: ${newH}px ${newV}px ${newBlur}px ${newSpread}px ${newColor}; }`;
    }
});

const result = computed(() => {
    return inset.value
        ? `box-shadow: ${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${color.value} inset;`
        : `box-shadow: ${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${color.value};`;
});

const { copy, copied } = useClipboard();
</script>
