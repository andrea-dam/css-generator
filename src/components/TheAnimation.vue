<template>
    <div class="relative grid h-full w-full grid-rows-6 rounded border bg-white px-12 shadow-inner dark:border-none dark:bg-neutral-700">
        <div class="relative row-span-3 flex items-center">
            <div class="animation absolute h-1/2 w-1/6 bg-neutral-500 dark:bg-neutral-400" />
        </div>
        <button
            @click="runAnimation"
            class="absolute right-10 top-28 flex items-center justify-center rounded-full border bg-neutral-50 p-2 text-3xl shadow dark:bg-neutral-800 dark:text-white dark:shadow-none"
            :disabled="isRunning">
            <Icon v-if="!isRunning" icon="clarity:play-solid" class="text-green-600" />
            <Icon v-else icon="icomoon-free:spinner3" class="animate-spin" />
        </button>
        <div class="row-span-3 grid grid-rows-2 divide-y dark:text-white">
            <div class="grid grid-cols-2 gap-5">
                <div class="flex flex-col justify-around">
                    <RangeInput
                        :parameter="duration"
                        min="500"
                        max="3000"
                        @update-value="newValue => (duration = newValue)"
                        :is-disabled="isRunning">
                        Duration (ms)
                    </RangeInput>

                    <RangeInput
                        :parameter="delay"
                        min="0"
                        max="5000"
                        @update-value="newValue => (delay = newValue)"
                        :is-disabled="isRunning">
                        Delay (ms)
                    </RangeInput>

                    <RangeInput :parameter="count" min="1" max="5" @update-value="newValue => (count = newValue)" :is-disabled="isRunning">
                        Iteration Count
                    </RangeInput>
                </div>
            </div>
            <div class="flex flex-col justify-around">
                <SelectInput
                    :parameter="animFunction"
                    :options="['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out']"
                    @update-value="newValue => (animFunction = newValue)"
                    :is-disabled="isRunning">
                    Timing Function
                </SelectInput>

                <SelectInput
                    :parameter="direction"
                    :options="['normal', 'reverse', 'alternate', 'alternate-reverse']"
                    @update-value="newValue => (direction = newValue)"
                    :is-disabled="isRunning">
                    Direction
                </SelectInput>

                <SelectInput
                    :parameter="fillMode"
                    :options="['none', 'forwards', 'backwards', 'both']"
                    @update-value="newValue => (fillMode = newValue)"
                    :is-disabled="isRunning">
                    Fill Mode
                </SelectInput>
            </div>
        </div>
        <ResultBox :result="result" @reset="reset" @copy="copy(result)" :copied="copied" />
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStyleTag, useStorage, useClipboard } from "@vueuse/core";

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
