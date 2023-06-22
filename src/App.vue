<template>
    <!-- Barra Laterale -->
    <aside class="relative col-span-2 flex flex-col items-center bg-slate-400">
        <!-- Titolo -->
        <h1 class="absolute top-5 text-3xl text-white drop-shadow-lg">CSS Generator</h1>

        <!-- Pulsanti Sezioni -->
        <ul class="flex h-full w-full flex-col justify-center gap-5">
            <SidebarButton @click="component = 'box-shadow'" :class="{ 'active-link': component === 'box-shadow' }">
                Box Shadow
            </SidebarButton>

            <SidebarButton @click="component = 'border'" :class="{ 'active-link': component === 'border' }">Border</SidebarButton>
            <SidebarButton @click="component = 'background'" :class="{ 'active-link': component === 'background' }"
                >Background</SidebarButton
            >
        </ul>
    </aside>

    <main class="col-span-10 flex items-center justify-center bg-neutral-50 p-12">
        <div class="grid h-full w-full grid-rows-6 rounded border bg-white px-12 shadow-inner">
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

import SidebarButton from "./components/ui/SidebarButton.vue";

const component = useStorage("shown-component", "box-shadow");

const shownComponent = computed(() => {
    if (component.value === "box-shadow") {
        return BoxShadow;
    } else if (component.value === "border") {
        return TheBorder;
    } else if (component.value === "background") {
        return Background;
    }
});
</script>

<style>
.active-link {
    @apply bg-slate-200/90 text-black;
}
</style>
