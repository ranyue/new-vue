
/**
 * author: Yank
 * date: 2017-03-06
 * usage: 购物车所需用到ACtions ,数据的计算在 view层完成
 */ 

import { SetLocalStorageObj } from './../../utils/utils'

import * as types from '../mutation-types'

// 购物车页面所需请求
import { queryCartList, changeNum, cartDelete, selectGood , orderGenerate } from '../../api/api.js';

//建立本页独立 数据模型
const state = {
  cartlist: null
}

// getters
const getters = {
  
}

// actions
const actions = {
  //change goods Num
  changeGoodsNum({commit, state }, {cartId, value}) {
    changeNum(cartId, value).then((res) => {
      if (res.code === 'A0000') {
        commit(types.INITCART, res)
      }
    })
  },
  // 删除cart goods
  doCartDelete({commit, state },cartId){
    cartDelete(cartId).then((res) => {
      if (res.code == 'A0000') {
        commit(types.INITCART, res.data)
      }
    })
  },
  //toggle goods开关
  doSelectGood({commit, state },{
    cartId,
    type,
    isSelected
  }){
    selectGood(cartId, type, isSelected).then((res) => {
      if (res.code == 'A0000') {
        commit(types.INITCART, res.data)
      }
    })
  },
  //获取购物车数据
  initCartData({commit, state }){
    queryCartList().then((res)=>{
      if(res.code === 'A0000'){
        commit(types.INITCART, res)
      }
    })
  },
  //获取order generate 页面数据
  getOrderData({commit, state},{items,router}){
     orderGenerate(items).then((res)=>{
      if(res.code == 'A0000'){
        SetLocalStorageObj('orderInfo', res);
        //commit(types.INITORDERGENERATE, res);

        router.push({
          path:'/orderGenerate'
        })
      }else{
        alert(res.msg)
      }
    }).catch((e)=>{
      console.log('获取购物车数据'+ e)
    })

  }
  
}

// mutations
const mutations = {
  //初始化数据， 因购物车时时与后台保持更新，故数据保持交流改变
  [types.INITCART](state, res) {
    console.log('init cart')
    state.cartlist = res
  },
  //购物车数据改變，暂时未用到
  [types.CHANGENUM](state, res) {
    state.cartlist = res
  }

}

export default {
  state,
  getters,
  actions,
  mutations
}
