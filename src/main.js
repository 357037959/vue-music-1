import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './registerServiceWorker'
import 'amfe-flexible'
// 图标字体
import '@/assets/font-icon/style.css'

import Msg from 'vue-message'
import Dutils from 'd-js-utils'

Vue.use(Msg, {
  text: 'Hello world', duration: 3000, background: 'rgba(7,8,9,0.8)'
})
Vue.prototype.$dutils = Dutils
// 手机横屏提示
Vue.prototype.$dutils.device.checkLayoutOrientation()

Vue.config.productionTip = false

let vueProject = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export {vueProject}
