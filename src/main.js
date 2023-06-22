import { createApp } from "vue";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

import "./style.css";

import ExampleBox from "./components/ui/ExampleBox.vue";
import ResultBox from "./components/ui/ResultBox.vue";

const app = createApp(App);

app.component("Icon", Icon);
app.component("ExampleBox", ExampleBox);
app.component("ResultBox", ResultBox);

app.mount("#app");
