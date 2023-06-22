import { createApp } from "vue";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

import "./style.css";

import ExampleBox from "./components/ui/ExampleBox.vue";
import ResultBox from "./components/ui/ResultBox.vue";
import ColorInput from "./components/ui/ColorInput.vue";
import RangeInput from "./components/ui/RangeInput.vue";
import SelectInput from "./components/ui/SelectInput.vue";

const app = createApp(App);

app.component("Icon", Icon);

app.component("ExampleBox", ExampleBox);
app.component("ResultBox", ResultBox);
app.component("ColorInput", ColorInput);
app.component("RangeInput", RangeInput);
app.component("SelectInput", SelectInput);

app.mount("#app");
