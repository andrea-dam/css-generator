<template>
    <aside class="col-span-2 bg-slate-400">
        <ul>
            <li>
                <button @click="showComponent(BoxShadow)">Box Shadow</button>
            </li>
        </ul>
    </aside>

    <main class="col-span-10 flex items-center justify-center bg-neutral-50 px-24 py-12">
        <div class="grid h-full w-full grid-rows-6 rounded border bg-white shadow-inner">
            <Component :is="shownComponent"></Component>
        </div>
    </main>
</template>

<script setup>
import { ref } from "vue";
import BoxShadow from "/src/components/BoxShadow.vue";

let shownComponent = BoxShadow;

const showComponent = component => {
    showComponent = component;
};
</script>
