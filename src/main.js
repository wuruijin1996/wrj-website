import Vue from 'vue';
// import ECharts from 'vue-echarts/components/ECharts';
import App from './App.vue';
import router from './router';
import store from './store';
import './common/iconfont/iconfont.css';
// import 'echarts/lib/chart/bar';
// import 'echarts/lib/component/tooltip';
// import 'echarts/theme/macarons.js';

// Vue.component('v-chart', ECharts);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
