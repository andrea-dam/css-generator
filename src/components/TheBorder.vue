<template>
    <ExampleBox property="border" />
    <div class="row-span-3 grid grid-rows-2 divide-y">
        <div class="grid grid-cols-3 gap-5">
            <div class="flex items-center justify-between">
                <label for="width">Width</label>
                <div class="flex flex-col items-center">
                    <span>{{ width }}</span>
                    <input type="range" name="width" id="width" v-model="width" max="32" />
                </div>
            </div>
            <div class="flex items-center justify-between">
                <select name="style" id="style" v-model="style">
                    <!-- dotted|dashed|solid|double|groove|ridge|inset|outset -->
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
            <div class="flex items-center justify-between">
                <label for="color">Color</label>
                <input type="color" name="color" id="color" v-model="color" />
            </div>
        </div>
        <div>
            <ResultBox :result="result" />
            <ResetButton @click="reset" />
        </div>
    </div>
</template>

<script setup>
import { watch, computed } from "vue";
import { useStyleTag, useStorage } from "@vueuse/core";

const width = useStorage("border-width", 10);
const style = useStorage("border-style", "solid");
const color = useStorage("border-color", "#000000");

const { css } = useStyleTag(`.border { border: ${width.value}px ${style.value} ${color.value}}`, {
    id: "border",
});

watch([width, style, color], ([newWidth, newStyle, newColor]) => {
    css.value = `.border { border: ${newWidth}px ${newStyle} ${newColor}; }`;
});

const result = computed(() => {
    return `border: ${width.value}px ${style.value} ${color.value};`;
});

const reset = () => {
    width.value = 10;
    style.value = "solid";
    color.value = "#000000";
};
</script>
