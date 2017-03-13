
/**
 * author: Yank
 * date: 2017-03-07
 * usage: 订单提交所需用到ACtions ,数据的计算在 view层完成
 */ 



import * as types from '../mutation-types'

import { GetLocalStorageObj } from './../../utils/utils'

// 购物车页面所需请求
import { orderGenerate, queryAddressList, setDefaultAddress, submitOrder, addNewAddress, deleteAddress, updateNewAddress } from '../../api/api.js'

//建立基本address常量

const editAddress = {
   name: '',
    area: '',
    areaCityId: '',
    areaProvinceId: '',
    completeAddress: '',
    mobile: ''
}


// 建立本页独立 数据模型
const state = {
  address: {
    data: []
  },
  editAddress: editAddress,
  orderInfo: null,
  showAddAddress:false 
}

// getters
const getters = {

}

// actions
const actions = {
  // 获取购物车数据
  initOrderData({commit, state }) {
    console.log('获取购物车数据')
    let orderInfo = GetLocalStorageObj('orderInfo')
    commit(types.INITORDERGENERATE, orderInfo)
    queryAddressList().then((res) => {
      if (res.code === 'A0000') {
        commit(types.INITADDRESS, res)
      }
    })
  },
  setDefaultAdd({commit, state}, id){
    setDefaultAddress(id).then((res)=>{
      if(res.code === 'A0000'){
        commit(types.SETDEFAULTADDRESS,id)
      }
    })
  },
  setIsRegister({commit, state}, store){
    commit(types.SETISREGISTER, store)
  },
  setRemark({commit, state},  store ){
    commit(types.SETREMARK, store)
  },

  doOrderSubmit({commit, state}, {addressId, cartId, storeInfo, router}) {
    submitOrder(addressId, cartId, storeInfo).then((res) => {
      if (res.code === 'A0000') {
        router.replace({
          path: '/orderSuccess',
          query:{

          }
        })


      }
    })
  },

  //展现地址添加模块
  doShowAddAddress({commit, state},payload){
    if(payload){
       commit(types.SHOWADDADDRESS)
    }else{
      commit(types.CLOSEADDADDRESS)
    }
   
  },

  // 添加地址
  doAddNewAddress({commit, state},payload) {

    addNewAddress(payload.area, payload.name, payload.mobile, payload.address).then((res) => {
      if (res.code == 'A0000') {
        queryAddressList().then((res) => {
          if (res.code === 'A0000') {
            commit(types.INITADDRESS, res)
            commit(types.CLOSEADDADDRESS)
          }
        })
      }
    })
  // commit(types.ADDNEWADDRESS, res)
  },
  // 刪除地址
  doDeleteAddress({commit, state},item) {
    deleteAddress(item.id).then((res) => {
      if (res.code == 'A0000') {
        commit(types.DELETEADDRESS, item)
      }
    })
  },
  //設置將要修改地址
  doEditAddress({commit, state},item){
    commit(types.EDITADDRESS, item)
  },
  // updateAddress
  doUpdateAddress({commit, state}, payload){
    updateNewAddress(payload.id, payload.area, payload.name, payload.mobile, payload.address).then((res)=>{
      if(res.code == 'A0000'){
        queryAddressList().then((res) => {
          if (res.code === 'A0000') {
            commit(types.INITADDRESS, res)
            commit(types.CLOSEADDADDRESS)
          }
        })
      }
      //commit(types.UPDATEADDRESS, res)
    })
  }
  
}

// mutations
const mutations = {
  //初始化数据， 因购物车时时与后台保持更新，故数据保持交流改变
  [types.INITORDERGENERATE](state, res) {
    console.log('init order1')
    state.orderInfo = res
  },
  //初始化地址数据
  [types.INITADDRESS](state, res) {
    console.log('init order2')
    state.address = res
    state.address.data.forEach((item,index)=>{
      if(item.isDefault==1){
        state.addressId = item.id
        return
      }
    })
  },
  //设置默认地址
  [types.SETDEFAULTADDRESS](state, id) {
    state.address.data.forEach((item)=>{
      console.log(id)
      if(item.id == id){
        item.isDefault = 1
        state.addressId = id
      }else{
        item.isDefault = 0
      }
    })
  },
  // 设置是否注册表
  [types.SETISREGISTER](state, {store, isRegister}) {
    store.isRegister = Number(isRegister)
  },
  // 设置商品留言
  [types.SETREMARK](state, {store, remark}) {
    store.remark = remark
  },
  //展示新地址模块
  [types.SHOWADDADDRESS](state) {
    state.showAddAddress = true
    state.editAddress = editAddress
  },
  [types.CLOSEADDADDRESS](state) {
    state.showAddAddress = false
  },
  // 设置新地址
  [types.ADDNEWADDRESS](state, {res}) {

  },
  // 删除地址
  [types.DELETEADDRESS](state, item) {
    state.address.data.splice(item,1)
  },
  //設置將要修改的地址
  [types.EDITADDRESS](state, item) {
    state.editAddress = item
    state.showAddAddress = true
  },
  // 更新地址
  [types.UPDATEADDRESS](state, item) {}
}

export default {
  state,
  getters,
  actions,
mutations}
