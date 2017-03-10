import Vue from 'vue'
import Vuex from 'vuex'


import * as actions from './actions'
import * as getters from './getters'

//new add
import shopcart from './modules/shopcart'
import detail from './modules/detail'
import ordergenerate from './modules/orderGenerate.js'

import searchResult from './modules/searchResult'

import search from './modules/search'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        shopcart,
        detail,
        ordergenerate,
        searchResult,
        search,
    },
    strict: debug
})