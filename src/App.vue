<template>
    <!-- Barra Laterale -->
    <aside class="relative col-span-2 flex flex-col items-center bg-blue-600 dark:bg-neutral-950">
        <!-- Titolo -->
        <div class="absolute top-5 text-center text-white drop-shadow-xl">
            <h1 class="text-3xl">CSS Generator</h1>
            <h2 class="text-md italic">by Andrea Damiani</h2>
        </div>

        <!-- Pulsanti Sezioni -->
        <ul class="flex h-full w-full flex-col justify-center gap-5">
            <SidebarButton @click="component = 'box-shadow'" :isComponent="component === 'box-shadow'">Box Shadow</SidebarButton>

            <SidebarButton @click="component = 'border'" :isComponent="component === 'border'">Border</SidebarButton>

            <SidebarButton @click="component = 'background'" :isComponent="component === 'background'">Background</SidebarButton>

            <SidebarButton @click="component = 'animation'" :isComponent="component === 'animation'">Animation</SidebarButton>
        </ul>
    </aside>

    <main class="col-span-10 flex items-center justify-center bg-neutral-50 p-12 dark:bg-neutral-900">
        <div
            class="relative grid h-full w-full grid-rows-6 rounded border bg-white px-12 shadow-inner dark:border-none dark:bg-neutral-700">
            <DarkButton />
            <Component :is="shownComponent" />
        </div>
    </main>
</template>

<script setup>
import { computed } from "vue";
import { useStorage } from "@vueuse/core";

import BoxShadow from "/src/components/BoxShadow.vue";
import TheBorder from "./components/TheBorder.vue";
import Background from "./components/Background.vue";
import TheAnimation from "./components/TheAnimation.vue";

import SidebarButton from "./components/ui/SidebarButton.vue";
import DarkButton from "./components/ui/DarkButton.vue";

const component = useStorage("shown-component", "box-shadow");

const shownComponent = computed(() => {
    if (component.value === "box-shadow") {
        return BoxShadow;
    } else if (component.value === "border") {
        return TheBorder;
    } else if (component.value === "background") {
        return Background;
    } else if (component.value === "animation") {
        return TheAnimation;
    }
});
</script>
