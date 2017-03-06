
/**
 * author: Yank
 * date: 2017-03-06
 * usage: ���ﳵ�����õ�ACtions ,���ݵļ����� view�����
 */ 



import * as types from '../mutation-types'

// ���ﳵҳ����������
import { queryCartList, changeNum, cartDelete, selectGood } from '../../api/api.js';

//������ҳ���� ����ģ��
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
  // ɾ��cart goods
  doCartDelete({commit, state },cartId){
    cartDelete(cartId).then((res) => {
      if (res.code == 'A0000') {
        commit(types.INITCART, res.data)
      }
    })
  },
  //toggle goods����
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
  //��ȡ���ﳵ����
  initCartData({commit, state }){
    queryCartList().then((res)=>{
      if(res.code === 'A0000'){
        commit(types.INITCART, res)
      }
    })
  },
  
}

// mutations
const mutations = {
  //��ʼ�����ݣ� ���ﳵʱʱ���̨���ָ��£������ݱ��ֽ����ı�
  [types.INITCART](state, res) {
    console.log('init cart')
    state.cartlist = res
  },
  //���ﳵ���ݸ�׃����ʱδ�õ�
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
