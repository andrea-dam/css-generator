<template>
    <template class="flex h-[100dvh] w-screen flex-col items-center justify-center gap-5 bg-slate-900 p-5 text-slate-50 xl:hidden">
        <h1 class="text-center text-5xl">Tailwind Colors</h1>
        <h2 class="text-2xl italic">by Andrea Damiani</h2>
        <Icon :icon="smartphoneOff" class="text-9xl" />
        <h2 class="text-center text-3xl">This App is only available on large screens.</h2>
    </template>

    <template class="hidden select-none xl:grid xl:h-screen xl:grid-cols-12">
        <!-- Barra Laterale -->
        <aside class="relative col-span-2 flex flex-col items-center bg-blue-600 dark:bg-red-950">
            <!-- Titolo -->
            <div class="absolute top-5 text-center text-white drop-shadow-xl">
                <h1 class="xl:text-2xl 2xl:text-3xl">CSS Generator</h1>
                <h2 class="text-md italic">by Andrea Damiani</h2>
            </div>

            <!-- Pulsanti Sezioni -->
            <ul class="flex h-full w-full flex-col justify-center gap-5">
                <SidebarButton @click="component = 'box-shadow'" :is-active="component === 'box-shadow'">Box Shadow</SidebarButton>

                <SidebarButton @click="component = 'border'" :is-active="component === 'border'">Border</SidebarButton>

                <SidebarButton @click="component = 'background'" :is-active="component === 'background'">Background</SidebarButton>

                <SidebarButton @click="component = 'animation'" :is-active="component === 'animation'">Animation</SidebarButton>
            </ul>
        </aside>

        <!-- Schermata Principale -->
        <main class="col-span-10 flex items-center justify-center bg-neutral-50 dark:bg-neutral-800 xl:p-6 2xl:p-12">
            <DarkButton />

            <ShownComponent />
        </main>
    </template>
</template>

<script setup>
import { computed } from "vue";
import { useStorage } from "@vueuse/core";
import { Icon } from '@iconify/vue';
import smartphoneOff from '@iconify-icons/mdi/smartphone-off';

import BoxShadow from "/src/components/BoxShadow.vue";
import TheBorder from "./components/TheBorder.vue";
import Background from "./components/Background.vue";
import TheAnimation from "./components/TheAnimation.vue";

import SidebarButton from "./components/ui/SidebarButton.vue";
import DarkButton from "./components/ui/DarkButton.vue";

const component = useStorage("shown-component", "box-shadow");

const ShownComponent = computed(() => {
    switch (component.value) {
        case "box-shadow":
            return BoxShadow;
        case "border":
            return TheBorder;
        case "background":
            return Background;
        case "animation":
            return TheAnimation;
    }
});
</script>
