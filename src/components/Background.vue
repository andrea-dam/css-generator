<template>
    <div class="row-span-3 flex items-center justify-center">
        <ExampleBox property="box-background" class="h-64 w-96 border" />
    </div>
    <div class="row-span-3 grid grid-rows-2 divide-y">
        <div class="grid grid-cols-3 items-center justify-between gap-8">
            <div class="flex flex-col gap-5">
                <SelectInput
                    :parameter="bgAttachment"
                    :options="['scroll', 'fixed', 'local']"
                    @update-value="newValue => (bgAttachment = newValue)">
                    Background Attachment
                </SelectInput>

                <SelectInput
                    :parameter="bgPosition"
                    :options="['center', 'top', 'right', 'bottom', 'left']"
                    @update-value="newValue => (bgPosition = newValue)">
                    Background Position
                </SelectInput>
            </div>

            <div class="flex flex-col gap-5">
                <SelectInput
                    :parameter="bgSize"
                    :options="['cover', 'contain', 'auto', '50%']"
                    @update-value="newValue => (bgSize = newValue)">
                    Background Size
                </SelectInput>

                <SelectInput
                    :parameter="bgRepeat"
                    :options="['repeat-x', 'repeat-y', 'repeat', 'space', 'round', 'no-repeat']"
                    @update-value="newValue => (bgRepeat = newValue)">
                    Background Repeat
                </SelectInput>
            </div>

            <div class="flex justify-between">
                <div class="flex items-center gap-2">
                    <label for="transparent" class="dark:text-white">Trasparent</label>
                    <input type="checkbox" name="transparent" id="transparent" :checked="isTransparent" @input="toggleTransparency()" />
                </div>
                <ColorInput v-if="!isTransparent" :color="bgColor" @update-color="newColor => (bgColor = newColor)" classes="w-32 h-12" />
            </div>
        </div>

        <ResultBox :result="result" @reset="reset" @copy="copy(result)" :copied="copied" />
    </div>
</template>

<script setup>
import { watch } from "vue";
import { useStyleTag, useStorage, useClipboard, computedEager, useToggle } from "@vueuse/core";

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
const toggleTransparency = useToggle(isTransparent);

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
