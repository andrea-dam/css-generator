<template>
    <div class="relative grid h-full w-full grid-rows-6 rounded border bg-white px-12 shadow-inner dark:border-none dark:bg-neutral-700">
        <div class="row-span-3 flex items-center justify-center">
            <div class="box-background h-64 w-96 border" />
        </div>
        <div class="row-span-3 grid grid-rows-2 divide-y">
            <div class="grid grid-cols-3 items-center justify-between gap-8">
                <div class="flex flex-col gap-5">
                    <SelectInput
                        :key="bgAttachment"
                        v-model="bgAttachment"
                        parameter="bg-ttachment"
                        :options="['scroll', 'fixed', 'local']">
                        Background Attachment
                    </SelectInput>

                    <SelectInput
                        :key="bgPosition"
                        v-model="bgPosition"
                        parameter="bg-position"
                        :options="['center', 'top', 'right', 'bottom', 'left']">
                        Background Position
                    </SelectInput>
                </div>

                <div class="flex flex-col gap-5">
                    <SelectInput :key="bgSize" v-model="bgSize" parameter="bg-size" :options="['cover', 'contain', 'auto', '50%']">
                        Background Size
                    </SelectInput>

                    <SelectInput
                        :key="bgRepeat"
                        v-model="bgRepeat"
                        parameter="bg-repeat"
                        :options="['repeat-x', 'repeat-y', 'repeat', 'space', 'round', 'no-repeat']">
                        Background Repeat
                    </SelectInput>
                </div>

                <div class="flex justify-between">
                    <div class="flex items-center gap-2">
                        <label for="transparent" class="dark:text-white">Trasparent</label>
                        <input type="checkbox" name="transparent" id="transparent" v-model="isTransparent" :checked="isTransparent" />
                    </div>
                    <ColorInput v-if="!isTransparent" v-model="bgColor" classes="w-32 h-12" />
                </div>
            </div>

            <ResultBox :result="result" @reset="reset" @copy="copy(result)" :copied="copied" />
        </div>
    </div>
</template>

<script setup>
import { watch } from "vue";
import { useStyleTag, useStorage, useClipboard, computedEager } from "@vueuse/core";

const bgAttachment = useStorage("bg-attachment", "scroll");
const bgColor = useStorage("bg-color", "transparent");
const bgPosition = useStorage("bg-position", "center");
const bgSize = useStorage("bg-size", "contain");
const bgRepeat = useStorage("bg-repeat", "no-repeat");

const { css } = useStyleTag(
    `.box-background {
        background-image: url('https://picsum.photos/1000');
        background-color: transparent;
        background-position: ${bgPosition.value};
        background-repeat: ${bgRepeat.value};
        background-size: ${bgSize.value};
        background-attachment: ${bgAttachment.value};
    }`,
    {
        id: "box-background",
    }
);

const isTransparent = useStorage("color-transparent", true);

watch(
    [bgColor, bgPosition, bgSize, bgRepeat, bgAttachment, isTransparent],
    ([newColor, newPosition, newSize, newRepeat, newAttachment]) => {
        if (isTransparent.value) {
            css.value = `.box-background {
                background-image: url('https://picsum.photos/1000');
                background-color: transparent;
                background-position: ${newPosition};
                background-repeat: ${newRepeat};
                background-size: ${newSize};
                background-attachment: ${newAttachment};
            }`;
        } else {
            css.value = `.box-background {
                background-image: url('https://picsum.photos/1000');
                background-color: ${newColor};
                background-position: ${newPosition};
                background-repeat: ${newRepeat};
                background-size: ${newSize};
                background-attachment: ${newAttachment};
            }`;
        }
    }
);

const result = computedEager(() => {
    return isTransparent.value
        ? `background: url('https://picsum.photos/1000') transparent ${bgPosition.value} ${bgRepeat.value} ${bgSize.value} ${bgAttachment.value};`
        : `background: url('https://picsum.photos/1000') ${bgColor.value} ${bgPosition.value} ${bgRepeat.value} ${bgSize.value} ${bgAttachment.value};`;
});

const { copy, copied } = useClipboard();

const reset = () => {
    bgPosition.value = "center";
    bgRepeat.value = "no-repeat";
    bgSize.value = "contain";
    bgAttachment.value = "scroll";
    bgColor.value = "transparent";
};
</script>
