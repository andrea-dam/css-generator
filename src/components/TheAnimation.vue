<template>
    <div class="relative row-span-3 flex items-center">
        <ExampleBox property="animation" class="absolute h-1/2 w-1/6" />
    </div>
    <button
        @click="runAnimation"
        class="absolute right-10 top-28 flex items-center justify-center rounded-full border bg-neutral-50 p-2 text-3xl shadow dark:bg-neutral-800 dark:text-white dark:shadow-none">
        <Icon v-if="!isRunning" icon="clarity:play-solid" />
        <Icon v-else icon="clarity:pause-solid" />
    </button>
    <div class="row-span-3 grid grid-rows-2 divide-y dark:text-white">
        <div></div>
        <div></div>
    </div>
</template>

<script setup>
import { watch, computed, ref } from "vue";
import { useStyleTag, useStorage, useClipboard, useToggle } from "@vueuse/core";

const duration = useStorage("animation-duration", 1000);
const animFunction = useStorage("animation-function", "ease-in");
const delay = useStorage("animation-delay", 0);
const count = useStorage("animation-count", 1);
const direction = useStorage("animation-direction", "normal");
const fillMode = useStorage("animation-fill-mode", "none");

const isRunning = ref(false);

const { css } = useStyleTag(
    `.animation {
        animation: myAnimation ${duration.value}ms ${animFunction.value} ${delay.value}ms ${count.value} ${direction.value} ${fillMode.value} paused;
    }
    `,
    {
        id: "animation",
    }
);

const runAnimation = () => {
    isRunning.value = true;
    css.value = `.animation {
        animation: myAnimation ${duration.value}ms ${animFunction.value} ${delay.value}ms ${count.value} ${direction.value} ${fillMode.value} running;
    }
    `;
    setTimeout(() => {
        isRunning.value = false;
        css.value = `.animation {
        animation: myAnimation ${duration.value}ms ${animFunction.value} ${delay.value}ms ${count.value} ${direction.value} ${fillMode.value} paused;
    }
    `;
    }, duration.value);
};
</script>
