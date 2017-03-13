


import { SetLocalStorageObj } from './../../utils/utils'

import * as types from '../mutation-types'

// 购物车页面所需请求
import {layoutBrand, getHotProduct, getPromption} from '../../api/api.js';

//建立本页独立 数据模型
const state = {
  layoutBrand: null,
	hotProductList: null,
	promptionList : null
}

// getters
const getters = {
  
}

// actions
const actions = {
  indexInitData({commit, state}){
		layoutBrand().then((res)=>{
			console.log(res)
			if(res.code == 'A0000'){
				commit(types.LAYOUTBRAND,res);
			}
		});
		getHotProduct().then((res)=>{
			if(res.code == 'A0000'){
				commit(types.GETHOTPRODUCT, res)
			}

		})
		getPromption().then((res)=>{
			if(res.code == 'A0000'){
				commit(types.PROMPTIONLIST, res)
			}
		})
	}

}

// mutations
const mutations = {
  [types.LAYOUTBRAND](state, res){
		state.layoutBrand = res.brandList
	},
	[types.GETHOTPRODUCT](state, res){
		state.hotProductList = res.product
	},
	[types.PROMPTIONLIST](state, res){
		state.promptionList = res.product
	}

}

export default {
  state,
  getters,
  actions,
  mutations
}
