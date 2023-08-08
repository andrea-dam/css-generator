<template>
    <div class="relative grid h-full w-full grid-rows-6 rounded border bg-white px-12 shadow-inner dark:border-none dark:bg-neutral-700">
        <div class="relative row-span-3 flex items-center">
            <div class="animation absolute h-1/2 w-1/6 bg-neutral-500 dark:bg-neutral-400" />
        </div>
        <button
            @click="runAnimation"
            class="absolute right-10 top-28 flex items-center justify-center rounded-full border bg-neutral-50 p-2 text-3xl shadow dark:bg-neutral-800 dark:text-white dark:shadow-none"
            :disabled="isRunning">
            <Icon v-if="!isRunning" :icon="playSolid" class="text-green-600" />
            <Icon v-else :icon="spinner3Icon" class="animate-spin" />
        </button>

        <div class="row-span-3 grid grid-rows-2 divide-y dark:text-white">
            <div class="mb-1 grid grid-cols-2 gap-x-10 gap-y-3">
                <RangeInput
                    @dblclick="duration = 1000"
                    v-model="duration"
                    parameter="duration"
                    min="500"
                    max="3000"
                    :is-disabled="isRunning">
                    Duration (ms)
                </RangeInput>

                <SelectInput
                    :key="direction"
                    v-model="direction"
                    parameter="direction"
                    :options="['normal', 'reverse', 'alternate', 'alternate-reverse']"
                    :is-disabled="isRunning">
                    Direction
                </SelectInput>

                <RangeInput @dblclick="count = 1" v-model="count" parameter="count" min="1" max="5" :is-disabled="isRunning">
                    Iteration Count
                </RangeInput>

                <SelectInput
                    :key="animFunction"
                    v-model="animFunction"
                    parameter="animation-function"
                    :options="['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']"
                    :is-disabled="isRunning">
                    Timing Function
                </SelectInput>

                <RangeInput @dblclick="delay = 0" v-model="delay" parameter="delay" min="0" max="5000" :is-disabled="isRunning">
                    Delay (ms)
                </RangeInput>

                <SelectInput
                    :key="fillMode"
                    v-model="fillMode"
                    parameter="fill-mode"
                    :options="['none', 'forwards', 'backwards', 'both']"
                    :is-disabled="isRunning">
                    Fill Mode
                </SelectInput>
            </div>

            <ResultBox :result="result" @reset="reset" @copy="copy(result)" :copied="copied" />
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStyleTag, useStorage, useClipboard } from "@vueuse/core";
import { Icon } from "@iconify/vue";
import playSolid from "@iconify-icons/clarity/play-solid";
import spinner3Icon from "@iconify-icons/icomoon-free/spinner3";

const duration = useStorage("animation-duration", 1000);
const animFunction = useStorage("animation-function", "ease-in");
const delay = useStorage("animation-delay", 0);
const count = useStorage("animation-count", 1);
const direction = useStorage("animation-direction", "normal");
const fillMode = useStorage("animation-fill-mode", "none");

const isRunning = ref(false);

const { css } = useStyleTag(``, {
    id: "animation",
});

const runAnimation = () => {
    isRunning.value = true;
    css.value = `.animation {
            animation: myAnimation ${duration.value}ms ${animFunction.value} ${delay.value}ms ${count.value} ${direction.value} ${fillMode.value};
        }
        `;

    setTimeout(() => {
        isRunning.value = false;
        if (fillMode.value === "none") {
            css.value = ``;
        } else {
            css.value = `.animation {
                ${delay.value}ms ${count.value} ${direction.value} ${fillMode.value};
            }`;
        }
    }, duration.value * count.value + delay.value);
};

const { copy, copied } = useClipboard();

const result = computed(() => {
    return `animation: myAnimation ${duration.value}ms ${animFunction.value} ${delay.value}ms ${count.value} ${direction.value} ${fillMode.value};`;
});

const reset = () => {
    duration.value = 1000;
    animFunction.value = "ease-in";
    delay.value = 0;
    count.value = 1;
    direction.value = "normal";
    fillMode.value = "none";
};
</script>
