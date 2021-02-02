import Vue from 'vue';

import app from './App.vue';
import store from './vuex/store';
import router from './router/router';
import './icons';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(app),
  store,
  router
}).$mount('#app');
