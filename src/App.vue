<template>
    <aside class="relative col-span-2 flex flex-col items-center bg-slate-400">
        <h1 class="absolute top-5 text-3xl text-white drop-shadow-lg">CSS Generator</h1>
        <ul class="flex h-full w-full flex-col justify-center gap-5">
            <li class="group">
                <button
                    @click="component = 'box-shadow'"
                    class="w-full py-5 text-xl text-white group-hover:bg-slate-200/90 group-hover:text-black"
                    :class="{ 'bg-slate-200/90 text-black': component === 'box-shadow' }">
                    Box Shadow
                </button>
            </li>
            <li class="group">
                <button
                    @click="component = 'border'"
                    class="w-full py-5 text-xl text-white group-hover:bg-slate-200/90 group-hover:text-black"
                    :class="{ 'bg-slate-200/90 text-black': component === 'border' }">
                    Border
                </button>
            </li>
        </ul>
    </aside>

    <main class="col-span-10 flex items-center justify-center bg-neutral-50 p-12">
        <div class="grid h-full w-full grid-rows-6 rounded border bg-white px-12 shadow-inner">
            <Component :is="shownComponent" />
        </div>
    </main>
</template>

<script setup>
import BoxShadow from "/src/components/BoxShadow.vue";
import TheBorder from "./components/TheBorder.vue";
import { computed } from "vue";
import { useStorage } from "@vueuse/core";

const component = useStorage("shown-component", "box-shadow");

const shownComponent = computed(() => {
    if (component.value === "box-shadow") {
        return BoxShadow;
    } else if (component.value === "border") {
        return TheBorder;
    }
});
</script>
