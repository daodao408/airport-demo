import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BaiduMap from 'vue-baidu-map'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './sass/default.scss'

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.use(BaiduMap, {
  ak: 'nSxiPohfziUaCuONe4ViUP2N'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
