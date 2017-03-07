import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/page/cart/cart';
import OrderGenerate from '@/page/orderGenerate/orderGenerate.vue';
import Detail from '@/page/detail/index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail
    },{
      path: '/orderGenerate',
      name: 'OrderGenerate',
      component: OrderGenerate
    }
  ]
})
