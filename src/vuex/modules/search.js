import * as types from '../mutation-types';

import { search, getProductClass, getAllBrands } from '../../api/api.js';


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
    productClass: {
        "修复": [{
            thirdClass: [{
                id: 3,
                // name: "硅橡胶印模材料"
            }, ],
        }, ]
    },
    search_key: [],
    brandList: [{
        name: null,
        id: null
    }],
    text: null,
    brand: [],
    class3: '',


}

const getters = {
    get_class_string(state) {

    },
    get_brand_string(state) {
        let string = '';
        state.brand.map(item => {
            string += item.id + ';'
        })
        string = string.substring(0, string.length - 1);
        return string;
    },
    get_category(state) {
        return state.product.map((item) => {
            return {
                name: state.product.category3stName,
                id: state.product.category3stId
            }
        });
    },
    get_brand(state) {
        return state.product.map(item => {
            return {
                name: state.product.brandName,
                id: state.product.brandId

            }
        })
    },

}


const actions = {
    // 搜索  对应的商品
    search_by_user({ commit }, payload) {
        console.log(payload, 'payload');
        search(payload)
            .then(response => {

                if (response.code == "A0000") {
                    commit(types.SEARCH_BY_TEXT_SUCCESS, response.product);
                } else {
                    commit(types.SEARCH_BY_TEXT_FAILED, response.msg);
                }
            })
            .catch(e => {
                commit(types.SEARCH_BY_TEXT_FAILED, e);
            })
    },
    // 获取所有分类
    get_all_category({ commit }, payload) {
        getProductClass()
            .then(response => {
                console.log(response);
                if (response.code == 'A0000') {
                    commit(types.GET_PRODUCTSCLASS_SUCCESS, response.productClass)
                } else {
                    commit(types.GET_PRODUCTSCLASS_FAILED, response.msg);
                }
            })
            .catch(e => {
                commit(types.GET_PRODUCTSCLASS_FAILED, e);
            })
    },
    // 获取商品所有品牌
    get_all_brands({ commit }, payload) {
        getAllBrands()
            .then(response => {
                console.log(response);
                if (response.code = "A0000") {

                    commit(types.GET_ALL_BRANDS_SUCCESS, response.brandList);
                } else {
                    commit(types.GET_ALL_BRANDS_FAILED, response.msg)
                }
            })
            .catch(e => {
                commit(types.GET_ALL_BRANDS_FAILED, e)
            })
    },
    // search_by_deep({ commit }) {
    //     let obj = {
    //         class3: state.class3,
    //         brand: state.brand,
    //         text: state.text
    //     }
    //     search(obj)

    // }


}
const mutations = {
    [types.SEARCH_BY_TEXT_SUCCESS](state, payload) {

        state.product = payload;

        console.log(state.product, 'mutation');
    },
    [types.SEARCH_BY_TEXT_FAILED](state, payload) {
        console.log(payload);
        state.err = payload;
    },
    [types.CHANGE_SELECT_KEY](state, payload) {
        let index = state.search_key.indexOf(payload);
        if (index > -1) {
            state.search_key.splice(index, 1);
        } else {
            state.search_key.push(payload);
        }
    },
    // 获取所有分类
    [types.GET_PRODUCTSCLASS_SUCCESS](state, payload) {
        state.productClass = payload;
    },
    [types.GET_PRODUCTSCLASS_FAILED](state, payload) {
        state.err = payload;
    },

    [types.GET_ALL_BRANDS_FAILED](state, payload) {
        state.err = payload;

    },
    // 获取所有品牌
    [types.GET_ALL_BRANDS_SUCCESS](state, payload) {
        state.brandList = payload;
    },
    // 获取用户输入的品牌
    [types.GET_BRANDS_BY_USER](state, payload) {
        state.brand.push(payload);
    },
    // 获取用户输入的 三级分类
    [types.GET_CATEGORY_BY_USER](state, payload) {
        state.class3 = payload;
    },
    [types.GET_TEXT_BY_USER](state, payload) {
        state.text = payload;
    }

}


export default {
    getters,
    state,
    actions,
    mutations
}