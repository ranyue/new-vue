import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/page/cart/cart';
import OrderGenerate from '@/page/orderGenerate/orderGenerate.vue';
import Detail from '@/page/detail/index.vue';

import searchResult from '@/page/searchResult/index.vue';

import search from '@/page/search/index.vue';
import Index from '@/page/index/Index.vue';

Vue.use(Router)

export default new Router({

    routes: [{
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/cart',
        name: 'Cart',
        component: Cart
    }, {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }, {
        path: '/orderGenerate',
        name: 'OrderGenerate',
        component: OrderGenerate
    }, {
        path: '/searchResult',
        name: 'searchResult',
        component: searchResult
    }, {
        path: '/search',
        name: 'search',
        component: search,
    }]
})