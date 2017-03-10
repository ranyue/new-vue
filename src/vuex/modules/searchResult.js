import * as types from '../mutation-types';

import { productSearch } from '../../api/api.js';

const state = {
    product: [{
        attribute: "",
        lowestPrice: null,
        boxBin: "",
        brandId: null,
        brandName: "",
        category1stId: null,
        category1stName: null,
        category2stId: null,
        category2stName: null,
        category3stId: null,
        category3stName: null,
        code: "",
        couponId: null,
        createDate: null,
        discountId: 0,
        goodsImage: "",
        goodsInstruction: "",
        id: null,
        lcCode: "",
        linkedProduct: "",
        medicalRegistNum: "",
        modifyDate: null,
        name: null,
        origin: "",
        saledNumber: 1,
        salesStatus: 0,
        serviceAreaCity: "",
        serviceAreaProvince: "",
        storeId: 0,
        subtitle: "",
        unit: "",
        hasAgreePrice: 0,
    }],
    err: null,
}
const getters = {
    get_result_title() {
        let obj = {};
        obj = {
            name: state.product[0].name,
            category1stName: state.product[0].category1stName,
            category2stName: state.product[0].category2stName,
            category3stName: state.product[0].category3stName

        }
        return obj;

    }
}

const actions = {
    get_search_result({ commit }, payload) {
        productSearch(payload)
            .then(
                response => {
                    if (response.code == "A0000") {
                        commit(types.GET_SEARCH_RESULT_SUCCESS, response.product);
                    } else {
                        commit(types.GET_SEARCH_RESULT_FAILED, response.msg)
                    }
                    console.log(response)
                }
            )
            .catch(
                e => {
                    commit(types.GET_SEARCH_RESULT_FAILED, e);
                }
            )

    }
}


const mutations = {
    [types.GET_SEARCH_RESULT_SUCCESS](state, payload) {
        state.product = payload;
    },
    [types.GET_SEARCH_RESULT_FAILED](state, payload) {
        state.err = payload;
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}