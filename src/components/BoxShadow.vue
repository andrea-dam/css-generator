<template>
    <div
            class="relative grid h-full w-full grid-rows-6 rounded border bg-white px-12 shadow-inner dark:border-none dark:bg-neutral-700">
        <div class="row-span-3 flex items-center justify-center">
            <ExampleBox property="box-shadow" class="h-1/2 w-1/6" />
        </div>
        <div class="row-span-3 grid grid-rows-2 divide-y">
            <div class="row-span-1 grid grid-cols-2 items-center gap-x-10">
                <!-- h-offset -->
                <RangeInput :parameter="hOffset" min="-100" max="100" @update-value="newValue => (hOffset = newValue)">H-Offset</RangeInput>

                <!-- v-offset -->
                <RangeInput :parameter="vOffset" min="-50" max="50" @update-value="newValue => (vOffset = newValue)">V-Offset</RangeInput>

                <!-- blur -->
                <RangeInput :parameter="blur" min="0" max="50" @update-value="newValue => (blur = newValue)">Blur</RangeInput>

                <!-- Spread -->
                <RangeInput :parameter="spread" min="-50" max="50" @update-value="newValue => (spread = newValue)">Spread</RangeInput>
            </div>
            <div class="row-span-1 grid grid-cols-2 items-center gap-x-10">
                <div class="flex items-center justify-around">
                    <!-- color -->
                    <ColorInput :color="color" @update-color="newColor => (color = newColor)" classes="w-64 h-12" />

                    <!-- inset -->
                    <div class="flex items-center gap-5">
                        <label for="inset" class="text-lg dark:text-white">Inset</label>
                        <input type="checkbox" name="inset" id="inset" v-model="inset" class="h-10 w-10 rounded" />
                    </div>
                </div>
                <ResultBox :result="result" @reset="reset" @copy="copy(result)" :copied="copied" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from "vue";
import { useStyleTag, useStorage, useClipboard, computedEager } from "@vueuse/core";

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

const result = computedEager(() => {
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
