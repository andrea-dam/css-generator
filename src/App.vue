<template>
    <aside class="col-span-2 bg-slate-400">
        <ul class="flex h-full flex-col justify-center gap-5">
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
        <div class="bordo grid h-full w-full grid-rows-6 rounded bg-white px-12 pb-6 shadow-inner">
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

<style>
.bordo {
    @apply border;
}
</style>
