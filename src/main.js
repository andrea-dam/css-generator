import { createApp } from "vue";
import App from "./App.vue";

import "./style.css";

import ResultBox from "./components/ui/ResultBox.vue";
import ColorInput from "./components/ui/ColorInput.vue";
import RangeInput from "./components/ui/RangeInput.vue";
import SelectInput from "./components/ui/SelectInput.vue";

createApp(App)
    .component("ResultBox", ResultBox)
    .component("ColorInput", ColorInput)
    .component("RangeInput", RangeInput)
    .component("SelectInput", SelectInput)

    .mount("#app");
