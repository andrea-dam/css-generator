<template>
    <aside class="col-span-2 bg-slate-400">
        <ul>
            <li>
                <button @click="component = 'box-shadow'">Box Shadow</button>
            </li>
            <li>
                <button @click="component = 'border'">Border</button>
            </li>
        </ul>
    </aside>

    <main class="container col-span-10 flex items-center justify-center bg-neutral-50 px-12 py-12">
        <div class="grid h-full w-full grid-rows-6 rounded border bg-white px-12 pb-6 shadow-inner">
            <Component :is="shownComponent"></Component>
        </div>
    </main>
</template>

<script setup>
import BoxShadow from "/src/components/BoxShadow.vue";
import TheBorder from "./components/TheBorder.vue";
import { computed, ref } from "vue";

const component = ref("box-shadow");

const shownComponent = computed(() => {
    if (component.value === "box-shadow") {
        return BoxShadow;
    } else if (component.value === "border") {
        return TheBorder;
    }
});
</script>
