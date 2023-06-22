<template>
    <div class="row-span-4 flex items-center justify-center">
        <ExampleBox property="box-background" class="h-64 w-64" />
    </div>
    <div class="row-span-3 grid grid-rows-2 divide-y"></div>
</template>

<script setup>
import { watch, computed } from "vue";
import { useStyleTag, useStorage, useClipboard } from "@vueuse/core";

const bgAttachment = useStorage("bg-attachment", "scroll");
const bgColor = useStorage("bg-color", "transparent");
const bgPosition = useStorage("bg-position", "center");
const bgSize = useStorage("bg-size", "contain");
const bgRepeat = useStorage("bg-repeat", "no-repeat");

const { css } = useStyleTag(
    `.box-background {
        background-color: ${bgColor.value};
        background-image: url('https://picsum.photos/1000');
        background-position: ${bgPosition.value};
        background-repeat: ${bgRepeat.value};
        background-size: ${bgSize.value};
        background-attachment: ${bgAttachment.value};
    }`,
    {
        id: "box-background",
    }
);

watch([bgColor, bgPosition, bgSize, bgRepeat, bgAttachment], ([newColor, newPosition, newSize, newRepeat, newAttachment]) => {
    css.value = `.box-background {
        background-color: ${newColor};
        background-image: url('https://picsum.photos/1000');
        background-posizion: ${newPosition};
        background-repeat: ${newRepeat};
        background-size: ${newSize};
        background-attachment: ${newAttachment}; }`;
});
</script>
