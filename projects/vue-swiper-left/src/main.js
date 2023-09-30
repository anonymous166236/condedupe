import Vue from "vue";
import App from "./App.vue";
import VueTouch from "vue-touch";
import router from './router'

Vue.use(VueTouch, { name: "v-touch" });
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
