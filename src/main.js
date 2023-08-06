import { createApp } from "vue";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

import "./style.css";

import ExampleBox from "./components/ui/ExampleBox.vue";
import ResultBox from "./components/ui/ResultBox.vue";
import ColorInput from "./components/ui/ColorInput.vue";
import RangeInput from "./components/ui/RangeInput.vue";
import SelectInput from "./components/ui/SelectInput.vue";

createApp(App)
    .component("Icon", Icon)

    .component("ExampleBox", ExampleBox)
    .component("ResultBox", ResultBox)
    .component("ColorInput", ColorInput)
    .component("RangeInput", RangeInput)
    .component("SelectInput", SelectInput)

    .mount("#app");
