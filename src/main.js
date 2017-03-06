// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './vuex/store'
import { currency } from './currency'

import { Button , InputNumber} from 'element-ui'

import { Button, InputNumber, Checkbox, Breadcrumb, BreadcrumbItem } from 'element-ui'

//import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.filter('currency', currency)
Vue.use(Button)
Vue.use(InputNumber)

Vue.use(Checkbox)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
