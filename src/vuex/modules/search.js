import * as types from '../mutation-types';

import { search } from '../../api/api.js';


const state = {
    product: [
        //{
        //     attribute: null,
        //     boxBin: "",
        //     brandId: null,
        //     brandName: "",
        //     category1stId: null,
        //     category1stName: null,
        //     category2stId: null,
        //     category2stName: null,
        //     category3stId: null,
        //     category3stName: null,
        //     code: "",
        //     couponId: null,
        //     createDate: {
        //         date: null,
        //         day: null,
        //         hours: null,
        //         minutes: null,
        //         month: null,
        //         seconds: null,
        //         time: null,
        //         timezoneOffset: null,
        //         year: null
        //     },
        //     discountId: null,
        //     goodsImage: "",
        //     goodsInstruction: null,
        //     hasAgreePrice: 0,
        //     id: null,
        //     imgList: [],
        //     lcCode: null,
        //     linkedProduct: null,
        //     lowestPrice: null,
        //     medicalRegistNum: "",
        //     modifyDate: {
        //         date: null,
        //         day: null,
        //         hours: null,
        //         minutes: null,
        //         month: null,
        //         seconds: null,
        //         time: null,

        //         timezoneOffset: null,
        //         year: null

        //     },
        //     name: null,
        //     origin: "",
        //     saledNumber: 0,
        //     salesStatus: 0,
        //     serviceAreaCity: "",
        //     serviceAreaProvince: "",
        //     storeId: null,
        //     storeName: null,
        //     subtitle: null,
        //     unit: null,
        // }
    ],
    err: null,
    search_key : []

}

const getters = {

}


const actions = {
    search_by_text({ commit }, payload) {
        search(payload)
            .then(response => {
                console.log(response, 'actions')
                if (response.code == "A0000") {
                    commit(types.SEARCH_BY_TEXT_SUCCESS, response.product);
                } else {
                    commit(types.SEARCH_BY_TEXT_FAILED, response.msg);
                }
            })
            .catch(e => {
                commit(types.SEARCH_BY_TEXT_FAILED, e);
            })
    }
}
const mutations = {
    [types.SEARCH_BY_TEXT_SUCCESS](state, payload) {
        console.log(payload)
        state.product = payload;
        console.log(state.product, 'mutation');
    },
    [types.SEARCH_BY_TEXT_FAILED](state, payload) {
        console.log(payload);
        state.err = payload;
    },
    [types.SELECT_SEARCH_KEY](state,payload){
        state.search_key.push(payload);
    },
    [types.CANCEL_SEARCH_KEY](state,payload){
       
        // state.search_key.filter(item=>{
        //     console.log(item,payload)
        //     return item != payload;
        // });
        
        let index = state.search_key.indexOf(payload)
        console.log(index);
        state.search_key.splice(index,1);
 
    },
    [types.CHANGE_SELECT_KEY](state,payload){
        let index = state.search_key.indexOf(payload);
        if(index >-1){
            state.search_key.splice(index,1);
        }else{
             state.search_key.push(payload);
        }
    }
}


export default {
    getters,
    state,
    actions,
    mutations
}