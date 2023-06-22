<template>
    <ExampleBox property="box-shadow" />
    <div class="row-span-3 grid grid-rows-2 divide-y">
        <div class="row-span-1 grid grid-cols-2 gap-x-20">
            <div class="flex items-center justify-between">
                <label for="h-offset">H-Offset</label>
                <div class="flex flex-col items-center">
                    <span>{{ hOffset }}</span>
                    <input type="range" name="h-offset" id="h-offset" v-model="hOffset" min="-100" max="100" @dblclick="hOffset = 0" />
                </div>
            </div>
            <div class="flex items-center justify-between">
                <label for="v-offset">V-Offset</label>
                <div class="flex flex-col items-center">
                    <span>{{ vOffset }}</span>
                    <input type="range" name="v-offset" id="v-offset" v-model="vOffset" min="-50" max="50" @dblclick="vOffset = 0" />
                </div>
            </div>
            <div class="flex items-center justify-between">
                <label for="blur">Blur</label>
                <div class="flex flex-col items-center">
                    <span>{{ blur }}</span>
                    <input type="range" name="blur" id="blur" v-model="blur" min="0" max="50" @dblclick="blur = 0" />
                </div>
            </div>
            <div class="flex items-center justify-between">
                <label for="spread">Spread</label>
                <div class="flex flex-col items-center">
                    <span>{{ spread }}</span>
                    <input type="range" name="spread" id="spread" v-model="spread" min="-50" max="50" @dblclick="spread = 0" />
                </div>
            </div>
        </div>
        <div class="row-span-1 grid grid-cols-2 items-center gap-x-20">
            <div class="flex items-center justify-between">
                <div class="flex flex-col items-center">
                    <label for="color">Color</label>
                    <input type="color" name="color" id="color" v-model="color" class="h-24 w-24" />
                </div>
                <div class="flex items-center gap-5">
                    <label for="inset" class="text-sm">Inset</label>
                    <input type="checkbox" name="inset" id="inset" v-model="inset" class="text-4xl" />
                </div>
            </div>
            <ResultBox :result="result" @reset="reset" @copy="copy(result)" />
        </div>
    </div>
</template>

<script setup>
import { watch, computed } from "vue";
import { useStyleTag, useStorage, useClipboard } from "@vueuse/core";

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

const reset = () => {
    hOffset.value = 10;
    vOffset.value = 10;
    blur.value = 10;
    spread.value = 0;
    color.value = "#000000";
    inset.value = false;
};
</script>
