import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Chartkick from "vue-chartkick"
import Chart from "chart.js"

import VueFusionCharts from 'vue-fusioncharts';
import FusionCharts from 'fusioncharts';
import Column2D from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import VueApexCharts from 'vue-apexcharts'
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import 'ag-grid-enterprise';

Vue.use(VueFusionCharts, FusionCharts, Column2D, FusionTheme);
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false
Vue.use(Chartkick.use(Chart))


new Vue({
  vuetify,
  render: h => h(App)

}).$mount('#app')

