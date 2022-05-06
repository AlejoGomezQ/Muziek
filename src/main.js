import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Plugins
import eventBus from "@/plugins/eventBus";

//libraries
import "./libraries/bootstrapVue";

Vue.use(eventBus);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
