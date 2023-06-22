<template>
    <div class="row-span-3 flex items-center justify-center">
        <ExampleBox property="bordo-box" class="h-40 w-40" />
    </div>

    <div class="row-span-3 grid grid-rows-2 divide-y">
        <div class="grid grid-cols-12 items-center">
            <!-- width -->
            <RangeInput class="col-span-5" :parameter="width" max="32" @update-value="newValue => (width = newValue)">Width</RangeInput>

            <!-- style -->
            <div class="col-span-2 flex flex-col items-center justify-center">
                <label for="style">Style</label>
                <select name="style" id="style" v-model="style" class="rounded border border-neutral-500 p-1">
                    <option value="solid">Solid</option>
                    <option value="dotted">Dotted</option>
                    <option value="dashed">Dashed</option>
                    <option value="double">Double</option>
                    <option value="groove">Groove</option>
                    <option value="ridge">Ridge</option>
                    <option value="inset">Inset</option>
                    <option value="outset">Outset</option>
                </select>
            </div>

            <!-- color -->
            <ColorInput class="col-span-5" :color="color" @update-color="newColor => (color = newColor)" classes="w-64" />
        </div>
        <ResultBox :result="result" @reset="reset" @copy="copy(result)" :copied="copied" />
    </div>
</template>

<script setup>
import { watch, computed } from "vue";
import { useStyleTag, useStorage, useClipboard } from "@vueuse/core";

const width = useStorage("border-width", 10);
const style = useStorage("border-style", "solid");
const color = useStorage("border-color", "#000000");

const { css } = useStyleTag(`.bordo-box { border: ${width.value}px ${style.value} ${color.value}}`, {
    id: "bordo-box",
});

watch([width, style, color], ([newWidth, newStyle, newColor]) => {
    css.value = `.bordo-box { border: ${newWidth}px ${newStyle} ${newColor}; }`;
});

const result = computed(() => {
    return `border: ${width.value}px ${style.value} ${color.value};`;
});

const { copy, copied } = useClipboard();

const reset = () => {
    width.value = 10;
    style.value = "solid";
    color.value = "#000000";
};
</script>
